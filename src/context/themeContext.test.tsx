import { renderHook, act } from '@testing-library/react'
import ThemeContextProvider, { useTheme } from './themeContext'

describe('ThemeContextProvider', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('defaults to light theme when no preference is stored', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeContextProvider,
    })

    expect(result.current.theme).toBe('light')
  })

  it('reads stored light theme from localStorage', () => {
    localStorage.setItem('theme', 'light')

    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeContextProvider,
    })

    expect(result.current.theme).toBe('light')
  })

  it('reads stored dark theme from localStorage', () => {
    localStorage.setItem('theme', 'dark')

    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeContextProvider,
    })

    expect(result.current.theme).toBe('dark')
  })

  it('toggles from light to dark', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeContextProvider,
    })

    act(() => {
      result.current.toggleTheme()
    })

    expect(result.current.theme).toBe('dark')
  })

  it('toggles from dark back to light', () => {
    localStorage.setItem('theme', 'dark')

    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeContextProvider,
    })

    act(() => {
      result.current.toggleTheme()
    })

    expect(result.current.theme).toBe('light')
  })

  it('adds dark class to document.documentElement when theme is dark', () => {
    localStorage.setItem('theme', 'dark')

    renderHook(() => useTheme(), { wrapper: ThemeContextProvider })

    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('removes dark class from document.documentElement when theme is light', () => {
    document.documentElement.classList.add('dark')

    renderHook(() => useTheme(), { wrapper: ThemeContextProvider })

    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('persists toggled theme to localStorage', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeContextProvider,
    })

    act(() => {
      result.current.toggleTheme()
    })

    expect(localStorage.getItem('theme')).toBe('dark')
  })
})

describe('useTheme', () => {
  it('throws when used outside of ThemeContextProvider', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    expect(() => renderHook(() => useTheme())).toThrow(
      'useTheme must be used within a ThemeContextProvider',
    )

    consoleSpy.mockRestore()
  })
})