'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { sectionDividerStyles } from './sectionDividerStyles'
export default function SectionDivider() {
  return (
    <motion.div
      className={sectionDividerStyles}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  )
}
