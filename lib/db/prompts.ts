import { supabase } from '../supabase'

export type PromptRecord = {
  id: string
  user_id: string
  title: string
  description: string
  content: string
  category: string
  favorite: boolean
  public: boolean
  slug: string
  created_at: string
  updated_at: string
}

export const fetchUserPrompts = async (userId: string) => {
  const { data, error } = await supabase.from('prompts').select('*').eq('user_id', userId).order('updated_at', { ascending: false })

  if (error) throw error
  return (data ?? []) as PromptRecord[]
}

export const fetchPromptById = async (id: string, userId: string) => {
  const { data, error } = await supabase.from('prompts').select('*').eq('id', id).eq('user_id', userId).maybeSingle()

  if (error) throw error
  return data as PromptRecord | null
}

export const fetchPromptBySlug = async (slug: string) => {
  const { data, error } = await supabase.from('prompts').select('*').eq('slug', slug).maybeSingle()

  if (error) throw error
  return data as PromptRecord | null
}

export const fetchPublicPromptBySlug = async (slug: string) => {
  const { data, error } = await supabase.from('prompts').select('*').eq('slug', slug).eq('public', true).maybeSingle()

  if (error) throw error
  return data as PromptRecord | null
}

export const fetchPublicPrompts = async () => {
  const { data, error } = await supabase.from('prompts').select('*').eq('public', true).order('updated_at', { ascending: false })

  if (error) throw error
  return (data ?? []) as PromptRecord[]
}

export const createPrompt = async (payload: Omit<PromptRecord, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase.from('prompts').insert([payload]).select().single()

  if (error) throw error
  return data as PromptRecord
}

export const updatePrompt = async (
  id: string,
  payload: Partial<Omit<PromptRecord, 'id' | 'user_id' | 'created_at' | 'updated_at'>>,
  userId?: string,
) => {
  let query = supabase.from('prompts').update(payload).eq('id', id)

  if (userId) {
    query = query.eq('user_id', userId)
  }

  const { data, error } = await query.select().single()

  if (error) throw error
  return data as PromptRecord
}

export const deletePrompt = async (id: string, userId?: string) => {
  let query = supabase.from('prompts').delete().eq('id', id)

  if (userId) {
    query = query.eq('user_id', userId)
  }

  const { error } = await query

  if (error) throw error
}
