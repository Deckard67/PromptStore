export const mockUser = {
  name: 'Ana García',
  email: 'ana@promptstore.app',
};

export type PromptItem = {
  id: string;
  user_id?: string;
  title: string;
  description: string;
  content: string;
  category: string;
  favorite: boolean;
  public: boolean;
  slug: string;
  created_at?: string;
  updated_at?: string;
};
