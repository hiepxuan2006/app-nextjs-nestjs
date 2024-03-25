'use client'
import { faClose, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/legacy/image"
import { Fragment, useState } from 'react'
import CustomButton from '../customButton'

const Message = () => {
  const [isBoxChat, setIsBoxChat] = useState(false)
  return (
    <Fragment>
      {!isBoxChat && (
        <div className=" fixed right-0 hidden md:block animation-chat  cursor-pointer bottom-16">
          <div className="animation" onClick={() => setIsBoxChat(true)}>
            {/* <div className="message-circle"></div> */}
            <div className="message-fill"></div>
            <Image
              className="animation-img"
              src="/image/live-chat.png"
              alt="chat"
              width={40}
              height={40}
            />
          </div>
          <div className="animation">
            {/* <div className="message-circle"></div> */}
            <div className="message-fill"></div>
            <Image
              className="animation-img"
              src="/image/zalo-logo.png"
              alt="chat"
              width={50}
              height={50}
            />
          </div>
        </div>
      )}
      {isBoxChat && (
        <div className="box-chats h-96 w-72 flex flex-col  bg-sky-50 fixed right-2 bottom-4 z-50 rounded-md border-2 border-slate-400 ">
          <div className="box-chat-header border-b-2 p-2">
            <span
              className=" absolute inline-flex h-3 w-3 right-2 cursor-pointer opacity-75"
              onClick={() => setIsBoxChat(false)}
            >
              <FontAwesomeIcon icon={faClose} />
            </span>
            <p>My home</p>
          </div>
          <div className="box-chat-content shrink-0 flex-1 border-b-2 bg-white">
            content
          </div>
          <div className="box-chat-btn p-2  flex gap-1 items-center">
            <FontAwesomeIcon icon={faPaperclip} />
            <input
              type="text"
              className="py-1 px-2 outline-none rounded-md border-2 border-slate-400"
            />
            <CustomButton text="Send" />
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Message
