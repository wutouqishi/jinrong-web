<style lang="less">
@import "./users.less";
</style>
<template>
  <div class="users-wrap">
    <img class="banner" :src="banner_users" alt />
    <div class="wrap">
      <div class="column-title">
        <h4>
          <img class="icon" :src="icon_9" alt />
          <span>实名注册</span>
        </h4>
        <h5>Real name registration</h5>
      </div>

      <div class="wrap-txt">
        <p class="desc">实行会员制管理</p>
        <p class="desc">实名注册会员</p>
      </div>
    </div>

    <div class="wrap-back">
      <div class="column-title">
        <h4>
          <img class="icon" :src="icon_10" alt />
          <span>会员类型</span>
        </h4>
        <h5>Member type</h5>
      </div>
      <div class="wrap-txt">
        <p class="desc">个人会员 机构会员</p>
        <p class="desc">普通会员 认证会员</p>
      </div>
    </div>
    <div class="wrap-lis">
      <div class="column-title">
        <h4>
          <img class="icon" :src="icon_8" alt />
          <span>会员权力</span>
        </h4>
        <h5>Membership rights</h5>
      </div>
      <ul class="wrap-li">
        <li class="li">1、享受本平台提前发布的新产品上线信息及提前预留新产品额度</li>
        <li class="li">2、随时查询本人基本信息及认购产品的相关信息</li>
        <li class="li">3、及时掌握产品利息及本金兑付提醒、产品相关的其他信息</li>
        <li class="li">4、免费阅读本平台发布的相关新闻资讯、金融理财知识等</li>
        <li class="li">5、免费享受相关投资理财咨询服务</li>
        <li class="li">6、免费享受本平台定期举行的投资理财讲座及沙龙</li>
        <li class="li">7、依据会员类别，查阅或获取相关产品信息，同时参加本平台举行的各种线上线下活动</li>
      </ul>
    </div>
    <div class="wrap-back">
      <div class="column-title">
        <h4>
          <img class="icon" :src="icon_8" alt />
          <span>会员义务</span>
        </h4>
        <h5>Membership duty</h5>
      </div>
      <ul class="wrap-li">
        <li class="li">1、享受本平台提前发布的新产品上线信息及提前预留新产品额度</li>
        <li class="li">2、随时查询本人基本信息及认购产品的相关信息</li>
        <li class="li">3、及时掌握产品利息及本金兑付提醒、产品相关的其他信息</li>
        <li class="li">4、免费阅读本平台发布的相关新闻资讯、金融理财知识等</li>
        <li class="li">5、免费享受相关投资理财咨询服务</li>
        <li class="li">6、免费享受本平台定期举行的投资理财讲座及沙龙</li>
        <li class="li">7、依据会员类别，查阅或获取相关产品信息，同时参加本平台举行的各种线上线下活动</li>
      </ul>
    </div>
  </div>
</template>

<script>
import banner_users from "@/assets/img/banner-users.jpg";
import icon_9 from "@/assets/img/icon-9.png";
import icon_8 from "@/assets/img/icon-8.png";
import icon_10 from "@/assets/img/icon-10.png";
export default {
  name: "risk",
  data() {
    return {
      banner_users,
      icon_8,
      icon_9,
      icon_10
    };
  }
};
</script>