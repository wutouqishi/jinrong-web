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
    console.log(savedPosition)
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
  // console.log(process.env.VUE_APP_WECHAT_OAUTH_URL)
  console.log(to)
  const token = getToken()

  store.dispatch('login', { code: 'sdkfojsdaolfjoisajdiof' }).then(res => {
    console.log(res)
  })
  if (!token) {
    // 未登录
    // if (filter.indexOf(to.name) != -1) {
     
    // } else {

    // }
    next()
  } else {
    store.dispatch('login', { code: 'sdkfojsdaolfjoisajdiof' }).then(res => {
      console.log(res)
      next()
    })
  }
  // window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx210b6ea95dbfbe1f&redirect_uri=http://wx.d.kmdtkj.com&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
  next()
})

export default router
