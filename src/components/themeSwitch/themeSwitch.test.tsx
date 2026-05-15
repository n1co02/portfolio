import { render } from '@testing-library/react'
import ThemeSwitch from './themeSwitch'
import ThemeContextProvider from '@/context/themeContext'

describe('ThemeSwitch', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <ThemeContextProvider>
        <ThemeSwitch />
      </ThemeContextProvider>,
    )

    expect(container).toMatchSnapshot()
  })
})