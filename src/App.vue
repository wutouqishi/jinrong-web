<template>
  <div id="app">
    <van-nav-bar
      v-if="tab_hover==-1"
      :title="bar_title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
      placeholder
    />
    <router-view />
    <div class="tab-bar" v-if="tab_hover != -1&&tab_hover != 99">
      <router-link to="/" class="item" :class="{hover:tab_hover==0}">
        <van-icon name="wap-home-o" />
        <div class="txt">首页</div>
      </router-link>
      <router-link to="/my" class="item" :class="{hover:tab_hover==1}">
        <van-icon name="contact" />
        <div class="txt">个人中心</div>
      </router-link>
      <div class="item">
        <img class="icon" :src="logo" alt />
      </div>
      <router-link to="/service" class="item" :class="{hover:tab_hover==2}">
        <van-icon name="service-o" />
        <div class="txt">更多服务</div>
      </router-link>
      <router-link to="/contact" class="item" :class="{hover:tab_hover==3}">
        <van-icon name="phone-o" />
        <div class="txt">联系我们</div>
      </router-link>
    </div>
  </div>
</template>
<script>
import logo from "@/assets/img/logo.png";
export default {
  metaInfo: {
    titleTemplate: "%s - 金融",
    htmlAttrs: {
      lang: "zh-CN",
      amp: true
    }
  },
  data() {
    return {
      logo,
      bar_title: "",
      tab_hover: 0
    };
  },
  computed: {
    cacheList() {
      const list = [
        "information",
        "withdrawal",
        "videos-list",
        "my-agent",
        "order"
      ];
      return list;
    }
  },
  watch: {
    $route: function(to) {
      this.bar_title = "";
      if (to.meta && to.meta.title) {
        this.bar_title = to.meta.title;
      }
      switch (to.name) {
        case "home":
          this.tab_hover = 0;
          break;
        case "my":
          this.tab_hover = 1;
          break;
        case "service":
          this.tab_hover = 2;
          break;
        case "contact":
          this.tab_hover = 3;
          break;       
        default:
          this.tab_hover = -1;
          break;
      }
      let nod = [
        'certifiedMember',
        'generalMembers',
        'commonProblem'
      ]
      if(nod.indexOf(to.name)!=-1){
        this.tab_hover = 99;
      }
    }
  },
  mounted() {
    this.remsuofang = () => {
      var resizeTimer = null;

      window.addEventListener("resize", function() {
        if (resizeTimer) {
          clearTimeout(resizeTimer);
        }
        resizeTimer = setTimeout(function() {
          mainrem();
        }, 400);
      });
      function mainrem() {
        var html = document.querySelector("html");
        var width = html.getBoundingClientRect().width;
        width = width > 750 ? 750 : width;
        html.style.fontSize = width / 10 + "px";
      }
      mainrem();
    };
    this.remsuofang();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>>
<style lang="less" >
.van-nav-bar {
  .van-nav-bar__left {
    .van-icon {
      color: #ff5e67;
    }
    .van-nav-bar__text {
      color: #ff5e67;
    }
  }
  .van-nav-bar__title{
    color: #ff5e67;
    font-weight: unset;
  }
}

.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 38px;
  padding: 6px;
  background-color: #fafafa;
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    &.hover {
      color: #ff4d4f;
    }
    .van-icon {
      font-size: 16px;
    }
    .txt {
      font-size: 12px;
    }
    .icon {
      width: 30px;
      height: 30px;
      object-fit: contain;
    }
  }
}
</style>
