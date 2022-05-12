/*! For license information please see vacuumReport.js.LICENSE.txt */
(()=>{"use strict";var t={408:(t,e,o)=>{o.d(e,{Z:()=>l});var r=o(81),i=o.n(r),n=o(645),a=o.n(n)()(i());a.push([t.id,':root{--global-font-size:15px;--global-line-height:1.4em;--global-space:10px;--font-stack:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;--mono-font-stack:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;--background-color:#fff;--page-width:60em;--font-color:#151515;--invert-font-color:#fff;--primary-color:#1a95e0;--secondary-color:#727578;--error-color:#d20962;--progress-bar-background:#727578;--progress-bar-fill:#151515;--code-bg-color:#e8eff2;--input-style:solid;--display-h1-decoration:none}*{box-sizing:border-box;text-rendering:geometricPrecision}::-moz-selection{background:var(--primary-color);color:var(--invert-font-color)}::selection{background:var(--primary-color);color:var(--invert-font-color)}body{font-size:var(--global-font-size);color:var(--font-color);line-height:var(--global-line-height);margin:0;font-family:var(--font-stack);word-wrap:break-word;background-color:var(--background-color)}.logo,h1,h2,h3,h4,h5,h6{line-height:var(--global-line-height)}a{cursor:pointer;color:var(--primary-color);text-decoration:none}a:hover{background-color:var(--primary-color);color:var(--invert-font-color)}em{font-size:var(--global-font-size);font-style:italic;font-family:var(--font-stack);color:var(--font-color)}blockquote,code,em,strong{line-height:var(--global-line-height)}.logo,blockquote,code,footer,h1,h2,h3,h4,h5,h6,header,li,ol,p,section,ul{float:none;margin:0;padding:0}.logo,blockquote,h1,ol,p,ul{margin-top:calc(var(--global-space) * 2);margin-bottom:calc(var(--global-space) * 2)}.logo,h1{position:relative;display:inline-block;display:table-cell;padding:calc(var(--global-space) * 2) 0 calc(var(--global-space) * 2);margin:0;overflow:hidden;font-weight:600}h1::after{content:"====================================================================================================";position:absolute;bottom:5px;left:0;display:var(--display-h1-decoration)}.logo+*,h1+*{margin-top:0}h2,h3,h4,h5,h6{position:relative;margin-bottom:var(--global-line-height);font-weight:600}blockquote{position:relative;padding-left:calc(var(--global-space) * 2);padding-left:2ch;overflow:hidden}blockquote::after{content:">\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>";white-space:pre;position:absolute;top:0;left:0;line-height:var(--global-line-height);color:#9ca2ab}code{font-weight:inherit;background-color:var(--code-bg-color);font-family:var(--mono-font-stack)}code::after,code::before{content:"`";display:inline}pre code::after,pre code::before{content:""}pre{display:block;word-break:break-all;word-wrap:break-word;color:var(--secondary-color);background-color:var(--background-color);border:1px solid var(--secondary-color);padding:var(--global-space);white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap}pre code{overflow-x:scroll;padding:0;margin:0;display:inline-block;min-width:100%;font-family:var(--mono-font-stack)}.terminal .logo,.terminal blockquote,.terminal code,.terminal h1,.terminal h2,.terminal h3,.terminal h4,.terminal h5,.terminal h6,.terminal strong{font-size:var(--global-font-size);font-style:normal;font-family:var(--font-stack);color:var(--font-color)}.terminal-prompt{position:relative;white-space:nowrap}.terminal-prompt::before{content:"> "}.terminal-prompt::after{content:"";-webkit-animation:cursor .8s infinite;animation:cursor .8s infinite;background:var(--primary-color);border-radius:0;display:inline-block;height:1em;margin-left:.2em;width:3px;bottom:-2px;position:relative}@-webkit-keyframes cursor{0%{opacity:0}50%{opacity:1}to{opacity:0}}@keyframes cursor{0%{opacity:0}50%{opacity:1}to{opacity:0}}li,li>ul>li{position:relative;display:block;padding-left:calc(var(--global-space) * 2)}nav>ul>li{padding-left:0}li::after{position:absolute;top:0;left:0}ul>li::after{content:"-"}nav ul>li::after{content:""}ol li::before{content:counters(item, ".") ". ";counter-increment:item}ol ol li::before{content:counters(item, ".") " ";counter-increment:item}.terminal-menu li::after,.terminal-menu li::before{display:none}ol{counter-reset:item}ol li:nth-child(n+10)::after{left:-7px}ol ol{margin-top:0;margin-bottom:0}.terminal-menu{width:100%}.terminal-nav{display:flex;flex-direction:column;align-items:flex-start}ul ul{margin-top:0;margin-bottom:0}.terminal-menu ul{list-style-type:none;padding:0!important;display:flex;flex-direction:column;width:100%;flex-grow:1;font-size:var(--global-font-size);margin-top:0}.terminal-menu li{display:flex;margin:0 0 .5em 0;padding:0}ol.terminal-toc li{border-bottom:1px dotted var(--secondary-color);padding:0;margin-bottom:15px}.terminal-menu li:last-child{margin-bottom:0}ol.terminal-toc li a{margin:4px 4px 4px 0;background:var(--background-color);position:relative;top:6px;text-align:left;padding-right:4px}.terminal-menu li a:not(.btn){text-decoration:none;display:block;width:100%;border:none;color:var(--secondary-color)}.terminal-menu li a.active{color:var(--font-color)}.terminal-menu li a:hover{background:0 0;color:inherit}ol.terminal-toc li::before{content:counters(item, ".") ". ";counter-increment:item;position:absolute;right:0;background:var(--background-color);padding:4px 0 4px 4px;bottom:-8px}ol.terminal-toc li a:hover{background:var(--primary-color);color:var(--invert-font-color)}hr{position:relative;overflow:hidden;margin:calc(var(--global-space) * 4) 0;border:0;border-bottom:1px dashed var(--secondary-color)}p{margin:0 0 var(--global-line-height);color:var(--global-font-color)}.container{max-width:var(--page-width)}.container,.container-fluid{margin:0 auto;padding:0 calc(var(--global-space) * 2)}img{width:100%}.progress-bar{height:8px;background-color:var(--progress-bar-background);margin:12px 0}.progress-bar.progress-bar-show-percent{margin-top:38px}.progress-bar-filled{background-color:var(--progress-bar-fill);height:100%;transition:width .3s ease;position:relative;width:0}.progress-bar-filled::before{content:"";border:6px solid transparent;border-top-color:var(--progress-bar-fill);position:absolute;top:-12px;right:-6px}.progress-bar-filled::after{color:var(--progress-bar-fill);content:attr(data-filled);display:block;font-size:12px;white-space:nowrap;position:absolute;border:6px solid transparent;top:-38px;right:0;transform:translateX(50%)}.progress-bar-no-arrow>.progress-bar-filled::after,.progress-bar-no-arrow>.progress-bar-filled::before{content:"";display:none;visibility:hidden;opacity:0}table{width:100%;border-collapse:collapse;margin:var(--global-line-height) 0;color:var(--font-color);font-size:var(--global-font-size)}table td,table th{vertical-align:top;border:1px solid var(--font-color);line-height:var(--global-line-height);padding:calc(var(--global-space)/ 2);font-size:1em}table thead th{font-size:1em}table tfoot tr th{font-weight:500}table caption{font-size:1em;margin:0 0 1em 0}table tbody td:first-child{font-weight:700;color:var(--secondary-color)}.form{width:100%}fieldset{border:1px solid var(--font-color);padding:1em}label{font-size:1em;color:var(--font-color)}input[type=email],input[type=number],input[type=password],input[type=search],input[type=text]{border:1px var(--input-style) var(--font-color);width:100%;padding:.7em .5em;font-size:1em;font-family:var(--font-stack);-webkit-appearance:none;border-radius:0}input[type=email]:active,input[type=email]:focus,input[type=number]:active,input[type=number]:focus,input[type=password]:active,input[type=password]:focus,input[type=search]:active,input[type=search]:focus,input[type=text]:active,input[type=text]:focus{outline:0;-webkit-appearance:none;border:1px solid var(--font-color)}input[type=email]:not(:placeholder-shown):invalid,input[type=number]:not(:placeholder-shown):invalid,input[type=password]:not(:placeholder-shown):invalid,input[type=search]:not(:placeholder-shown):invalid,input[type=text]:not(:placeholder-shown):invalid{border-color:var(--error-color)}input,textarea{color:var(--font-color);background-color:var(--background-color)}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:var(--secondary-color)!important;opacity:1}input::-moz-placeholder,textarea::-moz-placeholder{color:var(--secondary-color)!important;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:var(--secondary-color)!important;opacity:1}input::-ms-input-placeholder,textarea::-ms-input-placeholder{color:var(--secondary-color)!important;opacity:1}input::placeholder,textarea::placeholder{color:var(--secondary-color)!important;opacity:1}textarea{height:auto;width:100%;resize:none;border:1px var(--input-style) var(--font-color);padding:.5em;font-size:1em;font-family:var(--font-stack);-webkit-appearance:none;border-radius:0}textarea:focus{outline:0;-webkit-appearance:none;border:1px solid var(--font-color)}textarea:not(:placeholder-shown):invalid{border-color:var(--error-color)}input:-webkit-autofill,input:-webkit-autofill:focus textarea:-webkit-autofill,input:-webkit-autofill:hover,select:-webkit-autofill,select:-webkit-autofill:focus,select:-webkit-autofill:hover,textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus{border:1px solid var(--font-color);-webkit-text-fill-color:var(--font-color);box-shadow:0 0 0 1000px var(--invert-font-color) inset;-webkit-box-shadow:0 0 0 1000px var(--invert-font-color) inset;transition:background-color 5000s ease-in-out 0s}.form-group{margin-bottom:var(--global-line-height);overflow:auto}.btn{border-style:solid;border-width:1px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;outline:0;padding:.65em 2em;font-size:1em;font-family:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;z-index:1}.btn:active{box-shadow:none}.btn.btn-ghost{border-color:var(--font-color);color:var(--font-color);background-color:transparent}.btn.btn-ghost:focus,.btn.btn-ghost:hover{border-color:var(--tertiary-color);color:var(--tertiary-color);z-index:2}.btn.btn-ghost:hover{background-color:transparent}.btn-block{width:100%;display:flex}.btn-default{background-color:var(--font-color);border-color:var(--invert-font-color);color:var(--invert-font-color)}.btn-default:focus:not(.btn-ghost),.btn-default:hover{background-color:var(--secondary-color);color:var(--invert-font-color)}.btn-default.btn-ghost:focus,.btn-default.btn-ghost:hover{border-color:var(--secondary-color);color:var(--secondary-color);z-index:2}.btn-error{color:var(--invert-font-color);background-color:var(--error-color);border:1px solid var(--error-color)}.btn-error:focus:not(.btn-ghost),.btn-error:hover{background-color:var(--error-color);border-color:var(--error-color)}.btn-error.btn-ghost{border-color:var(--error-color);color:var(--error-color)}.btn-error.btn-ghost:focus,.btn-error.btn-ghost:hover{border-color:var(--error-color);color:var(--error-color);z-index:2}.btn-primary{color:var(--invert-font-color);background-color:var(--primary-color);border:1px solid var(--primary-color)}.btn-primary:focus:not(.btn-ghost),.btn-primary:hover{background-color:var(--primary-color);border-color:var(--primary-color)}.btn-primary.btn-ghost{border-color:var(--primary-color);color:var(--primary-color)}.btn-primary.btn-ghost:focus,.btn-primary.btn-ghost:hover{border-color:var(--primary-color);color:var(--primary-color);z-index:2}.btn-small{padding:.5em 1.3em!important;font-size:.9em!important}.btn-group{overflow:auto}.btn-group .btn{float:left}.btn-group .btn-ghost:not(:first-child){margin-left:-1px}.terminal-card{border:1px solid var(--secondary-color)}.terminal-card>header{color:var(--invert-font-color);text-align:center;background-color:var(--secondary-color);padding:.5em 0}.terminal-card>div:first-of-type{padding:var(--global-space)}.terminal-timeline{position:relative;padding-left:70px}.terminal-timeline::before{content:\' \';background:var(--secondary-color);display:inline-block;position:absolute;left:35px;width:2px;height:100%;z-index:400}.terminal-timeline .terminal-card{margin-bottom:25px}.terminal-timeline .terminal-card::before{content:\' \';background:var(--invert-font-color);border:2px solid var(--secondary-color);display:inline-block;position:absolute;margin-top:25px;left:26px;width:15px;height:15px;z-index:400}.terminal-alert{color:var(--font-color);padding:1em;border:1px solid var(--font-color);margin-bottom:var(--global-space)}.terminal-alert-error{color:var(--error-color);border-color:var(--error-color)}.terminal-alert-primary{color:var(--primary-color);border-color:var(--primary-color)}@media screen and (max-width:960px){label{display:block;width:100%}pre::-webkit-scrollbar{height:3px}}@media screen and (max-width:480px){form{width:100%}}@media only screen and (min-width:30em){.terminal-nav{flex-direction:row;align-items:center}.terminal-menu ul{flex-direction:row;justify-items:flex-end;align-items:center;justify-content:flex-end;margin-top:calc(var(--global-space) * 2)}.terminal-menu li{margin:0;margin-right:2em}.terminal-menu li:last-child{margin-right:0}}.terminal-media:not(:last-child){margin-bottom:1.25rem}.terminal-media-left{padding-right:var(--global-space)}.terminal-media-left,.terminal-media-right{display:table-cell;vertical-align:top}.terminal-media-right{padding-left:var(--global-space)}.terminal-media-body{display:table-cell;vertical-align:top}.terminal-media-heading{font-size:1em;font-weight:700}.terminal-media-content{margin-top:.3rem}.terminal-placeholder{background-color:var(--secondary-color);text-align:center;color:var(--font-color);font-size:1rem;border:1px solid var(--secondary-color)}figure>img{padding:0}.terminal-avatarholder{width:calc(var(--global-space) * 5);height:calc(var(--global-space) * 5)}.terminal-avatarholder img{padding:0}figure{margin:0}figure>figcaption{color:var(--secondary-color);text-align:center}.hljs{display:block;overflow-x:auto;padding:.5em;background:var(--block-background-color);color:var(--font-color)}.hljs-comment,.hljs-quote{color:var(--secondary-color)}.hljs-variable{color:var(--font-color)}.hljs-built_in,.hljs-keyword,.hljs-name,.hljs-selector-tag,.hljs-tag{color:var(--primary-color)}.hljs-addition,.hljs-attribute,.hljs-literal,.hljs-section,.hljs-string,.hljs-template-tag,.hljs-template-variable,.hljs-title,.hljs-type{color:var(--secondary-color)}.hljs-string{color:var(--secondary-color)}.hljs-deletion,.hljs-meta,.hljs-selector-attr,.hljs-selector-pseudo{color:var(--primary-color)}.hljs-doctag{color:var(--secondary-color)}.hljs-attr{color:var(--primary-color)}.hljs-bullet,.hljs-link,.hljs-symbol{color:var(--primary-color)}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}',""]);const l=a},384:(t,e,o)=>{o.d(e,{Z:()=>l});var r=o(81),i=o.n(r),n=o(645),a=o.n(n)()(i());a.push([t.id,"html {\r\n    scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n    word-spacing: -0.1rem;\r\n}\r\n\r\nhr.header {\r\n    margin: 10px 0 0;\r\n}\r\n\r\n.terminal .logo {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.logo {\r\n    padding: 10px 0 0 0;\r\n}",""]);const l=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",r=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),r&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),r&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,r,i,n){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);r&&a[d[0]]||(void 0!==n&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=n),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function o(t){for(var o=-1,r=0;r<e.length;r++)if(e[r].identifier===t){o=r;break}return o}function r(t,r){for(var n={},a=[],l=0;l<t.length;l++){var s=t[l],c=r.base?s[0]+r.base:s[0],d=n[c]||0,p="".concat(c," ").concat(d);n[c]=d+1;var h=o(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)e[h].references++,e[h].updater(u);else{var m=i(u,r);r.byIndex=l,e.splice(l,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function i(t,e){var o=e.domAPI(e);return o.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;o.update(t=e)}else o.remove()}}t.exports=function(t,i){var n=r(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<n.length;a++){var l=o(n[a]);e[l].references--}for(var s=r(t,i),c=0;c<n.length;c++){var d=o(n[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}n=s}}},569:t=>{var e={};t.exports=function(t,o){var r=function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(o)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,o)=>{t.exports=function(t){var e=o.nc;e&&t.setAttribute("nonce",e)}},380:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(o){!function(t,e,o){var r="";o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {"));var i=void 0!==o.layer;i&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,i&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}");var n=o.sourceMap;n&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,o)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function o(r){var i=e[r];if(void 0!==i)return i.exports;var n=e[r]={id:r,exports:{}};return t[r](n,n.exports,o),n.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=o(379),e=o.n(t),r=o(380),i=o.n(r),n=o(569),a=o.n(n),l=o(565),s=o.n(l),c=o(216),d=o.n(c),p=o(589),h=o.n(p),u=o(408),m={};m.styleTagTransform=h(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),e()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;var v=o(384),b={};b.styleTagTransform=h(),b.setAttributes=s(),b.insert=a().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=d(),e()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals;const f=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,g=Symbol(),y=new Map;class A{constructor(t,e){if(this._$cssResult$=!0,e!==g)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=y.get(this.cssText);return f&&void 0===t&&(y.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const w=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1]),t[0]);return new A(o,g)},x=f?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new A("string"==typeof t?t:t+"",g))(e)})(t):t;var k;const $=window.trustedTypes,_=$?$.emptyScript:"",E=window.reactiveElementPolyfillSupport,S={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},C=(t,e)=>e!==t&&(e==e||t==t),j={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:C};class z extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const r=this._$Eh(o,e);void 0!==r&&(this._$Eu.set(r,o),t.push(r))})),t}static createProperty(t,e=j){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(r){const i=this[t];this[e]=r,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||j}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(x(t))}else void 0!==t&&e.push(x(t));return e}static _$Eh(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{f?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const o=document.createElement("style"),r=window.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=e.cssText,t.appendChild(o)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ES(t,e,o=j){var r,i;const n=this.constructor._$Eh(t,o);if(void 0!==n&&!0===o.reflect){const a=(null!==(i=null===(r=o.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==i?i:S.toAttribute)(e,o.type);this._$Ei=t,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$Ei=null}}_$AK(t,e){var o,r,i;const n=this.constructor,a=n._$Eu.get(t);if(void 0!==a&&this._$Ei!==a){const t=n.getPropertyOptions(a),l=t.converter,s=null!==(i=null!==(r=null===(o=l)||void 0===o?void 0:o.fromAttribute)&&void 0!==r?r:"function"==typeof l?l:null)&&void 0!==i?i:S.fromAttribute;this._$Ei=a,this[a]=s(e,t.type),this._$Ei=null}}requestUpdate(t,e,o){let r=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||C)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var M;z.finalized=!0,z.elementProperties=new Map,z.elementStyles=[],z.shadowRootOptions={mode:"open"},null==E||E({ReactiveElement:z}),(null!==(k=globalThis.reactiveElementVersions)&&void 0!==k?k:globalThis.reactiveElementVersions=[]).push("1.3.2");const P=globalThis.trustedTypes,U=P?P.createPolicy("lit-html",{createHTML:t=>t}):void 0,T=`lit$${(Math.random()+"").slice(9)}$`,H="?"+T,N=`<${H}>`,O=document,R=(t="")=>O.createComment(t),L=t=>null===t||"object"!=typeof t&&"function"!=typeof t,q=Array.isArray,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,B=/>/g,V=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Z=/'/g,W=/"/g,F=/^(?:script|style|textarea|title)$/i,J=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),K=J(1),X=(J(2),Symbol.for("lit-noChange")),G=Symbol.for("lit-nothing"),Q=new WeakMap,Y=O.createTreeWalker(O,129,null,!1),tt=(t,e)=>{const o=t.length-1,r=[];let i,n=2===e?"<svg>":"",a=D;for(let e=0;e<o;e++){const o=t[e];let l,s,c=-1,d=0;for(;d<o.length&&(a.lastIndex=d,s=a.exec(o),null!==s);)d=a.lastIndex,a===D?"!--"===s[1]?a=I:void 0!==s[1]?a=B:void 0!==s[2]?(F.test(s[2])&&(i=RegExp("</"+s[2],"g")),a=V):void 0!==s[3]&&(a=V):a===V?">"===s[0]?(a=null!=i?i:D,c=-1):void 0===s[1]?c=-2:(c=a.lastIndex-s[2].length,l=s[1],a=void 0===s[3]?V:'"'===s[3]?W:Z):a===W||a===Z?a=V:a===I||a===B?a=D:(a=V,i=void 0);const p=a===V&&t[e+1].startsWith("/>")?" ":"";n+=a===D?o+N:c>=0?(r.push(l),o.slice(0,c)+"$lit$"+o.slice(c)+T+p):o+T+(-2===c?(r.push(void 0),e):p)}const l=n+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==U?U.createHTML(l):l,r]};class et{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let i=0,n=0;const a=t.length-1,l=this.parts,[s,c]=tt(t,e);if(this.el=et.createElement(s,o),Y.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=Y.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(T)){const o=c[n++];if(t.push(e),void 0!==o){const t=r.getAttribute(o.toLowerCase()+"$lit$").split(T),e=/([.?@])?(.*)/.exec(o);l.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?at:"?"===e[1]?st:"@"===e[1]?ct:nt})}else l.push({type:6,index:i})}for(const e of t)r.removeAttribute(e)}if(F.test(r.tagName)){const t=r.textContent.split(T),e=t.length-1;if(e>0){r.textContent=P?P.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],R()),Y.nextNode(),l.push({type:2,index:++i});r.append(t[e],R())}}}else if(8===r.nodeType)if(r.data===H)l.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(T,t+1));)l.push({type:7,index:i}),t+=T.length-1}i++}}static createElement(t,e){const o=O.createElement("template");return o.innerHTML=t,o}}function ot(t,e,o=t,r){var i,n,a,l;if(e===X)return e;let s=void 0!==r?null===(i=o._$Cl)||void 0===i?void 0:i[r]:o._$Cu;const c=L(e)?void 0:e._$litDirective$;return(null==s?void 0:s.constructor)!==c&&(null===(n=null==s?void 0:s._$AO)||void 0===n||n.call(s,!1),void 0===c?s=void 0:(s=new c(t),s._$AT(t,o,r)),void 0!==r?(null!==(a=(l=o)._$Cl)&&void 0!==a?a:l._$Cl=[])[r]=s:o._$Cu=s),void 0!==s&&(e=ot(t,s._$AS(t,e.values),s,r)),e}class rt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:r}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:O).importNode(o,!0);Y.currentNode=i;let n=Y.nextNode(),a=0,l=0,s=r[0];for(;void 0!==s;){if(a===s.index){let e;2===s.type?e=new it(n,n.nextSibling,this,t):1===s.type?e=new s.ctor(n,s.name,s.strings,this,t):6===s.type&&(e=new dt(n,this,t)),this.v.push(e),s=r[++l]}a!==(null==s?void 0:s.index)&&(n=Y.nextNode(),a++)}return i}m(t){let e=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class it{constructor(t,e,o,r){var i;this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cg=null===(i=null==r?void 0:r.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ot(this,t,e),L(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==X&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return q(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==G&&L(this._$AH)?this._$AA.nextSibling.data=t:this.k(O.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=et.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.m(o);else{const t=new rt(i,this),e=t.p(this.options);t.m(o),this.k(e),this._$AH=t}}_$AC(t){let e=Q.get(t.strings);return void 0===e&&Q.set(t.strings,e=new et(t)),e}S(t){q(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const i of t)r===e.length?e.push(o=new it(this.M(R()),this.M(R()),this,this.options)):o=e[r],o._$AI(i),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class nt{constructor(t,e,o,r,i){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=G}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,r){const i=this.strings;let n=!1;if(void 0===i)t=ot(this,t,e,0),n=!L(t)||t!==this._$AH&&t!==X,n&&(this._$AH=t);else{const r=t;let a,l;for(t=i[0],a=0;a<i.length-1;a++)l=ot(this,r[o+a],e,a),l===X&&(l=this._$AH[a]),n||(n=!L(l)||l!==this._$AH[a]),l===G?t=G:t!==G&&(t+=(null!=l?l:"")+i[a+1]),this._$AH[a]=l}n&&!r&&this.C(t)}C(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class at extends nt{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===G?void 0:t}}const lt=P?P.emptyScript:"";class st extends nt{constructor(){super(...arguments),this.type=4}C(t){t&&t!==G?this.element.setAttribute(this.name,lt):this.element.removeAttribute(this.name)}}class ct extends nt{constructor(t,e,o,r,i){super(t,e,o,r,i),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=ot(this,t,e,0))&&void 0!==o?o:G)===X)return;const r=this._$AH,i=t===G&&r!==G||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==G&&(r===G||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class dt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){ot(this,t)}}const pt=window.litHtmlPolyfillSupport;var ht,ut;null==pt||pt(et,it),(null!==(M=globalThis.litHtmlVersions)&&void 0!==M?M:globalThis.litHtmlVersions=[]).push("2.2.3");class mt extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,o)=>{var r,i;const n=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:e;let a=n._$litPart$;if(void 0===a){const t=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;n._$litPart$=a=new it(e.insertBefore(R(),t),t,void 0,null!=o?o:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return X}}mt.finalized=!0,mt._$litElement$=!0,null===(ht=globalThis.litElementHydrateSupport)||void 0===ht||ht.call(globalThis,{LitElement:mt});const vt=globalThis.litElementPolyfillSupport;null==vt||vt({LitElement:mt}),(null!==(ut=globalThis.litElementVersions)&&void 0!==ut?ut:globalThis.litElementVersions=[]).push("3.2.0");const bt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function ft(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):bt(t,e)}var gt;null===(gt=window.HTMLSlotElement)||void 0===gt||gt.prototype.assignedElements;class yt extends mt{}const At=w`
  :root {
    --global-font-size: 15px;
    --global-line-height: 1.4em;
    --global-space: 10px;
    --font-stack: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    --mono-font-stack: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    --background-color: #fff;
    --page-width: 60em;
    --font-color: #151515;
    --invert-font-color: #fff;
    --primary-color: #1a95e0;
    --secondary-color: #727578;
    --error-color: #d20962;
    --progress-bar-background: #727578;
    --progress-bar-fill: #151515;
    --code-bg-color: #e8eff2;
    --input-style: solid;
    --display-h1-decoration: none;
  }
  * {
    box-sizing: border-box;
    text-rendering: geometricPrecision;
  }
  ::-moz-selection {
    background: var(--primary-color);
    color: var(--invert-font-color);
  }
  ::selection {
    background: var(--primary-color);
    color: var(--invert-font-color);
  }
  body {
    font-size: var(--global-font-size);
    color: var(--font-color);
    line-height: var(--global-line-height);
    margin: 0;
    font-family: var(--font-stack);
    word-wrap: break-word;
    background-color: var(--background-color);
  }
  .logo,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: var(--global-line-height);
  }
  a {
    cursor: pointer;
    color: var(--primary-color);
    text-decoration: none;
  }
  a:hover {
    background-color: var(--primary-color);
    color: var(--invert-font-color);
  }
  em {
    font-size: var(--global-font-size);
    font-style: italic;
    font-family: var(--font-stack);
    color: var(--font-color);
  }
  blockquote,
  code,
  em,
  strong {
    line-height: var(--global-line-height);
  }
  .logo,
  blockquote,
  code,
  footer,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  li,
  ol,
  p,
  section,
  ul {
    float: none;
    margin: 0;
    padding: 0;
  }
  .logo,
  blockquote,
  h1,
  ol,
  p,
  ul {
    margin-top: calc(var(--global-space) * 2);
    margin-bottom: calc(var(--global-space) * 2);
  }
  .logo,
  h1 {
    position: relative;
    display: inline-block;
    display: table-cell;
    padding: calc(var(--global-space) * 2) 0 calc(var(--global-space) * 2);
    margin: 0;
    overflow: hidden;
    font-weight: 600;
  }
  h1::after {
    content: \"====================================================================================================\";
    position: absolute;
    bottom: 5px;
    left: 0;
    display: var(--display-h1-decoration);
  }
  .logo + *,
  h1 + * {
    margin-top: 0;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    margin-bottom: var(--global-line-height);
    font-weight: 600;
  }
  blockquote {
    position: relative;
    padding-left: calc(var(--global-space) * 2);
    padding-left: 2ch;
    overflow: hidden;
  }
  blockquote::after {
    content: \">\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\";
    white-space: pre;
    position: absolute;
    top: 0;
    left: 0;
    line-height: var(--global-line-height);
    color: #9ca2ab;
  }
  code {
    font-weight: inherit;
    background-color: var(--code-bg-color);
    font-family: var(--mono-font-stack);
  }
  code::after,
  code::before {
    content: \"\`\";
    display: inline;
  }
  pre code::after,
  pre code::before {
    content: \"\";
  }
  pre {
    display: block;
    word-break: break-all;
    word-wrap: break-word;
    color: var(--secondary-color);
    background-color: var(--background-color);
    border: 1px solid var(--secondary-color);
    padding: var(--global-space);
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
  }
  pre code {
    overflow-x: scroll;
    padding: 0;
    margin: 0;
    display: inline-block;
    min-width: 100%;
    font-family: var(--mono-font-stack);
  }
  .terminal .logo,
  .terminal blockquote,
  .terminal code,
  .terminal h1,
  .terminal h2,
  .terminal h3,
  .terminal h4,
  .terminal h5,
  .terminal h6,
  .terminal strong {
    font-size: var(--global-font-size);
    font-style: normal;
    font-family: var(--font-stack);
    color: var(--font-color);
  }
  .terminal-prompt {
    position: relative;
    white-space: nowrap;
  }
  .terminal-prompt::before {
    content: \"> \";
  }
  .terminal-prompt::after {
    content: \"\";
    -webkit-animation: cursor 0.8s infinite;
    animation: cursor 0.8s infinite;
    background: var(--primary-color);
    border-radius: 0;
    display: inline-block;
    height: 1em;
    margin-left: 0.2em;
    width: 3px;
    bottom: -2px;
    position: relative;
  }
  @-webkit-keyframes cursor {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes cursor {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  li,
  li > ul > li {
    position: relative;
    display: block;
    padding-left: calc(var(--global-space) * 2);
  }
  nav > ul > li {
    padding-left: 0;
  }
  li::after {
    position: absolute;
    top: 0;
    left: 0;
  }
  ul > li::after {
    content: \"-\";
  }
  nav ul > li::after {
    content: \"\";
  }
  ol li::before {
    content: counters(item, \".\") \". \";
    counter-increment: item;
  }
  ol ol li::before {
    content: counters(item, \".\") \" \";
    counter-increment: item;
  }
  .terminal-menu li::after,
  .terminal-menu li::before {
    display: none;
  }
  ol {
    counter-reset: item;
  }
  ol li:nth-child(n + 10)::after {
    left: -7px;
  }
  ol ol {
    margin-top: 0;
    margin-bottom: 0;
  }
  .terminal-menu {
    width: 100%;
  }
  .terminal-nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  ul ul {
    margin-top: 0;
    margin-bottom: 0;
  }
  .terminal-menu ul {
    list-style-type: none;
    padding: 0 !important;
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
    font-size: var(--global-font-size);
    margin-top: 0;
  }
  .terminal-menu li {
    display: flex;
    margin: 0 0 0.5em 0;
    padding: 0;
  }
  ol.terminal-toc li {
    border-bottom: 1px dotted var(--secondary-color);
    padding: 0;
    margin-bottom: 15px;
  }
  .terminal-menu li:last-child {
    margin-bottom: 0;
  }
  ol.terminal-toc li a {
    margin: 4px 4px 4px 0;
    background: var(--background-color);
    position: relative;
    top: 6px;
    text-align: left;
    padding-right: 4px;
  }
  .terminal-menu li a:not(.btn) {
    text-decoration: none;
    display: block;
    width: 100%;
    border: none;
    color: var(--secondary-color);
  }
  .terminal-menu li a.active {
    color: var(--font-color);
  }
  .terminal-menu li a:hover {
    background: 0 0;
    color: inherit;
  }
  ol.terminal-toc li::before {
    content: counters(item, \".\") \". \";
    counter-increment: item;
    position: absolute;
    right: 0;
    background: var(--background-color);
    padding: 4px 0 4px 4px;
    bottom: -8px;
  }
  ol.terminal-toc li a:hover {
    background: var(--primary-color);
    color: var(--invert-font-color);
  }
  hr {
    position: relative;
    overflow: hidden;
    margin: calc(var(--global-space) * 4) 0;
    border: 0;
    border-bottom: 1px dashed var(--secondary-color);
  }
  p {
    margin: 0 0 var(--global-line-height);
    color: var(--global-font-color);
  }
  .container {
    max-width: var(--page-width);
  }
  .container,
  .container-fluid {
    margin: 0 auto;
    padding: 0 calc(var(--global-space) * 2);
  }
  img {
    width: 100%;
  }
  .progress-bar {
    height: 8px;
    background-color: var(--progress-bar-background);
    margin: 12px 0;
  }
  .progress-bar.progress-bar-show-percent {
    margin-top: 38px;
  }
  .progress-bar-filled {
    background-color: var(--progress-bar-fill);
    height: 100%;
    transition: width 0.3s ease;
    position: relative;
    width: 0;
  }
  .progress-bar-filled::before {
    content: \"\";
    border: 6px solid transparent;
    border-top-color: var(--progress-bar-fill);
    position: absolute;
    top: -12px;
    right: -6px;
  }
  .progress-bar-filled::after {
    color: var(--progress-bar-fill);
    content: attr(data-filled);
    display: block;
    font-size: 12px;
    white-space: nowrap;
    position: absolute;
    border: 6px solid transparent;
    top: -38px;
    right: 0;
    transform: translateX(50%);
  }
  .progress-bar-no-arrow > .progress-bar-filled::after,
  .progress-bar-no-arrow > .progress-bar-filled::before {
    content: \"\";
    display: none;
    visibility: hidden;
    opacity: 0;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: var(--global-line-height) 0;
    color: var(--font-color);
    font-size: var(--global-font-size);
  }
  table td,
  table th {
    vertical-align: top;
    border: 1px solid var(--font-color);
    line-height: var(--global-line-height);
    padding: calc(var(--global-space) / 2);
    font-size: 1em;
  }
  table thead th {
    font-size: 1em;
  }
  table tfoot tr th {
    font-weight: 500;
  }
  table caption {
    font-size: 1em;
    margin: 0 0 1em 0;
  }
  table tbody td:first-child {
    font-weight: 700;
    color: var(--secondary-color);
  }
  .form {
    width: 100%;
  }
  fieldset {
    border: 1px solid var(--font-color);
    padding: 1em;
  }
  label {
    font-size: 1em;
    color: var(--font-color);
  }
  input[type='email'],
  input[type='number'],
  input[type='password'],
  input[type='search'],
  input[type='text'] {
    border: 1px var(--input-style) var(--font-color);
    width: 100%;
    padding: 0.7em 0.5em;
    font-size: 1em;
    font-family: var(--font-stack);
    -webkit-appearance: none;
    border-radius: 0;
  }
  input[type='email']:active,
  input[type='email']:focus,
  input[type='number']:active,
  input[type='number']:focus,
  input[type='password']:active,
  input[type='password']:focus,
  input[type='search']:active,
  input[type='search']:focus,
  input[type='text']:active,
  input[type='text']:focus {
    outline: 0;
    -webkit-appearance: none;
    border: 1px solid var(--font-color);
  }
  input[type='email']:not(:placeholder-shown):invalid,
  input[type='number']:not(:placeholder-shown):invalid,
  input[type='password']:not(:placeholder-shown):invalid,
  input[type='search']:not(:placeholder-shown):invalid,
  input[type='text']:not(:placeholder-shown):invalid {
    border-color: var(--error-color);
  }
  input,
  textarea {
    color: var(--font-color);
    background-color: var(--background-color);
  }
  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    color: var(--secondary-color) !important;
    opacity: 1;
  }
  input::-moz-placeholder,
  textarea::-moz-placeholder {
    color: var(--secondary-color) !important;
    opacity: 1;
  }
  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    color: var(--secondary-color) !important;
    opacity: 1;
  }
  input::-ms-input-placeholder,
  textarea::-ms-input-placeholder {
    color: var(--secondary-color) !important;
    opacity: 1;
  }
  input::placeholder,
  textarea::placeholder {
    color: var(--secondary-color) !important;
    opacity: 1;
  }
  textarea {
    height: auto;
    width: 100%;
    resize: none;
    border: 1px var(--input-style) var(--font-color);
    padding: 0.5em;
    font-size: 1em;
    font-family: var(--font-stack);
    -webkit-appearance: none;
    border-radius: 0;
  }
  textarea:focus {
    outline: 0;
    -webkit-appearance: none;
    border: 1px solid var(--font-color);
  }
  textarea:not(:placeholder-shown):invalid {
    border-color: var(--error-color);
  }
  input:-webkit-autofill,
  input:-webkit-autofill:focus textarea:-webkit-autofill,
  input:-webkit-autofill:hover,
  select:-webkit-autofill,
  select:-webkit-autofill:focus,
  select:-webkit-autofill:hover,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus {
    border: 1px solid var(--font-color);
    -webkit-text-fill-color: var(--font-color);
    box-shadow: 0 0 0 1000px var(--invert-font-color) inset;
    -webkit-box-shadow: 0 0 0 1000px var(--invert-font-color) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  .form-group {
    margin-bottom: var(--global-line-height);
    overflow: auto;
  }
  .btn {
    border-style: solid;
    border-width: 1px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: 0;
    padding: 0.65em 2em;
    font-size: 1em;
    font-family: inherit;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;
    z-index: 1;
  }
  .btn:active {
    box-shadow: none;
  }
  .btn.btn-ghost {
    border-color: var(--font-color);
    color: var(--font-color);
    background-color: transparent;
  }
  .btn.btn-ghost:focus,
  .btn.btn-ghost:hover {
    border-color: var(--tertiary-color);
    color: var(--tertiary-color);
    z-index: 2;
  }
  .btn.btn-ghost:hover {
    background-color: transparent;
  }
  .btn-block {
    width: 100%;
    display: flex;
  }
  .btn-default {
    background-color: var(--font-color);
    border-color: var(--invert-font-color);
    color: var(--invert-font-color);
  }
  .btn-default:focus:not(.btn-ghost),
  .btn-default:hover {
    background-color: var(--secondary-color);
    color: var(--invert-font-color);
  }
  .btn-default.btn-ghost:focus,
  .btn-default.btn-ghost:hover {
    border-color: var(--secondary-color);
    color: var(--secondary-color);
    z-index: 2;
  }
  .btn-error {
    color: var(--invert-font-color);
    background-color: var(--error-color);
    border: 1px solid var(--error-color);
  }
  .btn-error:focus:not(.btn-ghost),
  .btn-error:hover {
    background-color: var(--error-color);
    border-color: var(--error-color);
  }
  .btn-error.btn-ghost {
    border-color: var(--error-color);
    color: var(--error-color);
  }
  .btn-error.btn-ghost:focus,
  .btn-error.btn-ghost:hover {
    border-color: var(--error-color);
    color: var(--error-color);
    z-index: 2;
  }
  .btn-primary {
    color: var(--invert-font-color);
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);
  }
  .btn-primary:focus:not(.btn-ghost),
  .btn-primary:hover {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
  }
  .btn-primary.btn-ghost {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
  .btn-primary.btn-ghost:focus,
  .btn-primary.btn-ghost:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
    z-index: 2;
  }
  .btn-small {
    padding: 0.5em 1.3em !important;
    font-size: 0.9em !important;
  }
  .btn-group {
    overflow: auto;
  }
  .btn-group .btn {
    float: left;
  }
  .btn-group .btn-ghost:not(:first-child) {
    margin-left: -1px;
  }
  .terminal-card {
    border: 1px solid var(--secondary-color);
  }
  .terminal-card > header {
    color: var(--invert-font-color);
    text-align: center;
    background-color: var(--secondary-color);
    padding: 0.5em 0;
  }
  .terminal-card > div:first-of-type {
    padding: var(--global-space);
  }
  .terminal-timeline {
    position: relative;
    padding-left: 70px;
  }
  .terminal-timeline::before {
    content: ' ';
    background: var(--secondary-color);
    display: inline-block;
    position: absolute;
    left: 35px;
    width: 2px;
    height: 100%;
    z-index: 400;
  }
  .terminal-timeline .terminal-card {
    margin-bottom: 25px;
  }
  .terminal-timeline .terminal-card::before {
    content: ' ';
    background: var(--invert-font-color);
    border: 2px solid var(--secondary-color);
    display: inline-block;
    position: absolute;
    margin-top: 25px;
    left: 26px;
    width: 15px;
    height: 15px;
    z-index: 400;
  }
  .terminal-alert {
    color: var(--font-color);
    padding: 1em;
    border: 1px solid var(--font-color);
    margin-bottom: var(--global-space);
  }
  .terminal-alert-error {
    color: var(--error-color);
    border-color: var(--error-color);
  }
  .terminal-alert-primary {
    color: var(--primary-color);
    border-color: var(--primary-color);
  }
  @media screen and (max-width: 960px) {
    label {
      display: block;
      width: 100%;
    }
    pre::-webkit-scrollbar {
      height: 3px;
    }
  }
  @media screen and (max-width: 480px) {
    form {
      width: 100%;
    }
  }
  @media only screen and (min-width: 30em) {
    .terminal-nav {
      flex-direction: row;
      align-items: center;
    }
    .terminal-menu ul {
      flex-direction: row;
      justify-items: flex-end;
      align-items: center;
      justify-content: flex-end;
      margin-top: calc(var(--global-space) * 2);
    }
    .terminal-menu li {
      margin: 0;
      margin-right: 2em;
    }
    .terminal-menu li:last-child {
      margin-right: 0;
    }
  }
  .terminal-media:not(:last-child) {
    margin-bottom: 1.25rem;
  }
  .terminal-media-left {
    padding-right: var(--global-space);
  }
  .terminal-media-left,
  .terminal-media-right {
    display: table-cell;
    vertical-align: top;
  }
  .terminal-media-right {
    padding-left: var(--global-space);
  }
  .terminal-media-body {
    display: table-cell;
    vertical-align: top;
  }
  .terminal-media-heading {
    font-size: 1em;
    font-weight: 700;
  }
  .terminal-media-content {
    margin-top: 0.3rem;
  }
  .terminal-placeholder {
    background-color: var(--secondary-color);
    text-align: center;
    color: var(--font-color);
    font-size: 1rem;
    border: 1px solid var(--secondary-color);
  }
  figure > img {
    padding: 0;
  }
  .terminal-avatarholder {
    width: calc(var(--global-space) * 5);
    height: calc(var(--global-space) * 5);
  }
  .terminal-avatarholder img {
    padding: 0;
  }
  figure {
    margin: 0;
  }
  figure > figcaption {
    color: var(--secondary-color);
    text-align: center;
  }
  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: var(--block-background-color);
    color: var(--font-color);
  }
  .hljs-comment,
  .hljs-quote {
    color: var(--secondary-color);
  }
  .hljs-variable {
    color: var(--font-color);
  }
  .hljs-built_in,
  .hljs-keyword,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-tag {
    color: var(--primary-color);
  }
  .hljs-addition,
  .hljs-attribute,
  .hljs-literal,
  .hljs-section,
  .hljs-string,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-title,
  .hljs-type {
    color: var(--secondary-color);
  }
  .hljs-string {
    color: var(--secondary-color);
  }
  .hljs-deletion,
  .hljs-meta,
  .hljs-selector-attr,
  .hljs-selector-pseudo {
    color: var(--primary-color);
  }
  .hljs-doctag {
    color: var(--secondary-color);
  }
  .hljs-attr {
    color: var(--primary-color);
  }
  .hljs-bullet,
  .hljs-link,
  .hljs-symbol {
    color: var(--primary-color);
  }
  .hljs-emphasis {
    font-style: italic;
  }
  .hljs-strong {
    font-weight: 700;
  }
`;var wt=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};class xt extends yt{constructor(){super(...arguments),this._listItems=[]}static get styles(){const t=w`
      .category-buttons {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        place-items: center stretch;
        justify-content: center;
      }
    `;return[At,t]}render(){return setTimeout((()=>this._checkForDefault())),K`
      <nav
        class="category-buttons"
        @categoryActive=${this._categoryActivatedListener}
      >
        <slot></slot>
      </nav>
    `}_checkForDefault(){if(!this._currentlySelected){const t={detail:this.default};this._categoryActivatedListener(new CustomEvent("categoryActive",t))}}get _slottedChildren(){const t=this.shadowRoot.querySelector("slot");if(t)return t.assignedElements({flatten:!0})}_categoryActivatedListener(t){this._currentlySelected=t.detail;for(let e=0;e<this._slottedChildren.length;e++){const o=this._slottedChildren[e];o.name!=t.detail?o.disableCategory():o.active||o.enableCategory()}this.requestUpdate()}}wt([ft()],xt.prototype,"default",void 0),wt([ft({state:!0})],xt.prototype,"_listItems",void 0),customElements.define("rule-category-navigation",xt);var kt=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};class $t extends yt{static get styles(){return[At]}disableCategory(){this.active=!1,this.requestUpdate()}enableCategory(){this.active=!0,this.requestUpdate()}toggleCategory(t=!0){if(this.active=!this.active,t){const t={detail:this.name,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("categoryActive",t))}this.requestUpdate()}render(){return K`
      <button
        class="${this.active?"btn btn-primary":"btn btn-default btn-ghost"}"
        @click="${this.toggleCategory}"
      >
        <slot></slot>
      </button>
    `}}kt([ft()],$t.prototype,"name",void 0),kt([ft()],$t.prototype,"default",void 0),customElements.define("rule-category-button",$t)})()})();