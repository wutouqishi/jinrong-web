(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18421a7c"],{"30d9":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"payment-detail-wrap"},[Object.keys(t.payment).length?e("div",{staticClass:"padding"},[e("p",{staticClass:"font-lg text-line"},[t._v("尊敬的投资者：")]),e("p",{staticClass:"font-lg text-line padding-top-sm"},[t._v(" 您好，《"+t._s(t.payment.product.name)+"》第"+t._s(t.payment.index)+"次收益已于"+t._s(t.payment.payment_time)+"成功兑付，为投资人实现当期收益共计"+t._s(t.payment.money)+"万元，请及时查询核对。 ")]),e("p",{staticClass:"font-lg text-line padding-top-sm"},[t._v("欢迎致电咨询："+t._s(t.phone))])]):t._e()])},s=[],c=e("4c79"),i={name:"paymentDetail",data:function(){return{payment:{},phone:""}},created:function(){var t=this,n=this.$route.params.id;console.log(n),Object(c["c"])().then((function(n){t.phone=n.phone})),Object(c["a"])(n).then((function(n){console.log(n),t.payment=n}))}},u=i,o=(e("f975"),e("2877")),r=Object(o["a"])(u,a,s,!1,null,null,null);n["default"]=r.exports},"4c79":function(t,n,e){"use strict";e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return i}));var a=e("66df"),s=function(){return a["a"].request({url:"/api/user/settings?include=images,product",method:"get"})};function c(t){return a["a"].request({url:"/api/user/payment/".concat(t,"?include=product"),method:"get"})}function i(t){return a["a"].request({url:"/api/user/products",method:"get",params:t})}},ed63:function(t,n,e){},f975:function(t,n,e){"use strict";var a=e("ed63"),s=e.n(a);s.a}}]);