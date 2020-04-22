<template>
  <router-link :to="`/${item.id}`" class="pr-li">
    <div class="pr-tit">{{ item.name }}</div>
    <div class="data">
      <div class="expected">
        <strong class="num">{{ item.income }}</strong>
        <span class="span">预期年化收益率</span>
      </div>
      <div class="appear">
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
.pr-list {
  margin: 0 14px;
  .pr-li {
    display: block;
    margin-top: 10px;

    border-bottom: 1px solid #f4f4f4;
    .pr-tit {
      font-size: 14px;
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
          color: #e43a36;
          font-size: 18px;
          font-weight: bold;
        }
      }
      .appear {
        display: flex;
        flex-direction: column;
        .num {
          line-height: 36px;
          color: #666;
          font-size: 14px;
        }
      }
      .span {
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>