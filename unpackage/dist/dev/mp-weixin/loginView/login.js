(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["loginView/login"],{384:function(e,t,n){"use strict";n.r(t);var r=n(385),o=n(387);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n(389);var c,i=n(11),s=Object(i["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],c);s.options.__file="loginView/login.vue",t["default"]=s.exports},385:function(e,t,n){"use strict";n.r(t);var r=n(386);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},386:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return c})),n.d(t,"recyclableRender",(function(){return a})),n.d(t,"components",(function(){return r}));try{r={tuiLandscape:function(){return n.e("components/thorui/tui-landscape/tui-landscape").then(n.bind(null,517))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement;e._self._c},a=!1,c=[];o._withStripped=!0},387:function(e,t,n){"use strict";n.r(t);var r=n(388),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},388:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(138);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i={data:function(){return{showAgreement:!1,maskClosable:!0,agreementChoose:!1}},methods:{linkToUserAgreement:function(){e.navigateTo({url:"/HomeLink/rules/userAgreement"})},linkToPrivacy:function(){e.navigateTo({url:"/HomeLink/rules/privacy"})},closeWindow:function(e){this.showAgreement=!1},agreenIt:function(){this.agreementChoose=!this.agreementChoose},closeAgreementBox:function(){var t=this;!0===this.agreementChoose?(this.$wxLogin().then((function(n){t.$getHttp("/recruit/user/login/".concat(n.code,"/1"),{},(function(r){"200"===r.meta.code&&(r.data&&(console.log("loginData",n),console.log(JSON.parse(r.data)),n.rawData=JSON.stringify(a(a({},JSON.parse(n.rawData)),{},{avatarUrl:JSON.parse(r.data).avatarUrl?JSON.parse(r.data).avatarUrl:n.userInfo.avatarUrl}))),e.setStorageSync("rawData",n.rawData),e.setStorageSync("openId",r.meta.openId),t.$store.commit("reSetOpenId",r.meta.openId),t.$store.commit("setUserInfo",e.getStorageSync("rawData")),console.log("this.$store.state.openId",t.$store.state.openId),t.reqSaveUserInfo())}))})),this.showAgreement=!1):e.showToast({icon:"none",title:"请阅读内容后勾选同意",duration:2e3})},reqSaveUserInfo:function(){var t=JSON.parse(e.getStorageSync("rawData")),n={data:{nickname:t.nickName,avatarUrl:t.avatarUrl,gender:t.gender,country:t.country,province:t.province,city:t.city},meta:{openId:this.openId,role:this.$store.state.role}},r={"content-type":"application/json"};console.log("data",n),this.$http("/recruit/user/add",n,(function(t){e.$emit("loginAllRight")}),r)}},computed:a({},(0,r.mapState)(["openId"]))};t.default=i}).call(this,n(1)["default"])},389:function(e,t,n){"use strict";n.r(t);var r=n(390),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},390:function(e,t,n){}}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/loginView/login.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'loginView/login-create-component',
    {
        'loginView/login-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(384))
        })
    },
    [['loginView/login-create-component']]
]);
