import Link from 'next/link'
export const metadata = {
  title: 'Home page',
  description: 'Generated by create next app',
}
function Home() {
  return (
    <div className="Home page">
      <Link href={'/login'}>đăng nhập</Link>
    </div>
  )
}

export default Home