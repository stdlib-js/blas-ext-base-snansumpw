"use strict";var j=function(u,a){return function(){return a||u((a={exports:{}}).exports,a),a.exports}};var F=j(function(P,T){
var e=require('@stdlib/number-float64-base-to-float32/dist'),v=require('@stdlib/math-base-assert-is-nanf/dist'),S=require('@stdlib/math-base-special-floor/dist'),Z=128;function E(u,a,n,f){var r,i,l,p,m,c,t,w,y,R,q,s,o;if(u<=0)return 0;if(u===1||n===0)return v(a[f])?0:a[f];if(r=f,u<8){for(q=0,o=0;o<u;o++)v(a[r])===!1&&(q=e(q+a[r])),r+=n;return q}if(u<=Z){for(i=v(a[r])?0:a[r],r+=n,l=v(a[r])?0:a[r],r+=n,p=v(a[r])?0:a[r],r+=n,m=v(a[r])?0:a[r],r+=n,c=v(a[r])?0:a[r],r+=n,t=v(a[r])?0:a[r],r+=n,w=v(a[r])?0:a[r],r+=n,y=v(a[r])?0:a[r],r+=n,R=u%8,o=8;o<u-R;o+=8)i=v(a[r])?i:e(i+a[r]),r+=n,l=v(a[r])?l:e(l+a[r]),r+=n,p=v(a[r])?p:e(p+a[r]),r+=n,m=v(a[r])?m:e(m+a[r]),r+=n,c=v(a[r])?c:e(c+a[r]),r+=n,t=v(a[r])?t:e(t+a[r]),r+=n,w=v(a[r])?w:e(w+a[r]),r+=n,y=v(a[r])?y:e(y+a[r]),r+=n;for(q=e(e(e(i+l)+e(p+m))+e(e(c+t)+e(w+y))),o;o<u;o++)v(a[r])===!1&&(q=e(q+a[r])),r+=n;return q}return s=S(u/2),s-=s%8,e(E(s,a,n,r)+E(u-s,a,n,r+s*n))}T.exports=E
});var C=j(function(Q,B){
var b=require('@stdlib/number-float64-base-to-float32/dist'),_=require('@stdlib/math-base-assert-is-nanf/dist'),g=F();function h(u,a,n){var f,r,i;if(u<=0)return 0;if(u===1||n===0)return _(a[0])?0:a[0];if(n<0?f=(1-u)*n:f=0,u<8){for(r=0,i=0;i<u;i++)_(a[f])===!1&&(r=b(r+a[f])),f+=n;return r}return g(u,a,n,f)}B.exports=h
});var L=j(function(U,K){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),I=C(),z=F();k(I,"ndarray",z);K.exports=I
});var A=require("path").join,D=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=L(),O,M=D(A(__dirname,"./native.js"));G(M)?O=H:O=M;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
