<style lang="less">
@import "./my-message.less";
</style>
<template>
  <div class="my-message-wrap">
    <!-- 头像部分 -->
    <div class="head-portrait">
        <img class="avatar" :src="user.avatar" alt="">
        <span class="name" >{{user.nick_name}}</span>
    </div>
    <!-- 信息展示部分 -->
    <div class="information-display">
        <div class="ro-tit">我的信息</div>
        <div class="if-row">
          <p>姓名</p>
          <p class="row-r"><span>{{user.name}}</span></p>
        </div>
        <template v-for="(item, index) in user_data">
          <div class="if-row"  :key="item.name" v-if="item.show" >
            <p>{{item.name}}</p>
            <p class="row-r" @click="showData(index)">
              <template v-if="item.type">
                <span>{{item.show}}</span><van-icon name="eye-o" />
              </template>
              <template v-else>
                <span>{{item.text}}</span><van-icon name="closed-eye" />
                
              </template>
            </p>
          </div>
        </template>

        
        <div class="if-row"><p>地址</p> <p class="row-r"><span>{{user.address}}</span></p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myMessage",
  data(){
    return{
      user_data:[]
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created(){
    console.log(this.user)
    this.user_data=[
      {
        type: false,
        name: "电话",
        text: this.user.phone,
        show: this.user.real_phone
      },
      {
        type: false,
        name: "身份证",
        text: this.user.id_card,
        show: this.user.real_id_card
      },
    ]
  },
  methods:{
    showData(val){
      this.user_data[val].type = !this.user_data[val].type
    }
  }
};
</script>