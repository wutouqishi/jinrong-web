import axios from '@/libs/api.request'

// export const login =(data)=> {
//   return axios.request({
//     url: '/api/auth/users',
//     method: 'post',
//     data
//   })
// }
export const getSettings=()=>{
  return request({
    url: '/api/user/settings?include=images,product',
    method: 'get',
  })
}