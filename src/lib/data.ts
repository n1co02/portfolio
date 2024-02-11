import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { MdScience, MdWork } from 'react-icons/md'
import { LuGraduationCap } from 'react-icons/lu'
import corpcommentImg from '../../public/corpcomment.png'
import rmtdevImg from '../../public/rmtdev.png'
import wordanalyticsImg from '../../public/wordanalytics.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'Bachelorthesis',
    location: 'Crailsheim, Germany',
    description:
      'Right now, I am writing my Bachelorthesis in corporation with the Heitec AG. The title is "Optimization of the Development Workflow in Web Development through Code Generation and Open API"',
    icon: React.createElement(MdScience),
    date: 'March 2024 - June 2024',
  },
  {
    title: 'Working student as a Full-Stack Developer',
    location: 'Crailsheim, Germany',
    description:
      'After my Internship I worked as a Full-stack for the Heitec AG on internal products. My tech stack was Angular, Node.js (Express), Neo4J and Docker.',
    icon: React.createElement(CgWorkAlt),
    date: 'February 2023 - March 2024',
  },
  {
    title: 'Internship as a Web-Developer',
    location: 'Crailsheim, Germany',
    description:
      'I did an internship as a Web-developer at the Heitec AG. I worked on a project for Daimler-Truck. I was the back-end developer. It has features like filtering, sorting and CRUD. I used C#, .NET, SQL and Open API.',
    icon: React.createElement(MdWork),
    date: 'September2022 - January 2023',
  },
  {
    title: 'Enrolled in University',
    location: 'Aalen, Germany',
    description:
      'After finishing my matura, I enrolled in university to study computer science.',
    icon: React.createElement(LuGraduationCap),
    date: 'September 2020',
  },
] as const

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'Docker',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'SQL',
] as const
