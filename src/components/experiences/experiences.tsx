'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import SectionHeading from '../sectionHandler/sectionHeading/sectionHeading'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '@/lib/data'
import { useTheme } from '@/context/themeContext'
import * as experiencesStyles from './experiencesStyles'
import { useSectionInView } from '@/lib/hooks'

function ExperiencesComponent() {
  const { ref, inView } = useSectionInView('Experience', 0.5)
  const { theme } = useTheme()

  return (
    <section
      id='experience'
      ref={ref}
      className={experiencesStyles.sectionStyle}
    >
      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline lineColor=''>
        {experiencesData.map((item) => (
          <VerticalTimelineElement
            key={item.title}
            visible={inView}
            contentStyle={{
              background:
                theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
              boxShadow: 'none',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              textAlign: 'left',
              padding: '1.3rem 2rem',
            }}
            contentArrowStyle={{
              borderRight:
                theme === 'light'
                  ? '0.4rem solid #9ca3af'
                  : '0.4rem solid rgba(255, 255, 255, 0.5)',
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background:
                theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
              color: '1.5rem',
            }}
          >
            <h3 className={experiencesStyles.h3Style}>{item.title}</h3>

            <p className={experiencesStyles.itemLocation}>{item.location}</p>

            <p className={experiencesStyles.itemDescription}>
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  )
}

const Experiences = dynamic(() => Promise.resolve(ExperiencesComponent), {
  ssr: false,
})

export default Experiences
