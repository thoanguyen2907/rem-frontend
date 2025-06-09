import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import Card from '../components/commons/Card'
import { ThemeProvider } from '../context/ThemeContext'

interface TestData {
  id: number
  size: number
  hire_period_days: number
  price_before_vat: number
  allowed_on_road: boolean
}

jest.mock('clsx', () => ({
  default: (...args: any[]) => args.filter(Boolean).join(' ')
}))

describe('Card', () => {
  const mockData: TestData = {
    id: 1,
    size: 4,
    hire_period_days: 14,
    price_before_vat: 278,
    allowed_on_road: true
  }
  const renderHeader = (data: TestData) => <span>{data.size} Yards</span>
  const renderContent = (data: TestData) => (
    <div>
      <h3>{data.size} Yard Skip</h3>
      <p>{data.hire_period_days} day hire period</p>
      <p>£{data.price_before_vat}</p>
    </div>
  )
  const onButtonClick = jest.fn()
  it('renders card with data, header and content', () => {
    render(
      <ThemeProvider>
        <Card
          data={mockData}
          renderContent={renderContent}
          renderHeader={renderHeader}
          buttonText="Select"
          onButtonClick={onButtonClick}
        />
      </ThemeProvider>
    )
    expect(screen.getByText('4 Yards')).toBeInTheDocument()
    expect(screen.getByText('4 Yard Skip')).toBeInTheDocument()
    expect(screen.getByText('14 day hire period')).toBeInTheDocument()
    expect(screen.getByText('£278')).toBeInTheDocument()
    expect(screen.getByText('Select')).toBeInTheDocument()
  })
  it('shows warning when allowedOnRoad is false', () => {
    render(
      <ThemeProvider>
        <Card
          data={{ ...mockData, allowed_on_road: false }}
          renderContent={renderContent}
          renderHeader={renderHeader}
          buttonText="Select"
          allowedOnRoad={false}
        />
      </ThemeProvider>
    )
    expect(screen.getByText('⚠️ Not Allowed On The Road')).toBeInTheDocument()
  })
  it('renders image when imageUrl is provided as a prop', () => {
    render(
      <ThemeProvider>
        <Card
          data={mockData}
          imageUrl="test.jpg"
          renderContent={renderContent}
          renderHeader={renderHeader}
        />
      </ThemeProvider>
    )
    const img = screen.getByAltText('Card image')
    expect(img).toHaveAttribute('src', 'test.jpg')
  })
  it('trigger onButtonClick when button is clicked', async () => {
    render(
      <ThemeProvider>
        <Card
          data={mockData}
          renderContent={renderContent}
          renderHeader={renderHeader}
          buttonText="Select"
          onButtonClick={onButtonClick}
        />
      </ThemeProvider>
    )
    const button = screen.getByText('Select')
    await userEvent.click(button)
    expect(onButtonClick).toHaveBeenCalledWith(mockData)
  })
})
