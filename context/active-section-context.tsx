'use client'

import { SectionName } from '@/lib/types'
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react'

type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({
  children,
}: PropsWithChildren) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  const [timeOfLastClick, setTimeOfLastClick] = useState(0) // we need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext)
  if (context === null) {
    throw new Error(
      'ActiveSectionContext must be used within ActiveSectionContextProvider'
    )
  }
  return context
}
