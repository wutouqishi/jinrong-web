<style lang="less">
@import "./my.less";
</style>

<template>
  <div class="my-wrap">
    <div class="before" :style="' background-image: url('+(user.level_img?user.level_img:cushi)+');'"></div>
    <div class="navigation-top">
      <!-- 头像 -->
      <img class="headPortrait" :src="user.avatar" />
      <!-- 昵称部分 -->
      <div class="nickname">
        <span>{{user.name}}</span>

        <span>微信昵称：{{user.nick_name}}</span>
        <div class="onesbur">
          <p class="user-title">初识者</p>
          <p class="sign-in">签到</p>
        </div>
      </div>
    </div>

    <div class="navigation-column">
      <router-link to="/my-message" class="li">
        <img :src="c_user_info" alt />
        <span>我的信息</span>
      </router-link>
      <router-link to="/my-appointment" class="li">
        <img :src="c_my_reserve" alt />
        <span>我的预约</span>
      </router-link>
      <router-link to="/my-product" class="li" v-if="user.is_approve">
        <img :src="c_my_product" alt />
        <span>我的产品</span>
      </router-link>
      <router-link to="/finished-product" class="li" v-if="user.is_approve">
        <img :src="c_financial" alt />
        <span>已完成产品</span>
      </router-link>
      <div class="li" v-if="user.is_approve" @click="myContract">
        <img :src="distribution" alt />
        <span>我的合同</span>
      </div>
      <router-link to="/distribution-center" class="li" v-if="user.is_approve">
        <img :src="distribution" alt />
        <span>我的邀请码</span>
      </router-link>
      <router-link to="/my-gold-coin" class="li" v-if="user.is_approve">
        <img :src="gold" alt />
        <span>我的金币</span>
      </router-link>
      <router-link to="/my" class="li" v-if="user.is_approve">
        <img :src="equity" alt />
        <span>权益说明</span>
      </router-link>
      <router-link to="/address-man" class="li" v-if="user.is_approve">
        <img :src="address" alt />
        <span>地址管理</span>
      </router-link>
      <router-link to="/mall" class="li" v-if="user.is_approve">
        <img :src="mall" alt />
        <span>金币商城</span>
      </router-link>
      <router-link to="/order-form" class="li" v-if="user.is_approve">
        <img :src="order" alt />
        <span>我的订单</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import cushi from "@/assets/images/cushi.jpg";
import c_user_info from "@/assets/images/information.png";
import c_my_reserve from "@/assets/images/appointment.png";
import c_my_product from "@/assets/images/c-my-product.png";
import c_financial from "@/assets/images/c-financial.png";
import distribution from "@/assets/images/distribution.png";
import gold from "@/assets/images/gold.png";
import equity from "@/assets/images/equity.png";
import address from "@/assets/images/address.png";
import mall from "@/assets/images/mall.png";
import order from "@/assets/images/order.png";

import { getVerifiedUrl } from "_api/user";

export default {
  name: "my",
  data() {
    return {
      cushi,
      c_user_info,
      c_my_reserve,
      c_my_product,
      c_financial,
      distribution,
      gold,
      equity,
      address,
      mall,
      order
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    settings() {
      return this.$store.state.settings;
    }
  },
  methods: {
    myContract() {
      if (!this.user.is_verified) {
        const redirectUrl = window.location.href;
        getVerifiedUrl({ id: this.user.id, redirect_url: redirectUrl }).then(
          res => {
            if (res.has_verified) {
              this.$dialog.alert({
                title: "提示",
                message: `您已进行过实名操作，如果实名认证失败，请拨打电话：${this.settings.phone}，联系客服。`
              });
            } else if (res.no_contract) {
              this.$dialog.alert({
                title: "提示",
                message: `您还没有合同`
              });
            } else {
              window.location.href = res.url;
            }
          }
        );
      } else {
        this.$router.push("/user-contract");
      }
    }
  }
};
</script>

