'use client'
import Header from '@/components/header'
import Message from '@/components/messages'
import { Notify } from '@/utils/toast'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { motion } from 'framer-motion'
import NextTopLoader from 'nextjs-toploader'
import '../styles/globals.scss'
import Providers from './Provider'
config.autoAddCss = false

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{}}>
      <body>
        <Providers>
          <NextTopLoader color="#dd2222" height={3} showSpinner={false} />
          <Header />
          <motion.div layout transition={{ type: 'tween' }}>
            <div className=" my-16 mx-auto w-full px-2 xl:w-[1200px]">
              {children}
            </div>
          </motion.div>
          <Message />
          {/* <Footer /> */}
          <Notify />
        </Providers>
      </body>
    </html>
  )
}
