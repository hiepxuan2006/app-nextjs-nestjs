import ProductGallery from '@/components/productGallery'
import React from 'react'
import { product } from '@/public/data'

export type ProductGalleryProps = {
  image: {
    mainImgs: { src: string }[]
    thumbnails: { src: string }[]
    sliderImgs: { id: string; img: { src: string } }[]
  }
}
const Button = () => {
  return (
    <div className="product-detail   ">
      <div className="product-title pt-3 pb-3">
        <h1 className="font-bold text-3xl">{product.title}</h1>
      </div>
      <div className="product-detail_top flex-col lg:flex-row sm:flex-col flex justify-start gap-2">
        <ProductGallery image={product.images} />
        <div className="lg:w-4/12">a</div>
      </div>
    </div>
  )
}

export default Button
