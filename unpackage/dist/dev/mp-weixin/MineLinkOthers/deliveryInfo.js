(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["MineLinkOthers/deliveryInfo"],{332:function(e,t,n){"use strict";(function(e){n(5);r(n(4));var t=r(n(333));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},333:function(e,t,n){"use strict";n.r(t);var r=n(334),i=n(336);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n(338);var a,u=n(11),c=Object(u["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,"e66f1dfa",null,!1,r["components"],a);c.options.__file="MineLinkOthers/deliveryInfo.vue",t["default"]=c.exports},334:function(e,t,n){"use strict";n.r(t);var r=n(335);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},335:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return i})),n.d(t,"staticRenderFns",(function(){return a})),n.d(t,"recyclableRender",(function(){return o})),n.d(t,"components",(function(){return r}));var i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__map(e.dataList,(function(t,n){var r=e.__get_orig(t),i=t.requirements.split("，");return{$orig:r,l0:i}})));e.$mp.data=Object.assign({},{$root:{l1:n}})},o=!1,a=[];i._withStripped=!0},336:function(e,t,n){"use strict";n.r(t);var r=n(337),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},337:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{imgSrc:this.$imageBaseSrc,pageInfo:{pageSize:50,pageNum:1},dataList:[]}},methods:{linkToJobDetails:function(t){e.navigateTo({url:"/HomeLink/jobDetails/jobDetails?id=".concat(t,"&from='deliveryInfo'")})},reqRecruitmentInformation:function(){var e=this,t={data:{current:this.pageInfo.pageNum,size:this.pageInfo.pageSize},meta:{openId:"",role:this.$store.state.role}},n={"content-type":"application/json"};this.$http("/recruit/user/query/msgList",t,(function(t){200==t.meta.code&&(e.dataList=JSON.parse(t.data).records)}),n)}},onShow:function(){this.reqRecruitmentInformation()}};t.default=n}).call(this,n(1)["default"])},338:function(e,t,n){"use strict";n.r(t);var r=n(339),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},339:function(e,t,n){}},[[332,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/MineLinkOthers/deliveryInfo.js.map