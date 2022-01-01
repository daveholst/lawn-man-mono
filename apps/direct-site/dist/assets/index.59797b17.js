import{C as F,a as R,b as U,A as I,c as N,r as a,u as q,d as D,R as e,N as P,F as A,H as j,B as k,e as L,f as E,S as w,g as f,I as M,h as B,i as V,j as T,m as z,k as G,l as H,n as J,o as Q,p as _}from"./vendor.75dbd578.js";const K=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}};K();const X={UserPoolId:"ap-southeast-2_gw39jNQMX",ClientId:"58nmodulq3fcf1juh3gmjgfvog",Storage:new F({secure:!1,domain:window.location.hostname==="localhost"?"localhost":"lawnman.club"})},x=new R(X),Y=async(n,r)=>await new Promise((l,s)=>{const t={Username:n,Password:r,Pool:x,Storage:new F({secure:!1,domain:window.location.hostname==="localhost"?"localhost":"lawnman.club"})},o=new U(t),c=new I({Username:n,Password:r});o.authenticateUser(c,{onSuccess:i=>{console.log("onSuccess: ",i),l(i)},onFailure:i=>{console.log("onFailure: ",i),s(i)},newPasswordRequired:i=>{console.log("newPasswordRequired: ",i),l(i)}})}),$=async(n,r,l)=>{const s=new N({Name:"name",Value:l});x.signUp(n,r,[s],[],(t,o)=>{t&&console.error(t),console.log(o)})},Z=()=>new Promise((n,r)=>{const l=x.getCurrentUser();l||r("No local user found."),l==null||l.getSession((s,t)=>{s||!t?r("User found, but could not get session data."):n(t)})}),ee=async()=>{try{const n=x.getCurrentUser();n==null||n.signOut()}catch(n){console.error(n)}},W=a.exports.createContext({});function te({children:n}){const[r,l]=a.exports.useState(),[s,t]=a.exports.useState(),[o,c]=a.exports.useState(!1),[i,b]=a.exports.useState(!0),p=q(),y=D();a.exports.useEffect(()=>{s&&t(null)},[y.pathname]),a.exports.useEffect(()=>{Z().then(d=>{l(d),console.log("inneruser",d)}).catch(d=>t(d)).finally(()=>b(!1))},[]);function m(d,C){c(!0),Y(d,C).then(h=>{l(h),p("/")}).catch(h=>t(h)).finally(()=>c(!1))}function u(d,C,h){c(!0),$(d,C,h).then(S=>{l(S),p("/")}).catch(S=>t(S)).finally(()=>c(!1))}function g(){c(!0),ee().then(()=>{l(void 0),p("/")}).catch(d=>t(d)).finally(()=>c(!1))}const O=a.exports.useMemo(()=>({user:r,loading:o,error:s,performLogin:m,performSignup:u,performLogout:g}),[r,o,s]);return e.createElement(W.Provider,{value:O},!i&&n)}function v(){return a.exports.useContext(W)}function oe(n){const{user:r}=v();return console.log(window.location.hostname),r?e.createElement(e.Fragment,null,n.children):window.location.host.split(".")[0]==="auth"?e.createElement(P,{to:"/login"}):window.location.hostname==="localhost"&&window.location.port!=="3100"?(window.location.href="http://localhost:3100",e.createElement(e.Fragment,null)):window.location.hostname==="localhost"&&window.location.port==="3100"?e.createElement(P,{to:"/login"}):(window.location.href="https://auth.lawnman.club",e.createElement(e.Fragment,null))}const ne=()=>{v();const[n,r]=a.exports.useState(!1),[l,s]=a.exports.useState("500"),[t,o]=a.exports.useState(null),c="mqttjs_"+Math.random().toString(16).substr(2,8),i="wss://mqtt.holstsolutions.com:443/ws/mqtt",b={username:"juicebox",password:"dY*t7LSgGhc%M4",keepalive:60,clientId:c,protocolId:"MQTT",protocolVersion:4,clean:!0,reconnectPeriod:1e3,connectTimeout:30*1e3,useSSL:!0},p=u=>{T.get("https://sprinklers.holst.solutions/cr",{params:{pw:"a6d82bced638de3def1e9bbb4983225c",t:`0,0,0,0,0,0,0,0,${u}`}})},y=(u,g)=>{o(z.connect(u,g)),t==null||t.on("connect",()=>{console.log("Connected"),r(!0)})},m=({topic:u,payload:g})=>{t&&t.publish(u,g)};return a.exports.useEffect(()=>{y(i,b)},[]),a.exports.useEffect(()=>{t&&(t.on("connect",()=>{console.log("Connected"),r(!0)}),t.on("error",u=>{console.log("Connection error: ",u),t==null||t.end()}),t.on("reconnect",()=>{console.log("Reconnecting...")}))},[t]),e.createElement(A,{justify:"center",direction:"column"},e.createElement(j,{as:"h2",size:"2xl",margin:"10px"},"Direct Control")," ",e.createElement(j,{as:"h5",size:"md",marginLeft:"10px"},n?"Connected":"Not Connected"," ||"),e.createElement(k,{minW:"xs",maxW:"md",padding:"10px",margin:"5px",borderWidth:"1px",borderRadius:"lg",overflow:"hidden"},e.createElement(L,null,e.createElement(E,{as:"legend"},"Bore Pump"),e.createElement(w,{justify:"space-around",direction:"row",spacing:4,align:"center"},e.createElement(f,{isFullWidth:!0,colorScheme:"teal",variant:"solid",onClick:()=>p(300)},"On"),e.createElement(f,{isFullWidth:!0,colorScheme:"red",variant:"solid",onClick:()=>p(0)},"Off")),e.createElement("br",null),e.createElement(E,{as:"legend"},"Juicebox Bypass Valve"),e.createElement(w,{justify:"space-around",direction:"row",spacing:4,align:"center"},e.createElement(f,{isFullWidth:!0,colorScheme:"teal",variant:"solid",onClick:()=>m({topic:"juicebox1/bypass/on",payload:"on"})},"Open"),e.createElement(f,{isFullWidth:!0,colorScheme:"red",variant:"solid",onClick:()=>m({topic:"juicebox1/bypass/off",payload:"off"})},"Close")),e.createElement("br",null),e.createElement(E,{as:"legend"},"Water Dose Valve"),e.createElement(w,{justify:"space-around",direction:"row",spacing:4,align:"center"},e.createElement(f,{isFullWidth:!0,colorScheme:"teal",variant:"solid",onClick:()=>m({topic:"juicebox1/water/on",payload:"on"})},"Open"),e.createElement(f,{isFullWidth:!0,colorScheme:"red",variant:"solid",onClick:()=>m({topic:"juicebox1/water/off",payload:"off"})},"Close")),e.createElement("br",null),e.createElement(E,{as:"legend"},"Fertiliser Bay 1 Pump"),e.createElement(w,{justify:"space-around",direction:"row",spacing:4,align:"center"},e.createElement(f,{isFullWidth:!0,colorScheme:"teal",variant:"solid",onClick:()=>m({topic:"juicebox1/fert1/on",payload:"on"})},"On"),e.createElement(f,{isFullWidth:!0,colorScheme:"red",variant:"solid",onClick:()=>m({topic:"juicebox1/fert1/off",payload:"off"})},"Off")))),e.createElement(k,{minW:"xs",maxW:"md",padding:"10px",margin:"5px",borderWidth:"1px",borderRadius:"lg",overflow:"hidden"},e.createElement(L,null,e.createElement(E,{as:"legend"},"Dose Fertiliser 1"),e.createElement(w,{justify:"space-around",direction:"row",spacing:4,align:"center"},e.createElement(M,null,e.createElement(B,{type:"number",placeholder:"quantity",onChange:u=>s(u.target.value),defaultValue:l}),e.createElement(V,{children:"mL"})),e.createElement(f,{colorScheme:"blue",variant:"solid",onClick:()=>m({topic:"juicebox1/fert1/runtime",payload:JSON.stringify(Math.round(Number(l)/2.9))})},"Dose")))))},re=()=>(v(),e.createElement(G,null,e.createElement(H,{path:"/",element:e.createElement(oe,null,e.createElement(ne,null))})));J.render(e.createElement(a.exports.StrictMode,null,e.createElement(Q,null,e.createElement(_,null,e.createElement(te,null,e.createElement(re,null))))),document.getElementById("root"));
