<style lang="less">
@import "./distribution-center.less";
</style>

<template>
  <!-- 分销中心 -->
  <div class="distribution-center-wrap">
    <div class="navigation-top">
      <!-- 头像 -->
      <img class="headPortrait" :src="user.avatar" />
      <!-- 昵称部分 -->
      <div class="nickname">
        <span>{{user.name}}</span>
        <span>微信昵称：{{user.nick_name}}</span>
      </div>
    </div>

    <div class="navigation-column">
      <router-link to="/instructions" class="li">
        <img :src="invitation" alt />
        <span>邀请码使用说明书</span>
      </router-link>
      <div @click="show_code" class="li">
        <img :src="qr_code_icon" alt />
        <span>我的邀请码</span>
      </div>
    </div>
    <van-popup v-model="popup_show" closeable round>
      <div class="code-wrap">
         <img class="my-qr" :src="img_qr" alt />
         <p class="texti">我的邀请码</p>
      </div>
    </van-popup>
  </div>
</template>

<script>
import invitation from "@/assets/svg/invitation.png";
import qr_code_icon from "@/assets/svg/qr-code.png";

import { qr_code } from "_api/user";

export default {
  name: "my",
  data() {
    return {
      popup_show: false,
      invitation,
      qr_code_icon,
      img_qr: ""
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    console.log(this.user);
  },
  methods: {
    show_code() {
      if (this.img_qr) {
        this.popup_show = true;
      } else {
        this.get_code();
      }
    },
    get_code() {
      qr_code(this.user.id).then(res => {
        this.img_qr = res
        this.popup_show = true;
      });
    }
  }
};
</script>
