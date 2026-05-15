import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'de', 'es'],
  defaultLocale: 'en',
  localePrefix: 'always',
  localeDetection: true,
})

export const config = {
  matcher: ['/', '/(de|en|es)/:path*'],
}
