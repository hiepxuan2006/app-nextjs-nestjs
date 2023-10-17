/* eslint-disable @typescript-eslint/no-explicit-any */

import { api } from './api'

export const loginGoogle = (data: any) => {
  return api.makeRequest({
    url: '/auth/google',
    method: 'post',
    data: data,
  })
}

export const login = (data: any) => {
  return api.makeRequest({
    url: '/auth/login',
    method: 'post',
    data: data,
  })
}

export const register = (data: any) => {
  return api.makeRequest({
    url: '/auth/register',
    method: 'post',
    data,
  })
}
