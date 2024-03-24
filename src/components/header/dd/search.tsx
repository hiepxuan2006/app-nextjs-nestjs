/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import {
  faClose,
  faMagnifyingGlass,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export interface IAppProps {}

export default function Search() {
  const [showBox, setShowBox] = useState(false)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const handleShowBoxSearch = () => {
    setShowBox(!showBox)
  }
  const handleChangeSearch = (e: any) => {
    setSearch(e.target.value)
  }
  return (
    <div className="search  h-full flex items-center">
      {showBox && (
        <div className="input absolute shadow-inner md:rounded-md top-0 flex z-50 h-full right-0 w-full gap-2 bg-white items-center px-2 md:w-1/3 md:right-0 md:top-full ">
          <FontAwesomeIcon
            icon={faClose}
            className="text-2xl"
            onClick={() => setShowBox(!showBox)}
          />
          <input
            className={`input-search shrink-0 flex-1 h-full px-2 outline-none ${
              showBox ? 'show-box' : ''
            }`}
            type="text"
            name="search"
            id=""
            placeholder="Bạn muons tìm gì ?"
            onChange={handleChangeSearch}
          />
          <div
            className={`search-loading ${
              showBox && loading ? 'block animate-spin' : 'hidden'
            }`}
          >
            <FontAwesomeIcon icon={faSpinner} />
          </div>
        </div>
      )}
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        onClick={() => handleShowBoxSearch()}
        style={{ cursor: 'pointer', fontSize: '24px', padding: '0 10px' }}
      />
    </div>
  )
}
