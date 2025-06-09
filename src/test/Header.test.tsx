import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ThemeProvider } from '@/context/ThemeContext'
import Header from '../pages/Header'

describe('Header component test cases ', () => {
  it('renders select with current theme', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    )
    const select = screen.getByRole('combobox')
    expect(select).toHaveValue('dark')
  })
  it('changes them when select value changes', async () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    )
    const select = screen.getByRole('combobox')
    await userEvent.selectOptions(select, 'light')
    expect(select).toHaveValue('light')
  })
})
