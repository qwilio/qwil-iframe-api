/* qwil-iframe-api version 0.1.0 built Mon, 03 Jun 2024 15:40:19 GMT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.QwilApi=t():e.QwilApi=t()}(this,(()=>(()=>{"use strict";var e={7:e=>{var t,n="object"==typeof Reflect?Reflect:null,r=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function s(){s.init.call(this)}e.exports=s,e.exports.once=function(e,t){return new Promise((function(n,r){function o(n){e.removeListener(t,s),r(n)}function s(){"function"==typeof e.removeListener&&e.removeListener("error",o),n([].slice.call(arguments))}v(e,t,s,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&v(e,"error",t,{once:!0})}(e,o)}))},s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var i=10;function a(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function d(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function l(e,t,n,r){var o,s,i,l;if(a(n),void 0===(s=e._events)?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),i=s[t]),void 0===i)i=s[t]=n,++e._eventsCount;else if("function"==typeof i?i=s[t]=r?[n,i]:[i,n]:r?i.unshift(n):i.push(n),(o=d(e))>0&&i.length>o&&!i.warned){i.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+i.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=i.length,l=c,console&&console.warn&&console.warn(l)}return e}function c(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function p(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=c.bind(r);return o.listener=n,r.wrapFn=o,o}function u(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):f(o,o.length)}function h(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function f(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function v(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function o(s){r.once&&e.removeEventListener(t,o),n(s)}))}}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return i},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");i=e}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return d(this)},s.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var o="error"===e,s=this._events;if(void 0!==s)o=o&&void 0===s.error;else if(!o)return!1;if(o){var i;if(t.length>0&&(i=t[0]),i instanceof Error)throw i;var a=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw a.context=i,a}var d=s[e];if(void 0===d)return!1;if("function"==typeof d)r(d,this,t);else{var l=d.length,c=f(d,l);for(n=0;n<l;++n)r(c[n],this,t)}return!0},s.prototype.addListener=function(e,t){return l(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return l(this,e,t,!0)},s.prototype.once=function(e,t){return a(t),this.on(e,p(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,p(this,e,t)),this},s.prototype.removeListener=function(e,t){var n,r,o,s,i;if(a(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,s=n.length-1;s>=0;s--)if(n[s]===t||n[s].listener===t){i=n[s].listener,o=s;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,i||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,s=Object.keys(n);for(r=0;r<s.length;++r)"removeListener"!==(o=s[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},s.prototype.listeners=function(e){return u(this,e,!0)},s.prototype.rawListeners=function(e){return u(this,e,!1)},s.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},s.prototype.listenerCount=h,s.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};return(()=>{n.d(r,{default:()=>h});var e=n(7),t=n.n(e);function o(e){var t,n=e.scope,r=e.window,o=e.windowForEventListening||window,s={},i=[],a={},d=!1,l="__ready__",c=function(e){var t;try{t=JSON.parse(e.data)}catch(e){return}if(t.postis&&t.scope===n){var r=s[t.method];if(r)for(var o=0;o<r.length;o++)r[o].call(null,t.params);else a[t.method]=a[t.method]||[],a[t.method].push(t.params)}};o.addEventListener("message",c,!1);var p={listen:function(e,t){s[e]=s[e]||[],s[e].push(t);var n=a[e];if(n)for(var r=s[e],o=0;o<r.length;o++)for(var i=0;i<n.length;i++)r[o].call(null,n[i]);delete a[e]},send:function(e){var t=e.method;(d||e.method===l)&&r&&"function"==typeof r.postMessage?r.postMessage(JSON.stringify({postis:!0,scope:n,method:t,params:e.params}),"*"):i.push(e)},ready:function(e){d?e():setTimeout((function(){p.ready(e)}),50)},destroy:function(e){clearInterval(t),d=!1,o&&"function"==typeof o.removeEventListener&&o.removeEventListener("message",c),e&&e()}},u=+new Date+Math.random()+"";return t=setInterval((function(){p.send({method:l,params:u})}),50),p.listen(l,(function(e){if(e===u){clearInterval(t),d=!0;for(var n=0;n<i.length;n++)p.send(i[n]);i=[]}else p.send({method:l,params:e})})),p}class s{constructor(e){const{scope:t,window:n}=e;this.postis=o({scope:t,window:n}),this._handleMessage=e=>{console.error("Unhandled incoming message",e)},this.postis.listen("api",(e=>this._handleMessage(e)))}send(e){this.postis.send({method:"api",params:e})}setMessageHandler(e){this._handleMessage=e}destroy(){this.postis.destroy()}}const i="event",a="request",d="response";class l{constructor({scope:e,window:t,eventHandler:n,requestHandler:r}={}){this._reqId=0,this._responseHandlers=new Map,this._eventHandler=n,this._requestHandler=r,this._backend=new s({scope:e,window:t}),this._backend.setMessageHandler(this._onMessageReceived.bind(this))}sendEvent(e,t){this._backend.send({type:i,data:{event:e,payload:t}})}sendRequest(e,t){const n=this._reqId++;return new Promise(((r,o)=>{this._responseHandlers.set(n,(({error:e,result:t})=>{void 0!==t?r(t):o(void 0!==e?e:new Error(`Unexpected response format for ${n}`))}));try{this._backend.send({type:a,data:{id:n,request:e,payload:t}})}catch(e){this._responseHandlers.delete(n),o(e)}}))}_onMessageReceived(e){const{type:t,data:n}=e;if(t===i){const{event:t,payload:r}=n;t?this._eventHandler({event:t,payload:r}):console.error("Received message with unknown format",e)}else if(t===a){const{id:e,request:t,payload:r}=n,o=this._requestHandler;o&&o({request:t,payload:r,onComplete:({result:t,error:n})=>{this._backend.send({type:d,data:{id:e,result:t,error:n}})}})}else if(t===d){const{id:e,error:t,result:r}=n,o=this._responseHandlers.get(e);o?(o({error:t,result:r}),this._responseHandlers.delete(e)):console.error(`Unexpected response id ${e}`)}else console.error(`Received message with invalid type ${t}`)}destroy(){this._backend.destroy()}}let c="(unknown)";try{c="0.1.0"}catch(e){}console.log(`Qwil IFrame API (version ${c})`);const p=c;let u=0;class h extends(t()){version=p;constructor(e){super();const{token:t,endpoint:n,options:r={},onLoad:o,onError:s,width:i="100%",height:a="100%",appDomain:d="sdk.qwil.io",replaceTargetContent:c=!0,targetElement:p=document.body}=e;this._ready=!1,this._id=u++;const h=`channel-${this._id}`,f=`#scope=${h}`;let v=`https://${d}/${f}`;r?.customUrl&&(v=`${r.customUrl}${f}`),this._frame=function(e){const{parentElement:t=document.body,replaceTargetContent:n,width:r="100%",height:o="100%",url:s,id:i}=e,a=`QwilFrame${i}`,d=document.createElement("iframe");return d.name=a,d.id=a,d.style.border="0",d.style.width=r,d.style.height=o,d.allow=["clipboard-write"].join("; "),d.src=s,n&&(t.innerHTML=""),t.appendChild(d)}({url:v,width:i,height:a,replaceTargetContent:c,parentElement:p,id:this._id}),this._transport=new l({scope:h,window:this._frame.contentWindow,eventHandler:this._handleEvent.bind(this)}),console.debug("Waiting for app to load"),this.once("__loaded",(()=>{console.debug("App loaded"),console.debug("Logging in"),this._doLogin({token:t,endpoint:n,options:r}).then((()=>{console.debug("Login successful"),this._ready=!0,this.emit("ready"),o&&o(this)})).catch((e=>{console.error("App login failed",e),s&&s(e)}))}))}sendCommand(e,t){this._ready?this._transport.sendEvent("__command",{command:e,payload:t}):console.error(`Command "${e}" sent before API is ready`)}reauthenticate({token:e,endpoint:t,options:n}){return this._doLogin({token:e,endpoint:t,options:n})}_doLogin({token:e,endpoint:t,options:n}){return this._transport.sendRequest("__login",{token:e,endpoint:t,options:n})}_handleEvent({event:e,payload:t}){this.emit(e,t)}destroy(){this.removeAllListeners(),this._transport.destroy(),this._frame&&this._frame.parentNode&&this._frame.parentNode.removeChild(this._frame)}}})(),r.default})()));