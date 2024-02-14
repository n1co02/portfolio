'use client'
import React, { useRef } from 'react'
import { projectsData } from '@/lib/data'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import * as projectStyles from './projectsStyle'
type ProjectProps = (typeof projectsData)[number]
export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className={projectStyles.motionDivStyle}
      onClick={() => window.open(link, '_blank')}
    >
      <section className={projectStyles.sectionStyle}>
        <div className={projectStyles.divStyle}>
          <h3 className={projectStyles.h3Style}>{title}</h3>
          <p className={projectStyles.pStyle}>{description}</p>
          <ul className={projectStyles.ulStyle}>
            {tags.map((tag, index) => (
              <li className={projectStyles.liStyle} key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className={projectStyles.imgStyle}
          src={imageUrl}
          alt={'Project I worked on'}
          quality={95}
        />
      </section>
    </motion.div>
  )
}
