var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function g(e,t,n){var i,r,o,a,f,u,c=0,l=!1,g=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,o=r;return i=r=void 0,c=t,a=e.apply(o,n)}function h(e){return c=e,f=setTimeout(T,t),l?b(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-c>=o}function T(){var e=m();if(j(e))return w(e);f=setTimeout(T,function(e){var n=t-(e-u);return g?d(n,o-(e-c)):n}(e))}function w(e){return f=void 0,y&&i?b(e):(i=r=void 0,a)}function E(){var e=m(),n=j(e);if(i=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(g)return f=setTimeout(T,t),b(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=p(t)||0,v(n)&&(l=!!n.leading,o=(g="maxWait"in n)?s(p(n.maxWait)||0,t):o,y="trailing"in n?!!n.trailing:y),E.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=u=r=f=void 0},E.flush=function(){return void 0===f?a:w(m())},E}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||o.test(e)?a(e.slice(2),f?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),b=document.querySelector(".feedback-form input"),h=document.querySelector(".feedback-form textarea"),j={email:"",message:""},T=localStorage.getItem("feedback-form-state");if(T)try{const e=JSON.parse(T);j.email=e.email,j.message=e.message}catch(e){console.log(`Error: ${e.name}\n Error detail: ${e.message}`)}function w(e){const t=JSON.stringify(e);localStorage.setItem("feedback-form-state",t)}b.value=j.email,h.value=j.message,y.addEventListener("submit",(function(e){e.preventDefault(),console.log(j),j.email="",j.message="",w(j),e.curentTArget.reset()})),b.addEventListener("input",t((e=>{!function(e){j.email=e.target.value,w(j)}(e)}),500)),h.addEventListener("input",t((e=>{!function(e){j.message=e.target.value,w(j)}(e)}),500));
//# sourceMappingURL=03-feedback.20aef201.js.map
