<style lang="less">
@import "./articles.less";
</style>

<template>
  <div class="articles-wrap">
    <div class="head">
      <span>{{title}}</span>
      <br />
      <span>发布时间 {{created_at.substring(0, 10)}}</span>
      <span>阅读 {{view_count}}</span>
    </div>
    <div class="body-wrap" v-html="body"></div>
  </div>
</template>

<script>
import { getArticlesData } from "_api/articles";

export default {
  name: "articles",
  data(){
    return {
      title:"",
      created_at:'',
      view_count:'',
      body:''
    }
  },
  created() {
    getArticlesData({
      id: this.$route.params.id
    }).then(res=>{
      this.title = res.title
      this.created_at = res.created_at
      this.view_count = res.view_count
      this.body = res.body
    })
  },
  methods:{

  }
};
</script>