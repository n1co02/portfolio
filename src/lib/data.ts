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
    title: 'DigiBrain',
    description:
      'A React website for group Brainstorming. It included a login System, CRUD operations, live updates and the GPT API. I was part of the backend team with Express.js',
    tags: ['Node.js', 'Express', 'Typescript', 'MongoDB', 'SQLite', 'Prisma'],
    imageUrl: digiBrain,
    link: 'https://github.com/n1co02/digi_brain',
  },
  {
    title: 'Quote',
    description:
      'A Next.js website for a friend to move on from a word document. It includes CRUD operations, a login system, a responsive design, darkmode and live updates. Deployed on Vercel.',
    tags: ['Next.js', 'React', 'Typescript', 'Tailwind', 'Redux', 'Firebase'],
    imageUrl: quotes,
    link: 'quote-kappa.vercel.app',
  },
  {
    title: 'E-Learning Project',
    description:
      'A React Native mobile app for E-learning. It included a single learning mode, for english (vocabularies) and a virtual classroom multiple people, learning in realtime.',
    tags: ['React Native', 'Expo', 'Typescript', 'Firebase'],
    imageUrl: eLearningApp,
    link: 'https://github.com/n1co02/projektarbeit',
  },
  {
    title: 'Graveyard Shooter',
    description:
      'We worked as a group to create a dynamic singleplayer VR shooter game in university. We included animations, movement, shooting and a scoring system. ',
    tags: ['Unity', 'C#', 'Blender', 'VR'],
    imageUrl: vrGameImg,
    link: 'https://github.com/n1co02/Virtual_Reality',
  },
  {
    title: 'AR-Race Car',
    description:
      'A Unity AR mobile app with 2 modes. One mode used the camera of the car and received a stream with tcp, the other one included AR features. I worked on the mobile part. The embedded part was done with python',
    tags: ['Unity', 'C#', 'AR', 'TCP'],
    imageUrl: arRaceCar,
    link: 'https://github.com/n1co02/AR_Race_Car',
  },
  {
    title: 'Aelianas Journey',
    description:
      'We worked as a group to create a unity 2D jump and run game called Aelianas Journey. A leaderboard was included, to have a competitive aspect.',
    tags: ['Unity', 'C#', 'Firebase', '2D'],
    imageUrl: aelianasJourney,
    link: 'https://github.com/n1co02/Aeliana-s-journey',
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Angular',
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
