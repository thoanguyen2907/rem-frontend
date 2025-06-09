import React from 'react'

import { useTheme } from '../context/ThemeContext'
import clsx from 'clsx'

interface ButtonProps<T> {
  text: string
  disabled: boolean
  data?: T
  onButtonClick?: (data: T) => void
}
export default function Button<T>({ text, disabled, onButtonClick, data }: ButtonProps<T>) {
  const { theme } = useTheme()
  return (
    <button
      className={clsx(
        'mt-4 py-2 px-4 w-full rounded-xl transition',
        disabled ? 'cursor-not-allowed opacity-60' : 'hover:bg-[var(--button-hover)]'
      )}
      style={{
        backgroundColor: disabled ? 'var(--disabled-bg)' : 'var(--accent-color)',
        color: 'var(--text-color)'
      }}
      onClick={() => onButtonClick && data !== undefined && onButtonClick(data)}
      disabled={disabled}>
      {text}
    </button>
  )
}
