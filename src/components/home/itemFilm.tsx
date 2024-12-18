/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from 'next/legacy/image'
import Link from 'next/link'

/* eslint-disable @next/next/no-img-element */
const ItemFilm = ({ item, index }: { item: any; index?: number }) => {
  return (
    <Link
      href={`/info-phim/${item.slug}`}
      data-v-ccd3db62=""
      className="item-movie h-full w-full rounded-md overflow-hidden   gradient-border  relative"
    >
      <div className="item-movie-image overflow-hidden w-full  flex items-center justify-center relative h-full">
        <Image
          className="p-2"
          src={`http://img.ophim1.com/uploads/movies/${item.thumb_url}`}
          alt=""
          loading="lazy"
          layout="fill"
          placeholder="blur"
          property={'5'}
          blurDataURL="/image/blur.jpg"
        />
      </div>
      <div className="absolute top-0 bg-[#A3765D]   w-fit px-2 rounded-r-md text-sm">
        <p className="text-white font-normal">{item.episode_current}</p>
      </div>
      <div className="mt-4 p-2  absolute bg-gradient-to-b from-[#00000073] to-black  bottom-0 w-full">
        <p className="text-white whitespace-nowrap line-clamp-1 text-xs  text-left font-medium">
          {item.name}
        </p>
        <p className="text-left text-sm">{item.year}</p>
      </div>
    </Link>
  )
}

export default ItemFilm
