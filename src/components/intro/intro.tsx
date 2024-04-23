'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import * as introStyles from './introStyles' // Assuming introStyleintroStyles.tsx is in the same directory
import { useActiveSectionContext } from '@/context/activeSectionContext'
import { useSectionInView } from '@/lib/hooks'

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section ref={ref} id='home' className={introStyles.sectionStyle}>
      <div className={introStyles.imageContainerStyle}>
        <div className={introStyles.imageWrapperStyle}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src='/portrait.jpg'
              alt='Nicolas portrait'
              width={192}
              height={192}
              quality={100}
              priority={true}
              className={introStyles.imageStyles}
            />
          </motion.div>
          <motion.span
            className={introStyles.emojiSpanStyle}
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{
              type: 'tween',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className={introStyles.headingMotionH1Style}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className={introStyles.boldSpanStyle}>Hello, I'm Nicolas.</span>{' '}
        I'm a{' '}
        <span className={introStyles.boldSpanStyle}>full-stack developer</span>{' '}
        with <span className={introStyles.boldSpanStyle}>2 year</span> of
        experience. I enjoy building{' '}
        <span className={introStyles.italicSpanStyle}>sites & apps</span>. My
        focus is{' '}
        <span className={introStyles.underlineSpanStyle}>Web-dev (React)</span>.
      </motion.h1>
      <motion.div
        className={introStyles.buttonsMotionDivStyle}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href='#contact'
          className={introStyles.contactLinkStyle}
          onClick={() => {
            setActiveSection('Contact')
            setTimeOfLastClick(Date.now())
          }}
        >
          Contact me here{' '}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>
        <a className={introStyles.downloadCVLinkStyle} href='/CV.pdf' download>
          Download CV{' '}
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>
        <a
          className={introStyles.linkedinAnchorStyle}
          href='https://www.linkedin.com/in/nicolas-ostermann-3931701b6/'
          target='_blank'
        >
          <BsLinkedin />
        </a>
        <a
          className={introStyles.githubAnchorStyle}
          href='https://github.com/n1co02'
          target='_blank'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
