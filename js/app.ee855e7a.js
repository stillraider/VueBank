(function(e){function t(t){for(var r,u,o=t[0],s=t[1],i=t[2],l=0,d=[];l<o.length;l++)u=o[l],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c=[];function u(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a4783":"fdbcbbbd","chunk-2d0be70b":"9ca09cd6","chunk-2d216dc7":"3e8886ff"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=u(e);var i=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",i.name="ChunkLoadError",i.type=r,i.request=c,n[1](i)}a[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var b=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0aeb":function(e,t,n){"use strict";var r=n("7a23");function a(e,t,n,a,c,u){return Object(r["u"])(),Object(r["e"])("span",{class:["badge",c.className]},Object(r["D"])(c.text),3)}var c={props:{type:{type:String,required:!0}},data:function(){var e={active:"primary",cancelled:"danger",done:"primary",pending:"warning"},t={active:"Активен",cancelled:"Отменен",done:"Завершен",pending:"Выполняется"},n=e[this.type],r=t[this.type];return{className:n,text:r,classesMap:e,textMap:t}},watch:{type:function(e){this.className=this.classesMap[e],this.text=this.textMap[e]}}};c.render=a;t["a"]=c},"1da6":function(e,t,n){"use strict";var r=n("7a23"),a={key:0,class:"breadcrumbs"},c=Object(r["h"])("Вернуться к заявкам"),u={class:"card"},o={class:"card-title"};function s(e,t,n,s,i,l){var b=Object(r["A"])("router-link");return Object(r["u"])(),Object(r["e"])(r["a"],null,[n.back?(Object(r["u"])(),Object(r["e"])("div",a,[Object(r["i"])(b,{to:"/"},{default:Object(r["K"])((function(){return[c]})),_:1})])):Object(r["f"])("",!0),Object(r["i"])("div",u,[Object(r["i"])("h1",o,[Object(r["h"])(Object(r["D"])(n.title)+" ",1),Object(r["z"])(e.$slots,"header")]),Object(r["z"])(e.$slots,"default")])],64)}var i={props:{title:{type:String,required:!0},back:{type:Boolean,default:!1}},data:function(){var e=document.title="".concat(this.title," | Клон Банка");return{heading:e}}};i.render=s;t["a"]=i},"3f9b":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=new Intl.NumberFormat("ru-RU",{currency:"RUB",style:"currency"});function a(e){return r.format(e)}},"441a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,u){return Object(r["u"])(),Object(r["e"])(Object(r["B"])(u.layout+"-layout"))}var c={class:"container"};function u(e,t,n,a,u,o){var s=Object(r["A"])("AppMessage"),i=Object(r["A"])("router-view");return Object(r["u"])(),Object(r["e"])("div",c,[Object(r["i"])(s),Object(r["i"])(i)])}var o={key:0,class:"aletr-title"};function s(e,t,n,a,c,u){return u.message?(Object(r["u"])(),Object(r["e"])("div",{key:0,class:["alert",u.message.type]},[u.title?(Object(r["u"])(),Object(r["e"])("p",o,Object(r["D"])(u.title),1)):Object(r["f"])("",!0),Object(r["i"])("p",null,Object(r["D"])(u.message.value),1),Object(r["i"])("span",{class:"alert-close",onClick:t[1]||(t[1]=function(){return u.close&&u.close.apply(u,arguments)})},"×")],2)):Object(r["f"])("",!0)}var i=n("5502"),l={data:function(){var e=Object(i["b"])(),t={primary:"Успешно!",danger:"Ошибка!",warning:"Внимание!"};return{TITLE_MAP:t,store:e}},methods:{close:function(){this.store.commit("clearMessage")}},computed:{message:function(){return this.store.getters.message},title:function(){return this.message.value?this.TITLE_MAP[this.message.type]:""}}};l.render=s;var b=l,d={components:{AppMessage:b}};d.render=u;var p=d,f={class:"container indent-top"};function m(e,t,n,a,c,u){var o=Object(r["A"])("the-navbar"),s=Object(r["A"])("app-message"),i=Object(r["A"])("router-view");return Object(r["u"])(),Object(r["e"])(r["a"],null,[Object(r["i"])(o),Object(r["i"])("div",f,[Object(r["i"])(s),Object(r["i"])(i)])],64)}var j={class:"navbar"},O=Object(r["i"])("h3",null,"Online bank",-1),h={class:"navbar-menu"},v=Object(r["h"])("Заявки"),g=Object(r["h"])("Помощь"),y=Object(r["i"])("li",null,[Object(r["i"])("a",{href:"#"},"Сообщения")],-1);function k(e,t,n,a,c,u){var o=Object(r["A"])("router-link");return Object(r["u"])(),Object(r["e"])("nav",j,[O,Object(r["i"])("ul",h,[Object(r["i"])("li",null,[Object(r["i"])(o,{to:"/"},{default:Object(r["K"])((function(){return[v]})),_:1})]),Object(r["i"])("li",null,[Object(r["i"])(o,{to:"/help"},{default:Object(r["K"])((function(){return[g]})),_:1})]),y,Object(r["i"])("li",null,[Object(r["i"])("a",{href:"#",onClick:t[1]||(t[1]=Object(r["M"])((function(){return u.logout&&u.logout.apply(u,arguments)}),["prevent"]))},"Выход")])])])}var w={methods:{logout:function(){this.$store.commit("auth/logout"),this.$router.push("/auth")}}};w.render=k;var q=w,A={components:{TheNavbar:q,AppMessage:b}};n("e5c8");A.render=m;var x=A,M={computed:{layout:function(){return this.$route.meta.layout}},components:{AuthLayout:p,MainLayout:x}};M.render=a;var R=M,S=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02"));n("4de4");function B(e,t,n,a,c,u){var o=Object(r["A"])("AppLoader"),s=Object(r["A"])("RequestFilter"),i=Object(r["A"])("RequestsTable"),l=Object(r["A"])("RequestModal"),b=Object(r["A"])("app-modal"),d=Object(r["A"])("app-page");return c.loader?(Object(r["u"])(),Object(r["e"])(o,{key:0})):(Object(r["u"])(),Object(r["e"])(d,{key:1,title:"Список заявок"},{header:Object(r["K"])((function(){return[Object(r["i"])("button",{class:"btn primary",onClick:t[1]||(t[1]=function(e){return c.modal=!0})},"Создать")]})),default:Object(r["K"])((function(){return[Object(r["i"])(s,{modelValue:c.filter,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.filter=e})},null,8,["modelValue"]),Object(r["i"])(i,{requests:u.request},null,8,["requests"]),(Object(r["u"])(),Object(r["e"])(r["b"],{to:"body"},[c.modal?(Object(r["u"])(),Object(r["e"])(b,{key:0,title:"Создать заявку",onClose:u.close},{default:Object(r["K"])((function(){return[Object(r["i"])(l,{onCreated:t[3]||(t[3]=function(e){return c.modal=!1})})]})),_:1},8,["onClose"])):Object(r["f"])("",!0)]))]})),_:1}))}var E=n("1da1"),L=(n("96cf"),n("b0c0"),n("caad"),n("2532"),{class:"modal"}),T={key:0};function _(e,t,n,a,c,u){return Object(r["u"])(),Object(r["e"])(r["a"],null,[Object(r["i"])("div",{class:"modal-backdrop",onClick:t[1]||(t[1]=function(t){return e.$emit("close")})}),Object(r["i"])("div",L,[n.title?(Object(r["u"])(),Object(r["e"])("h3",T,Object(r["D"])(n.title),1)):Object(r["f"])("",!0),Object(r["z"])(e.$slots,"default")])],64)}var C={emits:["close"],props:{title:String}};C.render=_;var P=C,D=n("1da6"),V={key:0,class:"text-center"},U={key:1,class:"table"},$=Object(r["i"])("thead",null,[Object(r["i"])("tr",null,[Object(r["i"])("th",null,"#"),Object(r["i"])("th",null,"ФИО"),Object(r["i"])("th",null,"Телефон"),Object(r["i"])("th",null,"Сумма"),Object(r["i"])("th",null,"Статус"),Object(r["i"])("th",null,"Действие")])],-1);function I(e,t,n,a,c,u){var o=Object(r["A"])("AppStatus"),s=Object(r["A"])("router-link");return 0===n.requests.length?(Object(r["u"])(),Object(r["e"])("h3",V,"Заявок пока нет")):(Object(r["u"])(),Object(r["e"])("table",U,[$,Object(r["i"])("tbody",null,[(Object(r["u"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(n.requests,(function(e,t){return Object(r["u"])(),Object(r["e"])("tr",{key:e.id},[Object(r["i"])("td",null,Object(r["D"])(t+1),1),Object(r["i"])("td",null,Object(r["D"])(e.name),1),Object(r["i"])("td",null,Object(r["D"])(e.phone),1),Object(r["i"])("td",null,Object(r["D"])(c.currency(e.amount)),1),Object(r["i"])("td",null,[Object(r["i"])(o,{type:e.status},null,8,["type"])]),Object(r["i"])("td",null,[Object(r["i"])(s,{to:{name:"Request",params:{id:e.id}},custom:""},{default:Object(r["K"])((function(e){var t=e.navigate;return[Object(r["i"])("button",{class:"btn",onClick:t},"Открыть",8,["onClick"])]})),_:2},1032,["to"])])])})),128))])]))}var K=n("3f9b"),N=n("0aeb"),H={props:["requests"],data:function(){return{currency:K["a"]}},components:{currency:K["a"],AppStatus:N["a"]}};H.render=I;var z=H,F=Object(r["i"])("label",{for:"name"},"ФИО",-1),G={key:0},W=Object(r["i"])("label",{for:"phone"},"Телефон",-1),J={key:0},Q=Object(r["i"])("label",{for:"amount"},"Сумма",-1),X={key:0},Y={class:"form-control"},Z=Object(r["i"])("label",{for:"status"},"Статус",-1),ee=Object(r["i"])("option",{value:"done"},"Завершен",-1),te=Object(r["i"])("option",{value:"cancelled"},"Отменен",-1),ne=Object(r["i"])("option",{value:"active"},"Активен",-1),re=Object(r["i"])("option",{value:"pending"},"Выполняется",-1);function ae(e,t,n,a,c,u){return Object(r["u"])(),Object(r["e"])("form",{onSubmit:t[8]||(t[8]=Object(r["M"])((function(){return e.onSubmit&&e.onSubmit.apply(e,arguments)}),["prevent"]))},[Object(r["i"])("div",{class:["form-control",{invalid:e.nError}]},[F,Object(r["L"])(Object(r["i"])("input",{type:"text",id:"name","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.name=t}),onBlur:t[2]||(t[2]=function(){return e.nBlur&&e.nBlur.apply(e,arguments)})},null,544),[[r["H"],e.name]]),e.nError?(Object(r["u"])(),Object(r["e"])("small",G,Object(r["D"])(e.nError),1)):Object(r["f"])("",!0)],2),Object(r["i"])("div",{class:["form-control",{invalid:e.pError}]},[W,Object(r["L"])(Object(r["i"])("input",{type:"text",id:"phone","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.phone=t}),onBlur:t[4]||(t[4]=function(){return e.pBlur&&e.pBlur.apply(e,arguments)})},null,544),[[r["H"],e.phone]]),e.pError?(Object(r["u"])(),Object(r["e"])("small",J,Object(r["D"])(e.pError),1)):Object(r["f"])("",!0)],2),Object(r["i"])("div",{class:["form-control",{invalid:e.aError}]},[Q,Object(r["L"])(Object(r["i"])("input",{type:"number",id:"amount","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.amount=t}),onBlur:t[6]||(t[6]=function(){return e.aBlur&&e.aBlur.apply(e,arguments)})},null,544),[[r["H"],e.amount,void 0,{number:!0}]]),e.aError?(Object(r["u"])(),Object(r["e"])("small",X,Object(r["D"])(e.aError),1)):Object(r["f"])("",!0)],2),Object(r["i"])("div",Y,[Z,Object(r["L"])(Object(r["i"])("select",{id:"status","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.status=t})},[ee,te,ne,re],512),[[r["G"],e.status]])]),Object(r["i"])("button",{class:"btn primary",disabled:e.isSubmitting},"Создать",8,["disabled"])],32)}n("498a");var ce=n("7bb1"),ue=n("506a");function oe(e){var t=0,n={name:ue["a"]().required("Введите ФИО"),phone:ue["a"]().trim().required("Введите номер телефона"),amount:ue["a"]().trim().required("Введите сумму").min(t,"Сумма не может быть меньше ".concat(t))},r=Object(ce["b"])({initialValues:{status:"active"}}),a=r.isSubmitting,c=r.handleSubmit,u=Object(ce["a"])("name",n.name),o=u.value,s=u.errorMessage,i=u.handleBlur,l=Object(ce["a"])("phone",n.phone),b=l.value,d=l.errorMessage,p=l.handleBlur,f=Object(ce["a"])("amount",n.amount),m=f.value,j=f.errorMessage,O=f.handleBlur,h=Object(ce["a"])("status"),v=h.value,g=c(e);return{status:v,isSubmitting:a,onSubmit:g,name:o,nError:s,nBlur:i,phone:b,pError:d,pBlur:p,amount:m,aError:j,aBlur:O}}var se={emits:["created"],data:function(){var e=this,t=function(){var t=Object(E["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("request/create",n);case 2:e.$emit("created");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return oe(t)}};se.render=ae;var ie=se,le=n("ddc6"),be={class:"filter"},de={class:"form-control"},pe={class:"form-control"},fe=Object(r["g"])('<option disabled selected>Выберите статус</option><option value="done">Завершен</option><option value="cancelled">Отменен</option><option value="active">Активен</option><option value="pending">Выполняется</option>',5);function me(e,t,n,a,c,u){return Object(r["u"])(),Object(r["e"])("div",be,[Object(r["i"])("div",de,[Object(r["L"])(Object(r["i"])("input",{type:"text",placeholder:"Введите имя","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.name=e})},null,512),[[r["H"],c.name]])]),Object(r["i"])("div",pe,[Object(r["L"])(Object(r["i"])("select",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.status=e})},[fe],512),[[r["G"],c.status]])]),u.isActive?(Object(r["u"])(),Object(r["e"])("button",{key:0,class:"btn warning",onClick:t[3]||(t[3]=function(){return u.clear&&u.clear.apply(u,arguments)})},"Отчистить")):Object(r["f"])("",!0)])}var je={emits:["update:modelValue"],props:["modalValue"],data:function(){return{name:"",status:null}},computed:{isActive:function(){return this.name||this.status}},methods:{clear:function(){this.name="",this.status=null}},watch:{name:function(e){this.$emit("update:modelValue",{name:e})},status:function(e){this.$emit("update:modelValue",{status:e})}}};je.render=me;var Oe=je,he={data:function(){return{modal:!1,loader:!1,filter:{}}},mounted:function(){this.load()},computed:{request:function(){var e=this;return this.$store.getters["request/requests"].filter((function(t){return e.filter.name?t.name.toLowerCase().includes(e.filter.name.toLowerCase()):t})).filter((function(t){return e.filter.status?e.filter.status===t.status:t}))}},methods:{load:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loader=!0,t.next=3,e.$store.dispatch("request/load");case 3:e.loader=!1;case 4:case"end":return t.stop()}}),t)})))()},close:function(){this.modal=!1}},components:{AppModal:P,AppPage:D["a"],RequestsTable:z,RequestModal:ie,AppLoader:le["a"],RequestFilter:Oe}};he.render=B;var ve=he,ge=n("5530"),ye=n("bc3a"),ke=n.n(ye),we=n("e16f"),qe="jwt-token",Ae={namespaced:!0,state:function(){return{token:localStorage.getItem(qe)}},mutations:{setToken:function(e,t){e.token=t,localStorage.setItem(qe,t)},logout:function(e){e.token=null,localStorage.removeItem(qe)}},actions:{login:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function n(){var r,a,c,u,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,n.prev=1,c="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat("AIzaSyBctRxGBdU3xULxQKPf5W6cllATzXkcmts"),n.next=5,ke.a.post(c,Object(ge["a"])(Object(ge["a"])({},t),{},{returnSecureToken:!0}));case 5:u=n.sent,o=u.data,r("setToken",o.idToken),r("clearMessage",null,{root:!0}),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](1),a("setMessage",{value:Object(we["a"])(n.t0.response.data.error.message),type:"danger"},{root:!0});case 14:case"end":return n.stop()}}),n,null,[[1,11]])})))()}},getters:{token:function(e){return e.token},isAuthenticated:function(e,t){return!!t.token}}},xe=(n("d81d"),n("b64b"),n("99af"),ke.a.create({baseURL:"https://vue-our-bank-default-rtdb.asia-southeast1.firebasedatabase.app"}));xe.interceptors.response.use(null,(function(e){return 401===e.response.status&&Le.push("/auth?message=auth"),Promise.reject(e)}));var Me=xe,Re={namespaced:!0,state:function(){return{requests:[]}},mutations:{setRequests:function(e,t){e.requests=t},addRequest:function(e,t){e.requests.push(t)}},actions:{create:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function n(){var r,a,c,u,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,n.prev=1,c=Se.getters["auth/token"],n.next=5,Me.post("/requests.json?auth=".concat(c),t);case 5:u=n.sent,o=u.data,r("addRequest",Object(ge["a"])(Object(ge["a"])({},t),{},{id:o.name})),a("setMessage",{value:"Заявка успешно создана",type:"primary"},{root:!0}),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](1),a("setMessage",{value:n.t0.message,type:"danger"},{root:!0});case 14:case"end":return n.stop()}}),n,null,[[1,11]])})))()},load:function(e){return Object(E["a"])(regeneratorRuntime.mark((function t(){var n,r,a,c,u,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.dispatch,t.prev=1,a=Se.getters["auth/token"],t.next=5,Me.get("/requests.json?auth=".concat(a));case 5:c=t.sent,u=c.data,o=Object.keys(u).map((function(e){return Object(ge["a"])(Object(ge["a"])({},u[e]),{},{id:e})})),n("setRequests",o),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),r("setMessage",{value:t.t0.message,type:"danger"},{root:!0});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()},loadById:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function n(){var r,a,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,n.prev=1,a=Se.getters["auth/token"],n.next=5,Me.get("/requests/".concat(t,".json?auth=").concat(a));case 5:return c=n.sent,u=c.data,n.abrupt("return",u);case 10:n.prev=10,n.t0=n["catch"](1),r("setMessage",{value:n.t0.message,type:"danger"},{root:!0});case 13:case"end":return n.stop()}}),n,null,[[1,10]])})))()},remove:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,n.prev=1,a=Se.getters["auth/token"],n.next=5,Me.delete("/requests/".concat(t,".json?auth=").concat(a));case 5:r("setMessage",{value:"Заявка удалена",type:"primary"},{root:!0}),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),r("setMessage",{value:"e.message",type:"danger"},{root:!0});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},update:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,n.prev=1,a=Se.getters["auth/token"],n.next=5,Me.put("/requests/".concat(t.id,".json?auth=").concat(a),t);case 5:r("setMessage",{value:"Заявка обновлена",type:"primary"},{root:!0}),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),r("setMessage",{value:n.t0.message,type:"danger"},{root:!0});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()}},getters:{requests:function(e){return e.requests}}},Se=Object(i["a"])({state:function(){return{message:null}},mutations:{setMessage:function(e,t){e.message=t},clearMessage:function(e){e.message=null}},actions:{setMessage:function(e,t){var n=e.commit;n("setMessage",t),setTimeout((function(){n("clearMessage")}),4e3)}},getters:{message:function(e){return e.message}},modules:{auth:Ae,request:Re}}),Be=[{path:"/",name:"Home",component:ve,meta:{layout:"main",auth:!0}},{path:"/help",name:"Help",component:function(){return n.e("chunk-2d216dc7").then(n.bind(null,"c3ef"))},meta:{layout:"main",auth:!0}},{path:"/request/:id",name:"Request",component:function(){return n.e("chunk-2d0a4783").then(n.bind(null,"0728"))},meta:{layout:"main",auth:!0}},{path:"/auth",name:"Auth",component:function(){return n.e("chunk-2d0be70b").then(n.bind(null,"2fef"))},meta:{layout:"auth",auth:!1}}],Ee=Object(S["a"])({history:Object(S["b"])("/"),routes:Be,linkActiveClass:"active",linkExactActiveClass:"active"});Ee.beforeEach((function(e,t,n){var r=e.meta.auth;r&&Se.getters["auth/isAuthenticated"]?n():r&&!Se.getters["auth/isAuthenticated"]?n("/auth?message=auth"):n()}));var Le=Ee;n("441a");Object(r["d"])(R).use(Se).use(Le).mount("#app")},7299:function(e,t,n){},ddc6:function(e,t,n){"use strict";var r=n("7a23"),a={class:"loader"};function c(e,t){return Object(r["u"])(),Object(r["e"])("div",a)}const u={};u.render=c;t["a"]=u},e16f:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r={EMAIL_NOT_FOUND:"Пользователь с таким email не найден",INVALID_PASSWORD:"Не верный пароль",auth:"Войдите в систему"};function a(e){return r[e]?r[e]:"Пользователь не найден"}},e5c8:function(e,t,n){"use strict";n("7299")}});
//# sourceMappingURL=app.ee855e7a.js.map