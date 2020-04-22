<style lang="less">
@import "./my-message.less";
</style>
<template>
  <div class="my-message-wrap">
    <!-- 返回部分 -->
    <div class="return">我的信息</div>
    <!-- 头像部分 -->
    <div class="head-portrait">
        <div></div>
        <span>用户微信昵称</span>
    </div>
    <!-- 信息展示部分 -->
    <div class="information-display">
        <div class="if-row">我的信息</div>
        <div class="if-row">姓名 <span>某某某</span></div>
        <div class="if-row">电话 <span>18888888888</span></div>
        <div class="if-row">身份证 <span>222222222222222222</span></div>
        <div class="if-row">地址 <span>云南省昆明市</span></div>
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