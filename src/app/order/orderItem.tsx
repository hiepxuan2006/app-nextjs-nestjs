/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import { formattedNumber } from '@/utils/fomatCurrency'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const OrderItem = () => {
  const [qty, setQty] = useState(1)
  const handleMinus = () => {
    if (qty == 1) setQty(1)
    else setQty(qty - 1)
  }
  const handlePlus = () => {
    setQty(qty + 1)
  }
  return (
    <div className="order-item  flex lg:grid lg:grid-cols-6 gap-2 py-4 border-b-2 border-slate-200">
      <div className="order-item_image   flex items-center">
        <img
          src="https://product.hstatic.net/1000312752/product/arbt001-7-a_c1f4bd5177dc447bbb2e53bdae9bc23f_compact.jpg"
          alt=""
        />
      </div>
      <div className="order-item_info  flex-col lg:flex-row gap-2 col-span-4 flex lg:grid lg:grid-cols-4">
        <div className="order-item_product col-span-2 overflow-hidden">
          <div className="order-item_title">
            <h1 className="text-lg font-semibold">
              Giày Super Light 20 nam ARVT001-7
            </h1>
          </div>
          <div className="order-item_code flex gap-1 items-center">
            <span className="font-semibold">Code:</span>
            <span>hx-2006</span>
          </div>
          <div className="oder-item_group flex gap-1 items-center">
            <span className="font-semibold">Nhóm:</span>
            <span>Black/7.5</span>
          </div>
        </div>
        <div className="order-item_price lg:order-3 lg:text-center">
          <span className="text-lg font-semibold">
            {formattedNumber(2542900)}
          </span>
        </div>
        <div className="action-quantity flex gap-2">
          <button
            onClick={() => handleMinus()}
            className="p-2 border-2 h-9 w-9 border-slate-700 flex items-center justify-center"
          >
            <span className="text-xl font-semibold">-</span>
          </button>
          <input
            type="text"
            className="w-12 h-9 text-center text-xl"
            value={qty}
          />
          <button
            onClick={() => handlePlus()}
            className="p-2 border-2 h-9 w-9 border-slate-700 flex items-center justify-center"
          >
            <span className="text-xl font-semibold">+</span>
          </button>
        </div>
      </div>
      <div className="order-item_close lg:order-1 text-center">
        <FontAwesomeIcon icon={faClose} className="text-xl p-2" />
      </div>
    </div>
  )
}

export default OrderItem
