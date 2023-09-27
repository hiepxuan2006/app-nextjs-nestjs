/* eslint-disable @typescript-eslint/no-explicit-any */
import createAPIServices from './request'

const ApiUrl = process.env.API_URL
const ApiUrlDev = process.env.API_URL_DEV
const baseUrl =
  process.env.NODE_ENV !== 'production'
    ? `${ApiUrl}/account`
    : `${ApiUrlDev}/account`

const api = createAPIServices({ baseUrl })

export const login = (data: any) => {
  return api.makeRequest({
    url: '/auth/google',
    method: 'post',
    data: data,
  })
}

export const register = (data: any) => {
  return api.makeRequest({
    url: ApiUrl,
    method: 'post',
    data,
  })
}
