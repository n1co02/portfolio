import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { locales } from '../../i18n/config'

export default async function RootPage() {
  const acceptLanguage = (await headers()).get('accept-language') ?? ''

  const locale =
    locales.find((locale) => acceptLanguage.toLowerCase().includes(locale)) ??
    'en'

  redirect(`/${locale}`)
}
