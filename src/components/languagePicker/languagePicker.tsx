'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { activeButtonStyle, buttonStyle, dropdownStyle, wrapperStyle } from './languagePickerStyles'

const languages = [
  { code: 'en', label: '🇬🇧 EN' },
  { code: 'de', label: '🇩🇪 DE' },
  { code: 'es', label: '🇪🇸 ES' },
  { code: 'it', label: '🇮🇹 IT' },
  { code: 'tr', label: '🇹🇷 TR' },
]

export default function LanguagePicker() {
  const [isOpen, setIsOpen] = useState(false)
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const currentLanguage = languages.find((language) => language.code === locale) ?? languages[0]

  const changeLanguage = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale

    router.push(segments.join('/'), { scroll: false })
    setIsOpen(false)
  }

  return (
    <div className={wrapperStyle}>
      {!isOpen && (
        <button
          className={buttonStyle}
          onClick={() => setIsOpen(true)}
          aria-label='Change language'
        >
          {currentLanguage.label}
        </button>
      )}
      {isOpen && (
        <div className={dropdownStyle}>
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`${buttonStyle} ${locale === language.code ? activeButtonStyle : ''}`}
            >
              {language.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
