(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["Enterprise/enterpriseEdit/companyIntro"],{2015:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{dataList:{}}},methods:{reqCompanyIntro:function(){var t=this,n={meta:{openId:this.$store.state.openId,role:this.$store.state.role}},e={"content-type":"application/json"};this.$http("/company/query",n,(function(n){200==n.meta.code&&(t.dataList=JSON.parse(n.data),console.log(t.dataList))}),e)}},onLoad:function(){this.reqCompanyIntro()}};n.default=o},6100:function(t,n,e){},6298:function(t,n,e){"use strict";(function(t){e("f083");o(e("66fd"));var n=o(e("9c22"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"9c22":function(t,n,e){"use strict";e.r(n);var o=e("bfb7"),r=e("c67d");for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("f68d");var c,u=e("f0c5"),i=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,"cef6b7b6",null,!1,o["a"],c);n["default"]=i.exports},bfb7:function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var r=function(){var t=this,n=t.$createElement;t._self._c},a=[]},c67d:function(t,n,e){"use strict";e.r(n);var o=e("2015"),r=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=r.a},f68d:function(t,n,e){"use strict";var o=e("6100"),r=e.n(o);r.a}},[["6298","common/runtime","common/vendor"]]]);