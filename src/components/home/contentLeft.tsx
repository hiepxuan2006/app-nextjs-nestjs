/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
async function getData(slug: string) {
  try {
    const { data } = await axios(
      `https://ophim1.com/v1/api/danh-sach/phim-aaahot?page=1&sort_field=year&category=&country=${slug}&year=&limit=10`
    )
    if (data.status === 'success') return data.data
    else return null
  } catch (error) {
    return null
  }
}
const ContentLeft = (props: any) => {
  const [films, setFilms] = useState<any>()
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData('trung-quoc')
      setFilms(data)
    }

    fetchData()
  }, [])
  // const data = await getData('trung-quoc')
  // if (!data) return <div>Lỗi</div>
  return (
    <div className=''>
      <h1 className='py-2 border-b border-zinc-800 text-xl font-medium'>Có thể bạn muốn xem</h1>
      <div className=" rounded-md p-2 mt-2">
        {films && films.items.slice(0, 8).map((item: any, index: number) => {
          return <div key={index} className='-mx-2'>
            <div className="p-2 w-full border border-zinc-800 mt-2 rounded-md">
              <div className="flex gap-2">
                <div className="h-24 w-1/3 rounded-md overflow-hidden">
                  <Link href={`/info-phim/${item.slug}`}>
                    <Image src={`https://img.ophim9.cc/uploads/movies/${item.thumb_url}`}
                      alt='item.name'
                      width={300}
                      height={500}
                      loading='lazy'
                      placeholder="blur"
                      property={'5'}
                      blurDataURL="/image/blur.jpg" />
                  </Link>
                </div>
                <div className="w-2/3 truncate">
                  <Link className='text-gray-300 text-[14px] truncate font-medium' href={`/info-phim/${item.slug}`} title={item.name}>
                    {item.name}
                  </Link>
                  <span className="text-zinc-300 text-sm block font-medium">
                    {item.year}
                  </span>
                  <div className="flex items-center pt-2">
                    <FontAwesomeIcon icon={faStar} className=' w-4 h-4 text-zinc-400 me-1'></FontAwesomeIcon>
                    <p className="text-sm font-medium text-zinc-400">7.2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default ContentLeft
