(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aab0a"],{"11a5":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("br"),s("v-container",{staticClass:"via-container",attrs:{id:"divRegistrarse",fluid:""}},[s("v-card",{staticClass:"elevation-4"},[s("v-toolbar",{attrs:{height:"30",dark:"",color:"indigo"}},[s("v-spacer"),s("v-toolbar-title",{staticClass:"align-end"},[t._v("Gestión Usuario")]),s("v-spacer")],1),s("v-card-text",[s("v-form",{ref:"formulario"},[s("v-layout",{attrs:{row:"",wrap:""}},[s("via-lbl-frm",{staticClass:"xs12 md1 miCol",attrs:{titulo:"Cliente",required:"true"}}),s("v-flex",{attrs:{xs12:"",md5:""}},[s("v-select",{staticClass:"text-truncate",attrs:{clearable:"",items:t.clientes_azure,rules:[function(t){return!!t||"Cliente requerido"}],"item-text":"companyProfile.companyName","item-value":"id",height:"25","background-color":"blue lighten-3",color:"#81D4FA",required:""},model:{value:t.usuario.cliente_id,callback:function(e){t.$set(t.usuario,"cliente_id",e)},expression:"usuario.cliente_id"}})],1),s("via-lbl-frm",{staticClass:"xs12 md1 miCol",attrs:{titulo:"Rol",required:"true"}}),s("v-flex",{attrs:{xs12:"",md5:""}},[s("v-select",{attrs:{items:["Administrador","Técnico","Cliente"],label:"Seleccione el rol",clearable:""},model:{value:t.usuario.rol,callback:function(e){t.$set(t.usuario,"rol",e)},expression:"usuario.rol"}})],1),s("via-lbl-frm",{staticClass:"xs12 md1 miCol",attrs:{titulo:"Descripción",required:"false"}}),s("v-flex",{attrs:{xs12:"",md3:""}},[s("v-text-field",{staticClass:"mr-3",attrs:{solo:"",type:"text"},model:{value:t.usuario.descripcion,callback:function(e){t.$set(t.usuario,"descripcion",e)},expression:"usuario.descripcion"}})],1),s("via-lbl-frm",{staticClass:"xs12 md1 miCol",attrs:{titulo:"Correo",required:"false"}}),s("v-flex",{attrs:{xs12:"",md2:""}},[s("v-text-field",{staticClass:"mr-3",attrs:{solo:"",type:"text"},model:{value:t.usuario.correo,callback:function(e){t.$set(t.usuario,"correo",e)},expression:"usuario.correo"}})],1),s("via-lbl-frm",{staticClass:"xs12 md1 miCol",attrs:{titulo:"Teléfono",required:"false"}}),s("v-flex",{attrs:{xs12:"",md2:""}},[s("v-text-field",{staticClass:"mr-3",attrs:{solo:"",type:"text"},model:{value:t.usuario.telefono,callback:function(e){t.$set(t.usuario,"telefono",e)},expression:"usuario.telefono"}})],1),s("via-lbl-frm",{staticClass:"xs12 md1 miCol",attrs:{titulo:"Margen (%)",required:"true"}}),s("v-flex",{attrs:{md1:"",xs12:""}},[s("v-text-field",{staticClass:"mr-3",attrs:{solo:"",required:"",type:"number",rules:[function(t){return!!t||"Escriba el margen"}]},model:{value:t.usuario.margen,callback:function(e){t.$set(t.usuario,"margen",e)},expression:"usuario.margen"}})],1),s("via-lbl-frm",{staticClass:"xs12 md1 miCol",attrs:{titulo:"Tiempo de suscripción",required:"false"}}),s("v-flex",{attrs:{xs12:"",md2:""}},[s("v-text-field",{staticClass:"mr-3",attrs:{solo:"",type:"text"},model:{value:t.usuario.tiempo_suscripcion,callback:function(e){t.$set(t.usuario,"tiempo_suscripcion",e)},expression:"usuario.tiempo_suscripcion"}})],1),s("via-lbl-frm",{staticClass:"xs12 md1 miCol",attrs:{titulo:"Tiempo vigencia margen",required:"false"}}),s("v-flex",{attrs:{xs12:"",md2:""}},[s("v-text-field",{staticClass:"mr-3",attrs:{solo:"",type:"text"},model:{value:t.usuario.tiempo_vigencia_margen,callback:function(e){t.$set(t.usuario,"tiempo_vigencia_margen",e)},expression:"usuario.tiempo_vigencia_margen"}})],1),s("via-lbl-frm",{staticClass:"xs12 md1 miCol",attrs:{titulo:"Alerta consumo"}}),s("v-flex",{attrs:{md1:"",xs12:""}},[s("v-text-field",{staticClass:"mr-3",attrs:{solo:"",required:"",type:"number"},model:{value:t.usuario.alerta_consumo,callback:function(e){t.$set(t.usuario,"alerta_consumo",e)},expression:"usuario.alerta_consumo"}})],1)],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("via-lbl-frm",{staticClass:"xs12 md1 miCol",attrs:{titulo:"Usuario",required:"true"}}),s("v-flex",{attrs:{xs12:"",md3:""}},[s("v-text-field",{staticClass:"mr-3",attrs:{solo:"",required:"",xs12:"",md4:"",type:"text"},model:{value:t.usuario.usuario,callback:function(e){t.$set(t.usuario,"usuario",e)},expression:"usuario.usuario"}})],1),t.disable?t._e():s("via-lbl-frm",{staticClass:"xs12 md1 miCol",attrs:{titulo:"Contraseña",required:"true"}}),t.disable?t._e():s("v-flex",{attrs:{xs12:"",md3:""}},[s("v-text-field",{staticClass:"mr-3",attrs:{rules:[function(t){return!!t||"Requerido"}],type:t.show1?"text":"password",name:"input-10-1",counter:"",solo:""},model:{value:t.pwd1,callback:function(e){t.pwd1=e},expression:"pwd1"}})],1),t.disable?t._e():s("via-lbl-frm",{staticClass:"xs12 md1 miCol",attrs:{titulo:"Confirme contraseña",required:"false"}}),t.disable?t._e():s("v-flex",{attrs:{xs12:"",md3:""}},[s("v-text-field",{staticClass:"mr-3",attrs:{rules:[function(t){return!!t||"Requerido"}],type:t.show2?"text":"password",name:"input-10-1",counter:"",solo:""},model:{value:t.pwd2,callback:function(e){t.pwd2=e},expression:"pwd2"}})],1)],1),s("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[t.disable?s("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.editarMisDatos("modificar")}}},[s("img",{attrs:{src:"static/image/save.png",height:"25"}}),t._v(" Guardar\n                        ")]):s("v-btn",{attrs:{color:"success"},on:{click:t.registrar_usuario}},[s("img",{attrs:{src:"static/image/save.png",height:"25"}}),t._v(" Registrarse\n                        ")])],1)],1)],1)],1)],1)],1)},r=[],i=s("bc3a"),o=s("5c07"),l=s("8237"),u="https://api.partnercenter.microsoft.com/v1/",c="https://apicps.azurewebsites.net/rs/usuario/",n=JSON.parse(localStorage.getItem("token")),m=[],d=n["access_token"];function f(t){for(var e=m.length-1;e>=0;e--){var s=m[e];if(s["id"]===t)return s}}var v={data(){return{usuario:{},pwd1:"",pwd2:"",clientes_azure:[]}},methods:{registrar_usuario:function(){if(!1!==this.$refs.formulario.validate())if(this.pwd1===this.pwd2){var t=this.usuario,e=l.create();e.update(this.pwd1);var s=Object.assign({},t),a=f(s["cliente_id"]);s["pwd"]=e.hex(),s["nombre_cliente"]=a["companyProfile"]["companyName"],console.log("toSend"),console.log(JSON.stringify(s)),i.post(c+"insertar-usuario",s).then(function(t){console.log(t),alert("OK")})}else o.error("La contraseña no coincide con la repetición de la misma.")}},created(){var t=this;i.get(u+"customers",{headers:{Authorization:"Bearer "+d,accept:"application/json"}}).then(function(e){console.log("customers"),console.log(e),t.clientes_azure=e.data.items,m=e.data.items.slice(0)}).catch(function(t){console.log("error "+t)})}},p=v,x=s("2877"),b=Object(x["a"])(p,a,r,!1,null,null,null);b.options.__file="gestionar.vue";e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0aab0a.5476cfc3.js.map