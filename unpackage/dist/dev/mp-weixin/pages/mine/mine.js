(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/mine"],{147:function(e,t,n){"use strict";(function(e){n(5);o(n(4));var t=o(n(148));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},148:function(e,t,n){"use strict";n.r(t);var o=n(149),i=n(151);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n(153);var s,a=n(11),u=Object(a["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],s);u.options.__file="pages/mine/mine.vue",t["default"]=u.exports},149:function(e,t,n){"use strict";n.r(t);var o=n(150);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},150:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return i})),n.d(t,"staticRenderFns",(function(){return s})),n.d(t,"recyclableRender",(function(){return r})),n.d(t,"components",(function(){return o}));try{o={tuiFab:function(){return n.e("components/thorui/tui-fab/tui-fab").then(n.bind(null,371))},tuiModal:function(){return n.e("components/thorui/tui-modal/tui-modal").then(n.bind(null,385))},uRadioGroup:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-radio-group/u-radio-group")]).then(n.bind(null,392))},uRadio:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-radio/u-radio")]).then(n.bind(null,400))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,t=e.$createElement;e._self._c},r=!1,s=[];i._withStripped=!0},151:function(e,t,n){"use strict";n.r(t);var o=n(152),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=i.a},152:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(35)),i=n(138);n(12);function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t,n,o,i,r,s){try{var a=e[r](s),u=a.value}catch(l){return void n(l)}a.done?t(u):Promise.resolve(u).then(o,i)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var r=e.apply(t,n);function s(e){l(r,o,i,s,a,"next",e)}function a(e){l(r,o,i,s,a,"throw",e)}s(void 0)}))}}var d=function(){n.e("loginView/login").then(function(){return resolve(n(378))}.bind(null,n)).catch(n.oe)},f={components:{MyLogin:d},options:{styleIsolation:"shared"},data:function(){return{imgSrc:this.$imageBaseSrc,btnList:[{bgColor:"#16C2C2",text:"学生",fontSize:28,color:"#fff"},{bgColor:"#64B532",text:"企业",fontSize:28,color:"#fff"}],infoItem:[{num:0,label:"已投递",path:"/MineLinkOthers/deliveryInfo"},{num:0,label:"我的面试",path:"/MineLinkOthers/myInterviewStu"},{num:0,label:"我的收藏",path:"/MineLinkOthers/myCollection"}],infoItemEnterprise:[{num:0,label:"收到简历",path:"/Enterprise/enterpriseEdit/deliver"},{num:0,label:"约谈面试",path:"/Enterprise/enterpriseEdit/interviewToStu"},{num:0,label:"人才收藏",path:"/MineLinkOthers/myCollection"}],enterPriseInfo:{},studentInfo:{},settingModal:!1,resumeStateShow:"",resumeState:[{name:"可见",disabled:!1},{name:"对企业可见",disabled:!1},{name:"隐藏",disabled:!1}],resumeItemList:[{name:"简历1",disabled:!1},{name:"简历2",disabled:!1},{name:"简历3",disabled:!1}],resumeItemShow:""}},methods:{init:function(){""==this.$store.state.openId||2!=this.role?""!=this.$store.state.openId&&1==this.role&&this.reqStudentInfo():this.reqEnterpriseInfo()},checkCompanyIntro:function(){e.navigateTo({url:"/Enterprise/enterpriseEdit/companyIntro"})},fabClick:function(t){if(this.$store.state.openId)switch(this.$store.commit("reSetRole",t.index+1),t.index){case 0:e.showToast({title:"已切换到学生端",duration:1e3}),e.setStorageSync("role",1),this.$store.commit("reSetRole",1),this.init();break;case 1:e.showToast({title:"已切换到企业端",duration:1e3}),e.setStorageSync("role",2),this.$store.commit("reSetRole",2),this.init();break}else e.showToast({title:"请先登录后使用该功能",duration:1500})},userLogin:function(){var t=this;e.showModal({title:"登录提醒",content:"您即将授权并登录小程序",success:function(e){e.confirm?(console.log("用户点击确定"),t.$refs.loginBox.showAgreement=!0):e.cancel&&(console.log("用户点击取消"),t.$refs.loginBox.showAgreement=!1)}})},reqAavatar:function(){var e=this;return c(o.default.mark((function t(){var n;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$chooseImage();case 2:n=t.sent,e.$upLoadFile("/file/upload/".concat(e.openId,"/3"),n.tempFilePaths[0],{},(function(t){var n=t.data;e.studentInfo.imgUrl=JSON.parse(JSON.parse(n).data).path}));case 4:case"end":return t.stop()}}),t)})))()},linkToResumeOnline:function(){this.$store.state.openId?e.navigateTo({url:"/MineLink/resumeOnline/resumeOnline"}):e.showToast({title:"请先登录后使用该功能",duration:1500})},linkToResumeDetails:function(){this.$store.state.openId?e.navigateTo({url:"/MineLinkOthers/myResumeInfo"}):e.showToast({title:"请先登录后使用该功能",duration:1500})},linkToUpLoadPdf:function(){this.$store.state.openId?e.navigateTo({url:"/MineLinkOthers/upLoadPdf"}):e.showToast({title:"请先登录后使用该功能",duration:1500})},linkToEnterpriseIntro:function(){this.$store.state.openId?e.navigateTo({url:"/Enterprise/enterpriseEdit/enterpriseEdit"}):e.showToast({title:"请先登录后使用该功能",duration:1500})},linkToEnterpriseRelease:function(){this.$store.state.openId?e.navigateTo({url:"/Enterprise/enterpriseEdit/enterpriseRelease"}):e.showToast({title:"请先登录后使用该功能",duration:1500})},linkToEnterprisePath:function(t){console.log(1111),this.$store.state.openId?(console.log("path",t),t&&(console.log("22222"),e.navigateTo({url:t}))):e.showToast({title:"请先登录后使用该功能",duration:1500})},linkToStudentPath:function(t){this.$store.state.openId?(console.log("path",t),t&&(console.log("22222"),e.navigateTo({url:t}))):e.showToast({title:"请先登录后使用该功能",duration:1500})},settingOpenOrNot:function(){this.settingModal=!0},settingChange:function(e){console.log("e",e),console.log(this.resumeStateShow)},resumeItemChange:function(e){console.log("e",e)},closeSettingModal:function(){this.settingModal=!1},reqEnterpriseInfo:function(){var e=this,t={data:"",meta:{openId:this.openId,role:this.$store.state.role}},n={"content-type":"application/json"};this.$http("/company/query",t,(function(t){if(console.log("res",t),200==t.meta.code){var n=JSON.parse(t.data);e.enterPriseInfo=n,console.log("this.enterPriseInfo",e.enterPriseInfo)}}),n)},reqStudentInfo:function(){var e=this,t={data:this.openId,meta:{openId:this.openId,role:this.$store.state.role}},n={"content-type":"application/json"};this.$http("/recruit/user/query/index",t,(function(t){console.log("res",t),200==t.meta.code&&(e.studentInfo=JSON.parse(t.data),e.infoItem[0].num=e.studentInfo.toudiNum,e.infoItem[1].num=e.studentInfo.mianshiNum,e.infoItem[2].num=e.studentInfo.shoucangNum)}),n)},reqSettingResumeMsg:function(){this.resumeStateShow="可见",this.resumeItemShow="简历3"}},computed:a({},(0,i.mapState)(["openId","userInfo","role"])),onLoad:function(){this.init()},onShow:function(){var t=this;e.$on("loginAllRight",(function(e){t.init()})),this.reqSettingResumeMsg()}};t.default=f}).call(this,n(1)["default"])},153:function(e,t,n){"use strict";n.r(t);var o=n(154),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=i.a},154:function(e,t,n){}},[[147,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/mine.js.map