(function(t){function e(e){for(var n,a,o=e[0],s=e[1],u=e[2],l=0,p=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);m&&m(e);while(p.length)p.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,a=1;a<r.length;a++){var o=r[a];0!==i[o]&&(n=!1)}n&&(c.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},i={app:0},c=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d20ede5":"9362d36c","chunk-2d2163ab":"305fccb5","chunk-2d21a3d2":"c01a6d1e","chunk-798c1bbf":"0a995a50"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r={"chunk-798c1bbf":1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-2d20ede5":"31d6cfe0","chunk-2d2163ab":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-798c1bbf":"219c9659"}[t]+".css",i=s.p+n,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var u=c[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===i))return e()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){u=p[o],l=u.getAttribute("data-href");if(l===n||l===i)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||i,c=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[t],m.parentNode.removeChild(m),r(c)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){a[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise((function(e,r){n=i[t]=[e,r]}));e.push(n[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(t);var p=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(m);var r=i[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",p.name="ChunkLoadError",p.type=n,p.request=a,r[1](p)}i[t]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var m=l;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"0fcc":function(t,e,r){t.exports=r.p+"img/category.12bedb89.svg"},"3b09":function(t,e,r){t.exports=r.p+"img/profile.42d7cf12.svg"},"3ea8":function(t,e,r){t.exports=r.p+"img/home.7210ddcb.svg"},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view"),r("main-tar-bar")],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tar-bar",[n("tar-bar-item",{attrs:{path:"/home"}},[n("img",{attrs:{slot:"item-icon",src:r("3ea8"),alt:""},slot:"item-icon"}),n("img",{attrs:{slot:"item-icon-active",src:r("cc50"),alt:""},slot:"item-icon-active"}),n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),n("tar-bar-item",{attrs:{path:"/category"}},[n("img",{attrs:{slot:"item-icon",src:r("0fcc"),alt:""},slot:"item-icon"}),n("img",{attrs:{slot:"item-icon-active",src:r("90e7"),alt:""},slot:"item-icon-active"}),n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("品类")])]),n("tar-bar-item",{attrs:{path:"/cart"}},[n("img",{attrs:{slot:"item-icon",src:r("e930"),alt:""},slot:"item-icon"}),n("img",{attrs:{slot:"item-icon-active",src:r("9410"),alt:""},slot:"item-icon-active"}),n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),n("tar-bar-item",{attrs:{path:"/me"}},[n("img",{attrs:{slot:"item-icon",src:r("3b09"),alt:""},slot:"item-icon"}),n("img",{attrs:{slot:"item-icon-active",src:r("cc94"),alt:""},slot:"item-icon-active"}),n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},u=[],l={name:"TarBar"},p=l,m=(r("8b1c"),r("2877")),f=Object(m["a"])(p,s,u,!1,null,"5acc1224",null),d=f.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?t._t("item-icon-active"):t._t("item-icon"),r("div",{style:t.isStyleActive},[t._t("item-text")],2)],2)},v=[],b={name:"TarBarItem",props:{path:{type:String},activeStyle:{type:String,default:"#f00"}},data(){return{}},methods:{itemClick(){this.$router.replace(this.path)}},computed:{isActive(){return-1!==this.$route.path.indexOf(this.path)},isStyleActive(){return this.isActive?{color:this.activeStyle}:{}}}},g=b,y=(r("59f4"),Object(m["a"])(g,h,v,!1,null,"11388bd6",null)),x=y.exports,_={name:"MainTarBar",components:{TarBar:d,TarBarItem:x}},k=_,w=Object(m["a"])(k,c,o,!1,null,"d359c518",null),O=w.exports,j={name:"App",components:{MainTarBar:O}},S=j,T=(r("034f"),Object(m["a"])(S,a,i,!1,null,null,null)),E=T.exports,A=r("8c4f");const C=()=>r.e("chunk-798c1bbf").then(r.bind(null,"b3d7")),P=()=>r.e("chunk-2d21a3d2").then(r.bind(null,"bb51")),B=()=>r.e("chunk-2d2163ab").then(r.bind(null,"c228")),$=()=>r.e("chunk-2d20ede5").then(r.bind(null,"b0cd"));n["a"].use(A["a"]);const M=[{path:"",redirect:"/home"},{path:"/home",component:C},{path:"/cart",component:B},{path:"/category",component:P},{path:"/me",component:$}],L=new A["a"]({routes:M,mode:"history"});var N=L;n["a"].config.productionTip=!1,new n["a"]({render:t=>t(E),router:N}).$mount("#app")},"59f4":function(t,e,r){"use strict";var n=r("a1ee"),a=r.n(n);a.a},"85ec":function(t,e,r){},"8b1c":function(t,e,r){"use strict";var n=r("ae7e"),a=r.n(n);a.a},"90e7":function(t,e,r){t.exports=r.p+"img/category_active.cb2cc09f.svg"},9410:function(t,e,r){t.exports=r.p+"img/shopcart_active.3f0a2016.svg"},a1ee:function(t,e,r){},ae7e:function(t,e,r){},cc50:function(t,e,r){t.exports=r.p+"img/home_active.cc40b6f2.svg"},cc94:function(t,e,r){t.exports=r.p+"img/profile_active.fd66b281.svg"},e930:function(t,e,r){t.exports=r.p+"img/shopcart.c68224ce.svg"}});
//# sourceMappingURL=app.3cff0985.js.map