(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"1XEM":function(e,t,a){e.exports={tagCloud:"tagCloud___Blez5"}},2:function(e,t){},CIdX:function(e,t,a){e.exports={waterWave:"waterWave___hvLJA",text:"text___3asSo",waterWaveCanvasWrapper:"waterWaveCanvasWrapper___2ndFj"}},Gs3F:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Map}));var antd_es_spin_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("T2oS"),antd_es_spin__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("W9HT"),_Users_hantengfei_Desktop_work_dxA_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("o0o1"),_Users_hantengfei_Desktop_work_dxA_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_Users_hantengfei_Desktop_work_dxA_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__),_Users_hantengfei_Desktop_work_dxA_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("HaE+"),_Users_hantengfei_Desktop_work_dxA_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("ODXe"),_Users_hantengfei_Desktop_work_dxA_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("1OyB"),_Users_hantengfei_Desktop_work_dxA_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("vuIU"),_Users_hantengfei_Desktop_work_dxA_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("Ji7U"),_Users_hantengfei_Desktop_work_dxA_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("LK+K"),_antv_l7__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("8ml+"),_antv_l7_maps__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("lg4T"),react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("cDcd"),react__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__),Map=function(_React$Component){Object(_Users_hantengfei_Desktop_work_dxA_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["a"])(Map,_React$Component);var _super=Object(_Users_hantengfei_Desktop_work_dxA_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__["a"])(Map);function Map(){var e;Object(_Users_hantengfei_Desktop_work_dxA_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["a"])(this,Map);for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return e=_super.call.apply(_super,[this].concat(a)),e.state={loading:!1},e.scene=void 0,e}return Object(_Users_hantengfei_Desktop_work_dxA_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["a"])(Map,[{key:"initMap",value:function(){this.scene=new _antv_l7__WEBPACK_IMPORTED_MODULE_9__["Scene"]({id:"map",map:new _antv_l7_maps__WEBPACK_IMPORTED_MODULE_10__["a"]({pitch:20,style:"blank",center:[5,40.16797],zoom:.51329,minZoom:.2})})}},{key:"addLayer",value:function addLayer(){var _this2=this;this.setState({loading:!0}),Promise.all([fetch("https://gw.alipayobjects.com/os/basement_prod/dbd008f1-9189-461c-88aa-569357ffc07d.json").then((function(e){return e.json()})),fetch("https://gw.alipayobjects.com/os/basement_prod/4472780b-fea1-4fc2-9e4b-3ca716933dc7.json").then((function(e){return e.text()})),fetch("https://gw.alipayobjects.com/os/basement_prod/a5ac7bce-181b-40d1-8a16-271356264ad8.json").then((function(e){return e.text()}))]).then((function(res){requestAnimationFrame((function(){var _res=Object(_Users_hantengfei_Desktop_work_dxA_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["a"])(res,3),world=_res[0],dot=_res[1],flyLine=_res[2],dotData=eval(dot),flydata=eval(flyLine).map((function(e){var t=e.from.split(",").map((function(e){return 1*e})),a=e.to.split(",").map((function(e){return 1*e}));return{coord:[t,a]}}));_this2.setState({loading:!1});var worldFill=(new _antv_l7__WEBPACK_IMPORTED_MODULE_9__["PolygonLayer"]).source(world).color("#d1e0f3").shape("fill").style({opacity:1}),worldLine=(new _antv_l7__WEBPACK_IMPORTED_MODULE_9__["LineLayer"]).source(world).color("#fff").size(.5).style({opacity:.4}),dotPoint=(new _antv_l7__WEBPACK_IMPORTED_MODULE_9__["PointLayer"]).source(dotData,{parser:{type:"json",x:"lng",y:"lat"}}).shape("circle").color("#268edc").animate(!1).size(4).style({opacity:.2}),flyLineLayer=new _antv_l7__WEBPACK_IMPORTED_MODULE_9__["LineLayer"]({blend:"normal"}).source(flydata,{parser:{type:"json",coordinates:"coord"}}).color("#5b97f1").shape("arc3d").size(2.6).animate({interval:2,trailLength:2,duration:1}).style({opacity:1});_this2.scene.addLayer(worldFill),_this2.scene.addLayer(worldLine),_this2.scene.addLayer(dotPoint),_this2.scene.addLayer(flyLineLayer),flyLineLayer.on("mousemove",(function(e){var t=new _antv_l7__WEBPACK_IMPORTED_MODULE_9__["Popup"]({offsets:[0,0],closeButton:!1}).setLnglat(e.lngLat).setHTML("\u5730\u7406\u53ef\u89c6\u5316\u5f15\u64ce AntV L7:  <a  target='_blank', href='https://github.com/antvis/L7'>GitHub</a>");_this2.scene.addPopup(t)}))}))}))}},{key:"componentWillUnmount",value:function(){this.scene.destroy()}},{key:"componentDidMount",value:function(){var e=Object(_Users_hantengfei_Desktop_work_dxA_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["a"])(_Users_hantengfei_Desktop_work_dxA_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark((function e(){return _Users_hantengfei_Desktop_work_dxA_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.initMap(),this.addLayer();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"render",value:function(){var e=this.state.loading;return react__WEBPACK_IMPORTED_MODULE_11__["createElement"](react__WEBPACK_IMPORTED_MODULE_11__["Fragment"],null,e&&react__WEBPACK_IMPORTED_MODULE_11__["createElement"](antd_es_spin__WEBPACK_IMPORTED_MODULE_1__["a"],null),react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("div",{id:"map",style:{position:"relative",width:"100%",height:"452px",display:e?"none":"block"}}))}}]),Map}(react__WEBPACK_IMPORTED_MODULE_11__["Component"])},"H+7v":function(e,t,a){e.exports={activeChart:"activeChart___15gpK",activeChartGrid:"activeChartGrid___3PL4c",activeChartLegend:"activeChartLegend___2Ieyc",dashedLine:"dashedLine___2fgZX",line:"line___2cxqk"}},Wnft:function(e,t,a){e.exports={mapChart:"mapChart___4fQJB",pieCard:"pieCard___1ETZj"}},a5Wf:function(e,t,a){"use strict";a.r(t);a("IzEo");var n=a("bx4M"),r=(a("14J3"),a("BMrR")),i=(a("jCWc"),a("kPKH")),o=a("1OyB"),l=a("vuIU"),s=a("Ji7U"),_=a("LK+K"),c=(a("aHsQ"),a("sGsY")),d=a("9kvl"),m=a("cDcd"),u=a.n(m),h=a("Hx5s"),p=a("ZhIB"),f=a.n(p),v=a("yP6+"),E=a("wx14");function g(e){var t=e.style;t.height="100%";var a=parseInt("".concat(getComputedStyle(e).height),10),n=parseInt("".concat(getComputedStyle(e).paddingTop),10)+parseInt("".concat(getComputedStyle(e).paddingBottom),10);return a-n}function y(e){if(!e)return 0;var t=e,a=g(t),n=t.parentNode;return n&&(a=g(n)),a}function b(){return function(e){var t=function(t){Object(s["a"])(n,t);var a=Object(_["a"])(n);function n(){var e;Object(o["a"])(this,n);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=a.call.apply(a,[this].concat(r)),e.state={computedHeight:0},e.root=null,e.handleRoot=function(t){e.root=t},e}return Object(l["a"])(n,[{key:"componentDidMount",value:function(){var e=this.props.height;if(!e&&this.root){var t=y(this.root);this.setState({computedHeight:t}),t<1&&(t=y(this.root),this.setState({computedHeight:t}))}}},{key:"render",value:function(){var t=this.props.height,a=this.state.computedHeight,n=t||a;return u.a.createElement("div",{ref:this.handleRoot},n>0&&u.a.createElement(e,Object(E["a"])({},this.props,{height:n})))}}]),n}(u.a.Component);return t}}var k=b,M=v["Guide"].Arc,D=v["Guide"].Html,O=v["Guide"].Line,w=function(e){switch(e){case"2":return"\u5dee";case"4":return"\u4e2d";case"6":return"\u826f";case"8":return"\u4f18";default:return""}};v["Shape"].registerShape&&v["Shape"].registerShape("point","pointer",{drawShape:function(e,t){var a=e.points[0];a=this.parsePoint(a);var n=this.parsePoint({x:0,y:0});return t.addShape("line",{attrs:{x1:n.x,y1:n.y,x2:a.x,y2:a.y,stroke:e.color,lineWidth:2,lineCap:"round"}}),t.addShape("circle",{attrs:{x:n.x,y:n.y,r:6,stroke:e.color,lineWidth:3,fill:"#fff"}})}});var x=function(e){var t=e.title,a=e.height,n=void 0===a?1:a,r=e.percent,i=e.forceFit,o=void 0===i||i,l=e.formatter,s=void 0===l?w:l,_=e.color,c=void 0===_?"#2F9CFF":_,d=e.bgColor,m=void 0===d?"#F0F2F5":d,h={value:{type:"linear",min:0,max:10,tickCount:6,nice:!0}},p=[{value:r/10}],f=function(){return'\n  <div style="width: 300px;text-align: center;font-size: 12px!important;">\n    <div style="font-size: 14px; color: rgba(0,0,0,0.43);margin: 0;">'.concat(t,'</div>\n    <div style="font-size: 24px;color: rgba(0,0,0,0.85);margin: 0;">\n      ').concat((10*p[0].value).toFixed(2),"%\n    </div>\n  </div>")},E={fontSize:12,fill:"rgba(0, 0, 0, 0.65)",textAlign:"center"};return u.a.createElement(v["Chart"],{height:n,data:p,scale:h,padding:[-16,0,16,0],forceFit:o},u.a.createElement(v["Coord"],{type:"polar",startAngle:-1.25*Math.PI,endAngle:.25*Math.PI,radius:.8}),u.a.createElement(v["Axis"],{name:"1",line:void 0}),u.a.createElement(v["Axis"],{line:void 0,tickLine:void 0,subTickLine:void 0,name:"value",zIndex:2,label:{offset:-12,formatter:s,textStyle:E}}),u.a.createElement(v["Guide"],null,u.a.createElement(O,{start:[3,.905],end:[3,.85],lineStyle:{stroke:c,lineDash:void 0,lineWidth:2}}),u.a.createElement(O,{start:[5,.905],end:[5,.85],lineStyle:{stroke:c,lineDash:void 0,lineWidth:3}}),u.a.createElement(O,{start:[7,.905],end:[7,.85],lineStyle:{stroke:c,lineDash:void 0,lineWidth:3}}),u.a.createElement(M,{start:[0,.965],end:[10,.965],style:{stroke:m,lineWidth:10}}),u.a.createElement(M,{start:[0,.965],end:[p[0].value,.965],style:{stroke:c,lineWidth:10}}),u.a.createElement(D,{position:["50%","95%"],html:f()})),u.a.createElement(v["Geom"],{line:!1,type:"point",position:"value*1",shape:"pointer",color:c,active:!1}))},C=k()(x),L=a("VTBJ"),P=a("iz+Y"),A=a.n(P),W=function(e){var t=e.height,a=void 0===t?1:t,n=e.data,r=void 0===n?[]:n,i=e.forceFit,o=void 0===i||i,l=e.color,s=void 0===l?"rgba(24, 144, 255, 0.2)":l,_=e.borderColor,c=void 0===_?"#1089ff":_,d=e.scale,m=void 0===d?{x:{},y:{}}:d,h=e.borderWidth,p=void 0===h?2:h,f=e.line,g=e.xAxis,y=e.yAxis,b=e.animate,k=void 0===b||b,M=[36,5,30,5],D={x:Object(L["a"])({type:"cat",range:[0,1]},m.x),y:Object(L["a"])({min:0},m.y)},O=["x*y",function(e,t){return{name:e,value:t}}],w=a+54;return u.a.createElement("div",{className:A.a.miniChart,style:{height:a}},u.a.createElement("div",{className:A.a.chartContent},a>0&&u.a.createElement(v["Chart"],{animate:k,scale:D,height:w,forceFit:o,data:r,padding:M},u.a.createElement(v["Axis"],Object(E["a"])({key:"axis-x",name:"x",label:null,line:null,tickLine:null,grid:null},g)),u.a.createElement(v["Axis"],Object(E["a"])({key:"axis-y",name:"y",label:null,line:null,tickLine:null,grid:null},y)),u.a.createElement(v["Tooltip"],{showTitle:!1,crosshairs:!1}),u.a.createElement(v["Geom"],{type:"area",position:"x*y",color:s,tooltip:O,shape:"smooth",style:{fillOpacity:1}}),f?u.a.createElement(v["Geom"],{type:"line",position:"x*y",shape:"smooth",color:c,size:p,tooltip:!1}):u.a.createElement("span",{style:{display:"none"}}))))},T=k()(W),U=(a("/zsF"),a("PArb")),R=a("rePB"),B=a("cQSq"),I=a.n(B),S=a("9/5/"),j=a.n(S),F=a("Jssm"),z=a.n(F),K=a("TSYQ"),q=a.n(K),N=a("d9mD"),G=a.n(N),H=function(e){Object(s["a"])(a,e);var t=Object(_["a"])(a);function a(){var e;Object(o["a"])(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),e.state={legendData:[],legendBlock:!1},e.chart=void 0,e.root=void 0,e.requestRef=0,e.resize=j()((function(){var t=e.props.hasLegend,a=e.state.legendBlock;t&&e.root?e.root&&e.root.parentNode&&e.root.parentNode.clientWidth<=380?a||e.setState({legendBlock:!0}):a&&e.setState({legendBlock:!1}):window.removeEventListener("resize",e.resize)}),300),e.getG2Instance=function(t){e.chart=t,requestAnimationFrame((function(){e.getLegendData(),e.resize()}))},e.getLegendData=function(){if(e.chart){var t=e.chart.getAllGeoms()[0];if(t){var a=t.get("dataArray")||[],n=a.map((function(e){var t=e[0]._origin;return t.color=e[0].color,t.checked=!0,t}));e.setState({legendData:n})}}},e.handleRoot=function(t){e.root=t},e.handleLegendClick=function(t,a){var n=t;n.checked=!n.checked;var r=e.state.legendData;r[a]=n;var i=r.filter((function(e){return e.checked})).map((function(e){return e.x}));e.chart&&e.chart.filter("x",(function(e){return i.indexOf("".concat(e))>-1})),e.setState({legendData:r})},e}return Object(l["a"])(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){e.requestRef=requestAnimationFrame((function(){return e.resize()}))}),{passive:!0})}},{key:"componentDidUpdate",value:function(e){var t=this.props.data;t!==e.data&&this.getLegendData()}},{key:"componentWillUnmount",value:function(){this.requestRef&&window.cancelAnimationFrame(this.requestRef),window.removeEventListener("resize",this.resize),this.resize&&this.resize.cancel()}},{key:"render",value:function(){var e,t,a=this,n=this.props,r=n.valueFormat,i=n.subTitle,o=n.total,l=n.hasLegend,s=void 0!==l&&l,_=n.className,c=n.style,d=n.height,m=void 0===d?0:d,h=n.forceFit,p=void 0===h||h,f=n.percent,E=n.color,g=n.inner,y=void 0===g?.75:g,b=n.animate,k=void 0===b||b,M=n.colors,D=n.lineWidth,O=void 0===D?1:D,w=this.state,x=w.legendData,C=w.legendBlock,L=q()(G.a.pie,_,(e={},Object(R["a"])(e,G.a.hasLegend,!!s),Object(R["a"])(e,G.a.legendBlock,C),e)),P=this.props,A=P.data,W=P.selected,T=void 0===W||W,I=P.tooltip,S=void 0===I||I,j=A||[],F=T,K=S,N=M;j=j||[],F=F||!0,K=K||!0;var H={x:{type:"cat",range:[0,1]},y:{min:0}};(f||0===f)&&(F=!1,K=!1,t=function(e){return"\u5360\u6bd4"===e?E||"rgba(24, 144, 255, 0.85)":"#F0F2F5"},j=[{x:"\u5360\u6bd4",y:parseFloat("".concat(f))},{x:"\u53cd\u6bd4",y:100-parseFloat("".concat(f))}]);var J=["x*percent",function(e,t){return{name:e,value:"".concat((100*t).toFixed(2),"%")}}],X=[12,0,12,0],V=new B["DataView"];return V.source(j).transform({type:"percent",field:"y",dimension:"x",as:"percent"}),u.a.createElement("div",{ref:this.handleRoot,className:L,style:c},u.a.createElement(z.a,{maxFontSize:25},u.a.createElement("div",{className:G.a.chart},u.a.createElement(v["Chart"],{scale:H,height:m,forceFit:p,data:V,padding:X,animate:k,onGetG2Instance:this.getG2Instance},!!K&&u.a.createElement(v["Tooltip"],{showTitle:!1}),u.a.createElement(v["Coord"],{type:"theta",innerRadius:y}),u.a.createElement(v["Geom"],{style:{lineWidth:O,stroke:"#fff"},tooltip:K?J:void 0,type:"intervalStack",position:"percent",color:["x",f||0===f?t:N],selected:F})),(i||o)&&u.a.createElement("div",{className:G.a.total},i&&u.a.createElement("h4",{className:"pie-sub-title"},i),o&&u.a.createElement("div",{className:"pie-stat"},"function"===typeof o?o():o)))),s&&u.a.createElement("ul",{className:G.a.legend},x.map((function(e,t){return u.a.createElement("li",{key:e.x,onClick:function(){return a.handleLegendClick(e,t)}},u.a.createElement("span",{className:G.a.dot,style:{backgroundColor:e.checked?e.color:"#aaa"}}),u.a.createElement("span",{className:G.a.legendTitle},e.x),u.a.createElement(U["a"],{type:"vertical"}),u.a.createElement("span",{className:G.a.percent},"".concat((Number.isNaN(e.percent)?0:100*e.percent).toFixed(2),"%")),u.a.createElement("span",{className:G.a.value},r?r(e.y):e.y))}))))}}]),a}(m["Component"]),J=k()(H),X=a("ODXe"),V=a("1XEM"),Z=a.n(V),Q="https://gw.alipayobjects.com/zos/rmsportal/gWyeGLCdFFRavBGIDzWk.png",Y=function(e){Object(s["a"])(a,e);var t=Object(_["a"])(a);function a(){var e;Object(o["a"])(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),e.state={dv:null,height:0,width:0},e.requestRef=0,e.isUnmount=!1,e.root=void 0,e.imageMask=void 0,e.resize=function(){e.requestRef=requestAnimationFrame((function(){e.renderChart(e.props)}))},e.saveRootRef=function(t){e.root=t},e.initTagCloud=function(){function e(e){return Object(L["a"])({},e.style,{fillOpacity:e.opacity,fontSize:e.origin._origin.size,rotate:e.origin._origin.rotate,text:e.origin._origin.text,textAlign:"center",fontFamily:e.origin._origin.font,fill:e.color,textBaseline:"Alphabetic"})}v["Shape"].registerShape("point","cloud",{drawShape:function(t,a){var n=e(t);return a.addShape("text",{attrs:Object(L["a"])({},n,{x:t.x,y:t.y})})}})},e.renderChart=j()((function(t){var a=t||e.props,n=a.data,r=a.height;if(!(n.length<1)&&e.root){var i=r,o=e.root.offsetWidth,l=function(){var t=(new I.a.View).source(n),a=t.range("value"),r=Object(X["a"])(a,2),l=r[0],s=r[1];t.transform({type:"tag-cloud",fields:["name","value"],imageMask:e.imageMask,font:"Verdana",size:[o,i],padding:0,timeInterval:5e3,rotate:function(){return 0},fontSize:function(e){var t=Math.pow((e.value-l)/(s-l),2);return 12.5*t+5}}),e.isUnmount||e.setState({dv:t,width:o,height:i})};e.imageMask?l():(e.imageMask=new Image,e.imageMask.crossOrigin="",e.imageMask.src=Q,e.imageMask.onload=l)}}),200),e}return Object(l["a"])(a,[{key:"componentDidMount",value:function(){var e=this;requestAnimationFrame((function(){e.initTagCloud(),e.renderChart(e.props)})),window.addEventListener("resize",this.resize,{passive:!0})}},{key:"componentDidUpdate",value:function(e){var t=this.props.data;e&&JSON.stringify(e.data)!==JSON.stringify(t)&&this.renderChart(this.props)}},{key:"componentWillUnmount",value:function(){this.isUnmount=!0,window.cancelAnimationFrame(this.requestRef),window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.height,n=this.state,r=n.dv,i=n.width,o=n.height;return u.a.createElement("div",{className:q()(Z.a.tagCloud,t),style:{width:"100%",height:a},ref:this.saveRootRef},r&&u.a.createElement(v["Chart"],{width:i,height:o,data:r,padding:0,scale:{x:{nice:!1},y:{nice:!1}}},u.a.createElement(v["Tooltip"],{showTitle:!1}),u.a.createElement(v["Coord"],{reflect:"y"}),u.a.createElement(v["Geom"],{type:"point",position:"x*y",color:"text",shape:"cloud",tooltip:["text*value",function(e,t){return{name:e,value:t}}]})))}}]),a}(m["Component"]),$=k()(Y),ee=a("CIdX"),te=a.n(ee),ae=function(e){Object(s["a"])(a,e);var t=Object(_["a"])(a);function a(){var e;Object(o["a"])(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),e.state={radio:1},e.timer=0,e.root=null,e.node=null,e.resize=function(){if(e.root){var t=e.props.height,a=void 0===t?1:t,n=e.root.parentNode,r=n.offsetWidth;e.setState({radio:r<a?r/a:1})}},e}return Object(l["a"])(a,[{key:"componentDidMount",value:function(){var e=this;this.renderChart(),this.resize(),window.addEventListener("resize",(function(){requestAnimationFrame((function(){return e.resize()}))}),{passive:!0})}},{key:"componentDidUpdate",value:function(e){var t=this.props.percent;e.percent!==t&&this.renderChart("update")}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.timer),this.node&&(this.node.innerHTML=""),window.removeEventListener("resize",this.resize)}},{key:"renderChart",value:function(e){var t=this.props,a=t.percent,n=t.color,r=void 0===n?"#1890FF":n,i=a/100,o=this;if(cancelAnimationFrame(this.timer),this.node&&(0===i||i)){var l=this.node,s=l.getContext("2d");if(s){var _=l.width,c=l.height,d=_/2,m=2,u=d-m;s.beginPath(),s.lineWidth=2*m;for(var h=_-m,p=h/8,f=.2,v=f,E=m,g=0,y=0,b=.005,k=[],M=d-m,D=-Math.PI/2,O=!0,w=D;w<D+2*Math.PI;w+=1/(8*Math.PI))k.push([d+M*Math.cos(w),d+M*Math.sin(w)]);var x=k.shift();s.strokeStyle=r,s.moveTo(x[0],x[1]),L()}}function C(){if(s){s.beginPath(),s.save();for(var e=[],t=E;t<=E+h;t+=20/h){var a=g+(E+t)/p,n=Math.sin(a)*v,i=t,o=2*u*(1-y)+(d-u)-p*n;s.lineTo(i,o),e.push([i,o])}var l=e.shift();s.lineTo(E+h,c),s.lineTo(E,c),s.lineTo(l[0],l[1]);var _=s.createLinearGradient(0,0,0,c);_.addColorStop(0,"#ffffff"),_.addColorStop(1,r),s.fillStyle=_,s.fill(),s.restore()}}function L(){if(s){if(s.clearRect(0,0,_,c),O&&"update"!==e)if(k.length){var t=k.shift();s.lineTo(t[0],t[1]),s.stroke()}else O=!1,s.lineTo(x[0],x[1]),s.stroke(),k=[],s.globalCompositeOperation="destination-over",s.beginPath(),s.lineWidth=m,s.arc(d,d,M,0,2*Math.PI,!0),s.beginPath(),s.save(),s.arc(d,d,d-3*m,0,2*Math.PI,!0),s.restore(),s.clip(),s.fillStyle=r;else{if(i>=.85){if(v>f/4){var a=.01*f;v-=a}}else if(i<=.1){if(v<1.5*f){var n=.01*f;v+=n}}else{if(v<=f){var l=.01*f;v+=l}if(v>=f){var u=.01*f;v-=u}}i-y>0&&(y+=b),i-y<0&&(y-=b),g+=.07,C()}o.timer=requestAnimationFrame(L)}}}},{key:"render",value:function(){var e=this,t=this.state.radio,a=this.props,n=a.percent,r=a.title,i=a.height,o=void 0===i?1:i;return u.a.createElement("div",{className:te.a.waterWave,ref:function(t){return e.root=t},style:{transform:"scale(".concat(t,")")}},u.a.createElement("div",{style:{width:o,height:o,overflow:"hidden"}},u.a.createElement("canvas",{className:te.a.waterWaveCanvasWrapper,ref:function(t){return e.node=t},width:2*o,height:2*o})),u.a.createElement("div",{className:te.a.text,style:{width:o}},r&&u.a.createElement("span",null,r),u.a.createElement("h4",null,n,"%")))}}]),a}(m["Component"]),ne=k()(ae),re=a("Gs3F"),ie=(re["a"],a("KQm4")),oe=a("H+7v"),le=a.n(oe);function se(e){return 1*e<10?"0".concat(e):e}function _e(){for(var e=[],t=0;t<24;t+=1)e.push({x:"".concat(se(t),":00"),y:Math.floor(200*Math.random())+50*t});return e}var ce=function(e){Object(s["a"])(a,e);var t=Object(_["a"])(a);function a(){var e;Object(o["a"])(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),e.state={activeData:_e()},e.timer=void 0,e.requestRef=void 0,e.loopData=function(){e.requestRef=requestAnimationFrame((function(){e.timer=window.setTimeout((function(){e.setState({activeData:_e()},(function(){e.loopData()}))}),1e3)}))},e}return Object(l["a"])(a,[{key:"componentDidMount",value:function(){this.loopData()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer),this.requestRef&&cancelAnimationFrame(this.requestRef)}},{key:"render",value:function(){var e=this.state.activeData,t=void 0===e?[]:e;return u.a.createElement("div",{className:le.a.activeChart},u.a.createElement(c["a"],{title:"\u76ee\u6807\u8bc4\u4f30",value:"\u6709\u671b\u8fbe\u5230\u9884\u671f"}),u.a.createElement("div",{style:{marginTop:32}},u.a.createElement(T,{animate:!1,line:!0,borderWidth:2,height:84,scale:{y:{tickCount:3}},yAxis:{tickLine:void 0,label:void 0,title:void 0,line:void 0},data:t})),t&&u.a.createElement("div",null,u.a.createElement("div",{className:le.a.activeChartGrid},u.a.createElement("p",null,Object(ie["a"])(t).sort()[t.length-1].y+200," \u4ebf\u5143"),u.a.createElement("p",null,Object(ie["a"])(t).sort()[Math.floor(t.length/2)].y," \u4ebf\u5143")),u.a.createElement("div",{className:le.a.dashedLine},u.a.createElement("div",{className:le.a.line})),u.a.createElement("div",{className:le.a.dashedLine},u.a.createElement("div",{className:le.a.line}))),t&&u.a.createElement("div",{className:le.a.activeChartLegend},u.a.createElement("span",null,"00:00"),u.a.createElement("span",null,t[Math.floor(t.length/2)].x),u.a.createElement("span",null,t[t.length-1].x)))}}]),a}(m["Component"]),de=a("Wnft"),me=a.n(de),ue=c["a"].Countdown,he=Date.now()+1728e5+3e4,pe=function(e){Object(s["a"])(a,e);var t=Object(_["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return Object(l["a"])(a,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"dashboardAndmonitor/fetchTags"})}},{key:"render",value:function(){var e=this.props,t=e.dashboardAndmonitor,a=e.loading,o=t.tags;return u.a.createElement(h["b"],null,u.a.createElement(u.a.Fragment,null,u.a.createElement(r["a"],{gutter:24},u.a.createElement(i["a"],{xl:18,lg:24,md:24,sm:24,xs:24,style:{marginBottom:24}},u.a.createElement(n["a"],{title:u.a.createElement(d["a"],{id:"dashboardandmonitor.monitor.trading-activity",defaultMessage:"Real-Time Trading Activity"}),bordered:!1},u.a.createElement(r["a"],null,u.a.createElement(i["a"],{md:6,sm:12,xs:24},u.a.createElement(c["a"],{title:u.a.createElement(d["a"],{id:"dashboardandmonitor.monitor.total-transactions",defaultMessage:"Total transactions today"}),suffix:"\u5143",value:f()(124543233).format("0,0")})),u.a.createElement(i["a"],{md:6,sm:12,xs:24},u.a.createElement(c["a"],{title:u.a.createElement(d["a"],{id:"dashboardandmonitor.monitor.sales-target",defaultMessage:"Sales target completion rate"}),value:"92%"})),u.a.createElement(i["a"],{md:6,sm:12,xs:24},u.a.createElement(ue,{title:u.a.createElement(d["a"],{id:"dashboardandmonitor.monitor.remaining-time",defaultMessage:"Remaining time of activity"}),value:he,format:"HH:mm:ss:SSS"})),u.a.createElement(i["a"],{md:6,sm:12,xs:24},u.a.createElement(c["a"],{title:u.a.createElement(d["a"],{id:"dashboardandmonitor.monitor.total-transactions-per-second",defaultMessage:"Total transactions per second"}),suffix:"\u5143",value:f()(234).format("0,0")}))),u.a.createElement("div",{className:me.a.mapChart},u.a.createElement(re["a"],null)))),u.a.createElement(i["a"],{xl:6,lg:24,md:24,sm:24,xs:24},u.a.createElement(n["a"],{title:u.a.createElement(d["a"],{id:"dashboardandmonitor.monitor.activity-forecast",defaultMessage:"Activity forecast"}),style:{marginBottom:24},bordered:!1},u.a.createElement(ce,null)),u.a.createElement(n["a"],{title:u.a.createElement(d["a"],{id:"dashboardandmonitor.monitor.efficiency",defaultMessage:"Efficiency"}),style:{marginBottom:24},bodyStyle:{textAlign:"center"},bordered:!1},u.a.createElement(C,{title:Object(d["c"])({id:"dashboardandmonitor.monitor.ratio",defaultMessage:"Ratio"}),height:180,percent:87})))),u.a.createElement(r["a"],{gutter:24},u.a.createElement(i["a"],{xl:12,lg:24,sm:24,xs:24,style:{marginBottom:24}},u.a.createElement(n["a"],{title:u.a.createElement(d["a"],{id:"dashboardandmonitor.monitor.proportion-per-category",defaultMessage:"Proportion Per Category"}),bordered:!1,className:me.a.pieCard},u.a.createElement(r["a"],{style:{padding:"16px 0"}},u.a.createElement(i["a"],{span:8},u.a.createElement(J,{animate:!1,percent:28,title:u.a.createElement(d["a"],{id:"dashboardandmonitor.monitor.fast-food",defaultMessage:"Fast food"}),total:"28%",height:128,lineWidth:2})),u.a.createElement(i["a"],{span:8},u.a.createElement(J,{animate:!1,color:"#5DDECF",percent:22,title:u.a.createElement(d["a"],{id:"dashboardandmonitor.monitor.western-food",defaultMessage:"Western food"}),total:"22%",height:128,lineWidth:2})),u.a.createElement(i["a"],{span:8},u.a.createElement(J,{animate:!1,color:"#2FC25B",percent:32,title:u.a.createElement(d["a"],{id:"dashboardandmonitor.monitor.hot-pot",defaultMessage:"Hot pot"}),total:"32%",height:128,lineWidth:2}))))),u.a.createElement(i["a"],{xl:6,lg:12,sm:24,xs:24,style:{marginBottom:24}},u.a.createElement(n["a"],{title:u.a.createElement(d["a"],{id:"dashboardandmonitor.monitor.popular-searches",defaultMessage:"Popular Searches"}),loading:a,bordered:!1,bodyStyle:{overflow:"hidden"}},u.a.createElement($,{data:o||[],height:161}))),u.a.createElement(i["a"],{xl:6,lg:12,sm:24,xs:24,style:{marginBottom:24}},u.a.createElement(n["a"],{title:u.a.createElement(d["a"],{id:"dashboardandmonitor.monitor.resource-surplus",defaultMessage:"Resource Surplus"}),bodyStyle:{textAlign:"center",fontSize:0},bordered:!1},u.a.createElement(ne,{height:161,title:u.a.createElement(d["a"],{id:"dashboardandmonitor.monitor.fund-surplus",defaultMessage:"Fund Surplus"}),percent:34}))))))}}]),a}(m["Component"]);t["default"]=Object(d["b"])((function(e){var t=e.dashboardAndmonitor,a=e.loading;return{dashboardAndmonitor:t,loading:a.models.dashboardAndmonitor}}))(pe)},d9mD:function(e,t,a){e.exports={pie:"pie___2nzPi",chart:"chart____y02v",hasLegend:"hasLegend___2tvLi",legend:"legend___aOylG",dot:"dot___3cUod",line:"line___3wzdx",legendTitle:"legendTitle___3d-qz",percent:"percent___1EUip",value:"value___3oEZu",title:"title___3EZr5",total:"total___2C3lg",legendBlock:"legendBlock___1RfCR"}},"iz+Y":function(e,t,a){e.exports={miniChart:"miniChart___27WlV",chartContent:"chartContent___2FNqq",chartLoading:"chartLoading___2DxhP"}}}]);