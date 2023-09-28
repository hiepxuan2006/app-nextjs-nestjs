'use client'
import Header from '@/components/header'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import NextTopLoader from 'nextjs-toploader'
import '../styles/globals.scss'
import Providers from './Provider'
import { motion } from 'framer-motion'
config.autoAddCss = false

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* <motion.div
            className="flex flex-row w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          > */}
          <NextTopLoader color="#dd2222" height={3} showSpinner={false} />
          <Header />
          <motion.div layout transition={{ type: 'tween' }}>
            <div className=" mt-16 mx-auto">{children}</div>
          </motion.div>
          {/* </motion.div> */}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  )
}
