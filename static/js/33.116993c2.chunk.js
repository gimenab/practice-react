(this["webpackJsonpdevias-material-kit-pro"]=this["webpackJsonpdevias-material-kit-pro"]||[]).push([[33],{1052:function(e,a,t){"use strict";var n=t(10),r=t(19),c=t(0),i=t.n(c),o=t(2),l=t(163),s=t(6),p=t(1053),u=t.n(p);function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(t,!0).forEach((function(a){Object(r.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var d=Object(l.a)((function(e){return{root:g({},e.typography.button,{listStyle:"none",userSelect:"none",display:"flex",alignItems:"center"}),active:{},activeLink:{},break:{},breakLink:{},disabled:{},next:{marginLeft:e.spacing(1)},nextLink:{padding:"6px 16px",outline:"none",cursor:"pointer",borderRadius:4,"&:hover":{backgroundColor:s.a.blueGrey[50]}},page:{},pageLink:{color:e.palette.text.secondary,padding:e.spacing(1),outline:"none",cursor:"pointer",width:40,height:40,borderRadius:"50%",display:"block",textAlign:"center","&:hover":{backgroundColor:s.a.blueGrey[50],color:e.palette.text.primary},"&$activeLink":{backgroundColor:s.a.blueGrey[50],color:e.palette.text.primary}},previous:{marginRight:e.spacing(1)},previousLink:{padding:"6px 16px",outline:"none",cursor:"pointer",borderRadius:4,"&:hover":{backgroundColor:s.a.blueGrey[50]}}}}));function b(e){var a=e.pageCount,t=e.pageRangeDisplayed,r=e.onPageChange,c=e.className,l=Object(n.a)(e,["pageCount","pageRangeDisplayed","onPageChange","className"]),s=d();return i.a.createElement(u.a,Object.assign({activeClassName:s.active,activeLinkClassName:s.activeLink,breakClassName:s.break,breakLabel:"...",breakLinkClassName:s.breakLink,containerClassName:Object(o.a)(s.root,c),disabledClassName:s.disabled,marginPagesDisplayed:2,nextClassName:s.next,nextLabel:"next",nextLinkClassName:s.nextLink,onPageChange:r,pageClassName:s.page,pageCount:a,pageLinkClassName:s.pageLink,pageRangeDisplayed:t,previousClassName:s.previous,previousLabel:"previous",previousLinkClassName:s.previousLink,subContainerClassName:"pages pagination"},l))}b.defaultProps={onPageChange:function(){},pageCount:3,pageRangeDisplayed:5},a.a=b},1067:function(e,a,t){"use strict";var n=t(139),r=t(16),c=t(10),i=t(0),o=t.n(i),l=t(2),s=t(163),p=t(6),u=t(816),m=t(426),g=t(802),d=t(1068),b=t(978),f=t(968),v=t(206),h=t.n(v),E=t(800),j=t(251),O=t(162),y=t(996),k=t.n(y),N=Object(s.a)((function(e){return{root:{},menuItem:{padding:0},formControlLabel:{padding:e.spacing(.5,2),width:"100%",margin:0}}}));var C=function(e){var a=e.label,t=e.options,c=e.value,l=e.onChange,s=N(),p=Object(i.useRef)(null),u=Object(i.useState)(!1),m=Object(r.a)(u,2),g=m[0],d=m[1],v=function(e){var a=Object(n.a)(c);e.target.checked?a.push(e.target.value):a=a.filter((function(a){return a!==e.target.value})),l&&l(a)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{onClick:function(){d(!0)},ref:p},a,o.a.createElement(k.a,null)),o.a.createElement(j.a,{anchorEl:p.current,className:s.menu,onClose:function(){d(!1)},open:g,elevation:1,PaperProps:{style:{width:250}}},t.map((function(e){return o.a.createElement(O.a,{className:s.menuItem,key:e},o.a.createElement(b.a,{className:s.formControlLabel,control:o.a.createElement(f.a,{checked:c.indexOf(e)>-1,color:"primary",onClick:v,value:e}),label:e}))}))))},x=Object(s.a)((function(e){return{root:{},keywords:{padding:e.spacing(2),display:"flex",alignItems:"center"},searchIcon:{color:e.palette.icon,marginRight:e.spacing(2)},chips:{padding:e.spacing(2),display:"flex",alignItems:"center",flexWrap:"wrap"},chip:{margin:e.spacing(1)},selects:{display:"flex",alignItems:"center",flexWrap:"wrap",backgroundColor:p.a.grey[50],padding:e.spacing(1)},inNetwork:{marginLeft:"auto"}}})),w=[{label:"Type",options:["Freelance","Full Time","Part Time","Internship"]},{label:"Level",options:["Novice","Expert"]},{label:"Location",options:["Africa","Asia","Australia","Europe","North America","South America"]},{label:"Roles",options:["Android","Web Developer","iOS"]}];a.a=function(e){var a=e.className,t=Object(c.a)(e,["className"]),s=x(),p=Object(i.useState)(""),v=Object(r.a)(p,2),E=v[0],j=v[1],O=Object(i.useState)(["Freelance","Full Time","Novice","Europe","Android","Web Developer"]),y=Object(r.a)(O,2),k=y[0],N=y[1],L=function(e){N(e)};return o.a.createElement(u.a,Object.assign({},t,{className:Object(l.a)(s.root,a)}),o.a.createElement("div",{className:s.keywords},o.a.createElement(h.a,{className:s.searchIcon}),o.a.createElement(m.a,{disableUnderline:!0,onChange:function(e){e.persist(),j(e.target.value)},onKeyUp:function(e){e.persist(),13===e.keyCode&&E&&(k.includes(E)||(N((function(e){return[].concat(Object(n.a)(e),[E])})),j("")))},placeholder:"Enter a keyword",value:E})),o.a.createElement(g.a,null),o.a.createElement("div",{className:s.chips},k.map((function(e){return o.a.createElement(d.a,{className:s.chip,key:e,label:e,onDelete:function(){return function(e){N((function(a){return a.filter((function(a){return e!==a}))}))}(e)}})}))),o.a.createElement(g.a,null),o.a.createElement("div",{className:s.selects},w.map((function(e){return o.a.createElement(C,{key:e.label,label:e.label,onChange:L,options:e.options,value:k})})),o.a.createElement(b.a,{className:s.inNetwork,control:o.a.createElement(f.a,{color:"primary",defaultChecked:!0}),label:"In network"})))}},1477:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(163),i=t(933),o=t(91),l=t(10),s=t(18),p=t(2),u=t(160),m=t(40),g=t(800),d=t(258),b=t.n(d),f=Object(c.a)((function(e){return{root:{},addIcon:{marginRight:e.spacing(1)}}}));var v=function(e){var a=e.className,t=Object(l.a)(e,["className"]),n=f();return r.a.createElement("div",Object.assign({},t,{className:Object(p.a)(n.root,a)}),r.a.createElement(u.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},r.a.createElement(u.a,{item:!0},r.a.createElement(m.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Browse projects"),r.a.createElement(m.a,{component:"h1",variant:"h3"},"See the latest opportunities")),r.a.createElement(u.a,{item:!0},r.a.createElement(g.a,{color:"primary",component:s.a,to:"/projects/create",variant:"contained"},r.a.createElement(b.a,{className:n.addIcon}),"Submit project"))))},h=t(1067),E=t(16),j=t(251),O=t(162),y=t(159),k=t(1152),N=t(1093),C=t(1446),x=t.n(C),w=t(996),L=t.n(w),P=t(31),S=t(1052),I=t(266),R=Object(c.a)((function(e){return{root:{},header:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",marginBottom:e.spacing(2)},title:{position:"relative","&:after":{position:"absolute",bottom:-8,left:0,content:'" "',height:3,width:48,backgroundColor:e.palette.primary.main}},actions:{display:"flex",alignItems:"center"},sortButton:{textTransform:"none",letterSpacing:0,marginRight:e.spacing(2)},paginate:{marginTop:e.spacing(3),display:"flex",justifyContent:"center"}}}));var D=function(e){var a=e.className,t=Object(l.a)(e,["className"]),c=R(),i=Object(n.useRef)(null),o=Object(n.useState)(!1),s=Object(E.a)(o,2),d=s[0],b=s[1],f=Object(n.useState)("Most popular"),v=Object(E.a)(f,2),h=v[0],C=v[1],w=Object(n.useState)("grid"),D=Object(E.a)(w,2),T=D[0],A=D[1],B=Object(n.useState)([]),W=Object(E.a)(B,2),F=W[0],G=W[1];return Object(n.useEffect)((function(){var e=!0;return P.a.get("/api/projects").then((function(a){e&&G(a.data.projects)})),function(){e=!1}}),[]),r.a.createElement("div",Object.assign({},t,{className:Object(p.a)(c.root,a)}),r.a.createElement("div",{className:c.header},r.a.createElement(m.a,{className:c.title,variant:"h5"},"Showing"," ",F.length," ","projects"),r.a.createElement("div",{className:c.actions},r.a.createElement(g.a,{className:c.sortButton,onClick:function(){b(!0)},ref:i},h,r.a.createElement(L.a,null)),r.a.createElement(k.a,{exclusive:!0,onChange:function(e,a){A(a)},size:"small",value:T},r.a.createElement(N.a,{value:"grid"},r.a.createElement(x.a,null))))),r.a.createElement(u.a,{container:!0,spacing:3},F.map((function(e){return r.a.createElement(u.a,{item:!0,key:e.id,md:"grid"===T?4:12,sm:"grid"===T?6:12,xs:12},r.a.createElement(I.a,{project:e}))}))),r.a.createElement("div",{className:c.paginate},r.a.createElement(S.a,{pageCount:3})),r.a.createElement(j.a,{anchorEl:i.current,className:c.menu,onClose:function(){b(!1)},open:d,elevation:1},["Most recent","Popular","Price high","Price low","On sale"].map((function(e){return r.a.createElement(O.a,{className:c.menuItem,key:e,onClick:function(){return C(e),void b(!1)}},r.a.createElement(y.a,{primary:e}))}))))},T=Object(c.a)((function(e){return{root:{paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},header:{marginBottom:e.spacing(3)},filter:{marginTop:e.spacing(3)},results:{marginTop:e.spacing(6)}}}));a.default=function(){var e=T();return r.a.createElement(o.a,{className:e.root,title:"Projects List"},r.a.createElement(i.a,{maxWidth:"lg"},r.a.createElement(v,{className:e.header}),r.a.createElement(h.a,{className:e.filter}),r.a.createElement(D,{className:e.results})))}}}]);
//# sourceMappingURL=33.116993c2.chunk.js.map