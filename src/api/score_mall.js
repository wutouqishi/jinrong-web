import axios from '@/libs/api.request'
//产品列表
export const goods_all =(data)=> {
  return axios.request({
    url: '/api/score_mall/goods_all',
    method: 'post',
    data
  })
}
//商品详情
export const goods_details =(data)=> {
  return axios.request({
    url: '/api/score_mall/goods_details',
    method: 'post',
    data
  })
}
// 添加编辑收货地址
export const add_address =(data)=> {
  return axios.request({
    url: '/api/score_mall/add_address',
    method: 'post',
    data
  })
}
//地址列表
export const address_list = (data) => {
  return axios.request({
    url: '/api/score_mall/address_list',
    method: 'post',
    data
  })
}
// 删除收货地址
export const delete_address = (data) => {
  return axios.request({
    url: '/api/score_mall/delete_address',
    method: 'post',
    data
  })
}
// 兑换产品
export const add_order = (data) => {
  return axios.request({
    url: '/api/score_mall/add_order',
    method: 'post',
    data
  })
}
//订单列表
export const order_list_Web = (data) => {
  return axios.request({
    url: '/api/score_mall/order_list_Web',
    method: 'post',
    data
  })
}
//订单详情
export const order_express_no = (data) => {
  return axios.request({
    url: '/api/score_mall/order_express_no',
    method: 'post',
    data
  })
}
//确认收货
export const order_receipt = (data) => {
  return axios.request({
    url: '/api/score_mall/order_receipt',
    method: 'post',
    data
  })
}