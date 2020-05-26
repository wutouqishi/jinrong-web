<style lang="less">
  .order-details-wrap{
    .logistics{
      padding: 0 20px;
      padding-top: 40px;
    }
  }
</style>
<template>
  <div class="order-details-wrap">
    <div class="logistics">
      <van-steps direction="vertical" active-color="#cc0e00"   :active="0">
        <van-step v-for="item in traces" :key="item">
          <h3>{{item.AcceptStation}}</h3>
          <p>{{item.AcceptTime}}</p>
        </van-step>
      </van-steps>
    </div>
  </div>
</template>

<script>
import { order_express_no, order_receipt } from "_api/score_mall";
export default {
  name: "orderDetails",
  data() {
    return {
      id: "",
      traces: []
    };
  },
  mounted() {
    let { id } = this.$route.query;
    this.id = id;
    this.get_no();
  },
  methods: {
    get_no() {
      order_express_no({ id: this.id }).then(res => {
        console.log(res);
        this.traces = res.data.wuliu.Traces.reverse();
      });
    },
    order_receipt(){

    }
  }
};
</script>

