import axios from '@/libs/api.request'




export function createReserves(params) {
  return axios.request({
    url: '/api/reserves',
    method: 'post',
    data: params,
  })
}

export function getReserve(params) {
  return axios.request({
    url: '/api/user/reserve',
    method: 'get',
    params,
  })
}
