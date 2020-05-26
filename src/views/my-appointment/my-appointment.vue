<style lang="less">
@import "./my-appointment.less";
</style>
<template>
  <div class="my-appointment-wrap">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" :finished-text="list.length?'没有更多了':''" @load="onLoad">
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
import { reserved } from "_api/user";
import productList from "@/components/product/ListItem.vue";
export default {
  name: "myAppointment",
  data() {
    return {
      empty,
      list: [],
      page: 1,
      loading: false,
      finished: false,
      refreshing: false
    };
  },
  components: {
    productList
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {},
  methods: {
    getlist() {
      if (this.refreshing) {
        this.list = [];
        this.refreshing = false;
      }
      reserved({
        id: this.user.id,
        page: this.page,
        per_page: 10
      }).then(res => {
        console.log(res);
        this.loading = false;
        res.data = res.data.map(item=>{
          return {
            ...item.productSimple,
            money:item.money
          }
        })
        this.list.push(...res.data);
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