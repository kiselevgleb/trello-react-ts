(this["webpackJsonptrello-react"]=this["webpackJsonptrello-react"]||[]).push([[0],{34:function(t,e,n){},36:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(17),a=n.n(c),s=(n(34),n(35),n(36),n(14)),o=n(22),i="GET_TICKETS_REQUEST",u="GET_TICKETS_FAILURE",l="GET_TICKETS_SUCCESS",b="POST_TICKET_REQUEST",j="POST_TICKET_FAILURE",d="POST_TICKET_SUCCESS",p=function(t){return{type:b,payload:{data:t}}},x=n(2);function O(t){var e=t.seconds,n=t.setSeconds;Object(r.useEffect)((function(){var t=setInterval((function(){n(e+1)}),1e3);return function(){return clearInterval(t)}}),[e,n]);var c=Math.floor(e/3600),a=e%3600,s=Math.floor(a/60),o=a%60,i=Math.ceil(o);return Object(x.jsx)("div",{children:Object(x.jsxs)("p",{className:"text-price p text-time",children:[c<10?"0".concat(c):c,":",s<10?"0".concat(s):s,":",i<10?"0".concat(i):i]})})}function f(t){var e=Object(s.b)(),n=Object(r.useState)(parseInt(t.content.time)),c=Object(o.a)(n,2),a=c[0],i=c[1],u="col-12",l=!1,b=!1,j="Done",d="false",f="false";"Start"===t.buttonType?(u="col-9",l="col-3 align-self-center butStart",b="btn btn-primary butStartText",j="In progress",d=0):"Resolve"===t.buttonType&&(u="col-8",l="col-4 align-self-center butResolve",b="btn btn-primary butResolveText butStartText",j="Done",f=Math.round(.2777777777777778*a*100)/10);return Object(x.jsx)(r.Fragment,{children:Object(x.jsxs)("div",{className:"row dataText",children:[Object(x.jsxs)("div",{className:u,children:[Object(x.jsxs)("p",{className:"text-body",children:["\ud83d\udddf ",t.content.text]}),"false"!==t.content.time?Object(x.jsx)(O,{seconds:a,setSeconds:i}):Object(x.jsx)(x.Fragment,{}),"false"!==t.content.cost?Object(x.jsxs)("p",{className:"text-price p text-cost",children:["\u20bd",t.content.cost]}):Object(x.jsx)(x.Fragment,{})]}),t.buttonType?Object(x.jsx)("div",{className:l,children:Object(x.jsx)("button",{type:"button",className:b,onClick:function(){var n=JSON.stringify({id:t.content.id,text:t.content.text,status:j,time:d,cost:f});e(p(n))},children:t.buttonType})}):Object(x.jsx)(x.Fragment,{})]})})}function h(t){var e=Object(r.useState)(!0),n=Object(o.a)(e,2),c=n[0],a=n[1],i=Object(s.b)();return Object(x.jsxs)("div",{className:"col-sm table",children:[Object(x.jsxs)("div",{className:"row text",children:[Object(x.jsx)("p",{className:"circle rounded-circle ",children:t.coin}),t.text]}),t.content.map((function(e){return Object(x.jsx)(f,{content:e,buttonType:t.button},e.id)})),"Start"===t.button?!0===c?Object(x.jsx)("div",{className:"row d-flex justify-content-center",children:Object(x.jsx)("button",{type:"button",className:"btn butPlus btn-light",onClick:function(){return a(!1)},children:"\u271a New task"})}):Object(x.jsx)("form",{onSubmit:function(t){if(t.preventDefault(),void 0!==t.target[0].value){var e=JSON.stringify({text:t.target[0].value,status:"To do",time:"false",cost:"false"});i(p(e)),a(!0)}},children:Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("div",{className:"row dataText",children:Object(x.jsx)("textarea",{placeholder:"Enter the text...",className:"form-control",rows:"3"})}),Object(x.jsx)("button",{type:"submit",className:"btn butPlus butAdd btn-light",children:"Add Task"})]})}):Object(x.jsx)(x.Fragment,{})]})}function v(){return Object(x.jsxs)(r.Fragment,{children:[Object(x.jsx)("h1",{className:"h1",children:"Anyway Labs Test Project"}),Object(x.jsx)("p",{className:"p",children:"Just some good deeds"})]})}var m=n(27),k=n.n(m);function T(t){var e=Object(s.c)((function(t){return t.skills})),n=e.loading,r=e.error,c=e.ticketsTodo,a=e.ticketsInPr,o=e.ticketsDone;return n?Object(x.jsx)(k.a,{}):r?Object(x.jsx)("p",{className:"error",children:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430!"}):Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(v,{}),Object(x.jsxs)("div",{className:"row rowMar",children:[Object(x.jsx)(h,{coin:c.length,text:"To do",button:"Start",content:c}),Object(x.jsx)(h,{coin:a.length,text:"In progress",button:"Resolve",content:a}),Object(x.jsx)(h,{coin:o.length,text:"Done",content:o})]})]})}var y=n(28),g=n(6);var w=function(t){var e=Object(s.b)();return Object(r.useEffect)((function(){e({type:i})}),[e]),Object(x.jsx)(y.a,{children:Object(x.jsx)(g.c,{children:Object(x.jsx)(g.a,{path:"/",component:T})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=n(16),E=n(29),N=n(11),I={tickets:[],loading:!1,error:null,ticket:{},ticketsTodo:[],ticketsInPr:[],ticketsDone:[]};var _=n(8),C=n.n(_),D=n(13),P=n(26),R=function(){var t=Object(P.a)(C.a.mark((function t(e){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://trello-back.herokuapp.com/?method=createTicket"),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:e});case 2:if((n=t.sent).ok){t.next=7;break}throw new Error(n.statusText);case 7:return t.next=9,n.json();case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F=function(){var t=Object(P.a)(C.a.mark((function t(){var e;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://trello-back.herokuapp.com/?method=allTickets"));case 2:if((e=t.sent).ok){t.next=5;break}throw new Error(e.statusText);case 5:return t.next=7,e.json();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),U=C.a.mark(L),A=C.a.mark(G),K=C.a.mark(Q),M=C.a.mark(W),J=C.a.mark(X);function L(t){var e;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,3,1e3,t.next=5,Object(D.c)(3,1e3,F);case 5:return e=t.sent,t.next=8,Object(D.b)({type:l,payload:{tickets:e}});case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(D.b)((n=t.t0.message,{type:u,payload:{error:n}}));case 14:case"end":return t.stop()}var n}),U,null,[[0,10]])}function G(){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(D.e)(i,L);case 2:case"end":return t.stop()}}),A)}function B(t){var e=t.type,n=t.payload;return e===b&&""!==n.data}function Q(){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(D.a)(100,B,W);case 2:case"end":return t.stop()}}),K)}function W(t){var e;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,3,1e3,n.next=5,Object(D.c)(3,1e3,R,t.payload.data);case 5:return e=n.sent,n.next=8,Object(D.b)({type:d,payload:{ticket:e}});case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(0),n.next=14,Object(D.b)((r=n.t0.message,{type:j,payload:{errorTicket:r}}));case 14:case"end":return n.stop()}var r}),M,null,[[0,10]])}function X(){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(D.d)(Q);case 2:return t.next=4,Object(D.d)(G);case 4:case"end":return t.stop()}}),J)}var V=Object(S.b)({skills:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return Object(N.a)(Object(N.a)({},t),{},{loading:!0,error:null});case j:var n=e.payload.errorTicket;return Object(N.a)(Object(N.a)({},t),{},{loading:!1,error:n});case d:var r=e.payload.ticket;return Object(N.a)(Object(N.a)({},t),{},{tickets:r,ticketsTodo:r.filter((function(t){return"To do"===t.status})),ticketsInPr:r.filter((function(t){return"In progress"===t.status})),ticketsDone:r.filter((function(t){return"Done"===t.status})),loading:!1,error:null});case i:return Object(N.a)(Object(N.a)({},t),{},{loading:!0,error:null});case u:var c=e.payload.error;return Object(N.a)(Object(N.a)({},t),{},{loading:!1,error:c});case l:var a=e.payload.tickets;return Object(N.a)(Object(N.a)({},t),{},{tickets:a,ticketsTodo:a.filter((function(t){return"To do"===t.status})),ticketsInPr:a.filter((function(t){return"In progress"===t.status})),ticketsDone:a.filter((function(t){return"Done"===t.status})),loading:!1,error:null});default:return t}}}),$=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||S.c,q=Object(E.a)(),z=Object(S.d)(V,$(Object(S.a)(q)));q.run(X);var H=z;a.a.render(Object(x.jsx)(s.a,{store:H,children:Object(x.jsx)(w,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.8bb8cc5f.chunk.js.map