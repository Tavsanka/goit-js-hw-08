var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),(0,o.register)("9OeKo",function(t,n){var o="Expected a function",r=0/0,i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,m=s||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return m.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return r;if(b(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=l.test(e);return o||f.test(e)?u(e.slice(2),o?2:8):a.test(e)?r:+e}t.exports=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),function(e,t,n){var r,i,a,l,f,u,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw TypeError(o);function O(t){var n=r,o=i;return r=i=void 0,s=t,l=e.apply(o,n)}function x(e){var n=e-u,o=e-s;return void 0===u||n>=t||n<0||m&&o>=a}function w(){var e,n,o,r=g();if(x(r))return T(r);f=setTimeout(w,(e=r-u,n=r-s,o=t-e,m?p(o,a-n):o))}function T(e){return(f=void 0,d&&r)?O(e):(r=i=void 0,l)}function h(){var e,n=g(),o=x(n);if(r=arguments,i=this,u=n,o){if(void 0===f)return s=e=u,f=setTimeout(w,t),c?O(e):l;if(m)return f=setTimeout(w,t),O(u)}return void 0===f&&(f=setTimeout(w,t)),l}return t=y(t)||0,b(n)&&(c=!!n.leading,a=(m="maxWait"in n)?v(y(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),h.cancel=function(){void 0!==f&&clearTimeout(f),s=0,r=u=i=f=void 0},h.flush=function(){return void 0===f?l:T(g())},h}(e,t,{leading:r,maxWait:t,trailing:i})}});var r=o("9OeKo");const i=document.querySelector("form.feedback-form"),a=localStorage.getItem("feedback-form-state");if(a){let e=JSON.parse(a);i.elements.email.value=e.email,i.elements.message.value=e.message}const l=(r&&r.__esModule?r.default:r)(()=>{let e={email:i.elements.email.value,message:i.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e)),console.log("Dane zaktualizowane w localStorage o:",new Date().toLocaleTimeString())},500);i.addEventListener("input",e=>{l()}),i.addEventListener("submit",e=>{e.preventDefault(),console.log({email:i.elements.email.value,message:i.elements.message.value}),localStorage.removeItem("feedback-form-state"),i.reset()});
//# sourceMappingURL=03-feedback.2752ce39.js.map