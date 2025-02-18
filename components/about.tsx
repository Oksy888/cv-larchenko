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
        My journey into web development began at university, where we developed
        a CRM for a business (php ui + postgreSql db). After earning my degree
        in <span className="font-medium">Econimic cybernetics</span>, I decided
        to follow my passion for programming. I attended a coding bootcamp and
        learned <span className="font-medium">full-stack web development</span>.{' '}
        <span className="italic">What I enjoy most about programming</span> is
        solving problems. I <span className="underline">love</span> the
        satisfaction of finding solutions. My core stack includes{' '}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also proficient in TypeScript and Prisma. I am always eager to
        learn new technologies and am currently seeking a{' '}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{' '}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{' '}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  )
}
