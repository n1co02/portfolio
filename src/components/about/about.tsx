'use client'
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../sectionHandler/sectionHeading/sectionHeading'
import * as aboutStyles from './aboutStyles'
import { useSectionInView } from '@/lib/hooks'
import { useTranslations } from 'next-intl'

export default function About() {
  const { ref } = useSectionInView('About', 0.5)
  const t = useTranslations('about')

  return (
    <motion.section
      ref={ref}
      className={aboutStyles.sectionStyle}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>{t('title')}</SectionHeading>
      <p className={aboutStyles.paragraphStyle}>{t('paragraph1')}</p>
      <p className={aboutStyles.paragraphStyle}>{t('paragraph2')}</p>
      <p className={aboutStyles.paragraphStyle}>{t('paragraph3')}</p>
      <p className={aboutStyles.paragraphStyle}>{t('paragraph4')}</p>
      <p className={aboutStyles.paragraphStyle}>{t('paragraph5')}</p>
    </motion.section>
  )
}
