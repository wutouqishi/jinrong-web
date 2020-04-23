<style lang="less">
@import "./distribution-center.less";
</style>

<template>
<!-- 分销中心 -->
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
      <router-link to="/instructions" class="li">
        <img :src="c_user_info" alt />
        <span>邀请码使用说明书</span>
      </router-link>
      <router-link to="" class="li">
        <img :src="c_my_reserve" alt />
        <span>我的邀请码</span>
      </router-link>
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

