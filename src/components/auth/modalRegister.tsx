/* eslint-disable @next/next/no-img-element */
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  Fragment,
  SetStateAction,
  useState,
} from 'react'
import CustomButton from '../customButton'

type dataRegister = {
  email: string
  password: string
  passwordConfirm: string
}

interface IAppProps {
  isVisible?: boolean
  setIsLogin: Dispatch<SetStateAction<boolean>>
}
export const ModalRegister = ({ setIsLogin }: IAppProps) => {
  const [isHiddenPassword, setIsHiddenPassword] = useState(false)
  const [dataRegister, setDataRegister] = useState<dataRegister>({
    email: '',
    password: '',
    passwordConfirm: '',
  })
  const { email, password } = dataRegister
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDataRegister({ ...dataRegister, [e.target.name]: e.target.value })
  }

  const handleClick = (e: FormEvent) => {
    e.preventDefault()
  }
  return (
    <Fragment>
      <h1 className="text-2xl font-semibold my-4">Register</h1>
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
        <div className="form-input w-full text-slate-950 relative">
          <input
            onChange={handleChange}
            className="outline-none w-full rounded-full p-3 "
            placeholder="******"
            type={`${isHiddenPassword ? 'text' : 'password'}`}
            name="passwordConfirm"
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
        <CustomButton text={'Register'} type="submit" />
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
      <div onClick={() => setIsLogin(true)} className="text-lg">
        Login now !
      </div>
    </Fragment>
  )
}
