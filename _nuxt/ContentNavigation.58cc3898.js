import{u as l}from"./asyncData.7d7e583e.js";import{i as d,A as f,B as v,C as p,D as m,E as g,j as h,F as _,l as s}from"./entry.a6e678e6.js";import{_ as y}from"./nuxt-link.85b07ecc.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(i){const{query:t}=f(i),n=v(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&p("dd-navigation").value){const{navigation:a}=m();return{navigation:a}}const{data:o}=await l(`content-navigation-${g(n.value)}`,()=>_(n.value));return{navigation:o}},render(i){const t=h(),{navigation:n}=i,o=e=>s(y,{to:e._path},()=>e.title),a=(e,u)=>s("ul",u?{"data-level":u}:null,e.map(r=>r.children?s("li",null,[o(r),a(r.children,u+1)]):s("li",null,o(r)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),x=C;export{x as default};
