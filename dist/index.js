"use strict";var w=function(v,a){return function(){return a||v((a={exports:{}}).exports,a),a.exports}};var E=w(function(J,_){
var e=require('@stdlib/number-float64-base-to-float32/dist'),u=require('@stdlib/math-base-assert-is-nanf/dist'),S=require('@stdlib/math-base-special-floor/dist'),T=128;function j(v,a,n,M){var r,i,q,p,l,m,t,c,y,R,o,s,f;if(v<=0)return 0;if(r=M,n===0)return u(a[r])?0:v*a[r];if(v<8){for(o=0,f=0;f<v;f++)u(a[r])===!1&&(o=e(o+a[r])),r+=n;return o}if(v<=T){for(i=u(a[r])?0:a[r],r+=n,q=u(a[r])?0:a[r],r+=n,p=u(a[r])?0:a[r],r+=n,l=u(a[r])?0:a[r],r+=n,m=u(a[r])?0:a[r],r+=n,t=u(a[r])?0:a[r],r+=n,c=u(a[r])?0:a[r],r+=n,y=u(a[r])?0:a[r],r+=n,R=v%8,f=8;f<v-R;f+=8)i=u(a[r])?i:e(i+a[r]),r+=n,q=u(a[r])?q:e(q+a[r]),r+=n,p=u(a[r])?p:e(p+a[r]),r+=n,l=u(a[r])?l:e(l+a[r]),r+=n,m=u(a[r])?m:e(m+a[r]),r+=n,t=u(a[r])?t:e(t+a[r]),r+=n,c=u(a[r])?c:e(c+a[r]),r+=n,y=u(a[r])?y:e(y+a[r]),r+=n;for(o=e(e(e(i+q)+e(p+l))+e(e(m+t)+e(c+y))),f;f<v;f++)u(a[r])===!1&&(o=e(o+a[r])),r+=n;return o}return s=S(v/2),s-=s%8,e(j(s,a,n,r)+j(v-s,a,n,r+s*n))}_.exports=j
});var C=w(function(P,B){
var Z=require('@stdlib/strided-base-stride2offset/dist'),b=E();function g(v,a,n){return b(v,a,n,Z(v,n))}B.exports=g
});var K=w(function(Q,I){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=C(),k=E();h(F,"ndarray",k);I.exports=F
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),G=K(),O,L=A(z(__dirname,"./native.js"));D(L)?O=G:O=L;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
