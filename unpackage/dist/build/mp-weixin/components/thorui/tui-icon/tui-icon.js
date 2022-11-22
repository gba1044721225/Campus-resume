(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/thorui/tui-icon/tui-icon"],{"0a7e":function(t,e,n){"use strict";n.r(e);var u=n("c9df"),i=n("d468");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("36b2");var c,a=n("f0c5"),f=Object(a["a"])(i["default"],u["b"],u["c"],!1,null,"eb8bfee8",null,!1,u["a"],c);e["default"]=f.exports},"36b2":function(t,e,n){"use strict";var u=n("fd62"),i=n.n(u);i.a},bc82:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=i(n("28c8"));function i(t){return t&&t.__esModule?t:{default:t}}var r={name:"tuiIcon",emits:["click"],props:{name:{type:String,default:""},size:{type:[Number,String],default:32},unit:{type:String,default:"px"},color:{type:String,default:"#999"},bold:{type:Boolean,default:!1},margin:{type:String,default:"0"},index:{type:Number,default:0}},data:function(){return{icons:u.default}},methods:{handleClick:function(){this.$emit("click",{index:this.index})}}};e.default=r},c9df:function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return u}));var i=function(){var t=this,e=t.$createElement;t._self._c},r=[]},d468:function(t,e,n){"use strict";n.r(e);var u=n("bc82"),i=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);e["default"]=i.a},fd62:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/thorui/tui-icon/tui-icon-create-component',
    {
        'components/thorui/tui-icon/tui-icon-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0a7e"))
        })
    },
    [['components/thorui/tui-icon/tui-icon-create-component']]
]);
