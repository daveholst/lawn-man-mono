var N=Object.defineProperty,q=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var k=(r,n,o)=>n in r?N(r,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[n]=o,h=(r,n)=>{for(var o in n||(n={}))M.call(n,o)&&k(r,o,n[o]);if(O)for(var o of O(n))A.call(n,o)&&k(r,o,n[o]);return r},g=(r,n)=>q(r,D(n));import{C as L,a as B,b as V,A as z,c as T,r as i,u as Q,d as G,R as e,N as R,F as H,H as b,B as P,e as U,f as v,S as x,g as p,I as J,h as K,i as X,j as Y,m as $,k as Z,l as ee,n as te,o as ne,p as oe}from"./vendor.75dbd578.js";const re=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}};re();const le={UserPoolId:"ap-southeast-2_gw39jNQMX",ClientId:"58nmodulq3fcf1juh3gmjgfvog",Storage:new L({secure:!1,domain:window.location.hostname==="localhost"?"localhost":"lawnman.club"})},S=new B(le),ae=async(r,n)=>await new Promise((o,u)=>{const t={Username:r,Password:n,Pool:S,Storage:new L({secure:!1,domain:window.location.hostname==="localhost"?"localhost":"lawnman.club"})},a=new V(t),l=new z({Username:r,Password:n});a.authenticateUser(l,{onSuccess:d=>{console.log("onSuccess: ",d),o(d)},onFailure:d=>{console.log("onFailure: ",d),u(d)},newPasswordRequired:d=>{console.log("newPasswordRequired: ",d),o(d)}})}),se=async(r,n,o)=>{const u=new T({Name:"name",Value:o});S.signUp(r,n,[u],[],(t,a)=>{t&&console.error(t),console.log(a)})},ce=()=>new Promise((r,n)=>{const o=S.getCurrentUser();o||n("No local user found."),o==null||o.getSession((u,t)=>{u||!t?n("User found, but could not get session data."):r(t)})}),ie=async()=>{try{const r=S.getCurrentUser();r==null||r.signOut()}catch(r){console.error(r)}},I=i.exports.createContext({});function ue({children:r}){const[n,o]=i.exports.useState(),[u,t]=i.exports.useState(),[a,l]=i.exports.useState(!1),[d,C]=i.exports.useState(!0),E=Q(),j=G();i.exports.useEffect(()=>{u&&t(null)},[j.pathname]),i.exports.useEffect(()=>{ce().then(s=>{o(s),console.log("inneruser",s)}).catch(s=>t(s)).finally(()=>C(!1))},[]);function y(s,m){l(!0),ae(s,m).then(w=>{o(w),E("/")}).catch(w=>t(w)).finally(()=>l(!1))}function F(s,m,w){l(!0),se(s,m,w).then(_=>{o(_),E("/")}).catch(_=>t(_)).finally(()=>l(!1))}function f(){l(!0),ie().then(()=>{o(void 0),E("/")}).catch(s=>t(s)).finally(()=>l(!1))}const c=i.exports.useMemo(()=>({user:n,loading:a,error:u,performLogin:y,performSignup:F,performLogout:f}),[n,a,u]);return e.createElement(I.Provider,{value:c},!d&&r)}function W(){return i.exports.useContext(I)}function me(r){const{user:n}=W();return console.log(window.location.hostname),n?e.createElement(e.Fragment,null,r.children):window.location.host.split(".")[0]==="auth"?e.createElement(R,{to:"/login"}):window.location.hostname==="localhost"&&window.location.port!=="3100"?(window.location.href="http://localhost:3100",e.createElement(e.Fragment,null)):window.location.hostname==="localhost"&&window.location.port==="3100"?e.createElement(R,{to:"/login"}):(window.location.href="https://auth.lawnman.club",e.createElement(e.Fragment,null))}const de=()=>{W();const[r,n]=i.exports.useState(!1),[o,u]=i.exports.useState("500"),[t,a]=i.exports.useState({jbstatus:"offline",sensor:{fert_1_runtime:void 0},switch:{bypass_valve:"OFF",water_fill_valve:"OFF",fert_1_dose_valve:"OFF"}}),[l,d]=i.exports.useState(null),C="mqttjs_"+Math.random().toString(16).substr(2,8),E="wss://mqtt.holstsolutions.com:443/ws/mqtt",j={username:"juicebox",password:"dY*t7LSgGhc%M4",keepalive:60,clientId:C,protocolId:"MQTT",protocolVersion:4,clean:!0,reconnectPeriod:1e3,connectTimeout:30*1e3,useSSL:!0},y=c=>{Y.get("https://sprinklers.holst.solutions/cr",{params:{pw:"a6d82bced638de3def1e9bbb4983225c",t:`0,0,0,0,0,0,0,0,${c}`}})},F=(c,s)=>{d($.connect(c,s)),l==null||l.on("connect",()=>{console.log("Connected"),n(!0)})},f=({topic:c,payload:s})=>{l&&l.publish(c,s)};return i.exports.useEffect(()=>{F(E,j)},[]),i.exports.useEffect(()=>{l&&(l.on("connect",()=>{console.log("Connected"),n(!0)}),l.on("error",c=>{console.log("Connection error: ",c),l==null||l.end()}),l.on("reconnect",()=>{console.log("Reconnecting...")}),l.subscribe("juicebox1/#"),l.on("message",(c,s)=>{if(c==="juicebox1/status"){a(m=>g(h({},m),{jbstatus:s.toString()}));return}if(c==="juicebox1/switch/bypass_valve/state"){a(m=>g(h({},m),{switch:g(h({},m.switch),{bypass_valve:s.toString()})}));return}if(c==="juicebox1/switch/water_fill_valve/state"){a(m=>g(h({},m),{switch:g(h({},m.switch),{water_fill_valve:s.toString()})}));return}if(c==="juicebox1/switch/fert_1_dose_valve/state"){a(m=>g(h({},m),{switch:g(h({},m.switch),{fert_1_dose_valve:s.toString()})}));return}}))},[l]),e.createElement(H,{justify:"center",direction:"column"},e.createElement(b,{as:"h2",size:"2xl",margin:"10px"},"Direct Control")," ",e.createElement(b,{as:"h5",size:"md",marginLeft:"10px"},"MQTT ",r?"Connected":"Not Connected"," || juicebox1"),e.createElement(P,{minW:"xs",maxW:"md",padding:"10px",margin:"5px",borderWidth:"1px",borderRadius:"lg",overflow:"hidden"},e.createElement(b,{as:"h5",size:"sm"},"Status"),e.createElement("hr",null),e.createElement("br",null),e.createElement("p",null,"juicebox :: ",e.createElement("b",null,t.jbstatus)," "),e.createElement("p",null,"bypass valve :: ",e.createElement("b",null,t.switch.bypass_valve)," "),e.createElement("p",null,"water does valve ::"," ",e.createElement("b",null,t.switch.water_fill_valve)),e.createElement("hr",null),e.createElement("p",null,"fert 1 pump ::"," ",e.createElement("b",null,t.switch.fert_1_dose_valve)),e.createElement("p",null,"fert 2 pump ::"),e.createElement("p",null,"fert 3 pump ::")),e.createElement(P,{minW:"xs",maxW:"md",padding:"10px",margin:"5px",borderWidth:"1px",borderRadius:"lg",overflow:"hidden"},e.createElement(U,null,e.createElement(b,{as:"h5",size:"sm"},"Manual Valve Control"),e.createElement("hr",null),e.createElement("br",null),e.createElement(v,{as:"legend"},"Bore Pump"),e.createElement(x,{justify:"space-around",direction:"row",spacing:4,align:"center"},e.createElement(p,{isFullWidth:!0,colorScheme:"teal",variant:"solid",onClick:()=>y(300)},"On"),e.createElement(p,{isFullWidth:!0,colorScheme:"red",variant:"solid",onClick:()=>y(0)},"Off")),e.createElement("br",null),e.createElement(v,{as:"legend"},"Juicebox Bypass Valve"),e.createElement(x,{justify:"space-around",direction:"row",spacing:4,align:"center"},e.createElement(p,{isFullWidth:!0,colorScheme:"teal",variant:"solid",onClick:()=>f({topic:"juicebox1/bypass/on",payload:"on"})},"Open"),e.createElement(p,{isFullWidth:!0,colorScheme:"red",variant:"solid",onClick:()=>f({topic:"juicebox1/bypass/off",payload:"off"})},"Close")),e.createElement("br",null),e.createElement(v,{as:"legend"},"Water Dose Valve"),e.createElement(x,{justify:"space-around",direction:"row",spacing:4,align:"center"},e.createElement(p,{isFullWidth:!0,colorScheme:"teal",variant:"solid",onClick:()=>f({topic:"juicebox1/water/on",payload:"on"})},"Open"),e.createElement(p,{isFullWidth:!0,colorScheme:"red",variant:"solid",onClick:()=>f({topic:"juicebox1/water/off",payload:"off"})},"Close")),e.createElement("br",null),e.createElement(v,{as:"legend"},"Fertiliser Bay 1 Pump"),e.createElement(x,{justify:"space-around",direction:"row",spacing:4,align:"center"},e.createElement(p,{isFullWidth:!0,colorScheme:"teal",variant:"solid",onClick:()=>f({topic:"juicebox1/fert1/on",payload:"on"})},"On"),e.createElement(p,{isFullWidth:!0,colorScheme:"red",variant:"solid",onClick:()=>f({topic:"juicebox1/fert1/off",payload:"off"})},"Off")))),e.createElement(P,{minW:"xs",maxW:"md",padding:"10px",margin:"5px",borderWidth:"1px",borderRadius:"lg",overflow:"hidden"},e.createElement(U,null,e.createElement(b,{as:"h5",size:"sm"},"Fertilser Control"),e.createElement("hr",null),e.createElement("br",null),e.createElement(v,{as:"legend"},"Dose Fertiliser 1"),e.createElement(x,{justify:"space-around",direction:"row",spacing:4,align:"center"},e.createElement(J,null,e.createElement(K,{type:"number",placeholder:"quantity",onChange:c=>u(c.target.value),defaultValue:o}),e.createElement(X,{children:"mL"})),e.createElement(p,{colorScheme:"blue",variant:"solid",onClick:()=>f({topic:"juicebox1/fert1/runtime",payload:JSON.stringify(Math.round(Number(o)/2.9))})},"Dose")))))},fe=()=>(W(),e.createElement(Z,null,e.createElement(ee,{path:"/",element:e.createElement(me,null,e.createElement(de,null))})));te.render(e.createElement(i.exports.StrictMode,null,e.createElement(ne,null,e.createElement(oe,null,e.createElement(ue,null,e.createElement(fe,null))))),document.getElementById("root"));