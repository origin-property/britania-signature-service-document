import{s as x,b,e as _,t as j,h as y,d as p,c as w,f,g as v,j as S,k as z,l as $,m as d,o as k,n as q,p as A}from"../chunks/scheduler.Eaj42bxH.js";import{S as C,i as D}from"../chunks/index.CMSEJhCx.js";import{p as H}from"../chunks/stores.BjXlRTSh.js";function I(a){let n,i,e,r,s=a[0].status+"",o,u,c,h;return document.title=n="Error - "+a[0].status,{c(){i=b(),e=_("div"),r=_("h1"),o=j(s),u=b(),c=_("p"),h=j(a[1]),this.h()},l(t){y("svelte-1wpfhz9",document.head).forEach(p),i=w(t),e=f(t,"DIV",{class:!0});var m=v(e);r=f(m,"H1",{});var E=v(r);o=S(E,s),E.forEach(p),u=w(m),c=f(m,"P",{});var g=v(c);h=S(g,a[1]),g.forEach(p),m.forEach(p),this.h()},h(){z(e,"class","wrapper svelte-1ldjxpt")},m(t,l){$(t,i,l),$(t,e,l),d(e,r),d(r,o),d(e,u),d(e,c),d(c,h)},p(t,[l]){l&1&&n!==(n="Error - "+t[0].status)&&(document.title=n),l&1&&s!==(s=t[0].status+"")&&k(o,s),l&2&&k(h,t[1])},i:q,o:q,d(t){t&&(p(i),p(e))}}}function P(a,n,i){let e;A(a,H,s=>i(0,e=s));let r;return a.$$.update=()=>{var s;if(a.$$.dirty&1){const o=((s=e.error)==null?void 0:s.message)||"An unexpected error occurred.";i(1,r=o.endsWith(".")?o:`${o}.`)}},[e,r]}class F extends C{constructor(n){super(),D(this,n,P,I,x,{})}}export{F as component};
