import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { CurrentSlideData, Data } from './index'

type Props = {
  currentSlideData: CurrentSlideData
  sliderData: Data[]
  data: Data[]
  transitionData: Data
  handleData: React.Dispatch<React.SetStateAction<Data[]>>
  handleTransitionData: React.Dispatch<React.SetStateAction<Data>>
  handleCurrentSlideData: React.Dispatch<React.SetStateAction<CurrentSlideData>>
  initData: Data
}

function Controls({
  sliderData,
  data,
  transitionData,
  handleData,
  handleTransitionData,
  handleCurrentSlideData,
  initData,
}: Props) {
  const handlePrev = () => {
    handleData((prevData) => [
      transitionData ? transitionData : initData,
      ...prevData.slice(0, prevData.length - 1),
    ])
    handleCurrentSlideData({
      data: transitionData ? transitionData : sliderData[0],
      index: sliderData.findIndex(
        (ele) => ele.img === data[data.length - 1].img
      ),
    })
    handleTransitionData(data[data.length - 1])
  }

  const handleNext = () => {
    handleData((prev) => prev.slice(1))
    handleCurrentSlideData({
      data: transitionData ? transitionData : initData,
      index: sliderData.findIndex((ele) => ele.img === data[0].img),
    })
    handleTransitionData(data[0])
    setTimeout(() => {
      handleData((newData) => [
        ...newData,
        transitionData ? transitionData : initData,
      ])
    }, 500)
  }

  return (
    <div className="flex z-20 items-center gap-3 px-0 py-3 md:px-1 md:py-5 absolute w-full justify-center bottom-0 right-0">
      <SliderButton handleClick={handlePrev}>
        <FontAwesomeIcon icon={faChevronLeft} className=" text-sm" />
      </SliderButton>
      <SliderButton handleClick={handleNext}>
        <FontAwesomeIcon icon={faChevronRight} className=" text-sm" />
      </SliderButton>
      {/* <Progress curIndex={currentSlideData.index} length={sliderData.length} /> */}
    </div>
  )
}

export default Controls

const SliderButton = ({
  children,
  handleClick,
}: {
  children: React.ReactNode
  handleClick: () => void
}) => {
  return (
    <button
      className=" flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-[#fdfdfd5f]   bg-white text-black
"
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
