<template>
  <div class="settlement">
    <div class="address">
      <router-link v-if="!address" :to="{path:'/address-man',query:{goods_id:id}}" class="default">
        <div class="text">请选择收货地址</div>
        <van-icon name="arrow" color="#999999" />
      </router-link>
      <router-link class="adindes" v-else :to="{path:'/address-man',query:{goods_id:id}}">
        <div class="row-li">
          <div class="name">{{address.name}}</div>
          <div class="tel">{{address.tel}}</div>
        </div>
        <div class="add">{{address.province+address.city+address.district+address.address}}</div>
      </router-link>
    </div>
    <div class="card">
      <van-card
        :price="goods.score"
        :desc="goods.subtitle"
        currency
        :title="goods.title"
        :thumb="goods.img"
      >
        <template #num>
          <van-stepper v-model="num" />
        </template>
      </van-card>
      <div class="sum">
        合计：{{combined}}
        <span></span>
      </div>
    </div>
    <div class="buton" @click="place_order">立即结算</div>
  </div>
</template>

<script>
import { goods_details } from "_api/score_mall";
import { address_list, add_order } from "_api/score_mall";
import area from "@/libs/area.js";
export default {
  name: "settlement",

  data() {
    return {
      num: 1,
      goods: {},
      combined: 0,
      address: null
    };
  },
  watch: {
    num(val) {
      if (this.goods.score)
        this.combined = (this.goods.score * this.num).toFixed(2);
    }
  },
  created() {
    if (this.$route.query.id) {
      this.id = this.$route.query.id;
      this.get_goods();
    } else {
      this.$router.replace({ name: "home" });
    }

    address_list({
      user_id: this.user.id
    }).then(res => {
      if (res.data.list.length) {
        if (this.$route.query.address_id) {
          for (let key of res.data.list) {
            if (key.id == this.$route.query.address_id) {
              this.address = key;
              return;
            }
          }
        } else {
          this.address = res.data.list[0];
        }
      }
    });
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  mounted() {
    // console.log(area);
  },
  methods: {
    place_order() {
      add_order({
        user_id: this.user.id,
        address_id: this.address.id,
        g_id: this.id,
        num: this.num
      }).then(res => {
        if(res.code==0){
          this.$router.push('/order-form')
        }else{
          this.$toast.fail(res.msg)
        }
        
      });
    },
    get_goods() {
      goods_details({
        id: this.id
      }).then(res => {
        // console.log(res);
        res.data.score = res.data.score.toFixed(2);
        // console.log(res.data.score);
        this.goods = res.data;
        this.combined = (res.data.score * this.num).toFixed(2);
      });
    }
  }
};
</script>

<style lang="less" >
@import url("./settlement.less");
</style>