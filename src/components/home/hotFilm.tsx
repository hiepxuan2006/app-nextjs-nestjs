/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import axios from 'axios'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { Pagination } from 'swiper/modules'

const ClientComponent = dynamic(() => import('./itemFilm'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})
const HotFilm = () => {
  const [data, setdata] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        'https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1'
      )
      setdata(data.data)
      setLoading(false)
    }
    fetch()
  }, [])

  if (!data) return ''
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
      modules={[Pagination]}
      className="mySwiper h-full"
    >
      {data &&
        data?.items.map((item: any, index: number) => {
          return (
            <SwiperSlide
              className="w-full h-full cursor-pointer rounded-md  "
              key={index}
            >
              <ClientComponent item={item} index={index} />
            </SwiperSlide>
          )
        })}
    </Swiper>
  )
}

export default HotFilm
