import React, { createContext, useContext, useState, useEffect } from 'react'
import { themes, ThemeName } from '../themes'

type ThemeContextType = {
  theme: ThemeName
  setTheme: (name: ThemeName) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeName>('light')
  console.log('theme ', theme)
  useEffect(() => {
    const themeVars = themes[theme]
    Object.entries(themeVars).forEach(([key, val]) => {
      document.documentElement.style.setProperty(key, val)
    })
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('You have to use theme provided in theme provider')
  return ctx
}
