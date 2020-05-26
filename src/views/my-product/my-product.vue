<style lang="less">
@import "./my-product.less";
</style>
<template>
  <div class="my-product-wrap">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" :finished-text="list.length?'没有更多了':''" @load="onLoad">
        <router-link  v-for="item in list" :key="item.id" class="ad-li" :to="`/products/${item.productSimple.id}/${item.each_income}/${item.original_money}/${item.bank}/${item.bank_card}`" >
          <my-product-li  :item="item" />
        </router-link>
      </van-list>
      <div class="empty-wrap" v-if="!list.length">
        <img class="em-img" :src="empty" alt="">
        <p class="en-one">暂无产品</p>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import empty from "@/assets/img/empty.png";
import { getProcessing } from '_api/user'
import myProductLi from "@/components/product/myProductLi.vue";
export default {
  name: "myProduct",
  data() {
    return {
      empty,
      list: [],
      page:1,
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  components:{
    myProductLi
  },
    computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created(){

  },
  methods: {
    getlist(){
      if (this.refreshing) {
        this.list = [];
        this.refreshing = false;
      }
      getProcessing({
        id: this.user.id,
        page: this.page,
        per_page: 10,
      }).then(res=>{
        console.log(res)
        this.loading = false;
        this.list.push(...res.data)
        console.log(this.list.length,res.meta.pagination.total)
        if(this.list.length>=res.meta.pagination.total){
          this.finished = true;
        }
        this.page++
      })
    },
    onLoad() {
      this.getlist()
    },
    onRefresh() {
      this.page = 1
      this.finished = false;
      this.loading = true;
      this.onLoad();
    }
  }
};
</script>