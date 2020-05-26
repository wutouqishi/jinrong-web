<style lang="less" scoped>
@import url("./products.less");
</style>
<template>
  <div class="products-wrap" :class="{butoe:canReserve}">
    <div class="pr-title">{{title}}</div>
    <div class="pr-top-card prt-one" v-if="orderMoney&&eachMoney&&income">
      <div class="card-title">投资收益</div>
      <div class="card-row">
        <span>投资总额</span>
        <strong>{{orderMoney.toFixed(2)}}</strong>
      </div>
      <div class="card-row">
        <span>预期收益</span>
        <strong>{{income.toFixed(2)}}</strong>
      </div>
      <div class="card-row">
        <span>合计</span>
        <strong>{{(orderMoney+income).toFixed(2)}}</strong>
      </div>
      <div class="card-table" >
        <van-row>
          <van-col :span="col_span[0]">
            <strong>期数</strong>
          </van-col>
          <van-col :span="col_span[1]">
            <strong>兑付时间</strong>
          </van-col>
          <van-col :span="col_span[2]">
            <strong>金额</strong>
          </van-col>
          <van-col :span="col_span[3]">
            <strong>是否兑付</strong>
          </van-col>
        </van-row>
        <van-row v-for="(item, index) in payments" :key="item.id">
          <van-col :span="col_span[0]">
            <span>{{index+1}}</span>
          </van-col>
          <van-col :span="col_span[1]">
            <span>{{item.payment_time}}</span>
          </van-col>
          <van-col :span="col_span[2]">
            <span class="blod" v-if="index === payments.length - 1">{{(orderMoney+eachMoney).toFixed(2)}}</span>
            <span class="blod" v-else>{{eachMoney.toFixed(2)}}</span>
          </van-col>
          <van-col :span="col_span[3]">
            <span class="success blod" v-if="item.is_payment">是</span>
            <span class="error blod"  v-else>否</span>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="pr-top-card" v-if="bankCard">
      <div class="card-title">账户信息</div>
      <div class="card-row">
        <span>户名</span>
        <strong>{{user.name}}</strong>
      </div>
      <div class="card-row">
        <span>开户银行</span>
        <strong>{{bank}}</strong>
      </div>
      <div class="card-row">
        <span>银行卡号</span>
        <strong>{{bankCard}}</strong>
      </div>
    </div>
    <div class="pr-top-card">
      <div class="card-title">产品属性</div>
      <template v-for="(item, key) in productInfo">
        <div class="card-row" :class="{bold:key=='status'}" :key="key" v-if="item">
          <span>{{key|attribute}}</span>
          <p class="strong">
            <strong>{{item}}</strong>
          </p>
        </div>
      </template>
    </div>
    <div class="pr-top-card">
      <div class="card-title">预期年化收益率</div>
      <template v-for="(item, index) in incomes">
        <div class="card-row" :key="index" v-if="item">
          <span>
            {{ index === incomes.length - 1
            ? `${item.min}万元以上`
            : `${item.min}万元 -- ${item.max}万元`}}
          </span>
          <p class="strong">
            <strong>{{item.income}}%</strong>
          </p>
        </div>
      </template>
    </div>
    <div class="pr-top-card">
      <div class="card-title">产品详情</div>
      <div class="w-e-text" v-html="details"></div>
    </div>
    <div class="can-reserve" v-if="canReserve">
      <router-link class="button" :to='/subscribe/+id'>
      立即预约
      </router-link>
      
    </div>
  </div>
</template>

<script>
import {imageSrc} from "@/libs/util"
import { getOneProduct } from "_api/user";
import { getReserve, createReserves } from '_api/reserves'
import dayjs from 'dayjs'
export default {
  name: "products",
  data() {
    return {
      col_span: [4, 8, 6, 6],
      title: "",
      orderMoney: null,
      eachIncome: null,
      income: null,
      eachMoney: null,
      bank: null,
      bankCard: null,
      payments: {},
      productInfo: {},
      incomes: {},
      details:'',
      canReserve:false
    };
  },
  filters: {
    attribute(val) {
      let icon = {
        id:'',
        publisher: "发行人",
        publish_deadline: "发行期限(月)",
        buy_time: "认购时间",
        start_end_time: "起息-到期时间",
        publish_scale: "发行规模(万元)",
        starting_point: "认购起点(万元)",
        payment_mode: "兑付方式",
        income: "预期年化收益(%)",
        management_fee: "管理费(%)",
        underwriting_fee: "承销费(%)",
        hosting_fee: "托管费(%)",
        record_fee: "备案费(%)",
        bank: "监管银行",
        status: "产品状态",
        guarantor: "担保方",
        trustee: "受托投资人"
      };
      return icon[val];
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    console.log(this.$route.params);
    this.id= this.$route.params.id
    this.orderMoney = parseFloat(this.$route.params.money);
    this.eachIncome = parseFloat(this.$route.params.eachIncome);
    this.eachMoney = (this.orderMoney * this.eachIncome) / 100;
    this.bank = this.$route.params.bank;
    this.bankCard = this.$route.params.bankCard;

    getOneProduct(this.$route.params.id).then(res => {
      this.payments = res.payments.data;

      this.title = res.name;
      this.income =
        (this.orderMoney / 100) * this.eachIncome * this.payments.length;

      this.incomes = res.incomes.data;
      if (res.details) {
        this.details = imageSrc(res.details)
      }
      let status_code = res.status
      switch (res.status) {
        case 0:
          res.status = "认购期";
          break;
        case 1:
          res.status = "封闭期";
          break;
        case 2:
          res.status = "已结束";
          break;
        default:
          break;
      }
      this.productInfo = {
       status_code:status_code,
        status: res.status,
        publisher: res.publisher,
        publish_deadline: res.publish_deadline,
        buy_time: res.buy_start_time + " -- " + res.buy_end_time,
        start_end_time: res.start_time + " -- " + res.end_time,
        publish_scale: res.publish_scale,
        starting_point: res.starting_point,
        payment_mode: res.payment_mode,
        income: res.income,
        bank: res.bank,
        guarantor: res.guarantor,
        trustee: res.trustee,
        buy_end_time:res.buy_end_time
      };

      this.get_ser()
    });

  },
  methods:{
    get_ser(){
      
      getReserve({ product_id:this.$route.params.id }).then(res => {
        let end  = dayjs(this.productInfo.buy_end_time).valueOf() - (new Date()).valueOf()
        
        if(res.not_exist && !this.productInfo.status_code&&end>0){
          this.canReserve = true
        }else{
          this.canReserve = false
        }
      })
    }
  }
};
</script>

