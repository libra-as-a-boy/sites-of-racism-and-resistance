(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ht_pvc_HorizontalTableRow","tcg_pvc_PopoverLink"],{"2a9f":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._v(" "+e._s(e.evaluateFieldLabel())+" "),o("a",{staticClass:"popover-link",style:this.$props.options.customStyle,attrs:{title:e.value+" "+e.popoverValue},on:{click:e.didClickPopoverLink}},[e._v(" "+e._s(e.value)+" ")])])},s=[],n=o("f076"),r={mixins:[n["a"]],props:["fieldLabel"],data:function(){var e={showFieldLabel:!1};return e},computed:{popoverOptions:function(){return this.$props.options},value:function(){var e=this.$props.slots.value,t=this.$props.slots.transforms||[],o=this.$props.slots.nullValue||"";return this.evaluateSlot(e,t,o)},popoverValue:function(){var e=this.value,t=this.$props.slots.popoverTransforms||[],o=this.$props.slots.popoverNullValue||"";return this.evaluateSlot(e,t,o)},popoverPreText:function(){var e=this.$props.slots.popoverPreText||"";return this.evaluateSlot(e)},popoverPostText:function(){var e=this.$props.slots.popoverPostText||"";return this.evaluateSlot(e)},shouldShowValue:function(){return!1!==this.$props.slots.shouldShowValue},popoverText:function(){return!0===this.shouldShowValue?this.popoverPreText+" "+this.popoverValue+" "+this.popoverPostText:this.popoverPreText+" "+this.popoverPostText}},created:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},methods:{didClickPopoverLink:function(e){this.$store.commit("setPopoverOpen",!0),this.$store.commit("setPopoverText",this.popoverText),this.$store.commit("setPopoverOptions",this.popoverOptions)},handleWindowResize:function(){window.innerWidth>=750?this.showFieldLabel=!1:this.showFieldLabel=!0},evaluateFieldLabel:function(){return this.$props.fieldLabel&&this.showFieldLabel?this.$props.fieldLabel+": ":""}}},a=r,l=(o("cfcb"),o("2877")),u=Object(l["a"])(a,i,s,!1,null,null,null);t["default"]=u.exports},"7ea6":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("tr",{class:e.customClass+" "+[1==e.isActive?"active":""],on:{mouseover:e.handleRowMouseover,click:e.handleRowClick,mouseleave:e.handleRowMouseout}},e._l(e.fields,(function(t,i){return o("td",{directives:[{name:"colspan",rawName:"v-colspan",value:{columnLabel:t.label,columnValue:e.evaluateSlot(t.value),isCondo:e.isCondo,options:e.$props.options.colSpan},expression:"{columnLabel:field.label, columnValue: evaluateSlot(field.value), isCondo, options:$props.options.colSpan}"}],key:i,class:["undefined"!==typeof t.customClass?t.customClass:"",e.options.inPopover?"in-popover":"",e.fullScreenTopicsOrTable?"":"half-screen-table-cell"],attrs:{sorttable_customkey:[t.customKey?e.evaluateSlot(t.customKey):e.evaluateSlot(t.value)]}},[o("topic-component-group",{attrs:{"topic-components":t.components,item:e.item}}),o("b",{directives:[{name:"show",rawName:"v-show",value:e.shouldBeBold,expression:"shouldBeBold"}]},[t.popoverLink?o("popover-link",{attrs:{slots:t,item:e.item,"field-label":t.label}}):e._e(),t.popoverLink?e._e():o("div",{domProps:{innerHTML:e._s(e.evaluateFieldLabel(t.label)+e.evaluateSlot(t.value,t.transforms,t.nullValue))}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.shouldBeBold,expression:"!shouldBeBold"}]},[t.popoverLink?o("popover-link",{attrs:{slots:t,item:e.item,"field-label":t.label}}):e._e(),o("div",[t.popoverLink?e._e():o("div",{style:t.customStyle,domProps:{innerHTML:e._s(e.evaluateFieldLabel(t.label)+e.evaluateSlot(t.value,t.transforms,t.nullValue))}}),e.mobileIcon(t.mobileIcon)?o("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:e.evaluateSlot(t.hideMobileIcon),expression:"evaluateSlot(field.hideMobileIcon)"}],staticStyle:{"margin-left":"5px"},attrs:{icon:t.mobileIcon,"aria-hidden":"true"}}):e._e()],1)],1)],1)})),0)},s=[],n=(o("a623"),o("fb6a"),o("d3b7"),o("07ac"),o("25f0"),o("85b1")),r=o("2332"),a="Expected a function";function l(e,t,o){var i=!0,s=!0;if("function"!=typeof e)throw new TypeError(a);return Object(r["a"])(o)&&(i="leading"in o?!!o.leading:i,s="trailing"in o?!!o.trailing:s),Object(n["a"])(e,t,{leading:i,maxWait:t,trailing:s})}var u=l,c=o("f076"),d=o("076f"),p=o("2a9f"),h={components:{PopoverLink:p["default"],TopicComponentGroup:d["default"]},directives:{colspan:{inserted:function(e,t){t.value.isCondo&&t.value.columnLabel===t.value.options.column?(e.setAttribute("colspan",t.value.options.span),e.setAttribute("style","padding: unset")):t.value.isCondo&&"Not Applicable"===t.value.columnValue&&e.remove()}}},mixins:[c["a"]],props:["fields","hasOverlay","tableId","shouldBeBold","totalRowField"],data:function(){var e={showFieldLabel:!1,mouseover:!1};return e},computed:{isCondo:function(){var e;return e=!!this.$props.item.condo,e},fullScreenTopicsOrTable:function(){if("undefined"!==this.$config.dataPanelWidth){if(this.$store.state.fullScreenTopicsEnabled||this.$store.state.fullScreen.topicsOnly||"whole"===this.$config.dataPanelWidth)return!0}else if(this.$store.state.fullScreenTopicsEnabled||this.$store.state.fullScreen.topicsOnly)return!0;return!1},activeFeature:function(){return this.$store.state.activeFeature},isActive:function(){var e;return this.$data.mouseover?e=!0:this.activeFeature&&(e=!!this.$props.item._featureId&&(this.activeFeature.featureId===this.$props.item._featureId||this.activeFeature.featureId===parseInt(this.$props.item._featureId.toString().slice(0,6)))),e},customClass:function(){return"undefined"!=typeof this.options.customClass&&"undefined"!=typeof this.options.customClass.tr?this.options.customClass.tr:""},customStyle:function(){return"undefined"!=typeof this.customStyle&&"undefined"!=typeof this.customStyle?this.customStyle:""},isMobileOrTablet:function(){return this.$store.state.isMobileOrTablet}},watch:{isActive:function(e){if(!0===e){var t=this.$el,o=this.isElementInViewport(t);o||this.$store.state.horizontalTables.mouseover||t.scrollIntoView({block:"center"})}}},created:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},methods:{handleRowMouseover:u((function(e){if(!this.isMobileOrTablet&&!this.$props.options.mouseOverDisabled){if(!this.hasOverlay)return;var t=this.item._featureId,o=this.tableId;this.$store.commit("setActiveFeature",{featureId:t,tableId:o}),this.$store.commit("setHorizontalTableMouseover",!0),this.$data.mouseover=!0}}),100),handleRowClick:function(e){if(this.$store.state.activeModal&&this.$props.options.clickEnabled){if(!this.hasOverlay)return;var t=this.item._featureId;1!=this.item.condo&&(this.$store.commit("setActiveFeature",{featureId:t}),this.$store.commit("setActiveModal",{featureId:t})),"undefined"!=typeof this.$props.options.rowAction&&this.$props.options.rowAction(this.$store.state,this.item),this.$data.mouseover=!1}else if(this.isMobileOrTablet||this.$props.options.mouseOverDisabled){if(!this.hasOverlay)return;var o=this.item._featureId,i=this.tableId;this.$store.commit("setActiveFeature",{featureId:o,tableId:i})}},handleRowMouseout:function(e){if(!this.isMobileOrTablet)if(this.$store.state.activeModal){if(!this.$props.options.mouseOverDisabled&&null===this.$store.state.activeModal.featureId){if(!this.hasOverlay)return;this.$store.commit("setActiveFeature",null),this.$store.commit("setHorizontalTableMouseover",!1),this.$data.mouseover=!1}}else if(!this.$props.options.mouseOverDisabled){if(!this.hasOverlay)return;this.$store.commit("setActiveFeature",null),this.$store.commit("setHorizontalTableMouseover",!1),this.$data.mouseover=!1}},mobileIcon:function(e){return window.innerWidth<750&&"undefined"!=typeof e?" "+e:""},isElementInViewport:function(e){var t=e.getBoundingClientRect(),o={top:t.top>=108,left:t.left>=0,bottom:t.bottom<=(window.innerHeight||document.documentElement.clientHeight),right:t.right<=(window.innerWidth||document.documentElement.clientWidth)};return Object.values(o).every((function(e){return e}))},featuresMatch:function(e,t){return e.featureId===t.featureId&&e.tableId===t.tableId},handleWindowResize:function(){window.innerWidth>=750?this.showFieldLabel=!1:this.showFieldLabel=!0},evaluateFieldLabel:function(e){return this.showFieldLabel&&this.$props.totalRowField!==e.toLowerCase()?e+": ":""}}},v=h,f=(o("f61a"),o("2877")),m=Object(f["a"])(v,i,s,!1,null,"6ed23da8",null);t["default"]=m.exports},"85b1":function(e,t,o){"use strict";var i=o("2332"),s=o("26ee"),n=function(){return s["a"].Date.now()},r=n,a=o("4a24"),l="Expected a function",u=Math.max,c=Math.min;function d(e,t,o){var s,n,d,p,h,v,f=0,m=!1,b=!1,w=!0;if("function"!=typeof e)throw new TypeError(l);function $(t){var o=s,i=n;return s=n=void 0,f=t,p=e.apply(i,o),p}function T(e){return f=e,h=setTimeout(L,t),m?$(e):p}function y(e){var o=e-v,i=e-f,s=t-o;return b?c(s,d-i):s}function I(e){var o=e-v,i=e-f;return void 0===v||o>=t||o<0||b&&i>=d}function L(){var e=r();if(I(e))return O(e);h=setTimeout(L,y(e))}function O(e){return h=void 0,w&&s?$(e):(s=n=void 0,p)}function S(){void 0!==h&&clearTimeout(h),f=0,s=v=n=h=void 0}function _(){return void 0===h?p:O(r())}function x(){var e=r(),o=I(e);if(s=arguments,n=this,v=e,o){if(void 0===h)return T(v);if(b)return clearTimeout(h),h=setTimeout(L,t),$(v)}return void 0===h&&(h=setTimeout(L,t)),p}return t=Object(a["a"])(t)||0,Object(i["a"])(o)&&(m=!!o.leading,b="maxWait"in o,d=b?u(Object(a["a"])(o.maxWait)||0,t):d,w="trailing"in o?!!o.trailing:w),x.cancel=S,x.flush=_,x}t["a"]=d},"891c":function(e,t,o){},cfcb:function(e,t,o){"use strict";var i=o("dbb8"),s=o.n(i);s.a},dbb8:function(e,t,o){},f61a:function(e,t,o){"use strict";var i=o("891c"),s=o.n(i);s.a}}]);
//# sourceMappingURL=ht_pvc_HorizontalTableRow.js.map