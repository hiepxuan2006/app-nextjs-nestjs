import Link from 'next/link'
import '../../styles/header.scss'
import { ButtonSwitcher } from '../buttonSwither'
import Account from './account'
import NavbarMobile from './navbarMobile'
import Search from './search'
import Cart from './cart'
export interface HeaderAppProps {}

export default function Header() {
  return (
    <header className="bg-primary z-30 fixed top-0 w-full h-[60px] w-full flex items-center justify-center">
      <div className="header  ">
        <Link href={'/'} className="logo">
          <picture>
            <img src="/image/logo.png" alt="logo" />
          </picture>
        </Link>
        <nav className="nav">
          <NavbarMobile />
          {/* <div className="nav-bar-item nav-mobile mobile">
          <a href="#"> Home </a>
          <a href="#"> About </a>
          <a href="#"> Service </a>
          <a href="#"> Contact </a>
        </div> */}
        </nav>
        <div className="header-right">
          <Search />
          <Cart />
          <Account />
          <ButtonSwitcher />
        </div>
      </div>
    </header>
  )
}
