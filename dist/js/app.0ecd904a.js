(function(e){function t(t){for(var n,o,c=t[0],u=t[1],i=t[2],l=0,d=[];l<c.length;l++)o=c[l],r[o]&&d.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,i||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var u=a[o];0!==r[u]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},s=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"598619fc","chunk-e8f5e4a6":"680c8a47","chunk-2550e07e":"25f378fa","chunk-4ff35591":"8cf9cdbf","chunk-6fde6a22":"0dbfb92e","chunk-d0125e82":"7f94a5d2","chunk-2d0aab0a":"5476cfc3","chunk-8a590b78":"ea1b930f"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=n);var s,u=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=o(e),s=function(t){i.onerror=i.onload=null,clearTimeout(l);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+n+": "+s+")");o.type=n,o.request=s,a[1](o)}r[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:i})},12e4);i.onerror=i.onload=s,u.appendChild(i)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=i;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return a(t)}function s(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id="4678"},"4a9b":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("a026"),r=a("ce5b"),s=a.n(r);a("bf40");n["default"].use(s.a,{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},iconfont:"md"});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-navigation-drawer",{attrs:{app:""},model:{value:e.navigator,callback:function(t){e.navigator=t},expression:"navigator"}},[a("v-toolbar",{attrs:{flat:""}},[a("v-list",[a("v-list-tile",[a("v-list-tile-title",{staticClass:"title"},[e._v("\n                        Sega\n                    ")])],1)],1)],1),a("v-divider"),a("v-list",{staticClass:"pt-0",attrs:{dense:""}},e._l(e.items,function(t){return a("v-list-tile",{key:t.title,attrs:{to:{name:t.goto}}},[a("v-list-tile-action",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-tile-content",[a("v-list-tile-title",[e._v(e._s(t.title))])],1)],1)}))],1),a("v-toolbar",{attrs:{app:""}},[a("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.navigator=!e.navigator}}}),a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[e._v("Cliente:")]),a("span",{staticClass:"font-weight-light"},[e._v(" "+e._s(e.usuario.nombre_cliente))])]),a("v-spacer"),a("v-btn",{attrs:{flat:"",to:{name:"login_login"}}},[a("span",{staticClass:"mr-2"},[e._v("Login")])])],1),a("v-content",[a("router-view")],1)],1)},c=[],u={name:"App",data(){return{usuario:JSON.parse(localStorage.getItem("usuario")),navigator:null,items:[{title:"Usuarios",goto:"usuarios_index",icon:"question_answer"},{title:"Dashboard",goto:"dashboard_dashboard",icon:"question_answer"}]}},created(){}},i=u,l=a("2877"),f=Object(l["a"])(i,o,c,!1,null,null,null);f.options.__file="App.vue";var d=f.exports,b=a("8c4f");a("bb51");function h(e){return a("9dac")("./"+e)}function v(e,t){var a="/"+e+"/"+t,n=e+"_"+t;return{path:a,name:n,props:!0,component:()=>h(e+"/"+t+".vue")}}n["default"].use(b["a"]);var j=[v("usuarios","index"),v("usuarios","gestionar"),v("dashboard","dashboard"),v("login","login")],p=new b["a"]({routes:j}),m=(a("d5e8"),a("d1e7"),a("1fca"));function g(e,t){for(var a=[],n=e.length-1;n>=0;n--){for(var r=e[n],s=0,o=t.length-1;o>=0;o--)t[o]["unit"]===r&&(s=t[o]["rates"][0]+s);a.push(s)}return a}n["default"].config.productionTip=!1,n["default"].component("via-encabezado",{props:["titulo"],template:'<v-toolbar height="30" dark color="indigo"><v-spacer></v-spacer><v-toolbar-title class="align-end">{{titulo}}</v-toolbar-title><v-spacer></v-spacer></v-toolbar>'}),n["default"].component("via-lbl-frm",{props:["titulo","required","tamanio"],template:'<v-flex class="via-desc-form"><label>{{ titulo }}: <span class="red--text text--lighten-2" v-show="required && required === \'true\'">(*)</span></label></v-flex>'}),n["default"].filter("toCurrency",function(e){if("number"!==typeof e)return e;var t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0});return t.format(e)}),n["default"].component("line-chart",{props:["midata","mislabels"],extends:m["a"].Doughnut,methods:{renderChartVue:function(){var e=this.mislabels,t=g(e,this.midata);this.renderChart({labels:e,datasets:[{label:"Data One",backgroundColor:["#FF0000","#DB7093","#FF8C00","#F0E68C","#4B0082","#90EE90","#808000","#008080","#AFEEEE","#4682B4","#FFEBCD","#708090","#FF6347","#DA70D6","#9370DB"],data:t}]},{responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom"}})}},mounted(){this.renderChartVue()},watch:{midata:function(){this.renderChartVue()}}}),new n["default"]({router:p,render:function(e){return e(d)}}).$mount("#app")},"9a84":function(e,t,a){"use strict";var n=a("4a9b"),r=a.n(n);r.a},"9dac":function(e,t,a){var n={"./About":["f820","chunk-2d22d746"],"./About.vue":["f820","chunk-2d22d746"],"./Home":["bb51"],"./Home.vue":["bb51"],"./dashboard/dashboard":["ec09","chunk-e8f5e4a6","chunk-2550e07e"],"./dashboard/dashboard.js":["ec09","chunk-e8f5e4a6","chunk-2550e07e"],"./dashboard/dashboard.vue":["b7b4","chunk-e8f5e4a6","chunk-4ff35591"],"./login/login":["dc3f","chunk-e8f5e4a6","chunk-d0125e82","chunk-8a590b78"],"./login/login.vue":["dc3f","chunk-e8f5e4a6","chunk-d0125e82","chunk-8a590b78"],"./usuarios":["ee57","chunk-e8f5e4a6","chunk-6fde6a22"],"./usuarios/":["ee57","chunk-e8f5e4a6","chunk-6fde6a22"],"./usuarios/gestionar":["11a5","chunk-e8f5e4a6","chunk-d0125e82","chunk-2d0aab0a"],"./usuarios/gestionar.vue":["11a5","chunk-e8f5e4a6","chunk-d0125e82","chunk-2d0aab0a"],"./usuarios/index":["ee57","chunk-e8f5e4a6","chunk-6fde6a22"],"./usuarios/index.vue":["ee57","chunk-e8f5e4a6","chunk-6fde6a22"]};function r(e){var t=n[e];return t?Promise.all(t.slice(1).map(a.e)).then(function(){var e=t[0];return a(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(n)},r.id="9dac",e.exports=r},bb51:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._m(0),a("h3",[e._v("Installed CLI Plugins")]),a("ul"),a("h3",[e._v("Essential Links")]),e._m(1),a("h3",[e._v("Ecosystem")]),e._m(2)])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),a("br"),e._v("\n    check out the\n    "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],c={name:"HelloWorld",props:{msg:String}},u=c,i=(a("9a84"),a("2877")),l=Object(i["a"])(u,s,o,!1,null,"574af232",null);l.options.__file="HelloWorld.vue";var f=l.exports,d={name:"home",components:{HelloWorld:f}},b=d,h=Object(i["a"])(b,n,r,!1,null,null,null);h.options.__file="Home.vue";t["default"]=h.exports},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.0ecd904a.js.map