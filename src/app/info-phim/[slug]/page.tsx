/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import InfoMovie from '@/components/movie/infoMovie'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { Metadata } from 'next'
import Link from 'next/link'
import { Key, useEffect, useState } from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */

async function getData(slug: string) {
  const { data } = await axios(`https://ophim1.com/v1/api/phim/${slug}`)
  if (data.status === 'success') return data.data
  else return null
}

export async function generateMetadata(params: {
  slug: string
}): Promise<Metadata> {
  return {
    title: 'Dĩ ái vi oanh',
    description: '',
    openGraph: {
      images: [],
    },
  }
}
const Movie = async (props: any) => {
  const data = await getData(props.params.slug)

  if (!data) return <div>looix</div>
  return (
    <div>
      <div className="grid grid-cols-3 gap-2 p-2">
        <div className="col-span-3  md:col-span-2 gap-2   grid md:grid-cols-3 grid-cols-5 rounded-md  p-2">
          <div className="col-span-2 md:col-span-1">
            <div className="overflow-hidden m-2 relative">
              <img
                src={`https://img.ophim9.cc/uploads/movies/${data.item.thumb_url}`}
                alt="thumb movie"
                className="rounded-md border-2 border-black object-cover  w-full"
              />
            </div>
          </div>
          <div className="col-span-3  md:col-span-2">
            <div className="col-span-5 mb-2 ">
              <h1 className="text-sky-600 font-semibold text-3xl">
                {data.item.name}
              </h1>
              <p className="text-xl font-extralight text-inherit">
                {data.item.origin_name}
              </p>
            </div>
            <div className="episode_current mt-4 mb-4">
              <p className=" p-2  bg-[#A3765D] rounded-md w-fit text-xl font-normal">
                {data.item.episode_current}
              </p>
            </div>
            <div className="flex gap-2">
              <p>{data.item.year}</p>
              &#8226;
              <Link href="#">
                <p>{data.item.country[0].name}</p>
              </Link>
            </div>
            <div className="mt-2 ">
              <span className="float-left">Thể loại:&nbsp;</span>
              <span className=" font-medium">
                {data.item.category &&
                  data.item.category.map((item: any, index: any) => {
                    return (
                      <Link href="#" key={index} className="pl-2">
                        {item.name}
                      </Link>
                    )
                  })}
              </span>
            </div>
            <div className="ratting mt-2">
              <div className="ratting-star">
                {Array.from({ length: 10 }).map((item, index) => {
                  return (
                    <FontAwesomeIcon
                      className="text-yellow-300"
                      key={index}
                      icon={faStar}
                    />
                  )
                })}
              </div>
              <div className="ratting-quantity">(8.1 điểm / 130 lượt)</div>
            </div>
            <div className="action mt-4">
              <Link
                href={`/xem-phim/${data.item.slug}-tap-1`}
                className="p-2 rounded-md bg-[#A3765D] w-fit text-sxl font-normal"
              >
                Xem phim
              </Link>
            </div>
          </div>
          <div className="text-xl border-t mt-2 border-zinc-800 md:col-span-3 col-span-5 ">
            <span className=" py-1 px-2 inline-block mt-2 w-full">
              Lịch chiếu:
            </span>
          </div>
          <InfoMovie data={data} />
          <div className="my-2 col-span-3 border-zinc-800  border-opacity-75 border-t">
            <section
              className="py-3 antialiased border-zinc-800  border mt-2"
              id="sectionComment"
            >
              <div className="mx-auto px-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-md font-medium">Bình luận (28)</h2>
                </div>
                <div className="mb-6 pb-2 border-b border-zinc-800 text-sm">
                  <div>
                    Vui lòng&nbsp;
                    <Link
                      className="text-[#d98a5e] hover:text-[#e57131]"
                      href={'/login'}
                    >
                      đăng nhập
                    </Link>
                    &nbsp;để bình luận
                  </div>
                </div>
                <div className="min-h-18">
                  <div>
                    <article className="text-sm mb-3">
                      <div className="p-3 rounded-lg bg-gray-100 border-t-2 mt-2 border-gary-300">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <p className="inline-flex items-center mr-3 text-sm font-semibold">
                              <img
                                className="mr-2 w-8 h-8 rounded-full"
                                src="https://ui-avatars.com/api/?background=3f3f46&amp;color=fff&amp;name=hiep xuan"
                                alt="hiep xuan avatar"
                              />
                              hiep xuan
                            </p>
                            <p className="text-zinc-400 text-xs">
                              <span>3 tiếng trước</span>
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm">
                          cn co tap nua ko nhi
                        </p>
                      </div>
                      <div className="text-center">
                        <button
                          type="button"
                          className="bg-zinc-700 text-zinc-300 px-2.5 py-1.5 mt-2 rounded-md font-medium"
                        >
                          Tải thêm bình luận
                        </button>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="md:block hidden col-span-1  rounded-md p-2"></div>
      </div>
    </div>
  )
}

export default Movie
