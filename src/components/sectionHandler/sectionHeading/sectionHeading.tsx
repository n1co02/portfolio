import React from 'react'
import { sectionHeadingStyles } from './sectionHeadingStyles'
type SectionHeadingProps = {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className={sectionHeadingStyles}>{children}</h2>
}
