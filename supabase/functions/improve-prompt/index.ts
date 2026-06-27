import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

type ImprovePromptRequest = {
  title?: string
  description?: string
  content?: string
  category?: string
}

type ImprovePromptResponse = {
  improvedContent: string
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const jsonResponse = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })

const getOpenAIKey = () =>
  Deno.env.get('OPENAI_API_KEY') ??
  Deno.env.get('OPENAI_APIKEY') ??
  Deno.env.get('OPENAL_APLKEY') ??
  Deno.env.get('OPENAL-APLKEY')

const extractText = (data: any) => {
  if (typeof data?.output_text === 'string') return data.output_text.trim()

  const text = data?.output
    ?.flatMap((item: any) => item?.content ?? [])
    ?.map((part: any) => part?.text)
    ?.filter(Boolean)
    ?.join('\n')

  return typeof text === 'string' ? text.trim() : ''
}

const improvePrompt = async ({ title, description, content, category }: ImprovePromptRequest): Promise<ImprovePromptResponse> => {
  const apiKey = getOpenAIKey()
  if (!apiKey) {
    throw new Error('Missing OpenAI API key')
  }

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4.1-mini',
      input: [
        {
          role: 'system',
          content:
            'Eres un especialista en diseño de prompts. Mejora el prompt del usuario para que sea claro, específico, accionable y reutilizable. Mantén el idioma original. Devuelve únicamente la versión mejorada, sin explicación ni formato markdown.',
        },
        {
          role: 'user',
          content: [
            `Titulo: ${title?.trim() || 'Sin titulo'}`,
            `Descripcion: ${description?.trim() || 'Sin descripcion'}`,
            `Categoria: ${category?.trim() || 'Sin categoria'}`,
            '',
            'Prompt original:',
            content?.trim(),
          ].join('\n'),
        },
      ],
      max_output_tokens: 900,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`OpenAI request failed: ${response.status} ${errorText}`)
  }

  const data = await response.json()
  const improvedContent = extractText(data)

  if (!improvedContent) {
    throw new Error('OpenAI returned an empty response')
  }

  return { improvedContent }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405)
  }

  try {
    const authHeader = req.headers.get('Authorization')
    const token = authHeader?.replace('Bearer ', '')

    if (!token) {
      return jsonResponse({ error: 'No active session' }, 401)
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? Deno.env.get('VITE_SUPABASE_URL')
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY') ?? Deno.env.get('VITE_SUPABASE_ANON_KEY')

    if (!supabaseUrl || !supabaseAnonKey) {
      return jsonResponse({ error: 'Missing Supabase environment variables' }, 500)
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    })

    const { data: userData, error: userError } = await supabase.auth.getUser(token)

    if (userError || !userData.user) {
      return jsonResponse({ error: 'Invalid session' }, 401)
    }

    const payload = (await req.json()) as ImprovePromptRequest
    const content = payload.content?.trim()

    if (!content) {
      return jsonResponse({ error: 'Prompt content is required' }, 400)
    }

    if (content.length > 8000) {
      return jsonResponse({ error: 'Prompt content is too long' }, 400)
    }

    const result = await improvePrompt({ ...payload, content })
    return jsonResponse(result)
  } catch (error) {
    console.error('improve-prompt error', error)
    return jsonResponse({ error: 'Could not improve prompt' }, 500)
  }
})
