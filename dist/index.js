"use strict";var w=function(v,a){return function(){return a||v((a={exports:{}}).exports,a),a.exports}};var E=w(function(P,_){
var e=require('@stdlib/number-float64-base-to-float32/dist'),u=require('@stdlib/math-base-assert-is-nanf/dist'),Z=require('@stdlib/math-base-special-floor/dist'),b=128;function j(v,a,n,S){var r,o,q,p,m,c,l,t,y,R,s,i,f;if(v<=0)return 0;if(r=S,n===0)return u(a[r])?0:v*a[r];if(v<8){for(s=0,f=0;f<v;f++)u(a[r])===!1&&(s=e(s+a[r])),r+=n;return s}if(v<=b){for(o=u(a[r])?0:a[r],r+=n,q=u(a[r])?0:a[r],r+=n,p=u(a[r])?0:a[r],r+=n,m=u(a[r])?0:a[r],r+=n,c=u(a[r])?0:a[r],r+=n,l=u(a[r])?0:a[r],r+=n,t=u(a[r])?0:a[r],r+=n,y=u(a[r])?0:a[r],r+=n,R=v%8,f=8;f<v-R;f+=8)o=u(a[r])?o:e(o+a[r]),r+=n,q=u(a[r])?q:e(q+a[r]),r+=n,p=u(a[r])?p:e(p+a[r]),r+=n,m=u(a[r])?m:e(m+a[r]),r+=n,c=u(a[r])?c:e(c+a[r]),r+=n,l=u(a[r])?l:e(l+a[r]),r+=n,t=u(a[r])?t:e(t+a[r]),r+=n,y=u(a[r])?y:e(y+a[r]),r+=n;for(s=e(e(e(o+q)+e(p+m))+e(e(c+l)+e(t+y))),f;f<v;f++)u(a[r])===!1&&(s=e(s+a[r])),r+=n;return s}return i=Z(v/2),i-=i%8,e(j(i,a,n,r)+j(v-i,a,n,r+i*n))}_.exports=j
});var C=w(function(Q,B){
var g=require('@stdlib/strided-base-stride2offset/dist'),h=E();function k(v,a,n){return h(v,a,n,g(v,n))}B.exports=k
});var L=w(function(T,K){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),I=C(),A=E();z(I,"ndarray",A);K.exports=I
});var D=require("path").join,F=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=L(),O,M=F(D(__dirname,"./native.js"));G(M)?O=H:O=M;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
