import { render } from '@testing-library/react'
import SubmitBtn from './submitBtn'

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormStatus: () => ({
    pending: false,
  }),
}))

describe('SubmitBtn', () => {
  it('matches snapshot', () => {
    const { container } = render(<SubmitBtn />)

    expect(container).toMatchSnapshot()
  })
})
