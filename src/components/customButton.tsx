/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useRef } from 'react'
import { Button } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
// import confetti from 'canvas-confetti'

export type Props = {
  text: string
  handleClick?: () => void
  type?: 'submit' | 'reset'
  loading?: boolean | false
}
const defaultProps: Partial<Props> = {
  loading: false,
}
const CustomButton = (props: Props) => {
  // const handleConfetti = () => {
  //   confetti({
  //     particleCount: 100,
  //     startVelocity: 30,
  //     spread: 360,
  //     origin: {
  //       x: Math.random(),
  //       y: Math.random() - 0.2,
  //     },
  //   })
  // }

  const buttonRef = useRef(null)
  return (
    <Button
      ref={buttonRef}
      disableRipple
      size="lg"
      disabled={props.loading}
      // onPress={handleConfetti}
      type={props.type}
      onClick={props.handleClick}
      className="relative overflow-visible px-2 py-3   rounded-md bg-primary  shadow-xl after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 "
    >
      <span className="h-5 flex items-center justify-center">
        {props.loading ? (
          <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
        ) : (
          <span> {props.text}</span>
        )}
      </span>
    </Button>
  )
}

export default CustomButton
