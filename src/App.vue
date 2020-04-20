<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  metaInfo: {
    titleTemplate: "%s - 金融",
    htmlAttrs: {
      lang: "zh-CN",
      amp: true
    }
  },
  computed:{
        cacheList () {
      const list = ['information', 'withdrawal','videos-list','my-agent','order']
      return list
    },
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
  }
};
</script>>
