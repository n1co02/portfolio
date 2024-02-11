'use client'

import { useTheme } from '@/context/themeContext'
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { buttonStyle } from './themeSwitchStyles'
export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button className={buttonStyle} onClick={toggleTheme}>
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  )
}
