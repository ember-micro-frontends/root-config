!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=3)}([function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return P})),n.d(e,"b",(function(){return N})),n.d(e,"c",(function(){return l})),n.d(e,"e",(function(){return Nt})),n.d(e,"f",(function(){return H})),n.d(e,"g",(function(){return Mt})),n.d(e,"h",(function(){return Tt})),n.d(e,"i",(function(){return f})),n.d(e,"j",(function(){return Bt}));var r=Object.freeze({__proto__:null,get start(){return Bt},get ensureJQuerySupport(){return dt},get setBootstrapMaxTime(){return J},get setMountMaxTime(){return Q},get setUnmountMaxTime(){return V},get setUnloadMaxTime(){return z},get registerApplication(){return Tt},get unregisterApplication(){return St},get getMountedApps(){return Ot},get getAppStatus(){return Nt},get unloadApplication(){return jt},get checkActivityFunctions(){return At},get getAppNames(){return Pt},get pathToActiveWhen(){return Mt},get navigateToUrl(){return ot},get triggerAppChange(){return It},get addErrorHandler(){return l},get removeErrorHandler(){return f},get mountRootParcel(){return H},get NOT_LOADED(){return h},get LOADING_SOURCE_CODE(){return m},get NOT_BOOTSTRAPPED(){return v},get BOOTSTRAPPING(){return w},get NOT_MOUNTED(){return g},get MOUNTING(){return y},get UPDATING(){return E},get LOAD_ERROR(){return P},get MOUNTED(){return b},get UNMOUNTING(){return O},get SKIP_BECAUSE_BROKEN(){return N}});function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{}).CustomEvent,u=function(){try{var t=new a("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?a:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,e){var n=document.createEvent("CustomEvent");return e?n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail):n.initCustomEvent(t,!1,!1,void 0),n}:function(t,e){var n=document.createEventObject();return n.type=t,e?(n.bubbles=Boolean(e.bubbles),n.cancelable=Boolean(e.cancelable),n.detail=e.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n},c=[];function s(t,e,n){var r=d(t,e,n);c.length?c.forEach((function(t){return t(r)})):setTimeout((function(){throw r}))}function l(t){if("function"!=typeof t)throw Error(p(28,!1));c.push(t)}function f(t){if("function"!=typeof t)throw Error(p(29,!1));var e=!1;return c=c.filter((function(n){var r=n===t;return e=e||r,!r})),e}function p(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return"single-spa minified message #".concat(t,": ").concat(e?e+" ":"","See https://single-spa.js.org/error/?code=").concat(t).concat(r.length?"&arg=".concat(r.join("&arg=")):"")}function d(t,e,n){var r,o="".concat(L(e)," '").concat(S(e),"' died in status ").concat(e.status,": ");if(t instanceof Error){try{t.message=o+t.message}catch(t){}r=t}else{console.warn(p(30,!1,e.status,S(e)));try{r=Error(o+JSON.stringify(t))}catch(e){r=t}}return r.appOrParcelName=S(e),e.status=n,r}var h="NOT_LOADED",m="LOADING_SOURCE_CODE",v="NOT_BOOTSTRAPPED",w="BOOTSTRAPPING",g="NOT_MOUNTED",y="MOUNTING",b="MOUNTED",E="UPDATING",O="UNMOUNTING",P="LOAD_ERROR",N="SKIP_BECAUSE_BROKEN";function T(t){return t.status===b}function A(t){try{return t.activeWhen(window.location)}catch(e){return s(e,t,N),!1}}function S(t){return t.name}function j(t){return Boolean(t.unmountThisParcel)}function L(t){return j(t)?"parcel":"application"}function _(){for(var t=arguments.length-1;t>0;t--)for(var e in arguments[t])"__proto__"!==e&&(arguments[t-1][e]=arguments[t][e]);return arguments[0]}function M(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return t[n];return null}function C(t){return t&&("function"==typeof t||(e=t,Array.isArray(e)&&!M(e,(function(t){return"function"!=typeof t}))));var e}function D(t,e){var n=t[e]||[];0===(n=Array.isArray(n)?n:[n]).length&&(n=[function(){return Promise.resolve()}]);var r=L(t),o=S(t);return function(t){return n.reduce((function(n,i,a){return n.then((function(){var n=i(t);return x(n)?n:Promise.reject(p(15,!1,r,o,e,a))}))}),Promise.resolve())}}function x(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}function I(t,e){return Promise.resolve().then((function(){return t.status!==v?t:(t.status=w,t.bootstrap?X(t,"bootstrap").then(n).catch((function(n){if(e)throw d(n,t,N);return s(n,t,N),t})):Promise.resolve().then(n))}));function n(){return t.status=g,t}}function U(t,e){return Promise.resolve().then((function(){if(t.status!==b)return t;t.status=O;var n=Object.keys(t.parcels).map((function(e){return t.parcels[e].unmountThisParcel()}));return Promise.all(n).then(r,(function(n){return r().then((function(){var r=Error(n.message);if(e)throw d(r,t,N);s(r,t,N)}))})).then((function(){return t}));function r(){return X(t,"unmount").then((function(){t.status=g})).catch((function(n){if(e)throw d(n,t,N);s(n,t,N)}))}}))}var W=!1,R=!1;function B(t,e){return Promise.resolve().then((function(){return t.status!==g?t:(W||(window.dispatchEvent(new u("single-spa:before-first-mount")),W=!0),X(t,"mount").then((function(){return t.status=b,R||(window.dispatchEvent(new u("single-spa:first-mount")),R=!0),t})).catch((function(n){return t.status=b,U(t,!0).then(r,r);function r(){if(e)throw d(n,t,N);return s(n,t,N),t}})))}))}var G=0,k={parcels:{}};function H(){return $.apply(k,arguments)}function $(t,e){var n=this;if(!t||"object"!==o(t)&&"function"!=typeof t)throw Error(p(2,!1));if(t.name&&"string"!=typeof t.name)throw Error(p(3,!1,o(t.name)));if("object"!==o(e))throw Error(p(4,!1,name,o(e)));if(!e.domElement)throw Error(p(5,!1,name));var r,i=G++,a="function"==typeof t,u=a?t:function(){return Promise.resolve(t)},c={id:i,parcels:{},status:a?m:v,customProps:e,parentName:S(n),unmountThisParcel:function(){if(c.status!==b)throw Error(p(6,!1,name,c.status));return U(c,!0).then((function(t){return c.parentName&&delete n.parcels[c.id],t})).then((function(t){return l(t),t})).catch((function(t){throw c.status=N,f(t),t}))}};n.parcels[i]=c;var s=u();if(!s||"function"!=typeof s.then)throw Error(p(7,!1));var l,f,h=(s=s.then((function(t){if(!t)throw Error(p(8,!1));var e=t.name||"parcel-".concat(i);if(Object.prototype.hasOwnProperty.call(t,"bootstrap")&&!C(t.bootstrap))throw Error(p(9,!1,e));if(!C(t.mount))throw Error(p(10,!1,e));if(!C(t.unmount))throw Error(p(11,!1,e));if(t.update&&!C(t.update))throw Error(p(12,!1,e));var n=D(t,"bootstrap"),o=D(t,"mount"),a=D(t,"unmount");c.status=v,c.name=e,c.bootstrap=n,c.mount=o,c.unmount=a,c.timeouts=Y(t.timeouts),t.update&&(c.update=D(t,"update"),r.update=function(t){return c.customProps=t,q(function(t){return Promise.resolve().then((function(){if(t.status!==b)throw Error(p(32,!1,S(t)));return t.status=E,X(t,"update").then((function(){return t.status=b,t})).catch((function(e){throw d(e,t,N)}))}))}(c))})}))).then((function(){return I(c,!0)})),w=h.then((function(){return B(c,!0)})),y=new Promise((function(t,e){l=t,f=e}));return r={mount:function(){return q(Promise.resolve().then((function(){if(c.status!==g)throw Error(p(13,!1,name,c.status));return n.parcels[i]=c,B(c)})))},unmount:function(){return q(c.unmountThisParcel())},getStatus:function(){return c.status},loadPromise:q(s),bootstrapPromise:q(h),mountPromise:q(w),unmountPromise:q(y)}}function q(t){return t.then((function(){return null}))}function F(t){var e=S(t),n="function"==typeof t.customProps?t.customProps(e,window.location):t.customProps;("object"!==o(n)||null===n||Array.isArray(n))&&(n={},console.warn(p(40,!1),e,n));var i=_({},n,{name:e,mountParcel:$.bind(t),singleSpa:r});return j(t)&&(i.unmountSelf=t.unmountThisParcel),i}var K={bootstrap:{millis:4e3,dieOnTimeout:!1,warningMillis:1e3},mount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unmount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unload:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},update:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3}};function J(t,e,n){if("number"!=typeof t||t<=0)throw Error(p(16,!1));K.bootstrap={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function Q(t,e,n){if("number"!=typeof t||t<=0)throw Error(p(17,!1));K.mount={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function V(t,e,n){if("number"!=typeof t||t<=0)throw Error(p(18,!1));K.unmount={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function z(t,e,n){if("number"!=typeof t||t<=0)throw Error(p(19,!1));K.unload={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function X(t,e){var n=t.timeouts[e],r=n.warningMillis,o=L(t);return new Promise((function(i,a){var u=!1,c=!1;t[e](F(t)).then((function(t){u=!0,i(t)})).catch((function(t){u=!0,a(t)})),setTimeout((function(){return l(1)}),r),setTimeout((function(){return l(!0)}),n.millis);var s=p(31,!1,e,o,S(t),n.millis);function l(t){if(!u)if(!0===t)c=!0,n.dieOnTimeout?a(Error(s)):console.error(s);else if(!c){var e=t,o=e*r;console.warn(s),o+r<n.millis&&setTimeout((function(){return l(e+1)}),r)}}}))}function Y(t){var e={};for(var n in K)e[n]=_({},K[n],t&&t[n]||{});return e}function Z(t){return Promise.resolve().then((function(){return t.loadPromise?t.loadPromise:t.status!==h&&t.status!==P?t:(t.status=m,t.loadPromise=Promise.resolve().then((function(){var r=t.loadApp(F(t));if(!x(r))throw n=!0,Error(p(33,!1,S(t)));return r.then((function(n){var r;t.loadErrorTime=null,"object"!==o(e=n)&&(r=34),Object.prototype.hasOwnProperty.call(e,"bootstrap")&&!C(e.bootstrap)&&(r=35),C(e.mount)||(r=36),C(e.unmount)||(r=37);var i=L(e);if(r){var a;try{a=JSON.stringify(e)}catch(t){}return console.error(p(r,!1,i,S(t),a),e),s(void 0,t,N),t}return e.devtools&&e.devtools.overlays&&(t.devtools.overlays=_({},t.devtools.overlays,e.devtools.overlays)),t.status=v,t.bootstrap=D(e,"bootstrap"),t.mount=D(e,"mount"),t.unmount=D(e,"unmount"),t.unload=D(e,"unload"),t.timeouts=Y(e.timeouts),delete t.loadPromise,t}))})).catch((function(e){var r;return delete t.loadPromise,n?r=N:(r=P,t.loadErrorTime=(new Date).getTime()),s(e,t,r),t})));var e,n}))}var tt,et="undefined"!=typeof window,nt={hashchange:[],popstate:[]},rt=["hashchange","popstate"];function ot(t){var e;if("string"==typeof t)e=t;else if(this&&this.href)e=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error(p(14,!1));e=t.currentTarget.href,t.preventDefault()}var n=ft(window.location.href),r=ft(e);0===e.indexOf("#")?window.location.hash=r.hash:n.host!==r.host&&r.host?window.location.href=e:r.pathname===n.pathname&&r.search===n.search?window.location.hash=r.hash:window.history.pushState(null,null,e)}function it(t){var e=this;if(t){var n=t[0].type;rt.indexOf(n)>=0&&nt[n].forEach((function(n){try{n.apply(e,t)}catch(t){setTimeout((function(){throw t}))}}))}}function at(){Ut([],arguments)}function ut(t,e){return function(){var n=window.location.href,r=t.apply(this,arguments),o=window.location.href;return tt&&n===o||at(ct(window.history.state,e)),r}}function ct(t,e){var n;try{n=new PopStateEvent("popstate",{state:t})}catch(e){(n=document.createEvent("PopStateEvent")).initPopStateEvent("popstate",!1,!1,t)}return n.singleSpa=!0,n.singleSpaTrigger=e,n}if(et){window.addEventListener("hashchange",at),window.addEventListener("popstate",at);var st=window.addEventListener,lt=window.removeEventListener;window.addEventListener=function(t,e){if(!("function"==typeof e&&rt.indexOf(t)>=0)||M(nt[t],(function(t){return t===e})))return st.apply(this,arguments);nt[t].push(e)},window.removeEventListener=function(t,e){if(!("function"==typeof e&&rt.indexOf(t)>=0))return lt.apply(this,arguments);nt[t]=nt[t].filter((function(t){return t!==e}))},window.history.pushState=ut(window.history.pushState,"pushState"),window.history.replaceState=ut(window.history.replaceState,"replaceState"),window.singleSpaNavigate?console.warn(p(41,!1)):window.singleSpaNavigate=ot}function ft(t){var e=document.createElement("a");return e.href=t,e}var pt=!1;function dt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!pt){var e=t.fn.on,n=t.fn.off;t.fn.on=function(t,n){return ht.call(this,e,window.addEventListener,t,n,arguments)},t.fn.off=function(t,e){return ht.call(this,n,window.removeEventListener,t,e,arguments)},pt=!0}}function ht(t,e,n,r,o){return"string"!=typeof n?t.apply(this,o):(n.split(/\s+/).forEach((function(t){rt.indexOf(t)>=0&&(e(t,r),n=n.replace(t,""))})),""===n.trim()?this:t.apply(this,o))}var mt={};function vt(t){return Promise.resolve().then((function(){var e=mt[S(t)];return e?t.status===h?(wt(t,e),t):"UNLOADING"===t.status?e.promise.then((function(){return t})):t.status!==g?t:(t.status="UNLOADING",X(t,"unload").then((function(){return wt(t,e),t})).catch((function(n){return function(t,e,n){delete mt[S(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,s(n,t,N),e.reject(n)}(t,e,n),t}))):t}))}function wt(t,e){delete mt[S(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=h,e.resolve()}function gt(t,e,n,r){mt[S(t)]={app:t,resolve:n,reject:r},Object.defineProperty(mt[S(t)],"promise",{get:e})}function yt(t){return mt[t]}var bt=[];function Et(){var t=[],e=[],n=[],r=[],o=(new Date).getTime();return bt.forEach((function(i){var a=i.status!==N&&A(i);switch(i.status){case P:a&&o-i.loadErrorTime>=200&&n.push(i);break;case h:case m:a&&n.push(i);break;case v:case g:!a&&yt(S(i))?t.push(i):a&&r.push(i);break;case b:a||e.push(i)}})),{appsToUnload:t,appsToUnmount:e,appsToLoad:n,appsToMount:r}}function Ot(){return bt.filter(T).map(S)}function Pt(){return bt.map(S)}function Nt(t){var e=M(bt,(function(e){return S(e)===t}));return e?e.status:null}function Tt(t,e,n,r){var i=function(t,e,n,r){var i,a={name:null,loadApp:null,activeWhen:null,customProps:null};return"object"===o(t)?(function(t){if(Array.isArray(t)||null===t)throw Error(p(39,!1));var e=["name","app","activeWhen","customProps"],n=Object.keys(t).reduce((function(t,n){return e.indexOf(n)>=0?t:t.concat(n)}),[]);if(0!==n.length)throw Error(p(38,!1,e.join(", "),n.join(", ")));if("string"!=typeof t.name||0===t.name.length)throw Error(p(20,!1));if("object"!==o(t.app)&&"function"!=typeof t.app)throw Error(p(20,!1));var r=function(t){return"string"==typeof t||"function"==typeof t};if(!(r(t.activeWhen)||Array.isArray(t.activeWhen)&&t.activeWhen.every(r)))throw Error(p(24,!1));if(!_t(t.customProps))throw Error(p(22,!1))}(t),a.name=t.name,a.loadApp=t.app,a.activeWhen=t.activeWhen,a.customProps=t.customProps):(function(t,e,n,r){if("string"!=typeof t||0===t.length)throw Error(p(20,!1));if(!e)throw Error(p(23,!1));if("function"!=typeof n)throw Error(p(24,!1));if(!_t(r))throw Error(p(22,!1))}(t,e,n,r),a.name=t,a.loadApp=e,a.activeWhen=n,a.customProps=r),a.loadApp="function"!=typeof(i=a.loadApp)?function(){return Promise.resolve(i)}:i,a.customProps=function(t){return t||{}}(a.customProps),a.activeWhen=function(t){var e=Array.isArray(t)?t:[t];return e=e.map((function(t){return"function"==typeof t?t:Mt(t)})),function(t){return e.some((function(e){return e(t)}))}}(a.activeWhen),a}(t,e,n,r);if(-1!==Pt().indexOf(i.name))throw Error(p(21,!1,i.name));bt.push(_({loadErrorTime:null,status:h,parcels:{},devtools:{overlays:{options:{},selectors:[]}}},i)),et&&(dt(),Ut())}function At(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location;return bt.filter((function(e){return e.activeWhen(t)})).map(S)}function St(t){if(0===bt.filter((function(e){return S(e)===t})).length)throw Error(p(25,!1,t));return jt(t).then((function(){var e=bt.map(S).indexOf(t);bt.splice(e,1)}))}function jt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if("string"!=typeof t)throw Error(p(26,!1));var n=M(bt,(function(e){return S(e)===t}));if(!n)throw Error(p(27,!1,t));var r,o=yt(S(n));if(e&&e.waitForUnmount){if(o)return o.promise;var i=new Promise((function(t,e){gt(n,(function(){return i}),t,e)}));return i}return o?(r=o.promise,Lt(n,o.resolve,o.reject)):r=new Promise((function(t,e){gt(n,(function(){return r}),t,e),Lt(n,t,e)})),r}function Lt(t,e,n){U(t).then(vt).then((function(){e(),setTimeout((function(){Ut()}))})).catch(n)}function _t(t){return!t||"function"==typeof t||"object"===o(t)&&null!==t&&!Array.isArray(t)}function Mt(t){var e=function(t){var e=0,n=!1,r="^";"/"!==t[0]&&(t="/"+t);for(var o=0;o<t.length;o++){var i=t[o];(!n&&":"===i||n&&"/"===i)&&a(o)}return a(t.length),new RegExp(r,"i");function a(o){var i=t.slice(e,o).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");r+=n?"[^/]+/?":i,o!==t.length||n||(r="/"===r.charAt(r.length-1)?"".concat(r,".*$"):"".concat(r,"([/#].*)?$")),n=!n,e=o}}(t);return function(t){var n=t.href.replace(t.origin,"").replace(t.search,"").split("?")[0];return e.test(n)}}var Ct=!1,Dt=[],xt=et&&window.location.href;function It(){return Ut()}function Ut(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;if(Ct)return new Promise((function(t,n){Dt.push({resolve:t,reject:n,eventArguments:e})}));var n,r=Et(),o=r.appsToUnload,a=r.appsToUnmount,c=r.appsToLoad,s=r.appsToMount,l=!1,f=xt,p=xt=window.location.href;return Gt()?(Ct=!0,n=o.concat(c,a,s),v()):(n=c,m());function d(){l=!0}function m(){return Promise.resolve().then((function(){var t=c.map(Z);return Promise.all(t).then(y).then((function(){return[]})).catch((function(t){throw y(),t}))}))}function v(){return Promise.resolve().then((function(){if(window.dispatchEvent(new u(0===n.length?"single-spa:before-no-app-change":"single-spa:before-app-change",E(!0))),window.dispatchEvent(new u("single-spa:before-routing-event",E(!0,{cancelNavigation:d}))),l)return window.dispatchEvent(new u("single-spa:before-mount-routing-event",E(!0))),w(),void ot(f);var e=o.map(vt),r=a.map(U).map((function(t){return t.then(vt)})).concat(e),i=Promise.all(r);i.then((function(){window.dispatchEvent(new u("single-spa:before-mount-routing-event",E(!0)))}));var p=c.map((function(t){return Z(t).then((function(t){return Wt(t,i)}))})),h=s.filter((function(t){return c.indexOf(t)<0})).map((function(t){return Wt(t,i)}));return i.catch((function(t){throw y(),t})).then((function(){return y(),Promise.all(p.concat(h)).catch((function(e){throw t.forEach((function(t){return t.reject(e)})),e})).then(w)}))}))}function w(){var e=Ot();t.forEach((function(t){return t.resolve(e)}));try{var r=0===n.length?"single-spa:no-app-change":"single-spa:app-change";window.dispatchEvent(new u(r,E())),window.dispatchEvent(new u("single-spa:routing-event",E()))}catch(t){setTimeout((function(){throw t}))}if(Ct=!1,Dt.length>0){var o=Dt;Dt=[],Ut(o)}return e}function y(){t.forEach((function(t){it(t.eventArguments)})),it(e)}function E(){var t,r=arguments.length>0&&void 0!==arguments[0]&&arguments[0],u=arguments.length>1?arguments[1]:void 0,d={},m=(i(t={},b,[]),i(t,g,[]),i(t,h,[]),i(t,N,[]),t);r?(c.concat(s).forEach((function(t,e){w(t,b)})),o.forEach((function(t){w(t,h)})),a.forEach((function(t){w(t,g)}))):n.forEach((function(t){w(t)}));var v={detail:{newAppStatuses:d,appsByNewStatus:m,totalAppChanges:n.length,originalEvent:null==e?void 0:e[0],oldUrl:f,newUrl:p,navigationIsCanceled:l}};return u&&_(v.detail,u),v;function w(t,e){var n=S(t);e=e||Nt(n),d[n]=e,(m[e]=m[e]||[]).push(n)}}}function Wt(t,e){return A(t)?I(t).then((function(t){return e.then((function(){return A(t)?B(t):t}))})):e.then((function(){return t}))}var Rt=!1;function Bt(t){var e;Rt=!0,t&&t.urlRerouteOnly&&(e=t.urlRerouteOnly,tt=e),et&&Ut()}function Gt(){return Rt}et&&setTimeout((function(){Rt||console.warn(p(1,!1))}),5e3);var kt={getRawAppData:function(){return[].concat(bt)},reroute:Ut,NOT_LOADED:h,toLoadPromise:Z,toBootstrapPromise:I,unregisterApplication:St};et&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=kt)}).call(this,n(2))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=function(t){if("object"!==(void 0===t?"undefined":o(t)))throw new Error("single-spa-ember requires a configuration object");var e=r({},i,t);if(!e.App)throw new Error("single-spa-ember must be passed opts.App");if(e.createOpts&&"object"!==o(e.createOpts))throw new Error("single-spa-ember: createOpts must be an object to be passed to App.create()");return{bootstrap:a.bind(null,e),mount:u.bind(null,e),unmount:c.bind(null,e)}},e.loadEmberApp=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new Promise((function(r,o){if("string"==typeof t)if("string"==typeof e)if(n&&"string"!=typeof n)o(new Error("single-spa-ember vendorUrl (the third argument) is optional, but must be a string if present"));else if(n){var i=document.createElement("script");i.src=n,i.async=!0,i.onload=a,i.onerror=o,document.head.appendChild(i)}else a();else o(new Error("single-spa-ember requires an appUrl string as the second argument"));else o(new Error("single-spa-ember requires an appName string as the first argument"));function a(){var n=document.createElement("script");n.src=e,n.async=!0,n.onload=function(){r(window.require(t+"/app"))},n.onerror=o,document.head.appendChild(n)}}))};var i={App:null,createOpts:{}};function a(t){return Promise.resolve()}function u(t){return Promise.resolve().then((function(){t.applicationInstance=t.App.create(t.createOpts)}))}function c(t){return Promise.resolve().then((function(){t.applicationInstance.destroy(),t.applicationInstance=null}))}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var r=n(0);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c="undefined"!=typeof window;function s(t,e){if("object"!==o(e)||Array.isArray(e)||null===e)throw Error("Invalid ".concat(t,": received ").concat(Array.isArray(e)?"array":e," but expected a plain object"))}function l(t,e,n,r){if(!r){var o=Object.keys(e),i=[];o.forEach((function(t){n.indexOf(t)<0&&i.push(t)})),i.length>0&&console.warn(Error("Invalid ".concat(t,": received invalid properties '").concat(i.join(", "),"', but valid properties are ").concat(n.join(", "))))}}function f(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("string"!=typeof e||n&&""===e.trim())throw Error("Invalid ".concat(t,": received '").concat(e,"', but expected a").concat(n?" non-blank":""," string"))}function p(t,e,n){if(!Array.isArray(e)&&("object"!==o(o(e))||"number"!==e.length))throw Error("Invalid ".concat(t,": received '").concat(e,"', but expected an array"));for(var r=arguments.length,i=new Array(r>3?r-3:0),a=3;a<r;a++)i[a-3]=arguments[a];for(var u=0;u<e.length;u++)n.apply(void 0,[e[u],"".concat(t,"[").concat(u,"]")].concat(i))}function d(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return t[n];return null}var h=r.default?r.default.pathToActiveWhen:r.g,m="undefined"!=typeof Symbol?Symbol():"@";function v(t,e){if(c)return t.getAttribute(e);var n=d(t.attrs,(function(t){return t.name===e.toLowerCase()}));return n?n.value:null}function w(t,e){if("application"===t.nodeName.toLowerCase()){if(t.childNodes.length>0)throw Error("<application> elements must not have childNodes. You must put in a closing </application> - self closing is not allowed");var n={type:"application",name:v(t,"name")},r=v(t,"loader");if(r)if(e.loaders&&e.loaders.hasOwnProperty(r))n.loader=e.loaders[r];else if(c)throw Error("Application loader '".concat(r,"' was not defined in the htmlLayoutData"));var o=v(t,"error");if(o)if(e.errors&&e.errors.hasOwnProperty(o))n.error=e.errors[o];else if(c)throw Error("Application error handler '".concat(r,"' was not defined in the htmlLayoutData"));return g(t,n,e),[n]}if("route"===t.nodeName.toLowerCase()){var a={type:"route",routes:[]},u=v(t,"path");u&&(a.path=u),function(t,e){return c?t.hasAttribute(e):t.attrs.some((function(t){return t.name===e}))}(t,"default")&&(a.default=!0),g(t,a,e);for(var s=0;s<t.childNodes.length;s++){var l;(l=a.routes).push.apply(l,i(w(t.childNodes[s],e)))}return[a]}if("undefined"!=typeof Node&&t instanceof Node){if(t.nodeType===Node.TEXT_NODE&&""===t.textContent.trim())return[];if(t.childNodes&&t.childNodes.length>0){t.routes=[];for(var f=0;f<t.childNodes.length;f++){var p;(p=t.routes).push.apply(p,i(w(t.childNodes[f],e)))}}return[t]}if(t.childNodes){for(var d={type:t.nodeName.toLowerCase(),routes:[],attrs:t.attrs},h=0;h<t.childNodes.length;h++){var m;(m=d.routes).push.apply(m,i(w(t.childNodes[h],e)))}return[d]}return"#comment"===t.nodeName?[{type:"#comment",value:t.data}]:"#text"===t.nodeName?[{type:"#text",value:t.value}]:void 0}function g(t,e,n){for(var r=(v(t,"props")||"").split(","),o=0;o<r.length;o++){var i=r[o].trim();if(0!==i.length)if(e.props||(e.props={}),n.props&&n.props.hasOwnProperty(i))e.props[i]=n.props[i];else{if(c)throw Error("Prop '".concat(i,"' was not defined in the htmlLayoutData. Either remove this attribute from the HTML element or provide the prop's value"));e.props[i]=m}}}function y(t){return{bootstrap:function(){return Promise.resolve()},mount:function(e){return Promise.resolve().then((function(){e.domElement.innerHTML=t}))},unmount:function(t){return Promise.resolve().then((function(){t.domElement.innerHTML=""}))}}}function b(t,e,n){n&&n.nextSibling?n.parentNode.insertBefore(t,n.nextSibling):e.appendChild(t)}function E(t){return"single-spa-application:".concat(t)}function O(t){return t===r.b||t===r.a}var P=n(1);(function(t){var e=t.routes,n=(t.applications,t.active),o=void 0===n||n,i=!1,a=[],u={},s=e.base.slice(0,e.base.length-1),l={isActive:function(){return i},activate:function(){i||(i=!0,c&&(window.addEventListener("single-spa:before-routing-event",p),window.addEventListener("single-spa:before-mount-routing-event",d),window.addEventListener("single-spa:routing-event",h),Object(r.c)(f),d()))},deactivate:function(){i&&(i=!1,c&&(window.removeEventListener("single-spa:before-routing-event",p),window.removeEventListener("single-spa:before-mount-routing-event",d),window.removeEventListener("single-spa:routing-event",h),Object(r.i)(f)))}};return o&&l.activate(),l;function f(t){var n=function t(e){for(var n=e.applicationName,r=e.location,o=e.routes,i=0;i<o.length;i++){var a=o[i];if("application"===a.type){if(a.name===n)return a}else if("route"===a.type){if(a.activeWhen(r)){var u=t({applicationName:n,location:r,routes:a.routes});if(u)return u}}else if(a.routes){var c=t({applicationName:n,location:r,routes:a.routes});if(c)return c}}}({applicationName:t.appOrParcelName,location:window.location,routes:e.routes});if(n&&n.error){var o=document.getElementById(E(n.name)),i="string"==typeof n.error?y(n.error):n.error;u[n.name]=Object(r.f)(i,{domElement:o})}}function p(t){var e=t.detail.newAppStatuses;for(var n in e)u[n]&&O(Object(r.e)(n))&&!O(e[n])&&(u[n].unmount(),delete u[n])}function d(){if(0===location["hash"===e.mode?"hash":"pathname"].indexOf(s)){var t="string"==typeof e.containerEl?document.querySelector(e.containerEl):e.containerEl;!function t(e){var n=e.location,r=e.routes,o=e.parentContainer,i=e.previousSibling,a=e.shouldMount,u=e.pendingRemovals;return r.forEach((function(e,r){if("application"===e.type){var c=E(e.name),s=document.getElementById(c);a&&(s||((s=document.createElement("div")).id=c),b(s,o,i),i=s)}else if("route"===e.type)i=t({location:n,routes:e.routes,parentContainer:o,previousSibling:i,shouldMount:a&&e.activeWhen(n),pendingRemovals:u});else if(e instanceof Node||"string"==typeof e.type)if(a){if(!e.connectedNode){var l=e instanceof Node?e.cloneNode(!1):function t(e){if("#text"===e.type.toLowerCase())return document.createTextNode(e.value);if("#comment"===e.type.toLowerCase())return document.createComment(e.value);var n=document.createElement(e.type);return(e.attrs||[]).forEach((function(t){n.setAttribute(t.name,t.value)})),n.routes&&n.routes.forEach((function(e){n.appendChild(t(e))})),n}(e);e.connectedNode=l}b(e.connectedNode,o,i),e.routes&&t({location:n,routes:e.routes,parentContainer:e.connectedNode,previousSibling:null,shouldMount:a,pendingRemovals:u}),i=e.connectedNode}else u.push((function(){var t;(t=e.connectedNode)&&(t.remove?t.remove():t.parentNode.removeChild(t)),delete e.connectedNode}))})),i}({location:window.location,routes:e.routes,parentContainer:t,shouldMount:!0,pendingRemovals:a})}}function h(t){var e=t.detail.appsByNewStatus;a.forEach((function(t){return t()})),a=[],e.NOT_MOUNTED.concat(e.NOT_LOADED).forEach((function(t){var e=document.getElementById(E(t));e&&e.isConnected&&e.parentNode.removeChild(e)}))}})({routes:function(t,e){if(t&&t.nodeName)c&&!e&&window.singleSpaLayoutData&&(e=window.singleSpaLayoutData),t=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("template"===t.nodeName.toLowerCase()&&(t=(t.content||t).querySelector("single-spa-router")),"single-spa-router"!==t.nodeName.toLowerCase())throw Error("single-spa-layout: The HTMLElement passed to constructRoutes must be <single-spa-router> or a <template> containing the router. Received ".concat(t.nodeName));c&&t.isConnected&&t.parentNode.removeChild(t);var n={routes:[]};v(t,"mode")&&(n.mode=v(t,"mode")),v(t,"base")&&(n.base=v(t,"base")),v(t,"containerEl")&&(n.containerEl=v(t,"containerEl"));for(var r=0;r<t.childNodes.length;r++){var o;(o=n.routes).push.apply(o,i(w(t.childNodes[r],e)))}return n}(t,e);else if(e)throw Error("constructRoutes should be called either with an HTMLElement and layoutData, or a single json object.");return function(t){s("routesConfig",t);var e,n=t.disableWarnings;l("routesConfig",t,["mode","base","containerEl","routes","disableWarnings"],n),t.hasOwnProperty("containerEl")?function(t,e){if("string"==typeof e?""===e.trim():!(c&&e instanceof HTMLElement))throw Error("Invalid ".concat("routesConfig.containerEl",": received ").concat(e," but expected either non-blank string or HTMLElement"))}(0,t.containerEl):t.containerEl="body",t.hasOwnProperty("mode")||(t.mode="history"),function(t,e,n){if(n.indexOf(e)<0)throw Error("Invalid ".concat("routesConfig.mode",": received '").concat(e,"' but expected ").concat(n.join(", ")))}(0,t.mode,["history","hash"]),t.hasOwnProperty("base")?(f("routesConfig.base",t.base),t.base=(0!==(e=t.base).indexOf("/")&&(e="/"+e),"/"!==e[e.length-1]&&(e+="/"),e)):t.base="/";var r=c?window.location.pathname:"/",i="hash"===t.mode?r+"#":"";p("routesConfig.routes",t.routes,(function t(e,r,i){var a,u,c,d,m=i.parentPath,v=i.siblingActiveWhens;if(s(r,e),"application"===e.type)l(r,e,["type","name","props","loader","error"],n),e.props&&s("".concat(r,".props"),e.props),f("".concat(r,".name"),e.name);else if("route"===e.type){l(r,e,["type","path","routes","props","default"],n);var w,g=e.hasOwnProperty("path"),y=e.hasOwnProperty("default");if(g)f("".concat(r,".path"),e.path),u=m,c=e.path,"/"===(d="/"===u.substr(-1)?"/"===c[0]?u+c.slice(1):u+c:"/"===c[0]?u+c:u+"/"+c).substr(-1)&&(d=d.slice(0,d.length-1)),w=d,e.activeWhen=h(w),v.push(e.activeWhen);else{if(!y)throw Error("Invalid ".concat(r,": routes must have either a path or default property."));!function(t,e){if("boolean"!=typeof e)throw Error("Invalid ".concat(t,": received ").concat(o(e),", but expected a boolean"))}("".concat(r,".default"),e.default),w=m,e.activeWhen=(a=v,function(t){return!a.some((function(e){return e(t)}))})}if(g&&y&&e.default)throw Error("Invalid ".concat(r,": cannot have both path and set default to true."));e.routes&&p("".concat(r,".routes"),e.routes,t,{parentPath:w,siblingActiveWhens:[]})}else{if("undefined"!=typeof Node&&e instanceof Node);else for(var b in e)"routes"!==b&&"attrs"!==b&&f("".concat(r,"['").concat(b,"']"),e[b],!1);e.routes&&p("".concat(r,".routes"),e.routes,t,{parentPath:m,siblingActiveWhens:v})}}),{parentPath:i+t.base,siblingActiveWhens:[]}),delete t.disableWarnings}(t),t}(document.querySelector("#single-spa-layout")),applications:[Object(r.h)("planets",(function(){return Object(P.loadEmberApp)("planets","https://ember-micro-frontends.github.io/planets/assets/planets.js","https://ember-micro-frontends.github.io/planets/assets/vendor.js")}),(function(t){return t.pathname.startsWith("/root-config/planets")})),Object(r.h)("people",(function(){return Object(P.loadEmberApp)("people","https://ember-micro-frontends.github.io/people/assets/people.js","https://ember-micro-frontends.github.io/people/assets/vendor.js")}),(function(t){return t.pathname.startsWith("/root-config/people")}))]}).activate(),Object(r.j)()}]);
//# sourceMappingURL=root-application.js.map