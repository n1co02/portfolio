import { render } from '@testing-library/react'
import Project from './projectClient'
import { projectsData } from '@/lib/data'

describe('Project', () => {
  it('matches snapshot', () => {
    const project = projectsData[0]
    const { container } = render(<Project {...project} />)

    expect(container).toMatchSnapshot()
  })
})