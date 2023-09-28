import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  motion,
} from 'framer-motion'
import { CurrentSlideData, Data } from './index'
type Props = {
  transitionData: Data
  currentSlideData: CurrentSlideData
}

export default function BackgroundImage({
  transitionData,
  currentSlideData,
}: Props) {
  return (
    <div className="h-4/ w-full overflow-hidden">
      {transitionData && (
        <AnimatePresence>
          <motion.img
            key={transitionData.img}
            layout
            layoutId={transitionData.img}
            alt="Transition Image"
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 500, opacity: 0 }}
            transition={{
              type: 'smooth',
              duration: 0.6,
            }}
            className=" absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50"
            src={transitionData.img}
          />
        </AnimatePresence>
      )}

      <LazyMotion features={domAnimation}>
        <motion.img
          alt="Current Image"
          key={currentSlideData.data.img + 'transition'}
          src={currentSlideData.data.img}
          className="  absolute  left-0 top-0 h-full w-full object-cover brightness-50"
        />
      </LazyMotion>
    </div>
  )
}
