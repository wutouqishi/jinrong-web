<style lang="less">
  @import './home.less';
</style>
<template>
  <div class="home-wrap">
    首页
    
    <span class="iconfont icon-lianxi"></span>
  </div>
</template>

<script>

import { getSettings } from '_api/setting'
// import { getProducts, getPayments } from '_api/products'
export default {
  name: 'home',
  created(){
    getSettings().then(res=>{
      console.log(res)
    })
  },
}
</script>
