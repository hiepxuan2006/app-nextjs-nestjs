import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

function Account() {
  return (
    <div className="account">
      <FontAwesomeIcon icon={faUserAstronaut} style={{ fontSize: '24px' }} />
      <ul className="account-action bg-sky-300">
        <li>
          <Link href="/login">
            <p>Đăng nhập</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p>Đăng ký</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Account
