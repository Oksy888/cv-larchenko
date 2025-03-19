'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import useSectionInView from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      className=" max-w-[45rem] text-center leading-8  scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I began my career in Quality Assurance before transitioning into
        front-end development. I advanced my skills by studying{' '}
        <span className="font-medium">JavaScript and TypeScript</span>,
        specializing in the React library. For the past two years, I have been
        working as a Front-End Developer at Gromus AI, contributing to the
        development of web applications. I am highly motivated, committed to
        continuous learning, and eager to enhance my expertise in front-end
        development. My core stack includes{' '}
        <span className="font-medium">React, Next.js</span>. I am also have
        skills in <span className="font-medium">TypeScript and Prisma.</span> I
        am always eager to learn new technologies and am currently seeking a{' '}
        <span className="font-medium">full-time position</span> as a React/
        Next.js front-end developer.
      </p>
    </motion.section>
  )
}
