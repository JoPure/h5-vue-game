/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return W(this,"");i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);
/*!js/lib/core.js*/
var CryptoJS=CryptoJS||function(t,n){var i={},r=i.lib={},e=r.Base=function(){function t(){}return{extend:function(n){t.prototype=this;var i=new t;return n&&i.mixIn(n),i.hasOwnProperty("init")||(i.init=function(){i.$super.init.apply(this,arguments)}),i.init.prototype=i,i.$super=this,i},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),s=r.WordArray=e.extend({init:function(t,i){t=this.words=t||[],this.sigBytes=i!=n?i:4*t.length},toString:function(t){return(t||a).stringify(this)},concat:function(t){var n=this.words,i=t.words,r=this.sigBytes,e=t.sigBytes;if(this.clamp(),r%4)for(var s=0;e>s;s++){var o=i[s>>>2]>>>24-s%4*8&255;n[r+s>>>2]|=o<<24-(r+s)%4*8}else for(var s=0;e>s;s+=4)n[r+s>>>2]=i[s>>>2];return this.sigBytes+=e,this},clamp:function(){var n=this.words,i=this.sigBytes;n[i>>>2]&=4294967295<<32-i%4*8,n.length=t.ceil(i/4)},clone:function(){var t=e.clone.call(this);return t.words=this.words.slice(0),t},random:function(n){for(var i,r=[],e=function(n){var n=n,i=987654321,r=4294967295;return function(){i=36969*(65535&i)+(i>>16)&r,n=18e3*(65535&n)+(n>>16)&r;var e=(i<<16)+n&r;return e/=4294967296,e+=.5,e*(t.random()>.5?1:-1)}},o=0;n>o;o+=4){var a=e(4294967296*(i||t.random()));i=987654071*a(),r.push(4294967296*a()|0)}return new s.init(r,n)}}),o=i.enc={},a=o.Hex={stringify:function(t){for(var n=t.words,i=t.sigBytes,r=[],e=0;i>e;e++){var s=n[e>>>2]>>>24-e%4*8&255;r.push((s>>>4).toString(16)),r.push((15&s).toString(16))}return r.join("")},parse:function(t){for(var n=t.length,i=[],r=0;n>r;r+=2)i[r>>>3]|=parseInt(t.substr(r,2),16)<<24-r%8*4;return new s.init(i,n/2)}},c=o.Latin1={stringify:function(t){for(var n=t.words,i=t.sigBytes,r=[],e=0;i>e;e++){var s=n[e>>>2]>>>24-e%4*8&255;r.push(String.fromCharCode(s))}return r.join("")},parse:function(t){for(var n=t.length,i=[],r=0;n>r;r++)i[r>>>2]|=(255&t.charCodeAt(r))<<24-r%4*8;return new s.init(i,n)}},u=o.Utf8={stringify:function(t){try{return decodeURIComponent(escape(c.stringify(t)))}catch(n){throw new Error("Malformed UTF-8 data")}},parse:function(t){return c.parse(unescape(encodeURIComponent(t)))}},f=r.BufferedBlockAlgorithm=e.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=u.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(n){var i=this._data,r=i.words,e=i.sigBytes,o=this.blockSize,a=4*o,c=e/a;c=n?t.ceil(c):t.max((0|c)-this._minBufferSize,0);var u=c*o,f=t.min(4*u,e);if(u){for(var h=0;u>h;h+=o)this._doProcessBlock(r,h);var p=r.splice(0,u);i.sigBytes-=f}return new s.init(p,f)},clone:function(){var t=e.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),h=(r.Hasher=f.extend({cfg:e.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){f.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var n=this._doFinalize();return n},blockSize:16,_createHelper:function(t){return function(n,i){return new t.init(i).finalize(n)}},_createHmacHelper:function(t){return function(n,i){return new h.HMAC.init(t,i).finalize(n)}}}),i.algo={});return i}(Math);
;/*!js/lib/sha1.js*/
!function(){var e=CryptoJS,t=e.lib,s=t.WordArray,a=t.Hasher,r=e.algo,o=[],h=r.SHA1=a.extend({_doReset:function(){this._hash=new s.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var s=this._hash.words,a=s[0],r=s[1],h=s[2],i=s[3],n=s[4],c=0;80>c;c++){if(16>c)o[c]=0|e[t+c];else{var l=o[c-3]^o[c-8]^o[c-14]^o[c-16];o[c]=l<<1|l>>>31}var _=(a<<5|a>>>27)+n+o[c];_+=20>c?(r&h|~r&i)+1518500249:40>c?(r^h^i)+1859775393:60>c?(r&h|r&i|h&i)-1894007588:(r^h^i)-899497514,n=i,i=h,h=r<<30|r>>>2,r=a,a=_}s[0]=s[0]+a|0,s[1]=s[1]+r|0,s[2]=s[2]+h|0,s[3]=s[3]+i|0,s[4]=s[4]+n|0},_doFinalize:function(){var e=this._data,t=e.words,s=8*this._nDataBytes,a=8*e.sigBytes;return t[a>>>5]|=128<<24-a%32,t[(a+64>>>9<<4)+14]=Math.floor(s/4294967296),t[(a+64>>>9<<4)+15]=s,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=a.clone.call(this);return e._hash=this._hash.clone(),e}});e.SHA1=a._createHelper(h),e.HmacSHA1=a._createHmacHelper(h)}();
;/*!js/lib/md5.js*/
!function(r){function t(r,t,n,a,e,o,s){var i=r+(t&n|~t&a)+e+s;return(i<<o|i>>>32-o)+t}function n(r,t,n,a,e,o,s){var i=r+(t&a|n&~a)+e+s;return(i<<o|i>>>32-o)+t}function a(r,t,n,a,e,o,s){var i=r+(t^n^a)+e+s;return(i<<o|i>>>32-o)+t}function e(r,t,n,a,e,o,s){var i=r+(n^(t|~a))+e+s;return(i<<o|i>>>32-o)+t}var o=CryptoJS,s=o.lib,i=s.WordArray,c=s.Hasher,h=o.algo,u=[];!function(){for(var t=0;64>t;t++)u[t]=4294967296*r.abs(r.sin(t+1))|0}();var v=h.MD5=c.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(r,o){for(var s=0;16>s;s++){var i=o+s,c=r[i];r[i]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}var h=this._hash.words,v=r[o+0],f=r[o+1],l=r[o+2],_=r[o+3],d=r[o+4],y=r[o+5],H=r[o+6],g=r[o+7],p=r[o+8],w=r[o+9],B=r[o+10],D=r[o+11],M=r[o+12],b=r[o+13],m=r[o+14],k=r[o+15],x=h[0],z=h[1],A=h[2],C=h[3];x=t(x,z,A,C,v,7,u[0]),C=t(C,x,z,A,f,12,u[1]),A=t(A,C,x,z,l,17,u[2]),z=t(z,A,C,x,_,22,u[3]),x=t(x,z,A,C,d,7,u[4]),C=t(C,x,z,A,y,12,u[5]),A=t(A,C,x,z,H,17,u[6]),z=t(z,A,C,x,g,22,u[7]),x=t(x,z,A,C,p,7,u[8]),C=t(C,x,z,A,w,12,u[9]),A=t(A,C,x,z,B,17,u[10]),z=t(z,A,C,x,D,22,u[11]),x=t(x,z,A,C,M,7,u[12]),C=t(C,x,z,A,b,12,u[13]),A=t(A,C,x,z,m,17,u[14]),z=t(z,A,C,x,k,22,u[15]),x=n(x,z,A,C,f,5,u[16]),C=n(C,x,z,A,H,9,u[17]),A=n(A,C,x,z,D,14,u[18]),z=n(z,A,C,x,v,20,u[19]),x=n(x,z,A,C,y,5,u[20]),C=n(C,x,z,A,B,9,u[21]),A=n(A,C,x,z,k,14,u[22]),z=n(z,A,C,x,d,20,u[23]),x=n(x,z,A,C,w,5,u[24]),C=n(C,x,z,A,m,9,u[25]),A=n(A,C,x,z,_,14,u[26]),z=n(z,A,C,x,p,20,u[27]),x=n(x,z,A,C,b,5,u[28]),C=n(C,x,z,A,l,9,u[29]),A=n(A,C,x,z,g,14,u[30]),z=n(z,A,C,x,M,20,u[31]),x=a(x,z,A,C,y,4,u[32]),C=a(C,x,z,A,p,11,u[33]),A=a(A,C,x,z,D,16,u[34]),z=a(z,A,C,x,m,23,u[35]),x=a(x,z,A,C,f,4,u[36]),C=a(C,x,z,A,d,11,u[37]),A=a(A,C,x,z,g,16,u[38]),z=a(z,A,C,x,B,23,u[39]),x=a(x,z,A,C,b,4,u[40]),C=a(C,x,z,A,v,11,u[41]),A=a(A,C,x,z,_,16,u[42]),z=a(z,A,C,x,H,23,u[43]),x=a(x,z,A,C,w,4,u[44]),C=a(C,x,z,A,M,11,u[45]),A=a(A,C,x,z,k,16,u[46]),z=a(z,A,C,x,l,23,u[47]),x=e(x,z,A,C,v,6,u[48]),C=e(C,x,z,A,g,10,u[49]),A=e(A,C,x,z,m,15,u[50]),z=e(z,A,C,x,y,21,u[51]),x=e(x,z,A,C,M,6,u[52]),C=e(C,x,z,A,_,10,u[53]),A=e(A,C,x,z,B,15,u[54]),z=e(z,A,C,x,f,21,u[55]),x=e(x,z,A,C,p,6,u[56]),C=e(C,x,z,A,k,10,u[57]),A=e(A,C,x,z,H,15,u[58]),z=e(z,A,C,x,b,21,u[59]),x=e(x,z,A,C,d,6,u[60]),C=e(C,x,z,A,D,10,u[61]),A=e(A,C,x,z,l,15,u[62]),z=e(z,A,C,x,w,21,u[63]),h[0]=h[0]+x|0,h[1]=h[1]+z|0,h[2]=h[2]+A|0,h[3]=h[3]+C|0},_doFinalize:function(){var t=this._data,n=t.words,a=8*this._nDataBytes,e=8*t.sigBytes;n[e>>>5]|=128<<24-e%32;var o=r.floor(a/4294967296),s=a;n[(e+64>>>9<<4)+15]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),n[(e+64>>>9<<4)+14]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),t.sigBytes=4*(n.length+1),this._process();for(var i=this._hash,c=i.words,h=0;4>h;h++){var u=c[h];c[h]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8)}return i},clone:function(){var r=c.clone.call(this);return r._hash=this._hash.clone(),r}});o.MD5=c._createHelper(v),o.HmacMD5=c._createHmacHelper(v)}(Math);
;/*!js/lib/store2.js*/
!function(t,e){var n={version:"2.3.2",areas:{},apis:{},inherit:function(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n]);return e},stringify:function(t){return void 0===t||"function"==typeof t?t+"":JSON.stringify(t)},parse:function(t){try{return JSON.parse(t)}catch(e){return t}},fn:function(t,e){n.storeAPI[t]=e;for(var i in n.apis)n.apis[i][t]=e},get:function(t,e){return t.getItem(e)},set:function(t,e,n){t.setItem(e,n)},remove:function(t,e){t.removeItem(e)},key:function(t,e){return t.key(e)},length:function(t){return t.length},clear:function(t){t.clear()},Store:function(t,e,i){var r=n.inherit(n.storeAPI,function(t,e,n){return 0===arguments.length?r.getAll():void 0!==e?r.set(t,e,n):"string"==typeof t||"number"==typeof t?r.get(t):t?r.setAll(t,e):r.clear()});r._id=t;try{var s="_safariPrivate_";e.setItem(s,"sucks"),r._area=e,e.removeItem(s)}catch(a){}return r._area||(r._area=n.inherit(n.storageAPI,{items:{},name:"fake"})),r._ns=i||"",n.areas[t]||(n.areas[t]=r._area),n.apis[r._ns+r._id]||(n.apis[r._ns+r._id]=r),r},storeAPI:{area:function(t,e){var i=this[t];return i&&i.area||(i=n.Store(t,e,this._ns),this[t]||(this[t]=i)),i},namespace:function(t,e){if(!t)return this._ns?this._ns.substring(0,this._ns.length-1):"";var i=t,r=this[i];return r&&r.namespace||(r=n.Store(this._id,this._area,this._ns+i+"."),this[i]||(this[i]=r),e||r.area("session",n.areas.session)),r},isFake:function(){return"fake"===this._area.name},toString:function(){return"store"+(this._ns?"."+this.namespace():"")+"["+this._id+"]"},has:function(t){return this._area.has?this._area.has(this._in(t)):!!(this._in(t)in this._area)},size:function(){return this.keys().length},each:function(t,e){for(var i=0,r=n.length(this._area);r>i;i++){var s=this._out(n.key(this._area,i));if(void 0!==s&&t.call(this,s,e||this.get(s))===!1)break;r>n.length(this._area)&&(r--,i--)}return e||this},keys:function(){return this.each(function(t,e){e.push(t)},[])},get:function(t,e){var i=n.get(this._area,this._in(t));return null!==i?n.parse(i):e||i},getAll:function(){return this.each(function(t,e){e[t]=this.get(t)},{})},set:function(t,e,i){var r=this.get(t);return null!=r&&i===!1?e:n.set(this._area,this._in(t),n.stringify(e),i)||r},setAll:function(t,e){var n,i;for(var r in t)i=t[r],this.set(r,i,e)!==i&&(n=!0);return n},remove:function(t){var e=this.get(t);return n.remove(this._area,this._in(t)),e},clear:function(){return this._ns?this.each(function(t){n.remove(this._area,this._in(t))},1):n.clear(this._area),this},clearAll:function(){var t=this._area;for(var e in n.areas)n.areas.hasOwnProperty(e)&&(this._area=n.areas[e],this.clear());return this._area=t,this},_in:function(t){return"string"!=typeof t&&(t=n.stringify(t)),this._ns?this._ns+t:t},_out:function(t){return this._ns?t&&0===t.indexOf(this._ns)?t.substring(this._ns.length):void 0:t}},storageAPI:{length:0,has:function(t){return this.items.hasOwnProperty(t)},key:function(t){var e=0;for(var n in this.items)if(this.has(n)&&t===e++)return n},setItem:function(t,e){this.has(t)||this.length++,this.items[t]=e},removeItem:function(t){this.has(t)&&(delete this.items[t],this.length--)},getItem:function(t){return this.has(t)?this.items[t]:null},clear:function(){for(var t in this.list)this.removeItem(t)},toString:function(){return this.length+" items in "+this.name+"Storage"}}};t.store&&(n.conflict=t.store);var i=n.Store("local",function(){try{return localStorage}catch(t){}}());i.local=i,i._=n,i.area("session",function(){try{return sessionStorage}catch(t){}}()),t.store=i,"function"==typeof e&&void 0!==e.amd?e(function(){return i}):"undefined"!=typeof module&&module.exports&&(module.exports=i)}(this,this.define);

