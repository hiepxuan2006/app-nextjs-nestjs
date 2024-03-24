import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  setIsVisible: Dispatch<SetStateAction<boolean>>
}
function Account({ setIsVisible }: Props) {
  return (
    <div className="account order-2 relative h-full flex items-center cursor-pointer p-2">
      <FontAwesomeIcon icon={faUserAstronaut} style={{ fontSize: '24px' }} />
      <ul className="account-action bg-sky-300 absolute w-[200px] top-full rounded-md overflow-hidden hidden right-0">
        <li className="p-2 cursor-pointer text-black hover:bg-primary">
          <button onClick={() => setIsVisible(true)}>
            <p>Đăng nhập/ Đăng ký</p>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Account
