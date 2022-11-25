(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/thorui/tui-banner-arc/tui-banner-arc"],{"02d5":function(t,e,n){"use strict";var r=n("eb17"),u=n.n(r);u.a},3373:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var u=function(){var t=this,e=t.$createElement;t._self._c},a=[]},d046:function(t,e,n){"use strict";n.r(e);var r=n("3373"),u=n("e543");for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);n("02d5");var i,c=n("f0c5"),o=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,"48128450",null,!1,r["a"],i);e["default"]=o.exports},e543:function(t,e,n){"use strict";n.r(e);var r=n("eba2"),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=u.a},eb17:function(t,e,n){},eba2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"tui-banner-arc",options:{virtualHost:!0},props:{height:{type:[Number,String],default:400},percent:{type:[Number,String],default:120},background:{type:String,default:""}},created:function(){this.width=this.getPercent(this.percent)},watch:{percent:function(t){this.width=this.getPercent(t)}},data:function(){return{width:120}},methods:{getPercent:function(t){return t=Number(t||0),t<120?120:t}}};e.default=r}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/thorui/tui-banner-arc/tui-banner-arc-create-component',
    {
        'components/thorui/tui-banner-arc/tui-banner-arc-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d046"))
        })
    },
    [['components/thorui/tui-banner-arc/tui-banner-arc-create-component']]
]);
