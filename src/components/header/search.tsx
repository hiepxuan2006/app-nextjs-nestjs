/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
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
  console.log(search)
  return (
    <div className="search">
      <div className="input">
        <input
          className={`input-search ${showBox ? 'show-box' : ''}`}
          type="text"
          name="search"
          id=""
          onChange={handleChangeSearch}
        />
        <div
          className={`search-loading ${
            showBox && loading ? 'show-loading' : ''
          }`}
        >
          <FontAwesomeIcon icon={faSpinner} />
        </div>
      </div>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        onClick={() => handleShowBoxSearch()}
        style={{ cursor: 'pointer', fontSize: '24px', padding: '0 10px' }}
      />
    </div>
  )
}
