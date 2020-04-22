import Vue from 'vue'
import Vuex from 'vuex'
import { setToken, getToken } from '@/libs/util'
import { login } from '_api/auth'
import { user_info } from '_api/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url:'http://apiv2.d.kmdtkj.com/',
    token: getToken(),
    user:null
  },
  mutations: {
    setToken(state, token, day) {
      state.token = token
      setToken(token, day)
    },
    setUser(state,data){
      state.user = data
    }
  },
  actions: {
    // 退出登录
    handleLogOut({ state, commit }) {
      return new Promise((resolve, reject) => {
        commit('setToken', '')
        resolve()
      })
    },
    login({state, commit},data){
      return new Promise((resolve, reject)=>{
        login(data).then(res=>{
          let { expires_in, access_token } = res
          commit('setToken',access_token, expires_in/86400)
          resolve(res)
        })
      })
    },
    // 获取用户相关信息
    getUserInfo({ state, commit }) {
      return new Promise((resolve, reject) => {
        user_info().then(res => {
          commit('setUser',res)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
  },
  modules: {
  }
})
