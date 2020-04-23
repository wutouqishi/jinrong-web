import Home from '_v/home/home.vue'
export default [
  // 首页
  {
    path: '/',
    name: 'home',
    meta:{
      title:''
    },
    component: Home
  },
  // 个人中心
  {
    path: '/my',
    name: 'my',
    meta:{
      title:''
    },
    component: () => import('_v/my/my.vue')
  },
  //更多服务
  {
    path: '/service',
    name: 'service',
    meta:{
      title:''
    },
    component: () => import('_v/service/service.vue')
  },
  // 联系我们
  {
    path: '/contact',
    name: 'contact',
    meta:{
      title:''
    },
    component: () => import('_v/contact/contact.vue')
  },
  // 我的产品
  {
    path: '/my-product',
    name: 'myProduct',
    meta:{
      title:'我的产品'
    },
    component: () => import('_v/my-product/my-product.vue')
  },
  // 封闭期产品
  {
    path: '/closed-product',
    name: 'closedProduct',
    meta:{
      title:'封闭期产品'
    },
    component: () => import('_v/closed-product/closed-product.vue')
  },
  //金融理财
  {
    path: '/financial-planning',
    name: 'financialPlanning',
    meta:{
      title:'金融理财'
    },
    component: () => import('_v/financial-planning/financial-planning.vue')
  },
  //我的信息
  {
    path: '/my-message',
    name: 'myMessage',
    meta:{
      title:'我的信息'
    },
    component: () => import('_v/my-message/my-message.vue')
  },
  //我的预约
  {
    path: '/my-appointment',
    name: 'myAppointment',
    meta:{
      title:'我的预约'
    },
    component: () => import('_v/my-appointment/my-appointment.vue')
  },
  //我的产品
  {
    path: '/my-products',
    name: 'myProducts',
    meta:{
      title:'我的产品'
    },
    component: () => import('_v/my-products/my-products.vue')
  },
  //已完成产品
  {
    path: '/finished-product',
    name: 'finishedProduct',
    meta:{
      title:'已完成产品'
    },
    component: () => import('_v/finished-product/finished-product.vue')
  },
  //分销中心
  {
    path: '/distribution-center',
    name: 'distributionCenter',
    meta:{
      title:'分销中心'
    },
    component: () => import('_v/distribution-center/distribution-center.vue')
  },
  //使用说明书
  {
    path: '/instructions',
    name: 'instructions',
    meta:{
      title:'邀请码使用说明书'
    },
    component: () => import('_v/instructions/instructions.vue')
  },
  //我的金币
  {
    path: '/my-gold-coin',
    name: 'myGoldCoin',
    meta:{
      title:'我的积分'
    },
    component: () => import('_v/my-gold-coin/my-gold-coin.vue')
  },
  //认证会员
  {
    path: '/certified-member',
    name: 'certifiedMember',
    meta:{
      title:'认证会员'
    },
    component: () => import('_v/certified-member/certified-member.vue')
  },
  //普通会员
  {
    path: '/general-members',
    name: 'generalMembers',
    meta:{
      title:'普通会员'
    },
    component: () => import('_v/general-members/general-members.vue')
  },
  //常见问题
  {
    path:'/common-problem',
    name:'commonProblem',
    meta:{
      title:'常见问题'
    },
    component:()=>import('_v/common-problem/common-problem.vue')
  }
]