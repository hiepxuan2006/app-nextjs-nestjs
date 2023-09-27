'use client'
import {
  faMagnifyingGlass,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useState } from 'react'
import '../../styles/header.scss'
import { ButtonSwitcher } from '../buttonSwither'
import NavbarMobile from './navbarMobile'
export interface HeaderAppProps {}

export default function Header() {
  const [showBox, setShowBox] = useState(false)
  const handleShowBoxSearch = () => {
    setShowBox(!showBox)
  }
  return (
    <header className="header">
      <Link href={'/'} className="logo">
        <picture>
          <img src="/image/logo.png" alt="logo" />
        </picture>
      </Link>
      <nav className="nav">
        <NavbarMobile />
        <div className="nav-bar-item nav-mobile mobile">
          <a href="#"> Home </a>
          <a href="#"> About </a>
          <a href="#"> Service </a>
          <a href="#"> Contact </a>
        </div>
      </nav>
      <div className="search">
        <input
          className={`input-search ${showBox ? 'show-box' : ''}`}
          type="text"
          name=""
          id=""
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          onClick={() => handleShowBoxSearch()}
          style={{ cursor: 'pointer', fontSize: '24px', padding: '0 10px' }}
        />
        <FontAwesomeIcon icon={faUserAstronaut} style={{ fontSize: '24px' }} />
      </div>
      <ButtonSwitcher />
    </header>
  )
}
