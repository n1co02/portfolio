import { render } from '@testing-library/react'
import About from './about'
import ActiveSectionContextProvider from '@/context/activeSectionContext'
import ThemeContextProvider from '@/context/themeContext'

describe('About', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <About />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>,
    )

    expect(container).toMatchSnapshot()
  })
})