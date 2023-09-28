import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  curIndex: number
  length: number
}

function Progress({ curIndex, length }: Props) {
  return (
    <div className="flex-1 flex items-center gap-2">
      <div className=" flex h-[10px] w-1/2 flex-1 items-center rounded-full bg-white bg-opacity-50">
        <div
          style={{
            width: (((curIndex + 1) / length) * 100).toString() + '%',
          }}
          className={` h-[10px] rounded-full bg-red-600 `}
        ></div>
      </div>
      <span
        key={curIndex}
        style={{
          overflow: 'hidden',
          display: 'inline-block',
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          key={curIndex}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
          }}
          className=" flex items-center text-4xl font-medium "
        >
          0{curIndex + 1}
        </motion.div>
      </span>
    </div>
  )
}

export default Progress
