/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const Notfound = () => {
  return (
    <div
      className="font-sans antialiased bg-black  text-white  grid min-h-screen place-content-center overflow-hidden"
      data-v-ccd3db62=""
    >
      <div
        className="fixed left-0 right-0 spotlight z-30"
        data-v-ccd3db62=""
      ></div>
      <div className="max-w-520px text-center z-20" data-v-ccd3db62="">
        <h1
          className="text-8xl sm:text-10xl font-medium mb-8"
          data-v-ccd3db62=""
        >
          404
        </h1>
        <p
          className="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 "
          data-v-ccd3db62=""
        >
          Page Not Found
        </p>
        <div
          className="w-full flex items-center justify-center"
          data-v-ccd3db62=""
        >
          <Link
            href="/"
            className="gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
            data-v-ccd3db62=""
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Notfound
