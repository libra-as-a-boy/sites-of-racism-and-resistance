(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pvm_MglControlContainer"],{"81e1":function(t,n,e){"use strict";e("4160"),e("caad"),e("b64b"),e("2532"),e("159b");var o=e("5530");n["a"]={methods:{$_emitSelfEvent:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.$_emitMapEvent(t,Object(o["a"])({control:this.control},n))},$_bindSelfEvents:function(t,n){var e=this;Object.keys(this.$listeners).forEach((function(o){t.includes(o)&&n.on(o,e.$_emitSelfEvent)}))},$_unbindSelfEvents:function(t,n){var e=this;0!==t.length&&n&&t.forEach((function(t){n.off(t,e.$_emitSelfEvent)}))}}}},"9f0b":function(t,n,e){"use strict";e("d81d");var o=e("5530");n["a"]={methods:{$_emitEvent:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.$emit(t,Object(o["a"])({map:this.map,component:this},n))},$_emitMapEvent:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.$_emitEvent(t.type,Object(o["a"])({mapboxEvent:t},n))}}}},aa65:function(t,n,e){"use strict";e("d81d");var o=e("9f0b"),i=e("81e1");n["a"]={mixins:[o["a"],i["a"]],inject:["mapbox","map","actions"],props:{position:{type:String,default:"top-right"}},beforeDestroy:function(){this.map&&this.control&&this.map.removeControl(this.control)},methods:{$_addControl:function(){try{this.map.addControl(this.control,this.position)}catch(t){return void this.$_emitEvent("error",{error:t})}this.$_emitEvent("added",{control:this.control})}},render:function(){}}},f925:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._t("default")],2)},i=[],r=e("d4ec"),a=e("bee2"),s=e("aa65"),c={name:"ContainerControl",mixins:[s["a"]],props:{buttonText:{type:String,default:"true"},buttonId:{type:String,default:"button-id"}},mounted:function(){var t=function(){function t(){Object(r["a"])(this,t)}return Object(a["a"])(t,[{key:"onAdd",value:function(t){console.log("ControlContainer.vue OnAdd is running, props:",n)}},{key:"onRemove",value:function(t){this.container.parentNode.removeChild(this.container)}}]),t}(),n=Object.assign({},this.$props);this.control=new t(n),this.$_addControl()}},u=c,l=e("2877"),d=Object(l["a"])(u,o,i,!1,null,null,null);n["default"]=d.exports}}]);
//# sourceMappingURL=pvm_MglControlContainer.js.map