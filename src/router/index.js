import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import { getToken } from '@/libs/util'
import routes from './routes'
import {redirect_uri, appid } from '@/config'

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
  
  const ivtCode = to.query.ivtCode
  
  const code = to.query.code
  
  if(!store.state.settings){
    store.dispatch('Settings').then(res=>{
     
    })
  }
  if (ivtCode) {
    Vue.ls.set('ivt_code', ivtCode)
  }

  if (!token) {
    if(to.name=='bind'&&store.state.openidKey){
      next()
    }else if(code){
      store.dispatch('login', { code }).then(res => {
        const { openid_key } = res
        if (openid_key) {
          next({
            name:'bind'
          })
        } else {
          next({
            name:'home'
          })
        }
      })
    }else{
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
    } 

  } else {
    // 获取用户信息
    if(!store.state.user){
      store.dispatch('getUserInfo').then(res=>{
        next()
      })
    }else if(!store.state.user.is_approve){
      
        const rove_arr = [
          'service',
          'myProduct',
          'finishedProduct',
          'distributionCenter',
          'myGoldCoin'
        ]
        if(rove_arr.indexOf(to.name)!=-1){
          next({
            name:'home'
          })
        }else{
          next()
        }
      }else{
        next()
      }
  }

  // window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx210b6ea95dbfbe1f&redirect_uri=http://wx.d.kmdtkj.com&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'

})

export default router
