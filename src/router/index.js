import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import { getToken } from '@/libs/util'
import routes from './routes'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

const filter = ['login', 'forgotten', 'agreement']
//路由
router.beforeEach((to, from, next) => {

  const token = getToken()
  if(!store.state.settings){
    store.dispatch('Settings').then(res=>{
      next()
    })
  }
  if (!token) {
    store.dispatch('login', { code: 'sdkfojsdaolfjoisajdiof' }).then(res => {
      next()
    })
   
  } else {
    // 获取用户信息
    if(!store.state.user){
      store.dispatch('getUserInfo').then(res=>{
        next()
      })
    }else{
      next()
    }
      
  }
  // window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx210b6ea95dbfbe1f&redirect_uri=http://wx.d.kmdtkj.com&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'

})

export default router
