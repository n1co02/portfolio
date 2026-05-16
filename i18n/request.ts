import { getRequestConfig } from 'next-intl/server'
import type { Locale } from './config'
import { locales } from './config'

function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale)
}

export default getRequestConfig(async ({ locale, requestLocale }) => {
  const requestedLocale = locale ?? (await requestLocale)
  const safeLocale: Locale = isLocale(requestedLocale) ? requestedLocale : 'en'

  return {
    locale: safeLocale,
    messages: (await import(`../src/messages/${safeLocale}.json`)).default,
  }
})
