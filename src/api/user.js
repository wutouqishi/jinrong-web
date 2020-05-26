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
    url: '/api/user/payments',
    method: 'get',
    params:data,
  })
}
export function processing(params) {
  return axios.request({
    url: `/api/users/${params.id}/processing?include=productSimple`,
    method: 'get',
    params,
  })
}

export function reserved(params) {
  return axios.request({
    url: `/api/users/${params.id}/reserved?include=productSimple`,
    method: 'get',
    params,
  })
}

export const getProcessing = (data)=>{
  return axios.request({
    url: `/api/users/${data.id}/processing?include=productSimple`,
    method: 'get',
    params:data
  })
}

export function getOneProduct(id) {
  return axios.request({
    url: `/api/user/products/${id}?include=payments,image,incomes`,
    method: 'get',
  })
}

export function finished(params) {
  return axios.request({
    url: `/api/users/${params.id}/finished?include=productSimple`,
    method: 'get',
    params,
  })
}

export const qr_code = (id)=>{
  return axios.request({
    url: `/api/code/qrCode`,
    method: 'get',
    params:{
      id
    },
  })
}

export function userLog(params) {
  return axios.request({
    url: '/api/user/fxlog',
    method: 'get',
    params,
  })
}

export function getVerifiedUrl(params) {
  return axios.request({
    url: `/api/user-verified/${params.id}`,
    method: 'post',
    params,
  })
}

export function contract(params) {
  return axios.request({
    url: `/api/user/contract?include=productSimple,images`,
    method: 'get',
    params,
  })
}


export function getContract(params) {
  return axios.request({
    url: `/api/user/download-contract/${params.flowId}`,
    method: 'get',
  })
}

export function cert(params) {
  return axios.request({
    url: `/api/user/order/cert/${params.id}`,
    method: 'post',
    data: params,
  })
}

export function sign(params) {
  return axios.request({
    url: `/api/sign_in/sign`,
    method: 'post',
    data: params,
  })
}