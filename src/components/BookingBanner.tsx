import React from 'react'
import Button from './commons/Button'

export default function BookingBanner() {
  return (
    <div className="bg-[--bg-color] text-[--text-color] py-4 px-4 md:py-6 md:px-8 text-center shadow-md mx-auto">
      <h2 className="text-xl font-semibold md:text-2xl text-[--secondary-text]">
        Ready to Book Your Skip?
      </h2>
      <p className="mt-2 text-sm md:text-base">
        Get started today with our simple booking process. Same day delivery available!
      </p>
      <div className="mt-4 flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
        <Button text="Book Now" disabled={false} className="primary" />
        <Button text="Get Quote" disabled={false} className="secondary" />
      </div>
    </div>
  )
}
