export * from 'zustand'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ThemeProvider } from '../context/ThemeContext'
import { fetchproductByLocation } from '../api/apiClient'
import { useProductStore } from '../store/useProductStore'
import { Product } from '../types/types'
import Home from '../pages/Home'

jest.mock('../api/apiClient')

const mockProducts: Product[] = [
  {
    id: 1,
    size: 4,
    hire_period_days: 14,
    transport_cost: 50,
    per_tonne_cost: 100,
    price_before_vat: 278,
    vat: 20,
    postcode: 'SW1A 1AA',
    area: 'London',
    forbidden: false,
    created_at: '2025-06-01T10:00:00Z',
    updated_at: '2025-06-05T12:00:00Z',
    allowed_on_road: true,
    allows_heavy_waste: true
  },
  {
    id: 2,
    size: 6,
    hire_period_days: 7,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 350,
    vat: 20,
    postcode: 'M1 1AA',
    area: 'Manchester',
    forbidden: true,
    created_at: '2025-06-02T09:00:00Z',
    updated_at: '2025-06-06T15:00:00Z',
    allowed_on_road: false,
    allows_heavy_waste: false
  }
]

describe('Home component testing', () => {
  const mockAlert = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    ;(fetchproductByLocation as jest.Mock).mockReset()
    jest.spyOn(window, 'alert').mockImplementation(mockAlert)
  })
  afterAll(() => {
    jest.restoreAllMocks()
  })
  it('renders loading state is true with ProductsSkeleton', () => {
    jest.spyOn(useProductStore, 'getState').mockReturnValue({
      products: [],
      loading: true,
      error: null,
      storeProducts: jest.fn(),
      fetchProducts: jest.fn()
    })
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    )
    expect(screen.getByTestId('products-skeleton')).toBeInTheDocument()
  })

  it('renders products with card components after fetching succesfully', async () => {
    jest.spyOn(useProductStore, 'getState').mockReturnValue({
      products: [],
      loading: true,
      error: null,
      storeProducts: jest.fn(),
      fetchProducts: jest.fn()
    })
    ;(fetchproductByLocation as jest.Mock).mockResolvedValue(mockProducts)
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    )
    await waitFor(() => {
      expect(screen.queryByTestId('products-skeleton')).not.toBeInTheDocument()
      expect(screen.getByText('4 Yard Skip')).toBeInTheDocument()
      expect(screen.getByText('6 Yard Skip')).toBeInTheDocument()
      expect(screen.getByText('£278')).toBeInTheDocument()
      expect(screen.getByText('£350')).toBeInTheDocument()
    })
    expect(fetchproductByLocation).toHaveBeenCalledWith(
      'NR32',
      'Lowestoft',
      expect.any(AbortSignal)
    )
  })
  it('triggers onButtonClick when a Card button is clicked', async () => {
    ;(fetchproductByLocation as jest.Mock).mockResolvedValue(mockProducts)

    jest.spyOn(useProductStore, 'getState').mockReturnValueOnce({
      products: mockProducts,
      loading: false,
      error: null,
      storeProducts: jest.fn(),
      fetchProducts: jest.fn().mockResolvedValue(undefined)
    })
    jest.spyOn(useProductStore, 'getState').mockReturnValue({
      products: mockProducts,
      loading: false,
      error: null,
      storeProducts: jest.fn(),
      fetchProducts: jest.fn()
    })
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    )
    await waitFor(() => {
      expect(screen.queryByTestId('products-skeleton')).not.toBeInTheDocument()
      expect(screen.getByText('4 Yard Skip')).toBeInTheDocument()
      expect(screen.getByText('6 Yard Skip')).toBeInTheDocument()
    })
    const buttons = screen.getAllByTestId('button-select')
    await userEvent.click(buttons[0])

    expect(mockAlert).toHaveBeenCalledWith('Selected product: 4 yards')
  })

  it('abort fetch on unmount', async () => {
    const abortSpy = jest.spyOn(AbortController.prototype, 'abort')
    jest.spyOn(useProductStore, 'getState').mockReturnValue({
      products: [],
      loading: true,
      error: null,
      storeProducts: jest.fn(),
      fetchProducts: jest.fn()
    })
    const { unmount } = render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    )
    unmount()
    expect(abortSpy).toHaveBeenCalled()
  })
})
