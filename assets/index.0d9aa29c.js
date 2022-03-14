var L=Object.defineProperty,I=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var k=(e,t,r)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&k(e,r,t[r]);if(y)for(var r of y(t))E.call(t,r)&&k(e,r,t[r]);return e},h=(e,t)=>I(e,x(t));import{j as l,M as N,a as c,G as P,b as M,u as z,r as d,A,H as D,c as g,B as v,d as F,T,e as m,S as O,R as j,f as S,g as _}from"./vendor.95b83442.js";const B=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}};B();const G={longitude:105.4623185,latitude:16.4664056,zoom:5},R=({id:e,style:t,mapMarker:r,mapViewState:n})=>{var s;const i=a=>{var o;(o=a.target.getStyle().layers)==null||o.forEach(p=>{p.id.endsWith("-label")&&a.target.setLayoutProperty(p.id,"text-field",["coalesce",["get","name_vn"],["get","name"]])})};return l(N,h(u({id:e},n==null?void 0:n.viewState),{initialViewState:(s=n==null?void 0:n.initialViewState)!=null?s:G,style:t!=null?t:{height:"100vh"},mapboxAccessToken:"pk.eyJ1IjoicGhhbW5nb2NkdXk5OCIsImEiOiJjazZhNzhtOTEwMjVlM29vZ2h0cmh6dmM1In0.XmhRt0NI4dUMkmApr_EPFw",onMove:a=>{var o;(o=n==null?void 0:n.onChange)==null||o.call(n,a.viewState)},mapStyle:"mapbox://styles/mapbox/streets-v11",onLoad:i,children:[c(P,{}),r==null?void 0:r.markers.map(a=>{var o;return c(M,{longitude:a.position.long,latitude:a.position.lat,anchor:"bottom",color:(o=a.color)!=null?o:"red",onClick:()=>r.onClick(a)},a.key)})]}))},H="FeatureCollection",W="DNcam1",q={type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},J=[{type:"Feature",properties:{id:1,ID_1:1,Name:"Chung c\u01B0 FPT Plaza 2",CamLink:"tvs-danang.ddns.net:81",InfoLink:"InfoLink\\cam001.html"},geometry:{type:"Point",coordinates:[108.26481092479621,15.987565461618766]}},{type:"Feature",properties:{id:2,ID_1:null,Name:"C\u1EA3i t\u1EA1o, n\xE2ng c\u1EA5p c\u01A1 s\u1EDF 42 B\u1EA1ch \u0110\u1EB1ng \u0111\u1EC3 l\xE0m B\u1EA3o t\xE0ng \u0110\xE0 N\u1EB5ng",CamLink:"http://tvs-danang.ddns.net:81/doc/page/preview.asp",InfoLink:"InfoLink\\cam002.html"},geometry:{type:"Point",coordinates:[108.2229931306935,16.065233674015996]}},{type:"Feature",properties:{id:3,ID_1:null,Name:"Chung c\u01B0 The Sang \u2013 The Sang Residence",CamLink:"http://tvs-danang.ddns.net:81/doc/page/preview.asp",InfoLink:"InfoLink\\cam003.html"},geometry:{type:"Point",coordinates:[108.24968840809488,16.02466065974164]}},{type:"Feature",properties:{id:4,ID_1:null,Name:"Th\xE1p ven s\xF4ng",CamLink:"http://tvs-danang.ddns.net:81/doc/page/preview.asp",InfoLink:"InfoLink\\cam004.html"},geometry:{type:"Point",coordinates:[108.21957662642959,16.050790284119334]}},{type:"Feature",properties:{id:5,ID_1:null,Name:"Khu c\u0103n h\u1ED9 Asiana",CamLink:"http://tvs-danang.ddns.netfdfdgd",InfoLink:"InfoLink\\cam005.html"},geometry:{type:"Point",coordinates:[108.12854926022577,16.099348328747915]}}];var K={type:H,name:W,crs:q,features:J};const f=K.features.map(e=>({key:String(e.properties.id),position:{lat:e.geometry.coordinates[1],long:e.geometry.coordinates[0]},title:e.properties.Name,htmlPage:`./${e.properties.InfoLink.replace("InfoLink\\","")}`})),C={longitude:108.2167971,latitude:16.0651653,zoom:10};function X(){const{map:e}=z(),[t,r]=d.exports.useState(C),[n,i]=d.exports.useState(null),s=o=>{i(o),e==null||e.resize(),r({latitude:o.position.lat,longitude:o.position.long,zoom:15}),setTimeout(()=>e==null?void 0:e.resize(),1e3)},a=d.exports.useMemo(()=>f.map(o=>h(u({},o),{color:(n==null?void 0:n.key)===o.key?"red":"black"})),[f,n]);return console.log(a),c(A,{padding:"md",header:c(D,{height:60,padding:"xs",children:l("div",{className:"header",children:[l(g,{control:c(v,{children:"Danh s\xE1ch c\xE1c v\u1ECB tr\xED quan s\xE1t"}),children:[c(g.Label,{children:"Camera"}),f.map(o=>c(g.Item,{icon:c(F.DeviceComputerCamera,{size:14}),onClick:()=>s(o),children:o.title},o.key))]}),c(T,{className:"title",size:"md",children:n==null?void 0:n.title})]})}),styles:o=>({main:{backgroundColor:o.colorScheme==="dark"?o.colors.dark[8]:o.colors.gray[0]}}),children:l(m,{gutter:0,children:[c(m.Col,{span:n?6:12,children:c(R,{id:"map",style:{height:"calc(100vh - 60px)"},mapViewState:{initialViewState:C,viewState:t,onChange:r},mapMarker:{markers:a,onClick:s}})}),n?c(m.Col,{span:6,children:l(O,{style:{height:"calc(100vh - 60px)",padding:"0 8px"},children:[c(Z,{src:n.htmlPage}),c("a",{href:"cammap://",children:c(v,{children:"M\u1EDF \u1EE9ng d\u1EE5ng"})})]})}):null]})})}const Z=({src:e})=>{const[t,r]=d.exports.useState(200);return c("iframe",{className:"content",scrolling:"no",style:{height:t},src:e,onLoad:n=>{var i,s;return r((s=(i=n.currentTarget.contentWindow)==null?void 0:i.document.documentElement.scrollHeight)!=null?s:200)}})};j.render(c(S.StrictMode,{children:c(_,{children:c(X,{})})}),document.getElementById("root"));
