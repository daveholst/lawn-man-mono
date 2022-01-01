import{C as x,a as U,b as v,A as q,c as O,r as c,u as R,d as A,R as t,N as y,e as M,f as N,m as I,g as j,h as k,B as D}from"./vendor.ac6a385e.js";const F=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}};F();const T={UserPoolId:"ap-southeast-2_gw39jNQMX",ClientId:"58nmodulq3fcf1juh3gmjgfvog",Storage:new x({secure:!1,domain:window.location.hostname==="localhost"?"localhost":"lawnman.club"})},g=new U(T),B=async(o,s)=>await new Promise((r,l)=>{const e={Username:o,Password:s,Pool:g,Storage:new x({secure:!1,domain:window.location.hostname==="localhost"?"localhost":"lawnman.club"})},n=new v(e),a=new q({Username:o,Password:s});n.authenticateUser(a,{onSuccess:i=>{console.log("onSuccess: ",i),r(i)},onFailure:i=>{console.log("onFailure: ",i),l(i)},newPasswordRequired:i=>{console.log("newPasswordRequired: ",i),r(i)}})}),Q=async(o,s,r)=>{const l=new O({Name:"name",Value:r});g.signUp(o,s,[l],[],(e,n)=>{e&&console.error(e),console.log(n)})},V=()=>new Promise((o,s)=>{const r=g.getCurrentUser();r||s("No local user found."),r==null||r.getSession((l,e)=>{l||!e?s("User found, but could not get session data."):o(e)})}),W=async()=>{try{const o=g.getCurrentUser();o==null||o.signOut()}catch(o){console.error(o)}},b=c.exports.createContext({});function _({children:o}){const[s,r]=c.exports.useState(),[l,e]=c.exports.useState(),[n,a]=c.exports.useState(!1),[i,h]=c.exports.useState(!0),m=R(),p=A();c.exports.useEffect(()=>{l&&e(null)},[p.pathname]),c.exports.useEffect(()=>{V().then(u=>{r(u),console.log("inneruser",u)}).catch(u=>e(u)).finally(()=>h(!1))},[]);function w(u,S){a(!0),B(u,S).then(d=>{r(d),m("/")}).catch(d=>e(d)).finally(()=>a(!1))}function f(u,S,d){a(!0),Q(u,S,d).then(C=>{r(C),m("/")}).catch(C=>e(C)).finally(()=>a(!1))}function E(){a(!0),W().then(()=>{r(void 0),m("/")}).catch(u=>e(u)).finally(()=>a(!1))}const L=c.exports.useMemo(()=>({user:s,loading:n,error:l,performLogin:w,performSignup:f,performLogout:E}),[s,n,l]);return t.createElement(b.Provider,{value:L},!i&&o)}function P(){return c.exports.useContext(b)}function G(o){const{user:s}=P();return console.log(window.location.hostname),s?t.createElement(t.Fragment,null,o.children):window.location.host.split(".")[0]==="auth"?t.createElement(y,{to:"/login"}):window.location.hostname==="localhost"&&window.location.port!=="3100"?(window.location.href="http://localhost:3100",t.createElement(t.Fragment,null)):window.location.hostname==="localhost"&&window.location.port==="3100"?t.createElement(y,{to:"/login"}):(window.location.href="https://auth.lawnman.club",t.createElement(t.Fragment,null))}const H=()=>{const{user:o,performLogout:s}=P(),[r,l]=c.exports.useState(!1),[e,n]=c.exports.useState(null),a="mqttjs_"+Math.random().toString(16).substr(2,8),i="wss://mqtt.holstsolutions.com:443/ws/mqtt",h={username:"juicebox",password:"dY*t7LSgGhc%M4",keepalive:60,clientId:a,protocolId:"MQTT",protocolVersion:4,clean:!0,reconnectPeriod:1e3,connectTimeout:30*1e3,useSSL:!0},m=(f,E)=>{n(I.connect(f,E)),e==null||e.on("connect",()=>{console.log("Connected"),l(!0)})},p=()=>{e&&e.publish("juicebox1/water/on","on",f=>console.log(f))},w=()=>{e==null||e.publish("juicebox1/water/off","off")};return c.exports.useEffect(()=>{m(i,h)},[]),c.exports.useEffect(()=>{e&&(e.on("connect",()=>{console.log("Connected"),l(!0)}),e.on("error",f=>{console.log("Connection error: ",f),e==null||e.end()}),e.on("reconnect",()=>{console.log("Reconnecting...")}))},[e]),t.createElement(M,null,t.createElement(N,{path:"/",element:e&&t.createElement(G,null,t.createElement("h1",null,"Direct Control Site MQTT:"," ",`Status: ${r}`),t.createElement("p",null,"Hellooo ",o==null?void 0:o.idToken.payload.email," "),t.createElement("br",null),t.createElement("button",{onClick:p},"Water On"),t.createElement("br",null),t.createElement("button",{onClick:w},"Water Off"))}))};j.render(t.createElement(c.exports.StrictMode,null,t.createElement(k,null,t.createElement(D,null,t.createElement(_,null,t.createElement(H,null))))),document.getElementById("root"));
