/*!
 * Crafted with ❤ by Salla
 */
const e=typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{};function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}var t=r;var i=n;if(typeof e.setTimeout==="function"){t=setTimeout}if(typeof e.clearTimeout==="function"){i=clearTimeout}function o(e){if(t===setTimeout){return setTimeout(e,0)}if((t===r||!t)&&setTimeout){t=setTimeout;return setTimeout(e,0)}try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}function u(e){if(i===clearTimeout){return clearTimeout(e)}if((i===n||!i)&&clearTimeout){i=clearTimeout;return clearTimeout(e)}try{return i(e)}catch(r){try{return i.call(null,e)}catch(r){return i.call(this,e)}}}var a=[];var f=false;var s;var c=-1;function l(){if(!f||!s){return}f=false;if(s.length){a=s.concat(a)}else{c=-1}if(a.length){v()}}function v(){if(f){return}var e=o(l);f=true;var r=a.length;while(r){s=a;a=[];while(++c<r){if(s){s[c].run()}}c=-1;r=a.length}s=null;f=false;u(e)}function d(e){var r=new Array(arguments.length-1);if(arguments.length>1){for(var n=1;n<arguments.length;n++){r[n-1]=arguments[n]}}a.push(new w(e,r));if(a.length===1&&!f){o(v)}}function w(e,r){this.fun=e;this.array=r}w.prototype.run=function(){this.fun.apply(null,this.array)};var h="browser";var m="browser";var p=true;var y={};var T=[];var b="";var g={};var E={};var D={};function x(){}var L=x;var j=x;var k=x;var q=x;var A=x;var M=x;var O=x;function z(e){throw new Error("process.binding is not supported")}function B(){return"/"}function C(e){throw new Error("process.chdir is not supported")}function F(){return 0}var G=e.performance||{};var H=G.now||G.mozNow||G.msNow||G.oNow||G.webkitNow||function(){return(new Date).getTime()};function I(e){var r=H.call(G)*.001;var n=Math.floor(r);var t=Math.floor(r%1*1e9);if(e){n=n-e[0];t=t-e[1];if(t<0){n--;t+=1e9}}return[n,t]}var J=new Date;function K(){var e=new Date;var r=e-J;return r/1e3}var N={nextTick:d,title:h,browser:p,env:y,argv:T,version:b,versions:g,on:L,addListener:j,once:k,off:q,removeListener:A,removeAllListeners:M,emit:O,binding:z,cwd:B,chdir:C,umask:F,hrtime:I,platform:m,release:E,config:D,uptime:K};var P=typeof globalThis!=="undefined"?globalThis:typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};function Q(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e["default"]:e}function R(e,r,n){return n={path:r,exports:{},require:function(e,r){return S()}},e(n,n.exports),n.exports}function S(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}export{R as a,N as b,P as c,Q as d,e as g};
//# sourceMappingURL=p-410eaa03.js.map