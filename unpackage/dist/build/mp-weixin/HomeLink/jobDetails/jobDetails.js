(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["HomeLink/jobDetails/jobDetails"],{1242:function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,o=(t._self._c,void 0!=t.jobList.recruitmentInfo?t.jobList.recruitmentInfo.jobLab.split("，"):null);t.$mp.data=Object.assign({},{$root:{l0:o}})},r=[]},"280c":function(t,e,o){"use strict";var n=o("3349"),i=o.n(n);i.a},3349:function(t,e,o){},"467c":function(t,e,o){"use strict";(function(t){o("f083");n(o("66fd"));var e=n(o("a2d4"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=o,t(e.default)}).call(this,o("543d")["createPage"])},"52fd":function(t,e,o){"use strict";o.r(e);var n=o("d302"),i=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},a2d4:function(t,e,o){"use strict";o.r(e);var n=o("1242"),i=o("52fd");for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);o("280c");var s,a=o("f0c5"),c=Object(a["a"])(i["default"],n["b"],n["c"],!1,null,"0f3b6502",null,!1,n["a"],s);e["default"]=c.exports},d302:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(){Promise.all([o.e("common/vendor"),o.e("loginView/login")]).then(function(){return resolve(o("03c3"))}.bind(null,o)).catch(o.oe)},i={components:{MyLogin:n},data:function(){return{imgSrc:this.$imageBaseSrc,jobId:"",jobList:{},fromPath:"",locationXY:{latitude:"39.909",longitude:"116.39742"}}},methods:{goToHere:function(){console.log(1111),t.getLocation({type:"gcj02",success:function(e){console.log(22222);var o=e.latitude,n=e.longitude;t.openLocation({latitude:Number(o),longitude:Number(n),scale:18,fail:function(t){console.log("res",t)}})}})},reqJobDetails:function(){var t=this,e={data:this.jobId,meta:{openId:this.$store.state.openId,role:this.$store.state.role}},o={"content-type":"application/json"};this.$http("/company/detail/job",e,(function(e){console.log("res",e),200==e.meta.code&&(t.jobList=JSON.parse(e.data))}),o)},reqDeliverResume:function(){var e=this;if(!this.$store.state.openId)return t.showToast({icon:"none",title:"请先登录后使用该功能",duration:1500}),this.$refs.loginBox.showAgreement=!0,void t.$on("loginAllRight",(function(t){e.reqDeliverResume()}));var o={data:{openId:this.$store.state.openId,recruitId:this.jobId,type:"2",descri:"",flag:""},meta:{openId:this.$store.state.openId,role:this.$store.state.role}},n={"content-type":"application/json"};this.$http("/recruit/user/delivery",o,(function(e){console.log("res",e),200==e.meta.code&&t.showToast({title:"投递成功",duration:2e3})}),n)},reqCollectResume:function(){var e=this;if(!this.$store.state.openId)return t.showToast({icon:"none",title:"请先登录后使用该功能",duration:1500}),this.$refs.loginBox.showAgreement=!0,void t.$on("loginAllRight",(function(t){e.reqCollectResume()}));var o={data:{openId:this.$store.state.openId,recruitId:this.jobId,type:"1",descri:"",flag:""},meta:{openId:this.$store.state.openId,role:this.$store.state.role}},n={"content-type":"application/json"};this.$http("/recruit/user/delivery",o,(function(e){console.log("res",e),200==e.meta.code&&t.showToast({title:"收藏成功",duration:2e3})}),n)}},onLoad:function(t){console.log("payload",t),this.jobId=t.id||"",this.fromPath=t.from||"",console.log("this.fromPath",this.fromPath),this.reqJobDetails()}};e.default=i}).call(this,o("543d")["default"])}},[["467c","common/runtime","common/vendor"]]]);