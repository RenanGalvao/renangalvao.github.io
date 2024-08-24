import{s as ee,d as me,n as he}from"../chunks/scheduler.CKF8CULZ.js";import{S as te,i as ae,e as b,t as T,s as N,m as C,c as E,a as $,b as B,d as m,f as P,n as V,o as d,g as z,h as u,p as F,j as Z,k as L,l as R,q as y,r as ue,u as de,v as ge,w as _e}from"../chunks/index.DZnjY_r9.js";import{I as le,e as U,S as pe,a as ve,g as be,b as Ee,N as ke,F as $e}from"../chunks/footer.CUhTfADE.js";import"../chunks/paths.C2LxhCDt.js";function oe(f,e,r){const s=f.slice();return s[8]=e[r],s}function ie(f){let e,r=f[8]+"",s;return{c(){e=b("li"),s=T(r)},l(a){e=E(a,"LI",{});var l=$(e);s=B(l,r),l.forEach(m)},m(a,l){z(a,e,l),u(e,s)},p(a,l){l&16&&r!==(r=a[8]+"")&&Z(s,r)},d(a){a&&m(e)}}}function we(f){let e,r,s,a,l,n,o,i,h,w,t,v,A,J,S,j,O,K,H,Q,I,W,D;h=new le({props:{src:f[6](f[2]),title:f[2],className:"text-2xl -mt-1"}}),A=new le({props:{src:f[7](f[3]),title:f[3],className:"text-2xl -mt-1"}});let x=U(f[4]),g=[];for(let c=0;c<x.length;c+=1)g[c]=ie(oe(f,x,c));return{c(){e=b("section"),r=b("header"),s=b("h1"),a=T(f[0]),l=N(),n=b("div"),o=b("span"),i=T("Linguagem: "),C(h.$$.fragment),w=N(),t=b("span"),v=T("Plataforma: "),C(A.$$.fragment),J=N(),S=b("div"),j=b("p"),O=T(f[1]),K=N(),H=b("ul");for(let c=0;c<g.length;c+=1)g[c].c();Q=N(),I=b("a"),W=T("Repositório"),this.h()},l(c){e=E(c,"SECTION",{});var p=$(e);r=E(p,"HEADER",{});var k=$(r);s=E(k,"H1",{class:!0});var M=$(s);a=B(M,f[0]),M.forEach(m),l=P(k),n=E(k,"DIV",{class:!0});var _=$(n);o=E(_,"SPAN",{class:!0});var q=$(o);i=B(q,"Linguagem: "),V(h.$$.fragment,q),q.forEach(m),w=P(_),t=E(_,"SPAN",{class:!0});var X=$(t);v=B(X,"Plataforma: "),V(A.$$.fragment,X),X.forEach(m),_.forEach(m),k.forEach(m),J=P(p),S=E(p,"DIV",{class:!0});var G=$(S);j=E(G,"P",{class:!0});var ne=$(j);O=B(ne,f[1]),ne.forEach(m),K=P(G),H=E(G,"UL",{class:!0});var re=$(H);for(let Y=0;Y<g.length;Y+=1)g[Y].l(re);re.forEach(m),Q=P(G),I=E(G,"A",{class:!0,href:!0,target:!0});var se=$(I);W=B(se,"Repositório"),se.forEach(m),G.forEach(m),p.forEach(m),this.h()},h(){d(s,"class","text-4xl"),d(o,"class","flex mr-4"),d(t,"class","flex"),d(n,"class","flex mb-2 mt-1"),d(j,"class","indent-4 text-justify"),d(H,"class","mt-4 mb-8 list-inside list-disc"),d(I,"class","border-[.2rem] border-solid border-black bg-black text-white py-2 px-6"),d(I,"href",f[5]),d(I,"target","_blank"),d(S,"class","body")},m(c,p){z(c,e,p),u(e,r),u(r,s),u(s,a),u(r,l),u(r,n),u(n,o),u(o,i),F(h,o,null),u(n,w),u(n,t),u(t,v),F(A,t,null),u(e,J),u(e,S),u(S,j),u(j,O),u(S,K),u(S,H);for(let k=0;k<g.length;k+=1)g[k]&&g[k].m(H,null);u(S,Q),u(S,I),u(I,W),D=!0},p(c,[p]){(!D||p&1)&&Z(a,c[0]);const k={};p&4&&(k.src=c[6](c[2])),p&4&&(k.title=c[2]),h.$set(k);const M={};if(p&8&&(M.src=c[7](c[3])),p&8&&(M.title=c[3]),A.$set(M),(!D||p&2)&&Z(O,c[1]),p&16){x=U(c[4]);let _;for(_=0;_<x.length;_+=1){const q=oe(c,x,_);g[_]?g[_].p(q,p):(g[_]=ie(q),g[_].c(),g[_].m(H,null))}for(;_<g.length;_+=1)g[_].d(1);g.length=x.length}(!D||p&32)&&d(I,"href",c[5])},i(c){D||(L(h.$$.fragment,c),L(A.$$.fragment,c),D=!0)},o(c){R(h.$$.fragment,c),R(A.$$.fragment,c),D=!1},d(c){c&&m(e),y(h),y(A),ue(g,c)}}}function Se(f,e,r){let{title:s}=e,{description:a}=e,{language:l}=e,{plataform:n}=e,{features:o}=e,{codeHref:i}=e;function h(t){switch(t){case"bash":return pe;default:throw`Language ${t} not defined`}}function w(t){switch(t){case"Linux":return ve;default:throw`Plataform ${t} not defined`}}return f.$$set=t=>{"title"in t&&r(0,s=t.title),"description"in t&&r(1,a=t.description),"language"in t&&r(2,l=t.language),"plataform"in t&&r(3,n=t.plataform),"features"in t&&r(4,o=t.features),"codeHref"in t&&r(5,i=t.codeHref)},[s,a,l,n,o,i,h,w]}class Ie extends te{constructor(e){super(),ae(this,e,Se,we,ee,{title:0,description:1,language:2,plataform:3,features:4,codeHref:5})}}function ce(f,e,r){const s=f.slice();return s[1]=e[r],s}function fe(f){let e,r;const s=[f[1]];let a={};for(let l=0;l<s.length;l+=1)a=me(a,s[l]);return e=new Ie({props:a}),{c(){C(e.$$.fragment)},l(l){V(e.$$.fragment,l)},m(l,n){F(e,l,n),r=!0},p(l,n){const o=n&1?be(s,[Ee(l[1])]):{};e.$set(o)},i(l){r||(L(e.$$.fragment,l),r=!0)},o(l){R(e.$$.fragment,l),r=!1},d(l){y(e,l)}}}function Le(f){let e,r,s=U(f[0]),a=[];for(let n=0;n<s.length;n+=1)a[n]=fe(ce(f,s,n));const l=n=>R(a[n],1,1,()=>{a[n]=null});return{c(){e=b("main");for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){e=E(n,"MAIN",{class:!0});var o=$(e);for(let i=0;i<a.length;i+=1)a[i].l(o);o.forEach(m),this.h()},h(){d(e,"class","container w-full mt-8 lg:mt-12 lg:h-[calc(100vh-6rem)]")},m(n,o){z(n,e,o);for(let i=0;i<a.length;i+=1)a[i]&&a[i].m(e,null);r=!0},p(n,[o]){if(o&1){s=U(n[0]);let i;for(i=0;i<s.length;i+=1){const h=ce(n,s,i);a[i]?(a[i].p(h,o),L(a[i],1)):(a[i]=fe(h),a[i].c(),L(a[i],1),a[i].m(e,null))}for(de(),i=s.length;i<a.length;i+=1)l(i);ge()}},i(n){if(!r){for(let o=0;o<s.length;o+=1)L(a[o]);r=!0}},o(n){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)R(a[o]);r=!1},d(n){n&&m(e),ue(a,n)}}}function Ae(f){return[[{title:"Backup Docker Volumes",description:`Script feito em bash para facilitar o backup diário de volumes do docker, bem como a restauração 
                do backup caso seja necessário. Dividido em cliente e servidor.`,language:"bash",plataform:"Linux",features:["Backup diário de diversos volumes a partir de uma simples configuração","Configurável para múltiplas máquinas, serviços e volumes","Restauração do backup por data e serviço (limitado, leia o README)","Limpeza automática dos backups antigos"],codeHref:"https://github.com/RenanGalvao/linux-scripts/tree/master/backup"}]]}class Ne extends te{constructor(e){super(),ae(this,e,Ae,Le,ee,{})}}function Pe(f){let e,r,s,a,l,n,o,i,h,w;return l=new ke({}),o=new Ne({}),h=new $e({}),{c(){e=b("meta"),r=b("meta"),s=b("meta"),a=N(),C(l.$$.fragment),n=N(),C(o.$$.fragment),i=N(),C(h.$$.fragment),this.h()},l(t){const v=_e("svelte-wyde0s",document.head);e=E(v,"META",{name:!0,content:!0}),r=E(v,"META",{name:!0,content:!0}),s=E(v,"META",{name:!0,content:!0}),v.forEach(m),a=P(t),V(l.$$.fragment,t),n=P(t),V(o.$$.fragment,t),i=P(t),V(h.$$.fragment,t),this.h()},h(){document.title="Renan Galvão - Scripts",d(e,"name","title"),d(e,"content","Renan Galvão - Scripts"),d(r,"name","description"),d(r,"content","Scripts desenvolvidos por mim que talvez lhe seja útil."),d(s,"name","keywords"),d(s,"content","scripts, bash, automação, código")},m(t,v){u(document.head,e),u(document.head,r),u(document.head,s),z(t,a,v),F(l,t,v),z(t,n,v),F(o,t,v),z(t,i,v),F(h,t,v),w=!0},p:he,i(t){w||(L(l.$$.fragment,t),L(o.$$.fragment,t),L(h.$$.fragment,t),w=!0)},o(t){R(l.$$.fragment,t),R(o.$$.fragment,t),R(h.$$.fragment,t),w=!1},d(t){t&&(m(a),m(n),m(i)),m(e),m(r),m(s),y(l,t),y(o,t),y(h,t)}}}class xe extends te{constructor(e){super(),ae(this,e,null,Pe,ee,{})}}export{xe as component};
