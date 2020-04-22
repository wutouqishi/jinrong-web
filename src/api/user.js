import axios from '@/libs/api.request'

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
