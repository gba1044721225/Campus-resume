(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{5549:function(t,e,n){"use strict";(function(t){n("d642");o(n("66fd"));var e=o(n("750c"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"750c":function(t,e,n){"use strict";n.r(e);var o=n("d83d"),r=n("b792");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("79a5");var i,s=n("f0c5"),c=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,"6a60c2c6",null,!1,o["a"],i);e["default"]=c.exports},"79a5":function(t,e,n){"use strict";var o=n("ddd5"),r=n.n(o);r.a},a3d8:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("26cb");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(){Promise.all([n.e("common/vendor"),n.e("loginView/login")]).then(function(){return resolve(n("0e66"))}.bind(null,n)).catch(n.oe)},c={components:{MyLogin:s},data:function(){return{imgSrc:this.$imageBaseSrc,pageInfo:{pageSize:10,pageNum:1},recordList:[],dataList:[],screenHeight:0,swiperInfo:{indicatorDots:!0,autoplay:!0,interval:2e3,duration:500},testInfo:{skill:["3-5年","javascript","java","html5","css3","canvas","高等数学","ui设计","绘画","概率论","4级英语","教师资格证"]},btnList:[{bgColor:"#64B532",text:"学生",fontSize:28,color:"#fff"},{bgColor:"#16C2C2",text:"企业",fontSize:28,color:"#fff"}]}},onLoad:function(){var e=this;t.getSystemInfo({success:function(t){e.screenHeight=t.screenHeight*(750/t.windowWidth)-336,console.log(e.screenHeight)}})},onShareAppMessage:function(t){return"button"===t.from&&console.log(t.target),{title:"校区招聘",path:"/pages/index/index"}},methods:{fabClick:function(e){var n=this;if(this.$store.state.openId)switch(this.init(),e.index){case 0:t.setStorageSync("role",1),this.$store.commit("reSetRole",1),this.reqRecruitmentInformation();break;case 1:t.setStorageSync("role",2),this.$store.commit("reSetRole",2),this.reqResumeList();break}else t.showModal({title:"登录提醒",content:"请先完成登录后使用",success:function(t){t.confirm?(console.log("用户点击确定"),n.$refs.loginBox.showAgreement=!0):t.cancel&&(console.log("用户点击取消"),n.$refs.loginBox.showAgreement=!1)}})},linkToJobDetails:function(e){t.navigateTo({url:"/HomeLink/jobDetails/jobDetails?id=".concat(e)})},linkToStudentDetails:function(e){t.navigateTo({url:"/HomeLink/studentDetails/studentDetails?stuId=".concat(e)})},init:function(){this.dataList=[],this.recordList=[],this.pageInfo.pageNum=1,this.pageInfo.pageSize=10},reqRecruitmentInformation:function(){var t=this,e={data:{current:this.pageInfo.pageNum,size:this.pageInfo.pageSize},meta:{openId:"",role:this.$store.state.role}},n={"content-type":"application/json"};this.$http("/recruit/user/query/msgList",e,(function(e){200==e.meta.code&&(JSON.parse(e.data).total<=t.pageInfo.pageSize*t.pageInfo.pageNum?(t.pageInfo.pageNum-=1,t.dataList=t.recordList.concat(JSON.parse(e.data).records)):(t.dataList=t.dataList.concat(JSON.parse(e.data).records),t.recordList=t.recordList.concat(JSON.parse(e.data).records)),console.log("this.dataList",t.dataList))}),n)},reqResumeList:function(){var t=this,e={data:{current:this.pageInfo.pageNum,size:this.pageInfo.pageSize},meta:{openId:this.$store.state.openId,role:this.$store.state.role}},n={"content-type":"application/json"};this.$http("/company/resume/list",e,(function(e){console.log("JSON.parse(res.data).records",JSON.parse(e.data).records),200==e.meta.code&&(JSON.parse(e.data).total<=t.pageInfo.pageSize*t.pageInfo.pageNum?(t.pageInfo.pageNum-=1,t.dataList=t.recordList.concat(JSON.parse(e.data).records)):(t.dataList=t.dataList.concat(JSON.parse(e.data).records),t.recordList=t.recordList.concat(JSON.parse(e.data).records)),console.log("this.dataList",t.dataList))}),n)}},computed:a(a({},(0,o.mapState)(["token","role"])),{},{showTag:function(){return function(t,e){if("top"==t){var n=((new Date).getTime()-e.createTime)/1e3/60/60/24;return!!Math.floor(n)}return"bottom"==t&&("博士"==e.leve||"研究生"==e.leve)}}}),onHide:function(){this.init()},onShow:function(){1!=this.role?2==this.role&&this.reqResumeList():this.reqRecruitmentInformation()},onReachBottom:function(){this.pageInfo.pageNum++,1!=this.role?2!=this.role||this.reqResumeList():this.reqRecruitmentInformation()}};e.default=c}).call(this,n("543d")["default"])},b792:function(t,e,n){"use strict";n.r(e);var o=n("a3d8"),r=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=r.a},d83d:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={tuiBannerArc:function(){return n.e("components/thorui/tui-banner-arc/tui-banner-arc").then(n.bind(null,"d046"))},tuiFab:function(){return n.e("components/thorui/tui-fab/tui-fab").then(n.bind(null,"a6fd"))}},r=function(){var t=this,e=t.$createElement,n=(t._self._c,1==t.role?t.__map(t.dataList,(function(e,n){var o=t.__get_orig(e),r=e.jobLab.split("，");return{$orig:o,l0:r}})):null),o=2==t.role?t.__map(t.dataList,(function(e,n){var o=t.__get_orig(e),r=t.showTag("top",e);return{$orig:o,m0:r}})):null;t.$mp.data=Object.assign({},{$root:{l1:n,l2:o}})},a=[]},ddd5:function(t,e,n){}},[["5549","common/runtime","common/vendor"]]]);