import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export interface IAppProps {}

export default function Cart() {
  return (
    <div className="cart flex h-full items-center p-2 relative cursor-pointer">
      <Link href="/order">
        <FontAwesomeIcon icon={faBagShopping} style={{ fontSize: '24px' }} />
        <div className="cart-quantity absolute top-1 -right-2 h-[24px] flex items-center justify-center rounded-full">
          <p className="quantity">0</p>
        </div>
      </Link>
    </div>
  )
}