/**
 * 工具类
 * wanGameUtils - v0.0.1 (2016-09-19)
 * ---------------------------------------------
 * 一、引入
 *
 * a. 加载:
 * <script type="text/javascript" src="xxxx/wanGameUtil.js"></script>
 *
 * b. 初始化设置：
 *  <script language="javascript">
 * 	   wanGameUtil.ready(function() {
 *			// todo something
 *		});
 * 	</script>
 * -----------------------------------------------------------------------
 * 二、接口列表
 *
 * 0. url 常用url链接
 * 1. encodeParam 格式化get请求参数(obj)，转化为encodeUrl(String),由"?","&"拼接
 * 2. ajax(config) 异步请求,config参数详见方法注释
 * 3. getWindow 获取window对象
 * 4. showFPS(parentId) 显示FPS，默认显示在body标签
 * 5. getQueryString(str) 获取浏览器参数,str = 'referrer'时获取referrer的参数，默认获取当前url参数
 * 6. getQueryVars 获取所有参数 返回Obj
 * 7. brower 判断浏览器类型，具体详见方法
 * 8. alert 公共弹出框 TODO
 * 9. showLoading 显示加载 TODO
 * 10. hideLoading 隐藏加载 TODO
 * 11. parallelLoadScripts 并联异步加载
 * 12. seriesLoadScripts 串联加载
 * 13. setDeviceId 设置设备信息
 * 14. getDeviceId 获取设备信息
 * 15. ready 初始化完成方法
 * 16. createSignature 返回参数(Obj)签名(String)
 * 17. currentDateFormat 获取当前时间（yyyy-HH-dd hh:mm:ss）
 * */

