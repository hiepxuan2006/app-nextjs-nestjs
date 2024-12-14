/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// 'use client'
import axios from 'axios'
import { Fragment } from 'react'
import TabNewFilm from './tabNewFilm'

async function getData(slug: string) {
  const { data } = await axios(
    `https://ophim1.com/v1/api/danh-sach/${slug}?page=1&sort_field=year`
  )
  if (data.status === 'success') return data.data
  else return null
}

export async function getStaticProps() {
  const res = await axios(
    `https://ophim1.com/v1/api/danh-sach/${slug}?page=1&sort_field=year`
  )
  console.log(res)
  // if (res.status === 'succes') {
  //   console.error('Unable to fetch data!')
  //   return {
  //     props: {
  //       data: {},
  //     },
  //   }
  // }

  // return {
  //   props: {
  //     data: await res.data.json(),
  //   },
  // }
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
