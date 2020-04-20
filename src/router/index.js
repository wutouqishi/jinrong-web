import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/libs/util'
import routes from './routes'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition){
    console.log(savedPosition)
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

const filter = ['login', 'forgotten','agreement']
//路由
router.beforeEach((to, from, next) => {

  const token = getToken()
  // if (!token) {
  //   // 未登录
  //   if (filter.indexOf(to.name) != -1) {
  //     next()
  //   } else {

  //   }
  // } else {


  // }
  next()
})

export default router
