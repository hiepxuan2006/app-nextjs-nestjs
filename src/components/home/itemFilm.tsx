/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from 'next/link'

/* eslint-disable @next/next/no-img-element */
const ItemFilm = ({ item }: { item: any }) => {
  return (
    <Link
      href={`/info-phim/${item.slug}`}
      className="item-movie h-full w-full rounded-md overflow-hidden   hover:shadow-2xl hover:border-zinc-800 border-2 border-transparent  relative"
    >
      <div className="item-movie-image overflow-hidden w-full  flex items-center justify-center relative h-full">
        <img
          loading="lazy"
          src={`https://img.ophim9.cc/uploads/movies/${item.thumb_url}`}
          className="transition-all object-contain h-full w-full  "
          alt=""
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
