/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'
import Router from '@/router/index'
import { getToken, setToken } from '@/libs/util'

// state

class HttpRequest {
  constructor (publicPath = publicPath) {
    this.publicPath = publicPath
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      publicPath: this.publicPath,
      withCredentials: true,
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
      const { data } = res

      if (res.status === 200){
        return data
      }
      if (res.status === 403){
        Toast.fail('访问受限');
      }
      if (res.status === 401){
        setToken('')
        Toast.fail('授权过期，重新登录');
      }
      if (res.status >= 400){
        Toast.fail('发生错误，请重试');
      }
      // if (res.status === 200) {
      //   if (data.code === -1) {
      //     setToken('')
      //     Router.push({ name: 'login' })
      //     return Promise.reject()
      //   } else {
      //     return data
      //   }
      // } else {

      //   return Promise.reject()
      // }
    }, error => {
      this.destroy(url)
      let errorInfo = error.response
      if (!errorInfo) {
        const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
        errorInfo = {
          statusText,
          status,
          request: { responseURL: config.url }
        }
      }
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    if (options.headers) {
      options.headers = Object.assign(this.getInsideConfig().headers, options.headers)
    }
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
