(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-117de3fd"],{"0d03":function(t,e,n){var s=n("6eeb"),r=Date.prototype,a="Invalid Date",i="toString",o=r[i],u=r.getTime;new Date(NaN)+""!=a&&s(r,i,(function(){var t=u.call(this);return t===t?o.call(this):a}))},"39d8":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var s=n("66df");function r(t){return s["a"].request({url:"/api/reserves",method:"post",data:t})}function a(t){return s["a"].request({url:"/api/user/reserve",method:"get",params:t})}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var s=n("1d80"),r=n("5899"),a="["+r+"]",i=RegExp("^"+a+a+"*"),o=RegExp(a+a+"*$"),u=function(t){return function(e){var n=String(s(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t="millisecond",e="second",n="minute",s="hour",r="day",a="week",i="month",o="quarter",u="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,d=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},h={s:l,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+l(s,2,"0")+":"+l(r,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),s=t.clone().add(n,i),r=e-s<0,a=t.clone().add(n+(r?-1:1),i);return Number(-(n+(e-s)/(r?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:i,y:u,w:a,d:r,D:"date",h:s,m:n,s:e,ms:t,Q:o}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p="en",_={};_[p]=f;var v=function(t){return t instanceof y},m=function(t,e,n){var s;if(!t)return p;if("string"==typeof t)_[t]&&(s=t),e&&(_[t]=e,s=t);else{var r=t.name;_[r]=t,s=r}return!n&&s&&(p=s),s||!n&&p},$=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new y(n)},g=h;g.l=m,g.i=v,g.w=function(t,e){return $(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var y=function(){function l(t){this.$L=this.$L||m(t.locale,null,!0),this.parse(t)}var h=l.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(c);if(s)return n?new Date(Date.UTC(s[1],s[2]-1,s[3]||1,s[4]||0,s[5]||0,s[6]||0,s[7]||0)):new Date(s[1],s[2]-1,s[3]||1,s[4]||0,s[5]||0,s[6]||0,s[7]||0)}return new Date(e)}(t),this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return g},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var n=$(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return $(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<$(t)},h.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},h.year=function(t){return this.$g(t,"$y",u)},h.month=function(t){return this.$g(t,"$M",i)},h.day=function(t){return this.$g(t,"$W",r)},h.date=function(t){return this.$g(t,"$D","date")},h.hour=function(t){return this.$g(t,"$H",s)},h.minute=function(t){return this.$g(t,"$m",n)},h.second=function(t){return this.$g(t,"$s",e)},h.millisecond=function(e){return this.$g(e,"$ms",t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,o){var c=this,d=!!g.u(o)||o,l=g.p(t),h=function(t,e){var n=g.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return d?n:n.endOf(r)},f=function(t,e){return g.w(c.toDate()[t].apply(c.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},p=this.$W,_=this.$M,v=this.$D,m="set"+(this.$u?"UTC":"");switch(l){case u:return d?h(1,0):h(31,11);case i:return d?h(1,_):h(0,_+1);case a:var $=this.$locale().weekStart||0,y=(p<$?p+7:p)-$;return h(d?v-y:v+(6-y),_);case r:case"date":return f(m+"Hours",0);case s:return f(m+"Minutes",1);case n:return f(m+"Seconds",2);case e:return f(m+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(a,o){var c,d=g.p(a),l="set"+(this.$u?"UTC":""),h=(c={},c[r]=l+"Date",c.date=l+"Date",c[i]=l+"Month",c[u]=l+"FullYear",c[s]=l+"Hours",c[n]=l+"Minutes",c[e]=l+"Seconds",c[t]=l+"Milliseconds",c)[d],f=d===r?this.$D+(o-this.$W):o;if(d===i||d===u){var p=this.clone().set("date",1);p.$d[h](f),p.init(),this.$d=p.set("date",Math.min(this.$D,p.daysInMonth())).toDate()}else h&&this.$d[h](f);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[g.p(t)]()},h.add=function(t,o){var c,d=this;t=Number(t);var l=g.p(o),h=function(e){var n=$(d);return g.w(n.date(n.date()+Math.round(e*t)),d)};if(l===i)return this.set(i,this.$M+t);if(l===u)return this.set(u,this.$y+t);if(l===r)return h(1);if(l===a)return h(7);var f=(c={},c[n]=6e4,c[s]=36e5,c[e]=1e3,c)[l]||1,p=this.$d.getTime()+t*f;return g.w(p,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=g.z(this),r=this.$locale(),a=this.$H,i=this.$m,o=this.$M,u=r.weekdays,c=r.months,l=function(t,s,r,a){return t&&(t[s]||t(e,n))||r[s].substr(0,a)},h=function(t){return g.s(a%12||12,t,"0")},f=r.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:g.s(o+1,2,"0"),MMM:l(r.monthsShort,o,c,3),MMMM:c[o]||c(this,n),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,u,2),ddd:l(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(a),HH:g.s(a,2,"0"),h:h(1),hh:h(2),a:f(a,i,!0),A:f(a,i,!1),m:String(i),mm:g.s(i,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:s};return n.replace(d,(function(t,e){return e||p[t]||s.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,c,d){var l,h=g.p(c),f=$(t),p=6e4*(f.utcOffset()-this.utcOffset()),_=this-f,v=g.m(this,f);return v=(l={},l[u]=v/12,l[i]=v,l[o]=v/3,l[a]=(_-p)/6048e5,l[r]=(_-p)/864e5,l[s]=_/36e5,l[n]=_/6e4,l[e]=_/1e3,l)[h]||_,d?v:g.a(v)},h.daysInMonth=function(){return this.endOf(i).$D},h.$locale=function(){return _[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=m(t,e,!0);return s&&(n.$L=s),n},h.clone=function(){return g.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},l}();return $.prototype=y.prototype,$.extend=function(t,e){return t(e,y,$),$},$.locale=m,$.isDayjs=v,$.unix=function(t){return $(1e3*t)},$.en=_[p],$.Ls=_,$}))},"5a88":function(t,e,n){"use strict";var s=n("a7fc"),r=n.n(s);r.a},6019:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"products-wrap",class:{butoe:t.canReserve}},[n("div",{staticClass:"pr-title"},[t._v(t._s(t.title))]),t.orderMoney&&t.eachMoney&&t.income?n("div",{staticClass:"pr-top-card prt-one"},[n("div",{staticClass:"card-title"},[t._v("投资收益")]),n("div",{staticClass:"card-row"},[n("span",[t._v("投资总额")]),n("strong",[t._v(t._s(t.orderMoney.toFixed(2)))])]),n("div",{staticClass:"card-row"},[n("span",[t._v("预期收益")]),n("strong",[t._v(t._s(t.income.toFixed(2)))])]),n("div",{staticClass:"card-row"},[n("span",[t._v("合计")]),n("strong",[t._v(t._s((t.orderMoney+t.income).toFixed(2)))])]),n("div",{staticClass:"card-table"},[n("van-row",[n("van-col",{attrs:{span:t.col_span[0]}},[n("strong",[t._v("期数")])]),n("van-col",{attrs:{span:t.col_span[1]}},[n("strong",[t._v("兑付时间")])]),n("van-col",{attrs:{span:t.col_span[2]}},[n("strong",[t._v("金额")])]),n("van-col",{attrs:{span:t.col_span[3]}},[n("strong",[t._v("是否兑付")])])],1),t._l(t.payments,(function(e,s){return n("van-row",{key:e.id},[n("van-col",{attrs:{span:t.col_span[0]}},[n("span",[t._v(t._s(s+1))])]),n("van-col",{attrs:{span:t.col_span[1]}},[n("span",[t._v(t._s(e.payment_time))])]),n("van-col",{attrs:{span:t.col_span[2]}},[s===t.payments.length-1?n("span",{staticClass:"blod"},[t._v(t._s((t.orderMoney+t.eachMoney).toFixed(2)))]):n("span",{staticClass:"blod"},[t._v(t._s(t.eachMoney.toFixed(2)))])]),n("van-col",{attrs:{span:t.col_span[3]}},[e.is_payment?n("span",{staticClass:"success blod"},[t._v("是")]):n("span",{staticClass:"error blod"},[t._v("否")])])],1)}))],2)]):t._e(),t.bankCard?n("div",{staticClass:"pr-top-card"},[n("div",{staticClass:"card-title"},[t._v("账户信息")]),n("div",{staticClass:"card-row"},[n("span",[t._v("户名")]),n("strong",[t._v(t._s(t.user.name))])]),n("div",{staticClass:"card-row"},[n("span",[t._v("开户银行")]),n("strong",[t._v(t._s(t.bank))])]),n("div",{staticClass:"card-row"},[n("span",[t._v("银行卡号")]),n("strong",[t._v(t._s(t.bankCard))])])]):t._e(),n("div",{staticClass:"pr-top-card"},[n("div",{staticClass:"card-title"},[t._v("产品属性")]),t._l(t.productInfo,(function(e,s){return[e?n("div",{key:s,staticClass:"card-row",class:{bold:"status"==s}},[n("span",[t._v(t._s(t._f("attribute")(s)))]),n("p",{staticClass:"strong"},[n("strong",[t._v(t._s(e))])])]):t._e()]}))],2),n("div",{staticClass:"pr-top-card"},[n("div",{staticClass:"card-title"},[t._v("预期年化收益率")]),t._l(t.incomes,(function(e,s){return[e?n("div",{key:s,staticClass:"card-row"},[n("span",[t._v(" "+t._s(s===t.incomes.length-1?e.min+"万元以上":e.min+"万元 -- "+e.max+"万元")+" ")]),n("p",{staticClass:"strong"},[n("strong",[t._v(t._s(e.income)+"%")])])]):t._e()]}))],2),n("div",{staticClass:"pr-top-card"},[n("div",{staticClass:"card-title"},[t._v("产品详情")]),n("div",{staticClass:"w-e-text",domProps:{innerHTML:t._s(t.details)}})]),t.canReserve?n("div",{staticClass:"can-reserve"},[n("router-link",{staticClass:"button",attrs:{to:/subscribe/+t.id}},[t._v(" 立即预约 ")])],1):t._e()])},r=[],a=(n("0d03"),n("b0c0"),n("acd8"),n("c276")),i=n("c24f"),o=n("39d8"),u=n("5a0c"),c=n.n(u),d={name:"products",data:function(){return{col_span:[4,8,6,6],title:"",orderMoney:null,eachIncome:null,income:null,eachMoney:null,bank:null,bankCard:null,payments:{},productInfo:{},incomes:{},details:"",canReserve:!1}},filters:{attribute:function(t){var e={id:"",publisher:"发行人",publish_deadline:"发行期限(月)",buy_time:"认购时间",start_end_time:"起息-到期时间",publish_scale:"发行规模(万元)",starting_point:"认购起点(万元)",payment_mode:"兑付方式",income:"预期年化收益(%)",management_fee:"管理费(%)",underwriting_fee:"承销费(%)",hosting_fee:"托管费(%)",record_fee:"备案费(%)",bank:"监管银行",status:"产品状态",guarantor:"担保方",trustee:"受托投资人"};return e[t]}},computed:{user:function(){return this.$store.state.user}},created:function(){var t=this;console.log(this.$route.params),this.id=this.$route.params.id,this.orderMoney=parseFloat(this.$route.params.money),this.eachIncome=parseFloat(this.$route.params.eachIncome),this.eachMoney=this.orderMoney*this.eachIncome/100,this.bank=this.$route.params.bank,this.bankCard=this.$route.params.bankCard,Object(i["b"])(this.$route.params.id).then((function(e){t.payments=e.payments.data,t.title=e.name,t.income=t.orderMoney/100*t.eachIncome*t.payments.length,t.incomes=e.incomes.data,e.details&&(t.details=Object(a["b"])(e.details));var n=e.status;switch(e.status){case 0:e.status="认购期";break;case 1:e.status="封闭期";break;case 2:e.status="已结束";break;default:break}t.productInfo={status_code:n,status:e.status,publisher:e.publisher,publish_deadline:e.publish_deadline,buy_time:e.buy_start_time+" -- "+e.buy_end_time,start_end_time:e.start_time+" -- "+e.end_time,publish_scale:e.publish_scale,starting_point:e.starting_point,payment_mode:e.payment_mode,income:e.income,bank:e.bank,guarantor:e.guarantor,trustee:e.trustee,buy_end_time:e.buy_end_time},t.get_ser()}))},methods:{get_ser:function(){var t=this;Object(o["b"])({product_id:this.$route.params.id}).then((function(e){var n=c()(t.productInfo.buy_end_time).valueOf()-(new Date).valueOf();e.not_exist&&!t.productInfo.status_code&&n>0?t.canReserve=!0:t.canReserve=!1}))}}},l=d,h=(n("5a88"),n("2877")),f=Object(h["a"])(l,s,r,!1,null,"3b7dad58",null);e["default"]=f.exports},"7e12":function(t,e,n){var s=n("da84"),r=n("58a8").trim,a=n("5899"),i=s.parseFloat,o=1/i(a+"-0")!==-1/0;t.exports=o?function(t){var e=r(String(t)),n=i(e);return 0===n&&"-"==e.charAt(0)?-0:n}:i},a7fc:function(t,e,n){},acd8:function(t,e,n){var s=n("23e7"),r=n("7e12");s({global:!0,forced:parseFloat!=r},{parseFloat:r})}}]);