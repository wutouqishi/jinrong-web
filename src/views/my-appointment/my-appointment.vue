<style lang="less">
@import "./my-appointment.less";
</style>
<template>
  <div class="my-appointment-wrap">
    <!-- 返回部分
    <div class="return">我的预约</div> -->
  </div>
</template>
<script>
export default {
  name: "myAppointment",
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