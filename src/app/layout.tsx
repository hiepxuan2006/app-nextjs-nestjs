import Footer from '@/components/footer'
import Header from '@/components/header'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
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
    <html lang="en">
      <body>
        <Providers>
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
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
