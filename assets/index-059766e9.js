(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();let u=!1,l=!1;window.addEventListener("focusout",function(t){const i=t.relatedTarget||t.target;(!i||i===window.document||i===window)&&(u=!0)});document.addEventListener("visibilitychange",function(){document.visibilityState==="visible"&&(u?(s(),u=!1):f())});window.addEventListener("blur",function(t){console.log("blur"),this.document.hidden||a()});function s(){o("VisibilityChange","out of focus")}function f(){o("VisibilityChange","out of focus")}function a(){o("VisibilityChange","out of focus")}document.addEventListener("paste",function(t){t.preventDefault(),o("Paste","paste")});document.addEventListener("copy",function(t){t.preventDefault(),o("Copy","copy")});document.addEventListener("keydown",function(t){t.ctrlKey&&o("Keydown","ctrl clicked"),t.metaKey&&o("Keydown","cmd clicked")});document.querySelector("#fullscreen").onclick=function(){alert("clicked"),document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()};document.querySelector("#file-input").onclick=function(){l=!0};document.querySelector("#file-input").onchange=function(){l=!1};function o(t,i){if(l)return;const r=document.querySelector("#table-body").innerHTML;document.querySelector("#table-body").innerHTML=`${r||""}<tr>
  <td>${t}</td>
  <td>${i}</td>
  </tr>`}
