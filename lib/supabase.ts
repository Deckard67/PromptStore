import { createClient } from '@supabase/supabase-js'

const getEnv = (key: string) => {
  // Prefer import.meta.env for Vite/browser runtime. For NEXT_PUBLIC_* the values
  // will be exposed to the client via import.meta.env when using Vite or when
  // built for production some bundlers may map NEXT_PUBLIC_* to import.meta.env.
  // Avoid accessing process.env directly in the browser.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return import.meta?.env?.[key]
}

const SUPABASE_URL = getEnv('VITE_SUPABASE_URL') || getEnv('NEXT_PUBLIC_SUPABASE_URL') || (import.meta as any).env?.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = getEnv('VITE_SUPABASE_ANON_KEY') || getEnv('NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY') || getEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY') || (import.meta as any).env?.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Missing Supabase environment variables. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (or NEXT_PUBLIC_ variants).')
}

export const supabase = createClient(String(SUPABASE_URL), String(SUPABASE_ANON_KEY))

export default supabase
