// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,l=n.__defineSetter__,a=n.__lookupGetter__,i=n.__lookupSetter__,f=r,c=function(t,e,r){var f,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(a.call(t,e)||i.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),y="get"in r,p="set"in r,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,e,r.get),p&&l&&l.call(t,e,r.set),t},y=e()?f:c,p=function(t,e,r){y(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},b="function"==typeof Math.fround?Math.fround:null,d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=Object.prototype.toString,s=_,m=function(t){return s.call(t)},v=Object.prototype.hasOwnProperty,g=function(t,e){return null!=t&&v.call(t,e)},h="function"==typeof Symbol?Symbol.toStringTag:"",j=g,w=h,S=_,A=m,F=function(t){var e,r,n;if(null==t)return S.call(t);r=t[w],e=j(t,w);try{t[w]=void 0}catch(e){return S.call(t)}return n=S.call(t),e?t[w]=r:delete t[w],n},O=d&&"symbol"==typeof Symbol.toStringTag?F:A,T="function"==typeof Float32Array,P=function(t){return T&&t instanceof Float32Array||"[object Float32Array]"===O(t)},E=Number.POSITIVE_INFINITY,I="function"==typeof Float32Array?Float32Array:null,x=P,M=E,N=I,V="function"==typeof Float32Array?Float32Array:void 0,k=function(){throw new Error("not implemented")},G=new(function(){var t,e;if("function"!=typeof N)return!1;try{e=new N([1,3.14,-3.14,5e40]),t=x(e)&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===M}catch(e){t=!1}return t}()?V:k)(1),C=b;"function"!=typeof C&&(C=function(t){return G[0]=t,G[0]});var Y=C,q=function(t){return t!=t},z=Math.floor;function B(t,e,r,n){var o,u,l,a,i,f,c,y,p,b,d,_,s;if(t<=0)return 0;if(1===t||0===r)return q(e[n])?0:e[n];if(o=n,t<8){for(d=0,s=0;s<t;s++)!1===q(e[o])&&(d=Y(d+e[o])),o+=r;return d}if(t<=128){for(u=q(e[o])?0:e[o],l=q(e[o+=r])?0:e[o],a=q(e[o+=r])?0:e[o],i=q(e[o+=r])?0:e[o],f=q(e[o+=r])?0:e[o],c=q(e[o+=r])?0:e[o],y=q(e[o+=r])?0:e[o],p=q(e[o+=r])?0:e[o],o+=r,b=t%8,s=8;s<t-b;s+=8)u=q(e[o])?u:Y(u+e[o]),l=q(e[o+=r])?l:Y(l+e[o]),a=q(e[o+=r])?a:Y(a+e[o]),i=q(e[o+=r])?i:Y(i+e[o]),f=q(e[o+=r])?f:Y(f+e[o]),c=q(e[o+=r])?c:Y(c+e[o]),y=q(e[o+=r])?y:Y(y+e[o]),p=q(e[o+=r])?p:Y(p+e[o]),o+=r;for(d=Y(Y(Y(u+l)+Y(a+i))+Y(Y(f+c)+Y(y+p)));s<t;s++)!1===q(e[o])&&(d=Y(d+e[o])),o+=r;return d}return _=z(t/2),Y(B(_-=_%8,e,r,o)+B(t-_,e,r,o+_*r))}function D(t,e,r){var n,o,u;if(t<=0)return 0;if(1===t||0===r)return q(e[0])?0:e[0];if(n=r<0?(1-t)*r:0,t<8){for(o=0,u=0;u<t;u++)!1===q(e[n])&&(o=Y(o+e[n])),n+=r;return o}return B(t,e,r,n)}return p(D,"ndarray",B),D},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).snansumpw=e();
//# sourceMappingURL=index.js.map
