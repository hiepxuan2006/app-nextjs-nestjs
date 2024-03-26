import React from 'react'

type Props = {
  search: string
}

export const BoxSearch = (props: Props) => {
  if (!props.search) return
  return (
    <div className="absolute left-0 top-full border border-zinc-800 bg-[#151414] w-full rounded-md p-2 z-110">
      <div className="border-t-default pt-2 w-full">
        <p className="inline-block whitespace-nowrap w-full text-ellipsis text-sm overflow-hidden">
          Tìm kiếm theo từ khóa `${props.search}`
        </p>
      </div>
    </div>
  )
}
