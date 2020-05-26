import Vue from 'vue'
import Vuex from 'vuex'
import { setToken, getToken } from '@/libs/util'
import { login } from '_api/auth'
import { user_info } from '_api/user'
import { getSettings } from "_api/setting";
import { img_url } from "@/config";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: img_url,
    token: getToken(),
    user: '',
    settings: null,
    openidKey: ''
  },
  mutations: {
    setToken(state, token, day) {
      state.token = token
      setToken(token, day)
    },
    setUser(state,data){
      state.user = data
    },
    setSettings(state,data){
      state.settings = data
    },
    setOpenidKey(state, openidKey) {
      state.openidKey = openidKey
    },
  },
  actions: {
    // 退出登录
    handleLogOut({ state, commit }) {
      return new Promise((resolve, reject) => {
        commit('setToken', '')
        resolve()
      })
    },
    login({dispatch, commit},data){
      return new Promise((resolve, reject)=>{
        login(data).then(res=>{
          if(res.openid_key){
            commit('setOpenidKey', res.openid_key)
            resolve(res)
          }else{
            let { expires_in, access_token } = res
            commit('setToken',access_token, expires_in/86400)
            dispatch('getUserInfo').then(res=>{
              resolve(res)
            })
          }

        })
      })
    },
    // 获取用户相关信息
    getUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        user_info().then(res => {
          commit('setUser',res)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    //获取基本配置
    Settings({state, commit}){
      return new Promise((resolve, reject) => {
        getSettings().then(res => {
          let { images, product, sub_img_link, sub_img, images_link } = res;
          res.sub_img = JSON.parse(sub_img)
          if(sub_img_link){
            res.sub_img_link = sub_img_link.split(';')
          }
          if(images_link){
            res.images_link = images_link.split(';')
          }
          res.swipe_list = images.data.map(item => {
            item.url = state.url + item.url;
            return item;
          });
          if(product) {
            res.product.image  = state.url + product.image
          }
          res.top_product = product
          commit('setSettings',res)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  },
  modules: {
  }
})
