import { PromptRecord } from '../../lib/db/prompts'
import { getPromptById, getPromptBySlug, getPublicPromptBySlug, getUserPrompts, addPrompt, editPrompt, removePrompt } from '../../lib/actions/prompts'

export type PromptItem = {
  id: string
  user_id?: string
  title: string
  description: string
  content: string
  category: string
  favorite: boolean
  public: boolean
  slug: string
  created_at?: string
  updated_at?: string
}

export const mapPromptRecord = (record: PromptRecord): PromptItem => ({
  id: record.id,
  user_id: record.user_id,
  title: record.title,
  description: record.description,
  content: record.content,
  category: record.category,
  favorite: record.favorite,
  public: record.public,
  slug: record.slug,
  created_at: record.created_at,
  updated_at: record.updated_at,
})

export const generateSlug = (title: string) =>
  title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const generateUniqueSlug = async (title: string) => {
  let baseSlug = generateSlug(title)
  let suffix = 0
  let slug = baseSlug

  while (true) {
    const existing = await getPromptBySlug(slug)
    if (!existing) return slug
    suffix += 1
    slug = `${baseSlug}-${suffix}`
  }
}

export { getUserPrompts, getPromptById, getPublicPromptBySlug, addPrompt, editPrompt, removePrompt }
