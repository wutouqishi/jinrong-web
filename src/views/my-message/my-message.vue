<style lang="less">
@import "./my-message.less";
</style>
<template>
  <div class="my-message-wrap">
    <!-- 头像部分 -->
    <div class="head-portrait">
        <img :src="user.avatar" alt="">
        <span>{{user.nick_name}}</span>
    </div>
    <!-- 信息展示部分 -->
    <div class="information-display">
        <div class="if-row">我的信息</div>
        <div class="if-row">姓名 <span>{{user.name}}</span></div>
        <div class="if-row">电话 <span>{{user.phone}}</span></div>
        <div class="if-row">身份证 <span>{{user.id_card}}</span></div>
        <div class="if-row">地址 <span>{{user.address}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myMessage",
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