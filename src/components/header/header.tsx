'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import * as headerStyles from './headerStyles'
import clsx from 'clsx'
import { useActiveSectionContext } from '@/context/activeSectionContext'

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()
  return (
    <header className='z-[999] relative'>
      <motion.div
        className={`${headerStyles.motionDivStyles.base} ${headerStyles.motionDivStyles.sm} ${headerStyles.motionDivStyles.dark}`}
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>
      <nav
        className={`${headerStyles.navStyles.base} ${headerStyles.navStyles.sm}`}
      >
        <ul
          className={`${headerStyles.ulStyles.base} ${headerStyles.ulStyles.sm}`}
        >
          {links.map((link) => (
            <motion.li
              className={headerStyles.motionLiStyles}
              key={link.hash}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                className={clsx(headerStyles.linkStyles.base, {
                  [headerStyles.linkStyles.active]: activeSection === link.name,
                })}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className={headerStyles.spanStyles}
                    layoutId='activeSection'
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
