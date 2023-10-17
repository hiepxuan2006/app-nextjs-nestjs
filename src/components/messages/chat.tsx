'use client'
import { faClose, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomButton from '../customButton'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  setIsBoxChat: Dispatch<SetStateAction<boolean>>
}
const Chats = ({ setIsBoxChat }: Props) => {
  return (
    <div className="box-chats  h-full w-full flex flex-col  bg-sky-50 fixed top-0 left-0 z-50 rounded-md border-2 border-slate-400 ">
      <div className="box-chat-header border-b-2 p-2 h-16 flex items-center">
        <span className=" absolute inline-flex h-3 w-3 right-2 cursor-pointer opacity-75">
          <FontAwesomeIcon icon={faClose} onClick={() => setIsBoxChat(false)} />
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
          className="py-1 px-2 outline-none rounded-md border-2 grow border-slate-400"
        />
        <CustomButton text="Send" />
      </div>
    </div>
  )
}

export default Chats