! function(win, doc, Math) {
	"use strict";
	//var apiBase = "http://10.10.15.54:8080/";
	var apiBase = 'http://sdk-h5.changic.net.cn/';

	var wanGameUtil = {
		_this: this,
		version: "0.1.1",
		appKey: 'dcc69fcc39d543bf8ecbc5ffc6524a2c',
		inited: !1,
		dependScripts: [ '//cdn.bootcss.com/fingerprintjs2/1.4.1/fingerprint2.min.js'],
		urls: {
			production: {

			},
			development: {
				domain: apiBase,
				loadingPage: apiBase + "platform/loading.jsp?gameId=",
				domainAPI: apiBase + "7wan/",
				login: apiBase + "7wan/game/login",
				logout: apiBase + "7wan/game/logout",
				loginPage: apiBase + "#/login",
				homePage: apiBase + "#/index",
				weixinPay: apiBase + "7wan/game/wxPayCharge",
				aliPay: apiBase + "7wan/game/aliPayCharge",
				initGame: apiBase + "7wan/game/initSDK",
				payPage: apiBase + "#/pay"
			}
		},
		url: {},
		encodeParam: function(params) {
			var ay = [];
			for(var i in params) {
				var r = encodeURIComponent(i) + '=' + encodeURIComponent(params[i]);
				ay.push(r);
			}
			return ay.join("&");
		},

		/**
		 * Ajax请求
		 * @param {Object} config
		 *	config:{
		 * 		url: 请求的url
		 * 		method: 请求方法，默认get,不区分大小写
		 * 		success: function(response, xhr) {
		 * 			// TODO
		 * 		},
		 * 		error: function(response, xhr) {
		 * 				// TODO
		 * 		},
		 * 		data: { //参数
		 * 			key: value
		 * 		},
		 * 		dataType: 数据类型，默认json
		 * 	}
		 * */
		ajax: function(config) {
			var method = "post" === config.method.toLowerCase() ? config.method.toLowerCase() : "get",
				url = config.url,
				data = config.data;
			var dataType = config.dataType ? config.dataType : 'json';
			dataType = ["text", "xml", "json"].indexOf(dataType.toLowerCase()) > -1 ? dataType.toLowerCase() : "json";
			var successFun = config.success;
			var errFun = config.error;;
			var xhr;
			try {
				xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
			} catch(e) {
				return a.alert("您的浏览器不支持ajax，请更换！"), !1
			}

			data = this.encodeParam(data);
			if(/^get$/i.test(method)) {
				url += '?' + data + '&' + Math.random(); //不缓存
			} else {
				url += '?' + Math.random();
			}

			xhr.open(method, url);
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4 && xhr.status == 200) {
					try {
						xhr.responseText = JSON.parse(xhr.responseText);
					} catch(e) {

					}
					successFun(xhr.responseText, xhr);
				}
				if(xhr.readyState == 4 && xhr.status != 200) {
					try {
						xhr.responseText = JSON.parse(xhr.responseText);
					} catch(e) {

					}
					errFun(xhr.responseText, xhr);
				}
			}
			if(/^post$/i.test(method)) {
				xhr.setRequestHeader('content-Type', 'application/x-www-form-urlencoded');
				xhr.send(data);
			} else {
				xhr.send();
			}

		},
		createSignature: function(params) {
			var keys = [];
			for(var key in params) {
				keys.push(key);
			}
			keys.sort();
			var values = [];
			for(var i = 0; i < keys.length; i++) {
				values.push(params[keys[i]]);
			}
			var str = values.join("") + 'dcc69fcc39d543bf8ecbc5ffc6524a2c';
			console.log(str);
			return CryptoJS.MD5(str).toString();
		},
		currentDateFormat: function() {
			var date = new Date();
			var seperator1 = "-";
			var seperator2 = ":";
			var month = date.getMonth() + 1;
			var strDate = date.getDate();
			if(month >= 1 && month <= 9) {
				month = "0" + month;
			}
			if(strDate >= 0 && strDate <= 9) {
				strDate = "0" + strDate;
			}
			var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
				" " + date.getHours() + seperator2 + date.getMinutes() +
				seperator2 + date.getSeconds();
			return currentdate;
		},
		getWindow: function() {
			return win;
		},
		extend: function(a, b) {
			for(var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
			return b
		},
		showFPS: function(pid) {
			var requestAnimationFrame =
				window.requestAnimationFrame || //Chromium
				window.webkitRequestAnimationFrame || //Webkit
				window.mozRequestAnimationFrame || //Mozilla Geko
				window.oRequestAnimationFrame || //Opera Presto
				window.msRequestAnimationFrame || //IE Trident?
				function(callback) { //Fallback function
					window.setTimeout(callback, 1000 / 60);
				};
			var e, pe, fps, last, offset, step, appendFps;

			fps = 0;
			last = Date.now();
			step = function() {
				offset = Date.now() - last;
				fps += 1;
				if(offset >= 1000) {
					last += offset;
					appendFps(fps);
					fps = 0;
				}
				requestAnimationFrame(step);
			};
			//显示fps; 如果未指定元素id，默认<body>标签
			appendFps = function(fps) {
				if(!e) e = document.createElement('span');
				pe = pid ? document.getElementById(pid) : document.getElementsByTagName('body')[0];
				e.innerHTML = "fps: " + fps;
				pe.appendChild(e);
			}
			step();
		},
		brower: function() {
			var ua = navigator.userAgent;
			navigator.appVersion;
			return {
				isTrident: function() {
					return ua.indexOf("Trident") > -1
				},
				isIEBelow10: function() {
					return ua.indexOf("Trident") > -1 && ua.toLowerCase().indexOf("msie") > -1
				},
				isIECompatible: function() {
					return ua.toLowerCase().indexOf("compatible") > -1 && ua.toLowerCase().indexOf("msie") > -1
				},
				isPresto: function() {
					return ua.indexOf("Presto") > -1
				},
				isWebKit: function() {
					return ua.indexOf("AppleWebKit") > -1
				},
				isGecko: function() {
					return ua.indexOf("Gecko") > -1 && -1 === c.indexOf("KHTML")
				},
				isMobile: function() {
					return !!ua.match(/AppleWebKit.*Mobile.*/)
				},
				isIos: function() {
					return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
				},
				isAndroid: function() {
					return ua.indexOf("Android") > -1 || ua.indexOf("Linux") > -1
				},
				isIPhone: function() {
					return ua.indexOf("iPhone") > -1 || ua.indexOf("Mac") > -1
				},
				isIPad: function() {
					return ua.indexOf("iPad") > -1
				},
				isWebApp: function() {
					return -1 === ua.indexOf("Safari") && !this.isUcBrowser() && !this.isSogouBrowser()
				},
				isUcBrowser: function() {
					return ua.indexOf("UCBrowser") > -1
				},
				isQQBrowser: function() {
					return ua.indexOf("MQQBrowser") > -1
				},
				isSogouBrowser: function() {
					return ua.indexOf("SogouMobileBrowser") > -1
				},
				is360Browser: function() {
					return ua.indexOf("QHBrowser") > -1
				},
				isChromeIOS: function() {
					return ua.indexOf("CriOS") > -1
				},
				isMaxtonIOS: function() {
					return ua.indexOf("MXiOS") > -1
				},
				isMaxtonAndroid: function() {
					return ua.indexOf("MxBrowser") > -1
				},
				isMaxtonPc: function() {
					return ua.indexOf("Maxthon") > -1
				},
				isOperaIOS: function() {
					return ua.indexOf("OPiOS") > -1
				},
				isBaiduBrowser: function() {
					return /baidubrowser/i.test(ua)
				},
				isSinaWeibo: function() {
					return ua.indexOf("Weibo") > -1
				},
				isPC: function() {
					return /Windows/i.test(ua)
				},
				isMac: function() {
					return /Macintosh/i.test(ua)
				},
				isHgameApp: function() {
					return /Hgame|MicroClient/i.test(ua)
				},
				isWeixin: function() {
					var a = ua.toLowerCase();
					return a.indexOf("micromessenger") > -1
				},
				isQQZone: function() {
					return ua.indexOf("QZONEJSSDK") > -1
				},

				language: function() {
					return(navigator.browserLanguage || navigator.language).toLowerCase()
				},
				isSafari: function() {
					var a = ua.match(/^Mozilla\/5.0 \(.*?\) AppleWebKit\/.*? \(.*?\) Version\/.*? Mobile\/.*? Safari\/\d+\.\d+\.\d+?$/);
					return null !== a
				},
				isReview: function() {
					return /\/review\d+/.test(doc.referrer)
				},
				isLocalStorageSupport: function() {
					try {
						var key = "testLS",
							value = "test";
						win.localStorage.setItem(key, value);
						var value2 = win.localStorage.getItem(key);
						return value2 == value ? (win.localStorage.removeItem(key), !0) : !1;
					} catch(e) {
						return !1
					}
				}
			}
		},
		jsonMsg: function(code, msg) {
			return {
				code: code,
				msg: msg
			};
		},
		checkParams: function(params, requiredKeys) {
			var key, loseKeys = [];
			if(requiredKeys && requiredKeys instanceof Array)
				for(var n = 0; n < requiredKeys.length; n++) {
					key = requiredKeys[n];
					if(!params[key]) {
						loseKeys.push(key);
					}
				}
			if(loseKeys.length > 0) {
				return '缺失必要参数：' + loseKeys.join(',');
			}
			return null;
		},
		getQueryString: function(name, type) {
			try {
				var referrer = doc.referrer;
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
				var value;
				switch(type) {
					case "referrer":
						value = referrer.split('?')[1].match(reg);
						break;
					default:
						value = document.location.search.substr(1).match(reg);
				}
				if(value != null) return decodeURIComponent(value[2]);
				return null;
			} catch(i) {
				return null
			}
		},
		getQueryVars: function(url, type) {
			url = url ? url : (type == "referrer" ? doc.referrer : win.location.href);
			var vars = {},
				hash, str;
			str = url.split('?')[1];

			if(str) {
				var hashes = str.split('&');
				for(var i = 0; i < hashes.length; i++) {
					hash = hashes[i].split('=');
					vars[hash[0]] = hash[1] ? hash[1] : "";
				}
			}

			return vars;
		},
		alert: function() {

		},
		seriesLoadScripts: function(scripts, callback) {
			if(typeof(scripts) != "object") var scripts = [scripts];
			var HEAD = document.getElementsByTagName("head").item(0) || document.documentElement;
			var s = new Array(),
				last = scripts.length - 1,
				recursiveLoad = function(i) { //递归
					s[i] = document.createElement("script");
					s[i].setAttribute("type", "text/javascript");
					s[i].onload = s[i].onreadystatechange = function() { //Attach handlers for all browsers
						if(! /*@cc_on!@*/ 0 || this.readyState == "loaded" || this.readyState == "complete") {
							this.onload = this.onreadystatechange = null;
							this.parentNode.removeChild(this);
							if(i != last) recursiveLoad(i + 1);
							else if(typeof(callback) == "function") callback();
						}
					}
					s[i].setAttribute("src", scripts[i]);
					HEAD.appendChild(s[i]);
				};
			recursiveLoad(0);
		},
		parallelLoadScripts: function(scripts, callback) {
			if(typeof(scripts) != "object") var scripts = [scripts];
			var HEAD = document.getElementsByTagName("head").item(0) || document.documentElement,
				s = new Array(),
				loaded = 0;
			for(var i = 0; i < scripts.length; i++) {
				s[i] = document.createElement("script");
				s[i].setAttribute("type", "text/javascript");
				s[i].onload = s[i].onreadystatechange = function() { //Attach handlers for all browsers
					if(! /*@cc_on!@*/ 0 || this.readyState == "loaded" || this.readyState == "complete") {
						loaded++;
						this.onload = this.onreadystatechange = null;
						this.parentNode.removeChild(this);
						if(loaded == scripts.length && typeof(callback) == "function") callback();
					}
				};
				s[i].setAttribute("src", scripts[i]);
				HEAD.appendChild(s[i]);
			}
		},

		setDeviceId: function(callback) {
			var _this = this;
			var deviceId = this.lStorage.get('deviceid');
			if(deviceId && deviceId != "") {
				return callback(deviceId);
			}

			new Fingerprint2().get(function(result, components) {
				_this._deviceId = result;
				_this.lStorage.set('deviceid', result);
				callback(result);
			});
		},

		getDeviceId: function() {
			var deviceId = this.lStorage.get('deviceid');
			return deviceId && deviceId != "" ? deviceId : "";
		},
		lStorage: {
			get: function(key) {
				return  store.namespace('__7R_').get(key);
			},
			set: function(key, value) {
				store.namespace('__7R_').set(key, value);
			},
			remove: function(key) {
				store.namespace('__7R_').remove(key);
			},
			clearAll: function() {
				store.namespace('__7R_').clearAll();
			}
		},
		ready: function(callback) {
			this._readyFn = callback;
			this.init();
		},
		CODE: {
			SUCCESS: 200,
			USER_DOES_NOT_EXIST: 1001, // 用户不存在
			ACCOUNT_OR_PWD_ERROR: 1002, //账户或者密码错误
			ILLEGAL_INPUT: 1003, //非法输入
			USERNAME_NOT_EXIST: 1005,
			RECHARGE_INIT: 3000,
			RECHARGE_CHECK_FAIL: 3002,
			RECHARGE_ING: 3003,
			NOT_ENOUGH_MONEY: 4001,
			REPEAT_ORDERS: 4002,
			RECHARGE_SUCCESS_BUY_FAIL: 4003,
			ORDER_NOT_EXIST: 4004,
			SERVER_ERROR: 5000
		},
		init: function() {
			var _this = this;
			this.inited = !0;
			wanGameUtil.url = wanGameUtil.urls.development;
			//setTimeout(function() {
				wanGameUtil.seriesLoadScripts(_this.dependScripts, function() {
					console.log('required javascript loaded~!');
					console.log(CryptoJS);
					_this.WG_STORE = store.namespace('__7R_');
					wanGameUtil.setDeviceId(function() {
						 _this._readyFn;
					});
				})
			//}, 10);
		},
		SHA1: function(value){
			return CryptoJS.SHA1(value).toString();
		},
		MD5: function(value){
			return CryptoJS.MD5(value).toString();
		},
	};
	win.wanGameUtil = wanGameUtil;
}(window, document, Math);
