import React from 'react'
import clsx from 'clsx'

import { useTheme } from '../context/ThemeContext'
import Button from './Button'

/**
 * here is Generics
 * you can use Card for different data shape: Product, User, Category, etc
 */

interface CardGenerics<T> {
  data: T
  imageUrl?: string
  allowedOnRoad?: boolean
  buttonText?: string
  onButtonClick?: (data: T) => void
  renderHeader?: (data: T) => React.ReactNode
  renderContent?: (data: T) => React.ReactNode
  className?: string
}
export default function Card<T>({
  data,
  imageUrl,
  allowedOnRoad,
  buttonText = 'Select →',
  onButtonClick,
  renderHeader,
  renderContent,
  className
}: CardGenerics<T>) {
  return (
    <div
      className={clsx('rounded-2xl border p-4 flex flex-col justify-between shadow-md', className)}
      style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
      <div className="relative">
        {imageUrl ? (
          <img src={imageUrl} alt="Card image" className="w-full h-40 object-cover rounded-xl" />
        ) : (
          <div className="w-full h-40 bg-gray-300 rounded-xl" />
        )}
        {renderHeader && renderHeader(data)}

        {allowedOnRoad === false && (
          <span className="absolute bottom-2 left-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
            ⚠️ Not Allowed On The Road
          </span>
        )}
      </div>

      <div className="mt-4">{renderContent && renderContent(data)}</div>

      {buttonText && (
        <Button
          text={buttonText}
          disabled={allowedOnRoad === false}
          data={data}
          onButtonClick={onButtonClick}
        />
      )}
    </div>
  )
}
