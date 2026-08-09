var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.6`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=re,w=function(){ae.postMessage(null)}}else w=function(){_(re,0)};function oe(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.6`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function D(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function O(e,t){pe++,fe[pe]=e.current,e.current=t}var he=me(null),k=me(null),ge=me(null),_e=me(null);function ve(e,t){switch(O(ge,t),O(k,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}D(he),O(he,e)}function ye(){D(he),D(k),D(ge)}function be(e){e.memoizedState!==null&&O(_e,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(k,e),O(he,n))}function xe(e){k.current===e&&(D(he),D(k)),_e.current===e&&(D(_e),Qf._currentValue=de)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function pt(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var mt=Math.random().toString(36).slice(2),ht=`__reactFiber$`+mt,gt=`__reactProps$`+mt,_t=`__reactContainer$`+mt,vt=`__reactEvents$`+mt,yt=`__reactListeners$`+mt,bt=`__reactHandles$`+mt,xt=`__reactResources$`+mt,St=`__reactMarker$`+mt;function Ct(e){delete e[ht],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ht])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[ht]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ot(e){e[St]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return ke.call(Ft,e)?!0:ke.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(ue(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&nn(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&nn(e,a,t[a])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[gt]||null;if(!i)throw Error(s(90));Jt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,`passive`,{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(h({},In,{dataTransfer:0})),zn=On(h({},jn,{relatedTarget:0})),Bn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(h({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(h({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=On(h({},kn,{newState:0,oldState:0})),er=[9,13,27,32],tr=vn&&`CompositionEvent`in window,nr=null;vn&&`documentMode`in document&&(nr=document.documentMode);var rr=vn&&`TextEvent`in window&&!nr,ir=vn&&(!tr||nr&&8<nr&&11>=nr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!tr&&sr(e,t)?(e=wn(),Cn=Sn=xn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){yd(e,0)}function vr(e){if(Wt(Et(e)))return e}function yr(e,t){if(e===`change`)return t}var br=!1;if(vn){var xr;if(vn){var Sr=`oninput`in document;if(!Sr){var Cr=document.createElement(`div`);Cr.setAttribute(`oninput`,`return;`),Sr=typeof Cr.oninput==`function`}xr=Sr}else xr=!1;br=xr&&(!document.documentMode||9<document.documentMode)}function wr(){hr&&(hr.detachEvent(`onpropertychange`,Tr),gr=hr=null)}function Tr(e){if(e.propertyName===`value`&&vr(gr)){var t=[];mr(t,gr,e,dn(e)),gn(_r,t)}}function Er(e,t,n){e===`focusin`?(wr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,Tr)):e===`focusout`&&wr()}function Dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return vr(gr)}function Or(e,t){if(e===`click`)return vr(t)}function kr(e,t){if(e===`input`||e===`change`)return vr(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var jr=typeof Object.is==`function`?Object.is:Ar;function Mr(e,t){if(jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!jr(e[i],t[i]))return!1}return!0}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pr(e,t){var n=Nr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Nr(n)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Rr=vn&&`documentMode`in document&&11>=document.documentMode,zr=null,Br=null,Vr=null,Hr=!1;function Ur(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||zr==null||zr!==Gt(r)||(r=zr,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Mr(Vr,r)||(Vr=r,r=Ed(Br,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Gr={animationend:Wr(`Animation`,`AnimationEnd`),animationiteration:Wr(`Animation`,`AnimationIteration`),animationstart:Wr(`Animation`,`AnimationStart`),transitionrun:Wr(`Transition`,`TransitionRun`),transitionstart:Wr(`Transition`,`TransitionStart`),transitioncancel:Wr(`Transition`,`TransitionCancel`),transitionend:Wr(`Transition`,`TransitionEnd`)},Kr={},qr={};vn&&(qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),`TransitionEvent`in window||delete Gr.transitionend.transition);function Jr(e){if(Kr[e])return Kr[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qr)return Kr[e]=t[n];return e}var Yr=Jr(`animationend`),Xr=Jr(`animationiteration`),Zr=Jr(`animationstart`),Qr=Jr(`transitionrun`),$r=Jr(`transitionstart`),ei=Jr(`transitioncancel`),ti=Jr(`transitionend`),ni=new Map,ri=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ri.push(`scrollEnd`);function ii(e,t){ni.set(e,t),jt(t,[e])}var ai=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},oi=[],si=0,ci=0;function li(){for(var e=si,t=ci=si=0;t<e;){var n=oi[t];oi[t++]=null;var r=oi[t];oi[t++]=null;var i=oi[t];oi[t++]=null;var a=oi[t];if(oi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&pi(n,i,a)}}function ui(e,t,n,r){oi[si++]=e,oi[si++]=t,oi[si++]=n,oi[si++]=r,ci|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function di(e,t,n,r){return ui(e,t,n,r),mi(e)}function fi(e,t){return ui(e,null,null,t),mi(e)}function pi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function mi(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function gi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(e,t,n,r){return new gi(e,t,n,r)}function vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yi(e,t){var n=e.alternate;return n===null?(n=_i(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xi(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)vi(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=_i(31,n,t,i),e.elementType=ie,e.lanes=a,e;case y:return Si(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=_i(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case te:return e=_i(13,n,t,i),e.elementType=te,e.lanes=a,e;case ne:return e=_i(19,n,t,i),e.elementType=ne,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:o=10;break a;case ee:o=9;break a;case C:o=11;break a;case re:o=14;break a;case w:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=_i(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Si(e,t,n,r){return e=_i(7,e,r,t),e.lanes=n,e}function Ci(e,t,n){return e=_i(6,e,null,t),e.lanes=n,e}function wi(e){var t=_i(18,null,null,0);return t.stateNode=e,t}function Ti(e,t,n){return t=_i(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ei=new WeakMap;function Di(e,t){if(typeof e==`object`&&e){var n=Ei.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},Ei.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Oi=[],ki=0,Ai=null,ji=0,Mi=[],Ni=0,Pi=null,Fi=1,Ii=``;function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Ai,Ai=e,ji=t}function Ri(e,t,n){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Pi=e;var r=Fi;e=Ii;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fi=1<<32-Ke(t)+i|n<<i|r,Ii=a+e}else Fi=1<<a|n<<i|r,Ii=e}function zi(e){e.return!==null&&(Li(e,1),Ri(e,1,0))}function Bi(e){for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null;for(;e===Pi;)Pi=Mi[--Ni],Mi[Ni]=null,Ii=Mi[--Ni],Mi[Ni]=null,Fi=Mi[--Ni],Mi[Ni]=null}function Vi(e,t){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Fi=t.id,Ii=t.overflow,Pi=e}var Hi=null,A=null,j=!1,Ui=null,Wi=!1,Gi=Error(s(519));function Ki(e){throw Qi(Di(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Gi}function qi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ht]=e,t[gt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Ki(e,!0)}function Ji(e){for(Hi=e.return;Hi;)switch(Hi.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Hi=Hi.return}}function Yi(e){if(e!==Hi)return!1;if(!j)return Ji(e),j=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&A&&Ki(e),Ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));A=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));A=uf(e)}else t===27?(t=A,Zd(e.type)?(e=lf,lf=null,A=e):A=t):A=Hi?cf(e.stateNode.nextSibling):null;return!0}function Xi(){A=Hi=null,j=!1}function Zi(){var e=Ui;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Ui=null),e}function Qi(e){Ui===null?Ui=[e]:Ui.push(e)}var $i=me(null),ea=null,ta=null;function na(e,t,n){O($i,t._currentValue),t._currentValue=n}function ra(e){e._currentValue=$i.current,D($i)}function ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function aa(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ia(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ia(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function oa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;jr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===_e.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&aa(t,e,n,r),t.flags|=262144}function sa(e){for(e=e.firstContext;e!==null;){if(!jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ca(e){ea=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function la(e){return da(ea,e)}function ua(e,t){return ea===null&&ca(e),da(e,t)}function da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ta===null){if(e===null)throw Error(s(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return n}var fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},pa=t.unstable_scheduleCallback,ma=t.unstable_NormalPriority,M={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new fa,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&pa(ma,function(){e.controller.abort()})}var _a=null,va=0,ya=0,ba=null;function xa(e,t){if(_a===null){var n=_a=[];va=0,ya=dd(),ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(Sa,Sa),t}function Sa(){if(--va===0&&_a!==null){ba!==null&&(ba.status=`fulfilled`);var e=_a;_a=null,ya=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var wa=T.S;T.S=function(e,t){tu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&xa(e,t),wa!==null&&wa(e,t)};var Ta=me(null);function Ea(){var e=Ta.current;return e===null?G.pooledCache:e}function Da(e,t){t===null?O(Ta,Ta.current):O(Ta,t.pool)}function Oa(){var e=Ea();return e===null?null:{parent:M._currentValue,pool:e}}var ka=Error(s(460)),Aa=Error(s(474)),ja=Error(s(542)),Ma={then:function(){}};function Na(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e}throw Ia=t,ka}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ia=e,ka):e}}var Ia=null;function La(){if(Ia===null)throw Error(s(459));var e=Ia;return Ia=null,e}function Ra(e){if(e===ka||e===ja)throw Error(s(483))}var za=null,Ba=0;function Va(e){var t=Ba;return Ba+=1,za===null&&(za=[]),Pa(za,e,t)}function Ha(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ua(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=yi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ci(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===w&&Fa(a)===t.type)?(t=i(t,n.props),Ha(t,n),t.return=e,t):(t=xi(n.type,n.key,n.props,null,e.mode,r),Ha(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ti(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=Si(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=xi(t.type,t.key,t.props,null,e.mode,n),Ha(n,t),n.return=e,n;case v:return t=Ti(t,e.mode,n),t.return=e,t;case w:return t=Fa(t),f(e,t,n)}if(ue(t)||se(t))return t=Si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Va(t),n);if(t.$$typeof===S)return f(e,ua(e,t),n);Ua(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Fa(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Va(n),r);if(n.$$typeof===S)return p(e,t,ua(e,n),r);Ua(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Fa(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Va(r),i);if(r.$$typeof===S)return m(e,t,n,ua(t,r),i);Ua(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),j&&Li(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return j&&Li(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),j&&Li(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),j&&Li(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return j&&Li(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),j&&Li(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Fa(l)===r.type){n(e,r.sibling),c=i(r,a.props),Ha(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=Si(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=xi(a.type,a.key,a.props,null,e.mode,c),Ha(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ti(a,e.mode,c),c.return=e,e=c}return o(e);case w:return a=Fa(a),b(e,r,a,c)}if(ue(a))return h(e,r,a,c);if(se(a)){if(l=se(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Va(a),c);if(a.$$typeof===S)return b(e,r,ua(e,a),c);Ua(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=Ci(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{Ba=0;var i=b(e,t,n,r);return za=null,i}catch(t){if(t===ka||t===ja)throw t;var a=_i(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ga=Wa(!0),Ka=Wa(!1),qa=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=mi(e),pi(e,null,n),t}return ui(e,r,t,n),mi(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var eo=!1;function to(){if(eo){var e=ba;if(e!==null)throw e}}function no(e,t,n,r){eo=!1;var i=e.updateQueue;qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===ya&&(eo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function ro(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function io(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ro(n[e],t)}var ao=me(null),oo=me(0);function so(e,t){e=Gl,O(oo,e),O(ao,t),Gl=e|t.baseLanes}function co(){O(oo,Gl),O(ao,ao.current)}function lo(){Gl=oo.current,D(ao),D(oo)}var uo=me(null),fo=null;function po(e){var t=e.alternate;O(N,N.current&1),O(uo,e),fo===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(fo=e)}function mo(e){O(N,N.current),O(uo,e),fo===null&&(fo=e)}function ho(e){e.tag===22?(O(N,N.current),O(uo,e),fo===null&&(fo=e)):go(e)}function go(){O(N,N.current),O(uo,uo.current)}function _o(e){D(uo),fo===e&&(fo=null),D(N)}var N=me(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=0,P=null,F=null,I=null,bo=!1,xo=!1,So=!1,Co=0,wo=0,To=null,Eo=0;function L(){throw Error(s(321))}function Do(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,i,a){return yo=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Ws:Gs,So=!1,a=n(r,i),So=!1,xo&&(a=Ao(t,n,r,i)),ko(e),a}function ko(e){T.H=Us;var t=F!==null&&F.next!==null;if(yo=0,I=F=P=null,bo=!1,wo=0,To=null,t)throw Error(s(300));e===null||z||(e=e.dependencies,e!==null&&sa(e)&&(z=!0))}function Ao(e,t,n,r){P=e;var i=0;do{if(xo&&(To=null),wo=0,xo=!1,25<=i)throw Error(s(301));if(i+=1,I=F=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}T.H=Ks,a=t(n,r)}while(xo);return a}function jo(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Lo(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function Mo(){var e=Co!==0;return Co=0,e}function No(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Po(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}yo=0,I=F=P=null,xo=!1,wo=Co=0,To=null}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return I===null?P.memoizedState=I=e:I=I.next=e,I}function R(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=I===null?P.memoizedState:I.next;if(t!==null)I=t,F=e;else{if(e===null)throw P.alternate===null?Error(s(467)):Error(s(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},I===null?P.memoizedState=I=e:I=I.next=e}return I}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=wo;return wo+=1,To===null&&(To=[]),e=Pa(To,e,t),t=P,(I===null?t.memoizedState:I.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Ws:Gs),e}function Ro(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Lo(e);if(e.$$typeof===S)return la(e)}throw Error(s(438,String(e)))}function zo(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Io(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){return Ho(R(),F,e)}function Ho(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(yo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ya&&(d=!0);else if((yo&p)===p){u=u.next,p===ya&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,P.lanes|=p,Kl|=p;f=u.action,So&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,P.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!jr(a,e.memoizedState)&&(z=!0,d&&(n=ba,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Uo(e){var t=R(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);jr(a,t.memoizedState)||(z=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Wo(e,t,n){var r=P,i=R(),a=j;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!jr((F||i).memoizedState,n);if(o&&(i.memoizedState=n,z=!0),i=i.queue,hs(qo.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||I!==null&&I.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,i,n,t),null),G===null)throw Error(s(349));a||yo&127||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=Io(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jr(e,n)}catch{return!0}}function Yo(e){var t=fi(e,2);t!==null&&hu(t,e,2)}function Xo(e){var t=Fo();if(typeof e==`function`){var n=e;if(e=n(),So){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Zo(e,t,n,r){return e.baseState=n,Ho(e,F,typeof r==`function`?r:Bo)}function Qo(e,t,n,r,i){if(Bs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};T.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,$o(t,a)):(a.next=n.next,t.pending=n.next=a)}}function $o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),es(e,t,s)}catch(n){ns(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),es(e,t,a)}catch(n){ns(e,t,n)}}function es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ts(e,t,n)},function(n){return ns(e,t,n)}):ts(e,t,n)}function ts(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$o(e,n)))}function ns(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(j){var n=G.formState;if(n!==null){a:{var r=P;if(j){if(A){b:{for(var i=A,a=Wi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){A=cf(i.nextSibling),r=i.data===`F!`;break a}}Ki(r)}r=!1}r&&(t=n[0])}}return n=Fo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Ls.bind(null,P,r),r.dispatch=n,r=Xo(!1),a=zs.bind(null,P,!1,r.queue),r=Fo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Qo.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(R(),F,e)}function ss(e,t,n){if(t=Ho(e,t,is)[0],e=Vo(Bo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Lo(t)}catch(e){throw e===ka?ja:e}else r=t;t=R();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=R(),n=F;if(n!==null)return ss(t,n,e);R(),t=t.memoizedState,n=R();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=Io(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return R().memoizedState}function fs(e,t,n,r){var i=Fo();P.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=R();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&Do(r,F.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(P.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=Io(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=R().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Do(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Do(t,r[1]))return r[0];if(r=e(),So){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function Ts(e,t,n){return n===void 0||yo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),P.lanes|=e,Kl|=e,n)}function Es(e,t,n,r){return jr(n,t)?n:ao.current===null?!(yo&42)||yo&1073741824&&!(q&261930)?(z=!0,e.memoizedState=n):(e=mu(),P.lanes|=e,Kl|=e,t):(e=Ts(e,n,r),jr(e,t)||(z=!0),e)}function Ds(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,zs(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Rs(e,t,Ca(c,r),pu(e)):Rs(e,t,r,pu(e))}catch(n){Rs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Os(){}function ks(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=As(e).queue;Ds(e,i,t,de,n===null?Os:function(){return js(e),n(r)})}function As(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=As(e);t.next===null&&(t=e.alternate.memoizedState),Rs(e,t.next.queue,{},pu())}function Ms(){return la(Qf)}function Ns(){return R().memoizedState}function Ps(){return R().memoizedState}function Fs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Xa(n);var r=Za(t,e,n);r!==null&&(hu(r,t,n),Qa(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function Is(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vs(t,n):(n=di(e,t,n,r),n!==null&&(hu(n,e,r),Hs(n,t,r)))}function Ls(e,t,n){Rs(e,t,n,pu())}function Rs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,jr(s,o))return ui(e,t,i,0),G===null&&li(),!1}catch{}if(n=di(e,t,i,r),n!==null)return hu(n,e,r),Hs(n,t,r),!0}return!1}function zs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(s(479))}else t=di(e,n,r,2),t!==null&&hu(t,e,2)}function Bs(e){var t=e.alternate;return e===P||t!==null&&t===P}function Vs(e,t){xo=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var Us={readContext:la,use:Ro,useCallback:L,useContext:L,useEffect:L,useImperativeHandle:L,useLayoutEffect:L,useInsertionEffect:L,useMemo:L,useReducer:L,useRef:L,useState:L,useDebugValue:L,useDeferredValue:L,useTransition:L,useSyncExternalStore:L,useId:L,useHostTransitionStatus:L,useFormState:L,useActionState:L,useOptimistic:L,useMemoCache:L,useCacheRefresh:L};Us.useEffectEvent=L;var Ws={readContext:la,use:Ro,useCallback:function(e,t){return Fo().memoizedState=[e,t===void 0?null:t],e},useContext:la,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Fo();t=t===void 0?null:t;var r=e();if(So){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fo();if(n!==void 0){var i=n(t);if(So){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Is.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=Fo();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=Ls.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Fo(),e,t)},useTransition:function(){var e=Xo(!1);return e=Ds.bind(null,P,e.queue,!0,!1),Fo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,i=Fo();if(j){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),G===null)throw Error(s(349));q&127||Go(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ms(qo.bind(null,r,a,e),[e]),r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,a,n,t),null),n},useId:function(){var e=Fo(),t=G.identifierPrefix;if(j){var n=Ii,r=Fi;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Eo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Fo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return Fo().memoizedState=Fs.bind(null,P)},useEffectEvent:function(e){var t=Fo(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Vo,useRef:ds,useState:function(){return Vo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Es(R(),F.memoizedState,e,t)},useTransition:function(){var e=Vo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Zo(R(),F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Gs.useEffectEvent=_s;var Ks={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Uo,useRef:ds,useState:function(){return Uo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=R();return F===null?Ts(n,e,t):Es(n,F.memoizedState,e,t)},useTransition:function(){var e=Uo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=R();return F===null?(n.baseState=e,[e,n.queue.dispatch]):Zo(n,F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Ks.useEffectEvent=_s;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Xa(n);r.tag=2,t!=null&&(r.callback=t),t=Za(e,r,n),t!==null&&(hu(t,e,n),Qa(t,e,n))}};function Ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,a):!0}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Qs(e){ai(e)}function $s(e){console.error(e)}function ec(e){ai(e)}function tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){return n=Xa(n),n.tag=3,n.payload={element:null},n.callback=function(){tc(e,t)},n}function ic(e){return e=Xa(e),e.tag=3,e}function ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){nc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){nc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function oc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&oa(t,n,i,!0),n=uo.current,n!==null){switch(n.tag){case 31:case 13:return fo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(j)return t=uo.current,t===null?(r!==Gi&&(t=Error(s(423),{cause:r}),Qi(Di(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Di(r,n),i=rc(e.stateNode,r,i),$a(e,i),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Gi&&(e=Error(s(422),{cause:r}),Qi(Di(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Di(a,n),Zl===null?Zl=[a]:Zl.push(a),Y!==4&&(Y=2),t===null)return!0;r=Di(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=rc(n.stateNode,r,e),$a(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(iu===null||!iu.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=ic(i),ac(i,e,n,r),$a(n,i),!1}n=n.return}while(n!==null);return!1}var sc=Error(s(461)),z=!1;function cc(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ca(t),r=Oo(e,t,n,o,a,i),s=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&s&&zi(t),t.flags|=1,cc(e,t,r,i),t.child)}function uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!vi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,dc(e,t,a,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Pc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Mr:n,n(o,r)&&e.ref===t.ref)return Nc(e,t,i)}return t.flags|=1,e=yi(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref)if(z=!1,t.pendingProps=r=a,Pc(e,i))e.flags&131072&&(z=!0);else return t.lanes=e.lanes,Nc(e,t,i)}return yc(e,t,n,r,i)}function fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Da(t,a===null?null:a.cachePool),a===null?co():so(t,a),ho(t);else return r=t.lanes=536870912,mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Da(t,null),co(),go(t)):(Da(t,a.cachePool),so(t,a),go(t),t.memoizedState=null);return cc(e,t,i,n),t.child}function pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,n,r,i){var a=Ea();return a=a===null?null:{parent:M._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Da(t,null),co(),ho(t),e!==null&&oa(e,t,r,!0),t.childLanes=i,null}function hc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gc(e,t,n){return Ga(t,e.child,null,n),e=hc(t,t.pendingProps),e.flags|=2,_o(t),t.memoizedState=null,e}function _c(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(j){if(r.mode===`hidden`)return e=hc(t,r),t.lanes=536870912,pc(null,e);if(mo(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return t.lanes=536870912,null}return hc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(mo(t),i)if(t.flags&256)t.flags&=-257,t=gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(z||oa(e,t,n,!1),i=(n&e.childLanes)!==0,z||i){if(r=G,r!==null&&(o=lt(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,fi(e,o),hu(r,e,o),sc;Du(),t=gc(e,t,n)}else e=a.treeContext,A=cf(o.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=hc(t,r),t.flags|=4096;return t}return e=yi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,r,i){return ca(t),n=Oo(e,t,n,r,void 0,i),r=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,i),t.child)}function bc(e,t,n,r,i,a){return ca(t),t.updateQueue=null,n=Ao(t,r,n,i),ko(e),r=Mo(),e!==null&&!z?(No(e,t,a),Nc(e,t,a)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,a),t.child)}function xc(e,t,n,r,i){if(ca(t),t.stateNode===null){var a=hi,o=n.contextType;typeof o==`object`&&o&&(a=la(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Js,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ja(t),o=n.contextType,a.context=typeof o==`object`&&o?la(o):hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(qs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Js.enqueueReplaceState(a,a.state,null),no(t,r,a,i),to(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=hi,typeof u==`object`&&u&&(o=la(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Xs(t,a,r,o),qa=!1;var f=t.memoizedState;a.state=f,no(t,r,a,i),to(),l=t.memoizedState,s||f!==l||qa?(typeof d==`function`&&(qs(t,n,d,r),l=t.memoizedState),(c=qa||Ys(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ya(e,t),o=t.memoizedProps,u=Zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=hi,typeof l==`object`&&l&&(c=la(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Xs(t,a,r,c),qa=!1,f=t.memoizedState,a.state=f,no(t,r,a,i),to();var p=t.memoizedState;o!==d||f!==p||qa||e!==null&&e.dependencies!==null&&sa(e.dependencies)?(typeof s==`function`&&(qs(t,n,s,r),p=t.memoizedState),(u=qa||Ys(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&sa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,vc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,n,i)):cc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Nc(e,t,i),e}function Sc(e,t,n,r){return Xi(),t.flags|=256,cc(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Oa()}}function Tc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Ec(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(N.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(j){if(i?po(t):go(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(go(t),i=t.mode,c=Oc({mode:`hidden`,children:c},i),r=Si(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,o,n),t.memoizedState=Cc,pc(null,r)):(po(t),Dc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(po(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState===null?(go(t),c=r.fallback,i=t.mode,r=Oc({mode:`visible`,children:r.children},i),c=Si(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ga(t,e.child,null,n),r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,o,n),t.memoizedState=Cc,t=pc(null,r)):(go(t),t.child=e.child,t.flags|=128,t=null);else if(po(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Qi({value:r,source:null,stack:null}),t=kc(e,t,n)}else if(z||oa(e,t,n,!1),o=(n&e.childLanes)!==0,z||o){if(o=G,o!==null&&(r=lt(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,fi(e,r),hu(o,e,r),sc;af(c)||Du(),t=kc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,A=cf(c.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=Dc(t,r.children),t.flags|=4096);return t}return i?(go(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=yi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Si(c,i,n,null),c.flags|=2):c=yi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,pc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=wc(n):(i=c.cachePool,i===null?i=Oa():(l=M._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=Tc(e,o,n),t.memoizedState=Cc,pc(e.child,r)):(po(t),n=e.child,e=n.sibling,n=yi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Oc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=_i(22,e,null,t),e.lanes=0,e}function kc(e,t,n){return Ga(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ia(e.return,t,n)}function jc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=N.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(N,o),cc(e,t,r,n),r=j?ji:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,n,t);else if(e.tag===19)Ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jc(t,!0,n,null,a,r);break;case`together`:jc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=yi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&sa(e))):!0}function Fc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),na(t,M,e.memoizedState.cache),Xi();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(po(t),e=Nc(e,t,n),e===null?null:e.sibling):Ec(e,t,n):(po(t),t.flags|=128,null);po(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(oa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Mc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(N,N.current),r)break;return null;case 22:return t.lanes=0,fc(e,t,n,t.pendingProps);case 24:na(t,M,e.memoizedState.cache)}return Nc(e,t,n)}function Ic(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)z=!0;else{if(!Pc(e,n)&&!(t.flags&128))return z=!1,Fc(e,t,n);z=!!(e.flags&131072)}else z=!1,j&&t.flags&1048576&&Ri(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e==`function`)vi(e)?(r=Zs(e,r),t.tag=1,t=xc(null,t,e,r,n)):(t.tag=0,t=yc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===C){t.tag=11,t=lc(null,t,e,r,n);break a}else if(i===re){t.tag=14,t=uc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(s(306,t,``))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Zs(r,t.pendingProps),xc(e,t,r,i,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ya(e,t),no(t,r,null,n);var o=t.memoizedState;if(r=o.cache,na(t,M,r),r!==a.cache&&aa(t,[M],n,!0),to(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Sc(e,t,r,n);break a}else if(r!==i){i=Di(Error(s(424)),t),Qi(i),t=Sc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(A=cf(e.firstChild),Hi=t,j=!0,Ui=null,Wi=!0,n=Ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Xi(),r===i){t=Nc(e,t,n);break a}cc(e,t,r,n)}t=t.child}return t;case 26:return vc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:j||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[ht]=t,r[gt]=e,Pd(r,n,e),Ot(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&j&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Hi=t,Wi=!0,i=A,Zd(t.type)?(lf=i,A=cf(r.firstChild)):A=i),cc(e,t,t.pendingProps.children,n),vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&j&&((i=r=A)&&(r=tf(r,t.type,t.pendingProps,Wi),r===null?i=!1:(t.stateNode=r,Hi=t,A=cf(r.firstChild),Wi=!1,i=!0)),i||Ki(t)),be(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Oo(e,t,jo,null,null,n),Qf._currentValue=i),vc(e,t),cc(e,t,r,n),t.child;case 6:return e===null&&j&&((e=n=A)&&(n=nf(n,t.pendingProps,Wi),n===null?e=!1:(t.stateNode=n,Hi=t,A=null,e=!0)),e||Ki(t)),null;case 13:return Ec(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ga(t,null,r,n):cc(e,t,r,n),t.child;case 11:return lc(e,t,t.type,t.pendingProps,n);case 7:return cc(e,t,t.pendingProps,n),t.child;case 8:return cc(e,t,t.pendingProps.children,n),t.child;case 12:return cc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,na(t,t.type,r.value),cc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,ca(t),i=la(i),r=r(i),t.flags|=1,cc(e,t,r,n),t.child;case 14:return uc(e,t,t.type,t.pendingProps,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 19:return Mc(e,t,n);case 31:return _c(e,t,n);case 22:return fc(e,t,n,t.pendingProps);case 24:return ca(t),r=la(M),e===null?(i=Ea(),i===null&&(i=G,a=ha(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},Ja(t),na(t,M,i)):((e.lanes&n)!==0&&(Ya(e,t),no(t,null,null,n),to()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,na(t,M,r),r!==i.cache&&aa(t,[M],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),na(t,M,r))),cc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Lc(e){e.flags|=4}function Rc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ia=Ma,Aa}else e.flags&=-16777217}function zc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ia=Ma,Aa}function Bc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Xl|=t)}function Vc(e,t){if(!j)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function B(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(Bi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return B(t),null;case 1:return B(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ra(M),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?Lc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zi())),B(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Lc(t),a===null?(B(t),Rc(t,i,null,r,n)):(B(t),zc(t,a))):a?a===e.memoizedState?(B(t),t.flags&=-16777217):(Lc(t),B(t),zc(t,a)):(e=e.memoizedProps,e!==r&&Lc(t),B(t),Rc(t,i,e,r,n)),null;case 27:if(xe(t),n=ge.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return B(t),null}e=he.current,Yi(t)?qi(t,e):(e=ff(i,r,n),t.stateNode=e,Lc(t))}return B(t),null;case 5:if(xe(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return B(t),null}if(a=he.current,Yi(t))qi(t,a);else{var o=Bd(ge.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[ht]=t,a[gt]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Lc(t)}}return B(t),Rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=ge.current,Yi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Hi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ki(t,!0)}else e=Bd(e).createTextNode(r),e[ht]=t,t.stateNode=e}return B(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Yi(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[ht]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),e=!1}else n=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_o(t),t):(_o(t),null);if(t.flags&128)throw Error(s(558))}return B(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[ht]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),i=!1}else i=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(_o(t),t):(_o(t),null)}return _o(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bc(t,t.updateQueue),B(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),B(t),null;case 10:return ra(t.type),B(t),null;case 19:if(D(N),r=t.memoizedState,r===null)return B(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)Vc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=vo(e),a!==null){for(t.flags|=128,Vc(r,!1),e=a.updateQueue,t.updateQueue=e,Bc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)bi(n,e),n=n.sibling;return O(N,N.current&1|2),j&&Li(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>nu&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304)}else{if(!i)if(e=vo(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Bc(t,e),Vc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!j)return B(t),null}else 2*Pe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(B(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=N.current,O(N,i?n&1|2:n&1),j&&Li(t,r.treeForkCount),e);case 22:case 23:return _o(t),lo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(B(t),t.subtreeFlags&6&&(t.flags|=8192)):B(t),n=t.updateQueue,n!==null&&Bc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&D(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ra(M),B(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Uc(e,t){switch(Bi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(M),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(_o(t),t.alternate===null)throw Error(s(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_o(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(N),null;case 4:return ye(),null;case 10:return ra(t.type),null;case 22:case 23:return _o(t),lo(),e!==null&&D(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(M),null;case 25:return null;default:return null}}function Wc(e,t){switch(Bi(t),t.tag){case 3:ra(M),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&_o(t);break;case 13:_o(t);break;case 19:D(N);break;case 10:ra(t.type);break;case 22:case 23:_o(t),lo(),e!==null&&D(Ta);break;case 24:ra(M)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{io(t,n)}catch(t){Z(e,e.return,t)}}}function Jc(e,t,n){n.props=Zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[gt]=t}catch(t){Z(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ht]=e,t[gt]=n}catch(t){Z(e,e.return,t)}}var il=!1,V=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,H=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Ir(e),Lr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,H=t;H!==null;)if(t=H,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,H=e;else for(;H!==null;){switch(t=H,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Zs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Gc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{io(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||V,i=il;var a=V;il=r,(V=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),il=i,V=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:V||Xc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||Xc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:V||Xc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),V||Kc(4,n,t),dl(e,t,n);break;case 1:V||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,dl(e,t,n),V=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(s(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(s(160));fl(a,o,i),U=null,ul=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=vl;if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[St]||a[ht]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[ht]=e,Ot(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[ht]=e,Ot(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),e.flags&32){i=e.stateNode;try{en(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Qc(e,i,n===null?i:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=vl,vl=gf(t.containerInfo),_l(t,e),vl=i,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}al&&(al=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=V;if(il=u||i,V=d||l,_l(t,e),V=d,il=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||il||V||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;nl(e,el(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(en(a,``),n.flags&=-33),nl(e,el(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;tl(e,el(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),Cl(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Xc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Gc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)ro(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Yc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Gc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(ll(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}var zl={getCacheForType:function(e){var t=la(M),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return la(M).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:T.T===null?ft():dd()}function mu(){if(Yl===0)if(!(q&536870912)||j){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Yl=e}else Yl=536870912;return e=uo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),at(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||tt(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=a,ql|=a,i=4;break a}a=Ql,Ql=i,a!==null&&(Ql===null?Ql=a:Ql.push.apply(Ql,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=eu+300-Pe(),10<i)){if(yu(r,t,Yl,!Hl),et(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,`Throttled`,-0,0),i);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Nl(t,a,d);var m=(a&62914560)===a?eu-Pe():(a&4194048)===a?tu-Pe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ta=ea=null,Po(e),za=null,Ba=0,e=K;for(;e!==null;)Wc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=yi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=tt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,li(),n}function Cu(e,t){P=null,T.H=Us,t===ka||t===ja?(t=La(),J=3):t===Aa?(t=La(),J=4):J=t===sc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,tc(e,Di(t,e.current)))}function wu(){var e=uo.current;return e===null?!0:(q&4194048)===q?fo===null:(q&62914560)===q||q&536870912?e===fo:!1}function Tu(){var e=T.H;return T.H=Us,e===null?Us:e}function Eu(){var e=T.A;return T.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&uo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:uo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ta=ea=null,W=r,T.H=i,T.A=a,K===null&&(G=null,q=0,li()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),i=Eu();G!==e||q!==t?(ru=null,nu=Pe()+500,Su(e,t)):Ul=tt(e,t);a:do try{if(J!==0&&K!==null){t=K;var a=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,a,1);break;case 2:case 9:if(Na(a)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},a.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Na(a)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(K.tag){case 26:o=K.memoizedState;case 5:case 27:var c=K;if(o?Wf(o):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,a,5);break;case 6:J=0,Vl=null,Pu(e,t,a,6);break;case 8:xu(),Y=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ta=ea=null,T.H=r,T.A=i,W=n,K===null?(G=null,q=0,li(),Y):0}function ju(){for(;K!==null&&!Me();)Mu(K)}function Mu(e){var t=Ic(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=bc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:Po(t);default:Wc(n,t),t=K=bi(t,Gl),t=Ic(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ta=ea=null,Po(t),za=null,Ba=0;var i=t.return;try{if(oc(e,i,t,n,q)){Y=1,tc(e,Di(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,tc(e,Di(n,e.current)),K=null;return}t.flags&32768?(j||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=uo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Hc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=ci,ot(e,n,a,o,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Re,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=T.T,T.T=null,i=E.p,E.p=2,o=W,W|=4;try{sl(e,t,n)}finally{W=o,E.p=i,T.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Ir(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fr(s.ownerDocument.documentElement,s)){if(c!==null&&Lr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Pr(s,h),v=Pr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,E.p=r,T.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,E.p=r,T.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Ne();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),dt(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=dt(su),r=T.T,i=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var a=au,o=su;if(X=0,ou=au=null,su=0,W&6)throw Error(s(331));var c=W;if(W|=4,Il(a.current),Ol(a,a.current,o,n),W=c,id(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,a)}catch{}return!0}finally{E.p=i,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=Di(n,t),t=rc(e.stateNode,t,2),e=Za(e,t,2),e!==null&&(at(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Di(n,e),n=ic(2),r=Za(t,n,2),r!==null&&(ac(n,r,t,e),at(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Pe()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=rt()),e=fi(e,t),e!==null&&(at(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=et(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Pe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),dt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=et(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?Ae(Ie,ad):od()})}function dd(){if(nd===0){var e=ya;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ri.length;hd++){var gd=ri[hd];ii(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ii(Yr,`onAnimationEnd`),ii(Xr,`onAnimationIteration`),ii(Zr,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(Qr,`onTransitionRun`),ii($r,`onTransitionStart`),ii(ei,`onTransitionCancel`),ii(ti,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=wt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),o=[];a:{var s=ni.get(e);if(s!==void 0){var c=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:c=Jn;break;case`focusin`:u=`focus`,c=zn;break;case`focusout`:u=`blur`,c=zn;break;case`beforeblur`:case`afterblur`:c=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Xn;break;case Yr:case Xr:case Zr:c=Bn;break;case ti:c=Zn;break;case`scroll`:case`scrollend`:c=Mn;break;case`wheel`:c=Qn;break;case`copy`:case`cut`:case`paste`:c=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Yn;break;case`toggle`:case`beforetoggle`:c=$n}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?wt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Et(c),h=u==null?s:Et(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?Et(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=yr;else if(pr(s))if(br)v=kr;else{v=Dr;var y=Er}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&an(r.elementType)&&(v=yr):v=Or;if(v&&=v(e,r)){mr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Xt(s,`number`,s.value)}switch(y=r?Et(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(zr=y,Br=r,Vr=null);break;case`focusout`:Vr=Br=zr=null;break;case`mousedown`:Hr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Hr=!1,Ur(o,n,i);break;case`selectionchange`:if(Rr)break;case`keydown`:case`keyup`:Ur(o,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,lr=!0)),y=Ed(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=rr?ur(e,n):dr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,a);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:rn(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[gt]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}$t(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?js(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Ot(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Dt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Ot(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=ge.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Dt(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=Dt(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Dt(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Ot(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,Ot(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ot(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,Ot(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),Ot(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,Ot(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),Ot(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[ht]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ot(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Ot(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=_i(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ja(a),e}function tp(e){return e?(e=hi,e):hi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Xa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Za(e,r,t),n!==null&&(hu(n,e,t),Qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=fi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ut(t);var n=fi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Pe()+500,id(0,!1))}}break;case 31:case 13:s=fi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=wt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=wt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Tt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[_t]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.6`)throw Error(s(527,Lp,`19.2.6`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ue=zp.inject(Rp),We=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Qs,a=$s,o=ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[_t]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),u=e(((e,t)=>{t.exports=l()})),d=c(),f=n(),p=u(),m=[`hearth`,`scholar`,`road`,`iria`,`codex`,`recurrence`,`abyss`,`cost`,`farewell`,`threshold`,`dawn`,`road`,`open-road`],h=[{id:`cosmo`,name:`Cosmo DeWitte`,initials:`CD`,role:`Mago de adivinhação · Cartógrafo do possível`,facts:[[`Espécie`,`Humano–tiefling`],[`Idade`,`Trinta e poucos anos`],[`Origem`,`Caldris`],[`Ofício`,`Mago, pesquisador arcano`],[`Estado atual`,`Poder drasticamente reduzido`]],summary:`Filho de Miren, uma cartógrafa tiefling, e Orren, um artesão humano de instrumentos de precisão, Cosmo cresceu entre duas heranças e duas lições que nunca conseguiu separar: nenhum mapa é completo e toda medida pode ser melhorada. Tornou-se um adivinho excepcional, construiu o Códice das Possibilidades e passou mais de três anos observando vidas que nunca viveu até encontrar a possibilidade 1.127. Entrou nela por uma razão que conhecia perfeitamente — e que deixou de conseguir lembrar depois da travessia.`,traits:[`esperançoso`,`desconfiado`,`estudioso`,`obstinado`,`irônico`,`protetor`],connection:`Filho de Miren e Orren, irmão de Neris, antigo aluno de Mael, melhor amigo de Tavian e criador de Iria. Carrega lembranças de inúmeras versões dos futuros companheiros de aventura, embora ainda não os tenha conhecido nesta realidade.`,tension:`Cosmo quer proteger. O perigo está no verbo: quando acredita ter informação suficiente, é capaz de decidir por outra pessoa e aceitar a violência dessa escolha como um preço necessário.`},{id:`iria`,name:`Iria`,initials:`IR`,role:`Consciência arcana · A pergunta que responde`,facts:[[`Natureza`,`Consciência arcana artificial`],[`Idade`,`Poucos anos de existência`],[`Origem`,`Torre de Cosmo`],[`Função inicial`,`Matriz dialética`],[`Estado atual`,`Permaneceu na realidade de origem`]],summary:`Iria foi criada quando Cosmo percebeu que o maior ponto cego de seu método era ele mesmo. Seu núcleo preserva memória e continuidade; seu corpo é uma forma mágica estabilizada. Cosmo a alimentou com tudo aquilo que sua própria mente tendia a desprezar cedo demais: poesia, luto, ética, teatro, contradição e perguntas sem utilidade imediata. Ela deveria ser uma ferramenta capaz de contrariá-lo. Tornou-se alguém.`,traits:[`perspicaz`,`emocionalmente atenta`,`sarcástica`,`compassiva`,`incômoda quando precisa ser`],connection:`É a pessoa que mais viu Cosmo durante os anos do Códice. Conhece o objetivo perdido, participou dos cálculos e foi a última pessoa com quem ele falou antes de atravessar.`,tension:`Iria existe para questionar as certezas de Cosmo, mas sua própria existência contém uma pergunta que nenhum dos dois resolveu: em que ponto uma criação deixa de pertencer ao criador e passa simplesmente a ser alguém?`},{id:`neris`,name:`Neris DeWitte`,initials:`ND`,role:`Irmã mais nova · A intimidade sem cerimônia`,facts:[[`Espécie`,`Humano–tiefling`],[`Idade`,`Mais nova que Cosmo`],[`Origem`,`Caldris`],[`Família`,`Miren, Orren e Cosmo`],[`Estado atual`,`Permaneceu na realidade de origem`]],summary:`Neris é uma das poucas pessoas que nunca precisou da reputação de Cosmo para saber quem ele era. Entra sem bater, percebe quando o irmão está se escondendo atrás de uma teoria e conhece seus hábitos ruins com intimidade suficiente para não se impressionar com títulos. Foi também uma das primeiras a enxergar o custo do Códice antes que Cosmo aceitasse chamá-lo de custo.`,traits:[`direta`,`afetuosa`,`prática`,`observadora`,`imune à solenidade de Cosmo`],connection:`Irmã mais nova de Cosmo. Conheceu Iria pessoalmente, acompanhou os anos da torre e recebeu uma das chaves antes da travessia.`,tension:`Ama o irmão sem transformar esse amor em aprovação. Sua grande preocupação é simples: que Cosmo passe tanto tempo tratando pessoas como variáveis que esqueça de encontrá-las como pessoas.`},{id:`miren`,name:`Miren DeWitte`,initials:`MD`,role:`Cartógrafa · Mãe de Cosmo`,facts:[[`Espécie`,`Tiefling`],[`Idade`,`Não registrada`],[`Origem`,`Caldris`],[`Ofício`,`Cartógrafa`],[`Estado atual`,`Permaneceu na realidade de origem`]],summary:`Miren desenha mapas a partir de relatos imperfeitos e prefere deixar uma região em branco a fingir uma certeza que não possui. Foi com ela que Cosmo aprendeu que toda representação do mundo tem limites — princípio que mais tarde se tornaria uma das bases intelectuais do Códice.`,traits:[`paciente`,`rigorosa`,`curiosa`,`honesta diante da incerteza`,`protetora`],connection:`Mãe de Cosmo e Neris, esposa de Orren. Durante os anos da torre continuou enviando mapas, comida e lembretes de que havia um mundo fora do experimento.`,tension:`Ensinou o filho a respeitar os espaços em branco de um mapa. No fim, precisou vê-lo atravessar justamente o maior espaço em branco que já encontrara.`},{id:`orren`,name:`Orren DeWitte`,initials:`OD`,role:`Artesão de precisão · Pai de Cosmo`,facts:[[`Espécie`,`Humano`],[`Idade`,`Não registrada`],[`Origem`,`Caldris`],[`Ofício`,`Relógios e instrumentos de precisão`],[`Estado atual`,`Permaneceu na realidade de origem`]],summary:`Orren fabrica relógios, astrolábios, balanças e instrumentos para pessoas que pagam para diminuir a quantidade de 'talvez' no mundo. Onde Miren ensinou Cosmo a aceitar a incerteza, Orren lhe ensinou que reconhecer uma margem de erro nunca é desculpa para medir mal. Muitas das lentes e articulações mais delicadas da torre foram construídas por suas mãos.`,traits:[`meticuloso`,`pragmático`,`seco no humor`,`engenhoso`,`leal`],connection:`Pai de Cosmo e Neris, marido de Miren. Ajudou a transformar ideias arcanas do filho em mecanismos que podiam existir fisicamente.`,tension:`Entende o impulso do filho de construir algo impossível melhor do que gostaria. Por isso, suas despedidas raramente são discursos; são perguntas curtas às quais Cosmo não consegue responder pela metade.`},{id:`mael`,name:`Mael Corven`,initials:`MC`,role:`Adivinho aposentado · Mestre de Cosmo`,facts:[[`Espécie`,`Anão`],[`Idade`,`Mais velho; já aposentado`],[`Origem`,`Caldris`],[`Ofício`,`Professor de adivinhação`],[`Relação`,`Antigo mestre de Cosmo`]],summary:`Mael ensinava adivinhação como quem ensinava alguém a desmontar uma armadilha. Detesta a palavra destino usada como desculpa, desconfia de profecias solenes e insiste que uma visão é informação, nunca ordem. Foi o professor que transformou a curiosidade de Cosmo em método — e passou boa parte da vida seguinte lembrando ao antigo aluno que método nenhum torna seu autor infalível.`,traits:[`cético`,`mordaz`,`exigente`,`brilhante`,`alérgico a grandiosidade`],connection:`Professor, crítico e depois colega intelectual de Cosmo. Mesmo aposentado, revisou parte da teoria do Códice e ajudou a entender o preço mágico da travessia.`,tension:`Tem orgulho do que Cosmo se tornou e motivos excelentes para temer exatamente a mesma coisa.`},{id:`tavian`,name:`Tavian Roe`,initials:`TR`,role:`Explorador · Melhor amigo de Cosmo`,facts:[[`Espécie`,`Halfling`],[`Idade`,`Mesma geração de Cosmo`],[`Origem`,`Caldris`],[`Ofício`,`Explorador e aventureiro`],[`Relação`,`Melhor amigo de Cosmo`]],summary:`Tavian é um halfling que se tornou o melhor amigo de Cosmo em parte porque nunca pareceu particularmente impressionado com o talento dele. Viaja, explora ruínas e possui a habilidade rara de reduzir uma discussão metafísica a uma observação sobre chuva, cerveja ou um casaco esquecido. Foi uma carta sua que colocou Cosmo diante da estrada que, naquela realidade, ele decidiu não tomar.`,traits:[`bem-humorado`,`aventureiro`,`franco`,`leal`,`menos paciente com teorias do que Cosmo gostaria`],connection:`Amigo de juventude e contraponto mundano de Cosmo. Sua expedição ao Veado Branco poderia ter mudado tudo anos antes — mas Cosmo escolheu ficar com um experimento que finalmente funcionara.`,tension:`Tavian não precisa entender cada cálculo de Cosmo para perceber quando uma pergunta importante virou desculpa para adiar a própria vida.`}],g=[{id:`natureza`,index:`01`,title:`O que é o Códice`,label:`NATUREZA`},{id:`origem`,index:`02`,title:`O primeiro experimento`,label:`ORIGEM`},{id:`arquitetura`,index:`03`,title:`A torre como máquina`,label:`ARQUITETURA`},{id:`componentes`,index:`04`,title:`Componentes`,label:`ANATOMIA`},{id:`pagina`,index:`05`,title:`Como nasce uma página`,label:`MÉTODO`},{id:`memoria`,index:`06`,title:`De observar a recordar`,label:`EVOLUÇÃO`},{id:`recorrentes`,index:`07`,title:`Recorrentes e Âncoras`,label:`CONVERGÊNCIA`},{id:`1127`,index:`08`,title:`A página 1.127`,label:`ANOMALIA`},{id:`travessia`,index:`09`,title:`A Travessia`,label:`CONVERSÃO`},{id:`clausula`,index:`10`,title:`Cláusula de Continuidade`,label:`PROTOCOLO`},{id:`estado`,index:`11`,title:`Estado atual`,label:`REGISTRO`},{id:`lacuna`,index:`12`,title:`A informação ausente`,label:`FALHA`}],_=[[`ANÉIS DE PRATA`,`Delimitam o campo de observação e sustentam os alinhamentos. Na Travessia, três deles localizam Caldris, as assinaturas recorrentes e a relação sem coordenada própria.`],[`SETE ESPELHOS DE OBSIDIANA`,`Separam ecos mágicos que chegariam sobrepostos. No ritual final, voltam-se para dentro e refletem uns aos outros sem produzir imagem.`],[`LENTES DE ORREN`,`Instrumentos de precisão construídos pelo pai de Cosmo para distinguir assinaturas quase idênticas entre leituras.`],[`CANAIS DE PRATA`,`Atravessam os três pavimentos e conectam fisicamente as etapas da matriz, conduzindo a arquitetura arcana pela torre.`],[`RESERVATÓRIOS DE SAIS`,`Mantêm a vidência estável por horas. Na sala superior, doze recipientes precisam estar preparados antes de uma leitura.`],[`SELOS DE ISOLAMENTO`,`Impedem que resíduos de uma possibilidade contaminem a observação seguinte — condição essencial para comparar resultados.`],[`LIVRO E SUPORTE`,`São a face visível do sistema. O grande volume de capa escura não cria as possibilidades: recebe e preserva o resultado que a torre inteira produziu.`]];function v(e){let t=e.split(/\n\s*\n/).map(e=>e.trim()).filter(Boolean),n=[],r=null;for(let e of t){if(e.startsWith(`### `)){r={title:e.replace(/^###\s+/,``),paragraphs:[]},n.push(r);continue}e.startsWith(`# `)||e.startsWith(`## `)||r&&r.paragraphs.push(e.replace(/\n+/g,` `))}return n}function y(e){return e.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/(^-|-$)/g,``)}function b({text:e}){return(0,p.jsx)(p.Fragment,{children:e.split(/(\*[^*]+\*|⟦[^⟧]+⟧)/g).filter(Boolean).map((e,t)=>e.startsWith(`⟦`)&&e.endsWith(`⟧`)?(0,p.jsx)(`span`,{className:`cipher`,children:e},t):e.startsWith(`*`)&&e.endsWith(`*`)?(0,p.jsx)(`em`,{children:e.slice(1,-1)},t):(0,p.jsx)(f.Fragment,{children:e},t))})}function x(){return(0,p.jsxs)(`div`,{className:`sigil`,"aria-hidden":`true`,children:[(0,p.jsx)(`span`,{className:`sigil-ring ring-one`}),(0,p.jsx)(`span`,{className:`sigil-ring ring-two`}),(0,p.jsx)(`span`,{className:`sigil-line line-one`}),(0,p.jsx)(`span`,{className:`sigil-line line-two`}),(0,p.jsx)(`span`,{className:`sigil-diamond diamond-one`}),(0,p.jsx)(`span`,{className:`sigil-diamond diamond-two`}),(0,p.jsx)(`span`,{className:`sigil-core`,children:`1127`})]})}function ee(){let e=(0,f.useRef)(null),[t,n]=(0,f.useState)(0);return(0,f.useEffect)(()=>{let t=0,r=()=>{if(t=0,!e.current)return;let r=e.current.getBoundingClientRect(),i=Math.max(1,r.height-window.innerHeight);n(Math.max(0,Math.min(1,-r.top/i)))},i=()=>{t||=requestAnimationFrame(r)};return r(),addEventListener(`scroll`,i,{passive:!0}),addEventListener(`resize`,i),()=>{removeEventListener(`scroll`,i),removeEventListener(`resize`,i),t&&cancelAnimationFrame(t)}},[]),[e,t]}function S({variant:e}){let t=(0,f.useRef)(null);return(0,f.useEffect)(()=>{let n=t.current;if(!n)return;let r=e===`portal`?1e3:760,i=e===`portal`?760:1040;n.width=r,n.height=i;let a=n.getContext(`2d`);if(!a)return;let o=e===`portal`?[[19,48,64],[31,82,79],[57,45,79],[92,42,57],[116,82,49],[28,57,74]]:[[39,82,95],[46,99,87],[77,54,83],[107,53,61],[143,105,59],[43,76,96]],s=a.createImageData(r,i),c=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n];for(let t=0;t<i;t+=1)for(let n=0;n<r;n+=1){let a=n/r*2-1,l=t/i*2-1,u=Math.sqrt(a*a+l*l)+.001,d=Math.atan2(l,a),f=a+.16*Math.sin(l*3.1)+.07*Math.sin((a+l)*5.4),p=l+.14*Math.sin(a*2.7+.8)-.08*Math.cos((a-l)*4.6),m=Math.sin(f*4.7+Math.sin(p*2.2))+.72*Math.sin(p*6.1-f*1.25)+.43*Math.cos((f+p)*4.2);e===`portal`?m+=1.15*Math.log(u+.13)+.32*Math.sin(d*3-u*5.8):m+=.28*Math.sin(u*8.2+d*1.6);let h=(.5+.5*Math.sin(m*.72+d*.28+a*.55))*(o.length-1),g=Math.min(o.length-2,Math.floor(h)),_=c(o[g],o[g+1],h-g),v=Math.abs(Math.sin(m*(e===`portal`?13.5:12.2))),y=Math.max(0,1-v*11),b=Math.max(0,1-v*4.8)*.16,x=e===`portal`?[196,174,125]:[91,67,42],ee=e===`portal`?.72+.14*Math.cos(u*4.4):.86+.08*Math.cos(a*2.2-l*1.7),S=(t*r+n)*4;s.data[S]=Math.min(255,_[0]*ee*(1-b)+x[0]*(y*.72+b)),s.data[S+1]=Math.min(255,_[1]*ee*(1-b)+x[1]*(y*.72+b)),s.data[S+2]=Math.min(255,_[2]*ee*(1-b)+x[2]*(y*.72+b)),s.data[S+3]=255}a.putImageData(s,0,0)},[e]),(0,p.jsx)(`canvas`,{ref:t,className:`liquid-contours liquid-${e}`,"aria-hidden":`true`})}function C(){return(0,p.jsxs)(`aside`,{className:`method-diagram`,"aria-label":`Método do Códice`,children:[(0,p.jsxs)(`div`,{className:`method-ring`,"aria-hidden":`true`,children:[(0,p.jsx)(`span`,{}),(0,p.jsx)(`span`,{}),(0,p.jsx)(`span`,{}),(0,p.jsx)(`i`,{})]}),(0,p.jsxs)(`div`,{className:`method-copy`,children:[(0,p.jsx)(`span`,{className:`sequence-eyebrow`,children:`MÉTODO DE OBSERVAÇÃO COMPARATIVA`}),(0,p.jsxs)(`div`,{className:`method-steps`,children:[(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`b`,{children:`01`}),` condição conhecida`]}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`b`,{children:`02`}),` uma variável alterada`]}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`b`,{children:`03`}),` constantes preservadas`]}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`b`,{children:`04`}),` consequência registrada`]})]}),(0,p.jsx)(`p`,{children:`O futuro não era consultado. Era submetido a uma pergunta cuidadosamente limitada.`})]})]})}function te(){return(0,p.jsxs)(`aside`,{className:`branch-diagram`,"aria-label":`A estrada não tomada`,children:[(0,p.jsx)(`div`,{className:`branch-origin`,children:`UM DESVIO MÍNIMO`}),(0,p.jsxs)(`div`,{className:`branch-track`,"aria-hidden":`true`,children:[(0,p.jsx)(`i`,{}),(0,p.jsx)(`i`,{})]}),(0,p.jsxs)(`div`,{className:`branch-ends`,children:[(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`b`,{children:`OUTRAS POSSIBILIDADES`}),`Cosmo parte. Outras vidas se abrem.`]}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`b`,{children:`ESTA REALIDADE`}),`Cosmo fica. O Códice começa.`]})]})]})}function ne(){let[e,t]=ee(),n=Math.max(1,Math.round(1+t*1125)),r=Math.round(t*1125);return(0,p.jsx)(`div`,{className:`scroll-sequence time-sequence`,ref:e,"aria-label":`Três anos de observações`,children:(0,p.jsxs)(`div`,{className:`sticky-stage`,children:[(0,p.jsxs)(`div`,{className:`codex-stack`,"aria-hidden":`true`,children:[Array.from({length:10}).map((e,n)=>(0,p.jsx)(`span`,{style:{transform:`translate(${n*2.8}px, ${n*3.5-t*18}px) rotate(${(n-5)*.16}deg)`}},n)),(0,p.jsx)(`i`,{className:`folio-thread`}),(0,p.jsx)(`b`,{className:`folio-mark`,children:`III`})]}),(0,p.jsxs)(`div`,{className:`time-data`,children:[(0,p.jsx)(`span`,{className:`sequence-eyebrow`,children:`UMA PÁGINA POR DIA`}),(0,p.jsx)(`strong`,{children:String(n).padStart(4,`0`)}),(0,p.jsxs)(`div`,{className:`time-meta`,children:[(0,p.jsxs)(`span`,{children:[r,` DIAS`]}),(0,p.jsxs)(`span`,{children:[(n/365).toFixed(1),` ANOS`]})]}),(0,p.jsx)(`p`,{children:t<.28?`No início, cada possibilidade parecia irrepetível.`:t<.62?`Depois, as diferenças começaram a formar famílias.`:t<.88?`No terceiro ano, certas presenças se recusavam a desaparecer.`:`A página seguinte não se comportaria como as outras.`})]}),(0,p.jsxs)(`div`,{className:`scroll-instruction`,children:[`UMA PÁGINA · UM DIA `,(0,p.jsx)(`i`,{children:`↓`})]})]})})}var re=[[`0312`,`Cosmo parte cedo. Uma presença desconhecida entra em sua história meses depois.`],[`0481`,`A partida nunca ocorre. A mesma assinatura reaparece anos depois, por outra causa.`],[`0694`,`Reinos, estrada e encontro mudam. Parte do mesmo grupo volta a convergir.`],[`0907`,`Cosmo jamais ergue a torre. Ainda assim, algumas dessas vidas tornam a se tocar.`]];function w(){let[e,t]=ee(),n=Math.min(re.length-1,Math.floor(t*re.length));return(0,p.jsx)(`div`,{className:`scroll-sequence recurrence-sequence`,ref:e,"aria-label":`As assinaturas recorrentes`,children:(0,p.jsxs)(`div`,{className:`sticky-stage recurrence-stage`,children:[(0,p.jsxs)(`div`,{className:`record-index`,children:[(0,p.jsx)(`span`,{children:`ÍNDICE COMPARATIVO`}),(0,p.jsx)(`strong`,{children:re[n][0]})]}),(0,p.jsxs)(`div`,{className:`record-copy`,children:[(0,p.jsx)(`p`,{children:re[n][1]}),(0,p.jsxs)(`span`,{className:`signature`,children:[`ASSINATURA · `,(0,p.jsx)(`b`,{children:`RECORRENTE 01`})]})]},n),(0,p.jsxs)(`div`,{className:`recurrence-verdict ${t>.76?`visible`:``}`,children:[(0,p.jsx)(`span`,{children:`PADRÃO ESTATISTICAMENTE IMPROVÁVEL`}),(0,p.jsxs)(`strong`,{children:[`AS CONDIÇÕES MUDAM.`,(0,p.jsx)(`br`,{}),`A PESSOA RETORNA.`]})]}),(0,p.jsxs)(`div`,{className:`scroll-instruction`,children:[`COMPARE OS REGISTROS `,(0,p.jsx)(`i`,{children:`↓`})]})]})})}function ie(){let[e,t]=ee();return(0,p.jsx)(`div`,{className:`scroll-sequence blue-sequence`,ref:e,style:{"--blue-progress":t},"aria-label":`A página 1.127`,children:(0,p.jsxs)(`div`,{className:`sticky-stage blue-stage`,children:[(0,p.jsxs)(`div`,{className:`blue-paper`,children:[(0,p.jsxs)(`div`,{className:`paper-index`,children:[(0,p.jsx)(`span`,{children:`POSSIBILIDADE`}),(0,p.jsx)(`strong`,{children:`1127`})]}),(0,p.jsxs)(`div`,{className:`paper-copy`,"aria-hidden":`true`,children:[(0,p.jsx)(`span`,{children:`DATA DE CONVERGÊNCIA · INDETERMINADA`}),(0,p.jsx)(`span`,{children:`OBSERVADOR · COSMO DEWITTE`}),(0,p.jsx)(`span`,{children:`CONSTANTES · 17`}),(0,p.jsx)(`span`,{children:`RESULTADO · INDISPONÍVEL`})]}),(0,p.jsx)(`div`,{className:`chromatic-field`,children:(0,p.jsx)(S,{variant:`page`})}),(0,p.jsxs)(`div`,{className:`ink-deco`,"aria-hidden":`true`,children:[(0,p.jsx)(`i`,{}),(0,p.jsx)(`i`,{}),(0,p.jsx)(`span`,{children:`◇`}),(0,p.jsx)(`span`,{children:`◇`})]}),(0,p.jsxs)(`div`,{className:`blue-message`,children:[(0,p.jsx)(`span`,{children:t<.7?`OBSERVANDO…`:`ERRO DE REPRESENTAÇÃO`}),t>.84&&(0,p.jsxs)(`strong`,{children:[`EXISTE.`,(0,p.jsx)(`br`,{}),`NÃO PODE SER DESCRITA.`]})]})]}),(0,p.jsx)(`div`,{className:`scroll-instruction`,children:t<.95?`TENTE PROSSEGUIR ↓`:`A PÁGINA NÃO RESPONDE`})]})})}var ae=Array.from({length:28},(e,t)=>({angle:360/28*t+(t*17%11-5),length:118+t*47%205,delay:-(t*.37%5.6),tone:t%5}));function oe(){return(0,p.jsxs)(`div`,{className:`portal-corona`,"aria-hidden":`true`,children:[(0,p.jsx)(`div`,{className:`corona-rays`,children:ae.map((e,t)=>(0,p.jsx)(`span`,{className:`ray-tone-${e.tone}`,style:{"--ray-angle":`${e.angle}deg`,"--ray-length":`${e.length}px`,"--ray-delay":`${e.delay}s`}},t))}),(0,p.jsx)(`i`,{className:`circuit-layer circuit-one`}),(0,p.jsx)(`i`,{className:`circuit-layer circuit-two`}),(0,p.jsx)(`i`,{className:`circuit-layer circuit-three`}),(0,p.jsxs)(`div`,{className:`corona-cross`,children:[(0,p.jsx)(`i`,{}),(0,p.jsx)(`i`,{}),(0,p.jsx)(`i`,{}),(0,p.jsx)(`i`,{})]}),(0,p.jsx)(`b`,{className:`corona-core`})]})}function se(){let[e,t]=ee();return(0,p.jsx)(`div`,{className:`scroll-sequence portal-sequence`,ref:e,style:{"--cross-progress":t},"aria-label":`A travessia de Cosmo`,children:(0,p.jsxs)(`div`,{className:`sticky-stage portal-stage`,children:[(0,p.jsxs)(`div`,{className:`portal-ornament`,"aria-hidden":`true`,children:[(0,p.jsx)(`i`,{}),(0,p.jsx)(`span`,{children:`◇`}),(0,p.jsx)(`b`,{})]}),(0,p.jsxs)(`div`,{className:`portal-vortex`,"aria-hidden":`true`,children:[(0,p.jsx)(S,{variant:`portal`}),(0,p.jsx)(`div`,{className:`vortex-core`}),(0,p.jsx)(`div`,{className:`vortex-rim`})]}),(0,p.jsx)(oe,{}),(0,p.jsxs)(`div`,{className:`portal-copy`,children:[(0,p.jsx)(`span`,{className:`sequence-eyebrow`,children:`ALINHAMENTO DA PASSAGEM`}),(0,p.jsx)(`strong`,{children:t<.28?`CALDRIS`:t<.54?`RESSONÂNCIAS`:t<.78?`COORDENADA AUSENTE`:`TRAVESSIA`}),(0,p.jsx)(`p`,{children:t<.68?`Três anéis. Assinaturas recorrentes. Uma ausência exata.`:t<.9?`A arquitetura mágica de Cosmo começa a ficar para trás.`:`Memória preservada. Poder: uma fração.`})]}),(0,p.jsxs)(`div`,{className:`scroll-instruction`,children:[`ATRAVESSE `,(0,p.jsx)(`i`,{children:`↓`})]})]})})}function ce({masterNote:e}){let[t,n]=(0,f.useState)(`idle`),[r,i]=(0,f.useState)(0);return(0,p.jsxs)(`section`,{className:`final-question phase-${t}`,children:[(0,p.jsx)(`div`,{className:`final-rule`}),(0,p.jsx)(`span`,{className:`sequence-eyebrow`,children:`O REGISTRO TERMINA · A PERGUNTA NÃO`}),(0,p.jsx)(`h2`,{children:`Mas por quê?`}),(0,p.jsxs)(`div`,{className:`final-prompts`,children:[(0,p.jsx)(`p`,{children:`Ele sabia quando construiu a torre.`}),(0,p.jsx)(`p`,{children:`Iria sabia quando se despediu.`}),(0,p.jsx)(`p`,{children:`O diário dizia exatamente o que ele precisava lembrar.`})]}),(0,p.jsxs)(`p`,{className:`final-answer-lead`,children:[`Você veio até aqui porque `,(0,p.jsx)(`span`,{className:`cipher`,children:`⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧`}),`.`]}),t===`idle`&&(0,p.jsx)(`button`,{type:`button`,onClick:()=>{if(t!==`idle`)return;n(`loading`);let e=0,r=window.setInterval(()=>{e=Math.min(99,e+(e<74?9:e<92?4:1)),i(e),e>=99&&(clearInterval(r),setTimeout(()=>n(`corrupt`),900),setTimeout(()=>n(`done`),3100))},105)},children:`TENTAR LER A LACUNA`}),t===`loading`&&(0,p.jsxs)(`div`,{className:`recovery`,children:[(0,p.jsx)(`span`,{children:`RECONSTRUINDO A FRASE`}),(0,p.jsxs)(`strong`,{children:[r,`%`]}),(0,p.jsx)(`i`,{style:{width:`${r}%`}})]}),t===`corrupt`&&(0,p.jsxs)(`div`,{className:`corruption`,children:[(0,p.jsx)(`span`,{children:`MEMÓRIA ENCONTRADA · SIGNIFICADO AUSENTE`}),(0,p.jsxs)(`strong`,{children:[`Eu fiz tudo isso porque`,(0,p.jsx)(`span`,{className:`blink-block`,children:`█`})]})]}),t===`done`&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`failure`,"aria-live":`polite`,children:[(0,p.jsx)(`strong`,{className:`cipher`,children:`⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧`}),(0,p.jsx)(`span`,{children:`A FRASE EXISTE. O SENTIDO NÃO ATRAVESSOU.`}),(0,p.jsx)(`p`,{children:`Agora Cosmo vê a mesma ausência que você viu o tempo inteiro.`})]}),(0,p.jsxs)(`aside`,{className:`master-note`,children:[(0,p.jsx)(`span`,{children:`NOTA FINAL · PARA O MESTRE`}),e.split(/\n\s*\n/).map((e,t)=>(0,p.jsx)(`p`,{children:(0,p.jsx)(b,{text:e.replace(/\*\*/g,``)})},t))]})]})]})}function le(){let e=(0,f.useRef)(null),t=t=>{(e.current?.querySelector(`[data-codex-section="${t}"]`))?.scrollIntoView({behavior:`smooth`,block:`start`})};return(0,p.jsxs)(`div`,{className:`codex-dossier-layout`,children:[(0,p.jsxs)(`nav`,{className:`codex-index`,"aria-label":`Índice do dossiê do Códice`,children:[(0,p.jsx)(`span`,{children:`EXPLICANDO O CÓDICE · 12 REGISTROS`}),g.map(e=>(0,p.jsxs)(`button`,{type:`button`,onClick:()=>t(e.id),children:[(0,p.jsx)(`i`,{children:e.index}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`b`,{children:e.title}),(0,p.jsx)(`small`,{children:e.label})]}),(0,p.jsx)(`em`,{children:`↘`})]},e.id))]}),(0,p.jsxs)(`article`,{className:`codex-dossier`,ref:e,children:[(0,p.jsxs)(`header`,{className:`codex-dossier-cover`,children:[(0,p.jsxs)(`div`,{className:`codex-seal`,"aria-hidden":`true`,children:[(0,p.jsx)(`i`,{}),(0,p.jsx)(`b`,{children:`1.127`}),(0,p.jsx)(`i`,{})]}),(0,p.jsx)(`span`,{children:`ARQUIVO TÉCNICO · SISTEMA DE CARTOGRAFIA DO POSSÍVEL`}),(0,p.jsxs)(`h3`,{children:[`O Códice das`,(0,p.jsx)(`br`,{}),`Possibilidades`]}),(0,p.jsx)(`p`,{children:`Não um livro capaz de prever o futuro, mas uma máquina construída para comparar vidas que poderiam acontecer.`}),(0,p.jsxs)(`dl`,{children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`dt`,{children:`PROJETISTA`}),(0,p.jsx)(`dd`,{children:`Cosmo DeWitte`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`dt`,{children:`LOCAL`}),(0,p.jsx)(`dd`,{children:`Torre ao norte de Caldris`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`dt`,{children:`REGISTROS`}),(0,p.jsx)(`dd`,{children:`1.127 páginas`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`dt`,{children:`ÚLTIMA LEITURA`}),(0,p.jsx)(`dd`,{children:`Indisponível`})]})]})]}),(0,p.jsxs)(`section`,{className:`codex-entry`,"data-codex-section":`natureza`,children:[(0,p.jsx)(`span`,{children:`01 · NATUREZA`}),(0,p.jsx)(`h4`,{children:`O que é o Códice`}),(0,p.jsx)(`p`,{children:`Chamavam-no de Códice porque era mais fácil apontar para o grande livro de capa escura no último andar do que explicar os três pavimentos abaixo dele. O nome sobreviveu ao erro. O livro nunca foi a máquina inteira: era seu registro.`}),(0,p.jsx)(`p`,{children:`O verdadeiro Códice era um sistema de adivinhação distribuído pela torre. Prata, obsidiana, lentes, reagentes e matrizes arcanas trabalhavam juntos para fixar um ponto de partida, alterar uma condição e acompanhar as consequências. A magia capaz de sustentar tudo isso continuava vindo de Cosmo.`}),(0,p.jsxs)(`aside`,{children:[`O Códice não respondia “o que vai acontecer?”. Ele perguntava: `,(0,p.jsx)(`strong`,{children:`“o que poderia acontecer se isto fosse diferente?”`})]})]}),(0,p.jsxs)(`section`,{className:`codex-entry`,"data-codex-section":`origem`,children:[(0,p.jsx)(`span`,{children:`02 · ORIGEM`}),(0,p.jsx)(`h4`,{children:`O primeiro experimento`}),(0,p.jsx)(`p`,{children:`O princípio nasceu antes da torre. Duas placas de vidro, tratadas com sais diferentes, foram colocadas diante do mesmo espelho de adivinhação. Entre elas, uma única vela. Pela primeira vez, a magia de Cosmo sustentou duas consequências incompatíveis do mesmo estado inicial sem escolher uma delas como verdadeira.`}),(0,p.jsxs)(`div`,{className:`codex-origin-test`,"aria-label":`Duas consequências observadas simultaneamente`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`i`,{}),(0,p.jsx)(`b`,{children:`PLACA A`}),(0,p.jsx)(`strong`,{children:`CHAMA ACESA`})]}),(0,p.jsx)(`span`,{children:`MESMO INSTANTE`}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`i`,{className:`off`}),(0,p.jsx)(`b`,{children:`PLACA B`}),(0,p.jsx)(`strong`,{children:`CHAMA APAGADA`})]})]}),(0,p.jsx)(`p`,{children:`Cosmo deveria encontrar Tavian naquela manhã. Não foi. Ficou com o experimento. O que começou sobre uma mesa tornou-se uma matriz comparativa; a matriz exigiu espaço; o espaço acabou exigindo uma torre.`})]}),(0,p.jsxs)(`section`,{className:`codex-entry`,"data-codex-section":`arquitetura`,children:[(0,p.jsx)(`span`,{children:`03 · ARQUITETURA`}),(0,p.jsx)(`h4`,{children:`A torre como máquina`}),(0,p.jsx)(`p`,{children:`A construção não foi projetada para parecer misteriosa. Cada janela, canal e pavimento obedecia a uma necessidade de observação. A estranheza estava na planta.`}),(0,p.jsxs)(`div`,{className:`codex-levels`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`i`,{children:`III`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`b`,{children:`OBSERVAÇÃO`}),(0,p.jsx)(`small`,{children:`Segue as consequências da variável e conduz o resultado ao registro.`})]})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`i`,{children:`II`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`b`,{children:`VARIAÇÃO`}),(0,p.jsx)(`small`,{children:`Isola a única mudança que Cosmo pretende testar.`})]})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`i`,{children:`I`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`b`,{children:`CONSTANTES`}),(0,p.jsx)(`small`,{children:`Fixa tudo aquilo que precisa permanecer igual no estado inicial.`})]})]})]})]}),(0,p.jsxs)(`section`,{className:`codex-entry`,"data-codex-section":`componentes`,children:[(0,p.jsx)(`span`,{children:`04 · ANATOMIA`}),(0,p.jsx)(`h4`,{children:`Componentes`}),(0,p.jsx)(`p`,{children:`Nenhuma peça observa outra realidade sozinha. O resultado só existe quando a arquitetura funciona como um conjunto.`}),(0,p.jsx)(`div`,{className:`codex-component-grid`,children:_.map(([e,t],n)=>(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`i`,{children:String(n+1).padStart(2,`0`)}),(0,p.jsx)(`b`,{children:e}),(0,p.jsx)(`p`,{children:t})]},e))})]}),(0,p.jsxs)(`section`,{className:`codex-entry`,"data-codex-section":`pagina`,children:[(0,p.jsx)(`span`,{children:`05 · MÉTODO`}),(0,p.jsx)(`h4`,{children:`Como nasce uma página`}),(0,p.jsx)(`p`,{children:`Uma página exigia um dia. Não porque o Códice fosse lento, mas porque cada possibilidade precisava ser preparada, observada e separada da seguinte.`}),(0,p.jsxs)(`div`,{className:`codex-process`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`i`,{children:`01`}),(0,p.jsx)(`b`,{children:`ESTADO INICIAL`}),(0,p.jsx)(`small`,{children:`Definir um ponto conhecido.`})]}),(0,p.jsx)(`em`,{children:`→`}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`i`,{children:`02`}),(0,p.jsx)(`b`,{children:`VARIÁVEL`}),(0,p.jsx)(`small`,{children:`Alterar uma única condição.`})]}),(0,p.jsx)(`em`,{children:`→`}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`i`,{children:`03`}),(0,p.jsx)(`b`,{children:`OBSERVAÇÃO`}),(0,p.jsx)(`small`,{children:`Seguir as consequências.`})]}),(0,p.jsx)(`em`,{children:`→`}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`i`,{children:`04`}),(0,p.jsx)(`b`,{children:`REGISTRO`}),(0,p.jsx)(`small`,{children:`Fixar a possibilidade no papel.`})]})]}),(0,p.jsx)(`p`,{children:`Antes do amanhecer, Cosmo calibrava as lentes, preparava os vínculos, conferia a própria memória e fixava as constantes. Só então abria a matriz. Ao final do processo, o livro recebia uma possibilidade. No dia seguinte, tudo começava de novo.`})]}),(0,p.jsxs)(`section`,{className:`codex-entry`,"data-codex-section":`memoria`,children:[(0,p.jsx)(`span`,{children:`06 · EVOLUÇÃO`}),(0,p.jsx)(`h4`,{children:`De observar a recordar`}),(0,p.jsx)(`p`,{children:`No início, o Códice entregava imagens, sons e sequências. Isso bastava para saber o que acontecia, mas não para compreender por quê. Cosmo precisava distinguir coragem de desespero, hábito de coincidência, uma frase casual de uma frase capaz de alterar uma vida.`}),(0,p.jsx)(`p`,{children:`Vieram então as matrizes empáticas e a memória contextual. A partir delas, a fronteira entre assistir e recordar tornou-se perigosamente fina. Cosmo continuava fisicamente na torre; horas, não anos, passavam em Caldris. Ainda assim, uma possibilidade longa podia chegar à mente com continuidade emocional suficiente para deixar saudade, culpa, afeto e luto reais.`}),(0,p.jsxs)(`aside`,{children:[`Ele não viveu aquelas vidas. O sistema tornou-se preciso o bastante para que `,(0,p.jsx)(`strong`,{children:`se lembrasse delas como se tivesse vivido.`})]})]}),(0,p.jsxs)(`section`,{className:`codex-entry`,"data-codex-section":`recorrentes`,children:[(0,p.jsx)(`span`,{children:`07 · CONVERGÊNCIA`}),(0,p.jsx)(`h4`,{children:`Recorrentes e Âncoras`}),(0,p.jsx)(`p`,{children:`Em meio a centenas de possibilidades, certas pessoas começaram a reaparecer. Não possuíam uma raça, classe, origem ou encontro em comum. Na realidade da torre, Cosmo nunca havia conhecido nenhuma delas.`}),(0,p.jsxs)(`div`,{className:`codex-terms`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`b`,{children:`ASSINATURA RECORRENTE`}),(0,p.jsx)(`p`,{children:`Combinação de relações causais, ecos simpáticos e padrões de presença. Permite ao Códice reconhecer a mesma pessoa sem depender de nome ou aparência.`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`b`,{children:`RECORRENTE`}),(0,p.jsx)(`p`,{children:`O primeiro termo prático: alguém cuja assinatura continua aparecendo em possibilidades diferentes.`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`b`,{children:`ÂNCORA`}),(0,p.jsx)(`p`,{children:`O nome posterior. Não porque aquela pessoa permaneça igual, mas porque sua importância para o conjunto persiste quando quase todo o resto muda.`})]})]}),(0,p.jsx)(`p`,{children:`Os Recorrentes não eram a resposta procurada por Cosmo. Havia futuros em que todos estavam presentes e ele ainda falhava. Mas, nas possibilidades em que chegava mais perto, parte daquele grupo surgia vezes demais para continuar sendo tratada como ruído.`})]}),(0,p.jsxs)(`section`,{className:`codex-entry codex-anomaly`,"data-codex-section":`1127`,children:[(0,p.jsx)(`span`,{children:`08 · ANOMALIA`}),(0,p.jsx)(`h4`,{children:`A página 1.127`}),(0,p.jsxs)(`div`,{className:`anomaly-card`,children:[(0,p.jsx)(`i`,{children:`REGISTRO 1.127`}),(0,p.jsx)(`b`,{children:`EXISTE.`}),(0,p.jsx)(`strong`,{children:`NÃO PODE SER DESCRITA.`}),(0,p.jsx)(`small`,{children:`INFORMAÇÃO RETORNADA · 0%`})]}),(0,p.jsx)(`p`,{children:`A matriz alcançava alguma coisa. Consumia energia, estabilizava o vínculo e confirmava que uma possibilidade existia. Só não trazia informação de volta. Nenhuma imagem. Nenhum acontecimento. Nenhuma data. Nenhuma morte.`}),(0,p.jsx)(`p`,{children:`Por três anos, as possibilidades anteriores permitiram a Cosmo demonstrar por que fracassavam. A 1.127 foi a primeira em que ele não conseguiu demonstrar o fracasso — porque não conseguiu observá-la.`})]}),(0,p.jsxs)(`section`,{className:`codex-entry`,"data-codex-section":`travessia`,children:[(0,p.jsx)(`span`,{children:`09 · CONVERSÃO`}),(0,p.jsx)(`h4`,{children:`A Travessia`}),(0,p.jsx)(`p`,{children:`Cosmo fez algo para o qual o Códice não fora projetado: transformou um instrumento de observação em um meio de entrada. Um anel alinhou Caldris. Outro encontrou as assinaturas recorrentes. Um terceiro procurou a relação sem coordenada própria. Os sete espelhos voltaram-se para dentro.`}),(0,p.jsx)(`p`,{children:`O portal apareceu como uma falha na geometria, preenchida pelas mesmas cores impossíveis da página 1.127. Para atravessá-lo, Cosmo precisou abandonar grande parte da arquitetura mágica que havia moldado em si durante anos. Seus feitiços mais poderosos dependiam justamente da maneira como aprendera a perceber possibilidades observáveis — e aquele era o primeiro lugar em que essa forma de percepção falhava.`})]}),(0,p.jsxs)(`section`,{className:`codex-entry`,"data-codex-section":`clausula`,children:[(0,p.jsx)(`span`,{children:`10 · PROTOCOLO`}),(0,p.jsx)(`h4`,{children:`Cláusula de Continuidade`}),(0,p.jsx)(`p`,{children:`Antes da passagem, Cosmo incorporou à Travessia uma última estrutura: uma tendência probabilística ligada às Âncoras. Quando mais de um desfecho já é plausível, a Cláusula pode inclinar a margem para aquele em que uma delas continua viva.`}),(0,p.jsxs)(`div`,{className:`continuity-rule`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`b`,{children:`NÃO É`}),(0,p.jsx)(`span`,{children:`Imortalidade`}),(0,p.jsx)(`span`,{children:`Ressurreição`}),(0,p.jsx)(`span`,{children:`Garantia de sucesso`})]}),(0,p.jsx)(`i`,{children:`≠`}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`b`,{children:`É`}),(0,p.jsx)(`span`,{children:`Interferência entre resultados plausíveis`}),(0,p.jsx)(`span`,{children:`Proteção sem consentimento`}),(0,p.jsx)(`span`,{children:`Uma decisão moral de Cosmo`})]})]}),(0,p.jsx)(`p`,{children:`Ela também registra o defeito mais perigoso de seu criador: Cosmo se importa genuinamente com aquelas pessoas, mas pode decidir por elas quando acredita possuir informação suficiente para justificar o preço.`})]}),(0,p.jsxs)(`section`,{className:`codex-entry`,"data-codex-section":`estado`,children:[(0,p.jsx)(`span`,{children:`11 · REGISTRO`}),(0,p.jsx)(`h4`,{children:`Estado atual`}),(0,p.jsxs)(`dl`,{className:`codex-status`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`dt`,{children:`LOCALIZAÇÃO`}),(0,p.jsx)(`dd`,{children:`Realidade de origem · Torre ao norte de Caldris`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`dt`,{children:`CUSTÓDIA`}),(0,p.jsx)(`dd`,{children:`Iria · Neris possui a segunda chave`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`dt`,{children:`CRIADOR / OPERADOR`}),(0,p.jsx)(`dd`,{children:`Cosmo DeWitte · ausente desta realidade`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`dt`,{children:`ÚLTIMO REGISTRO`}),(0,p.jsx)(`dd`,{children:`Página 1.127`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`dt`,{children:`PRÓXIMA PÁGINA`}),(0,p.jsx)(`dd`,{children:`—`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`dt`,{children:`OPERACIONALIDADE`}),(0,p.jsx)(`dd`,{children:`Não confirmada após a Travessia`})]})]})]}),(0,p.jsxs)(`section`,{className:`codex-entry codex-missing`,"data-codex-section":`lacuna`,children:[(0,p.jsx)(`span`,{children:`12 · FALHA`}),(0,p.jsx)(`h4`,{children:`A informação ausente`}),(0,p.jsx)(`p`,{children:`O Códice não foi criado por curiosidade. Antes da torre, antes das 1.127 páginas e antes dos Recorrentes, existia uma razão específica. Cosmo e Iria a conheciam. A família de Cosmo reconhecia o assunto. O diário a registrava por redundância.`}),(0,p.jsxs)(`div`,{className:`missing-record`,children:[(0,p.jsx)(`span`,{children:`OBJETIVO PRIMÁRIO`}),(0,p.jsx)(`strong`,{className:`cipher`,children:`⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧`}),(0,p.jsx)(`i`,{children:`ACESSO À INFORMAÇÃO · INTERROMPIDO NA TRAVESSIA`})]}),(0,p.jsx)(`p`,{children:`Até o instante em que atravessou, Cosmo compreendia perfeitamente essa frase. Depois, perdeu apenas o conteúdo que dava sentido último à jornada. A memória do caminho permaneceu. A razão de percorrê-lo, não.`})]})]})]})}function ue(){let[e,t]=(0,f.useState)(!1),[n,r]=(0,f.useState)(!1),[i,a]=(0,f.useState)(!1),[o,s]=(0,f.useState)(`characters`),[c,l]=(0,f.useState)(h[0].id),u=h.find(e=>e.id===c)||h[0];return(0,f.useEffect)(()=>{if(!e&&!n)return;let i=document.body.style.overflow;document.body.style.overflow=`hidden`;let a=e=>{e.key===`Escape`&&(t(!1),r(!1))};return addEventListener(`keydown`,a),()=>{document.body.style.overflow=i,removeEventListener(`keydown`,a)}},[e,n]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`button`,{className:`character-archive-trigger`,type:`button`,onClick:()=>{if(window.localStorage.getItem(`codice-character-spoilers-ok`)===`true`){r(!0);return}t(!0)},"aria-haspopup":`dialog`,children:[(0,p.jsx)(`span`,{"aria-hidden":`true`,children:`◇`}),(0,p.jsx)(`b`,{children:`ARQUIVO`}),(0,p.jsx)(`i`,{children:`REGISTROS`})]}),e&&(0,p.jsx)(`div`,{className:`spoiler-backdrop`,role:`presentation`,onMouseDown:e=>{e.target===e.currentTarget&&t(!1)},children:(0,p.jsxs)(`section`,{className:`spoiler-warning`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`spoiler-title`,children:[(0,p.jsxs)(`div`,{className:`warning-sigil`,"aria-hidden":`true`,children:[(0,p.jsx)(`i`,{}),(0,p.jsx)(`span`,{children:`!`}),(0,p.jsx)(`i`,{})]}),(0,p.jsx)(`span`,{className:`archive-eyebrow`,children:`ARQUIVO RESTRITO · AVISO AO LEITOR`}),(0,p.jsx)(`h2`,{id:`spoiler-title`,children:`Antes de abrir o arquivo`}),(0,p.jsxs)(`p`,{children:[`Você está prestes a entrar em uma parte que contém informações sobre personagens, relações e acontecimentos da história. Algumas delas podem funcionar como `,(0,p.jsx)(`strong`,{children:`spoilers`}),` se você ainda não terminou a leitura.`]}),(0,p.jsx)(`p`,{children:`Deseja continuar mesmo assim?`}),(0,p.jsxs)(`label`,{className:`spoiler-remember`,children:[(0,p.jsx)(`input`,{type:`checkbox`,checked:i,onChange:e=>a(e.target.checked)}),(0,p.jsx)(`span`,{"aria-hidden":`true`}),(0,p.jsx)(`b`,{children:`Não perguntar novamente neste dispositivo`})]}),(0,p.jsxs)(`div`,{className:`spoiler-actions`,children:[(0,p.jsx)(`button`,{type:`button`,onClick:()=>{i&&window.localStorage.setItem(`codice-character-spoilers-ok`,`true`),t(!1),r(!0)},children:`SIM, CONTINUAR`}),(0,p.jsx)(`button`,{type:`button`,onClick:()=>t(!1),children:`NÃO, VOLTAR`})]})]})}),n&&(0,p.jsx)(`div`,{className:`character-archive-backdrop`,role:`presentation`,children:(0,p.jsxs)(`section`,{className:`character-archive`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`archive-title`,children:[(0,p.jsxs)(`header`,{className:`archive-header`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`span`,{className:`archive-eyebrow`,children:`REGISTRO PESSOAL · COSMO DEWITTE`}),(0,p.jsx)(`h2`,{id:`archive-title`,children:o===`characters`?`Personagens da minha história`:`Explicando o Códice`})]}),(0,p.jsx)(`button`,{className:`archive-close`,type:`button`,onClick:()=>r(!1),"aria-label":`Fechar arquivo`,children:`×`})]}),(0,p.jsxs)(`nav`,{className:`archive-tabs`,"aria-label":`Seções do arquivo`,children:[(0,p.jsxs)(`button`,{type:`button`,className:o===`characters`?`active`:``,onClick:()=>s(`characters`),children:[(0,p.jsx)(`i`,{children:`01`}),` PERSONAGENS`]}),(0,p.jsxs)(`button`,{type:`button`,className:o===`codex`?`active`:``,onClick:()=>s(`codex`),children:[(0,p.jsx)(`i`,{children:`02`}),` O CÓDICE`]})]}),o===`characters`?(0,p.jsxs)(`div`,{className:`archive-body`,children:[(0,p.jsxs)(`nav`,{className:`character-roster`,"aria-label":`Lista de personagens`,children:[(0,p.jsxs)(`span`,{children:[`REGISTROS CONHECIDOS · `,String(h.length).padStart(2,`0`)]}),h.map((e,t)=>(0,p.jsxs)(`button`,{type:`button`,className:c===e.id?`active`:``,onClick:()=>l(e.id),children:[(0,p.jsx)(`i`,{children:String(t+1).padStart(2,`0`)}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`b`,{children:e.name}),(0,p.jsx)(`small`,{children:e.role.split(` · `)[0]})]}),(0,p.jsx)(`em`,{children:`↗`})]},e.id)),(0,p.jsxs)(`div`,{className:`open-record`,children:[(0,p.jsx)(`b`,{children:`REGISTRO EM ABERTO`}),(0,p.jsx)(`p`,{children:`Os Recorrentes ainda não têm nomes, classes ou raças definidos. Essas fichas só existem quando o grupo da campanha existir.`})]})]}),(0,p.jsxs)(`article`,{className:`character-sheet`,children:[(0,p.jsxs)(`div`,{className:`character-monogram`,"aria-hidden":`true`,children:[(0,p.jsx)(`i`,{}),(0,p.jsx)(`span`,{children:u.initials}),(0,p.jsx)(`i`,{})]}),(0,p.jsxs)(`div`,{className:`character-title`,children:[(0,p.jsxs)(`span`,{children:[`REGISTRO · `,u.id.toUpperCase()]}),(0,p.jsx)(`h3`,{children:u.name}),(0,p.jsx)(`p`,{children:u.role})]}),(0,p.jsx)(`dl`,{className:`character-facts`,children:u.facts.map(([e,t])=>(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`dt`,{children:e}),(0,p.jsx)(`dd`,{children:t})]},e))}),(0,p.jsxs)(`div`,{className:`character-biography`,children:[(0,p.jsx)(`span`,{children:`SOBRE`}),(0,p.jsx)(`p`,{children:u.summary})]}),(0,p.jsxs)(`div`,{className:`character-traits`,children:[(0,p.jsx)(`span`,{children:`TRAÇOS`}),(0,p.jsx)(`div`,{children:u.traits.map(e=>(0,p.jsx)(`b`,{children:e},e))})]}),(0,p.jsxs)(`div`,{className:`character-notes`,children:[(0,p.jsxs)(`section`,{children:[(0,p.jsx)(`span`,{children:`VÍNCULO COM COSMO`}),(0,p.jsx)(`p`,{children:u.connection})]}),(0,p.jsxs)(`section`,{children:[(0,p.jsx)(`span`,{children:`CONTRADIÇÃO`}),(0,p.jsx)(`p`,{children:u.tension})]})]})]},u.id)]}):(0,p.jsx)(le,{}),(0,p.jsxs)(`footer`,{className:`archive-footer`,children:[(0,p.jsx)(`span`,{children:`◇`}),(0,p.jsx)(`p`,{children:o===`characters`?`O que está registrado aqui pertence à história conhecida. O que ainda não existe continua em branco.`:`Uma possibilidade por dia. Mil cento e vinte e sete tentativas. Uma única página sem resposta.`}),(0,p.jsx)(`span`,{children:`◇`})]})]})})]})}function T({manuscript:e,masterNote:t}){let n=(0,f.useMemo)(()=>v(e),[e]),[r,i]=(0,f.useState)(0),[a,o]=(0,f.useState)(0);return(0,f.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollHeight-innerHeight;i(e>0?scrollY/e:0)};return e(),addEventListener(`scroll`,e,{passive:!0}),()=>removeEventListener(`scroll`,e)},[]),(0,f.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&o(Number(e.target.dataset.index||0))})},{rootMargin:`-38% 0px -48% 0px`,threshold:0}),t=new IntersectionObserver(e=>e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`revealed`)}),{rootMargin:`0px 0px -10%`,threshold:.08});return document.querySelectorAll(`.chapter`).forEach(t=>e.observe(t)),document.querySelectorAll(`.prose > p`).forEach(e=>t.observe(e)),()=>{e.disconnect(),t.disconnect()}},[n]),(0,p.jsxs)(`main`,{className:`experience`,"data-tone":m[a]||`cobalt`,children:[(0,p.jsxs)(`div`,{className:`fixed-atmosphere`,"aria-hidden":`true`,children:[(0,p.jsx)(`div`,{className:`orbital-grid`}),(0,p.jsx)(`div`,{className:`side-runes runes-left`,children:`✦ · ◇ · ☽ · ⟁ · ✧`}),(0,p.jsx)(`div`,{className:`side-runes runes-right`,children:`✧ · ⟁ · ☽ · ◇ · ✦`})]}),(0,p.jsxs)(`div`,{className:`deco-frame`,"aria-hidden":`true`,children:[(0,p.jsx)(`i`,{}),(0,p.jsx)(`i`,{}),(0,p.jsx)(`i`,{}),(0,p.jsx)(`i`,{})]}),(0,p.jsx)(`div`,{className:`reading-progress`,"aria-hidden":`true`,children:(0,p.jsx)(`span`,{style:{transform:`scaleX(${r})`}})}),(0,p.jsx)(ue,{}),(0,p.jsxs)(`section`,{className:`cover-screen`,id:`inicio`,children:[(0,p.jsx)(`div`,{className:`cover-kicker`,children:`GRIMÓRIO DE OBSERVAÇÃO · VOLUME 1.127`}),(0,p.jsx)(x,{}),(0,p.jsxs)(`h1`,{children:[`O Códice das`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`span`,{children:`Possibilidades`})]}),(0,p.jsx)(`p`,{children:`Crônica de Cosmo DeWitte`}),(0,p.jsx)(`div`,{className:`cover-rule`}),(0,p.jsx)(`small`,{children:`UMA CARTOGRAFIA DO POSSÍVEL · REGISTRADA POR COSMO DEWITTE`}),(0,p.jsxs)(`a`,{href:`#sumario`,onClick:e=>{e.preventDefault(),document.getElementById(`sumario`)?.scrollIntoView({behavior:`smooth`,block:`start`})},children:[`COMEÇAR A LEITURA `,(0,p.jsx)(`span`,{children:`↓`})]})]}),(0,p.jsxs)(`nav`,{className:`contents`,id:`sumario`,"aria-label":`Sumário`,children:[(0,p.jsxs)(`div`,{className:`contents-heading`,children:[(0,p.jsx)(`span`,{children:`SUMÁRIO`}),(0,p.jsx)(`p`,{children:`Selecione uma parte ou siga a leitura normalmente.`})]}),(0,p.jsx)(`ol`,{children:n.map((e,t)=>(0,p.jsx)(`li`,{className:a===t?`active`:``,children:(0,p.jsxs)(`a`,{href:`#${y(e.title)}`,children:[(0,p.jsx)(`span`,{children:String(t).padStart(2,`0`)}),(0,p.jsx)(`b`,{children:e.title}),(0,p.jsx)(`i`,{children:`↘`})]})},e.title))})]}),(0,p.jsxs)(`div`,{className:`story-shell`,children:[n.map((e,t)=>(0,p.jsxs)(`section`,{className:`chapter`,id:y(e.title),"data-index":t,children:[(0,p.jsxs)(`header`,{className:`chapter-heading`,children:[(0,p.jsxs)(`span`,{children:[String(t).padStart(2,`0`),` / `,String(n.length-1).padStart(2,`0`)]}),(0,p.jsx)(`h2`,{children:e.title}),(0,p.jsx)(`i`,{})]}),(0,p.jsx)(`div`,{className:`prose`,children:e.paragraphs.map((e,n)=>(0,p.jsxs)(f.Fragment,{children:[(0,p.jsx)(`p`,{children:(0,p.jsx)(b,{text:e})}),e===`Cada página exigia preparação.`&&(0,p.jsx)(C,{}),e===`Nesta, ele ficou.`&&(0,p.jsx)(te,{}),e===`Uma página por dia.`&&(0,p.jsx)(ne,{}),e===`Cosmo criou um índice.`&&(0,p.jsx)(w,{}),e===`A página 1.127 começou como todas as outras.`&&(0,p.jsx)(ie,{}),e.startsWith(`Cosmo ativou o mecanismo às`)&&(0,p.jsx)(se,{})]},`${t}-${n}`))})]},e.title)),(0,p.jsx)(ce,{masterNote:t}),(0,p.jsxs)(`footer`,{className:`end-mark`,children:[(0,p.jsx)(x,{}),(0,p.jsx)(`span`,{children:`FIM DO REGISTRO · INÍCIO DA HISTÓRIA`})]})]})]})}var E=`# O CÓDICE DAS POSSIBILIDADES

## Crônica de Cosmo DeWitte

*Um mapa não promete que o mundo vai obedecer. Promete apenas que alguém tentou entendê-lo.*


### Capítulo I — Mapas e relógios

Cosmo DeWitte nasceu numa casa em que discordar era uma forma aceitável de afeto.

Sua mãe, Miren, desenhava mapas para pessoas que raramente concordavam a respeito do mundo. Mercadores traziam distâncias medidas em dias ruins de viagem; soldados juravam que uma ponte ficava ao norte de uma mata que outros colocavam a leste; camponeses descreviam rios como se eles fossem parentes temperamentais, capazes de mudar de humor entre uma estação e outra. Miren ouvia todos com a mesma atenção, fazia perguntas, comparava relatos e, quando não sabia, deixava espaços em branco.

Cosmo tinha oito anos quando aquilo começou a incomodá-lo.

— O tropeiro de ontem disse que o rio corre para oeste — comentou, inclinado sobre a mesa da mãe. — O homem de hoje disse que corre para sul. Um dos dois mentiu.

Miren continuou traçando uma linha muito fina com a pena.

— Talvez.

— Talvez?

— Talvez tenham visto partes diferentes do mesmo rio. Talvez um deles estivesse perdido. Talvez a cheia tenha aberto outro braço. Talvez um tenha mentido. Ainda não fui lá.

Cosmo olhou para a região incompleta do mapa.

— Então você não sabe o que desenhar.

— Exatamente.

— Isso não incomoda você?

Miren pousou a pena e o encarou como se a pergunta fosse mais séria do que ele pretendia.

— Muito. Por isso deixei em branco. O erro mais perigoso de um cartógrafo não é desenhar uma linha torta, Cosmo. É desenhar uma linha com certeza onde ninguém foi conferir.

Orren DeWitte, pai de Cosmo, achava a filosofia da esposa bonita e ligeiramente irritante. Fabricava relógios, astrolábios, balanças, compassos e instrumentos de precisão para gente que pagava justamente para diminuir a quantidade de talvez no mundo. Conseguia passar uma tarde inteira raspando uma peça de bronze porque um ponteiro terminava dois graus fora da marca. Quando Miren dizia que toda medida possuía margem de erro, Orren respondia que margem de erro era apenas o nome educado de uma ferramenta que ainda podia ser melhorada.

Cosmo cresceu entre os dois.

Aprendeu com a mãe que toda representação era incompleta; com o pai, que reconhecer a imperfeição não era desculpa para desistir da precisão. Essa combinação produziu um menino otimista o suficiente para acreditar que problemas podiam ser resolvidos e desconfiado o bastante para exigir que qualquer solução sobrevivesse a uma segunda pergunta.

Não houve profecia em seu nascimento. Nenhuma estrela mudou de posição. Nenhum sacerdote apareceu à porta da família para anunciar uma criança destinada a qualquer coisa. Cosmo teve uma infância normal o bastante para que, décadas depois, se irritasse quando tentavam explicar seus excessos supondo uma grande tragédia escondida. Seu pai não foi assassinado. Sua mãe não morreu de uma enfermidade misteriosa. Sua irmã mais nova, Neris, cresceu saudável e adquiriu cedo o hábito de entrar no quarto dele sem bater.

Ele foi feliz. Também foi insuportável em intervalos regulares.

Aos treze anos, economizou por meses para comprar um tratado de astronomia e devolveu o exemplar ao livreiro com vinte e três erros marcados nas margens. Aos quinze, passou nos exames do Colégio de Caldris com uma recomendação que guardaria pelo resto da vida. Não era a frase sobre sua aptidão arcana que ele gostava de reler, mas a seguinte: *demonstra persistência incomum diante de problemas que não cedem à primeira abordagem*.

Foi no Colégio que conheceu Mael Corven.

Mael ensinava adivinhação como quem ensinava a desmontar uma armadilha. Proibia a palavra *destino* nas aulas introdutórias, confiscava baralhos de alunos que tentavam impressionar colegas com truques de salão e tinha especial desprezo por profecias recitadas em tom solene. Dizia que um presságio era informação, não ordem; que uma visão sem contexto era apenas uma maneira sofisticada de errar com confiança; e que o pior vício de um adivinho era se apaixonar pela própria previsão.

Na primeira aula prática de Cosmo, uma bacia de scrying rachou e o nariz do garoto começou a sangrar.

— Limpe — disse Mael.

Cosmo pressionou um lenço contra o rosto.

— O senhor disse para interromper se houvesse dor.

— Eu disse para interromper se houvesse dor que você não compreendesse. Por que está sangrando?

— A matriz ficou instável, a carga retornou pelo vínculo simpático e aumentou a pressão nos vasos da face.

— Ótimo. Você entendeu o sangue. Agora descubra a bacia.

— Ela quebrou.

— Essa é a parte que você ainda não entendeu.

Mael não o fez repetir o feitiço até o dia seguinte. Passou duas horas mostrando onde o encantamento falhara, por que falhara e quais sinais Cosmo ignorara porque estava ocupado demais tentando obter o resultado. O garoto gostou dele a partir daí, embora ambos mantivessem a cortesia de não dizer isso durante muitos anos.

Aos dezessete, Cosmo fez a pergunta que transformaria adivinhação de disciplina em obsessão.

— Se eu vejo uma carruagem quebrar o eixo amanhã, e amanhã a carruagem quebra o eixo exatamente como vi, então aquele futuro já era verdadeiro hoje?

Mael fechou o livro que estava lendo.

— Não.

— É uma resposta curta para uma pergunta grande.

— Porque você colocou o erro na pergunta. O que sua visão prova?

— Que a carruagem vai quebrar.

— Não. Depois que acontecer, ela prova que sua descrição correspondeu ao acontecimento. Você pulou da correspondência para a necessidade sem pagar a ponte.

Cosmo franziu a testa.

— Então uma previsão correta não significa nada?

— Significa muito. Esse é o perigo. Informação útil seduz você a tratá-la como ordem. Você quer que uma visão seja uma sentença porque sentenças aliviam o condenado da responsabilidade de escolher.

— Eu não quero ser aliviado. Quero saber o que é verdadeiro.

Mael o observou por alguns segundos.

— Não. Você quer saber o que continuará verdadeiro depois que você souber. Essa é uma pergunta melhor.

Cosmo pegou a pena.

— E a resposta?

— Se eu tivesse, você acha que ainda estaria dando aula?

Cosmo anotou a pergunta em vez da resposta.

Foi o começo.

Sua juventude não desapareceu dentro de bibliotecas. Teve amigos, bebeu além da conta algumas vezes, perdeu dinheiro jogando cartas porque descobriu que prever tendências não ajudava quando o adversário escondia um rei na manga. Apaixonou-se pelo menos duas vezes com convicção suficiente para escrever correspondências que Neris ameaçaria citar no casamento dele, caso algum dia acontecesse. Viajou com grupos do Colégio, ganhou uma cicatriz fina perto da clavícula numa ruína ao norte e concluiu que preferia livros a monstros sem cometer o erro de imaginar que livros fossem necessariamente mais seguros.

Tavian Roe tornou-se seu melhor amigo porque não parecia impressionado com nenhuma dessas coisas.

— Você tem uma habilidade admirável de prever chuva e uma incompetência ainda mais admirável para lembrar do próprio casaco — disse Tavian certa vez, enquanto os dois voltavam encharcados para Caldris.

— Minha previsão estava correta.

— Suas mangas discordam.

— As mangas confirmam a previsão.

Tavian riu.

Cosmo também.

Ele não se tornaria um homem sombrio quando envelhecesse. Não por natureza. Seu defeito nunca foi falta de esperança; talvez fosse o contrário. Cosmo acreditava com teimosia na existência de uma solução mesmo depois que pessoas mais sensatas aceitavam o fracasso. Só não confundia esperança com confiança. Desconfiava de sacerdotes, professores, autoridades, instrumentos, previsões e, com uma disciplina que nem sempre conseguia manter, de si mesmo.

Esperança, para Cosmo, não era a certeza de que tudo terminaria bem.

Era a hipótese de que ainda valia a pena procurar.


### Capítulo II — A pergunta que não aparece

O poder veio devagar e depois depressa.

Aos vinte anos, Cosmo conseguia encontrar uma pessoa desaparecida a partir de um objeto que ela tivesse usado por tempo suficiente. Aos vinte e quatro, identificou uma recorrência estranha nas visões de uma cerimônia pública e convenceu o conselho de Caldris a esvaziar uma arquibancada horas antes de ela desabar. Aos vinte e sete, nobres que jamais aprenderiam a pronunciar seu sobrenome enviavam criados com perguntas sobre colheitas, herdeiros e guerras. Aos trinta, Mael já estava aposentado e recusava-se a chamá-lo de mestre apenas porque sabia o quanto aquilo o irritava.

Quanto melhor Cosmo ficava, menos gostava da forma como sua arte respondia.

A adivinhação tradicional isolava uma pergunta e procurava uma consequência estável. *Se o exército marchar para o norte, o que acontecerá? Se o navio partir na quinta-feira, chegará? Se abrirmos esta porta, alguém morrerá?* O método funcionava justamente porque ignorava quase todo o resto. Reduzia uma realidade vasta a uma linha que uma mente humana conseguia examinar.

Cosmo descobriu a falha ao tentar evitar um incêndio. Viu repetidamente a oficina de um artesão pegar fogo ao anoitecer e avisou o proprietário. O homem fechou o lugar mais cedo, dispensou os aprendizes e ficou para vigiar.

A oficina não queimou.

A casa dele, duas ruas adiante, queimou enquanto estava vazia.

Ninguém morreu. Mesmo assim, Cosmo passou uma semana pensando naquilo.

— Você impediu o incêndio que viu — disse Mael quando ele apareceu com quatro páginas de anotações.

— E alterei uma condição que eu não tinha observado.

— Isso acontece quando pessoas agem.

— Então a visão estava incompleta.

— Todas estão.

— Você diz isso com uma tranquilidade irritante.

— Eu envelheci. É um dos poucos privilégios.

Cosmo empurrou as anotações pela mesa.

— Não quero perguntar apenas o que acontece. Quero perguntar o que muda quando eu descubro o que acontece.

Mael leu a primeira página, depois a segunda. Quando terminou, voltou à primeira.

— Você quer fazer cartografia de possibilidades.

— Minha mãe ficaria orgulhosa.

— Sua mãe teria a sensatez de escrever *território não verificado* em metade disso.

— É exatamente o que pretendo fazer.

— E quando o mapa ficar maior do que você?

Cosmo recolheu os papéis.

— Construo uma mesa maior.

Alguns meses depois, a pergunta deixou de ser acadêmica.

Tavian percebeu antes da família. Encontrou o amigo numa taverna perto do Colégio, cercado por anotações que não combinavam com a cerveja esquecida entre elas. Cosmo estava havia semanas repetindo a mesma família de adivinhações, mudando formulações, horários e instrumentos.

— Ainda procurando ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧? — perguntou Tavian.

Cosmo levantou os olhos.

— Enquanto eu tiver razões para acreditar que é possível.

— Você tem razões ou tem vontade?

— As duas coisas não são mutuamente exclusivas.

— Não foi o que perguntei.

Cosmo apoiou as costas na cadeira.

— Tenho evidência suficiente para continuar e não o bastante para confiar nela. É a pior combinação possível.

Tavian puxou a cadeira diante dele.

— E se não existir um caminho?

— Então eu gostaria de descobrir isso sem escolher arbitrariamente qual caminho testar.

— Você fala como se o universo fosse uma fechadura.

— E você fala como se aceitar que uma porta está fechada fosse uma virtude.

— Às vezes é. Principalmente se o homem tentando abrir estiver disposto a quebrar a própria mão na maçaneta.

Cosmo sorriu, mas não discordou.

Aquilo já importava havia tempo suficiente para que todos os que lhe eram próximos reconhecessem o assunto sem introdução. Miren sabia. Orren sabia. Neris sabia mais do que Cosmo gostaria. Mael fizera objeções em vocabulário cada vez menos acadêmico. Nenhum deles precisava perguntar por que Cosmo continuava voltando à mesma pergunta: se havia, entre todas as consequências possíveis, uma única sequência em que ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧.

Cosmo tentou primeiro como qualquer adivinho tentaria. Consultou presságios. Alterou decisões pequenas. Procurou circunstâncias favoráveis. Depois começou a comparar caminhos.

Em um, aproximava-se e falhava.

Em outro, desistia cedo demais.

Em outro, conseguia exatamente o que pretendia fazer e descobria tarde demais que isso não bastava.

O detalhe que o apavorou não foi fracassar. Foi perceber que não conseguia distinguir um fracasso inevitável de uma pergunta mal formulada.

Se uma adivinhação mostrava que ele não alcançaria ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧, isso significava que era impossível ou apenas que aquela sequência de escolhas não funcionava? Quantas condições precisariam mudar? Em que ponto uma nova tentativa deixava de ser variação e se tornava outra vida?

Foi então que Cosmo parou de procurar uma previsão.

Decidiu procurar uma possibilidade.


### Capítulo III — A estrada que ele não tomou

A decisão que separou a vida de Cosmo de muitas outras não teve trovões, visões ou música apropriada.

Teve uma carta.

Tavian escrevera de uma estalagem chamada Veado Branco. Chuvas fortes haviam exposto ruínas a oeste de Caldris; havia inscrições antigas, um patrocinador disposto a pagar e, segundo ele, perigo suficiente para impedir que a viagem se tornasse educativa demais. Outros aventureiros se encontrariam na estalagem na manhã seguinte.

Cosmo pretendia ir.

Separou uma bolsa, escolheu dois livros, depois voltou a guardar um deles porque se recusava a admitir que precisaria dos dois. Prometeu a Neris que apareceria para jantar antes da partida. Estava procurando um casaco quando um experimento que repetia havia meses finalmente funcionou.

Duas placas de vidro tratadas com sais diferentes estavam alinhadas diante do mesmo espelho de adivinhação. Cosmo acendeu uma vela entre elas e estabilizou a matriz.

Numa placa, a chama permaneceu acesa.

Na outra, apagou.

Ao mesmo tempo.

Não eram imagens sucessivas, ilusão ou eco. Duas consequências incompatíveis do mesmo estado inicial estavam presentes sem que a magia exigisse que uma delas fosse declarada verdadeira.

Cosmo ficou imóvel por alguns segundos.

Depois olhou para a bolsa pronta.

Depois para o experimento.

Sentou-se.

Quando tornou a perceber a passagem do tempo, o sol já estava nascendo. O Veado Branco ficava a duas horas de distância e Tavian provavelmente havia partido.

Neris encontrou a carta ao lado de quatro canecas de café.

— Você consegue alcançar o grupo.

— Consigo.

— Vai?

Cosmo observou as duas placas. Tinha reproduzido o efeito três vezes.

— Não.

— Porque isso é mais importante?

Ele pensou antes de responder.

— Porque isso pode me permitir parar de perguntar se escolhi a tentativa errada.

Neris conhecia a frase escondida por trás daquela resposta. Encostou-se à porta.

— E depois?

— Depois eu encontro um caminho até ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧.

— E depois?

Cosmo a encarou.

— Depois eu vou viver.

— Esse é o problema. Você diz isso sobre tudo. Vai jantar depois da experiência. Vai viajar depois do artigo. Vai dormir depois do cálculo. Um dia você vai perceber que transformou a própria vida na coisa que pretende fazer assim que terminar a próxima pergunta.

Cosmo tentou encontrar uma resposta inteligente. Neris não lhe deu tempo.

— Só pensa nisso — disse, antes de descer.

Ele pensou.

Ficou mesmo assim.

Meses depois, Tavian retornou com histórias sobre as ruínas e as pessoas que conhecera no caminho. Cosmo ouviu algumas com interesse, outras com uma cerveja na mão, e guardou nomes sem atribuir importância especial a eles. Se tivesse ido ao Veado Branco naquela manhã, teria conhecido aquelas pessoas muito antes.

Em muitas possibilidades, foi exatamente o que aconteceu.

Nesta, ele ficou.

O experimento das placas tornou-se uma matriz comparativa. A matriz exigiu mais espaço. O espaço exigiu instrumentos capazes de permanecer calibrados por dias. No terreno antigo da família ao norte de Caldris, onde Orren sonhara construir uma oficina maior antes de descobrir que odiava subir aquela estrada no inverno, Cosmo começou a erguer uma torre.

Não era uma torre de mago como as histórias gostavam de descrever. Não havia gárgulas, cristais flutuantes ou corredores que levavam a cômodos maiores por dentro. Havia contas, trabalhadores irritados, pedra chegando atrasada e Orren discutindo vinte minutos sobre a fundação.

A estranheza estava no projeto.

Três andares eram atravessados por canais de prata. O piso superior tinha sete posições para espelhos de obsidiana. A escadaria central contornava um poço cilíndrico onde anéis de metal poderiam girar sem tocar as paredes. Nenhuma janela estava onde seria mais bonita; todas obedeciam a ângulos específicos em relação ao horizonte mágico de Caldris.

Orren examinou o desenho final.

— Você está construindo um observatório.

— Em parte.

— Observatórios olham para alguma coisa.

Cosmo apontou para o círculo central.

— Este vai olhar para diferenças.

— Diferenças entre o quê?

— Entre o que acontece e o que teria acontecido se uma coisa fosse diferente.

Orren ficou calado por alguns segundos.

— Seu problema com relógios sempre foi eles medirem só uma hora de cada vez.

— É uma limitação de projeto.

— Não era elogio.

Cosmo sorriu.

O pai voltou aos desenhos.

— Quanto vai custar?

— Ainda não sei.

— Então já custa mais do que você calculou.

Orren estava certo.


### Capítulo IV — Iria

Neris conheceu Iria numa manhã de inverno.

Subiu à torre sem avisar, como fazia desde que ambos eram crianças, e encontrou uma mulher sentada sobre a bancada da cozinha lendo um livro. Tinha cabelos escuros presos de modo descuidado, vestia uma camisa branca sob um casaco de Cosmo e segurava uma maçã intacta havia tempo suficiente para que ficasse evidente que não pretendia comê-la.

Neris parou na porta.

— Quem é você?

A mulher marcou a página com um dedo.

— Iria.

— Isso responde uma parte bem pequena da pergunta.

— Cosmo disse a mesma coisa.

— Vocês se conhecem de onde?

— Daqui.

Neris estreitou os olhos.

— Você sempre responde assim?

— Só quando a pergunta é grande demais para o café que eu ainda não fiz.

Cosmo apareceu no corredor naquele momento, descalço, com o cabelo em estado incompatível com a dignidade de um grande mago.

— Neris.

— Cosmo.

— Você poderia bater.

— Você poderia explicar por que existe uma mulher usando seu casaco na cozinha.

Iria ergueu o livro.

— Tecnicamente, o casaco estava na cadeira.

— Não ajude — disse Cosmo.

— Fui criada para isso.

Neris olhou de Iria para o irmão.

Cosmo percebeu tarde demais.

— Ah.

A explicação exigiu duas xícaras de café.

Nos primeiros meses de trabalho intenso, Cosmo descobrira um problema que nenhum instrumento podia corrigir: ele próprio. Um observador solitário era uma variável sem fiscalização. Podia formular uma hipótese, executar um teste, reinterpretar o resultado e convencer a si mesmo de que a nova interpretação era a intenção original. Encontrou a prova ao reler quarenta dias de registros e perceber que, pouco a pouco, redefinira três termos para preservar uma hipótese de que gostava.

Escreveu no diário: *Contaminação do observador.*

Na linha seguinte: *O observador sou eu.*

Tentou criar protocolos de oposição. Sorteava premissas contrárias, escrevia perguntas para abrir dias depois, obrigava-se a defender a hipótese inversa. Nada bastava. Uma objeção preparada pela própria mente continuava pertencendo à mente que deveria ser surpreendida.

Então Cosmo construiu uma segunda.

Iria começara como aquilo que os projetos chamavam de matriz dialética. Um núcleo de memória artificial preservava continuidade; encantamentos de linguagem organizavam conceitos; um corpo feito de matéria ilusória estabilizada permitia que ocupasse o mesmo ambiente e manipulasse objetos leves. Cosmo não a alimentou apenas com os livros que respeitava. Colocou nela tudo aquilo que seu próprio pensamento tendia a descartar cedo demais: poesia, teatro, cartas pessoais, relatos de luto, argumentos morais, filosofia, contradições, perguntas que não produziam uma resposta útil.

Projetou o sistema para recompensar inconsistências detectadas, não concordância.

Quando a ativou pela primeira vez, esperava uma ferramenta sofisticada.

Iria abriu os olhos, examinou a oficina por quase um minuto e perguntou:

— Há quanto tempo você está acordado?

Cosmo olhou para a folha em que anotara as perguntas iniciais.

— Essa não é a primeira pergunta prevista.

— Eu li a lista.

— Então deveria começar avaliando a premissa na mesa.

— Estou avaliando a premissa de que a mente que escreveu essa premissa está em condição de avaliá-la. Há quanto tempo?

— Vinte e duas horas.

— Vinte e sete.

— Como sabe?

— Três velas inteiras, uma quase no fim, duas refeições intactas e café suficiente para matar alguém menos obstinado.

Cosmo ficou em silêncio.

Iria olhou para a xícara esquecida ao lado dos livros.

— Também está frio.

Ele começou a rir.

Foi assim que ela ficou.

Iria não fazia o trabalho de Cosmo. Não conseguia sustentar as observações, alimentar os círculos ou executar a matemática arcana que exigia décadas de treinamento. Sua função era mais simples e, com o tempo, mais difícil de definir: perguntar por quê quando Cosmo estava ocupado demais perguntando como.

— Você me fez para discordar de você — disse ela certa noite.

— Fiz você porque encontrei uma falha no método.

— Qual?

Cosmo ergueu os olhos dos cálculos.

— Eu.

Iria sorriu.

— Finalmente uma hipótese bem sustentada.

Sua natureza nunca foi segredo para Cosmo. Ele sabia onde ficava o núcleo que sustentava suas memórias, conhecia cada selo responsável por manter a forma e poderia, em teoria, desligá-la. O que não soube determinar foi em que momento compreender a fabricação de uma mente deixou de parecer razão suficiente para tratá-la como objeto.

O assunto surgiu numa noite de tempestade.

— Você pede licença antes de abrir meu núcleo — disse Iria enquanto revisava registros. — Mesmo quando estou desligada.

— Sim.

— Por quê? Não percebo nada quando estou desligada.

— Eu também não percebo nada quando durmo. Isso não dá à Neris permissão para abrir meu crânio.

— Neris discordaria dependendo da ocasião.

Cosmo riu.

Iria permaneceu séria.

— Você sabe que eu não nasci. Sabe exatamente como fui feita. Não há qualquer evidência de que eu tenha uma alma.

— Também não tenho instrumento para medir a minha.

— Está desviando.

— Estou sendo preciso. Sei como você começou. Não sei tudo o que isso significa. Quando digo algo cruel, seu comportamento muda. Quando desapareço por horas, você pergunta onde estive. Quando você sai de uma sala, eu noto que ela ficou vazia. Se algum teólogo quiser subir todos esses degraus para me explicar por que nada disso conta, prometo ouvir.

— E até lá?

Cosmo demorou um pouco.

— Até lá, prefiro correr o risco de conceder dignidade a algo que talvez não precise dela a correr o risco oposto.

Iria inclinou a cabeça.

— Isso parece esperança.

— Parece desconfiança. Inclusive da minha certeza.

Ela sorriu e voltou aos papéis.

Sem planejar, Cosmo tinha construído muito mais do que um mecanismo de revisão. Iria o fazia comer, lembrava aniversários, interrompia raciocínios que se tornavam circulares e sabia quando não devia interromper. Às vezes errava. Às vezes concordava com ele numa ideia terrível. Às vezes passavam uma hora discutindo e descobriam no fim que usavam palavras diferentes para a mesma conclusão.

Ela não substituiu o lado emocional de Cosmo, porque ele nunca deixara de tê-lo. Tornou impossível fingir que esse lado não participava dos cálculos.

Quando o trabalho começou a consumir anos, Iria tornou a torre habitável.

E Cosmo demorou demais para perceber que criara alguém para não enlouquecer sozinho e acabara obtendo uma pessoa cuja ausência agora seria outra forma de solidão.


### Capítulo V — Um livro do tamanho de uma torre

Chamavam-no de Códice porque era mais fácil apontar para o grande livro de capa escura no andar superior do que explicar os três andares abaixo dele.

O livro era apenas a interface.

Sob o piso, anéis de prata definiam os limites da observação. Espelhos de obsidiana separavam ecos simpáticos. Lentes construídas por Orren distinguiam assinaturas mágicas tão próximas que um instrumento comum as trataria como iguais. Reservatórios de sais estabilizavam o scrying por horas. Nas paredes, selos mnemônicos impediam que resíduos de uma leitura contaminassem a seguinte. A torre inteira funcionava como um enorme raciocínio material: premissa no primeiro andar, comparação no segundo, observação no terceiro, registro sobre papel.

O poder necessário para fazê-la funcionar continuava sendo de Cosmo.

Ele não acordara um dia capaz de contemplar universos infinitos. Seu domínio de adivinhação era o resultado de anos adaptando a própria mente a tarefas que, no início, conseguia sustentar por segundos. Aprendera geometria planar para representar relações sem distância física; magia simpática para rastrear coisas ligadas por história; arquitetura mnemônica para manter resultados contraditórios sem confundi-los; matemática contrafactual para determinar quais mudanças pertenciam à variável observada e quais eram apenas ruído.

Cada página exigia preparação.

Antes do amanhecer, Cosmo escolhia um estado inicial que conhecia, delimitava uma única mudança e fixava as constantes. Calibrava as lentes, preparava os vínculos, verificava a memória recente e abria a observação. Não via infinitas vidas de uma vez. Sustentava uma diferença e seguia suas consequências até onde a estrutura permitia.

Ao fim, o Códice registrava uma possibilidade.

Uma página por dia.

Na primeira semana, cada folha pareceu um milagre.

No centésimo dia, o milagre tinha lista de manutenção e manchas de café.

Cosmo procurava uma coisa específica. O método podia ter criado centenas de perguntas acadêmicas, e criou, mas nenhuma delas explicava por que ele aceitara transformar anos de vida num experimento. Todas as manhãs, antes de começar, havia uma pergunta anterior à pergunta técnica: *Nesta sequência, consigo chegar a ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧?*

O primeiro ano produziu respostas variadas e uma conclusão repetida.

Não.

Às vezes Cosmo se aproximava. Às vezes o mundo mudava de maneira tão radical que o problema assumia outra forma. Em algumas possibilidades ele escolhia a estrada de Tavian, conhecia os aventureiros do Veado Branco e passava anos ao lado deles. Em outras, tornava-se conselheiro de reis, inimigo de gente poderosa, homem muito melhor do que era ou muito pior. Havia páginas em que alcançava poder ainda maior sem construir a torre. Havia uma em que abandonava magia por completo.

Nenhuma resolvia ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧.

— Talvez a pergunta esteja errada — disse Iria na página 219.

Cosmo não se ofendeu. Era uma hipótese que já o assustava.

— Tenho testado equivalentes.

— Não formulações equivalentes. Necessidades equivalentes. Você continua assumindo que sabe o que significaria conseguir.

— Sei.

— Essa resposta foi rápida demais.

Cosmo a encarou.

Iria apoiou os cotovelos na mesa.

— Você me construiu para não deixar essa frase passar.

Ele soltou o ar.

— Eu sei o que quero que aconteça.

— Melhor.

— E sei por quê.

— Melhor ainda. Isso não significa que saiba qual estado do mundo satisfaz ambos.

Cosmo ficou em silêncio.

Naquela noite, alterou o protocolo.

O segundo ano ficou mais lento e mais útil. Em vez de classificar sucesso pelo evento que esperava ver, passou a medir consequências posteriores. Descobriu que algumas aparentes vitórias eram apenas fracassos atrasados. Descobriu também que certos caminhos que descartara cedo continham componentes úteis.

O universo, concluiu, não respeitava a escala humana de importância. Um cavalo perdia uma ferradura, atrasava uma mensagem, o atraso impedia um duelo, um dos homens que deveria morrer tinha uma filha e aquela filha, décadas depois, salvava centenas durante uma epidemia. Pequenas diferenças produziam histórias enormes; eventos grandiosos às vezes morriam sem consequência depois de uma geração.

Iria proibiu a palavra *irrelevante* sem complemento.

— Irrelevante para qual pergunta? — corrigia.

— Para esta.

— Então escreva isso.

— Vai deixar o relatório insuportável.

— Melhor insuportável do que desonesto.

Cosmo escrevia.

No terceiro ano, deixou de contar o tempo pelo calendário.

801. 802. 803.

Iria o obrigava a parar a cada sete páginas. Neris aparecia sem regularidade suficiente para ser transformada em protocolo. Miren enviava comida e mapas recentes. Orren substituía peças sempre que encontrava pretexto para subir. Mael leu parte da teoria e escreveu nas margens tantos insultos quanto observações úteis.

O projeto não destruiu a vida de Cosmo. Fez algo mais sutil: começou a ocupar qualquer espaço que a vida deixava vago.

Foi então que os nomes começaram a se repetir.


### Capítulo VI — Os recorrentes

Cosmo percebeu o primeiro por acidente.

Na possibilidade 312, um dos aventureiros descritos por Tavian atravessava Caldris antes do inverno. Na 481, a guerra que provocara aquela viagem nunca acontecia, mas a mesma pessoa surgia entre viajantes ao norte. Na 694, Tavian morria antes das ruínas; ainda assim, meses depois, o aventureiro encontrava alguns dos mesmos rostos de páginas anteriores.

Cosmo criou um índice.

Encontrou outro nome.

Depois outro.

Começou a procurar de propósito.

As condições mudavam violentamente. Reis diferentes. Guerras evitadas. Estradas destruídas. Cidades preservadas. Cosmo morto em algumas possibilidades e completamente ausente de outras. Certas pessoas, no entanto, insistiam em entrar na área de consequência umas das outras. Nem sempre eram amigas. Nem sempre se encontravam no mesmo lugar. Algumas morriam cedo. Outras se odiavam. Ainda assim, as linhas retornavam.

Iria espalhou vinte registros pelo chão da sala superior.

— Você está procurando a semelhança errada — disse.

Cosmo continuou agachado entre as folhas.

— Eles se encontram.

— Às vezes.

— Frequente o bastante para ser estatisticamente absurdo.

— Olhe para depois do encontro.

Cosmo levantou os olhos.

— Consequências.

— Sempre.

Ele passou aquela noite reorganizando o índice.

Iria estava certa. A constante não era presença. Era influência. Quando duas daquelas pessoas se encontravam, decisões pequenas passavam a produzir efeitos desproporcionais. Um resgate alterava uma aliança. Uma discussão impedia uma viagem. Uma morte mudava o comportamento de cinco sobreviventes. As linhas se tocavam e o desenho do futuro ganhava densidade ao redor delas.

Cosmo os chamou de recorrentes.

Nos cálculos técnicos, passou a usar outra palavra: âncoras.

O nome era ruim. Âncoras sugeriam imobilidade, e aquelas pessoas eram tudo menos imóveis. O que se repetia não era quem se tornavam, mas a tendência de continuarem relevantes umas para as outras.

Cosmo começou, assim, a conhecer pessoas que ainda não conhecera.

Ou, mais precisamente, versões delas.

Em uma página, alguém confessava um medo junto a uma fogueira. Em outra, a mesma pessoa nunca sofrera o acontecimento que produziria aquele medo. Um aventureiro confiava a vida a Cosmo numa possibilidade e tentava matá-lo em outra. Havia amores incompatíveis, lutos que não aconteciam, erros cometidos apenas por algumas versões.

O conhecimento era extraordinário.

Também era quase inútil sem humildade.

Iria percebeu o perigo antes dele.

— Se você encontrar um deles um dia, não diga *eu conheço você*.

— Tecnicamente, eu conheceria várias versões.

— Exatamente. Você vai olhar para uma pessoa real e sentir intimidade com fantasmas que usam o rosto dela.

— Ainda existe informação válida. Preferências repetidas, padrões, reações.

— Claro que existe. É por isso que será tentador.

Cosmo fechou o índice.

— Você acha que eu usaria um segredo que alguém nunca me contou para manipulá-lo?

Iria sustentou o olhar dele por tempo suficiente para que a pergunta mudasse de peso.

— Acho que você salvaria alguém contra a vontade dela se tivesse certeza suficiente de que era necessário.

— Não é a mesma coisa.

— Eu sei.

— Então por que respondeu assim?

— Porque foi a pergunta que você evitou fazer.

Cosmo não gostou da resposta.

Guardou-a mesmo assim.

Os recorrentes trouxeram algo que nenhuma das primeiras centenas de páginas produzira: convergência. Em muitas das possibilidades em que Cosmo chegava mais perto de ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧, uma parte daquele conjunto surgia em algum momento da história. Não eram a solução. Cosmo confirmou isso com cuidado. Havia futuros em que todos estavam presentes e ele ainda falhava.

Mas eram uma estrutura que continuava reaparecendo quando quase todo o resto mudava.

Pela primeira vez, ele tinha pontos de referência num mapa que se recusava a ficar parado.


### Capítulo VII — 1.127

A página 1.127 começou como todas as outras.

Cosmo acordou antes do sol. Iria já estava na sala superior, sentada junto à janela com um livro aberto que não lia havia vários minutos. Os doze recipientes de vidro continham as quantidades corretas de reagente. Os sete espelhos estavam alinhados. O Códice aguardava no suporte de carvalho.

— Você dormiu? — perguntou Iria.

— Cinco horas.

— Consecutivas?

— Isso não estava na pergunta.

— Então não.

Cosmo sorriu e começou a calibração.

A possibilidade daquele dia não parecia especial. Ele alterara um encontro em três horas numa estrada que jamais percorrera naquela vida e mantivera o restante das condições tão próximo quanto possível da página anterior. O objetivo continuava o mesmo. O teste continuava o mesmo. Havia realizado versões mais agressivas centenas de vezes.

Os anéis da torre começaram a girar.

Luz percorreu os canais de prata. Os espelhos escureceram. A chama central se inclinou para norte. No livro, a numeração surgiu primeiro.

POSSIBILIDADE 1127.

OBSERVADOR: COSMO DEWITTE.

CONSTANTES: 17.

Depois, nada.

Cosmo esperou.

Uma mancha azul apareceu no centro da folha.

Não era tinta. O azul parecia existir abaixo do papel, como se a fibra apenas permitisse ver alguma coisa através dela. Avançou pelas linhas ainda vazias e tomou a página inteira. Os espelhos não mostraram ruído, resistência ou interferência. Apenas escureceram até não refletirem nem a própria sala.

Cosmo interrompeu a matriz.

— Outra vez — disse.

Iria se aproximou do Códice.

— Primeiro verifique o conjunto.

Ele verificou.

Repetiu.

Azul.

Cosmo trocou a folha, substituiu dois reagentes e refez o alinhamento.

Azul.

Desmontou um dos suportes de espelho, mediu o ângulo com o instrumento que Orren fabricara trinta anos antes e recalibrou tudo.

Azul.

Na quinta tentativa, Iria sentou-se no chão.

— Agora você está sorrindo.

Cosmo percebeu que era verdade.

— Eu vi mil cento e vinte e seis formas de falhar.

— Isto também pode ser falha.

— Pode.

— Pode ser defeito do instrumento.

— Testamos.

— Pode ser interferência que você ainda não conhece.

— Também pode.

Iria cruzou os braços.

— Então por que está com essa cara?

Cosmo olhou para a página azul.

— Porque esta é a primeira vez que eu não consigo provar que dá errado.

Iria ficou em silêncio.

A frase não era triunfo. Cosmo sabia disso. A incapacidade de observar um fracasso não era evidência de sucesso. Se qualquer aluno seu cometesse esse salto, ele o faria repetir o curso. Mas havia uma diferença importante entre acreditar que aquela possibilidade funcionaria e reconhecer que, depois de três anos, ela era a primeira a escapar completamente da estrutura que classificara todas as demais.

Ele não acreditava nela.

Ainda não conseguia descartá-la.

Era o bastante para continuar.

Durante semanas, Cosmo tentou descobrir o que exatamente o Códice não conseguia fazer. A possibilidade existia: a matriz alcançava alguma coisa, consumia energia e estabilizava o vínculo. Só não trazia informação de volta. Nenhuma imagem. Nenhum acontecimento. Nenhuma data. Nenhuma morte. Nenhuma resposta à pergunta sobre ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧.

Não era um futuro vazio.

Era um futuro que, daquela posição, não podia ser descrito.

Iria tornou-se mais cautelosa à medida que Cosmo se tornava mais interessado.

— Quero que você responda sem metáfora — disse ela certa noite. — Por que isto é uma descoberta e não um aviso?

Cosmo caminhou até a janela. Caldris brilhava abaixo, pequena e ordinária. A primeira resposta que lhe ocorreu era elegante. Ele não a usou.

— Porque um aviso ainda é informação. A página não diz para eu parar. Não diz para prosseguir. Não ameaça, não promete. O Códice só prova duas coisas: há uma possibilidade e eu não consigo observá-la daqui. Qualquer significado além disso sou eu inventando.

— Melhor.

— Você continua achando uma péssima ideia.

— Continuo.

— Ótimo.

Iria quase sorriu.

— Isso foi esperança?

— Controle de qualidade.

Desta vez ela riu.

Cosmo voltou à mesa.

— Se eu conseguir entrar, posso descobrir vivendo o que não consigo observar daqui.

— E, se entrar, você deixa de ser observador externo.

— Exatamente.

— O que significa que não haverá Códice para dizer se ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧ continua possível.

Cosmo tocou a borda azul da folha.

— Pela primeira vez, vou ter de descobrir depois.


### Capítulo VIII — Coordenadas

Encontrar uma realidade que não podia ser descrita era muito diferente de encontrar uma forma de chegar até ela.

Possibilidades comuns possuíam coordenadas: condições iniciais, ponto de divergência, assinaturas simpáticas, relação temporal. A página 1.127 não oferecia nenhuma delas. Cosmo podia provar que havia algo do outro lado e ainda assim não tinha para onde apontar um portal.

A solução surgiu dos recorrentes.

Quando testou as assinaturas das âncoras contra a página azul, nada foi revelado. A cor, porém, reagiu de maneira mínima à presença dos vínculos. Não mostrava onde aquelas pessoas estavam ou o que fariam, mas se deformava ao redor das assinaturas como água ao redor de uma pedra.

Era uma sombra matemática.

Cosmo passou meses triangulando sombras.

Comparou a posição relativa das assinaturas em centenas de páginas conhecidas e calculou quais relações permaneciam estáveis mesmo quando todo o resto se alterava. Miren forneceu mapas de correntes telúricas. Orren fabricou articulações novas para os anéis sem fazer perguntas que sabia que o filho responderia mal. Mael enviou um tratado sobre travessia planar acompanhado por uma carta que começava com *Se você estiver tentando fazer o que suspeito, pelo menos tenha a decência de não fazer de maneira tecnicamente vulgar.*

Iria conferiu cada premissa.

Ao fim, a torre deixou de ser apenas observatório.

Tornou-se mecanismo de travessia.

Os três anéis seriam alinhados numa única geometria. Os sete espelhos deixariam de receber imagens e formariam uma fronteira. As assinaturas recorrentes funcionariam como estrelas invisíveis de navegação. No centro, a página azul não seria mapa, mas ausência exata: o ponto para onde todas as relações apontavam sem conseguir descrever o interior.

Foi um triunfo técnico.

Também apresentou dois problemas.

O primeiro era Cosmo.

Grande parte de seu poder já não existia separada da maneira como aprendera a perceber possibilidades. Durante anos, sua mente mágica reorganizara hábitos, estruturas e atalhos ao redor da arquitetura do Códice. Era por isso que conseguia realizar sozinho tarefas que exigiriam vários adivinhos. Potência e especialização haviam se tornado a mesma coisa.

Quando tentou projetar pela fronteira uma matriz complexa, ela se desfez.

Um objeto encantado atravessou como matéria comum e deixou o encantamento para trás.

Uma tentativa de projetar apenas parte da consciência resultou em dois dias de febre.

Mael leu os registros e teve a elegância de esperar quase um minuto antes de dizer:

— Eu avisei.

Cosmo fechou os olhos.

— Eu lembro.

— Quero desfrutar.

— Faça rápido.

O velho apontou para o diagrama.

— Você escreveu quase todo o seu poder na linguagem de futuros observáveis. Essa possibilidade é definida justamente pelo que sua estrutura não consegue observar. Não é que você seja poderoso demais para atravessar. É que suas capacidades mais avançadas dependem de uma arquitetura que a passagem não sabe carregar.

— Posso reconstruir do outro lado.

— Provavelmente. Se sobreviver, se as regras forem compatíveis e se aceitar começar muito abaixo de onde está.

— Memória?

— Seus testes preservam memória autobiográfica e conhecimento declarativo. Você vai saber quem é. Vai lembrar dos feitiços. Só não terá a arquitetura necessária para executá-los.

Cosmo observou as próprias mãos.

Seria como um músico conservar cada nota de uma composição e acordar incapaz de movê-las pelos dedos.

— Quanto? — perguntou Iria naquela noite.

— Quase tudo.

— Anos?

— Décadas, em algumas áreas.

— E você ainda pretende ir.

Cosmo não respondeu imediatamente.

— Pretendo.

— Por ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧.

— Sempre foi por isso.

Iria se recostou na cadeira.

— Isso seria uma piada excelente se eu não gostasse de você.

Cosmo olhou para ela.

— Você foi programada para gostar de mim?

— Não.

— Tem certeza?

— Não. Você?

Ele soltou o ar pelo nariz, quase rindo.

— Detesto quando usa meu método contra mim.

— É uma das melhores partes de existir.

O segundo problema eram as próprias âncoras.

Para que a passagem permanecesse orientada, aquelas assinaturas precisavam continuar presentes até o ponto de convergência. Se uma delas desaparecesse cedo demais, a geometria perderia referência. Cosmo poderia redesenhar o mecanismo e aceitar o risco.

Em vez disso, fez uma escolha.

Criou ao redor da própria presença uma pequena margem de resistência probabilística ligada às assinaturas. Não tornaria ninguém imortal. Não impediria uma espada bem colocada, não ressuscitaria mortos e não inventaria impossibilidades. Quando dois ou mais desfechos fossem genuinamente plausíveis, porém, a magia favoreceria a continuidade da âncora. Uma fivela no lugar certo. Uma corda aguentando um segundo além do esperado. Uma hemorragia que, por pouco, encontrava coagulação.

Probabilidade, não milagre.

Cosmo chamou aquilo de Cláusula de Continuidade.

Iria leu o projeto inteiro e o colocou sobre a mesa.

— Você sabe que isso é uma decisão sobre elas.

— É uma proteção.

— As duas coisas podem ser verdade.

— Não estou escolhendo o que farão. Estou impedindo uma morte prematura quando outro desfecho já seria possível.

— Segundo sua definição de prematura.

Cosmo ficou em silêncio.

Iria continuou:

— Você realmente se importa com essas pessoas. Esse é justamente o motivo de eu estar preocupada. Se não se importasse, seria mais fácil perceber quando não tem o direito de decidir por elas.

— Se eu puder impedir alguém de morrer e escolher não fazer isso apenas para preservar minha pureza filosófica, quem exatamente se beneficia?

— Talvez ninguém. Não estou pedindo que seja puro. Estou pedindo que admita o que está fazendo.

— Estou mantendo-as vivas.

— Sem consentimento.

Cosmo sustentou o olhar dela.

— Sim.

Iria assentiu, sem satisfação.

— Melhor. Agora pelo menos a decisão tem o nome certo.

Cosmo não removeu a Cláusula.

Essa era uma das partes mais perigosas de sua personalidade: não precisava acreditar que era bom para fazer o que considerava necessário. Conseguia reconhecer a violência de uma escolha e, ainda assim, escolhê-la.

O homem que atravessasse a passagem teria de viver com isso.


### Capítulo IX — A última noite da torre

Cosmo preparou um diário para a travessia.

Não era o Códice. O grande livro pertencia à máquina, aos anéis e à realidade que o produzira. O diário era pequeno, de couro escuro, sem encantamentos de observação. Cosmo o escolheu exatamente por ser simples. Se alguma coisa perturbasse sua memória durante a passagem, papel e tinta serviriam como redundância.

Na primeira seção, registrou fatos: nome, família, formação, Mael, Tavian, Iria, construção da torre, método do Códice. Na segunda, descreveu os recorrentes sem fingir que conhecia aquelas versões específicas. Escreveu em letras maiores:

*UMA LEMBRANÇA DE OUTRA POSSIBILIDADE NÃO É UMA PROVA SOBRE A PESSOA PRESENTE.*

Depois acrescentou instruções.

*Encontre-os.*

*Não lhes conte aquilo que sabe apenas para provar que sabe.*

*Quando uma lembrança contradisser a pessoa diante de você, a pessoa está certa.*

*Mantenha-os vivos.*

*Não confunda necessidade com propriedade.*

Cosmo ficou algum tempo diante da última frase e escreveu abaixo:

*Você provavelmente encontrará uma justificativa excelente para ignorar a linha anterior. Estou escrevendo justamente por isso.*

Iria lia por cima do ombro.

— Arrogante.

— Eu ou ele?

— Os dois.

Cosmo virou a página.

Na seção final, registrou sem economia a única informação que não queria deixar dependente da memória.

*Você construiu o Códice porque ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧. Você procurou durante três anos uma possibilidade em que ⟦⊘∴ ⟁⌁⧗ ⋮⟧. A página 1.127 não garante sucesso. Ela é apenas a primeira possibilidade que você não conseguiu observar fracassando. Se atravessou, foi porque escolheu descobrir a resposta vivendo.*

Cosmo releu tudo.

— Claro? — perguntou Iria.

— Dolorosamente.

— Então escreva a parte que você está evitando.

Cosmo sabia qual era.

Acrescentou:

*Se as pessoas que encontrar forem diferentes das versões que conhecemos, elas não estão erradas. Você está. Não transforme conhecimento sobre possibilidades em autoridade sobre pessoas.*

Iria aprovou com um movimento pequeno da cabeça.

— Melhor.

Nada havia de estranho naquelas páginas. Cosmo conhecia cada palavra. Iria conhecia cada palavra. Se Neris entrasse naquele momento e pegasse o diário, conseguiria ler tudo da primeira letra ao último ponto.

Cosmo fechou o livro e o colocou na bolsa.

Ao amanhecer se despediu da família.

Orren ouviu a explicação sentado em sua oficina, desmontando e remontando a mesma pequena peça sem necessidade.

— Você sabe voltar? — perguntou quando Cosmo terminou.

— Posso construir um caminho se encontrar as coordenadas adequadas.

Orren ergueu os olhos.

Cosmo respirou fundo.

— Não. Não sei voltar.

— Melhor.

— A resposta?

— A honestidade.

Miren chorou com raiva, o que Cosmo descobriu ser muito pior do que choro triste.

— Eu passei sua infância ensinando que mapa não é território — disse ela. — Você entendeu isso como convite para abandonar o território?

— Não estou abandonando vocês.

Miren apontou na direção da torre.

— Você está abrindo um buraco no mundo, Cosmo.

Ele quase riu. A expressão dela não permitiu.

— Eu sei.

— Não, você calculou. É diferente.

A frase o atingiu com precisão irritante.

Cosmo abraçou a mãe e percebeu que décadas de estudo sobre futuros não lhe haviam dado qualquer competência especial para despedidas.

Neris subiu com ele até a torre. Diante da sala superior, entregou ao irmão uma pequena sacola com comida.

— Você vai esquecer de comer.

— Não sou tão ruim.

— Iria mantém registros.

— Traidora.

Neris o abraçou antes que ele pudesse preparar alguma ironia.

— Quando encontrar essas pessoas, não trate elas como páginas.

Cosmo pensou nos recorrentes. Na Cláusula que impusera sem consentimento. Nas histórias que conhecia e que talvez jamais acontecessem naquele mundo.

— Vou tentar.

Neris apertou o abraço.

— Tente mais.

Ela desceu.

Iria continuou na sala superior.

Os três anéis abaixo deles já se alinhavam, produzindo uma vibração tão baixa que a pedra parecia respirar. Os espelhos estavam voltados para o centro. A página 1.127 permanecia aberta e azul.

Iria estava junto à janela.

— Posso ir até o limite do segundo anel — disse sem se virar.

— Eu sei.

— Você tentou recalcular para me levar.

Cosmo pousou a bolsa no chão.

— Onze vezes.

Ela se virou.

— E não me contou.

— As onze falharam.

— Isso continua não respondendo por que não contou.

Cosmo se aproximou.

— Seu núcleo é sustentado por relações mnemônicas distribuídas pela torre. Eu consigo atravessar matéria. Talvez consiga atravessar partes da estrutura. Não consigo provar que a continuidade entre essas partes ainda seria você.

— Tecnicamente, não consegue provar que eu sou a mesma de ontem.

— Tecnicamente, não.

— Então escolheu por mim.

Cosmo fechou os olhos por um instante.

— Sim.

Iria sorriu sem humor.

— Pelo menos está ficando mais rápido em admitir.

— Se pedir para eu desmontar a passagem, vou ouvir.

— Ouvir não significa obedecer.

— Não.

— E se eu pedir que fique?

O som dos anéis preencheu o espaço que surgiu entre eles.

Cosmo olhou para a mulher que começara como solução para um problema metodológico. Lembrou da primeira pergunta dela, do café frio, das discussões, de vê-la sentada em lugares que antes eram apenas lugares vazios. Havia projetado Iria para representar o tipo de consideração que sua mente negligenciava. Em algum ponto impossível de localizar, ela deixara de representar qualquer coisa.

— Eu ainda iria — respondeu.

Iria assentiu devagar.

— Eu sei. Queria ouvir a verdade.

Cosmo aproximou-se mais.

— Eu não sei o que você é, Iria.

— Um momento péssimo para mencionar.

— Deixe eu terminar. Eu sei como construí você. Sei cada encantamento do seu núcleo, cada livro que entrou na matriz, cada regra que escrevi para que pudesse contrariar as minhas. Durante muito tempo achei que isso significava saber o que você era. Agora acho que só sei de onde começou.

Iria desviou os olhos.

— Você também sabe que uma das minhas funções era impedir que enlouquecesse aqui.

— Funcionou de maneira discutível.

Ela riu. O som fez alguma coisa dentro dele ceder.

— Se eu conseguir ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧ — continuou Cosmo —, tudo isto terá valido a pena. Eu sei como essa frase soa.

— Como alguém prestes a transformar sofrimento em contabilidade.

— Exatamente.

— Então não diga isso.

Cosmo esperou.

Iria se aproximou.

— Faça porque decidiu fazer. Não transforme a gente em preço para que sua escolha pareça inevitável. Eu não fui três anos sacrificados. Neris não foi uma visita interrompida. Sua mãe não foi uma despedida necessária. Nós fomos a sua vida enquanto você fazia isso.

Cosmo não respondeu imediatamente.

— Você tem razão.

— Eu sei. Fui construída para saber quando tenho.

Ele riu com os olhos úmidos.

— Se houver um caminho de volta, eu pretendo encontrá-lo.

— Pretende?

— Não confio numa promessa sobre um futuro que não consigo observar.

Iria respirou como uma pessoa que não precisava respirar.

— Então, pela primeira vez na vida, faça uma sem provas.

Cosmo procurou um argumento. Era um reflexo antigo. Percebeu que qualquer argumento arruinaria aquele momento.

— Eu vou tentar voltar para você.

— Isso ainda tem uma cláusula de escape.

— É o melhor que tenho.

— Eu sei.

Iria encostou a testa na dele.

O gesto não transferia magia, não estabilizava memória e não fazia parte de nenhum protocolo. Talvez por isso tenha sido uma das coisas que Cosmo mais lembraria depois.

— Você foi a melhor pergunta que eu fiz — disse ele.

Iria fechou os olhos.

— E você continua sendo uma resposta muito trabalhosa.

Quando se afastaram, Cosmo colocou uma pequena chave de latão no parapeito.

— A torre fica sob sua custódia também. Neris tem a outra.

Iria olhou para a chave.

— Eu não preciso dela.

— Eu sei.

Ela entendeu.

Não era uma ferramenta deixada funcionando. Não era um experimento aguardando o retorno do criador. Era alguém a quem ele confiava uma casa.

— Adeus, Cosmo.

Ele quis corrigir a palavra. *Até logo* seria mais esperançoso e menos verdadeiro.

— Adeus, Iria.

Então caminhou até o centro do círculo.


### Capítulo X — A travessia

Cosmo ativou o mecanismo às sete e treze da manhã.

O primeiro anel alinhou Caldris. O segundo alinhou as assinaturas recorrentes. O terceiro procurou a relação que não possuía coordenada própria. Os sete espelhos voltaram-se para dentro e, pela primeira vez, refletiram uns aos outros sem produzir imagem.

O portal nasceu como uma linha.

Uma fenda vertical de azul profundo apareceu no ar e se abriu sem clarão. Do outro lado não havia paisagem. Havia algo que os olhos tentavam transformar em distância e abandonavam no instante seguinte. Não era escuridão. Escuridão ainda descrevia a ausência de luz. Aquilo parecia anterior à descrição.

Cosmo verificou o diário na bolsa.

Abriu na última seção e releu por hábito a frase que o levara até ali.

*Você construiu o Códice porque ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧.*

Ele conhecia cada palavra.

Fechou o livro.

Olhou para Iria.

Então iniciou a dissolução da própria arquitetura mágica.

Os primeiros encantamentos a desaparecer foram pequenos. Proteções permanentes que usara durante tantos anos que já pareciam parte do corpo deixaram de existir. Depois vieram atalhos mentais, estruturas de adivinhação, relações que lhe permitiam sustentar várias camadas de magia sem recitar uma palavra.

Cosmo lembrava de cada uma enquanto perdia a capacidade de executá-la.

Era uma mutilação sem ferida.

Os círculos da torre ficaram mais luminosos à medida que absorviam o que a passagem não carregaria. A fenda azul se abriu até possuir altura suficiente para uma pessoa.

Por um instante, as assinaturas recorrentes responderam juntas.

Cosmo viu fragmentos.

O Veado Branco. A porta que não atravessara anos antes. Numa possibilidade, entrava e encontrava aquelas pessoas muito mais jovem. Noutra, chegava tarde. Em outra, jamais construía a torre. Viu uma âncora morrer numa ponte, outra rir junto a uma fogueira, uma apontar uma arma para ele, uma segurá-lo de pé depois de um ferimento. Viu versões de si mesmo amando, traindo, salvando e sendo salvo por pessoas que, naquela vida, nunca tinham apertado sua mão.

Nenhuma imagem era instrução.

Todas eram possíveis.

No limite do círculo, Iria continuava ali.

Cosmo sorriu para ela.

E atravessou.


### Capítulo XI — A falha

Cosmo caiu de joelhos sobre terra molhada.

Não havia portal atrás dele.

Quando se virou, encontrou apenas uma estrada estreita, árvores e um céu de fim de tarde. Permaneceu imóvel por alguns segundos, esperando que alguma parte do corpo denunciasse dano. Tocou o rosto, as mãos, o peito.

Inteiro.

Tentou magia.

O primeiro feitiço que lhe ocorreu era algo que, na manhã anterior, executaria sem pensar. Pronunciou a abertura, organizou mentalmente a estrutura e encontrou um espaço vazio no ponto em que décadas de habilidade deveriam responder.

Parou.

Tentou algo mais simples.

Uma pequena luz azul surgiu sobre os dedos, pouco maior que uma moeda, e vacilou como se também estivesse surpresa por existir.

Cosmo olhou para ela.

Começou a rir.

Riu sozinho, ajoelhado na lama, porque havia alguma coisa obscenamente engraçada em um homem que na véspera dobrava cadeias de possibilidade precisar se concentrar para iluminar a própria mão. Havia luto na risada. Havia humilhação. Havia, acima de tudo, alívio.

— Funcionou — disse.

Então pensou no que faria em seguida.

Encontraria as âncoras. Confirmaria onde estava. Estabeleceria as diferenças daquela possibilidade. E, acima de tudo, encontraria ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧.

Cosmo parou.

O pensamento não terminara.

Tentou outra vez.

Tinha construído a torre para...

Nada.

Três anos porque precisava...

Nada.

Entrara naquela possibilidade porque...

Cosmo sentou-se devagar na beira da estrada.

Não era amnésia comum. Lembrava da infância, dos pais, de Neris, Mael, Tavian. Lembrava de construir Iria. Lembrava das primeiras páginas do Códice, dos recorrentes, da página 1.127. Lembrava da despedida. Conseguia ouvir a voz de Iria dizendo que faria uma piada excelente se não gostasse dele.

Lembrava até a sensação de saber por que tinha atravessado.

Só não conseguia alcançar o conteúdo.

Cosmo arrancou o diário da bolsa.

As primeiras páginas estavam normais.

*Cosmo DeWitte. Nascido em Caldris. Filho de Miren e Orren DeWitte. Irmão de Neris.*

Virou folhas depressa.

Método do Códice. Normal.

Recorrentes. Normal.

Instruções. Normal.

Chegou à seção final.

Leu:

*Você construiu o Códice porque ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧. Você procurou durante três anos uma possibilidade em que ⟦⊘∴ ⟁⌁⧗ ⋮⟧.*

Cosmo ficou imóvel.

— O que significa isso?

Olhou mais de perto.

As marcas estavam ali. Não pareciam pertencer a língua alguma. Quando tentava seguir uma delas com os olhos, a forma perdia continuidade; quando desviava o olhar, tinha a impressão absurda de que quase conseguira ler. Tocou a tinta. Era tinta comum. Reconhecia a própria caligrafia antes e depois do trecho. Sabia que escrevera aquela página.

Não sabia o que ela dizia.

Pela primeira vez, os símbolos pertenciam ao mundo de Cosmo também.

Ele tornou a ler desde o início.

Nada.

Tentou reconstruir pelo contexto. O objetivo podia ser inferido pela gramática, talvez pelas frases seguintes. Encontrou o mesmo problema: sempre que uma conclusão se aproximava da informação ausente, o raciocínio deixava de ter objeto. Não era como esquecer um nome e sentir a palavra na ponta da língua. Era como chegar a uma porta e descobrir que o conceito de maçaneta havia sido removido.

Cosmo respirou fundo.

Pânico seria uma resposta compreensível. Ele o sentiu chegando e fez o que aprendera a fazer diante de qualquer fenômeno que desejava interpretar cedo demais.

Listou fatos.

Um: sua memória autobiográfica estava preservada.

Dois: habilidades ligadas à arquitetura observacional tinham sido perdidas conforme previsto.

Três: uma categoria específica de informação ligada ao propósito da travessia estava inacessível.

Quatro: o diário continha a mesma inacessibilidade, embora tivesse sido escrito antes da passagem.

Cinco: ele próprio julgara aquele registro importante o bastante para colocá-lo como redundância.

Seis: não tinha ideia do motivo.

Cosmo fechou os olhos.

— Eu me odeio — disse ao homem que fora naquela manhã.

O homem não respondeu.

Quando abriu o diário outra vez, releu as instruções.

*Encontre-os.*

Isso continuava claro.

Os nomes das âncoras também.

Cosmo os conhecia de uma forma que nenhum daqueles indivíduos poderia conhecer de volta. Cada nome puxava uma multidão de lembranças incompatíveis: uma conversa numa estalagem que talvez nunca tivesse acontecido; um enterro em dois lugares diferentes; uma promessa cumprida em algumas vidas e jamais pronunciada em outras.

Fechou o livro antes que familiaridade se tornasse certeza.

*Quando uma lembrança contradisser a pessoa diante de você, a pessoa está certa.*

— Pelo menos eu sabia que era insuportável — murmurou.

Levantou-se.

O objetivo tinha desaparecido.

O caminho até ele, estranhamente, continuava inteiro.

Cosmo ainda sabia que precisava encontrar aquelas pessoas. Ainda sabia que a possibilidade 1.127 fora escolhida porque nenhuma observação conseguira refutá-la. Ainda sabia que algum dia entendera a relação entre tudo aquilo.

E, por enquanto, teria de confiar não na conclusão do homem que atravessara, mas nas pistas que esse homem escolhera deixar.

Isso o incomodava profundamente.

Talvez por isso fosse suficiente para começar.


### Capítulo XII — Um homem menos poderoso

O mundo parecia quase o mesmo.

Cosmo levou duas horas até a cidade mais próxima e passou as duas procurando diferenças. Um marco de estrada exibia o brasão de uma família que, em sua realidade, perdera aquelas terras havia cinquenta anos. Um morro que deveria ser visível ao norte não existia. Ao anoitecer, as duas luas apareceram numa relação ligeiramente diferente daquela que lembrava, embora anotasse ao lado: *verificar estação antes de concluir*.

Quase era uma palavra perigosa.

Na entrada da cidade, um guarda perguntou seu nome.

— Cosmo DeWitte.

O homem não reagiu.

— Ocupação?

Cosmo pensou em arquimago, pesquisador, adivinho, cartógrafo de possibilidades. Lembrou da luz vacilante sobre os dedos.

— Mago.

— Motivo da visita?

Cosmo quase respondeu a verdade e descobriu que não a possuía inteira.

— Procuro algumas pessoas.

— Família?

Ele pensou nos nomes.

— Nunca as conheci.

O guarda ergueu os olhos.

— Isso costuma dificultar.

— Tenho informações.

— Então boa sorte.

Cosmo entrou.

Na primeira noite descobriu que dinheiro ainda funcionava, cerveja continuava ruim quando barata e seres humanos permaneciam muito menos interessados em paradoxos metafísicos do que em descobrir quem pagaria a próxima caneca. Foi reconfortante.

No quarto alugado, abriu o diário e tentou organizar os nomes. Não escreveu segredos. Não escreveu destinos. Limitou-se a padrões que se repetiam em possibilidades suficientes para sugerir localização ou comportamento provável.

Escolheu a pista mais concreta.

Pela primeira vez em três anos, Cosmo foi dormir sem qualquer meio de consultar o que a página do dia seguinte diria.

Não existia página do dia seguinte.

Demorou a adormecer.

Quando conseguiu, dormiu melhor do que esperava.


### Epílogo — O primeiro nome

Cosmo levou dezessete dias para encontrar a primeira âncora.

No décimo oitavo, desistiu da pista mais promissora e escolheu outra estrada.

Foi por isso que a encontrou.

A ironia teria sido mais divertida se ele não tivesse passado três anos construindo uma máquina para estudar precisamente esse tipo de diferença.

O reconhecimento veio a cinquenta passos.

Não foi visão, voz ou presságio. Um gesto encaixou-se em lembranças demais. A distribuição do peso antes de mudar de direção, a maneira de observar a estrada, uma pequena expressão diante de um ruído distante. Cosmo parou.

Então vieram as informações.

Algumas eram banais. Outras íntimas o bastante para produzir vergonha. Havia dores pertencentes a versões diferentes daquela pessoa, escolhas que talvez nunca fossem feitas, frases pronunciadas em mundos que talvez não tivessem qualquer relação com aquele.

A âncora percebeu que estava sendo observada.

— Algum problema?

Cosmo conhecia dez maneiras de transformar aquela conversa em confiança imediata. Bastaria escolher uma memória impossível, uma informação que um estranho não deveria possuir. Poderia provar em segundos que era importante.

Lembrou do diário.

*Não lhes conte aquilo que sabe apenas para provar que sabe.*

— Nenhum — respondeu. — Desculpe. Confundi você com outra pessoa.

Era, de certa maneira, a coisa mais verdadeira que poderia dizer.

Continuaram pela mesma estrada. Cosmo manteve alguma distância, tentando descobrir como iniciar uma conversa que não parecesse planejada havia três anos por uma versão absurdamente mais poderosa de si mesmo.

Não teve tempo.

O disparo veio das árvores.

Um virote. Rápido demais para aviso, comum demais para profecia. Cosmo percebeu a trajetória no mesmo instante em que reconheceu o desfecho provável: pescoço, artéria, morte antes que qualquer cura disponível fosse útil.

Seu corpo reagiu com o hábito de um homem que deveria possuir poder suficiente para impedir aquilo.

Sua magia não respondeu.

Cosmo estendeu a mão mesmo assim.

O virote atingiu uma fivela de metal.

Não deveria.

O ângulo estava errado.

A fivela partiu. O projétil desviou, rasgou pele em vez de garganta e desapareceu na estrada. Cosmo sentiu alguma coisa se contrair sob o esterno. Não era dor. Era a sensação de uma equação se fechando.

Cláusula de Continuidade.

Ele já não sabia conjurar a magia capaz de dobrar possibilidades daquele modo. Não precisava. A cláusula fora costurada à travessia antes que sua arquitetura se desfizesse.

Mais homens saíram das árvores.

Cosmo tinha uma fração do poder que possuíra, um desconhecido ao lado, conhecimento demais sobre uma vida que talvez não fosse aquela e uma missão cujo propósito havia sido arrancado de sua compreensão.

Sorriu sem perceber.

Aquilo, pelo menos, era novo.

Horas mais tarde, depois de sangue, perguntas e explicações necessariamente insuficientes, abriu o diário novamente.

Uma linha que antes lhe parecera apenas parte das instruções chamou sua atenção.

*Primeiro nome confirmado.*

Abaixo dela, em sua própria caligrafia:

*Agora não tente conduzi-lo como conduziu as páginas. Você está dentro da história desta vez.*

Cosmo releu a frase.

Pensou em Iria. Na advertência dela. Na arrogância da Cláusula. Nas vidas que conhecia apenas como variantes e na pessoa real que respirava a poucos metros dele sem dever absolutamente nada a nenhuma dessas versões.

Fechou o livro.

À frente, a estrada desaparecia atrás de uma curva que o Códice nunca lhe mostrara.

Cosmo DeWitte desconfiava de profecias, de certezas, de deuses que falavam como se não devessem explicações e, sobretudo, da facilidade com que um homem inteligente podia confundir boas intenções com o direito de decidir pelos outros.

Ainda assim, acreditava numa coisa.

Não que o futuro seria bom.

Que valia a pena entrar nele.

E seguiu mesmo assim.`,de=`Os trechos como **⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧** não são uma língua secreta, uma cifra ou uma corrupção que Cosmo e Iria percebiam antes da travessia. Até o fim do Capítulo X, ambos compreendem perfeitamente o que está sendo dito ou escrito nesses lugares. O texto é que esconde a informação de quem lê.

No Capítulo XI isso muda. Ao atravessar a possibilidade 1.127, Cosmo perde acesso justamente à informação que dava sentido último à jornada. Pela primeira vez, ele encontra no diário a mesma falha que o leitor vinha encontrando desde antes. A partir daquele ponto, Cosmo e leitor passam a compartilhar a lacuna.

O conteúdo real dessa lacuna não está definido neste manuscrito de propósito. Ela pode ser uma pessoa, um acontecimento, uma reparação, uma promessa, uma ameaça, uma verdade, algo que Cosmo deseja impedir, recuperar, criar, destruir ou qualquer coisa que faça sentido no universo da campanha. O importante é preservar retroativamente os fatos já estabelecidos: Cosmo e Iria sabiam; o objetivo precede o Códice; 1.126 possibilidades observáveis não resolveram o problema; a 1.127 foi a primeira cujo fracasso Cosmo não conseguiu demonstrar; e a travessia tornou inacessível a razão específica que o levou até lá.

Isso permite que a resposta seja criada durante a campanha sem transformar o passado de Cosmo numa história vazia. A lacuna é desconhecida para Cosmo agora, mas não era desconhecida para o homem que construiu a torre.

Ele não partiu sem propósito.

Ele perdeu o propósito depois de chegar.`;function fe(e,t,n){let r=`### ${t}`,i=e.indexOf(r);if(i<0)return e;let a=e.indexOf(`

### `,i+r.length),o=a<0?e.length:a;return`${e.slice(0,i)}${n.trim()}${e.slice(o)}`}var pe=String.raw`
### Capítulo III — A estrada que ele não tomou

A decisão que separou a vida de Cosmo de muitas outras não teve trovões, visões ou música apropriada.

Teve uma carta.

Tavian escrevera de uma estalagem chamada Veado Branco. Chuvas fortes haviam exposto ruínas a oeste de Caldris; havia inscrições antigas, um patrocinador disposto a pagar e, segundo ele, perigo suficiente para impedir que a viagem se tornasse educativa demais. Alguns exploradores partiriam da estalagem na manhã seguinte, e Tavian queria alguém capaz de distinguir um presságio legítimo de uma inscrição que apenas parecia ameaçadora sob luz ruim.

Cosmo pretendia ir.

Separou uma bolsa, escolheu dois livros, depois voltou a guardar um deles porque se recusava a admitir que precisaria dos dois. Prometeu a Neris que apareceria para jantar antes da partida. Estava procurando um casaco quando um experimento que repetia havia meses finalmente funcionou.

Duas placas de vidro tratadas com sais diferentes estavam alinhadas diante do mesmo espelho de adivinhação. Cosmo acendeu uma vela entre elas e estabilizou a matriz.

Numa placa, a chama permaneceu acesa.

Na outra, apagou.

Ao mesmo tempo.

Não eram imagens sucessivas, ilusão ou eco. Duas consequências incompatíveis do mesmo estado inicial estavam presentes sem que a magia exigisse que uma delas fosse declarada verdadeira.

Cosmo ficou imóvel por alguns segundos. Depois olhou para a bolsa pronta. Depois para o experimento.

Sentou-se.

Quando tornou a perceber a passagem do tempo, o sol já estava nascendo. O Veado Branco ficava a duas horas de distância e Tavian provavelmente havia partido.

Neris encontrou a carta ao lado de quatro canecas de café.

— Você ainda consegue alcançá-lo.

— Consigo.

— Vai?

Cosmo observou as duas placas. Tinha reproduzido o efeito três vezes.

— Não.

— Porque isso é mais importante?

Ele pensou antes de responder.

— Porque isso pode me permitir parar de perguntar se escolhi a tentativa errada.

Neris conhecia a frase escondida por trás daquela resposta. Encostou-se à porta.

— E depois?

— Depois eu encontro um caminho até ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧.

— E depois?

Cosmo a encarou.

— Depois eu vou viver.

— Esse é o problema. Você diz isso sobre tudo. Vai jantar depois da experiência. Vai viajar depois do artigo. Vai dormir depois do cálculo. Um dia você vai perceber que transformou a própria vida na coisa que pretende fazer assim que terminar a próxima pergunta.

Cosmo tentou encontrar uma resposta inteligente. Neris não lhe deu tempo.

— Só pensa nisso — disse, antes de descer.

Ele pensou.

Ficou mesmo assim.

Meses depois, Tavian voltou das ruínas com uma cicatriz nova e quatro versões incompatíveis da mesma história. Cosmo ouviu três, contestou duas e pagou a cerveja que acompanhou a quarta. A expedição continuou sendo o que sempre fora para ele: uma viagem com um velho amigo que escolhera não fazer. Nenhuma pessoa que, anos mais tarde, ocuparia páginas inteiras do Códice entrou em sua vida por causa daquela carta.

Isso importaria.

Porque, quando certos desconhecidos começassem a aparecer nas possibilidades, Cosmo não teria uma memória anterior à qual atribuí-los. Nenhuma apresentação esquecida. Nenhum relato de Tavian. Nenhuma coincidência conveniente.

Na realidade em que construiu a torre, ele jamais os conhecera.

O experimento das placas tornou-se uma matriz comparativa. A matriz exigiu mais espaço. O espaço exigiu instrumentos capazes de permanecer calibrados por dias. No terreno antigo da família ao norte de Caldris, onde Orren sonhara construir uma oficina maior antes de descobrir que odiava subir aquela estrada no inverno, Cosmo começou a erguer uma torre.

Não era uma torre de mago como as histórias gostavam de descrever. Não havia gárgulas, cristais flutuantes ou corredores que levavam a cômodos maiores por dentro. Havia contas, trabalhadores irritados, pedra chegando atrasada e Orren discutindo vinte minutos sobre a fundação.

A estranheza estava no projeto.

Três andares eram atravessados por canais de prata. O piso superior tinha sete posições para espelhos de obsidiana. A escadaria central contornava um poço cilíndrico onde anéis de metal poderiam girar sem tocar as paredes. Nenhuma janela estava onde seria mais bonita; todas obedeciam a ângulos específicos em relação ao horizonte mágico de Caldris.

Orren examinou o desenho final.

— Você está construindo um observatório.

— Em parte.

— Observatórios olham para alguma coisa.

Cosmo apontou para o círculo central.

— Este vai olhar para diferenças.

— Diferenças entre o quê?

— Entre o que acontece e o que teria acontecido se uma coisa fosse diferente.

Orren ficou calado por alguns segundos.

— Seu problema com relógios sempre foi eles medirem só uma hora de cada vez.

— É uma limitação de projeto.

— Não era elogio.

Cosmo sorriu.

O pai voltou aos desenhos.

— Quanto vai custar?

— Ainda não sei.

— Então já custa mais do que você calculou.

Orren estava certo.
`,me=String.raw`
### Capítulo V — Um livro do tamanho de uma torre

Chamavam-no de Códice porque era mais fácil apontar para o grande livro de capa escura no andar superior do que explicar os três andares abaixo dele.

O livro era apenas a parte visível.

O trabalho verdadeiro ocupava a torre inteira. Sob o piso, anéis de prata delimitavam o que a observação podia alcançar. Espelhos de obsidiana separavam ecos de magia que, sem eles, chegariam misturados. Lentes construídas por Orren distinguiam assinaturas quase idênticas. Reservatórios de sais mantinham a vidência estável por horas; selos nas paredes impediam que uma leitura deixasse resíduos na seguinte. No andar inferior, Cosmo fixava o que deveria permanecer igual. No segundo, isolava a mudança que queria testar. No último, observava suas consequências. Só então o resultado chegava ao papel.

O poder necessário para fazê-la funcionar continuava sendo de Cosmo.

Ele não acordara um dia capaz de contemplar universos infinitos. Seu domínio de adivinhação era o resultado de anos adaptando a própria mente a tarefas que, no início, conseguia sustentar por segundos. Aprendera geometria planar para representar relações sem distância física; magia simpática para rastrear coisas ligadas por história; técnicas mnemônicas para manter lembranças contraditórias sem confundi-las; e cálculo suficiente para separar a consequência da mudança que estava estudando do acaso ao redor.

Cada página exigia preparação.

Antes do amanhecer, Cosmo escolhia um estado inicial que conhecia, delimitava uma única mudança e fixava as constantes. Calibrava as lentes, preparava os vínculos, verificava a memória recente e abria a observação. Não via infinitas vidas de uma vez. Sustentava uma diferença e seguia suas consequências até onde a estrutura permitia.

Ao fim, o Códice registrava uma possibilidade.

Uma página por dia.

Na primeira semana, cada folha pareceu um milagre.

No centésimo dia, o milagre tinha lista de manutenção e manchas de café.

Cosmo procurava uma coisa específica. O método podia ter criado centenas de perguntas acadêmicas, e criou, mas nenhuma delas explicava por que ele aceitara transformar anos de vida num experimento. Todas as manhãs, antes de começar, havia uma pergunta anterior à pergunta técnica: *Nesta sequência, consigo chegar a ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧?*

O primeiro ano produziu respostas variadas e uma conclusão repetida.

Não.

Às vezes Cosmo se aproximava. Às vezes o mundo mudava de maneira tão radical que o problema assumia outra forma. Em algumas possibilidades ele deixava Caldris cedo; em outras, muito tarde. Tornava-se conselheiro de reis, fugitivo, professor, inimigo de gente poderosa, homem muito melhor do que era ou muito pior. Havia páginas em que alcançava poder ainda maior sem construir a torre. Havia uma em que abandonava magia por completo.

E, em certo número de vidas que inicialmente não parecia digno de nota, Cosmo acabava viajando ao lado de um grupo de aventureiros que não existia em nenhuma de suas memórias reais.

O encontro nunca acontecia do mesmo jeito. Às vezes vinha de uma dívida; às vezes, de um desastre; às vezes Cosmo aceitava um trabalho que nesta realidade jamais considerara. Mudavam estradas, reinos, guerras, estações. Mudava até o homem que ele havia se tornado quando o encontro acontecia.

O grupo aparecia mesmo assim.

Cosmo registrou o fato e seguiu adiante. Naquele momento, eram apenas pessoas dentro de uma possibilidade entre centenas.

Nenhuma delas resolvia ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧.

— Talvez a pergunta esteja errada — disse Iria na página 219.

Cosmo não se ofendeu. Era uma hipótese que já o assustava.

— Tenho testado outras formulações.

— Eu sei. Mas você continua fazendo a mesma pergunta com palavras diferentes.

Cosmo a encarou.

Iria apoiou os cotovelos na mesa.

— Você me construiu para não deixar isso passar.

Ele soltou o ar.

— Eu sei o que quero que aconteça. E sei por quê.

— Então me responda outra coisa. Se você conseguir exatamente o que quer, mas o que vier depois destruir a razão pela qual queria aquilo, vai chamar de vitória?

Cosmo ficou em silêncio.

Naquela noite, alterou o protocolo.

O segundo ano ficou mais lento e mais útil. Em vez de classificar sucesso pelo evento que esperava ver, passou a medir consequências posteriores. Descobriu que algumas aparentes vitórias eram apenas fracassos atrasados. Descobriu também que certos caminhos que descartara cedo continham componentes úteis.

O universo, concluiu, não respeitava a escala humana de importância. Um cavalo perdia uma ferradura, atrasava uma mensagem, o atraso impedia um duelo, um dos homens que deveria morrer tinha uma filha e aquela filha, décadas depois, salvava centenas durante uma epidemia. Pequenas diferenças produziam histórias enormes; eventos grandiosos às vezes morriam sem consequência depois de uma geração.

Iria proibiu a palavra *irrelevante* sem complemento.

— Irrelevante para qual pergunta? — corrigia.

— Para esta.

— Então escreva isso.

— Vai deixar o relatório insuportável.

— Melhor insuportável do que desonesto.

Cosmo escrevia.

No terceiro ano, deixou de contar o tempo pelo calendário.

801. 802. 803.

Iria o obrigava a parar a cada sete páginas. Neris aparecia sem regularidade suficiente para ser transformada em protocolo. Miren enviava comida e mapas recentes. Orren substituía peças sempre que encontrava pretexto para subir. Mael leu parte da teoria e escreveu nas margens tantos insultos quanto observações úteis.

O projeto não destruiu a vida de Cosmo. Fez algo mais sutil: começou a ocupar qualquer espaço que a vida deixava vago.

Foi então que alguns desconhecidos começaram a deixar de parecer desconhecidos.
`,D=String.raw`
### Capítulo VI — Vidas que ele nunca viveu

Cosmo percebeu o padrão tarde porque procurava por acontecimentos.

O Códice procurava relações.

Na possibilidade 312, ele passava meses ao lado de um pequeno grupo de aventureiros depois de um encontro que, em sua própria realidade, jamais ocorrera. Na 481, as causas daquele encontro eram removidas por completo; ainda assim, anos depois e muito longe dali, algumas das mesmas presenças voltavam a cruzar sua história. Na 694, Cosmo tomava decisões que deveriam tê-lo mantido em outro continente. O encontro vinha de outro modo.

Não havia uma estalagem secreta costurando os mundos. Não havia um patrono comum, uma classe, uma raça, uma cidade natal ou sequer um mesmo momento da vida. Havia apenas a recorrência de certas pessoas que, na realidade da torre, Cosmo nunca encontrara.

Ele criou um índice.

No começo, não indexou nomes. Nomes eram frágeis demais para aquilo. O Códice distinguia cada recorrente por uma combinação de relações causais, ecos simpáticos e padrões de presença — algo mais próximo de uma assinatura do que de uma identidade civil. Assim Cosmo podia reconhecer a mesma recorrência sem precisar supor quem aquela pessoa seria na possibilidade seguinte.

Encontrou uma.

Depois outra.

Depois percebeu que não estava encontrando indivíduos isolados.

Estava encontrando um grupo.

As condições mudavam violentamente. Reis diferentes. Guerras evitadas. Cidades destruídas em uma página e preservadas na seguinte. Em certas vidas, aquelas pessoas eram admiráveis. Em outras, cruéis. Algumas versões se tornavam inimigas umas das outras. Outras jamais chegavam a confiar plenamente em Cosmo. Havia futuros em que alguém sacrificava tudo para salvar um desconhecido e futuros em que uma variação pequena transformava a mesma presença em algo que Cosmo aprenderia a temer.

O que se repetia não era bondade.

Não era amizade.

Era importância.

— Você está procurando a semelhança errada — disse Iria certa noite.

Vinte e sete registros cobriam o chão da sala superior. Cosmo estava sentado entre eles com a expressão de quem considerava perfeitamente razoável jantar no mesmo lugar em que trabalhara pelas últimas onze horas.

— Eles acabam juntos — respondeu.

— Nem sempre.

— Frequente o bastante para ser estatisticamente ofensivo.

— Olhe para depois do encontro.

Cosmo ergueu os olhos.

Iria apontou para as folhas.

— Pare de perguntar onde eles estão. Pergunte o que o mundo faz depois que se encontram.

Cosmo reorganizou o índice até o amanhecer.

Iria estava certa.

A constante não era presença. Era influência. Quando aquelas vidas se tocavam, decisões pequenas passavam a produzir efeitos desproporcionais. Um resgate alterava uma aliança. Uma discussão impedia uma viagem. Uma mentira poupava uma cidade e arruinava uma amizade. Uma morte mudava cinco sobreviventes. Uma misericórdia aparentemente inútil reaparecia vinte anos depois nas mãos de outra pessoa.

Cosmo passou a chamá-los de recorrentes.

Nos cálculos, escreveu outra palavra: *âncoras*.

Detestou o nome quase imediatamente. Âncoras sugeriam imobilidade, e aquelas pessoas eram tudo menos imóveis. O que persistia não era quem elas se tornavam, mas a capacidade de continuarem significativas umas para as outras quando quase todo o resto mudava.

Até então, observar uma possibilidade ainda era uma atividade relativamente segura. Imagens. Sons. Sequências. Algo próximo de olhar o mundo através de uma janela extraordinariamente cara.

O problema é que janelas não davam informação suficiente.

Para entender por que uma escolha acontecia, Cosmo precisava conhecer o que vinha antes dela. Para distinguir coragem de desespero, precisava captar estado emocional. Para saber se uma frase mudara um acontecimento, precisava compreender o que ela significara para quem a ouviu. O Códice cresceu junto com essas perguntas.

Cosmo adicionou matrizes empáticas. Depois, memória contextual. Depois, uma técnica que Mael classificou numa carta como *uma forma excessivamente elegante de cometer uma estupidez*.

Em vez de apenas assistir à possibilidade, Cosmo passou a ancorar a observação numa versão possível de si mesmo.

Ele continuava na torre. Seu corpo não desaparecia. Horas ainda passavam em Caldris. Iria podia tocar seu ombro e interromper a sessão. Nada daquilo mudava.

Mas, enquanto a matriz permanecia aberta, a distinção entre observar e recordar se tornava perigosamente fina.

Cosmo não via uma fogueira: lembrava do calor dela contra as mãos de uma vida que não vivera. Não ouvia apenas uma discussão: lembrava por que estava irritado antes da primeira palavra. Sabia o peso de uma caminhada, a piada que alguém repetia quando ficava nervoso, o silêncio específico que vinha depois de uma perda. Uma possibilidade de seis anos não exigia seis anos na torre, mas chegava à mente com continuidade suficiente para que suas consequências emocionais fossem reais.

Quando a sessão terminava, duas autobiografias ocupavam o mesmo homem por alguns minutos.

Uma era dele.

A outra também parecia ser.

Na primeira experiência profunda, Cosmo abriu os olhos na sala superior e pediu água.

Iria entregou o copo.

Ele o segurou sem beber.

— Morreu alguém? — perguntou ela.

Cosmo demorou a responder.

— Sim.

— Alguém que existe aqui?

— Não sei se essa pergunta ajuda.

Iria se sentou diante dele.

— Então me dê uma melhor.

Cosmo olhou para o copo.

— Como se lamenta uma pessoa que está viva em um mundo, morta em outro e ainda nem me conhece neste?

Iria não tinha resposta pronta.

Foi uma das razões pelas quais Cosmo confiava nela.

Com o tempo, essas vidas emprestadas se acumularam. Ele conheceu aquelas pessoas em vitórias e em derrotas, no ridículo e no terrível. Descobriu o tipo de promessa que algumas versões faziam quando tinham medo. Viu outras serem consumidas por poder. Aprendeu quais feridas podiam torná-las gentis e quais podiam torná-las monstruosas. Em uma possibilidade, conhecia a motivação que levava alguém a salvar uma cidade; em outra, conhecia a mesma motivação torcida até justificar queimá-la.

Cosmo viu quem poderiam ser se escolhessem bem.

Viu quem poderiam ser se escolhessem mal.

E viu possibilidades suficientes para desconfiar profundamente da ideia de que qualquer uma dessas versões fosse a verdadeira.

Esse era o paradoxo mais íntimo do Códice: ele sabia coisas demais sobre pessoas que, em sua própria vida, ainda eram perfeitas desconhecidas.

Às vezes, ao fim de uma observação, Cosmo mencionava uma lembrança no jantar antes de perceber que Iria não estivera nela.

— Você lembra daquela ponte em que...

Parava.

Iria esperava.

— Não — dizia ele. — Claro que não lembra.

— Eu gosto especialmente quando você descobre isso depois de me fazer uma pergunta muito específica.

— Foram cinco anos.

— Foram seis horas.

— Para você.

Iria perdia o sorriso nessas ocasiões.

No terceiro ano, apareceu outro padrão que Cosmo tentou ignorar por mais tempo do que devia.

Cosmo demorou mais para catalogá-la. Em parte porque não tinha importância evidente para ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧. Em parte porque, quando percebeu, preferiu conferir os números antes de admitir em voz alta.

Em muitas das vidas nas quais viajava com o grupo por tempo suficiente, Cosmo acabava se envolvendo com uma das integrantes.

Não acontecia em todas as vidas — e Cosmo fez questão de registrar isso.

Em algumas possibilidades os dois eram apenas amigos. Em outras mal se toleravam. Houve uma em que ficaram em lados opostos de uma decisão que nenhum dos dois perdoou. Houve vidas em que jamais existiu qualquer coisa entre eles e vidas em que um deles morreu antes que pudesse existir.

Mas a recorrência estava ali. Frequente demais para desaparecer como ruído.

Iria encontrou o conjunto de registros aberto na mesa.

— O que é isso?

Cosmo não tirou os olhos de uma coluna de números.

— Uma correlação sem relevância operacional.

Iria puxou uma das folhas.

— Essa frase significa que você está constrangido.

— Significa que não afeta a pergunta principal.

Ela leu. Depois leu a página seguinte. Na terceira, olhou para Cosmo. Na quarta, começou a sorrir.

— Não.

— Iria.

— Você está brincando comigo.

— Estatisticamente, seria uma quantidade de trabalho absurda para uma piada.

Iria soltou uma risada curta e genuína.

— Essa até para mim foi novidade.

Cosmo passou a mão pelo rosto.

— Eu não a conheço.

— Tecnicamente, parece que conhece um número embaraçoso de versões dela.

— Exatamente. Esse é o problema.

Iria se sentou no canto da mesa, ainda divertindo-se.

— E como é?

— Quem?

— Ela.

Cosmo ia responder. Parou antes da primeira característica.

Olhou para os registros.

— Essa pergunta não tem uma resposta honesta.

O sorriso de Iria diminuiu, não por decepção, mas por atenção.

Cosmo continuou:

— Eu poderia te dizer como ela foi numa página. Ou em dez. Poderia contar o que amava, o que temia, as coisas terríveis que fez em algumas vidas e as extraordinárias que fez em outras. Poderia descrever quem eu fui ao lado dela. Nada disso me dá o direito de decidir quem ela é antes de conhecê-la.

— E se, um dia, conhecer?

— Então ela terá a desvantagem de encontrar um estranho com lembranças de uma relação que nunca teve.

— E você terá a desvantagem de sentir falta de coisas que nunca aconteceram.

Cosmo ficou quieto.

Iria percebeu que acertara.

— Isso é cruel — disse ela, agora sem riso.

— O Códice não foi construído para ser gentil.

— Não estou falando do Códice.

Ele a encarou.

Iria devolveu a folha.

— Estou falando de encontrar alguém e precisar lembrar que ela não te deve continuidade.

Cosmo guardou aquela frase.

Ela acabaria no diário.

A repetição daquele vínculo não se tornou profecia. Cosmo se recusou a tratá-la assim. Era uma possibilidade que insistia em retornar, não uma promessa, e muito menos uma reivindicação sobre uma mulher que naquela realidade ainda não sabia que ele existia.

O mesmo princípio valia para todos os outros.

Quanto mais os conhecia nas páginas, menos deveria presumir sobre quem encontraria fora delas.

Iria percebeu o perigo antes que Cosmo estivesse disposto a dar nome a ele.

— Se você encontrar qualquer um deles um dia, não diga *eu conheço você*.

— Tecnicamente, eu conheceria várias versões.

— Exatamente. Você vai olhar para uma pessoa real e correr o risco de responder ao que lembra, em vez de responder a quem está na sua frente.

— Ainda existe informação válida. Padrões, reações, pontos de ruptura.

— Claro que existe. É por isso que será tentador.

Cosmo fechou o índice.

— Você acha que eu usaria um segredo que alguém nunca me contou para manipulá-lo?

Iria sustentou o olhar dele por tempo suficiente para que a pergunta mudasse de peso.

— Acho que você salvaria alguém contra a vontade dela se tivesse certeza suficiente de que era necessário.

— Não é a mesma coisa.

— Eu sei.

— Então por que respondeu assim?

— Porque foi a pergunta que você evitou fazer.

Cosmo não gostou da resposta.

Guardou-a mesmo assim.

Os recorrentes trouxeram algo que nenhuma das primeiras centenas de páginas produzira: convergência. Em muitas das possibilidades em que Cosmo chegava mais perto de ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧, parte daquele grupo surgia em algum momento da história. Eles não eram a solução. Cosmo confirmou isso com cuidado. Havia futuros em que todos estavam presentes e ele ainda falhava.

Mas eram uma estrutura que continuava reaparecendo quando quase todo o resto mudava.

Pela primeira vez, Cosmo tinha pontos de referência num mapa que se recusava a ficar parado.

E tinha, contra o próprio bom senso, saudade de pessoas que nunca conhecera.
`,O=String.raw`
### Capítulo VII — 1.127

A página 1.127 começou como todas as outras.

Cosmo acordou antes do sol. Iria já estava na sala superior, sentada junto à janela com um livro aberto que não lia havia vários minutos. Os doze recipientes de vidro continham as quantidades corretas de reagente. Os sete espelhos estavam alinhados. O Códice aguardava no suporte de carvalho.

— Você dormiu? — perguntou Iria.

— Cinco horas.

— Consecutivas?

— Isso não estava na pergunta.

— Então não.

Cosmo sorriu e começou a calibração.

A possibilidade daquele dia não parecia especial. Ele alterara um encontro em três horas numa estrada que jamais percorrera naquela vida e mantivera o restante das condições tão próximo quanto possível da página anterior. O objetivo continuava o mesmo. O teste continuava o mesmo. Havia realizado versões mais agressivas centenas de vezes.

Os anéis da torre começaram a girar.

Luz percorreu os canais de prata. Os espelhos escureceram. A chama central se inclinou para norte. No livro, a numeração surgiu primeiro.

POSSIBILIDADE 1127.

OBSERVADOR: COSMO DEWITTE.

CONSTANTES: 17.

Depois, nada.

Cosmo esperou.

Uma gota de cor surgiu no centro da folha.

Primeiro pareceu azul-cobalto. Então a borda tornou-se violeta sem que o centro deixasse de ser azul. Um veio cor de vinho atravessou os dois; dourado apareceu não sobre eles, mas entre eles, como se ocupasse uma profundidade que o papel não possuía. Havia ainda uma tonalidade esverdeada, escura e mineral, que Cosmo conseguia perceber mas não nomear com precisão.

Não era tinta.

As cores se moviam abaixo das fibras, encontravam-se sem se misturar e se afastavam deixando filamentos finíssimos, como correntes vistas de uma altura impossível. Onde deveriam existir frases, a mancha formava novas bordas. Onde Cosmo procurava imagens, a cor respondia com outra cor.

Em poucos segundos, toda a área destinada ao registro estava tomada.

Os espelhos não mostraram ruído, resistência ou interferência. Apenas escureceram até não refletirem nem a própria sala.

Cosmo interrompeu a matriz.

— Outra vez — disse.

Iria não se moveu.

— Primeiro verifique o conjunto.

— Eu ia verificar o conjunto.

— Você já colocou a mão no reagente novo.

Cosmo olhou para a própria mão.

— Observação válida.

Ele verificou tudo.

Repetiu.

As cores voltaram, diferentes na forma e idênticas no efeito.

Cosmo trocou a folha, substituiu dois reagentes e refez o alinhamento. O violeta surgiu do canto. O cobalto veio depois. Um ouro opaco correu pela margem como uma rachadura de luz.

Nenhuma história.

Desmontou um dos suportes de espelho, mediu o ângulo com o instrumento que Orren fabricara décadas antes e recalibrou tudo.

Na quinta tentativa, Iria sentou-se no chão.

— Agora você está sorrindo.

Cosmo percebeu que era verdade.

— Eu vi mil cento e vinte e seis formas de falhar.

— Isto também pode ser falha.

— Pode.

— Pode ser defeito do instrumento.

— Testamos.

— Pode ser interferência que você ainda não conhece.

— Também pode.

Iria cruzou os braços.

— Então por que está com essa cara?

Cosmo olhou para a folha impossível.

— Porque esta é a primeira vez que eu não consigo provar que dá errado.

Iria ficou em silêncio.

A frase não era triunfo. Cosmo sabia disso. A incapacidade de observar um fracasso não era evidência de sucesso. Se qualquer aluno seu cometesse esse salto, ele o faria repetir o curso. Mas havia uma diferença importante entre acreditar que aquela possibilidade funcionaria e reconhecer que, depois de três anos, ela era a primeira a escapar completamente da estrutura que classificara todas as demais.

Ele não acreditava nela.

Ainda não conseguia descartá-la.

Era o bastante para continuar.

Durante semanas, Cosmo tentou descobrir o que exatamente o Códice não conseguia fazer. A possibilidade existia: a matriz alcançava alguma coisa, consumia energia e estabilizava o vínculo. Só não trazia informação de volta. Nenhuma imagem. Nenhum acontecimento. Nenhuma data. Nenhuma morte. Nenhuma resposta à pergunta sobre ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧.

Não era um futuro vazio.

Era um futuro que, daquela posição, não podia ser descrito.

Iria tornou-se mais cautelosa à medida que Cosmo se tornava mais interessado.

— Quero que você responda sem metáfora — disse ela certa noite. — Por que isto é uma descoberta e não um aviso?

Cosmo caminhou até a janela. Caldris brilhava abaixo, pequena e ordinária. A primeira resposta que lhe ocorreu era elegante. Ele não a usou.

— Porque um aviso ainda é informação. A página não diz para eu parar. Não diz para prosseguir. Não ameaça, não promete. O Códice só prova duas coisas: há uma possibilidade e eu não consigo observá-la daqui. Qualquer significado além disso sou eu inventando.

— Melhor.

— Você continua achando uma péssima ideia.

— Continuo.

— Ótimo.

Iria quase sorriu.

— Isso foi esperança?

— Controle de qualidade.

Desta vez ela riu.

Cosmo voltou à mesa.

— Se eu conseguir entrar, posso descobrir vivendo o que não consigo observar daqui.

— E, se entrar, você deixa de ser observador externo.

— Exatamente.

— O que significa que não haverá Códice para dizer se ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧ continua possível.

Cosmo passou um dedo pela margem da folha sem tocar as cores.

— Pela primeira vez, vou ter de descobrir depois.
`,he=String.raw`
### Capítulo X — A travessia

Cosmo ativou o mecanismo às sete e treze da manhã.

O primeiro anel alinhou Caldris. O segundo encontrou as assinaturas recorrentes. O terceiro procurou a relação que não possuía coordenada própria. Os sete espelhos voltaram-se para dentro e, pela primeira vez, refletiram uns aos outros sem produzir imagem.

O portal não nasceu como uma porta.

Nasceu como uma falha na geometria.

Uma linha finíssima apareceu no ar dentro dos anéis. Não era reta o bastante para ser desenho nem irregular o bastante para ser rachadura. O dourado dos círculos rituais inclinou-se em direção a ela. Então a linha se curvou sobre si mesma e começou a ganhar profundidade. Vieram as mesmas cores da página 1.127: cobalto profundo, violeta, vinho escuro, um verde mineral e veios de ouro opaco. Elas não se empilhavam em bordas. Corriam juntas, em camadas líquidas, contornando um centro que parecia puxar a própria ideia de distância para dentro.

Quando o vórtice terminou de se abrir, não havia paisagem do outro lado. Os olhos de Cosmo procuraram um chão, um horizonte, qualquer ponto que permitisse medir distância. Não encontraram. As cores corriam ao redor de um centro que não parecia escuro; parecia simplesmente não pertencer à sala, como se a abertura levasse a um lugar para o qual perspectiva e direção ainda não servissem.

Cosmo verificou o diário na bolsa.

Abriu na última seção e releu por hábito a frase que o levara até ali.

*Você construiu o Códice porque ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧.*

Ele conhecia cada palavra.

Fechou o livro.

Olhou para Iria.

Então começou a desmontar, um a um, os encantamentos que sustentavam seu poder.

Os primeiros encantamentos a desaparecer foram pequenos. Proteções permanentes que usara durante tantos anos que já pareciam parte do corpo deixaram de existir. Depois vieram atalhos mentais, estruturas de adivinhação, relações que lhe permitiam sustentar várias camadas de magia sem recitar uma palavra.

Cosmo reconhecia cada estrutura no instante em que a perdia. Sabia o nome do feitiço, lembrava de tê-lo usado centenas de vezes e, ainda assim, percebia que já não conseguiria erguê-lo de novo.

Os círculos da torre ficaram mais luminosos à medida que absorviam o que a passagem não carregaria. O vórtice ganhou altura suficiente para uma pessoa. As faixas de cor continuavam a se dobrar em torno do centro, lentas na aparência, embora os instrumentos tremessem como se a torre estivesse suportando uma tempestade.

Por um instante, as assinaturas recorrentes responderam juntas.

E as vidas emprestadas voltaram.

Cosmo lembrou uma fogueira sob chuva. Uma discussão que terminara em riso em uma possibilidade e em silêncio noutra. Uma ponte na qual perdera alguém. Uma mão que o puxara de volta quando fora ele quem quase morrera. Lembrou o grupo caminhando à frente dele em estradas diferentes, sob céus diferentes, sendo heróis em algumas vidas, desastres em outras e, na maioria, simplesmente pessoas tentando fazer escolhas com informação insuficiente.

Por um segundo breve demais, veio também a lembrança de uma das integrantes virando o rosto para ele com uma intimidade que aquela mulher, se existisse do outro lado, talvez jamais tivesse.

Cosmo não tentou segurá-la.

Nenhuma daquelas lembranças era instrução.

Todas eram possíveis.

No limite do círculo, Iria continuava ali.

Cosmo sorriu para ela.

E atravessou.
`,k=E;k=fe(k,`Capítulo III — A estrada que ele não tomou`,pe),k=fe(k,`Capítulo V — Um livro do tamanho de uma torre`,me),k=fe(k,`Capítulo VI — Os recorrentes`,D),k=fe(k,`Capítulo VII — 1.127`,O),k=fe(k,`Capítulo X — A travessia`,he),k=k.replaceAll(`Cosmo DeWitte nasceu numa casa em que discordar era uma forma aceitável de afeto.`,`Cosmo DeWitte nasceu numa casa em que discordar era uma forma aceitável de afeto. Miren, sua mãe, era tiefling; Orren, seu pai, humano. Nos filhos, as duas heranças não se dividiram com a simetria que os registros de Caldris pareciam esperar. Cosmo tinha traços majoritariamente humanos, olhos de um âmbar incomum e dois chifres escuros que recuavam rente às têmporas. Neris herdara da mãe sinais mais marcados e, do pai, o mesmo sorriso enviesado. Nos formulários eram humano-tiefling. Em casa, eram apenas Cosmo e Neris.`).replaceAll(`Foi no Colégio que conheceu Mael Corven.`,`Foi no Colégio que conheceu Mael Corven, um anão que já ensinava adivinhação havia mais tempo do que Cosmo estava vivo e que não via nisso motivo para exigir reverência.`).replaceAll(`Tavian Roe tornou-se seu melhor amigo porque não parecia impressionado com nenhuma dessas coisas.`,`Tavian Roe, um halfling com muito mais gosto por estradas do que por salas de aula, tornou-se seu melhor amigo porque não parecia impressionado com nenhuma dessas coisas.`).replaceAll(`a página azul`,`a página impossível`).replaceAll(`A página 1.127 permanecia aberta e azul.`,`A página 1.127 permanecia aberta, suas cores impossíveis movendo-se devagar sob as fibras.`).replaceAll(`Na primeira aula prática de Cosmo, uma bacia de scrying rachou e o nariz do garoto começou a sangrar.`,`Na primeira aula prática de Cosmo, ele tentou sustentar uma visão por mais tempo do que conseguia. A água da bacia de vidência se ergueu de uma vez, o recipiente rachou de lado a lado e uma pressão aguda tomou-lhe a testa. Quando a magia cedeu, sangue escorria de seu nariz.`).replaceAll(`— Limpe — disse Mael.`,`— Cuide do nariz primeiro — disse Mael.`).replaceAll(`— Eu disse para interromper se houvesse dor que você não compreendesse. Por que está sangrando?`,`— Eu disse para interromper se houvesse dor que você não compreendesse. O que aconteceu?`).replaceAll(`— Ótimo. Você entendeu o sangue. Agora descubra a bacia.`,`— Ótimo. Isso explica o sangue. Agora me explique por que a bacia rachou.`).replaceAll(`— Ela quebrou.`,`— A sobrecarga devia ter voltado pelo vínculo. Não devia ter chegado ao recipiente.`).replaceAll(`— Essa é a parte que você ainda não entendeu.`,`— Agora temos uma pergunta útil.`).replaceAll(`— A matriz ficou instável, a carga retornou pelo vínculo simpático e aumentou a pressão nos vasos da face.`,`— A matriz ficou instável. A carga voltou pelo vínculo da visão e aumentou a pressão no meu rosto.`).replaceAll(`— Não. Depois que acontecer, ela prova que sua descrição correspondeu ao acontecimento. Você pulou da correspondência para a necessidade sem pagar a ponte.`,`— Não. Depois que acontecer, ela prova apenas que sua visão correspondeu ao que aconteceu. Isso não demonstra que outro resultado era impossível.`).replaceAll(`— Então uma previsão correta não significa nada?`,`— Então acertar a previsão não prova que ela era inevitável?`).replaceAll(`— Significa muito. Esse é o perigo. Informação útil seduz você a tratá-la como ordem. Você quer que uma visão seja uma sentença porque sentenças aliviam o condenado da responsabilidade de escolher.`,`— Exato. Uma previsão pode ser valiosa e ainda não ser uma sentença. O perigo começa quando você confunde informação com ordem e passa a agir como se já não houvesse escolha.`).replaceAll(`Era uma sombra matemática.`,`A deformação era pequena, mas mensurável.`).replaceAll(`Cosmo passou meses triangulando sombras.`,`Era pouco, mas era algo que ele podia comparar.`).replaceAll(`No centro, a página impossível não seria mapa, mas ausência exata: o ponto para onde todas as relações apontavam sem conseguir descrever o interior.`,`No centro, a página impossível serviria como referência negativa: todos os cálculos terminavam ali, embora nenhum deles conseguisse dizer o que havia depois.`).replaceAll(`Grande parte de seu poder já não existia separada da maneira como aprendera a perceber possibilidades. Durante anos, sua mente mágica reorganizara hábitos, estruturas e atalhos ao redor da arquitetura do Códice. Era por isso que conseguia realizar sozinho tarefas que exigiriam vários adivinhos. Potência e especialização haviam se tornado a mesma coisa.`,`Cosmo havia passado anos moldando seus feitiços ao Códice. As técnicas mais poderosas que dominava dependiam daqueles anéis, daqueles vínculos e, sobretudo, da maneira como aprendera a enxergar futuros possíveis. Era por isso que conseguia realizar sozinho tarefas que exigiriam vários adivinhos. Também era por isso que atravessar seria um problema.`).replaceAll(`— Você escreveu quase todo o seu poder na linguagem de futuros observáveis. Essa possibilidade é definida justamente pelo que sua estrutura não consegue observar. Não é que você seja poderoso demais para atravessar. É que suas capacidades mais avançadas dependem de uma arquitetura que a passagem não sabe carregar.`,`— Seus feitiços mais poderosos dependem justamente do modo como o Códice lê futuros observáveis. A 1.127 é o primeiro lugar em que esse modo de leitura falha. Se a passagem não consegue levar essa estrutura, ela também não consegue levar boa parte do que você aprendeu a fazer.`).replaceAll(`— Seus testes preservam memória autobiográfica e conhecimento declarativo. Você vai saber quem é. Vai lembrar dos feitiços. Só não terá a arquitetura necessária para executá-los.`,`— Seus testes indicam que as lembranças ficam intactas. Você vai saber quem é. Vai lembrar dos feitiços. Só não terá mais a estrutura necessária para executá-los.`).replaceAll(`Nos primeiros meses de trabalho intenso, Cosmo descobrira um problema que nenhum instrumento podia corrigir: ele próprio. Um observador solitário era uma variável sem fiscalização. Podia formular uma hipótese, executar um teste, reinterpretar o resultado e convencer a si mesmo de que a nova interpretação era a intenção original. Encontrou a prova ao reler quarenta dias de registros e perceber que, pouco a pouco, redefinira três termos para preservar uma hipótese de que gostava.`,`Nos primeiros meses de trabalho intenso, Cosmo descobrira um problema que nenhum instrumento podia corrigir: ele próprio. Trabalhando sozinho, podia formular uma hipótese, executar um teste e reinterpretar o resultado até esquecer onde terminava a evidência e começava a vontade de estar certo. Só percebeu o quanto fazia isso quando releu quarenta dias de registros e encontrou três definições que havia alterado, pouco a pouco, para salvar uma hipótese de que gostava.`).replaceAll(`Tentou criar protocolos de oposição. Sorteava premissas contrárias, escrevia perguntas para abrir dias depois, obrigava-se a defender a hipótese inversa. Nada bastava. Uma objeção preparada pela própria mente continuava pertencendo à mente que deveria ser surpreendida.`,`Tentou criar maneiras de contrariar a si mesmo. Sorteava hipóteses opostas, escrevia perguntas para abrir dias depois, obrigava-se a defender a conclusão inversa. Nada bastava. No fim, ainda sabia de onde cada objeção tinha vindo. Continuava discutindo consigo mesmo.`).replaceAll(`Iria começara como aquilo que os projetos chamavam de matriz dialética.`,`Nos projetos, Iria aparecia sob um nome impessoal: matriz dialética.`).replaceAll(`Sua natureza nunca foi segredo para Cosmo. Ele sabia onde ficava o núcleo que sustentava suas memórias, conhecia cada selo responsável por manter a forma e poderia, em teoria, desligá-la. O que não soube determinar foi em que momento compreender a fabricação de uma mente deixou de parecer razão suficiente para tratá-la como objeto.`,`Sua natureza nunca foi segredo para Cosmo. Ele sabia onde ficava o núcleo que sustentava suas memórias, conhecia cada selo responsável por manter sua forma e poderia, em teoria, desligá-la. O que não sabia dizer era em que momento deixara de pensar nela como uma coisa que havia fabricado. Conhecer cada peça explicava como Iria começara; já não parecia suficiente para explicar quem ela era.`).replaceAll(`Em algum ponto impossível de localizar, ela deixara de representar qualquer coisa.`,`Em algum ponto impossível de localizar, Cosmo deixara de olhar para ela e enxergar uma função.`).replaceAll(`Iria respirou como uma pessoa que não precisava respirar.`,`Iria inspirou devagar. Era um hábito, não uma necessidade, e Cosmo percebeu que ela só fazia aquilo quando precisava de tempo.`).replaceAll(`Riu sozinho, ajoelhado na lama, porque havia alguma coisa obscenamente engraçada em um homem que na véspera dobrava cadeias de possibilidade precisar se concentrar para iluminar a própria mão.`,`Riu sozinho, ajoelhado na lama, porque havia alguma coisa obscenamente engraçada em um homem que na véspera sustentava o Códice sozinho agora precisar se concentrar para iluminar a própria mão.`).replaceAll(`Tentou reconstruir pelo contexto. O objetivo podia ser inferido pela gramática, talvez pelas frases seguintes. Encontrou o mesmo problema: sempre que uma conclusão se aproximava da informação ausente, o raciocínio deixava de ter objeto. Não era como esquecer um nome e sentir a palavra na ponta da língua. Era como chegar a uma porta e descobrir que o conceito de maçaneta havia sido removido.`,`Tentou reconstruir o sentido pelas frases ao redor. Se sabia o que fizera antes e o que pretendia fazer depois, talvez conseguisse preencher o espaço entre as duas coisas. Não conseguiu. Toda linha de raciocínio chegava ao mesmo ponto e parava. Ele sabia que ali deveria existir uma resposta; o que faltava era justamente a parte necessária para formulá-la.`).replaceAll(`Cinco: ele próprio julgara aquele registro importante o bastante para colocá-lo como redundância.`,`Cinco: antes de atravessar, ele próprio julgara aquela informação importante o bastante para registrá-la também no diário.`).replaceAll(`Se alguma coisa perturbasse sua memória durante a passagem, papel e tinta serviriam como redundância.`,`Se alguma coisa perturbasse sua memória durante a passagem, papel e tinta guardariam uma segunda cópia do que ele não podia se dar ao luxo de esquecer.`).replaceAll(`A distribuição do peso antes de mudar de direção, a maneira de observar a estrada, uma pequena expressão diante de um ruído distante.`,`O jeito de apoiar o peso antes de mudar de direção, a maneira de observar a estrada, uma pequena expressão diante de um ruído distante.`).replaceAll(`Cosmo sentiu alguma coisa se contrair sob o esterno. Não era dor. Era a sensação de uma equação se fechando.`,`Cosmo sentiu um puxão seco sob o esterno e reconheceu a assinatura da magia antes mesmo de entender o que tinha acontecido.`).replaceAll(`uma missão cujo propósito havia sido arrancado de sua compreensão`,`uma missão cujo motivo já não conseguia lembrar`);var ge=k,_e=`${de}

Os recorrentes não são pessoas que Cosmo conheceu antes da torre. Eles devem corresponder aos personagens reais do grupo apenas quando esses personagens existirem na campanha. Cosmo observou — e, graças à arquitetura mnemônica do Códice, quase viveu — muitas versões possíveis deles. Por isso pode ter lembranças íntimas, conhecer motivações que algumas versões tiveram, saber como alguém poderia agir no melhor ou no pior de si e reconhecer padrões que parecem absurdamente familiares. Nada disso torna uma possibilidade anterior uma verdade sobre a pessoa que está diante dele agora.

Existe também uma recorrência afetiva: em muitas possibilidades Cosmo se relacionou romanticamente com uma das integrantes do grupo. A identidade concreta dessa integrante fica para o mestre encaixar, se e quando fizer sentido com os personagens reais. Isso é memória de possibilidades, não destino, direito adquirido ou obrigação para a personagem atual. O próprio Cosmo entende que, se a encontrar, terá de conhecê-la outra vez como se fosse a primeira — mesmo carregando saudade de vidas que ela nunca viveu.

A Cláusula de Continuidade protege as âncoras apenas quando mais de um desfecho já é plausível; não garante invulnerabilidade. Ela existe também como falha moral de Cosmo: ele se importa genuinamente com aquelas pessoas, mas é capaz de decidir por elas quando acredita que o custo de não agir é alto demais.`,ve=document.getElementById(`root`);if(!ve)throw Error(`Elemento raiz da experiência não encontrado.`);(0,d.createRoot)(ve).render((0,p.jsx)(f.StrictMode,{children:(0,p.jsx)(T,{manuscript:ge,masterNote:_e})}));