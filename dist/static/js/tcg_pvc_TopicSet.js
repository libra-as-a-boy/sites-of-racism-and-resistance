(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tcg_pvc_TopicSet","tcg_pvc_Topic"],{"38f7":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.shouldShowTopic?s("div",[t.shouldShowHeader?s("a",{class:t.shouldBeDisabled?"topic-header-disabled":"topic-header",attrs:{"data-topic-key":t.topicKey,href:"#"},on:{click:function(e){return e.preventDefault(),t.handleTopicHeaderClick(e)}}},[s("div",{staticClass:"topic-header-content"},[s("font-awesome-icon",{attrs:{icon:t.icon}}),s("div",{staticClass:"topic-header-label-holder"},[t._v(" "+t._s(t.topic.label)+" ")])],1),s("span",{directives:[{name:"show",rawName:"v-show",value:"waiting"===t.status,expression:"status === 'waiting'"}],staticClass:"loading"},[s("font-awesome-icon",{staticClass:"fa-lg spin",attrs:{icon:"spinner"}})],1)]):t._e(),s("transition",{attrs:{name:"topic-body"}},[t.shouldShowBody?s("div",{staticClass:"topic-body",attrs:{"data-topic-key":t.topicKey}},[s("topic-component-group",{attrs:{"topic-components":t.topic.components},on:{"get-more-records":t.getMoreRecords}})],1):t._e()]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.shouldShowError,expression:"shouldShowError"}],staticClass:"topic-body",domProps:{innerHTML:t._s(t.errorMessage)}})],1):t._e()},i=[],a=(s("a623"),s("4de4"),s("caad"),s("d81d"),s("b64b"),s("07ac"),s("2532"),s("b85c")),r=s("076f"),c={name:"Topic",components:{},props:["topicKey"],computed:{shouldBeDisabled:function(){return!!this.topic.disabled},topic:function(){var t=this,e=this.$props.topicKey,s=this.$config.topics.filter((function(e){return e.key===t.$props.topicKey}));if(1!==s.length)throw"Could not get single config object for topic '".concat(e,"'.");var o=s[0];return o},icon:function(){return this.topic.icon},isActive:function(){var t=this.topic.key,e=this.$store.state.activeTopic;return e===t},shouldShowHeader:function(){return this.$config.topics.length>1},dataSources:function(){return this.topic.dataSources||[]},hasData:function(){var t=this,e=this.dataSources.every((function(e){var s=t.$config.dataSources[e].targets;if(s){var o=t.$store.state.sources[e].targets,i=Object.values(o);return 0!==i.length&&i.every((function(t){return"waiting"!==t.status}))}return t.$store.state.sources[e].data?!t.$store.state.sources[e].data.body||!t.$store.state.sources[e].data.body.includes("Invalid account number"):!!t.$store.state.sources[e].data}));return e},shouldShowBody:function(){var t="success"===this.status,e=this.hasData,s=t&&e&&this.isActive;return s},shouldShowTopic:function(){return!this.topic.showTopicOnlyIfDataExists||(!!this.showTopicBasedOnOtherData||this.showTopicOnlyIfDataExists)},shouldShowError:function(){var t=this.isActive&&("error"===this.status||"waiting"!==this.status&&!this.hasData);return t&&console.log("BINGO BINGO BINGO:",this.topicKey,"shouldShowError:",t,"status:",this.status,"hasData:",this.hasData),t},errorMessage:function(){return this.topic.errorMessage?this.topic.errorMessage(this.$store.state):"Could not locate records for that address."},status:{cache:!1,get:function(){var t,e=this,s=this.topic.dataSources||[];if(0===s.length)return"success";var o,i=s.map((function(t){var s=e.$config.dataSources[t].targets;if(s){var o=e.$store.state.sources[t].targets,i=Object.values(o);if(0===i.length)return;return i.map((function(t){return t.status}))}return[e.$store.state.sources[t].status]})),r=[],c=Object(a["a"])(i);try{for(c.s();!(o=c.n()).done;){var n=o.value;if(n){var u,h=Object(a["a"])(n);try{for(h.s();!(u=h.n()).done;){var p=u.value;r.push(p)}}catch(d){h.e(d)}finally{h.f()}}}}catch(d){c.e(d)}finally{c.f()}return t=r.includes("waiting")?"waiting":r.includes("error")?"error":"success",t}},showTopicBasedOnOtherData:function(){if(!this.topic.showTopicBasedOnOtherData)return!1;var t=this.topic.showTopicBasedOnOtherData.requiredData,e=this.checkForData(t);if(!e)return!1;for(var s=Object.keys(this.topic.showTopicBasedOnOtherData.otherData),o=[],i=0,a=s;i<a.length;i++)for(var r=a[i],c=this.topic.showTopicBasedOnOtherData.otherData[r],n=Object.keys(c),u=0,h=n;u<h.length;u++){var p=h[u];this.$store.state.sources[r][p]===c[p]?o.push(!0):o.push(!1)}return!o.includes(!1)},showTopicOnlyIfDataExists:function(){return this.checkForData(this.topic.showTopicOnlyIfDataExists)}},beforeCreate:function(){this.$options.components.TopicComponentGroup=r["default"]},methods:{getMoreRecords:function(t,e){console.log("Topic.vue getMoreRecords is running, dataSource:",t,"highestPageRetrieved:",e),this.$emit("get-more-records",t,e)},checkForData:function(t){for(var e=Object.keys(t),s=!0,o=0,i=e;o<i.length;o++){var a=i[o],r=t[a].pathToDataArray,c=t[a].minDataLength,n=void 0;if(!this.$store.state.sources[a].data)return!1;r?1===r.length&&(n=this.$store.state.sources[a].data[r[0]]):n=this.$store.state.sources[a].data,n.length<c&&(s=!1)}return s},configForBasemap:function(t){return this.$config.map.basemaps[t]},handleTopicHeaderClick:function(t){var e,s=this.$props.topicKey;s!==this.$store.state.activeTopic&&(e=s),this.$emit("handle-topic-header-click",e)}}},n=c,u=(s("bba6"),s("2877")),h=Object(u["a"])(n,o,i,!1,null,"4e58a696",null);e["default"]=h.exports},a62c:function(t,e,s){},bba6:function(t,e,s){"use strict";var o=s("a62c"),i=s.n(o);i.a},f60d:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(this.$config.topics,(function(e){return s("topic",{key:e.key,attrs:{"topic-key":e.key},on:{"handle-topic-header-click":t.handleTopicHeaderClick,"get-more-records":t.getMoreRecords}})})),1)},i=[],a=s("38f7"),r=s("f076"),c={name:"TopicSet",components:{Topic:a["default"]},mixins:[r["a"]],mounted:function(){null!==this.$store.state.activeTopic&&""!==this.$store.state.activeTopic||this.setDefaultTopicActive()},methods:{getMoreRecords:function(t,e){this.$emit("get-more-records",t,e)},handleTopicHeaderClick:function(t){this.$emit("handle-topic-header-click",t)},setDefaultTopicActive:function(){this.$props.options.defaultTopic&&this.$store.commit("setActiveTopic",this.$props.options.defaultTopic)}}},n=c,u=s("2877"),h=Object(u["a"])(n,o,i,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=tcg_pvc_TopicSet.js.map