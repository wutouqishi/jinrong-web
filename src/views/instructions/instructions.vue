<style lang="less">
@import "./instructions.less";
</style>
<template>
  <div class="instructions-wrap">
    <div class="img">
      <img :src="explain" alt />
    </div>
  </div>
</template>
<script>
import explain from "@/assets/svg/explain.png";
export default {
  name: "instructions",
  data() {
    return {
      explain
    };
  }
};
</script>