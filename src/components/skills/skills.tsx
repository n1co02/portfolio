'use client'
import React from 'react'
import SectionHeading from '../sectionHandler/sectionHeading/sectionHeading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import * as skillsStyles from './skillsStyles'
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export default function Skills() {
  const { ref } = useSectionInView('Skills')

  return (
    <section ref={ref} id='skills' className={skillsStyles.sectionStyles}>
      <SectionHeading>My Skills</SectionHeading>
      <ul className={skillsStyles.ulStyles}>
        {skillsData.map((skill, index) => (
          <motion.li
            className={skillsStyles.liStyles}
            key={index}
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
