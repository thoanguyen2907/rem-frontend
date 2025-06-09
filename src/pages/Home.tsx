import React from 'react'
import clsx from 'clsx'
import { useTheme } from '../context/ThemeContext'
import { Product } from '../types/types'
import Card from '../components/Card'

const products: Product[] = [
  {
    id: 17933,
    size: 4,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 278,
    vat: 20,
    postcode: 'NR32',
    area: '',
    forbidden: true,
    created_at: '2025-04-03T13:51:46.897146',
    updated_at: '2025-04-07T13:16:52.813',
    allowed_on_road: true,
    allows_heavy_waste: true
  },
  {
    id: 1793332,
    size: 4,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 278,
    vat: 20,
    postcode: 'NR32',
    area: '',
    forbidden: true,
    created_at: '2025-04-03T13:51:46.897146',
    updated_at: '2025-04-07T13:16:52.813',
    allowed_on_road: true,
    allows_heavy_waste: true
  },
  {
    id: 179333223232332,
    size: 4,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 278,
    vat: 20,
    postcode: 'NR32',
    area: '',
    forbidden: true,
    created_at: '2025-04-03T13:51:46.897146',
    updated_at: '2025-04-07T13:16:52.813',
    allowed_on_road: false,
    allows_heavy_waste: true
  }
]

export default function Home() {
  const { theme } = useTheme()

  const renderContent = (data: Product) => {
    return (
      <>
        <h3
          className="text-lg font-bold"
          style={{
            color: theme === 'light' ? '#008292' : 'var(--text-color)'
          }}>
          {data.size} Yard Skip
        </h3>
        <p className="text-sm" style={{ color: 'var(--secondary-text)' }}>
          {data.hire_period_days} day hire period
        </p>
        <p
          className="text-xl font-bold mt-2"
          style={{
            color: theme === 'light' ? 'var(--price-text)' : 'var(--accent-color)'
          }}>
          £{data.price_before_vat}
        </p>
      </>
    )
  }
  const renderHeader = (data: Product) => {
    return (
      <div className="absolute top-2 right-2">
        <span
          className="px-2 py-1 text-xs font-semibold rounded"
          style={{ backgroundColor: 'var(--tag-bg)', color: 'var(--tag-text)' }}>
          {data.size} Yards
        </span>
      </div>
    )
  }
  const onButtonClick = (data: Product) => {
    alert(`Selected product: ${data.size} yards`)
  }
  return (
    <div
      className="min-h-screen px-10 py-8"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      <div className="text-center mb-10">
        <h1 className="lg:text-3xl sm:text-xl font-bold" style={{ color: 'var(--accent-color)' }}>
          Choose Your Skip Size
        </h1>
        <p className="mt-2" style={{ color: 'var(--secondary-text)' }}>
          Select the skip size that best suits your needs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            data={product}
            allowedOnRoad={product.allowed_on_road}
            buttonText="Select Product →"
            onButtonClick={onButtonClick}
            renderHeader={renderHeader}
            renderContent={renderContent}
          />
        ))}
      </div>
    </div>
  )
}
