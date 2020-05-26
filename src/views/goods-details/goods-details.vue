<style lang="less">
  @import url('./goods-details.less');
</style>

<template>
  <div class="goods-details-wrap">
    <van-swipe class="my-swipe"  :autoplay="3000" indicator-color="#e74744">
      <van-swipe-item v-for="item in banner" :key="item">
        <img class="banner" :src="item" alt="">
      </van-swipe-item>

    </van-swipe>
    <div class="good-title">
      <div class="name">{{goods.subtitle}}</div>
      <div class="score">{{goods.score}}<span>金币</span></div>
      <div class="money">市场价: {{goods.money}}</div>
    </div>
    <div class="content">
      <div class="con-title">商品详情</div>
      <div class="html-wrap" v-html="goods.content"></div>
    </div>
    <!-- <div class="bot-but">
      立即兑换
    </div> -->
    <router-link :to="'/settlement?id='+this.id" class="bot-but">
      立即兑换
    </router-link>
  </div>
</template>

<script>
  import { img_url } from '@/config'
  import { goods_details } from "_api/score_mall";
  export default {
    name:'goodsDetails',
    data(){
      return {
        id:'',
        goods:'',
        banner:''
      }
    },
    created(){
      if(this.$route.query.id){
        this.id = this.$route.query.id
        this.get_goods()
      }else{
        this.$router.replace({name:'home'})
      }
    },
    mounted(){
      
    },
    methods:{
      get_goods(){
        goods_details({
          id:this.id
        }).then(res=>{
          console.log(res)
          this.goods = res.data
          this.banner = JSON.parse(this.goods.banner).map(item=>{
            return img_url+item
          })
        })
      }
    }
  }
</script>

