<template>
  <div class="bind-wrap">
    <div class="b-title">绑定手机号</div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="name"
        name="name"
        placeholder="请填写姓名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="phone"
        name="phone"
        placeholder="请填写手机号"
        :rules="[{ validator, message: '手机号错误' }]"
      />
      <van-field v-model="verification_code" name="verification_code" center clearable  placeholder="请输入短信验证码" :rules="[{ required: true, message: '请填写验证码' }]">
        <template #button>
          <van-button @click="onSend" :disabled="time?true:false" size="small" type="primary" >{{time?time+'s':'发送验证码'}}</van-button>
        </template>
      </van-field>
      <div class="bin-button" style="margin: 16px;">
        <van-button block type="danger" native-type="submit">保存</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { verificationCode, bind } from '_api/auth'
import { setToken } from '@/libs/util'
export default {
  data() {
    return {
      name: "",
      phone: "",
      openid_key: this.$store.state.openidKey,
      verification_key: '',
      verification_code: '',
      time:0,
    };
  },
  created(){
    if(!this.$store.state.openidKey){
      this.$router.push({name:'home'})
    }
  },
  methods: {
    countdown(){
      if(this.time>0){
        this.time--
        setTimeout(()=>{
          this.countdown()
        },1000)
      }else{
        this.time=0
      }
    },
    onSend() {
      if(!this.phone){
        this.$toast.fail('请输入电话号码');
        return
      }
      verificationCode({ phone: this.phone }).then(res => {
        this.verification_key = res.key;
        this.time = 60
        this.countdown()
      });
    },
    onSubmit(values) {
      console.log("submit", values);
      let { name, phone, openid_key, verification_key, verification_code } = this
      // console.log(this.$ls.get('ivt_code'))
      bind({
        name,
        phone,
        openid_key,
        verification_key, 
        verification_code,
        ivtCode : this.$ls.get('ivt_code')
      }).then(res=>{

        if(res.access_token){
          this.$store.state.token = res.access_token
          setToken(res.access_token,res.expires_in/86400)
          this.$router.push({name:'home'})
        }else{
          this.$toast.fail(res.message);
        }
        
      })
    },
    validator(val) {
      return /1\d{10}/.test(val);
    }
  }
};
</script>

<style lang="less" >
.bind-wrap {
  padding: 15px;
  .b-title {
    font-size: 18px;
    padding: 30px 0;
  }
  .bin-button .van-button{
    border: 0;
    background: linear-gradient(45deg,#eb2f96,#f5222d);
  }
}
</style>