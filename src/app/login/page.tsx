/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { AnimatePresence } from 'framer-motion'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { ReactNode } from 'react'
export interface LayoutProps {}

function Login() {
  const loginWithGoogle = async () => {
    const newwin2 = window.open('http://localhost:3300/auth/google', '_self')
  }

  return (
    <AnimatePresence>
      <div className="login">
        <div className="background" />
        <section className="login-page">
          <div className="login-form">
            <h2> Login </h2>
            <div className="input-controller">
              <input type="text" className="input-form" placeholder="Email" />
              <i className="fa-solid fa-envelope" />
            </div>
            <div className="input-controller">
              <input
                type="password"
                className="input-form"
                placeholder="Password"
              />
              <i className="fa-solid fa-lock" />
            </div>
            <div className="check">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#"> Forgot Password?</a>
            </div>
            <div className="button">
              <button className="btn"> Login </button>
            </div>
            <div className="login-social  flex gap-2 ">
              <div
                onClick={() => loginWithGoogle()}
                className="button  flex-1 login-google"
              >
                <button className="btn bg-slate-50">
                  <Image
                    alt="google"
                    src="/image/google.png"
                    height={30}
                    width={30}
                  />
                </button>
              </div>
              <div
                onClick={() => signIn('facebook')}
                className="button  flex-1 login-facebook"
              >
                <button className="btn bg-slate-50">
                  <Image
                    alt="facebook"
                    src="/image/facebook.png"
                    height={30}
                    width={30}
                  />
                </button>
              </div>
            </div>
            <div className="sign-up gap-2">
              <p> Don't have an account?</p>
              <a href="#">Sign up</a>
            </div>
          </div>
          <div className="content">
            <h2> Welcome!</h2>
            <h3> To Our Nem Website </h3>
            <pre>
              Lorem ipsum, dolor sit amen consenter {'\n'}
              adipisicing elit. Beatae,asperiores
            </pre>
            <div className="icon">
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-twitter" />
              <i className="fa-brands fa-github" />
            </div>
          </div>
        </section>
      </div>
    </AnimatePresence>
  )
}

Login.getLayout = (page: ReactNode) => page
export default Login
