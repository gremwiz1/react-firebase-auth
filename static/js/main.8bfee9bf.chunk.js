(this["webpackJsonpreact-firebase-auth"]=this["webpackJsonpreact-firebase-auth"]||[]).push([[0],{45:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(6),r=c.n(n),a=c(36),s=c.n(a),j=(c(45),c(20)),b=c(10),i=c(13),o=c(19),l=c(7),u=r.a.createContext(),d=function(e){var t=e.children,c=Object(o.b)(),r=Object(n.useState)(null),a=Object(i.a)(r,2),s=a[0],j=a[1];return Object(n.useEffect)((function(){Object(o.c)(c,(function(e){j(e)}))}),[]),Object(l.jsx)(u.Provider,{value:{currentUser:s},children:t})},h=function(){var e=Object(n.useContext)(u).currentUser;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"\u0414\u043e\u043c\u0430\u0448\u043d\u044f\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"}),e?Object(l.jsxs)("p",{children:["\u0412\u044b \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u044b - ",Object(l.jsx)(j.b,{to:"/dashboard",children:"\u041f\u0430\u043d\u0435\u043b\u044c \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430"})]}):Object(l.jsxs)("p",{children:[Object(l.jsx)(j.b,{to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"})," or ",Object(l.jsx)(j.b,{to:"/signup",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})},O=function(){var e=Object(o.b)(),t=Object(b.g)();return Object(n.useContext)(u).currentUser?Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"\u041f\u0440\u0438\u0432\u0435\u0442"}),Object(l.jsx)("p",{children:"\u042d\u0442\u043e \u043f\u0430\u043d\u0435\u043b\u044c \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430 - \u0435\u0441\u043b\u0438 \u0432\u044b \u0435\u0435 \u0432\u0438\u0434\u0438\u0442\u0435 - \u0437\u043d\u0430\u0447\u0438\u0442 \u0432\u044b \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u044b"}),Object(l.jsx)("button",{onClick:function(c){c.preventDefault(),Object(o.e)(e).then((function(){t.push("/")})).catch((function(e){alert(e)}))},children:"\u0412\u044b\u0445\u043e\u0434"})]}):Object(l.jsx)(b.a,{to:"/login"})},p=function(){var e=Object(o.b)();return Object(n.useContext)(u).currentUser?Object(l.jsx)(b.a,{to:"/dashboard"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"\u0412\u0445\u043e\u0434"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c=t.target.elements,n=c.email,r=c.password;Object(o.d)(e,n.value,r.value).then((function(e){e.user})).catch((function(e){alert(e)}))},children:[Object(l.jsx)("label",{for:"email",children:"\u041f\u043e\u0447\u0442\u0430"}),Object(l.jsx)("input",{type:"email",name:"email",placeholder:"\u041f\u043e\u0447\u0442\u0430"}),Object(l.jsx)("label",{for:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(l.jsx)("input",{type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(l.jsx)("button",{type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},x=function(){var e=Object(o.b)(),t=Object(n.useState)(null),c=Object(i.a)(t,2),r=c[0],a=c[1];return r?Object(l.jsx)(b.a,{to:"/dashboard"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c=t.target.elements,n=c.email,r=c.password;Object(o.a)(e,n.value,r.value).then((function(e){e.user;a(!0)})).catch((function(e){alert(e)}))},children:[Object(l.jsx)("label",{for:"email",children:"\u041f\u043e\u0447\u0442\u0430"}),Object(l.jsx)("input",{type:"email",name:"email",placeholder:"\u041f\u043e\u0447\u0442\u0430"}),Object(l.jsx)("label",{for:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(l.jsx)("input",{type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(l.jsx)("button",{type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})},f=c(39),m=function(){Object(f.a)({apiKey:"AIzaSyBgWDb7VbzA1lCGNFhiHmularaUIMT1EKQ",authDomain:"react-firebase-auth-58a34.firebaseapp.com",projectId:"react-firebase-auth-58a34",storageBucket:"react-firebase-auth-58a34.appspot.com",messagingSenderId:"522063848203",appId:"1:522063848203:web:aff18357b728499d11380e",measurementId:"G-P0N25FV098"});return Object(l.jsx)(d,{children:Object(l.jsx)(j.a,{children:Object(l.jsxs)(b.d,{children:[Object(l.jsx)(b.b,{exact:!0,path:"/",component:h}),Object(l.jsx)(b.b,{exact:!0,path:"/dashboard",component:O}),Object(l.jsx)(b.b,{exact:!0,path:"/login",component:p}),Object(l.jsx)(b.b,{exact:!0,path:"/signup",component:x})]})})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),g()}},[[52,1,2]]]);
//# sourceMappingURL=main.8bfee9bf.chunk.js.map