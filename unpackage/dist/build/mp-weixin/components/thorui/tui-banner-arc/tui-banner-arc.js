(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/thorui/tui-banner-arc/tui-banner-arc"],{"2f1a":function(t,n,e){"use strict";e.r(n);var r=e("6159"),u=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=u.a},6159:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"tui-banner-arc",options:{virtualHost:!0},props:{height:{type:[Number,String],default:400},percent:{type:[Number,String],default:120},background:{type:String,default:""}},created:function(){this.width=this.getPercent(this.percent)},watch:{percent:function(t){this.width=this.getPercent(t)}},data:function(){return{width:120}},methods:{getPercent:function(t){return t=Number(t||0),t<120?120:t}}};n.default=r},"7fac":function(t,n,e){},"8ba3":function(t,n,e){"use strict";var r=e("7fac"),u=e.n(r);u.a},"9ba7":function(t,n,e){"use strict";e.r(n);var r=e("e970"),u=e("2f1a");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("8ba3");var c,i=e("f0c5"),f=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,"48128450",null,!1,r["a"],c);n["default"]=f.exports},e970:function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var u=function(){var t=this,n=t.$createElement;t._self._c},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/thorui/tui-banner-arc/tui-banner-arc-create-component',
    {
        'components/thorui/tui-banner-arc/tui-banner-arc-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9ba7"))
        })
    },
    [['components/thorui/tui-banner-arc/tui-banner-arc-create-component']]
]);
