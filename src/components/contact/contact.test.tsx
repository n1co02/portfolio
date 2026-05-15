import { render } from '@testing-library/react'
import Contact from './contact'
import ActiveSectionContextProvider from '@/context/activeSectionContext'
import ThemeContextProvider from '@/context/themeContext'

jest.mock('@/components/contact/contact', () => ({
  __esModule: true,
  default: () => <section data-testid='contact-mock' />,
}))

describe('Contact', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Contact />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>,
    )

    expect(container).toMatchSnapshot()
  })
})
