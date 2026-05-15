import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import RootPage from './page'

jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
}))

jest.mock('next/headers', () => ({
  headers: jest.fn(),
}))

const mockHeaders = headers as jest.MockedFunction<typeof headers>
const mockRedirect = redirect as jest.MockedFunction<typeof redirect>

function makeHeadersMap(entries: Record<string, string>) {
  return {
    get: (key: string) => entries[key] ?? null,
  } as unknown as Awaited<ReturnType<typeof headers>>
}

describe('RootPage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('redirects to /en when accept-language is missing', async () => {
    mockHeaders.mockResolvedValue(makeHeadersMap({}))
    await RootPage()
    expect(mockRedirect).toHaveBeenCalledWith('/en')
  })

  it('redirects to /de when accept-language contains de', async () => {
    mockHeaders.mockResolvedValue(makeHeadersMap({ 'accept-language': 'de-DE,de;q=0.9,en;q=0.8' }))
    await RootPage()
    expect(mockRedirect).toHaveBeenCalledWith('/de')
  })

  it('redirects to /es when accept-language contains es', async () => {
    mockHeaders.mockResolvedValue(makeHeadersMap({ 'accept-language': 'es-ES,es;q=0.9' }))
    await RootPage()
    expect(mockRedirect).toHaveBeenCalledWith('/es')
  })

  it('redirects to /en when accept-language contains unsupported locale', async () => {
    mockHeaders.mockResolvedValue(makeHeadersMap({ 'accept-language': 'fr-FR,fr;q=0.9' }))
    await RootPage()
    expect(mockRedirect).toHaveBeenCalledWith('/en')
  })
})