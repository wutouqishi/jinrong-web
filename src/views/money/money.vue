<template>
  <div class="money-wrap">
    <img class="banner" :src="banner_money" alt />
    <div class="column-title">
      <h4>
        <img class="icon" :src="icon_7" alt />
        <span>银行托管 资金安全</span>
      </h4>
      <h5>Bank trusteeship&Security of funds</h5>
    </div>
    <div class="wrap-txt">
      <p class="desc">完善的内控机制</p>
      <p class="desc">按指令做资金划转</p>
      <p class="desc">与多家银行合作</p>
      <p class="desc">保证资金正常流转</p>
      <p class="desc">监管资金流转情况</p>
    </div>
  </div>
</template>

<script>
import icon_7 from "@/assets/img/icon-7.png";
import banner_money from "@/assets/img/banner-money.jpg";
export default {
  name: "money",
  data() {
    return {
      banner_money,
      icon_7
    };
  }
};
</script>

<style lang="less">
@import "./money.less";
</style>