import React from 'react'

export default function Error() {
  return (
    <div data-testid="error-component" className="text-center py-10">
      <h2 className="text-xl font-bold text-red-600">Something went wrong</h2>
      <p className="mt-2">Please try again later.</p>
    </div>
  )
}
