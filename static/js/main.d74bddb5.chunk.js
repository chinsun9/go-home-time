(this["webpackJsonpgo-home-time"]=this["webpackJsonpgo-home-time"]||[]).push([[0],{17:function(e,t,c){"use strict";c.d(t,"a",(function(){return a})),c.d(t,"b",(function(){return s}));var n=c(19),a="time/SET_USER",s=Object(n.createAction)(a)()},18:function(e,t,c){"use strict";var n=c(27);c.d(t,"default",(function(){return n.a}));var a=c(17);c.d(t,"setTime",(function(){return a.b}));c(28)},27:function(e,t,c){"use strict";var n=c(30),a=c(19),s=c(17),r=Object(a.createReducer)({time:"1800",flag:!1},Object(n.a)({},s.a,(function(e,t){var c=t.payload,n=c;return c.length<4&&(n="".concat(c.substr(0,2),"00")),{flag:!0,time:n}})));t.a=r},28:function(e,t){},34:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},45:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n=c(2),a=(c(34),c(0)),s=c.n(a),r=c(15),i=c.n(r),u=c(13),j=c(12),o=c(18),b=Object(j.b)({time:o.default}),l=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))},h=(c(42),c(10)),O=c(4),d=(c(43),c(20)),m=c.n(d),f=c(9);c(45);function x(e){var t=e.hh,c=e.mm,s=e.ss,r=e.isOver,i=Object(a.useState)(t),u=Object(f.a)(i,2),j=u[0],o=u[1],b=Object(a.useState)(c),l=Object(f.a)(b,2),h=l[0],O=l[1],d=Object(a.useState)(s),m=Object(f.a)(d,2),x=m[0],v=m[1],p=Object(a.useState)(r),g=Object(f.a)(p,2),N=g[0],_=g[1];Object(a.useEffect)((function(){var e=setInterval((function(){N||(x>0&&v(x+-1),0===x&&(0===h?(0===j?(_(!0),clearInterval(e)):(o(j+-1),O(59),v(59)),clearInterval(e)):(O(h+-1),v(59))))}),1e3);return function(){clearInterval(e)}}),[h,x,j,N]);var y=function(e){return("00"+e).substr(-2)};return Object(n.jsxs)("div",{className:"timer",children:[Object(n.jsxs)("div",{className:"timer__content ".concat(N?"over":""),children:[Object(n.jsx)("span",{className:"timer__hour",children:y(j)}),Object(n.jsx)("span",{children:":"}),Object(n.jsx)("span",{className:"timer__min",children:y(h)}),Object(n.jsx)("span",{children:":"}),Object(n.jsx)("span",{className:"timer__sec",children:y(x)})]}),N?Object(n.jsx)("h2",{children:"\ud1f4\uadfc\ud569\uc2dc\ub2e4!"}):null]})}x.defaultProps={isOver:!1};var v=x,p=function(){var e=Object(u.b)();return{initTime:Object(a.useCallback)((function(t){e(Object(o.setTime)(t))}),[e])}};var g=function(){return Object(u.c)((function(e){return e.time}))};function N(e){var t,c=e.isDefault,s=m()(),r=Object(O.f)(),i=(null===r||void 0===r?void 0:r.params).input,u=p().initTime,j=g(),o=j.flag,b=j.time;Object(a.useEffect)((function(){!o&&i&&u(i)}),[o,u,i]);var l=function(e){return{hour:parseInt("".concat(e/3600),10),min:parseInt("".concat(e%3600/60),10),sec:Math.floor(e%60)}};return Object(n.jsxs)("div",{className:"home",children:[Object(n.jsxs)("span",{children:["\ud1f4\uadfc\uc2dc\uac04 ",b," \uae4c\uc9c0..."]}),function(){var e=0,a=0;if(c)t=m()("".concat(Number(b.substr(0,2)),":").concat(Number(b.substr(2,2))),"hh:mm");else{if(isNaN(Number(i))||i.length>4||3===i.length)return null;e=Number(i.substr(0,2)),4===i.length&&(a=Number(i.substr(2,2))),t=m()("".concat(e,":").concat(a),"hh:mm")}var r=t.diff(s,"seconds"),u=l(r),j=u.hour,o=u.min,h=u.sec;if(r<0&&r>-43200)return Object(n.jsx)(v,{hh:Math.abs(j),mm:Math.abs(o),ss:Math.abs(h),isOver:!0});if(r<0){var O=t.clone().add(1,"d").diff(s,"seconds"),d=l(O),f=d.hour,x=d.min,p=d.sec;return Object(n.jsx)(v,{hh:f,mm:x,ss:p})}return Object(n.jsx)(v,{hh:j,mm:o,ss:h})}()]})}N.defaultProps={isDefault:!1};var _=N;c(47);var y=function(){var e=g().time;return Object(n.jsx)("div",{className:"header",children:Object(n.jsx)(h.b,{to:"/".concat(e),children:Object(n.jsx)("h3",{children:"go home time"})})})};c(48);var S=function(){return Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsx)("a",{href:"https://unsplash.com/photos/WVIkqpoKz1I",target:"_blank",rel:"noreferrer",children:"Photo by @swayte on Unsplash"}),Object(n.jsx)(h.b,{to:"about",children:"about"})]})},k=(c(49),c(50),c(1)),C=(c(31).a,"https://chinsun9.github.io/go-home-time/");var I=function(){var e=Object(a.useState)(C),t=Object(f.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(!1),i=Object(f.a)(r,2),u=i[0],j=i[1],o=Object(a.useState)("18:00"),b=Object(f.a)(o,2),l=b[0],h=b[1],O=Object(a.useState)(!1),d=Object(f.a)(O,2),m=d[0],x=d[1],v=Object(a.useRef)(null),p=Object(a.useRef)(null);return Object(n.jsxs)("div",{className:"share",children:[Object(n.jsx)("h4",{children:"\ub9c1\ud06c \uacf5\uc720\ud558\uae30"}),Object(n.jsxs)("div",{className:"share__text",children:[Object(n.jsx)("input",{ref:v,type:"text",value:c,onClick:function(e){e.preventDefault();var t=v.current;null===t||void 0===t||t.select(),document.execCommand("copy");var c=new k.d;m||(x(!0),c.clear().fromTo(p.current,{opacity:0},{opacity:1,duration:.7,ease:k.b.easeOut}).to(p.current,{opacity:0,duration:.7,ease:k.b.easeOut,delay:1,onComplete:function(){x(!1)}}))},spellCheck:!1,readOnly:!0}),Object(n.jsx)("div",{className:"share__modal",ref:p,children:Object(n.jsx)("span",{children:"\ub9c1\ud06c\ub97c \ubcf5\uc0ac\ud588\uc2b5\ub2c8\ub2e4."})})]}),Object(n.jsxs)("div",{className:"share__checkbox",children:[Object(n.jsxs)("label",{htmlFor:"able",children:[Object(n.jsx)("input",{type:"checkbox",name:"able",id:"able",checked:u,onChange:function(){j(!u)}}),Object(n.jsx)("span",{children:"\ud1f4\uadfc\uc2dc\uac04"})]}),u&&Object(n.jsx)("input",{type:"time",id:"appt",name:"appt",value:l,onChange:function(e){var t=e.target.value;h(t),s(C+t.replace(":",""))}})]})]})};var T=function(){return Object(n.jsxs)("div",{className:"about",children:[Object(n.jsxs)("p",{children:["\uc9d1\uc774 \uac00\uace0 \uc2f6\uc740 \uc0ac\ub78c\ub4e4\uc744 \uc704\ud55c \ud0c0\uc774\uba38",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"\uc774 \ud0c0\uc774\uba38\ub294 \ub85c\uceec\uc5d0\uc11c setTimeout\uc744 \ud1b5\ud574 \ud0c0\uc774\uba38\ub97c \ud45c\ud604\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc2dc\uac04\uc774 \uc9c0\ub0a8\uc5d0 \ub530\ub77c \uc624\ucc28\uac00 \uc0dd\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),Object(n.jsx)(I,{})]})};var D=function(){return Object(n.jsx)(h.a,{basename:"/go-home-time",children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(y,{}),Object(n.jsxs)(O.c,{children:[Object(n.jsx)(O.a,{exact:!0,path:"/about",children:Object(n.jsx)(T,{})}),Object(n.jsx)(O.a,{exact:!0,path:"/",children:Object(n.jsx)(_,{isDefault:!0})}),Object(n.jsx)(O.a,{path:"/:input",children:Object(n.jsx)(_,{})}),Object(n.jsx)(O.a,{path:"*",children:Object(n.jsx)("p",{children:"im not found"})})]}),Object(n.jsx)(S,{})]})})},E=Object(j.c)(b);i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(u.a,{store:E,children:Object(n.jsx)(D,{})})}),document.getElementById("root")),l()}},[[51,1,2]]]);
//# sourceMappingURL=main.d74bddb5.chunk.js.map