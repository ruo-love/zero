import{o as p,b as c,w as u,l,k as m,s as o,a1 as d,a2 as f,a3 as _,a4 as h,a5 as g,a6 as A,a7 as y,a8 as w,a9 as P,aa as v,V as C,d as b,u as R,j as E,y as T,ab as x,ac as D,ad as L,ae as V}from"./chunks/framework.681fc4ae.js";import{t as r}from"./chunks/theme.f5d3d16a.js";const j="/assets/banner.c36a409c.png",B=m("img",{src:j},null,-1),O={__name:"Team",setup(e){const{Layout:a}=r;return(t,n)=>(p(),c(l(a),null,{"home-hero-image":u(()=>[B]),_:1}))}},S={...r,Layout:O};function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(S),k=b({name:"VitePressApp",setup(){const{site:e}=R();return E(()=>{T(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),x(),D(),L(),s.setup&&s.setup(),()=>V(s.Layout)}});async function F(){const e=I(),a=$();a.provide(f,e);const t=_(e.route);return a.provide(h,t),a.component("Content",g),a.component("ClientOnly",A),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:y}),{app:a,router:e,data:t}}function $(){return w(k)}function I(){let e=o,a;return P(t=>{let n=v(t);return n?(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),o&&(e=!1),C(()=>import(n),[])):null},s.NotFound)}o&&F().then(({app:e,router:a,data:t})=>{a.go().then(()=>{d(a.route,t.site),e.mount("#app")})});export{F as createApp};
