export const locales = ['de', 'en', 'es', 'it', 'tr'] as const
export type Locale = (typeof locales)[number]
