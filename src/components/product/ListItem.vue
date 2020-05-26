<template>
  <router-link :to="`/products/${item.id}`" class="pr-li">
    <div class="pr-tit">{{ item.name }}</div>
    <div class="data">
      <div class="expected">
        <strong class="num">{{ item.income }}</strong>
        <span class="span">预期年化收益率</span>
      </div>
      <div class="appear" v-if="item.money">
        <strong class="num">{{ item.money }}万元</strong>
        <span class="span">预约金</span>
      </div>      
      <div class="appear" v-else>
        <strong class="num">{{ item.starting_point }}万元</strong>
        <span class="span">起购点</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "product-list",
  props: {
    item: Object
  }
};
</script>


<style lang="less">

  .pr-li {
    display: block;
    margin: 0 14px;
    margin-top: 10px;

    border-bottom: 1px solid #f4f4f4;
    .pr-tit {
      font-size: 16px;
      color: #333;
    }
    .data {
      display: flex;
      padding: 10px;
      padding-top: 0;
      .expected {
        display: flex;
        flex-direction: column;
        width: 128px;
        .num {
          line-height: 36px;
          color: #da3531;
          font-size: 20px;
          font-weight: bold;
        }
      }
      .appear {
        display: flex;
        flex-direction: column;
        .num {
          line-height: 36px;
          color: #666;
          font-size: 16px;
        }
      }
      .span {
        font-size: 14px;
        color: #999;
      }
    }
  }

</style>