/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios'
import store from '@/store'
import { Toast, Form } from 'vant'
import Router from '@/router/index'
import { getToken, setToken } from '@/libs/util'
import { url } from '@/config'
class HttpRequest {
  constructor () {
    this.baseURL = url
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL:  this.baseURL,
      headers: {
        'content-type':'application/json;charset=UTF-8',
        'Authorization':`Bearer ${store.state.token}`
      }
    }
    return config
  }
  destroy (url) {
    delete this.queue[url]
  }
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(url)
      
      if (res.status === 403){
        Toast.fail('访问受限');
      }else if (res.status === 401){
        setToken('')
        Toast.fail('授权过期，重新登录');
      }else if (res.status >= 400){
        setToken('')
        return res.data
        // Toast.fail('发生错误，请重试');
      }else {
        return res.data
      }

    }, error => {
      this.destroy(url)
      let errorInfo = error.response
      if (!errorInfo) {

      }
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
