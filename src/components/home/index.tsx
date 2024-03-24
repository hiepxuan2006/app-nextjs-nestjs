/* eslint-disable @next/next/no-img-element */
import React from 'react'

const FlashSale = () => {
  return (
    <div className="mt-6 w-full h-80 lg:h-96 bg-primary_op rounded-md">
      <div className="flash-sale_container relative">
        <div className="absolute left-1/2  -translate-x-1/2 -top-5 flash-sale_title w-4/5 h-16 before:w-full before:border-b-[20px] before:border-b-red-950 before:absolute before:content-['']  before:border-x-4 before:border-transparent">
          <img
            className="  w-full h-full align-middle absolute"
            src="/image/flashsale-title.png"
            alt=""
          />
          <span className="p-2 absolute right-10 bg-[#f7bd73] shadow-md rounded-full text-white font-medium text-xl drop-shadow-xl">
            14:00 - 16:00
          </span>
        </div>
        <div className="sale-banner">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default FlashSale
