import { render } from '@testing-library/react'
import SectionDivider from './sectionDivider'

describe('SectionDivider', () => {
  it('matches snapshot', () => {
    const { container } = render(<SectionDivider />)

    expect(container).toMatchSnapshot()
  })
})