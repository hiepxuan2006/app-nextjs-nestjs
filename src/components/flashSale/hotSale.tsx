/* eslint-disable @next/next/no-img-element */
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

const HotSale = () => {
  return (
    <div className="mt-8 rounded-md h-80 lg:h-96 bg-primary_op shadow-md ">
      <div className="hot-sale_title h-12 px-5 border-b-2  flex gap-2 items-center">
        <img src="/image/hot-sale.png" alt="" className="h-full" />
        <h1 className="text-xl text-red-600 font-semibold">Khuyến mãi hot</h1>
      </div>
      <div className="hot-sale_content w-full h-64">
        <Swiper
          slidesPerView={2.5}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper h-full"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default HotSale
