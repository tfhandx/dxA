(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"2Fcx":function(e,t,a){e.exports={container:"container___1Rq3A"}},bsDN:function(e,t,a){e.exports={menu:"menu___3fMWW",right:"right___2CMz5",action:"action___3ut1O",search:"search___3FPts",account:"account___1r_Ku",avatar:"avatar___1Rx79",dark:"dark___1zu9O",name:"name___2eduw"}},bx7e:function(e,t,a){"use strict";a.r(t);var n=a("6Gbx"),r=a("xS0X"),c=a("Dqrt"),o=(a("yXXO"),a("A53U")),l=(a("f2Rw"),a("MLRK")),i=a("rh40"),u=a("cDcd"),s=a.n(u),m=a("FR5j"),h=a("9kvl"),d=a("g17u"),p=a("eTk0"),g=(a("GviB"),a("Hm2l")),f=(a("6+ps"),a("9ssK")),b=(a("hVd3"),a("fGXo")),v=a("5weM"),y=a("5g+l"),E=a("42kL"),k=a("YG5q"),_=a("vbXO"),w=a("oEWV"),x=a("/FtP"),O=a("uZXw"),N=a("bsDN"),j=a.n(N),C=function(e){Object(E["a"])(a,e);var t=Object(k["a"])(a);function a(){var e;Object(v["a"])(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return e=t.call.apply(t,[this].concat(r)),e.onMenuClick=function(t){var a=t.key;if("logout"!==a)h["e"].push("/account/".concat(a));else{var n=e.props.dispatch;n&&n({type:"login/logout",payload:{isLogined:!1}})}},e}return Object(y["a"])(a,[{key:"render",value:function(){var e=this.props,t=e.currentUser,a=void 0===t?{avatar:"",name:""}:t,n=e.menu,r=s.a.createElement(b["a"],{className:j.a.menu,selectedKeys:[],onClick:this.onMenuClick},n&&s.a.createElement(b["a"].Item,{key:"center"},s.a.createElement(_["a"],null),"\u4e2a\u4eba\u4e2d\u5fc3"),n&&s.a.createElement(b["a"].Item,{key:"settings"},s.a.createElement(w["a"],null),"\u4e2a\u4eba\u8bbe\u7f6e"),n&&s.a.createElement(b["a"].Divider,null),s.a.createElement(b["a"].Item,{key:"logout"},s.a.createElement(x["a"],null),"\u9000\u51fa\u767b\u5f55"));return a&&a.name?s.a.createElement(O["a"],{overlay:r},s.a.createElement("span",{className:"".concat(j.a.action," ").concat(j.a.account)},s.a.createElement(f["a"],{size:"small",className:j.a.avatar,src:a.avatar,alt:"avatar"}),s.a.createElement("span",{className:j.a.name},a.name))):s.a.createElement("span",{className:"".concat(j.a.action," ").concat(j.a.account)},s.a.createElement(g["a"],{size:"small",style:{marginLeft:8,marginRight:8}}))}}]),a}(s.a.Component),R=Object(h["b"])((function(e){var t=e.user;return{currentUser:t.currentUser}}))(C),z=a("trCS"),D=function(e){var t=e.theme,a=e.layout,n=j.a.right;return"dark"===t&&"topmenu"===a&&(n="".concat(j.a.right,"  ").concat(j.a.dark)),s.a.createElement("div",{className:n},s.a.createElement(R,{menu:!0}),s.a.createElement(z["a"],{className:j.a.action}))},T=Object(h["b"])((function(e){var t=e.settings;return{theme:t.navTheme,layout:t.layout}}))(D),X=a("c+yx"),F=(o["a"],l["a"],m["a"],function e(t){return t.map((function(t){var a=Object(c["a"])(Object(c["a"])({},t),{},{children:t.children?e(t.children):[]});return p["a"].check(t.authority,a,null)}))}),M=s.a.createElement(i["a"],{style:{},copyright:"2020 Dx\u524d\u7aef\u4f53\u9a8c\u6280\u672f\u90e8\u51fa\u54c1",links:[{key:"shequ",title:"\u793e\u533a",href:"https://shequ.dxchain.com/",blankTarget:!0},{key:"main",title:"\u5b98\u7f51",href:"https://www.dxchain.com",blankTarget:!0},{key:"xiting",title:"\u897f\u4ead\u6570\u636e",href:"https://www.xitingdata.com/signup&refer_by_code=35569",blankTarget:!0},{key:"bok",title:"DX\u535a\u5ba2",href:"https://blog.dxchain.com/",blankTarget:!0},{key:"linknode",title:"\u94fe\u8282\u70b9",href:"https://www.chainnode.com/forum/382",blankTarget:!0},{key:"boke1",title:"DX\u535a\u5ba2",href:"https://blog.dxchain.com/",blankTarget:!0}]}),U=function(e){var t=e.dispatch,a=e.children,c=e.settings,o=e.collapsed,l=e.login,g=e.location,f=void 0===g?{pathname:"/"}:g;Object(u["useEffect"])((function(){t&&t({type:"user/fetchCurrent"})}),[]);var b=function(e){t&&t({type:"global/changeLayoutCollapsed",payload:e})},v=Object(X["a"])(e.route.routes,f.pathname||"/")||{authority:void 0};console.log("authorized!.authority",v);var y=Object(h["h"])(),E=y.formatMessage,k=l.isLogined,_=k;return console.log("isLogined",_),s.a.createElement(s.a.Fragment,null,s.a.createElement(i["g"],Object(n["a"])({logo:"https://shequ-test.dxapp.net/dxAdmin/camel.png",formatMessage:E,menuHeaderRender:function(e,t){return s.a.createElement(m["a"],{to:"/"},e,o?null:s.a.createElement("h1",null,"DxAdmin"))},onCollapse:b,menuItemRender:function(e,t){return e.isUrl||e.children||!e.path?t:s.a.createElement(m["a"],{to:e.path},t)},breadcrumbRender:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[{path:"/",breadcrumbName:E({id:"menu.home"})}].concat(Object(r["a"])(e))},itemRender:function(e,t,a,n){var r=0===a.indexOf(e);return r?s.a.createElement(m["a"],{to:n.join("/")},e.breadcrumbName):s.a.createElement("span",null,e.breadcrumbName)},footerRender:function(){return M},menuDataRender:F,rightContentRender:function(){return s.a.createElement(T,null)}},e,c),s.a.createElement(p["a"],{authority:v.authority,noMatch:_?s.a.createElement(d["c"],{to:"/exception/403"}):s.a.createElement(d["c"],{to:"/user/login"})},a)),s.a.createElement(i["f"],{settings:c,onSettingChange:function(e){return t({type:"settings/changeSetting",payload:e})}}))};t["default"]=Object(h["b"])((function(e){var t=e.global,a=e.settings,n=e.login;return{collapsed:t.collapsed,settings:a,login:n}}))(U)},rFY1:function(e,t,a){e.exports={menu:"menu___25uep",dropDown:"dropDown___2mKz9"}},trCS:function(e,t,a){"use strict";a("hVd3");var n=a("fGXo"),r=a("KiFe"),c=a("9kvl"),o=a("cDcd"),l=a.n(o),i=a("iczh"),u=a.n(i),s=a("uZXw"),m=a("rFY1"),h=a.n(m),d=function(e){var t=e.className,a=Object(c["d"])(),o=function(e){var t=e.key;return Object(c["g"])(t)},i=["zh-CN","zh-TW","en-US","pt-BR"],m={"zh-CN":"\u7b80\u4f53\u4e2d\u6587","zh-TW":"\u7e41\u4f53\u4e2d\u6587","en-US":"English","pt-BR":"Portugu\xeas"},d={"zh-CN":"\ud83c\udde8\ud83c\uddf3","zh-TW":"\ud83c\udded\ud83c\uddf0","en-US":"\ud83c\uddfa\ud83c\uddf8","pt-BR":"\ud83c\udde7\ud83c\uddf7"},p=l.a.createElement(n["a"],{className:h.a.menu,selectedKeys:[a],onClick:o},i.map((function(e){return l.a.createElement(n["a"].Item,{key:e},l.a.createElement("span",{role:"img","aria-label":m[e]},d[e])," ",m[e])})));return l.a.createElement(s["a"],{overlay:p,placement:"bottomRight"},l.a.createElement("span",{className:u()(h.a.dropDown,t)},l.a.createElement(r["a"],{title:"\u8bed\u8a00"})))};t["a"]=d},uZXw:function(e,t,a){"use strict";a("U3qH");var n=a("Tqzx"),r=a("6Gbx"),c=a("NFVj"),o=a("cDcd"),l=a.n(o),i=a("iczh"),u=a.n(i),s=a("2Fcx"),m=a.n(s),h=function(e){var t=e.overlayClassName,a=Object(c["a"])(e,["overlayClassName"]);return l.a.createElement(n["a"],Object(r["a"])({overlayClassName:u()(m.a.container,t)},a))};t["a"]=h}}]);