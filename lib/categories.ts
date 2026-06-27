export const categories = ['Marketing', 'Ventas', 'Productividad', 'Creatividad'] as const;
export type Category = (typeof categories)[number];
