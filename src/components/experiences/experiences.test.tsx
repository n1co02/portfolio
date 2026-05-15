import { render } from '@testing-library/react'
import Experiences from './experiences'
import ActiveSectionContextProvider from '@/context/activeSectionContext'
import ThemeContextProvider from '@/context/themeContext'

describe('Experiences', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Experiences />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>,
    )

    expect(container).toMatchSnapshot()
  })
})