export const locales = ['de', 'en', 'es', 'it'] as const
export type Locale = (typeof locales)[number]
