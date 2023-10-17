/* eslint-disable @next/next/no-img-element */

import React from 'react'
import OrderItem from './orderItem'
import Link from 'next/link'
import { formattedNumber } from '@/utils/fomatCurrency'

const Order = () => {
  return (
    <section className="order">
      <div className="grid grid-cols-3 relative">
        <div className="col-start-1 col-span-3 lg:col-span-2">
          <div className="header-order border-b-2 hidden grid-cols-6 gap-3 py-2 md:grid">
            <div className="col-span-3 text-center text-xl font-semibold">
              <span>Sản phẩm</span>
            </div>
            <div className="text-center text-xl font-semibold">
              <span>Số lượng</span>
            </div>
            <div className="text-center text-xl font-semibold">
              <span>Thành tiền</span>
            </div>
          </div>
          <OrderItem />
          <div className="py-4 border-b-2 border-slate-200">
            <Link href="/" className="pl-5">
              <span className="text-xl font-semibold">Tiếp tục mua sắm</span>
            </Link>
          </div>
          <div className="order-note flex flex-col py-4 pl-5 gap-2 border-b-2 lg:border-none">
            <label htmlFor="">Ghi chú đơn hàng</label>
            <textarea
              className="outline-none border-2 p-2"
              name=""
              id=""
              rows={4}
            ></textarea>
          </div>
          <div className="h-96 w-full bg-purple-300">a</div>
        </div>
        <div className="py-4 px-5 gap-2 flex flex-col col-span-3 lg:col-span-1 lg:sticky lg:top-[var(--height-header)] h-fit">
          <div className="flex items-start justify-between">
            <span className="text-xl font-semibold">Thành tiền:</span>
            <div className="flex flex-col gap-2 text-right">
              <span className="text-xl">{formattedNumber(2542900)}</span>
              <p>(Đã bao gồm VAT nếu có)</p>
            </div>
          </div>
          <button className="border-2 bg-black text-center p-2 w-full border-black cursor-pointer">
            <span className="text-white">Thanh toán</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Order
