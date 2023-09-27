import * as React from 'react'
import NextTopLoader from 'nextjs-toploader'

export interface ILoadingProps {}

export default function Loading() {
  return (
    <NextTopLoader
      color="#dd2222"
      initialPosition={1}
      crawlSpeed={200}
      height={3}
      crawl={false}
      showSpinner={false}
      speed={200}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
    />
  )
}
