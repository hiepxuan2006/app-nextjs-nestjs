import { useRef } from 'react'
import 'swiper/swiper-bundle.css'
import { Data } from './index'
import SliderCard from './sliderCard'
type Props = {
  data: Data[]
}

function Slides({ data }: Props) {
  const innerRef = useRef<HTMLDivElement | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

  return (
    <div
      ref={scrollContainerRef}
      className="flex select-none h-full w-full touch-pan-x scroll-m-1  overflow-x-auto"
    >
      <div ref={innerRef} className="flex select-none w-screen  h-full p-0 ">
        {data.map((data) => {
          return <SliderCard key={data.img} data={data} />
        })}
      </div>
    </div>
  )
}

export default Slides
