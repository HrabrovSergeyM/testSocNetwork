(this.webpackJsonpapp1=this.webpackJsonpapp1||[]).push([[0],{141:function(e,t,n){e.exports={content:"MyPosts_content__1-0_r",postsBlock:"MyPosts_postsBlock__1ZW5d",posts:"MyPosts_posts__u18aS"}},150:function(e,t,n){e.exports=n.p+"static/media/man-avatar-profile-round-icon_24640-14046.68a5aa10.jpg"},18:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return f}));var a=n(137),r=n(0),c=n.n(r),o=n(88),u=n.n(o),s=n(136),l=function(e){var t=e.meta,n=t.touched,a=t.error,r=e.children,o=n&&a;return c.a.createElement("div",{className:u.a.formControl+" "+(o?u.a.error:"")},c.a.createElement("div",null,r),o&&c.a.createElement("span",null,a))},i=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return c.a.createElement(l,e,c.a.createElement("textarea",Object.assign({},t,n)))},m=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return c.a.createElement(l,e,c.a.createElement("input",Object.assign({},t,n)))};function f(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(s.a,Object.assign({placeholder:e,name:t,validate:n,component:a},r))," ",o)}},181:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(45),r=n(8),c={dialogsData:[{id:1,name:"Serg"},{id:2,name:"Ars"},{id:3,name:"Andrew"},{id:4,name:"Leo"}],messagesData:[{id:1,message:"Hi"},{id:2,message:"How r u?"},{id:3,message:"Yo"}]},o={sendMessage:function(e){return{type:"SN/DIALOGS/SEND_MESSAGE",newMessage:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/DIALOGS/SEND_MESSAGE":var n=t.newMessage;return Object(r.a)(Object(r.a)({},e),{},{messagesData:[].concat(Object(a.a)(e.messagesData),[{id:5,message:n}])});default:return e}}},183:function(e,t,n){"use strict";n.d(t,"b",(function(){return h}));var a=n(12),r=n.n(a),c=n(27),o=n(45),u=n(8),s=n(23),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return s.b.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===a?"":"&friend=".concat(a))).then((function(e){return e.data}))},i=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(u.a)(Object(u.a)({},e),a):e}))},m={users:[],pageSize:10,totalUserCount:0,currentPage:1,isFetching:!1,followingInProgress:[],filter:{term:"",friend:null}},f=function(e){return{type:"SN/USERS/SET_USERS",users:e}},d=function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},p=function(e){return{type:"SN/USERS/SET_TOTAL_USER_COUNT",totalUserCount:e}},E=function(e){return{type:"SN/USERS/TOGGLE_IS_FETCHING",isFetching:e}},b=function(e){return{type:"SN/USERS/SET_FILTER",payload:e}},h=function(e,t,n){return function(){var a=Object(c.a)(r.a.mark((function a(c,o){var u;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c(E(!0)),c(d(e)),c(b(n)),a.next=5,l(e,t,n.term,n.friend);case 5:u=a.sent,c(E(!1)),c(f(u.items)),c(p(u.totalCount));case 9:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(u.a)(Object(u.a)({},e),{},{users:i(e.users,t.userId,"id",{followed:!0})});case"SN/USERS/UNFOLLOW":return Object(u.a)(Object(u.a)({},e),{},{users:i(e.users,t.userId,"id",{followed:!1})});case"SN/USERS/SET_USERS":return Object(u.a)(Object(u.a)({},e),{},{users:t.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USER_COUNT":return Object(u.a)(Object(u.a)({},e),{},{totalUserCount:t.totalUserCount});case"SN/USERS/TOGGLE_IS_FETCHING":return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(u.a)(Object(u.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(o.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});case"SN/USERS/SET_FILTER":return Object(u.a)(Object(u.a)({},e),{},{filter:t.payload});default:return e}}},185:function(e,t,n){"use strict";n.d(t,"c",(function(){return I})),n.d(t,"d",(function(){return N})),n.d(t,"b",(function(){return U}));var a=n(12),r=n.n(a),c=n(27),o=n(45),u=n(8),s={messagesReceived:[],statusChanged:[]},l=null,i=function(){E("pending"),setTimeout(b,3e3)},m=function(e){var t=JSON.parse(e.data);s.messagesReceived.forEach((function(e){return e(t)}))},f=function(){E("ready")},d=function(){E("error")},p=function(){var e,t,n,a;null===(e=l)||void 0===e||e.removeEventListener("close",i),null===(t=l)||void 0===t||t.removeEventListener("message",m),null===(n=l)||void 0===n||n.removeEventListener("open",f),null===(a=l)||void 0===a||a.removeEventListener("error",d)},E=function(e){s.statusChanged.forEach((function(t){return t(e)}))};function b(){var e;p(),null===(e=l)||void 0===e||e.close(),l=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),E("pending"),l.addEventListener("close",i),l.addEventListener("message",m),l.addEventListener("open",f),l.addEventListener("error",d)}var h=function(){b()},v=function(){var e;s.messagesReceived=[],s.statusChanged=[],p(),null===(e=l)||void 0===e||e.close()},S=function(e,t){return s[e].push(t),function(){s[e]=s[e].filter((function(e){return e!==t}))}},g=function(e,t){s[e]=s[e].filter((function(e){return e!==t}))},O=function(e){var t;null===(t=l)||void 0===t||t.send(e)},j=n(364),y={messages:[],status:"pending"},_=function(e){return{type:"SN/CHAT/MESSAGES_RECEIVED",payload:{messages:e}}},w=function(e){return{type:"SN/CHAT/STATUS_CHANGED",payload:{status:e}}},P=null,k=function(e){return null===P&&(P=function(t){e(_(t))}),P},C=null,T=function(e){return null===C&&(C=function(t){e(w(t))}),C},I=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(),S("messagesReceived",k(t)),S("statusChanged",T(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g("messagesReceived",k(t)),v();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function(e){return Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O(e);case 1:case"end":return t.stop()}}),t)})))};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/CHAT/MESSAGES_RECEIVED":return Object(u.a)(Object(u.a)({},e),{},{messages:[].concat(Object(o.a)(e.messages),Object(o.a)(t.payload.messages.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{id:Object(j.a)()})})))).filter((function(e,t,n){return t>=n.length-100}))});case"SN/CHAT/STATUS_CHANGED":return Object(u.a)(Object(u.a)({},e),{},{status:t.payload.status});default:return e}}},186:function(e,t,n){e.exports=n.p+"static/media/preloader.abffbc11.svg"},187:function(e,t,n){e.exports={preloader:"Preloader_preloader__1XdlC"}},191:function(e,t,n){e.exports={item:"Post_item__2OueL"}},23:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));var a,r=n(190),c=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"001c36a3-ba71-40a3-a26a-dec8b0b0d69d"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error",e[e.Captcha=10]="Captcha"}(a||(a={}))},233:function(e,t,n){e.exports=n(358)},238:function(e,t,n){},358:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),c=n(36),o=n.n(c),u=(n(238),n(104)),s=n(105),l=n(118),i=n(116),m=(n(149),n(82)),f=n(83),d=n(64),p=n.n(d),E=function(e){var t=Object(a.useState)(!1),n=Object(m.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(e.status),s=Object(m.a)(u,2),l=s[0],i=s[1];Object(a.useEffect)((function(){i(e.status)}),[e.status]);return r.a.createElement("div",null,!c&&r.a.createElement("div",null,r.a.createElement("b",null,"Status: ")," ",r.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"-------")),c&&r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){i(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(l)},value:l})))},b=n(150),h=n.n(b),v=n(18),S=n(182),g=Object(S.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profile,a=e.error;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement("button",null,"save")),a&&r.a.createElement("div",{className:p.a.formSummaryError},a),r.a.createElement("div",null,r.a.createElement("b",null,"Full name"),":"," ",Object(v.c)("Full name","fullName",[],v.a)),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job"),":"," ",Object(v.c)("","lookingForAJob",[],v.a,{type:"checkbox"})),r.a.createElement("div",null,r.a.createElement("b",null,"My professional skills"),":",Object(v.c)("My professional skills","lookingForAJobDescription",[],v.b)),r.a.createElement("div",null,r.a.createElement("b",null,"About me"),":",Object(v.c)("About me","aboutMe",[],v.b)),r.a.createElement("div",null,r.a.createElement("b",null,"Contacts"),":"," ",Object.keys(n.contacts).map((function(e){return r.a.createElement("div",{key:e,className:p.a.contact},r.a.createElement("b",null,e,": ",Object(v.c)(e,"contacts."+e,[],v.a)))}))))})),O=function(e){var t=e.profile,n=e.isOwner,a=e.goToEditMode;return r.a.createElement("div",null,n&&r.a.createElement("div",null,r.a.createElement("button",{onClick:a},"edit")),r.a.createElement("div",null,r.a.createElement("b",null,"Full name"),": ",t.fullName),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&r.a.createElement("div",null,r.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),r.a.createElement("div",null,r.a.createElement("b",null,"About me"),": ",t.aboutMe),r.a.createElement("div",null,r.a.createElement("b",null,"Contacts"),":"," ",Object.keys(t.contacts).map((function(e){return r.a.createElement(j,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},j=function(e){var t=e.contactTitle,n=e.contactValue;return r.a.createElement("div",{className:p.a.contact},r.a.createElement("b",null,t),": ",n)},y=function(e){var t=e.profile,n=e.status,c=e.updateStatus,o=e.isOwner,u=e.savePhoto,s=e.saveProfile,l=Object(a.useState)(!1),i=Object(m.a)(l,2),d=i[0],b=i[1];if(!t)return r.a.createElement(f.a,null);return r.a.createElement("div",null,r.a.createElement("div",{className:p.a.descriptionBlock},r.a.createElement("img",{src:t.photos.large||h.a,className:p.a.mainPhoto}),o&&r.a.createElement("input",{type:"file",onChange:function(e){e.target.files&&e.target.files.length&&u(e.target.files[0])}}),d?r.a.createElement(g,{initialValues:t,profile:t,onSubmit:function(e){s(e).then((function(){b(!1)}))}}):r.a.createElement(O,{goToEditMode:function(){b(!0)},profile:t,isOwner:o}),r.a.createElement(E,{status:n,updateStatus:c})))},_=n(12),w=n.n(_),P=n(27),k=n(45),C=n(8),T=n(52),I=n(23),N=function(e){return I.b.get("profile/"+e).then((function(e){return e.data}))},U=function(e){return I.b.get("profile/status/"+e).then((function(e){return e.data}))},A=function(e){return I.b.put("profile/status",{status:e}).then((function(e){return e.data}))},x=function(e){var t=new FormData;return t.append("image",e),I.b.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},L=function(e){return I.b.put("profile",e).then((function(e){return e.data}))},R={posts:[{id:1,message:"Hi, how are u?",likesCount:15},{id:2,message:"It is my first post",likesCount:12}],profile:null,status:"",newPostText:""},F={addPostActionCreator:function(e){return{type:"SN/PROFILE/ADD_POST",newPostText:e}},setUserProfile:function(e){return{type:"SN/PROFILE/SET_USER_PROFILE",profile:e}},setStatus:function(e){return{type:"SN/PROFILE/SET_STATUS",status:e}},savePhotoSuccess:function(e){return{type:"SN/PROFILE/SAVE_PHOTO_SUCCESS",photos:e}},deletePost:function(e){return{type:"SN/PROFILE/DELETE_POST",postId:e}}},D=function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:a=t.sent,n(F.setUserProfile(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD_POST":var n={id:3,message:t.newPostText,likesCount:3};return Object(C.a)(Object(C.a)({},e),{},{posts:[].concat(Object(k.a)(e.posts),[n]),newPostText:""});case"SN/PROFILE/SET_STATUS":return Object(C.a)(Object(C.a)({},e),{},{status:t.status});case"SN/PROFILE/SET_USER_PROFILE":return Object(C.a)(Object(C.a)({},e),{},{profile:t.profile});case"SN/PROFILE/SAVE_PHOTO_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{profile:Object(C.a)(Object(C.a)({},e.profile),{},{photos:t.photos})});case"SN/PROFILE/DELETE_POST":return Object(C.a)(Object(C.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}},G=n(141),H=n.n(G),z=n(191),B=n.n(z),V=function(e){return r.a.createElement("div",{className:B.a.item},r.a.createElement("img",{src:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"}),r.a.createElement("div",null,r.a.createElement("span",null,e.message)),r.a.createElement("div",null,r.a.createElement("span",null,e.likesCount," Like")))},J=n(71),W=Object(S.a)({form:"profile-add-post"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,Object(v.c)("Your post","newPostText",[J.b],v.a)),r.a.createElement("div",null,r.a.createElement("button",null,"Add post")))})),Y=r.a.memo((function(e){var t=Object(k.a)(e.posts).reverse().map((function(e){return r.a.createElement(V,{key:e.id,message:e.message,likesCount:e.likesCount})}));return r.a.createElement("div",{className:H.a.postsBlock},r.a.createElement("h3",null,"My posts"),r.a.createElement(W,{onSubmit:function(t){e.addPost(t.newPostText)}}),r.a.createElement("div",{className:H.a.posts},t))})),K=n(22),X=Object(K.b)((function(e){return{posts:e.profilePage.posts}}),{addPost:F.addPostActionCreator})(Y),Z=function(e){return r.a.createElement("div",null,r.a.createElement(y,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),r.a.createElement(X,null))},q=n(19),Q=n(15),$=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"refreshProfile",value:function(){var e=+this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),e?(this.props.getUserProfile(e),this.props.getStatus(e)):console.error("ID should exists in URI params or in state ('authorizedUserId')")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement(Z,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),n}(r.a.Component),ee=Object(Q.d)(Object(K.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:D,getStatus:function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(e);case 2:a=t.sent,n(F.setStatus(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A(e);case 3:0===t.sent.resultCode&&n(F.setStatus(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:0===(a=t.sent).resultCode&&n(F.savePhotoSuccess(a.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n,a){var r,c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.userId,t.next=3,L(e);case 3:if(0!==(c=t.sent).resultCode){t.next=12;break}if(null===r){t.next=9;break}n(D(r)),t.next=10;break;case 9:throw new Error("User ID can't be null");case 10:t.next=14;break;case 12:return n(Object(T.a)("edit-profile",{_error:c.messages[0]})),t.abrupt("return",Promise.reject(c.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),q.h)($),te=n(34),ne=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"News"))},ae=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Music"))},re=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Settings"))},ce=function(){return I.b.get("auth/me").then((function(e){return e.data}))},oe=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return I.b.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},ue=function(){return I.b.delete("auth/login")},se=function(){return I.b.get("security/get-captcha-url").then((function(e){return e.data}))},le={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},ie=function(e,t,n,a){return{type:"SN/AUTH/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},me=function(e){return{type:"SN/AUTH/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},fe=function(){return function(){var e=Object(P.a)(w.a.mark((function e(t){var n,a,r,c,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce();case 2:(n=e.sent).resultCode===I.a.Success&&(a=n.data,r=a.id,c=a.login,o=a.email,t(ie(r,o,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},de=function(){return function(){var e=Object(P.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,se();case 3:n=e.sent,a=n.url,t(me(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/AUTH/SET_USER_DATA":case"SN/AUTH/GET_CAPTCHA_URL_SUCCESS":return Object(C.a)(Object(C.a)({},e),t.payload);default:return e}},Ee=n(88),be=n.n(Ee),he=Object(S.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},Object(v.c)("Email","email",[J.b],v.a),Object(v.c)("Password","password",[J.b],v.a,{type:"password"}),Object(v.c)(void 0,"rememberMe",[],v.a,{type:"checkbox"},"remember me"),a&&r.a.createElement("img",{src:a}),a&&Object(v.c)("Symbols from image","captcha",[J.b],v.a,{}),n&&r.a.createElement("div",{className:be.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),ve=function(){var e=Object(K.d)((function(e){return e.auth.captchaUrl})),t=Object(K.d)((function(e){return e.auth.isAuth})),n=Object(K.c)();return t?r.a.createElement(q.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(he,{onSubmit:function(e){var t,a,r,c;n((t=e.email,a=e.password,r=e.rememberMe,c=e.captcha,function(){var e=Object(P.a)(w.a.mark((function e(n){var o,u;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe(t,a,r,c);case 2:(o=e.sent).resultCode===I.a.Success?n(fe()):(o.resultCode===I.a.Captcha&&n(de()),u=o.messages.length>0?o.messages[0]:"Some error",n(Object(T.a)("login",{_error:u})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},captchaUrl:e}))},Se={initialized:!1},ge=function(){return{type:"SN/APP/INITIALIZED_SUCCESS"}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/APP/INITIALIZED_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{initialized:!0});default:return e}},je=n(181),ye=n(183),_e=n(192),we=n(184),Pe=n(185),ke=Object(Q.c)({profilePage:M,messagesPage:je.b,usersPage:ye.a,auth:pe,app:Oe,form:we.a,chat:Pe.a}),Ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.d,Te=Object(Q.e)(ke,Ce(Object(Q.a)(_e.a)));window.store=Te;var Ie=Te;function Ne(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"loading...")},r.a.createElement(e,t))}}var Ue=n(146),Ae=n(361),xe=n(362),Le=n(367),Re=n(368),Fe=n(369),De=n(365),Me=n(366),Ge=n(363),He=n(121),ze=function(e){return e.auth.isAuth},Be=function(e){return e.auth.login},Ve=function(){var e=Object(K.d)(ze),t=Object(K.d)(Be),n=Object(K.c)(),a=Ae.a.Header;return r.a.createElement(a,{className:"header"},r.a.createElement(De.a,null,r.a.createElement(Me.a,{span:18},r.a.createElement(Ue.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"]},r.a.createElement(Ue.a.Item,{key:"1"},r.a.createElement(te.b,{to:"/users"},"Users")))),e?r.a.createElement(r.a.Fragment,null," ",r.a.createElement(Me.a,{span:1},r.a.createElement(Ge.a,{alt:t||"",style:{backgroundColor:"#87d068"},icon:r.a.createElement(Le.a,null)})),r.a.createElement(Me.a,{span:5},r.a.createElement(He.a,{onClick:function(){n(function(){var e=Object(P.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue();case 2:0===e.sent.data.resultCode&&t(ie(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Log out"))):r.a.createElement(Me.a,{span:6},r.a.createElement(He.a,null,r.a.createElement(te.b,{to:"/login"},"Login")))))},Je=r.a.lazy((function(){return n.e(5).then(n.bind(null,386))})),We=r.a.lazy((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,387))})),Ye=r.a.lazy((function(){return n.e(6).then(n.bind(null,385))})),Ke=Ne(Je),Xe=Ne(ee),Ze=Ne(Ye),qe=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).catchAllUnhandledError=function(e){alert("some error"),console.error(e)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledError)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledError)}},{key:"render",value:function(){if(!this.props.initialized)return r.a.createElement(f.a,null);var e=Ue.a.SubMenu,t=Ae.a.Content,n=Ae.a.Footer,c=Ae.a.Sider;return r.a.createElement(Ae.a,null,r.a.createElement(Ve,null),r.a.createElement(t,{style:{padding:"0 50px"}},r.a.createElement(xe.a,{style:{margin:"16px 0"}},r.a.createElement(xe.a.Item,null,"App")),r.a.createElement(Ae.a,{className:"site-layout-background",style:{padding:"24px 0"}},r.a.createElement(c,{className:"site-layout-background",width:200},r.a.createElement(Ue.a,{mode:"inline",defaultOpenKeys:["sub1"],style:{height:"100%"}},r.a.createElement(e,{key:"sub1",icon:r.a.createElement(Le.a,null),title:"My Profile"},r.a.createElement(Ue.a.Item,{key:"1"},r.a.createElement(te.b,{to:"/profile"},"Profile")),r.a.createElement(Ue.a.Item,{key:"2"},r.a.createElement(te.b,{to:"/dialogs"},"Dialogs"))),r.a.createElement(e,{key:"sub2",icon:r.a.createElement(Re.a,null),title:"Users"},r.a.createElement(Ue.a.Item,{key:"3"},r.a.createElement(te.b,{to:"/users"},"Users")),r.a.createElement(Ue.a.Item,{key:"4"},r.a.createElement(te.b,{to:"/chat"},"Chat"))),r.a.createElement(e,{key:"sub3",icon:r.a.createElement(Fe.a,null),title:"Others"},r.a.createElement(Ue.a.Item,{key:"5"},r.a.createElement(te.b,{to:"/news"},"News")),r.a.createElement(Ue.a.Item,{key:"6"},r.a.createElement(te.b,{to:"/music"},"Music")),r.a.createElement(Ue.a.Item,{key:"7"},r.a.createElement(te.b,{to:"/settings"},"Settings"))))),r.a.createElement(t,{style:{padding:"0 24px",minHeight:280}},r.a.createElement(q.d,null,r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(q.b,{exact:!0,path:"/",render:function(){return r.a.createElement(q.a,{to:"/profile"})}}),r.a.createElement(q.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Xe,null)}}),r.a.createElement(q.b,{exact:!0,path:"/dialogs",render:function(){return r.a.createElement(Ke,null)}}),r.a.createElement(q.b,{path:"/users",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,r.a.createElement(f.a,null))},r.a.createElement(We,{pageTitle:"Guys who want to learn React too"}))}}),r.a.createElement(q.b,{path:"/news",render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(q.b,{path:"/music",render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(q.b,{path:"/settings",render:function(){return r.a.createElement(re,null)}}),r.a.createElement(q.b,{path:"/chat",render:function(){return r.a.createElement(Ze,null)}}),r.a.createElement(q.b,{path:"/login",render:function(){return r.a.createElement(ve,null)}})))))),r.a.createElement(n,{style:{textAlign:"center"}},"Social Network \xa92021 Created by Sergey Hrabrov"))}}]),n}(a.Component),Qe=Object(Q.d)(q.h,Object(K.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(fe()).then((function(){e(ge())}))}}}))(qe),$e=function(){return r.a.createElement(te.a,{hashType:"slash"},r.a.createElement(K.a,{store:Ie},r.a.createElement(Qe,null)))};o.a.render(r.a.createElement($e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2QDxN",mainPhoto:"ProfileInfo_mainPhoto__2Vt2r",contact:"ProfileInfo_contact__15Toe"}},71:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},83:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(186),o=n.n(c),u=n(187),s=n.n(u);t.a=function(){return r.a.createElement("div",{className:s.a.preloader},r.a.createElement("img",{src:o.a}))}},88:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1Bdil",error:"FormsControls_error__3rfaG",formSummaryError:"FormsControls_formSummaryError__Ta6ne"}}},[[233,1,2]]]);
//# sourceMappingURL=main.9f124a69.chunk.js.map