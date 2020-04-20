import Home from '_v/home/home.vue'
export default [
    // 首页
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // 个人中心
    {
      path: '/my',
      name: 'my',
      component: () => import('_v/my/my.vue')
    },
    //更多服务
    {
      path: '/service',
      name: 'service',
      component: () => import('_v/service/service.vue')
    },
    // 联系我们
    {
      path: '/contact',
      name: 'contact',
      component: () => import('_v/contact/contact.vue')
    },
    // 我的产品
    {
      path: '/my-product',
      name: 'myProduct',
      component: () => import('_v/my-product/my-product.vue')
    },
    // 封闭期产品
    {
      path: '/closed-product',
      name: 'closedProduct',
      component: () => import('_v/closed-product/closed-product.vue')
    },
    //金融理财
    {
      path: '/financial-planning',
      name: 'financialPlanning',
      component: () => import('_v/financial-planning/financial-planning.vue')
    },    
  ]