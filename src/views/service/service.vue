<style lang="less">
@import "./service.less";
</style>

<template>
  <div class="service-wrap">
    <van-tabs
      v-model="status"
      line-width="50%"
      line-height="1px"
      color="#e43a36"
      background="#fff"
      title-active-color="#e43a36"
      @change="tabchange"
    >
      <van-tab title="会员介绍"></van-tab>
      <van-tab title="常见问题"></van-tab>
    </van-tabs>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" :finished-text="list.length?'没有更多了':''" @load="onLoad">
        <div class="content">
          <articles-li  v-for=" item in list" :key="item.id" :item="item" />
        </div>
      </van-list>
      <div class="empty-wrap" v-if="!list.length">
        <img class="em-img" :src="empty" alt />
        <p class="en-one">暂无内容</p>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import empty from "@/assets/img/empty.png";
import { getArticles } from "_api/articles";
import articlesLi from "@/components/articlesLi.vue";
export default {
  name: "service",
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
    articlesLi
  },
  created() {},
  methods: {
    getlist() {
      if (this.refreshing) {
        this.list = [];
        this.refreshing = false;
      }
      getArticles({
        include: 'image',
        page: 1,
        per_page: 10,
        id: this.status+1,
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

