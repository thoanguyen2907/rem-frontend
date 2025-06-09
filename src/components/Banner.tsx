import React from 'react'
import { TruckIcon, ShieldCheckIcon, CalendarIcon } from '@heroicons/react/24/outline'

export default function Banner() {
  return (
    <div className="bg-[--bg-color] text-[--text-color] py-6 px-4 text-center md:py-12 md:px-8">
      <h1 className="text-5xl font-bold md:text-6xl">Professional Skip Hire Services</h1>
      <p className="mt-2 text-base md:text-lg text-[--text-color]">
        Fast delivery, fair prices, and reliable service for all your waste disposal needs
      </p>
      <div className="mt-4 flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-6">
        <span className="flex items-center justify-center text-[--custom-color-1]">
          <TruckIcon className="w-5 h-5 mr-2" />
          Same Day Delivery
        </span>
        <span className="flex items-center justify-center text-[--custom-color-2]">
          <ShieldCheckIcon className="w-5 h-5 mr-2" />
          Fully Licensed
        </span>
        <span className="flex items-center justify-center text-[--custom-color-3]">
          <CalendarIcon className="w-5 h-5 mr-2" />
          14 Day Hire Period
        </span>
      </div>
    </div>
  )
}
