<style lang="less">
@import "./service.less";
</style>

<template>
  <div class="service-wrap">
    <!-- 顶部部分 -->
    <van-tabs
      v-model="active"
      @change="change"
      title-active-color="#FF4D4F"
      title-inactive-color="#666F83"
      background="#F9FAFB"
    >
      <van-tab name="1" title="会员介绍"></van-tab>
      <van-tab name="2" title="常见问题"></van-tab>
    </van-tabs>
    <!-- 内容部分 -->
    <div v-if="active==1" class="content">
      <div class="certifiedMember" @click="certifiedMember">
        <div class="img">
          <img :src="imember_introduction_03" alt />
        </div>
        <div class="tex">
          <span>认证会员介绍</span>
          <br />
          <span>东方瑞和--2019-13-31</span>
        </div>
      </div>
      <div class="generalMembers" @click="generalMembers">
        <div class="img">
          <img :src="imember_introduction_03" alt />
        </div>
        <div class="tex">
          <span>普通会员介绍</span>
          <br />
          <span>东方瑞和--2019-13-31</span>
        </div>
      </div>
    </div>
    <div v-if="active==2" class="content">
      <div class="commonProblem" @click="commonProblem">
        <div class="img">
          <img :src="imore_services_03" alt="">
        </div>
        <div class="tex">
          <span>常见问题</span>
          <br />
          <span>东方瑞和--2019-13-31</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imember_introduction_03 from "@/assets/member-introduction_03.jpg";
import imore_services_03 from "@/assets/more_services_03.jpg";
export default {
  name: "service",
  data() {
    return {
      active: 1,
      imember_introduction_03,
      imore_services_03
    };
  },
  methods: {
    change(val) {
      // console.log(val)
    },
    generalMembers() {
      this.$router.replace("../general-members");
    },
    certifiedMember() {
      this.$router.replace("../certified-member");
    },
    commonProblem() {
      this.$router.replace("../common-problem");
    }
  }
};
</script>

