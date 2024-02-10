'use client'
import React from 'react'
import SectionHeading from '../sectionHandler/sectionHeading/sectionHeading'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { useInView } from 'react-intersection-observer'
import * as experiencesStyles from './experiencesStyles'

export default function Experiences() {
  //custom hook doesnt work, still try to figure out why.
  //const { ref } = useSectionInView('Experience')
  const { ref, inView } = useInView({
    triggerOnce: true,
  })
  return (
    <section id='experience' ref={ref}>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={inView}
              contentStyle={{
                background: '#f3f4f6',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '04.rem solid #f3f4f6',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: 'white',
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
