import { render } from '@testing-library/react'
import Impressum from './impressum'

describe('Impressum', () => {
  it('matches snapshot', () => {
    const { container } = render(<Impressum />)

    expect(container).toMatchSnapshot()
  })
})