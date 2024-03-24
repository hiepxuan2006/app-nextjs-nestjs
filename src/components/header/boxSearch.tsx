import React from 'react'

type Props = {
  search: string
}

export const BoxSearch = (props: Props) => {
  if (!props.search) return
  return (
    <div className="absolute left-0 top-full bg-white w-full shadow-box_search rounded-md p-2 z-110">
      BoxSearch
      <div className="border-t-default pt-2 w-full">
        <p className="inline-block whitespace-nowrap w-full text-ellipsis overflow-hidden">
          Tìm kiếm theo từ khóa `${props.search}`
        </p>
      </div>
    </div>
  )
}
