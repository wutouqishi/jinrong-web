<template>
  <div class="user-contract-wrap">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for=" item in list" :key="item.id" :title="item.product" size="large" @click="handleContract(item)">
          <template #default>
            <p v-if="item.sign_status === 0" class="color-error font-sm">待签署</p>
            <p v-if="item.sign_status === 2" class="font-sm">待传转款凭证</p>
            <p v-if="item.sign_status === 98" class="font-sm">待审核</p>
            <p v-if="item.sign_status === 99" class="font-sm">审核成功</p>
            <p v-if="item.sign_status === 97" class="color-error font-sm">审核失败</p>
            <p v-if="item.sign_status === 100" class="font-sm">签署完成</p>
          </template>
          <p slot="label" v-if="item.sign_status === 97">转款凭证审核失败，请重新上传</p>
        </van-cell>
      </van-list>
      <div class="empty-wrap" v-if="!list.length">
        <img class="em-img" :src="empty" alt />
        <p class="en-one">暂无合同</p>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import empty from "@/assets/img/empty.png";
import { contract, getContract, cert } from "_api/user";
export default {
  name: "userContract",
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
  computed: {
    user() {
      return this.$store.state.user;
    },
    settings() {
      return this.$store.state.settings;
    }
  },
  methods: {
    getlist() {
      if (this.refreshing) {
        this.list = [];
        this.refreshing = false;
      }
      contract({
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
    },
    handleContract(item){
      this.item = item
      this.cert = []
      item.images.data.forEach((item) => {
        if (item.type === 'cert') {
          this.cert.push(item.url)
          this.certUrl.push(process.env.VUE_APP_BASE_BACK_URL + item.url)
        }
        if (item.type === 'receipt') {
          this.receiptUrl = [process.env.VUE_APP_BASE_BACK_URL + item.url]
        }
      })
      this.isSelectorShow = true
    }
  }
};
</script>

<style lang="less">
@import "./user-contract.less";
</style>