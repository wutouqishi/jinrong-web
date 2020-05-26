

<style lang="less">
@import "./new-product.less";
</style>


<template>
  
  <div class="new-product-wrap">
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
import { getProducts } from "_api/products";

import productList from "@/components/product/ListItem.vue";
export default {
  name: "newProduct",
  data() {
    return {
      empty,
      list: [],
      page: 1,
      loading: false,
      finished: false,
      refreshing: false,
      status: 0,

    };
  },
  components: {
    productList
  },
  created() {
    
  },
  methods: {
    getlist() {
      if (this.refreshing) {
        this.list = [];
        this.refreshing = false;
      }
      getProducts({
        include: "image",
        status:0,
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
    onRefresh() {
      this.page = 1;
      this.finished = false;
      this.loading = true;
      this.onLoad();
    }
  }
};
</script>