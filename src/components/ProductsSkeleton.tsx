import React from 'react'

export default function ProductsSkeleton() {
  return (
    <div className="min-h-screen px-10 py-8" style={{ backgroundColor: '#ffffff' }}>
      <div className="text-center mb-10">
        <div className="h-8 w-48 mx-auto bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-64 mx-auto mt-2 bg-gray-200 rounded animate-pulse" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border p-4 flex flex-col justify-between shadow-md"
            style={{ backgroundColor: '#ffffff', borderColor: '#e5e7eb' }}>
            <div className="relative">
              <div className="w-full h-40 bg-gray-200 rounded-xl animate-pulse" />
              <div className="h-6 w-3/4 mt-4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-full mt-2 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-5/6 mt-1 bg-gray-200 rounded animate-pulse" />

              <div className="h-6 w-1/3 mt-2 bg-gray-200 rounded animate-pulse" />

              <div className="absolute bottom-2 left-2 h-5 w-16 bg-gray-300 rounded animate-pulse" />
            </div>

            <div className="absolute top-2 right-2">
              <div className="h-5 w-12 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="mt-4 h-10 w-full bg-gray-200 rounded-lg animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  )
}
