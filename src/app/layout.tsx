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
import Footer from '@/components/footer'
config.autoAddCss = false

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{}}>
      <body>
        <div className="bg-[#424040] text-gray-200">
          <div className="bg-[#151414] max-w-[1024px] mx-auto md:px-4 px-1">
            <Providers>
              <NextTopLoader color="#dd2222" height={3} showSpinner={false} />
              <Header />
              <motion.div layout transition={{ type: 'tween' }}>
                <div className=" mt-4 ">
                  {children}
                  <Footer />
                </div>
              </motion.div>
              <Message />
              <Notify />
            </Providers>
          </div>
        </div>
      </body>
    </html>
  )
}
