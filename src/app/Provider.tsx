'use client'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Providers = (props: Props) => {
  return (
    <SessionProvider>
      {/* <ThemeProvider attribute="class">{props.children}</ThemeProvider> */}
      {props.children}
    </SessionProvider>
  )
}

export default Providers
