import*as D from"https://mfe-login-test.herokuapp.com/remoteEntry.js";var L={4025:(o,d,i)=>{Promise.all([i.e(583),i.e(720),i.e(380),i.e(38)]).then(i.bind(i,4038)).catch(s=>console.error(s))},770:o=>{o.exports=D}},k={};function e(o){var d=k[o];if(void 0!==d)return d.exports;var i=k[o]={exports:{}};return L[o](i,i.exports,e),i.exports}e.m=L,e.c=k,(()=>{var d,o=Object.getPrototypeOf?i=>Object.getPrototypeOf(i):i=>i.__proto__;e.t=function(i,s){if(1&s&&(i=this(i)),8&s||"object"==typeof i&&i&&(4&s&&i.__esModule||16&s&&"function"==typeof i.then))return i;var v=Object.create(null);e.r(v);var c={};d=d||[null,o({}),o([]),o(o)];for(var f=2&s&&i;"object"==typeof f&&!~d.indexOf(f);f=o(f))Object.getOwnPropertyNames(f).forEach(S=>c[S]=()=>i[S]);return c.default=()=>i,e.d(v,c),v}})(),e.d=(o,d)=>{for(var i in d)e.o(d,i)&&!e.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:d[i]})},e.f={},e.e=o=>Promise.all(Object.keys(e.f).reduce((d,i)=>(e.f[i](o,d),d),[])),e.u=o=>(592===o?"common":o)+"."+{38:"3c15bd5b3e26a4fe",225:"20b0d21a14a32fe8",236:"2fb15e674b3467f5",380:"b9371e0ba9090407",396:"7143631f2e8c5031",559:"b45f945edbe2c0ce",583:"019e1f25a22d89aa",592:"474a8136ccba7fe5",648:"0fd5aa723549f6e2",650:"a60c1a04bb562e61",720:"6cb57c9e3ef19416",793:"5f8e96396d9b99e5",895:"bad99fa0634b4aee"}[o]+".js",e.miniCssF=o=>{},e.o=(o,d)=>Object.prototype.hasOwnProperty.call(o,d),(()=>{var o={},d="dashboard:";e.l=(i,s,v,c)=>{if(o[i])o[i].push(s);else{var f,S;if(void 0!==v)for(var g=document.getElementsByTagName("script"),y=0;y<g.length;y++){var m=g[y];if(m.getAttribute("src")==i||m.getAttribute("data-webpack")==d+v){f=m;break}}f||(S=!0,(f=document.createElement("script")).type="module",f.charset="utf-8",f.timeout=120,e.nc&&f.setAttribute("nonce",e.nc),f.setAttribute("data-webpack",d+v),f.src=e.tu(i)),o[i]=[s];var w=(_,E)=>{f.onerror=f.onload=null,clearTimeout(h);var P=o[i];if(delete o[i],f.parentNode&&f.parentNode.removeChild(f),P&&P.forEach(p=>p(E)),_)return _(E)},h=setTimeout(w.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=w.bind(null,f.onerror),f.onload=w.bind(null,f.onload),S&&document.head.appendChild(f)}}})(),e.r=o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},(()=>{var o={396:[396]},d={396:["default","./Module",770]};e.f.remotes=(i,s)=>{e.o(o,i)&&o[i].forEach(v=>{var c=e.R;c||(c=[]);var f=d[v];if(!(c.indexOf(f)>=0)){if(c.push(f),f.p)return s.push(f.p);var S=h=>{h||(h=new Error("Container missing")),"string"==typeof h.message&&(h.message+='\nwhile loading "'+f[1]+'" from '+f[2]),L[v]=()=>{throw h},f.p=0},g=(h,_,E,P,p,$)=>{try{var O=h(_,E);if(!O||!O.then)return p(O,P,$);var U=O.then(T=>p(T,P),S);if(!$)return U;s.push(f.p=U)}catch(T){S(T)}},m=(h,_,E)=>g(_.get,f[1],c,0,w,E),w=h=>{f.p=1,L[v]=_=>{_.exports=h()}};g(e,f[2],0,0,(h,_,E)=>h?g(e.I,f[0],0,h,m,E):S(),1)}})}})(),(()=>{e.S={};var o={},d={};e.I=(i,s)=>{s||(s=[]);var v=d[i];if(v||(v=d[i]={}),!(s.indexOf(v)>=0)){if(s.push(v),o[i])return o[i];e.o(e.S,i)||(e.S[i]={});var c=e.S[i],S="dashboard",g=(w,h,_,E)=>{var P=c[w]=c[w]||{},p=P[h];(!p||!p.loaded&&(!E!=!p.eager?E:S>p.from))&&(P[h]={get:_,from:S,eager:!!E})},m=[];return"default"===i&&(g("@angular/common","13.2.2",()=>Promise.all([e.e(583),e.e(895)]).then(()=>()=>e(6895))),g("@angular/core","13.2.2",()=>Promise.all([e.e(225),e.e(720),e.e(650)]).then(()=>()=>e(4650))),g("@angular/router","13.2.2",()=>Promise.all([e.e(225),e.e(583),e.e(720),e.e(380),e.e(793)]).then(()=>()=>e(4793))),g("@ng-mfe/shared/data-access-user","0.0.0",()=>Promise.all([e.e(225),e.e(583),e.e(380),e.e(592)]).then(()=>()=>e(8464))),g("rxjs/operators","7.4.0",()=>Promise.all([e.e(648),e.e(559)]).then(()=>()=>e(7559))),g("rxjs","7.4.0",()=>Promise.all([e.e(648),e.e(236)]).then(()=>()=>e(236))),(w=>{var h=p=>(w=>"undefined"!=typeof console&&console.warn&&console.warn(w))("Initialization of sharing external failed: "+p);try{var _=e(770);if(!_)return;var E=p=>p&&p.init&&p.init(e.S[i],s);if(_.then)return m.push(_.then(E,h));var P=E(_);P&&P.then&&m.push(P.catch(h))}catch(p){h(p)}})()),o[i]=m.length?Promise.all(m).then(()=>o[i]=1):1}}})(),(()=>{var o;e.tt=()=>(void 0===o&&(o={createScriptURL:d=>d},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(o=trustedTypes.createPolicy("angular#bundler",o))),o)})(),e.tu=o=>e.tt().createScriptURL(o),(()=>{var o;if("string"==typeof import.meta.url&&(o=import.meta.url),!o)throw new Error("Automatic publicPath is not supported in this browser");o=o.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=o})(),(()=>{var o=t=>{var n=l=>l.split(".").map(u=>+u==u?+u:u),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(t),a=r[1]?n(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,n(r[2]))),r[3]&&(a.push([]),a.push.apply(a,n(r[3]))),a},d=(t,n)=>{t=o(t),n=o(n);for(var r=0;;){if(r>=t.length)return r<n.length&&"u"!=(typeof n[r])[0];var a=t[r],l=(typeof a)[0];if(r>=n.length)return"u"==l;var u=n[r],b=(typeof u)[0];if(l!=b)return"o"==l&&"n"==b||"s"==b||"u"==l;if("o"!=l&&"u"!=l&&a!=u)return a<u;r++}},i=t=>{var n=t[0],r="";if(1===t.length)return"*";if(n+.5){r+=0==n?">=":-1==n?"<":1==n?"^":2==n?"~":n>0?"=":"!=";for(var a=1,l=1;l<t.length;l++)a--,r+="u"==(typeof(b=t[l]))[0]?"-":(a>0?".":"")+(a=2,b);return r}var u=[];for(l=1;l<t.length;l++){var b=t[l];u.push(0===b?"not("+j()+")":1===b?"("+j()+" || "+j()+")":2===b?u.pop()+" "+u.pop():i(b))}return j();function j(){return u.pop().replace(/^\((.+)\)$/,"$1")}},s=(t,n)=>{if(0 in t){n=o(n);var r=t[0],a=r<0;a&&(r=-r-1);for(var l=0,u=1,b=!0;;u++,l++){var j,A,x=u<t.length?(typeof t[u])[0]:"";if(l>=n.length||"o"==(A=(typeof(j=n[l]))[0]))return!b||("u"==x?u>r&&!a:""==x!=a);if("u"==A){if(!b||"u"!=x)return!1}else if(b)if(x==A)if(u<=r){if(j!=t[u])return!1}else{if(a?j>t[u]:j<t[u])return!1;j!=t[u]&&(b=!1)}else if("s"!=x&&"n"!=x){if(a||u<=r)return!1;b=!1,u--}else{if(u<=r||A<x!=a)return!1;b=!1}else"s"!=x&&"n"!=x&&(b=!1,u--)}}var N=[],C=N.pop.bind(N);for(l=1;l<t.length;l++){var F=t[l];N.push(1==F?C()|C():2==F?C()&C():F?s(F,n):!C())}return!!C()},m=(t,n,r,a)=>{var l=((t,n)=>{var r=t[n];return Object.keys(r).reduce((a,l)=>!a||!r[a].loaded&&d(a,l)?l:a,0)})(t,r);if(!s(a,l))throw new Error(((t,n,r,a)=>"Unsatisfied version "+r+" from "+(r&&t[n][r].from)+" of shared singleton module "+n+" (required "+i(a)+")")(t,r,l,a));return P(t[r][l])},P=t=>(t.loaded=1,t.get()),p=t=>function(n,r,a,l){var u=e.I(n);return u&&u.then?u.then(t.bind(t,n,e.S[n],r,a,l)):t(n,e.S[n],r,a,l)},O=p((t,n,r,a)=>n&&e.o(n,r)?P(((t,a)=>{var r=t[a];return(a=Object.keys(r).reduce((l,u)=>!l||d(l,u)?u:l,0))&&r[a]})(n,r)):a()),V=p((t,n,r,a,l)=>n&&e.o(n,r)?m(n,0,r,a):l()),M={},B={7583:()=>V("default","@angular/core",[2,13,2,0],()=>Promise.all([e.e(225),e.e(720),e.e(650)]).then(()=>()=>e(4650))),720:()=>V("default","rxjs/operators",[2,7,4,0],()=>Promise.all([e.e(648),e.e(559)]).then(()=>()=>e(7559))),8380:()=>V("default","@angular/common",[2,13,2,0],()=>e.e(895).then(()=>()=>e(6895))),4719:()=>O("default","@ng-mfe/shared/data-access-user",()=>Promise.all([e.e(225),e.e(592)]).then(()=>()=>e(8464))),5503:()=>V("default","@angular/router",[2,13,2,0],()=>Promise.all([e.e(225),e.e(793)]).then(()=>()=>e(4793))),1225:()=>V("default","rxjs",[2,7,4,0],()=>Promise.all([e.e(648),e.e(236)]).then(()=>()=>e(236)))},z={38:[4719,5503],225:[1225],380:[8380],583:[7583],720:[720]};e.f.consumes=(t,n)=>{e.o(z,t)&&z[t].forEach(r=>{if(e.o(M,r))return n.push(M[r]);var a=b=>{M[r]=0,e.m[r]=j=>{delete e.c[r],j.exports=b()}},l=b=>{delete M[r],e.m[r]=j=>{throw delete e.c[r],b}};try{var u=B[r]();u.then?n.push(M[r]=u.then(a).catch(l)):a(u)}catch(b){l(b)}})}})(),(()=>{var o={179:0};e.f.j=(s,v)=>{var c=e.o(o,s)?o[s]:void 0;if(0!==c)if(c)v.push(c[2]);else if(/^(225|380|396|583|720)$/.test(s))o[s]=0;else{var f=new Promise((m,w)=>c=o[s]=[m,w]);v.push(c[2]=f);var S=e.p+e.u(s),g=new Error;e.l(S,m=>{if(e.o(o,s)&&(0!==(c=o[s])&&(o[s]=void 0),c)){var w=m&&("load"===m.type?"missing":m.type),h=m&&m.target&&m.target.src;g.message="Loading chunk "+s+" failed.\n("+w+": "+h+")",g.name="ChunkLoadError",g.type=w,g.request=h,c[1](g)}},"chunk-"+s,s)}};var d=(s,v)=>{var g,y,[c,f,S]=v,m=0;if(c.some(h=>0!==o[h])){for(g in f)e.o(f,g)&&(e.m[g]=f[g]);S&&S(e)}for(s&&s(v);m<c.length;m++)e.o(o,y=c[m])&&o[y]&&o[y][0](),o[y]=0},i=self.webpackChunkdashboard=self.webpackChunkdashboard||[];i.forEach(d.bind(null,0)),i.push=d.bind(null,i.push.bind(i))})();var Q=e(4025);