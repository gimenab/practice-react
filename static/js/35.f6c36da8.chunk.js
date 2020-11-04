(this["webpackJsonpdevias-material-kit-pro"]=this["webpackJsonpdevias-material-kit-pro"]||[]).push([[35],{1443:function(e,a,t){"use strict";var n=t(13);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),r=(0,n(t(15)).default)(l.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");a.default=r},1468:function(e,a,t){"use strict";t.r(a);var n=t(16),l=t(0),r=t.n(l),c=t(163),m=t(933),o=t(160),u=t(31),i=t(91),s=t(10),d=t(2),E=t(6),f=t(40),p=t(800),v=t(1443),g=t.n(v),b=Object(c.a)((function(e){return{root:{},toolbar:{"& > * + *":{marginLeft:e.spacing(1)}},deleteButton:{color:e.palette.common.white,backgroundColor:E.a.red[600],"&:hover":{backgroundColor:E.a.red[900]}},deleteIcon:{marginRight:e.spacing(1)}}}));var O=function(e){var a=e.order,t=e.className,n=Object(s.a)(e,["order","className"]),l=b();return r.a.createElement("div",Object.assign({},n,{className:Object(d.a)(l.root,t)}),r.a.createElement(o.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},r.a.createElement(o.a,{item:!0},r.a.createElement(f.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Orders"),r.a.createElement(f.a,{component:"h1",variant:"h3"},"Order #",a.id.split("-").shift())),r.a.createElement(o.a,{item:!0},r.a.createElement(p.a,{className:l.deleteButton,variant:"contained"},r.a.createElement(g.a,{className:l.deleteIcon}),"Delete"))))},h=t(18),j=t(4),N=t.n(j),y=t(816),M=t(807),C=t(802),x=t(817),D=t(928),k=t(929),I=t(930),B=t(931),R=t(422),S=t(926),_=t(918),w=t(975),z=t.n(w),H=t(269),L=t.n(H),P=Object(c.a)((function(e){return{root:{},content:{padding:0},actions:{flexDirection:"column",alignItems:"flex-start","& > * + *":{marginLeft:0}},buttonIcon:{marginRight:e.spacing(1)}}})),Y=["Canceled","Completed","Rejected"];var A=function(e){var a=e.order,t=e.className,c=Object(s.a)(e,["order","className"]),m=P(),o=Object(l.useState)(Y[0]),u=Object(n.a)(o,2),i=u[0],E=u[1];return r.a.createElement(y.a,Object.assign({},c,{className:Object(d.a)(m.root,t)}),r.a.createElement(M.a,{title:"Order info"}),r.a.createElement(C.a,null),r.a.createElement(x.a,{className:m.content},r.a.createElement(D.a,null,r.a.createElement(k.a,null,r.a.createElement(I.a,null,r.a.createElement(B.a,null,"Customer"),r.a.createElement(B.a,null,r.a.createElement(R.a,{component:h.a,to:"/management/customers/1"},a.customer.name),r.a.createElement("div",null,a.customer.address),r.a.createElement("div",null,a.customer.city),r.a.createElement("div",null,a.customer.country))),r.a.createElement(I.a,{selected:!0},r.a.createElement(B.a,null,"ID"),r.a.createElement(B.a,null,"#",a.id.split("-").shift())),r.a.createElement(I.a,null,r.a.createElement(B.a,null,"Ref"),r.a.createElement(B.a,null,a.ref)),r.a.createElement(I.a,{selected:!0},r.a.createElement(B.a,null,"Date"),r.a.createElement(B.a,null,N()(a.created_at).format("DD/MM/YYYY HH:MM"))),r.a.createElement(I.a,null,r.a.createElement(B.a,null,"Promotion Code"),r.a.createElement(B.a,null,a.promoCode?a.promoCode:"N/A")),r.a.createElement(I.a,{selected:!0},r.a.createElement(B.a,null,"Amount"),r.a.createElement(B.a,null,a.currency,a.value)),r.a.createElement(I.a,null,r.a.createElement(B.a,null,"Status"),r.a.createElement(B.a,null,r.a.createElement(S.a,{fullWidth:!0,name:"option",onChange:function(e){e.persist(),E(e.target.value)},select:!0,SelectProps:{native:!0},value:i,variant:"outlined"},Y.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))))))),r.a.createElement(_.a,{className:m.actions},r.a.createElement(p.a,null,r.a.createElement(z.a,{className:m.buttonIcon}),"Edit"),r.a.createElement(p.a,null,r.a.createElement(L.a,{className:m.buttonIcon}),"Resend invoice")))},V=t(63),W=t.n(V),J=t(932),T=Object(c.a)((function(){return{root:{},content:{padding:0},inner:{minWidth:700}}}));var q=function(e){var a=e.order,t=e.className,n=Object(s.a)(e,["order","className"]),l=T();return r.a.createElement(y.a,Object.assign({},n,{className:Object(d.a)(l.root,t)}),r.a.createElement(M.a,{title:"Order items"}),r.a.createElement(C.a,null),r.a.createElement(x.a,{className:l.content},r.a.createElement(W.a,null,r.a.createElement("div",{className:l.inner},r.a.createElement(D.a,null,r.a.createElement(J.a,null,r.a.createElement(I.a,null,r.a.createElement(B.a,null,"Description"),r.a.createElement(B.a,null,"Billing Cycle"),r.a.createElement(B.a,null,"Status"),r.a.createElement(B.a,null,"Amount"))),r.a.createElement(k.a,null,a.items.map((function(e){return r.a.createElement(I.a,{key:e.id},r.a.createElement(B.a,null,e.name," ","x"," ",e.cuantity),r.a.createElement(B.a,null,e.billing),r.a.createElement(B.a,null,e.status),r.a.createElement(B.a,null,e.currency,e.value))}))))))))},F=Object(c.a)((function(e){return{root:{paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},grid:{marginTop:e.spacing(2)}}}));a.default=function(){var e=F(),a=Object(l.useState)(null),t=Object(n.a)(a,2),c=t[0],s=t[1];return Object(l.useEffect)((function(){var e=!0;return u.a.get("/api/orders/1").then((function(a){e&&s(a.data.order)})),function(){e=!1}}),[]),c?r.a.createElement(i.a,{className:e.root,title:"Order Management Details"},r.a.createElement(m.a,{maxWidth:!1},r.a.createElement(O,{order:c}),r.a.createElement(o.a,{className:e.grid,container:!0,spacing:3},r.a.createElement(o.a,{item:!0,md:4,xl:3,xs:12},r.a.createElement(A,{order:c})),r.a.createElement(o.a,{item:!0,md:8,xl:9,xs:12},r.a.createElement(q,{order:c}))))):null}},975:function(e,a,t){"use strict";var n=t(13);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),r=(0,n(t(15)).default)(l.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");a.default=r}}]);
//# sourceMappingURL=35.f6c36da8.chunk.js.map