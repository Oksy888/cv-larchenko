'use client'

import React, {
  createContext,
  PropsWithChildren,
  use,
  useEffect,
  useState,
} from 'react'

type Theme = 'light' | 'dark'

type ThemeType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeType | null>(null)

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>('light')
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null
    if (localTheme) {
      setTheme(localTheme)
      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark')
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
}

export function useTheme() {
  const context = use(ThemeContext)

  if (context === null) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return context
}
