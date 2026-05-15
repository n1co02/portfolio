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
    titleKey: 'barmer.title',
    locationKey: 'barmer.location',
    descriptionKey: 'barmer.description',
    icon: React.createElement(CgWorkAlt),
    date: 'August 2024 - Present',
  },
  {
    titleKey: 'bachelorThesis.title',
    locationKey: 'bachelorThesis.location',
    descriptionKey: 'bachelorThesis.description',
    icon: React.createElement(MdScience),
    date: 'March 2024 - June 2024',
  },
  {
    titleKey: 'workingStudent.title',
    locationKey: 'workingStudent.location',
    descriptionKey: 'workingStudent.description',
    icon: React.createElement(CgWorkAlt),
    date: 'February 2023 - March 2024',
  },
  {
    titleKey: 'internship.title',
    locationKey: 'internship.location',
    descriptionKey: 'internship.description',
    icon: React.createElement(MdWork),
    date: 'September 2022 - January 2023',
  },
  {
    titleKey: 'university.title',
    locationKey: 'university.location',
    descriptionKey: 'university.description',
    icon: React.createElement(LuGraduationCap),
    date: 'September 2020 - June 2024',
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
