import Home from '_v/home/home.vue'
export default [
  // 首页
  {
    path: '/',
    name: 'home',
    meta: {
      title: ''
    },
    component: Home
  },
  // 个人中心
  {
    path: '/my',
    name: 'my',
    meta: {
      title: ''
    },
    component: () => import('_v/my/my.vue')
  },
  //更多服务
  {
    path: '/service',
    name: 'service',
    meta: {
      title: ''
    },
    component: () => import('_v/service/service.vue')
  },
  // 联系我们
  {
    path: '/contact',
    name: 'contact',
    meta: {
      title: ''
    },
    component: () => import('_v/contact/contact.vue')
  },
  // 我的产品
  {
    path: '/my-product',
    name: 'myProduct',
    meta: {
      title: '我的产品'
    },
    component: () => import('_v/my-product/my-product.vue')
  },
  // 封闭期产品
  {
    path: '/closed-product',
    name: 'closedProduct',
    meta: {
      title: '封闭期产品'
    },
    component: () => import('_v/closed-product/closed-product.vue')
  },
  //金融理财
  {
    path: '/financial-planning',
    name: 'financialPlanning',
    meta: {
      title: '金融理财'
    },
    component: () => import('_v/financial-planning/financial-planning.vue')
  },
  //我的信息
  {
    path: '/my-message',
    name: 'myMessage',
    meta: {
      title: '我的信息'
    },
    component: () => import('_v/my-message/my-message.vue')
  },
  //我的预约
  {
    path: '/my-appointment',
    name: 'myAppointment',
    meta: {
      title: '我的预约'
    },
    component: () => import('_v/my-appointment/my-appointment.vue')
  },
  //我的产品
  // {
  //   path: '/my-products',
  //   name: 'myProducts',
  //   meta: {
  //     title: '我的产品'
  //   },
  //   component: () => import('_v/my-products/my-products.vue')
  // },
  //已完成产品
  {
    path: '/finished-product',
    name: 'finishedProduct',
    meta: {
      title: '已完成产品'
    },
    component: () => import('_v/finished-product/finished-product.vue')
  },
  //分销中心
  {
    path: '/distribution-center',
    name: 'distributionCenter',
    meta: {
      title: '分销中心'
    },
    component: () => import('_v/distribution-center/distribution-center.vue')
  },
  //使用说明书
  {
    path: '/instructions',
    name: 'instructions',
    meta: {
      title: '邀请码使用说明'
    },
    component: () => import('_v/instructions/instructions.vue')
  },
  //我的金币
  {
    path: '/my-gold-coin',
    name: 'myGoldCoin',
    meta: {
      title: '我的积分'
    },
    component: () => import('_v/my-gold-coin/my-gold-coin.vue')
  },
  //认证会员
  {
    path: '/certified-member',
    name: 'certifiedMember',
    meta: {
      title: '认证会员'
    },
    component: () => import('_v/certified-member/certified-member.vue')
  },
  //普通会员
  {
    path: '/general-members',
    name: 'generalMembers',
    meta: {
      title: '普通会员'
    },
    component: () => import('_v/general-members/general-members.vue')
  },
  //常见问题
  {
    path: '/common-problem',
    name: 'commonProblem',
    meta: {
      title: '常见问题'
    },
    component: () => import('_v/common-problem/common-problem.vue')
  },
  //风投完善
  {
    path: '/risk',
    name: 'risk',
    meta: {
      title: '风投完善',
    },
    component: () => import('_v/risk/risk.vue')
  },
  //资金监管
  {
    path: '/money',
    name: 'money',
    meta: {
      title: '资金监管',
    },
    component: () => import('_v/money/money.vue')
  },
  //会员认证
  {
    path: '/users',
    name: 'users',
    meta: {
      title: '会员认证',
    },
    component: () => import('_v/users/users.vue')
  },
  //产品详情
  {
    path:"/products/:id/:eachIncome?/:money?/:bank?/:bankCard?",
    name:'products',
    component: () => import('_v/products/products.vue')
  },
  //文章详情
  {
    path:"/articles/:id",
    name:'articles',
    component: () => import('_v/articles/articles.vue')
  },
  // 新闻资讯
  {
    path:"/news",
    name:'news',
    component: () => import('_v/news/news.vue')
  },
  //信息公告
  {
    path:"/announcement",
    name:'announcement',
    component: () => import('_v/announcement/announcement.vue')
  },

  //兑付详情
  {
    path: "/payment-detail/:id",
    name:'paymentDetail',
    meta: {
      title: '兑付详情'
    },
    component: () => import('_v/payment-detail/payment-detail.vue')
  },
  //搜索
  {
    path: "/search",
    name:'search',
    meta: {
      title: ''
    },
    component: () => import('_v/search/search.vue')
  },
  //用户手机号绑定
  {
    path:'/bind',
    name:'bind',
    component: () => import('_v/bind/bind.vue')
  },
  //用户手机号绑定
  {
    path:'/new-product',
    name:'newProduct',
    meta: {
      title: '新产品列表'
    },
    component: () => import('_v/new-product/new-product.vue')
  },
  //立即预约
  {
    path:'/subscribe/:id',
    name:'subscribe',
    meta:{
      title:'新产品预约'
    },
    component: () => import('_v/subscribe/subscribe.vue')
  },
  //商品详情
  {
    path:'/goods-details',
    name:'goodsDetails',
    meta:{
      title:'商品详情'
    },
    component: () => import('_v/goods-details/goods-details.vue')
  },
  //结算
  {
    path:"/settlement",
    name:'settlement',
    meta:{
      title: '结算'
    },
    component: () => import('_v/settlement/settlement.vue')    
  },
  // 地址管理
  {
    path:"/address-man",
    name:'addressMan',
    meta:{
      title: '地址管理'
    },
    component: () => import('_v/address/address.vue')    
  },
  //金币商城
  {
    path:"/mall",
    name:'mall',
    meta:{
      title: '金币商城'
    },
    component: () => import('_v/mall/mall.vue')    
  },
  //商品分类列表
  {
    path:"/goods-class",
    name:'goodsClass"',
    meta:{
      title: '金币商城'
    },
    component: () => import('_v/goods-class/goods-class.vue')    
  },
  //订单
  {
    path: "/order-form",
    name:'orderForm',
    meta:{
      title: '我的订单'
    },
    component: () => import('_v/order-form/order-form.vue') 
  },
  //订单详情
  {
    path: "/order-details",
    name:'orderDetails',
    meta:{
      title: '我的订单'
    },
    component: () => import('_v/order-details/order-details.vue') 
  }
]
