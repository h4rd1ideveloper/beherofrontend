(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{27:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){e.exports=a.p+"static/media/heroes.1f4b5508.png"},35:function(e,t,a){e.exports=a(65)},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),s=a(1),i=a.n(s),l=a(7),u=a(6),p=a(12),m=a(10),d=a(5),f=a(30),h=a.n(f).a.create({baseURL:"https://betheheronow.herokuapp.com"}),b=a(31),E=a.n(b),v=a(9),g=a.n(v),x=(a(27),a(8)),O=a(13),j=a.n(O),y=j.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1e3,timerProgressBar:!0,onOpen:function(e){e.addEventListener("mouseenter",j.a.stopTimer),e.addEventListener("mouseleave",j.a.resumeTimer)}}),k=function(e){e.children,Object(p.a)(e,["children"]);var t=Object(m.f)(),a=Object(m.g)(),c=Object(n.useRef)(null);function o(){return(o=Object(u.a)(i.a.mark((function e(a){var n,r,c,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=Object(l.a)(a.target,2),r=n[0].value,(c=n[1]).disabled="true",c.innerText="Aguarde ...",e.prev=4,e.next=7,h.post("/session",{id:r});case 7:return o=e.sent,s=o.data.name,e.next=11,y.fire({icon:"success",title:"Bem vindo ".concat(s)});case 11:t.push({pathname:"/profile",state:{id:r,name:s}}),e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(4),e.next=18,y.fire({icon:"error",title:"Oops..., n\xe3o encontramos uma ONG refetente a este ID"});case 18:return c.disabled="false",c.innerText="Entrar",e.abrupt("return",!1);case 21:case"end":return e.stop()}}),e,null,[[4,14]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){a&&a.state&&a.state.id&&(c.current.value=a.state.id)}),[a]),r.a.createElement("div",{className:"logo-container"},r.a.createElement("section",{className:"form"},r.a.createElement("img",{src:g.a,alt:"Be The Hero"}),r.a.createElement("form",{onSubmit:function(e){return o.apply(this,arguments)}},r.a.createElement("h1",null,"Fa\xe7a seu logon"),r.a.createElement("input",{ref:c,placeholder:"Sua ID",type:"text",required:!0}),r.a.createElement("button",{className:"button",type:"submit"},"Entrar"),r.a.createElement(d.b,{to:"/register",className:"backl-ink"},r.a.createElement(x.b,{size:16,color:"#E02041"}),"N\xe3o tenho cadastro"))),r.a.createElement("img",{src:E.a,alt:"Heros"}))},N=a(34),C=a.n(N),w=function(){var e=Object(m.f)();function t(){return(t=Object(u.a)(i.a.mark((function t(a){var n,r,c,o,s,u,p,m,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(l.a)(a.target,6),r=n[0].value,c=n[1].value,o=n[2].value,s=n[3].value,u=n[4].value,(p=n[5]).disabled="true",p.innerText="Aguarde ...",a.preventDefault(),t.prev=4,t.next=7,h.post("/ongs",{name:r,email:c,whatsapp:o,city:s,uf:u});case 7:return m=t.sent,d=m.data.id,t.next=11,y.fire({icon:"success",title:" ONG cadastrada com sucesso, seu ID ".concat(d)});case 11:e.push({pathname:"/",state:{id:d}}),t.next=18;break;case 14:return t.prev=14,t.t0=t.catch(4),t.next=18,y.fire({icon:"error",title:"Oops..., algo deu errado"});case 18:return p.disabled="false",p.innerText="Cadastrar",t.abrupt("return",!1);case 21:case"end":return t.stop()}}),t,null,[[4,14]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"register-container"},r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("img",{src:g.a,alt:"Be The Hero"}),r.a.createElement("h1",null,"Cadastro"),r.a.createElement("p",null,"Fa\xe7a seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG."),r.a.createElement(d.b,{to:"/",className:"backl-ink"},r.a.createElement(x.a,{size:16,color:"#E02041"}),"Logon")),r.a.createElement("form",{onSubmit:function(e){return t.apply(this,arguments)}},r.a.createElement("input",{placeholder:"Nome da ONG",type:"text",required:!0}),r.a.createElement("input",{placeholder:"E-mail",type:"email",required:!0}),r.a.createElement(C.a,{mask:"(99) 9 9999-9999",placeholder:"WhatsApp",type:"tel",required:!0}),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{placeholder:"Cidade",type:"text",required:!0}),r.a.createElement("input",{maxLength:2,placeholder:"UF",type:"text",onInput:function(e){var t=e.target,a=t.value.replace(/[0-9]/g,"");t.value=a.toUpperCase()},required:!0})),r.a.createElement("button",{className:"button",type:"submit"},"Cadastrar"))))},T=(a(29),function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(m.f)(),s=Object(m.g)(),f=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.state,a=t.id,n=t.name,e.prev=1,e.next=4,h.get("/profile",{headers:{Authorization:a}});case 4:r=e.sent,l=r.data,c({name:n,id:a,incidentsList:l}),e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(1),e.next=13,y.fire({icon:"error",title:"Oops... sentimos muito, mas algo deu errado"});case 13:o.push("/");case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){s.state?f():o.push("/")}),[s]);var b=a.name,E=a.incidentsList,v=a.id;return r.a.createElement("div",{className:"profile-container"},r.a.createElement("header",null,r.a.createElement("img",{src:g.a,alt:"Be The Hero"}),r.a.createElement("span",null,"Bem Vinda, ",b),r.a.createElement(d.b,{to:{pathname:"/incidents/new",id:v,name:b},className:"button"},"Cadastrar novo caso"),r.a.createElement("button",{type:"button",onClick:function(){return o.push("/")}},r.a.createElement(x.c,{size:18,color:"#E02041"}))),r.a.createElement("h1",null,"Casos cadastrados"),r.a.createElement("ul",null,E&&E.map((function(e,t){var a=e.title,n=e.description,o=e.value,s=e.id,l=e.ong_id,m=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.target.disabled="true",e.next=4,h.delete("/incidents/".concat(s),{headers:{Authorization:l}});case 4:if(a=e.sent,n=a.status,Object(p.a)(a,["status"]),!(n>=400)){e.next=12;break}return e.next=10,y.fire({icon:"error",title:"Oops... sentimos muito, mas algo deu errado"});case 10:e.next=13;break;case 12:c({name:b,incidentsList:E.filter((function(e){return e.id!==s})),id:l});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("li",{key:t},r.a.createElement("strong",null,"CASO:"),r.a.createElement("p",null,a),r.a.createElement("strong",null,"DESCRI\xc7\xc3O:"),r.a.createElement("p",null,n),r.a.createElement("strong",null,"VALOR:"),r.a.createElement("p",null,o),r.a.createElement("button",{type:"button",onClick:m},r.a.createElement(x.d,{size:20,color:"#a8a8b3"})))}))))}),S=function(e){var t=e.target,a=t.value.replace("R$ ","").replace(/[a-zA-Z]/g,"").replace(",",".");t.value="R$ ".concat(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;a="undefined"===typeof a?".":a,t=isNaN(t=Math.abs(t))?2:t,n="undefined"===typeof n?",":n;var r=e<0?"-":"",c=String(parseInt(e=Math.abs(Number(e)||0).toFixed(t))),o=c.length;return r+((o=o>3?o%3:0)?c.substr(0,o)+n:"")+c.substr(o).replace(/(\decSep{3})(?=\decSep)/g,"$1"+n)+(t?a+Math.abs(e-c).toFixed(t).slice(2):"")}(a)).trim()},z=function(e){var t=e.target,a=t.value.replace("R$ ","").replace(/[a-zA-Z]/g,"");t.value="R$ ".concat(a)},A=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(m.f)(),s=Object(m.g)();Object(n.useEffect)((function(){s.id&&s.name?c({ong_id:s.id,name:s.name}):o.push("/")}),[s]);var p=a.ong_id,f=a.name,b=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,c,s,u,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=Object(l.a)(t.target,4),r=n[0].value,c=n[1].value,s=n[2].value,(u=n[3]).disabled="true",u.innerText="Cadastrando ...",e.prev=4,e.next=7,h.post("/incidents",{title:r,description:c,value:s.replace("R$ ","")},{headers:{"Content-Type":"application/json",Authorization:a.ong_id}});case 7:return m=e.sent,m.data,e.next=11,y.fire({icon:"success",title:"Caso Cadastrado"});case 11:o.push({pathname:"/profile",state:{id:p,name:f}}),e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(4),e.next=18,y.fire({icon:"error",title:"Oops..., algo deu errado",footer:"<code>".concat(e.t0.message,"</code>")});case 18:return u.disabled="false",u.innerText="Cadastrar",e.abrupt("return",!1);case 21:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"new-incident-container"},r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("img",{src:g.a,alt:"Be The Hero"}),r.a.createElement("h1",null,"Cadastrar novo caso"),r.a.createElement("p",null,"Descreva o caso detalhadamente, para encontrar um her\xf3i para resolver isso."),r.a.createElement(d.b,{to:{pathname:"/profile",state:{id:p,name:f}},className:"backl-ink"},r.a.createElement(x.a,{size:16,color:"#E02041"}),"Voltar para Home")),r.a.createElement("form",{onSubmit:b},r.a.createElement("input",{placeholder:"Titulo do caso",type:"text",required:!0}),r.a.createElement("textarea",{placeholder:"Descri\xe7\xe3o",required:!0}),r.a.createElement("input",{placeholder:"Valor em Reais",type:"text",required:!0,onInput:z,onBlur:S}),r.a.createElement("button",{className:"button",type:"submit"},"Cadastrar"))))},B=function(){return r.a.createElement(d.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,component:k}),r.a.createElement(m.a,{path:"/register",component:w}),r.a.createElement(m.a,{path:"/profile",component:T}),r.a.createElement(m.a,{path:"/incidents/new",component:A})))},D=(a(64),function(){return r.a.createElement(B,null)});o.a.render(r.a.createElement(D,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a.p+"static/media/logo.7eea718b.svg"}},[[35,1,2]]]);
//# sourceMappingURL=main.6b0550a7.chunk.js.map