import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export interface IAppProps {}

export default function Cart() {
  return (
    <div className="cart">
      <FontAwesomeIcon icon={faCartArrowDown} style={{ fontSize: '24px' }} />
      <div className="cart-quantity">
        <p className="quantity">0</p>
      </div>
    </div>
  )
}
