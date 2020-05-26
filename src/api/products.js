import axios from '@/libs/api.request'

// export const login =(data)=> {
//   return axios.request({
//     url: '/api/auth/users',
//     method: 'post',
//     data
//   })
// }
export const getSettings=()=>{
  return axios.request({
    url: '/api/user/settings?include=images,product',
    method: 'get',
  })
}

export function getPayment(id) {
  return axios.request({
    url: `/api/user/payment/${id}?include=product`,
    method: 'get',
  })
}

export function getProducts(params) {
  return axios.request({
    url: '/api/user/products',
    method: 'get',
    params,
  })
}