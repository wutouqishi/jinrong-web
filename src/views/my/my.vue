<style lang="less">
@import "./my.less";
</style>

<template>
  <div class="my-wrap">
    <div class="navigation-top">
      <!-- 头像 -->
      <img class="headPortrait" :src="user.avatar" />
      <!-- 昵称部分 -->
      <div class="nickname">
        <span>{{user.name}}</span>
        <br />
        <span>微信昵称：{{user.nick_name}}</span>
      </div>
    </div>

    <div class="navigation-column">
      <div class="li">
        <img :src="c_user_info" alt />
        <span>我的信息</span>
      </div>
      <div class="li">
        <img :src="c_my_reserve" alt />
        <span>我的预约</span>
      </div>
      <div class="li">
        <img :src="c_my_product" alt />
        <span>我的产品</span>
      </div>
      <div class="li">
        <img :src="c_financial" alt />
        <span>已完成产品</span>
      </div>
    </div>

  </div>
</template>

<script>
import c_user_info from '@/assets/svg/c-user-info.png'
import c_my_reserve from '@/assets/svg/c-my-reserve.png'
import c_my_product from '@/assets/svg/c-my-product.png'
import c_financial from '@/assets/svg/c-financial.png'

export default {
  name: "my",
  data() {
    return {
      c_user_info,
      c_my_reserve,
      c_my_product,
      c_financial
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created(){
    console.log(this.user)
  }
};
</script>

