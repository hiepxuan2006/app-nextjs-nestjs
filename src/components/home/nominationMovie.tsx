/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import Link from 'next/link'
import { Fragment } from 'react'
async function getData(slug?: string) {
  const { data } = await axios(
    `https://ophim1.com/v1/api/danh-sach/phim?page=1&sort_field=view&category=&country=&year=`
  )
  if (data.status === 'success') return data.data
  else return null
}

const NominationMovie = async (props: any) => {
  const data = await getData('')
  if (!data) return ''
  return (
    <Fragment>
      <Link
        href={`/info-phim/${data.items[0].slug}`}
        className="col-span-1 relative border-default border-zinc-800  overflow-hidden rounded-md"
      >
        <img
          src={`https://img.ophim9.cc/uploads/movies/${data.items[0].thumb_url}`}
          alt=""
          className="object- h-full w-full"
        />
        <div className="absolute  top-0 left-0 bg-[#A3765D] p-2 rounded-r-md text-sm text-white">
          {data.items[0].episode_current}
        </div>
        <div className="absolute bottom-0 w-full text-center text-xl font-medium bg-gradient-to-b from-[#00000073] to-black text-white p-2 ">
          {data.items[0].name}
        </div>
      </Link>
      <div className="col-span-1  p-2 rounded-md border-default border-zinc-800">
        <ul className="flex flex-col ml-4 list-disc justify-between h-full">
          {data.items.slice(1, 10).map((item: any, index: number) => {
            return (
              <li key={index} className="font-extralight text-sm">
                <Link href={`/info-phim/${item.slug}`}>
                  {item.name} &bull; {item.episode_current}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Fragment>
  )
}

export default NominationMovie
