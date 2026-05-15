export const locales = ['de', 'en', 'es'] as const
export type Locale = (typeof locales)[number]
