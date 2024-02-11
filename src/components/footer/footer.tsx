import React from 'react'
import * as footerStyles from './footerStyle'
export default function Footer() {
  return (
    <footer className={footerStyles.footerStyle}>
      <small className={footerStyles.smallStyle}>
        &copy; {new Date().getFullYear()} Nicolas Ostermann. All rights
        reserved.
      </small>
      <p className={footerStyles.pStyle}>
        <span className={footerStyles.spanStyle}>About this Website:</span>{' '}
        built with React & Next.js (App Router & Server Actions), TypeScript,
        Tailwind CSS, Framer Motion, React Email & Resend, hosted on Vercel
      </p>
    </footer>
  )
}
