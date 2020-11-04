(this["webpackJsonpdevias-material-kit-pro"]=this["webpackJsonpdevias-material-kit-pro"]||[]).push([[28],{1474:function(e,a,t){"use strict";t.r(a);var n=t(16),l=t(0),c=t.n(l),r=t(163),o=t(933),i=t(31),s=t(91),m=t(1013),u=t(10),d=t(2),E=t(160),g=t(40),f=t(800),p=Object(r.a)((function(){return{root:{}}}));var v=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=p();return c.a.createElement("div",Object.assign({},t,{className:Object(d.a)(n.root,a)}),c.a.createElement(E.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},c.a.createElement(E.a,{item:!0},c.a.createElement(g.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Management"),c.a.createElement(g.a,{component:"h1",variant:"h3"},"Customers")),c.a.createElement(E.a,{item:!0},c.a.createElement(f.a,{color:"primary",variant:"contained"},"Add customer"))))},h=t(18),b=t(63),O=t.n(b),j=t(816),y=t(807),N=t(802),P=t(817),k=t(928),x=t(932),C=t(930),L=t(931),w=t(968),I=t(929),M=t(254),S=t(422),z=t(918),B=t(1483),F=t(116),R=t(971),_=t(45),A=t(1151),T=Object(r.a)((function(e){return{root:{},content:{padding:0},inner:{minWidth:700},nameCell:{display:"flex",alignItems:"center"},avatar:{height:42,width:42,marginRight:e.spacing(1)},actions:{padding:e.spacing(1),justifyContent:"flex-end"}}}));function J(e){var a=e.className,t=e.customers,r=Object(u.a)(e,["className","customers"]),o=T(),i=Object(l.useState)([]),s=Object(n.a)(i,2),m=s[0],E=s[1],p=Object(l.useState)(0),v=Object(n.a)(p,2),b=v[0],J=v[1],W=Object(l.useState)(10),H=Object(n.a)(W,2),V=H[0],q=H[1];return c.a.createElement("div",Object.assign({},r,{className:Object(d.a)(o.root,a)}),c.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0,variant:"body2"},t.length," ","Records found. Page"," ",b+1," ","of"," ",Math.ceil(t.length/V)),c.a.createElement(j.a,null,c.a.createElement(y.a,{action:c.a.createElement(_.a,null),title:"All customers"}),c.a.createElement(N.a,null),c.a.createElement(P.a,{className:o.content},c.a.createElement(O.a,null,c.a.createElement("div",{className:o.inner},c.a.createElement(k.a,null,c.a.createElement(x.a,null,c.a.createElement(C.a,null,c.a.createElement(L.a,{padding:"checkbox"},c.a.createElement(w.a,{checked:m.length===t.length,color:"primary",indeterminate:m.length>0&&m.length<t.length,onChange:function(e){var a=e.target.checked?t.map((function(e){return e.id})):[];E(a)}})),c.a.createElement(L.a,null,"Name"),c.a.createElement(L.a,null,"Location"),c.a.createElement(L.a,null,"Money spent"),c.a.createElement(L.a,null,"Type"),c.a.createElement(L.a,null,"Projects held"),c.a.createElement(L.a,null,"Reviews"),c.a.createElement(L.a,{align:"right"},"Actions"))),c.a.createElement(I.a,null,t.slice(0,V).map((function(e){return c.a.createElement(C.a,{hover:!0,key:e.id,selected:-1!==m.indexOf(e.id)},c.a.createElement(L.a,{padding:"checkbox"},c.a.createElement(w.a,{checked:-1!==m.indexOf(e.id),color:"primary",onChange:function(a){return function(e,a){var t=m.indexOf(a),n=[];-1===t?n=n.concat(m,a):0===t?n=n.concat(m.slice(1)):t===m.length-1?n=n.concat(m.slice(0,-1)):t>0&&(n=n.concat(m.slice(0,t),m.slice(t+1))),E(n)}(0,e.id)},value:-1!==m.indexOf(e.id)})),c.a.createElement(L.a,null,c.a.createElement("div",{className:o.nameCell},c.a.createElement(M.a,{className:o.avatar,src:e.avatar},Object(F.a)(e.name)),c.a.createElement("div",null,c.a.createElement(S.a,{color:"inherit",component:h.a,to:"/management/customers/1",variant:"h6"},e.name),c.a.createElement("div",null,e.email)))),c.a.createElement(L.a,null,e.location),c.a.createElement(L.a,null,e.currency,e.spent),c.a.createElement(L.a,null,e.type),c.a.createElement(L.a,null,e.projects),c.a.createElement(L.a,null,c.a.createElement(R.a,{value:e.rating})),c.a.createElement(L.a,{align:"right"},c.a.createElement(f.a,{color:"primary",component:h.a,size:"small",to:"/management/customers/1",variant:"outlined"},"View")))}))))))),c.a.createElement(z.a,{className:o.actions},c.a.createElement(B.a,{component:"div",count:t.length,onChangePage:function(e,a){J(a)},onChangeRowsPerPage:function(e){q(e.target.value)},page:b,rowsPerPage:V,rowsPerPageOptions:[5,10,25]}))),c.a.createElement(A.a,{selected:m}))}J.defaultProps={customers:[]};var W=J,H=Object(r.a)((function(e){return{root:{paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},results:{marginTop:e.spacing(3)}}}));a.default=function(){var e=H(),a=Object(l.useState)([]),t=Object(n.a)(a,2),r=t[0],u=t[1];return Object(l.useEffect)((function(){var e=!0;return i.a.get("/api/management/customers").then((function(a){e&&u(a.data.customers)})),function(){e=!1}}),[]),c.a.createElement(s.a,{className:e.root,title:"Customer Management List"},c.a.createElement(o.a,{maxWidth:!1},c.a.createElement(v,null),c.a.createElement(m.a,{onFilter:function(){},onSearch:function(){}}),r&&c.a.createElement(W,{className:e.results,customers:r})))}},958:function(e,a,t){"use strict";var n=t(13);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),c=(0,n(t(15)).default)(l.default.createElement("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");a.default=c},959:function(e,a,t){"use strict";var n=t(13);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),c=(0,n(t(15)).default)(l.default.createElement(l.default.Fragment,null,l.default.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),l.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Star");a.default=c},971:function(e,a,t){"use strict";var n=t(10),l=t(0),c=t.n(l),r=t(2),o=t(3),i=t.n(o),s=t(163),m=t(6),u=t(959),d=t.n(u),E=t(958),g=t.n(E),f=Object(s.a)((function(e){return{root:{display:"inline-flex",alignItems:"center"},starIcon:{fontSize:18,height:18,width:18},starFilledIcon:{color:m.a.amber[400]},starBorderIcon:{color:e.palette.icon}}}));function p(e){for(var a=e.value,t=e.starCount,l=e.className,o=Object(n.a)(e,["value","starCount","className"]),s=f(),m=[],u=1;u<=t;u++){var E=i()(),p=u<=a?c.a.createElement(d.a,{className:Object(r.a)(s.starIcon,s.starFilledIcon),key:E}):c.a.createElement(g.a,{className:Object(r.a)(s.starIcon,s.starBorderIcon),key:E});m.push(p)}return c.a.createElement("div",Object.assign({},o,{className:Object(r.a)(s.root,l)}),m)}p.defaultProps={value:0,starCount:5},a.a=p}}]);
//# sourceMappingURL=28.134271c5.chunk.js.map