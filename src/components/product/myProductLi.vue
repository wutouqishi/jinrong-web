<template>
  <div class="my-product-li">
    <div class="title">{{item.product}}</div>
    <div class="row">
      <div class="row-li">
        <p class="sapn">预期年化收益率</p>
        <p class="num">{{ item.income }}</p>
      </div>
      <div class="row-li">
        <p class="sapn">金额</p>
        <p class="num">{{ item.money }}</p>
      </div>
      <div class="row-li">
        <p class="sapn">已兑付利息</p>
        <p class="num color">{{ item.complete_income }}</p>
      </div>            
    </div>
  </div>
</template>

<script>
export default {
  name: "my-product-li",
  props: {
    item: Object
  }
};
</script>

<style lang="less" scoped>
  .my-product-li{
    margin: 0 20px;
    padding: 10px 0;
    border-bottom:1px solid #e2e4ea;
    .title{
      color: #2c3e50;
      font-size: 16px;
    }
    .row{
      padding: 0 5px;
      display: flex;
      .row-li{
        flex: 1;
        .sapn{
          padding: 10px 5px;
          color: #595959;
          font-size: 12px;
        }
        .num{
          padding: 10px 5px;
          color: #2c3e50;
          font-size: 14px;
          font-weight: 700;
          &.color{
            color: #ff4d4f;
          }
        }
      }
    }
  }
</style>