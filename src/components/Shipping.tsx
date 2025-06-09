import React from 'react'
import { TruckIcon, StarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function Shipping() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 px-4 md:py-8 md:px-8 mx-auto w-[80%] md:w-[70%]">
      <div className="bg-[--tag-bg] text-[--tag-text] p-4 rounded-lg shadow-md text-center">
        <TruckIcon className="w-10 h-10 mx-auto mb-2 text-[--accent-color]" />
        <h3 className="text-base font-semibold md:text-lg">Fast Delivery</h3>
        <p className="mt-1 text-sm md:text-base">
          Same day or next day delivery available across all areas
        </p>
      </div>
      <div className="bg-[--tag-bg] text-[--tag-text] p-4 rounded-lg shadow-md text-center">
        <StarIcon className="w-10 h-10 mx-auto mb-2 text-[--accent-color]" />
        <h3 className="text-base font-semibold md:text-lg">5 Star Service</h3>
        <p className="mt-1 text-sm md:text-base">
          Rated excellent by thousands of satisfied customers
        </p>
      </div>
      <div className="bg-[--tag-bg] text-[--tag-text] p-4 rounded-lg shadow-md text-center">
        <ShieldCheckIcon className="w-10 h-10 mx-auto mb-2 text-[--accent-color]" />
        <h3 className="text-base font-semibold md:text-lg">Fully Insured</h3>
        <p className="mt-1 text-sm md:text-base">
          Complete peace of mind with full insurance coverage
        </p>
      </div>
    </div>
  )
}
