import{_ as g,o as a,c as n,a as s,b as f,t as o,F as _,r as u,d as p,e as h,f as r,n as v,w as m}from"./index-587b4e73.js";import{T as $,a as x}from"./TheContainer-dbf17667.js";const S={},k={class:"card"},b=s("header",{class:"card-header"},[s("p",{class:"card-header-title"}," <Sobre_Mim/> ")],-1),C=s("div",{class:"card-content"},[s("div",{class:"content"},[s("p",null," Eu amo tecnologia desde que consigo me lembrar, sou um amante da aprendizagem. "),s("p",null," Aprendi por conta própria praticamente tudo que sei sobre desenvolvimento, através de documentações, videos no youtube, bootcamps e cursos profissionalizantes. "),s("p",null," Também cursei Análise e Desenvolvimento de sistemas pela Estácio "),s("p",null," Pensando fora da caixa e com muita determinação. Sendo pró-ativo e com um mindset empreendedor e agora procuro uma vaga para continuar fazendo de uma paixão, um trabalho. ")])],-1),T=[b,C];function w(t,c){return a(),n("div",k,T)}const y=g(S,[["render",w]]),j={class:"columns"},z={class:"column"},A={class:"image is-3by2"},V=["src"],B={class:"column is-9"},D={class:"title is-5"},M={class:"tag is-dark"},N={__name:"TheCardExpirience",props:{name:String,taginfo:String,text:String,imgsrc:String,stacks:Array,descriptionp1:String,descriptionp2:String},setup(t){return(c,d)=>(a(),n("div",j,[s("div",z,[s("figure",A,[s("img",{class:"",src:t.imgsrc},null,8,V)])]),s("div",B,[s("p",D,[f(o(t.name)+" ",1),s("span",M,"Empresa: "+o(t.taginfo),1)]),s("p",null,o(t.descriptionp1),1),s("p",null,o(t.descriptionp2),1),s("p",null,o(t.text),1),(a(!0),n(_,null,u(t.stacks,i=>(a(),n("span",{key:i.name,class:"tag is-black mr-1"},o(i),1))),128))])]))}},q={class:"card"},E=s("header",{class:"card-header"},[s("p",{class:"card-header-title"}," < Experiencias /> ")],-1),F={class:"card-content"},P={class:"content"},H=s("hr",null,null,-1),L={__name:"TheCardsExpirience",setup(t){const c=p([]);return h(async()=>{const i=await(await fetch("data/data_experiences.json")).json();c.value=i}),(d,i)=>(a(),n("div",q,[E,s("div",F,[s("div",P,[(a(!0),n(_,null,u(c.value,(e,l)=>(a(),n("div",{key:l},[r(N,{name:e.name,taginfo:e.taginfo,text:e.text,stacks:e.stacks,descriptionp1:e.descriptionp1,descriptionp2:e.descriptionp2,imgsrc:e.imgsrc},null,8,["name","taginfo","text","stacks","descriptionp1","descriptionp2","imgsrc"]),H]))),128))])])]))}},G={class:"title is-5"},I=s("hr",null,null,-1),J={__name:"TheCardFormation",props:{name:String,title:String,description:String,tagcolor:String},setup(t){return(c,d)=>(a(),n(_,null,[s("div",null,[s("span",{class:v(t.tagcolor)},o(t.name),3),s("p",G,o(t.title),1),s("p",null,o(t.description),1)]),I],64))}},K={class:"card"},O=s("header",{class:"card-header"},[s("p",{class:"card-header-title"}," < Formações /> ")],-1),Q={class:"card-content"},R={class:"content"},U={__name:"TheCardsFormation",setup(t){const c=p([]);return h(async()=>{const e=await(await(await fetch("data/data_formation.json")).json()).map(l=>({...l,tagcolor:`tag is-${l.tagcolor} mb-2`}));c.value=e}),(d,i)=>(a(),n("div",K,[O,s("div",Q,[s("div",R,[(a(!0),n(_,null,u(c.value,e=>(a(),n("div",{key:e.name},[r(J,{name:e.name,title:e.title,description:e.description,tagcolor:e.tagcolor},null,8,["name","title","description","tagcolor"])]))),128))])])]))}},W={class:"section"},Z={__name:"HomeView",setup(t){return(c,d)=>(a(),n("section",W,[r($,null,{Columns:m(()=>[r(x)]),Column:m(()=>[r(y),r(L),r(U)]),_:1})]))}};export{Z as default};
