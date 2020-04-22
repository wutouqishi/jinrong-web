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
  //我的信息
  {
    path: '/my-message',
    name: 'myMessage',
    component: () => import('_v/my-message/my-message.vue')
  },
  //我的预约
  {
    path: '/my-appointment',
    name: 'myAppointment',
    component: () => import('_v/my-appointment/my-appointment.vue')
  },
  //我的产品
  {
    path: '/my-products',
    name: 'myProducts',
    component: () => import('_v/my-products/my-products.vue')
  },
  //已完成产品
  {
    path: '/finished-product',
    name: 'finishedProduct',
    component: () => import('_v/finished-product/finished-product.vue')
  },
  //认证会员
  {
    path: '/certified-member',
    name: 'certifiedMember',
    component: () => import('_v/certified-member/certified-member.vue')
  },
  //普通会员
  {
    path: '/general-members',
    name: 'generalMembers',
    component: () => import('_v/general-members/general-members.vue')
  },
  //常见问题
  {
    path:'/common-problem',
    name:'commonProblem',
    component:()=>import('_v/common-problem/common-problem.vue')
  }
]