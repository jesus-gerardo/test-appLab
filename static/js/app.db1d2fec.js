(function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],d=0,v=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&v.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0d35":function(t,e,a){},"4cb6":function(t,e,a){"use strict";a("0d35")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=(a("d3b7"),a("bc3a")),o=a.n(n),s=a("5530"),i=a("8c4f"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-card",{attrs:{elevation:"5",width:"400"}},[a("v-card-title",{staticClass:"justify-center",attrs:{"primary-title":""}},[t._v("Inicio de sesión")]),a("v-card-text",[a("v-form",{ref:"login"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Email",dense:"",rules:[t.rules.required,t.rules.email]},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Password",type:"password",dense:"",rules:[t.rules.required]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary"}},[t._v("Register")]),a("v-spacer"),a("v-btn",{attrs:{color:"success"},on:{click:t.login}},[t._v("Sign in")])],1)],1)],1),a("v-overlay",{attrs:{value:t.overlay,"z-index":9999}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)},c=[],u=a("1da1"),d=(a("96cf"),a("498a"),a("ac1f"),a("00b4"),{data:function(){return{rules:{required:function(t){return(t||0===t)&&("string"!=typeof t||""!=t.trim())||"El campo es requerido"},email:function(t){return 0==(t||"").length||(/.+@.+\..+/.test(t)||"Correo no válido")},numeric:function(t){return/^[0-9]+$/.test(t)||"El campo solo acepta números"}}}},methods:{}}),v={name:"Login",mixins:[d],data:function(){return{email:null,password:null,overlay:!1}},methods:{login:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,a=t.$refs.login.validate(),a){e.next=4;break}return e.abrupt("return",!1);case 4:return t.overlay=!0,r=new FormData,r.append("email",t.email),r.append("password",t.password),e.next=10,t.$axios.post("/auth/login",r);case 10:if(n=e.sent,o=n.data,t.overlay=!1,o.response){e.next=15;break}return e.abrupt("return");case 15:localStorage.setItem("token","Bearer ".concat(o.token)),t.$router.push({name:"admin"}),e.next=23;break;case 19:e.prev=19,e.t0=e["catch"](0),t.overlay=!1,console.error(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,19]])})))()}}},m=v,p=a("2877"),f=a("6544"),b=a.n(f),h=a("8336"),g=a("b0af"),x=a("99d9"),w=a("62ad"),_=a("a523"),y=a("4bd4"),C=a("a722"),V=a("a797"),k=a("490a"),O=a("0fd9"),j=a("2fa4"),R=a("8654"),A=Object(p["a"])(m,l,c,!1,null,null,null),$=A.exports;b()(A,{VBtn:h["a"],VCard:g["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:w["a"],VContainer:_["a"],VForm:y["a"],VLayout:C["a"],VOverlay:V["a"],VProgressCircular:k["a"],VRow:O["a"],VSpacer:j["a"],VTextField:R["a"]});var S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{attrs:{app:"","mini-variant":t.mini,permanent:"","expand-on-hover":""},on:{"update:miniVariant":function(e){t.mini=e},"update:mini-variant":function(e){t.mini=e}},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",{staticClass:"px-2"},[a("v-list-item-avatar",[a("v-img",{attrs:{src:"https://randomuser.me/api/portraits/men/85.jpg"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Admin")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-exit-to-app")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:""}},[t._l(t.items,(function(e){return[e.children.length<=0?[a("v-list-item",{key:e.title,attrs:{link:""},on:{click:function(a){return t.routerTo(e.name)}}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)]:[a("v-list-group",{key:e.title,attrs:{"prepend-icon":e.icon,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)]},proxy:!0}],null,!0)},t._l(e.children,(function(e,r){return a("v-list-item",{key:r,on:{click:function(a){return t.routerTo(e.name)}}},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)})),1)]]}))],2)],1),a("v-main",{staticClass:"pa-0",attrs:{app:""}},[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1)],1)},L=[],P=a("2f62"),E={data:function(){return{drawer:!0,mini:!0,items:[{title:"Administradores",icon:"mdi-home",name:"administradores",children:[]}]}},beforeMount:function(){},computed:Object(s["a"])({},Object(P["c"])({user:function(t){return t.user}})),methods:Object(s["a"])(Object(s["a"])({},Object(P["b"])(["getUser"])),{},{routerTo:function(t){this.$router.push({name:t})}})},I=E,F=a("7496"),T=a("ce7e"),U=a("132d"),D=a("adda"),q=a("8860"),z=a("56b0"),B=a("da13"),M=a("8270"),N=a("5d23"),G=a("34c3"),J=a("f6c4"),H=a("f774"),K=Object(p["a"])(I,S,L,!1,null,null,null),Q=K.exports;function W(t){var e=t.next;return localStorage.getItem("token")?e():e({name:"login"})}b()(K,{VApp:F["a"],VBtn:h["a"],VContainer:_["a"],VDivider:T["a"],VIcon:U["a"],VImg:D["a"],VList:q["a"],VListGroup:z["a"],VListItem:B["a"],VListItemAvatar:M["a"],VListItemContent:N["a"],VListItemIcon:G["a"],VListItemTitle:N["b"],VMain:J["a"],VNavigationDrawer:H["a"]});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-breadcrumbs",{attrs:{items:t.bread},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])}),a(t.listaPage[t.page].component,{tag:"component",attrs:{row:t.context},on:{page:t.change}})],1)},Y=[],Z=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{flat:"",dense:""}},[a("v-card-title",{attrs:{"primary-title":""}},[t._v(" Administradores de la consola ")]),a("v-toolbar",{attrs:{flat:"",dense:""}},[a("v-text-field",{staticClass:"mt-7 mr-2",attrs:{label:"Buscar",outlined:"",dense:"","prepend-inner-icon":"mdi-magnify"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("v-btn",{staticClass:"text-caption mr-2",on:{click:function(e){return t.getDataFromApi()}}},[t._v(" Buscar")]),a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":300,"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"mr-2",attrs:{color:"success"}},"v-btn",n,!1),r),[a("v-icon",[t._v("mdi-filter-outline")])],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-card",[a("v-card-title",{staticClass:"text-overline",attrs:{"primary-title":""}},[t._v(" Filtros de búsqueda ")]),a("v-card-text",[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-select",{attrs:{items:t.areas,label:"Áreas",outlined:"",dense:"","item-value":"id","item-text":"nombre"},model:{value:t.query.area,callback:function(e){t.$set(t.query,"area",e)},expression:"query.area"}})],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-select",{attrs:{items:t.estatus,label:"Estatus",outlined:"",dense:"","item-value":"id","item-text":"name"},model:{value:t.query.estatus,callback:function(e){t.$set(t.query,"estatus",e)},expression:"query.estatus"}})],1)],1)],1),a("v-card-actions",[a("v-btn",{staticClass:"text-caption",attrs:{outlined:""},on:{click:t.clear}},[t._v(" Limpiar ")]),a("v-btn",{staticClass:"text-caption",attrs:{color:"success"},on:{click:function(e){return t.getDataFromApi()}}},[t._v(" aplicar filtro ")])],1)],1)],1),a("v-spacer"),a("v-btn",{staticClass:"text-caption",attrs:{color:"success"},on:{click:function(e){return t.open("form")}}},[t._v(" Agregar nuevo admin ")])],1),a("v-card-text",[a("v-data-table",{attrs:{"calculate-widths":"","fixed-header":"",headers:t.headers,items:t.rows,options:t.options,"server-items-length":t.count,loading:t.loading,flat:""},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.fullname",fn:function(e){var r=e.item;return[a("v-avatar",{staticClass:"mr-2",attrs:{size:"36px"}},[a("img",{attrs:{src:t.$axios.defaults.baseURL+"/administrador/"+r.image,alt:"avatar"}})]),t._v(" "+t._s(r.nombre)+" "+t._s(r.apellidos)+" ")]}},{key:"item.estado",fn:function(e){var r=e.item;return[a("v-chip",{attrs:{color:1==r.estatus?"success":"error"}},[t._v(t._s(1==r.estatus?"Activo":"Inactivo"))])]}},{key:"item.action",fn:function(e){var r=e.item;return[a("v-menu",{attrs:{bottom:"","close-on-click":!0},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{dark:"",icon:""}},"v-btn",n,!1),r),[a("v-icon",t._g({attrs:{color:"grey"}},r),[t._v(" mdi-dots-vertical ")])],1)]}}],null,!0)},[a("v-list",[a("v-list-item",{on:{click:function(e){return t.open("show",r)}}},[a("v-list-item-title",[a("v-icon",{attrs:{color:"blue"}},[t._v(" mdi-pen ")]),t._v(" Editar ")],1)],1),a("v-list-item",{on:{click:function(e){return t.DialogRemove(r)}}},[a("v-list-item-title",[a("v-icon",{attrs:{color:"red"}},[t._v(" mdi-trash-can ")]),t._v(" Eliminar ")],1)],1)],1)],1)]}}],null,!0)})],1),a("v-dialog",{attrs:{width:"350"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.dialog?a("v-card",[a("v-card-title",{staticClass:"text-h5 lighten-2"},[t._v(" Eliminar administrador ")]),a("v-card-text",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[t._v(" ¿Estas seguro de eliminar a este administrador? ")])],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-avatar",{staticClass:"mr-2",attrs:{size:"36px"}},[a("img",{attrs:{src:t.$axios.defaults.baseURL+"/administrador/"+t.admin.image,alt:"avatar"}})])],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[t._v(" "+t._s(t.admin.correo)+" ")])],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("CancelaR")]),a("v-btn",{attrs:{color:"success",text:""},on:{click:t.remove}},[t._v("Eliminar")])],1)],1):t._e()],1),a("v-overlay",{attrs:{value:t.overlay,"z-index":9999}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)}),tt=[],et=(a("841c"),a("e9c4"),a("99af"),{name:"PageMain",props:["row"],data:function(){return{query:{name:null,area:null,estatus:null},search:"",loading:!0,count:0,rows:[],options:{},menu:!1,headers:[{text:"Administrador",value:"fullname",sortable:!1},{text:"Área",value:"area.nombre"},{text:"Correo electrico",value:"correo"},{text:"Estatus",value:"estado",sortable:!1},{text:"Detalles",value:"action",sortable:!1}],dialog:!1,admin:null,overlay:!1}},computed:Object(s["a"])({},Object(P["c"])({areas:function(t){return t.areas},estatus:function(t){return t.estatus}})),watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},beforeMount:function(){this.getAreas()},methods:Object(s["a"])(Object(s["a"])({},Object(P["b"])(["getAreas"])),{},{getDataFromApi:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,r,n,o,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.menu=!1,t.loading=!0,t.overlay=!0,a=t.options,r=a.page,n=a.itemsPerPage,t.query.name=""==t.search.trim()?null:t.search,o=JSON.stringify(t.query),e.next=9,t.$axios.get("/administrador?query=".concat(o,"&limit=").concat(n,"&page=").concat(r));case 9:s=e.sent,i=s.data,t.overlay=!1,t.rows=i.data,t.count=i.count,t.loading=!1,e.next=22;break;case 17:e.prev=17,e.t0=e["catch"](0),t.overlay=!1,t.loading=!1,console.error(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,17]])})))()},open:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.$emit("page",{page:t,row:e})},clear:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(a in t.query)t.query[a]=null;return t.menu=!1,e.next=4,t.getDataFromApi();case 4:case"end":return e.stop()}}),e)})))()},DialogRemove:function(t){this.admin=t,this.dialog=!0},remove:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.overlay=!0,e.next=4,t.$axios.delete("administrador/".concat(t.admin.id,"/delete"));case 4:if(a=e.sent,r=a.data,t.overlay=!1,t.dialog=!1,!r.response){e.next=12;break}return e.next=11,t.getDataFromApi();case 11:return e.abrupt("return");case 12:e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](0),t.overlay=!1,console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))()}})}),at=et,rt=a("8212"),nt=a("cc20"),ot=a("8fea"),st=a("169a"),it=a("e449"),lt=a("b974"),ct=a("71d9"),ut=Object(p["a"])(at,Z,tt,!1,null,null,null),dt=ut.exports;b()(ut,{VAvatar:rt["a"],VBtn:h["a"],VCard:g["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VChip:nt["a"],VCol:w["a"],VDataTable:ot["a"],VDialog:st["a"],VDivider:T["a"],VIcon:U["a"],VList:q["a"],VListItem:B["a"],VListItemTitle:N["b"],VMenu:it["a"],VOverlay:V["a"],VProgressCircular:k["a"],VRow:O["a"],VSelect:lt["a"],VSpacer:j["a"],VTextField:R["a"],VToolbar:ct["a"]});var vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{dense:""}},[a("v-card-title",{attrs:{"primary-title":""}},[t._v(" Perfil del administrador ")]),a("v-card-text",[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-avatar",{attrs:{size:"60px"}},[a("img",{attrs:{src:t.$axios.defaults.baseURL+"/administrador/"+t.row.image,alt:"avatar"}})])],1),a("v-col",{staticClass:"text-h6",attrs:{cols:"12"}},[t._v(" Nombre del administrador ")])],1),a("v-row",{staticClass:"mt-3"},[a("v-col",{attrs:{cols:"4",sm:"12",md:"6",lg:"4"}},[a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"text-body-2",attrs:{cols:"12"}},[t._v(" NOMBRES(s) ")]),a("v-col",{staticClass:"text-body-1",attrs:{cols:"12"}},[t._v(" "+t._s(t.row.nombre)+" ")])],1)],1),a("v-col",{attrs:{cols:"4",sm:"12",md:"6",lg:"4"}},[a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"text-body-2",attrs:{cols:"12"}},[t._v(" APELLIDOS ")]),a("v-col",{staticClass:"text-body-1",attrs:{cols:"12"}},[t._v(" "+t._s(t.row.apellidos)+" ")])],1)],1),a("v-col",{attrs:{cols:"4",sm:"12",md:"6",lg:"4"}},[a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"text-body-2",attrs:{cols:"12"}},[t._v(" CORREO ELECTRÓNICO ")]),a("v-col",{staticClass:"text-body-1",attrs:{cols:"12"}},[t._v(" "+t._s(t.row.correo)+" ")])],1)],1),a("v-col",{attrs:{cols:"4",sm:"12",md:"6",lg:"4"}},[a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"text-body-2",attrs:{cols:"12"}},[t._v(" ÁREA ")]),a("v-col",{staticClass:"text-body-1",attrs:{cols:"12"}},[t._v(" "+t._s(t.row.area.nombre)+" ")])],1)],1),a("v-col",{attrs:{cols:"4",sm:"12",md:"6",lg:"4"}},[a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"text-body-2",attrs:{cols:"12"}},[t._v(" ESTATUS ")]),a("v-col",{staticClass:"text-body-1",attrs:{cols:"12"}},[t._v(" "+t._s(1==t.row.estatus?"Activo":"Inactivo")+" ")])],1)],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-divider")],1)],1)],1),a("v-card-actions",[a("v-btn",{staticClass:"text-caption",attrs:{color:"success"},on:{click:function(e){return t.open("form")}}},[t._v(" Editar administrador ")])],1)],1)},mt=[],pt={name:"PageShow",props:["row"],methods:{open:function(t){this.$emit("page",{page:t,row:this.row})}}},ft=pt,bt=Object(p["a"])(ft,vt,mt,!1,null,null,null),ht=bt.exports;b()(bt,{VAvatar:rt["a"],VBtn:h["a"],VCard:g["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:w["a"],VDivider:T["a"],VRow:O["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{dense:""}},[a("v-card-title",{attrs:{"primary-title":""}},[t._v(" "+t._s(0==t.action?"Agregar administrador":"Editar administrador")+" ")]),a("v-card-text",[a("v-form",{ref:"admin"},[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[t.load?a("Croopie",{ref:"crop",attrs:{onLoadImage:t.onLoadImage,namePhoto:t.namePhoto,_src:t.$axios.defaults.baseURL+"/administrador/"}}):t._e()],1)],1),a("v-row",{staticClass:"mt-3"},[a("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"4"}},[a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"text-body-2",attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Nombre(s)",outlined:"",dense:"",rules:[t.rules.required]},model:{value:t.form.nombre,callback:function(e){t.$set(t.form,"nombre",e)},expression:"form.nombre"}})],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"4"}},[a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"text-body-2",attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Apellidos",outlined:"",dense:"",rules:[t.rules.required]},model:{value:t.form.apellidos,callback:function(e){t.$set(t.form,"apellidos",e)},expression:"form.apellidos"}})],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"4"}},[a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"text-body-2",attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Correo electrónico",outlined:"",dense:"",rules:[t.rules.required,t.rules.email]},model:{value:t.form.correo,callback:function(e){t.$set(t.form,"correo",e)},expression:"form.correo"}})],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"4"}},[a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"text-body-2",attrs:{cols:"12"}},[a("v-select",{attrs:{items:t.areas,label:"Área",outlined:"",dense:"","item-value":"id","item-text":"nombre",rules:[t.rules.required]},model:{value:t.form.area_id,callback:function(e){t.$set(t.form,"area_id",e)},expression:"form.area_id"}})],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"4"}},[a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"text-body-2",attrs:{cols:"12"}},[a("v-select",{attrs:{items:t.estatus,label:"Estatus",outlined:"",dense:"","item-value":"id","item-text":"name",rules:[t.rules.required]},model:{value:t.form.estatus,callback:function(e){t.$set(t.form,"estatus",e)},expression:"form.estatus"}})],1)],1)],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-divider")],1)],1)],1)],1),a("v-card-actions",[a("v-btn",{staticClass:"text-caption",attrs:{color:""},on:{click:function(e){return t.open("main")}}},[t._v(" Cancelar ")]),a("v-btn",{staticClass:"text-caption",attrs:{color:"success"},on:{click:t.store}},[t._v(" "+t._s(0==t.action?"Agregar administrador":"Guardar cambios")+" ")])],1),a("v-overlay",{attrs:{value:t.overlay,"z-index":9999}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)},xt=[],wt=(a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[null===t.cropped&&null==t.photo?[a("v-row",{staticClass:"pa-0"},[a("v-col",{attrs:{cols:"12"}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-file-input",{attrs:{label:"Seleccionar imagen",accept:".png, .jpg, .jpeg",counter:"","show-size":"","truncate-length":"10","prepend-icon":"mdi-image-area"},on:{change:t.selectFile},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1),a("v-col",{attrs:{cols:"12 text-center"}},[null==t.photo&&null!=t.photoDefault?a("v-btn",{staticClass:"mt-2",attrs:{color:"danger",small:""},on:{click:function(e){t.photo=t.photoDefault}}},[t._v("Cancelar ")]):t._e()],1)],1)],1),null!=t.file?a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("vue-croppie",{ref:"croppieRef",staticStyle:{height:"auto",width:"100% !important",overflow:"auto","border-radius":"5px"},attrs:{enableOrientation:!0,boundary:{width:200,height:200}}})],1):t._e(),null!=t.file?a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",small:""},on:{click:function(e){return t.rotate(90)}}},[a("v-icon",t._g({},r),[t._v(" mdi-rotate-left ")])],1)]}}],null,!1,1702168252)},[a("span",[t._v("Girar a la izquierda")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",small:""},on:{click:function(e){return t.crop()}}},[a("v-icon",t._g({},r),[t._v(" mdi-crop ")])],1)]}}],null,!1,301404099)},[a("span",[t._v("Cortar")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",small:""},on:{click:function(e){return t.rotate(-90)}}},[a("v-icon",t._g({},r),[t._v(" mdi-rotate-right ")])],1)]}}],null,!1,4263761962)},[a("span",[t._v("Girar a la derecha")])])],1):t._e()],1)]:[a("v-card",{attrs:{outlined:"",tile:""}},[a("v-row",{staticClass:"justify-center pa-0"},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("div",{staticClass:"grey--text"},[t._v(" "+t._s(t.titulo)+" ")])]),a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("v-avatar",{attrs:{size:"150"}},[null===t.cropped?a("img",{attrs:{src:""+t._src+t.photo,alt:"photo"}}):a("img",{attrs:{src:t.cropped,alt:"alt"}})])],1)],1),a("v-card-text",[a("v-row",{staticClass:"justify-center"},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-file-input",t._g({attrs:{"hide-input":!1,"truncate-length":"1",label:"Seleccionar imagen",accept:".png, .jpg, .jpeg","prepend-icon":"mdi-camera"},on:{change:function(e){t.changeFile(),t.selectFile}},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},r))]}}])},[a("span",[t._v(" "+t._s(t.descripcion_actualizar)+" ")])])],1)],1)],1)],1)]],2)}),_t=[],yt=(a("1276"),a("81b2"),a("0eb6"),a("b7ef"),a("8bd4"),a("fb6a"),a("5cc6"),a("907a"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("7399"));a("dee1");r["a"].use(yt["a"]);var Ct={name:"Croppie",props:{onLoadImage:{type:Function,default:null},namePhoto:{type:String,default:null},_src:{type:String,default:"/admin/elemento/image/"},titulo:{type:String,default:"Foto de perfil"},descripcion_actualizar:{type:String,default:"Actualizar foto de perfil"}},data:function(){return{cropped:null,file:null,fileUpdated:!1,fileName:"",fileCrop:null,photo:null,photoDefault:null}},created:function(){this.photo=this.namePhoto,this.photoDefault=this.namePhoto},methods:{crop:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={type:"base64",size:t.size_img,format:t.format_img},e.next=3,t.$refs.croppieRef.result(a,(function(e){t.cropped=e}));case 3:fetch(t.cropped).then((function(t){return t.blob()})).then((function(e){t.fileCrop=e})),r=t.convertFile(),t.onLoadImage(r),t.fileUpdated=!0;case 7:case"end":return e.stop()}}),e)})))()},rotate:function(t){this.$refs.croppieRef.rotate(t)},convertFile:function(){if(null==this.cropped)return null;var t=this.cropped.split(",")[1],e=this.b64toBlob(t,"image/png");return new File([e],"fotografia.png",{type:"image/".concat(this.format_img)})},b64toBlob:function(t,e,a){e=e||"",a=a||512;for(var r=atob(t),n=[],o=0;o<r.length;o+=a){for(var s=r.slice(o,o+a),i=new Array(s.length),l=0;l<s.length;l++)i[l]=s.charCodeAt(l);var c=new Uint8Array(i);n.push(c)}return new Blob(n,{type:e})},selectFile:function(t){var e=this;try{if(void 0===t)return this.file=null,this.fileUpdated=!1,!1;var a=URL.createObjectURL(t);this.fileUpdated=!0,this.fileName=t.name,setTimeout((function(){e.$refs.croppieRef.bind({url:a})}),500)}catch(r){console.log(r)}},upload_file:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function a(){var r,n,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,fetch(t).then((function(t){return t.blob()}));case 2:r=a.sent,n=new FileReader,n.readAsDataURL(r),n.onloadend=function(){var t=n.result;e.cropped=t},o=new File([r],"",{type:r.type}),e.file=o,e.fileCrop=r,e.fileUpdated=!1;case 10:case"end":return a.stop()}}),a)})))()},changeFile:function(){var t=this;if(this.fileUpdated=!0,this.cropped=null,this.fileCrop=null,this.photo=null,null!==this.file){var e=URL.createObjectURL(this.file);setTimeout((function(){t.$refs.croppieRef.bind({url:e})}),500)}},clean:function(){this.cropped=null,this.file=null,this.fileUpdated=!1,this.fileName="",this.fileCrop=null}}},Vt=Ct,kt=(a("4cb6"),a("23a7")),Ot=a("3a2f"),jt=Object(p["a"])(Vt,wt,_t,!1,null,"40380e68",null),Rt=jt.exports;b()(jt,{VAvatar:rt["a"],VBtn:h["a"],VCard:g["a"],VCardText:x["b"],VCol:w["a"],VContainer:_["a"],VFileInput:kt["a"],VIcon:U["a"],VRow:O["a"],VTooltip:Ot["a"]});var At={name:"PageForm",props:["row"],mixins:[d],components:{Croopie:Rt},data:function(){return{action:0,load:!1,form:{id:null,nombre:null,apellidos:null,correo:null,area_id:null,estatus:null},file:null,namePhoto:"no-imagen.png",overlay:!1}},mounted:function(){this.action=0,null!=this.row&&(this.action=1,this.form=Object.assign({},this.row),this.namePhoto=this.form.image),this.load=!0},computed:Object(s["a"])({},Object(P["c"])({areas:function(t){return t.areas},estatus:function(t){return t.estatus}})),beforeMount:function(){this.getAreas()},methods:Object(s["a"])(Object(s["a"])({},Object(P["b"])(["getAreas"])),{},{open:function(t){this.$emit("page",{page:t,row:null})},onLoadImage:function(t){try{this.file=t,this.urlPhoto=URL.createObjectURL(t),this.$refs.crop.upload_file(this.urlPhoto)}catch(e){console.error(e)}},store:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,r,n,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,a=t.$refs.admin.validate(),a){e.next=4;break}return e.abrupt("return",!1);case 4:for(n in t.overlay=!0,r=new FormData,null!=t.form.id&&delete t.form.id,t.form)r.append(n,t.form[n]);return null!=t.file&&r.append("upload",t.file),e.next=11,t.$axios.post("administrador/store",r);case 11:if(o=e.sent,s=o.data,t.overlay=!1,s.response){e.next=16;break}return e.abrupt("return");case 16:t.open("main"),e.next=23;break;case 19:e.prev=19,e.t0=e["catch"](0),t.overlay=!1,console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,19]])})))()}})},$t=At,St=Object(p["a"])($t,gt,xt,!1,null,null,null),Lt=St.exports;b()(St,{VBtn:h["a"],VCard:g["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:w["a"],VDivider:T["a"],VForm:y["a"],VOverlay:V["a"],VProgressCircular:k["a"],VRow:O["a"],VSelect:lt["a"],VTextField:R["a"]});var Pt={name:"Administradores",data:function(){return{page:"main",listaPage:{main:{component:dt},show:{component:ht},form:{component:Lt}},bread:[{text:"Inicio",disabled:!0,href:""},{text:this.$route.name,disabled:!1,href:"#"}],context:null}},methods:{change:function(t){this.context=t.row,this.page=t.page}}},Et=Pt,It=a("2bc5"),Ft=Object(p["a"])(Et,X,Y,!1,null,null,null),Tt=Ft.exports;b()(Ft,{VBreadcrumbs:It["a"],VIcon:U["a"]}),r["a"].use(i["a"]);var Ut=[{path:"/",name:"login",component:$},{path:"/admin",component:Q,redirect:"/admin/administradores",name:"admin",children:[{path:"administradores",name:"administradores",component:Tt,meta:{middleware:W}}]}],Dt=new i["a"]({mode:"history",base:"/",routes:Ut});Dt.beforeEach((function(t,e,a){if(t.meta.middleware){var r=t.meta.middleware,n={to:t,from:e,next:a};return r(Object(s["a"])({},n))}return a()}));var qt=Dt,zt={baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).URL_API||"http://127.0.0.1:5000"},Bt=o.a.create(zt);Bt.interceptors.request.use((function(t){return localStorage.getItem("token")&&(t.headers["Authorization"]=localStorage.getItem("token")),t}),(function(t){return 401==t.response.status&&qt.push({name:"login"}),Promise.reject(t)})),Bt.interceptors.response.use((function(t){return t}),(function(t){return 401==t.response.status&&qt.push({name:"login"}),Promise.reject(t)})),window.axios=Bt,r["a"].prototype.$axios=Bt;var Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("router-view")],1)],1)},Nt=[],Gt={name:"App",data:function(){return{}}},Jt=Gt,Ht=Object(p["a"])(Jt,Mt,Nt,!1,null,null,null),Kt=Ht.exports;b()(Ht,{VApp:F["a"],VMain:J["a"]});var Qt=a("f309");r["a"].use(Qt["a"]);var Wt=new Qt["a"]({});r["a"].use(P["a"]);var Xt=new P["a"].Store({state:{user:null,areas:[],estatus:[{id:0,name:"Inactivo"},{id:1,name:"Activos"}]},mutations:{getUser:function(t,e){t.user=e},getAreas:function(t,e){t.areas=e}},actions:{getUser:function(t){return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.axios.get("auth/user");case 3:a=e.sent,r=a.data,t.commit("getUser",r),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.error(e.t0),t.commit("getUser",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getAreas:function(t){return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.axios.get("areas");case 3:a=e.sent,r=a.data,t.commit("getAreas",r),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.error(e.t0),t.commit("getAreas",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:qt,vuetify:Wt,store:Xt,render:function(t){return t(Kt)}}).$mount("#app")}});
//# sourceMappingURL=app.db1d2fec.js.map