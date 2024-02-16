'use client'
import React, { useState } from 'react'
import * as footerStyles from './footerStyle'
import Impressum from '@/legal/impressum' // Make sure this path matches the actual file location and name
import Datenschutz from '@/legal/datenschutz'

export default function Footer() {
  const [showImpressum, setShowImpressum] = useState(false)
  const [showDatenSchutz, setShowDatenSchutz] = useState(false)

  const handleImpressumClick = () => {
    setShowDatenSchutz(false)
    setShowImpressum(!showImpressum)
  }
  const handleDatenSchutzClick = () => {
    setShowImpressum(false)
    setShowDatenSchutz(!showDatenSchutz)
  }
  return (
    <footer className={footerStyles.footerStyle}>
      <p>
        <span className='underline' onClick={handleImpressumClick}>
          Impressum
        </span>{' '}
        <span className='underline' onClick={handleDatenSchutzClick}>
          Datenschutzerklärung
        </span>
      </p>
      {!showImpressum && !showDatenSchutz && (
        <>
          {' '}
          <small className={footerStyles.smallStyle}>
            &copy; {new Date().getFullYear()} Nicolas Ostermann. All rights
            reserved.
          </small>
          <p className={footerStyles.pStyle}>
            <span className={footerStyles.spanStyle}>About this Website:</span>{' '}
            built with React & Next.js (App Router & Server Actions),
            TypeScript, Tailwind CSS, Framer Motion, React Email & Resend,
            hosted on Vercel
          </p>
        </>
      )}
      {!!showImpressum && <Impressum />}
      {!!showDatenSchutz && <Datenschutz />}
    </footer>
  )
}
