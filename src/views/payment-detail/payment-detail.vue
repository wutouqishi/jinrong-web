<template>
  <div class="payment-detail-wrap">
    <div class="padding" v-if="Object.keys(payment).length">
      <p class="font-lg text-line">尊敬的投资者：</p>
      <p class="font-lg text-line padding-top-sm">
        您好，《{{ payment.product.name }}》第{{ payment.index }}次收益已于{{
        payment.payment_time
        }}成功兑付，为投资人实现当期收益共计{{ payment.money }}万元，请及时查询核对。
      </p>
      <p class="font-lg text-line padding-top-sm">欢迎致电咨询：{{ phone }}</p>
    </div>
  </div>
</template>

<script>
import { getSettings, getPayment } from "_api/products";
export default {
  name: "paymentDetail",
  data() {
    return {
      payment: {},
      phone: ""
    };
  },
  created() {
    const { id } = this.$route.params;
    console.log(id);
    getSettings().then(res => {
      this.phone = res.phone;
    });
    getPayment(id).then(res => {
      console.log(res);
      this.payment = res;
    });
  }
};
</script>

<style lang="less">
.payment-detail-wrap {
  padding: 15px;
  .font-lg{
    padding-top: 10px;
    font-size: 16px;
    line-height: 24px;
  }

}
</style>