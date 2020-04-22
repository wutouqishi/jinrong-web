import axios from '@/libs/api.request'

export const user_info = () =>{
  return axios.request({
    url: '/api/user',
    method: 'get',
  })
}

export const getProducts=(data)=>{
  return axios.request({
    url: '/api/user/products',
    method: 'get',
    params:data,
  })
}
export const getPayments=(data)=>{
  return axios.request({
    url: 'api/user/payments',
    method: 'get',
    params:data,
  })
}
