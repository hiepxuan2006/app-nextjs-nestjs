/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import {
  faRegistered,
  faRightToBracket,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import { BoxSearch } from './boxSearch'
import useDebounce from '@/utils/useDebounce'

export const TopHeader = () => {
  const [search, setSearch] = useState<string>('')
  const searchDebounce = useDebounce(search, 500)
  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  return (
    <div className="h-60 border-b border-zinc-800 px-2 flex w-full items-center gap-3 justify-between relative">
      <div className="flex gap-2  h-1/2 md:h-2/3 grow">
        <Link href={'/'} className="h-full shrink-0">
          {/* <picture className="h-full"> */}
          <img
            src="/image/logo.webp"
            alt="logo"
            className="h-full object-cover "
          />
          {/* </picture> */}
        </Link>
        <div className="fixed left-0 top-0 md:relative w-full grow">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-sm font-extrabold cursor-pointer absolute right-2 top-1/2 -translate-y-1/2"
          />
          <input
            className={`input-search shrink-0 flex-1 w-full text-sm lg:w-[300px] shadow-inset border-default  p-2  outline-none rounded-r-full rounded-l-full`}
            type="text"
            name="search"
            id=""
            placeholder="Bạn muons tìm gì ?"
            onChange={handleChangeSearch}
          />
          <BoxSearch search={searchDebounce} />
        </div>
      </div>
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center border-default border-cyan-600 bg-[#A3765D] rounded-l-full rounded-r-full p-1">
          <FontAwesomeIcon icon={faRegistered} />
          <p className="font-medium whitespace-nowrap text-sm text-center items-center ">
            Đăng ký
          </p>
        </div>
        <div className="flex gap-2 items-center border-default border-cyan-600 bg-[#A3765D] rounded-l-full rounded-r-full p-1">
          <FontAwesomeIcon icon={faRightToBracket} />
          <p className="font-medium whitespace-nowrap text-sm text-center items-center">
            Đăng nhập
          </p>
        </div>
      </div>
    </div>
  )
}
