/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import axios from 'axios'
import queryString from 'query-string'
import { useEffect, useState } from 'react'

type Props = {
  search: string
}

export const BoxSearch = ({ search }: Props) => {
  const [data, setData] = useState<any>()

  useEffect(() => {
    const fetchData = async () => {
      const query = queryString.stringify(
        {
          keyword: search,
        },
        { encode: true }
      )
      console.log(query)
      const { data } = await axios.get(
        `https://ophim1.com/v1/api/tim-kiem?${query}`
      )
      if (data.status === 'success') {
        setData(data.data)
      } else {
        console.log('first')
        setData('')
      }
    }
    if (search.length > 4) fetchData()
    // else setData({})
  }, [search])
  if (!search) return

  return (
    <div className="absolute left-0 top-full border border-zinc-800 bg-[#151414] w-full rounded-md p-2 z-110">
      <div className="border-t-default pt-2 w-full">
        <p className="inline-block whitespace-nowrap w-full text-ellipsis text-sm overflow-hidden">
          Tìm kiếm theo từ khóa `${search}`
        </p>
      </div>

      {data &&
        data?.items.map((item: any, index: number) => {
          return (
            <div
              key={index}
              data-v-ccd3db62=""
              className="flex   gap-2 p-2 m-2 gradient-border  cursor-pointer   "
            >
              <div className="w-12 h-12 ">
                <img
                  className="w-full h-full"
                  src={`http://img.ophim1.com/uploads/movies/${item.thumb_url}`}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between">
                <p>{item.name}</p>
                <p className="text-xs text-justify italic text-[primary]">
                  {item.episode_current}
                </p>
              </div>
            </div>
          )
        })}
    </div>
  )
}
