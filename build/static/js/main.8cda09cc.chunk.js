(this["webpackJsonpjwt-boilerplate"]=this["webpackJsonpjwt-boilerplate"]||[]).push([[0],{142:function(e,t,n){},143:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(54),o=n.n(a),c=(n(141),n(142),n(11)),s=n(9),l=(n(143),n(27)),i=n(40),u=n(37),j=n(12),d=n.n(j),h=n(2);function g(e){return Object(h.jsx)("span",{className:"error",children:e.error})}var b=n(175),p=n(176),m=n(124),O=n(177),f=n(170),x=n(174),v=n(173);function w(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var k={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:w,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=w();return e?JSON.parse(atob(e.split(".")[1])).user:null}},y="/api/users/";var S={signup:function(e){return fetch(y+"signup",{method:"POST",body:e}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.error)}))})).then((function(e){var t=e.token;return k.setToken(t)}))},getUser:function(){return k.getUserFromToken()},logout:function(){k.removeToken()},login:function(e){return fetch(y+"login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.error)}))})).then((function(e){var t=e.token;return k.setToken(t)}))},getProfile:function(e){return console.log("getProfile calling"),fetch(y+e,{headers:{Authorization:"Bearer "+k.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error("Error from getProfile Request, check the server terminal!")}))}},C=n(24);function U(e,t){return e===t}function L(e){var t=Object(r.useState)({message:"",passwordError:!1}),n=Object(c.a)(t,2),a=n[0],o=n[1],j=Object(r.useState)({username:"",email:"",password:"",passwordConf:""}),w=Object(c.a)(j,2),k=w[0],y=w[1],L=Object(r.useState)(""),E=Object(c.a)(L,2),P=E[0],T=E[1],A=Object(s.g)();function I(e){y(Object(u.a)(Object(u.a)({},k),{},Object(i.a)({},e.target.name,e.target.value)))}function z(){return(z=Object(l.a)(d.a.mark((function t(n){var r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),U(k.password,k.passwordConf)){t.next=3;break}return t.abrupt("return",o({message:"Passwords Must Match!",passwordError:!0}));case 3:for(a in o({message:"",passwordError:!1}),(r=new FormData).append("photo",P),k)r.append(a,k[a]);return console.log(r," <- form Data, you cant see this!","you have to loop over it"),console.log(r.forEach((function(e){return console.log(e)}))," < This lets you see the key values in formData"),t.prev=9,t.next=12,S.signup(r);case 12:e.handleSignUpOrLogin(),A("/"),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(9),console.log(t.t0),o({message:t.t0.message,passwordError:!1});case 20:case"end":return t.stop()}}),t,null,[[9,16]])})))).apply(this,arguments)}return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b.a,{clearing:!0,children:Object(h.jsxs)(p.a,{as:"h2",color:"blue",floated:"left",children:[Object(h.jsx)(m.a,{src:"https://cdn-icons-png.flaticon.com/512/744/744502.png",size:"small"}),"Welcome to Travelog. Plan, record and share your trips."]})}),Object(h.jsx)(O.a,{textAlign:"center",style:{height:"100vh",width:"100vw"},verticalAlign:"middle",children:Object(h.jsxs)(O.a.Column,{style:{maxWidth:450},children:[Object(h.jsx)(p.a,{as:"h3",color:"blue",textAlign:"center",children:"Sign Up"}),Object(h.jsx)(f.a,{onSubmit:function(e){return z.apply(this,arguments)},children:Object(h.jsxs)(b.a,{stacked:!0,children:[Object(h.jsx)(f.a.Input,{name:"username",placeholder:"username",value:k.username,onChange:I,required:!0}),Object(h.jsx)(f.a.Input,{type:"email",name:"email",placeholder:"email",value:k.email,onChange:I,required:!0}),Object(h.jsx)(f.a.Input,{error:a.passwordError,name:"password",type:"password",placeholder:"password",value:k.password,onChange:I,required:!0}),Object(h.jsx)(f.a.Input,{error:a.passwordError,name:"passwordConf",type:"password",placeholder:"Confirm Password",value:k.passwordConf,onChange:I,required:!0}),Object(h.jsx)(f.a.Field,{children:Object(h.jsx)(f.a.Input,{type:"file",name:"photo",placeholder:"upload image",onChange:function(e){console.log(e.target.files," < - this is e.target.files!"),T(e.target.files[0])}})}),Object(h.jsx)(x.a,{color:"blue",fluid:!0,size:"large",type:"submit",className:"btn",children:"Sign up"})]})}),Object(h.jsxs)(v.a,{children:["Already have an account? ",Object(h.jsx)(C.b,{to:"/login",children:"Log In"})]}),a.message?Object(h.jsx)(g,{error:a.message}):null]})})]})}n(153);function E(e){var t=Object(r.useState)(""),n=Object(c.a)(t,2),a=n[0],o=n[1],j=Object(r.useState)({email:"",password:""}),w=Object(c.a)(j,2),k=w[0],y=w[1],U=Object(s.g)();function L(e){y(Object(u.a)(Object(u.a)({},k),{},Object(i.a)({},e.target.name,e.target.value)))}function E(){return(E=Object(l.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,S.login(k);case 4:e.handleSignUpOrLogin(),U("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),o(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b.a,{clearing:!0,children:Object(h.jsxs)(p.a,{as:"h2",color:"blue",floated:"left",children:[Object(h.jsx)(m.a,{src:"https://cdn-icons-png.flaticon.com/512/744/744502.png",size:"small"}),"Welcome to Travelog. Plan, record and share your trips."]})}),Object(h.jsx)(O.a,{textAlign:"center",style:{height:"100vh",width:"100vw"},verticalAlign:"middle",children:Object(h.jsxs)(O.a.Column,{style:{maxWidth:450},children:[Object(h.jsx)(p.a,{as:"h2",color:"blue",textAlign:"center",children:"Log in"}),Object(h.jsx)(f.a,{onSubmit:function(e){return E.apply(this,arguments)},children:Object(h.jsxs)(b.a,{stacked:!0,children:[Object(h.jsx)(f.a.Input,{type:"email",name:"email",placeholder:"email",value:k.email,onChange:L,required:!0}),Object(h.jsx)(f.a.Input,{name:"password",type:"password",placeholder:"password",value:k.password,onChange:L,required:!0}),Object(h.jsx)(x.a,{color:"blue",fluid:!0,size:"large",type:"submit",className:"btn",children:"Log in"})]})}),Object(h.jsxs)(v.a,{children:["New to us? ",Object(h.jsx)(C.b,{to:"/signup",children:"Create your account"})]}),a?Object(h.jsx)(g,{error:a}):null]})})]})}var P=n(114),T=(n(154),n(78));function A(e){var t=e.loggedUser,n=e.handleLogout;return console.log(t,"loggedUser in pageheader"),Object(h.jsxs)(b.a,{clearing:!0,children:[Object(h.jsxs)(p.a,{as:"h3",color:"red",floated:"right",children:[Object(h.jsx)(C.b,{to:"/",children:Object(h.jsx)(T.a,{name:"home"})}),Object(h.jsx)(C.b,{to:"/login",onClick:n,children:"Log Out"})]}),Object(h.jsxs)(p.a,{as:"h3",color:"blue",floated:"left",children:[Object(h.jsx)(C.b,{to:"/".concat(null===t||void 0===t?void 0:t.username),children:Object(h.jsx)(m.a,{src:null!==t&&void 0!==t&&t.photoUrl?null===t||void 0===t?void 0:t.photoUrl:"https://react.semantic-ui.com/images/wireframe/square-image.png",avatar:!0})}),Object(h.jsxs)("span",{children:["Welcome, ",t.username," "]})]})]})}var I=n(168);function z(e){var t=e.handleAddLog,n=Object(r.useState)({title:"",text:""}),a=Object(c.a)(n,2),o=a[0],s=a[1],l=Object(r.useState)(""),j=Object(c.a)(l,2),d=j[0],g=j[1];function m(e){s(Object(u.a)(Object(u.a)({},o),{},Object(i.a)({},e.target.name,e.target.value))),console.log(o,"<-this is logForm")}return Object(h.jsxs)(b.a,{children:[Object(h.jsx)(p.a,{as:"h2",color:"blue",floated:"left",children:"Plan, record and share your trips."}),Object(h.jsxs)(f.a,{autoComplete:"off",onSubmit:function(e){e.preventDefault();var n=new FormData;n.append("photo",d),n.append("title",o.title),n.append("text",o.text),console.log(n,"<-this is formData"),t(n)},children:[Object(h.jsx)(f.a.Input,{className:"form-control",name:"title",value:o.title,placeholder:"Enter title",style:{width:542},onChange:m,inline:!0,required:!0}),Object(h.jsx)(I.a,{className:"form-control",name:"text",value:o.text,placeholder:"Tell us more about your trip",style:{minHeight:200},onChange:m,inline:!0,required:!0}),Object(h.jsx)(f.a.Input,{className:"form-control",type:"file",name:"photo",label:"Upload Image",placeholder:"upload image",style:{width:405,margin:14},onChange:function(e){console.log(e.target.files," < - this is e.target.files"),g(e.target.files[0])},inline:!0,required:!0}),Object(h.jsx)(x.a,{color:"blue",fluid:!0,size:"large",type:"submit",className:"btn",children:"Add a trip"})]})]})}var q=n(171),F=n(172);function D(e){var t=e.log,n=e.isProfile,r=e.addLike,a=e.removeLike,o=e.loggedUser,c=t.likes.findIndex((function(e){return e.username===o.username})),s=c>-1?"red":"grey",l=c>-1?function(){return a(t.likes[c]._id)}:function(){return r(t._id)};return Object(h.jsxs)(q.a,{raised:!0,children:[n?"":Object(h.jsx)(q.a.Content,{textAlign:"left",children:Object(h.jsx)(q.a.Header,{children:Object(h.jsxs)(C.b,{to:"/".concat(t.user.username),children:[Object(h.jsx)(m.a,{size:"large",avatar:!0,src:t.user.photoUrl?t.user.photoUrl:"https://react.semantic-ui.com/images/wireframe/square-image.png"}),t.user.username]})})}),Object(h.jsx)(m.a,{src:"".concat(null===t||void 0===t?void 0:t.photoUrl),wrapped:!0,ui:!1}),Object(h.jsx)(q.a.Content,{children:Object(h.jsx)(q.a.Description,{children:t.text})}),Object(h.jsxs)(q.a.Content,{extra:!0,textAlign:"right",children:[Object(h.jsx)(T.a,{name:"heart",size:"large",color:s,onClick:l}),t.likes.length]})]},t._id)}var N=n(169);function W(){return Object(h.jsx)(N.a,{size:"medium",active:!0,children:"Loading"})}function R(e){var t=e.logs,n=e.numPhotosCol,r=e.isProfile,a=e.loading,o=e.addLike,c=e.removeLike,s=e.loggedUser;return Object(h.jsxs)(q.a.Group,{itemsPerRow:n,stackable:!0,children:[a?Object(h.jsxs)(b.a,{children:[Object(h.jsx)(F.a,{active:!0,inverted:!0,children:Object(h.jsx)(W,{size:"medium",children:"Loading"})}),Object(h.jsx)(m.a,{src:"https://react.semantic-ui.com/images/wireframe/short-paragraph.png"})]}):null,t.map((function(e){return Object(h.jsx)(D,{log:e,isProfile:r,addLike:o,removeLike:c,loggedUser:s},e._id)}))]})}var B="/api/logs";function J(e){return fetch(B,{method:"POST",body:e,headers:{Authorization:"Bearer "+k.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))}))}function _(){return fetch(B,{headers:{Authorization:"Bearer "+k.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))}))}var H="/api/";function M(e){return fetch("".concat(H,"logs/").concat(e,"/likes"),{method:"POST",headers:{Authorization:"Bearer "+k.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error(e.error)}))}function G(e){return fetch("".concat(H,"likes/").concat(e),{method:"DELETE",headers:{Authorization:"Bearer "+k.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error(e.error)}))}function Y(e){var t=e.loggedUser,n=e.handleLogout,a=Object(r.useState)([]),o=Object(c.a)(a,2),s=o[0],i=o[1],u=Object(r.useState)(!0),j=Object(c.a)(u,2),b=j[0],p=j[1],m=Object(r.useState)(""),f=Object(c.a)(m,2),x=f[0],v=f[1];function w(){return(w=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M(t);case 3:n=e.sent,console.log(n,"from add like"),S(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0," err from server"),v("error adding like");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function k(){return(k=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G(t);case 3:n=e.sent,console.log(n," remove like"),S(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),v("error removing like");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function y(){return(y=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,J(t);case 4:n=e.sent,console.log(n),i([n.data].concat(Object(P.a)(s))),p(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message),v("Error creating log, please try again");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function S(){return C.apply(this,arguments)}function C(){return(C=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_();case 3:t=e.sent,console.log(t," data"),i(Object(P.a)(t.data)),p(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message," this is the error"),p(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){S()}),[]),x?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(A,{handleLogout:n,loggedUser:t}),Object(h.jsx)(g,{error:x}),";"]}):b?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(A,{handleLogout:n,loggedUser:t}),Object(h.jsx)(W,{})]}):Object(h.jsxs)(O.a,{centered:!0,children:[Object(h.jsx)(O.a.Row,{children:Object(h.jsx)(O.a.Column,{children:Object(h.jsx)(A,{handleLogout:n,loggedUser:t})})}),Object(h.jsx)(O.a.Row,{children:Object(h.jsx)(O.a.Column,{style:{maxWidth:600},children:Object(h.jsx)(z,{handleAddLog:function(e){return y.apply(this,arguments)}})})}),Object(h.jsx)(O.a.Row,{children:Object(h.jsx)(O.a.Column,{style:{maxWidth:600},children:Object(h.jsx)(R,{logs:s,numPhotosCol:1,isProfile:!1,loading:b,addLike:function(e){return w.apply(this,arguments)},removeLike:function(e){return k.apply(this,arguments)},loggedUser:t})})})]})}function $(e){var t=e.user;return Object(h.jsx)(O.a,{textAlign:"center",columns:2,children:Object(h.jsxs)(O.a.Row,{children:[Object(h.jsx)(O.a.Column,{children:Object(h.jsx)(m.a,{src:"".concat(t.photoUrl?t.photoUrl:"https://react.semantic-ui.com/images/wireframe/square-image.png"," "),avatar:!0,size:"small"})}),Object(h.jsx)(O.a.Column,{textAlign:"left",style:{maxWidth:600},children:Object(h.jsx)(b.a,{vertical:!0,children:Object(h.jsx)("h4",{children:t.username})})})]})})}function K(e){var t=e.loggedUser,n=e.handleLogout,a=Object(r.useState)([]),o=Object(c.a)(a,2),i=o[0],u=o[1],j=Object(r.useState)({}),b=Object(c.a)(j,2),p=b[0],m=b[1],f=Object(r.useState)(!0),x=Object(c.a)(f,2),v=x[0],w=x[1],k=Object(r.useState)(""),y=Object(c.a)(k,2),C=y[0],U=y[1],L=Object(s.h)().username;function E(){return(E=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M(t);case 3:n=e.sent,console.log(n,"from add like"),T(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0," err from server");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function P(){return(P=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G(t);case 3:n=e.sent,console.log(n," remove like"),T(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var T=Object(r.useCallback)(Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.getProfile(L);case 3:t=e.sent,w(!1),m(t.data.user),u(t.data.logs),console.log(t),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message),U("Profile does not exist! You are in the wrong in place");case 14:case"end":return e.stop()}}),e,null,[[0,10]])}))),[L]);return Object(r.useEffect)((function(){console.log("firing!"),T()}),[L,T]),C?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(A,{handleLogout:n,loggedUser:t}),Object(h.jsx)(g,{error:C}),";"]}):v?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(A,{handleLogout:n,loggedUser:t}),Object(h.jsx)(W,{})]}):Object(h.jsxs)(O.a,{children:[Object(h.jsx)(O.a.Row,{children:Object(h.jsx)(O.a.Column,{children:Object(h.jsx)(A,{handleLogout:n,loggedUser:t})})}),Object(h.jsx)(O.a.Row,{children:Object(h.jsx)(O.a.Column,{children:Object(h.jsx)($,{user:p})})}),Object(h.jsx)(O.a.Row,{centered:!0,children:Object(h.jsx)(O.a.Column,{style:{maxWidth:900},children:Object(h.jsx)(R,{logs:i,numPhotosCol:3,isProfile:!0,loading:v,addLike:function(e){return E.apply(this,arguments)},removeLike:function(e){return P.apply(this,arguments)},loggedUser:t})})})]})}function Q(){var e=Object(r.useState)(S.getUser()),t=Object(c.a)(e,2),n=t[0],a=t[1];function o(){a(S.getUser())}function l(){S.logout(),a(null)}return n?Object(h.jsxs)(s.d,{children:[Object(h.jsx)(s.b,{path:"/",element:Object(h.jsx)(Y,{loggedUser:n,handleLogout:l})}),Object(h.jsx)(s.b,{path:"/login",element:Object(h.jsx)(E,{handleSignUpOrLogin:o})}),Object(h.jsx)(s.b,{path:"/signup",element:Object(h.jsx)(L,{handleSignUpOrLogin:o})}),Object(h.jsx)(s.b,{path:"/:username",element:Object(h.jsx)(K,{loggedUser:n,handleLogout:l})})]}):Object(h.jsxs)(s.d,{children:[Object(h.jsx)(s.b,{path:"/login",element:Object(h.jsx)(E,{handleSignUpOrLogin:o})}),Object(h.jsx)(s.b,{path:"/signup",element:Object(h.jsx)(L,{handleSignUpOrLogin:o})}),Object(h.jsx)(s.b,{path:"/*",element:Object(h.jsx)(s.a,{to:"/login"})})]})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(h.jsx)(C.a,{children:Object(h.jsx)(Q,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[155,1,2]]]);
//# sourceMappingURL=main.8cda09cc.chunk.js.map