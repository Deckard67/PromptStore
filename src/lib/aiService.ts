import { supabase } from '../../lib/supabase'

export type ImprovePromptInput = {
  title: string
  description: string
  content: string
  category: string
}

export type ImprovePromptResult = {
  improvedContent: string
}

export const improvePromptWithAI = async (input: ImprovePromptInput): Promise<ImprovePromptResult> => {
  const { data: sessionData, error: sessionError } = await supabase.auth.getSession()

  if (sessionError || !sessionData.session?.access_token) {
    throw new Error('Necesitas iniciar sesión para mejorar prompts con IA.')
  }

  const { data, error } = await supabase.functions.invoke<ImprovePromptResult>('improve-prompt', {
    body: input,
    headers: {
      Authorization: `Bearer ${sessionData.session.access_token}`,
    },
  })

  if (error) {
    throw new Error(error.message || 'No se pudo mejorar el prompt.')
  }

  if (!data?.improvedContent) {
    throw new Error('La IA no devolvió una versión mejorada.')
  }

  return data
}
