(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var zx={exports:{}},_d={},Bx={exports:{}},rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hu=Symbol.for("react.element"),iE=Symbol.for("react.portal"),rE=Symbol.for("react.fragment"),sE=Symbol.for("react.strict_mode"),oE=Symbol.for("react.profiler"),aE=Symbol.for("react.provider"),lE=Symbol.for("react.context"),uE=Symbol.for("react.forward_ref"),cE=Symbol.for("react.suspense"),fE=Symbol.for("react.memo"),dE=Symbol.for("react.lazy"),Kg=Symbol.iterator;function hE(n){return n===null||typeof n!="object"?null:(n=Kg&&n[Kg]||n["@@iterator"],typeof n=="function"?n:null)}var Hx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vx=Object.assign,Gx={};function al(n,e,t){this.props=n,this.context=e,this.refs=Gx,this.updater=t||Hx}al.prototype.isReactComponent={};al.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};al.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Wx(){}Wx.prototype=al.prototype;function g_(n,e,t){this.props=n,this.context=e,this.refs=Gx,this.updater=t||Hx}var v_=g_.prototype=new Wx;v_.constructor=g_;Vx(v_,al.prototype);v_.isPureReactComponent=!0;var Zg=Array.isArray,Xx=Object.prototype.hasOwnProperty,x_={current:null},Yx={key:!0,ref:!0,__self:!0,__source:!0};function qx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xx.call(e,i)&&!Yx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Hu,type:n,key:s,ref:o,props:r,_owner:x_.current}}function pE(n,e){return{$$typeof:Hu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function y_(n){return typeof n=="object"&&n!==null&&n.$$typeof===Hu}function mE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Qg=/\/+/g;function Wd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?mE(""+n.key):e.toString(36)}function Jc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Hu:case iE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Wd(o,0):i,Zg(r)?(t="",n!=null&&(t=n.replace(Qg,"$&/")+"/"),Jc(r,e,t,"",function(u){return u})):r!=null&&(y_(r)&&(r=pE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Qg,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Zg(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Wd(s,a);o+=Jc(s,e,t,l,r)}else if(l=hE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Wd(s,a++),o+=Jc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qu(n,e,t){if(n==null)return n;var i=[],r=0;return Jc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function _E(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var qn={current:null},ef={transition:null},gE={ReactCurrentDispatcher:qn,ReactCurrentBatchConfig:ef,ReactCurrentOwner:x_};function jx(){throw Error("act(...) is not supported in production builds of React.")}rt.Children={map:Qu,forEach:function(n,e,t){Qu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Qu(n,function(){e++}),e},toArray:function(n){return Qu(n,function(e){return e})||[]},only:function(n){if(!y_(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};rt.Component=al;rt.Fragment=rE;rt.Profiler=oE;rt.PureComponent=g_;rt.StrictMode=sE;rt.Suspense=cE;rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gE;rt.act=jx;rt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Vx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=x_.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Xx.call(e,l)&&!Yx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Hu,type:n.type,key:r,ref:s,props:i,_owner:o}};rt.createContext=function(n){return n={$$typeof:lE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:aE,_context:n},n.Consumer=n};rt.createElement=qx;rt.createFactory=function(n){var e=qx.bind(null,n);return e.type=n,e};rt.createRef=function(){return{current:null}};rt.forwardRef=function(n){return{$$typeof:uE,render:n}};rt.isValidElement=y_;rt.lazy=function(n){return{$$typeof:dE,_payload:{_status:-1,_result:n},_init:_E}};rt.memo=function(n,e){return{$$typeof:fE,type:n,compare:e===void 0?null:e}};rt.startTransition=function(n){var e=ef.transition;ef.transition={};try{n()}finally{ef.transition=e}};rt.unstable_act=jx;rt.useCallback=function(n,e){return qn.current.useCallback(n,e)};rt.useContext=function(n){return qn.current.useContext(n)};rt.useDebugValue=function(){};rt.useDeferredValue=function(n){return qn.current.useDeferredValue(n)};rt.useEffect=function(n,e){return qn.current.useEffect(n,e)};rt.useId=function(){return qn.current.useId()};rt.useImperativeHandle=function(n,e,t){return qn.current.useImperativeHandle(n,e,t)};rt.useInsertionEffect=function(n,e){return qn.current.useInsertionEffect(n,e)};rt.useLayoutEffect=function(n,e){return qn.current.useLayoutEffect(n,e)};rt.useMemo=function(n,e){return qn.current.useMemo(n,e)};rt.useReducer=function(n,e,t){return qn.current.useReducer(n,e,t)};rt.useRef=function(n){return qn.current.useRef(n)};rt.useState=function(n){return qn.current.useState(n)};rt.useSyncExternalStore=function(n,e,t){return qn.current.useSyncExternalStore(n,e,t)};rt.useTransition=function(){return qn.current.useTransition()};rt.version="18.3.1";Bx.exports=rt;var cu=Bx.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vE=cu,xE=Symbol.for("react.element"),yE=Symbol.for("react.fragment"),SE=Object.prototype.hasOwnProperty,ME=vE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,EE={key:!0,ref:!0,__self:!0,__source:!0};function $x(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)SE.call(e,i)&&!EE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:xE,type:n,key:s,ref:o,props:r,_owner:ME.current}}_d.Fragment=yE;_d.jsx=$x;_d.jsxs=$x;zx.exports=_d;var Ue=zx.exports,Kx={exports:{}},Ti={},Zx={exports:{}},Qx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,K){var P=I.length;I.push(K);e:for(;0<P;){var te=P-1>>>1,ye=I[te];if(0<r(ye,K))I[te]=K,I[P]=ye,P=te;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var K=I[0],P=I.pop();if(P!==K){I[0]=P;e:for(var te=0,ye=I.length,Be=ye>>>1;te<Be;){var j=2*(te+1)-1,ee=I[j],ue=j+1,le=I[ue];if(0>r(ee,P))ue<ye&&0>r(le,ee)?(I[te]=le,I[ue]=P,te=ue):(I[te]=ee,I[j]=P,te=j);else if(ue<ye&&0>r(le,P))I[te]=le,I[ue]=P,te=ue;else break e}}return K}function r(I,K){var P=I.sortIndex-K.sortIndex;return P!==0?P:I.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,h=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var K=t(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=I)i(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=t(u)}}function S(I){if(_=!1,x(I),!g)if(t(l)!==null)g=!0,B(C);else{var K=t(u);K!==null&&Y(S,K.startTime-I)}}function C(I,K){g=!1,_&&(_=!1,p(R),R=-1),h=!0;var P=f;try{for(x(K),d=t(l);d!==null&&(!(d.expirationTime>K)||I&&!T());){var te=d.callback;if(typeof te=="function"){d.callback=null,f=d.priorityLevel;var ye=te(d.expirationTime<=K);K=n.unstable_now(),typeof ye=="function"?d.callback=ye:d===t(l)&&i(l),x(K)}else i(l);d=t(l)}if(d!==null)var Be=!0;else{var j=t(u);j!==null&&Y(S,j.startTime-K),Be=!1}return Be}finally{d=null,f=P,h=!1}}var w=!1,M=null,R=-1,D=5,y=-1;function T(){return!(n.unstable_now()-y<D)}function U(){if(M!==null){var I=n.unstable_now();y=I;var K=!0;try{K=M(!0,I)}finally{K?k():(w=!1,M=null)}}else w=!1}var k;if(typeof v=="function")k=function(){v(U)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,q=X.port2;X.port1.onmessage=U,k=function(){q.postMessage(null)}}else k=function(){m(U,0)};function B(I){M=I,w||(w=!0,k())}function Y(I,K){R=m(function(){I(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){g||h||(g=!0,B(C))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var P=f;f=K;try{return I()}finally{f=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,K){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var P=f;f=I;try{return K()}finally{f=P}},n.unstable_scheduleCallback=function(I,K,P){var te=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?te+P:te):P=te,I){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=P+ye,I={id:c++,callback:K,priorityLevel:I,startTime:P,expirationTime:ye,sortIndex:-1},P>te?(I.sortIndex=P,e(u,I),t(l)===null&&I===t(u)&&(_?(p(R),R=-1):_=!0,Y(S,P-te))):(I.sortIndex=ye,e(l,I),g||h||(g=!0,B(C))),I},n.unstable_shouldYield=T,n.unstable_wrapCallback=function(I){var K=f;return function(){var P=f;f=K;try{return I.apply(this,arguments)}finally{f=P}}}})(Qx);Zx.exports=Qx;var TE=Zx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wE=cu,Mi=TE;function oe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jx=new Set,fu={};function ko(n,e){Ha(n,e),Ha(n+"Capture",e)}function Ha(n,e){for(fu[n]=e,n=0;n<e.length;n++)Jx.add(e[n])}var Wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hp=Object.prototype.hasOwnProperty,AE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jg={},e0={};function CE(n){return hp.call(e0,n)?!0:hp.call(Jg,n)?!1:AE.test(n)?e0[n]=!0:(Jg[n]=!0,!1)}function RE(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function PE(n,e,t,i){if(e===null||typeof e>"u"||RE(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Mn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Mn[n]=new jn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Mn[e]=new jn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Mn[n]=new jn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Mn[n]=new jn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Mn[n]=new jn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Mn[n]=new jn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Mn[n]=new jn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Mn[n]=new jn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Mn[n]=new jn(n,5,!1,n.toLowerCase(),null,!1,!1)});var S_=/[\-:]([a-z])/g;function M_(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(S_,M_);Mn[e]=new jn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(S_,M_);Mn[e]=new jn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(S_,M_);Mn[e]=new jn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Mn[n]=new jn(n,1,!1,n.toLowerCase(),null,!1,!1)});Mn.xlinkHref=new jn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Mn[n]=new jn(n,1,!1,n.toLowerCase(),null,!0,!0)});function E_(n,e,t,i){var r=Mn.hasOwnProperty(e)?Mn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(PE(e,t,r,i)&&(t=null),i||r===null?CE(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Qr=wE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ju=Symbol.for("react.element"),ua=Symbol.for("react.portal"),ca=Symbol.for("react.fragment"),T_=Symbol.for("react.strict_mode"),pp=Symbol.for("react.profiler"),ey=Symbol.for("react.provider"),ty=Symbol.for("react.context"),w_=Symbol.for("react.forward_ref"),mp=Symbol.for("react.suspense"),_p=Symbol.for("react.suspense_list"),A_=Symbol.for("react.memo"),us=Symbol.for("react.lazy"),ny=Symbol.for("react.offscreen"),t0=Symbol.iterator;function dl(n){return n===null||typeof n!="object"?null:(n=t0&&n[t0]||n["@@iterator"],typeof n=="function"?n:null)}var Ht=Object.assign,Xd;function Ll(n){if(Xd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Xd=e&&e[1]||""}return`
`+Xd+n}var Yd=!1;function qd(n,e){if(!n||Yd)return"";Yd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Yd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ll(n):""}function bE(n){switch(n.tag){case 5:return Ll(n.type);case 16:return Ll("Lazy");case 13:return Ll("Suspense");case 19:return Ll("SuspenseList");case 0:case 2:case 15:return n=qd(n.type,!1),n;case 11:return n=qd(n.type.render,!1),n;case 1:return n=qd(n.type,!0),n;default:return""}}function gp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ca:return"Fragment";case ua:return"Portal";case pp:return"Profiler";case T_:return"StrictMode";case mp:return"Suspense";case _p:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ty:return(n.displayName||"Context")+".Consumer";case ey:return(n._context.displayName||"Context")+".Provider";case w_:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case A_:return e=n.displayName||null,e!==null?e:gp(n.type)||"Memo";case us:e=n._payload,n=n._init;try{return gp(n(e))}catch{}}return null}function LE(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gp(e);case 8:return e===T_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ns(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function iy(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function DE(n){var e=iy(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ec(n){n._valueTracker||(n._valueTracker=DE(n))}function ry(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=iy(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Rf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function vp(n,e){var t=e.checked;return Ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function n0(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ns(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sy(n,e){e=e.checked,e!=null&&E_(n,"checked",e,!1)}function xp(n,e){sy(n,e);var t=Ns(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?yp(n,e.type,t):e.hasOwnProperty("defaultValue")&&yp(n,e.type,Ns(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function i0(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function yp(n,e,t){(e!=="number"||Rf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Dl=Array.isArray;function wa(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ns(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Sp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Ht({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function r0(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(oe(92));if(Dl(t)){if(1<t.length)throw Error(oe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ns(t)}}function oy(n,e){var t=Ns(e.value),i=Ns(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function s0(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function ay(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?ay(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var tc,ly=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(tc=tc||document.createElement("div"),tc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function du(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Gl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IE=["Webkit","ms","Moz","O"];Object.keys(Gl).forEach(function(n){IE.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Gl[e]=Gl[n]})});function uy(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Gl.hasOwnProperty(n)&&Gl[n]?(""+e).trim():e+"px"}function cy(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=uy(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var UE=Ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ep(n,e){if(e){if(UE[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Tp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wp=null;function C_(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ap=null,Aa=null,Ca=null;function o0(n){if(n=Wu(n)){if(typeof Ap!="function")throw Error(oe(280));var e=n.stateNode;e&&(e=Sd(e),Ap(n.stateNode,n.type,e))}}function fy(n){Aa?Ca?Ca.push(n):Ca=[n]:Aa=n}function dy(){if(Aa){var n=Aa,e=Ca;if(Ca=Aa=null,o0(n),e)for(n=0;n<e.length;n++)o0(e[n])}}function hy(n,e){return n(e)}function py(){}var jd=!1;function my(n,e,t){if(jd)return n(e,t);jd=!0;try{return hy(n,e,t)}finally{jd=!1,(Aa!==null||Ca!==null)&&(py(),dy())}}function hu(n,e){var t=n.stateNode;if(t===null)return null;var i=Sd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(oe(231,e,typeof t));return t}var Cp=!1;if(Wr)try{var hl={};Object.defineProperty(hl,"passive",{get:function(){Cp=!0}}),window.addEventListener("test",hl,hl),window.removeEventListener("test",hl,hl)}catch{Cp=!1}function NE(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Wl=!1,Pf=null,bf=!1,Rp=null,FE={onError:function(n){Wl=!0,Pf=n}};function OE(n,e,t,i,r,s,o,a,l){Wl=!1,Pf=null,NE.apply(FE,arguments)}function kE(n,e,t,i,r,s,o,a,l){if(OE.apply(this,arguments),Wl){if(Wl){var u=Pf;Wl=!1,Pf=null}else throw Error(oe(198));bf||(bf=!0,Rp=u)}}function zo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function _y(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function a0(n){if(zo(n)!==n)throw Error(oe(188))}function zE(n){var e=n.alternate;if(!e){if(e=zo(n),e===null)throw Error(oe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return a0(r),n;if(s===i)return a0(r),e;s=s.sibling}throw Error(oe(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(t.alternate!==i)throw Error(oe(190))}if(t.tag!==3)throw Error(oe(188));return t.stateNode.current===t?n:e}function gy(n){return n=zE(n),n!==null?vy(n):null}function vy(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=vy(n);if(e!==null)return e;n=n.sibling}return null}var xy=Mi.unstable_scheduleCallback,l0=Mi.unstable_cancelCallback,BE=Mi.unstable_shouldYield,HE=Mi.unstable_requestPaint,$t=Mi.unstable_now,VE=Mi.unstable_getCurrentPriorityLevel,R_=Mi.unstable_ImmediatePriority,yy=Mi.unstable_UserBlockingPriority,Lf=Mi.unstable_NormalPriority,GE=Mi.unstable_LowPriority,Sy=Mi.unstable_IdlePriority,gd=null,gr=null;function WE(n){if(gr&&typeof gr.onCommitFiberRoot=="function")try{gr.onCommitFiberRoot(gd,n,void 0,(n.current.flags&128)===128)}catch{}}var nr=Math.clz32?Math.clz32:qE,XE=Math.log,YE=Math.LN2;function qE(n){return n>>>=0,n===0?32:31-(XE(n)/YE|0)|0}var nc=64,ic=4194304;function Il(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Df(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Il(a):(s&=o,s!==0&&(i=Il(s)))}else o=t&~r,o!==0?i=Il(o):s!==0&&(i=Il(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-nr(e),r=1<<t,i|=n[t],e&=~r;return i}function jE(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $E(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-nr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=jE(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Pp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function My(){var n=nc;return nc<<=1,!(nc&4194240)&&(nc=64),n}function $d(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Vu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-nr(e),n[e]=t}function KE(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-nr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function P_(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-nr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var vt=0;function Ey(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ty,b_,wy,Ay,Cy,bp=!1,rc=[],Ms=null,Es=null,Ts=null,pu=new Map,mu=new Map,fs=[],ZE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function u0(n,e){switch(n){case"focusin":case"focusout":Ms=null;break;case"dragenter":case"dragleave":Es=null;break;case"mouseover":case"mouseout":Ts=null;break;case"pointerover":case"pointerout":pu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mu.delete(e.pointerId)}}function pl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wu(e),e!==null&&b_(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function QE(n,e,t,i,r){switch(e){case"focusin":return Ms=pl(Ms,n,e,t,i,r),!0;case"dragenter":return Es=pl(Es,n,e,t,i,r),!0;case"mouseover":return Ts=pl(Ts,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return pu.set(s,pl(pu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,mu.set(s,pl(mu.get(s)||null,n,e,t,i,r)),!0}return!1}function Ry(n){var e=uo(n.target);if(e!==null){var t=zo(e);if(t!==null){if(e=t.tag,e===13){if(e=_y(t),e!==null){n.blockedOn=e,Cy(n.priority,function(){wy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function tf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Lp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);wp=i,t.target.dispatchEvent(i),wp=null}else return e=Wu(t),e!==null&&b_(e),n.blockedOn=t,!1;e.shift()}return!0}function c0(n,e,t){tf(n)&&t.delete(e)}function JE(){bp=!1,Ms!==null&&tf(Ms)&&(Ms=null),Es!==null&&tf(Es)&&(Es=null),Ts!==null&&tf(Ts)&&(Ts=null),pu.forEach(c0),mu.forEach(c0)}function ml(n,e){n.blockedOn===e&&(n.blockedOn=null,bp||(bp=!0,Mi.unstable_scheduleCallback(Mi.unstable_NormalPriority,JE)))}function _u(n){function e(r){return ml(r,n)}if(0<rc.length){ml(rc[0],n);for(var t=1;t<rc.length;t++){var i=rc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ms!==null&&ml(Ms,n),Es!==null&&ml(Es,n),Ts!==null&&ml(Ts,n),pu.forEach(e),mu.forEach(e),t=0;t<fs.length;t++)i=fs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<fs.length&&(t=fs[0],t.blockedOn===null);)Ry(t),t.blockedOn===null&&fs.shift()}var Ra=Qr.ReactCurrentBatchConfig,If=!0;function eT(n,e,t,i){var r=vt,s=Ra.transition;Ra.transition=null;try{vt=1,L_(n,e,t,i)}finally{vt=r,Ra.transition=s}}function tT(n,e,t,i){var r=vt,s=Ra.transition;Ra.transition=null;try{vt=4,L_(n,e,t,i)}finally{vt=r,Ra.transition=s}}function L_(n,e,t,i){if(If){var r=Lp(n,e,t,i);if(r===null)sh(n,e,i,Uf,t),u0(n,i);else if(QE(r,n,e,t,i))i.stopPropagation();else if(u0(n,i),e&4&&-1<ZE.indexOf(n)){for(;r!==null;){var s=Wu(r);if(s!==null&&Ty(s),s=Lp(n,e,t,i),s===null&&sh(n,e,i,Uf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else sh(n,e,i,null,t)}}var Uf=null;function Lp(n,e,t,i){if(Uf=null,n=C_(i),n=uo(n),n!==null)if(e=zo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=_y(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Uf=n,null}function Py(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(VE()){case R_:return 1;case yy:return 4;case Lf:case GE:return 16;case Sy:return 536870912;default:return 16}default:return 16}}var ps=null,D_=null,nf=null;function by(){if(nf)return nf;var n,e=D_,t=e.length,i,r="value"in ps?ps.value:ps.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return nf=r.slice(n,1<i?1-i:void 0)}function rf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function sc(){return!0}function f0(){return!1}function wi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sc:f0,this.isPropagationStopped=f0,this}return Ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=sc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=sc)},persist:function(){},isPersistent:sc}),e}var ll={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},I_=wi(ll),Gu=Ht({},ll,{view:0,detail:0}),nT=wi(Gu),Kd,Zd,_l,vd=Ht({},Gu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:U_,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_l&&(_l&&n.type==="mousemove"?(Kd=n.screenX-_l.screenX,Zd=n.screenY-_l.screenY):Zd=Kd=0,_l=n),Kd)},movementY:function(n){return"movementY"in n?n.movementY:Zd}}),d0=wi(vd),iT=Ht({},vd,{dataTransfer:0}),rT=wi(iT),sT=Ht({},Gu,{relatedTarget:0}),Qd=wi(sT),oT=Ht({},ll,{animationName:0,elapsedTime:0,pseudoElement:0}),aT=wi(oT),lT=Ht({},ll,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),uT=wi(lT),cT=Ht({},ll,{data:0}),h0=wi(cT),fT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pT(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=hT[n])?!!e[n]:!1}function U_(){return pT}var mT=Ht({},Gu,{key:function(n){if(n.key){var e=fT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=rf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:U_,charCode:function(n){return n.type==="keypress"?rf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?rf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),_T=wi(mT),gT=Ht({},vd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),p0=wi(gT),vT=Ht({},Gu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:U_}),xT=wi(vT),yT=Ht({},ll,{propertyName:0,elapsedTime:0,pseudoElement:0}),ST=wi(yT),MT=Ht({},vd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ET=wi(MT),TT=[9,13,27,32],N_=Wr&&"CompositionEvent"in window,Xl=null;Wr&&"documentMode"in document&&(Xl=document.documentMode);var wT=Wr&&"TextEvent"in window&&!Xl,Ly=Wr&&(!N_||Xl&&8<Xl&&11>=Xl),m0=" ",_0=!1;function Dy(n,e){switch(n){case"keyup":return TT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fa=!1;function AT(n,e){switch(n){case"compositionend":return Iy(e);case"keypress":return e.which!==32?null:(_0=!0,m0);case"textInput":return n=e.data,n===m0&&_0?null:n;default:return null}}function CT(n,e){if(fa)return n==="compositionend"||!N_&&Dy(n,e)?(n=by(),nf=D_=ps=null,fa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ly&&e.locale!=="ko"?null:e.data;default:return null}}var RT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function g0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!RT[n.type]:e==="textarea"}function Uy(n,e,t,i){fy(i),e=Nf(e,"onChange"),0<e.length&&(t=new I_("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Yl=null,gu=null;function PT(n){Xy(n,0)}function xd(n){var e=pa(n);if(ry(e))return n}function bT(n,e){if(n==="change")return e}var Ny=!1;if(Wr){var Jd;if(Wr){var eh="oninput"in document;if(!eh){var v0=document.createElement("div");v0.setAttribute("oninput","return;"),eh=typeof v0.oninput=="function"}Jd=eh}else Jd=!1;Ny=Jd&&(!document.documentMode||9<document.documentMode)}function x0(){Yl&&(Yl.detachEvent("onpropertychange",Fy),gu=Yl=null)}function Fy(n){if(n.propertyName==="value"&&xd(gu)){var e=[];Uy(e,gu,n,C_(n)),my(PT,e)}}function LT(n,e,t){n==="focusin"?(x0(),Yl=e,gu=t,Yl.attachEvent("onpropertychange",Fy)):n==="focusout"&&x0()}function DT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xd(gu)}function IT(n,e){if(n==="click")return xd(e)}function UT(n,e){if(n==="input"||n==="change")return xd(e)}function NT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var sr=typeof Object.is=="function"?Object.is:NT;function vu(n,e){if(sr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!hp.call(e,r)||!sr(n[r],e[r]))return!1}return!0}function y0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function S0(n,e){var t=y0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=y0(t)}}function Oy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Oy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function ky(){for(var n=window,e=Rf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Rf(n.document)}return e}function F_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function FT(n){var e=ky(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Oy(t.ownerDocument.documentElement,t)){if(i!==null&&F_(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=S0(t,s);var o=S0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var OT=Wr&&"documentMode"in document&&11>=document.documentMode,da=null,Dp=null,ql=null,Ip=!1;function M0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ip||da==null||da!==Rf(i)||(i=da,"selectionStart"in i&&F_(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ql&&vu(ql,i)||(ql=i,i=Nf(Dp,"onSelect"),0<i.length&&(e=new I_("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=da)))}function oc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ha={animationend:oc("Animation","AnimationEnd"),animationiteration:oc("Animation","AnimationIteration"),animationstart:oc("Animation","AnimationStart"),transitionend:oc("Transition","TransitionEnd")},th={},zy={};Wr&&(zy=document.createElement("div").style,"AnimationEvent"in window||(delete ha.animationend.animation,delete ha.animationiteration.animation,delete ha.animationstart.animation),"TransitionEvent"in window||delete ha.transitionend.transition);function yd(n){if(th[n])return th[n];if(!ha[n])return n;var e=ha[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in zy)return th[n]=e[t];return n}var By=yd("animationend"),Hy=yd("animationiteration"),Vy=yd("animationstart"),Gy=yd("transitionend"),Wy=new Map,E0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hs(n,e){Wy.set(n,e),ko(e,[n])}for(var nh=0;nh<E0.length;nh++){var ih=E0[nh],kT=ih.toLowerCase(),zT=ih[0].toUpperCase()+ih.slice(1);Hs(kT,"on"+zT)}Hs(By,"onAnimationEnd");Hs(Hy,"onAnimationIteration");Hs(Vy,"onAnimationStart");Hs("dblclick","onDoubleClick");Hs("focusin","onFocus");Hs("focusout","onBlur");Hs(Gy,"onTransitionEnd");Ha("onMouseEnter",["mouseout","mouseover"]);Ha("onMouseLeave",["mouseout","mouseover"]);Ha("onPointerEnter",["pointerout","pointerover"]);Ha("onPointerLeave",["pointerout","pointerover"]);ko("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ko("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ko("onBeforeInput",["compositionend","keypress","textInput","paste"]);ko("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ko("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ko("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ul));function T0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,kE(i,e,void 0,n),n.currentTarget=null}function Xy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;T0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;T0(r,a,u),s=l}}}if(bf)throw n=Rp,bf=!1,Rp=null,n}function Ct(n,e){var t=e[kp];t===void 0&&(t=e[kp]=new Set);var i=n+"__bubble";t.has(i)||(Yy(e,n,2,!1),t.add(i))}function rh(n,e,t){var i=0;e&&(i|=4),Yy(t,n,i,e)}var ac="_reactListening"+Math.random().toString(36).slice(2);function xu(n){if(!n[ac]){n[ac]=!0,Jx.forEach(function(t){t!=="selectionchange"&&(BT.has(t)||rh(t,!1,n),rh(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ac]||(e[ac]=!0,rh("selectionchange",!1,e))}}function Yy(n,e,t,i){switch(Py(e)){case 1:var r=eT;break;case 4:r=tT;break;default:r=L_}t=r.bind(null,e,t,n),r=void 0,!Cp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function sh(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=uo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}my(function(){var u=s,c=C_(t),d=[];e:{var f=Wy.get(n);if(f!==void 0){var h=I_,g=n;switch(n){case"keypress":if(rf(t)===0)break e;case"keydown":case"keyup":h=_T;break;case"focusin":g="focus",h=Qd;break;case"focusout":g="blur",h=Qd;break;case"beforeblur":case"afterblur":h=Qd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=d0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=rT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=xT;break;case By:case Hy:case Vy:h=aT;break;case Gy:h=ST;break;case"scroll":h=nT;break;case"wheel":h=ET;break;case"copy":case"cut":case"paste":h=uT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=p0}var _=(e&4)!==0,m=!_&&n==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var v=u,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,p!==null&&(S=hu(v,p),S!=null&&_.push(yu(v,S,x)))),m)break;v=v.return}0<_.length&&(f=new h(f,g,null,t,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",h=n==="mouseout"||n==="pointerout",f&&t!==wp&&(g=t.relatedTarget||t.fromElement)&&(uo(g)||g[Xr]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(g=t.relatedTarget||t.toElement,h=u,g=g?uo(g):null,g!==null&&(m=zo(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(_=d0,S="onMouseLeave",p="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=p0,S="onPointerLeave",p="onPointerEnter",v="pointer"),m=h==null?f:pa(h),x=g==null?f:pa(g),f=new _(S,v+"leave",h,t,c),f.target=m,f.relatedTarget=x,S=null,uo(c)===u&&(_=new _(p,v+"enter",g,t,c),_.target=x,_.relatedTarget=m,S=_),m=S,h&&g)t:{for(_=h,p=g,v=0,x=_;x;x=Go(x))v++;for(x=0,S=p;S;S=Go(S))x++;for(;0<v-x;)_=Go(_),v--;for(;0<x-v;)p=Go(p),x--;for(;v--;){if(_===p||p!==null&&_===p.alternate)break t;_=Go(_),p=Go(p)}_=null}else _=null;h!==null&&w0(d,f,h,_,!1),g!==null&&m!==null&&w0(d,m,g,_,!0)}}e:{if(f=u?pa(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var C=bT;else if(g0(f))if(Ny)C=UT;else{C=DT;var w=LT}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=IT);if(C&&(C=C(n,u))){Uy(d,C,t,c);break e}w&&w(n,f,u),n==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&yp(f,"number",f.value)}switch(w=u?pa(u):window,n){case"focusin":(g0(w)||w.contentEditable==="true")&&(da=w,Dp=u,ql=null);break;case"focusout":ql=Dp=da=null;break;case"mousedown":Ip=!0;break;case"contextmenu":case"mouseup":case"dragend":Ip=!1,M0(d,t,c);break;case"selectionchange":if(OT)break;case"keydown":case"keyup":M0(d,t,c)}var M;if(N_)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else fa?Dy(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(Ly&&t.locale!=="ko"&&(fa||R!=="onCompositionStart"?R==="onCompositionEnd"&&fa&&(M=by()):(ps=c,D_="value"in ps?ps.value:ps.textContent,fa=!0)),w=Nf(u,R),0<w.length&&(R=new h0(R,n,null,t,c),d.push({event:R,listeners:w}),M?R.data=M:(M=Iy(t),M!==null&&(R.data=M)))),(M=wT?AT(n,t):CT(n,t))&&(u=Nf(u,"onBeforeInput"),0<u.length&&(c=new h0("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=M))}Xy(d,e)})}function yu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Nf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=hu(n,t),s!=null&&i.unshift(yu(n,s,r)),s=hu(n,e),s!=null&&i.push(yu(n,s,r))),n=n.return}return i}function Go(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function w0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=hu(t,s),l!=null&&o.unshift(yu(t,l,a))):r||(l=hu(t,s),l!=null&&o.push(yu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var HT=/\r\n?/g,VT=/\u0000|\uFFFD/g;function A0(n){return(typeof n=="string"?n:""+n).replace(HT,`
`).replace(VT,"")}function lc(n,e,t){if(e=A0(e),A0(n)!==e&&t)throw Error(oe(425))}function Ff(){}var Up=null,Np=null;function Fp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Op=typeof setTimeout=="function"?setTimeout:void 0,GT=typeof clearTimeout=="function"?clearTimeout:void 0,C0=typeof Promise=="function"?Promise:void 0,WT=typeof queueMicrotask=="function"?queueMicrotask:typeof C0<"u"?function(n){return C0.resolve(null).then(n).catch(XT)}:Op;function XT(n){setTimeout(function(){throw n})}function oh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),_u(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);_u(e)}function ws(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function R0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ul=Math.random().toString(36).slice(2),hr="__reactFiber$"+ul,Su="__reactProps$"+ul,Xr="__reactContainer$"+ul,kp="__reactEvents$"+ul,YT="__reactListeners$"+ul,qT="__reactHandles$"+ul;function uo(n){var e=n[hr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Xr]||t[hr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=R0(n);n!==null;){if(t=n[hr])return t;n=R0(n)}return e}n=t,t=n.parentNode}return null}function Wu(n){return n=n[hr]||n[Xr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function pa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(oe(33))}function Sd(n){return n[Su]||null}var zp=[],ma=-1;function Vs(n){return{current:n}}function bt(n){0>ma||(n.current=zp[ma],zp[ma]=null,ma--)}function Tt(n,e){ma++,zp[ma]=n.current,n.current=e}var Fs={},Un=Vs(Fs),Jn=Vs(!1),Ao=Fs;function Va(n,e){var t=n.type.contextTypes;if(!t)return Fs;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ei(n){return n=n.childContextTypes,n!=null}function Of(){bt(Jn),bt(Un)}function P0(n,e,t){if(Un.current!==Fs)throw Error(oe(168));Tt(Un,e),Tt(Jn,t)}function qy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,LE(n)||"Unknown",r));return Ht({},t,i)}function kf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Fs,Ao=Un.current,Tt(Un,n),Tt(Jn,Jn.current),!0}function b0(n,e,t){var i=n.stateNode;if(!i)throw Error(oe(169));t?(n=qy(n,e,Ao),i.__reactInternalMemoizedMergedChildContext=n,bt(Jn),bt(Un),Tt(Un,n)):bt(Jn),Tt(Jn,t)}var Ir=null,Md=!1,ah=!1;function jy(n){Ir===null?Ir=[n]:Ir.push(n)}function jT(n){Md=!0,jy(n)}function Gs(){if(!ah&&Ir!==null){ah=!0;var n=0,e=vt;try{var t=Ir;for(vt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ir=null,Md=!1}catch(r){throw Ir!==null&&(Ir=Ir.slice(n+1)),xy(R_,Gs),r}finally{vt=e,ah=!1}}return null}var _a=[],ga=0,zf=null,Bf=0,Pi=[],bi=0,Co=null,Or=1,kr="";function Js(n,e){_a[ga++]=Bf,_a[ga++]=zf,zf=n,Bf=e}function $y(n,e,t){Pi[bi++]=Or,Pi[bi++]=kr,Pi[bi++]=Co,Co=n;var i=Or;n=kr;var r=32-nr(i)-1;i&=~(1<<r),t+=1;var s=32-nr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Or=1<<32-nr(e)+r|t<<r|i,kr=s+n}else Or=1<<s|t<<r|i,kr=n}function O_(n){n.return!==null&&(Js(n,1),$y(n,1,0))}function k_(n){for(;n===zf;)zf=_a[--ga],_a[ga]=null,Bf=_a[--ga],_a[ga]=null;for(;n===Co;)Co=Pi[--bi],Pi[bi]=null,kr=Pi[--bi],Pi[bi]=null,Or=Pi[--bi],Pi[bi]=null}var yi=null,vi=null,It=!1,Zi=null;function Ky(n,e){var t=Ui(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function L0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,yi=n,vi=ws(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,yi=n,vi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Co!==null?{id:Or,overflow:kr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Ui(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,yi=n,vi=null,!0):!1;default:return!1}}function Bp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Hp(n){if(It){var e=vi;if(e){var t=e;if(!L0(n,e)){if(Bp(n))throw Error(oe(418));e=ws(t.nextSibling);var i=yi;e&&L0(n,e)?Ky(i,t):(n.flags=n.flags&-4097|2,It=!1,yi=n)}}else{if(Bp(n))throw Error(oe(418));n.flags=n.flags&-4097|2,It=!1,yi=n}}}function D0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;yi=n}function uc(n){if(n!==yi)return!1;if(!It)return D0(n),It=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Fp(n.type,n.memoizedProps)),e&&(e=vi)){if(Bp(n))throw Zy(),Error(oe(418));for(;e;)Ky(n,e),e=ws(e.nextSibling)}if(D0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(oe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){vi=ws(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}vi=null}}else vi=yi?ws(n.stateNode.nextSibling):null;return!0}function Zy(){for(var n=vi;n;)n=ws(n.nextSibling)}function Ga(){vi=yi=null,It=!1}function z_(n){Zi===null?Zi=[n]:Zi.push(n)}var $T=Qr.ReactCurrentBatchConfig;function gl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(oe(309));var i=t.stateNode}if(!i)throw Error(oe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(oe(284));if(!t._owner)throw Error(oe(290,n))}return n}function cc(n,e){throw n=Object.prototype.toString.call(e),Error(oe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function I0(n){var e=n._init;return e(n._payload)}function Qy(n){function e(p,v){if(n){var x=p.deletions;x===null?(p.deletions=[v],p.flags|=16):x.push(v)}}function t(p,v){if(!n)return null;for(;v!==null;)e(p,v),v=v.sibling;return null}function i(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function r(p,v){return p=Ps(p,v),p.index=0,p.sibling=null,p}function s(p,v,x){return p.index=x,n?(x=p.alternate,x!==null?(x=x.index,x<v?(p.flags|=2,v):x):(p.flags|=2,v)):(p.flags|=1048576,v)}function o(p){return n&&p.alternate===null&&(p.flags|=2),p}function a(p,v,x,S){return v===null||v.tag!==6?(v=ph(x,p.mode,S),v.return=p,v):(v=r(v,x),v.return=p,v)}function l(p,v,x,S){var C=x.type;return C===ca?c(p,v,x.props.children,S,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===us&&I0(C)===v.type)?(S=r(v,x.props),S.ref=gl(p,v,x),S.return=p,S):(S=ff(x.type,x.key,x.props,null,p.mode,S),S.ref=gl(p,v,x),S.return=p,S)}function u(p,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=mh(x,p.mode,S),v.return=p,v):(v=r(v,x.children||[]),v.return=p,v)}function c(p,v,x,S,C){return v===null||v.tag!==7?(v=vo(x,p.mode,S,C),v.return=p,v):(v=r(v,x),v.return=p,v)}function d(p,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ph(""+v,p.mode,x),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ju:return x=ff(v.type,v.key,v.props,null,p.mode,x),x.ref=gl(p,null,v),x.return=p,x;case ua:return v=mh(v,p.mode,x),v.return=p,v;case us:var S=v._init;return d(p,S(v._payload),x)}if(Dl(v)||dl(v))return v=vo(v,p.mode,x,null),v.return=p,v;cc(p,v)}return null}function f(p,v,x,S){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(p,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ju:return x.key===C?l(p,v,x,S):null;case ua:return x.key===C?u(p,v,x,S):null;case us:return C=x._init,f(p,v,C(x._payload),S)}if(Dl(x)||dl(x))return C!==null?null:c(p,v,x,S,null);cc(p,x)}return null}function h(p,v,x,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(x)||null,a(v,p,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ju:return p=p.get(S.key===null?x:S.key)||null,l(v,p,S,C);case ua:return p=p.get(S.key===null?x:S.key)||null,u(v,p,S,C);case us:var w=S._init;return h(p,v,x,w(S._payload),C)}if(Dl(S)||dl(S))return p=p.get(x)||null,c(v,p,S,C,null);cc(v,S)}return null}function g(p,v,x,S){for(var C=null,w=null,M=v,R=v=0,D=null;M!==null&&R<x.length;R++){M.index>R?(D=M,M=null):D=M.sibling;var y=f(p,M,x[R],S);if(y===null){M===null&&(M=D);break}n&&M&&y.alternate===null&&e(p,M),v=s(y,v,R),w===null?C=y:w.sibling=y,w=y,M=D}if(R===x.length)return t(p,M),It&&Js(p,R),C;if(M===null){for(;R<x.length;R++)M=d(p,x[R],S),M!==null&&(v=s(M,v,R),w===null?C=M:w.sibling=M,w=M);return It&&Js(p,R),C}for(M=i(p,M);R<x.length;R++)D=h(M,p,R,x[R],S),D!==null&&(n&&D.alternate!==null&&M.delete(D.key===null?R:D.key),v=s(D,v,R),w===null?C=D:w.sibling=D,w=D);return n&&M.forEach(function(T){return e(p,T)}),It&&Js(p,R),C}function _(p,v,x,S){var C=dl(x);if(typeof C!="function")throw Error(oe(150));if(x=C.call(x),x==null)throw Error(oe(151));for(var w=C=null,M=v,R=v=0,D=null,y=x.next();M!==null&&!y.done;R++,y=x.next()){M.index>R?(D=M,M=null):D=M.sibling;var T=f(p,M,y.value,S);if(T===null){M===null&&(M=D);break}n&&M&&T.alternate===null&&e(p,M),v=s(T,v,R),w===null?C=T:w.sibling=T,w=T,M=D}if(y.done)return t(p,M),It&&Js(p,R),C;if(M===null){for(;!y.done;R++,y=x.next())y=d(p,y.value,S),y!==null&&(v=s(y,v,R),w===null?C=y:w.sibling=y,w=y);return It&&Js(p,R),C}for(M=i(p,M);!y.done;R++,y=x.next())y=h(M,p,R,y.value,S),y!==null&&(n&&y.alternate!==null&&M.delete(y.key===null?R:y.key),v=s(y,v,R),w===null?C=y:w.sibling=y,w=y);return n&&M.forEach(function(U){return e(p,U)}),It&&Js(p,R),C}function m(p,v,x,S){if(typeof x=="object"&&x!==null&&x.type===ca&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ju:e:{for(var C=x.key,w=v;w!==null;){if(w.key===C){if(C=x.type,C===ca){if(w.tag===7){t(p,w.sibling),v=r(w,x.props.children),v.return=p,p=v;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===us&&I0(C)===w.type){t(p,w.sibling),v=r(w,x.props),v.ref=gl(p,w,x),v.return=p,p=v;break e}t(p,w);break}else e(p,w);w=w.sibling}x.type===ca?(v=vo(x.props.children,p.mode,S,x.key),v.return=p,p=v):(S=ff(x.type,x.key,x.props,null,p.mode,S),S.ref=gl(p,v,x),S.return=p,p=S)}return o(p);case ua:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(p,v.sibling),v=r(v,x.children||[]),v.return=p,p=v;break e}else{t(p,v);break}else e(p,v);v=v.sibling}v=mh(x,p.mode,S),v.return=p,p=v}return o(p);case us:return w=x._init,m(p,v,w(x._payload),S)}if(Dl(x))return g(p,v,x,S);if(dl(x))return _(p,v,x,S);cc(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(p,v.sibling),v=r(v,x),v.return=p,p=v):(t(p,v),v=ph(x,p.mode,S),v.return=p,p=v),o(p)):t(p,v)}return m}var Wa=Qy(!0),Jy=Qy(!1),Hf=Vs(null),Vf=null,va=null,B_=null;function H_(){B_=va=Vf=null}function V_(n){var e=Hf.current;bt(Hf),n._currentValue=e}function Vp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Pa(n,e){Vf=n,B_=va=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Qn=!0),n.firstContext=null)}function Bi(n){var e=n._currentValue;if(B_!==n)if(n={context:n,memoizedValue:e,next:null},va===null){if(Vf===null)throw Error(oe(308));va=n,Vf.dependencies={lanes:0,firstContext:n}}else va=va.next=n;return e}var co=null;function G_(n){co===null?co=[n]:co.push(n)}function eS(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,G_(e)):(t.next=r.next,r.next=t),e.interleaved=t,Yr(n,i)}function Yr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var cs=!1;function W_(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tS(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Vr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function As(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,pt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Yr(n,t)}return r=i.interleaved,r===null?(e.next=e,G_(i)):(e.next=r.next,r.next=e),i.interleaved=e,Yr(n,t)}function sf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,P_(n,t)}}function U0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Gf(n,e,t,i){var r=n.updateQueue;cs=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,h=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(f=e,h=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(h,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(h,d,f):g,f==null)break e;d=Ht({},d,f);break e;case 2:cs=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=h,l=d):c=c.next=h,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Po|=o,n.lanes=o,n.memoizedState=d}}function N0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Xu={},vr=Vs(Xu),Mu=Vs(Xu),Eu=Vs(Xu);function fo(n){if(n===Xu)throw Error(oe(174));return n}function X_(n,e){switch(Tt(Eu,e),Tt(Mu,n),Tt(vr,Xu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Mp(e,n)}bt(vr),Tt(vr,e)}function Xa(){bt(vr),bt(Mu),bt(Eu)}function nS(n){fo(Eu.current);var e=fo(vr.current),t=Mp(e,n.type);e!==t&&(Tt(Mu,n),Tt(vr,t))}function Y_(n){Mu.current===n&&(bt(vr),bt(Mu))}var Ot=Vs(0);function Wf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var lh=[];function q_(){for(var n=0;n<lh.length;n++)lh[n]._workInProgressVersionPrimary=null;lh.length=0}var of=Qr.ReactCurrentDispatcher,uh=Qr.ReactCurrentBatchConfig,Ro=0,Bt=null,nn=null,dn=null,Xf=!1,jl=!1,Tu=0,KT=0;function En(){throw Error(oe(321))}function j_(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!sr(n[t],e[t]))return!1;return!0}function $_(n,e,t,i,r,s){if(Ro=s,Bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,of.current=n===null||n.memoizedState===null?ew:tw,n=t(i,r),jl){s=0;do{if(jl=!1,Tu=0,25<=s)throw Error(oe(301));s+=1,dn=nn=null,e.updateQueue=null,of.current=nw,n=t(i,r)}while(jl)}if(of.current=Yf,e=nn!==null&&nn.next!==null,Ro=0,dn=nn=Bt=null,Xf=!1,e)throw Error(oe(300));return n}function K_(){var n=Tu!==0;return Tu=0,n}function lr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Bt.memoizedState=dn=n:dn=dn.next=n,dn}function Hi(){if(nn===null){var n=Bt.alternate;n=n!==null?n.memoizedState:null}else n=nn.next;var e=dn===null?Bt.memoizedState:dn.next;if(e!==null)dn=e,nn=n;else{if(n===null)throw Error(oe(310));nn=n,n={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},dn===null?Bt.memoizedState=dn=n:dn=dn.next=n}return dn}function wu(n,e){return typeof e=="function"?e(n):e}function ch(n){var e=Hi(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=nn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ro&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Bt.lanes|=c,Po|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,sr(i,e.memoizedState)||(Qn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Bt.lanes|=s,Po|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function fh(n){var e=Hi(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);sr(s,e.memoizedState)||(Qn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function iS(){}function rS(n,e){var t=Bt,i=Hi(),r=e(),s=!sr(i.memoizedState,r);if(s&&(i.memoizedState=r,Qn=!0),i=i.queue,Z_(aS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||dn!==null&&dn.memoizedState.tag&1){if(t.flags|=2048,Au(9,oS.bind(null,t,i,r,e),void 0,null),pn===null)throw Error(oe(349));Ro&30||sS(t,e,r)}return r}function sS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Bt.updateQueue,e===null?(e={lastEffect:null,stores:null},Bt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function oS(n,e,t,i){e.value=t,e.getSnapshot=i,lS(e)&&uS(n)}function aS(n,e,t){return t(function(){lS(e)&&uS(n)})}function lS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!sr(n,t)}catch{return!0}}function uS(n){var e=Yr(n,1);e!==null&&ir(e,n,1,-1)}function F0(n){var e=lr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wu,lastRenderedState:n},e.queue=n,n=n.dispatch=JT.bind(null,Bt,n),[e.memoizedState,n]}function Au(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Bt.updateQueue,e===null?(e={lastEffect:null,stores:null},Bt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function cS(){return Hi().memoizedState}function af(n,e,t,i){var r=lr();Bt.flags|=n,r.memoizedState=Au(1|e,t,void 0,i===void 0?null:i)}function Ed(n,e,t,i){var r=Hi();i=i===void 0?null:i;var s=void 0;if(nn!==null){var o=nn.memoizedState;if(s=o.destroy,i!==null&&j_(i,o.deps)){r.memoizedState=Au(e,t,s,i);return}}Bt.flags|=n,r.memoizedState=Au(1|e,t,s,i)}function O0(n,e){return af(8390656,8,n,e)}function Z_(n,e){return Ed(2048,8,n,e)}function fS(n,e){return Ed(4,2,n,e)}function dS(n,e){return Ed(4,4,n,e)}function hS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function pS(n,e,t){return t=t!=null?t.concat([n]):null,Ed(4,4,hS.bind(null,e,n),t)}function Q_(){}function mS(n,e){var t=Hi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&j_(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function _S(n,e){var t=Hi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&j_(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function gS(n,e,t){return Ro&21?(sr(t,e)||(t=My(),Bt.lanes|=t,Po|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Qn=!0),n.memoizedState=t)}function ZT(n,e){var t=vt;vt=t!==0&&4>t?t:4,n(!0);var i=uh.transition;uh.transition={};try{n(!1),e()}finally{vt=t,uh.transition=i}}function vS(){return Hi().memoizedState}function QT(n,e,t){var i=Rs(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},xS(n))yS(e,t);else if(t=eS(n,e,t,i),t!==null){var r=Xn();ir(t,n,i,r),SS(t,e,i)}}function JT(n,e,t){var i=Rs(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(xS(n))yS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,sr(a,o)){var l=e.interleaved;l===null?(r.next=r,G_(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=eS(n,e,r,i),t!==null&&(r=Xn(),ir(t,n,i,r),SS(t,e,i))}}function xS(n){var e=n.alternate;return n===Bt||e!==null&&e===Bt}function yS(n,e){jl=Xf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function SS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,P_(n,t)}}var Yf={readContext:Bi,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},ew={readContext:Bi,useCallback:function(n,e){return lr().memoizedState=[n,e===void 0?null:e],n},useContext:Bi,useEffect:O0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,af(4194308,4,hS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return af(4194308,4,n,e)},useInsertionEffect:function(n,e){return af(4,2,n,e)},useMemo:function(n,e){var t=lr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=lr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=QT.bind(null,Bt,n),[i.memoizedState,n]},useRef:function(n){var e=lr();return n={current:n},e.memoizedState=n},useState:F0,useDebugValue:Q_,useDeferredValue:function(n){return lr().memoizedState=n},useTransition:function(){var n=F0(!1),e=n[0];return n=ZT.bind(null,n[1]),lr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Bt,r=lr();if(It){if(t===void 0)throw Error(oe(407));t=t()}else{if(t=e(),pn===null)throw Error(oe(349));Ro&30||sS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,O0(aS.bind(null,i,s,n),[n]),i.flags|=2048,Au(9,oS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=lr(),e=pn.identifierPrefix;if(It){var t=kr,i=Or;t=(i&~(1<<32-nr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Tu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=KT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},tw={readContext:Bi,useCallback:mS,useContext:Bi,useEffect:Z_,useImperativeHandle:pS,useInsertionEffect:fS,useLayoutEffect:dS,useMemo:_S,useReducer:ch,useRef:cS,useState:function(){return ch(wu)},useDebugValue:Q_,useDeferredValue:function(n){var e=Hi();return gS(e,nn.memoizedState,n)},useTransition:function(){var n=ch(wu)[0],e=Hi().memoizedState;return[n,e]},useMutableSource:iS,useSyncExternalStore:rS,useId:vS,unstable_isNewReconciler:!1},nw={readContext:Bi,useCallback:mS,useContext:Bi,useEffect:Z_,useImperativeHandle:pS,useInsertionEffect:fS,useLayoutEffect:dS,useMemo:_S,useReducer:fh,useRef:cS,useState:function(){return fh(wu)},useDebugValue:Q_,useDeferredValue:function(n){var e=Hi();return nn===null?e.memoizedState=n:gS(e,nn.memoizedState,n)},useTransition:function(){var n=fh(wu)[0],e=Hi().memoizedState;return[n,e]},useMutableSource:iS,useSyncExternalStore:rS,useId:vS,unstable_isNewReconciler:!1};function $i(n,e){if(n&&n.defaultProps){e=Ht({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Gp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Ht({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Td={isMounted:function(n){return(n=n._reactInternals)?zo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Xn(),r=Rs(n),s=Vr(i,r);s.payload=e,t!=null&&(s.callback=t),e=As(n,s,r),e!==null&&(ir(e,n,r,i),sf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Xn(),r=Rs(n),s=Vr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=As(n,s,r),e!==null&&(ir(e,n,r,i),sf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Xn(),i=Rs(n),r=Vr(t,i);r.tag=2,e!=null&&(r.callback=e),e=As(n,r,i),e!==null&&(ir(e,n,i,t),sf(e,n,i))}};function k0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!vu(t,i)||!vu(r,s):!0}function MS(n,e,t){var i=!1,r=Fs,s=e.contextType;return typeof s=="object"&&s!==null?s=Bi(s):(r=ei(e)?Ao:Un.current,i=e.contextTypes,s=(i=i!=null)?Va(n,r):Fs),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Td,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function z0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Td.enqueueReplaceState(e,e.state,null)}function Wp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},W_(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Bi(s):(s=ei(e)?Ao:Un.current,r.context=Va(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Td.enqueueReplaceState(r,r.state,null),Gf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ya(n,e){try{var t="",i=e;do t+=bE(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function dh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Xp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var iw=typeof WeakMap=="function"?WeakMap:Map;function ES(n,e,t){t=Vr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){jf||(jf=!0,tm=i),Xp(n,e)},t}function TS(n,e,t){t=Vr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Xp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Xp(n,e),typeof i!="function"&&(Cs===null?Cs=new Set([this]):Cs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function B0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new iw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=gw.bind(null,n,e,t),e.then(n,n))}function H0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function V0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Vr(-1,1),e.tag=2,As(t,e,1))),t.lanes|=1),n)}var rw=Qr.ReactCurrentOwner,Qn=!1;function zn(n,e,t,i){e.child=n===null?Jy(e,null,t,i):Wa(e,n.child,t,i)}function G0(n,e,t,i,r){t=t.render;var s=e.ref;return Pa(e,r),i=$_(n,e,t,i,s,r),t=K_(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qr(n,e,r)):(It&&t&&O_(e),e.flags|=1,zn(n,e,i,r),e.child)}function W0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!og(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,wS(n,e,s,i,r)):(n=ff(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:vu,t(o,i)&&n.ref===e.ref)return qr(n,e,r)}return e.flags|=1,n=Ps(s,i),n.ref=e.ref,n.return=e,e.child=n}function wS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(vu(s,i)&&n.ref===e.ref)if(Qn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Qn=!0);else return e.lanes=n.lanes,qr(n,e,r)}return Yp(n,e,t,i,r)}function AS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Tt(ya,hi),hi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Tt(ya,hi),hi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Tt(ya,hi),hi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Tt(ya,hi),hi|=i;return zn(n,e,r,t),e.child}function CS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Yp(n,e,t,i,r){var s=ei(t)?Ao:Un.current;return s=Va(e,s),Pa(e,r),t=$_(n,e,t,i,s,r),i=K_(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qr(n,e,r)):(It&&i&&O_(e),e.flags|=1,zn(n,e,t,r),e.child)}function X0(n,e,t,i,r){if(ei(t)){var s=!0;kf(e)}else s=!1;if(Pa(e,r),e.stateNode===null)lf(n,e),MS(e,t,i),Wp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Bi(u):(u=ei(t)?Ao:Un.current,u=Va(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&z0(e,o,i,u),cs=!1;var f=e.memoizedState;o.state=f,Gf(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Jn.current||cs?(typeof c=="function"&&(Gp(e,t,c,i),l=e.memoizedState),(a=cs||k0(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,tS(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:$i(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Bi(l):(l=ei(t)?Ao:Un.current,l=Va(e,l));var h=t.getDerivedStateFromProps;(c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&z0(e,o,i,l),cs=!1,f=e.memoizedState,o.state=f,Gf(e,i,o,r);var g=e.memoizedState;a!==d||f!==g||Jn.current||cs?(typeof h=="function"&&(Gp(e,t,h,i),g=e.memoizedState),(u=cs||k0(e,t,u,i,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return qp(n,e,t,i,s,r)}function qp(n,e,t,i,r,s){CS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&b0(e,t,!1),qr(n,e,s);i=e.stateNode,rw.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Wa(e,n.child,null,s),e.child=Wa(e,null,a,s)):zn(n,e,a,s),e.memoizedState=i.state,r&&b0(e,t,!0),e.child}function RS(n){var e=n.stateNode;e.pendingContext?P0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&P0(n,e.context,!1),X_(n,e.containerInfo)}function Y0(n,e,t,i,r){return Ga(),z_(r),e.flags|=256,zn(n,e,t,i),e.child}var jp={dehydrated:null,treeContext:null,retryLane:0};function $p(n){return{baseLanes:n,cachePool:null,transitions:null}}function PS(n,e,t){var i=e.pendingProps,r=Ot.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Tt(Ot,r&1),n===null)return Hp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cd(o,i,0,null),n=vo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=$p(t),e.memoizedState=jp,n):J_(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return sw(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ps(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ps(a,s):(s=vo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?$p(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=jp,i}return s=n.child,n=s.sibling,i=Ps(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function J_(n,e){return e=Cd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function fc(n,e,t,i){return i!==null&&z_(i),Wa(e,n.child,null,t),n=J_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function sw(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=dh(Error(oe(422))),fc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Cd({mode:"visible",children:i.children},r,0,null),s=vo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Wa(e,n.child,null,o),e.child.memoizedState=$p(o),e.memoizedState=jp,s);if(!(e.mode&1))return fc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=dh(s,i,void 0),fc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Qn||a){if(i=pn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Yr(n,r),ir(i,n,r,-1))}return sg(),i=dh(Error(oe(421))),fc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=vw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,vi=ws(r.nextSibling),yi=e,It=!0,Zi=null,n!==null&&(Pi[bi++]=Or,Pi[bi++]=kr,Pi[bi++]=Co,Or=n.id,kr=n.overflow,Co=e),e=J_(e,i.children),e.flags|=4096,e)}function q0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Vp(n.return,e,t)}function hh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function bS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(zn(n,e,i.children,t),i=Ot.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&q0(n,t,e);else if(n.tag===19)q0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Tt(Ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Wf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),hh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Wf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}hh(e,!0,t,null,s);break;case"together":hh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function lf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function qr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Po|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(oe(153));if(e.child!==null){for(n=e.child,t=Ps(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ps(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function ow(n,e,t){switch(e.tag){case 3:RS(e),Ga();break;case 5:nS(e);break;case 1:ei(e.type)&&kf(e);break;case 4:X_(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Tt(Hf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Tt(Ot,Ot.current&1),e.flags|=128,null):t&e.child.childLanes?PS(n,e,t):(Tt(Ot,Ot.current&1),n=qr(n,e,t),n!==null?n.sibling:null);Tt(Ot,Ot.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return bS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Tt(Ot,Ot.current),i)break;return null;case 22:case 23:return e.lanes=0,AS(n,e,t)}return qr(n,e,t)}var LS,Kp,DS,IS;LS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Kp=function(){};DS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,fo(vr.current);var s=null;switch(t){case"input":r=vp(n,r),i=vp(n,i),s=[];break;case"select":r=Ht({},r,{value:void 0}),i=Ht({},i,{value:void 0}),s=[];break;case"textarea":r=Sp(n,r),i=Sp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Ff)}Ep(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ct("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};IS=function(n,e,t,i){t!==i&&(e.flags|=4)};function vl(n,e){if(!It)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Tn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function aw(n,e,t){var i=e.pendingProps;switch(k_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(e),null;case 1:return ei(e.type)&&Of(),Tn(e),null;case 3:return i=e.stateNode,Xa(),bt(Jn),bt(Un),q_(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(uc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zi!==null&&(rm(Zi),Zi=null))),Kp(n,e),Tn(e),null;case 5:Y_(e);var r=fo(Eu.current);if(t=e.type,n!==null&&e.stateNode!=null)DS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Tn(e),null}if(n=fo(vr.current),uc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[hr]=e,i[Su]=s,n=(e.mode&1)!==0,t){case"dialog":Ct("cancel",i),Ct("close",i);break;case"iframe":case"object":case"embed":Ct("load",i);break;case"video":case"audio":for(r=0;r<Ul.length;r++)Ct(Ul[r],i);break;case"source":Ct("error",i);break;case"img":case"image":case"link":Ct("error",i),Ct("load",i);break;case"details":Ct("toggle",i);break;case"input":n0(i,s),Ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ct("invalid",i);break;case"textarea":r0(i,s),Ct("invalid",i)}Ep(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&lc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&lc(i.textContent,a,n),r=["children",""+a]):fu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ct("scroll",i)}switch(t){case"input":ec(i),i0(i,s,!0);break;case"textarea":ec(i),s0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ff)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ay(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[hr]=e,n[Su]=i,LS(n,e,!1,!1),e.stateNode=n;e:{switch(o=Tp(t,i),t){case"dialog":Ct("cancel",n),Ct("close",n),r=i;break;case"iframe":case"object":case"embed":Ct("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ul.length;r++)Ct(Ul[r],n);r=i;break;case"source":Ct("error",n),r=i;break;case"img":case"image":case"link":Ct("error",n),Ct("load",n),r=i;break;case"details":Ct("toggle",n),r=i;break;case"input":n0(n,i),r=vp(n,i),Ct("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Ht({},i,{value:void 0}),Ct("invalid",n);break;case"textarea":r0(n,i),r=Sp(n,i),Ct("invalid",n);break;default:r=i}Ep(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?cy(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ly(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&du(n,l):typeof l=="number"&&du(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ct("scroll",n):l!=null&&E_(n,s,l,o))}switch(t){case"input":ec(n),i0(n,i,!1);break;case"textarea":ec(n),s0(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ns(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?wa(n,!!i.multiple,s,!1):i.defaultValue!=null&&wa(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ff)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Tn(e),null;case 6:if(n&&e.stateNode!=null)IS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(t=fo(Eu.current),fo(vr.current),uc(e)){if(i=e.stateNode,t=e.memoizedProps,i[hr]=e,(s=i.nodeValue!==t)&&(n=yi,n!==null))switch(n.tag){case 3:lc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&lc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[hr]=e,e.stateNode=i}return Tn(e),null;case 13:if(bt(Ot),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(It&&vi!==null&&e.mode&1&&!(e.flags&128))Zy(),Ga(),e.flags|=98560,s=!1;else if(s=uc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[hr]=e}else Ga(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Tn(e),s=!1}else Zi!==null&&(rm(Zi),Zi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ot.current&1?sn===0&&(sn=3):sg())),e.updateQueue!==null&&(e.flags|=4),Tn(e),null);case 4:return Xa(),Kp(n,e),n===null&&xu(e.stateNode.containerInfo),Tn(e),null;case 10:return V_(e.type._context),Tn(e),null;case 17:return ei(e.type)&&Of(),Tn(e),null;case 19:if(bt(Ot),s=e.memoizedState,s===null)return Tn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)vl(s,!1);else{if(sn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Wf(n),o!==null){for(e.flags|=128,vl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Tt(Ot,Ot.current&1|2),e.child}n=n.sibling}s.tail!==null&&$t()>qa&&(e.flags|=128,i=!0,vl(s,!1),e.lanes=4194304)}else{if(!i)if(n=Wf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),vl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!It)return Tn(e),null}else 2*$t()-s.renderingStartTime>qa&&t!==1073741824&&(e.flags|=128,i=!0,vl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=$t(),e.sibling=null,t=Ot.current,Tt(Ot,i?t&1|2:t&1),e):(Tn(e),null);case 22:case 23:return rg(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hi&1073741824&&(Tn(e),e.subtreeFlags&6&&(e.flags|=8192)):Tn(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function lw(n,e){switch(k_(e),e.tag){case 1:return ei(e.type)&&Of(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Xa(),bt(Jn),bt(Un),q_(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Y_(e),null;case 13:if(bt(Ot),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Ga()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return bt(Ot),null;case 4:return Xa(),null;case 10:return V_(e.type._context),null;case 22:case 23:return rg(),null;case 24:return null;default:return null}}var dc=!1,Pn=!1,uw=typeof WeakSet=="function"?WeakSet:Set,Me=null;function xa(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Vt(n,e,i)}else t.current=null}function Zp(n,e,t){try{t()}catch(i){Vt(n,e,i)}}var j0=!1;function cw(n,e){if(Up=If,n=ky(),F_(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var h;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Np={focusedElem:n,selectionRange:t},If=!1,Me=e;Me!==null;)if(e=Me,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Me=n;else for(;Me!==null;){e=Me;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,p=e.stateNode,v=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:$i(e.type,_),m);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(S){Vt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}return g=j0,j0=!1,g}function $l(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Zp(e,t,s)}r=r.next}while(r!==i)}}function wd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Qp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function US(n){var e=n.alternate;e!==null&&(n.alternate=null,US(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[hr],delete e[Su],delete e[kp],delete e[YT],delete e[qT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function NS(n){return n.tag===5||n.tag===3||n.tag===4}function $0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||NS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Jp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ff));else if(i!==4&&(n=n.child,n!==null))for(Jp(n,e,t),n=n.sibling;n!==null;)Jp(n,e,t),n=n.sibling}function em(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(em(n,e,t),n=n.sibling;n!==null;)em(n,e,t),n=n.sibling}var gn=null,Ki=!1;function ts(n,e,t){for(t=t.child;t!==null;)FS(n,e,t),t=t.sibling}function FS(n,e,t){if(gr&&typeof gr.onCommitFiberUnmount=="function")try{gr.onCommitFiberUnmount(gd,t)}catch{}switch(t.tag){case 5:Pn||xa(t,e);case 6:var i=gn,r=Ki;gn=null,ts(n,e,t),gn=i,Ki=r,gn!==null&&(Ki?(n=gn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):gn.removeChild(t.stateNode));break;case 18:gn!==null&&(Ki?(n=gn,t=t.stateNode,n.nodeType===8?oh(n.parentNode,t):n.nodeType===1&&oh(n,t),_u(n)):oh(gn,t.stateNode));break;case 4:i=gn,r=Ki,gn=t.stateNode.containerInfo,Ki=!0,ts(n,e,t),gn=i,Ki=r;break;case 0:case 11:case 14:case 15:if(!Pn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zp(t,e,o),r=r.next}while(r!==i)}ts(n,e,t);break;case 1:if(!Pn&&(xa(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Vt(t,e,a)}ts(n,e,t);break;case 21:ts(n,e,t);break;case 22:t.mode&1?(Pn=(i=Pn)||t.memoizedState!==null,ts(n,e,t),Pn=i):ts(n,e,t);break;default:ts(n,e,t)}}function K0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new uw),e.forEach(function(i){var r=xw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Wi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:gn=a.stateNode,Ki=!1;break e;case 3:gn=a.stateNode.containerInfo,Ki=!0;break e;case 4:gn=a.stateNode.containerInfo,Ki=!0;break e}a=a.return}if(gn===null)throw Error(oe(160));FS(s,o,r),gn=null,Ki=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)OS(e,n),e=e.sibling}function OS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Wi(e,n),ar(n),i&4){try{$l(3,n,n.return),wd(3,n)}catch(_){Vt(n,n.return,_)}try{$l(5,n,n.return)}catch(_){Vt(n,n.return,_)}}break;case 1:Wi(e,n),ar(n),i&512&&t!==null&&xa(t,t.return);break;case 5:if(Wi(e,n),ar(n),i&512&&t!==null&&xa(t,t.return),n.flags&32){var r=n.stateNode;try{du(r,"")}catch(_){Vt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&sy(r,s),Tp(a,o);var u=Tp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?cy(r,d):c==="dangerouslySetInnerHTML"?ly(r,d):c==="children"?du(r,d):E_(r,c,d,u)}switch(a){case"input":xp(r,s);break;case"textarea":oy(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?wa(r,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?wa(r,!!s.multiple,s.defaultValue,!0):wa(r,!!s.multiple,s.multiple?[]:"",!1))}r[Su]=s}catch(_){Vt(n,n.return,_)}}break;case 6:if(Wi(e,n),ar(n),i&4){if(n.stateNode===null)throw Error(oe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Vt(n,n.return,_)}}break;case 3:if(Wi(e,n),ar(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{_u(e.containerInfo)}catch(_){Vt(n,n.return,_)}break;case 4:Wi(e,n),ar(n);break;case 13:Wi(e,n),ar(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ng=$t())),i&4&&K0(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Pn=(u=Pn)||c,Wi(e,n),Pn=u):Wi(e,n),ar(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Me=n,c=n.child;c!==null;){for(d=Me=c;Me!==null;){switch(f=Me,h=f.child,f.tag){case 0:case 11:case 14:case 15:$l(4,f,f.return);break;case 1:xa(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Vt(i,t,_)}}break;case 5:xa(f,f.return);break;case 22:if(f.memoizedState!==null){Q0(d);continue}}h!==null?(h.return=f,Me=h):Q0(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=uy("display",o))}catch(_){Vt(n,n.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Vt(n,n.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Wi(e,n),ar(n),i&4&&K0(n);break;case 21:break;default:Wi(e,n),ar(n)}}function ar(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(NS(t)){var i=t;break e}t=t.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(du(r,""),i.flags&=-33);var s=$0(n);em(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=$0(n);Jp(n,a,o);break;default:throw Error(oe(161))}}catch(l){Vt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function fw(n,e,t){Me=n,kS(n)}function kS(n,e,t){for(var i=(n.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||dc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Pn;a=dc;var u=Pn;if(dc=o,(Pn=l)&&!u)for(Me=r;Me!==null;)o=Me,l=o.child,o.tag===22&&o.memoizedState!==null?J0(r):l!==null?(l.return=o,Me=l):J0(r);for(;s!==null;)Me=s,kS(s),s=s.sibling;Me=r,dc=a,Pn=u}Z0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):Z0(n)}}function Z0(n){for(;Me!==null;){var e=Me;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pn||wd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Pn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:$i(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&N0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}N0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&_u(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Pn||e.flags&512&&Qp(e)}catch(f){Vt(e,e.return,f)}}if(e===n){Me=null;break}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}}function Q0(n){for(;Me!==null;){var e=Me;if(e===n){Me=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Me=t;break}Me=e.return}}function J0(n){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{wd(4,e)}catch(l){Vt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Vt(e,r,l)}}var s=e.return;try{Qp(e)}catch(l){Vt(e,s,l)}break;case 5:var o=e.return;try{Qp(e)}catch(l){Vt(e,o,l)}}}catch(l){Vt(e,e.return,l)}if(e===n){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var dw=Math.ceil,qf=Qr.ReactCurrentDispatcher,eg=Qr.ReactCurrentOwner,ki=Qr.ReactCurrentBatchConfig,pt=0,pn=null,en=null,yn=0,hi=0,ya=Vs(0),sn=0,Cu=null,Po=0,Ad=0,tg=0,Kl=null,Zn=null,ng=0,qa=1/0,Lr=null,jf=!1,tm=null,Cs=null,hc=!1,ms=null,$f=0,Zl=0,nm=null,uf=-1,cf=0;function Xn(){return pt&6?$t():uf!==-1?uf:uf=$t()}function Rs(n){return n.mode&1?pt&2&&yn!==0?yn&-yn:$T.transition!==null?(cf===0&&(cf=My()),cf):(n=vt,n!==0||(n=window.event,n=n===void 0?16:Py(n.type)),n):1}function ir(n,e,t,i){if(50<Zl)throw Zl=0,nm=null,Error(oe(185));Vu(n,t,i),(!(pt&2)||n!==pn)&&(n===pn&&(!(pt&2)&&(Ad|=t),sn===4&&ds(n,yn)),ti(n,i),t===1&&pt===0&&!(e.mode&1)&&(qa=$t()+500,Md&&Gs()))}function ti(n,e){var t=n.callbackNode;$E(n,e);var i=Df(n,n===pn?yn:0);if(i===0)t!==null&&l0(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&l0(t),e===1)n.tag===0?jT(ev.bind(null,n)):jy(ev.bind(null,n)),WT(function(){!(pt&6)&&Gs()}),t=null;else{switch(Ey(i)){case 1:t=R_;break;case 4:t=yy;break;case 16:t=Lf;break;case 536870912:t=Sy;break;default:t=Lf}t=YS(t,zS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function zS(n,e){if(uf=-1,cf=0,pt&6)throw Error(oe(327));var t=n.callbackNode;if(ba()&&n.callbackNode!==t)return null;var i=Df(n,n===pn?yn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Kf(n,i);else{e=i;var r=pt;pt|=2;var s=HS();(pn!==n||yn!==e)&&(Lr=null,qa=$t()+500,go(n,e));do try{mw();break}catch(a){BS(n,a)}while(!0);H_(),qf.current=s,pt=r,en!==null?e=0:(pn=null,yn=0,e=sn)}if(e!==0){if(e===2&&(r=Pp(n),r!==0&&(i=r,e=im(n,r))),e===1)throw t=Cu,go(n,0),ds(n,i),ti(n,$t()),t;if(e===6)ds(n,i);else{if(r=n.current.alternate,!(i&30)&&!hw(r)&&(e=Kf(n,i),e===2&&(s=Pp(n),s!==0&&(i=s,e=im(n,s))),e===1))throw t=Cu,go(n,0),ds(n,i),ti(n,$t()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:eo(n,Zn,Lr);break;case 3:if(ds(n,i),(i&130023424)===i&&(e=ng+500-$t(),10<e)){if(Df(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Xn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Op(eo.bind(null,n,Zn,Lr),e);break}eo(n,Zn,Lr);break;case 4:if(ds(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-nr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=$t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*dw(i/1960))-i,10<i){n.timeoutHandle=Op(eo.bind(null,n,Zn,Lr),i);break}eo(n,Zn,Lr);break;case 5:eo(n,Zn,Lr);break;default:throw Error(oe(329))}}}return ti(n,$t()),n.callbackNode===t?zS.bind(null,n):null}function im(n,e){var t=Kl;return n.current.memoizedState.isDehydrated&&(go(n,e).flags|=256),n=Kf(n,e),n!==2&&(e=Zn,Zn=t,e!==null&&rm(e)),n}function rm(n){Zn===null?Zn=n:Zn.push.apply(Zn,n)}function hw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!sr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ds(n,e){for(e&=~tg,e&=~Ad,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-nr(e),i=1<<t;n[t]=-1,e&=~i}}function ev(n){if(pt&6)throw Error(oe(327));ba();var e=Df(n,0);if(!(e&1))return ti(n,$t()),null;var t=Kf(n,e);if(n.tag!==0&&t===2){var i=Pp(n);i!==0&&(e=i,t=im(n,i))}if(t===1)throw t=Cu,go(n,0),ds(n,e),ti(n,$t()),t;if(t===6)throw Error(oe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,eo(n,Zn,Lr),ti(n,$t()),null}function ig(n,e){var t=pt;pt|=1;try{return n(e)}finally{pt=t,pt===0&&(qa=$t()+500,Md&&Gs())}}function bo(n){ms!==null&&ms.tag===0&&!(pt&6)&&ba();var e=pt;pt|=1;var t=ki.transition,i=vt;try{if(ki.transition=null,vt=1,n)return n()}finally{vt=i,ki.transition=t,pt=e,!(pt&6)&&Gs()}}function rg(){hi=ya.current,bt(ya)}function go(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,GT(t)),en!==null)for(t=en.return;t!==null;){var i=t;switch(k_(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Of();break;case 3:Xa(),bt(Jn),bt(Un),q_();break;case 5:Y_(i);break;case 4:Xa();break;case 13:bt(Ot);break;case 19:bt(Ot);break;case 10:V_(i.type._context);break;case 22:case 23:rg()}t=t.return}if(pn=n,en=n=Ps(n.current,null),yn=hi=e,sn=0,Cu=null,tg=Ad=Po=0,Zn=Kl=null,co!==null){for(e=0;e<co.length;e++)if(t=co[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}co=null}return n}function BS(n,e){do{var t=en;try{if(H_(),of.current=Yf,Xf){for(var i=Bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Xf=!1}if(Ro=0,dn=nn=Bt=null,jl=!1,Tu=0,eg.current=null,t===null||t.return===null){sn=1,Cu=e,en=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=yn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=H0(o);if(h!==null){h.flags&=-257,V0(h,o,a,s,e),h.mode&1&&B0(s,u,e),e=h,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){B0(s,u,e),sg();break e}l=Error(oe(426))}}else if(It&&a.mode&1){var m=H0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),V0(m,o,a,s,e),z_(Ya(l,a));break e}}s=l=Ya(l,a),sn!==4&&(sn=2),Kl===null?Kl=[s]:Kl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=ES(s,l,e);U0(s,p);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Cs===null||!Cs.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=TS(s,a,e);U0(s,S);break e}}s=s.return}while(s!==null)}GS(t)}catch(C){e=C,en===t&&t!==null&&(en=t=t.return);continue}break}while(!0)}function HS(){var n=qf.current;return qf.current=Yf,n===null?Yf:n}function sg(){(sn===0||sn===3||sn===2)&&(sn=4),pn===null||!(Po&268435455)&&!(Ad&268435455)||ds(pn,yn)}function Kf(n,e){var t=pt;pt|=2;var i=HS();(pn!==n||yn!==e)&&(Lr=null,go(n,e));do try{pw();break}catch(r){BS(n,r)}while(!0);if(H_(),pt=t,qf.current=i,en!==null)throw Error(oe(261));return pn=null,yn=0,sn}function pw(){for(;en!==null;)VS(en)}function mw(){for(;en!==null&&!BE();)VS(en)}function VS(n){var e=XS(n.alternate,n,hi);n.memoizedProps=n.pendingProps,e===null?GS(n):en=e,eg.current=null}function GS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=lw(t,e),t!==null){t.flags&=32767,en=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{sn=6,en=null;return}}else if(t=aw(t,e,hi),t!==null){en=t;return}if(e=e.sibling,e!==null){en=e;return}en=e=n}while(e!==null);sn===0&&(sn=5)}function eo(n,e,t){var i=vt,r=ki.transition;try{ki.transition=null,vt=1,_w(n,e,t,i)}finally{ki.transition=r,vt=i}return null}function _w(n,e,t,i){do ba();while(ms!==null);if(pt&6)throw Error(oe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(oe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(KE(n,s),n===pn&&(en=pn=null,yn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||hc||(hc=!0,YS(Lf,function(){return ba(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ki.transition,ki.transition=null;var o=vt;vt=1;var a=pt;pt|=4,eg.current=null,cw(n,t),OS(t,n),FT(Np),If=!!Up,Np=Up=null,n.current=t,fw(t),HE(),pt=a,vt=o,ki.transition=s}else n.current=t;if(hc&&(hc=!1,ms=n,$f=r),s=n.pendingLanes,s===0&&(Cs=null),WE(t.stateNode),ti(n,$t()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(jf)throw jf=!1,n=tm,tm=null,n;return $f&1&&n.tag!==0&&ba(),s=n.pendingLanes,s&1?n===nm?Zl++:(Zl=0,nm=n):Zl=0,Gs(),null}function ba(){if(ms!==null){var n=Ey($f),e=ki.transition,t=vt;try{if(ki.transition=null,vt=16>n?16:n,ms===null)var i=!1;else{if(n=ms,ms=null,$f=0,pt&6)throw Error(oe(331));var r=pt;for(pt|=4,Me=n.current;Me!==null;){var s=Me,o=s.child;if(Me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Me=u;Me!==null;){var c=Me;switch(c.tag){case 0:case 11:case 15:$l(8,c,s)}var d=c.child;if(d!==null)d.return=c,Me=d;else for(;Me!==null;){c=Me;var f=c.sibling,h=c.return;if(US(c),c===u){Me=null;break}if(f!==null){f.return=h,Me=f;break}Me=h}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Me=o;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$l(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Me=p;break e}Me=s.return}}var v=n.current;for(Me=v;Me!==null;){o=Me;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Me=x;else e:for(o=v;Me!==null;){if(a=Me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wd(9,a)}}catch(C){Vt(a,a.return,C)}if(a===o){Me=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Me=S;break e}Me=a.return}}if(pt=r,Gs(),gr&&typeof gr.onPostCommitFiberRoot=="function")try{gr.onPostCommitFiberRoot(gd,n)}catch{}i=!0}return i}finally{vt=t,ki.transition=e}}return!1}function tv(n,e,t){e=Ya(t,e),e=ES(n,e,1),n=As(n,e,1),e=Xn(),n!==null&&(Vu(n,1,e),ti(n,e))}function Vt(n,e,t){if(n.tag===3)tv(n,n,t);else for(;e!==null;){if(e.tag===3){tv(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cs===null||!Cs.has(i))){n=Ya(t,n),n=TS(e,n,1),e=As(e,n,1),n=Xn(),e!==null&&(Vu(e,1,n),ti(e,n));break}}e=e.return}}function gw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Xn(),n.pingedLanes|=n.suspendedLanes&t,pn===n&&(yn&t)===t&&(sn===4||sn===3&&(yn&130023424)===yn&&500>$t()-ng?go(n,0):tg|=t),ti(n,e)}function WS(n,e){e===0&&(n.mode&1?(e=ic,ic<<=1,!(ic&130023424)&&(ic=4194304)):e=1);var t=Xn();n=Yr(n,e),n!==null&&(Vu(n,e,t),ti(n,t))}function vw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),WS(n,t)}function xw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),WS(n,t)}var XS;XS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Jn.current)Qn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Qn=!1,ow(n,e,t);Qn=!!(n.flags&131072)}else Qn=!1,It&&e.flags&1048576&&$y(e,Bf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;lf(n,e),n=e.pendingProps;var r=Va(e,Un.current);Pa(e,t),r=$_(null,e,i,n,r,t);var s=K_();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ei(i)?(s=!0,kf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,W_(e),r.updater=Td,e.stateNode=r,r._reactInternals=e,Wp(e,i,n,t),e=qp(null,e,i,!0,s,t)):(e.tag=0,It&&s&&O_(e),zn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(lf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Sw(i),n=$i(i,n),r){case 0:e=Yp(null,e,i,n,t);break e;case 1:e=X0(null,e,i,n,t);break e;case 11:e=G0(null,e,i,n,t);break e;case 14:e=W0(null,e,i,$i(i.type,n),t);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$i(i,r),Yp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$i(i,r),X0(n,e,i,r,t);case 3:e:{if(RS(e),n===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,tS(n,e),Gf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ya(Error(oe(423)),e),e=Y0(n,e,i,t,r);break e}else if(i!==r){r=Ya(Error(oe(424)),e),e=Y0(n,e,i,t,r);break e}else for(vi=ws(e.stateNode.containerInfo.firstChild),yi=e,It=!0,Zi=null,t=Jy(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ga(),i===r){e=qr(n,e,t);break e}zn(n,e,i,t)}e=e.child}return e;case 5:return nS(e),n===null&&Hp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Fp(i,r)?o=null:s!==null&&Fp(i,s)&&(e.flags|=32),CS(n,e),zn(n,e,o,t),e.child;case 6:return n===null&&Hp(e),null;case 13:return PS(n,e,t);case 4:return X_(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Wa(e,null,i,t):zn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$i(i,r),G0(n,e,i,r,t);case 7:return zn(n,e,e.pendingProps,t),e.child;case 8:return zn(n,e,e.pendingProps.children,t),e.child;case 12:return zn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Tt(Hf,i._currentValue),i._currentValue=o,s!==null)if(sr(s.value,o)){if(s.children===r.children&&!Jn.current){e=qr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Vr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Vp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Vp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}zn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Pa(e,t),r=Bi(r),i=i(r),e.flags|=1,zn(n,e,i,t),e.child;case 14:return i=e.type,r=$i(i,e.pendingProps),r=$i(i.type,r),W0(n,e,i,r,t);case 15:return wS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$i(i,r),lf(n,e),e.tag=1,ei(i)?(n=!0,kf(e)):n=!1,Pa(e,t),MS(e,i,r),Wp(e,i,r,t),qp(null,e,i,!0,n,t);case 19:return bS(n,e,t);case 22:return AS(n,e,t)}throw Error(oe(156,e.tag))};function YS(n,e){return xy(n,e)}function yw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ui(n,e,t,i){return new yw(n,e,t,i)}function og(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Sw(n){if(typeof n=="function")return og(n)?1:0;if(n!=null){if(n=n.$$typeof,n===w_)return 11;if(n===A_)return 14}return 2}function Ps(n,e){var t=n.alternate;return t===null?(t=Ui(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function ff(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")og(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ca:return vo(t.children,r,s,e);case T_:o=8,r|=8;break;case pp:return n=Ui(12,t,e,r|2),n.elementType=pp,n.lanes=s,n;case mp:return n=Ui(13,t,e,r),n.elementType=mp,n.lanes=s,n;case _p:return n=Ui(19,t,e,r),n.elementType=_p,n.lanes=s,n;case ny:return Cd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ey:o=10;break e;case ty:o=9;break e;case w_:o=11;break e;case A_:o=14;break e;case us:o=16,i=null;break e}throw Error(oe(130,n==null?n:typeof n,""))}return e=Ui(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function vo(n,e,t,i){return n=Ui(7,n,i,e),n.lanes=t,n}function Cd(n,e,t,i){return n=Ui(22,n,i,e),n.elementType=ny,n.lanes=t,n.stateNode={isHidden:!1},n}function ph(n,e,t){return n=Ui(6,n,null,e),n.lanes=t,n}function mh(n,e,t){return e=Ui(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Mw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$d(0),this.expirationTimes=$d(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$d(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ag(n,e,t,i,r,s,o,a,l){return n=new Mw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ui(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},W_(s),n}function Ew(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ua,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function qS(n){if(!n)return Fs;n=n._reactInternals;e:{if(zo(n)!==n||n.tag!==1)throw Error(oe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ei(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(n.tag===1){var t=n.type;if(ei(t))return qy(n,t,e)}return e}function jS(n,e,t,i,r,s,o,a,l){return n=ag(t,i,!0,n,r,s,o,a,l),n.context=qS(null),t=n.current,i=Xn(),r=Rs(t),s=Vr(i,r),s.callback=e??null,As(t,s,r),n.current.lanes=r,Vu(n,r,i),ti(n,i),n}function Rd(n,e,t,i){var r=e.current,s=Xn(),o=Rs(r);return t=qS(t),e.context===null?e.context=t:e.pendingContext=t,e=Vr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=As(r,e,o),n!==null&&(ir(n,r,o,s),sf(n,r,o)),o}function Zf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function nv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function lg(n,e){nv(n,e),(n=n.alternate)&&nv(n,e)}function Tw(){return null}var $S=typeof reportError=="function"?reportError:function(n){console.error(n)};function ug(n){this._internalRoot=n}Pd.prototype.render=ug.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(oe(409));Rd(n,e,null,null)};Pd.prototype.unmount=ug.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;bo(function(){Rd(null,n,null,null)}),e[Xr]=null}};function Pd(n){this._internalRoot=n}Pd.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ay();n={blockedOn:null,target:n,priority:e};for(var t=0;t<fs.length&&e!==0&&e<fs[t].priority;t++);fs.splice(t,0,n),t===0&&Ry(n)}};function cg(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function bd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function iv(){}function ww(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Zf(o);s.call(u)}}var o=jS(e,i,n,0,null,!1,!1,"",iv);return n._reactRootContainer=o,n[Xr]=o.current,xu(n.nodeType===8?n.parentNode:n),bo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Zf(l);a.call(u)}}var l=ag(n,0,!1,null,null,!1,!1,"",iv);return n._reactRootContainer=l,n[Xr]=l.current,xu(n.nodeType===8?n.parentNode:n),bo(function(){Rd(e,l,t,i)}),l}function Ld(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Zf(o);a.call(l)}}Rd(e,o,n,r)}else o=ww(t,e,n,r,i);return Zf(o)}Ty=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Il(e.pendingLanes);t!==0&&(P_(e,t|1),ti(e,$t()),!(pt&6)&&(qa=$t()+500,Gs()))}break;case 13:bo(function(){var i=Yr(n,1);if(i!==null){var r=Xn();ir(i,n,1,r)}}),lg(n,1)}};b_=function(n){if(n.tag===13){var e=Yr(n,134217728);if(e!==null){var t=Xn();ir(e,n,134217728,t)}lg(n,134217728)}};wy=function(n){if(n.tag===13){var e=Rs(n),t=Yr(n,e);if(t!==null){var i=Xn();ir(t,n,e,i)}lg(n,e)}};Ay=function(){return vt};Cy=function(n,e){var t=vt;try{return vt=n,e()}finally{vt=t}};Ap=function(n,e,t){switch(e){case"input":if(xp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Sd(i);if(!r)throw Error(oe(90));ry(i),xp(i,r)}}}break;case"textarea":oy(n,t);break;case"select":e=t.value,e!=null&&wa(n,!!t.multiple,e,!1)}};hy=ig;py=bo;var Aw={usingClientEntryPoint:!1,Events:[Wu,pa,Sd,fy,dy,ig]},xl={findFiberByHostInstance:uo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cw={bundleType:xl.bundleType,version:xl.version,rendererPackageName:xl.rendererPackageName,rendererConfig:xl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=gy(n),n===null?null:n.stateNode},findFiberByHostInstance:xl.findFiberByHostInstance||Tw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{gd=pc.inject(Cw),gr=pc}catch{}}Ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Aw;Ti.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cg(e))throw Error(oe(200));return Ew(n,e,null,t)};Ti.createRoot=function(n,e){if(!cg(n))throw Error(oe(299));var t=!1,i="",r=$S;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ag(n,1,!1,null,null,t,!1,i,r),n[Xr]=e.current,xu(n.nodeType===8?n.parentNode:n),new ug(e)};Ti.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(oe(188)):(n=Object.keys(n).join(","),Error(oe(268,n)));return n=gy(e),n=n===null?null:n.stateNode,n};Ti.flushSync=function(n){return bo(n)};Ti.hydrate=function(n,e,t){if(!bd(e))throw Error(oe(200));return Ld(null,n,e,!0,t)};Ti.hydrateRoot=function(n,e,t){if(!cg(n))throw Error(oe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=$S;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=jS(e,null,n,1,t??null,r,!1,s,o),n[Xr]=e.current,xu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Pd(e)};Ti.render=function(n,e,t){if(!bd(e))throw Error(oe(200));return Ld(null,n,e,!1,t)};Ti.unmountComponentAtNode=function(n){if(!bd(n))throw Error(oe(40));return n._reactRootContainer?(bo(function(){Ld(null,null,n,!1,function(){n._reactRootContainer=null,n[Xr]=null})}),!0):!1};Ti.unstable_batchedUpdates=ig;Ti.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!bd(t))throw Error(oe(200));if(n==null||n._reactInternals===void 0)throw Error(oe(38));return Ld(n,e,t,!1,i)};Ti.version="18.3.1-next-f1338f8080-20240426";function KS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(KS)}catch(n){console.error(n)}}KS(),Kx.exports=Ti;var Rw=Kx.exports,ZS,rv=Rw;ZS=rv.createRoot,rv.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fg="169",Pw=0,sv=1,bw=2,QS=1,Lw=2,br=3,Os=0,ni=1,Nr=2,bs=0,La=1,Ru=2,ov=3,av=4,Dw=5,oo=100,Iw=101,Uw=102,Nw=103,Fw=104,Ow=200,kw=201,zw=202,Bw=203,sm=204,om=205,Hw=206,Vw=207,Gw=208,Ww=209,Xw=210,Yw=211,qw=212,jw=213,$w=214,am=0,lm=1,um=2,ja=3,cm=4,fm=5,dm=6,hm=7,dg=0,Kw=1,Zw=2,Ls=0,Qw=1,Jw=2,eA=3,JS=4,tA=5,nA=6,iA=7,eM=300,$a=301,Ka=302,pm=303,mm=304,Dd=306,_m=1e3,ho=1001,gm=1002,Ni=1003,rA=1004,mc=1005,Ji=1006,_h=1007,po=1008,jr=1009,tM=1010,nM=1011,Pu=1012,hg=1013,Lo=1014,zr=1015,Yu=1016,pg=1017,mg=1018,Za=1020,iM=35902,rM=1021,sM=1022,tr=1023,oM=1024,aM=1025,Da=1026,Qa=1027,lM=1028,_g=1029,uM=1030,gg=1031,vg=1033,df=33776,hf=33777,pf=33778,mf=33779,vm=35840,xm=35841,ym=35842,Sm=35843,Mm=36196,Em=37492,Tm=37496,wm=37808,Am=37809,Cm=37810,Rm=37811,Pm=37812,bm=37813,Lm=37814,Dm=37815,Im=37816,Um=37817,Nm=37818,Fm=37819,Om=37820,km=37821,_f=36492,zm=36494,Bm=36495,cM=36283,Hm=36284,Vm=36285,Gm=36286,sA=3200,oA=3201,xg=0,aA=1,hs="",ur="srgb",Jr="srgb-linear",yg="display-p3",Id="display-p3-linear",Qf="linear",Rt="srgb",Jf="rec709",ed="p3",Wo=7680,lv=519,lA=512,uA=513,cA=514,fM=515,fA=516,dA=517,hA=518,pA=519,uv=35044,cv="300 es",Br=2e3,td=2001;class cl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gh=Math.PI/180,Wm=180/Math.PI;function qu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function bn(n,e,t){return Math.max(e,Math.min(t,n))}function mA(n,e){return(n%e+e)%e}function vh(n,e,t){return(1-t)*n+t*e}function yl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $n(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,r,s,o,a,l,u){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],v=r[1],x=r[4],S=r[7],C=r[2],w=r[5],M=r[8];return s[0]=o*_+a*v+l*C,s[3]=o*m+a*x+l*w,s[6]=o*p+a*S+l*M,s[1]=u*_+c*v+d*C,s[4]=u*m+c*x+d*w,s[7]=u*p+c*S+d*M,s[2]=f*_+h*v+g*C,s[5]=f*m+h*x+g*w,s[8]=f*p+h*S+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,h=u*s-o*l,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=h*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xh.makeScale(e,t)),this}rotate(e){return this.premultiply(xh.makeRotation(-e)),this}translate(e,t){return this.premultiply(xh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xh=new Ze;function dM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _A(){const n=bu("canvas");return n.style.display="block",n}const fv={};function gf(n){n in fv||(fv[n]=!0,console.warn(n))}function gA(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function vA(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function xA(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const dv=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hv=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sl={[Jr]:{transfer:Qf,primaries:Jf,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ur]:{transfer:Rt,primaries:Jf,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Id]:{transfer:Qf,primaries:ed,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(hv),fromReference:n=>n.applyMatrix3(dv)},[yg]:{transfer:Rt,primaries:ed,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(hv),fromReference:n=>n.applyMatrix3(dv).convertLinearToSRGB()}},yA=new Set([Jr,Id]),_t={enabled:!0,_workingColorSpace:Jr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!yA.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Sl[e].toReference,r=Sl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Sl[n].primaries},getTransfer:function(n){return n===hs?Qf:Sl[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Sl[e].luminanceCoefficients)}};function Ia(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xo;class SA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xo===void 0&&(Xo=bu("canvas")),Xo.width=e.width,Xo.height=e.height;const i=Xo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ia(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ia(t[i]/255)*255):t[i]=Ia(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let MA=0;class hM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MA++}),this.uuid=qu(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Sh(r[o].image)):s.push(Sh(r[o]))}else s=Sh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Sh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?SA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let EA=0;class Yn extends cl{constructor(e=Yn.DEFAULT_IMAGE,t=Yn.DEFAULT_MAPPING,i=ho,r=ho,s=Ji,o=po,a=tr,l=jr,u=Yn.DEFAULT_ANISOTROPY,c=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EA++}),this.uuid=qu(),this.name="",this.source=new hM(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _m:e.x=e.x-Math.floor(e.x);break;case ho:e.x=e.x<0?0:1;break;case gm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _m:e.y=e.y-Math.floor(e.y);break;case ho:e.y=e.y<0?0:1;break;case gm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=eM;Yn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,i=0,r=1){Gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(h+1)/2,C=(p+1)/2,w=(c+f)/4,M=(d+_)/4,R=(g+m)/4;return x>S&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=M/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=M/s,r=R/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(f-c)/v,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TA extends cl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hM(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Do extends TA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pM extends Yn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ni,this.minFilter=Ni,this.wrapR=ho,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wA extends Yn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ni,this.minFilter=Ni,this.wrapR=ho,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ju{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||u!==h||c!==g){let m=1-a;const p=l*f+u*h+c*g+d*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const C=Math.sqrt(x),w=Math.atan2(C,p*v);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const S=a*v;if(l=l*m+f*S,u=u*m+h*S,c=c*m+g*S,d=d*m+_*S,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=C,u*=C,c*=C,d*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+c*d+l*h-u*f,e[t+1]=l*g+c*f+u*d-a*h,e[t+2]=u*g+c*h+a*f-l*d,e[t+3]=c*g-a*d-l*f-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*h*g,this._y=u*h*d-f*c*g,this._z=u*c*g+f*h*d,this._w=u*c*d-f*h*g;break;case"YXZ":this._x=f*c*d+u*h*g,this._y=u*h*d-f*c*g,this._z=u*c*g-f*h*d,this._w=u*c*d+f*h*g;break;case"ZXY":this._x=f*c*d-u*h*g,this._y=u*h*d+f*c*g,this._z=u*c*g+f*h*d,this._w=u*c*d-f*h*g;break;case"ZYX":this._x=f*c*d-u*h*g,this._y=u*h*d+f*c*g,this._z=u*c*g-f*h*d,this._w=u*c*d+f*h*g;break;case"YZX":this._x=f*c*d+u*h*g,this._y=u*h*d+f*c*g,this._z=u*c*g-f*h*d,this._w=u*c*d-f*h*g;break;case"XZY":this._x=f*c*d-u*h*g,this._y=u*h*d-f*c*g,this._z=u*c*g+f*h*d,this._w=u*c*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(c-l)*h,this._y=(s-u)*h,this._z=(o-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(c-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+u)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(s-u)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mh=new V,pv=new ju;class $u{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xi):Xi.fromBufferAttribute(s,o),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_c.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_c.copy(i.boundingBox)),_c.applyMatrix4(e.matrixWorld),this.union(_c)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ml),gc.subVectors(this.max,Ml),Yo.subVectors(e.a,Ml),qo.subVectors(e.b,Ml),jo.subVectors(e.c,Ml),ns.subVectors(qo,Yo),is.subVectors(jo,qo),Xs.subVectors(Yo,jo);let t=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Xs.z,Xs.y,ns.z,0,-ns.x,is.z,0,-is.x,Xs.z,0,-Xs.x,-ns.y,ns.x,0,-is.y,is.x,0,-Xs.y,Xs.x,0];return!Eh(t,Yo,qo,jo,gc)||(t=[1,0,0,0,1,0,0,0,1],!Eh(t,Yo,qo,jo,gc))?!1:(vc.crossVectors(ns,is),t=[vc.x,vc.y,vc.z],Eh(t,Yo,qo,jo,gc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wr=[new V,new V,new V,new V,new V,new V,new V,new V],Xi=new V,_c=new $u,Yo=new V,qo=new V,jo=new V,ns=new V,is=new V,Xs=new V,Ml=new V,gc=new V,vc=new V,Ys=new V;function Eh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ys.fromArray(n,s);const a=r.x*Math.abs(Ys.x)+r.y*Math.abs(Ys.y)+r.z*Math.abs(Ys.z),l=e.dot(Ys),u=t.dot(Ys),c=i.dot(Ys);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const AA=new $u,El=new V,Th=new V;class Ud{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):AA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;El.subVectors(e,this.center);const t=El.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(El,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(El.copy(e.center).add(Th)),this.expandByPoint(El.copy(e.center).sub(Th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ar=new V,wh=new V,xc=new V,rs=new V,Ah=new V,yc=new V,Ch=new V;class mM{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ar.copy(this.origin).addScaledVector(this.direction,t),Ar.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){wh.copy(e).add(t).multiplyScalar(.5),xc.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(wh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xc),a=rs.dot(this.direction),l=-rs.dot(xc),u=rs.lengthSq(),c=Math.abs(1-o*o);let d,f,h,g;if(c>0)if(d=o*l-a,f=o*a-l,g=s*c,d>=0)if(f>=-g)if(f<=g){const _=1/c;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+u;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+u):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(wh).addScaledVector(xc,f),h}intersectSphere(e,t){Ar.subVectors(e.center,this.origin);const i=Ar.dot(this.direction),r=Ar.dot(Ar)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ar)!==null}intersectTriangle(e,t,i,r,s){Ah.subVectors(t,e),yc.subVectors(i,e),Ch.crossVectors(Ah,yc);let o=this.direction.dot(Ch),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,e);const l=a*this.direction.dot(yc.crossVectors(rs,yc));if(l<0)return null;const u=a*this.direction.dot(Ah.cross(rs));if(u<0||l+u>o)return null;const c=-a*rs.dot(Ch);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,t,i,r,s,o,a,l,u,c,d,f,h,g,_,m){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,f,h,g,_,m)}set(e,t,i,r,s,o,a,l,u,c,d,f,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/$o.setFromMatrixColumn(e,0).length(),s=1/$o.setFromMatrixColumn(e,1).length(),o=1/$o.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,h=o*d,g=a*c,_=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=h+g*u,t[5]=f-_*u,t[9]=-a*l,t[2]=_-f*u,t[6]=g+h*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,h=l*d,g=u*c,_=u*d;t[0]=f+_*a,t[4]=g*a-h,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=h*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,h=l*d,g=u*c,_=u*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*c,t[9]=_-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,h=o*d,g=a*c,_=a*d;t[0]=l*c,t[4]=g*u-h,t[8]=f*u+_,t[1]=l*d,t[5]=_*u+f,t[9]=h*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=h*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,h=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+_,t[5]=o*c,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*c,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(CA,e,RA)}lookAt(e,t,i){const r=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),ss.crossVectors(i,ci),ss.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),ss.crossVectors(i,ci)),ss.normalize(),Sc.crossVectors(ci,ss),r[0]=ss.x,r[4]=Sc.x,r[8]=ci.x,r[1]=ss.y,r[5]=Sc.y,r[9]=ci.y,r[2]=ss.z,r[6]=Sc.z,r[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],v=i[3],x=i[7],S=i[11],C=i[15],w=r[0],M=r[4],R=r[8],D=r[12],y=r[1],T=r[5],U=r[9],k=r[13],X=r[2],q=r[6],B=r[10],Y=r[14],I=r[3],K=r[7],P=r[11],te=r[15];return s[0]=o*w+a*y+l*X+u*I,s[4]=o*M+a*T+l*q+u*K,s[8]=o*R+a*U+l*B+u*P,s[12]=o*D+a*k+l*Y+u*te,s[1]=c*w+d*y+f*X+h*I,s[5]=c*M+d*T+f*q+h*K,s[9]=c*R+d*U+f*B+h*P,s[13]=c*D+d*k+f*Y+h*te,s[2]=g*w+_*y+m*X+p*I,s[6]=g*M+_*T+m*q+p*K,s[10]=g*R+_*U+m*B+p*P,s[14]=g*D+_*k+m*Y+p*te,s[3]=v*w+x*y+S*X+C*I,s[7]=v*M+x*T+S*q+C*K,s[11]=v*R+x*U+S*B+C*P,s[15]=v*D+x*k+S*Y+C*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*h-i*l*h)+_*(+t*l*h-t*u*f+s*o*f-r*o*h+r*u*c-s*l*c)+m*(+t*u*d-t*a*h-s*o*d+i*o*h+s*a*c-i*u*c)+p*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=d*m*u-_*f*u+_*l*h-a*m*h-d*l*p+a*f*p,x=g*f*u-c*m*u-g*l*h+o*m*h+c*l*p-o*f*p,S=c*_*u-g*d*u+g*a*h-o*_*h-c*a*p+o*d*p,C=g*d*l-c*_*l-g*a*f+o*_*f+c*a*m-o*d*m,w=t*v+i*x+r*S+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=v*M,e[1]=(_*f*s-d*m*s-_*r*h+i*m*h+d*r*p-i*f*p)*M,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*p+i*l*p)*M,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*h-i*l*h)*M,e[4]=x*M,e[5]=(c*m*s-g*f*s+g*r*h-t*m*h-c*r*p+t*f*p)*M,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*p-t*l*p)*M,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*h+t*l*h)*M,e[8]=S*M,e[9]=(g*d*s-c*_*s-g*i*h+t*_*h+c*i*p-t*d*p)*M,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*p+t*a*p)*M,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*h-t*a*h)*M,e[12]=C*M,e[13]=(c*_*r-g*d*r+g*i*f-t*_*f-c*i*m+t*d*m)*M,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*M,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,h=s*c,g=s*d,_=o*c,m=o*d,p=a*d,v=l*u,x=l*c,S=l*d,C=i.x,w=i.y,M=i.z;return r[0]=(1-(_+p))*C,r[1]=(h+S)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(h-S)*w,r[5]=(1-(f+p))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+x)*M,r[9]=(m-v)*M,r[10]=(1-(f+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=$o.set(r[0],r[1],r[2]).length();const o=$o.set(r[4],r[5],r[6]).length(),a=$o.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yi.copy(this);const u=1/s,c=1/o,d=1/a;return Yi.elements[0]*=u,Yi.elements[1]*=u,Yi.elements[2]*=u,Yi.elements[4]*=c,Yi.elements[5]*=c,Yi.elements[6]*=c,Yi.elements[8]*=d,Yi.elements[9]*=d,Yi.elements[10]*=d,t.setFromRotationMatrix(Yi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Br){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let h,g;if(a===Br)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===td)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Br){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),f=(t+e)*u,h=(i+r)*c;let g,_;if(a===Br)g=(o+s)*d,_=-2*d;else if(a===td)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $o=new V,Yi=new Nt,CA=new V(0,0,0),RA=new V(1,1,1),ss=new V,Sc=new V,ci=new V,mv=new Nt,_v=new ju;class or{constructor(e=0,t=0,i=0,r=or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(bn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(bn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(bn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-bn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _v.setFromEuler(this),this.setFromQuaternion(_v,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}or.DEFAULT_ORDER="XYZ";class _M{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PA=0;const gv=new V,Ko=new ju,Cr=new Nt,Mc=new V,Tl=new V,bA=new V,LA=new ju,vv=new V(1,0,0),xv=new V(0,1,0),yv=new V(0,0,1),Sv={type:"added"},DA={type:"removed"},Zo={type:"childadded",child:null},Rh={type:"childremoved",child:null};class Sn extends cl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PA++}),this.uuid=qu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new V,t=new or,i=new ju,r=new V(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Ze}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _M,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ko.setFromAxisAngle(e,t),this.quaternion.multiply(Ko),this}rotateOnWorldAxis(e,t){return Ko.setFromAxisAngle(e,t),this.quaternion.premultiply(Ko),this}rotateX(e){return this.rotateOnAxis(vv,e)}rotateY(e){return this.rotateOnAxis(xv,e)}rotateZ(e){return this.rotateOnAxis(yv,e)}translateOnAxis(e,t){return gv.copy(e).applyQuaternion(this.quaternion),this.position.add(gv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vv,e)}translateY(e){return this.translateOnAxis(xv,e)}translateZ(e){return this.translateOnAxis(yv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Mc.copy(e):Mc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cr.lookAt(Tl,Mc,this.up):Cr.lookAt(Mc,Tl,this.up),this.quaternion.setFromRotationMatrix(Cr),r&&(Cr.extractRotation(r.matrixWorld),Ko.setFromRotationMatrix(Cr),this.quaternion.premultiply(Ko.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sv),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(DA),Rh.child=e,this.dispatchEvent(Rh),Rh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sv),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,e,bA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,LA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Sn.DEFAULT_UP=new V(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qi=new V,Rr=new V,Ph=new V,Pr=new V,Qo=new V,Jo=new V,Mv=new V,bh=new V,Lh=new V,Dh=new V,Ih=new Gt,Uh=new Gt,Nh=new Gt;class er{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qi.subVectors(e,t),r.cross(qi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qi.subVectors(r,t),Rr.subVectors(i,t),Ph.subVectors(e,t);const o=qi.dot(qi),a=qi.dot(Rr),l=qi.dot(Ph),u=Rr.dot(Rr),c=Rr.dot(Ph),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(u*l-a*c)*f,g=(o*c-a*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Pr)===null?!1:Pr.x>=0&&Pr.y>=0&&Pr.x+Pr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Pr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pr.x),l.addScaledVector(o,Pr.y),l.addScaledVector(a,Pr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ih.setScalar(0),Uh.setScalar(0),Nh.setScalar(0),Ih.fromBufferAttribute(e,t),Uh.fromBufferAttribute(e,i),Nh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ih,s.x),o.addScaledVector(Uh,s.y),o.addScaledVector(Nh,s.z),o}static isFrontFacing(e,t,i,r){return qi.subVectors(i,t),Rr.subVectors(e,t),qi.cross(Rr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),Rr.subVectors(this.a,this.b),qi.cross(Rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return er.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return er.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return er.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return er.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return er.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Qo.subVectors(r,i),Jo.subVectors(s,i),bh.subVectors(e,i);const l=Qo.dot(bh),u=Jo.dot(bh);if(l<=0&&u<=0)return t.copy(i);Lh.subVectors(e,r);const c=Qo.dot(Lh),d=Jo.dot(Lh);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Qo,o);Dh.subVectors(e,s);const h=Qo.dot(Dh),g=Jo.dot(Dh);if(g>=0&&h<=g)return t.copy(s);const _=h*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(Jo,a);const m=c*g-h*d;if(m<=0&&d-c>=0&&h-g>=0)return Mv.subVectors(s,r),a=(d-c)/(d-c+(h-g)),t.copy(r).addScaledVector(Mv,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(Qo,o).addScaledVector(Jo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Fh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ur){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=_t.workingColorSpace){if(e=mA(e,1),t=bn(t,0,1),i=bn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Fh(o,s,e+1/3),this.g=Fh(o,s,e),this.b=Fh(o,s,e-1/3)}return _t.toWorkingColorSpace(this,r),this}setStyle(e,t=ur){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ur){const i=gM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}copyLinearToSRGB(e){return this.r=yh(e.r),this.g=yh(e.g),this.b=yh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ur){return _t.fromWorkingColorSpace(An.copy(this),e),Math.round(bn(An.r*255,0,255))*65536+Math.round(bn(An.g*255,0,255))*256+Math.round(bn(An.b*255,0,255))}getHexString(e=ur){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(An.copy(this),t);const i=An.r,r=An.g,s=An.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=ur){_t.fromWorkingColorSpace(An.copy(this),e);const t=An.r,i=An.g,r=An.b;return e!==ur?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(Ec);const i=vh(os.h,Ec.h,t),r=vh(os.s,Ec.s,t),s=vh(os.l,Ec.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new et;et.NAMES=gM;let IA=0;class Bo extends cl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IA++}),this.uuid=qu(),this.name="",this.type="Material",this.blending=La,this.side=Os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sm,this.blendDst=om,this.blendEquation=oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==La&&(i.blending=this.blending),this.side!==Os&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sm&&(i.blendSrc=this.blendSrc),this.blendDst!==om&&(i.blendDst=this.blendDst),this.blendEquation!==oo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ja&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Lu extends Bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=dg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new V,Tc=new dt;class xr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=uv,this.updateRanges=[],this.gpuType=zr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Tc.fromBufferAttribute(this,t),Tc.applyMatrix3(e),this.setXY(t,Tc.x,Tc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yl(t,this.array)),t}setX(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yl(t,this.array)),t}setY(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yl(t,this.array)),t}setW(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),i=$n(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),i=$n(i,this.array),r=$n(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),i=$n(i,this.array),r=$n(r,this.array),s=$n(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uv&&(e.usage=this.usage),e}}class vM extends xr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xM extends xr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class rr extends xr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let UA=0;const Ci=new Nt,Oh=new Sn,ea=new V,fi=new $u,wl=new $u,un=new V;class Tr extends cl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UA++}),this.uuid=qu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dM(e)?xM:vM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,i){return Ci.makeTranslation(e,t,i),this.applyMatrix4(Ci),this}scale(e,t,i){return Ci.makeScale(e,t,i),this.applyMatrix4(Ci),this}lookAt(e){return Oh.lookAt(e),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ea).negate(),this.translate(ea.x,ea.y,ea.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new rr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $u);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];fi.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ud);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];wl.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(fi.min,wl.min),fi.expandByPoint(un),un.addVectors(fi.max,wl.max),fi.expandByPoint(un)):(fi.expandByPoint(wl.min),fi.expandByPoint(wl.max))}fi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)un.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(un));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)un.fromBufferAttribute(a,u),l&&(ea.fromBufferAttribute(e,u),un.add(ea)),r=Math.max(r,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new V,l[R]=new V;const u=new V,c=new V,d=new V,f=new dt,h=new dt,g=new dt,_=new V,m=new V;function p(R,D,y){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,R),h.fromBufferAttribute(s,D),g.fromBufferAttribute(s,y),c.sub(u),d.sub(u),h.sub(f),g.sub(f);const T=1/(h.x*g.y-g.x*h.y);isFinite(T)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(T),m.copy(d).multiplyScalar(h.x).addScaledVector(c,-g.x).multiplyScalar(T),a[R].add(_),a[D].add(_),a[y].add(_),l[R].add(m),l[D].add(m),l[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,D=v.length;R<D;++R){const y=v[R],T=y.start,U=y.count;for(let k=T,X=T+U;k<X;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new V,S=new V,C=new V,w=new V;function M(R){C.fromBufferAttribute(r,R),w.copy(C);const D=a[R];x.copy(D),x.sub(C.multiplyScalar(C.dot(D))).normalize(),S.crossVectors(w,D);const T=S.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,T)}for(let R=0,D=v.length;R<D;++R){const y=v[R],T=y.start,U=y.count;for(let k=T,X=T+U;k<X;k+=3)M(e.getX(k+0)),M(e.getX(k+1)),M(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,u=new V,c=new V,d=new V;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*c;for(let p=0;p<c;p++)f[g++]=u[h++]}return new xr(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const h=u[d];c.push(h.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,h=d.length;f<h;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ev=new Nt,qs=new mM,wc=new Ud,Tv=new V,Ac=new V,Cc=new V,Rc=new V,kh=new V,Pc=new V,wv=new V,bc=new V;class vn extends Sn{constructor(e=new Tr,t=new Lu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Pc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(kh.fromBufferAttribute(d,e),o?Pc.addScaledVector(kh,c):Pc.addScaledVector(kh.sub(t),c))}t.add(Pc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wc.copy(i.boundingSphere),wc.applyMatrix4(s),qs.copy(e.ray).recast(e.near),!(wc.containsPoint(qs.origin)===!1&&(qs.intersectSphere(wc,Tv)===null||qs.origin.distanceToSquared(Tv)>(e.far-e.near)**2))&&(Ev.copy(s).invert(),qs.copy(e.ray).applyMatrix4(Ev),!(i.boundingBox!==null&&qs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,h.start),x=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=v,C=x;S<C;S+=3){const w=a.getX(S),M=a.getX(S+1),R=a.getX(S+2);r=Lc(this,p,e,i,u,c,d,w,M,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=Lc(this,o,e,i,u,c,d,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,h.start),x=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=v,C=x;S<C;S+=3){const w=S,M=S+1,R=S+2;r=Lc(this,p,e,i,u,c,d,w,M,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const v=m,x=m+1,S=m+2;r=Lc(this,o,e,i,u,c,d,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function NA(n,e,t,i,r,s,o,a){let l;if(e.side===ni?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Os,a),l===null)return null;bc.copy(a),bc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(bc);return u<t.near||u>t.far?null:{distance:u,point:bc.clone(),object:n}}function Lc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Ac),n.getVertexPosition(l,Cc),n.getVertexPosition(u,Rc);const c=NA(n,e,t,i,Ac,Cc,Rc,wv);if(c){const d=new V;er.getBarycoord(wv,Ac,Cc,Rc,d),r&&(c.uv=er.getInterpolatedAttribute(r,a,l,u,d,new dt)),s&&(c.uv1=er.getInterpolatedAttribute(s,a,l,u,d,new dt)),o&&(c.normal=er.getInterpolatedAttribute(o,a,l,u,d,new V),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new V,materialIndex:0};er.getNormal(Ac,Cc,Rc,f.normal),c.face=f,c.barycoord=d}return c}class Ku extends Tr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new rr(u,3)),this.setAttribute("normal",new rr(c,3)),this.setAttribute("uv",new rr(d,2));function g(_,m,p,v,x,S,C,w,M,R,D){const y=S/M,T=C/R,U=S/2,k=C/2,X=w/2,q=M+1,B=R+1;let Y=0,I=0;const K=new V;for(let P=0;P<B;P++){const te=P*T-k;for(let ye=0;ye<q;ye++){const Be=ye*y-U;K[_]=Be*v,K[m]=te*x,K[p]=X,u.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=w>0?1:-1,c.push(K.x,K.y,K.z),d.push(ye/M),d.push(1-P/R),Y+=1}}for(let P=0;P<R;P++)for(let te=0;te<M;te++){const ye=f+te+q*P,Be=f+te+q*(P+1),j=f+(te+1)+q*(P+1),ee=f+(te+1)+q*P;l.push(ye,Be,ee),l.push(Be,j,ee),I+=6}a.addGroup(h,I,D),h+=I,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ku(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ja(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function On(n){const e={};for(let t=0;t<n.length;t++){const i=Ja(n[t]);for(const r in i)e[r]=i[r]}return e}function FA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function yM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const OA={clone:Ja,merge:On};var kA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $r extends Bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kA,this.fragmentShader=zA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ja(e.uniforms),this.uniformsGroups=FA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class SM extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Br}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const as=new V,Av=new dt,Cv=new dt;class Li extends SM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wm*2*Math.atan(Math.tan(gh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,t){return this.getViewBounds(e,Av,Cv),t.subVectors(Cv,Av)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ta=-90,na=1;class BA extends Sn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Li(ta,na,e,t);r.layers=this.layers,this.add(r);const s=new Li(ta,na,e,t);s.layers=this.layers,this.add(s);const o=new Li(ta,na,e,t);o.layers=this.layers,this.add(o);const a=new Li(ta,na,e,t);a.layers=this.layers,this.add(a);const l=new Li(ta,na,e,t);l.layers=this.layers,this.add(l);const u=new Li(ta,na,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Br)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===td)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class MM extends Yn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:$a,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HA extends Do{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new MM(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ji}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ku(5,5,5),s=new $r({name:"CubemapFromEquirect",uniforms:Ja(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ni,blending:bs});s.uniforms.tEquirect.value=t;const o=new vn(r,s),a=t.minFilter;return t.minFilter===po&&(t.minFilter=Ji),new BA(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const zh=new V,VA=new V,GA=new Ze;class to{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=zh.subVectors(i,t).cross(VA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(zh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||GA.getNormalMatrix(e),r=this.coplanarPoint(zh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const js=new Ud,Dc=new V;class Sg{constructor(e=new to,t=new to,i=new to,r=new to,s=new to,o=new to){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Br){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],f=r[7],h=r[8],g=r[9],_=r[10],m=r[11],p=r[12],v=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,f-u,m-h,S-p).normalize(),i[1].setComponents(l+s,f+u,m+h,S+p).normalize(),i[2].setComponents(l+o,f+c,m+g,S+v).normalize(),i[3].setComponents(l-o,f-c,m-g,S-v).normalize(),i[4].setComponents(l-a,f-d,m-_,S-x).normalize(),t===Br)i[5].setComponents(l+a,f+d,m+_,S+x).normalize();else if(t===td)i[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(e){return js.center.set(0,0,0),js.radius=.7071067811865476,js.applyMatrix4(e.matrixWorld),this.intersectsSphere(js)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Dc.x=r.normal.x>0?e.max.x:e.min.x,Dc.y=r.normal.y>0?e.max.y:e.min.y,Dc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function EM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function WA(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let h;if(u instanceof Float32Array)h=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=n.SHORT;else if(u instanceof Uint32Array)h=n.UNSIGNED_INT;else if(u instanceof Int32Array)h=n.INT;else if(u instanceof Int8Array)h=n.BYTE;else if(u instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l.updateRanges;if(n.bindBuffer(u,a),d.length===0)n.bufferSubData(u,0,c);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],_=d[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const _=d[h];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Nd extends Tr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,h=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const v=p*f-o;for(let x=0;x<u;x++){const S=x*d-s;g.push(S,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const x=v+u*p,S=v+u*(p+1),C=v+1+u*(p+1),w=v+1+u*p;h.push(x,S,w),h.push(S,C,w)}this.setIndex(h),this.setAttribute("position",new rr(g,3)),this.setAttribute("normal",new rr(_,3)),this.setAttribute("uv",new rr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nd(e.width,e.height,e.widthSegments,e.heightSegments)}}var XA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$A=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_C=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SC="gl_FragColor = linearToOutputTexel( gl_FragColor );",MC=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,TC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,OC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$C=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_R=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ER=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,CR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,GR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$R=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,JR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_P=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,MP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:XA,alphahash_pars_fragment:YA,alphamap_fragment:qA,alphamap_pars_fragment:jA,alphatest_fragment:$A,alphatest_pars_fragment:KA,aomap_fragment:ZA,aomap_pars_fragment:QA,batching_pars_vertex:JA,batching_vertex:eC,begin_vertex:tC,beginnormal_vertex:nC,bsdfs:iC,iridescence_fragment:rC,bumpmap_pars_fragment:sC,clipping_planes_fragment:oC,clipping_planes_pars_fragment:aC,clipping_planes_pars_vertex:lC,clipping_planes_vertex:uC,color_fragment:cC,color_pars_fragment:fC,color_pars_vertex:dC,color_vertex:hC,common:pC,cube_uv_reflection_fragment:mC,defaultnormal_vertex:_C,displacementmap_pars_vertex:gC,displacementmap_vertex:vC,emissivemap_fragment:xC,emissivemap_pars_fragment:yC,colorspace_fragment:SC,colorspace_pars_fragment:MC,envmap_fragment:EC,envmap_common_pars_fragment:TC,envmap_pars_fragment:wC,envmap_pars_vertex:AC,envmap_physical_pars_fragment:OC,envmap_vertex:CC,fog_vertex:RC,fog_pars_vertex:PC,fog_fragment:bC,fog_pars_fragment:LC,gradientmap_pars_fragment:DC,lightmap_pars_fragment:IC,lights_lambert_fragment:UC,lights_lambert_pars_fragment:NC,lights_pars_begin:FC,lights_toon_fragment:kC,lights_toon_pars_fragment:zC,lights_phong_fragment:BC,lights_phong_pars_fragment:HC,lights_physical_fragment:VC,lights_physical_pars_fragment:GC,lights_fragment_begin:WC,lights_fragment_maps:XC,lights_fragment_end:YC,logdepthbuf_fragment:qC,logdepthbuf_pars_fragment:jC,logdepthbuf_pars_vertex:$C,logdepthbuf_vertex:KC,map_fragment:ZC,map_pars_fragment:QC,map_particle_fragment:JC,map_particle_pars_fragment:eR,metalnessmap_fragment:tR,metalnessmap_pars_fragment:nR,morphinstance_vertex:iR,morphcolor_vertex:rR,morphnormal_vertex:sR,morphtarget_pars_vertex:oR,morphtarget_vertex:aR,normal_fragment_begin:lR,normal_fragment_maps:uR,normal_pars_fragment:cR,normal_pars_vertex:fR,normal_vertex:dR,normalmap_pars_fragment:hR,clearcoat_normal_fragment_begin:pR,clearcoat_normal_fragment_maps:mR,clearcoat_pars_fragment:_R,iridescence_pars_fragment:gR,opaque_fragment:vR,packing:xR,premultiplied_alpha_fragment:yR,project_vertex:SR,dithering_fragment:MR,dithering_pars_fragment:ER,roughnessmap_fragment:TR,roughnessmap_pars_fragment:wR,shadowmap_pars_fragment:AR,shadowmap_pars_vertex:CR,shadowmap_vertex:RR,shadowmask_pars_fragment:PR,skinbase_vertex:bR,skinning_pars_vertex:LR,skinning_vertex:DR,skinnormal_vertex:IR,specularmap_fragment:UR,specularmap_pars_fragment:NR,tonemapping_fragment:FR,tonemapping_pars_fragment:OR,transmission_fragment:kR,transmission_pars_fragment:zR,uv_pars_fragment:BR,uv_pars_vertex:HR,uv_vertex:VR,worldpos_vertex:GR,background_vert:WR,background_frag:XR,backgroundCube_vert:YR,backgroundCube_frag:qR,cube_vert:jR,cube_frag:$R,depth_vert:KR,depth_frag:ZR,distanceRGBA_vert:QR,distanceRGBA_frag:JR,equirect_vert:eP,equirect_frag:tP,linedashed_vert:nP,linedashed_frag:iP,meshbasic_vert:rP,meshbasic_frag:sP,meshlambert_vert:oP,meshlambert_frag:aP,meshmatcap_vert:lP,meshmatcap_frag:uP,meshnormal_vert:cP,meshnormal_frag:fP,meshphong_vert:dP,meshphong_frag:hP,meshphysical_vert:pP,meshphysical_frag:mP,meshtoon_vert:_P,meshtoon_frag:gP,points_vert:vP,points_frag:xP,shadow_vert:yP,shadow_frag:SP,sprite_vert:MP,sprite_frag:EP},_e={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},dr={basic:{uniforms:On([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:On([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new et(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:On([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:On([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:On([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new et(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:On([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:On([_e.points,_e.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:On([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:On([_e.common,_e.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:On([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:On([_e.sprite,_e.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:On([_e.common,_e.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:On([_e.lights,_e.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};dr.physical={uniforms:On([dr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Ic={r:0,b:0,g:0},$s=new or,TP=new Nt;function wP(n,e,t,i,r,s,o){const a=new et(0);let l=s===!0?0:1,u,c,d=null,f=0,h=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const S=g(v);S===null?p(a,l):S&&S.isColor&&(p(S,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===Dd)?(c===void 0&&(c=new vn(new Ku(1,1,1),new $r({name:"BackgroundCubeMaterial",uniforms:Ja(dr.backgroundCube.uniforms),vertexShader:dr.backgroundCube.vertexShader,fragmentShader:dr.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),$s.copy(x.backgroundRotation),$s.x*=-1,$s.y*=-1,$s.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&($s.y*=-1,$s.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(TP.makeRotationFromEuler($s)),c.material.toneMapped=_t.getTransfer(S.colorSpace)!==Rt,(d!==S||f!==S.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new vn(new Nd(2,2),new $r({name:"BackgroundMaterial",uniforms:Ja(dr.background.uniforms),vertexShader:dr.background.vertexShader,fragmentShader:dr.background.fragmentShader,side:Os,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=_t.getTransfer(S.colorSpace)!==Rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,h=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function p(v,x){v.getRGB(Ic,yM(n)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m}}function AP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,T,U,k,X){let q=!1;const B=d(k,U,T);s!==B&&(s=B,u(s.object)),q=h(y,k,U,X),q&&g(y,k,U,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(y,T,U,k),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function u(y){return n.bindVertexArray(y)}function c(y){return n.deleteVertexArray(y)}function d(y,T,U){const k=U.wireframe===!0;let X=i[y.id];X===void 0&&(X={},i[y.id]=X);let q=X[T.id];q===void 0&&(q={},X[T.id]=q);let B=q[k];return B===void 0&&(B=f(l()),q[k]=B),B}function f(y){const T=[],U=[],k=[];for(let X=0;X<t;X++)T[X]=0,U[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:U,attributeDivisors:k,object:y,attributes:{},index:null}}function h(y,T,U,k){const X=s.attributes,q=T.attributes;let B=0;const Y=U.getAttributes();for(const I in Y)if(Y[I].location>=0){const P=X[I];let te=q[I];if(te===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(te=y.instanceColor)),P===void 0||P.attribute!==te||te&&P.data!==te.data)return!0;B++}return s.attributesNum!==B||s.index!==k}function g(y,T,U,k){const X={},q=T.attributes;let B=0;const Y=U.getAttributes();for(const I in Y)if(Y[I].location>=0){let P=q[I];P===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(P=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(P=y.instanceColor));const te={};te.attribute=P,P&&P.data&&(te.data=P.data),X[I]=te,B++}s.attributes=X,s.attributesNum=B,s.index=k}function _(){const y=s.newAttributes;for(let T=0,U=y.length;T<U;T++)y[T]=0}function m(y){p(y,0)}function p(y,T){const U=s.newAttributes,k=s.enabledAttributes,X=s.attributeDivisors;U[y]=1,k[y]===0&&(n.enableVertexAttribArray(y),k[y]=1),X[y]!==T&&(n.vertexAttribDivisor(y,T),X[y]=T)}function v(){const y=s.newAttributes,T=s.enabledAttributes;for(let U=0,k=T.length;U<k;U++)T[U]!==y[U]&&(n.disableVertexAttribArray(U),T[U]=0)}function x(y,T,U,k,X,q,B){B===!0?n.vertexAttribIPointer(y,T,U,X,q):n.vertexAttribPointer(y,T,U,k,X,q)}function S(y,T,U,k){_();const X=k.attributes,q=U.getAttributes(),B=T.defaultAttributeValues;for(const Y in q){const I=q[Y];if(I.location>=0){let K=X[Y];if(K===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){const P=K.normalized,te=K.itemSize,ye=e.get(K);if(ye===void 0)continue;const Be=ye.buffer,j=ye.type,ee=ye.bytesPerElement,ue=j===n.INT||j===n.UNSIGNED_INT||K.gpuType===hg;if(K.isInterleavedBufferAttribute){const le=K.data,Re=le.stride,we=K.offset;if(le.isInstancedInterleavedBuffer){for(let Ye=0;Ye<I.locationSize;Ye++)p(I.location+Ye,le.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ye=0;Ye<I.locationSize;Ye++)m(I.location+Ye);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let Ye=0;Ye<I.locationSize;Ye++)x(I.location+Ye,te/I.locationSize,j,P,Re*ee,(we+te/I.locationSize*Ye)*ee,ue)}else{if(K.isInstancedBufferAttribute){for(let le=0;le<I.locationSize;le++)p(I.location+le,K.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let le=0;le<I.locationSize;le++)m(I.location+le);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let le=0;le<I.locationSize;le++)x(I.location+le,te/I.locationSize,j,P,te*ee,te/I.locationSize*le*ee,ue)}}else if(B!==void 0){const P=B[Y];if(P!==void 0)switch(P.length){case 2:n.vertexAttrib2fv(I.location,P);break;case 3:n.vertexAttrib3fv(I.location,P);break;case 4:n.vertexAttrib4fv(I.location,P);break;default:n.vertexAttrib1fv(I.location,P)}}}}v()}function C(){R();for(const y in i){const T=i[y];for(const U in T){const k=T[U];for(const X in k)c(k[X].object),delete k[X];delete T[U]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const T=i[y.id];for(const U in T){const k=T[U];for(const X in k)c(k[X].object),delete k[X];delete T[U]}delete i[y.id]}function M(y){for(const T in i){const U=i[T];if(U[y.id]===void 0)continue;const k=U[y.id];for(const X in k)c(k[X].object),delete k[X];delete U[y.id]}}function R(){D(),o=!0,s!==r&&(s=r,u(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:D,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function CP(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,d){d!==0&&(n.drawArraysInstanced(i,u,c,d),t.update(c,i,d))}function a(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let h=0;for(let g=0;g<d;g++)h+=c[g];t.update(h,i,1)}function l(u,c,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<u.length;g++)o(u[g],c[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=c[_];for(let _=0;_<f.length;_++)t.update(g,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function RP(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(M){return!(M!==tr&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const R=M===Yu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==jr&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==zr&&!R)}function l(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const M=e.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:C,maxSamples:w}}function PP(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new to,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let S=p.clippingState||null;l.value=S,S=c(g,f,x,h);for(let C=0;C!==x;++C)S[C]=t[C];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,h,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,S=h;x!==_;++x,S+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function bP(n){let e=new WeakMap;function t(o,a){return a===pm?o.mapping=$a:a===mm&&(o.mapping=Ka),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===pm||a===mm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new HA(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class TM extends SM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Sa=4,Rv=[.125,.215,.35,.446,.526,.582],ao=20,Bh=new TM,Pv=new et;let Hh=null,Vh=0,Gh=0,Wh=!1;const no=(1+Math.sqrt(5))/2,ia=1/no,bv=[new V(-no,ia,0),new V(no,ia,0),new V(-ia,0,no),new V(ia,0,no),new V(0,no,-ia),new V(0,no,ia),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class Lv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Hh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hh,Vh,Gh),this._renderer.xr.enabled=Wh,e.scissorTest=!1,Uc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$a||e.mapping===Ka?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ji,minFilter:Ji,generateMipmaps:!1,type:Yu,format:tr,colorSpace:Jr,depthBuffer:!1},r=Dv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LP(s)),this._blurMaterial=DP(s,e,t)}return r}_compileMaterial(e){const t=new vn(this._lodPlanes[0],e);this._renderer.compile(t,Bh)}_sceneToCubeUV(e,t,i,r){const a=new Li(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Pv),c.toneMapping=Ls,c.autoClear=!1;const h=new Lu({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1}),g=new vn(new Ku,h);let _=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,_=!0):(h.color.copy(Pv),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const x=this._cubeSize;Uc(r,v*x,p>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===$a||e.mapping===Ka;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new vn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Uc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Bh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=bv[(r-s-1)%bv.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new vn(this._lodPlanes[r],u),f=u.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ao-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):ao;m>ao&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ao}`);const p=[];let v=0;for(let M=0;M<ao;++M){const R=M/_,D=Math.exp(-R*R/2);p.push(D),M===0?v+=D:M<m&&(v+=2*D)}for(let M=0;M<p.length;M++)p[M]=p[M]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const S=this._sizeLods[r],C=3*S*(r>x-Sa?r-x+Sa:0),w=4*(this._cubeSize-S);Uc(t,C,w,3*S,2*S),l.setRenderTarget(t),l.render(d,Bh)}}function LP(n){const e=[],t=[],i=[];let r=n;const s=n-Sa+1+Rv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Sa?l=Rv[o-n+Sa-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],h=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*h),x=new Float32Array(m*g*h),S=new Float32Array(p*g*h);for(let w=0;w<h;w++){const M=w%3*2/3-1,R=w>2?0:-1,D=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];v.set(D,_*g*w),x.set(f,m*g*w);const y=[w,w,w,w,w,w];S.set(y,p*g*w)}const C=new Tr;C.setAttribute("position",new xr(v,_)),C.setAttribute("uv",new xr(x,m)),C.setAttribute("faceIndex",new xr(S,p)),e.push(C),r>Sa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Dv(n,e,t){const i=new Do(n,e,t);return i.texture.mapping=Dd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function DP(n,e,t){const i=new Float32Array(ao),r=new V(0,1,0);return new $r({name:"SphericalGaussianBlur",defines:{n:ao,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function Iv(){return new $r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function Uv(){return new $r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function Mg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function IP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===pm||l===mm,c=l===$a||l===Ka;if(u||c){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Lv(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return u&&h&&h.height>0||c&&h&&r(h)?(t===null&&(t=new Lv(n)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function UP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&gf("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function NP(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const h=d.morphAttributes;for(const g in h){const _=h[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(d){const f=[],h=d.index,g=d.attributes.position;let _=0;if(h!==null){const v=h.array;_=h.version;for(let x=0,S=v.length;x<S;x+=3){const C=v[x+0],w=v[x+1],M=v[x+2];f.push(C,w,w,M,M,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const C=x+0,w=x+1,M=x+2;f.push(C,w,w,M,M,C)}}else return;const m=new(dM(f)?xM:vM)(f,1);m.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function c(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function FP(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function u(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*o,g),t.update(h,i,g))}function c(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)u(f[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=h[v];for(let v=0;v<_.length;v++)t.update(p,i,_[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function OP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function kP(n,e,t){const i=new WeakMap,r=new Gt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let y=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var h=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const M=new Float32Array(C*w*4*d),R=new pM(M,C,w,d);R.type=zr,R.needsUpdate=!0;const D=S*4;for(let T=0;T<d;T++){const U=p[T],k=v[T],X=x[T],q=C*w*4*T;for(let B=0;B<U.count;B++){const Y=B*D;g===!0&&(r.fromBufferAttribute(U,B),M[q+Y+0]=r.x,M[q+Y+1]=r.y,M[q+Y+2]=r.z,M[q+Y+3]=0),_===!0&&(r.fromBufferAttribute(k,B),M[q+Y+4]=r.x,M[q+Y+5]=r.y,M[q+Y+6]=r.z,M[q+Y+7]=0),m===!0&&(r.fromBufferAttribute(X,B),M[q+Y+8]=r.x,M[q+Y+9]=r.y,M[q+Y+10]=r.z,M[q+Y+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new dt(C,w)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function zP(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class wM extends Yn{constructor(e,t,i,r,s,o,a,l,u,c=Da){if(c!==Da&&c!==Qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Da&&(i=Lo),i===void 0&&c===Qa&&(i=Za),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ni,this.minFilter=l!==void 0?l:Ni,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const AM=new Yn,Nv=new wM(1,1),CM=new pM,RM=new wA,PM=new MM,Fv=[],Ov=[],kv=new Float32Array(16),zv=new Float32Array(9),Bv=new Float32Array(4);function fl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Fv[r];if(s===void 0&&(s=new Float32Array(r),Fv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function on(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function an(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Fd(n,e){let t=Ov[e];t===void 0&&(t=new Int32Array(e),Ov[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function BP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function HP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2fv(this.addr,e),an(t,e)}}function VP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;n.uniform3fv(this.addr,e),an(t,e)}}function GP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4fv(this.addr,e),an(t,e)}}function WP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;Bv.set(i),n.uniformMatrix2fv(this.addr,!1,Bv),an(t,i)}}function XP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;zv.set(i),n.uniformMatrix3fv(this.addr,!1,zv),an(t,i)}}function YP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;kv.set(i),n.uniformMatrix4fv(this.addr,!1,kv),an(t,i)}}function qP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2iv(this.addr,e),an(t,e)}}function $P(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3iv(this.addr,e),an(t,e)}}function KP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4iv(this.addr,e),an(t,e)}}function ZP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function QP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2uiv(this.addr,e),an(t,e)}}function JP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3uiv(this.addr,e),an(t,e)}}function eb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4uiv(this.addr,e),an(t,e)}}function tb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Nv.compareFunction=fM,s=Nv):s=AM,t.setTexture2D(e||s,r)}function nb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||RM,r)}function ib(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||PM,r)}function rb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||CM,r)}function sb(n){switch(n){case 5126:return BP;case 35664:return HP;case 35665:return VP;case 35666:return GP;case 35674:return WP;case 35675:return XP;case 35676:return YP;case 5124:case 35670:return qP;case 35667:case 35671:return jP;case 35668:case 35672:return $P;case 35669:case 35673:return KP;case 5125:return ZP;case 36294:return QP;case 36295:return JP;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return tb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return rb}}function ob(n,e){n.uniform1fv(this.addr,e)}function ab(n,e){const t=fl(e,this.size,2);n.uniform2fv(this.addr,t)}function lb(n,e){const t=fl(e,this.size,3);n.uniform3fv(this.addr,t)}function ub(n,e){const t=fl(e,this.size,4);n.uniform4fv(this.addr,t)}function cb(n,e){const t=fl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function fb(n,e){const t=fl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function db(n,e){const t=fl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hb(n,e){n.uniform1iv(this.addr,e)}function pb(n,e){n.uniform2iv(this.addr,e)}function mb(n,e){n.uniform3iv(this.addr,e)}function _b(n,e){n.uniform4iv(this.addr,e)}function gb(n,e){n.uniform1uiv(this.addr,e)}function vb(n,e){n.uniform2uiv(this.addr,e)}function xb(n,e){n.uniform3uiv(this.addr,e)}function yb(n,e){n.uniform4uiv(this.addr,e)}function Sb(n,e,t){const i=this.cache,r=e.length,s=Fd(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||AM,s[o])}function Mb(n,e,t){const i=this.cache,r=e.length,s=Fd(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||RM,s[o])}function Eb(n,e,t){const i=this.cache,r=e.length,s=Fd(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||PM,s[o])}function Tb(n,e,t){const i=this.cache,r=e.length,s=Fd(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||CM,s[o])}function wb(n){switch(n){case 5126:return ob;case 35664:return ab;case 35665:return lb;case 35666:return ub;case 35674:return cb;case 35675:return fb;case 35676:return db;case 5124:case 35670:return hb;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return _b;case 5125:return gb;case 36294:return vb;case 36295:return xb;case 36296:return yb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return Mb;case 35680:case 36300:case 36308:case 36293:return Eb;case 36289:case 36303:case 36311:case 36292:return Tb}}class Ab{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sb(t.type)}}class Cb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wb(t.type)}}class Rb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Xh=/(\w+)(\])?(\[|\.)?/g;function Hv(n,e){n.seq.push(e),n.map[e.id]=e}function Pb(n,e,t){const i=n.name,r=i.length;for(Xh.lastIndex=0;;){const s=Xh.exec(i),o=Xh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Hv(t,u===void 0?new Ab(a,n,e):new Cb(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Rb(a),Hv(t,d)),t=d}}}class vf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Pb(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Vv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const bb=37297;let Lb=0;function Db(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Ib(n){const e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(n);let i;switch(e===t?i="":e===ed&&t===Jf?i="LinearDisplayP3ToLinearSRGB":e===Jf&&t===ed&&(i="LinearSRGBToLinearDisplayP3"),n){case Jr:case Id:return[i,"LinearTransferOETF"];case ur:case yg:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Gv(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Db(n.getShaderSource(e),o)}else return r}function Ub(n,e){const t=Ib(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Nb(n,e){let t;switch(e){case Qw:t="Linear";break;case Jw:t="Reinhard";break;case eA:t="Cineon";break;case JS:t="ACESFilmic";break;case nA:t="AgX";break;case iA:t="Neutral";break;case tA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nc=new V;function Fb(){_t.getLuminanceCoefficients(Nc);const n=Nc.x.toFixed(4),e=Nc.y.toFixed(4),t=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ob(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nl).join(`
`)}function kb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Nl(n){return n!==""}function Wv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xm(n){return n.replace(Bb,Vb)}const Hb=new Map;function Vb(n,e){let t=Ke[e];if(t===void 0){const i=Hb.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xm(t)}const Gb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yv(n){return n.replace(Gb,Wb)}function Wb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qv(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===QS?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Lw?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===br&&(e="SHADOWMAP_TYPE_VSM"),e}function Yb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $a:case Ka:e="ENVMAP_TYPE_CUBE";break;case Dd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ka:e="ENVMAP_MODE_REFRACTION";break}return e}function jb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case dg:e="ENVMAP_BLENDING_MULTIPLY";break;case Kw:e="ENVMAP_BLENDING_MIX";break;case Zw:e="ENVMAP_BLENDING_ADD";break}return e}function $b(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Kb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Xb(t),u=Yb(t),c=qb(t),d=jb(t),f=$b(t),h=Ob(t),g=kb(s),_=r.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Nl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Nl).join(`
`),p.length>0&&(p+=`
`)):(m=[qv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nl).join(`
`),p=[qv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ls?"#define TONE_MAPPING":"",t.toneMapping!==Ls?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Ls?Nb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Ub("linearToOutputTexel",t.outputColorSpace),Fb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nl).join(`
`)),o=Xm(o),o=Wv(o,t),o=Xv(o,t),a=Xm(a),a=Wv(a,t),a=Xv(a,t),o=Yv(o),a=Yv(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===cv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+o,S=v+p+a,C=Vv(r,r.VERTEX_SHADER,x),w=Vv(r,r.FRAGMENT_SHADER,S);r.attachShader(_,C),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function M(T){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(C).trim(),X=r.getShaderInfoLog(w).trim();let q=!0,B=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,w);else{const Y=Gv(r,C,"vertex"),I=Gv(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+U+`
`+Y+`
`+I)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(k===""||X==="")&&(B=!1);B&&(T.diagnostics={runnable:q,programLog:U,vertexShader:{log:k,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(C),r.deleteShader(w),R=new vf(r,_),D=zb(r,_)}let R;this.getUniforms=function(){return R===void 0&&M(this),R};let D;this.getAttributes=function(){return D===void 0&&M(this),D};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,bb)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let Zb=0;class Qb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Jb(e),t.set(e,i)),i}}class Jb{constructor(e){this.id=Zb++,this.code=e,this.usedTimes=0}}function e2(n,e,t,i,r,s,o){const a=new _M,l=new Qb,u=new Set,c=[],d=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,h=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return u.add(y),y===0?"uv":`uv${y}`}function p(y,T,U,k,X){const q=k.fog,B=X.geometry,Y=y.isMeshStandardMaterial?k.environment:null,I=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),K=I&&I.mapping===Dd?I.image.height:null,P=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const te=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ye=te!==void 0?te.length:0;let Be=0;B.morphAttributes.position!==void 0&&(Be=1),B.morphAttributes.normal!==void 0&&(Be=2),B.morphAttributes.color!==void 0&&(Be=3);let j,ee,ue,le;if(P){const be=dr[P];j=be.vertexShader,ee=be.fragmentShader}else j=y.vertexShader,ee=y.fragmentShader,l.update(y),ue=l.getVertexShaderID(y),le=l.getFragmentShaderID(y);const Re=n.getRenderTarget(),we=X.isInstancedMesh===!0,Ye=X.isBatchedMesh===!0,Xe=!!y.map,Ge=!!y.matcap,L=!!I,at=!!y.aoMap,ke=!!y.lightMap,He=!!y.bumpMap,z=!!y.normalMap,Qe=!!y.displacementMap,Ie=!!y.emissiveMap,b=!!y.metalnessMap,E=!!y.roughnessMap,W=y.anisotropy>0,Q=y.clearcoat>0,ie=y.dispersion>0,Z=y.iridescence>0,Ee=y.sheen>0,se=y.transmission>0,pe=W&&!!y.anisotropyMap,We=Q&&!!y.clearcoatMap,re=Q&&!!y.clearcoatNormalMap,xe=Q&&!!y.clearcoatRoughnessMap,Se=Z&&!!y.iridescenceMap,Ne=Z&&!!y.iridescenceThicknessMap,ve=Ee&&!!y.sheenColorMap,qe=Ee&&!!y.sheenRoughnessMap,ze=!!y.specularMap,lt=!!y.specularColorMap,N=!!y.specularIntensityMap,ne=se&&!!y.transmissionMap,$=se&&!!y.thicknessMap,J=!!y.gradientMap,ce=!!y.alphaMap,fe=y.alphaTest>0,je=!!y.alphaHash,yt=!!y.extensions;let Lt=Ls;y.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Lt=n.toneMapping);const tt={shaderID:P,shaderType:y.type,shaderName:y.name,vertexShader:j,fragmentShader:ee,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Ye,batchingColor:Ye&&X._colorsTexture!==null,instancing:we,instancingColor:we&&X.instanceColor!==null,instancingMorph:we&&X.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Re===null?n.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Jr,alphaToCoverage:!!y.alphaToCoverage,map:Xe,matcap:Ge,envMap:L,envMapMode:L&&I.mapping,envMapCubeUVHeight:K,aoMap:at,lightMap:ke,bumpMap:He,normalMap:z,displacementMap:h&&Qe,emissiveMap:Ie,normalMapObjectSpace:z&&y.normalMapType===aA,normalMapTangentSpace:z&&y.normalMapType===xg,metalnessMap:b,roughnessMap:E,anisotropy:W,anisotropyMap:pe,clearcoat:Q,clearcoatMap:We,clearcoatNormalMap:re,clearcoatRoughnessMap:xe,dispersion:ie,iridescence:Z,iridescenceMap:Se,iridescenceThicknessMap:Ne,sheen:Ee,sheenColorMap:ve,sheenRoughnessMap:qe,specularMap:ze,specularColorMap:lt,specularIntensityMap:N,transmission:se,transmissionMap:ne,thicknessMap:$,gradientMap:J,opaque:y.transparent===!1&&y.blending===La&&y.alphaToCoverage===!1,alphaMap:ce,alphaTest:fe,alphaHash:je,combine:y.combine,mapUv:Xe&&m(y.map.channel),aoMapUv:at&&m(y.aoMap.channel),lightMapUv:ke&&m(y.lightMap.channel),bumpMapUv:He&&m(y.bumpMap.channel),normalMapUv:z&&m(y.normalMap.channel),displacementMapUv:Qe&&m(y.displacementMap.channel),emissiveMapUv:Ie&&m(y.emissiveMap.channel),metalnessMapUv:b&&m(y.metalnessMap.channel),roughnessMapUv:E&&m(y.roughnessMap.channel),anisotropyMapUv:pe&&m(y.anisotropyMap.channel),clearcoatMapUv:We&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:qe&&m(y.sheenRoughnessMap.channel),specularMapUv:ze&&m(y.specularMap.channel),specularColorMapUv:lt&&m(y.specularColorMap.channel),specularIntensityMapUv:N&&m(y.specularIntensityMap.channel),transmissionMapUv:ne&&m(y.transmissionMap.channel),thicknessMapUv:$&&m(y.thicknessMap.channel),alphaMapUv:ce&&m(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(z||W),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!B.attributes.uv&&(Xe||ce),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Be,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Xe&&y.map.isVideoTexture===!0&&_t.getTransfer(y.map.colorSpace)===Rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Nr,flipSided:y.side===ni,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:yt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&y.extensions.multiDraw===!0||Ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return tt.vertexUv1s=u.has(1),tt.vertexUv2s=u.has(2),tt.vertexUv3s=u.has(3),u.clear(),tt}function v(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)T.push(U),T.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(x(T,y),S(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function x(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function S(y,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),y.push(a.mask)}function C(y){const T=_[y.type];let U;if(T){const k=dr[T];U=OA.clone(k.uniforms)}else U=y.uniforms;return U}function w(y,T){let U;for(let k=0,X=c.length;k<X;k++){const q=c[k];if(q.cacheKey===T){U=q,++U.usedTimes;break}}return U===void 0&&(U=new Kb(n,T,y,s),c.push(U)),U}function M(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:C,acquireProgram:w,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:D}}function t2(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function n2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $v(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,g,_,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function a(d,f,h,g,_,m){const p=o(d,f,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(d,f,h,g,_,m){const p=o(d,f,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function u(d,f){t.length>1&&t.sort(d||n2),i.length>1&&i.sort(f||jv),r.length>1&&r.sort(f||jv)}function c(){for(let d=e,f=n.length;d<f;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function i2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new $v,n.set(i,[o])):r>=s.length?(o=new $v,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function r2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new et};break;case"SpotLight":t={position:new V,direction:new V,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function s2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let o2=0;function a2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function l2(n){const e=new r2,t=s2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new V);const r=new V,s=new Nt,o=new Nt;function a(u){let c=0,d=0,f=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,v=0,x=0,S=0,C=0,w=0,M=0;u.sort(a2);for(let D=0,y=u.length;D<y;D++){const T=u[D],U=T.color,k=T.intensity,X=T.distance,q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)c+=U.r*k,d+=U.g*k,f+=U.b*k;else if(T.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(T.sh.coefficients[B],k);M++}else if(T.isDirectionalLight){const B=e.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Y=T.shadow,I=t.get(T);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,i.directionalShadow[h]=I,i.directionalShadowMap[h]=q,i.directionalShadowMatrix[h]=T.shadow.matrix,v++}i.directional[h]=B,h++}else if(T.isSpotLight){const B=e.get(T);B.position.setFromMatrixPosition(T.matrixWorld),B.color.copy(U).multiplyScalar(k),B.distance=X,B.coneCos=Math.cos(T.angle),B.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),B.decay=T.decay,i.spot[_]=B;const Y=T.shadow;if(T.map&&(i.spotLightMap[C]=T.map,C++,Y.updateMatrices(T),T.castShadow&&w++),i.spotLightMatrix[_]=Y.matrix,T.castShadow){const I=t.get(T);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,i.spotShadow[_]=I,i.spotShadowMap[_]=q,S++}_++}else if(T.isRectAreaLight){const B=e.get(T);B.color.copy(U).multiplyScalar(k),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=B,m++}else if(T.isPointLight){const B=e.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),B.distance=T.distance,B.decay=T.decay,T.castShadow){const Y=T.shadow,I=t.get(T);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,I.shadowCameraNear=Y.camera.near,I.shadowCameraFar=Y.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=T.shadow.matrix,x++}i.point[g]=B,g++}else if(T.isHemisphereLight){const B=e.get(T);B.skyColor.copy(T.color).multiplyScalar(k),B.groundColor.copy(T.groundColor).multiplyScalar(k),i.hemi[p]=B,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==h||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==S||R.numSpotMaps!==C||R.numLightProbes!==M)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=M,R.directionalLength=h,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=S,R.numSpotMaps=C,R.numLightProbes=M,i.version=o2++)}function l(u,c){let d=0,f=0,h=0,g=0,_=0;const m=c.matrixWorldInverse;for(let p=0,v=u.length;p<v;p++){const x=u[p];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(x.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Kv(n){const e=new l2(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function u2(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Kv(n),e.set(r,[a])):s>=o.length?(a=new Kv(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class c2 extends Bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class f2 extends Bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const d2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function p2(n,e,t){let i=new Sg;const r=new dt,s=new dt,o=new Gt,a=new c2({depthPacking:oA}),l=new f2,u={},c=t.maxTextureSize,d={[Os]:ni,[ni]:Os,[Nr]:Nr},f=new $r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:d2,fragmentShader:h2}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Tr;g.setAttribute("position",new xr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new vn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=QS;let p=this.type;this.render=function(w,M,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const D=n.getRenderTarget(),y=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),U=n.state;U.setBlending(bs),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=p!==br&&this.type===br,X=p===br&&this.type!==br;for(let q=0,B=w.length;q<B;q++){const Y=w[q],I=Y.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const K=I.getFrameExtents();if(r.multiply(K),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/K.x),r.x=s.x*K.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/K.y),r.y=s.y*K.y,I.mapSize.y=s.y)),I.map===null||k===!0||X===!0){const te=this.type!==br?{minFilter:Ni,magFilter:Ni}:{};I.map!==null&&I.map.dispose(),I.map=new Do(r.x,r.y,te),I.map.texture.name=Y.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const P=I.getViewportCount();for(let te=0;te<P;te++){const ye=I.getViewport(te);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),U.viewport(o),I.updateMatrices(Y,te),i=I.getFrustum(),S(M,R,I.camera,Y,this.type)}I.isPointLightShadow!==!0&&this.type===br&&v(I,R),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(D,y,T)};function v(w,M){const R=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Do(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(M,null,R,f,_,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(M,null,R,h,_,null)}function x(w,M,R,D){let y=null;const T=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)y=T;else if(y=R.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const U=y.uuid,k=M.uuid;let X=u[U];X===void 0&&(X={},u[U]=X);let q=X[k];q===void 0&&(q=y.clone(),X[k]=q,M.addEventListener("dispose",C)),y=q}if(y.visible=M.visible,y.wireframe=M.wireframe,D===br?y.side=M.shadowSide!==null?M.shadowSide:M.side:y.side=M.shadowSide!==null?M.shadowSide:d[M.side],y.alphaMap=M.alphaMap,y.alphaTest=M.alphaTest,y.map=M.map,y.clipShadows=M.clipShadows,y.clippingPlanes=M.clippingPlanes,y.clipIntersection=M.clipIntersection,y.displacementMap=M.displacementMap,y.displacementScale=M.displacementScale,y.displacementBias=M.displacementBias,y.wireframeLinewidth=M.wireframeLinewidth,y.linewidth=M.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=n.properties.get(y);U.light=R}return y}function S(w,M,R,D,y){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===br)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const k=e.update(w),X=w.material;if(Array.isArray(X)){const q=k.groups;for(let B=0,Y=q.length;B<Y;B++){const I=q[B],K=X[I.materialIndex];if(K&&K.visible){const P=x(w,K,D,y);w.onBeforeShadow(n,w,M,R,k,P,I),n.renderBufferDirect(R,null,k,P,w,I),w.onAfterShadow(n,w,M,R,k,P,I)}}}else if(X.visible){const q=x(w,X,D,y);w.onBeforeShadow(n,w,M,R,k,q,null),n.renderBufferDirect(R,null,k,q,w,null),w.onAfterShadow(n,w,M,R,k,q,null)}}const U=w.children;for(let k=0,X=U.length;k<X;k++)S(U[k],M,R,D,y)}function C(w){w.target.removeEventListener("dispose",C);for(const R in u){const D=u[R],y=w.target.uuid;y in D&&(D[y].dispose(),delete D[y])}}}const m2={[am]:lm,[um]:dm,[cm]:hm,[ja]:fm,[lm]:am,[dm]:um,[hm]:cm,[fm]:ja};function _2(n){function e(){let N=!1;const ne=new Gt;let $=null;const J=new Gt(0,0,0,0);return{setMask:function(ce){$!==ce&&!N&&(n.colorMask(ce,ce,ce,ce),$=ce)},setLocked:function(ce){N=ce},setClear:function(ce,fe,je,yt,Lt){Lt===!0&&(ce*=yt,fe*=yt,je*=yt),ne.set(ce,fe,je,yt),J.equals(ne)===!1&&(n.clearColor(ce,fe,je,yt),J.copy(ne))},reset:function(){N=!1,$=null,J.set(-1,0,0,0)}}}function t(){let N=!1,ne=!1,$=null,J=null,ce=null;return{setReversed:function(fe){ne=fe},setTest:function(fe){fe?ue(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(fe){$!==fe&&!N&&(n.depthMask(fe),$=fe)},setFunc:function(fe){if(ne&&(fe=m2[fe]),J!==fe){switch(fe){case am:n.depthFunc(n.NEVER);break;case lm:n.depthFunc(n.ALWAYS);break;case um:n.depthFunc(n.LESS);break;case ja:n.depthFunc(n.LEQUAL);break;case cm:n.depthFunc(n.EQUAL);break;case fm:n.depthFunc(n.GEQUAL);break;case dm:n.depthFunc(n.GREATER);break;case hm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=fe}},setLocked:function(fe){N=fe},setClear:function(fe){ce!==fe&&(n.clearDepth(fe),ce=fe)},reset:function(){N=!1,$=null,J=null,ce=null}}}function i(){let N=!1,ne=null,$=null,J=null,ce=null,fe=null,je=null,yt=null,Lt=null;return{setTest:function(tt){N||(tt?ue(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(tt){ne!==tt&&!N&&(n.stencilMask(tt),ne=tt)},setFunc:function(tt,be,Ae){($!==tt||J!==be||ce!==Ae)&&(n.stencilFunc(tt,be,Ae),$=tt,J=be,ce=Ae)},setOp:function(tt,be,Ae){(fe!==tt||je!==be||yt!==Ae)&&(n.stencilOp(tt,be,Ae),fe=tt,je=be,yt=Ae)},setLocked:function(tt){N=tt},setClear:function(tt){Lt!==tt&&(n.clearStencil(tt),Lt=tt)},reset:function(){N=!1,ne=null,$=null,J=null,ce=null,fe=null,je=null,yt=null,Lt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},d=new WeakMap,f=[],h=null,g=!1,_=null,m=null,p=null,v=null,x=null,S=null,C=null,w=new et(0,0,0),M=0,R=!1,D=null,y=null,T=null,U=null,k=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,B=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=B>=1):Y.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=B>=2);let I=null,K={};const P=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),ye=new Gt().fromArray(P),Be=new Gt().fromArray(te);function j(N,ne,$,J){const ce=new Uint8Array(4),fe=n.createTexture();n.bindTexture(N,fe),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<$;je++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(ne+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return fe}const ee={};ee[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(n.DEPTH_TEST),s.setFunc(ja),ke(!1),He(sv),ue(n.CULL_FACE),L(bs);function ue(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function le(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Re(N,ne){return c[N]!==ne?(n.bindFramebuffer(N,ne),c[N]=ne,N===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=ne),N===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function we(N,ne){let $=f,J=!1;if(N){$=d.get(ne),$===void 0&&($=[],d.set(ne,$));const ce=N.textures;if($.length!==ce.length||$[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,je=ce.length;fe<je;fe++)$[fe]=n.COLOR_ATTACHMENT0+fe;$.length=ce.length,J=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,J=!0);J&&n.drawBuffers($)}function Ye(N){return h!==N?(n.useProgram(N),h=N,!0):!1}const Xe={[oo]:n.FUNC_ADD,[Iw]:n.FUNC_SUBTRACT,[Uw]:n.FUNC_REVERSE_SUBTRACT};Xe[Nw]=n.MIN,Xe[Fw]=n.MAX;const Ge={[Ow]:n.ZERO,[kw]:n.ONE,[zw]:n.SRC_COLOR,[sm]:n.SRC_ALPHA,[Xw]:n.SRC_ALPHA_SATURATE,[Gw]:n.DST_COLOR,[Hw]:n.DST_ALPHA,[Bw]:n.ONE_MINUS_SRC_COLOR,[om]:n.ONE_MINUS_SRC_ALPHA,[Ww]:n.ONE_MINUS_DST_COLOR,[Vw]:n.ONE_MINUS_DST_ALPHA,[Yw]:n.CONSTANT_COLOR,[qw]:n.ONE_MINUS_CONSTANT_COLOR,[jw]:n.CONSTANT_ALPHA,[$w]:n.ONE_MINUS_CONSTANT_ALPHA};function L(N,ne,$,J,ce,fe,je,yt,Lt,tt){if(N===bs){g===!0&&(le(n.BLEND),g=!1);return}if(g===!1&&(ue(n.BLEND),g=!0),N!==Dw){if(N!==_||tt!==R){if((m!==oo||x!==oo)&&(n.blendEquation(n.FUNC_ADD),m=oo,x=oo),tt)switch(N){case La:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ru:n.blendFunc(n.ONE,n.ONE);break;case ov:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case av:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case La:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ru:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ov:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case av:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}p=null,v=null,S=null,C=null,w.set(0,0,0),M=0,_=N,R=tt}return}ce=ce||ne,fe=fe||$,je=je||J,(ne!==m||ce!==x)&&(n.blendEquationSeparate(Xe[ne],Xe[ce]),m=ne,x=ce),($!==p||J!==v||fe!==S||je!==C)&&(n.blendFuncSeparate(Ge[$],Ge[J],Ge[fe],Ge[je]),p=$,v=J,S=fe,C=je),(yt.equals(w)===!1||Lt!==M)&&(n.blendColor(yt.r,yt.g,yt.b,Lt),w.copy(yt),M=Lt),_=N,R=!1}function at(N,ne){N.side===Nr?le(n.CULL_FACE):ue(n.CULL_FACE);let $=N.side===ni;ne&&($=!$),ke($),N.blending===La&&N.transparent===!1?L(bs):L(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const J=N.stencilWrite;o.setTest(J),J&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Qe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(N){D!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),D=N)}function He(N){N!==Pw?(ue(n.CULL_FACE),N!==y&&(N===sv?n.cullFace(n.BACK):N===bw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),y=N}function z(N){N!==T&&(q&&n.lineWidth(N),T=N)}function Qe(N,ne,$){N?(ue(n.POLYGON_OFFSET_FILL),(U!==ne||k!==$)&&(n.polygonOffset(ne,$),U=ne,k=$)):le(n.POLYGON_OFFSET_FILL)}function Ie(N){N?ue(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function b(N){N===void 0&&(N=n.TEXTURE0+X-1),I!==N&&(n.activeTexture(N),I=N)}function E(N,ne,$){$===void 0&&(I===null?$=n.TEXTURE0+X-1:$=I);let J=K[$];J===void 0&&(J={type:void 0,texture:void 0},K[$]=J),(J.type!==N||J.texture!==ne)&&(I!==$&&(n.activeTexture($),I=$),n.bindTexture(N,ne||ee[N]),J.type=N,J.texture=ne)}function W(){const N=K[I];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function We(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(N){ye.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ye.copy(N))}function ve(N){Be.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Be.copy(N))}function qe(N,ne){let $=l.get(ne);$===void 0&&($=new WeakMap,l.set(ne,$));let J=$.get(N);J===void 0&&(J=n.getUniformBlockIndex(ne,N.name),$.set(N,J))}function ze(N,ne){const J=l.get(ne).get(N);a.get(ne)!==J&&(n.uniformBlockBinding(ne,J,N.__bindingPointIndex),a.set(ne,J))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},I=null,K={},c={},d=new WeakMap,f=[],h=null,g=!1,_=null,m=null,p=null,v=null,x=null,S=null,C=null,w=new et(0,0,0),M=0,R=!1,D=null,y=null,T=null,U=null,k=null,ye.set(0,0,n.canvas.width,n.canvas.height),Be.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:le,bindFramebuffer:Re,drawBuffers:we,useProgram:Ye,setBlending:L,setMaterial:at,setFlipSided:ke,setCullFace:He,setLineWidth:z,setPolygonOffset:Qe,setScissorTest:Ie,activeTexture:b,bindTexture:E,unbindTexture:W,compressedTexImage2D:Q,compressedTexImage3D:ie,texImage2D:xe,texImage3D:Se,updateUBOMapping:qe,uniformBlockBinding:ze,texStorage2D:We,texStorage3D:re,texSubImage2D:Z,texSubImage3D:Ee,compressedTexSubImage2D:se,compressedTexSubImage3D:pe,scissor:Ne,viewport:ve,reset:lt}}function Zv(n,e,t,i){const r=g2(i);switch(t){case rM:return n*e;case oM:return n*e;case aM:return n*e*2;case lM:return n*e/r.components*r.byteLength;case _g:return n*e/r.components*r.byteLength;case uM:return n*e*2/r.components*r.byteLength;case gg:return n*e*2/r.components*r.byteLength;case sM:return n*e*3/r.components*r.byteLength;case tr:return n*e*4/r.components*r.byteLength;case vg:return n*e*4/r.components*r.byteLength;case df:case hf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pf:case mf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xm:case Sm:return Math.max(n,16)*Math.max(e,8)/4;case vm:case ym:return Math.max(n,8)*Math.max(e,8)/2;case Mm:case Em:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Tm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Am:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Cm:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Rm:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Pm:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case bm:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Lm:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Dm:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Im:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Um:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Nm:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Fm:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Om:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case km:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case _f:case zm:case Bm:return Math.ceil(n/4)*Math.ceil(e/4)*16;case cM:case Hm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Vm:case Gm:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function g2(n){switch(n){case jr:case tM:return{byteLength:1,components:1};case Pu:case nM:case Yu:return{byteLength:2,components:1};case pg:case mg:return{byteLength:2,components:4};case Lo:case hg:case zr:return{byteLength:4,components:1};case iM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function v2(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new dt,c=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,E){return h?new OffscreenCanvas(b,E):bu("canvas")}function _(b,E,W){let Q=1;const ie=Ie(b);if((ie.width>W||ie.height>W)&&(Q=W/Math.max(ie.width,ie.height)),Q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor(Q*ie.width),Ee=Math.floor(Q*ie.height);d===void 0&&(d=g(Z,Ee));const se=E?g(Z,Ee):d;return se.width=Z,se.height=Ee,se.getContext("2d").drawImage(b,0,0,Z,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Z+"x"+Ee+")."),se}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==Ni&&b.minFilter!==Ji}function p(b){n.generateMipmap(b)}function v(b,E,W,Q,ie=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=E;if(E===n.RED&&(W===n.FLOAT&&(Z=n.R32F),W===n.HALF_FLOAT&&(Z=n.R16F),W===n.UNSIGNED_BYTE&&(Z=n.R8)),E===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(Z=n.R8UI),W===n.UNSIGNED_SHORT&&(Z=n.R16UI),W===n.UNSIGNED_INT&&(Z=n.R32UI),W===n.BYTE&&(Z=n.R8I),W===n.SHORT&&(Z=n.R16I),W===n.INT&&(Z=n.R32I)),E===n.RG&&(W===n.FLOAT&&(Z=n.RG32F),W===n.HALF_FLOAT&&(Z=n.RG16F),W===n.UNSIGNED_BYTE&&(Z=n.RG8)),E===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(Z=n.RG8UI),W===n.UNSIGNED_SHORT&&(Z=n.RG16UI),W===n.UNSIGNED_INT&&(Z=n.RG32UI),W===n.BYTE&&(Z=n.RG8I),W===n.SHORT&&(Z=n.RG16I),W===n.INT&&(Z=n.RG32I)),E===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),W===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),W===n.UNSIGNED_INT&&(Z=n.RGB32UI),W===n.BYTE&&(Z=n.RGB8I),W===n.SHORT&&(Z=n.RGB16I),W===n.INT&&(Z=n.RGB32I)),E===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),W===n.UNSIGNED_INT&&(Z=n.RGBA32UI),W===n.BYTE&&(Z=n.RGBA8I),W===n.SHORT&&(Z=n.RGBA16I),W===n.INT&&(Z=n.RGBA32I)),E===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),E===n.RGBA){const Ee=ie?Qf:_t.getTransfer(Q);W===n.FLOAT&&(Z=n.RGBA32F),W===n.HALF_FLOAT&&(Z=n.RGBA16F),W===n.UNSIGNED_BYTE&&(Z=Ee===Rt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(b,E){let W;return b?E===null||E===Lo||E===Za?W=n.DEPTH24_STENCIL8:E===zr?W=n.DEPTH32F_STENCIL8:E===Pu&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Lo||E===Za?W=n.DEPTH_COMPONENT24:E===zr?W=n.DEPTH_COMPONENT32F:E===Pu&&(W=n.DEPTH_COMPONENT16),W}function S(b,E){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ni&&b.minFilter!==Ji?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function C(b){const E=b.target;E.removeEventListener("dispose",C),M(E),E.isVideoTexture&&c.delete(E)}function w(b){const E=b.target;E.removeEventListener("dispose",w),D(E)}function M(b){const E=i.get(b);if(E.__webglInit===void 0)return;const W=b.source,Q=f.get(W);if(Q){const ie=Q[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&R(b),Object.keys(Q).length===0&&f.delete(W)}i.remove(b)}function R(b){const E=i.get(b);n.deleteTexture(E.__webglTexture);const W=b.source,Q=f.get(W);delete Q[E.__cacheKey],o.memory.textures--}function D(b){const E=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let ie=0;ie<E.__webglFramebuffer[Q].length;ie++)n.deleteFramebuffer(E.__webglFramebuffer[Q][ie]);else n.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)n.deleteFramebuffer(E.__webglFramebuffer[Q]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=b.textures;for(let Q=0,ie=W.length;Q<ie;Q++){const Z=i.get(W[Q]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(W[Q])}i.remove(b)}let y=0;function T(){y=0}function U(){const b=y;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),y+=1,b}function k(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function X(b,E){const W=i.get(b);if(b.isVideoTexture&&z(b),b.isRenderTargetTexture===!1&&b.version>0&&W.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(W,b,E);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+E)}function q(b,E){const W=i.get(b);if(b.version>0&&W.__version!==b.version){Be(W,b,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+E)}function B(b,E){const W=i.get(b);if(b.version>0&&W.__version!==b.version){Be(W,b,E);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+E)}function Y(b,E){const W=i.get(b);if(b.version>0&&W.__version!==b.version){j(W,b,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+E)}const I={[_m]:n.REPEAT,[ho]:n.CLAMP_TO_EDGE,[gm]:n.MIRRORED_REPEAT},K={[Ni]:n.NEAREST,[rA]:n.NEAREST_MIPMAP_NEAREST,[mc]:n.NEAREST_MIPMAP_LINEAR,[Ji]:n.LINEAR,[_h]:n.LINEAR_MIPMAP_NEAREST,[po]:n.LINEAR_MIPMAP_LINEAR},P={[lA]:n.NEVER,[pA]:n.ALWAYS,[uA]:n.LESS,[fM]:n.LEQUAL,[cA]:n.EQUAL,[hA]:n.GEQUAL,[fA]:n.GREATER,[dA]:n.NOTEQUAL};function te(b,E){if(E.type===zr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ji||E.magFilter===_h||E.magFilter===mc||E.magFilter===po||E.minFilter===Ji||E.minFilter===_h||E.minFilter===mc||E.minFilter===po)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,I[E.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,I[E.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,I[E.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,K[E.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,K[E.minFilter]),E.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ni||E.minFilter!==mc&&E.minFilter!==po||E.type===zr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ye(b,E){let W=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",C));const Q=E.source;let ie=f.get(Q);ie===void 0&&(ie={},f.set(Q,ie));const Z=k(E);if(Z!==b.__cacheKey){ie[Z]===void 0&&(ie[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ie[Z].usedTimes++;const Ee=ie[b.__cacheKey];Ee!==void 0&&(ie[b.__cacheKey].usedTimes--,Ee.usedTimes===0&&R(E)),b.__cacheKey=Z,b.__webglTexture=ie[Z].texture}return W}function Be(b,E,W){let Q=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=n.TEXTURE_3D);const ie=ye(b,E),Z=E.source;t.bindTexture(Q,b.__webglTexture,n.TEXTURE0+W);const Ee=i.get(Z);if(Z.version!==Ee.__version||ie===!0){t.activeTexture(n.TEXTURE0+W);const se=_t.getPrimaries(_t.workingColorSpace),pe=E.colorSpace===hs?null:_t.getPrimaries(E.colorSpace),We=E.colorSpace===hs||se===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let re=_(E.image,!1,r.maxTextureSize);re=Qe(E,re);const xe=s.convert(E.format,E.colorSpace),Se=s.convert(E.type);let Ne=v(E.internalFormat,xe,Se,E.colorSpace,E.isVideoTexture);te(Q,E);let ve;const qe=E.mipmaps,ze=E.isVideoTexture!==!0,lt=Ee.__version===void 0||ie===!0,N=Z.dataReady,ne=S(E,re);if(E.isDepthTexture)Ne=x(E.format===Qa,E.type),lt&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Ne,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Ne,re.width,re.height,0,xe,Se,null));else if(E.isDataTexture)if(qe.length>0){ze&&lt&&t.texStorage2D(n.TEXTURE_2D,ne,Ne,qe[0].width,qe[0].height);for(let $=0,J=qe.length;$<J;$++)ve=qe[$],ze?N&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,ve.width,ve.height,xe,Se,ve.data):t.texImage2D(n.TEXTURE_2D,$,Ne,ve.width,ve.height,0,xe,Se,ve.data);E.generateMipmaps=!1}else ze?(lt&&t.texStorage2D(n.TEXTURE_2D,ne,Ne,re.width,re.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,xe,Se,re.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,re.width,re.height,0,xe,Se,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ze&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,Ne,qe[0].width,qe[0].height,re.depth);for(let $=0,J=qe.length;$<J;$++)if(ve=qe[$],E.format!==tr)if(xe!==null)if(ze){if(N)if(E.layerUpdates.size>0){const ce=Zv(ve.width,ve.height,E.format,E.type);for(const fe of E.layerUpdates){const je=ve.data.subarray(fe*ce/ve.data.BYTES_PER_ELEMENT,(fe+1)*ce/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,fe,ve.width,ve.height,1,xe,je,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,ve.width,ve.height,re.depth,xe,ve.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Ne,ve.width,ve.height,re.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,ve.width,ve.height,re.depth,xe,Se,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,Ne,ve.width,ve.height,re.depth,0,xe,Se,ve.data)}else{ze&&lt&&t.texStorage2D(n.TEXTURE_2D,ne,Ne,qe[0].width,qe[0].height);for(let $=0,J=qe.length;$<J;$++)ve=qe[$],E.format!==tr?xe!==null?ze?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,ve.width,ve.height,xe,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,$,Ne,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?N&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,ve.width,ve.height,xe,Se,ve.data):t.texImage2D(n.TEXTURE_2D,$,Ne,ve.width,ve.height,0,xe,Se,ve.data)}else if(E.isDataArrayTexture)if(ze){if(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,Ne,re.width,re.height,re.depth),N)if(E.layerUpdates.size>0){const $=Zv(re.width,re.height,E.format,E.type);for(const J of E.layerUpdates){const ce=re.data.subarray(J*$/re.data.BYTES_PER_ELEMENT,(J+1)*$/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,xe,Se,ce)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,xe,Se,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,re.width,re.height,re.depth,0,xe,Se,re.data);else if(E.isData3DTexture)ze?(lt&&t.texStorage3D(n.TEXTURE_3D,ne,Ne,re.width,re.height,re.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,xe,Se,re.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,re.width,re.height,re.depth,0,xe,Se,re.data);else if(E.isFramebufferTexture){if(lt)if(ze)t.texStorage2D(n.TEXTURE_2D,ne,Ne,re.width,re.height);else{let $=re.width,J=re.height;for(let ce=0;ce<ne;ce++)t.texImage2D(n.TEXTURE_2D,ce,Ne,$,J,0,xe,Se,null),$>>=1,J>>=1}}else if(qe.length>0){if(ze&&lt){const $=Ie(qe[0]);t.texStorage2D(n.TEXTURE_2D,ne,Ne,$.width,$.height)}for(let $=0,J=qe.length;$<J;$++)ve=qe[$],ze?N&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,xe,Se,ve):t.texImage2D(n.TEXTURE_2D,$,Ne,xe,Se,ve);E.generateMipmaps=!1}else if(ze){if(lt){const $=Ie(re);t.texStorage2D(n.TEXTURE_2D,ne,Ne,$.width,$.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Se,re)}else t.texImage2D(n.TEXTURE_2D,0,Ne,xe,Se,re);m(E)&&p(Q),Ee.__version=Z.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function j(b,E,W){if(E.image.length!==6)return;const Q=ye(b,E),ie=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+W);const Z=i.get(ie);if(ie.version!==Z.__version||Q===!0){t.activeTexture(n.TEXTURE0+W);const Ee=_t.getPrimaries(_t.workingColorSpace),se=E.colorSpace===hs?null:_t.getPrimaries(E.colorSpace),pe=E.colorSpace===hs||Ee===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const We=E.isCompressedTexture||E.image[0].isCompressedTexture,re=E.image[0]&&E.image[0].isDataTexture,xe=[];for(let J=0;J<6;J++)!We&&!re?xe[J]=_(E.image[J],!0,r.maxCubemapSize):xe[J]=re?E.image[J].image:E.image[J],xe[J]=Qe(E,xe[J]);const Se=xe[0],Ne=s.convert(E.format,E.colorSpace),ve=s.convert(E.type),qe=v(E.internalFormat,Ne,ve,E.colorSpace),ze=E.isVideoTexture!==!0,lt=Z.__version===void 0||Q===!0,N=ie.dataReady;let ne=S(E,Se);te(n.TEXTURE_CUBE_MAP,E);let $;if(We){ze&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,qe,Se.width,Se.height);for(let J=0;J<6;J++){$=xe[J].mipmaps;for(let ce=0;ce<$.length;ce++){const fe=$[ce];E.format!==tr?Ne!==null?ze?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,0,0,fe.width,fe.height,Ne,fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,qe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,0,0,fe.width,fe.height,Ne,ve,fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,qe,fe.width,fe.height,0,Ne,ve,fe.data)}}}else{if($=E.mipmaps,ze&&lt){$.length>0&&ne++;const J=Ie(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,qe,J.width,J.height)}for(let J=0;J<6;J++)if(re){ze?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,xe[J].width,xe[J].height,Ne,ve,xe[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,xe[J].width,xe[J].height,0,Ne,ve,xe[J].data);for(let ce=0;ce<$.length;ce++){const je=$[ce].image[J].image;ze?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,0,0,je.width,je.height,Ne,ve,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,qe,je.width,je.height,0,Ne,ve,je.data)}}else{ze?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ne,ve,xe[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,Ne,ve,xe[J]);for(let ce=0;ce<$.length;ce++){const fe=$[ce];ze?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,0,0,Ne,ve,fe.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,qe,Ne,ve,fe.image[J])}}}m(E)&&p(n.TEXTURE_CUBE_MAP),Z.__version=ie.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function ee(b,E,W,Q,ie,Z){const Ee=s.convert(W.format,W.colorSpace),se=s.convert(W.type),pe=v(W.internalFormat,Ee,se,W.colorSpace);if(!i.get(E).__hasExternalTextures){const re=Math.max(1,E.width>>Z),xe=Math.max(1,E.height>>Z);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,Z,pe,re,xe,E.depth,0,Ee,se,null):t.texImage2D(ie,Z,pe,re,xe,0,Ee,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),He(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ie,i.get(W).__webglTexture,0,ke(E)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ie,i.get(W).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(b,E,W){if(n.bindRenderbuffer(n.RENDERBUFFER,b),E.depthBuffer){const Q=E.depthTexture,ie=Q&&Q.isDepthTexture?Q.type:null,Z=x(E.stencilBuffer,ie),Ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=ke(E);He(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,Z,E.width,E.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,Z,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Z,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,b)}else{const Q=E.textures;for(let ie=0;ie<Q.length;ie++){const Z=Q[ie],Ee=s.convert(Z.format,Z.colorSpace),se=s.convert(Z.type),pe=v(Z.internalFormat,Ee,se,Z.colorSpace),We=ke(E);W&&He(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,We,pe,E.width,E.height):He(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We,pe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,pe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const Q=i.get(E.depthTexture).__webglTexture,ie=ke(E);if(E.depthTexture.format===Da)He(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(E.depthTexture.format===Qa)He(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Re(b){const E=i.get(b),W=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const Q=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",ie)};Q.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=Q}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");le(E.__webglFramebuffer,b)}else if(W){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=n.createRenderbuffer(),ue(E.__webglDepthbuffer[Q],b,!1);else{const ie=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),ue(E.__webglDepthbuffer,b,!1);else{const Q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ie)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(b,E,W){const Q=i.get(b);E!==void 0&&ee(Q.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Re(b)}function Ye(b){const E=b.texture,W=i.get(b),Q=i.get(E);b.addEventListener("dispose",w);const ie=b.textures,Z=b.isWebGLCubeRenderTarget===!0,Ee=ie.length>1;if(Ee||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=E.version,o.memory.textures++),Z){W.__webglFramebuffer=[];for(let se=0;se<6;se++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[se]=[];for(let pe=0;pe<E.mipmaps.length;pe++)W.__webglFramebuffer[se][pe]=n.createFramebuffer()}else W.__webglFramebuffer[se]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let se=0;se<E.mipmaps.length;se++)W.__webglFramebuffer[se]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let se=0,pe=ie.length;se<pe;se++){const We=i.get(ie[se]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&He(b)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let se=0;se<ie.length;se++){const pe=ie[se];W.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[se]);const We=s.convert(pe.format,pe.colorSpace),re=s.convert(pe.type),xe=v(pe.internalFormat,We,re,pe.colorSpace,b.isXRRenderTarget===!0),Se=ke(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,xe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,W.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(W.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),te(n.TEXTURE_CUBE_MAP,E);for(let se=0;se<6;se++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)ee(W.__webglFramebuffer[se][pe],b,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe);else ee(W.__webglFramebuffer[se],b,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(E)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let se=0,pe=ie.length;se<pe;se++){const We=ie[se],re=i.get(We);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),te(n.TEXTURE_2D,We),ee(W.__webglFramebuffer,b,We,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,0),m(We)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(se=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,Q.__webglTexture),te(se,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)ee(W.__webglFramebuffer[pe],b,E,n.COLOR_ATTACHMENT0,se,pe);else ee(W.__webglFramebuffer,b,E,n.COLOR_ATTACHMENT0,se,0);m(E)&&p(se),t.unbindTexture()}b.depthBuffer&&Re(b)}function Xe(b){const E=b.textures;for(let W=0,Q=E.length;W<Q;W++){const ie=E[W];if(m(ie)){const Z=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ee=i.get(ie).__webglTexture;t.bindTexture(Z,Ee),p(Z),t.unbindTexture()}}}const Ge=[],L=[];function at(b){if(b.samples>0){if(He(b)===!1){const E=b.textures,W=b.width,Q=b.height;let ie=n.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(b),se=E.length>1;if(se)for(let pe=0;pe<E.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let pe=0;pe<E.length;pe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[pe]);const We=i.get(E[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,We,0)}n.blitFramebuffer(0,0,W,Q,0,0,W,Q,ie,n.NEAREST),l===!0&&(Ge.length=0,L.length=0,Ge.push(n.COLOR_ATTACHMENT0+pe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ge.push(Z),L.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let pe=0;pe<E.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[pe]);const We=i.get(E[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const E=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function ke(b){return Math.min(r.maxSamples,b.samples)}function He(b){const E=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function z(b){const E=o.render.frame;c.get(b)!==E&&(c.set(b,E),b.update())}function Qe(b,E){const W=b.colorSpace,Q=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||W!==Jr&&W!==hs&&(_t.getTransfer(W)===Rt?(Q!==tr||ie!==jr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function Ie(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=U,this.resetTextureUnits=T,this.setTexture2D=X,this.setTexture2DArray=q,this.setTexture3D=B,this.setTextureCube=Y,this.rebindTextures=we,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=He}function x2(n,e){function t(i,r=hs){let s;const o=_t.getTransfer(r);if(i===jr)return n.UNSIGNED_BYTE;if(i===pg)return n.UNSIGNED_SHORT_4_4_4_4;if(i===mg)return n.UNSIGNED_SHORT_5_5_5_1;if(i===iM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===tM)return n.BYTE;if(i===nM)return n.SHORT;if(i===Pu)return n.UNSIGNED_SHORT;if(i===hg)return n.INT;if(i===Lo)return n.UNSIGNED_INT;if(i===zr)return n.FLOAT;if(i===Yu)return n.HALF_FLOAT;if(i===rM)return n.ALPHA;if(i===sM)return n.RGB;if(i===tr)return n.RGBA;if(i===oM)return n.LUMINANCE;if(i===aM)return n.LUMINANCE_ALPHA;if(i===Da)return n.DEPTH_COMPONENT;if(i===Qa)return n.DEPTH_STENCIL;if(i===lM)return n.RED;if(i===_g)return n.RED_INTEGER;if(i===uM)return n.RG;if(i===gg)return n.RG_INTEGER;if(i===vg)return n.RGBA_INTEGER;if(i===df||i===hf||i===pf||i===mf)if(o===Rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===df)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===df)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vm||i===xm||i===ym||i===Sm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===vm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ym)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mm||i===Em||i===Tm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Mm||i===Em)return o===Rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Tm)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wm||i===Am||i===Cm||i===Rm||i===Pm||i===bm||i===Lm||i===Dm||i===Im||i===Um||i===Nm||i===Fm||i===Om||i===km)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wm)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Am)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cm)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rm)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pm)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bm)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lm)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dm)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Im)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Um)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nm)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fm)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Om)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===km)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_f||i===zm||i===Bm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===_f)return o===Rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zm)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bm)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cM||i===Hm||i===Vm||i===Gm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_f)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Hm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Za?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class y2 extends Li{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _s extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S2={type:"move"};class Yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(u,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),h=.02,g=.005;u.inputState.pinching&&f>h+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=h-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(S2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _s;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const M2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class T2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Yn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new $r({vertexShader:M2,fragmentShader:E2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vn(new Nd(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w2 extends cl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,h=null,g=null;const _=new T2,m=t.getContextAttributes();let p=null,v=null;const x=[],S=[],C=new dt;let w=null;const M=new Li;M.layers.enable(1),M.viewport=new Gt;const R=new Li;R.layers.enable(2),R.viewport=new Gt;const D=[M,R],y=new y2;y.layers.enable(1),y.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=x[j];return ee===void 0&&(ee=new Yh,x[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=x[j];return ee===void 0&&(ee=new Yh,x[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=x[j];return ee===void 0&&(ee=new Yh,x[j]=ee),ee.getHandSpace()};function k(j){const ee=S.indexOf(j.inputSource);if(ee===-1)return;const ue=x[ee];ue!==void 0&&(ue.update(j.inputSource,j.frame,u||o),ue.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",q);for(let j=0;j<x.length;j++){const ee=S[j];ee!==null&&(S[j]=null,x[j].disconnect(ee))}T=null,U=null,_.reset(),e.setRenderTarget(p),h=null,f=null,d=null,r=null,v=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",X),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Do(h.framebufferWidth,h.framebufferHeight,{format:tr,type:jr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,ue=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?Qa:Da,ue=m.stencil?Za:Lo);const Re={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Do(f.textureWidth,f.textureHeight,{format:tr,type:jr,depthTexture:new wM(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(j){for(let ee=0;ee<j.removed.length;ee++){const ue=j.removed[ee],le=S.indexOf(ue);le>=0&&(S[le]=null,x[le].disconnect(ue))}for(let ee=0;ee<j.added.length;ee++){const ue=j.added[ee];let le=S.indexOf(ue);if(le===-1){for(let we=0;we<x.length;we++)if(we>=S.length){S.push(ue),le=we;break}else if(S[we]===null){S[we]=ue,le=we;break}if(le===-1)break}const Re=x[le];Re&&Re.connect(ue)}}const B=new V,Y=new V;function I(j,ee,ue){B.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(ue.matrixWorld);const le=B.distanceTo(Y),Re=ee.projectionMatrix.elements,we=ue.projectionMatrix.elements,Ye=Re[14]/(Re[10]-1),Xe=Re[14]/(Re[10]+1),Ge=(Re[9]+1)/Re[5],L=(Re[9]-1)/Re[5],at=(Re[8]-1)/Re[0],ke=(we[8]+1)/we[0],He=Ye*at,z=Ye*ke,Qe=le/(-at+ke),Ie=Qe*-at;if(ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ie),j.translateZ(Qe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Re[10]===-1)j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const b=Ye+Qe,E=Xe+Qe,W=He-Ie,Q=z+(le-Ie),ie=Ge*Xe/E*b,Z=L*Xe/E*b;j.projectionMatrix.makePerspective(W,Q,ie,Z,b,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function K(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ee=j.near,ue=j.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(ue=_.depthFar)),y.near=R.near=M.near=ee,y.far=R.far=M.far=ue,(T!==y.near||U!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,U=y.far);const le=j.parent,Re=y.cameras;K(y,le);for(let we=0;we<Re.length;we++)K(Re[we],le);Re.length===2?I(y,M,R):y.projectionMatrix.copy(M.projectionMatrix),P(j,y,le)};function P(j,ee,ue){ue===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(ue.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Wm*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let te=null;function ye(j,ee){if(c=ee.getViewerPose(u||o),g=ee,c!==null){const ue=c.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let le=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let we=0;we<ue.length;we++){const Ye=ue[we];let Xe=null;if(h!==null)Xe=h.getViewport(Ye);else{const L=d.getViewSubImage(f,Ye);Xe=L.viewport,we===0&&(e.setRenderTargetTextures(v,L.colorTexture,f.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(v))}let Ge=D[we];Ge===void 0&&(Ge=new Li,Ge.layers.enable(we),Ge.viewport=new Gt,D[we]=Ge),Ge.matrix.fromArray(Ye.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ye.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),we===0&&(y.matrix.copy(Ge.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push(Ge)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const we=d.getDepthInformation(ue[0]);we&&we.isValid&&we.texture&&_.init(e,we,r.renderState)}}for(let ue=0;ue<x.length;ue++){const le=S[ue],Re=x[ue];le!==null&&Re!==void 0&&Re.update(le,ee,u||o)}te&&te(j,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Be=new EM;Be.setAnimationLoop(ye),this.setAnimationLoop=function(j){te=j},this.dispose=function(){}}}const Ks=new or,A2=new Nt;function C2(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,yM(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,v,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ni&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ni&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,S=v.envMapRotation;x&&(m.envMap.value=x,Ks.copy(S),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),m.envMapRotation.value.setFromMatrix4(A2.makeRotationFromEuler(Ks)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ni&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function R2(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function u(v,x){let S=r[v.id];S===void 0&&(g(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(v,C);const w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function c(v){const x=d();v.__bindingPointIndex=x;const S=n.createBuffer(),C=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],S=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,M=S.length;w<M;w++){const R=Array.isArray(S[w])?S[w]:[S[w]];for(let D=0,y=R.length;D<y;D++){const T=R[D];if(h(T,w,D,C)===!0){const U=T.__offset,k=Array.isArray(T.value)?T.value:[T.value];let X=0;for(let q=0;q<k.length;q++){const B=k[q],Y=_(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,U+X,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):(B.toArray(T.__data,X),X+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,x,S,C){const w=v.value,M=x+"_"+S;if(C[M]===void 0)return typeof w=="number"||typeof w=="boolean"?C[M]=w:C[M]=w.clone(),!0;{const R=C[M];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return C[M]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(v){const x=v.uniforms;let S=0;const C=16;for(let M=0,R=x.length;M<R;M++){const D=Array.isArray(x[M])?x[M]:[x[M]];for(let y=0,T=D.length;y<T;y++){const U=D[y],k=Array.isArray(U.value)?U.value:[U.value];for(let X=0,q=k.length;X<q;X++){const B=k[X],Y=_(B),I=S%C,K=I%Y.boundary,P=I+K;S+=K,P!==0&&C-P<Y.storage&&(S+=C-P),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=Y.storage}}}const w=S%C;return w>0&&(S+=C-w),v.__size=S,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}class P2{constructor(e={}){const{canvas:t=_A(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const h=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ur,this.toneMapping=Ls,this.toneMappingExposure=1;const x=this;let S=!1,C=0,w=0,M=null,R=-1,D=null;const y=new Gt,T=new Gt;let U=null;const k=new et(0);let X=0,q=t.width,B=t.height,Y=1,I=null,K=null;const P=new Gt(0,0,q,B),te=new Gt(0,0,q,B);let ye=!1;const Be=new Sg;let j=!1,ee=!1;const ue=new Nt,le=new Nt,Re=new V,we=new Gt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function Ge(){return M===null?Y:1}let L=i;function at(A,O){return t.getContext(A,O)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fg}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",fe,!1),L===null){const O="webgl2";if(L=at(O,A),L===null)throw at(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ke,He,z,Qe,Ie,b,E,W,Q,ie,Z,Ee,se,pe,We,re,xe,Se,Ne,ve,qe,ze,lt,N;function ne(){ke=new UP(L),ke.init(),ze=new x2(L,ke),He=new RP(L,ke,e,ze),z=new _2(L),He.reverseDepthBuffer&&z.buffers.depth.setReversed(!0),Qe=new OP(L),Ie=new t2,b=new v2(L,ke,z,Ie,He,ze,Qe),E=new bP(x),W=new IP(x),Q=new WA(L),lt=new AP(L,Q),ie=new NP(L,Q,Qe,lt),Z=new zP(L,ie,Q,Qe),Ne=new kP(L,He,b),re=new PP(Ie),Ee=new e2(x,E,W,ke,He,lt,re),se=new C2(x,Ie),pe=new i2,We=new u2(ke),Se=new wP(x,E,W,z,Z,f,l),xe=new p2(x,Z,He),N=new R2(L,Qe,He,z),ve=new CP(L,ke,Qe),qe=new FP(L,ke,Qe),Qe.programs=Ee.programs,x.capabilities=He,x.extensions=ke,x.properties=Ie,x.renderLists=pe,x.shadowMap=xe,x.state=z,x.info=Qe}ne();const $=new w2(x,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=ke.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ke.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(q,B,!1))},this.getSize=function(A){return A.set(q,B)},this.setSize=function(A,O,H=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,B=O,t.width=Math.floor(A*Y),t.height=Math.floor(O*Y),H===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(q*Y,B*Y).floor()},this.setDrawingBufferSize=function(A,O,H){q=A,B=O,Y=H,t.width=Math.floor(A*H),t.height=Math.floor(O*H),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(P)},this.setViewport=function(A,O,H,G){A.isVector4?P.set(A.x,A.y,A.z,A.w):P.set(A,O,H,G),z.viewport(y.copy(P).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,O,H,G){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,O,H,G),z.scissor(T.copy(te).multiplyScalar(Y).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(A){z.setScissorTest(ye=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(A=!0,O=!0,H=!0){let G=0;if(A){let F=!1;if(M!==null){const ae=M.texture.format;F=ae===vg||ae===gg||ae===_g}if(F){const ae=M.texture.type,ge=ae===jr||ae===Lo||ae===Pu||ae===Za||ae===pg||ae===mg,he=Se.getClearColor(),de=Se.getClearAlpha(),Pe=he.r,Oe=he.g,Ce=he.b;ge?(h[0]=Pe,h[1]=Oe,h[2]=Ce,h[3]=de,L.clearBufferuiv(L.COLOR,0,h)):(g[0]=Pe,g[1]=Oe,g[2]=Ce,g[3]=de,L.clearBufferiv(L.COLOR,0,g))}else G|=L.COLOR_BUFFER_BIT}O&&(G|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),pe.dispose(),We.dispose(),Ie.dispose(),E.dispose(),W.dispose(),Z.dispose(),lt.dispose(),N.dispose(),Ee.dispose(),$.dispose(),$.removeEventListener("sessionstart",ht),$.removeEventListener("sessionend",me),Fe.stop()};function J(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=Qe.autoReset,O=xe.enabled,H=xe.autoUpdate,G=xe.needsUpdate,F=xe.type;ne(),Qe.autoReset=A,xe.enabled=O,xe.autoUpdate=H,xe.needsUpdate=G,xe.type=F}function fe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function je(A){const O=A.target;O.removeEventListener("dispose",je),yt(O)}function yt(A){Lt(A),Ie.remove(A)}function Lt(A){const O=Ie.get(A).programs;O!==void 0&&(O.forEach(function(H){Ee.releaseProgram(H)}),A.isShaderMaterial&&Ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,H,G,F,ae){O===null&&(O=Ye);const ge=F.isMesh&&F.matrixWorld.determinant()<0,he=gt(A,O,H,G,F);z.setMaterial(G,ge);let de=H.index,Pe=1;if(G.wireframe===!0){if(de=ie.getWireframeAttribute(H),de===void 0)return;Pe=2}const Oe=H.drawRange,Ce=H.attributes.position;let ut=Oe.start*Pe,st=(Oe.start+Oe.count)*Pe;ae!==null&&(ut=Math.max(ut,ae.start*Pe),st=Math.min(st,(ae.start+ae.count)*Pe)),de!==null?(ut=Math.max(ut,0),st=Math.min(st,de.count)):Ce!=null&&(ut=Math.max(ut,0),st=Math.min(st,Ce.count));const xt=st-ut;if(xt<0||xt===1/0)return;lt.setup(F,G,he,H,de);let ln,ot=ve;if(de!==null&&(ln=Q.get(de),ot=qe,ot.setIndex(ln)),F.isMesh)G.wireframe===!0?(z.setLineWidth(G.wireframeLinewidth*Ge()),ot.setMode(L.LINES)):ot.setMode(L.TRIANGLES);else if(F.isLine){let De=G.linewidth;De===void 0&&(De=1),z.setLineWidth(De*Ge()),F.isLineSegments?ot.setMode(L.LINES):F.isLineLoop?ot.setMode(L.LINE_LOOP):ot.setMode(L.LINE_STRIP)}else F.isPoints?ot.setMode(L.POINTS):F.isSprite&&ot.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ot.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))ot.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const De=F._multiDrawStarts,_n=F._multiDrawCounts,mt=F._multiDrawCount,Gi=de?Q.get(de).bytesPerElement:1,Vo=Ie.get(G).currentProgram.getUniforms();for(let ui=0;ui<mt;ui++)Vo.setValue(L,"_gl_DrawID",ui),ot.render(De[ui]/Gi,_n[ui])}else if(F.isInstancedMesh)ot.renderInstances(ut,xt,F.count);else if(H.isInstancedBufferGeometry){const De=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,_n=Math.min(H.instanceCount,De);ot.renderInstances(ut,xt,_n)}else ot.render(ut,xt)};function tt(A,O,H){A.transparent===!0&&A.side===Nr&&A.forceSinglePass===!1?(A.side=ni,A.needsUpdate=!0,Yt(A,O,H),A.side=Os,A.needsUpdate=!0,Yt(A,O,H),A.side=Nr):Yt(A,O,H)}this.compile=function(A,O,H=null){H===null&&(H=A),m=We.get(H),m.init(O),v.push(m),H.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),A!==H&&A.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const G=new Set;return A.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ae=F.material;if(ae)if(Array.isArray(ae))for(let ge=0;ge<ae.length;ge++){const he=ae[ge];tt(he,H,F),G.add(he)}else tt(ae,H,F),G.add(ae)}),v.pop(),m=null,G},this.compileAsync=function(A,O,H=null){const G=this.compile(A,O,H);return new Promise(F=>{function ae(){if(G.forEach(function(ge){Ie.get(ge).currentProgram.isReady()&&G.delete(ge)}),G.size===0){F(A);return}setTimeout(ae,10)}ke.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let be=null;function Ae(A){be&&be(A)}function ht(){Fe.stop()}function me(){Fe.start()}const Fe=new EM;Fe.setAnimationLoop(Ae),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(A){be=A,$.setAnimationLoop(A),A===null?Fe.stop():Fe.start()},$.addEventListener("sessionstart",ht),$.addEventListener("sessionend",me),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(O),O=$.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,O,M),m=We.get(A,v.length),m.init(O),v.push(m),le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Be.setFromProjectionMatrix(le),ee=this.localClippingEnabled,j=re.init(this.clippingPlanes,ee),_=pe.get(A,p.length),_.init(),p.push(_),$.enabled===!0&&$.isPresenting===!0){const ae=x.xr.getDepthSensingMesh();ae!==null&&Le(ae,O,-1/0,x.sortObjects)}Le(A,O,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(I,K),Xe=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Xe&&Se.addToRenderList(_,A),this.info.render.frame++,j===!0&&re.beginShadows();const H=m.state.shadowsArray;xe.render(H,A,O),j===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,F=_.transmissive;if(m.setupLights(),O.isArrayCamera){const ae=O.cameras;if(F.length>0)for(let ge=0,he=ae.length;ge<he;ge++){const de=ae[ge];Xt(G,F,A,de)}Xe&&Se.render(A);for(let ge=0,he=ae.length;ge<he;ge++){const de=ae[ge];Ve(_,A,de,de.viewport)}}else F.length>0&&Xt(G,F,A,O),Xe&&Se.render(A),Ve(_,A,O);M!==null&&(b.updateMultisampleRenderTarget(M),b.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(x,A,O),lt.resetDefaultState(),R=-1,D=null,v.pop(),v.length>0?(m=v[v.length-1],j===!0&&re.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Le(A,O,H,G){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)H=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Be.intersectsSprite(A)){G&&we.setFromMatrixPosition(A.matrixWorld).applyMatrix4(le);const ge=Z.update(A),he=A.material;he.visible&&_.push(A,ge,he,H,we.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Be.intersectsObject(A))){const ge=Z.update(A),he=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),we.copy(A.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),we.copy(ge.boundingSphere.center)),we.applyMatrix4(A.matrixWorld).applyMatrix4(le)),Array.isArray(he)){const de=ge.groups;for(let Pe=0,Oe=de.length;Pe<Oe;Pe++){const Ce=de[Pe],ut=he[Ce.materialIndex];ut&&ut.visible&&_.push(A,ge,ut,H,we.z,Ce)}}else he.visible&&_.push(A,ge,he,H,we.z,null)}}const ae=A.children;for(let ge=0,he=ae.length;ge<he;ge++)Le(ae[ge],O,H,G)}function Ve(A,O,H,G){const F=A.opaque,ae=A.transmissive,ge=A.transparent;m.setupLightsView(H),j===!0&&re.setGlobalState(x.clippingPlanes,H),G&&z.viewport(y.copy(G)),F.length>0&&$e(F,O,H),ae.length>0&&$e(ae,O,H),ge.length>0&&$e(ge,O,H),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Xt(A,O,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Do(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Yu:jr,minFilter:po,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const ae=m.state.transmissionRenderTarget[G.id],ge=G.viewport||y;ae.setSize(ge.z,ge.w);const he=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(k),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Xe&&Se.render(H);const de=x.toneMapping;x.toneMapping=Ls;const Pe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),j===!0&&re.setGlobalState(x.clippingPlanes,G),$e(A,H,G),b.updateMultisampleRenderTarget(ae),b.updateRenderTargetMipmap(ae),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Ce=0,ut=O.length;Ce<ut;Ce++){const st=O[Ce],xt=st.object,ln=st.geometry,ot=st.material,De=st.group;if(ot.side===Nr&&xt.layers.test(G.layers)){const _n=ot.side;ot.side=ni,ot.needsUpdate=!0,Dt(xt,H,G,ln,ot,De),ot.side=_n,ot.needsUpdate=!0,Oe=!0}}Oe===!0&&(b.updateMultisampleRenderTarget(ae),b.updateRenderTargetMipmap(ae))}x.setRenderTarget(he),x.setClearColor(k,X),Pe!==void 0&&(G.viewport=Pe),x.toneMapping=de}function $e(A,O,H){const G=O.isScene===!0?O.overrideMaterial:null;for(let F=0,ae=A.length;F<ae;F++){const ge=A[F],he=ge.object,de=ge.geometry,Pe=G===null?ge.material:G,Oe=ge.group;he.layers.test(H.layers)&&Dt(he,O,H,de,Pe,Oe)}}function Dt(A,O,H,G,F,ae){A.onBeforeRender(x,O,H,G,F,ae),A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(x,O,H,G,A,ae),F.transparent===!0&&F.side===Nr&&F.forceSinglePass===!1?(F.side=ni,F.needsUpdate=!0,x.renderBufferDirect(H,O,G,F,A,ae),F.side=Os,F.needsUpdate=!0,x.renderBufferDirect(H,O,G,F,A,ae),F.side=Nr):x.renderBufferDirect(H,O,G,F,A,ae),A.onAfterRender(x,O,H,G,F,ae)}function Yt(A,O,H){O.isScene!==!0&&(O=Ye);const G=Ie.get(A),F=m.state.lights,ae=m.state.shadowsArray,ge=F.state.version,he=Ee.getParameters(A,F.state,ae,O,H),de=Ee.getProgramCacheKey(he);let Pe=G.programs;G.environment=A.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(A.isMeshStandardMaterial?W:E).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Pe===void 0&&(A.addEventListener("dispose",je),Pe=new Map,G.programs=Pe);let Oe=Pe.get(de);if(Oe!==void 0){if(G.currentProgram===Oe&&G.lightsStateVersion===ge)return St(A,he),Oe}else he.uniforms=Ee.getUniforms(A),A.onBeforeCompile(he,x),Oe=Ee.acquireProgram(he,de),Pe.set(de,Oe),G.uniforms=he.uniforms;const Ce=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ce.clippingPlanes=re.uniform),St(A,he),G.needsLights=At(A),G.lightsStateVersion=ge,G.needsLights&&(Ce.ambientLightColor.value=F.state.ambient,Ce.lightProbe.value=F.state.probe,Ce.directionalLights.value=F.state.directional,Ce.directionalLightShadows.value=F.state.directionalShadow,Ce.spotLights.value=F.state.spot,Ce.spotLightShadows.value=F.state.spotShadow,Ce.rectAreaLights.value=F.state.rectArea,Ce.ltc_1.value=F.state.rectAreaLTC1,Ce.ltc_2.value=F.state.rectAreaLTC2,Ce.pointLights.value=F.state.point,Ce.pointLightShadows.value=F.state.pointShadow,Ce.hemisphereLights.value=F.state.hemi,Ce.directionalShadowMap.value=F.state.directionalShadowMap,Ce.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ce.spotShadowMap.value=F.state.spotShadowMap,Ce.spotLightMatrix.value=F.state.spotLightMatrix,Ce.spotLightMap.value=F.state.spotLightMap,Ce.pointShadowMap.value=F.state.pointShadowMap,Ce.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Oe,G.uniformsList=null,Oe}function wt(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=vf.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function St(A,O){const H=Ie.get(A);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function gt(A,O,H,G,F){O.isScene!==!0&&(O=Ye),b.resetTextureUnits();const ae=O.fog,ge=G.isMeshStandardMaterial?O.environment:null,he=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Jr,de=(G.isMeshStandardMaterial?W:E).get(G.envMap||ge),Pe=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Oe=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!H.morphAttributes.position,ut=!!H.morphAttributes.normal,st=!!H.morphAttributes.color;let xt=Ls;G.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(xt=x.toneMapping);const ln=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ot=ln!==void 0?ln.length:0,De=Ie.get(G),_n=m.state.lights;if(j===!0&&(ee===!0||A!==D)){const Ai=A===D&&G.id===R;re.setState(G,A,Ai)}let mt=!1;G.version===De.__version?(De.needsLights&&De.lightsStateVersion!==_n.state.version||De.outputColorSpace!==he||F.isBatchedMesh&&De.batching===!1||!F.isBatchedMesh&&De.batching===!0||F.isBatchedMesh&&De.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&De.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&De.instancing===!1||!F.isInstancedMesh&&De.instancing===!0||F.isSkinnedMesh&&De.skinning===!1||!F.isSkinnedMesh&&De.skinning===!0||F.isInstancedMesh&&De.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&De.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&De.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&De.instancingMorph===!1&&F.morphTexture!==null||De.envMap!==de||G.fog===!0&&De.fog!==ae||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==re.numPlanes||De.numIntersection!==re.numIntersection)||De.vertexAlphas!==Pe||De.vertexTangents!==Oe||De.morphTargets!==Ce||De.morphNormals!==ut||De.morphColors!==st||De.toneMapping!==xt||De.morphTargetsCount!==ot)&&(mt=!0):(mt=!0,De.__version=G.version);let Gi=De.currentProgram;mt===!0&&(Gi=Yt(G,O,F));let Vo=!1,ui=!1,Hd=!1;const qt=Gi.getUniforms(),es=De.uniforms;if(z.useProgram(Gi.program)&&(Vo=!0,ui=!0,Hd=!0),G.id!==R&&(R=G.id,ui=!0),Vo||D!==A){He.reverseDepthBuffer?(ue.copy(A.projectionMatrix),vA(ue),xA(ue),qt.setValue(L,"projectionMatrix",ue)):qt.setValue(L,"projectionMatrix",A.projectionMatrix),qt.setValue(L,"viewMatrix",A.matrixWorldInverse);const Ai=qt.map.cameraPosition;Ai!==void 0&&Ai.setValue(L,Re.setFromMatrixPosition(A.matrixWorld)),He.logarithmicDepthBuffer&&qt.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&qt.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,ui=!0,Hd=!0)}if(F.isSkinnedMesh){qt.setOptional(L,F,"bindMatrix"),qt.setOptional(L,F,"bindMatrixInverse");const Ai=F.skeleton;Ai&&(Ai.boneTexture===null&&Ai.computeBoneTexture(),qt.setValue(L,"boneTexture",Ai.boneTexture,b))}F.isBatchedMesh&&(qt.setOptional(L,F,"batchingTexture"),qt.setValue(L,"batchingTexture",F._matricesTexture,b),qt.setOptional(L,F,"batchingIdTexture"),qt.setValue(L,"batchingIdTexture",F._indirectTexture,b),qt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&qt.setValue(L,"batchingColorTexture",F._colorsTexture,b));const Vd=H.morphAttributes;if((Vd.position!==void 0||Vd.normal!==void 0||Vd.color!==void 0)&&Ne.update(F,H,Gi),(ui||De.receiveShadow!==F.receiveShadow)&&(De.receiveShadow=F.receiveShadow,qt.setValue(L,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(es.envMap.value=de,es.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(es.envMapIntensity.value=O.environmentIntensity),ui&&(qt.setValue(L,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&li(es,Hd),ae&&G.fog===!0&&se.refreshFogUniforms(es,ae),se.refreshMaterialUniforms(es,G,Y,B,m.state.transmissionRenderTarget[A.id]),vf.upload(L,wt(De),es,b)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(vf.upload(L,wt(De),es,b),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&qt.setValue(L,"center",F.center),qt.setValue(L,"modelViewMatrix",F.modelViewMatrix),qt.setValue(L,"normalMatrix",F.normalMatrix),qt.setValue(L,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ai=G.uniformsGroups;for(let Gd=0,nE=Ai.length;Gd<nE;Gd++){const $g=Ai[Gd];N.update($g,Gi),N.bind($g,Gi)}}return Gi}function li(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function At(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,O,H){Ie.get(A.texture).__webglTexture=O,Ie.get(A.depthTexture).__webglTexture=H;const G=Ie.get(A);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){const H=Ie.get(A);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,H=0){M=A,C=O,w=H;let G=!0,F=null,ae=!1,ge=!1;if(A){const de=Ie.get(A);if(de.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(de.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(de.__hasExternalTextures)b.rebindTextures(A,Ie.get(A.texture).__webglTexture,Ie.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ce=A.depthTexture;if(de.__boundDepthTexture!==Ce){if(Ce!==null&&Ie.has(Ce)&&(A.width!==Ce.image.width||A.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const Pe=A.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ge=!0);const Oe=Ie.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?F=Oe[O][H]:F=Oe[O],ae=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?F=Ie.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?F=Oe[H]:F=Oe,y.copy(A.viewport),T.copy(A.scissor),U=A.scissorTest}else y.copy(P).multiplyScalar(Y).floor(),T.copy(te).multiplyScalar(Y).floor(),U=ye;if(z.bindFramebuffer(L.FRAMEBUFFER,F)&&G&&z.drawBuffers(A,F),z.viewport(y),z.scissor(T),z.setScissorTest(U),ae){const de=Ie.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,de.__webglTexture,H)}else if(ge){const de=Ie.get(A.texture),Pe=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,de.__webglTexture,H||0,Pe)}R=-1},this.readRenderTargetPixels=function(A,O,H,G,F,ae,ge){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=Ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ge!==void 0&&(he=he[ge]),he){z.bindFramebuffer(L.FRAMEBUFFER,he);try{const de=A.texture,Pe=de.format,Oe=de.type;if(!He.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-G&&H>=0&&H<=A.height-F&&L.readPixels(O,H,G,F,ze.convert(Pe),ze.convert(Oe),ae)}finally{const de=M!==null?Ie.get(M).__webglFramebuffer:null;z.bindFramebuffer(L.FRAMEBUFFER,de)}}},this.readRenderTargetPixelsAsync=async function(A,O,H,G,F,ae,ge){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=Ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ge!==void 0&&(he=he[ge]),he){const de=A.texture,Pe=de.format,Oe=de.type;if(!He.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=A.width-G&&H>=0&&H<=A.height-F){z.bindFramebuffer(L.FRAMEBUFFER,he);const Ce=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.bufferData(L.PIXEL_PACK_BUFFER,ae.byteLength,L.STREAM_READ),L.readPixels(O,H,G,F,ze.convert(Pe),ze.convert(Oe),0);const ut=M!==null?Ie.get(M).__webglFramebuffer:null;z.bindFramebuffer(L.FRAMEBUFFER,ut);const st=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await gA(L,st,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ae),L.deleteBuffer(Ce),L.deleteSync(st),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,O=null,H=0){A.isTexture!==!0&&(gf("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,A=arguments[1]);const G=Math.pow(2,-H),F=Math.floor(A.image.width*G),ae=Math.floor(A.image.height*G),ge=O!==null?O.x:0,he=O!==null?O.y:0;b.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,ge,he,F,ae),z.unbindTexture()},this.copyTextureToTexture=function(A,O,H=null,G=null,F=0){A.isTexture!==!0&&(gf("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1],O=arguments[2],F=arguments[3]||0,H=null);let ae,ge,he,de,Pe,Oe;H!==null?(ae=H.max.x-H.min.x,ge=H.max.y-H.min.y,he=H.min.x,de=H.min.y):(ae=A.image.width,ge=A.image.height,he=0,de=0),G!==null?(Pe=G.x,Oe=G.y):(Pe=0,Oe=0);const Ce=ze.convert(O.format),ut=ze.convert(O.type);b.setTexture2D(O,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const st=L.getParameter(L.UNPACK_ROW_LENGTH),xt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ln=L.getParameter(L.UNPACK_SKIP_PIXELS),ot=L.getParameter(L.UNPACK_SKIP_ROWS),De=L.getParameter(L.UNPACK_SKIP_IMAGES),_n=A.isCompressedTexture?A.mipmaps[F]:A.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,_n.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_n.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,he),L.pixelStorei(L.UNPACK_SKIP_ROWS,de),A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Pe,Oe,ae,ge,Ce,ut,_n.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Pe,Oe,_n.width,_n.height,Ce,_n.data):L.texSubImage2D(L.TEXTURE_2D,F,Pe,Oe,ae,ge,Ce,ut,_n),L.pixelStorei(L.UNPACK_ROW_LENGTH,st),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ln),L.pixelStorei(L.UNPACK_SKIP_ROWS,ot),L.pixelStorei(L.UNPACK_SKIP_IMAGES,De),F===0&&O.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(A,O,H=null,G=null,F=0){A.isTexture!==!0&&(gf("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,A=arguments[2],O=arguments[3],F=arguments[4]||0);let ae,ge,he,de,Pe,Oe,Ce,ut,st;const xt=A.isCompressedTexture?A.mipmaps[F]:A.image;H!==null?(ae=H.max.x-H.min.x,ge=H.max.y-H.min.y,he=H.max.z-H.min.z,de=H.min.x,Pe=H.min.y,Oe=H.min.z):(ae=xt.width,ge=xt.height,he=xt.depth,de=0,Pe=0,Oe=0),G!==null?(Ce=G.x,ut=G.y,st=G.z):(Ce=0,ut=0,st=0);const ln=ze.convert(O.format),ot=ze.convert(O.type);let De;if(O.isData3DTexture)b.setTexture3D(O,0),De=L.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)b.setTexture2DArray(O,0),De=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const _n=L.getParameter(L.UNPACK_ROW_LENGTH),mt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Gi=L.getParameter(L.UNPACK_SKIP_PIXELS),Vo=L.getParameter(L.UNPACK_SKIP_ROWS),ui=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,xt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,de),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Oe),A.isDataTexture||A.isData3DTexture?L.texSubImage3D(De,F,Ce,ut,st,ae,ge,he,ln,ot,xt.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(De,F,Ce,ut,st,ae,ge,he,ln,xt.data):L.texSubImage3D(De,F,Ce,ut,st,ae,ge,he,ln,ot,xt),L.pixelStorei(L.UNPACK_ROW_LENGTH,_n),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Gi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Vo),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ui),F===0&&O.generateMipmaps&&L.generateMipmap(De),z.unbindTexture()},this.initRenderTarget=function(A){Ie.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),z.unbindTexture()},this.resetState=function(){C=0,w=0,M=null,z.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Br}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===yg?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===Id?"display-p3":"srgb"}}class b2 extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new or,this.environmentIntensity=1,this.environmentRotation=new or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bM extends Bo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nd=new V,id=new V,Qv=new Nt,Al=new mM,Fc=new Ud,qh=new V,Jv=new V;class LM extends Sn{constructor(e=new Tr,t=new bM){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)nd.fromBufferAttribute(t,r-1),id.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=nd.distanceTo(id);e.setAttribute("lineDistance",new rr(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fc.copy(i.boundingSphere),Fc.applyMatrix4(r),Fc.radius+=s,e.ray.intersectsSphere(Fc)===!1)return;Qv.copy(r).invert(),Al.copy(e.ray).applyMatrix4(Qv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=u){const p=c.getX(_),v=c.getX(_+1),x=Oc(this,e,Al,l,p,v);x&&t.push(x)}if(this.isLineLoop){const _=c.getX(g-1),m=c.getX(h),p=Oc(this,e,Al,l,_,m);p&&t.push(p)}}else{const h=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=u){const p=Oc(this,e,Al,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Oc(this,e,Al,l,g-1,h);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Oc(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(nd.fromBufferAttribute(o,r),id.fromBufferAttribute(o,s),t.distanceSqToSegment(nd,id,qh,Jv)>i)return;qh.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(qh);if(!(l<e.near||l>e.far))return{distance:l,point:Jv.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}class L2{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],f=i[r+1]-c,h=(o-c)/f;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new dt:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new V,r=[],s=[],o=[],a=new V,l=new Nt;for(let h=0;h<=e;h++){const g=h/e;r[h]=this.getTangentAt(g,new V)}s[0]=new V,o[0]=new V;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),d<=u&&(u=d,i.set(0,1,0)),f<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(bn(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,g))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(bn(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],h*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function D2(n,e){const t=1-n;return t*t*e}function I2(n,e){return 2*(1-n)*n*e}function U2(n,e){return n*n*e}function jh(n,e,t,i){return D2(n,e)+I2(n,t)+U2(n,i)}class N2 extends L2{constructor(e=new V,t=new V,i=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new V){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(jh(e,r.x,s.x,o.x),jh(e,r.y,s.y,o.y),jh(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Eg extends Tr{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new rr(s,3)),this.setAttribute("normal",new rr(s.slice(),3)),this.setAttribute("uv",new rr(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new V,S=new V,C=new V;for(let w=0;w<t.length;w+=3)h(t[w+0],x),h(t[w+1],S),h(t[w+2],C),l(x,S,C,v)}function l(v,x,S,C){const w=C+1,M=[];for(let R=0;R<=w;R++){M[R]=[];const D=v.clone().lerp(S,R/w),y=x.clone().lerp(S,R/w),T=w-R;for(let U=0;U<=T;U++)U===0&&R===w?M[R][U]=D:M[R][U]=D.clone().lerp(y,U/T)}for(let R=0;R<w;R++)for(let D=0;D<2*(w-R)-1;D++){const y=Math.floor(D/2);D%2===0?(f(M[R][y+1]),f(M[R+1][y]),f(M[R][y])):(f(M[R][y+1]),f(M[R+1][y+1]),f(M[R+1][y]))}}function u(v){const x=new V;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(v),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function c(){const v=new V;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const S=m(v)/2/Math.PI+.5,C=p(v)/Math.PI+.5;o.push(S,1-C)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){const x=o[v+0],S=o[v+2],C=o[v+4],w=Math.max(x,S,C),M=Math.min(x,S,C);w>.9&&M<.1&&(x<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function h(v,x){const S=v*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function g(){const v=new V,x=new V,S=new V,C=new V,w=new dt,M=new dt,R=new dt;for(let D=0,y=0;D<s.length;D+=9,y+=6){v.set(s[D+0],s[D+1],s[D+2]),x.set(s[D+3],s[D+4],s[D+5]),S.set(s[D+6],s[D+7],s[D+8]),w.set(o[y+0],o[y+1]),M.set(o[y+2],o[y+3]),R.set(o[y+4],o[y+5]),C.copy(v).add(x).add(S).divideScalar(3);const T=m(C);_(w,y+0,v,T),_(M,y+2,x,T),_(R,y+4,S,T)}}function _(v,x,S,C){C<0&&v.x===1&&(o[x]=v.x-1),S.x===0&&S.z===0&&(o[x]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eg(e.vertices,e.indices,e.radius,e.details)}}class Mr extends Eg{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mr(e.radius,e.detail)}}class F2 extends Bo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xg,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class O2 extends Bo{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new et(16777215),this.specular=new et(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xg,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=dg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ex={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class k2{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const h=u[d],g=u[d+1];if(h.global&&(h.lastIndex=0),h.test(c))return g}return null}}}const z2=new k2;class Tg{constructor(e){this.manager=e!==void 0?e:z2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Tg.DEFAULT_MATERIAL_NAME="__DEFAULT";class B2 extends Tg{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ex.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=bu("img");function l(){c(),ex.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class H2 extends Tg{constructor(e){super(e)}load(e,t,i,r){const s=new Yn,o=new B2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class V2 extends Sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const $h=new Nt,tx=new V,nx=new V;class G2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sg,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;tx.setFromMatrixPosition(e.matrixWorld),t.position.copy(tx),nx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nx),t.updateMatrixWorld(),$h.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($h)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class W2 extends G2{constructor(){super(new TM(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class X2 extends V2{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new W2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fg);function Y2({rimHex:n=35071,facingHex:e=0}={}){const t={color1:{value:new et(n)},color2:{value:new et(e)},fresnelBias:{value:.1},fresnelScale:{value:1},fresnelPower:{value:4}},i=`
  uniform float fresnelBias;
  uniform float fresnelScale;
  uniform float fresnelPower;
  
  varying float vReflectionFactor;
  
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
  
    vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
  
    vec3 I = worldPosition.xyz - cameraPosition;
  
    vReflectionFactor = fresnelBias + fresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), fresnelPower );
  
    gl_Position = projectionMatrix * mvPosition;
  }
  `,r=`
  uniform vec3 color1;
  uniform vec3 color2;
  
  varying float vReflectionFactor;
  
  void main() {
    float f = clamp( vReflectionFactor, 0.0, 1.0 );
    gl_FragColor = vec4(mix(color2, color1, vec3(f)), f);
  }
  `;return new $r({uniforms:t,vertexShader:i,fragmentShader:r,transparent:!0,blending:Ru})}function ix(n,e,t=null,i=null){const r=(_,m,p)=>{const v=(90-_)*(Math.PI/180),x=(-m+180)*(Math.PI/180),S=p*Math.sin(v)*Math.cos(x),C=p*Math.cos(v),w=p*Math.sin(v)*Math.sin(x);return new V(S,C,w)},s=_=>{const m=new et(_.color),p=new Mr(.1,2),v=new Lu({color:m,transparent:!0,opacity:.9}),x=new vn(p,v),S=new Mr(.15,2),C=new Lu({color:m,transparent:!0,opacity:.5}),w=new vn(S,C),M=r(_.latitude,_.longitude,n);x.position.copy(M),w.position.copy(M);const R=new _s;return R.add(w),R.add(x),R};if(t==null)return s(e);const o=r(e.latitude,e.longitude,n),a=r(t.latitude,t.longitude,n),u=new V().addVectors(o,a).multiplyScalar(.5).clone().normalize().multiplyScalar(n+i.arcHeight),d=new N2(o,u,a).getPoints(50),f=new Tr().setFromPoints(d),h=new bM({color:i.color});return new LM(f,h)}function Dr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function DM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},el={duration:.5,overwrite:!1,delay:0},wg,Dn,Ut,Fi=1e8,Et=1/Fi,Ym=Math.PI*2,q2=Ym/4,j2=0,IM=Math.sqrt,$2=Math.cos,K2=Math.sin,mn=function(e){return typeof e=="string"},Wt=function(e){return typeof e=="function"},Kr=function(e){return typeof e=="number"},Ag=function(e){return typeof e>"u"},Er=function(e){return typeof e=="object"},ii=function(e){return e!==!1},Cg=function(){return typeof window<"u"},kc=function(e){return Wt(e)||mn(e)},UM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},In=Array.isArray,qm=/(?:-?\.?\d|\.)+/gi,NM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ma=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Kh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,FM=/[+-]=-?[.\d]+/,OM=/[^,'"\[\]\s]+/gi,Z2=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,cr,jm,Rg,Ei={},rd={},kM,zM=function(e){return(rd=Io(e,Ei))&&ai},Pg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Du=function(e,t){return!t&&console.warn(e)},BM=function(e,t){return e&&(Ei[e]=t)&&rd&&(rd[e]=t)||Ei},Iu=function(){return 0},Q2={suppressEvents:!0,isStart:!0,kill:!1},xf={suppressEvents:!0,kill:!1},J2={suppressEvents:!0},bg={},Ds=[],$m={},HM,mi={},Zh={},rx=30,yf=[],Lg="",Dg=function(e){var t=e[0],i,r;if(Er(t)||Wt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=yf.length;r--&&!yf[r].targetTest(t););i=yf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new f1(e[r],i)))||e.splice(r,1);return e},xo=function(e){return e._gsap||Dg(Oi(e))[0]._gsap},VM=function(e,t,i){return(i=e[t])&&Wt(i)?e[t]():Ag(i)&&e.getAttribute&&e.getAttribute(t)||i},ri=function(e,t){return(e=e.split(",")).forEach(t)||e},jt=function(e){return Math.round(e*1e5)/1e5||0},hn=function(e){return Math.round(e*1e7)/1e7||0},Ua=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},eL=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},sd=function(){var e=Ds.length,t=Ds.slice(0),i,r;for($m={},Ds.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},GM=function(e,t,i,r){Ds.length&&!Dn&&sd(),e.render(t,i,Dn&&t<0&&(e._initted||e._startAt)),Ds.length&&!Dn&&sd()},WM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(OM).length<2?t:mn(e)?e.trim():e},XM=function(e){return e},Vi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},tL=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Io=function(e,t){for(var i in t)e[i]=t[i];return e},sx=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Er(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},od=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Ql=function(e){var t=e.parent||kt,i=e.keyframes?tL(In(e.keyframes)):Vi;if(ii(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},nL=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},YM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Od=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},ks=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},yo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},iL=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Km=function(e,t,i,r){return e._startAt&&(Dn?e._startAt.revert(xf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},rL=function n(e){return!e||e._ts&&n(e.parent)},ox=function(e){return e._repeat?tl(e._tTime,e=e.duration()+e._rDelay)*e:0},tl=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},ad=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},kd=function(e){return e._end=hn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},zd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=hn(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),kd(e),i._dirty||yo(i,e)),e},qM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=ad(e.rawTime(),t),(!t._dur||Zu(0,t.totalDuration(),i)-t._tTime>Et)&&t.render(i,!0)),yo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Et}},pr=function(e,t,i,r){return t.parent&&ks(t),t._start=hn((Kr(i)?i:i||e!==kt?Ri(e,i,t):e._time)+t._delay),t._end=hn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),YM(e,t,"_first","_last",e._sort?"_start":0),Zm(t)||(e._recent=t),r||qM(e,t),e._ts<0&&zd(e,e._tTime),e},jM=function(e,t){return(Ei.ScrollTrigger||Pg("scrollTrigger",t))&&Ei.ScrollTrigger.create(t,e)},$M=function(e,t,i,r,s){if(Ug(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Dn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&HM!==_i.frame)return Ds.push(e),e._lazy=[s,r],1},sL=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Zm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},oL=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&sL(e)&&!(!e._initted&&Zm(e))||(e._ts<0||e._dp._ts<0)&&!Zm(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=Zu(0,e._tDur,t),c=tl(l,a),e._yoyo&&c&1&&(o=1-o),c!==tl(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Dn||r||e._zTime===Et||!t&&e._zTime){if(!e._initted&&$M(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Et:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Km(e,t,i,!0),e._onUpdate&&!i&&xi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&xi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ks(e,1),!i&&!Dn&&(xi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},aL=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},nl=function(e,t,i,r){var s=e._repeat,o=hn(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:hn(o*(s+1)+e._rDelay*s):o,a>0&&!r&&zd(e,e._tTime=e._tDur*a),e.parent&&kd(e),i||yo(e.parent,e),e},ax=function(e){return e instanceof Vn?yo(e):nl(e,e._dur)},lL={_start:0,endTime:Iu,totalDuration:Iu},Ri=function n(e,t,i){var r=e.labels,s=e._recent||lL,o=e.duration()>=Fi?s.endTime(!1):e._dur,a,l,u;return mn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(In(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Jl=function(e,t,i){var r=Kr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ii(l.vars.inherit)&&l.parent;o.immediateRender=ii(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Jt(t[0],o,t[s+1])},Ws=function(e,t){return e||e===0?t(e):t},Zu=function(e,t,i){return i<e?e:i>t?t:i},Ln=function(e,t){return!mn(e)||!(t=Z2.exec(e))?"":t[1]},uL=function(e,t,i){return Ws(i,function(r){return Zu(e,t,r)})},Qm=[].slice,KM=function(e,t){return e&&Er(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Er(e[0]))&&!e.nodeType&&e!==cr},cL=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return mn(r)&&!t||KM(r,1)?(s=i).push.apply(s,Oi(r)):i.push(r)})||i},Oi=function(e,t,i){return Ut&&!t&&Ut.selector?Ut.selector(e):mn(e)&&!i&&(jm||!il())?Qm.call((t||Rg).querySelectorAll(e),0):In(e)?cL(e,i):KM(e)?Qm.call(e,0):e?[e]:[]},Jm=function(e){return e=Oi(e)[0]||Du("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Oi(t,i.querySelectorAll?i:i===e?Du("Invalid scope")||Rg.createElement("div"):e)}},ZM=function(e){return e.sort(function(){return .5-Math.random()})},QM=function(e){if(Wt(e))return e;var t=Er(e)?e:{each:e},i=So(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return mn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(f,h,g){var _=(g||t).length,m=o[_],p,v,x,S,C,w,M,R,D;if(!m){if(D=t.grid==="auto"?0:(t.grid||[1,Fi])[1],!D){for(M=-Fi;M<(M=g[D++].getBoundingClientRect().left)&&D<_;);D<_&&D--}for(m=o[_]=[],p=l?Math.min(D,_)*c-.5:r%D,v=D===Fi?0:l?_*d/D-.5:r/D|0,M=0,R=Fi,w=0;w<_;w++)x=w%D-p,S=v-(w/D|0),m[w]=C=u?Math.abs(u==="y"?S:x):IM(x*x+S*S),C>M&&(M=C),C<R&&(R=C);r==="random"&&ZM(m),m.max=M-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(D>_?_-1:u?u==="y"?_/D:D:Math.max(D,_/D))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Ln(t.amount||t.each)||0,i=i&&_<0?l1(i):i}return _=(m[f]-m.min)/m.max||0,hn(m.b+(i?i(_):_)*m.v)+m.u}},e_=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=hn(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Kr(i)?0:Ln(i))}},JM=function(e,t){var i=In(e),r,s;return!i&&Er(e)&&(r=i=e.radius||Fi,e.values?(e=Oi(e.values),(s=!Kr(e[0]))&&(r*=r)):e=e_(e.increment)),Ws(t,i?Wt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Fi,c=0,d=e.length,f,h;d--;)s?(f=e[d].x-a,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-a),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:o,s||c===o||Kr(o)?c:c+Ln(o)}:e_(e))},e1=function(e,t,i,r){return Ws(In(e)?!t:i===!0?!!(i=0):!r,function(){return In(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},fL=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},dL=function(e,t){return function(i){return e(parseFloat(i))+(t||Ln(i))}},hL=function(e,t,i){return n1(e,t,0,1,i)},t1=function(e,t,i){return Ws(i,function(r){return e[~~t(r)]})},pL=function n(e,t,i){var r=t-e;return In(e)?t1(e,n(0,e.length),t):Ws(i,function(s){return(r+(s-e)%r)%r+e})},mL=function n(e,t,i){var r=t-e,s=r*2;return In(e)?t1(e,n(0,e.length-1),t):Ws(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Uu=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?OM:qm),i+=e.substr(t,r-t)+e1(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},n1=function(e,t,i,r,s){var o=t-e,a=r-i;return Ws(s,function(l){return i+((l-e)/o*a||0)})},_L=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=mn(e),a={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(In(e)&&!In(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(g){g*=d;var _=Math.min(f,~~g);return c[_](g-_)},i=t}else r||(e=Io(In(e)?[]:{},e));if(!c){for(l in t)Ig.call(a,e,l,"get",t[l]);s=function(g){return Og(g,a)||(o?e.p:e)}}}return Ws(i,s)},lx=function(e,t,i){var r=e.labels,s=Fi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},xi=function(e,t,i){var r=e.vars,s=r[t],o=Ut,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ds.length&&sd(),a&&(Ut=a),c=l?s.apply(u,l):s.call(u),Ut=o,c},Fl=function(e){return ks(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Dn),e.progress()<1&&xi(e,"onInterrupt"),e},Ea,i1=[],r1=function(e){if(e)if(e=!e.name&&e.default||e,Cg()||e.headless){var t=e.name,i=Wt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Iu,render:Og,add:Ig,kill:DL,modifier:LL,rawVars:0},o={targetTest:0,get:0,getSetter:Fg,aliases:{},register:0};if(il(),e!==r){if(mi[t])return;Vi(r,Vi(od(e,s),o)),Io(r.prototype,Io(s,od(e,o))),mi[r.prop=t]=r,e.targetTest&&(yf.push(r),bg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}BM(t,r),e.register&&e.register(ai,r,si)}else i1.push(e)},Mt=255,Ol={aqua:[0,Mt,Mt],lime:[0,Mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mt],navy:[0,0,128],white:[Mt,Mt,Mt],olive:[128,128,0],yellow:[Mt,Mt,0],orange:[Mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mt,0,0],pink:[Mt,192,203],cyan:[0,Mt,Mt],transparent:[Mt,Mt,Mt,0]},Qh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Mt+.5|0},s1=function(e,t,i){var r=e?Kr(e)?[e>>16,e>>8&Mt,e&Mt]:0:Ol.black,s,o,a,l,u,c,d,f,h,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ol[e])r=Ol[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Mt,r&Mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Mt,e&Mt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(qm),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Qh(l+1/3,s,o),r[1]=Qh(l,s,o),r[2]=Qh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(NM),i&&r.length<4&&(r[3]=1),r}else r=e.match(qm)||Ol.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Mt,o=r[1]/Mt,a=r[2]/Mt,d=Math.max(s,o,a),f=Math.min(s,o,a),c=(d+f)/2,d===f?l=u=0:(h=d-f,u=c>.5?h/(2-d-f):h/(d+f),l=d===s?(o-a)/h+(o<a?6:0):d===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},o1=function(e){var t=[],i=[],r=-1;return e.split(Is).forEach(function(s){var o=s.match(Ma)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},ux=function(e,t,i){var r="",s=(e+r).match(Is),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=s1(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=o1(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Is,"1").split(Ma),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Is),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Is=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ol)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),gL=/hsl[a]?\(/,a1=function(e){var t=e.join(" "),i;if(Is.lastIndex=0,Is.test(t))return i=gL.test(t),e[1]=ux(e[1],i),e[0]=ux(e[0],i,o1(e[1])),!0},Nu,_i=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,f,h,g=function _(m){var p=n()-r,v=m===!0,x,S,C,w;if((p>e||p<0)&&(i+=p-t),r+=p,C=r-i,x=C-o,(x>0||v)&&(w=++d.frame,f=C-d.time*1e3,d.time=C=C/1e3,o+=x+(x>=s?4:s-x),S=1),v||(l=u(_)),S)for(h=0;h<a.length;h++)a[h](C,f,w,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){kM&&(!jm&&Cg()&&(cr=jm=window,Rg=cr.document||{},Ei.gsap=ai,(cr.gsapVersions||(cr.gsapVersions=[])).push(ai.version),zM(rd||cr.GreenSockGlobals||!cr.gsap&&cr||{}),i1.forEach(r1)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Nu=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Nu=0,u=Iu},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,p,v){var x=p?function(S,C,w,M){m(S,C,w,M),d.remove(x)}:m;return d.remove(m),a[v?"unshift":"push"](x),il(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},d}(),il=function(){return!Nu&&_i.wake()},ft={},vL=/^[\d.\-M][\d.\-,\s]/,xL=/["']/g,yL=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(xL,"").trim():+u,r=l.substr(a+1).trim();return t},SL=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},ML=function(e){var t=(e+"").split("("),i=ft[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[yL(t[1])]:SL(e).split(",").map(WM)):ft._CE&&vL.test(e)?ft._CE("",e):i},l1=function(e){return function(t){return 1-e(1-t)}},u1=function n(e,t){for(var i=e._first,r;i;)i instanceof Vn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},So=function(e,t){return e&&(Wt(e)?e:ft[e]||ML(e))||t},Ho=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ri(e,function(a){ft[a]=Ei[a]=s,ft[o=a.toLowerCase()]=i;for(var l in s)ft[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[a+"."+l]=s[l]}),s},c1=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Jh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Ym*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*K2((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:c1(a);return s=Ym/s,l.config=function(u,c){return n(e,u,c)},l},ep=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:c1(i);return r.config=function(s){return n(e,s)},r};ri("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Ho(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;Ho("Elastic",Jh("in"),Jh("out"),Jh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Ho("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ho("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Ho("Circ",function(n){return-(IM(1-n*n)-1)});Ho("Sine",function(n){return n===1?1:-$2(n*q2)+1});Ho("Back",ep("in"),ep("out"),ep());ft.SteppedEase=ft.steps=Ei.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Et;return function(a){return((r*Zu(0,o,a)|0)+s)*i}}};el.ease=ft["quad.out"];ri("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Lg+=n+","+n+"Params,"});var f1=function(e,t){this.id=j2++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:VM,this.set=t?t.getSetter:Fg},Fu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,nl(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),Nu||_i.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,nl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(il(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(zd(this,i),!s._dp||s.parent||qM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&pr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Et||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),GM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+ox(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+ox(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?tl(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?ad(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Et?0:this._rts,this.totalTime(Zu(-Math.abs(this._delay),this._tDur,s),r!==!1),kd(this),iL(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(il(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Et&&(this._tTime-=Et)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&pr(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ii(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ad(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=J2);var r=Dn;return Dn=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Dn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ax(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,ax(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ri(this,i),ii(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ii(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Et)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=Wt(i)?i:XM,a=function(){var u=r.then;r.then=null,Wt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Fl(this)},n}();Vi(Fu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var Vn=function(n){DM(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ii(i.sortChildren),kt&&pr(i.parent||kt,Dr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&jM(Dr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Jl(0,arguments,this),this},t.from=function(r,s,o){return Jl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Jl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Ql(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Jt(r,s,Ri(this,o),1),this},t.call=function(r,s,o){return pr(this,Jt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Jt(r,o,Ri(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Ql(o).immediateRender=ii(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,Ql(a).immediateRender=ii(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:hn(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,h,g,_,m,p,v,x,S,C,w,M;if(this!==kt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,S=this._start,x=this._ts,p=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=hn(c%m),c===l?(_=this._repeat,f=u):(_=~~(c/m),_&&_===c/m&&(f=u,_--),f>u&&(f=u)),C=tl(this._tTime,m),!a&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),w&&_&1&&(f=u-f,M=1),_!==C&&!this._lock){var R=w&&C&1,D=R===(w&&_&1);if(_<C&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(M?0:hn(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&xi(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,D&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;u1(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=aL(this,hn(a),hn(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!_&&(xi(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(h=this._first;h;){if(g=h._next,(h._act||f>=h._start)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,o),f!==this._time||!this._ts&&!p){v=0,g&&(c+=this._zTime=-Et);break}}h=g}else{h=this._last;for(var y=r<0?r:f;h;){if(g=h._prev,(h._act||y<=h._end)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(y-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(y-h._start)*h._ts,s,o||Dn&&(h._initted||h._startAt)),f!==this._time||!this._ts&&!p){v=0,g&&(c+=this._zTime=y?-Et:Et);break}}h=g}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-Et)._zTime=f>=a?1:-1,this._ts))return this._start=S,kd(this),this.render(r,s,o);this._onUpdate&&!s&&xi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&ks(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(xi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Kr(s)||(s=Ri(this,s,r)),!(r instanceof Fu)){if(In(r))return r.forEach(function(a){return o.add(a,s)}),this;if(mn(r))return this.addLabel(r,s);if(Wt(r))r=Jt.delayedCall(0,r);else return this}return this!==r?pr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Fi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Jt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return mn(r)?this.removeLabel(r):Wt(r)?this.killTweensOf(r):(Od(this,r),r===this._recent&&(this._recent=this._last),yo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=hn(_i.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ri(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Jt.delayedCall(0,s||Iu,o);return a.data="isPause",this._hasPause=1,pr(this,a,Ri(this,r))},t.removePause=function(r){var s=this._first;for(r=Ri(this,r);s;)s._start===r&&s.data==="isPause"&&ks(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)gs!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Oi(r),l=this._first,u=Kr(s),c;l;)l instanceof Jt?eL(l._targets,a)&&(u?(!gs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ri(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,h,g=Jt.to(o,Vi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Et,onStart:function(){if(o.pause(),!h){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&nl(g,m,0,1).render(g._time,!0,!0),h=1}c&&c.apply(g,d||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Vi({startAt:{time:Ri(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),lx(this,Ri(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),lx(this,Ri(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return yo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),yo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Fi,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,pr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;nl(o,o===kt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(kt._ts&&(GM(kt,ad(r,kt)),HM=_i.frame),_i.frame>=rx){rx+=Si.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&Si.autoSleep&&_i._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||_i.sleep()}}},e}(Fu);Vi(Vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var EL=function(e,t,i,r,s,o,a){var l=new si(this._pt,e,t,0,1,g1,null,s),u=0,c=0,d,f,h,g,_,m,p,v;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=Uu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(Kh)||[];d=Kh.exec(r);)g=d[0],_=r.substring(u,d.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?Ua(m,g)-m:parseFloat(g)-m,m:h&&h<4?Math.round:0},u=Kh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(FM.test(r)||p)&&(l.e=0),this._pt=l,l},Ig=function(e,t,i,r,s,o,a,l,u,c){Wt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:Wt(d)?u?e[t.indexOf("set")||!Wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,h=Wt(d)?u?RL:m1:Ng,g;if(mn(r)&&(~r.indexOf("random(")&&(r=Uu(r)),r.charAt(1)==="="&&(g=Ua(f,r)+(Ln(f)||0),(g||g===0)&&(r=g))),!c||f!==r||t_)return!isNaN(f*r)&&r!==""?(g=new si(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?bL:_1,0,h),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&Pg(t,r),EL.call(this,e,t,f,r,h,l||Si.stringFilter,u))},TL=function(e,t,i,r,s){if(Wt(e)&&(e=eu(e,s,t,i,r)),!Er(e)||e.style&&e.nodeType||In(e)||UM(e))return mn(e)?eu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=eu(e[a],s,t,i,r);return o},d1=function(e,t,i,r,s,o){var a,l,u,c;if(mi[e]&&(a=new mi[e]).init(s,a.rawVars?t[e]:TL(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new si(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Ea))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},gs,t_,Ug=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,h=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!wg,S=e.timeline,C,w,M,R,D,y,T,U,k,X,q,B,Y;if(S&&(!f||!s)&&(s="none"),e._ease=So(s,el.ease),e._yEase=d?l1(So(d===!0?s:d,el.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!S&&!!r.runBackwards,!S||f&&!r.stagger){if(U=m[0]?xo(m[0]).harness:0,B=U&&r[U.prop],C=od(r,bg),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!h?_.render(-1,!0):_.revert(c&&g?xf:Q2),_._lazy=0),o){if(ks(e._startAt=Jt.set(m,Vi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&ii(l),startAt:null,delay:0,onUpdate:u&&function(){return xi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dn||!a&&!h)&&e._startAt.revert(xf),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!_){if(t&&(a=!1),M=Vi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ii(l),immediateRender:a,stagger:0,parent:p},C),B&&(M[U.prop]=B),ks(e._startAt=Jt.set(m,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dn?e._startAt.revert(xf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ii(l)||l&&!g,w=0;w<m.length;w++){if(D=m[w],T=D._gsap||Dg(m)[w]._gsap,e._ptLookup[w]=X={},$m[T.id]&&Ds.length&&sd(),q=v===m?w:v.indexOf(D),U&&(k=new U).init(D,B||C,e,q,v)!==!1&&(e._pt=R=new si(e._pt,D,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(I){X[I]=R}),k.priority&&(y=1)),!U||B)for(M in C)mi[M]&&(k=d1(M,C,e,q,D,v))?k.priority&&(y=1):X[M]=R=Ig.call(e,D,M,"get",C[M],q,v,0,r.stringFilter);e._op&&e._op[w]&&e.kill(D,e._op[w]),x&&e._pt&&(gs=e,kt.killTweensOf(D,X,e.globalTime(t)),Y=!e.parent,gs=0),e._pt&&l&&($m[T.id]=1)}y&&v1(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!Y,f&&t<=0&&S.render(Fi,!0,!0)},wL=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,h;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return t_=1,e.vars[t]="+=0",Ug(e,a),t_=0,l?Du(t+" not eligible for reset"):1;u.push(c)}for(h=u.length;h--;)d=u[h],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=jt(i)+Ln(d.e)),d.b&&(d.b=c.s+Ln(d.b))},AL=function(e,t){var i=e[0]?xo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Io({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},CL=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(In(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},eu=function(e,t,i,r,s){return Wt(e)?e.call(t,i,r,s):mn(e)&&~e.indexOf("random(")?Uu(e):e},h1=Lg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",p1={};ri(h1+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return p1[n]=1});var Jt=function(n){DM(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Ql(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,v=r.parent||kt,x=(In(i)||UM(i)?Kr(i[0]):"length"in r)?[i]:Oi(i),S,C,w,M,R,D,y,T;if(a._targets=x.length?Dg(x):Du("GSAP target "+i+" not found. https://gsap.com",!Si.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,g||f||kc(u)||kc(c)){if(r=a.vars,S=a.timeline=new Vn({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:x}),S.kill(),S.parent=S._dp=Dr(a),S._start=0,f||kc(u)||kc(c)){if(M=x.length,y=f&&QM(f),Er(f))for(R in f)~h1.indexOf(R)&&(T||(T={}),T[R]=f[R]);for(C=0;C<M;C++)w=od(r,p1),w.stagger=0,p&&(w.yoyoEase=p),T&&Io(w,T),D=x[C],w.duration=+eu(u,Dr(a),C,D,x),w.delay=(+eu(c,Dr(a),C,D,x)||0)-a._delay,!f&&M===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),S.to(D,w,y?y(C,D,x):0),S._ease=ft.none;S.duration()?u=c=0:a.timeline=0}else if(g){Ql(Vi(S.vars.defaults,{ease:"none"})),S._ease=So(g.ease||r.ease||"none");var U=0,k,X,q;if(In(g))g.forEach(function(B){return S.to(x,B,">")}),S.duration();else{w={};for(R in g)R==="ease"||R==="easeEach"||CL(R,g[R],w,g.easeEach);for(R in w)for(k=w[R].sort(function(B,Y){return B.t-Y.t}),U=0,C=0;C<k.length;C++)X=k[C],q={ease:X.e,duration:(X.t-(C?k[C-1].t:0))/100*u},q[R]=X.v,S.to(x,q,U),U+=q.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||a.duration(u=S.duration())}else a.timeline=0;return h===!0&&!wg&&(gs=Dr(a),kt.killTweensOf(x),gs=0),pr(v,Dr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!g&&a._start===hn(v._time)&&ii(d)&&rL(Dr(a))&&v.data!=="nested")&&(a._tTime=-Et,a.render(Math.max(0,-c)||0)),m&&jM(Dr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-Et&&!c?l:r<Et?0:r,f,h,g,_,m,p,v,x,S;if(!u)oL(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(f=d,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(f=hn(d%_),d===l?(g=this._repeat,f=u):(g=~~(d/_),g&&g===hn(d/_)&&(f=u,g--),f>u&&(f=u)),p=this._yoyo&&g&1,p&&(S=this._yEase,f=u-f),m=tl(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=d,this;g!==m&&(x&&this._yEase&&u1(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(hn(_*g),!0).invalidate()._lock=0))}if(!this._initted){if($M(this,c?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(S||this._ease)(f/u),this._from&&(this.ratio=v=1-v),f&&!a&&!s&&!g&&(xi(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(v,h.d),h=h._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Km(this,r,s,o),xi(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&xi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Km(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&ks(this,1),!s&&!(c&&!a)&&(d||a||p)&&(xi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Nu||_i.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Ug(this,u),c=this._ease(u/this._dur),wL(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(zd(this,0),this.parent||YM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Fl(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,gs&&gs.vars.overwrite!==!0)._first||Fl(this),this.parent&&o!==this.timeline.totalDuration()&&nl(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Oi(r):a,u=this._ptLookup,c=this._pt,d,f,h,g,_,m,p;if((!s||s==="all")&&nL(a,l))return s==="all"&&(this._pt=0),Fl(this);for(d=this._op=this._op||[],s!=="all"&&(mn(s)&&(_={},ri(s,function(v){return _[v]=1}),s=_),s=AL(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=u[p],s==="all"?(d[p]=s,g=f,h={}):(h=d[p]=d[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Od(this,m,"_pt"),delete f[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&c&&Fl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Jl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Jl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return kt.killTweensOf(r,s,o)},e}(Fu);Vi(Jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ri("staggerTo,staggerFrom,staggerFromTo",function(n){Jt[n]=function(){var e=new Vn,t=Qm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Ng=function(e,t,i){return e[t]=i},m1=function(e,t,i){return e[t](i)},RL=function(e,t,i,r){return e[t](r.fp,i)},PL=function(e,t,i){return e.setAttribute(t,i)},Fg=function(e,t){return Wt(e[t])?m1:Ag(e[t])&&e.setAttribute?PL:Ng},_1=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},bL=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},g1=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Og=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},LL=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},DL=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Od(this,t,"_pt"):t.dep||(i=1),t=r;return!i},IL=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},v1=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},si=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||_1,this.d=l||this,this.set=u||Ng,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=IL,this.m=i,this.mt=s,this.tween=r},n}();ri(Lg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return bg[n]=1});Ei.TweenMax=Ei.TweenLite=Jt;Ei.TimelineLite=Ei.TimelineMax=Vn;kt=new Vn({sortChildren:!1,defaults:el,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Si.stringFilter=a1;var Mo=[],Sf={},UL=[],cx=0,NL=0,tp=function(e){return(Sf[e]||UL).map(function(t){return t()})},n_=function(){var e=Date.now(),t=[];e-cx>2&&(tp("matchMediaInit"),Mo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=cr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),tp("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),cx=e,tp("matchMedia"))},x1=function(){function n(t,i){this.selector=i&&Jm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=NL++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Wt(i)&&(s=r,r=i,i=Wt);var o=this,a=function(){var u=Ut,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=Jm(s)),Ut=o,d=r.apply(o,arguments),Wt(d)&&o._r.push(d),Ut=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===Wt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ut;Ut=null,i(this),Ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Jt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Vn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Jt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Mo.length;o--;)Mo[o].id===this.id&&Mo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),FL=function(){function n(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Er(i)||(i={matches:i});var o=new x1(0,s||this.scope),a=o.conditions={},l,u,c;Ut&&!o.selector&&(o.selector=Ut.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=cr.matchMedia(i[u]),l&&(Mo.indexOf(o)<0&&Mo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(n_):l.addEventListener("change",n_)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),ld={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return r1(r)})},timeline:function(e){return new Vn(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,i,r){mn(e)&&(e=Oi(e)[0]);var s=xo(e||{}).get,o=i?XM:WM;return i==="native"&&(i=""),e&&(t?o((mi[t]&&mi[t].get||s)(e,t,i,r)):function(a,l,u){return o((mi[a]&&mi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Oi(e),e.length>1){var r=e.map(function(c){return ai.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=mi[t],a=xo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;Ea._pt=0,d.init(e,i?c+i:c,Ea,0,[e]),d.render(1,d),Ea._pt&&Og(1,Ea)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=ai.to(e,Io((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=So(e.ease,el.ease)),sx(el,e||{})},config:function(e){return sx(Si,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!mi[a]&&!Ei[a]&&Du(t+" effect requires "+a+" plugin.")}),Zh[t]=function(a,l,u){return i(Oi(a),Vi(l||{},s),u)},o&&(Vn.prototype[t]=function(a,l,u){return this.add(Zh[t](a,Er(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ft[e]=So(t)},parseEase:function(e,t){return arguments.length?So(e,t):ft},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Vn(e),r,s;for(i.smoothChildTiming=ii(e.smoothChildTiming),kt.remove(i),i._dp=0,i._time=i._tTime=kt._time,r=kt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Jt&&r.vars.onComplete===r._targets[0]))&&pr(i,r,r._start-r._delay),r=s;return pr(kt,i,0),i},context:function(e,t){return e?new x1(e,t):Ut},matchMedia:function(e){return new FL(e)},matchMediaRefresh:function(){return Mo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||n_()},addEventListener:function(e,t){var i=Sf[e]||(Sf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Sf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:pL,wrapYoyo:mL,distribute:QM,random:e1,snap:JM,normalize:hL,getUnit:Ln,clamp:uL,splitColor:s1,toArray:Oi,selector:Jm,mapRange:n1,pipe:fL,unitize:dL,interpolate:_L,shuffle:ZM},install:zM,effects:Zh,ticker:_i,updateRoot:Vn.updateRoot,plugins:mi,globalTimeline:kt,core:{PropTween:si,globals:BM,Tween:Jt,Timeline:Vn,Animation:Fu,getCache:xo,_removeLinkedListItem:Od,reverting:function(){return Dn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return wg=e}}};ri("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return ld[n]=Jt[n]});_i.add(Vn.updateRoot);Ea=ld.to({},{duration:0});var OL=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},kL=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=OL(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},np=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(mn(s)&&(l={},ri(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}kL(a,s)}}}},ai=ld.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Dn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},np("roundProps",e_),np("modifiers"),np("snap",JM))||ld;Jt.version=Vn.version=ai.version="3.12.5";kM=1;Cg()&&il();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var fx,vs,Na,kg,mo,dx,zg,zL=function(){return typeof window<"u"},Zr={},io=180/Math.PI,Fa=Math.PI/180,ra=Math.atan2,hx=1e8,Bg=/([A-Z])/g,BL=/(left|right|width|margin|padding|x)/i,HL=/[\s,\(]\S/,mr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},i_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},VL=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},GL=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},WL=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},y1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},S1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},XL=function(e,t,i){return e.style[t]=i},YL=function(e,t,i){return e.style.setProperty(t,i)},qL=function(e,t,i){return e._gsap[t]=i},jL=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},$L=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},KL=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},zt="transform",oi=zt+"Origin",ZL=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Zr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=mr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Ur(r,a)}):this.tfm[e]=o.x?o[e]:Ur(r,e),e===oi&&(this.tfm.zOrigin=o.zOrigin);else return mr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(zt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(oi,t,"")),e=zt}(s||t)&&this.props.push(e,t,s[e])},M1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},QL=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Bg,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=zg(),(!s||!s.isStart)&&!i[zt]&&(M1(i),r.zOrigin&&i[oi]&&(i[oi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},E1=function(e,t){var i={target:e,props:[],revert:QL,save:ZL};return e._gsap||ai.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},T1,r_=function(e,t){var i=vs.createElementNS?vs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):vs.createElement(e);return i&&i.style?i:vs.createElement(e)},yr=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Bg,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,rl(t)||t,1)||""},px="O,Moz,ms,Ms,Webkit".split(","),rl=function(e,t,i){var r=t||mo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(px[o]+e in s););return o<0?null:(o===3?"ms":o>=0?px[o]:"")+e},s_=function(){zL()&&window.document&&(fx=window,vs=fx.document,Na=vs.documentElement,mo=r_("div")||{style:{}},r_("div"),zt=rl(zt),oi=zt+"Origin",mo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",T1=!!rl("perspective"),zg=ai.core.reverting,kg=1)},ip=function n(e){var t=r_("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Na.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Na.removeChild(t),this.style.cssText=s,o},mx=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},w1=function(e){var t;try{t=e.getBBox()}catch{t=ip.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===ip||(t=ip.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+mx(e,["x","cx","x1"])||0,y:+mx(e,["y","cy","y1"])||0,width:0,height:0}:t},A1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&w1(e))},Uo=function(e,t){if(t){var i=e.style,r;t in Zr&&t!==oi&&(t=zt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Bg,"-$1").toLowerCase())):i.removeAttribute(t)}},xs=function(e,t,i,r,s,o){var a=new si(e._pt,t,i,0,1,o?S1:y1);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},_x={deg:1,rad:1,turn:1},JL={grid:1,flex:1},zs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=mo.style,l=BL.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",h=r==="%",g,_,m,p;if(r===o||!s||_x[r]||_x[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),p=e.getCTM&&A1(e),(h||o==="%")&&(Zr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[c],jt(h?s/g*d:s/100*g);if(a[l?"width":"height"]=d+(f?o:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===vs||!_.appendChild)&&(_=vs.body),m=_._gsap,m&&h&&m.width&&l&&m.time===_i.time&&!m.uncache)return jt(s/m.width*d);if(h&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,g=e[c],v?e.style[t]=v:Uo(e,t)}else(h||o==="%")&&!JL[yr(_,"display")]&&(a.position=yr(e,"position")),_===e&&(a.position="static"),_.appendChild(mo),g=mo[c],_.removeChild(mo),a.position="absolute";return l&&h&&(m=xo(_),m.time=_i.time,m.width=_[c]),jt(f?g*s/d:g&&s?d/g*s:0)},Ur=function(e,t,i,r){var s;return kg||s_(),t in mr&&t!=="transform"&&(t=mr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Zr[t]&&t!=="transform"?(s=ku(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:cd(yr(e,oi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ud[t]&&ud[t](e,t,i)||yr(e,t)||VM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?zs(e,t,s,i)+i:s},eD=function(e,t,i,r){if(!i||i==="none"){var s=rl(t,e,1),o=s&&yr(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=yr(e,"borderTopColor"))}var a=new si(this._pt,e.style,t,0,1,g1),l=0,u=0,c,d,f,h,g,_,m,p,v,x,S,C;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=yr(e,t)||r,_?e.style[t]=_:Uo(e,t)),c=[i,r],a1(c),i=c[0],r=c[1],f=i.match(Ma)||[],C=r.match(Ma)||[],C.length){for(;d=Ma.exec(r);)m=d[0],v=r.substring(l,d.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=f[u++]||"")&&(h=parseFloat(_)||0,S=_.substr((h+"").length),m.charAt(1)==="="&&(m=Ua(h,m)+S),p=parseFloat(m),x=m.substr((p+"").length),l=Ma.lastIndex-x.length,x||(x=x||Si.units[t]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(h=zs(e,t,_,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:h,c:p-h,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?S1:y1;return FM.test(r)&&(a.e=0),this._pt=a,a},gx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},tD=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=gx[i]||i,t[1]=gx[r]||r,t.join(" ")},nD=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Zr[a]&&(l=1,a=a==="transformOrigin"?oi:zt),Uo(i,a);l&&(Uo(i,zt),o&&(o.svg&&i.removeAttribute("transform"),ku(i,1),o.uncache=1,M1(r)))}},ud={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new si(e._pt,t,i,0,0,nD);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Ou=[1,0,0,1,0,0],C1={},R1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},vx=function(e){var t=yr(e,zt);return R1(t)?Ou:t.substr(7).match(NM).map(jt)},Hg=function(e,t){var i=e._gsap||xo(e),r=e.style,s=vx(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ou:s):(s===Ou&&!e.offsetParent&&e!==Na&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,Na.appendChild(e)),s=vx(e),l?r.display=l:Uo(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Na.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},o_=function(e,t,i,r,s,o){var a=e._gsap,l=s||Hg(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,h=l[0],g=l[1],_=l[2],m=l[3],p=l[4],v=l[5],x=t.split(" "),S=parseFloat(x[0])||0,C=parseFloat(x[1])||0,w,M,R,D;i?l!==Ou&&(M=h*m-g*_)&&(R=S*(m/M)+C*(-_/M)+(_*v-m*p)/M,D=S*(-g/M)+C*(h/M)-(h*v-g*p)/M,S=R,C=D):(w=w1(e),S=w.x+(~x[0].indexOf("%")?S/100*w.width:S),C=w.y+(~(x[1]||x[0]).indexOf("%")?C/100*w.height:C)),r||r!==!1&&a.smooth?(p=S-u,v=C-c,a.xOffset=d+(p*h+v*_)-p,a.yOffset=f+(p*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[oi]="0px 0px",o&&(xs(o,a,"xOrigin",u,S),xs(o,a,"yOrigin",c,C),xs(o,a,"xOffset",d,a.xOffset),xs(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+C)},ku=function(e,t){var i=e._gsap||new f1(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=yr(e,oi)||"0",c,d,f,h,g,_,m,p,v,x,S,C,w,M,R,D,y,T,U,k,X,q,B,Y,I,K,P,te,ye,Be,j,ee;return c=d=f=_=m=p=v=x=S=0,h=g=1,i.svg=!!(e.getCTM&&A1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[zt]!=="none"?l[zt]:"")),r.scale=r.rotate=r.translate="none"),M=Hg(e,i.svg),i.svg&&(i.uncache?(I=e.getBBox(),u=i.xOrigin-I.x+"px "+(i.yOrigin-I.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),o_(e,Y||u,!!Y||i.originIsAbsolute,i.smooth!==!1,M)),C=i.xOrigin||0,w=i.yOrigin||0,M!==Ou&&(T=M[0],U=M[1],k=M[2],X=M[3],c=q=M[4],d=B=M[5],M.length===6?(h=Math.sqrt(T*T+U*U),g=Math.sqrt(X*X+k*k),_=T||U?ra(U,T)*io:0,v=k||X?ra(k,X)*io+_:0,v&&(g*=Math.abs(Math.cos(v*Fa))),i.svg&&(c-=C-(C*T+w*k),d-=w-(C*U+w*X))):(ee=M[6],Be=M[7],P=M[8],te=M[9],ye=M[10],j=M[11],c=M[12],d=M[13],f=M[14],R=ra(ee,ye),m=R*io,R&&(D=Math.cos(-R),y=Math.sin(-R),Y=q*D+P*y,I=B*D+te*y,K=ee*D+ye*y,P=q*-y+P*D,te=B*-y+te*D,ye=ee*-y+ye*D,j=Be*-y+j*D,q=Y,B=I,ee=K),R=ra(-k,ye),p=R*io,R&&(D=Math.cos(-R),y=Math.sin(-R),Y=T*D-P*y,I=U*D-te*y,K=k*D-ye*y,j=X*y+j*D,T=Y,U=I,k=K),R=ra(U,T),_=R*io,R&&(D=Math.cos(R),y=Math.sin(R),Y=T*D+U*y,I=q*D+B*y,U=U*D-T*y,B=B*D-q*y,T=Y,q=I),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),h=jt(Math.sqrt(T*T+U*U+k*k)),g=jt(Math.sqrt(B*B+ee*ee)),R=ra(q,B),v=Math.abs(R)>2e-4?R*io:0,S=j?1/(j<0?-j:j):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!R1(yr(e,zt)),Y&&e.setAttribute("transform",Y))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(h*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=jt(h),i.scaleY=jt(g),i.rotation=jt(_)+a,i.rotationX=jt(m)+a,i.rotationY=jt(p)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[oi]=cd(u)),i.xOffset=i.yOffset=0,i.force3D=Si.force3D,i.renderTransform=i.svg?rD:T1?P1:iD,i.uncache=0,i},cd=function(e){return(e=e.split(" "))[0]+" "+e[1]},rp=function(e,t,i){var r=Ln(t);return jt(parseFloat(t)+parseFloat(zs(e,"x",i+"px",r)))+r},iD=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,P1(e,t)},Zs="0deg",Cl="0px",Qs=") ",P1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,h=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,v=i.target,x=i.zOrigin,S="",C=p==="auto"&&e&&e!==1||p===!0;if(x&&(d!==Zs||c!==Zs)){var w=parseFloat(c)*Fa,M=Math.sin(w),R=Math.cos(w),D;w=parseFloat(d)*Fa,D=Math.cos(w),o=rp(v,o,M*D*-x),a=rp(v,a,-Math.sin(w)*-x),l=rp(v,l,R*D*-x+x)}m!==Cl&&(S+="perspective("+m+Qs),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(C||o!==Cl||a!==Cl||l!==Cl)&&(S+=l!==Cl||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Qs),u!==Zs&&(S+="rotate("+u+Qs),c!==Zs&&(S+="rotateY("+c+Qs),d!==Zs&&(S+="rotateX("+d+Qs),(f!==Zs||h!==Zs)&&(S+="skew("+f+", "+h+Qs),(g!==1||_!==1)&&(S+="scale("+g+", "+_+Qs),v.style[zt]=S||"translate(0, 0)"},rD=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,h=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,v=i.forceCSS,x=parseFloat(o),S=parseFloat(a),C,w,M,R,D;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Fa,u*=Fa,C=Math.cos(l)*d,w=Math.sin(l)*d,M=Math.sin(l-u)*-f,R=Math.cos(l-u)*f,u&&(c*=Fa,D=Math.tan(u-c),D=Math.sqrt(1+D*D),M*=D,R*=D,c&&(D=Math.tan(c),D=Math.sqrt(1+D*D),C*=D,w*=D)),C=jt(C),w=jt(w),M=jt(M),R=jt(R)):(C=d,R=f,w=M=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=zs(h,"x",o,"px"),S=zs(h,"y",a,"px")),(g||_||m||p)&&(x=jt(x+g-(g*C+_*M)+m),S=jt(S+_-(g*w+_*R)+p)),(r||s)&&(D=h.getBBox(),x=jt(x+r/100*D.width),S=jt(S+s/100*D.height)),D="matrix("+C+","+w+","+M+","+R+","+x+","+S+")",h.setAttribute("transform",D),v&&(h.style[zt]=D)},sD=function(e,t,i,r,s){var o=360,a=mn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?io:1),u=l-r,c=r+u+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*hx)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*hx)%o-~~(u/o)*o)),e._pt=f=new si(e._pt,t,i,r,u,VL),f.e=c,f.u="deg",e._props.push(i),f},xx=function(e,t){for(var i in t)e[i]=t[i];return e},oD=function(e,t,i){var r=xx({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,f,h,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[zt]=t,a=ku(i,1),Uo(i,zt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[zt],o[zt]=t,a=ku(i,1),o[zt]=u);for(l in Zr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(h=Ln(u),g=Ln(c),d=h!==g?zs(i,l,u,g):parseFloat(u),f=parseFloat(c),e._pt=new si(e._pt,a,l,d,f-d,i_),e._pt.u=g||0,e._props.push(l));xx(a,r)};ri("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});ud[e>1?"border"+n:n]=function(a,l,u,c,d){var f,h;if(arguments.length<4)return f=o.map(function(g){return Ur(a,g,u)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(c+"").split(" "),h={},o.forEach(function(g,_){return h[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,h,d)}});var b1={name:"css",register:s_,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,f,h,g,_,m,p,v,x,S,C,w,M,R;kg||s_(),this.styles=this.styles||E1(e),R=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(mi[_]&&d1(_,t,i,r,e,s)))){if(h=typeof c,g=ud[_],h==="function"&&(c=c.call(i,r,e,s),h=typeof c),h==="string"&&~c.indexOf("random(")&&(c=Uu(c)),g)g(this,e,_,c,i)&&(M=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Is.lastIndex=0,Is.test(u)||(m=Ln(u),p=Ln(c)),p?m!==p&&(u=zs(e,_,u,p)+p):m&&(c+=m),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(h!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],mn(u)&&~u.indexOf("random(")&&(u=Uu(u)),Ln(u+"")||u==="auto"||(u+=Si.units[_]||Ln(Ur(e,_))||""),(u+"").charAt(1)==="="&&(u=Ur(e,_))):u=Ur(e,_),f=parseFloat(u),v=h==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),d=parseFloat(c),_ in mr&&(_==="autoAlpha"&&(f===1&&Ur(e,"visibility")==="hidden"&&d&&(f=0),R.push("visibility",0,a.visibility),xs(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=mr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Zr,x){if(this.styles.save(_),S||(C=e._gsap,C.renderTransform&&!t.parseTransform||ku(e,t.parseTransform),w=t.smoothOrigin!==!1&&C.smooth,S=this._pt=new si(this._pt,a,zt,0,1,C.renderTransform,C,0,-1),S.dep=1),_==="scale")this._pt=new si(this._pt,C,"scaleY",C.scaleY,(v?Ua(C.scaleY,v+d):d)-C.scaleY||0,i_),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(oi,0,a[oi]),c=tD(c),C.svg?o_(e,c,0,w,0,this):(p=parseFloat(c.split(" ")[2])||0,p!==C.zOrigin&&xs(this,C,"zOrigin",C.zOrigin,p),xs(this,a,_,cd(u),cd(c)));continue}else if(_==="svgOrigin"){o_(e,c,1,w,0,this);continue}else if(_ in C1){sD(this,C,_,f,v?Ua(f,v+c):c);continue}else if(_==="smoothOrigin"){xs(this,C,"smooth",C.smooth,c);continue}else if(_==="force3D"){C[_]=c;continue}else if(_==="transform"){oD(this,c,e);continue}}else _ in a||(_=rl(_)||_);if(x||(d||d===0)&&(f||f===0)&&!HL.test(c)&&_ in a)m=(u+"").substr((f+"").length),d||(d=0),p=Ln(c)||(_ in Si.units?Si.units[_]:m),m!==p&&(f=zs(e,_,u,p)),this._pt=new si(this._pt,x?C:a,_,f,(v?Ua(f,v+d):d)-f,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?WL:i_),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=u,this._pt.r=GL);else if(_ in a)eD.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){Pg(_,c);continue}x||(_ in a?R.push(_,0,a[_]):R.push(_,1,u||e[_])),o.push(_)}}M&&v1(this)},render:function(e,t){if(t.tween._time||!zg())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Ur,aliases:mr,getSetter:function(e,t,i){var r=mr[t];return r&&r.indexOf(",")<0&&(t=r),t in Zr&&t!==oi&&(e._gsap.x||Ur(e,"x"))?i&&dx===i?t==="scale"?jL:qL:(dx=i||{})&&(t==="scale"?$L:KL):e.style&&!Ag(e.style[t])?XL:~t.indexOf("-")?YL:Fg(e,t)},core:{_removeProperty:Uo,_getMatrix:Hg}};ai.utils.checkPrefix=rl;ai.core.getStyleSaver=E1;(function(n,e,t,i){var r=ri(n+","+e+","+t,function(s){Zr[s]=1});ri(e,function(s){Si.units[s]="deg",C1[s]=1}),mr[r[13]]=n+","+e,ri(i,function(s){var o=s.split(":");mr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ri("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Si.units[n]="px"});ai.registerPlugin(b1);var lo=ai.registerPlugin(b1)||ai;lo.core.Tween;function aD(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function lD(n,e,t){return e&&aD(n.prototype,e),n}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xn,Mf,gi,ys,Ss,Oa,L1,ro,tu,D1,Hr,ji,I1,U1=function(){return xn||typeof window<"u"&&(xn=window.gsap)&&xn.registerPlugin&&xn},N1=1,Ta=[],nt=[],Sr=[],nu=Date.now,a_=function(e,t){return t},uD=function(){var e=tu.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,nt),r.push.apply(r,Sr),nt=i,Sr=r,a_=function(o,a){return t[o](a)}},Us=function(e,t){return~Sr.indexOf(e)&&Sr[Sr.indexOf(e)+1][t]},iu=function(e){return!!~D1.indexOf(e)},Fn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Nn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},zc="scrollLeft",Bc="scrollTop",l_=function(){return Hr&&Hr.isPressed||nt.cache++},fd=function(e,t){var i=function r(s){if(s||s===0){N1&&(gi.history.scrollRestoration="manual");var o=Hr&&Hr.isPressed;s=r.v=Math.round(s)||(Hr&&Hr.iOS?1:0),e(s),r.cacheID=nt.cache,o&&a_("ss",s)}else(t||nt.cache!==r.cacheID||a_("ref"))&&(r.cacheID=nt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Gn={s:zc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:fd(function(n){return arguments.length?gi.scrollTo(n,rn.sc()):gi.pageXOffset||ys[zc]||Ss[zc]||Oa[zc]||0})},rn={s:Bc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Gn,sc:fd(function(n){return arguments.length?gi.scrollTo(Gn.sc(),n):gi.pageYOffset||ys[Bc]||Ss[Bc]||Oa[Bc]||0})},Kn=function(e,t){return(t&&t._ctx&&t._ctx.selector||xn.utils.toArray)(e)[0]||(typeof e=="string"&&xn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Bs=function(e,t){var i=t.s,r=t.sc;iu(e)&&(e=ys.scrollingElement||Ss);var s=nt.indexOf(e),o=r===rn.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+o]||Fn(e,"scroll",l_);var a=nt[s+o],l=a||(nt[s+o]=fd(Us(e,i),!0)||(iu(e)?r:fd(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=xn.getProperty(e,"scrollBehavior")==="smooth"),l},u_=function(e,t,i){var r=e,s=e,o=nu(),a=o,l=t||50,u=Math.max(500,l*3),c=function(g,_){var m=nu();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(g){var _=a,m=s,p=nu();return(g||g===0)&&g!==r&&c(g),o===a||p-a>u?0:(r+(i?m:-m))/((i?p:o)-_)*1e3};return{update:c,reset:d,getVelocity:f}},Rl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},yx=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},F1=function(){tu=xn.core.globals().ScrollTrigger,tu&&tu.core&&uD()},O1=function(e){return xn=e||U1(),!Mf&&xn&&typeof document<"u"&&document.body&&(gi=window,ys=document,Ss=ys.documentElement,Oa=ys.body,D1=[gi,ys,Ss,Oa],xn.utils.clamp,I1=xn.core.context||function(){},ro="onpointerenter"in Oa?"pointer":"mouse",L1=Kt.isTouch=gi.matchMedia&&gi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in gi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ji=Kt.eventTypes=("ontouchstart"in Ss?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ss?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return N1=0},500),F1(),Mf=1),Mf};Gn.op=rn;nt.cache=0;var Kt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Mf||O1(xn)||console.warn("Please gsap.registerPlugin(Observer)"),tu||F1();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,f=i.onStopDelay,h=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,p=i.onDragEnd,v=i.onDrag,x=i.onPress,S=i.onRelease,C=i.onRight,w=i.onLeft,M=i.onUp,R=i.onDown,D=i.onChangeX,y=i.onChangeY,T=i.onChange,U=i.onToggleX,k=i.onToggleY,X=i.onHover,q=i.onHoverEnd,B=i.onMove,Y=i.ignoreCheck,I=i.isNormalizer,K=i.onGestureStart,P=i.onGestureEnd,te=i.onWheel,ye=i.onEnable,Be=i.onDisable,j=i.onClick,ee=i.scrollSpeed,ue=i.capture,le=i.allowClicks,Re=i.lockAxis,we=i.onLockAxis;this.target=a=Kn(a)||Ss,this.vars=i,h&&(h=xn.utils.toArray(h)),r=r||1e-9,s=s||0,g=g||1,ee=ee||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(gi.getComputedStyle(Oa).lineHeight)||22);var Ye,Xe,Ge,L,at,ke,He,z=this,Qe=0,Ie=0,b=i.passive||!c,E=Bs(a,Gn),W=Bs(a,rn),Q=E(),ie=W(),Z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ji[0]==="pointerdown",Ee=iu(a),se=a.ownerDocument||ys,pe=[0,0,0],We=[0,0,0],re=0,xe=function(){return re=nu()},Se=function(Ae,ht){return(z.event=Ae)&&h&&~h.indexOf(Ae.target)||ht&&Z&&Ae.pointerType!=="touch"||Y&&Y(Ae,ht)},Ne=function(){z._vx.reset(),z._vy.reset(),Xe.pause(),d&&d(z)},ve=function(){var Ae=z.deltaX=yx(pe),ht=z.deltaY=yx(We),me=Math.abs(Ae)>=r,Fe=Math.abs(ht)>=r;T&&(me||Fe)&&T(z,Ae,ht,pe,We),me&&(C&&z.deltaX>0&&C(z),w&&z.deltaX<0&&w(z),D&&D(z),U&&z.deltaX<0!=Qe<0&&U(z),Qe=z.deltaX,pe[0]=pe[1]=pe[2]=0),Fe&&(R&&z.deltaY>0&&R(z),M&&z.deltaY<0&&M(z),y&&y(z),k&&z.deltaY<0!=Ie<0&&k(z),Ie=z.deltaY,We[0]=We[1]=We[2]=0),(L||Ge)&&(B&&B(z),Ge&&(v(z),Ge=!1),L=!1),ke&&!(ke=!1)&&we&&we(z),at&&(te(z),at=!1),Ye=0},qe=function(Ae,ht,me){pe[me]+=Ae,We[me]+=ht,z._vx.update(Ae),z._vy.update(ht),u?Ye||(Ye=requestAnimationFrame(ve)):ve()},ze=function(Ae,ht){Re&&!He&&(z.axis=He=Math.abs(Ae)>Math.abs(ht)?"x":"y",ke=!0),He!=="y"&&(pe[2]+=Ae,z._vx.update(Ae,!0)),He!=="x"&&(We[2]+=ht,z._vy.update(ht,!0)),u?Ye||(Ye=requestAnimationFrame(ve)):ve()},lt=function(Ae){if(!Se(Ae,1)){Ae=Rl(Ae,c);var ht=Ae.clientX,me=Ae.clientY,Fe=ht-z.x,Le=me-z.y,Ve=z.isDragging;z.x=ht,z.y=me,(Ve||Math.abs(z.startX-ht)>=s||Math.abs(z.startY-me)>=s)&&(v&&(Ge=!0),Ve||(z.isDragging=!0),ze(Fe,Le),Ve||m&&m(z))}},N=z.onPress=function(be){Se(be,1)||be&&be.button||(z.axis=He=null,Xe.pause(),z.isPressed=!0,be=Rl(be),Qe=Ie=0,z.startX=z.x=be.clientX,z.startY=z.y=be.clientY,z._vx.reset(),z._vy.reset(),Fn(I?a:se,ji[1],lt,b,!0),z.deltaX=z.deltaY=0,x&&x(z))},ne=z.onRelease=function(be){if(!Se(be,1)){Nn(I?a:se,ji[1],lt,!0);var Ae=!isNaN(z.y-z.startY),ht=z.isDragging,me=ht&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Fe=Rl(be);!me&&Ae&&(z._vx.reset(),z._vy.reset(),c&&le&&xn.delayedCall(.08,function(){if(nu()-re>300&&!be.defaultPrevented){if(be.target.click)be.target.click();else if(se.createEvent){var Le=se.createEvent("MouseEvents");Le.initMouseEvent("click",!0,!0,gi,1,Fe.screenX,Fe.screenY,Fe.clientX,Fe.clientY,!1,!1,!1,!1,0,null),be.target.dispatchEvent(Le)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,d&&ht&&!I&&Xe.restart(!0),p&&ht&&p(z),S&&S(z,me)}},$=function(Ae){return Ae.touches&&Ae.touches.length>1&&(z.isGesturing=!0)&&K(Ae,z.isDragging)},J=function(){return(z.isGesturing=!1)||P(z)},ce=function(Ae){if(!Se(Ae)){var ht=E(),me=W();qe((ht-Q)*ee,(me-ie)*ee,1),Q=ht,ie=me,d&&Xe.restart(!0)}},fe=function(Ae){if(!Se(Ae)){Ae=Rl(Ae,c),te&&(at=!0);var ht=(Ae.deltaMode===1?l:Ae.deltaMode===2?gi.innerHeight:1)*g;qe(Ae.deltaX*ht,Ae.deltaY*ht,0),d&&!I&&Xe.restart(!0)}},je=function(Ae){if(!Se(Ae)){var ht=Ae.clientX,me=Ae.clientY,Fe=ht-z.x,Le=me-z.y;z.x=ht,z.y=me,L=!0,d&&Xe.restart(!0),(Fe||Le)&&ze(Fe,Le)}},yt=function(Ae){z.event=Ae,X(z)},Lt=function(Ae){z.event=Ae,q(z)},tt=function(Ae){return Se(Ae)||Rl(Ae,c)&&j(z)};Xe=z._dc=xn.delayedCall(f||.25,Ne).pause(),z.deltaX=z.deltaY=0,z._vx=u_(0,50,!0),z._vy=u_(0,50,!0),z.scrollX=E,z.scrollY=W,z.isDragging=z.isGesturing=z.isPressed=!1,I1(this),z.enable=function(be){return z.isEnabled||(Fn(Ee?se:a,"scroll",l_),o.indexOf("scroll")>=0&&Fn(Ee?se:a,"scroll",ce,b,ue),o.indexOf("wheel")>=0&&Fn(a,"wheel",fe,b,ue),(o.indexOf("touch")>=0&&L1||o.indexOf("pointer")>=0)&&(Fn(a,ji[0],N,b,ue),Fn(se,ji[2],ne),Fn(se,ji[3],ne),le&&Fn(a,"click",xe,!0,!0),j&&Fn(a,"click",tt),K&&Fn(se,"gesturestart",$),P&&Fn(se,"gestureend",J),X&&Fn(a,ro+"enter",yt),q&&Fn(a,ro+"leave",Lt),B&&Fn(a,ro+"move",je)),z.isEnabled=!0,be&&be.type&&N(be),ye&&ye(z)),z},z.disable=function(){z.isEnabled&&(Ta.filter(function(be){return be!==z&&iu(be.target)}).length||Nn(Ee?se:a,"scroll",l_),z.isPressed&&(z._vx.reset(),z._vy.reset(),Nn(I?a:se,ji[1],lt,!0)),Nn(Ee?se:a,"scroll",ce,ue),Nn(a,"wheel",fe,ue),Nn(a,ji[0],N,ue),Nn(se,ji[2],ne),Nn(se,ji[3],ne),Nn(a,"click",xe,!0),Nn(a,"click",tt),Nn(se,"gesturestart",$),Nn(se,"gestureend",J),Nn(a,ro+"enter",yt),Nn(a,ro+"leave",Lt),Nn(a,ro+"move",je),z.isEnabled=z.isPressed=z.isDragging=!1,Be&&Be(z))},z.kill=z.revert=function(){z.disable();var be=Ta.indexOf(z);be>=0&&Ta.splice(be,1),Hr===z&&(Hr=0)},Ta.push(z),I&&iu(a)&&(Hr=z),z.enable(_)},lD(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Kt.version="3.12.5";Kt.create=function(n){return new Kt(n)};Kt.register=O1;Kt.getAll=function(){return Ta.slice()};Kt.getById=function(n){return Ta.filter(function(e){return e.vars.id===n})[0]};U1()&&xn.registerPlugin(Kt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Te,aa,ct,Ft,Qi,Pt,k1,dd,zu,ru,kl,Hc,Cn,Bd,c_,Bn,Sx,Mx,la,z1,sp,B1,kn,f_,H1,V1,ls,d_,Vg,ka,Gg,hd,h_,op,Vc=1,Rn=Date.now,ap=Rn(),zi=0,zl=0,Ex=function(e,t,i){var r=pi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Tx=function(e,t){return t&&(!pi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},cD=function n(){return zl&&requestAnimationFrame(n)},wx=function(){return Bd=1},Ax=function(){return Bd=0},fr=function(e){return e},Bl=function(e){return Math.round(e*1e5)/1e5||0},G1=function(){return typeof window<"u"},W1=function(){return Te||G1()&&(Te=window.gsap)&&Te.registerPlugin&&Te},No=function(e){return!!~k1.indexOf(e)},X1=function(e){return(e==="Height"?Gg:ct["inner"+e])||Qi["client"+e]||Pt["client"+e]},Y1=function(e){return Us(e,"getBoundingClientRect")||(No(e)?function(){return Cf.width=ct.innerWidth,Cf.height=Gg,Cf}:function(){return Fr(e)})},fD=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Us(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?X1(s):e["client"+s])||0}},dD=function(e,t){return!t||~Sr.indexOf(e)?Y1(e):function(){return Cf}},_r=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Us(e,i))?o()-Y1(e)()[s]:No(e)?(Qi[i]||Pt[i])-X1(r):e[i]-e["offset"+r])},Gc=function(e,t){for(var i=0;i<la.length;i+=3)(!t||~t.indexOf(la[i+1]))&&e(la[i],la[i+1],la[i+2])},pi=function(e){return typeof e=="string"},Wn=function(e){return typeof e=="function"},Hl=function(e){return typeof e=="number"},so=function(e){return typeof e=="object"},Pl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},lp=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},sa=Math.abs,q1="left",j1="top",Wg="right",Xg="bottom",Eo="width",To="height",su="Right",ou="Left",au="Top",lu="Bottom",Qt="padding",Di="margin",sl="Width",Yg="Height",tn="px",Ii=function(e){return ct.getComputedStyle(e)},hD=function(e){var t=Ii(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Cx=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Fr=function(e,t){var i=t&&Ii(e)[c_]!=="matrix(1, 0, 0, 1, 0, 0)"&&Te.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},pd=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},$1=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},pD=function(e){return function(t){return Te.utils.snap($1(e),t)}},qg=function(e){var t=Te.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},mD=function(e){return function(t,i){return qg($1(e))(t,i.direction)}},Wc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},fn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},cn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Xc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Rx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Yc={toggleActions:"play",anticipatePin:0},md={top:0,left:0,center:.5,bottom:1,right:1},Ef=function(e,t){if(pi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in md?md[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},qc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,g=Ft.createElement("div"),_=No(i)||Us(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?Pt:i,v=e.indexOf("start")!==-1,x=v?u:c,S="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(S+=(r===rn?Wg:Xg)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],Tf(g,0,r,v),g},Tf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+sl]=1,s["border"+a+sl]=0,s[i.p]=t+"px",Te.set(e,s)},Je=[],p_={},Bu,Px=function(){return Rn()-zi>34&&(Bu||(Bu=requestAnimationFrame(Gr)))},oa=function(){(!kn||!kn.isPressed||kn.startX>Pt.clientWidth)&&(nt.cache++,kn?Bu||(Bu=requestAnimationFrame(Gr)):Gr(),zi||Oo("scrollStart"),zi=Rn())},up=function(){V1=ct.innerWidth,H1=ct.innerHeight},Vl=function(){nt.cache++,!Cn&&!B1&&!Ft.fullscreenElement&&!Ft.webkitFullscreenElement&&(!f_||V1!==ct.innerWidth||Math.abs(ct.innerHeight-H1)>ct.innerHeight*.25)&&dd.restart(!0)},Fo={},_D=[],K1=function n(){return cn(it,"scrollEnd",n)||_o(!0)},Oo=function(e){return Fo[e]&&Fo[e].map(function(t){return t()})||_D},di=[],Z1=function(e){for(var t=0;t<di.length;t+=5)(!e||di[t+4]&&di[t+4].query===e)&&(di[t].style.cssText=di[t+1],di[t].getBBox&&di[t].setAttribute("transform",di[t+2]||""),di[t+3].uncache=1)},jg=function(e,t){var i;for(Bn=0;Bn<Je.length;Bn++)i=Je[Bn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));hd=!0,t&&Z1(t),t||Oo("revert")},Q1=function(e,t){nt.cache++,(t||!Hn)&&nt.forEach(function(i){return Wn(i)&&i.cacheID++&&(i.rec=0)}),pi(e)&&(ct.history.scrollRestoration=Vg=e)},Hn,wo=0,bx,gD=function(){if(bx!==wo){var e=bx=wo;requestAnimationFrame(function(){return e===wo&&_o(!0)})}},J1=function(){Pt.appendChild(ka),Gg=!kn&&ka.offsetHeight||ct.innerHeight,Pt.removeChild(ka)},Lx=function(e){return zu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},_o=function(e,t){if(zi&&!e&&!hd){fn(it,"scrollEnd",K1);return}J1(),Hn=it.isRefreshing=!0,nt.forEach(function(r){return Wn(r)&&++r.cacheID&&(r.rec=r())});var i=Oo("refreshInit");z1&&it.sort(),t||jg(),nt.forEach(function(r){Wn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Je.slice(0).forEach(function(r){return r.refresh()}),hd=!1,Je.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),h_=1,Lx(!0),Je.forEach(function(r){var s=_r(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Lx(!1),h_=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),nt.forEach(function(r){Wn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Q1(Vg,1),dd.pause(),wo++,Hn=2,Gr(2),Je.forEach(function(r){return Wn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Hn=it.isRefreshing=!1,Oo("refresh")},m_=0,wf=1,uu,Gr=function(e){if(e===2||!Hn&&!hd){it.isUpdating=!0,uu&&uu.update(0);var t=Je.length,i=Rn(),r=i-ap>=50,s=t&&Je[0].scroll();if(wf=m_>s?-1:1,Hn||(m_=s),r&&(zi&&!Bd&&i-zi>200&&(zi=0,Oo("scrollEnd")),kl=ap,ap=i),wf<0){for(Bn=t;Bn-- >0;)Je[Bn]&&Je[Bn].update(0,r);wf=1}else for(Bn=0;Bn<t;Bn++)Je[Bn]&&Je[Bn].update(0,r);it.isUpdating=!1}Bu=0},__=[q1,j1,Xg,Wg,Di+lu,Di+su,Di+au,Di+ou,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Af=__.concat([Eo,To,"boxSizing","max"+sl,"max"+Yg,"position",Di,Qt,Qt+au,Qt+su,Qt+lu,Qt+ou]),vD=function(e,t,i){za(i);var r=e._gsap;if(r.spacerIsNative)za(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},cp=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=__.length,o=t.style,a=e.style,l;s--;)l=__[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Xg]=a[Wg]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Eo]=pd(e,Gn)+tn,o[To]=pd(e,rn)+tn,o[Qt]=a[Di]=a[j1]=a[q1]="0",za(r),a[Eo]=a["max"+sl]=i[Eo],a[To]=a["max"+Yg]=i[To],a[Qt]=i[Qt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},xD=/([A-Z])/g,za=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Te.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(xD,"-$1").toLowerCase())}},jc=function(e){for(var t=Af.length,i=e.style,r=[],s=0;s<t;s++)r.push(Af[s],i[Af[s]]);return r.t=e,r},yD=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Cf={left:0,top:0},Dx=function(e,t,i,r,s,o,a,l,u,c,d,f,h,g){Wn(e)&&(e=e(l)),pi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Ef("0"+e.substr(3),i):0));var _=h?h.time():0,m,p,v;if(h&&h.seek(0),isNaN(e)||(e=+e),Hl(e))h&&(e=Te.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),a&&Tf(a,i,r,!0);else{Wn(t)&&(t=t(l));var x=(e||"0").split(" "),S,C,w,M;v=Kn(t,l)||Pt,S=Fr(v)||{},(!S||!S.left&&!S.top)&&Ii(v).display==="none"&&(M=v.style.display,v.style.display="block",S=Fr(v),M?v.style.display=M:v.style.removeProperty("display")),C=Ef(x[0],S[r.d]),w=Ef(x[1]||"0",i),e=S[r.p]-u[r.p]-c+C+s-w,a&&Tf(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var R=e+i,D=o._isStart;m="scroll"+r.d2,Tf(o,R,r,D&&R>20||!D&&(d?Math.max(Pt[m],Qi[m]):o.parentNode[m])<=R+1),d&&(u=Fr(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+tn))}return h&&v&&(m=Fr(v),h.seek(f),p=Fr(v),h._caScrollDist=m[r.p]-p[r.p],e=e/h._caScrollDist*f),h&&h.seek(_),h?e:Math.round(e)},SD=/(webkit|moz|length|cssText|inset)/i,Ix=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Pt){e._stOrig=s.cssText,a=Ii(e);for(o in a)!+o&&!SD.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Te.core.getCache(e).uncache=1,t.appendChild(e)}},eE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=o,o}},$c=function(e,t,i){var r={};r[t.p]="+="+i,Te.set(e,r)},Ux=function(e,t){var i=Bs(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var f=o.tween,h=l.onComplete,g={};u=u||i();var _=eE(i,u,function(){f.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(u+c*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){nt.cache++,o.tween&&Gr()},l.onComplete=function(){o.tween=0,h&&h.call(f)},f=o.tween=Te.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},fn(e,"wheel",i.wheelHandler),it.isTouch&&fn(e,"touchmove",i.wheelHandler),s},it=function(){function n(t,i){aa||n.register(Te)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),d_(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!zl){this.update=this.refresh=this.kill=fr;return}i=Cx(pi(i)||Hl(i)||i.nodeType?{trigger:i}:i,Yc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,x=s.once,S=s.snap,C=s.pinReparent,w=s.pinSpacer,M=s.containerAnimation,R=s.fastScrollEnd,D=s.preventOverlaps,y=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Gn:rn,T=!d&&d!==0,U=Kn(i.scroller||ct),k=Te.core.getCache(U),X=No(U),q=("pinType"in i?i.pinType:Us(U,"pinType")||X&&"fixed")==="fixed",B=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],Y=T&&i.toggleActions.split(" "),I="markers"in i?i.markers:Yc.markers,K=X?0:parseFloat(Ii(U)["border"+y.p2+sl])||0,P=this,te=i.onRefreshInit&&function(){return i.onRefreshInit(P)},ye=fD(U,X,y),Be=dD(U,X),j=0,ee=0,ue=0,le=Bs(U,y),Re,we,Ye,Xe,Ge,L,at,ke,He,z,Qe,Ie,b,E,W,Q,ie,Z,Ee,se,pe,We,re,xe,Se,Ne,ve,qe,ze,lt,N,ne,$,J,ce,fe,je,yt,Lt;if(P._startClamp=P._endClamp=!1,P._dir=y,m*=45,P.scroller=U,P.scroll=M?M.time.bind(M):le,Xe=le(),P.vars=i,r=r||i.animation,"refreshPriority"in i&&(z1=1,i.refreshPriority===-9999&&(uu=P)),k.tweenScroll=k.tweenScroll||{top:Ux(U,rn),left:Ux(U,Gn)},P.tweenTo=Re=k.tweenScroll[y.p],P.scrubDuration=function(me){$=Hl(me)&&me,$?ne?ne.duration(me):ne=Te.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:$,paused:!0,onComplete:function(){return p&&p(P)}}):(ne&&ne.progress(1).kill(),ne=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(d),lt=0,l||(l=r.vars.id)),S&&((!so(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in Pt.style&&Te.set(X?[Pt,Qi]:U,{scrollBehavior:"auto"}),nt.forEach(function(me){return Wn(me)&&me.target===(X?Ft.scrollingElement||Qi:U)&&(me.smooth=!1)}),Ye=Wn(S.snapTo)?S.snapTo:S.snapTo==="labels"?pD(r):S.snapTo==="labelsDirectional"?mD(r):S.directional!==!1?function(me,Fe){return qg(S.snapTo)(me,Rn()-ee<500?0:Fe.direction)}:Te.utils.snap(S.snapTo),J=S.duration||{min:.1,max:2},J=so(J)?ru(J.min,J.max):ru(J,J),ce=Te.delayedCall(S.delay||$/2||.1,function(){var me=le(),Fe=Rn()-ee<500,Le=Re.tween;if((Fe||Math.abs(P.getVelocity())<10)&&!Le&&!Bd&&j!==me){var Ve=(me-L)/E,Xt=r&&!T?r.totalProgress():Ve,$e=Fe?0:(Xt-N)/(Rn()-kl)*1e3||0,Dt=Te.utils.clamp(-Ve,1-Ve,sa($e/2)*$e/.185),Yt=Ve+(S.inertia===!1?0:Dt),wt,St,gt=S,li=gt.onStart,At=gt.onInterrupt,A=gt.onComplete;if(wt=Ye(Yt,P),Hl(wt)||(wt=Yt),St=Math.round(L+wt*E),me<=at&&me>=L&&St!==me){if(Le&&!Le._initted&&Le.data<=sa(St-me))return;S.inertia===!1&&(Dt=wt-Ve),Re(St,{duration:J(sa(Math.max(sa(Yt-Xt),sa(wt-Xt))*.185/$e/.05||0)),ease:S.ease||"power3",data:sa(St-me),onInterrupt:function(){return ce.restart(!0)&&At&&At(P)},onComplete:function(){P.update(),j=le(),r&&(ne?ne.resetTo("totalProgress",wt,r._tTime/r._tDur):r.progress(wt)),lt=N=r&&!T?r.totalProgress():P.progress,v&&v(P),A&&A(P)}},me,Dt*E,St-me-Dt*E),li&&li(P,Re.tween)}}else P.isActive&&j!==me&&ce.restart(!0)}).pause()),l&&(p_[l]=P),f=P.trigger=Kn(f||h!==!0&&h),Lt=f&&f._gsap&&f._gsap.stRevert,Lt&&(Lt=Lt(P)),h=h===!0?f:Kn(h),pi(a)&&(a={targets:f,className:a}),h&&(g===!1||g===Di||(g=!g&&h.parentNode&&h.parentNode.style&&Ii(h.parentNode).display==="flex"?!1:Qt),P.pin=h,we=Te.core.getCache(h),we.spacer?W=we.pinState:(w&&(w=Kn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),we.spacerIsNative=!!w,w&&(we.spacerState=jc(w))),we.spacer=Z=w||Ft.createElement("div"),Z.classList.add("pin-spacer"),l&&Z.classList.add("pin-spacer-"+l),we.pinState=W=jc(h)),i.force3D!==!1&&Te.set(h,{force3D:!0}),P.spacer=Z=we.spacer,ze=Ii(h),xe=ze[g+y.os2],se=Te.getProperty(h),pe=Te.quickSetter(h,y.a,tn),cp(h,Z,ze),ie=jc(h)),I){Ie=so(I)?Cx(I,Rx):Rx,z=qc("scroller-start",l,U,y,Ie,0),Qe=qc("scroller-end",l,U,y,Ie,0,z),Ee=z["offset"+y.op.d2];var tt=Kn(Us(U,"content")||U);ke=this.markerStart=qc("start",l,tt,y,Ie,Ee,0,M),He=this.markerEnd=qc("end",l,tt,y,Ie,Ee,0,M),M&&(yt=Te.quickSetter([ke,He],y.a,tn)),!q&&!(Sr.length&&Us(U,"fixedMarkers")===!0)&&(hD(X?Pt:U),Te.set([z,Qe],{force3D:!0}),Ne=Te.quickSetter(z,y.a,tn),qe=Te.quickSetter(Qe,y.a,tn))}if(M){var be=M.vars.onUpdate,Ae=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){P.update(0,0,1),be&&be.apply(M,Ae||[])})}if(P.previous=function(){return Je[Je.indexOf(P)-1]},P.next=function(){return Je[Je.indexOf(P)+1]},P.revert=function(me,Fe){if(!Fe)return P.kill(!0);var Le=me!==!1||!P.enabled,Ve=Cn;Le!==P.isReverted&&(Le&&(fe=Math.max(le(),P.scroll.rec||0),ue=P.progress,je=r&&r.progress()),ke&&[ke,He,z,Qe].forEach(function(Xt){return Xt.style.display=Le?"none":"block"}),Le&&(Cn=P,P.update(Le)),h&&(!C||!P.isActive)&&(Le?vD(h,Z,W):cp(h,Z,Ii(h),Se)),Le||P.update(Le),Cn=Ve,P.isReverted=Le)},P.refresh=function(me,Fe,Le,Ve){if(!((Cn||!P.enabled)&&!Fe)){if(h&&me&&zi){fn(n,"scrollEnd",K1);return}!Hn&&te&&te(P),Cn=P,Re.tween&&!Le&&(Re.tween.kill(),Re.tween=0),ne&&ne.pause(),_&&r&&r.revert({kill:!1}).invalidate(),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Xt=ye(),$e=Be(),Dt=M?M.duration():_r(U,y),Yt=E<=.01,wt=0,St=Ve||0,gt=so(Le)?Le.end:i.end,li=i.endTrigger||f,At=so(Le)?Le.start:i.start||(i.start===0||!f?0:h?"0 0":"0 100%"),A=P.pinnedContainer=i.pinnedContainer&&Kn(i.pinnedContainer,P),O=f&&Math.max(0,Je.indexOf(P))||0,H=O,G,F,ae,ge,he,de,Pe,Oe,Ce,ut,st,xt,ln;for(I&&so(Le)&&(xt=Te.getProperty(z,y.p),ln=Te.getProperty(Qe,y.p));H--;)de=Je[H],de.end||de.refresh(0,1)||(Cn=P),Pe=de.pin,Pe&&(Pe===f||Pe===h||Pe===A)&&!de.isReverted&&(ut||(ut=[]),ut.unshift(de),de.revert(!0,!0)),de!==Je[H]&&(O--,H--);for(Wn(At)&&(At=At(P)),At=Ex(At,"start",P),L=Dx(At,f,Xt,y,le(),ke,z,P,$e,K,q,Dt,M,P._startClamp&&"_startClamp")||(h?-.001:0),Wn(gt)&&(gt=gt(P)),pi(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(pi(At)?At.split(" ")[0]:"")+gt:(wt=Ef(gt.substr(2),Xt),gt=pi(At)?At:(M?Te.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,L):L)+wt,li=f)),gt=Ex(gt,"end",P),at=Math.max(L,Dx(gt||(li?"100% 0":Dt),li,Xt,y,le()+wt,He,Qe,P,$e,K,q,Dt,M,P._endClamp&&"_endClamp"))||-.001,wt=0,H=O;H--;)de=Je[H],Pe=de.pin,Pe&&de.start-de._pinPush<=L&&!M&&de.end>0&&(G=de.end-(P._startClamp?Math.max(0,de.start):de.start),(Pe===f&&de.start-de._pinPush<L||Pe===A)&&isNaN(At)&&(wt+=G*(1-de.progress)),Pe===h&&(St+=G));if(L+=wt,at+=wt,P._startClamp&&(P._startClamp+=wt),P._endClamp&&!Hn&&(P._endClamp=at||-.001,at=Math.min(at,_r(U,y))),E=at-L||(L-=.01)&&.001,Yt&&(ue=Te.utils.clamp(0,1,Te.utils.normalize(L,at,fe))),P._pinPush=St,ke&&wt&&(G={},G[y.a]="+="+wt,A&&(G[y.p]="-="+le()),Te.set([ke,He],G)),h&&!(h_&&P.end>=_r(U,y)))G=Ii(h),ge=y===rn,ae=le(),We=parseFloat(se(y.a))+St,!Dt&&at>1&&(st=(X?Ft.scrollingElement||Qi:U).style,st={style:st,value:st["overflow"+y.a.toUpperCase()]},X&&Ii(Pt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(st.style["overflow"+y.a.toUpperCase()]="scroll")),cp(h,Z,G),ie=jc(h),F=Fr(h,!0),Oe=q&&Bs(U,ge?Gn:rn)(),g?(Se=[g+y.os2,E+St+tn],Se.t=Z,H=g===Qt?pd(h,y)+E+St:0,H&&(Se.push(y.d,H+tn),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=H+tn)),za(Se),A&&Je.forEach(function(ot){ot.pin===A&&ot.vars.pinSpacing!==!1&&(ot._subPinOffset=!0)}),q&&le(fe)):(H=pd(h,y),H&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=H+tn)),q&&(he={top:F.top+(ge?ae-L:Oe)+tn,left:F.left+(ge?Oe:ae-L)+tn,boxSizing:"border-box",position:"fixed"},he[Eo]=he["max"+sl]=Math.ceil(F.width)+tn,he[To]=he["max"+Yg]=Math.ceil(F.height)+tn,he[Di]=he[Di+au]=he[Di+su]=he[Di+lu]=he[Di+ou]="0",he[Qt]=G[Qt],he[Qt+au]=G[Qt+au],he[Qt+su]=G[Qt+su],he[Qt+lu]=G[Qt+lu],he[Qt+ou]=G[Qt+ou],Q=yD(W,he,C),Hn&&le(0)),r?(Ce=r._initted,sp(1),r.render(r.duration(),!0,!0),re=se(y.a)-We+E+St,ve=Math.abs(E-re)>1,q&&ve&&Q.splice(Q.length-2,2),r.render(0,!0,!0),Ce||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),sp(0)):re=E,st&&(st.value?st.style["overflow"+y.a.toUpperCase()]=st.value:st.style.removeProperty("overflow-"+y.a));else if(f&&le()&&!M)for(F=f.parentNode;F&&F!==Pt;)F._pinOffset&&(L-=F._pinOffset,at-=F._pinOffset),F=F.parentNode;ut&&ut.forEach(function(ot){return ot.revert(!1,!0)}),P.start=L,P.end=at,Xe=Ge=Hn?fe:le(),!M&&!Hn&&(Xe<fe&&le(fe),P.scroll.rec=0),P.revert(!1,!0),ee=Rn(),ce&&(j=-1,ce.restart(!0)),Cn=0,r&&T&&(r._initted||je)&&r.progress()!==je&&r.progress(je||0,!0).render(r.time(),!0,!0),(Yt||ue!==P.progress||M||_)&&(r&&!T&&r.totalProgress(M&&L<-.001&&!ue?Te.utils.normalize(L,at,0):ue,!0),P.progress=Yt||(Xe-L)/E===ue?0:ue),h&&g&&(Z._pinOffset=Math.round(P.progress*re)),ne&&ne.invalidate(),isNaN(xt)||(xt-=Te.getProperty(z,y.p),ln-=Te.getProperty(Qe,y.p),$c(z,y,xt),$c(ke,y,xt-(Ve||0)),$c(Qe,y,ln),$c(He,y,ln-(Ve||0))),Yt&&!Hn&&P.update(),c&&!Hn&&!b&&(b=!0,c(P),b=!1)}},P.getVelocity=function(){return(le()-Ge)/(Rn()-kl)*1e3||0},P.endAnimation=function(){Pl(P.callbackAnimation),r&&(ne?ne.progress(1):r.paused()?T||Pl(r,P.direction<0,1):Pl(r,r.reversed()))},P.labelToScroll=function(me){return r&&r.labels&&(L||P.refresh()||L)+r.labels[me]/r.duration()*E||0},P.getTrailing=function(me){var Fe=Je.indexOf(P),Le=P.direction>0?Je.slice(0,Fe).reverse():Je.slice(Fe+1);return(pi(me)?Le.filter(function(Ve){return Ve.vars.preventOverlaps===me}):Le).filter(function(Ve){return P.direction>0?Ve.end<=L:Ve.start>=at})},P.update=function(me,Fe,Le){if(!(M&&!Le&&!me)){var Ve=Hn===!0?fe:P.scroll(),Xt=me?0:(Ve-L)/E,$e=Xt<0?0:Xt>1?1:Xt||0,Dt=P.progress,Yt,wt,St,gt,li,At,A,O;if(Fe&&(Ge=Xe,Xe=M?le():Ve,S&&(N=lt,lt=r&&!T?r.totalProgress():$e)),m&&h&&!Cn&&!Vc&&zi&&(!$e&&L<Ve+(Ve-Ge)/(Rn()-kl)*m?$e=1e-4:$e===1&&at>Ve+(Ve-Ge)/(Rn()-kl)*m&&($e=.9999)),$e!==Dt&&P.enabled){if(Yt=P.isActive=!!$e&&$e<1,wt=!!Dt&&Dt<1,At=Yt!==wt,li=At||!!$e!=!!Dt,P.direction=$e>Dt?1:-1,P.progress=$e,li&&!Cn&&(St=$e&&!Dt?0:$e===1?1:Dt===1?2:3,T&&(gt=!At&&Y[St+1]!=="none"&&Y[St+1]||Y[St],O=r&&(gt==="complete"||gt==="reset"||gt in r))),D&&(At||O)&&(O||d||!r)&&(Wn(D)?D(P):P.getTrailing(D).forEach(function(ae){return ae.endAnimation()})),T||(ne&&!Cn&&!Vc?(ne._dp._time-ne._start!==ne._time&&ne.render(ne._dp._time-ne._start),ne.resetTo?ne.resetTo("totalProgress",$e,r._tTime/r._tDur):(ne.vars.totalProgress=$e,ne.invalidate().restart())):r&&r.totalProgress($e,!!(Cn&&(ee||me)))),h){if(me&&g&&(Z.style[g+y.os2]=xe),!q)pe(Bl(We+re*$e));else if(li){if(A=!me&&$e>Dt&&at+1>Ve&&Ve+1>=_r(U,y),C)if(!me&&(Yt||A)){var H=Fr(h,!0),G=Ve-L;Ix(h,Pt,H.top+(y===rn?G:0)+tn,H.left+(y===rn?0:G)+tn)}else Ix(h,Z);za(Yt||A?Q:ie),ve&&$e<1&&Yt||pe(We+($e===1&&!A?re:0))}}S&&!Re.tween&&!Cn&&!Vc&&ce.restart(!0),a&&(At||x&&$e&&($e<1||!op))&&zu(a.targets).forEach(function(ae){return ae.classList[Yt||x?"add":"remove"](a.className)}),o&&!T&&!me&&o(P),li&&!Cn?(T&&(O&&(gt==="complete"?r.pause().totalProgress(1):gt==="reset"?r.restart(!0).pause():gt==="restart"?r.restart(!0):r[gt]()),o&&o(P)),(At||!op)&&(u&&At&&lp(P,u),B[St]&&lp(P,B[St]),x&&($e===1?P.kill(!1,1):B[St]=0),At||(St=$e===1?1:3,B[St]&&lp(P,B[St]))),R&&!Yt&&Math.abs(P.getVelocity())>(Hl(R)?R:2500)&&(Pl(P.callbackAnimation),ne?ne.progress(1):Pl(r,gt==="reverse"?1:!$e,1))):T&&o&&!Cn&&o(P)}if(qe){var F=M?Ve/M.duration()*(M._caScrollDist||0):Ve;Ne(F+(z._isFlipped?1:0)),qe(F)}yt&&yt(-Ve/M.duration()*(M._caScrollDist||0))}},P.enable=function(me,Fe){P.enabled||(P.enabled=!0,fn(U,"resize",Vl),X||fn(U,"scroll",oa),te&&fn(n,"refreshInit",te),me!==!1&&(P.progress=ue=0,Xe=Ge=j=le()),Fe!==!1&&P.refresh())},P.getTween=function(me){return me&&Re?Re.tween:ne},P.setPositions=function(me,Fe,Le,Ve){if(M){var Xt=M.scrollTrigger,$e=M.duration(),Dt=Xt.end-Xt.start;me=Xt.start+Dt*me/$e,Fe=Xt.start+Dt*Fe/$e}P.refresh(!1,!1,{start:Tx(me,Le&&!!P._startClamp),end:Tx(Fe,Le&&!!P._endClamp)},Ve),P.update()},P.adjustPinSpacing=function(me){if(Se&&me){var Fe=Se.indexOf(y.d)+1;Se[Fe]=parseFloat(Se[Fe])+me+tn,Se[1]=parseFloat(Se[1])+me+tn,za(Se)}},P.disable=function(me,Fe){if(P.enabled&&(me!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,Fe||ne&&ne.pause(),fe=0,we&&(we.uncache=1),te&&cn(n,"refreshInit",te),ce&&(ce.pause(),Re.tween&&Re.tween.kill()&&(Re.tween=0)),!X)){for(var Le=Je.length;Le--;)if(Je[Le].scroller===U&&Je[Le]!==P)return;cn(U,"resize",Vl),X||cn(U,"scroll",oa)}},P.kill=function(me,Fe){P.disable(me,Fe),ne&&!Fe&&ne.kill(),l&&delete p_[l];var Le=Je.indexOf(P);Le>=0&&Je.splice(Le,1),Le===Bn&&wf>0&&Bn--,Le=0,Je.forEach(function(Ve){return Ve.scroller===P.scroller&&(Le=1)}),Le||Hn||(P.scroll.rec=0),r&&(r.scrollTrigger=null,me&&r.revert({kill:!1}),Fe||r.kill()),ke&&[ke,He,z,Qe].forEach(function(Ve){return Ve.parentNode&&Ve.parentNode.removeChild(Ve)}),uu===P&&(uu=0),h&&(we&&(we.uncache=1),Le=0,Je.forEach(function(Ve){return Ve.pin===h&&Le++}),Le||(we.spacer=0)),i.onKill&&i.onKill(P)},Je.push(P),P.enable(!1,!1),Lt&&Lt(P),r&&r.add&&!E){var ht=P.update;P.update=function(){P.update=ht,L||at||P.refresh()},Te.delayedCall(.01,P.update),E=.01,L=at=0}else P.refresh();h&&gD()},n.register=function(i){return aa||(Te=i||W1(),G1()&&window.document&&n.enable(),aa=zl),aa},n.defaults=function(i){if(i)for(var r in i)Yc[r]=i[r];return Yc},n.disable=function(i,r){zl=0,Je.forEach(function(o){return o[r?"kill":"disable"](i)}),cn(ct,"wheel",oa),cn(Ft,"scroll",oa),clearInterval(Hc),cn(Ft,"touchcancel",fr),cn(Pt,"touchstart",fr),Wc(cn,Ft,"pointerdown,touchstart,mousedown",wx),Wc(cn,Ft,"pointerup,touchend,mouseup",Ax),dd.kill(),Gc(cn);for(var s=0;s<nt.length;s+=3)Xc(cn,nt[s],nt[s+1]),Xc(cn,nt[s],nt[s+2])},n.enable=function(){if(ct=window,Ft=document,Qi=Ft.documentElement,Pt=Ft.body,Te&&(zu=Te.utils.toArray,ru=Te.utils.clamp,d_=Te.core.context||fr,sp=Te.core.suppressOverwrites||fr,Vg=ct.history.scrollRestoration||"auto",m_=ct.pageYOffset,Te.core.globals("ScrollTrigger",n),Pt)){zl=1,ka=document.createElement("div"),ka.style.height="100vh",ka.style.position="absolute",J1(),cD(),Kt.register(Te),n.isTouch=Kt.isTouch,ls=Kt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),f_=Kt.isTouch===1,fn(ct,"wheel",oa),k1=[ct,Ft,Qi,Pt],Te.matchMedia?(n.matchMedia=function(l){var u=Te.matchMedia(),c;for(c in l)u.add(c,l[c]);return u},Te.addEventListener("matchMediaInit",function(){return jg()}),Te.addEventListener("matchMediaRevert",function(){return Z1()}),Te.addEventListener("matchMedia",function(){_o(0,1),Oo("matchMedia")}),Te.matchMedia("(orientation: portrait)",function(){return up(),up})):console.warn("Requires GSAP 3.11.0 or later"),up(),fn(Ft,"scroll",oa);var i=Pt.style,r=i.borderTopStyle,s=Te.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Fr(Pt),rn.m=Math.round(o.top+rn.sc())||0,Gn.m=Math.round(o.left+Gn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),Hc=setInterval(Px,250),Te.delayedCall(.5,function(){return Vc=0}),fn(Ft,"touchcancel",fr),fn(Pt,"touchstart",fr),Wc(fn,Ft,"pointerdown,touchstart,mousedown",wx),Wc(fn,Ft,"pointerup,touchend,mouseup",Ax),c_=Te.utils.checkPrefix("transform"),Af.push(c_),aa=Rn(),dd=Te.delayedCall(.2,_o).pause(),la=[Ft,"visibilitychange",function(){var l=ct.innerWidth,u=ct.innerHeight;Ft.hidden?(Sx=l,Mx=u):(Sx!==l||Mx!==u)&&Vl()},Ft,"DOMContentLoaded",_o,ct,"load",_o,ct,"resize",Vl],Gc(fn),Je.forEach(function(l){return l.enable(0,1)}),a=0;a<nt.length;a+=3)Xc(cn,nt[a],nt[a+1]),Xc(cn,nt[a],nt[a+2])}},n.config=function(i){"limitCallbacks"in i&&(op=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Hc)||(Hc=r)&&setInterval(Px,r),"ignoreMobileResize"in i&&(f_=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Gc(cn)||Gc(fn,i.autoRefreshEvents||"none"),B1=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Kn(i),o=nt.indexOf(s),a=No(s);~o&&nt.splice(o,a?6:2),r&&(a?Sr.unshift(ct,r,Pt,r,Qi,r):Sr.unshift(s,r))},n.clearMatchMedia=function(i){Je.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(pi(i)?Kn(i):i).getBoundingClientRect(),a=o[s?Eo:To]*r||0;return s?o.right-a>0&&o.left+a<ct.innerWidth:o.bottom-a>0&&o.top+a<ct.innerHeight},n.positionInViewport=function(i,r,s){pi(i)&&(i=Kn(i));var o=i.getBoundingClientRect(),a=o[s?Eo:To],l=r==null?a/2:r in md?md[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ct.innerWidth:(o.top+l)/ct.innerHeight},n.killAll=function(i){if(Je.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Fo.killAll||[];Fo={},r.forEach(function(s){return s()})}},n}();it.version="3.12.5";it.saveStyles=function(n){return n?zu(n).forEach(function(e){if(e&&e.style){var t=di.indexOf(e);t>=0&&di.splice(t,5),di.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Te.core.getCache(e),d_())}}):di};it.revert=function(n,e){return jg(!n,e)};it.create=function(n,e){return new it(n,e)};it.refresh=function(n){return n?Vl():(aa||it.register())&&_o(!0)};it.update=function(n){return++nt.cache&&Gr(n===!0?2:0)};it.clearScrollMemory=Q1;it.maxScroll=function(n,e){return _r(n,e?Gn:rn)};it.getScrollFunc=function(n,e){return Bs(Kn(n),e?Gn:rn)};it.getById=function(n){return p_[n]};it.getAll=function(){return Je.filter(function(n){return n.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!zi};it.snapDirectional=qg;it.addEventListener=function(n,e){var t=Fo[n]||(Fo[n]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(n,e){var t=Fo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};it.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],f=[],h=Te.delayedCall(r,function(){c(d,f),d=[],f=[]}).pause();return function(g){d.length||h.restart(!0),d.push(g.trigger),f.push(g),s<=d.length&&h.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Wn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Wn(s)&&(s=s(),fn(it,"refresh",function(){return s=e.batchMax()})),zu(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(it.create(u))}),t};var Nx=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},fp=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Kt.isTouch?" pinch-zoom":""):"none",e===Qi&&n(Pt,t)},Kc={auto:1,scroll:1},MD=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Te.core.getCache(s),a=Rn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Kc[(l=Ii(s)).overflowY]||Kc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!No(s)&&(Kc[(l=Ii(s)).overflowY]||Kc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},tE=function(e,t,i,r){return Kt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&MD,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&fn(Ft,Kt.eventTypes[0],Ox,!1,!0)},onDisable:function(){return cn(Ft,Kt.eventTypes[0],Ox,!0)}})},ED=/(input|label|select|textarea)/i,Fx,Ox=function(e){var t=ED.test(e.target.tagName);(t||Fx)&&(e._gsapAllow=!0,Fx=t)},TD=function(e){so(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=Kn(e.target)||Qi,c=Te.core.globals().ScrollSmoother,d=c&&c.get(),f=ls&&(e.content&&Kn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Bs(u,rn),g=Bs(u,Gn),_=1,m=(Kt.isTouch&&ct.visualViewport?ct.visualViewport.scale*ct.visualViewport.width:ct.outerWidth)/ct.innerWidth,p=0,v=Wn(r)?function(){return r(a)}:function(){return r||2.8},x,S,C=tE(u,e.type,!0,s),w=function(){return S=!1},M=fr,R=fr,D=function(){l=_r(u,rn),R=ru(ls?1:0,l),i&&(M=ru(0,_r(u,Gn))),x=wo},y=function(){f._gsap.y=Bl(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},T=function(){if(S){requestAnimationFrame(w);var I=Bl(a.deltaY/2),K=R(h.v-I);if(f&&K!==h.v+h.offset){h.offset=K-h.v;var P=Bl((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",h.cacheID=nt.cache,Gr()}return!0}h.offset&&y(),S=!0},U,k,X,q,B=function(){D(),U.isActive()&&U.vars.scrollY>l&&(h()>l?U.progress(1)&&h(l):U.resetTo("scrollY",l))};return f&&Te.set(f,{y:"+=0"}),e.ignoreCheck=function(Y){return ls&&Y.type==="touchmove"&&T()||_>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){S=!1;var Y=_;_=Bl((ct.visualViewport&&ct.visualViewport.scale||1)/m),U.pause(),Y!==_&&fp(u,_>1.01?!0:i?!1:"x"),k=g(),X=h(),D(),x=wo},e.onRelease=e.onGestureStart=function(Y,I){if(h.offset&&y(),!I)q.restart(!0);else{nt.cache++;var K=v(),P,te;i&&(P=g(),te=P+K*.05*-Y.velocityX/.227,K*=Nx(g,P,te,_r(u,Gn)),U.vars.scrollX=M(te)),P=h(),te=P+K*.05*-Y.velocityY/.227,K*=Nx(h,P,te,_r(u,rn)),U.vars.scrollY=R(te),U.invalidate().duration(K).play(.01),(ls&&U.vars.scrollY>=l||P>=l-1)&&Te.to({},{onUpdate:B,duration:K})}o&&o(Y)},e.onWheel=function(){U._ts&&U.pause(),Rn()-p>1e3&&(x=0,p=Rn())},e.onChange=function(Y,I,K,P,te){if(wo!==x&&D(),I&&i&&g(M(P[2]===I?k+(Y.startX-Y.x):g()+I-P[1])),K){h.offset&&y();var ye=te[2]===K,Be=ye?X+Y.startY-Y.y:h()+K-te[1],j=R(Be);ye&&Be!==j&&(X+=j-Be),h(j)}(K||I)&&Gr()},e.onEnable=function(){fp(u,i?!1:"x"),it.addEventListener("refresh",B),fn(ct,"resize",B),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),C.enable()},e.onDisable=function(){fp(u,!0),cn(ct,"resize",B),it.removeEventListener("refresh",B),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new Kt(e),a.iOS=ls,ls&&!h()&&h(1),ls&&Te.ticker.add(fr),q=a._dc,U=Te.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:eE(h,h(),function(){return U.pause()})},onUpdate:Gr,onComplete:q.vars.onComplete}),a};it.sort=function(n){return Je.sort(n||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};it.observe=function(n){return new Kt(n)};it.normalizeScroll=function(n){if(typeof n>"u")return kn;if(n===!0&&kn)return kn.enable();if(n===!1){kn&&kn.kill(),kn=n;return}var e=n instanceof Kt?n:TD(n);return kn&&kn.target===e.target&&kn.kill(),No(e.target)&&(kn=e),e};it.core={_getVelocityProp:u_,_inputObserver:tE,_scrollers:nt,_proxies:Sr,bridge:{ss:function(){zi||Oo("scrollStart"),zi=Rn()},ref:function(){return Cn}}};W1()&&Te.registerPlugin(it);const dp=[{code:"MTIK",color:"#FFFFB1",city:"Mito",province:"Ibaraki",country:"Japan",latitude:36.3658333,longitude:140.47125},{code:"TYMA",color:"#8a12ff",city:"Toyama",province:"Toyama",country:"Japan",latitude:36.6959167,longitude:137.213694},{code:"TYJP",color:"#ff8080",city:"Tokyo",province:"Shinjuku",country:"Japan",latitude:35.7013889,longitude:139.709722},{code:"IKJP",color:"#AAD9B1",city:"Ichikawa",province:"Chiba",country:"Japan",latitude:35.7219167,longitude:139.931056},{code:"MFTX",color:"#8f8fff",city:"Mansfield",province:"Texas",country:"United States",latitude:32.779167,longitude:-96.808891},{code:"BNMA",color:"#8fffff",city:"Boston",province:"Massachusetts",country:"United States",latitude:42.3602778,longitude:-71.0577778},{code:"DNTX",color:"#ff8fff",city:"Denton",province:"Texas",country:"United States",latitude:33.2163889,longitude:-97.1291667},{code:"VLCA",color:"#A4D7F1",city:"Valencia",province:"California",country:"United States",latitude:34.42,longitude:-118.6},{code:"AUTX",color:"#E6F57E",city:"Austin",province:"Texas",country:"United States",latitude:30.2672222,longitude:-97.7430556},{code:"ARTX",color:"#3F69F1",city:"Arlington",province:"Texas",country:"United States",latitude:32.705,longitude:97.1227778},{code:"FWTX",color:"#5651F3",city:"Fort Worth",province:"Texas",country:"United States",latitude:32.7769444,longitude:-97.3325},{code:"MDMA",color:"#EAB8D1",city:"Medway",province:"Massachusetts",country:"United States",latitude:42.1416667,longitude:-71.3972222},{code:"DBPN",color:"#FAC898",city:"Darby",province:"Pennsylvania",country:"United States",latitude:39.9183333,longitude:-75.2583333}],wD=[{from:"MTIK",to:"TYJP",arcHeight:.3,color:"#FDF1B1"},{from:"TYMA",to:"TYJP",arcHeight:1,color:"#af0a12"},{from:"TYJP",to:"IKJP",arcHeight:.5,color:"#ff8fff"},{from:"IKJP",to:"TYMA",arcHeight:.3,color:"#5f8aaf"},{from:"TYJP",to:"FWTX",arcHeight:5,color:"#00ff70"},{from:"BNMA",to:"VLCA",arcHeight:4,color:"#8a12ff"},{from:"VLCA",to:"MDMA",arcHeight:4,color:"#8f8fff"},{from:"MDMA",to:"ARTX",arcHeight:3,color:"#AFF961"},{from:"ARTX",to:"AUTX",arcHeight:3.5,color:"#0Ff931"},{from:"AUTX",to:"ARTX",arcHeight:5,color:"#0f7a7a"},{from:"ARTX",to:"TYJP",arcHeight:4,color:"#bf6aaa"},{from:"FWTX",to:"MFTX",arcHeight:.2,color:"#FDFFD1"}];lo.registerPlugin(it);const Ba=new H2,ol=10,Zc=new vn(new Mr(ol,12),new O2({map:Ba.load("src/assets/textures/earthmap4k.jpg"),specularMap:Ba.load("src/assets/textures/earthspec4k.jpg"),bumpMap:Ba.load("src/assets/textures/earthbump4k.jpg"),bumpScale:15})),Qc=new vn(new Mr(ol,12),new Lu({map:Ba.load("src/assets/textures/earthlights4k.jpg"),blending:Ru})),bl=new vn(new Mr(ol,12),new F2({map:Ba.load("src/assets/textures/earthhiresclouds4K.jpg"),alphaMap:Ba.load("src/assets/textures/earthcloudmaptrans.jpg"),blending:Ru,transparent:!0,opacity:.8})),kx=new vn(new Mr(ol,12),Y2()),AD=()=>{const[n,e]=cu.useState(!0),t=()=>{const i=new b2,r=new _s;r.rotation.z=-23.4*Math.PI/180,i.add(r),bl.scale.setScalar(1.01),kx.scale.setScalar(1.012),r.add(Zc,Qc,bl,kx);const s=new X2(16777215,2);s.position.set(-2,-.5,2.6),i.add(s);const o=new _s,a=new _s;return(()=>{dp.forEach(u=>{const c=ix(ol,u);a.add(c)}),wD.forEach(u=>{const c=dp.find(h=>h.code===u.from),d=dp.find(h=>h.code===u.to),f=ix(ol,c,d,u);o.add(f)})})(),r.add(o,a),{scene:i,earthGroup:r,pathGroup:o,markerGroup:a}};return cu.useEffect(()=>{const{scene:i,earthGroup:r,pathGroup:s,markerGroup:o}=t();i.rotation.set(0,0,0);const a=new P2({antialias:!0,alpha:!0});a.setPixelRatio(window.devicePixelRatio),a.setSize(window.innerWidth,window.innerHeight),a.toneMapping=JS,a.outputColorSpace=Jr;const l=new Li(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.set(0,0,25),document.body.appendChild(a.domElement),a.domElement.classList.add("top-0","left-0","w-full","h-full","z-0"),Object.assign(a.domElement.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",zIndex:"999"}),(()=>{const p=document.querySelector(".counter");let v=0;const x=100,S=()=>{let C=Math.floor(Math.random()*5)+5;v=Math.min(v+C,x),p&&(p.textContent=v.toString()),v<x?setTimeout(()=>requestAnimationFrame(S),300):p.textContent=x.toString()};S()})();const c=lo.timeline();c.to(".counter",{duration:.7,delay:6.3,opacity:0}).to(".bar",{duration:1.5,height:0,stagger:{amount:.5},ease:"power4.inOut"},"-=1.25").fromTo(".h1",{duration:2,y:1e3,ease:"power4.inOut"},{y:0,stagger:{amount:.5}},"<.75").add(()=>{e(!1),h()});let d=.06;const f={value:d},h=()=>{(()=>{const x=lo.timeline({scrollTrigger:{trigger:".hero",scrub:.7,start:"top top",end:"top+=25% top"},defaults:{duration:1.2,ease:"power2.inOut"}}),S=lo.timeline({scrollTrigger:{trigger:".hero",scrub:.7,start:"top+=25% top",end:"top+=50% top"},defaults:{duration:1.2,ease:"power2.inOut"}}),C=lo.timeline({scrollTrigger:{trigger:".section",scrub:.7,snap:{snapTo:1/8.1},start:"top top",end:"top+=90% top"},defaults:{duration:1.2,ease:"power2.inOut"}}),w=0,M=s.children[w];if(M instanceof LM)var R=M.material.color;const D=10,y=o.children[w].children[1],T=o.children[w].children[0];let U=1;y instanceof vn&&y.geometry instanceof Mr&&(U=y.geometry.parameters.radius);let k=1;if(T instanceof vn&&T.geometry instanceof Mr){k=T.geometry.parameters.radius;var X=T.material}x.to(f,{value:-25,onUpdate:()=>{d=f.value}},0);const q=[.2,1,-.3,.7,-.5,1.3];S.to(f,{value:-.06,onUpdate:()=>{d=f.value}},0).to(s.rotation,{y:q[0]},0).to(o.rotation,{y:q[0]},0).to(Qc.rotation,{y:q[0]},0).to(Zc.rotation,{y:q[0]},0).to(bl.rotation,{y:q[0]},0),C.to(r.position,{x:-7},0).to(l.position,{z:20},0).to(r.rotation,{y:5},0).to(R,{r:255,g:255,b:255},0).to(y.scale,{x:D*U,y:D*U,z:D*U},0).to(T.scale,{x:D*k,y:D*k,z:D*k},0).to(X,{opacity:.8},0);const B=lo.timeline({defaults:{duration:1.2,ease:"power2.inOut"}});B.to(r.position,{x:7},0).to(s.rotation,{y:q[1]},0).to(o.rotation,{y:q[1]},0).to(Qc.rotation,{y:q[1]},0).to(Zc.rotation,{y:q[1]},0).to(bl.rotation,{y:q[1]},0),C.add(B),C.to(r.position,{x:-7}).to(r.position,{x:7}).to(r.position,{x:-7}).to(r.position,{x:7}).to(r.position,{x:-7}).to(r.position,{x:7}),c.add(x).add(S,"+=0").add(C,"+=0")})()},g=()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",g);let _=performance.now();const m=()=>{const p=performance.now(),v=(p-_)/1e3;_=p,s.rotation.y=o.rotation.y=Qc.rotation.y=Zc.rotation.y+=d*v,bl.rotation.y+=(d+.012)*v,requestAnimationFrame(m),a.render(i,l)};return m(),()=>{it.getAll().forEach(p=>p.kill()),c.kill(),window.removeEventListener("resize",g),a.dispose(),i.clear(),document.body.removeChild(a.domElement)}},[]),Ue.jsxs("main",{children:[Ue.jsxs("div",{className:"hero",children:[Ue.jsx("h1",{className:"counter",children:"0"}),Ue.jsxs("div",{className:"overlay",children:[Ue.jsx("div",{className:"bar"}),Ue.jsx("div",{className:"bar"}),Ue.jsx("div",{className:"bar"}),Ue.jsx("div",{className:"bar"}),Ue.jsx("div",{className:"bar"}),Ue.jsx("div",{className:"bar"}),Ue.jsx("div",{className:"bar"}),Ue.jsx("div",{className:"bar"}),Ue.jsx("div",{className:"bar"}),Ue.jsx("div",{className:"bar"})]}),Ue.jsxs("div",{className:"header",children:[Ue.jsx("div",{className:"h1",children:"M"}),Ue.jsx("div",{className:"h1",children:"i"}),Ue.jsx("div",{className:"h1",children:"g"}),Ue.jsx("div",{className:"h1",children:"r"}),Ue.jsx("div",{className:"h1",children:"a"}),Ue.jsx("div",{className:"h1",children:"t"}),Ue.jsx("div",{className:"h1",children:"i"}),Ue.jsx("div",{className:"h1",children:"o"}),Ue.jsx("div",{className:"h1",children:"n"})]})]}),Ue.jsx("img",{src:"src/assets/images/birds.svg",className:"bg"}),!n&&Ue.jsxs(Ue.Fragment,{children:[Ue.jsx("section",{className:"section-two",children:Ue.jsx("div",{className:"align-right",children:Ue.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),Ue.jsx("section",{className:"section-three",children:Ue.jsx("div",{className:"align-left",children:Ue.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),Ue.jsx("section",{className:"section-four",children:Ue.jsx("div",{className:"align-right",children:Ue.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),Ue.jsx("section",{className:"section-five",children:Ue.jsx("div",{className:"align-left",children:Ue.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),Ue.jsx("section",{className:"section-six",children:Ue.jsx("div",{className:"align-right",children:Ue.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),Ue.jsx("section",{className:"section-seven",children:Ue.jsx("div",{className:"align-left",children:Ue.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),Ue.jsx("section",{className:"section-eight",children:Ue.jsx("div",{className:"align-right",children:Ue.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),Ue.jsx("section",{className:"section-nine",children:Ue.jsx("div",{className:"align-left",children:Ue.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})})]})]})};ZS(document.getElementById("root")).render(Ue.jsx(cu.StrictMode,{children:Ue.jsx(AD,{})}));
