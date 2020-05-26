<style lang="less">
@import "./home.less";
</style>
<template>
  <div class="home-wrap">
    <!-- <div class="search"> -->
    <form class="search" action="/search">
      <span class="iconfont icon-danchucengzhuanhuan"></span>
      <input type="search" autocomplete="off" name="search" placeholder="搜索" class="input-kw" />
    </form>
    <!-- <input type="text" placeholder="搜索" /> -->
    <!-- </div> -->
    <div class="navigation-top">
      <router-link to="/risk" class="path">
        <img class="icon" :src="risk" alt />
        <div class="txt">控制完善</div>
      </router-link>
      <router-link to="/money" class="path">
        <img class="icon" :src="money" alt />
        <div class="txt">资金监督</div>
      </router-link>
      <router-link to="/users" class="path">
        <img class="icon" :src="users" alt />
        <div class="txt">会员认证</div>
      </router-link>
    </div>
    <div class="navigation-column">
      <div @click="router_a('/my-product')" class="nav-li">
        <img class="icon" :src="c_product" alt />
        <div class="txt">我的产品</div>
      </div>
      <router-link to="/new-product" class="nav-li">
        <img class="icon" :src="c_lock_product" alt />
        <div class="txt">在售新产品</div>
      </router-link>
      <div @click="router_a('/closed-product')" class="nav-li">
        <img class="icon" :src="c_my_product" alt />
        <div class="txt">封闭期产品</div>
      </div>
      <div @click="router_a('/financial-planning')" class="nav-li">
        <img class="icon" :src="c_financial" alt />
        <div class="txt">金融理财</div>
      </div>
      <div @click="router_a('/news')" class="nav-li">
        <img class="icon" :src="c_news" alt />
        <div class="txt">新闻资讯</div>
      </div>
      <div @click="router_a('/announcement')" class="nav-li">
        <img class="icon" :src="c_msg" alt />
        <div class="txt">信息公告</div>
      </div>
    </div>

    <div class="rotatio-chart" v-if="settings">
      <van-swipe class="my-swipe" :autoplay="4000" indicator-color="#d42d27">
        <van-swipe-item v-for="item in settings.swipe_list" :key="item.url">
          <router-link
            class="ad-li"
            :to="settings.images_link&&settings.images_link[index]?settings.images_link[index]:'/'"
          >
            <img class="swipe-img" :src="item.url" alt />
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="advertising" v-if="settings">
      <router-link class="ad-li" :to="'/'+settings.top_product.id" v-if="settings.top_product">
        <img :src="img_url+settings.top_product.image" alt />
      </router-link>
      <van-swipe
        v-else-if="settings.sub_img.length"
        class="my-swipe"
        :autoplay="4000"
        indicator-color="#d42d27"
      >
        <van-swipe-item v-for=" (item, index) in settings.sub_img" :key="item.url">
          <router-link
            class="ad-li"
            :to="settings.sub_img_link&&settings.sub_img_link[index]?settings.sub_img_link[index]:'/'"
          >
            <img :src="img_url+item.url" alt />
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="product" v-if="user.is_approve">
      <div class="pr-title">
        <div class="txt">在售新产品</div>
        <router-link to="/new-product" class="nav-li">
          <span>更多</span>
          <van-icon name="arrow" />
        </router-link>
      </div>
      <div class="pr-list">
        <product-list v-for=" item in new_products_list" :key="item.id" :item="item" />
      </div>
    </div>

    <div class="h-title">兑付信息</div>
    <div class="list-wrap">
      <div class="list-flex">
        <div
          @click="router_a('/payment-detail/'+item.id)"
          class="li"
          v-for="(item, index) in payments_list"
          :key="index"
        >
          <div class="l-title">{{ item.product.payment_name }}</div>
          <span class="num">第{{ item.index }}次</span>
          <span class="tiem">{{ item.payment_time }}</span>
          <span class="start">收益已兑付</span>
        </div>
      </div>
    </div>
    <div class="product" v-if="user.is_approve">
      <div class="pr-title">
        <div class="txt">封闭期产品</div>
        <router-link to="/closed-product" class="nav-li">
          <span>更多</span>
          <van-icon name="arrow" />
        </router-link>
      </div>
      <div class="pr-list">
        <product-list v-for=" item in products_list" :key="item.id" :item="item" />
      </div>
    </div>
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
// import { getProducts } from "_api/products";
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
      products_list: [],
      payments_list: [],
      new_products_list: []
    };
  },
  components: {
    productList
  },
  computed: {
    img_url() {
      return this.$store.state.url;
    },
    user() {
      return this.$store.state.user;
    },
    settings() {
      return this.$store.state.settings;
    }
  },
  created() {
    getProducts({
      include: "image",
      page: 1,
      per_page: 5,
      status: 1
    }).then(res => {
      this.products_list = res.data;
    });
    getProducts({
      include: "image",
      status: 0,
      page: 1,
      per_page: 3
    }).then(res => {
      this.new_products_list = res.data;
    });

    getPayments({
      include: "product",
      limit: true
    }).then(res => {
      this.payments_list = res.data;
    });
  },
  methods: {
    router_a(val) {
      if (this.user.is_approve) {
        this.$router.push({
          path: val
        });
      } else {
        this.$toast("成为认证用户后，即可查看");
      }
    }
  }
};
</script>
