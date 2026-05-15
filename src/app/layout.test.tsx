import { render } from '@testing-library/react'
import RootLayout, { metadata } from './layout'

describe('RootLayout', () => {
  it('renders children inside html and body', () => {
    const { getByText } = render(
      <RootLayout>
        <div>test content</div>
      </RootLayout>,
    )
    expect(getByText('test content')).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { container } = render(
      <RootLayout>
        <div>child</div>
      </RootLayout>,
    )
    expect(container).toMatchSnapshot()
  })
})

describe('metadata', () => {
  it('has correct title', () => {
    expect(metadata.title).toBe('Nicolas Ostermann | Mobile Software Developer')
  })

  it('has correct description', () => {
    expect(metadata.description).toContain('Nicolas Ostermann')
  })

  it('has openGraph configured', () => {
    expect(metadata.openGraph).toBeDefined()
    expect(metadata.openGraph?.type).toBe('website')
  })
})