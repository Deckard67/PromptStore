import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

type DashboardMetrics = {
  totalPrompts: number
  favoritePrompts: number
  publicPrompts: number
  aiUsageLast24h: number
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

const countPrompts = async (
  supabase: ReturnType<typeof createClient>,
  userId: string,
  filters: Record<string, boolean> = {},
) => {
  let query = supabase.from('prompts').select('id', { count: 'exact', head: true }).eq('user_id', userId)

  Object.entries(filters).forEach(([column, value]) => {
    query = query.eq(column, value)
  })

  const { count, error } = await query

  if (error) {
    throw error
  }

  return count ?? 0
}

const countAiUsageLast24h = async (supabase: ReturnType<typeof createClient>, userId: string) => {
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
  const { count, error } = await supabase
    .from('ai_usages')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', userId)
    .gte('created_at', since)

  if (error) {
    throw error
  }

  return count ?? 0
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'GET' && req.method !== 'POST') {
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

    const userId = userData.user.id
    const [totalPrompts, favoritePrompts, publicPrompts, aiUsageLast24h] = await Promise.all([
      countPrompts(supabase, userId),
      countPrompts(supabase, userId, { favorite: true }),
      countPrompts(supabase, userId, { public: true }),
      countAiUsageLast24h(supabase, userId),
    ])

    const metrics: DashboardMetrics = {
      totalPrompts,
      favoritePrompts,
      publicPrompts,
      aiUsageLast24h,
    }

    return jsonResponse(metrics)
  } catch (error) {
    console.error('dashboard-metrics error', error)
    return jsonResponse({ error: 'Could not load dashboard metrics' }, 500)
  }
})
