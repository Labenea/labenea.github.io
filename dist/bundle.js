(()=>{var e={286:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},651:()=>{function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n):t}function o(e){var n="function"==typeof Map?new Map:void 0;return(o=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,r)}function r(){return i(e,arguments,l(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,e)})(e)}function i(e,n,t){return(i=a()?Reflect.construct:function(e,n,t){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(e,r));return t&&c(o,t.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e,n){return(c=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&c(e,n)}(d,e);var o,i,s,u,f=(o=d,i=a(),function(){var e,n=l(o);if(i){var t=l(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return r(this,e)});function d(){return n(this,d),f.apply(this,arguments)}return s=d,(u=[{key:"connectedCallback",value:function(){var e=location.pathname.split("/")[1];this.render(e)}},{key:"render",value:function(e){var n=this;this.innerHTML='\n        <div id="navbar" class="container">\n        <div\n          class="flex-container align-center justify-space-between responsive-nav"\n        >\n          <div class="brand">\n            <h1 class="navbar-brand"><a href="#">Labenea</a></h1>\n            <a href="" id="press" class="icon">\n              <i class="fa fa-bars"></i>\n            </a>\n          </div>\n          <div id="menu" class="menu">\n            <ul>\n            <li class="'.concat(""==e?"active":"",'"><a href="/">Home</a></li>\n            <li class="').concat("covid-monitor.html"==e?"active":"",'"><a href="/covid-monitor.html">Covid Monitor</a></li>\n            <li class="').concat("about.html"==e?"active":"",'"><a href="/about.html">About</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n        '),this.querySelector("#press").addEventListener("click",(function(e){e.preventDefault();var t=n.querySelector("#menu");"menu"===t.className?t.className+=" opened":t.className="menu"}))}}])&&t(s.prototype,u),d}(o(HTMLElement));customElements.define("nav-bar",s)},580:()=>{var e,n;setInterval(appear=function(){document.querySelector(".intro").classList.add("appear")},500),window.addEventListener("scroll",(e=document.querySelector(".intro"),n=e.getBoundingClientRect().top,void window.addEventListener("scroll",(function(){var t=window.pageYOffset;t<=n&&(opacity=1-t/n,console.log(opacity)),e.style.opacity=opacity}))))},52:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(286),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,'body{font-family:"Open Sans",sans-serif}html{scroll-behavior:smooth}html header{display:inline}html,body,ul,ol,li,form,fieldset,legend{margin:0;padding:0}h1,h2,h3,h4,h5,h6,p{margin-top:0}fieldset,img{border:0}li{list-style:none}.wrapper{width:100%;max-width:1200px;margin:0 auto;padding:0 20px;box-sizing:border-box}nav{background-color:#90e0ef;position:sticky;top:0;z-index:3}nav .flex-container{display:flex;align-items:stretch}@media screen and (max-width: 560px){nav .flex-container{display:block}}.navbar-brand{margin:0;padding:10px}.navbar-brand a{text-decoration:none;color:#fff}@media screen and (max-width: 560px){.navbar-brand h1{display:inline}}@media screen and (max-width: 560px){.responsive-nav{flex-direction:column;justify-content:start}}.responsive-nav .brand{display:flex;justify-content:space-between}.responsive-nav .opened{max-height:200px}.menu{display:flex;justify-content:center}.menu ul{display:flex}@media screen and (max-width: 560px){.menu ul{flex-direction:column}}.menu ul li{display:flex;padding:0px 10px;flex-direction:column;justify-content:center;align-items:center}@media screen and (max-width: 560px){.menu ul li{flex-direction:column;padding:10px 0px}}.menu ul :hover{background-color:#21c1df}.menu a{color:#fff;text-decoration:none}@media screen and (max-width: 560px){.menu{display:block;max-height:0;overflow:hidden;transition:.5s}}.icon{display:none;text-decoration:none;color:#fff;margin-right:10px;font-size:25px}@media screen and (max-width: 560px){.icon{display:block;float:right;align-self:center}}.active{background-color:#1daec9}.container{width:80%;margin:auto auto}@media screen and (max-width: 560px){.container{width:95%}}.row{flex-direction:row;display:flex}.justify-space-between{justify-content:space-between}.align-center{align-items:center}#jumbotron{background-color:#90e0ef;height:55vh;color:#fff;line-height:1;display:flex;align-items:center}#jumbotron h1{margin:0;font-size:4rem;padding-left:1rem}#jumbotron h2{margin:0;font-size:2.5rem;padding-left:1rem}#jumbotron .intro{transform:translateY(-20px);opacity:0}#jumbotron .appear{opacity:1;transform:translateY(0);transition:.5s all ease-in-out}',""]);const i=o},379:(e,n,t)=>{"use strict";var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],l=n.base?c[0]+n.base:c[0],s=t[l]||0,u="".concat(l," ").concat(s);t[l]=s+1;var f=a(u),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:u,updater:h(d,n),references:1}),r.push(u)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var s,u=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function f(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function d(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function h(e,n){var t,r,o;if(n.singleton){var i=m++;t=p||(p=l(n)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=l(n),r=d.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var l=c(e,n),s=0;s<t.length;s++){var u=a(t[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=l}}}}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{"use strict";t(651);var e=t(379),n=t.n(e),r=t(52);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,t(580)})()})();