/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const InfoMovie = ({ data }: { data: any }) => {
  const [caseInfo, setCaseInfo] = useState(1)
  const setCase = (num: number) => {
    setCaseInfo(num)
  }
  return (
    <div className="p-2  md:col-span-3 col-span-5 border-t-default border-zinc-800">
      <div className="info-header flex gap-2 mt-2">
        <div
          className={`rounded-md   font-normal  p-2 cursor-pointer ${
            caseInfo === 1 ? 'bg-[#A3765D]' : 'bg-gray-500 text-white'
          }`}
          onClick={() => setCase(1)}
        >
          Danh sách tập
        </div>
        <div
          className={`rounded-md   font-normal  p-2 cursor-pointer ${
            caseInfo === 2 ? 'bg-[#A3765D]' : 'bg-gray-500 text-white'
          }`}
          onClick={() => setCase(2)}
        >
          Thông tin phim
        </div>
        <div
          className={`rounded-md   font-normal  p-2 cursor-pointer ${
            caseInfo === 3 ? 'bg-[#A3765D]' : 'bg-gray-500 text-white'
          }`}
          onClick={() => setCase(3)}
        >
          Diễn viên
        </div>
      </div>
      <div className="info-content border border-zinc-800 px-2 mt-4 py-2 rounded-md">
        {caseInfo === 1 && (
          <div className="list-episode">
            <span className="text-xl">Danh sách tập</span>
            <div className="content mt-4 flex gap-2 flex-wrap justify-items-start">
              {data &&
                data.item.episodes[0].server_data.map(
                  (item: any, index: number) => {
                    return (
                      <Link
                        key={index}
                        href={`/xem-phim/${data.item.slug}-tap-${item.slug}`}
                        className="py-1 bg-gray-400 text-white rounded-md min-w-[60px] text-center cursor-pointer"
                      >
                        Tập {item.name}
                      </Link>
                    )
                  }
                )}
            </div>
          </div>
        )}
        {caseInfo === 2 && (
          <div className="film-content">
            <span className="text-xl">Nội dung phim</span>
            <div className="content mt-2 text-justify ">
              <p
                className=""
                dangerouslySetInnerHTML={{ __html: data.item.content }}
              ></p>
            </div>
          </div>
        )}
        {caseInfo === 3 && (
          <div className="director-actor">
            <div className="director">
              <span className="uppercase text-xl font-normal my-2">
                Đạo diễn
              </span>
              <div className=" border-b-2 grid grid-cols-2 md:grid-cols-3 gap-4 py-4 ">
                {data.item.director.map((item: any, index: number) => {
                  return (
                    <div key={index} className=" flex gap-2 items-center">
                      <div className="h-11 w-11 overflow-hidden rounded-full">
                        <img
                          className="h-full w-full"
                          src="https://i.pinimg.com/236x/df/52/98/df52984cac481443635a560bd7702475.jpg"
                          alt=""
                        />
                      </div>
                      <span className="font-normal">{item}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="actor mt-2">
              <span className="uppercase text-xl font-normal">Diễn Viên</span>
              <div className=" border-b-2 grid grid-cols-2 md:grid-cols-3 gap-4 py-4 ">
                {data.item.actor.map((item: any, index: number) => {
                  return (
                    <div key={index} className=" flex gap-2 items-center">
                      <div className="h-11 w-11 overflow-hidden rounded-full">
                        <img
                          className="h-full w-full"
                          src="https://i.pinimg.com/236x/df/52/98/df52984cac481443635a560bd7702475.jpg"
                          alt=""
                        />
                      </div>
                      <span className="font-normal">{item}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default InfoMovie
