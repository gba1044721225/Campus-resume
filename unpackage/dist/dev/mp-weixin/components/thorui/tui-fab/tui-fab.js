(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/thorui/tui-fab/tui-fab"],{371:function(t,e,n){"use strict";n.r(e);var i=n(372),r=n(374);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n(376);var o,s=n(11),a=Object(s["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,"7bc06b0c",null,!1,i["components"],o);a.options.__file="components/thorui/tui-fab/tui-fab.vue",e["default"]=a.exports},372:function(t,e,n){"use strict";n.r(e);var i=n(373);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},373:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return o})),n.d(e,"recyclableRender",(function(){return u})),n.d(e,"components",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.getLeft()),i=t.getRight();t.$mp.data=Object.assign({},{$root:{m0:n,m1:i}})},u=!1,o=[];r._withStripped=!0},374:function(t,e,n){"use strict";n.r(e);var i=n(375),r=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=r.a},375:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tuiFab",emits:["click"],props:{left:{type:Number,default:0},right:{type:Number,default:80},bottom:{type:Number,default:100},width:{type:Number,default:108},height:{type:Number,default:108},radius:{type:String,default:"50%"},custom:{type:Boolean,default:!1},bgColor:{type:String,default:"#5677fc"},color:{type:String,default:"#fff"},btnList:{type:Array,default:function(){return[]}},maskClosable:{type:Boolean,default:!1}},data:function(){return{isOpen:!1,isHidden:!0,timer:null}},beforeDestroy:function(){clearTimeout(this.timer),this.timer=null},methods:{getLeft:function(){var t="auto";return this.left&&!this.right&&(t=this.left+"rpx"),t},getRight:function(){var t=this.right+"rpx";return this.left&&!this.right&&(t="auto"),t},handleClick:function(t){var e=this;this.isHidden=!1,clearTimeout(this.timer),-1==t&&this.btnList.length?this.isOpen=!this.isOpen:(this.$emit("click",{index:t}),this.isOpen=!1),this.isOpen||(this.timer=setTimeout((function(){e.isHidden=!0}),200))},handleClickCancel:function(){this.maskClosable&&(this.isOpen=!1)}}};e.default=i},376:function(t,e,n){"use strict";n.r(e);var i=n(377),r=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=r.a},377:function(t,e,n){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/components/thorui/tui-fab/tui-fab.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/thorui/tui-fab/tui-fab-create-component',
    {
        'components/thorui/tui-fab/tui-fab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(371))
        })
    },
    [['components/thorui/tui-fab/tui-fab-create-component']]
]);
