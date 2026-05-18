import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LanguagePicker from './languagePicker'

const pushMock = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: pushMock,
  }),
  usePathname: () => '/en/projects',
}))

jest.mock('next-intl', () => ({
  useLocale: () => 'en',
}))

describe('LanguagePicker', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('matches snapshot', () => {
    const { container } = render(<LanguagePicker />)

    expect(container).toMatchSnapshot()
  })

  it('renders current language initially', () => {
    render(<LanguagePicker />)

    expect(screen.getByRole('button', { name: 'Change language' })).toHaveTextContent('🇬🇧 EN')
  })

  it('opens dropdown when clicking current language', async () => {
    const user = userEvent.setup()

    render(<LanguagePicker />)

    await user.click(screen.getByRole('button', { name: 'Change language' }))

    expect(screen.getByText('🇩🇪 DE')).toBeInTheDocument()
    expect(screen.getByText('🇪🇸 ES')).toBeInTheDocument()
    expect(screen.getByText('🇮🇹 IT')).toBeInTheDocument()
    expect(screen.getByText('🇹🇷 TR')).toBeInTheDocument()
  })

  it('changes language and updates route', async () => {
    const user = userEvent.setup()

    render(<LanguagePicker />)

    await user.click(screen.getByRole('button', { name: 'Change language' }))
    await user.click(screen.getByText('🇩🇪 DE'))

    expect(pushMock).toHaveBeenCalledWith('/de/projects', {
      scroll: false,
    })
  })

  it('closes dropdown after selecting a language', async () => {
    const user = userEvent.setup()

    render(<LanguagePicker />)

    await user.click(screen.getByRole('button', { name: 'Change language' }))
    await user.click(screen.getByText('🇪🇸 ES'))

    expect(screen.queryByText('🇹🇷 TR')).not.toBeInTheDocument()
  })
})
