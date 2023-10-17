/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductGallery from '@/components/productGallery'
import { product } from '@/public/data'
import axios from 'axios'

export type ProductGalleryProps = {
  image: {
    mainImgs: { src: string }[]
    thumbnails: { src: string }[]
    sliderImgs: { id: string; img: { src: string } }[]
  }
}

const ProductDetail = async () => {
  const res = await axios.get('https://worldtimeapi.org/api/ip')

  return (
    <div className="product-detail   ">
      <div className="product-title pt-3 pb-3">
        <h1 className="font-bold text-3xl">{product.title}</h1>
      </div>
      <div className="product-detail_top flex-col lg:flex-row sm:flex-col flex justify-start gap-2">
        <ProductGallery image={product.images} />
        <div className="lg:w-1/2">
          <div>
            <h1>time</h1>
            {res.data.datetime}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
