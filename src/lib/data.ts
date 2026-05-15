import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { MdScience, MdWork } from 'react-icons/md'
import { LuGraduationCap } from 'react-icons/lu'
import vrGameImg from '../../public/vr-game.png'
import aelianasJourney from '../../public/aelianasJourney.png'
import arRaceCar from '../../public/arRaceCar.png'
import quotes from '../../public/quotes.png'
import digiBrain from '../../public/digiBrain.png'
import eLearningApp from '../../public/softwareProject.jpg'
import codegenerator from '../../public/codegenerator.png'

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
    titleKey: 'digiBrain.title',
    descriptionKey: 'digiBrain.description',
    tags: ['Node.js', 'Express', 'Typescript', 'MongoDB', 'SQLite', 'Prisma'],
    imageUrl: digiBrain,
    link: 'https://github.com/n1co02/digi_brain',
  },
  {
    titleKey: 'quote.title',
    descriptionKey: 'quote.description',
    tags: ['Next.js', 'React', 'Typescript', 'Tailwind', 'Redux', 'Firebase'],
    imageUrl: quotes,
    link: 'https://quote-kappa.vercel.app/',
  },
  {
    titleKey: 'eLearning.title',
    descriptionKey: 'eLearning.description',
    tags: ['React Native', 'Expo', 'Typescript', 'Firebase'],
    imageUrl: eLearningApp,
    link: 'https://github.com/n1co02/projektarbeit',
  },
  {
    titleKey: 'graveyardShooter.title',
    descriptionKey: 'graveyardShooter.description',
    tags: ['Unity', 'C#', 'Blender', 'VR'],
    imageUrl: vrGameImg,
    link: 'https://github.com/n1co02/Virtual_Reality',
  },
  {
    titleKey: 'arRaceCar.title',
    descriptionKey: 'arRaceCar.description',
    tags: ['Unity', 'C#', 'AR', 'TCP'],
    imageUrl: arRaceCar,
    link: 'https://github.com/n1co02/AR_Race_Car',
  },
  {
    titleKey: 'aelianasJourney.title',
    descriptionKey: 'aelianasJourney.description',
    tags: ['Unity', 'C#', 'Firebase', '2D'],
    imageUrl: aelianasJourney,
    link: 'https://github.com/n1co02/Aeliana-s-journey',
  },
  {
    titleKey: 'codeGenerator.title',
    descriptionKey: 'codeGenerator.description',
    tags: ['TypeScript', 'Angular', 'Node.js', 'OpenAPI'],
    imageUrl: codegenerator,
    link: 'https://github.com/n1co02/code_generation_angular',
  },
] as const
export const skillsData = [
  'React Native',
  'TypeScript',
  'Swift',
  'SwiftUI',
  'React',
  'Next.js',
  'Angular',
  'Node.js',
  'Express.js',
  'REST APIs',
  'Firebase',
  'MongoDB',
  'SQL',
  'Neo4j',
  'Prisma',
  'Docker',
  'Git',
  'Sentry',
  'Jest',
  'Pytest',
  'Expo',
  'Xcode',
  'Tailwind CSS',
  'OpenAPI',
] as const
