/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { ProductGalleryProps } from '@/app/product/[productId]/page'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment, useState } from 'react'

export default function ProductGallery({ image }: ProductGalleryProps) {
  const [showLightbox, setShowLightbox] = useState(false)
  const [imgIndex, setImgIndex] = useState<number>(0)
  const goToPrevSlide = () => {
    setImgIndex((prevIndex) =>
      prevIndex === 0 ? image.sliderImgs.length - 1 : prevIndex - 1
    )
  }

  const goToNextSlide = () => {
    setImgIndex((prevIndex) =>
      prevIndex === image.sliderImgs.length - 1 ? 0 : prevIndex + 1
    )
  }
  return (
    <div className="product-gallery flex   flex-col  lg:flex-row-reverse sm:flex-col h-full  gap-0  lg:w-8/12  sm:w-full lg:h-96">
      <div
        className="overflow-hidden relative lg:w-4/5 rounded-lg "
        onClick={() => setShowLightbox(true)}
      >
        <img
          className="object-fill h-full w-full"
          src={image.mainImgs[imgIndex].src}
          alt="gallery-cover-image"
        />
        <button
          className=" md:hidden text-lg p-2 w-8 h-8 flex items-center justify-center bg-sky-200 rounded-full absolute top-1/2 translate-y--2/4 right-1"
          onClick={goToNextSlide}
        >
          <FontAwesomeIcon className="decoration-white" icon={faChevronRight} />
        </button>
        <button className="md:hidden text-lg p-2 w-8 h-8 flex items-center justify-center bg-sky-200 rounded-full absolute top-1/2 translate-y--2/4 left-1">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
      <ul className=" hidden md:flex lg:flex-col md:text-center  w-full h-1/4 lg:h-full lg:w-1/5 gap-1 overflow-hidden lg:overflow-y-auto overflow-x-auto  items-center">
        {image.thumbnails.map((element, index) => (
          <Fragment key={index}>
            <li
              className={`cursor-pointer w-24 h-full lg:h-24  shrink-0 lg:w-24 p-1  `}
              key={index}
              onClick={() => {
                setImgIndex(index)
              }}
            >
              <div
                className={`h-full w-full ${
                  imgIndex === index ? 'border-2 border-sky-500 rounded-lg' : ''
                } `}
              >
                <img
                  className="object-contain h-full w-full rounded-lg"
                  src={element.src}
                  alt={`product thumbnail ${index}`}
                />
              </div>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  )
}
