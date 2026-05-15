import { render } from '@testing-library/react'
import ContactFormEmail from './contactFormEmail'

describe('ContactFormEmail', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <ContactFormEmail
        message='Hello, I would like to get in touch.'
        senderEmail='test@example.com'
      />,
    )

    expect(container).toMatchSnapshot()
  })
})