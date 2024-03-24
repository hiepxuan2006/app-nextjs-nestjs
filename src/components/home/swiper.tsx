/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Pagination } from '@nextui-org/react'
import React, { Key } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import ItemFilm from './itemFilm'

const SwiperTem = (props: any) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
      // autoplay={{
      //   delay: 6000,
      //   disableOnInteraction: false,
      // }}
      modules={[Pagination]}
      className="mySwiper h-full"
    >
      {props.data &&
        props.data?.items.map((item: any, index: Key | null | undefined) => {
          return (
            <SwiperSlide
              className="w-full h-full cursor-pointer rounded-md  "
              key={index}
            >
              {/* <ItemFilm item={item} /> */}
              <div>aaa</div>
            </SwiperSlide>
          )
        })}
    </Swiper>
  )
}

export default SwiperTem
