import { render } from '@testing-library/react'
import Datenschutz from './datenschutz'

describe('Datenschutz', () => {
  it('matches snapshot', () => {
    const { container } = render(<Datenschutz />)

    expect(container).toMatchSnapshot()
  })
})