import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import youTubeImg from '@/public/yt.png'
import webSockets from '@/public/webSockets.png'
import profile from '@/public/profile.png'
import marvel from '@/public/marvel.png'
import videoImg from '@/public/video.png'
import bpsImg from '@/public/bps.png'
import analyticsImg from '@/public/analytics.png'

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
    title: 'QA Engineer',
    location: 'Estonia',
    description:
      'Ensured overall project quality by conducting thorough testing and validation. Designed and executed checklists to verify functionality, performance, and UI consistency',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'QA and Data Analyst',
    location: 'USA',
    description:
      'Developed and executed comprehensive test cases to ensure the quality and functionality of web and mobile applications. Analyzed and interpreted data to identify trends and patterns, and provided insights to improve business processes.',
    icon: React.createElement(CgWorkAlt),
    date: '2023',
  },
  {
    title: 'Front-End Web Developer',
    location: 'USA',
    description:
      'Developed and maintained responsive web applications using React, JavaScript, and TypeScript.Implemented reusable React components to optimize performance and maintainability.Integrated state management solutions such as Zustand for efficient application state handling.',
    icon: React.createElement(FaReact),
    date: '2023 - present',
  },
] as const

export const projectsData = [
  {
    title: 'You Tube Clone',
    description:
      'Practice project to clone the YouTube homepage. It has features like collapsible sidebar, responsive design, day and time formatting, using ResizeObserver for pills bar.',
    tags: ['React', 'TypeScript', 'JS', 'Tailwind', 'CSS Grid'],
    imageUrl: youTubeImg,
    link: 'https://youtube-clone-bay-three.vercel.app/',
  },
  {
    title: 'Web Sockets',
    description:
      'A chat app that uses web sockets to send messages in real-time. It has features like presets, message history, like/dislike of answer.',
    tags: ['React', 'TypeScript', 'JS', 'Mantine UI', 'Zustand', 'React Query'],
    imageUrl: webSockets,
    link: 'https://web-socets.vercel.app',
  },
  {
    title: 'Video generator',
    description:
      'A video generator that uses AI to generate videos and FFmpeg to join video and audio. It has features like authorization, video preview, download audio and video.',
    tags: ['React', 'TypeScript', 'JS', 'Mantine UI', 'Zustand', 'React Query'],
    imageUrl: videoImg,
    link: 'https://video.gromus.ai/',
  },
  {
    title: 'Best Part of Song',
    description:
      'A project that uses AI for slicing sounds on most useful parts for artists. It has features like play, download song part, pagination, infinity scroll and a detail page.',
    tags: ['React', 'TypeScript', 'JS', 'Mantine UI', 'Zustand', 'React Query'],
    imageUrl: bpsImg,
    link: 'https://bps.gromus.ai/',
  },
  {
    title: 'Gromus',
    description:
      'AI tool to be viral on TikTok. It has features like user authorization, tanStack table, tanStack query, internationalization, filters, useContext, state management Zustand.',
    tags: [
      'React',
      'TypeScript',
      'JS',
      'Mantine UI',
      'Zustand',
      'React Query',
      'React-i18next',
    ],
    imageUrl: analyticsImg,
    link: 'https://gromus.ai/',
  },
  {
    title: 'Profile',
    description:
      'This website is built with Next.js and Tailwind. It has a dark mode, is fully responsive and is used MDX markdown for dynamic content.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'MDX'],
    imageUrl: profile,
    link: 'https://profile-lyart-two-20.vercel.app/',
  },
  {
    title: 'Marvel',
    description:
      'A project to practice fetching data from an API. It has features like pagination, infinity scroll and a detail page.',
    tags: ['React', 'JS', 'SCSS'],
    imageUrl: marvel,
    link: 'https://marvel-nine-snowy.vercel.app/',
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Git',
  'Tailwind',
  'Shadcn',
  'Mantine',
  'Redux',
  'Zustand',
  'Tanstank Query',
  'Tanstank Table',
  'PostgreSQL',
  'Framer Motion',
] as const
