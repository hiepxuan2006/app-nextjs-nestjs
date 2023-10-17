import Link from 'next/link'
import { useState } from 'react'
import '../../styles/header.scss'
import ModalAuth from '../auth'
import Account from './account'
import Cart from './cart'
import NavbarMobile from './navbarMobile'
import Search from './search'
import NavMobile from '../navMobile'
export interface HeaderAppProps {}

export default function Header() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <header className="bg-primary z-30 fixed top-0  h-[60px] w-full flex items-center justify-center">
      <div className="header relative  flex h-[var(--height-header)] w-full lg:w-[1200px] items-center justify-between gap-2 mx-auto my-0 ">
        <Link href={'/'} className="logo hidden md:block h-full p-1">
          <picture className="h-full">
            <img src="/image/logo.png" alt="logo" className="h-full " />
          </picture>
        </Link>
        <nav className="nav md:hidden p-2 ">
          <NavbarMobile />
        </nav>
        <div className="header-right flex items-center gap-2 h-full">
          <Search />
          <Cart />
          <Account setIsVisible={setIsVisible} />
          {/* <ButtonSwitcher /> */}
          <NavMobile />
        </div>
      </div>
      <ModalAuth isVisible={isVisible} setIsVisible={setIsVisible} />
    </header>
  )
}
