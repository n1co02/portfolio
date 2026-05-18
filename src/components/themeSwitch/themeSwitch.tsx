'use client'

import { useTheme } from '@/context/themeContext'
import { BsMoon, BsSun } from 'react-icons/bs'
import { buttonStyle } from './themeSwitchStyles'
import { useTranslations } from 'next-intl'

import dynamic from 'next/dynamic'

function ThemeSwitchComponent() {
  const { theme, toggleTheme } = useTheme()
  const t = useTranslations('themeSwitch')

  return (
    <button
      className={buttonStyle}
      onClick={toggleTheme}
      aria-label={theme === 'light' ? t('switchToDark') : t('switchToLight')}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  )
}

const ThemeSwitch = dynamic(() => Promise.resolve(ThemeSwitchComponent), {
  ssr: false,
})

export default ThemeSwitch
