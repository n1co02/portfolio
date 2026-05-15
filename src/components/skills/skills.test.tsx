import { render } from '@testing-library/react'
import Skills from './skills'
import ActiveSectionContextProvider from '@/context/activeSectionContext'
import ThemeContextProvider from '@/context/themeContext'

describe('Skills', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Skills />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>,
    )

    expect(container).toMatchSnapshot()
  })
})