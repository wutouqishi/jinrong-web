<style lang="less">
@import "./financial-planning.less";
</style>

<template>
  <div class="financial-planning-wrap">

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
  name: "financialPlanning",
  data() {
    return {
      empty,
      list: [],
      page: 1,
      loading: false,
      finished: false,
      refreshing: false,
      status: 3
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
        id: this.status,
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

