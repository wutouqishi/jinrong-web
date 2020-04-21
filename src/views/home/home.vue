<style lang="less">
@import "./home.less";
</style>
<template>
  <div class="home-wrap">
    <!-- 搜索部分 -->
    <div class="search">
      <span class="iconfont icon-danchucengzhuanhuan"></span>
      <input type="text" placeholder="搜索" />
    </div>

    <div class="navigation-top">
      <a href class="path">
        <img class="icon" :src="i11_07" alt />
        <div class="txt">控制完善</div>
      </a>
      <a href class="path">
        <img class="icon" :src="i11_09" alt />
        <div class="txt">资金监督</div>
      </a>
      <a href class="path">
        <img class="icon" :src="i11_11" alt />
        <div class="txt">会员认证</div>
      </a>
    </div>

    <div class="navigation-column">
      <a href class="nav-li">
        <img class="icon" :src="i11_17" alt />
        <div class="txt">我的产品</div>
      </a>
      <a href class="nav-li">
        <img class="icon" :src="i11_19" alt />
        <div class="txt">在售新产品</div>
      </a>
      <a href class="nav-li">
        <img class="icon" :src="i11_21" alt />
        <div class="txt">封闭期产品</div>
      </a>
      <a href class="nav-li">
        <img class="icon" :src="i11_26" alt />
        <div class="txt">金融理财</div>
      </a>
      <a href class="nav-li">
        <img class="icon" :src="i11_28" alt />
        <div class="txt">新闻资讯</div>
      </a>
      <a href class="nav-li">
        <img class="icon" :src="i11_30" alt />
        <div class="txt">信息公告</div>
      </a>
    </div>

    <div class="rotatio-chart">
      <van-swipe class="my-swipe" :autoplay="3000"  indicator-color="#d42d27">
        <van-swipe-item>
          <img class="swipe-img" :src="i21_03" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img class="swipe-img" :src="i21_03" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img class="swipe-img" :src="i21_03" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img class="swipe-img" :src="i21_03" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 中 -->
    <div class="advertising">
      <a class="ad-li">
        <img :src="i21_03" alt />
      </a>
    </div>

    <div class="h-title">兑付信息</div>
    <div class="list-wrap">
      <div class="list-flex">
        <a href class="li">
          <div class="l-title">滇池国投定向债务融资工具第二期</div>
          <span class="num">第3次</span>
          <span class="tiem">2020-4-18</span>
          <span class="start">收益已兑付</span>
        </a>
        <a href class="li">
          <div class="l-title">滇池国投定向债务融资工具第二期</div>
          <span class="num">第3次</span>
          <span class="tiem">2020-4-18</span>
          <span class="start">收益已兑付</span>
        </a>
        <a href class="li">
          <div class="l-title">滇池国投定向债务融资工具第二期</div>
          <span class="num">第3次</span>
          <span class="tiem">2020-4-18</span>
          <span class="start">收益已兑付</span>
        </a>
        <a href class="li">
          <div class="l-title">滇池国投定向债务融资工具第二期</div>
          <span class="num">第3次</span>
          <span class="tiem">2020-4-18</span>
          <span class="start">收益已兑付</span>
        </a>
        <a href class="li">
          <div class="l-title">滇池国投定向债务融资工具第二期</div>
          <span class="num">第3次</span>
          <span class="tiem">2020-4-18</span>
          <span class="start">收益已兑付</span>
        </a>
        <a href class="li">
          <div class="l-title">滇池国投定向债务融资工具第二期</div>
          <span class="num">第3次</span>
          <span class="tiem">2020-4-18</span>
          <span class="start">收益已兑付</span>
        </a>
        <a href class="li">
          <div class="l-title">滇池国投定向债务融资工具第二期</div>
          <span class="num">第3次</span>
          <span class="tiem">2020-4-18</span>
          <span class="start">收益已兑付</span>
        </a>
        <a href class="li">
          <div class="l-title">滇池国投定向债务融资工具第二期</div>
          <span class="num">第3次</span>
          <span class="tiem">2020-4-18</span>
          <span class="start">收益已兑付</span>
        </a>
        
      </div>
    </div>
    <div class="product">
      <div class="pr-title">
        <div class="txt">封闭期产品</div>
        <a href class="path">
          <span>更多</span>
          <van-icon name="arrow" />
        </a>
      </div>
      <div class="pr-list">
        <a class="pr-li">
          <div class="pr-tit">【高新国资】资产收益转让工具（24个月）</div>
          <div class="data">
            <div class="expected">
              <strong class="num">7.4%-7.8%</strong>
              <span class="span">预期年化收益率</span>
            </div>
            <div class="appear">
              <strong class="num">10.00万元</strong>
              <span class="span">起购点</span>
            </div>
          </div>
        </a>
        <a class="pr-li">
          <div class="pr-tit">【高新国资】资产收益转让工具（24个月）</div>
          <div class="data">
            <div class="expected">
              <strong class="num">7.4%-7.8%</strong>
              <span class="span">预期年化收益率</span>
            </div>
            <div class="appear">
              <strong class="num">10.00万元</strong>
              <span class="span">起购点</span>
            </div>
          </div>
        </a>
        <a class="pr-li">
          <div class="pr-tit">【高新国资】资产收益转让工具（24个月）</div>
          <div class="data">
            <div class="expected">
              <strong class="num">7.4%-7.8%</strong>
              <span class="span">预期年化收益率</span>
            </div>
            <div class="appear">
              <strong class="num">10.00万元</strong>
              <span class="span">起购点</span>
            </div>
          </div>
        </a>                
      </div>
    </div>
    <!-- tabBar -->
    <div class="tabbar">
      <a class="item">
        <span class="iconfont icon-shouye"></span>
        <div class="txt">首页</div>
      </a>
      <a class="item">
        <span class="iconfont icon-my"></span>
        <div class="txt">个人中心</div>
      </a>
      <a class="item">
        <img class="icon" :src="i31_07" alt />
      </a>
      <a class="item">
        <span class="iconfont icon-shoutixiang-"></span>
        <div class="txt">更多服务</div>
      </a>
      <a class="item">
        <span class="iconfont icon-lianxi"></span>
        <div class="txt">联系我们</div>
      </a>
    </div>
  </div>
</template>

<script>
import i11_07 from "@/assets/11_07.jpg";
import i11_09 from "@/assets/11_09.jpg";
import i11_11 from "@/assets/11_11.jpg";
import i11_17 from "@/assets/11_17.jpg";
import i11_19 from "@/assets/11_19.jpg";
import i11_21 from "@/assets/11_21.jpg";
import i11_26 from "@/assets/11_26.jpg";
import i11_28 from "@/assets/11_28.jpg";
import i11_30 from "@/assets/11_30.jpg";
import i21_03 from "@/assets/21_03.jpg";
import i31_07 from "@/assets/31_07.jpg";
import { getSettings } from "_api/setting";
// import { getProducts, getPayments } from '_api/products'
export default {
  name: "home",
  data() {
    return {
      i11_07,
      i11_09,
      i11_11,
      i11_17,
      i11_19,
      i11_21,
      i11_26,
      i11_28,
      i11_30,
      i21_03,
      i31_07
    };
  },
  created() {
    getSettings().then(res => {
      console.log(res);
    });
  }
};
</script>
