<template>
  <div class="subscribe-wrap">
    <van-form @submit="onSubmit">
      <van-field
        v-model="money"
        name="money"
        type="number"
        label="预约金额(万元)："
        placeholder="请填写预约金额(万元)"
        label-class="label-w"
        :rules="[{ required: true, message: '请填写预约金额' }]"
      />
      <div class="bin-button" style="margin: 16px;">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { createReserves } from "_api/reserves";
export default {
  name: "subscribe",
  data() {
    return {
      money: "",
      id: ""
    };
  },
  computed: {
    phone() {
      return this.$store.state.settings.phone;
    }
  },
  created() {
    console.log(this.settings);
    this.id = this.$route.params.id;
    if (!this.id) {
      this.$router.push({ name: "home" });
    }
    // getSettings().then(res => (this.phone = res.phone))
  },
  methods: {
    onSubmit(val) {
      createReserves({ product_id: this.id, ...val }).then(res => {
        this.$dialog
          .confirm({
            title: "预约成功",
            message: `请拨打电话：${this.phone}，确认预约信息。`
          })
          .then(() => {
            this.$router.go(-1);
          })
          .catch(() => {
            this.$router.go(-1);
          });
      });
    }
  }
};
</script>

<style lang="less" >
.subscribe-wrap {
  .label-w {
    width: 120px;
  }
  .bin-button .van-button {
    border: 0;
    background: linear-gradient(45deg, #eb2f96, #f5222d);
  }
}
</style>