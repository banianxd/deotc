(function(e){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],s=0,f=[];s<i.length;s++)a=i[s],o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-3ee2a99a":"0344f9f2"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-3ee2a99a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-3ee2a99a":"b26f4c9b"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var l=u[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e),l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/deotc/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("a925"),o={otcRules:[],fair:"FAIR",allRecord:"ALLRECORD"},u=o,i={otcRules:["布卖单或买单，需要该账号有小量FO TOKEN，如账号无FO，可进小额进场，购置小量FO，小额进场无申诉.","卖家布置卖单，账号需超过一定量的FO，卖家提供卖TOKEN数量和单价，并把该TOKEN数量，抵押到合约当中锁定.","买家点击购买订单，购买即锁定，双方自助联系沟通.","买家法币转账，然后卖方解锁该订单TOKEN，并由合约解锁TOKEN并转给买家，完成交易.","订单锁定过程中，双方出现异议，可交由社区仲裁，仲裁员由社区节点或大户账号均可参与调解仲裁.","锁定订单后一天，买卖任一方均可提出仲裁，仲裁员判断一方胜诉，双方无异议，沟通和解，胜诉方可提现或解锁该订单.","一名仲裁员仲裁调解后，买卖一方如仍由异议，均可在一天内提出上诉.","上诉状态中的订单，需要三个以上仲裁员获胜票数并且胜诉方的得票数比败诉方多，才能认定获胜","获胜买方可以自助提现，获胜卖方可以解锁该订单，继续放置卖单","布小额进场卖单，需要账号有大量FO，并需抵押1000 FO布单，取消并解锁订单，合约扣留1FO作为为资源抵扣","布置卖单需要设置个人收款信息，推荐使用微信群二维码，提供给买家联系","该OTC，为OTC协议，纯属去中心化模式，无第三方经营，上线即跑路"],fair:"公平",allRecord:"所有记录"},c=i,l={en:u,cn:c};r["a"].use(a["a"]);var s=new a["a"]({locale:localStorage.lang||"cn",messages:l}),f=s,d=(n("ab8b"),n("2dd8"),n("9f7b")),p=n.n(d),h=n("8c4f"),v=function(){return n.e("chunk-3ee2a99a").then(n.bind(null,"866a"))};r["a"].use(h["a"]);var m=new h["a"]({scrollBehavior:function(){return{y:0}},linkActiveClass:"is-active",routes:[{path:"/",components:{default:v}}]}),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{staticClass:"view"})],1)],1)},b=[],y={name:"app",data:function(){return{msg:"a fibos deotc dapp"}}},O=y,w=n("2877"),E=Object(w["a"])(O,g,b,!1,null,null,null),T=E.exports;r["a"].use(p.a),new r["a"]({el:"#app",i18n:f,render:function(e){return e(T)},router:m})}});