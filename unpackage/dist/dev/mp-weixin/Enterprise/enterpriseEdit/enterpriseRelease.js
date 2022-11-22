(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["Enterprise/enterpriseEdit/enterpriseRelease"],{252:function(e,n,t){"use strict";(function(e){t(5);i(t(4));var n=i(t(253));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},253:function(e,n,t){"use strict";t.r(n);var i=t(254),r=t(256);for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);t(258);var s,a=t(11),u=Object(a["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,"3853f3dc",null,!1,i["components"],s);u.options.__file="Enterprise/enterpriseEdit/enterpriseRelease.vue",n["default"]=u.exports},254:function(e,n,t){"use strict";t.r(n);var i=t(255);t.d(n,"render",(function(){return i["render"]})),t.d(n,"staticRenderFns",(function(){return i["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return i["recyclableRender"]})),t.d(n,"components",(function(){return i["components"]}))},255:function(e,n,t){"use strict";var i;t.r(n),t.d(n,"render",(function(){return r})),t.d(n,"staticRenderFns",(function(){return s})),t.d(n,"recyclableRender",(function(){return o})),t.d(n,"components",(function(){return i}));try{i={tuiModal:function(){return t.e("components/thorui/tui-modal/tui-modal").then(t.bind(null,429))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-input/u-input")]).then(t.bind(null,514))},uButton:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-button/u-button")]).then(t.bind(null,522))},uPicker:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-picker/u-picker")]).then(t.bind(null,466))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,n=e.$createElement;e._self._c},o=!1,s=[];r._withStripped=!0},256:function(e,n,t){"use strict";t.r(n);var i=t(257),r=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=r.a},257:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;t(12);var i={data:function(){for(var e=[],n=1;n<21;n++)e.push("".concat(n,"k"));for(var t=[],i=1;i<101;i++)t.push(i);return t.push("100+"),{isIos:this.$isIos,showPicker:!1,showPopup:!1,showModal:!0,pickerKey:"",enterpriseMsg:{station:"",stationTag:[],workCity:"",workNature:"",enterpriseNum:"",salary:"",education:"",major:"",requirements:"",duties:"",linkManName:"",linkManPosition:"",linkManPhone:"",flag:2},name:"",columnsList:{station:[["前端","后端","全栈","架构师"]],workNature:[["校招","实习","社招"]],enterpriseNum:[t],salary:[e,e],education:[["本科","硕士","博士","大专","中专/其他"]]},skillBoxValue:[],checkBoxList:[{name:"javascript",disabled:!1},{name:"java",disabled:!1},{name:"mysql",disabled:!1}]}},computed:{getWorkNatureId:function(){return function(e){switch(e){case"校招":e=0;break;case"实习":e=1;break;case"社招":e=2;break}return e}},getEducationId:function(){return function(e){switch(e){case"本科":e=0;break;case"硕士":e=1;break;case"博士":e=2;break;case"大专":e=3;break;case"中专/其他":e=4;break}return e}}},methods:{linkToUserAgreement:function(){e.navigateTo({url:"/HomeLink/rules/userAgreement"})},linkToPrivacy:function(){e.navigateTo({url:"/HomeLink/rules/privacy"})},cancelModal:function(){this.showModal=!1,e.switchTab({url:"/pages/mine/mine"})},agreeModal:function(){this.showModal=!1},addPositionTag:function(){this.enterpriseMsg.stationTag.push("")},delPositionTag:function(e){console.log(11111),this.enterpriseMsg.stationTag.splice(e,1),console.log("this.enterpriseMsg",this.enterpriseMsg)},openPicker:function(e){this.pickerKey=e,this.showPicker=!0},confirmPicker:function(e){if("salary"==this.pickerKey)return this.enterpriseMsg[this.pickerKey]=e.value[0]+" - "+e.value[1],this.pickerKey="",void(this.showPicker=!1);this.enterpriseMsg[this.pickerKey]=e.value[0],this.pickerKey="",this.showPicker=!1},cancelPicker:function(){this.pickerKey="",this.showPicker=!1},openPopup:function(){this.showPopup=!0},closePopup:function(){this.showPopup=!1},checkboxChange:function(e){console.log("e",e),this.enterpriseMsg.skill=e.join(" , ")},reqEnterpriseMsg:function(){console.log(111111);var n={data:{jobName:this.enterpriseMsg.station,jobLab:this.enterpriseMsg.stationTag.join("，"),workAddress:this.enterpriseMsg.workCity,workNature:this.enterpriseMsg.workNature,num:this.enterpriseMsg.enterpriseNum,treatment:this.enterpriseMsg.salary,leve:this.enterpriseMsg.education,professional:this.enterpriseMsg.major,requirements:this.enterpriseMsg.requirements,duties:this.enterpriseMsg.duties,contactName:this.enterpriseMsg.linkManName,contactJob:this.enterpriseMsg.linkManPosition,contactPhone:this.enterpriseMsg.linkManPhone,activityId:"2",flag:this.enterpriseMsg.flag,openId:this.$store.state.openId},meta:{openId:this.$store.state.openId,role:this.$store.state.role}},t={"content-type":"application/json"};console.log("data",n),this.$http("/company/modify/job",n,(function(n){console.log("res",n),200==n.meta.code?e.showToast({title:"提交成功",duration:1500}):e.showToast({title:"提交失败",duration:1500,icon:"none"})}),t)}}};n.default=i}).call(this,t(1)["default"])},258:function(e,n,t){"use strict";t.r(n);var i=t(259),r=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=r.a},259:function(e,n,t){}},[[252,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/Enterprise/enterpriseEdit/enterpriseRelease.js.map