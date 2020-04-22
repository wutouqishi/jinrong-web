<style lang="less">
@import "./home.less";
</style>
<template>
  <div class="home-wrap">
    <!-- 搜索部分 -->
    <div class="search">
      <span class="iconfont icon-danchucengzhuanhuan"></span>
      <input type="text" placeholder="搜索" />
    </div>

    <div class="navigation-top">
      <a href class="path">
        <img class="icon" :src="risk" alt />
        <div class="txt">控制完善</div>
      </a>
      <a href class="path">
        <img class="icon" :src="money" alt />
        <div class="txt">资金监督</div>
      </a>
      <a href class="path">
        <img class="icon" :src="users" alt />
        <div class="txt">会员认证</div>
      </a>
    </div>

    <div class="navigation-column">
      <a href class="nav-li">
        <img class="icon" :src="c_product" alt />
        <div class="txt">我的产品</div>
      </a>
      <a href class="nav-li">
        <img class="icon" :src="c_lock_product" alt />
        <div class="txt">在售新产品</div>
      </a>
      <a href class="nav-li">
        <img class="icon" :src="c_my_product" alt />
        <div class="txt">封闭期产品</div>
      </a>
      <a href class="nav-li">
        <img class="icon" :src="c_financial" alt />
        <div class="txt">金融理财</div>
      </a>
      <a href class="nav-li">
        <img class="icon" :src="c_news" alt />
        <div class="txt">新闻资讯</div>
      </a>
      <a href class="nav-li">
        <img class="icon" :src="c_msg" alt />
        <div class="txt">信息公告</div>
      </a>
    </div>

    <div class="rotatio-chart">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#d42d27">
        <van-swipe-item v-for="item in swipe_list" :key="item.url">
          <img class="swipe-img" :src="item.url" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 中 -->
    <div class="advertising">
      <a class="ad-li">
        <!-- <img :src="i21_03" alt /> -->
      </a>
    </div>

    <div class="h-title">兑付信息</div>
    <div class="list-wrap">
      <div class="list-flex">
        <router-link to="/" class="li" v-for="(item, index) in payments_list"
              :key="index">
          <div class="l-title">{{ item.product.payment_name }}</div>
          <span class="num">第{{ item.index }}次</span>
          <span class="tiem">{{ item.payment_time }}</span>
          <span class="start">收益已兑付</span>
        </router-link>

      </div>
    </div>
    <div class="product">
      <div class="pr-title">
        <div class="txt">封闭期产品</div>
        <a href class="path">
          <span>更多</span>
          <van-icon name="arrow" />
        </a>
      </div>
      <div class="pr-list">
        <product-list v-for=" item in products_list" :key="item.id" :item="item" />
      </div>
    </div>
    <!-- tabBar -->
  </div>
</template>

<script>
import risk from "@/assets/svg/risk.png";
import money from "@/assets/svg/money.png";
import users from "@/assets/svg/users.png";
import c_product from "@/assets/svg/c-product.png";
import c_lock_product from "@/assets/svg/c-lock-product.png";
import c_my_product from "@/assets/svg/c-my-product.png";
import c_financial from "@/assets/svg/c-financial.png";
import c_news from "@/assets/svg/c-news.png";
import c_msg from "@/assets/svg/c-msg.png";

import productList from "@/components/product/ListItem.vue";
import { getSettings } from "_api/setting";
import { getProducts, getPayments } from "_api/user";
// import { getProducts, getPayments } from '_api/products'
export default {
  name: "home",
  data() {
    return {
      risk,
      money,
      users,
      c_product,
      c_lock_product,
      c_my_product,
      c_financial,
      c_news,
      c_msg,
      swipe_list: [],
      products_list: [],
      payments_list:[]
    };
  },
  components: {
    productList
  },
  created() {
    getSettings().then(res => {
      let { images } = res;
      this.swipe_list = images.data.map(item => {
        item.url = this.$store.state.url + item.url;
        return item;
      });
    });
    getProducts({
      include: "image",
      page: 1,
      per_page: 5,
      status: 1
    }).then(res => {
      console.log(res.data);
      this.products_list = res.data;
    });
    getPayments({
      include: 'product',
      limit: true
    }).then(res => {
      console.log(res.data);
      this.payments_list = res.data
    });
  }
};
</script>
