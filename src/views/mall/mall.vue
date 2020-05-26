<template>
  <div class="my-mall-wrap">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">

      <div class="nav-wrap">
        <div class="lis" v-for="item in classList" :key="item.id" @click="router_class(item)">
          <img class="icon" :src="item.icon" alt="">
          <div class="name">{{item.name}}</div>
        </div>
      </div>
      <div class="goods-wrap">
        <div class="go-title">
          <img :src="icon_l_title" alt />
          <div class="name">金币商品</div>
          <img :src="icon_r_title" alt />
        </div>
        <van-list
          v-model="loading"
          :finished="finished"
          :finished-text="list.length?'没有更多了':''"
          @load="onLoad"
        >
          <div class="goods-list-wrap">
            <div class="good-card" v-for="item in list" :key="item.id">
              <router-link class="good-li" :to="'/goods-details?id='+item.id">
                <div class="img-wrap">
                  <img :src="item.img" alt />
                </div>
                <div class="name">{{item.title}}</div>
                <div class="row-but">
                  <div class="score">{{item.score}}金币</div>
                  <div class="button">兑换</div>
                </div>
              </router-link>
            </div>
          </div>
        </van-list>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import icon_l_title from "@/assets/svg/icon-l-title.png";
import icon_r_title from "@/assets/svg/icon-r-title.png";

import { goods_all } from "_api/score_mall";
export default {
  name: "mall",
  data() {
    return {
      list: [],
      page: 1,
      loading: false,
      finished: false,
      refreshing: false,
      icon_l_title,
      icon_r_title,
      c_id:0,
      classList:[]
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    console.log(this.$route)
  },
  methods: {
    router_class(item){
      console.log(item)
      this.$router.push({
        path:'/goods-class',
        query:{
          class_id: item.id
        }
      })
    },
    getlist() {
      if (this.refreshing) {
        this.list = [];
        this.refreshing = false;
      }
      goods_all({
        page: this.page,
        c_id:this.c_id
      }).then(res => {
        this.loading = false;
        this.classList = res.data.classList
        this.list.push(...res.data.data);
        if (this.list.length >= res.data.meta.total) {
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

<style lang="less">
@import url("./mall.less");
</style>