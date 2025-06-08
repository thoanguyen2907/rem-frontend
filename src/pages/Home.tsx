import React from 'react'
import clsx from 'clsx'
import { useTheme } from '../context/ThemeContext'

const skips = [
  { size: 4, price: 211, allowedOnRoad: true },
  { size: 5, price: 241, allowedOnRoad: true },
  { size: 6, price: 264, allowedOnRoad: true },
  { size: 8, price: 295, allowedOnRoad: true },
  { size: 10, price: 326, allowedOnRoad: false },
  { size: 12, price: 390, allowedOnRoad: false },
  { size: 12, price: 390, allowedOnRoad: false },
  { size: 12, price: 390, allowedOnRoad: false }
]

const isDark = false

export default function Home() {
  const { theme } = useTheme()
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
        {skips.map((skip, index) => (
          <div
            key={`${skip.size}-${index}`}
            className="rounded-2xl border p-4 flex flex-col justify-between shadow-md"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
            <div className="relative">
              <div className="w-full h-40 bg-gray-300 rounded-xl" />
              <span
                className="absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded"
                style={{ backgroundColor: 'var(--tag-bg)', color: 'var(--tag-text)' }}>
                {skip.size} Yards
              </span>
              {!skip.allowedOnRoad && (
                <span className="absolute bottom-2 left-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                  ⚠️ Not Allowed On The Road
                </span>
              )}
            </div>

            <div className="mt-4">
              <h3
                className="text-lg font-bold"
                style={{
                  color: theme === 'light' ? '#008292' : 'var(--text-color)'
                }}>
                {skip.size} Yard Skip
              </h3>
              <p className="text-sm" style={{ color: 'var(--secondary-text)' }}>
                14 day hire period
              </p>
              <p
                className="text-xl font-bold mt-2"
                style={{
                  color: theme === 'light' ? 'var(--price-text)' : 'var(--accent-color)'
                }}>
                £{skip.price}
              </p>
            </div>

            <button
              className={clsx(
                'mt-4 py-2 px-4 w-full rounded-xl transition',
                skip.allowedOnRoad
                  ? theme === 'dark'
                    ? 'hover:bg-[var(--button-hover)]'
                    : 'hover:bg-opacity-80'
                  : 'cursor-not-allowed opacity-60'
              )}
              style={{
                backgroundColor: skip.allowedOnRoad ? 'var(--accent-color)' : 'var(--disabled-bg)',
                color: 'var(--text-color)'
              }}
              disabled={!skip.allowedOnRoad}>
              Select This Skip →
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
