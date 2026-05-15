'use client'

import { useTheme } from '@/context/themeContext'
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { buttonStyle } from './themeSwitchStyles'

import dynamic from 'next/dynamic'

function ThemeSwitchComponent() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button className={buttonStyle} onClick={toggleTheme}>
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  )
}

const ThemeSwitch = dynamic(() => Promise.resolve(ThemeSwitchComponent), {
  ssr: false,
})

export default ThemeSwitch
