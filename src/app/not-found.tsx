import Link from 'next/link'

/* eslint-disable @next/next/no-img-element */
const Notfound = () => {
  return (
    <div className="fixed top-0  left-0 right-0 bottom-0 z-50 h-full w-full bg-white flex items-center justify-center">
      <div className=" flex h-2/3 w-2/3 items-center justify-center flex-col relative">
        <img
          src="/image/404.jpg"
          alt="404"
          className=" h-full w-full object-contain relative"
        />
        <button className=" border-2 p-2 rounded-md absolute bottom-0 w-60   bg-white">
          <Link href="/">Go to home</Link>
        </button>
      </div>
    </div>
  )
}

export default Notfound
