import React from 'react'

import { useTheme } from '../../context/ThemeContext'
import clsx from 'clsx'

interface ButtonProps<T> {
  text: string
  disabled: boolean
  data?: T
  onButtonClick?: (data: T) => void
  className?: string
}
export default function Button<T>({
  text,
  disabled,
  onButtonClick,
  data,
  className
}: ButtonProps<T>) {
  const { theme } = useTheme()

  const getButtonStyles = (className?: string) => {
    const baseStyles = 'py-2 px-4 rounded-full font-medium transition duration-200'
    switch (className) {
      case 'primary':
        return clsx(
          baseStyles,
          disabled ? 'cursor-not-allowed opacity-60' : 'hover:bg-[--button-hover]'
        )
      case 'secondary':
        return clsx(
          baseStyles,
          'border border-[--text-color]',
          disabled
            ? 'cursor-not-allowed opacity-60'
            : 'hover:bg-[--accent-color] hover:text-[--tag-text]'
        )
      default:
        return clsx(baseStyles, disabled ? 'cursor-not-allowed opacity-60' : '')
    }
  }

  return (
    <button
      className={getButtonStyles(className)}
      style={{
        backgroundColor: disabled
          ? 'var(--disabled-bg)'
          : className === 'secondary'
          ? 'transparent'
          : 'var(--accent-color)',
        color: disabled
          ? 'var(--secondary-text)'
          : className === 'secondary'
          ? 'var(--text-color)'
          : 'var(--tag-text)',
        borderColor: className === 'secondary' ? 'var(--text-color)' : 'transparent'
      }}
      data-testid="button-select"
      onClick={() => !disabled && onButtonClick && data !== undefined && onButtonClick(data)}
      disabled={disabled}>
      {text}
    </button>
  )
}
