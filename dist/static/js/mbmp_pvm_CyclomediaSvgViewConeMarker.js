(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mbmp_pvm_CyclomediaSvgViewConeMarker"],{"4aac":function(e,t,i){},"76dde":function(e,t,i){"use strict";i.r(t);i("d81d");var o,n,l=i("e11e"),c=(i("a9e3"),i("ac1f"),i("5319"),l["DivIcon"].extend({options:{circleText:"",className:"svg-icon",circleAnchor:null,circleColor:null,circleOpacity:null,circleFillColor:"rgb(255,255,255)",circleFillOpacity:null,circleRatio:.5,circleWeight:null,color:"rgb(0,102,255)",fillColor:null,fillOpacity:.4,fontColor:"rgb(0, 0, 0)",fontOpacity:"1",fontSize:null,iconAnchor:null,iconSize:l["point"](32,48),opacity:1,popupAnchor:null,weight:2},initialize:function(e){e=l["Util"].setOptions(this,e),e.circleAnchor||(e.circleAnchor=l["point"](Number(e.iconSize.x)/2,Number(e.iconSize.x)/2)),e.circleColor||(e.circleColor=e.color),e.circleFillOpacity||(e.circleFillOpacity=e.opacity),e.circleOpacity||(e.circleOpacity=e.opacity),e.circleWeight||(e.circleWeight=e.weight),e.fillColor||(e.fillColor=e.color),e.fontSize||(e.fontSize=Number(e.iconSize.x/4)),e.iconAnchor||(e.iconAnchor=l["point"](Number(e.iconSize.x)/2,Number(e.iconSize.y))),e.popupAnchor||(e.popupAnchor=l["point"](0,-.75*e.iconSize.y));this._createPath(),this._createCircle();e.html=this._createSVG()},_createCircle:function(){var e=Number(this.options.circleAnchor.x),t=Number(this.options.circleAnchor.y),i=this.options.iconSize.x/2*Number(this.options.circleRatio),o=this.options.circleFillColor.replace("rgb(","rgba(").replace(")",","+this.options.circleFillOpacity+")"),n=this.options.circleColor.replace("rgb(","rgba(").replace(")",","+this.options.circleOpacity+")"),l=this.options.circleWeight,c=this.options.className+"-circle",r='<circle class="'+c+'" cx="'+e+'" cy="'+t+'" r="'+i+'" fill="'+o+'" stroke="'+n+'" stroke-width="'+l+'"/>';return r},_createPathDescription:function(){var e=Number(this.options.iconSize.y),t=Number(this.options.iconSize.x),i=Number(this.options.weight),o=i/2,n="M "+o+" "+t/2+" ",l="L "+t/2+" "+(e-i)+" ",c="L "+(t-o)+" "+t/2+" ",r="A "+t/4+" "+t/4+" 0 0 0 "+o+" "+t/2+" Z",s=n+l+c+r;return s},_createPath:function(){var e=this._createPathDescription(),t=this.options.weight,i=this.options.color.replace("rgb(","rgba(").replace(")",","+this.options.opacity+")"),o=this.options.fillColor.replace("rgb(","rgba(").replace(")",","+this.options.fillOpacity+")"),n=this.options.className+"-path",l='<path class="'+n+'" d="'+e+'" stroke-width="'+t+'" stroke="'+i+'" fill="'+o+'"/>';return l},_createSVG:function(){var e=this._createPath(),t=this._createCircle(),i=this._createText(),o=this.options.className+"-svg",n="width:"+this.options.iconSize.x+"; height:"+this.options.iconSize.y+";",l='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="'+o+'" style="'+n+'">'+e+t+i+"</svg>";return l},_createText:function(){var e=this.options.fontSize+"px",t=Number(this.options.fontSize),i=Number(this.options.iconSize.x)/2,o=i+.35*t,n=this.options.circleText,l=this.options.fontColor.replace("rgb(","rgba(").replace(")",","+this.options.fontOpacity+")"),c='<text text-anchor="middle" x="'+i+'" y="'+o+'" style="font-size: '+e+'" fill="'+l+'">'+n+"</text>";return c}})),r=c,s=r.extend({initialize:function(e){e=l["Util"].setOptions(this,e);var t=l["point"](Number(e.iconSize.x)/2,Number(e.iconSize.y)/2);return e.circleAnchor=t,e.circleRatio=0,e.className=e.className+"-noClick",r.prototype.initialize.call(this,e),e},_createPathDescription:function(){var e=Number(this.options.iconSize.y),t=Number(this.options.iconSize.x),i=Number(this.options.weight),o=i,n="M "+o+" 0 ",l="L "+t/2+" "+(e-o)+" ",c="L "+(t-o)+" 0 Z",r=n+l+c;return r}}),a=s,h={name:"SvgViewConeMarker",props:["latlng","rotationAngle","hFov"],computed:{coneCoords:function(){var e=50,t=this.hFov/2,i=Math.sin(t*Math.PI/180),o=Math.sqrt(1-i*i),n=[i*e,o*e];return n}},watch:{rotationAngle:function(e){if(this.latlng){this.$leafletElement&&this.$leafletElement._map&&this.$leafletElement._map.removeLayer(this.$leafletElement);var t=this.$leafletElement=this.createLeafletElement(),i=this.$store.state.map.map;i&&t.addTo(i)}},latlng:function(e){this.$leafletElement&&this.$leafletElement._map&&this.$leafletElement._map.removeLayer(this.$leafletElement);var t=this.$leafletElement=this.createLeafletElement(),i=this.$store.state.map.map;i&&t.addTo(i)}},mounted:function(){if(this.latlng){var e=this.$leafletElement=this.createLeafletElement(),t=this.$store.state.map.map;t&&e.addTo(t)}},destroyed:function(){this.$leafletElement._map.removeLayer(this.$leafletElement)},methods:{createLeafletElement:function(){console.log("SvgViewConeMarker createLeafletElement, this.latlng:",this.latlng);this.coneCoords;var e=new a({iconSize:l["point"](this.coneCoords[0],this.coneCoords[1]),iconAnchor:[this.coneCoords[0]/2,this.coneCoords[1]]});return l["marker"](this.latlng,{icon:e,rotationAngle:this.rotationAngle})},parentMounted:function(e){var t=e.$leafletElement;this.$leafletElement.addTo(t)}},render:function(e){}},p=h,m=(i("d7d5"),i("2877")),u=Object(m["a"])(p,o,n,!1,null,null,null);t["default"]=u.exports},d7d5:function(e,t,i){"use strict";var o=i("4aac"),n=i.n(o);n.a}}]);
//# sourceMappingURL=mbmp_pvm_CyclomediaSvgViewConeMarker.js.map