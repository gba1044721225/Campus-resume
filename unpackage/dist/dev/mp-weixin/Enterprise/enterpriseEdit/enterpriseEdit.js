(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["Enterprise/enterpriseEdit/enterpriseEdit"],{244:function(e,n,t){"use strict";(function(e){t(5);o(t(4));var n=o(t(245));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},245:function(e,n,t){"use strict";t.r(n);var o=t(246),i=t(248);for(var r in i)"default"!==r&&function(e){t.d(n,e,(function(){return i[e]}))}(r);t(250);var s,a=t(11),c=Object(a["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,"5d34218f",null,!1,o["components"],s);c.options.__file="Enterprise/enterpriseEdit/enterpriseEdit.vue",n["default"]=c.exports},246:function(e,n,t){"use strict";t.r(n);var o=t(247);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},247:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return i})),t.d(n,"staticRenderFns",(function(){return s})),t.d(n,"recyclableRender",(function(){return r})),t.d(n,"components",(function(){return o}));try{o={uTextarea:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-textarea/u-textarea")]).then(t.bind(null,446))},uPicker:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-picker/u-picker")]).then(t.bind(null,422))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,n=e.$createElement;e._self._c},r=!1,s=[];i._withStripped=!0},248:function(e,n,t){"use strict";t.r(n);var o=t(249),i=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=i.a},249:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t(35)),i=r(t(193));function r(e){return e&&e.__esModule?e:{default:e}}function s(e,n,t,o,i,r,s){try{var a=e[r](s),c=a.value}catch(u){return void t(u)}a.done?n(c):Promise.resolve(c).then(o,i)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(o,i){var r=e.apply(n,t);function a(e){s(r,o,i,a,c,"next",e)}function c(e){s(r,o,i,a,c,"throw",e)}a(void 0)}))}}var c={data:function(){return{isIos:this.$isIos,showPicker:!1,showSizePicker:!1,companyId:"",companySizeList:[["1-10人","10-50人","50-100人","100-500人","500-1000人","1000-5000人","5000-10000人","10000+人"]],cityList:[],cityLevel1:[],cityLevel2:[],cityLevel3:[],enterpriseInfo:{companyFullName:"",companyShortName:"",businessLicense:"",businessLicenseUrl:"",unitProperties:"",industry:"",companySize:"",linkman:"",locationArea:"",linkmanEmail:"",companyProfile:"",companyLogo:"",companyLogoUrl:"",wechatNumber:"",companyWebsite:"",fullAddress:"",companyPhone:"",otherLinkman:"",otherCompanyPhone:"",otherEmail:""}}},methods:{checkWebsite:function(n){var t=this,o=n.detail.value;console.log("e",n);var i=new RegExp("[一-龥]","g");i.lastIndex=0,i.test(o)?(this.$nextTick((function(){t.$set(t.enterpriseInfo,"companyWebsite",t.enterpriseInfo.companyWebsite.replace(i,""))})),e.showToast({icon:"none",title:"网址不能输入中文"})):this.$set(this.enterpriseInfo,"companyWebsite",o),console.log(this.enterpriseInfo)},initCityData:function(){var e=this;i.default.forEach((function(n,t){var o=[];e.cityLevel1.push(n.provinceName);var i=[],r=[];n.cities.forEach((function(e,n){o.push(e.cityName),e.counties.forEach((function(e,n){r.push(e.countyName)})),i[n]=r,r=[]})),e.cityLevel3[t]=i,e.cityLevel2[t]=o})),this.cityList.push(this.cityLevel1,this.cityLevel2[0],this.cityLevel3[0][0])},changeHandler:function(e){var n=e.columnIndex,t=e.index,o=e.indexs,i=(e.value,e.values,this.$refs.uPicker);console.log("picker",i),0===n?(i.setColumnValues(1,this.cityLevel2[t]),i.setColumnValues(2,this.cityLevel3[t][n])):1===n&&i.setColumnValues(2,this.cityLevel3[o[0]][t])},openPicker:function(){this.showPicker=!0},confirmPicker:function(e){this.enterpriseInfo.locationArea=e.value[0]+e.value[1]+e.value[2],this.showPicker=!1},cancelPicker:function(){this.showPicker=!1},openSizePicker:function(){this.showSizePicker=!0},confirmSizePicker:function(e){this.enterpriseInfo.companySize=e.value[0],this.showSizePicker=!1},cancelSizePicker:function(){this.showSizePicker=!1},getLocation:function(){var e=this;wx.chooseLocation({success:function(n){console.log("res",n),console.log("位置名称："+n.name),console.log("详细地址："+n.address),console.log("纬度："+n.latitude),console.log("经度："+n.longitude),e.$set(e["enterpriseInfo"],"fullAddress",n.name)}})},upLoadBusinessLicense:function(){var n=this;return a(o.default.mark((function t(){var i;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$chooseImage();case 2:i=t.sent,n.enterpriseInfo.businessLicense=i.tempFilePaths[0],n.$upLoadFile("/file/upload/".concat(n.$store.state.openId,"/6"),i.tempFilePaths[0],{},(function(t){if(200==t.statusCode){var o=JSON.parse(JSON.parse(t.data).data);n.enterpriseInfo.businessLicenseUrl=o.path,e.showToast({title:"上传成功",duration:1500})}}));case 5:case"end":return t.stop()}}),t)})))()},upLoadCompanyLogo:function(){var n=this;return a(o.default.mark((function t(){var i;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$chooseImage();case 2:i=t.sent,n.enterpriseInfo.companyLogo=i.tempFilePaths[0],n.$upLoadFile("/file/upload/".concat(n.$store.state.openId,"/7"),i.tempFilePaths[0],{},(function(t){if(200==t.statusCode){var o=JSON.parse(JSON.parse(t.data).data);console.log("dataList",o),n.enterpriseInfo.companyLogoUrl=o.path,console.log("dataList",o),e.showToast({title:"上传成功",duration:1500})}}));case 5:case"end":return t.stop()}}),t)})))()},reqCompanyIntro:function(){var e=this,n={meta:{openId:this.$store.state.openId,role:this.$store.state.role}},t={"content-type":"application/json"};this.$http("/company/query",n,(function(n){console.log("res",n);var t=JSON.parse(n.data);200==n.meta.code&&2!=t.flag&&(e.enterpriseInfo.companyFullName=t.companyName,e.enterpriseInfo.companyShortName=t.alias,e.enterpriseInfo.businessLicenseUrl=t.imgIds,e.enterpriseInfo.businessLicense=t.imgIds,e.enterpriseInfo.unitProperties=t.unitNature,e.enterpriseInfo.industry=t.industryCategory,e.enterpriseInfo.companySize=t.companySize,e.enterpriseInfo.linkman=t.contact,e.enterpriseInfo.locationArea=t.address,e.enterpriseInfo.linkmanEmail=t.email,e.enterpriseInfo.companyProfile=t.introduce,e.enterpriseInfo.companyLogo=t.logo,e.enterpriseInfo.companyLogoUrl=t.logo,e.enterpriseInfo.wechatNumber=t.weixinCode,e.enterpriseInfo.companyWebsite=t.addressUrl,e.enterpriseInfo.fullAddress=t.addressDetail,e.enterpriseInfo.companyPhone=t.unitPhone,e.enterpriseInfo.otherLinkman=t.standbyUser,e.enterpriseInfo.otherCompanyPhone=t.standbyPhone,e.enterpriseInfo.otherEmail=t.standbyEmail,e.companyId=t.id)}),t)},reqEnterpriseInfo:function(){var n={data:{id:this.companyId||"",openId:this.$store.state.openId,companyName:this.enterpriseInfo.companyFullName,alias:this.enterpriseInfo.companyShortName,imgIds:this.enterpriseInfo.businessLicenseUrl,unitNature:this.enterpriseInfo.unitProperties,industryCategory:this.enterpriseInfo.industry,companySize:this.enterpriseInfo.companySize,contact:this.enterpriseInfo.linkman,address:this.enterpriseInfo.locationArea,email:this.enterpriseInfo.linkmanEmail,introduce:this.enterpriseInfo.companyProfile,logo:this.enterpriseInfo.companyLogoUrl,weixinCode:this.enterpriseInfo.wechatNumber,addressUrl:this.enterpriseInfo.companyWebsite,addressDetail:this.enterpriseInfo.fullAddress,unitPhone:this.enterpriseInfo.companyPhone,standbyUser:this.enterpriseInfo.otherLinkman,standbyPhone:this.enterpriseInfo.otherCompanyPhone,standbyEmail:this.enterpriseInfo.otherEmail,flag:0},meta:{openId:this.$store.state.openId,role:this.$store.state.role}},t={"content-type":"application/json"};this.$http("/company/modify",n,(function(n){console.log("res",n),200==n.meta.code?e.showToast({title:"提交成功",duration:1500}):e.showToast({title:"提交失败",duration:1500,icon:"fail"})}),t)}},onLoad:function(){this.initCityData(),this.reqCompanyIntro()}};n.default=c}).call(this,t(1)["default"])},250:function(e,n,t){"use strict";t.r(n);var o=t(251),i=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=i.a},251:function(e,n,t){}},[[244,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/Enterprise/enterpriseEdit/enterpriseEdit.js.map