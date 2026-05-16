import { render } from '@testing-library/react'
import Experiences from './experiences'
import ActiveSectionContextProvider from '@/context/activeSectionContext'
import ThemeContextProvider from '@/context/themeContext'

jest.mock('@/components/experiences/experiences', () => ({
  __esModule: true,
  default: () => <section data-testid='experiences-mock' />,
}))

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
