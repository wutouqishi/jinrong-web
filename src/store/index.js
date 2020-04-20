import Vue from 'vue'
import Vuex from 'vuex'
import { setToken, getToken } from '@/libs/util'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken(),
    user:{}
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
    // // 获取用户相关信息
    // getUserInfo({ state, commit }) {
    //   return new Promise((resolve, reject) => {
    //     try {
    //       user_info().then(res => {
    //         const { data, code } = res
    //         if (code === 0) {
    //           commit('setUser', data)
    //           resolve(res)
    //         } else {
    //           reject(res)
    //         }
    //       }).catch(err => {
    //         reject(err)
    //       })
    //     } catch (error) {
    //       reject(error)
    //     }
    //   })
    // },
  },
  modules: {
  }
})
