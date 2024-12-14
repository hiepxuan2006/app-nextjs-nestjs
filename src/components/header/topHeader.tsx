/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import useDebounce from '@/utils/useDebounce'
import {
  faCircleUser,
  faClose,
  faMagnifyingGlass,
  faRightToBracket,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { ChangeEvent, Fragment, useEffect, useState } from 'react'
import { BoxSearch } from './boxSearch'
import axios from 'axios'

export const TopHeader = () => {
  const [search, setSearch] = useState<string>('')
  const [searchMobile, setSearchMobile] = useState<boolean>(false)
  const searchDebounce = useDebounce(search, 1000)

  const handleChangeSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <Fragment>
      <div className="h-60 border-b border-zinc-800 px-2 flex w-full items-center gap-3 justify-between relative">
        <div className="flex gap-2 justify-between h-1/2 lg:h-2/3 grow">
          <Link href={'/'} className="h-full shrink-0">
            {/* <picture className="h-full"> */}
            <img
              src="/image/logo.webp"
              alt="logo"
              className="h-full object-cover "
            />
            {/* </picture> */}
          </Link>
          <div className="grow lg:flex hidden items-center justify-center     ">
            <div className="bg-neutral-800 lg:w-1/2 relative rounded-md border border-zinc-800">
              <input
                className={`input-search relative shrink-0 flex-1 w-full text-sm lg:w-full  bg-neutral-800  p-2  outline-none rounded-r-full rounded-l-full`}
                type="text"
                name="search"
                id=""
                placeholder="Tìm kiếm"
                onChange={handleChangeSearch}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2"
              />
              <BoxSearch search={searchDebounce} />
            </div>
          </div>
          <div className="flex   gap-2 items-center justify-between">
            <Link
              href={'/login'}
              className="hidden lg:flex gap-2 items-center border-default border-cyan-600 bg-[#A3765D] rounded-md p-1"
            >
              <FontAwesomeIcon icon={faRightToBracket} />
              <p className="font-medium whitespace-nowrap text-sm text-center items-center">
                Đăng nhập
              </p>
            </Link>
            <div className="lg:!hidden flex items-center gap-3 font-extralight">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={`text-2xl p-3 ${searchMobile ? '!hidden' : ''}`}
                onClick={() => setSearchMobile(!searchMobile)}
              />
              <FontAwesomeIcon
                icon={faClose}
                onClick={() => setSearchMobile(!searchMobile)}
                className={`text-2xl p-3 ${searchMobile ? '' : '!hidden'}`}
              />
              <Link href={'/login'}>
                <FontAwesomeIcon icon={faCircleUser} className="text-3xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full flex items-center justify-center ${searchMobile ? '' : 'hidden'}`}
      >
        <div className="bg-neutral-800 w-full relative rounded-md border border-zinc-800">
          <input
            className={`input-search p-3 relative shrink-0 flex-1 w-full text-sm lg:w-full  bg-neutral-800  p-2  outline-none rounded-r-full rounded-l-full`}
            type="text"
            name="search"
            id=""
            placeholder="Tìm kiếm"
            onChange={handleChangeSearch}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2"
          />
          <BoxSearch search={searchDebounce} />
        </div>
      </div>
    </Fragment>
  )
}
