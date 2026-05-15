import createMiddleware from 'next-intl/middleware'
import { locales } from './i18n/config'

export default createMiddleware({
  locales: locales,
  defaultLocale: 'en',
  localePrefix: 'always',
  localeDetection: true,
})

export const config = {
  matcher: ['/', '/(de|en|es)/:path*'],
}
