(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){e.exports={nav:"Navbar_nav__2FGL8",item:"Navbar_item__3H4Vv",activeLink:"Navbar_activeLink__aMhxq"}},125:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(33),a=n(5),c={dialogs:[{id:1,name:"John"},{id:2,name:"Sara"},{id:3,name:"Varvara"},{id:4,name:"Vova"},{id:5,name:"Sonya"},{id:6,name:"Slava"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},u=function(e){return{type:"SEND-MESSAGE",newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n={id:6,message:t.newMessageText};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},128:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return h})),n.d(t,"e",(function(){return g}));var r=n(8),a=n.n(r),c=n(19),u=n(33),i=n(5),o=n(15),s=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),r):e}))},l={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},f=function(e){return{type:"FOLLOW",userId:e}},m=function(e){return{type:"UNFOLLOW",userId:e}},d=function(e){return{type:"SET-CURRENT_PAGE",currentPage:e}},p=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},E=function(e,t){return{type:"TOGGLE_FOLLOWING-IN-PROGRESS",isFetching:e,userId:t}},b=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(p(!0)),r(d(e)),n.next=4,o.c.getUsers(e,t);case 4:c=n.sent,r(p(!1)),r({type:"SET-USERS",users:c.items}),r({type:"SET-TOTAL-USERS-COUNT",totalUsersCount:c.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},v=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(E(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=o.c.follow.bind(o.c),v(n,e,r,f);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v(n,e,o.c.unfollow.bind(o.c),m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:s(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:s(e.users,t.userId,"id",{followed:!1})});case"SET-USERS":return Object(i.a)(Object(i.a)({},e),{},{users:Object(u.a)(t.users)});case"SET-CURRENT_PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"TOGGLE-IS-FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_FOLLOWING-IN-PROGRESS":return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(u.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}}},132:function(e,t,n){e.exports=n.p+"static/media/preloader.8c8c6c03.svg"},15:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return i}));var r=n(130),a=r.create({withCredentials:!0,headers:{"API-KEY":"fc23b599-bb02-4575-90dd-86aa339862df"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),c={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e),{})},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return a.get("profile/"+e)}},u={getProfile:function(e){return u.getProfile(e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},159:function(e,t,n){e.exports=n(285)},160:function(e,t,n){},165:function(e,t,n){},285:function(e,t,n){"use strict";n.r(t);n(160),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(62),a=n.n(r),c=n(0),u=n.n(c),i=n(50),o=n(51),s=n(53),l=n(52),f=(n(165),n(13)),m=n(12),d=n.n(m),p=function(){return u.a.createElement("nav",{className:d.a.nav},u.a.createElement("div",{className:d.a.item},u.a.createElement(f.b,{to:"/profile",activeClassName:d.a.activeLink},"Profile")),u.a.createElement("div",{className:d.a.item},u.a.createElement(f.b,{to:"/dialogs",activeClassName:d.a.activeLink},"Messages")),u.a.createElement("div",{className:d.a.item},u.a.createElement(f.b,{to:"/news",activeClassName:d.a.activeLink},"News")),u.a.createElement("div",{className:d.a.item},u.a.createElement(f.b,{to:"/music",activeClassName:d.a.activeLink},"Music")),u.a.createElement("div",{className:d.a.item},u.a.createElement(f.b,{to:"/settings",activeClassName:d.a.activeLink},"Settings")),u.a.createElement("div",{className:d.a.item},u.a.createElement(f.b,{to:"/users",activeClassName:d.a.activeLink},"Users")),u.a.createElement("p",null),u.a.createElement("div",{className:d.a.itemfriends},u.a.createElement(f.b,{to:"/friends",activeClassName:d.a.activeLink},u.a.createElement("h3",null,"Friends"))))},E=n(9),b=function(e){return u.a.createElement("div",null,"News")},v=function(e){return u.a.createElement("div",null,"Music")},h=function(e){return u.a.createElement("div",null,"Settings")},g=n(88),O=n.n(g),S=function(e){return u.a.createElement("header",{className:O.a.header},u.a.createElement("img",{src:"https://droidmania.ru/sites/default/files/downloads/title/unnamed_729.png"}),u.a.createElement("div",{className:O.a.loginBlock},e.isAuth?u.a.createElement("div",null," ",e.login," ",u.a.createElement("button",{onClick:e.logout},"Logout"),"  "):u.a.createElement(f.b,{to:"/login"},"Login")))},w=n(21),j=n(8),y=n.n(j),T=n(19),N=n(5),C=n(39),L=n(15),_={userId:null,email:null,login:null,isAuth:!1},x=function(e,t,n,r){return{type:"auth/SET-USERS-DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},I=function(){return function(){var e=Object(T.a)(y.a.mark((function e(t){var n,r,a,c,u;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.b.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,u=r.login,t(x(a,c,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-USERS-DATA":return Object(N.a)(Object(N.a)({},e),t.payload);default:return e}},P=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return u.a.createElement(S,this.props)}}]),n}(u.a.Component),U=Object(w.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(T.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.b.logout();case 2:0===e.sent.data.resultCode&&t(I());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(P),A=n(126),F=n(69),R=n(32),G=n(46),M=n.n(G),z=Object(A.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return u.a.createElement("form",{onSubmit:t},Object(R.c)("Email","email",[F.b],R.a),Object(R.c)("Password","password",[F.b],R.a,{type:"password"}),Object(R.c)(null,"rememberMe",null,R.a,{type:"checkbox"},"remember me"),n&&u.a.createElement("div",{className:M.a.formSummaryError},n),u.a.createElement("div",null,u.a.createElement("button",null," Login ")))})),D=Object(w.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(T.a)(y.a.mark((function r(a){var c,u;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,L.b.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(I()):(u=c.data.messages.length>0?c.data.messages[0]:"Some error",a(Object(C.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?u.a.createElement(E.a,{to:"/profile"}):u.a.createElement("div",null,u.a.createElement("h1",null,"LOGIN"),u.a.createElement(z,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),H=n(10),W={initialized:!1},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-INITIALIZE-SUCCESS":return Object(N.a)(Object(N.a)({},e),{},{initialized:!0});default:return e}},V=n(84),Y=n(125),J=n(93),q={},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q;arguments.length>1&&arguments[1];return e},Z=n(128),K=n(133),$=n(127),Q=n(10),ee=Q.createStore,te=Q.combineReducers,ne=Q.applyMiddleware,re=Q.compose,ae=ee(te({profilePage:J.b,dialogsPage:Y.a,sidebar:X,usersPage:Z.a,auth:k,form:$.a,app:B}),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||re)(ne(K.a)));window.__store__=ae;var ce=ae,ue=u.a.lazy((function(){return n.e(4).then(n.bind(null,298))})),ie=u.a.lazy((function(){return n.e(6).then(n.bind(null,296))})),oe=u.a.lazy((function(){return n.e(5).then(n.bind(null,299))})),se=u.a.lazy((function(){return n.e(3).then(n.bind(null,297))})),le=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?u.a.createElement("div",{className:"app-wrapper"},u.a.createElement(U,null),u.a.createElement(p,null),u.a.createElement("div",{className:"app-wrapper-content"},u.a.createElement(c.Suspense,{fallback:u.a.createElement(V.a,null)},u.a.createElement(E.b,{path:"/profile/:userId?",render:function(){return u.a.createElement(se,null)}}),u.a.createElement(E.b,{exact:!0,path:"/dialogs",render:function(){return u.a.createElement(oe,null)}}),u.a.createElement(E.b,{exact:!0,path:"/news",render:function(){return u.a.createElement(b,null)}}),u.a.createElement(E.b,{exact:!0,path:"/music",render:function(){return u.a.createElement(v,null)}}),u.a.createElement(E.b,{exact:!0,path:"/settings",render:function(){return u.a.createElement(h,null)}}),u.a.createElement(E.b,{exact:!0,path:"/friends",render:function(){return u.a.createElement(ie,null)}}),u.a.createElement(E.b,{exact:!0,path:"/users",render:function(){return u.a.createElement(ue,null)}}),u.a.createElement(E.b,{exact:!0,path:"/login",render:function(){return u.a.createElement(D,null)}})))):u.a.createElement(V.a,null)}}]),n}(c.Component),fe=Object(H.compose)(E.f,Object(w.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(I());Promise.all([t]).then((function(){e({type:"SET-INITIALIZE-SUCCESS"})}))}}}))(le),me=function(e){return u.a.createElement(f.a,null,u.a.createElement(w.a,{store:ce},u.a.createElement(fe,null)))};a.a.render(u.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return m}));var r=n(65),a=n(0),c=n.n(a),u=n(85),i=n(46),o=n.n(i),s=function(e){e.input;var t=e.meta,n=(e.child,Object(r.a)(e,["input","meta","child"])),a=t.touched&&t.error;return c.a.createElement("div",{className:o.a.formControl+" "+(a?o.a.error:"")},c.a.createElement("div",null,n.children),a&&c.a.createElement("span",null," ",t.error," "))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return c.a.createElement(s,e,c.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return c.a.createElement(s,e,c.a.createElement("input",Object.assign({},t,n)))},m=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(u.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a))," ",i)}},46:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3U3vH",error:"FormsControls_error__wBnE2",formSummaryError:"FormsControls_formSummaryError__VeF8M"}},69:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},84:function(e,t,n){"use strict";var r=n(132),a=n.n(r),c=n(0),u=n.n(c);t.a=function(e){return u.a.createElement("img",{src:a.a})}},88:function(e,t,n){e.exports={header:"Header_header__23fLH",loginBlock:"Header_loginBlock__2wvSL"}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return p}));var r=n(8),a=n.n(r),c=n(19),u=n(33),i=n(5),o=n(15),s={posts:[{id:1,message:"Hi, how are you?",likeCount:15},{id:2,message:"It is my first post",likeCount:40}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET-STATUS",status:e}},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n({type:"SET-USER-PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likeCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[n]),newPostText:""});case"SET-USER-PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"DELETE-POST":return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}}},[[159,1,2]]]);
//# sourceMappingURL=main.f5d7be7f.chunk.js.map