import { render } from '@testing-library/react'
import SectionHeading from './sectionHeading'

describe('SectionHeading', () => {
  it('matches snapshot', () => {
    const { container } = render(<SectionHeading>Test Heading</SectionHeading>)

    expect(container).toMatchSnapshot()
  })
})