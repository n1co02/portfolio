import { render } from '@testing-library/react'
import Home from './page'
import ActiveSectionContextProvider from '@/context/activeSectionContext'
import ThemeContextProvider from '@/context/themeContext'

jest.mock('@/components/contact/contact', () => ({
  __esModule: true,
  default: () => <section data-testid='contact-mock' />,
}))

describe('Home', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Home />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>,
    )

    expect(container).toMatchSnapshot()
  })
})
