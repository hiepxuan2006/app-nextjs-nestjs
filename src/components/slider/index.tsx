'use client'
import { sliderData } from '@/public/data'
import * as React from 'react'
import BackgroundImage from './backgroundImage'
import Controls from './control'
import SlideInfo from './sliderInfo'
export interface ISliderProps {}

export type Data = {
  img: string
  title: string
  description: string
  location: string
}
export type CurrentSlideData = {
  data: Data
  index: number
}

export default function Slider() {
  const initData = sliderData[0]
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1))
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  )
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    })
  return (
    <div className="slider h-[400px] relative overflow-hidden">
      <BackgroundImage
        transitionData={transitionData}
        currentSlideData={currentSlideData}
      ></BackgroundImage>
      <div className="absolute z-20  top-0 h-full w-full">
        <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
          <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
            <SlideInfo
              transitionData={transitionData}
              currentSlideData={currentSlideData}
            />
          </div>
        </div>
      </div>
      <Controls
        currentSlideData={currentSlideData}
        data={data}
        transitionData={transitionData}
        initData={initData}
        handleData={setData}
        handleTransitionData={setTransitionData}
        handleCurrentSlideData={setCurrentSlideData}
        sliderData={sliderData}
      />
    </div>

    /* <div className="flex h-[140px] flex-1 w-full flex-col justify-start  md:justify-center hidden ">
        <Slides data={data} />
      </div> */
  )
}
