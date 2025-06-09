import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ThemeProvider, useTheme } from '../context/ThemeContext'

describe('ThemeProvider', () => {
  const TestComponent = () => {
    const { theme, setTheme } = useTheme()
    return (
      <div>
        <span data-testid="theme">{theme}</span>
        <button onClick={() => setTheme('light')} data-testid="set-theme">
          Set Light
        </button>
      </div>
    )
  }
  it('initializes with dark theme', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    expect(screen.getByTestId('theme')).toHaveTextContent('dark')
  })

  it('updates theme when setTheme is called', async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    const button = screen.getByTestId('set-theme')
    await userEvent.click(button)
    expect(screen.getByTestId('theme')).toHaveTextContent('light')
  })
})
