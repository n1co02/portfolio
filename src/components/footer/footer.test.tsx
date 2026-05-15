import { render } from '@testing-library/react'
import Footer from './footer'

describe('Footer', () => {
  it('matches snapshot', () => {
    const { container } = render(<Footer />)

    expect(container).toMatchSnapshot()
  })
})