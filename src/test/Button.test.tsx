import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from '../components/Button'
import { ThemeProvider } from '../context/ThemeContext'

describe('Button', () => {
  const mockData = { id: 1 }
  const onButtonClick = jest.fn()

  it('renders button with text and enabled state', () => {
    render(
      <ThemeProvider>
        <Button text="Add to cart" disabled={false} data={mockData} onButtonClick={onButtonClick} />
      </ThemeProvider>
    )
    const button = screen.getByText('Add to cart')
    expect(button).toBeInTheDocument()
    expect(button).not.toBeDisabled()
  })

  it('trigger onButtonClick when clicked and enaled', async () => {
    render(
      <ThemeProvider>
        <Button text="Add to cart" data={mockData} disabled={false} onButtonClick={onButtonClick} />
      </ThemeProvider>
    )
    const button = screen.getByText('Add to cart')
    await userEvent.click(button)
    expect(onButtonClick).toHaveBeenCalledWith(mockData)
  })
  it('does not trigger onButtonClick when disabled', async () => {
    render(
      <ThemeProvider>
        <Button data={mockData} text="Add to cart" disabled={true} onButtonClick={onButtonClick} />
      </ThemeProvider>
    )
    const button = screen.getByText('Add to cart')
    await userEvent.click(button)
    expect(button).toBeDisabled()
    expect(button).toHaveClass('cursor-not-allowed opacity-60')
  })
})
