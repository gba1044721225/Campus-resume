(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["MineLink/resumeOnline/resumeOnline"],{187:function(e,t,i){"use strict";(function(e){i(5);s(i(4));var t=s(i(188));function s(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=i,e(t.default)}).call(this,i(1)["createPage"])},188:function(e,t,i){"use strict";i.r(t);var s=i(189),n=i(191);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i(194);var a,o=i(11),c=Object(o["default"])(n["default"],s["render"],s["staticRenderFns"],!1,null,"94a2068a",null,!1,s["components"],a);c.options.__file="MineLink/resumeOnline/resumeOnline.vue",t["default"]=c.exports},189:function(e,t,i){"use strict";i.r(t);var s=i(190);i.d(t,"render",(function(){return s["render"]})),i.d(t,"staticRenderFns",(function(){return s["staticRenderFns"]})),i.d(t,"recyclableRender",(function(){return s["recyclableRender"]})),i.d(t,"components",(function(){return s["components"]}))},190:function(e,t,i){"use strict";var s;i.r(t),i.d(t,"render",(function(){return n})),i.d(t,"staticRenderFns",(function(){return a})),i.d(t,"recyclableRender",(function(){return r})),i.d(t,"components",(function(){return s}));try{s={tuiCollapse:function(){return i.e("components/thorui/tui-collapse/tui-collapse").then(i.bind(null,295))},tuiInput:function(){return i.e("components/thorui/tui-input/tui-input").then(i.bind(null,302))},uPicker:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uview-ui/components/u-picker/u-picker")]).then(i.bind(null,309))},tuiCalendar:function(){return Promise.all([i.e("common/vendor"),i.e("components/thorui/tui-calendar/tui-calendar")]).then(i.bind(null,317))}}}catch(o){if(-1===o.message.indexOf("Cannot find module")||-1===o.message.indexOf(".vue"))throw o;console.error(o.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var n=function(){var e=this,t=e.$createElement;e._self._c},r=!1,a=[];n._withStripped=!0},191:function(e,t,i){"use strict";i.r(t);var s=i(192),n=i.n(s);for(var r in s)"default"!==r&&function(e){i.d(t,e,(function(){return s[e]}))}(r);t["default"]=n.a},192:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(i(193));i(12);function n(e){return e&&e.__esModule?e:{default:e}}var r={data:function(){for(var e=[],t=0;t<20;t++)e.push(t+1+"k");return{isIos:this.$isIos,imageBaseSrc:this.$imageBaseSrc,salaryList:[e,e],cityList:[],cityLevel1:[],cityLevel2:[],cityLevel3:[],tabList:[{label:"简历",resumeId:"",showPicker:!1,showCityPicker:!1,showSalaryPicker:!1,viewType:"",pickKey:{type:"",key:""},educationColumns:[["博士","研究生","本科","专科","高中","中专"]],majorColumns:[["计算机","数学","生物工程"]],politicalStatusColumns:[["党员","团员","群众"]],jTypeColumns:[["校招","社招","实习"]],resumeList:{pnInfo:{name:"",phone:"",school:"",education:"",major:"",graduationTime:"",columnIndex:-1},addInfo:{email:"",politicalStatus:"",birthday:"",hometown:"",dwelling:"",columnIndex:-1},intentInfo:{job:"",salary:"",city:"",columnIndex:-1,jType:""}},addEducation:[],eduCol:-1,addWorkExp:[],WorkExpCol:-1,addPro:[],proCol:-1,addCertificate:[],certCol:-1},{label:"简历",resumeId:"",showPicker:!1,showCityPicker:!1,showSalaryPicker:!1,viewType:"",pickKey:{type:"",key:""},educationColumns:[["博士","研究生","本科","专科","高中","中专"]],majorColumns:[["计算机","数学","生物工程"]],politicalStatusColumns:[["党员","团员","群众"]],jTypeColumns:[["校招","社招","实习"]],resumeList:{pnInfo:{name:"",phone:"",school:"",education:"",major:"",graduationTime:"",columnIndex:-1},addInfo:{email:"",politicalStatus:"",birthday:"",hometown:"",dwelling:"",columnIndex:-1},intentInfo:{job:"",salary:"",city:"",columnIndex:-1,jType:""}},addEducation:[],eduCol:-1,addWorkExp:[],WorkExpCol:-1,addPro:[],proCol:-1,addCertificate:[],certCol:-1}],currentResume:0,indicatorDots:!1,interval:2e3,duration:500,swiperHeight:0,swiperMinHeight:0,keyToCnEdu:{school:"学校",education:"教育",major:"专业",beginTime:"入学时间",endTime:"毕业时间",discribe:"专业描述"},keyToCnWork:{companyName:"公司名称",jobName:"职业名称",department:"所属部门",beginTime:"入职时间",endTime:"离职时间",discribe:"专业描述"},keyToCnPro:{proName:"项目名称",role:"职位名称",beginTime:"项目开始",endTime:"项目结束",result:"项目描述",discribe:"工作描述"},keyToCnCert:{certName:"证书名字",certImage:"证书图片"}}},methods:{changeTabItem:function(e){this.currentResume=e,this.reqResumeAllInfo()},changeTabItemBySwiper:function(e){this.currentResume=e.detail.current,this.reqResumeAllInfo()},setHeight:function(){var t=this,i=e.createSelectorQuery().in(this);console.log("11111111111",i.selectAll(".swiper-item")),i.select("#swiper".concat(this.currentResume)).boundingClientRect((function(e){t.swiperHeight=e.height+25+"px"})).exec()},setMinHeight:function(){var e=wx.getSystemInfoSync(),t=e.statusBarHeight,i=e.windowHeight;this.swiperMinHeight=i-t+"px"},changeCollapse:function(e,t,i){var s=this;console.log("this.tabList[index]['resumeList'][key]['columnIndex']",this.tabList[t]["resumeList"][i]["columnIndex"]),-1==this.tabList[t]["resumeList"][i]["columnIndex"]?this.$set(this.tabList[t]["resumeList"][i],"columnIndex",e):this.$set(this.tabList[t]["resumeList"][i],"columnIndex",-1),this.$nextTick((function(){s.setHeight()}))},changeCollapseAdd:function(e,t,i){var s=this;-1==this.tabList[t][i]?this.tabList[t][i]=e:this.tabList[t][i]=-1,this.$nextTick((function(){s.setHeight()}))},linkToChooseInfo:function(t,i,s){e.navigateTo({url:"/MineLink/resumeOnline/chooseInfo?index=".concat(t,"&type=").concat(i,"&key=").concat(s)})},comfirmInfo:function(e,t,i,s){this.tabList[e].resumeList[t][i]=s},openPicker:function(e,t){this.tabList[this.currentResume].pickKey.type=e,this.tabList[this.currentResume].pickKey.key=t,this.tabList[this.currentResume].showPicker=!0},confirmPicker:function(e){var t=this.tabList[this.currentResume]["pickKey"]["type"],i=this.tabList[this.currentResume]["pickKey"]["key"];this.tabList[this.currentResume].resumeList[t][i]=e.value[0],this.tabList[this.currentResume].showPicker=!1,this.tabList[this.currentResume]["pickKey"]["type"]="",this.tabList[this.currentResume]["pickKey"]["key"]=""},cancelPicker:function(){this.tabList[this.currentResume].showPicker=!1;this.tabList[this.currentResume]["pickKey"]["type"],this.tabList[this.currentResume]["pickKey"]["key"];this.tabList[this.currentResume]["pickKey"]["type"]="",this.tabList[this.currentResume]["pickKey"]["key"]=""},openCityPicker:function(e,t){this.tabList[this.currentResume].pickKey.type=e,this.tabList[this.currentResume].pickKey.key=t,this.tabList[this.currentResume].showCityPicker=!0},confirmCityPicker:function(e){var t=this.tabList[this.currentResume]["pickKey"]["type"],i=this.tabList[this.currentResume]["pickKey"]["key"];this.tabList[this.currentResume].resumeList[t][i]=e.value[0]+e.value[1]+e.value[2],this.tabList[this.currentResume].showCityPicker=!1,this.tabList[this.currentResume]["pickKey"]["type"]="",this.tabList[this.currentResume]["pickKey"]["key"]=""},cancelCityPicker:function(){this.tabList[this.currentResume].showCityPicker=!1;this.tabList[this.currentResume]["pickKey"]["type"],this.tabList[this.currentResume]["pickKey"]["key"];this.tabList[this.currentResume]["pickKey"]["type"]="",this.tabList[this.currentResume]["pickKey"]["key"]=""},initCityData:function(){var e=this;s.default.forEach((function(t,i){var s=[];e.cityLevel1.push(t.provinceName);var n=[],r=[];t.cities.forEach((function(e,t){s.push(e.cityName),e.counties.forEach((function(e,t){r.push(e.countyName)})),n[t]=r,r=[]})),e.cityLevel3[i]=n,e.cityLevel2[i]=s})),this.cityList.push(this.cityLevel1,this.cityLevel2[0],this.cityLevel3[0][0])},changeHandler:function(e){var t=e.columnIndex,i=e.index,s=e.indexs,n=(e.value,e.values,this.$refs.uPicker);console.log("picker",n),0===t?(n.setColumnValues(1,this.cityLevel2[i]),n.setColumnValues(2,this.cityLevel3[i][t])):1===t&&n.setColumnValues(2,this.cityLevel3[s[0]][i])},calendarHandler:function(e,t){this.tabList[this.currentResume].pickKey.type=e,this.tabList[this.currentResume].pickKey.key=t,this.$refs.calendar.show()},chooseDate:function(e){var t=this.tabList[this.currentResume]["pickKey"]["type"],i=this.tabList[this.currentResume]["pickKey"]["key"];this.tabList[this.currentResume].resumeList[t][i]=e.result,this.tabList[this.currentResume]["pickKey"]["type"]="",this.tabList[this.currentResume]["pickKey"]["key"]=""},openSalaryPicker:function(e,t){this.tabList[this.currentResume].pickKey.type=e,this.tabList[this.currentResume].pickKey.key=t,this.tabList[this.currentResume].showSalaryPicker=!0},confirmSalaryPicker:function(e){console.log(e.value[0]+"-"+e.value[1]);var t=this.tabList[this.currentResume]["pickKey"]["type"],i=this.tabList[this.currentResume]["pickKey"]["key"];this.tabList[this.currentResume].resumeList[t][i]=e.value[0]+"-"+e.value[1],this.tabList[this.currentResume].showSalaryPicker=!1,this.tabList[this.currentResume]["pickKey"]["type"]="",this.tabList[this.currentResume]["pickKey"]["key"]=""},cancelSalaryPicker:function(){this.tabList[this.currentResume].showSalaryPicker=!1;this.tabList[this.currentResume]["pickKey"]["type"],this.tabList[this.currentResume]["pickKey"]["key"];this.tabList[this.currentResume]["pickKey"]["type"]="",this.tabList[this.currentResume]["pickKey"]["key"]=""},linkAddEducation:function(t,i,s){void 0==i?e.navigateTo({url:"/MineLink/resumeOnline/addEducation?index=".concat(t,"&resumeId=").concat(this.tabList[this.currentResume].resumeId,"&ind=99999")}):e.navigateTo({url:"/MineLink/resumeOnline/addEducation?index=".concat(t,"&ind=").concat(i,"&resumeId=").concat(this.tabList[this.currentResume].resumeId,"&data=").concat(JSON.stringify(s))})},comfirmEducationHistory:function(e,t,i){var s=this;99999===Number(t)?this.tabList[e].addEducation.push(JSON.parse(i)):this.$set(this.tabList[e].addEducation,t,JSON.parse(i)),this.$nextTick((function(){s.setHeight()}))},deleteEducation:function(e,t){var i=this,s=this.tabList[e].addEducation[t].addEduId;this.reqDelItem(1,s).then((function(s){i.tabList[e].addEducation.splice(t,1),i.$nextTick((function(){i.setHeight()}))}))},linkAddWork:function(t,i,s){void 0==i?e.navigateTo({url:"/MineLink/resumeOnline/addWork?index=".concat(t,"&resumeId=").concat(this.tabList[this.currentResume].resumeId,"&ind=99999")}):e.navigateTo({url:"/MineLink/resumeOnline/addWork?index=".concat(t,"&resumeId=").concat(this.tabList[this.currentResume].resumeId,"&ind=").concat(i,"&data=").concat(JSON.stringify(s))})},comfirmWorkHistory:function(e,t,i){var s=this;99999===Number(t)?this.tabList[e].addWorkExp.push(JSON.parse(i)):this.$set(this.tabList[e].addWorkExp,t,JSON.parse(i)),this.$nextTick((function(){s.setHeight()}))},deleteWork:function(e,t){var i=this,s=this.tabList[e].addWorkExp[t].addWorkId;this.reqDelItem(2,s).then((function(s){i.tabList[e].addWorkExp.splice(t,1),i.$nextTick((function(){i.setHeight()}))}))},linkAddPro:function(t,i,s){void 0==i?e.navigateTo({url:"/MineLink/resumeOnline/addProject?index=".concat(t,"&resumeId=").concat(this.tabList[this.currentResume].resumeId,"&ind=99999")}):e.navigateTo({url:"/MineLink/resumeOnline/addProject?index=".concat(t,"&resumeId=").concat(this.tabList[this.currentResume].resumeId,"&ind=").concat(i,"&data=").concat(JSON.stringify(s))})},comfirmProHistory:function(e,t,i){var s=this;99999===Number(t)?this.tabList[e].addPro.push(JSON.parse(i)):this.$set(this.tabList[e].addPro,t,JSON.parse(i)),this.$nextTick((function(){s.setHeight()}))},deletePro:function(e,t){var i=this,s=this.tabList[e].addPro[t].addProId;this.reqDelItem(3,s).then((function(s){i.tabList[e].addPro.splice(t,1),i.$nextTick((function(){i.setHeight()}))}))},linkAddCert:function(t,i,s){void 0==i?e.navigateTo({url:"/MineLink/resumeOnline/addCertificate?index=".concat(t,"&resumeId=").concat(this.tabList[this.currentResume].resumeId,"&ind=99999")}):e.navigateTo({url:"/MineLink/resumeOnline/addCertificate?index=".concat(t,"&resumeId=").concat(this.tabList[this.currentResume].resumeId,"&ind=").concat(i,"&data=").concat(JSON.stringify(s))})},comfirmCertificate:function(e,t,i){var s=this;99999===Number(t)?this.tabList[e].addCertificate.push(JSON.parse(i)):this.$set(this.tabList[e].addCertificate,t,JSON.parse(i)),this.$nextTick((function(){s.setHeight()}))},deleteCert:function(e,t){var i=this,s=this.tabList[e].addCertificate[t].certId;this.reqDelItem(4,s).then((function(s){i.tabList[e].addCertificate.splice(t,1),i.$nextTick((function(){i.setHeight()}))}))},saveInfoTemporary:function(){var t=this.tabList[this.currentResume];e.setStorageSync("infoTemporary",JSON.stringify(t)),e.setStorageSync("infoTemporaryIndex",this.currentResume),e.showToast({title:"暂存成功",duration:2e3})},getInfoTemporary:function(){var t=this,i=e.getStorageSync("infoTemporary");if(i){var s=e.getStorageSync("infoTemporaryIndex");this.$set(this.tabList[s],"resumeList",JSON.parse(i).resumeList),this.$nextTick((function(){t.setHeight()}))}},reqAllInfo:function(){var e=this,t=this.tabList[this.currentResume].resumeList,i=this.tabList[this.currentResume].resumeId,s={"content-type":"application/json"},n={data:{address:t.addInfo.dwelling,birthday:t.addInfo.birthday,email:t.addInfo.email,expectCity:t.intentInfo.city,expectedSalary:t.intentInfo.salary,graduationDate:t.pnInfo.graduationTime,height:"",id:i,identity:t.addInfo.politicalStatus,introduction:"",leve:t.pnInfo.education,nativePlace:t.addInfo.hometown,openId:this.$store.state.openId,phone:t.pnInfo.phone,position:t.intentInfo.job,positionTag:"",professional:t.pnInfo.major,school:t.pnInfo.school,sex:"",sort:this.currentResume,userName:t.pnInfo.name,view:"1",workCate:"",workType:t.intentInfo.jType},meta:{openId:this.$store.state.openId,role:this.$store.state.role}};this.$http("/recruit/user/updateResume",n,(function(t){200==t.meta.code&&(e.$set(e.tabList[e.currentResume],"resumeId",t.data),console.log("this.tabList",e.tabList))}),s)},reqResumeAllInfo:function(){var e=this,t=this.$store.state.openId;this.$getHttp("/recruit/user/query/".concat(t,"/").concat(this.currentResume),{},(function(t){if(console.log("reqResumeAllInfo",t),200==t.meta.code){var i=JSON.parse(t.data).sysuserInfoVO,s=JSON.parse(t.data).eductions,n=JSON.parse(t.data).shixi,r=JSON.parse(t.data).projects,a=JSON.parse(t.data).listFile;e.$set(e.tabList[e.currentResume],"resumeId",i.id),e.$set(e.tabList[e.currentResume],"viewType",i.view),e.$set(e.tabList[e.currentResume]["resumeList"]["pnInfo"],"name",i.userName),e.$set(e.tabList[e.currentResume]["resumeList"]["pnInfo"],"phone",i.phone),e.$set(e.tabList[e.currentResume]["resumeList"]["pnInfo"],"school",i.school),e.$set(e.tabList[e.currentResume]["resumeList"]["pnInfo"],"education",i.leve),e.$set(e.tabList[e.currentResume]["resumeList"]["pnInfo"],"major",i.professional),e.$set(e.tabList[e.currentResume]["resumeList"]["pnInfo"],"graduationTime",i.graduationDate),e.$set(e.tabList[e.currentResume]["resumeList"]["addInfo"],"email",i.email),e.$set(e.tabList[e.currentResume]["resumeList"]["addInfo"],"politicalStatus",i.identity),e.$set(e.tabList[e.currentResume]["resumeList"]["addInfo"],"birthday",i.birthday),e.$set(e.tabList[e.currentResume]["resumeList"]["addInfo"],"hometown",i.nativePlace),e.$set(e.tabList[e.currentResume]["resumeList"]["addInfo"],"dwelling",i.address),e.$set(e.tabList[e.currentResume]["resumeList"]["intentInfo"],"job",i.position),e.$set(e.tabList[e.currentResume]["resumeList"]["intentInfo"],"salary",i.expectedSalary),e.$set(e.tabList[e.currentResume]["resumeList"]["intentInfo"],"city",i.expectCity),e.$set(e.tabList[e.currentResume]["resumeList"]["intentInfo"],"jType",i.workType);var o=[];s.forEach((function(e){var t={addEduId:e.id,school:e.school,education:e.leve,major:e.professional,beginTime:e.startTime,endTime:e.endTime,discribe:e.described};o.push(t)})),e.$set(e.tabList[e.currentResume],"addEducation",o),o=[],n.forEach((function(e){var t={addWorkId:e.id,companyName:e.company,jobName:e.jobs,department:e.depart,beginTime:e.startTime,endTime:e.endTime,discribe:e.workDescribe};o.push(t)})),e.$set(e.tabList[e.currentResume],"addWorkExp",o),o=[],r.forEach((function(e){var t={addProId:e.id,proName:e.projectName,role:e.projectRole,beginTime:e.startTime,endTime:e.endTime,discribe:e.described,result:e.results};o.push(t)})),e.$set(e.tabList[e.currentResume],"addPro",o),o=[],a.forEach((function(e){var t={certId:e.id,certName:e.fileName,certImage:e.certImage};o.push(t)})),e.$set(e.tabList[e.currentResume],"addCertificate",o),o=null}}))},reqDelItem:function(e,t){var i=this,s={data:{},meta:{openId:this.$store.state.openId,role:this.$store.state.role}},n={"content-type":"application/json"};return new Promise((function(r){i.$getHttp("/recruit/user/del/".concat(e,"/").concat(t),s,(function(e){200==e.meta.code&&r()}),n)}))},reqSetDefaultResume:function(){var e={data:{mainOneId:this.tabList[0].resumeId,mainOneSort:0==this.currentResume?0:1,mainTwoId:this.tabList[1].resumeId,mainTwoSort:1==this.currentResume?0:1},meta:{openId:this.$store.state.openId,role:this.$store.state.role}},t={"content-type":"application/json"};this.$http("/recruit/user/set/maset",e,(function(e){console.log("res",e)}),t)}},onReady:function(){this.setHeight()},onLoad:function(){this.reqResumeAllInfo(),this.setMinHeight(),this.initCityData()}};t.default=r}).call(this,i(1)["default"])},194:function(e,t,i){"use strict";i.r(t);var s=i(195),n=i.n(s);for(var r in s)"default"!==r&&function(e){i.d(t,e,(function(){return s[e]}))}(r);t["default"]=n.a},195:function(e,t,i){}},[[187,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/MineLink/resumeOnline/resumeOnline.js.map