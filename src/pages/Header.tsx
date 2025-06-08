import { ThemeName } from '@/themes'
import { useTheme } from '../context/ThemeContext'
import React from 'react'

const adminRole = false

export default function Header() {
  const { theme, setTheme } = useTheme()
  const changeTheme = (e: React.FormEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value
    setTheme(value as ThemeName)
  }
  return (
    <div className="p-4" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      <h1>Welcome</h1>
      <select
        className="mt-2 p-2 border rounded bg-[#3D703E]"
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}>
        <option value="light">💡 Light</option>
        <option value="dark">🌒 Dark</option>
        {adminRole && (
          <>
            <option value="christmas">🎄 Christmas</option>
            <option value="newYear">🎆 New Year</option>
          </>
        )}
      </select>
    </div>
  )
}
