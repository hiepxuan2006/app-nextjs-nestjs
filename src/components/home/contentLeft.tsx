/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import React from 'react'
async function getData(slug: string) {
  try {
    const { data } = await axios(
      `https://ophim1.com/v1/api/danh-sach/phim-aaahot?page=1&sort_field=year&category=&country=${slug}&year=`
    )
    if (data.status === 'success') return data.data
    else return null
  } catch (error) {
    return null
  }
}
const ContentLeft = async (props: any) => {
  // const data = await getData('')
  console.log(props)
  // if (!data) return <div>Lỗi</div>
  return (
    <div>
      {/* {data.items.map((item: any, index: number) => {
        return <p key={index}>{item.name}</p>
      })} */}
    </div>
  )
}

export default ContentLeft
