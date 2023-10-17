'use client'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

const NavbarMobile = () => {
  const [checked, setChecked] = useState<boolean>(false)
  const refHandle = useRef<HTMLDivElement | null>(null)

  const onchangeNavbar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
  }

  return (
    <label className="nav-bar-mobile  block md:hidden">
      <input
        onChange={onchangeNavbar}
        checked={checked}
        type="checkbox"
        name=""
        id=""
        hidden
      />
      {checked ? (
        <FontAwesomeIcon icon={faClose} style={{ fontSize: '28px' }} />
      ) : (
        <FontAwesomeIcon icon={faBars} style={{ fontSize: '28px' }} />
      )}
      <div
        className={`nav-item-mobile flex absolute bg-primary rounded-b-md gap-2 z-100 w-full flex-col top-full md:hidden ${
          checked ? 'show-nav' : 'hidden-nav'
        }`}
        ref={refHandle}
      >
        <Link
          onClick={() => setChecked(false)}
          className="p-2 decoration-transparent text-xl border-2 hover:bg-green-700 border-transparent"
          href="/"
        >
          Home
        </Link>
        <Link
          onClick={() => setChecked(false)}
          className="p-2 decoration-transparent text-xl border-2 hover:bg-green-700 border-transparent"
          href="/product/2"
        >
          About
        </Link>
        <Link
          onClick={() => setChecked(false)}
          className="p-2 decoration-transparent text-xl border-2 hover:bg-green-700 border-transparent"
          href="#"
        >
          Service
        </Link>
        <Link
          onClick={() => setChecked(false)}
          className="p-2 decoration-transparent text-xl border-2 hover:bg-green-700 border-transparent"
          href="#"
        >
          Contact
        </Link>
      </div>
    </label>
  )
}

export default NavbarMobile
