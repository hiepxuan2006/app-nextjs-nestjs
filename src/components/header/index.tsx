/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react'
import '../../styles/header.scss'
import ModalAuth from '../auth'
import { TopHeader } from './topHeader'
import Link from 'next/link'
export interface HeaderAppProps {}

export default function Header() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <header className="z-30  w-full flex  flex-col">
      <TopHeader />
      <div className="header relative border-b border-zinc-800 hidden lg:flex h-[var(--height-header)] w-full items-center justify-between gap-2 mx-auto my-0 ">
        <nav className="md:flex flex gap-2 p-2">
          <Link href="/info-phim/test">home</Link>
          <Link href="/xem-phim/test">category</Link>
        </nav>
        <nav className="nav md:hidden p-2 ">{/* <NavbarMobile /> */}</nav>
      </div>
      <ModalAuth isVisible={isVisible} setIsVisible={setIsVisible} />
    </header>
  )
}
