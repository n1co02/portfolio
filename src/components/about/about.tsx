'use client'
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../sectionHandler/sectionHeading/sectionHeading'
import * as aboutStyles from './aboutStyles'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About', 0.5)

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
        I&apos;m a mobile software developer from Germany with a strong focus on{' '}
        <span className={aboutStyles.spanFontMediumStyle}>
          React Native, TypeScript and Swift
        </span>
        . I completed my B.Sc. in Computer Science (Software Engineering) at
        Aalen University and currently work at{' '}
        <span className={aboutStyles.spanFontMediumStyle}>BARMER</span>,
        contributing to one of Germany&apos;s largest healthcare applications.
      </p>

      <p className={aboutStyles.paragraphStyle}>
        My work includes developing and maintaining cross-platform mobile
        features, integrating native iOS components with Swift, creating
        automated tests with{' '}
        <span className={aboutStyles.spanFontMediumStyle}>Jest and Pytest</span>
        , and analyzing application crashes and incidents using{' '}
        <span className={aboutStyles.spanFontMediumStyle}>Sentry</span>.
        I&apos;m also involved in dependency management, software updates and
        security-related topics within modern mobile applications.
      </p>

      <p className={aboutStyles.paragraphStyle}>
        Before joining BARMER, I worked as a full-stack developer at{' '}
        <span className={aboutStyles.spanFontMediumStyle}>Heitec AG</span>,
        where I contributed to internal web applications and backend systems. My
        bachelor thesis focused on building an{' '}
        <span className={aboutStyles.spanFontMediumStyle}>
          OpenAPI-based Angular code generator
        </span>{' '}
        to optimize development workflows.
      </p>

      <p className={aboutStyles.paragraphStyle}>
        I enjoy working on{' '}
        <span className={aboutStyles.spanItalicStyle}>
          scalable architectures, developer tooling and clean user experiences
        </span>
        . Beyond mobile development, I&apos;m interested in software
        architecture, AI-assisted development workflows, security engineering
        and modern frontend ecosystems.
      </p>

      <p className={aboutStyles.paragraphStyle}>
        Outside of programming, I enjoy sports, traveling and learning
        languages. I currently speak{' '}
        <span className={aboutStyles.spanFontMediumStyle}>
          German, English and Spanish
        </span>{' '}
        and continuously work on improving my language skills and technical
        expertise.
      </p>
    </motion.section>
  )
}
