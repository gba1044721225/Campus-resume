(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["Enterprise/enterpriseEdit/enterpriseRelease"],{252:function(e,t,n){"use strict";(function(e){n(5);r(n(4));var t=r(n(253));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},253:function(e,t,n){"use strict";n.r(t);var r=n(254),i=n(256);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);n(258);var o,a=n(11),u=Object(a["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,"3853f3dc",null,!1,r["components"],o);u.options.__file="Enterprise/enterpriseEdit/enterpriseRelease.vue",t["default"]=u.exports},254:function(e,t,n){"use strict";n.r(t);var r=n(255);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},255:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return i})),n.d(t,"staticRenderFns",(function(){return o})),n.d(t,"recyclableRender",(function(){return s})),n.d(t,"components",(function(){return r}));try{r={uInput:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-input/u-input")]).then(n.bind(null,476))},uButton:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-button/u-button")]).then(n.bind(null,484))},uPicker:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-picker/u-picker")]).then(n.bind(null,428))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,t=e.$createElement;e._self._c},s=!1,o=[];i._withStripped=!0},256:function(e,t,n){"use strict";n.r(t);var r=n(257),i=n.n(r);for(var s in r)"default"!==s&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t["default"]=i.a},257:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(12);var r={data:function(){for(var e=[],t=1;t<21;t++)e.push("".concat(t,"k"));for(var n=[],r=1;r<101;r++)n.push(r);return n.push("100+"),{isIos:this.$isIos,showPicker:!1,showPopup:!1,pickerKey:"",enterpriseMsg:{station:"",stationTag:[],workCity:"",workNature:"",enterpriseNum:"",salary:"",education:"",major:"",requirements:"",duties:"",linkManName:"",linkManPosition:"",linkManPhone:"",flag:2},name:"",columnsList:{station:[["前端","后端","全栈","架构师"]],workNature:[["校招","实习","社招"]],enterpriseNum:[n],salary:[e,e],education:[["本科","硕士","博士","大专","中专/其他"]]},skillBoxValue:[],checkBoxList:[{name:"javascript",disabled:!1},{name:"java",disabled:!1},{name:"mysql",disabled:!1}]}},computed:{getWorkNatureId:function(){return function(e){switch(e){case"校招":e=0;break;case"实习":e=1;break;case"社招":e=2;break}return e}},getEducationId:function(){return function(e){switch(e){case"本科":e=0;break;case"硕士":e=1;break;case"博士":e=2;break;case"大专":e=3;break;case"中专/其他":e=4;break}return e}}},methods:{addPositionTag:function(){this.enterpriseMsg.stationTag.push("")},delPositionTag:function(e){console.log(11111),this.enterpriseMsg.stationTag.splice(e,1),console.log("this.enterpriseMsg",this.enterpriseMsg)},openPicker:function(e){this.pickerKey=e,this.showPicker=!0},confirmPicker:function(e){if("salary"==this.pickerKey)return this.enterpriseMsg[this.pickerKey]=e.value[0]+" - "+e.value[1],this.pickerKey="",void(this.showPicker=!1);this.enterpriseMsg[this.pickerKey]=e.value[0],this.pickerKey="",this.showPicker=!1},cancelPicker:function(){this.pickerKey="",this.showPicker=!1},openPopup:function(){this.showPopup=!0},closePopup:function(){this.showPopup=!1},checkboxChange:function(e){console.log("e",e),this.enterpriseMsg.skill=e.join(" , ")},reqEnterpriseMsg:function(){console.log(111111);var t={data:{jobName:this.enterpriseMsg.station,jobLab:this.enterpriseMsg.stationTag.join("，"),workAddress:this.enterpriseMsg.workCity,workNature:this.enterpriseMsg.workNature,num:this.enterpriseMsg.enterpriseNum,treatment:this.enterpriseMsg.salary,leve:this.enterpriseMsg.education,professional:this.enterpriseMsg.major,requirements:this.enterpriseMsg.requirements,duties:this.enterpriseMsg.duties,contactName:this.enterpriseMsg.linkManName,contactJob:this.enterpriseMsg.linkManPosition,contactPhone:this.enterpriseMsg.linkManPhone,activityId:"2",flag:this.enterpriseMsg.flag,openId:this.$store.state.openId},meta:{openId:this.$store.state.openId,role:this.$store.state.role}},n={"content-type":"application/json"};console.log("data",t),this.$http("/company/modify/job",t,(function(t){console.log("res",t),200==t.meta.code?e.showToast({title:"提交成功",duration:1500}):e.showToast({title:"提交失败",duration:1500,icon:"none"})}),n)}}};t.default=r}).call(this,n(1)["default"])},258:function(e,t,n){"use strict";n.r(t);var r=n(259),i=n.n(r);for(var s in r)"default"!==s&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t["default"]=i.a},259:function(e,t,n){}},[[252,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/Enterprise/enterpriseEdit/enterpriseRelease.js.map