/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client'
import { useState } from 'react'
import SwiperCore from 'swiper/core'

import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { sliders } from '@/public/data'
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  motion,
} from 'framer-motion'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

SwiperCore.use([Navigation, Thumbs, FreeMode])
const Sliders = () => {
  // const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)

  const [activeSlide, setActiveSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState(0)

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveSlide(swiper.activeIndex)
    setPrevSlide(swiper.previousIndex)
  }

  return (
    <div className=" w-full h-80 lg:w-2/3 lg:h-[300px]">
      <Swiper
        onSlideChange={handleSlideChange}
        spaceBetween={10}
        // navigation
        // thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        // loop={true}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2 h-full lg:h-full w-full"
      >
        {sliders.length > 0 &&
          sliders.map((item, key) => {
            return (
              <SwiperSlide key={item.name + key}>
                <AnimatePresence>
                  <motion.img
                    key={item.pictureUrl}
                    layout
                    layoutId={item.pictureUrl}
                    alt="Transition Image"
                    initial={{ y: -500, opacity: 0 }}
                    animate={activeSlide === key ? { y: 0, opacity: 1 } : {}}
                    exit={{ y: 500, opacity: 0 }}
                    transition={{
                      type: 'smooth',
                      duration: 1.2,
                    }}
                    className=" absolute left-0 top-0 z-10 h-full w-full object-cover "
                    src={item.pictureUrl}
                  />
                </AnimatePresence>

                <LazyMotion features={domAnimation}>
                  <motion.img
                    alt="Current Image"
                    key={item.pictureUrl + 'transition'}
                    src={sliders[prevSlide].pictureUrl}
                    className="  absolute  left-0 top-0 h-full w-full object-cover brightness-50"
                  />
                </LazyMotion>
                <div className="h-full w-full animate-pulse">a</div>
                <div className="absolute  z-20 left-0 bottom-0  flex gap-3 justify-between shadow-primary rounded-md bg-primary_op w-full">
                  <motion.p
                    className="slide-content hidden md:block  bottom-0 left-0  grow text-3xl text-left   p-4 text-white font-extralight "
                    initial={{ opacity: 0, y: 100 }}
                    animate={activeSlide === key ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    {item.name}
                  </motion.p>
                  <motion.p
                    className="text-right justify-end cursor-pointer flex items-center"
                    initial={{ opacity: 0, x: '100%' }}
                    animate={activeSlide === key ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 1.5,
                      delay: 1,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <button className=" p-4  text-white text-right text-2xl font-extralight drop-shadow-xl">
                      <Link href="/">Xem sản phẩm</Link>
                    </button>
                  </motion.p>
                </div>
              </SwiperSlide>
            )
          })}
      </Swiper>
      {/* <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        freeMode={true}
        // loop={true}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper h-0 md:h-20 w-full hidden md:block "
      >
        {sliders.length > 0 &&
          sliders.map((item, key) => {
            return (
              <SwiperSlide key={key}>
                <span className="md:text-base md:font-normal p-2 text-center">
                  {item.name}
                </span>
              </SwiperSlide>
            )
          })}
      </Swiper> */}
    </div>
  )
}

export default Sliders
