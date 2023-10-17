import createAPIServices from './request'

const ApiUrl = process.env.API_URL
const ApiUrlDev = process.env.NEXT_PUBLIC_API_URL_DEV
const baseUrl =
  process.env.NODE_ENV === 'production' ? `${ApiUrl}` : `${ApiUrlDev}`

export const api = createAPIServices({ baseUrl })
