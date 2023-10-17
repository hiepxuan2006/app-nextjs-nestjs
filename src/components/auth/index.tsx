/* eslint-disable @next/next/no-img-element */
'use client'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dispatch, SetStateAction, useState } from 'react'
import ModalLogin from './modalLogin'
import { ModalRegister } from './modalRegister'
export interface IAppProps {
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
}
const ModalAuth = ({ isVisible, setIsVisible }: IAppProps) => {
  const [isLogin, setIsLogin] = useState(true)
  if (!isVisible) return null

  return (
    <div className="news-modal-overlay fixed top-0 left-0 right-0 bottom-0 bg-sky-600 z-[110] bg-opacity-30 backdrop-blur-sm flex items-center justify-center h-full w-full">
      <div className="news-modal-body flex bg-gray-500 relative h-full w-full lg:h-2/3 lg:w-1/2  md:w-3/4 md:h-2/3 md:rounded-md">
        <div className="btn-close absolute top-0 right-0 p-2 text-2xl cursor-pointer hover:scale-125 ">
          <FontAwesomeIcon icon={faClose} onClick={() => setIsVisible(false)} />
        </div>
        <div className="modal-body-left lg:w-1/3 bg-primary h-full hidden lg:flex flex-col items-center justify-center">
          <img alt="facebook" src="/image/login.webp" />
          <h1 className="text-2xl font-semibold">Welcome !!!</h1>
        </div>
        <div className="modal-body-right flex md:shrink-0  items-center justify-center gap-10 md:gap-2 flex-col w-full  lg:w-2/3 h-full p-2">
          {isLogin ? (
            <ModalLogin setIsLogin={setIsLogin} />
          ) : (
            <ModalRegister setIsLogin={setIsLogin} />
          )}
        </div>
      </div>
    </div>
  )
}

export default ModalAuth
