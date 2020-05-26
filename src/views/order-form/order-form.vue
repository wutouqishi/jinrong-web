<template>
  <div class="order-form-wrap">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        :finished-text="list.length?'没有更多了':''"
        @load="onLoad"
      >
        <van-tabs v-model="status" @change="tabs_change">
          <van-tab title="全部" :name="-1"></van-tab>
          <van-tab title="待发货" :name="0"></van-tab>
          <van-tab title="待收货" :name="1"></van-tab>
          <van-tab title="已完成" :name="2"></van-tab>
        </van-tabs>
        <div class="list" v-for="item in list" :key="item.id">
          <van-card
            :num="item.num"
            :price="item.score"
            :desc="item.subtitle"
            currency
            :title="item.title"
            :thumb="item.img"
          >
            <template #title>
              <div class="top-title">
                <div class="van-card__title van-multi-ellipsis--l2">{{item.title}}</div>
                <div class="status" :style="item.status|fi_st_co">{{item.status | fi_status}}</div>
              </div>
            </template>
            <template #footer v-if="item.status==1">
              <van-button round size="mini" @click="show_dat(item)">查看物流</van-button>
              <van-button round size="mini">确认收货</van-button>
            </template>
          </van-card>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { order_list_Web } from "_api/score_mall";
export default {
  name: "orderForm",
  data() {
    return {
      list: [],
      page: 1,
      loading: false,
      finished: false,
      refreshing: false,
      status: -1
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  filters: {
    fi_status(val) {
      val = Number(val);
      switch (val) {
        case 0:
          return "待发货";

        case 1:
          return "待收货";

        case 2:
          return "已完成";
      }
    },
    fi_st_co(val) {
      val = Number(val);
      switch (val) {
        case 0:
          return "color: #d75d58";
        case 1:
          return "color: #ffa25f";
        case 2:
          return "color: #18d813";
      }
    }
  },
  methods: {
    show_dat(val){
      this.$router.push('/order-details?id='+val.id)
    },
    tabs_change(val) {
      console.log(val);
      this.$router.replace({
        query: {
          status: val
        }
      });
      this.page = 1;
      this.finished = false;
      this.loading = true;
      this.refreshing = true;
      this.onLoad();
    },
    onLoad() {
      this.getlist();
    },
    onRefresh() {
      this.page = 1;
      this.finished = false;
      this.loading = true;
      this.onLoad();
    },
    getlist() {
      if (this.refreshing) {
        this.list = [];
        this.refreshing = false;
      }
      order_list_Web({
        page: this.page,
        user_id: this.user.id,
        status: this.status,
        limit: 20
      }).then(res => {
        this.loading = false;
        res.data.data = res.data.data.map(item => {
          item.score = item.score.toFixed(2);
          return item;
        });
        this.list.push(...res.data.data);
        if (this.list.length >= res.data.meta.total) {
          this.finished = true;
        }
        this.page++;
      });
    }
  }
};
</script>

<style lang="less" >
@import url("./order-form.less");
</style>