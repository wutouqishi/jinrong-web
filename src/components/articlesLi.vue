<template>
  
    <router-link :to="'/articles/'+item.id" class="commonProblem">
      
      <div class="img">
        <img :src="item.image.url | imgurl" alt />
      </div>
      <div class="tex">
        <p class="title">{{item.title}}</p>

        <p class="time">{{item.from}}--{{item.created_at.substring(0, 10)}}</p>
      </div>
    </router-link>

</template>
<script>
import {url} from '@/config/index'
export default {
  name:'articles-li',
  props: {
    item: Object
  },
  filters:{
    imgurl(val){
      return url+val
    }
  }
};
</script>

<style lang="less" scoped>
.commonProblem {
  display: block;
  height: 100px;
  border-bottom: 1px #e2e4ea solid;
  .img {
    float: left;
    width: 60px;
    height: 60px;
    margin-top: 25px;
    border: 1Px solid #e2e4ea;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .tex {
    float: left;
    width: 250px;
    height: 62px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 25px;
    margin-left: 12px;
    line-height: 28px;
    .title{
      font-size: 16px;
      line-height: 18px;
      color: #111a34;
      letter-spacing: 2px;
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .time {
      font-size: 12px;
      color: #858b9c;
    }
  }
}
</style>