import{f as d,h as _,j as h,ag as p,c as m,ah as u,l as n,ai as t,aj as a,y as s,F as f,ak as g,al as v,am as x,n as r,an as y,ao as b,m as k,ap as N,aq as w,_ as P}from"./nav-e7dbc262.js";import{N as V}from"./NoteViewer-40afdd07.js";import{u as j}from"./index-f7aa9c03.js";const S={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},H={class:"font-bold flex gap-2"},z={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(q){_(h),p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),j({title:`Notes - ${m.title}`});const i=u(()=>x.slice(0,-1).map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.notesHTML!==""));return(o,l)=>(r(),n("div",{id:"page-root",style:v(s(w))},[t("div",S,[t("div",L,[t("h1",T,a(s(m).title),1),t("div",B,a(new Date().toLocaleString()),1)]),(r(!0),n(f,null,g(s(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",H,[t("div",z,a(e==null?void 0:e.no)+"/"+a(s(y)),1),b(" "+a(e==null?void 0:e.title)+" ",1),D])]),k(V,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(i).length-1?(r(),n("hr",F)):N("v-if",!0)]))),128))])],4))}}),W=P(M,[["__file","/home/runner/work/share-docs/share-docs/node_modules/.pnpm/@slidev+client@0.39.0_vite@4.0.4/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{W as default};
