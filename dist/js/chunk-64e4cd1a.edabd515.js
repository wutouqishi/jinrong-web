(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64e4cd1a"],{a1a9:function(t,e,a){},ea8a:function(t,e,a){"use strict";var n=a("a1a9"),i=a.n(n);i.a},fd2f:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"news-wrap"},[a("van-tabs",{attrs:{"line-width":"33%","line-height":"1px",color:"#e43a36",background:"#fff","title-active-color":"#e43a36"},on:{change:t.tabchange},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[a("van-tab",{attrs:{name:5,title:"新闻阅读"}}),a("van-tab",{attrs:{name:6,title:"政策法规"}}),a("van-tab",{attrs:{name:7,title:"宣传视频"}})],1),a("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[a("van-list",{attrs:{finished:t.finished,"finished-text":t.list.length?"没有更多了":""},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("div",{staticClass:"content"},t._l(t.list,(function(t){return a("articles-li",{key:t.id,attrs:{item:t}})})),1)]),t.list.length?t._e():a("div",{staticClass:"empty-wrap"},[a("img",{staticClass:"em-img",attrs:{src:t.empty,alt:""}}),a("p",{staticClass:"en-one"},[t._v("暂无内容")])])],1)],1)},i=[],s=a("2909"),l=a("b45c"),o=a.n(l),r=a("8691"),c=a("a695"),h={name:"service",data:function(){return{empty:o.a,list:[],page:1,loading:!1,finished:!1,refreshing:!1,status:5}},components:{articlesLi:c["a"]},created:function(){},methods:{getlist:function(){var t=this;this.refreshing&&(this.list=[],this.refreshing=!1),Object(r["a"])({include:"image",page:1,per_page:10,id:this.status}).then((function(e){var a;console.log(e),t.loading=!1,(a=t.list).push.apply(a,Object(s["a"])(e.data)),console.log(t.list.length,e.meta.pagination.total),t.list.length>=e.meta.pagination.total&&(t.finished=!0),t.page++}))},onLoad:function(){this.getlist()},tabchange:function(){this.page=1,this.finished=!1,this.loading=!0,this.refreshing=!0,this.onLoad()},onRefresh:function(){this.page=1,this.finished=!1,this.loading=!0,this.onLoad()}}},f=h,d=(a("ea8a"),a("2877")),g=Object(d["a"])(f,n,i,!1,null,null,null);e["default"]=g.exports}}]);