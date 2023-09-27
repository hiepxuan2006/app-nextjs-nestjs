'use client'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'next-themes'
import React from 'react'

type Props = {}

export const ButtonSwitcher = (props: Props) => {
  const { resolvedTheme, setTheme } = useTheme()
  const handleChangeStatus = (e: any) => {
    e.target.checked === true ? setTheme('dark') : setTheme('light')
  }
  return (
    <div className="btn-switcher ">
      <label className="theme-switch">
        <input
          onChange={handleChangeStatus}
          type="checkbox"
          className="theme-switch__checkbox"
          defaultChecked={resolvedTheme === 'dark' ? true : false}
        />
        <div className="theme-switch__container">
          <div className="theme-switch__clouds" />
          <div className="theme-switch__stars-container"></div>
          <div className="theme-switch__circle-container">
            <div className="theme-switch__sun-moon-container">
              <div className="theme-switch__moon">
                <div className="theme-switch__spot" />
                <div className="theme-switch__spot" />
                <div className="theme-switch__spot" />
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
  )
}
