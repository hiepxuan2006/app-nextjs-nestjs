import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useEffect, useState } from 'react'
import { ButtonSwitcher } from '../buttonSwither'

const NavbarMobile = () => {
  const [checked, setChecked] = useState<boolean>(false)
  const [isElementDisabled, setIsElementDisabled] = useState<boolean>(false)
  const refHandle = useRef<HTMLDivElement | null>(null)

  const handleOutsideClick = (e: MouseEvent) => {
    if (refHandle.current && !refHandle.current.contains(e.target as Node)) {
      console.log('aaaaaaaaaa')
    } else {
      setIsElementDisabled(false)
      setChecked(false)
    }
  }

  const onchangeNavbar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    setIsElementDisabled(e.target.checked)
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <label className="nav-bar-mobile ">
      <input
        checked={isElementDisabled}
        onChange={onchangeNavbar}
        type="checkbox"
        name=""
        id=""
        hidden
      />
      <FontAwesomeIcon icon={faBars} style={{ fontSize: '28px' }} />
      <div
        className={`nav-item-mobile  ${
          checked && isElementDisabled ? 'show-nav' : 'hidden-nav'
        }`}
        ref={refHandle}
      >
        <a href="#"> Home </a>
        <a href="#"> About </a>
        <a href="#"> Service </a>
        <a href="#"> Contact </a>
        <ButtonSwitcher />
      </div>
    </label>
  )
}

export default NavbarMobile
