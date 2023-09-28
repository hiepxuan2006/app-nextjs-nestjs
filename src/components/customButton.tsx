'use client'
import React, { useRef } from 'react'
import { Button } from '@nextui-org/react'
import confetti from 'canvas-confetti'

export type Props = {
  text: string
}
const CustomButton = ({ text }: Props) => {
  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
      },
    })
  }

  const buttonRef = useRef(null)
  return (
    <Button
      ref={buttonRef}
      disableRipple
      size="lg"
      onPress={handleConfetti}
      className="relative overflow-visible p-4 rounded-full bg-primary hover:-translate-y-1 shadow-xl after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 "
    >
      {text}
    </Button>
  )
}

export default CustomButton
