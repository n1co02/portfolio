import { render, screen, fireEvent } from '@testing-library/react'
import ThemeSwitch from './themeSwitch'
import ThemeContextProvider from '@/context/themeContext'

beforeEach(() => {
  localStorage.clear()
  document.documentElement.classList.remove('dark')
})

describe('ThemeSwitch', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <ThemeContextProvider>
        <ThemeSwitch />
      </ThemeContextProvider>,
    )

    expect(container).toMatchSnapshot()
  })

  it('renders a button', () => {
    render(
      <ThemeContextProvider>
        <ThemeSwitch />
      </ThemeContextProvider>,
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('toggles theme from light to dark on click', () => {
    render(
      <ThemeContextProvider>
        <ThemeSwitch />
      </ThemeContextProvider>,
    )

    fireEvent.click(screen.getByRole('button'))

    expect(localStorage.getItem('theme')).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('toggles theme from dark to light on click', () => {
    localStorage.setItem('theme', 'dark')

    render(
      <ThemeContextProvider>
        <ThemeSwitch />
      </ThemeContextProvider>,
    )

    fireEvent.click(screen.getByRole('button'))

    expect(localStorage.getItem('theme')).toBe('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})