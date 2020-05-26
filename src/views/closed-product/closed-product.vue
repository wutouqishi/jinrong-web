

<style lang="less">
@import "./closed-product.less";
</style>


<template>
  <div class="closed-product-wrap">
    <van-tabs
      v-model="status"
      line-width="50%"
      line-height="1px"
      color="#e43a36"
      background="#fff"
      title-active-color="#e43a36"
      @change="tabchange"
    >
      <van-tab title="封闭期"></van-tab>
      <van-tab title="已结束"></van-tab>
    </van-tabs>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
   
          <product-list v-for=" item in list" :key="item.id" :item="item" />

      </van-list>
      <div class="empty-wrap" v-if="!list.length">
        <img class="em-img" :src="empty" alt />
        <p class="en-one">暂无产品</p>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import empty from "@/assets/img/empty.png";
import { getProducts, getPayments } from "_api/user";

import productList from "@/components/product/ListItem.vue";
export default {
  name: "closedProduct",
  data() {
    return {
      empty,
      list: [],
      page: 1,
      loading: false,
      finished: false,
      refreshing: false,
      status: 0
    };
  },
  components: {
    productList
  },
  created() {},
  methods: {
    getlist() {
      if (this.refreshing) {
        this.list = [];
        this.refreshing = false;
      }
      getProducts({
        include: "image",
        status: this.status + 1,
        page: this.page,
        per_page: 10
      }).then(res => {
        console.log(res);
        this.loading = false;
        this.list.push(...res.data);
        console.log(this.list.length, res.meta.pagination.total);
        if (this.list.length >= res.meta.pagination.total) {
          this.finished = true;
        }
        this.page++;
      });
    },
    onLoad() {
      this.getlist();
    },
    tabchange() {
      this.page = 1;
      this.finished = false;
      this.loading = true;
      this.refreshing = true;
      this.onLoad();
    },
    onRefresh() {
      this.page = 1;
      this.finished = false;
      this.loading = true;
      this.onLoad();
    }
  }
};
</script>