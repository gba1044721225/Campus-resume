(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/thorui/tui-banner-arc/tui-banner-arc"],{1717:function(t,n,e){"use strict";var r=e("e8d3"),u=e.n(r);u.a},"49cc":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return r}));var u=function(){var t=this,n=t.$createElement;t._self._c},c=[]},"92ad":function(t,n,e){"use strict";e.r(n);var r=e("49cc"),u=e("e1cc");for(var c in u)"default"!==c&&function(t){e.d(n,t,(function(){return u[t]}))}(c);e("1717");var a,i=e("f0c5"),o=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,"2a202024",null,!1,r["a"],a);n["default"]=o.exports},b9d0:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"tui-banner-arc",options:{virtualHost:!0},props:{height:{type:[Number,String],default:400},percent:{type:[Number,String],default:120},background:{type:String,default:""}},created:function(){this.width=this.getPercent(this.percent)},watch:{percent:function(t){this.width=this.getPercent(t)}},data:function(){return{width:120}},methods:{getPercent:function(t){return t=Number(t||0),t<120?120:t}}};n.default=r},e1cc:function(t,n,e){"use strict";e.r(n);var r=e("b9d0"),u=e.n(r);for(var c in r)"default"!==c&&function(t){e.d(n,t,(function(){return r[t]}))}(c);n["default"]=u.a},e8d3:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/thorui/tui-banner-arc/tui-banner-arc-create-component',
    {
        'components/thorui/tui-banner-arc/tui-banner-arc-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("92ad"))
        })
    },
    [['components/thorui/tui-banner-arc/tui-banner-arc-create-component']]
]);
