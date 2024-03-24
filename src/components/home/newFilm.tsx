/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// 'use client'
import axios from 'axios'
import Link from 'next/link'
import { Fragment } from 'react'
import TabNewFilm from './tabNewFilm'

async function getData(slug: string) {
  const { data } = await axios(
    `https://ophim1.com/v1/api/danh-sach/${slug}?page=1&sort_field=year`
  )
  if (data.status === 'success') return data.data
  else return null
}

const NewFilm = async () => {
  const phimLe = await getData('phim-le')
  const phimBo = await getData('phim-bo')
  if (!phimLe) return ''
  return (
    <Fragment>
      <TabNewFilm phimBo={phimBo} phimLe={phimLe} />
    </Fragment>
  )
}

export default NewFilm
