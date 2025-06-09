import { ThemeName } from '@/themes'
import { useTheme } from '../context/ThemeContext'
import React from 'react'

/**
 * theme template for season - only admin can set theme to Christmas or New Year
 */

export default function Header() {
  const { theme, setTheme } = useTheme()
  const changeTheme = (e: React.FormEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value
    setTheme(value as ThemeName)
  }
  return (
    <div className="p-4" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      <select className="mt-2 p-2 border rounded bg-[#4497A1]" value={theme} onChange={changeTheme}>
        <option value="light">💡 Light</option>
        <option value="dark">🌒 Dark</option>

        <option value="christmas">🎄 Christmas</option>
        <option value="newYear">🎆 New Year</option>
      </select>
    </div>
  )
}
