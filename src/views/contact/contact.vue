<style lang="less">
@import "./contact.less";
</style>
<template>
  <div class="contact-wrap">
    <div class="navigation-top">
      <!-- logo -->
      <div class="headPortrait">
        <img :src="logo" alt />
      </div>
      <!-- 昵称部分 -->
      <div class="nickname">
        <span>东方瑞和</span>
      </div>
    </div>

    <div class="navigation-column">
      <div class="li">
        <p class="text">
          <span>总公司</span>
          <span>{{settings.head_address}}</span>
        </p>
      </div>
      <div class="li">
        <p class="text">
          <span>昆明分公司</span>
          <span>{{settings.branch_address}}</span>
        </p>
      </div>
      <a :href="'tel:'+settings.phone" class="li">
        <p class="text">
          <span>联系电话</span>
          <span>{{settings.phone}}</span>
        </p>
      </a>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/img/logo.png";
export default {
  name: "contact",
  data() {
    return {
      logo
    };
  },
  computed: {
    settings() {
      return this.$store.state.settings;
    }
  }
};
</script>

