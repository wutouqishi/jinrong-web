<style lang="less">
@import "./my-gold-coin.less";
</style>
<template>
  <!-- 我的金币 -->
  <div class="wrap">
    <!-- 头部 -->
    <div class="head">
      <!-- 头像 / 昵称部分 -->
      <div class="portrait">
        <div class="head-portrait"></div>
        <span>昵称</span>
      </div>
      <!-- 金币部分 -->
      <div class="gold">
        <img :src="coin" alt />
        <span>66666666</span>
      </div>
      <!-- 金币个数 -->
      <div class="number">瑞和个数（金币）</div>
    </div>
    <!-- 三个导航按钮 -->
    <div class="list">
      <div class="li" @click="activeName='a'">
        <img :src="income_out1" alt v-if="activeName=='a'" />
        <img :src="income_out" alt v-else />
        <span>收入明细</span>
      </div>
      <div class="li" @click="activeName='b'">
        <img :src="friend_out1" alt v-if="activeName=='b'" />
        <img :src="friend_out" alt v-else />
        <span>好友列表</span>
      </div>
      <div class="li" @click="activeName='c'">
        <img :src="explain_out1" alt v-if="activeName=='c'" />
        <img :src="explain_out" alt v-else />
        <span>使用说明</span>
      </div>
    </div>
    <!-- 内容部分 -->
    <!-- 收入明细部分 -->
    <div class="integral" v-if="activeName=='a'">
      <div class="li">
        <div class="left">
          <span class="top">分享关注获取积分：100</span>
          <span class="bottom">18888888888</span>
        </div>
        <div class="right">+100</div>
      </div>
      <div class="li">
        <div class="left">
          <span class="top">分享关注获取积分：100</span>
          <span class="bottom">18888888888</span>
        </div>
        <div class="right">+100</div>
      </div>
      <div class="li">
        <div class="left">
          <span class="top">分享关注获取积分：100</span>
          <span class="bottom">18888888888</span>
        </div>
        <div class="right">+100</div>
      </div>
    </div>
    <!-- 好友列表部分 -->
    <div class="integrall" v-if="activeName=='b'">
      <div class="lii">
        <div class="left">
          <img src alt />
        </div>
        <div class="rigth">
          <span>测试账号</span>
        </div>
      </div>
      <div class="lii">
        <div class="left">
          <img src alt />
        </div>
        <div class="rigth">
          <span>测试账号</span>
        </div>
      </div>
      <div class="lii">
        <div class="left">
          <img src alt />
        </div>
        <div class="rigth">
          <span>测试账号</span>
        </div>
      </div>
    </div>
    <!-- 使用说明部分 -->
    <div class="integralll" v-if="activeName=='c'">
      <p>1、“瑞和金币”专属东方瑞和认证会员；</p>
      <p>2、老会员成功推荐一名会员并注册成为普通会员后可获得200“瑞和金币”；</p>
      <p>3、不同认证会员号“瑞和金币”不可合并使用，“瑞和金币”不可兑换现金，不能赠与或转让；</p>
      <p>4、平台有权取消非合规渠道获得的“瑞和金币”；</p>
      <p>5、平台保留本办法解释权，有权根据需要取消或增删、修订本办法，并在法律许可范围内保留最终解释权；</p>
      <p>6、积分商城即将上线，会员可通过瑞和金币进行兑换。更多升级服务敬请期待！</p>
    </div>
  </div>
</template>
<script>
import coin from "@/assets/svg/coin.png";
import explain_out from "@/assets/svg/explain_out.png";
import explain_out1 from "@/assets/svg/explain_out1.png";
import friend_out from "@/assets/svg/friend_out.png";
import friend_out1 from "@/assets/svg/friend_out1.png";
import income_out from "@/assets/svg/income_out.png";
import income_out1 from "@/assets/svg/income_out1.png";
export default {
  name: "myGoldCoin",
  data() {
    return {
      activeName: "a",
      coin,
      income_out,
      income_out1,
      friend_out,
      friend_out1,
      explain_out,
      explain_out1
    };
  }
};
</script>