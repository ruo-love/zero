import{u as l,h as m,C as h,o as _,b as y,w as r,k as s,n as p,l as i,H as g,s as c,a3 as v,a4 as C,a5 as w,a6 as A,a7 as b,a8 as P,a9 as R,aa as x,ab as D,ac as E,V as L,d as V,j as k,y as T,ad as j,ae as B,af as O,ag as S}from"./chunks/framework.97e1d4f2.js";import{t as u}from"./chunks/theme.12ad0a8b.js";const F={class:"title-wrap"},H={class:"fade-in-top",style:{position:"relative",width:"100%",height:"100%"}},N={__name:"MyLayout",setup(e){const{isDark:t}=l(),{Layout:a}=u,n=m(null);return(U,W)=>{const f=h("Content");return _(),y(i(a),null,{"home-hero-info":r(()=>[s("div",F,[s("h4",{class:p([{"":!i(t)},"title mb"]),style:{color:"var(--vp-button-alt-bg)"}}," Zero ",2),s("h4",{class:p(["title",{"":!i(t)}])}," Hello, Welcome to my blog! ",2)])]),"home-hero-image":r(()=>[s("div",H,[s("div",{id:"sceneRef",ref_key:"sceneRef",ref:n,style:{width:"100%",height:"100%"}},null,512)])]),default:r(()=>[g(f)]),_:1})}}},$={extends:u,Layout:N};function d(e){if(e.extends){const t=d(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const o=d($),I=V({name:"VitePressApp",setup(){const{site:e}=l();return k(()=>{T(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),j(),B(),O(),o.setup&&o.setup(),()=>S(o.Layout)}});async function M(){const e=G(),t=z();t.provide(C,e);const a=w(e.route);return t.provide(A,a),t.component("Content",b),t.component("ClientOnly",P),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:R}),{app:t,router:e,data:a}}function z(){return x(I)}function G(){let e=c,t;return D(a=>{let n=E(a);return n?(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),c&&(e=!1),L(()=>import(n),[])):null},o.NotFound)}c&&M().then(({app:e,router:t,data:a})=>{t.go().then(()=>{v(t.route,a.site),e.mount("#app")})});export{M as createApp};
