import axios from '@/libs/api.request'

export const getSettings=()=>{
  return axios.request({
    url: '/api/user/settings?include=images,product',
    method: 'get',
  })
}