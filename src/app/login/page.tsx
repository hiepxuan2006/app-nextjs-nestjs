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
      <div className="login  flex justify-center mx-2">
        <section className="login-page  rounded-md w-full lg:w-96  p-4">
          <div className="login-form flex items-center gap-2 flex-col">
            <h2 className="text-xl font-normal"> Login </h2>
            <div className="input-controller w-full p-2 ">
              <input
                type="text"
                className="input-form w-full p-2 rounded-md outline-none border-default border-black "
                placeholder="Email"
              />
              <i className="fa-solid fa-envelope" />
            </div>
            <div className="input-controller w-full p-2   ">
              <input
                type="password"
                className="input-form w-full p-2 rounded-md border-default border-black outline-none "
                placeholder="Password"
              />
              <i className="fa-solid fa-lock" />
            </div>
            <div className="check flex justify-between w-full p-2 ">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#"> Forgot Password?</a>
            </div>
            <div className="button p-2  w-full">
              <button className="btn bg-[#A3765D] text-xl p-2"> Login </button>
            </div>
            <div className="login-social mt-2  flex gap-2 ">
              <div
                onClick={() => loginWithGoogle()}
                className="button  flex-1 login-google"
              >
                <button className="btn  p-2 bg-[#A3765D]">
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
                <button className="btn  p-2 bg-[#A3765D]">
                  <Image
                    alt="facebook"
                    src="/image/facebook.png"
                    height={30}
                    width={30}
                  />
                </button>
              </div>
            </div>
            <div className="sign-up gap-2 flex gap-2">
              <p> Don't have an account?</p>
              <a href="#">Sign up</a>
            </div>
          </div>
        </section>
      </div>
    </AnimatePresence>
  )
}

Login.getLayout = (page: ReactNode) => page
export default Login
