'use client'
import React from 'react'
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

export default function Experiences() {
  const { ref, inView } = useSectionInView('Experience')
  const { theme } = useTheme()

  return (
    <section
      id='experience'
      ref={ref}
      className={experiencesStyles.sectionStyle}
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
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
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}
