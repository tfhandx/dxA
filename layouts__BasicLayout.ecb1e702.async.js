(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{bx7e:function(e,t,n){"use strict";n.r(t);var a=n("wx14"),r=n("KQm4"),o=n("VTBJ"),c=(n("J+/v"),n("MoRW")),l=(n("+L6B"),n("2/Rp")),i=n("Hx5s"),u=n("cDcd"),h=n.n(u),s=n("55Ip"),d=n("9kvl"),m=n("WHYC"),g=n("eTk0"),p=n("sgkG"),b=n("c+yx"),f=(c["a"],l["a"],s["a"],function e(t){return t.map((function(t){var n=Object(o["a"])({},t,{children:t.children?e(t.children):[]});return g["a"].check(t.authority,n,null)}))}),k=h.a.createElement(i["a"],{style:{},copyright:"2020 Dx\u524d\u7aef\u4f53\u9a8c\u6280\u672f\u90e8\u51fa\u54c1",links:[{key:"shequ",title:"\u793e\u533a",href:"https://shequ.dxchain.com/",blankTarget:!0},{key:"main",title:"\u5b98\u7f51",href:"https://www.dxchain.com",blankTarget:!0},{key:"xiting",title:"\u897f\u4ead\u6570\u636e",href:"https://www.xitingdata.com/signup&refer_by_code=35569",blankTarget:!0},{key:"bok",title:"DX\u535a\u5ba2",href:"https://blog.dxchain.com/",blankTarget:!0},{key:"linknode",title:"\u94fe\u8282\u70b9",href:"https://www.chainnode.com/forum/382",blankTarget:!0},{key:"boke1",title:"DX\u535a\u5ba2",href:"https://blog.dxchain.com/",blankTarget:!0}]}),y=function(e){var t=e.dispatch,n=e.children,o=e.settings,c=e.collapsed,l=e.login,y=e.location,w=void 0===y?{pathname:"/"}:y;Object(u["useEffect"])((function(){t&&t({type:"user/fetchCurrent"})}),[]);var x=function(e){t&&t({type:"global/changeLayoutCollapsed",payload:e})},E=Object(b["a"])(e.route.routes,w.pathname||"/")||{authority:void 0};console.log("authorized!.authority",E);var v=Object(d["h"])(),R=v.formatMessage,j=l.isLogined,O=j;return console.log("isLogined",O),h.a.createElement(h.a.Fragment,null,h.a.createElement(i["g"],Object(a["a"])({logo:"https://shequ-test.dxapp.net/dxAdmin/camel.png",formatMessage:R,menuHeaderRender:function(e,t){return h.a.createElement(s["a"],{to:"/"},e,c?null:h.a.createElement("h1",null,"DxAdmin"))},onCollapse:x,menuItemRender:function(e,t){return e.isUrl||e.children||!e.path?t:h.a.createElement(s["a"],{to:e.path},t)},breadcrumbRender:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[{path:"/",breadcrumbName:R({id:"menu.home"})}].concat(Object(r["a"])(e))},itemRender:function(e,t,n,a){var r=0===n.indexOf(e);return r?h.a.createElement(s["a"],{to:a.join("/")},e.breadcrumbName):h.a.createElement("span",null,e.breadcrumbName)},footerRender:function(){return k},menuDataRender:f,rightContentRender:function(){return h.a.createElement(p["a"],null)}},e,o),h.a.createElement(g["a"],{authority:E.authority,noMatch:O?h.a.createElement(m["c"],{to:"/exception/403"}):h.a.createElement(m["c"],{to:"/user/login"})},n)),h.a.createElement(i["f"],{settings:o,onSettingChange:function(e){return t({type:"settings/changeSetting",payload:e})}}))};t["default"]=Object(d["b"])((function(e){var t=e.global,n=e.settings,a=e.login;return{collapsed:t.collapsed,settings:n,login:a}}))(y)}}]);