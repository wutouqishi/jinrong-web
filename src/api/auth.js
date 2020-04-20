import axios from '@/libs/api.request'

export const login =(data)=> {
  return axios.request({
    url: '/api/auth/users',
    method: 'post',
    data
  })
}

export const bind = (data) => {
  return axios.request({
    url: '/api/auth/users',
    method: 'put',
    data,
  })
}
