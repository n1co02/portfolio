'use client'
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../sectionHandler/sectionHeading/sectionHeading'
import * as aboutStyles from './aboutStyles'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      className={aboutStyles.sectionStyle}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className={aboutStyles.paragraphStyle}>
        After enrolling at Aalen University, I embarked on a journey to deepen
        my knowledge in computer science, with an anticipated graduation in
        summer 2024.
      </p>

      <p className={aboutStyles.paragraphStyle}>
        Currently, I'm a working student as a full-stack developer at Heitec AG.
        My tech stack includes{' '}
        <span className={aboutStyles.spanFontMediumStyle}>
          Angular, Express.js{' '}
        </span>
        and <span className={aboutStyles.spanFontMediumStyle}>Neo4J </span>
        to build full-stack web-applications.{' '}
      </p>
      <p className={aboutStyles.paragraphStyle}>
        <span className={aboutStyles.spanItalicStyle}>
          My favorite part of programming
        </span>{' '}
        remains the problem-solving aspect, where I thrive on the challenges and
        satisfaction that come with finding effective solutions.
      </p>
      <p className={aboutStyles.paragraphStyle}>
        Outside of my work at Heitec AG, I explore different technologies
        through personal or University projects. Privately, I prefer using{' '}
        <span className={aboutStyles.spanFontMediumStyle}>
          React/Next.js, Node.js and Firebase
        </span>
        . This diverse exposure allows me to stay adaptable and continuously
        expand my skill set. I'm also familiar with{' '}
        <span className={aboutStyles.spanFontMediumStyle}>
          TypeScript, Prisma, SQL
        </span>{' '}
        and <span className={aboutStyles.spanFontMediumStyle}>MongoDB</span>,
        keeping me well-versed in both front-end and back-end development
        paradigms.
      </p>

      <p className={aboutStyles.paragraphStyle}>
        As I progress in my career and studies, I remain open to learning new
        technologies and methodologies that can enhance my capabilities as a
        software developer. My goal is to leverage my diverse skill set in a{' '}
        <span className={aboutStyles.spanFontMediumStyle}>
          full-time position
        </span>{' '}
        as a Software-developer.
      </p>

      <p className={aboutStyles.paragraphStyle}>
        <span className={aboutStyles.spanItalicStyle}>When I'm not coding</span>
        , I enjoy doing sport, watching movies or spend time with my friends. I
        also enjoy{' '}
        <span className={aboutStyles.spanFontMediumStyle}>
          learning new things
        </span>
        . I am currently learning{' '}
        <span className={aboutStyles.spanFontMediumStyle}>spanish.</span>
      </p>
    </motion.section>
  )
}
