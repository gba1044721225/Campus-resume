(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["Admin/recruitInfo"],{"1b31":function(t,n,e){"use strict";(function(t){e("d642");a(e("66fd"));var n=a(e("2d9d"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"1da5":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var o=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.dataList,(function(n,e){var a=t.__get_orig(n),o=n.jobLab.split("，");return{$orig:a,l0:o}})));t.$mp.data=Object.assign({},{$root:{l1:e}})},r=[]},"2d9d":function(t,n,e){"use strict";e.r(n);var a=e("1da5"),o=e("5c8d");for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);e("5bc1");var i,u=e("f0c5"),c=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"23ef1d42",null,!1,a["a"],i);n["default"]=c.exports},"432d":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{imgSrc:this.$imageBaseSrc,pageInfo:{pageSize:50,pageNum:1},dataList:[]}},methods:{linkToJobDetails:function(n){t.navigateTo({url:"/Admin/recruitInfoDetails?id=".concat(n,"&from='myCollection'")})},reqRecruitmentInformation:function(){var t=this,n={data:this.$store.state.openId,meta:{openId:this.$store.state.openId,role:1}},e={"content-type":"application/json"};this.$http("/recruit/user/query/1",n,(function(n){console.log("res",n),200==n.meta.code&&(t.dataList=JSON.parse(n.data))}),e)}},computed:{},onShow:function(){this.reqRecruitmentInformation()}};n.default=e}).call(this,e("543d")["default"])},"5bc1":function(t,n,e){"use strict";var a=e("628e"),o=e.n(a);o.a},"5c8d":function(t,n,e){"use strict";e.r(n);var a=e("432d"),o=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=o.a},"628e":function(t,n,e){}},[["1b31","common/runtime","common/vendor"]]]);