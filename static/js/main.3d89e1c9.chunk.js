(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{179:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(65),c=n.n(s),i=(n(75),n(3)),o=n(4),l=n.n(o),u=n(6),d=n(5),p=(n(77),n(1)),h=function(){return Object(p.jsx)("section",{className:"intro",children:Object(p.jsxs)("div",{className:"intro__content",children:[Object(p.jsx)("h1",{className:"intro__title",children:"Test assignment for front-end developer"}),Object(p.jsx)("p",{className:"intro__subtitle",children:"What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."}),Object(p.jsx)("a",{href:"#q",className:"intro__button button",children:"Sign up"})]})})},m=n.p+"static/media/Logo.8bb55362.svg",j=function(){return Object(p.jsx)("header",{className:"header",children:Object(p.jsxs)("div",{className:"header__container",children:[Object(p.jsx)("img",{src:m,alt:"Logo",className:"header__logo"}),Object(p.jsx)("nav",{className:"nav",children:Object(p.jsxs)("ul",{className:"nav__menu",children:[Object(p.jsx)("li",{className:"nav__item",children:Object(p.jsx)("a",{href:"#users",className:"nav__link button",children:"Users"})}),Object(p.jsx)("li",{className:"nav__item",children:Object(p.jsx)("a",{href:"#signUp",className:"nav__link button",children:"Sign up"})})]})})]})})},b=function(e){var t=e.users,n=e.showMore,a=e.nextPage;return Object(p.jsxs)("section",{className:"devs",id:"users",children:[Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{className:"devs__title",children:"Working with GET request"}),Object(p.jsx)("div",{className:"devs__list",children:t.map((function(e){return Object(p.jsxs)("div",{className:"devs__card card",children:[Object(p.jsx)("img",{src:e.photo,alt:e.name,className:"card__image"}),Object(p.jsx)("p",{className:"card__title",children:e.name.length>40?"".concat(e.name.substring(0,e.name.length/2),"..."):e.name}),Object(p.jsxs)("div",{className:"card__subtitle",children:[Object(p.jsx)("p",{className:"card__position",children:e.position}),Object(p.jsx)("p",{className:"card__email",children:e.email.length>40?"".concat(e.email.substring(0,e.email.length/2),"..."):e.email}),Object(p.jsx)("p",{className:"card__phone",children:e.phone})]})]},e.id)}))})]}),a?Object(p.jsx)("button",{type:"button",className:"devs__button button",onClick:function(){return n()},children:"Show more"}):""]})},f="https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6",x=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:f,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.positions);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token");case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.next=8,fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users",{method:"POST",body:t,headers:{Token:a.token}});case 8:return r=e.sent,e.next=11,r.json();case 11:return s=e.sent,e.abrupt("return",s);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=n(41),N=n(10),g=n.n(N),k=n(15),w=function(e){var t=e.positions,n=e.updateUsers,a=k.b().shape({name:k.c().required("It`s required field").max(60,"Not more than 60"),email:k.c().email("Invalid email").required("It`s required field"),phone:k.c().matches(/(?:\+38)?(0\d{9})+/,"Invalid phone number expected +380...").required("It`s required field").max(13,"Invalid phone number length"),position:k.c().required("It`s required field"),photo:k.a().required("File is required")});return Object(p.jsx)("section",{className:"post",id:"signUp",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{className:"post__title",children:"Working with POST request"}),Object(p.jsx)("div",{className:"post__form form",children:Object(p.jsx)(v.b,{initialValues:{name:"",email:"",phone:"",position:"",photo:""},validateOnBlur:!0,validationSchema:a,onSubmit:function(){var e=Object(u.a)(l.a.mark((function e(t,a){var r,s,c,i,o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.name,s=t.email,c=t.phone,i=t.photo,o=t.position,(u=new FormData).append("position_id","".concat(o)),u.append("name",r),u.append("email",s),u.append("phone",c),u.append("photo",i),e.next=9,_(u);case 9:n(),a.resetForm();case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var n=e.setFieldValue,a=e.values,r=e.errors,s=e.touched,c=e.handleChange,i=e.handleBlur,o=e.handleSubmit;return Object(p.jsxs)("form",{onSubmit:o,className:"form__content",children:[Object(p.jsxs)("label",{htmlFor:"name",className:g()("form__field",{"form__field-error":s.name&&r.name}),children:[Object(p.jsx)("input",{type:"text",id:"name",value:a.name,onChange:c,onBlur:i,placeholder:"Name"}),Object(p.jsx)("span",{className:g()("placeholder",{"placeholder-error":s.name&&r.name}),children:"Your name"}),s.name&&r.name&&Object(p.jsx)("p",{className:"error field-error",children:r.name})]}),Object(p.jsxs)("label",{htmlFor:"email",className:g()("form__field",{"form__field-error":s.email&&r.email}),children:[Object(p.jsx)("input",{type:"text",id:"email",value:a.email,onChange:c,onBlur:i,placeholder:"Email"}),Object(p.jsx)("span",{className:g()("placeholder",{"placeholder-error":s.email&&r.email}),children:"Email"}),s.email&&r.email&&Object(p.jsx)("p",{className:"error field-error",children:r.email})]}),Object(p.jsxs)("label",{htmlFor:"phone",className:g()("form__field",{"form__field-error":s.phone&&r.phone}),children:[Object(p.jsx)("input",{type:"tel",id:"phone",value:a.phone,onChange:c,onBlur:i,placeholder:"+380..."}),Object(p.jsx)("span",{className:g()("placeholder",{"placeholder-error":s.phone&&r.phone}),children:"Phone"}),s.phone&&r.phone&&Object(p.jsx)("p",{className:"error field-error",children:r.phone})]}),Object(p.jsxs)("div",{className:"form__position",children:[Object(p.jsx)("span",{className:"form__position-title",children:"Select your position"}),t.map((function(e){return Object(p.jsxs)("div",{className:"radio",children:[Object(p.jsx)(v.a,{type:"radio",value:e.id,id:e.name,checked:+a.position===e.id,className:"radio__input",onChange:function(){return n("position",e.id)}}),Object(p.jsx)("label",{htmlFor:e.name,className:"radio__label",children:e.name})]},e.id)})),s.position&&r.position&&Object(p.jsx)("p",{className:"error form__position-error",children:r.position})]}),Object(p.jsxs)("label",{className:"uploadLabel",htmlFor:"photo",children:[Object(p.jsx)("input",{type:"file",className:"uploadButton",id:"photo",name:"photo",onChange:function(e){e.target.files&&n("photo",e.target.files[0])}}),Object(p.jsx)("span",{className:g()("uploadText",{"uploadText-error":s.photo&&r.photo}),children:"Upload"}),Object(p.jsx)("span",{className:g()("uploadText2",{"uploadText2-error":s.photo&&r.photo}),children:a.photo?"Photo is uploaded":"Upload your photo"}),s.photo&&r.photo&&Object(p.jsx)("p",{className:"error uploadLabel-error",children:r.photo})]}),Object(p.jsx)("button",{type:"submit",className:"button form__button",children:"Sign up"})]})}})})]})})},y=function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),c=Object(d.a)(s,2),o=c[0],m=c[1],f=Object(a.useState)(null),_=Object(d.a)(f,2),v=_[0],N=_[1],g=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,N(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=8;break}return e.next=3,x();case 3:t=e.sent,r(t.users),m(t.links.next_url),e.next=13;break;case 8:return e.next=10,x(o);case 10:a=e.sent,r([].concat(Object(i.a)(n),Object(i.a)(a.users))),m(a.links.next_url);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,r(t.users),m(t.links.next_url);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){k(),g()}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(j,{}),Object(p.jsx)(h,{}),n&&Object(p.jsx)(b,{users:n,showMore:function(){k()},nextPage:o}),v&&Object(p.jsx)(w,{positions:v,updateUsers:y})]})};c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))},75:function(e,t,n){},77:function(e,t,n){}},[[179,1,2]]]);
//# sourceMappingURL=main.3d89e1c9.chunk.js.map