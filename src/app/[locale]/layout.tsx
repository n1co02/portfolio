import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import Header from '@/components/header/header'
import ActiveSectionContextProvider from '@/context/activeSectionContext'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer/footer'
import ThemeSwitch from '@/components/themeSwitch/themeSwitch'
import ThemeContextProvider from '@/context/themeContext'
import { locales, Locale } from '../../../i18n/config'

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const messages = (await import(`../../messages/${locale}.json`)).default

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
          <ThemeSwitch />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </NextIntlClientProvider>
  )
}
