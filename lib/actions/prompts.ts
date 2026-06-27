import {
  createPrompt,
  deletePrompt,
  fetchPromptById,
  fetchPromptBySlug,
  fetchPublicPromptBySlug,
  fetchPublicPrompts,
  fetchUserPrompts,
  PromptRecord,
  updatePrompt,
} from '../db/prompts'

export const getUserPrompts = async (userId: string) => fetchUserPrompts(userId)
export const getPromptById = async (id: string, userId: string) => fetchPromptById(id, userId)
export const getPromptBySlug = async (slug: string) => fetchPromptBySlug(slug)
export const getPublicPromptBySlug = async (slug: string) => fetchPublicPromptBySlug(slug)
export const getPublicPrompts = async () => fetchPublicPrompts()

export const addPrompt = async (payload: Omit<PromptRecord, 'id' | 'created_at' | 'updated_at'>) => createPrompt(payload)
export const editPrompt = async (id: string, payload: Partial<Omit<PromptRecord, 'id' | 'user_id' | 'created_at' | 'updated_at'>>) => updatePrompt(id, payload)
export const removePrompt = async (id: string) => deletePrompt(id)
