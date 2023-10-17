'use client'
import {
  faHome,
  faPaperPlane,
  faTable,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Chats from '../messages/chat'
import Link from 'next/link'

const NavMobile = () => {
  const [isBoxChat, setIsBoxChat] = useState(false)
  return (
    <div className="fixed h-[var(--height-header)] left-0 bottom-0 border-t-2 border-slate-500 w-full flex gap-2 items-center justify-around md:hidden z-100 bg-white">
      <Link
        href="/"
        className="home flex px-2 flex-col items-center justify-center h-full"
      >
        <FontAwesomeIcon icon={faHome} />
        <p>Home</p>
      </Link>
      <div className="home flex px-2 flex-col items-center justify-center h-full">
        <FontAwesomeIcon icon={faTable} />
        <p>Store</p>
      </div>
      <div
        onClick={() => setIsBoxChat(!isBoxChat)}
        className="home flex px-2 flex-col items-center justify-center h-full"
      >
        <FontAwesomeIcon icon={faPaperPlane} />
        <p>Message</p>
      </div>
      {isBoxChat && <Chats setIsBoxChat={setIsBoxChat} />}
    </div>
  )
}

export default NavMobile
