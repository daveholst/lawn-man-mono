import{C as p,a as L,b as v,A as b,c as A,r as i,u as N,d as R,R as r,N as O,e as D,f as I,g as q,h as F,B as M}from"./vendor.33e84f12.js";const k=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}};k();const j={UserPoolId:"ap-southeast-2_gw39jNQMX",ClientId:"58nmodulq3fcf1juh3gmjgfvog",Storage:new p({secure:!1,domain:window.location.hostname==="localhost"?"localhost":"lawnman.club"})},m=new L(j),B=async(t,o)=>await new Promise((s,l)=>{const e={Username:t,Password:o,Pool:m,Storage:new p({secure:!1,domain:window.location.hostname==="localhost"?"localhost":"lawnman.club"})},n=new v(e),a=new b({Username:t,Password:o});n.authenticateUser(a,{onSuccess:c=>{console.log("onSuccess: ",c),s(c)},onFailure:c=>{console.log("onFailure: ",c),l(c)},newPasswordRequired:c=>{console.log("newPasswordRequired: ",c),s(c)}})}),V=async(t,o,s)=>{const l=new A({Name:"name",Value:s});m.signUp(t,o,[l],[],(e,n)=>{e&&console.error(e),console.log(n)})},H=()=>new Promise((t,o)=>{const s=m.getCurrentUser();s||o("No local user found."),s==null||s.getSession((l,e)=>{l||!e?o("User found, but could not get session data."):t(e)})}),K=async()=>{try{const t=m.getCurrentUser();t==null||t.signOut()}catch(t){console.error(t)}},w=i.exports.createContext({});function Q({children:t}){const[o,s]=i.exports.useState(),[l,e]=i.exports.useState(),[n,a]=i.exports.useState(!1),[c,E]=i.exports.useState(!0),d=N(),C=R();i.exports.useEffect(()=>{l&&e(null)},[C.pathname]),i.exports.useEffect(()=>{H().then(u=>{s(u),console.log("inneruser",u)}).catch(u=>e(u)).finally(()=>E(!1))},[]);function P(u,g){a(!0),B(u,g).then(f=>{s(f),d("/")}).catch(f=>e(f)).finally(()=>a(!1))}function S(u,g,f){a(!0),V(u,g,f).then(h=>{s(h),d("/")}).catch(h=>e(h)).finally(()=>a(!1))}function x(){a(!0),K().then(()=>{s(void 0),d("/")}).catch(u=>e(u)).finally(()=>a(!1))}const U=i.exports.useMemo(()=>({user:o,loading:n,error:l,performLogin:P,performSignup:S,performLogout:x}),[o,n,l]);return r.createElement(w.Provider,{value:U},!c&&t)}function y(){return i.exports.useContext(w)}function T(t){const{user:o}=y();return o?r.createElement(r.Fragment,null,t.children):window.location.host.split(".")[0]==="auth"?r.createElement(O,{to:"/login"}):(window.location.href="https://auth.lawnman.club",r.createElement(r.Fragment,null))}const X=()=>{const{user:t,performLogout:o}=y();return r.createElement(D,null,r.createElement(I,{path:"/",element:r.createElement(T,null,r.createElement("h1",null,"Direct Control Site"),r.createElement("p",null,"Hellooo ",t==null?void 0:t.idToken.payload.email," "),r.createElement("button",{onClick:o},"Log Out!!!!!!!!"))}))};q.render(r.createElement(i.exports.StrictMode,null,r.createElement(F,null,r.createElement(M,null,r.createElement(Q,null,r.createElement(X,null))))),document.getElementById("root"));
