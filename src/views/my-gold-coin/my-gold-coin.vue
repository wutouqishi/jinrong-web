<style lang="less">
@import "./my-gold-coin.less";
</style>
<template>
  <!-- 我的金币 -->
  <div class="my-gold-wrap">
  <div class="before" :style="' background-image: url('+(user.level_img?user.level_img:cushi)+');'"></div>
      <!-- 头部 -->
      <div class="head">
        <!-- 头像 / 昵称部分 -->
        <div class="portrait">
          <img :src="user.avatar" class="head-portrait" />
          <span>{{user.nick_name}}</span>
        </div>
        <!-- 金币部分 -->
        <div class="gold">
          <img :src="download" alt />
          <span>{{user.points_use}}</span>
        </div>
        <!-- 金币个数 -->
        <div class="number">瑞和金币</div>
      </div>

      <div class="nav-wrap">
        <div class="lis" @click="activeName=1">
          <img class="n-icon" :src="income_out" alt />
          <div class="text">收支明细</div>
        </div>
        <div class="lis" @click="activeName=2">
          <img class="n-icon" :src="friend_out" alt />
          <div class="text">好友列表</div>
        </div>
        <!-- <router-link to="/" class="lis">
          <img class="n-icon" :src="bill_out" alt />
          <div class="text">我的订单</div>
        </router-link>
        <router-link to="/" class="lis">
          <img class="n-icon" :src="address_out" alt />
          <div class="text">地址管理</div>
        </router-link> -->
        <div class="lis" @click="activeName=3">
          <img class="n-icon" :src="explain_out" alt />
          <div class="text">使用说明</div>
        </div>
      </div>


 
    <!-- 内容部分 -->
    <!-- 收入明细部分 -->
    <div class="integral" v-if="activeName==1">
      <div v-if="logs.length == 0" class="divider" style="">暂无记录</div>
      <div v-else class="li" v-for="item in logs" :key="item.id">
        <div class="left">
          <span class="top">{{item.log}}</span>
          <span class="bottom">{{item.add_time}}</span>
        </div>
        <div class="right" :class="{on:item.integral_num>0}" >{{item.integral_num>0?'+':''}}{{item.integral_num}}</div>
      </div>
    </div>
    <!-- 好友列表部分 -->
    <div class="integrall" v-if="activeName==2">
      <div v-if="friends.length == 0" class="divider" style="">暂无记录</div>
      <div class="lii" v-for="item in friends" :key="item.id" v-else>
        <div class="left">
          <img :src="item.avatar?item.avatar:baseImg" alt />
        </div>
        <div class="rigth">
          <p class="name">{{item.nick_name}}</p>
          <p class="time">{{item.created_at}}</p>
        </div>
      </div>
    </div>
    <!-- 使用说明部分 -->
    <div class="integralll" v-if="activeName==3">
      <p>1、“瑞和金币”专属东方瑞和认证会员；</p>
      <p>2、老会员成功推荐一名会员并注册成为普通会员后可获得200“瑞和金币”；</p>
      <p>3、不同认证会员号“瑞和金币”不可合并使用，“瑞和金币”不可兑换现金，不能赠与或转让；</p>
      <p>4、平台有权取消非合规渠道获得的“瑞和金币”；</p>
      <p>5、平台保留本办法解释权，有权根据需要取消或增删、修订本办法，并在法律许可范围内保留最终解释权；</p>
      <p>6、积分商城即将上线，会员可通过瑞和金币进行兑换。更多升级服务敬请期待！</p>
    </div>
  </div>
</template>
<script>
import cushi from "@/assets/images/cushi.jpg";
import empty from "@/assets/img/empty.png";
import download from "@/assets/img/download.png";
import explain_out from "@/assets/svg/explain_out.png";

import friend_out from "@/assets/svg/friend_out.png";

import income_out from "@/assets/svg/income_out.png";
import bill_out from "@/assets/svg/bill_out.png";
import address_out from "@/assets/svg/address_out.png";

import icon_l_title from "@/assets/svg/icon-l-title.png";
import icon_r_title from "@/assets/svg/icon-r-title.png";

import { userLog } from "_api/user";
import { goods_all } from "_api/score_mall";
export default {
  name: "myGoldCoin",
  data() {
    return {
      cushi,
      empty,
      download,
      income_out,
      friend_out,
      explain_out,
      bill_out,
      address_out,
      icon_l_title,
      icon_r_title,
      logs: [],
      friends: [],
      list: [],
      page: 1,
      loading: false,
      finished: false,
      refreshing: false,
      activeName:'a'
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    userLog({
      id: this.user.id
    }).then(res => {
      this.logs = res.data.log;
      this.friends = res.data.friends;
    });
  },
  methods: {
    getlist() {
      // if (this.refreshing) {
      //   this.list = [];
      //   this.refreshing = false;
      // }
      // goods_all({
      //   page: this.page
      // }).then(res => {
      //   this.loading = false;
      //   this.list.push(...res.data.data);

      //   if (this.list.length >= res.data.meta.total) {
      //     this.finished = true;
      //   }
      //   this.page++;
      // });
    },
    // onLoad() {
    //   this.getlist();
    // },
    // onRefresh() {
    //   this.page = 1;
    //   this.finished = false;
    //   this.loading = true;
    //   this.onLoad();
    // }
  }
};
</script>