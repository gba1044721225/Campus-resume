(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{139:function(e,t,n){"use strict";(function(e){n(5);o(n(4));var t=o(n(140));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},140:function(e,t,n){"use strict";n.r(t);var o=n(141),r=n(143);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n(145);var a,s=n(11),c=Object(s["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"92bb8f34",null,!1,o["components"],a);c.options.__file="pages/home/home.vue",t["default"]=c.exports},141:function(e,t,n){"use strict";n.r(t);var o=n(142);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},142:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return a})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return o}));try{o={tuiBannerArc:function(){return n.e("components/thorui/tui-banner-arc/tui-banner-arc").then(n.bind(null,376))},tuiFab:function(){return n.e("components/thorui/tui-fab/tui-fab").then(n.bind(null,383))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,t=e.$createElement,n=(e._self._c,1==e.role?e.__map(e.dataList,(function(t,n){var o=e.__get_orig(t),r=t.jobLab.split("，");return{$orig:o,l0:r}})):null),o=2==e.role?e.__map(e.dataList,(function(t,n){var o=e.__get_orig(t),r=e.showTag("top",t);return{$orig:o,m0:r}})):null;e.$mp.data=Object.assign({},{$root:{l1:n,l2:o}})},i=!1,a=[];r._withStripped=!0},143:function(e,t,n){"use strict";n.r(t);var o=n(144),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},144:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(138);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(){Promise.all([n.e("common/vendor"),n.e("loginView/login")]).then(function(){return resolve(n(390))}.bind(null,n)).catch(n.oe)},c={components:{MyLogin:s},data:function(){return{imgSrc:this.$imageBaseSrc,pageInfo:{pageSize:10,pageNum:1},recordList:[],dataList:[],screenHeight:0,swiperInfo:{indicatorDots:!0,autoplay:!0,interval:2e3,duration:500},testInfo:{skill:["3-5年","javascript","java","html5","css3","canvas","高等数学","ui设计","绘画","概率论","4级英语","教师资格证"]},btnList:[{bgColor:"#64B532",text:"学生",fontSize:28,color:"#fff"},{bgColor:"#16C2C2",text:"企业",fontSize:28,color:"#fff"},{bgColor:"#ff0000",text:"管理员",fontSize:28,color:"#fff"}]}},onLoad:function(){var t=this;e.getSystemInfo({success:function(e){t.screenHeight=e.screenHeight*(750/e.windowWidth)-336,console.log(t.screenHeight)}})},onShareAppMessage:function(e){return"button"===e.from&&console.log(e.target),{title:"校区招聘",path:"/pages/index/index"}},methods:{fabClick:function(t){var n=this;if(this.$store.state.openId)switch(this.init(),t.index){case 0:e.setStorageSync("role",1),this.$store.commit("reSetRole",1),this.reqRecruitmentInformation();break;case 1:e.setStorageSync("role",2),this.$store.commit("reSetRole",2),this.reqResumeList();break;case 2:e.setStorageSync("role",3),this.$store.commit("reSetRole",3),e.redirectTo({url:"/Admin/Admin"});break}else e.showModal({title:"登录提醒",content:"请先完成登录后使用",success:function(e){e.confirm?(console.log("用户点击确定"),n.$refs.loginBox.showAgreement=!0):e.cancel&&(console.log("用户点击取消"),n.$refs.loginBox.showAgreement=!1)}})},linkToJobDetails:function(t){e.navigateTo({url:"/HomeLink/jobDetails/jobDetails?id=".concat(t)})},linkToStudentDetails:function(t){e.navigateTo({url:"/HomeLink/studentDetails/studentDetails?stuId=".concat(t)})},init:function(){this.dataList=[],this.recordList=[],this.pageInfo.pageNum=1,this.pageInfo.pageSize=10},reqRecruitmentInformation:function(){var e=this,t={data:{current:this.pageInfo.pageNum,size:this.pageInfo.pageSize},meta:{openId:"",role:this.$store.state.role}},n={"content-type":"application/json"};this.$http("/recruit/user/query/msgList",t,(function(t){200==t.meta.code&&(JSON.parse(t.data).total<=e.pageInfo.pageSize*e.pageInfo.pageNum?(e.pageInfo.pageNum-=1,e.dataList=e.recordList.concat(JSON.parse(t.data).records)):(e.dataList=e.dataList.concat(JSON.parse(t.data).records),e.recordList=e.recordList.concat(JSON.parse(t.data).records)),console.log("this.dataList",e.dataList))}),n)},reqResumeList:function(){var e=this,t={data:{current:this.pageInfo.pageNum,size:this.pageInfo.pageSize},meta:{openId:this.$store.state.openId,role:this.$store.state.role}},n={"content-type":"application/json"};this.$http("/company/resume/list",t,(function(t){console.log("JSON.parse(res.data).records",JSON.parse(t.data).records),200==t.meta.code&&(JSON.parse(t.data).total<=e.pageInfo.pageSize*e.pageInfo.pageNum?(e.pageInfo.pageNum-=1,e.dataList=e.recordList.concat(JSON.parse(t.data).records)):(e.dataList=e.dataList.concat(JSON.parse(t.data).records),e.recordList=e.recordList.concat(JSON.parse(t.data).records)),console.log("this.dataList",e.dataList))}),n)}},computed:i(i({},(0,o.mapState)(["token","role"])),{},{showTag:function(){return function(e,t){if("top"==e){var n=((new Date).getTime()-t.createTime)/1e3/60/60/24;return!!Math.floor(n)}return"bottom"==e&&("博士"==t.leve||"研究生"==t.leve)}}}),onHide:function(){this.init()},onShow:function(){1!=this.role?2==this.role&&this.reqResumeList():this.reqRecruitmentInformation()},onReachBottom:function(){this.pageInfo.pageNum++,1!=this.role?2!=this.role||this.reqResumeList():this.reqRecruitmentInformation()}};t.default=c}).call(this,n(1)["default"])},145:function(e,t,n){"use strict";n.r(t);var o=n(146),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},146:function(e,t,n){}},[[139,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/home.js.map