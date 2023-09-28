/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion'

type Props = {
  data: any
}

function SliderCard({ data }: Props) {
  return (
    <motion.div
      className="select-none relative h-full  rounded-2xl shadow-md overflow-hidden   px-1 shrink-0"
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      style={{ width: 'calc(100vw / 3)' }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 100,
      }}
    >
      <motion.img
        layoutId={data.img}
        alt="Transition Image"
        src={data.img}
        className=" absolute h-full w-full select-none rounded-2xl  object-cover brightness-75 "
      />
      <motion.div className=" absolute z-10 flex h-full select-none items-end p-4">
        <motion.div>
          <motion.div
            layout
            className=" mb-2 h-[2px] w-3 rounded-full bg-white"
          ></motion.div>
          <motion.p layoutId={data.location} className="text-xs text-[#D5D5D6]">
            {data.location}
          </motion.p>
          <motion.h1
            layoutId={data.title}
            className="text-xl leading-6 text-white"
          >
            {data.title}
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default SliderCard
