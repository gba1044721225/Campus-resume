(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["MineLink/resumeOnline/addWork"],{202:function(e,n,t){"use strict";(function(e){t(5);r(t(4));var n=r(t(203));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},203:function(e,n,t){"use strict";t.r(n);var r=t(204),i=t(206);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);t(208);var c,u=t(11),a=Object(u["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,"cd3a5c72",null,!1,r["components"],c);a.options.__file="MineLink/resumeOnline/addWork.vue",n["default"]=a.exports},204:function(e,n,t){"use strict";t.r(n);var r=t(205);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},205:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return i})),t.d(n,"staticRenderFns",(function(){return c})),t.d(n,"recyclableRender",(function(){return o})),t.d(n,"components",(function(){return r}));try{r={tuiInput:function(){return t.e("components/thorui/tui-input/tui-input").then(t.bind(null,294))},uTextarea:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-textarea/u-textarea")]).then(t.bind(null,317))},uDatetimePicker:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-datetime-picker/u-datetime-picker")]).then(t.bind(null,325))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,n=e.$createElement;e._self._c},o=!1,c=[];i._withStripped=!0},206:function(e,n,t){"use strict";t.r(n);var r=t(207),i=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=i.a},207:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{pickKey:void 0,showTimerPicker:!1,index:"",ind:"",resumeId:"",workHistory:{addWorkId:"",companyName:"",jobName:"",department:"",beginTime:"",endTime:"",discribe:""}}},onLoad:function(e){this.index=e.index,this.ind=e.ind,this.resumeId=e.resumeId;var n=e.data;n&&(this.workHistory=JSON.parse(n))},methods:{openTimerPicker:function(e){this.pickKey=e,this.showTimerPicker=!0},confirmTimerPicker:function(e){var n=new Date(e.value).getMonth()+1,t=new Date(e.value).getFullYear();this.workHistory[this.pickKey]="".concat(t,"年").concat(n,"月"),this.showTimerPicker=!1,this.pickKey="",this.timerValue=""},cancelTimerPicker:function(){this.showTimerPicker=!1,this.pickKey=""},comfirmWorkHistory:function(){var n=this;this.reqWorkExp().then((function(t){e.navigateBack({delta:1,success:function(e){var t,r=getCurrentPages();r.forEach((function(e,n){"MineLink/resumeOnline/resumeOnline"===e.route&&(t=n)})),r[t].$vm.comfirmWorkHistory(n.index,n.ind,JSON.stringify(n.workHistory))}})}))},cancelWorkHistory:function(){e.navigateBack({delta:1})},reqWorkExp:function(){var e=this;return new Promise((function(n){var t={data:{company:e.workHistory.companyName,depart:e.workHistory.department,endTime:e.workHistory.endTime,id:e.workHistory.addWorkId?e.workHistory.addWorkId:"",jobs:e.workHistory.jobName,startTime:e.workHistory.beginTime,sysInfo:e.resumeId,workDescribe:e.workHistory.discribe,type:"2"},meta:{openId:e.$store.state.openId,role:e.$store.state.role}},r={"content-type":"application/json"};e.$http("/recruit/user/modifyWorkExperience",t,(function(r){200==r.meta.code&&(e.workHistory.addWorkId=t.id,n())}),r)}))}}};n.default=t}).call(this,t(1)["default"])},208:function(e,n,t){"use strict";t.r(n);var r=t(209),i=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=i.a},209:function(e,n,t){}},[[202,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/MineLink/resumeOnline/addWork.js.map