<style lang="less">
@import "./my.less";
</style>

<template>
  <div class="my-wrap">
    <div class="navigation-top">
      <!-- 头像 -->
      <div class="headPortrait"></div>
      <!-- 昵称部分 -->
      <div class="nickname">
        <span>你的名字</span>
        <br />
        <span>微信昵称：某某某</span>
      </div>
    </div>

    <div class="navigation-column">
      <div class="li">
        <img :src="i22_03" alt />
        <span>我的信息</span>
      </div>
      <div class="li">
        <img :src="i22_06" alt />
        <span>我的预约</span>
      </div>
      <div class="li">
        <img :src="i11_17" alt />
        <span>我的产品</span>
      </div>
      <div class="li">
        <img :src="i11_26" alt />
        <span>已完成产品</span>
      </div>
    </div>

  </div>
</template>

<script>
import i11_26 from "@/assets/11_26.jpg";
import i11_17 from "@/assets/11_17.jpg";
import i22_03 from "@/assets/22_03.jpg";
import i22_06 from "@/assets/22_06.jpg";
import i31_07 from "@/assets/31_07.jpg";
export default {
  name: "my",
  data() {
    return {
      i11_26,
      i11_17,
      i22_03,
      i22_06,
      i31_07
    };
  }
};
</script>

