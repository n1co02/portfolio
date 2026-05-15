import { render } from '@testing-library/react'
import { notFound } from 'next/navigation'
import LocaleLayout from './layout'

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}))

jest.mock('next-intl', () => ({
  NextIntlClientProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid='intl-provider'>{children}</div>
  ),
}))

jest.mock('@/components/header/header', () => ({
  __esModule: true,
  default: () => <nav data-testid='header-mock' />,
}))

jest.mock('@/components/footer/footer', () => ({
  __esModule: true,
  default: () => <footer data-testid='footer-mock' />,
}))

jest.mock('@/components/themeSwitch/themeSwitch', () => ({
  __esModule: true,
  default: () => <div data-testid='theme-switch-mock' />,
}))

jest.mock('react-hot-toast', () => ({
  Toaster: () => <div data-testid='toaster-mock' />,
}))

jest.mock('@/context/activeSectionContext', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid='active-section-ctx'>{children}</div>
  ),
}))

jest.mock('@/context/themeContext', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid='theme-ctx'>{children}</div>
  ),
}))

const mockNotFound = notFound as jest.MockedFunction<typeof notFound>

async function renderLocaleLayout(locale: string, children = <div>content</div>) {
  const ui = await LocaleLayout({ children, params: Promise.resolve({ locale }) })
  return render(ui)
}

describe('LocaleLayout', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders children for a valid locale', async () => {
    const { getByText } = await renderLocaleLayout('en')
    expect(getByText('content')).toBeInTheDocument()
  })

  it('renders header, footer and theme switch', async () => {
    const { getByTestId } = await renderLocaleLayout('en')
    expect(getByTestId('header-mock')).toBeInTheDocument()
    expect(getByTestId('footer-mock')).toBeInTheDocument()
    expect(getByTestId('theme-switch-mock')).toBeInTheDocument()
  })

  it('calls notFound for an invalid locale', async () => {
    mockNotFound.mockImplementation(() => { throw new Error('NOT_FOUND') })
    await expect(renderLocaleLayout('fr')).rejects.toThrow('NOT_FOUND')
    expect(mockNotFound).toHaveBeenCalled()
  })

  it.each(['en', 'de', 'es'])('renders without error for locale %s', async (locale) => {
    await expect(renderLocaleLayout(locale)).resolves.toBeDefined()
  })

  it('matches snapshot', async () => {
    const { container } = await renderLocaleLayout('en')
    expect(container).toMatchSnapshot()
  })
})