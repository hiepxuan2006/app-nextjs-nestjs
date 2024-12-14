/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Notfound from '@/app/not-found'
import InfoMovie from '@/components/movie/infoMovie'
import Image from 'next/image'
import Link from 'next/link'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

// Fetch dữ liệu từ API
async function getData(slug: string) {
  try {
    const { data } = await axios.get(`https://ophim1.com/v1/api/phim/${slug}`, {
      timeout: 2000,
    })

    if (data.status === 'success') {
      return data.data
    }

    return null
  } catch (error: any) {
    console.error('Error fetching movie data:', error.message)
    return null
  }
}

// Page Component
const Movie = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const data = await getData(slug)

  if (!data) return <Notfound />

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 p-2">
        <div className="col-span-3  md:col-span-2 gap-2   grid md:grid-cols-3 grid-cols-5 rounded-md  p-2">
          <div className="col-span-2 md:col-span-1">
            <div className="overflow-hidden m-2 relative">
              <Image
                src={`https://img.ophim1.com/uploads/movies/${data.item.thumb_url}`}
                alt="thumb movie"
                className="rounded-md border-2 border-black object-cover w-full"
                width={300}
                height={450}
                priority
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
              <p className="p-2  bg-[#A3765D] rounded-md w-fit text-sm font-normal">
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
                  data.item.category.map((item: any, index: any) => (
                    <Link href="#" key={index} className="pl-2">
                      {item.name}
                    </Link>
                  ))}
              </span>
            </div>
            <div className="ratting mt-2">
              <div className="ratting-star">
                {Array.from({ length: 10 }).map((_, index) => (
                  <FontAwesomeIcon
                    className="text-yellow-300"
                    key={index}
                    icon={faStar}
                  />
                ))}
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
        </div>
      </div>
    </div>
  )
}

export default Movie
