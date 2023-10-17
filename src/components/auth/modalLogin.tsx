/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client'

import {
  getLocalData,
  removeLocalData,
  setLocalData,
} from '@/services/storeageServices'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  Fragment,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import CustomButton from '../customButton'
import { login } from '@/services/auth'
import { toastAlert } from '@/utils/toast'

export interface IAppProps {
  isVisible?: boolean
  setIsVisible?: Dispatch<SetStateAction<boolean>>
  setIsLogin: Dispatch<SetStateAction<boolean>>
}

type dataLogin = {
  email: string
  password: string
}

export default function ModalLogin({ setIsLogin }: IAppProps) {
  const [isHiddenPassword, setIsHiddenPassword] = useState(false)
  const [isRemember, setIsRemember] = useState(false)
  const [loading, setLoading] = useState(false)
  const [dataLogin, setDataLogin] = useState<dataLogin>({
    email: '',
    password: '',
  })
  const { email, password } = dataLogin
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDataLogin({ ...dataLogin, [e.target.name]: e.target.value })
  }

  const onChangeRemember = (e: ChangeEvent<HTMLInputElement>) => {
    setIsRemember(e.target.checked)
  }

  useEffect(() => {
    const savedEmail = getLocalData('email')
    const savedPassword = getLocalData('password')

    if (savedEmail && savedPassword) {
      setIsRemember(true)
      setDataLogin({ email: savedEmail, password: savedPassword })
    } else {
      removeLocalData('email')
      removeLocalData('password')
    }
  }, [])
  const handleClick = async (e: FormEvent) => {
    e.preventDefault()
    if (isRemember) {
      setLocalData('email', email)
      setLocalData('password', password)
      setLocalData('remember', isRemember)
    }

    try {
      setLoading(true)
      const data = await login({ email, password })
      console.log(data)
    } catch (error: any) {
      toastAlert('error', error?.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Fragment>
      <h1 className="text-2xl font-semibold my-4">Login</h1>
      <form
        onSubmit={handleClick}
        className="form-control  w-full flex flex-col gap-3 it"
      >
        <div className="form-input w-full text-slate-950">
          <input
            onChange={handleChange}
            className="outline-none w-full rounded-full p-3 "
            placeholder="example@gmail.com ..."
            type="text"
            name="email"
            required
            value={email}
          />
        </div>
        <div className="form-input w-full text-slate-950 relative">
          <input
            onChange={handleChange}
            className="outline-none w-full rounded-full p-3 "
            placeholder="******"
            type={`${isHiddenPassword ? 'text' : 'password'}`}
            name="password"
            required
            value={password}
          />

          {isHiddenPassword ? (
            <FontAwesomeIcon
              icon={faEye}
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setIsHiddenPassword(false)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faEyeSlash}
              onClick={() => setIsHiddenPassword(true)}
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
            />
          )}
        </div>
        <label
          htmlFor="remember"
          title="Remember"
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            onChange={onChangeRemember}
            type="checkbox"
            name=""
            id="remember"
            title="Remember"
            checked={isRemember}
          />
          <span>Remember</span>
        </label>
        <CustomButton loading={loading} text={'Login'} type="submit" />
      </form>
      <span>Hoặc</span>
      <div className="login-social flex items-center justify-center gap-4 w-full">
        <div className="login-facebook h-8 w-8 cursor-pointer  ">
          <img
            src="/image/facebook.png"
            alt="google"
            className="h-full w-full object-fill"
          />
        </div>
        <div className="login-google h-8 w-8 cursor-pointer ">
          <img
            src="/image/google.png"
            alt="google"
            className="h-full w-full object-fill"
          />
        </div>
      </div>
      <div className="text-lg" onClick={() => setIsLogin(false)}>
        Create account now !
      </div>
    </Fragment>
  )
}
