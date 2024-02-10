'use client'
import React from 'react'
import SectionHeading from '../sectionHandler/sectionHeading/sectionHeading'
import { projectsData } from '@/lib/data'
import Project from './projectClient'
import { useSectionInView } from '@/lib/hooks'
export default function projects() {
  const { ref } = useSectionInView('Projects', 0.5)

  return (
    <section ref={ref} id='projects' className=' scroll-mt-28'>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
