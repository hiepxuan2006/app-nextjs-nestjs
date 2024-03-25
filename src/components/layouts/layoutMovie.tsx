import React from 'react'

const LayoutMovie = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-6 grid-flow-row gap-2">
        {children}
        <div
          className={`col-span-2  row-span-6  hidden md:block border-default border-zinc-800  py-4 px-2 rounded-md  col-start-5  `}
        >
          {/* <ContentLeft /> */}
        </div>
      </div>
    </div>
  )
}

export default LayoutMovie
