/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'

const TabNewFilm = ({ phimBo, phimLe }: { phimBo: any; phimLe: any }) => {
  const [activeTab, setActiveTab] = useState<string>('series')
  return (
    <Fragment>
      <div className=" flex gap-4 items-center rounded-md border-default border-zinc-800 ">
        <div className="flex md:justify-start w-full">
          <div
            onClick={() => setActiveTab('series')}
            className={`cursor-pointer ${
              activeTab === 'series' ? 'bg-[#A3765D]' : ''
            } w-full h-full md:w-28 text-center p-2`}
          >
            Phim bộ mới
          </div>
          <div
            onClick={() => setActiveTab('movie')}
            className={`cursor-pointer  w-full h-full md:w-28 text-center p-2 ${
              activeTab === 'movie' ? 'bg-[#A3765D]' : ''
            }`}
          >
            Phim lẻ mới
          </div>
        </div>
      </div>

      <div
        className={`grid grid-cols-2 md:grid-cols-4 gap-1 px-1 mt-2 ${
          activeTab === 'movie' ? 'hidden' : ''
        }`}
      >
        {phimBo.items.map((item: any, index: number) => {
          return (
            <Link
              href={`/info-phim/${item.slug}`}
              className="col-span-1 h-[300px] relative"
              key={index}
            >
              {/* <Tooltip key={index} content={`Phim ${item.name + item.year}`}> */}
              <div className="h-[240px] ">
                <img
                  className="h-full w-full object-cover"
                  src={`https://img.ophim9.cc/uploads/movies/${item.thumb_url}`}
                  alt=""
                />
              </div>
              <div className="border-x-default border-b-default relative border-zinc-800 p-2 rounded-x">
                <p className="line-clamp-1 text-sm"> {item.name}</p>
                <p className="line-clamp-1 text-sm "> {item.origin_name}</p>
              </div>
              <div className="absolute top-0 left-0 px-2 bg-[#A3765D] rounded-r-md">
                <span className="text-sm">{item.episode_current}</span>
              </div>
              {/* </Tooltip> */}
            </Link>
          )
        })}
      </div>

      <div
        className={`grid grid-cols-2 md:grid-cols-4 gap-1 px-1 mt-2 ${
          activeTab === 'movie' ? '' : 'hidden'
        }`}
      >
        {phimLe.items.map((item: any, index: number) => {
          return (
            <Link
              href={`/info-phim/${item.slug}`}
              className="col-span-1 h-[300px] relative"
              key={index}
            >
              {/* <Tooltip key={index} content={`Phim ${item.name + item.year}`}> */}
              <div className="h-[240px] ">
                <img
                  className="h-full w-full object-cover"
                  src={`https://img.ophim9.cc/uploads/movies/${item.thumb_url}`}
                  alt=""
                />
              </div>
              <div className="border-x-default border-b-default relative border-zinc-800 p-2 rounded-x">
                <p className="line-clamp-1 text-sm"> {item.name}</p>
                <p className="line-clamp-1 text-sm "> {item.origin_name}</p>
              </div>
              <div className="absolute top-1 left-0 px-2  rounded-r-md">
                <span className="text-sm">{item.episode_current}</span>
              </div>
              {/* </Tooltip> */}
            </Link>
          )
        })}
      </div>
    </Fragment>
  )
}

export default TabNewFilm
