(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(55)},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),i=a(25),o=a(75),s=a(73),u=a(76),m=a(74),d=a(1),f=a(8),h=a(9),g=a(11),p=a(10),b=a(12),E=a(80),y=a(71),v=a(70),j=a(79),w=a(72),x=a(81),O=a(64),C=a(77),S=a(82),k=a(78),I=Array(50).fill().map(function(e,t){var a=Math.floor(601*Math.random())+100;return"MAJR ".concat(a)}),z=Array(2).fill().map(function(e,t){var a=Math.floor(601*Math.random())+100;return"MINR ".concat(a)}),M=function(e){return r.a.createElement(u.a,{flex:!0,direction:"column",align:"center",justify:"center"},r.a.createElement(x.a,{fill:!0,onClick:function(){e.clickFunc(e.id)},label:r.a.createElement("strong",null,e.name),hoverIndicator:!0,style:{background:"white",padding:"30% 100% 30% 100%",radius:"4px",border:"3px solid main",fontSize:"30px"}}))},T=function(e){return r.a.createElement(O.a,{items:e.list,step:20},function(t){return r.a.createElement(u.a,{align:"center",pad:"small",key:t},r.a.createElement(M,{clickFunc:e.clickFunc,name:t,id:t}))})},A=function(e){var t=e.label;return r.a.createElement(u.a,{direction:"row",align:"center",gap:"xsmall",margin:"xsmall"},r.a.createElement(C.a,{size:"large"},r.a.createElement("strong",null,t)))},P=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={courseTab:0},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.state.courseTab;return r.a.createElement(S.a,{activeIndex:t,onActive:function(t){e.setState({courseTab:t})}},r.a.createElement(k.a,{title:r.a.createElement(A,{label:"Major"})},r.a.createElement(T,{clickFunc:this.props.clickFunc,list:I})),r.a.createElement(k.a,{title:r.a.createElement(A,{label:"Minor"})},r.a.createElement(T,{clickFunc:this.props.clickFunc,list:z})),r.a.createElement(k.a,{title:r.a.createElement(A,{label:"Search"})},r.a.createElement(u.a,{direction:"column",align:"center",justify:"start",pad:"small",animation:{type:"fadeIn",size:"xlarge"}},r.a.createElement(j.a,{level:"2"},"search bar"))))}}]),t}(n.Component),F=a(65),R=a(66),H=a(67),J=a(68),N=a(69),D=[{term:"2017-3",classes:["CSCI 103","CSCI 109","WRIT 150","CHEM 105a","MATH 226"]},{term:"2018-1",classes:["CSCI 104","CSCI 170","GESM 121","CHEM 115b","MATH 225"]},{term:"2018-3",classes:["CSCI 201","CSCI 270","PSYC 100","CHEM 322a"]},{term:"2019-1",classes:["CSCI 356","EE 109","BISC 220","MATH 407"]}],G=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{flex:!0,direction:"column",justify:"start",align:"center",animation:{type:"fadeIn",delay:50,duration:750,size:"large"}},r.a.createElement(j.a,{level:"1",margin:{top:"large",bottom:"0",left:"large"}},"Course Plan"),r.a.createElement(u.a,{flex:!0,direction:"row",align:"start",justify:"center"},D.map(function(e){return r.a.createElement(u.a,{flex:!0,margin:"large"},r.a.createElement(F.a,{caption:e.term},r.a.createElement(R.a,null,r.a.createElement(H.a,null,r.a.createElement(J.a,null,r.a.createElement(j.a,{level:"3"},e.term)))),r.a.createElement(N.a,null,e.classes.map(function(e){return r.a.createElement(H.a,null,r.a.createElement(J.a,null,r.a.createElement(C.a,{size:"large"},e)))}))))})))}}]),t}(n.Component),W=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{flex:!0,direction:"column",justify:"center",align:"center",animation:{type:"fadeIn",delay:50,duration:750,size:"large"}},r.a.createElement(j.a,{level:"1"},"Profile"),r.a.createElement(v.a,{path:"/",hoverIndicator:!0,label:"Go back to welcome page ... "}))}}]),t}(n.Component),B=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{flex:!0,direction:"column",justify:"start",align:"start",pad:"5%",animation:{type:"fadeIn",delay:50,duration:750,size:"large"}},r.a.createElement(j.a,{level:"1"},this.props.id),r.a.createElement(C.a,{size:"large",margin:{bottom:"large"}},"More details will go here"),r.a.createElement(x.a,{href:"/Main",hoverIndicator:!0,label:"Reload this page ... ",alignSelf:"center",margin:{top:"10%"}}))}}]),t}(n.Component),_=function(e){return r.a.createElement(u.a,Object.assign({flex:!0,direction:"row",align:"center",justify:"between",background:"main",pad:"large",animation:{type:"slideDown",delay:0,duration:500,size:"xlarge"},style:{zIndex:"100"}},e))},X=function(e){return r.a.createElement(E.a,Object.assign({onClick:e.func,color:"light",size:"xxlarge"},e),e.text)},Y=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={showSidebar:!0,display:"none",whichClass:"none"},a.displayClass=function(e){a.setState({display:"class",whichClass:e})},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.showSidebar,n=t.display,l=t.whichClass;return r.a.createElement(y.a.Consumer,null,function(t){return r.a.createElement(u.a,{flex:!0,direction:"column",align:"stretch",justify:"start"},r.a.createElement(_,null,r.a.createElement(v.a,{plain:!0,path:"/"},r.a.createElement(j.a,{level:"1",color:"white"},"Sycamore Scheduler")),r.a.createElement(u.a,{direction:"row",align:"center",justify:"end"},r.a.createElement(X,{margin:{right:"large"},text:"Classes",func:function(){return e.setState({showSidebar:!e.state.showSidebar})}}),r.a.createElement(X,{margin:{right:"large"},text:"Course Plan",func:function(){return e.setState({display:"coursePlan"})}}),r.a.createElement(X,{text:"Profile",func:function(){return e.setState({display:"profile"})}}))),r.a.createElement(u.a,{fill:!0,direction:"row",justify:"start",align:"stretch",animation:{type:"fadeIn",delay:500,duration:500,size:"large"}},r.a.createElement(w.a,{direction:"horizontal",open:a},r.a.createElement(u.a,{width:"medium",animation:{type:"slideRight",delay:500,duration:500,size:"large"},style:{minHeight:"100%"},background:"light-2"},r.a.createElement(P,{clickFunc:e.displayClass}))),"coursePlan"===n&&r.a.createElement(G,null),"profile"===n&&r.a.createElement(W,null),"none"===n&&r.a.createElement(u.a,{flex:!0,direction:"column",justify:"center",align:"center",animation:{type:"fadeIn",delay:500,duration:500,size:"large"}},r.a.createElement(j.a,{level:"1"},"Click on a class to view details"),r.a.createElement(x.a,{hoverIndicator:!0,onClick:function(){console.log("Testing GET /ProfileServlet ..."),fetch("/sycamore-scheduler/ProfileServlet?profileEmail=sajeevsa@usc.edu",{method:"GET"}).then(function(e){return e.json()}).then(function(e){var t=e.full_name,a=e.major_1;console.log("NAME:\t"+t+"\nMAJOR:\t"+a)}),console.log("Testing POST /RegisterServlet ..."),fetch("/sycamore-scheduler/RegisterServlet",{method:"POST",body:{email:"sajeevsa@usc.edu",fName:"sajeev",lName:"saluja",password:"password",major1:"csci"}}).then(function(e){return e.json()}).then(function(e){console.log(e),console.log("Testing accessing JSON"),console.log(typeof e)})},label:"Do some AJAX"})),"class"===n&&r.a.createElement(B,{id:l})))})}}]),t}(n.Component),$=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{flex:!0,direction:"column",justify:"center",align:"center"},r.a.createElement(u.a,{animation:{type:"slideDown",delay:0,duration:500,size:"large"}},r.a.createElement(j.a,{level:"1"},"Welcome")),r.a.createElement(u.a,{animation:{type:"fadeIn",delay:0,duration:750,size:"xlarge"}},r.a.createElement(v.a,{path:"/Main",hoverIndicator:!0,label:"enter Sycamore Scheduler ... "})))}}]),t}(n.Component);function q(){var e=Object(i.a)(["\n\t\t\tborder-radius: ",";\n\t\t"]);return q=function(){return e},e}function K(){var e=Object(i.a)(["\n\t\t\tflex: 0 0;\n\t\t\tpadding-top: ",";\n\t\t\tpadding-bottom: ",";\n\t\t\tbox-shadow: 0;\n\t\t  "]);return K=function(){return e},e}var L={global:{colors:{main:"#ff3300"},font:{family:"Source Sans Pro",size:"14px",height:"20px",color:"#ffffff"},hover:{color:"black",background:"inherit"}},button:{border:{color:"main"}},anchor:{color:"#ff3300",hover:{textDecoration:"none"}},box:{extend:{whiteSpace:"nowrap"}},tabs:{background:"light-2",header:{background:"light-2",extend:function(e){var t=e.theme;return Object(d.a)(K(),t.global.edgeSize.medium,t.global.edgeSize.medium)}},gap:"medium",extend:"\n\t\tdiv[role='tabpanel'] {\n\t\t\toverflow-y: auto;\n\t\t\toverflow-x: hidden;\n\t\t\tpadding-bottom: 10%;\n\t\t}\n        "},tab:{active:{background:"main",color:"white"},color:"main",background:"white",hover:{background:"pink",border:{side:"all",color:"main",size:"small"},color:"white"},border:void 0,margin:void 0,pad:{bottom:void 0,horizontal:"xsmall"},extend:function(e){var t=e.theme;return Object(d.a)(q(),t.global.control.border.radius)}}},Q=function(){return r.a.createElement(u.a,{fill:!0},r.a.createElement(o.a,{exact:!0,path:"/",component:$}),r.a.createElement(o.a,{path:"/Main",component:Y}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(function(){return r.a.createElement(s.a,{basename:"/sycamore-scheduler"},r.a.createElement(m.a,{theme:L,full:!0},r.a.createElement(n.Fragment,null,r.a.createElement(Q,null))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,2,1]]]);
//# sourceMappingURL=main.39eb124f.chunk.js.map