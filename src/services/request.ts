import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { getAccessToken } from './localStoreage'

const _makeRequest =
  (createRequest: AxiosInstance) => async (args: AxiosRequestConfig) => {
    const _headers = args.headers ? args.headers : {}

    const defaultHeaders = {}

    args = {
      ...args,
      headers: {
        ...defaultHeaders,
        ..._headers,
      },
    }

    try {
      const { data } = await createRequest(args)

      return data
    } catch (e) {
      throw e
    }
  }

const _makeAuthRequest =
  (createRequest: AxiosInstance) => async (args: AxiosRequestConfig) => {
    const requestHeaders = args.headers ? args.headers : {}
    const accessToken = getAccessToken()

    let headers = {
      Authorization: `Bearer ${accessToken}`,
      'cache-control': 'no-cache',
    }

    args = {
      ...args,
      headers: {
        ...headers,
        ...requestHeaders,
      },
    }

    return await _makeRequest(createRequest)(args)
  }
// eslint-disable-next-line import/no-anonymous-default-export
const createAPIServices = (_options: { baseUrl: string }) => {
  const baseUrlValidated = _options.baseUrl

  const configs = {
    baseURL: baseUrlValidated,
    timeout: 30000,
    validateStatus: function (status: number) {
      return status >= 200
    },
  }
  const instance = axios.create(configs)

  return {
    makeRequest: _makeRequest(instance),
    makeAuthRequest: _makeAuthRequest(instance),
  }
}
const baseUrl = `${process.env.REACT_APP_BASE_URL_API}`
const api = createAPIServices({ baseUrl })
export const uploadImage = (data: FormData) => {
  return api.makeRequest({
    url: '/upload',
    method: 'post',
    data,
  })
}
export default createAPIServices
