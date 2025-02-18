'use client'

import useSectionInView from '@/lib/hooks'
import { delay, motion } from 'framer-motion'
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
}

export default function Skills() {
  const { ref } = useSectionInView('Skills')
  return (
    <section
      id="skills"
      ref={ref}
      className="text-center max-w-[53rem] scroll-mt-28"
    >
      <SectionHeading> My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
            key={skill}
            className="bg-white borderBlack rounded-xl py-3 px-5 dark:bg-white/10 dark:text-white/80"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
