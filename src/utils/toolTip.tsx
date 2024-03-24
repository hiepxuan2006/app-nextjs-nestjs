// Tooltip.tsx
'use client'
import React, { useState } from 'react'

interface TooltipProps {
  content: string
  children: React.ReactNode
}

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number
    y: number
  }>({ x: 0, y: 0 })
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false)

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setIsTooltipVisible(true)
    const { clientX, clientY } = e
    setTooltipPosition({ x: clientX, y: clientY })
  }
  const handleMouseLeave = () => {
    setIsTooltipVisible(false)
  }

  return (
    <div style={{ position: 'relative' }}>
      <div
        className="cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>

      {isTooltipVisible && (
        <div
          className="tooltip whitespace-nowrap absolute z-20 bg-black text-white"
          style={{ top: tooltipPosition.y }}
        >
          {content}
        </div>
      )}
    </div>
  )
}

export default Tooltip
