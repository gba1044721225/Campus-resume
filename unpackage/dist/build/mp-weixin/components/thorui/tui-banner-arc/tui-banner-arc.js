(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/thorui/tui-banner-arc/tui-banner-arc"],{"6d54":function(t,n,e){"use strict";e.r(n);var r=e("97f7"),u=e("6d70");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("bfaf");var i,c=e("f0c5"),f=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,"b8394bf4",null,!1,r["a"],i);n["default"]=f.exports},"6d70":function(t,n,e){"use strict";e.r(n);var r=e("6da3"),u=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=u.a},"6da3":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"tui-banner-arc",options:{virtualHost:!0},props:{height:{type:[Number,String],default:400},percent:{type:[Number,String],default:120},background:{type:String,default:""}},created:function(){this.width=this.getPercent(this.percent)},watch:{percent:function(t){this.width=this.getPercent(t)}},data:function(){return{width:120}},methods:{getPercent:function(t){return t=Number(t||0),t<120?120:t}}};n.default=r},"97f7":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var u=function(){var t=this,n=t.$createElement;t._self._c},a=[]},bfaf:function(t,n,e){"use strict";var r=e("f6a3"),u=e.n(r);u.a},f6a3:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/thorui/tui-banner-arc/tui-banner-arc-create-component',
    {
        'components/thorui/tui-banner-arc/tui-banner-arc-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6d54"))
        })
    },
    [['components/thorui/tui-banner-arc/tui-banner-arc-create-component']]
]);
