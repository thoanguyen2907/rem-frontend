import { ThemeProvider, useTheme } from '@/context/ThemeContext'
import { renderHook } from '@testing-library/react'
import React from 'react'

describe('test use theme', () => {
  it('should return theme context defined in ThemeProvider', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    )
    const { result } = renderHook(() => useTheme(), { wrapper })
    expect(result.current.theme).toBe('dark')
    expect(typeof result.current.setTheme).toBe('function')
  })
  it('error throws when using theme not in ThemeProvider', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})
    expect(() => renderHook(() => useTheme())).toThrow(
      'You have to use theme provided in theme provider'
    )
    consoleError.mockRestore()
  })
})
