/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client'
import { useState } from 'react'
import SwiperCore from 'swiper/core'

import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

SwiperCore.use([Navigation, Thumbs, FreeMode])

const Sliders = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)
  return (
    <div className="">
      <Swiper
        spaceBetween={10}
        navigation
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2 h-64 md:h-96 w-full"
      >
        <SwiperSlide>
          <img
            className="block w-full h-full object-cover"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="block w-full h-full object-cover"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper h-24 w-full "
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Sliders
