(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e){e.exports=["ACAD","ACCT","ACMD","ACTN","ADNT","AEST","AHIS","ALI","AME","AMST","ANSC","ANST","ANTH","ARAB","ARCG","ARCH","ARLT","ART","ARTL","ARTS","ASCJ","ASTE","ASTR","BAEP","BIOC","BISC","BKN","BME","BPMK","BUAD","BUCO","BUS","BVC","CBG","CBY","CE","CHE","CHEM","CLAS","CMGT","CMPP","CNB","CNMA","CNTV","COLT","COMM","CORE","CRIT","CSCI","CSLC","CTAN","CTCS","CTIN","CTPR","CTWR","CXPT","DANC","DENT","DES","DHYG","DIAG","DNCR","DNTR","DPBL","DRNS","DSM","DSO","DSR","EALC","EASC","ECON","EDCO","EDCR","EDHP","EDPT","EDUC","EE","ENE","ENGL","ENGR","ENGV","ENST","FBE","FIM","FINE","FREN","FSEM","GCT","GDEN","GEOG","GEOL","GEP","GEPN","GERD","GERM","GERO","GESM","GPG","GPH","GR","GRSC","GSBA","HBIO","HCDA","HEBR","HINQ","HIST","HMGT","HP","HRM","IDSN","IML","INDS","INF","INTD","IR","IRAN","ISE","ITAL","ITP","JOUR","JS","LAT","LAW","LBST","LIFE","LIM","LING","MASC","MATH","MBPH","MDA","MDES","MED","MEDB","MEDK","MEDS","MICB","MKT","MOR","MPEM","MPGU","MPHY","MPKS","MPPM","MPST","MPTX","MPVA","MPW","MPWP","MS","MSCR","MSS","MTAL","MTEC","MUCD","MUCM","MUCO","MUEN","MUHL","MUIN","MUJZ","MUS","MUSC","NAUT","NEUR","NIIN","NSC","NSCI","NURS","OCST","OFP","OFPM","OPER","OPR","OS","OT","PAIN","PATH","PCPA","PEDO","PERI","PHAR","PHBI","PHED","PHIL","PHRD","PHYS","PJMT","PLUS","PM","PMEP","POIR","PORT","POSC","PPD","PPDE","PPDP","PR","PSC","PSCI","PSYC","PT","PTBK","PTE","PUBD","QBIO","QREA","RED","REL","RSCI","RXRS","SAE","SANA","SCIN","SCIS","SCOR","SCRM","SI","SLL","SOCI","SOWK","SPAN","SSCI","SWDP","SWMS","THTR","TRGN","USC","VISS","WCT","WRIT"]},60:function(e,t,a){e.exports=a(72)},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),i=a(10),s=a(11),c=a(13),m=a(12),u=a(14),d=a(33),f=a(103),g=a(98),h=a(113),p=a(101),E=a(1),S=a(8),y=a(106),b=a(93),v=a(94),w=a(114),j=a(95),C=a(109),I=a(81),R=a(110),O=a(111),N=a(112),k=a(115),x=a(82),P=function(e){return r.a.createElement(h.a,{direction:"column",align:"center",justify:"center",width:"medium",height:"xsmall"},r.a.createElement(C.a,{fill:!0,onClick:function(){e.clickFunc(e.id)},label:r.a.createElement("strong",null,e.name),hoverIndicator:!0,style:{background:"white",radius:"4px",border:"3px solid main",fontSize:"30px"}}))},T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={clickFunc:a.props.clickFunc,list:a.props.defList,major:a.props.major,minor:a.props.minor},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({list:e.list})}},{key:"render",value:function(){var e=this,t=0;return null!==this.state.list&&r.a.createElement(I.a,{items:this.state.list,step:20},function(a){return r.a.createElement(h.a,{align:"center",pad:"small",key:(t++).toString()},r.a.createElement(P,{clickFunc:e.state.clickFunc,name:a,id:a}))})}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={courseTab:0,search:"",allClasses:e.classes,searchClasses:e.classes},a.onSearch=function(e){var t=new RegExp(e,"i");this.setState({search:e,searchClasses:this.state.allClasses.filter(function(e){return t.test(e)})})}.bind(Object(S.a)(Object(S.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){null!==e.info&&this.setState({allMajorClasses:e.classes.filter(function(t){return new RegExp(e.info.major1,"i").test(t)}),searchMajorClasses:e.classes.filter(function(t){return new RegExp(e.info.major1,"i").test(t)}),allMinorClasses:e.classes.filter(function(t){return new RegExp(e.info.minor1,"i").test(t)}),searchMinorClasses:e.classes.filter(function(t){return new RegExp(e.info.minor1,"i").test(t)})})}},{key:"render",value:function(){var e=this,t=this.state.courseTab;return r.a.createElement(O.a,{activeIndex:t,onActive:function(t){e.setState({courseTab:t})}},r.a.createElement(N.a,{title:r.a.createElement(x.a,{size:"large"})},r.a.createElement(h.a,{direction:"column",align:"center",justify:"start",style:{position:"sticky",top:"0",zIndex:500},background:"light-2",pad:{horizontal:"medium",bottom:"medium"}},r.a.createElement(w.a,{level:"2"},"find any class"),r.a.createElement(k.a,{placeholder:"search",background:"white",value:this.state.search,onChange:function(t){var a=t.target.value;e.onSearch(a)},style:{fontFamily:"Inconsolata"}})),r.a.createElement(h.a,{className:"classBox",direction:"column",align:"center",justify:"start",pad:"small",animation:{type:"fadeIn",size:"xlarge"}},r.a.createElement(T,{clickFunc:this.props.clickFunc,defList:this.state.allClasses,list:this.state.searchClasses}))))}}]),t}(n.Component),M=a(85),A=a(86),F=a(87),D=a(88),L=a(89),G=a(90),H=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={data:null};var n=new WebSocket("ws://localhost:8080/SycamoreScheduler/ss1");n.onopen=function(e){console.log("WebSocket Connected!",e)},n.onmessage=function(e){console.log("Received:",e),a.getScheduleServlet()},n.onclose=function(e){console.log("Closed!",e)},n.onerror=function(e){console.log("Error:",e)};var r=a.props.info,l=parseInt(r.startTerm.substring(0,4)),o=3===parseInt(r.startTerm.charAt(4))?"Fall":"Spring",s=parseInt(r.endTerm.substring(0,4)),u=3===parseInt(r.endTerm.charAt(4))?"Fall":"Spring";return console.log("startYear: "+l+"\nendYear: "+s),a.setState({socket:n,info:r,startYear:l,startTerm:o,endYear:s,endTerm:u,email:a.props.email}),a.getScheduleServlet=function(){var t=this,a=!1;fetch("/SycamoreScheduler/ScheduleServlet?email="+e.email,{method:"GET"}).then(function(e){return a=e.ok,e.json()}).then(function(e){if(console.log("Got JSON back from GET /ScheduleServlet ..."),console.log(e),a){for(var n={},r=l;r<=s;r++)for(var i=1;i>=0;i--){var c="",m="";1!==i||r===l&&"Fall"===o?0!==i||r===s&&"Spring"===u||(c+=r+"3",m+="Fall "+r):(c+=r+"1",m+="Spring "+r),""!==c&&""!==m&&(void 0===e[c]||null===e[c]?n[m]=[]:n[m]=e[c])}t.setState({data:n})}else t.setState({data:null})})}.bind(Object(S.a)(Object(S.a)(a))),a.getScheduleServlet(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{flex:!0,direction:"column",justify:"start",align:"center",animation:{type:"fadeIn",delay:50,duration:750,size:"large"}},r.a.createElement(w.a,{level:"1",margin:{top:"large",bottom:"0",left:"large"}},"Course Plan"),r.a.createElement(h.a,{flex:!0,direction:"row",align:"start",justify:"center",overflow:"auto",style:{flexWrap:"wrap"}},null!==this.state.data&&Object.keys(this.state.data).map(function(t){return r.a.createElement(h.a,{key:t,flex:!0,margin:"large",basis:"large"},r.a.createElement(M.a,{caption:t},r.a.createElement(A.a,null,r.a.createElement(F.a,null,r.a.createElement(D.a,null,r.a.createElement(w.a,{level:"3"},t)))),r.a.createElement(L.a,null,e.state.data[t].map(function(a){return r.a.createElement(F.a,{key:a.longName},r.a.createElement(D.a,null,r.a.createElement(h.a,{direction:"row",align:"center",justify:"between"},r.a.createElement(R.a,{size:"large"},a.longName),r.a.createElement(C.a,{hoverIndicator:!0,icon:r.a.createElement(G.a,{color:"main"}),onClick:function(){var n="";n+=parseInt(t.substring(t.length-4)),"Fall"===t.substring(0,4)?n+="3":n+="1";var r="profileEmail="+e.props.email+"&action=remove&className="+a.longName+"&term="+n;console.log(r);fetch("/SycamoreScheduler/ScheduleServlet",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:r}).then(function(e){return e.ok,e.json()}).then(function(e){console.log(e)})}}))))}))))})))}}]),t}(n.Component),B=a(91),U=a(100),W=a(43),Y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).doUpdate=function(){a.props.updateFunc().then(function(e){var t=e.error,n=e.msg;t?a.setState({error:!0,errormsg:n,success:!1}):a.setState({error:!1,errormsg:"",success:!0})})},a.state={error:!1,errormsg:"",success:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{flex:!0,direction:"column",align:"start",justify:"start",margin:"large"},r.a.createElement(w.a,{level:"3"},this.props.name),r.a.createElement(h.a,{direction:"row",align:"center",justify:"between",gap:"medium"},this.props.children,r.a.createElement(C.a,{label:"save",hoverIndicator:!0,onClick:function(){e.doUpdate()}}),this.state.error&&r.a.createElement(h.a,{flex:!0,background:"main",direction:"column",align:"center",justify:"center",pad:"medium",style:{borderRadius:"10px"}},r.a.createElement(R.a,{color:"white"},this.state.errormsg)),this.state.success&&r.a.createElement(h.a,{flex:!0,background:"neutral-3",animation:{type:"fadeIn",delay:0,duration:700,size:"large"},direction:"column",align:"center",justify:"center",pad:"small",style:{borderRadius:"10px"}},r.a.createElement(R.a,{color:"white"},"Success!"))))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).ufName=function(){return new Promise(function(e,t){var n="email="+a.props.info.email+"&key=fName&value="+a.state.fName;console.log("bodystr\t"+n),fetch("/SycamoreScheduler/ProfileServlet",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:n}).then(function(t){return console.log(t),console.log(t.ok),t.ok?e({error:!1,msg:""}):e({error:!0,msg:"Error with fName"}),t.json()}).then(function(e){console.log(e)})})},a.ulName=function(){return new Promise(function(e,t){var n="email="+a.props.info.email+"&key=lName&value="+a.state.lName;console.log("bodystr\t"+n),fetch("/SycamoreScheduler/ProfileServlet",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:n}).then(function(t){return console.log(t),console.log(t.ok),t.ok?e({error:!1,msg:""}):e({error:!0,msg:"Error with lName"}),t.json()}).then(function(e){console.log(e)})})},a.uemail=function(){return{error:!1,msg:""}},a.upassword=function(){return new Promise(function(e,t){var n="email="+a.props.info.email+"&key=pass&value="+a.state.password;console.log("bodystr\t"+n),fetch("/SycamoreScheduler/ProfileServlet",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:n}).then(function(t){return console.log(t),console.log(t.ok),t.ok?e({error:!1,msg:""}):e({error:!0,msg:"Error with password"}),t.json()}).then(function(e){console.log(e)})})},a.umajor1=function(){return{error:!1,msg:""}},a.umajor2=function(){return{error:!1,msg:""}},a.uminor1=function(){return{error:!1,msg:""}},a.uminor2=function(){return{error:!1,msg:""}},a.fNameRef=r.a.createRef(),a.lNameRef=r.a.createRef(),a.emailRef=r.a.createRef(),a.passwordRef=r.a.createRef(),a.focusSomething=function(e){e.current.focus()},a.focusSomething.bind(Object(S.a)(Object(S.a)(a))),a.state={fName:"",lName:"",email:"",password:"",major1:"",major2:"",minor1:"",minor2:"",programs:W},a.props.reloadFunc(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({fName:e.info.fName,lName:e.info.lName,email:e.info.email,password:e.info.password,major1:e.info.major1,major2:e.info.major2,minor1:e.info.minor1,minor2:e.info.minor2})}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{flex:!0,direction:"column",justify:"start",align:"start",animation:{type:"fadeIn",delay:50,duration:750,size:"large"},pad:"large",gap:"medium",overflow:{vertical:"auto"}},r.a.createElement(w.a,{level:"1"},this.state.fName+" "+this.state.lName),r.a.createElement(Y,{name:"First Name",updateFunc:this.ufName},r.a.createElement(B.a,null,r.a.createElement(k.a,{ref:this.fNameRef,id:"fName",size:"large",focusIndicator:!0,value:this.state.fName,onChange:function(t){return e.setState({fName:t.target.value})}}))),r.a.createElement(Y,{name:"Last Name",updateFunc:this.ulName},r.a.createElement(B.a,null,r.a.createElement(k.a,{ref:this.lNameRef,id:"lName",size:"large",focusIndicator:!0,value:this.state.lName,onChange:function(t){return e.setState({lName:t.target.value})}}))),r.a.createElement(Y,{name:"Major",updateFunc:this.umajor1},r.a.createElement(U.a,{size:"medium",value:this.state.major1,options:this.state.programs,onChange:function(t){e.setState({major1:t.value})},onClose:function(){return e.setState({programs:W})},onSearch:function(t){var a=new RegExp(t,"i");e.setState({programs:W.filter(function(e){return a.test(e)})})}})),r.a.createElement(Y,{name:"Minor",updateFunc:this.uminor1},r.a.createElement(U.a,{size:"medium",value:this.state.minor1,options:this.state.programs,onChange:function(t){e.setState({minor1:t.value})},onClose:function(){return e.setState({programs:W})},onSearch:function(t){var a=new RegExp(t,"i");e.setState({programs:W.filter(function(e){return a.test(e)})})}})),r.a.createElement(Y,{name:"Email",updateFunc:this.uemail},r.a.createElement(B.a,null,r.a.createElement(k.a,{ref:this.emailRef,id:"email",size:"large",focusIndicator:!0,value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}}))),r.a.createElement(Y,{name:"Password",updateFunc:this.upassword},r.a.createElement(B.a,null,r.a.createElement(k.a,{ref:this.passwordRef,id:"password",size:"large",type:"password",focusIndicator:!0,value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}}))))}}]),t}(n.Component),K=a(105),V=a(107),_=a(99),Q=a(116),X=a(102),Z=a(92),$=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={classInfo:a.props.defaultInfo,open:!1,selectedTerm:""},a.addClass=function(){if(""!==a.state.selectedTerm){var e="";e+=parseInt(a.state.selectedTerm.substring(a.state.selectedTerm.length-4)),"Fall"===a.state.selectedTerm.substring(0,4)?e+="3":e+="1";var t="profileEmail="+a.props.email+"&action=add&className="+a.state.classInfo.longName+"&term="+e;console.log(t);var n=!1;fetch("/SycamoreScheduler/ScheduleServlet",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:t}).then(function(e){return n=e.ok,e.json()}).then(function(e){n&&a.setState({open:!1,selectedTerm:""})})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({classInfo:e.classInfo,userInfo:e.userInfo})}},{key:"render",value:function(){var e=this,t=this.state.classInfo;return r.a.createElement(h.a,{flex:!0,direction:"column",justify:"start",align:"start",pad:"5%",animation:{type:"fadeIn",delay:50,duration:750,size:"large"},style:{overflow:"auto"}},r.a.createElement(h.a,{direction:"row",align:"center",gap:"large"},r.a.createElement(w.a,{level:"1"},t.degreeName+" "+t.classNumber),this.props.isSignedIn&&r.a.createElement(C.a,{primary:!0,color:"main",label:r.a.createElement(Z.a,{size:"medium",color:"white"}),pad:"large",onClick:function(){e.setState({open:!0})}})),r.a.createElement(w.a,{level:"2"},t.className),r.a.createElement(R.a,{size:"large"},t.units," units"),r.a.createElement(K.a,null,t.summary),t.instructorName&&r.a.createElement(w.a,{level:"1"},"Instructors"),t.instructorName?r.a.createElement(w.a,{level:"2"},"\u2022 ",t.instructorName):r.a.createElement(w.a,{level:"2"},"No instructors found"),0!==t.rmpID&&r.a.createElement(h.a,{direction:"row",align:"center",justify:"between",gap:"medium",margin:{top:"medium"}},r.a.createElement(h.a,{align:"start"},r.a.createElement(V.a,{anchor:"center"},r.a.createElement(_.a,{type:"circle",background:"light-2",values:[{value:t.instructorRating/5*100,color:"main",highlight:!0}],size:"xsmall",thickness:"small"}),r.a.createElement(h.a,{direction:"row",align:"center",pad:{bottom:"xsmall"}},r.a.createElement(R.a,{size:"xlarge",weight:"bold"},t.instructorRating),r.a.createElement(R.a,{size:"small"},"/5")))),r.a.createElement(Q.a,{style:{height:"100px"},src:"/SycamoreScheduler/rmp.png"})),this.state.open&&r.a.createElement(X.a,{position:"center",modal:!0,onClickOutside:function(){e.setState({open:!1})},onEsc:function(){e.setState({open:!1})}},r.a.createElement(h.a,{pad:"medium",gap:"small",width:"medium"},r.a.createElement(w.a,{level:3,margin:"none"},"Add ",t.longName),r.a.createElement(R.a,null,"Select a term to add ",t.longName),r.a.createElement(U.a,{size:"small",placeholder:r.a.createElement(R.a,{size:"large"},"term"),value:this.state.selectedTerm,options:this.props.titleList,onChange:function(t){e.setState({selectedTerm:t.value})}}),r.a.createElement(h.a,{tag:"footer",gap:"small",direction:"row",align:"center",justify:"end",pad:{top:"medium",bottom:"small"}},r.a.createElement(C.a,{label:"Cancel",onClick:function(){e.setState({open:!1})},color:"dark-6"}),r.a.createElement(C.a,{label:r.a.createElement(R.a,{color:"white"},r.a.createElement("strong",null,"Add")),onClick:function(){e.addClass()},primary:!0,color:"main"})))))}}]),t}(n.Component),q=function(e){return r.a.createElement(h.a,Object.assign({flex:!0,direction:"row",align:"center",justify:"between",background:"darker",pad:"large",animation:{type:"slideDown",delay:0,duration:500,size:"xlarge"},style:{zIndex:"100"}},e))},ee=function(e){return r.a.createElement(y.a,Object.assign({onClick:e.func,color:"light",size:"xxlarge"},e),e.text)},te=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).displayClass=function(e){for(var t=a.state.classes,n=0;n<t.length;n++){var r=Object.keys(t[n])[0];r===e&&(console.log("Display "+r),a.setState({display:"class",whichClass:t[n][r]}))}},a.state={showSidebar:!0,display:"none",whichClass:null,signedIn:e.signedIn,email:e.email,classes:null,classNames:null,info:null};var n=!1;return a.loadClasses=function(){var e=this;fetch("/SycamoreScheduler/ClassesServlet",{method:"GET"}).then(function(e){return n=e.ok,e.json()}).then(function(t){if(n){var a=t.map(function(e){var t=Object.keys(e)[0];return e[t].degreeName+" "+e[t].classNumber});e.setState({classes:t,classNames:a},function(){console.log("ClassesServlet returned status 200"),console.log("Classes stored in this.state.classes"),e.props.signedIn?(console.log("Loading profile now"),e.loadProfile()):console.log("Not signed in, not loading profile")})}else console.log("ClassesServlet did not return status 200."),console.log(JSON.stringify(t))})}.bind(Object(S.a)(Object(S.a)(a))),a.loadProfile=function(){var t=this;console.log("in loadProfile"),fetch("/SycamoreScheduler/ProfileServlet?profileEmail="+e.email,{method:"GET"}).then(function(e){return n=e.ok,e.json()}).then(function(e){console.log(e);for(var a=parseInt(e.startTerm.substring(0,4)),n=3===parseInt(e.startTerm.charAt(4))?"Fall":"Spring",r=parseInt(e.endTerm.substring(0,4)),l=3===parseInt(e.endTerm.charAt(4))?"Fall":"Spring",o=[],i=[],s=a;s<=r;s++)for(var c=1;c>=0;c--){var m="",u="";1!==c||s===a&&"Fall"===n?0!==c||s===r&&"Spring"===l||(m+=s+"3",u+="Fall "+s):(m+=s+"1",u+="Spring "+s),""!==m&&""!==u&&(o.push(m),i.push(u))}t.setState({info:e,keyList:o,titleList:i})})}.bind(Object(S.a)(Object(S.a)(a))),a.loadClasses(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.showSidebar,n=t.display;return r.a.createElement(b.a.Consumer,null,function(t){return r.a.createElement(h.a,{flex:!0,direction:"column",align:"stretch",justify:"start"},r.a.createElement(q,null,r.a.createElement(v.a,{plain:!0,path:"/"},r.a.createElement(w.a,{level:"1",color:"white"},"Sycamore Scheduler")),r.a.createElement(h.a,{direction:"row",align:"center",justify:"end"},r.a.createElement(ee,{margin:{right:"large"},text:"Classes",func:function(){return e.setState({showSidebar:!e.state.showSidebar})}}),e.state.signedIn&&r.a.createElement(ee,{margin:{right:"large"},text:"Course Plan",func:function(){return e.setState({display:"coursePlan"})}}),e.state.signedIn&&null!==e.state.info&&r.a.createElement(ee,{text:"Profile",func:function(){return e.setState({display:"profile"})}}))),r.a.createElement(h.a,{fill:!0,direction:"row",justify:"start",align:"stretch",animation:{type:"fadeIn",delay:500,duration:500,size:"large"}},null!==e.state.classNames&&r.a.createElement(j.a,{direction:"horizontal",open:a},r.a.createElement(h.a,{width:"medium",animation:{type:"slideRight",delay:500,duration:500,size:"large"},style:{flexWrap:"nowrap",minHeight:"100%"},background:"light-2"},r.a.createElement(z,{info:e.state.info,classes:e.state.classNames,fullInfo:e.state.classes,clickFunc:e.displayClass}))),"coursePlan"===n&&r.a.createElement(H,{info:e.state.info,email:e.state.email}),"profile"===n&&r.a.createElement(J,{reloadFunc:e.loadProfile,info:e.state.info}),"none"===n&&r.a.createElement(h.a,{flex:!0,direction:"column",justify:"center",align:"center",animation:{type:"fadeIn",delay:500,duration:500,size:"large"}},r.a.createElement(w.a,{level:"1"},"Click on a class to view details")),"class"===n&&null!==e.state.whichClass&&r.a.createElement($,{keyList:e.state.keyList,titleList:e.state.titleList,email:e.state.email,isSignedIn:e.state.signedIn,socketFunc:e.props.socketFunc,defaultInfo:e.state.whichClass,classInfo:e.state.whichClass})))})}}]),t}(n.Component),ae=a(49),ne=a(50),re=a(54),le=a(51),oe=a(56),ie=function(e){function t(e){var a;return Object(ae.a)(this,t),(a=Object(re.a)(this,Object(le.a)(t).call(this,e))).state={signedIn:a.props.signedIn},a}return Object(oe.a)(t,e),Object(ne.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{flex:!0,direction:"row",align:"center",justify:"center",gap:"small"},r.a.createElement(h.a,{height:"small",width:"small",animation:{type:"slideRight",delay:0,duration:500,size:"large"},border:{side:"all",size:"small",color:"dark-1"},pad:"small",background:"main",style:{borderRadius:"20px"}},r.a.createElement(Q.a,{fit:"contain",src:"/SycamoreScheduler/leaf.png"})),r.a.createElement(h.a,{direction:"column",justify:"center",align:"center",height:"small"},r.a.createElement(h.a,{flex:!0,direction:"row",pad:{top:"medium",horizontal:"medium",bottom:"0"},gap:"small"},r.a.createElement(h.a,{pad:"0",margin:"0",animation:{type:"slideDown",delay:0,duration:500,size:"large"}},r.a.createElement(w.a,{margin:"0",level:"1",color:"black"},"Sycamore")),r.a.createElement(h.a,{pad:"0",margin:"0",animation:{type:"fadeIn",delay:200,duration:400,size:"large"}},r.a.createElement(w.a,{margin:"0",level:"1",color:"main"},"Scheduler"))),r.a.createElement(h.a,{direction:"row",align:"center",justify:"center",animation:{type:"slideUp",delay:0,duration:500,size:"large"},margin:{bottom:"large"}},!this.state.signedIn&&r.a.createElement(v.a,{path:"/Register",hoverIndicator:!0,label:r.a.createElement(R.a,{size:"large"},r.a.createElement("strong",null,"Register")),color:"main",margin:{right:"medium"}}),!this.state.signedIn&&r.a.createElement(v.a,{path:"/SignIn",hoverIndicator:!0,label:r.a.createElement(R.a,{size:"large"},r.a.createElement("strong",null,"Sign In")),color:"main",margin:{right:"medium"}}),this.state.signedIn&&r.a.createElement(C.a,{hoverIndicator:!0,label:r.a.createElement(R.a,{size:"large"},r.a.createElement("strong",null,"Sign Out")),color:"main",onClick:function(){e.props.onSignOut()},margin:{right:"medium"}}),!this.state.signedIn&&r.a.createElement(v.a,{path:"/Home",hoverIndicator:!0,label:r.a.createElement(R.a,{size:"large"},r.a.createElement("strong",null,"Guest")),color:"main"}),this.state.signedIn&&r.a.createElement(v.a,{path:"/Home",hoverIndicator:!0,label:r.a.createElement(R.a,{size:"large"},r.a.createElement("strong",null,"Home")),color:"main"}))))}}]),t}(n.Component),se=a(84),ce=a(96),me=a(97),ue=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).doLogin=function(e){if(""===a.state.email||""===a.state.password){var t="Please enter your ";return""===a.state.email&&(t+="email"),""===a.state.password?(""===a.state.email&&(t+=" and "),t+="password."):t+=".",void a.setState({error:!0,errormsg:t})}if(-1===a.state.email.indexOf("@")||-1===a.state.email.indexOf(".")||a.state.email.indexOf(".")-a.state.email.indexOf("@")<2)a.setState({success:!1,error:!0,errormsg:"Email is not formatted correctly."});else{var n="email="+a.state.email+"&password="+a.state.password,r=!1;fetch("/SycamoreScheduler/LoginServlet",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:n}).then(function(e){return r=e.ok,e.json()}).then(function(e){r?a.setState({success:!0,error:!1,errormsg:""},function(){a.props.onSignIn(a.state.email),setTimeout(function(){a.props.history.push("/Home")},1e3)}):a.setState({success:!1,error:!0,errormsg:e.error})})}},a.handleChange=function(e,t){"email"===e?a.setState({email:t.target.value}):"password"===e&&a.setState({password:t.target.value})},a.state={email:"",password:"",error:!1,errormsg:"",success:!1},a.emailRef=r.a.createRef(),a.passwordRef=r.a.createRef(),a.focusSomething=function(e){e.current.focus()},a.focusSomething.bind(Object(S.a)(Object(S.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(se.a,{onEnter:function(){e.doLogin(null)},onEsc:function(){e.props.history.push("/")}},r.a.createElement(h.a,{flex:!0,direction:"column",justify:"center",align:"center"},r.a.createElement(h.a,{direction:"column",align:"center",justify:"start",pad:"xlarge",gap:"large",border:{side:"all",color:"main",size:"medium"},style:{borderRadius:"20px"},animation:{type:"fadeIn",delay:0,duration:500,size:"large"}},r.a.createElement(w.a,{level:"1",margin:"0"},"Sign In"),r.a.createElement(B.a,null,r.a.createElement(k.a,{id:"email",ref:this.emailRef,size:"medium",focusIndicator:!0,placeholder:r.a.createElement(h.a,{onClick:function(){e.focusSomething(e.emailRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large"},"email"),r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.email,onChange:function(t){e.handleChange("email",t)}})),r.a.createElement(B.a,null,r.a.createElement(k.a,{id:"password",ref:this.passwordRef,size:"medium",type:"password",focusIndicator:!0,placeholder:r.a.createElement(h.a,{onClick:function(){e.focusSomething(e.passwordRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large"},"password"),r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.password,onChange:function(t){e.handleChange("password",t)}})),this.state.error&&r.a.createElement(h.a,{flex:!0,background:"main",direction:"column",align:"center",justify:"center",pad:"medium",style:{borderRadius:"10px"}},r.a.createElement(R.a,{color:"white"},this.state.errormsg)),this.state.success&&r.a.createElement(h.a,{flex:!0,background:"neutral-3",animation:{type:"fadeIn",delay:0,duration:700,size:"large"},direction:"column",align:"center",justify:"center",pad:"small",style:{borderRadius:"10px"}},r.a.createElement(R.a,{color:"white"},"Success!")),r.a.createElement(h.a,{direction:"row",align:"center",justify:"center",gap:"medium"},r.a.createElement(v.a,{path:"/",hoverIndicator:!0,color:"dark-2",label:r.a.createElement(ce.a,{color:"main",size:"large"})}),r.a.createElement(C.a,{hoverIndicator:!0,label:r.a.createElement(me.a,{size:"large",color:"green"}),color:"dark-2",onClick:function(t){e.doLogin(t)}})))))}}]),t}(n.Component),de=a(52),fe=a(108),ge=a(43),he=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={fName:"",lName:"",email:"",password:"",major1:"",major2:"",minor1:"",minor2:"",error:!1,errormsg:"",success:!1,startRadio:"fall",endRadio:"spring",startYear:2017,endYear:2021,programs:ge},a.handleChange=function(e,t){a.setState({form_elements:Object(de.a)({},e,t)})},a.doRegister=function(e){var t=!1,n="Please enter your ",r=[];if(-1===a.state.email.indexOf("@")||-1===a.state.email.indexOf(".")||a.state.email.indexOf(".")-a.state.email.indexOf("@")<2)a.setState({success:!1,error:!0,errormsg:"Email is not formatted correctly."});else if(["fName","lName","email","password","major1"].map(function(e){return""===a.state[e]&&(t=!0,"fName"===e?r.push("first name"):"lName"===e?r.push("last name"):"email"===e?r.push("email"):"password"===e?r.push("password"):"major1"===e&&r.push("major")),0}),t){for(var l=0;l<r.length;l++)n+=r[l],l===r.length-1?n+=".":n+=", ",l===r.length-2&&(n+="and ");a.setState({error:!0,errormsg:n})}else{for(var o=["fName","lName","email","password","major1","major2","minor1","minor2"],i="",s=0;s<o.length;s++){var c=o[s];""!==a.state[c]&&(0!==s&&(i+="&"),i+=c+"="+a.state[c])}i+="&startTerm="+a.state.startYear.toString()+("fall"===a.state.startRadio?"3":"1"),i+="&endTerm="+a.state.endYear.toString()+("fall"===a.state.endRadio?"3":"1");var m=!1;fetch("/SycamoreScheduler/RegisterServlet",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:i}).then(function(e){return m=e.ok,e.json()}).then(function(e){m?a.setState({error:!1,errormsg:"",success:!0},function(){setTimeout(function(){a.props.history.push("/SignIn")},1e3)}):a.setState({error:!0,errormsg:e.error,success:!1})})}},a.fNameRef=r.a.createRef(),a.lNameRef=r.a.createRef(),a.emailRef=r.a.createRef(),a.passwordRef=r.a.createRef(),a.startyearref=r.a.createRef(),a.endyearref=r.a.createRef(),a.focusSomething=function(e){e.current.focus()},a.focusSomething.bind(Object(S.a)(Object(S.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{flex:!0,direction:"column",justify:"center",align:"center"},r.a.createElement(h.a,{direction:"column",align:"center",justify:"start",gap:"large",pad:{vertical:"large",horizontal:"xlarge"},border:{side:"all",color:"main",size:"medium"},animation:{type:"fadeIn",delay:0,duration:500,size:"large"},style:{borderRadius:"20px"}},r.a.createElement(h.a,{flex:!0,width:"100%",align:"center",justify:"center"},r.a.createElement(w.a,{level:"1",margin:"0"},"Register")),r.a.createElement(h.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"between",gap:"large"},r.a.createElement(B.a,null,r.a.createElement(k.a,{ref:this.fNameRef,id:"fName",size:"medium",focusIndicator:!0,placeholder:r.a.createElement(h.a,{onClick:function(){e.focusSomething(e.fNameRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large"},"first name"),r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.fName,onChange:function(t){return e.setState({fName:t.target.value})}})),r.a.createElement(B.a,null,r.a.createElement(k.a,{ref:this.lNameRef,id:"lName",size:"medium",focusIndicator:!0,placeholder:r.a.createElement(h.a,{onClick:function(){e.focusSomething(e.lNameRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large"},"last name"),r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.lName,onChange:function(t){return e.setState({lName:t.target.value})}}))),r.a.createElement(h.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"between",gap:"large"},r.a.createElement(B.a,null,r.a.createElement(k.a,{ref:this.emailRef,id:"email",size:"medium",focusIndicator:!0,placeholder:r.a.createElement(h.a,{onClick:function(){e.focusSomething(e.emailRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large"},"email"),r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}})),r.a.createElement(B.a,null,r.a.createElement(k.a,{ref:this.passwordRef,id:"password",size:"medium",type:"password",focusIndicator:!0,placeholder:r.a.createElement(h.a,{onClick:function(){e.focusSomething(e.passwordRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large"},"password"),r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}}))),r.a.createElement(h.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"between",gap:"large"},r.a.createElement(h.a,{flex:!0,width:"100%",direction:"column",align:"start",justify:"center",gap:"small"},r.a.createElement(R.a,{fontFamily:"Inconsolata",size:"large"},"start term"),r.a.createElement(h.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"between"},r.a.createElement(fe.a,{label:"fall",name:"fa_start",value:"fall",checked:"fall"===this.state.startRadio,onChange:function(t){console.log("Start Term: "+t.target.value),e.setState({startRadio:t.target.value})}}),r.a.createElement(fe.a,{label:"spring",name:"sp_start",value:"spring",checked:"spring"===this.state.startRadio,onChange:function(t){console.log("Start Term: "+t.target.value),e.setState({startRadio:t.target.value})}})),r.a.createElement(h.a,{flex:!0},r.a.createElement(k.a,{ref:this.startyearref,id:"startyear",type:"number",focusIndicator:!0,value:this.state.startYear,onChange:function(t){return e.setState({startYear:t.target.value})}}))),r.a.createElement(h.a,{flex:!0,direction:"column",align:"start",justify:"center",gap:"small"},r.a.createElement(R.a,{fontFamily:"Inconsolata",size:"large"},"end term"),r.a.createElement(h.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"between"},r.a.createElement(fe.a,{label:"fall",name:"fa_end",value:"fall",checked:"fall"===this.state.endRadio,onChange:function(t){console.log("End Term: "+t.target.value),e.setState({endRadio:t.target.value})}}),r.a.createElement(fe.a,{label:"spring",name:"sp_end",value:"spring",checked:"spring"===this.state.endRadio,onChange:function(t){console.log("End Term: "+t.target.value),e.setState({endRadio:t.target.value})}})),r.a.createElement(h.a,{flex:!0},r.a.createElement(k.a,{ref:this.endyearref,id:"endyear",type:"number",focusIndicator:!0,value:this.state.endYear,onChange:function(t){return e.setState({endYear:t.target.value})}})))),r.a.createElement(h.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"between",gap:"large"},r.a.createElement(U.a,{size:"small",placeholder:r.a.createElement(R.a,{size:"large"},"major"),value:this.state.major1,options:this.state.programs,onChange:function(t){e.setState({major1:t.value})},onClose:function(){return e.setState({programs:ge})},onSearch:function(t){var a=new RegExp(t,"i");e.setState({programs:ge.filter(function(e){return a.test(e)})})}}),r.a.createElement(U.a,{size:"small",placeholder:r.a.createElement(R.a,{size:"large"},"minor"),value:this.state.minor1,options:this.state.programs,onChange:function(t){e.setState({minor1:t.value})},onClose:function(){return e.setState({programs:ge})},onSearch:function(t){var a=new RegExp(t,"i");e.setState({programs:ge.filter(function(e){return a.test(e)})})}})),this.state.error&&r.a.createElement(h.a,{flex:!0,background:"main",direction:"column",align:"center",justify:"center",pad:"medium",style:{borderRadius:"10px"}},r.a.createElement(R.a,{color:"white"},this.state.errormsg)),this.state.success&&r.a.createElement(h.a,{flex:!0,background:"neutral-3",animation:{type:"fadeIn",delay:0,duration:700,size:"large"},direction:"column",align:"center",justify:"center",pad:"small",style:{borderRadius:"10px"}},r.a.createElement(R.a,{color:"white"},"Success!")),r.a.createElement(h.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"center",gap:"medium"},r.a.createElement(v.a,{path:"/",hoverIndicator:!0,color:"dark-2",label:r.a.createElement(ce.a,{color:"main",size:"large"})}),r.a.createElement(C.a,{hoverIndicator:!0,label:r.a.createElement(me.a,{size:"large",color:"green"}),color:"dark-2",onClick:function(t){e.doRegister(t)}}))))}}]),t}(n.Component);function pe(){var e=Object(d.a)(["\n\t\t\tborder-radius: ",";\n\t\t"]);return pe=function(){return e},e}function Ee(){var e=Object(d.a)(["\n\t\t\tflex: 0 0;\n\t\t\tpadding-top: ",";\n\t\t\tpadding-bottom: ",";\n\t\t\tbox-shadow: 0;\n\t\t\tflex-wrap: nowrap;\n\t\t  "]);return Ee=function(){return e},e}var Se={global:{colors:{main:"#ff3300",darker:"#d21e32"},font:{family:"Karla",color:"#ffffff"},hover:{background:"inherit"}},button:{color:"dark-1",border:{color:"main"}},anchor:{color:"#ff3300",hover:{textDecoration:"none"}},tabs:{background:"light-2",header:{background:"light-2",extend:function(e){var t=e.theme;return Object(E.a)(Ee(),t.global.edgeSize.medium,t.global.edgeSize.medium)}},gap:"medium",extend:"\n\t\tdiv[role='tabpanel'] {\n\t\t\toverflow-y: auto;\n\t\t\toverflow-x: hidden;\n\t\t\tpadding-bottom: 10%;\n\t\t\tfont-family: 'Inconsolata';\n\t\t\tflex-wrap: nowrap;\n\t\t}\n\t\tdiv[role='tabpanel'] * {\n\t\t\twhite-space: nowrap;\n\t\t}\n        "},tab:{active:{background:"main",color:"white"},color:"main",background:"white",hover:{background:"pink",border:{side:"all",color:"main",size:"small"},color:"white"},border:void 0,margin:void 0,pad:{bottom:void 0,horizontal:"xsmall"},extend:function(e){var t=e.theme;return Object(E.a)(pe(),t.global.control.border.radius)}},textInput:{extend:"\n\t\t\tfont-family: 'Inconsolata';\n\t\t"},select:{extend:"\n\t\t\tfont-family: 'Inconsolata';\n\t\t"},radioButton:{size:"18px",border:{color:"darker"},color:"darker",hover:{border:{color:"main"}},check:{border:{color:"main"},color:{light:"main"}},icon:{size:"full"},extend:"\n\t\t\tfont-family: 'Inconsolata';\n\t\t\tfont-weight: normal;\n\t\t"}},ye=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onSignIn=function(e){setTimeout(function(){a.setState({signedIn:!0,userEmail:e})},1e3)},a.onSignOut=function(){a.setState({signedIn:!1,userEmail:""})},a.state={signedIn:!1,userEmail:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(g.a,{basename:"/SycamoreScheduler"},r.a.createElement(p.a,{theme:Se,full:!0},r.a.createElement(n.Fragment,null,r.a.createElement(function(){return r.a.createElement(h.a,{fill:!0},r.a.createElement(f.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(ie,Object.assign({onSignOut:e.onSignOut,signedIn:e.state.signedIn},t))}}),r.a.createElement(f.a,{path:"/Home",render:function(t){return r.a.createElement(te,Object.assign({signedIn:e.state.signedIn,email:e.state.userEmail},t))}}),r.a.createElement(f.a,{path:"/SignIn",render:function(t){return r.a.createElement(ue,Object.assign({onSignIn:e.onSignIn},t))}}),r.a.createElement(f.a,{path:"/Register",component:he}))},null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[60,2,1]]]);
//# sourceMappingURL=main.792cb4d9.chunk.js.map