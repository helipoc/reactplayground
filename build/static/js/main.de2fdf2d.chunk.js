(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),i=a(24),s=a(153),l=a(157),u=a(158),m=a(14),p=a(21),d=a(159),E=a(17),f=a(26),b=a.n(f);function O(){return function(){var e=JSON.parse(localStorage.getItem("info")).token,t={headers:{Authorization:"Bearer ".concat(e)}};b.a.post("logout",null,t),localStorage.clear()}(),{type:"LOGOUT"}}var v={color:"orange",borderBottom:"3px solid black"},g=function(e){var t=Object(E.c)((function(e){return e.userState.currentUser})),a=Object(n.useState)(!1),c=Object(i.a)(a,2),o=c[0],f=c[1],b=Object(E.b)();return r.a.createElement(r.a.Fragment,null,o&&r.a.createElement(m.a,{to:"/"}),t?r.a.createElement(s.a,{position:"fixed"},r.a.createElement(l.a,{variant:"dense"},r.a.createElement(u.a,{variant:"button"},"Hi\xa0",t),r.a.createElement(d.a,{container:!0,justify:"flex-end",spacing:4},r.a.createElement(d.a,{item:!0},r.a.createElement(p.c,{to:"/home",style:{textDecoration:"none",color:"white"},activeStyle:v},r.a.createElement(u.a,{variant:"button"},"Friend's Posts"))),r.a.createElement(d.a,{item:!0},r.a.createElement(p.c,{to:"/myposts",style:{textDecoration:"none",color:"white"},activeStyle:v},r.a.createElement(u.a,{variant:"button"},"Myposts"))),r.a.createElement(d.a,{item:!0},r.a.createElement(p.c,{to:"/post",style:{textDecoration:"none",color:"white"},activeStyle:v},r.a.createElement(u.a,{variant:"button"},"Add Post"))),r.a.createElement(d.a,{item:!0},r.a.createElement(p.c,{to:"/users",style:{textDecoration:"none",color:"white"},activeStyle:v},r.a.createElement(u.a,{variant:"button"},"Show users"))),r.a.createElement(d.a,{item:!0},r.a.createElement("a",{onClick:function(){b(O()),f(!0)},href:"/",style:{textDecoration:"none",color:"white",cursor:"pointer"}},r.a.createElement(u.a,{variant:"button"},"Logout")))))):r.a.createElement(s.a,{position:"fixed"},r.a.createElement(l.a,{variant:"dense"},r.a.createElement(d.a,{container:!0,justify:"flex-end",spacing:4},r.a.createElement(d.a,{item:!0},r.a.createElement(p.c,{to:"/login",style:{textDecoration:"none",color:"white"},activeStyle:v},r.a.createElement(u.a,{variant:"button"},"Login"))),r.a.createElement(d.a,{item:!0},r.a.createElement(p.c,{to:"/signup",activeStyle:v,style:{textDecoration:"none",color:"white"}},r.a.createElement(u.a,{variant:"button"},"Signup")," "))))))},h=a(164),j=a(165),y=a(160),S=a(166),D=Object(j.a)((function(e){return{paper:{marginTop:"10em",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"},texfield:{width:"40%",paddingBottom:"2em"}}}));var x=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(""),l=Object(i.a)(s,2),m=l[0],d=l[1],f=Object(n.useState)(!1),O=Object(i.a)(f,2),v=O[0],g=O[1],j=D(),x=Object(E.b)();return r.a.createElement("div",{className:j.paper+" animate__animated animate__fadeInLeft"},r.a.createElement(u.a,{variant:"h4"},"LOGIN"),v&&r.a.createElement(S.a,{style:{width:"30%",margin:"2em auto 2em auto"},severity:"error"},"Invalid User or pass"),r.a.createElement(h.a,{variant:"outlined",className:j.texfield,label:"Username",onChange:function(e){return o(e.target.value)}}),r.a.createElement(h.a,{className:j.texfield,type:"password",label:"Password",onChange:function(e){return d(e.target.value)},variant:"outlined"}),r.a.createElement(y.a,{onClick:function(){(function(e,t){return b.a.post("/login",{username:e,password:t})})(c,m).then((function(t){console.log(t),t.data.jwt?(localStorage.setItem("info",JSON.stringify({token:t.data.jwt,user:c})),x(function(e){return{type:"LOGGED_IN",user:e}}(c)),e.history.push("/")):(g(!0),console.log(t))})).catch((function(e){return g(!0)}))},style:{width:"20%"},variant:"contained",color:"primary"},"Login"),r.a.createElement("p",{style:{marginTop:"3em"}},"Don't have an account yet ?"," ",r.a.createElement(p.b,{to:"/signup",style:{textDecoration:"none"}},"Signup")))},w=Object(j.a)((function(e){return{paper:{marginTop:"10em",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"},texfield:{width:"40%",paddingBottom:"2em"}}}));var _=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(""),l=Object(i.a)(s,2),m=l[0],d=l[1],E=Object(n.useState)(""),f=Object(i.a)(E,2),O=f[0],v=f[1],g=Object(n.useState)(!1),j=Object(i.a)(g,2),D=j[0],x=j[1],_=Object(n.useState)(!1),T=Object(i.a)(_,2),A=T[0],C=T[1],L=w();return r.a.createElement("div",{className:L.paper+" animate__animated animate__fadeInLeft"},r.a.createElement(u.a,{variant:"h4"},"LOGIN"),D&&r.a.createElement(S.a,{style:{width:"30%",margin:"2em auto 2em auto"},severity:"success"},"You are registred now"),A&&r.a.createElement(S.a,{style:{width:"30%",margin:"2em auto 2em auto"},severity:"error"},"Passwords don't matchs"),r.a.createElement(h.a,{variant:"outlined",className:L.texfield,label:"Username",onChange:function(e){return o(e.target.value)}}),r.a.createElement(h.a,{className:L.texfield,type:"password",label:"Password",onChange:function(e){return d(e.target.value)},variant:"outlined"}),r.a.createElement(h.a,{className:L.texfield,type:"password",label:"Confirm password",onChange:function(e){return v(e.target.value)},variant:"outlined"}),r.a.createElement(y.a,{onClick:function(){O===m?(!function(e,t){b.a.post("user/new",{username:e,password:t})}(c,m),x(!0)):C(!0)},style:{width:"20%"},variant:"contained",color:"primary"},"Signup"),r.a.createElement("p",{style:{marginTop:"3em"}},"Already have an account ?"," ",r.a.createElement(p.b,{to:"/login",style:{textDecoration:"none"}},"Login")))},T=a(161),A=a(162);var C=function(e){var t=Object(E.b)(),a=Object(E.c)((function(e){return e.postState.FriendPosts}));return Object(n.useEffect)((function(){a||t({type:"LOAD_FRIENDS_POSTS"})}),[t]),r.a.createElement(d.a,{style:{marginTop:"10%"},container:!0,direction:"row",spacing:4},a&&a.map((function(e){return e.posts.map((function(t){return r.a.createElement(d.a,{key:t._id,item:!0,xs:12,sm:6,md:4},r.a.createElement(T.a,null,r.a.createElement(A.a,null,r.a.createElement(u.a,{variant:"h3"},t.Title),r.a.createElement(u.a,{variant:"button"},"Posted By ",e.postedBy),r.a.createElement(u.a,{variant:"h5"},t.Body))))}))})))},L=a(168),P=a(163);var I=function(e){var t=Object(E.b)(),a=Object(E.c)((function(e){return e.postState}));return Object(n.useEffect)((function(){a.posts||t({type:"LOAD_POSTS"})}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:a.done,autoHideDuration:2e3,onClose:function(){return t({type:"UNADD_POST"})}},r.a.createElement(S.a,{severity:"success"},"Post Created !")),r.a.createElement(d.a,{style:{marginTop:"10%"},container:!0,direction:"row",spacing:4},a.posts&&a.posts.map((function(e){return r.a.createElement(d.a,{key:e._id,item:!0,xs:12,sm:6,md:4},r.a.createElement(T.a,null,r.a.createElement(A.a,null,r.a.createElement(u.a,{variant:"h3"},e.Title),r.a.createElement(u.a,{variant:"h5"},e.Body)),r.a.createElement(P.a,null,r.a.createElement(y.a,{color:"secondary",variant:"contained",onClick:function(){return a=e._id,void t({type:"DELETE_POST",id:a});var a}},"Delete"))))}))))};var N=function(){var e=Object(E.c)((function(e){return e.userState.users}))||[],t=Object(E.b)();return Object(n.useEffect)((function(){0===e.length&&t({type:"LOAD_USERS"})}),[e]),r.a.createElement(d.a,{style:{marginTop:"5em"},container:!0,direction:"column",spacing:4},e.map((function(e){return r.a.createElement(d.a,{item:!0,key:e.id},r.a.createElement(T.a,{raised:!0},r.a.createElement(A.a,null,r.a.createElement(u.a,{variant:"subtitle1"},"Username : ",e.username),r.a.createElement(u.a,{variant:"button"},"Posts : ",e.postCount)),r.a.createElement(P.a,null,r.a.createElement(y.a,{variant:"contained",color:"primary",onClick:function(){var a;a=e.id,t({type:"ADD_FRIEND",id:a})}},"Subscribe"))))})))},k=a(54);var B=function(e){var t=e.Component,a=Object(k.a)(e,["Component"]);return r.a.createElement(m.b,Object.assign({},a,{render:function(e){return localStorage.getItem("info")?r.a.createElement(t,e):r.a.createElement(m.a,{to:"/login"})}}))};var U=function(e){var t=e.Component,a=Object(k.a)(e,["Component"]);return r.a.createElement(m.b,Object.assign({},a,{render:function(e){return localStorage.getItem("info")?r.a.createElement(m.a,{to:"/dashboard"}):r.a.createElement(t,e)}}))},F=a(52),R=a(20),z=a(82);var G=function(e){var t=Object(n.useState)({}),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(E.b)(),l=Object(n.useCallback)((function(e){o(Object(R.a)(Object(R.a)({},c),{},Object(F.a)({},e.target.name,e.target.value)))}),[c]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{style:{margin:"10% 10% auto 10%"}},r.a.createElement(d.a,{container:!0,direction:"column",spacing:4},r.a.createElement(d.a,{item:!0,style:{textAlign:"center"}},r.a.createElement(h.a,{name:"Title",autoComplete:"off",label:"Title",variant:"outlined",onChange:l})),r.a.createElement(d.a,{item:!0},r.a.createElement(h.a,{name:"Body",id:"standard-multiline-static",label:"Post",multiline:!0,variant:"filled",rows:12,onChange:l,fullWidth:!0})),r.a.createElement(d.a,{item:!0,style:{textAlign:"center"}},r.a.createElement(y.a,{color:"primary",variant:"contained",onClick:function(){var t=JSON.parse(localStorage.getItem("info")).token;b.a.post("/post/new",{post:c},{headers:{Authorization:"Bearer ".concat(t)}}).then((function(){s({type:"ADDED_POST"}),e.history.push("/myposts")})).catch((function(){return console.log("Error")}))}},"Add Post")))))};var J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(m.d,null,r.a.createElement(B,{exact:!0,path:"/home",Component:C}),r.a.createElement(U,{exact:!0,path:"/signup",Component:_}),r.a.createElement(U,{exact:!0,path:"/login",Component:x}),r.a.createElement(B,{exact:!0,path:"/post",Component:G}),r.a.createElement(B,{exact:!0,path:"/myposts",Component:I}),r.a.createElement(B,{exact:!0,path:"/users",Component:N}),r.a.createElement(m.b,{render:function(){return r.a.createElement("h1",null,"Not found")}})))},H=a(80),M=a(32),W=JSON.parse(localStorage.getItem("info")),Y={currentUser:W?W.user:null};var q=a(62);var K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDED_POST":return Object(R.a)(Object(R.a)({},e),{},{done:!0});case"POST_LOADED":return Object(R.a)(Object(R.a)({},e),{},{posts:Object(q.a)(t.posts)});case"FRIEND_POSTS_LOADED":return Object(R.a)(Object(R.a)({},e),{},{FriendPosts:t.friendposts});case"POST_DELETED":return Object(R.a)(Object(R.a)({},e),{},{posts:Object(q.a)(e.posts.filter((function(e){return e._id!==t.id})))});case"UNADD_POST":return Object(R.a)(Object(R.a)({},e),{},{done:!1});default:return e}},Q=Object(M.c)({userState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGGED_IN":return{currentUser:t.user};case"USERS_LOADED":return Object(R.a)(Object(R.a)({},e),{},{users:t.users});case"LOGOUT":return{};default:return e}},postState:K}),V=a(28),X=a.n(V),Z=a(22);function $(){return JSON.parse(localStorage.getItem("info")).token}function ee(){return b.a.get("/post/myposts",{headers:{Authorization:"Bearer ".concat($())}}).then((function(e){return e.data}))}function te(e){return b.a.post("/post/delete",{postId:e},{headers:{Authorization:"Bearer ".concat($())}})}function ae(){return b.a.get("/post/friendposts",{headers:{Authorization:"Bearer ".concat($())}}).then((function(e){return e.data}))}function ne(){return b.a.get("/users",{headers:{Authorization:"Bearer ".concat($())}}).then((function(e){return e.data}))}function re(e){return b.a.post("/user/newFriend",{friendId:e},{headers:{Authorization:"Bearer ".concat($())}})}var ce=X.a.mark(me),oe=X.a.mark(pe),ie=X.a.mark(de),se=X.a.mark(Ee),le=X.a.mark(fe),ue=X.a.mark(be);function me(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.c)("LOAD_POSTS",pe);case 2:return e.next=4,Object(Z.c)("DELETE_POST",de);case 4:return e.next=6,Object(Z.d)("LOAD_USERS",Ee);case 6:return e.next=8,Object(Z.c)("ADD_FRIEND",fe);case 8:return e.next=10,Object(Z.c)("LOAD_FRIENDS_POSTS",be);case 10:case"end":return e.stop()}}),ce)}function pe(){var e;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Z.a)(ee);case 2:return e=t.sent,t.next=5,Object(Z.b)({type:"POST_LOADED",posts:e});case 5:case"end":return t.stop()}}),oe)}function de(e){return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Z.b)({type:"POST_DELETED",id:e.id});case 2:return t.next=4,Object(Z.a)(te,e.id);case 4:case"end":return t.stop()}}),ie)}function Ee(){var e;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Z.a)(ne);case 2:return e=t.sent,t.next=5,Object(Z.b)({type:"USERS_LOADED",users:e});case 5:case"end":return t.stop()}}),se)}function fe(e){return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Z.a)(re,e.id);case 2:return t.next=4,Object(Z.b)({type:"LOAD_USERS"});case 4:case"end":return t.stop()}}),le)}function be(){var e;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Z.a)(ae);case 2:return e=t.sent,t.next=5,Object(Z.b)({type:"FRIEND_POSTS_LOADED",friendposts:e});case 5:case"end":return t.stop()}}),ue)}var Oe=a(79),ve=a.n(Oe),ge=Object(H.a)(),he=Object(M.e)(Q,Object(M.a)(ve.a,ge));ge.run(me),o.a.render(r.a.createElement(p.a,null,r.a.createElement(E.a,{store:he},r.a.createElement(J,null))),document.getElementById("root"))},92:function(e,t,a){e.exports=a(120)}},[[92,1,2]]]);
//# sourceMappingURL=main.de2fdf2d.chunk.js.map