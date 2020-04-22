<style lang="less">
@import "./contact.less";
</style>
<template>
  <div class="contact-wrap">
    <div class="navigation-top">
      <!-- logo -->
      <div class="headPortrait">
        <img :src=" i33_03" alt />
      </div>
      <!-- 昵称部分 -->
      <div class="nickname">
        <span>东方瑞和</span>
      </div>
    </div>

    <div class="navigation-column">
      <div class="li">
        <span>总公司</span><br>
        <span>上海市静安区华山路370号8801室</span>
      </div>
       <div class="li">
        <span>昆明分公司</span><br>
        <span>云南省昆明市西山区滇池路摩根道9栋6楼</span>
      </div>
       <div class="li">
        <span>联系电话</span><br>
        <span>0871-65330028</span>
      </div>
      
    </div>

  </div>
</template>

<script>
import i31_07 from "@/assets/31_07.jpg";
import i33_03 from "@/assets/33_03.jpg";
export default {
  name: "contact",
  data() {
    return {
      i31_07,
      i33_03
    };
  }
};
</script>

