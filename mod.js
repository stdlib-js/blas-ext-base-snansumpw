// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,i=n.__lookupSetter__;var f=e,c=function(r,t,e){var f,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(l.call(r,t)||i.call(r,t)?(f=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=f):r[t]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,e.get),p&&u&&u.call(r,t,e.set),r},y=t()?f:c;var p=function(r,t,e){y(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},v="function"==typeof Math.fround?Math.fround:null;var _=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return _&&"symbol"==typeof Symbol.toStringTag},d=Object.prototype.toString,m=d;var s=function(r){return m.call(r)},g=Object.prototype.hasOwnProperty;var j=function(r,t){return null!=r&&g.call(r,t)},w="function"==typeof Symbol?Symbol.toStringTag:"",h=j,S=w,A=d;var F=s,O=function(r){var t,e,n;if(null==r)return A.call(r);e=r[S],t=h(r,S);try{r[S]=void 0}catch(t){return A.call(r)}return n=A.call(r),t?r[S]=e:delete r[S],n},P=b()?O:F,T="function"==typeof Float32Array;var E=function(r){return T&&r instanceof Float32Array||"[object Float32Array]"===P(r)},I=Number.POSITIVE_INFINITY,M="function"==typeof Float32Array?Float32Array:null,N=E,V=I,k=M;var x="function"==typeof Float32Array?Float32Array:void 0,G=function(){throw new Error("not implemented")},C=new(function(){var r,t;if("function"!=typeof k)return!1;try{t=new k([1,3.14,-3.14,5e40]),r=N(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===V}catch(t){r=!1}return r}()?x:G)(1);var Y=v;"function"!=typeof Y&&(Y=function(r){return C[0]=r,C[0]});var q=Y;var z=function(r){return r!=r},B=Math.floor;function D(r,t,e,n){var o,a,u,l,i,f,c,y,p,v,_,b,d;if(r<=0)return 0;if(1===r||0===e)return z(t[n])?0:t[n];if(o=n,r<8){for(_=0,d=0;d<r;d++)!1===z(t[o])&&(_=q(_+t[o])),o+=e;return _}if(r<=128){for(a=z(t[o])?0:t[o],u=z(t[o+=e])?0:t[o],l=z(t[o+=e])?0:t[o],i=z(t[o+=e])?0:t[o],f=z(t[o+=e])?0:t[o],c=z(t[o+=e])?0:t[o],y=z(t[o+=e])?0:t[o],p=z(t[o+=e])?0:t[o],o+=e,v=r%8,d=8;d<r-v;d+=8)a=z(t[o])?a:q(a+t[o]),u=z(t[o+=e])?u:q(u+t[o]),l=z(t[o+=e])?l:q(l+t[o]),i=z(t[o+=e])?i:q(i+t[o]),f=z(t[o+=e])?f:q(f+t[o]),c=z(t[o+=e])?c:q(c+t[o]),y=z(t[o+=e])?y:q(y+t[o]),p=z(t[o+=e])?p:q(p+t[o]),o+=e;for(_=q(q(q(a+u)+q(l+i))+q(q(f+c)+q(y+p)));d<r;d++)!1===z(t[o])&&(_=q(_+t[o])),o+=e;return _}return b=B(r/2),q(D(b-=b%8,t,e,o)+D(r-b,t,e,o+b*e))}function H(r,t,e){var n,o,a;if(r<=0)return 0;if(1===r||0===e)return z(t[0])?0:t[0];if(n=e<0?(1-r)*e:0,r<8){for(o=0,a=0;a<r;a++)!1===z(t[n])&&(o=q(o+t[n])),n+=e;return o}return D(r,t,e,n)}p(H,"ndarray",D);export{H as default,D as ndarray};
//# sourceMappingURL=mod.js.map
