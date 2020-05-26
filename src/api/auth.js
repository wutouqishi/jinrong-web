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

export const verificationCode = (data)=>{
  return axios.request({
    url: '/api/verificationCodes',
    method: 'post',
    data: data
  })
}

// export function bind(params) {
//   return axios.request({
//     url: 'auth/users',
//     method: 'put',
//     data: params
//   })
// }