import{g as ie,a as xm,s as _m}from"./supabase-DTAWS9fV.js";const Vu="181",vm=0,vf=1,ym=2,Yh=1,Kh=2,Ni=3,qi=0,Dn=1,gi=2,zi=0,us=1,yf=2,bf=3,Mf=4,bm=5,Tr=100,Mm=101,Sm=102,Tm=103,Em=104,wm=200,Am=201,Rm=202,Cm=203,Il=204,Dl=205,Pm=206,Lm=207,Im=208,Dm=209,Um=210,Nm=211,Fm=212,Om=213,Bm=214,Ul=0,Nl=1,Fl=2,xs=3,Ol=4,Bl=5,kl=6,zl=7,jh=0,km=1,zm=2,Vi=0,Vm=1,Hm=2,Gm=3,Wm=4,Xm=5,qm=6,Ym=7,Sf="attached",Km="detached",$h=300,_s=301,vs=302,Vl=303,Hl=304,nc=306,ys=1e3,jn=1001,za=1002,wn=1003,Zh=1004,js=1005,Wt=1006,wa=1007,xi=1008,Ti=1009,Jh=1010,Qh=1011,_o=1012,Hu=1013,Lr=1014,In=1015,_i=1016,Gu=1017,Wu=1018,vo=1020,ep=35902,tp=35899,np=1021,ip=1022,$n=1023,yo=1026,bo=1027,Xu=1028,qu=1029,Yu=1030,Ku=1031,ju=1033,Aa=33776,Ra=33777,Ca=33778,Pa=33779,Gl=35840,Wl=35841,Xl=35842,ql=35843,Yl=36196,Kl=37492,jl=37496,$l=37808,Zl=37809,Jl=37810,Ql=37811,eu=37812,tu=37813,nu=37814,iu=37815,ru=37816,su=37817,ou=37818,au=37819,cu=37820,lu=37821,uu=36492,fu=36494,du=36495,hu=36283,pu=36284,mu=36285,gu=36286,Mo=2300,So=2301,dc=2302,Tf=2400,Ef=2401,wf=2402,jm=2500,$m=0,rp=1,xu=2,Zm=3200,Jm=3201,sp=0,Qm=1,sr="",Pt="srgb",hn="srgb-linear",Va="linear",wt="srgb",Vr=7680,Af=519,e0=512,t0=513,n0=514,op=515,i0=516,r0=517,s0=518,o0=519,_u=35044,Rf="300 es",vi=2e3,Ha=2001;function ap(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function To(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function a0(){const r=To("canvas");return r.style.display="block",r}const Cf={};function Ga(...r){const e="THREE."+r.shift();console.log(e,...r)}function Fe(...r){const e="THREE."+r.shift();console.warn(e,...r)}function ct(...r){const e="THREE."+r.shift();console.error(e,...r)}function Eo(...r){const e=r.join(" ");e in Cf||(Cf[e]=!0,Fe(...r))}function c0(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pf=1234567;const io=Math.PI/180,bs=180/Math.PI;function ai(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[r&255]+on[r>>8&255]+on[r>>16&255]+on[r>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function $u(r,e){return(r%e+e)%e}function l0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function u0(r,e,t){return r!==e?(t-r)/(e-r):0}function ro(r,e,t){return(1-t)*r+t*e}function f0(r,e,t,n){return ro(r,e,1-Math.exp(-t*n))}function d0(r,e=1){return e-Math.abs($u(r,e*2)-e)}function h0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function p0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function m0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function g0(r,e){return r+Math.random()*(e-r)}function x0(r){return r*(.5-Math.random())}function _0(r){r!==void 0&&(Pf=r);let e=Pf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v0(r){return r*io}function y0(r){return r*bs}function b0(r){return(r&r-1)===0&&r!==0}function M0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function S0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function T0(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),d=o((e-n)/2),h=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,c*f,c*d,a*l);break;case"YZY":r.set(c*d,a*u,c*f,a*l);break;case"ZXZ":r.set(c*f,c*d,a*u,a*l);break;case"XZX":r.set(a*u,c*g,c*h,a*l);break;case"YXY":r.set(c*h,a*u,c*g,a*l);break;case"ZYZ":r.set(c*g,c*h,a*u,a*l);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function si(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Mt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Po={DEG2RAD:io,RAD2DEG:bs,generateUUID:ai,clamp:at,euclideanModulo:$u,mapLinear:l0,inverseLerp:u0,lerp:ro,damp:f0,pingpong:d0,smoothstep:h0,smootherstep:p0,randInt:m0,randFloat:g0,randFloatSpread:x0,seededRandom:_0,degToRad:v0,radToDeg:y0,isPowerOfTwo:b0,ceilPowerOfTwo:M0,floorPowerOfTwo:S0,setQuaternionFromProperEuler:T0,normalize:Mt,denormalize:si};class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3],d=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a>=1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==d||l!==h||u!==g){let m=c*d+l*h+u*g+f*_;m<0&&(d=-d,h=-h,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const T=Math.acos(m),v=Math.sin(T);p=Math.sin(p*T)/v,a=Math.sin(a*T)/v,c=c*p+d*a,l=l*p+h*a,u=u*p+g*a,f=f*p+_*a}else{c=c*p+d*a,l=l*p+h*a,u=u*p+g*a,f=f*p+_*a;const T=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=T,l*=T,u*=T,f*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*f+c*h-l*d,e[t+1]=c*g+u*d+l*f-a*h,e[t+2]=l*g+u*h+a*d-c*f,e[t+3]=u*g-a*f-c*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),f=a(s/2),d=c(n/2),h=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"YZX":this._x=d*u*f+l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f-d*h*g;break;case"XZY":this._x=d*u*f-l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f+d*h*g;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-i)*h}else if(n>a&&n>f){const h=2*Math.sqrt(1+n-a-f);this._w=(u-c)/h,this._x=.25*h,this._y=(i+o)/h,this._z=(s+l)/h}else if(a>f){const h=2*Math.sqrt(1+a-n-f);this._w=(s-l)/h,this._x=(i+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+f-n-a);this._w=(o-i)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+c*l+o*f-a*u,this.y=n+c*u+a*l-s*f,this.z=i+c*f+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hc.copy(this).projectOnVector(e),this.sub(hc)}reflect(e){return this.sub(hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hc=new z,Lf=new dr;class Je{constructor(e,t,n,i,s,o,a,c,l){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],_=i[0],m=i[3],p=i[6],T=i[1],v=i[4],y=i[7],R=i[2],b=i[5],E=i[8];return s[0]=o*_+a*T+c*R,s[3]=o*m+a*v+c*b,s[6]=o*p+a*y+c*E,s[1]=l*_+u*T+f*R,s[4]=l*m+u*v+f*b,s[7]=l*p+u*y+f*E,s[2]=d*_+h*T+g*R,s[5]=d*m+h*v+g*b,s[8]=d*p+h*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,d=a*c-u*s,h=l*s-o*c,g=t*f+n*d+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=h*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pc.makeScale(e,t)),this}rotate(e){return this.premultiply(pc.makeRotation(-e)),this}translate(e,t){return this.premultiply(pc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pc=new Je,If=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Df=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E0(){const r={enabled:!0,workingColorSpace:hn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===wt&&(i.r=Hi(i.r),i.g=Hi(i.g),i.b=Hi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(i.r=fs(i.r),i.g=fs(i.g),i.b=fs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===sr?Va:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Eo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Eo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[hn]:{primaries:e,whitePoint:n,transfer:Va,toXYZ:If,fromXYZ:Df,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:If,fromXYZ:Df,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),r}const dt=E0();function Hi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function fs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Hr;class w0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hr===void 0&&(Hr=To("canvas")),Hr.width=e.width,Hr.height=e.height;const i=Hr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Hr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=To("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Hi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hi(t[n]/255)*255):t[n]=Hi(t[n]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A0=0;class Zu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(mc(i[o].image)):s.push(mc(i[o]))}else s=mc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function mc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?w0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}let R0=0;const gc=new z;class tn extends As{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=jn,i=jn,s=Wt,o=xi,a=$n,c=Ti,l=tn.DEFAULT_ANISOTROPY,u=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=ai(),this.name="",this.source=new Zu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gc).x}get height(){return this.source.getSize(gc).y}get depth(){return this.source.getSize(gc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ys:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ys:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=$h;tn.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,i=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,y=(h+1)/2,R=(p+1)/2,b=(u+d)/4,E=(f+_)/4,C=(g+m)/4;return v>y&&v>R?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=b/n,s=E/n):y>R?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=b/i,s=C/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=E/s,i=C/s),this.set(n,i,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-_)/T,this.z=(d-u)/T,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class C0 extends As{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new tn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Zu(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ir extends C0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class cp extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class P0 extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ji{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Do.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Do.copy(n.boundingBox)),Do.applyMatrix4(e.matrixWorld),this.union(Do)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),Uo.subVectors(this.max,Ds),Gr.subVectors(e.a,Ds),Wr.subVectors(e.b,Ds),Xr.subVectors(e.c,Ds),$i.subVectors(Wr,Gr),Zi.subVectors(Xr,Wr),pr.subVectors(Gr,Xr);let t=[0,-$i.z,$i.y,0,-Zi.z,Zi.y,0,-pr.z,pr.y,$i.z,0,-$i.x,Zi.z,0,-Zi.x,pr.z,0,-pr.x,-$i.y,$i.x,0,-Zi.y,Zi.x,0,-pr.y,pr.x,0];return!xc(t,Gr,Wr,Xr,Uo)||(t=[1,0,0,0,1,0,0,0,1],!xc(t,Gr,Wr,Xr,Uo))?!1:(No.crossVectors($i,Zi),t=[No.x,No.y,No.z],xc(t,Gr,Wr,Xr,Uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new z,new z,new z,new z,new z,new z,new z,new z],ei=new z,Do=new ji,Gr=new z,Wr=new z,Xr=new z,$i=new z,Zi=new z,pr=new z,Ds=new z,Uo=new z,No=new z,mr=new z;function xc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){mr.fromArray(r,s);const a=i.x*Math.abs(mr.x)+i.y*Math.abs(mr.y)+i.z*Math.abs(mr.z),c=e.dot(mr),l=t.dot(mr),u=n.dot(mr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const L0=new ji,Us=new z,_c=new z;class wi{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):L0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);const t=Us.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Us,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(_c)),this.expandByPoint(Us.copy(e.center).sub(_c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ci=new z,vc=new z,Fo=new z,Ji=new z,yc=new z,Oo=new z,bc=new z;class ic{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){vc.copy(e).add(t).multiplyScalar(.5),Fo.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(vc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Fo),a=Ji.dot(this.direction),c=-Ji.dot(Fo),l=Ji.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*c-a,d=o*a-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),h=d*(d+2*c)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(vc).addScaledVector(Fo,d),h}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);const n=Ci.dot(this.direction),i=Ci.dot(Ci)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,i,s){yc.subVectors(t,e),Oo.subVectors(n,e),bc.crossVectors(yc,Oo);let o=this.direction.dot(bc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);const c=a*this.direction.dot(Oo.crossVectors(Ji,Oo));if(c<0)return null;const l=a*this.direction.dot(yc.cross(Ji));if(l<0||c+l>o)return null;const u=-a*Ji.dot(bc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,n,i,s,o,a,c,l,u,f,d,h,g,_,m){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,u,f,d,h,g,_,m)}set(e,t,n,i,s,o,a,c,l,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/qr.setFromMatrixColumn(e,0).length(),s=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=h+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,h=c*f,g=l*u,_=l*f;t[0]=d+_*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,h=c*f,g=l*u,_=l*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=c*u,t[4]=g*l-h,t[8]=d*l+_,t[1]=c*f,t[5]=_*l+d,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,h=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*c,h=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+_,t[5]=o*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I0,e,D0)}lookAt(e,t,n){const i=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Qi.crossVectors(n,Fn),Qi.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Qi.crossVectors(n,Fn)),Qi.normalize(),Bo.crossVectors(Fn,Qi),i[0]=Qi.x,i[4]=Bo.x,i[8]=Fn.x,i[1]=Qi.y,i[5]=Bo.y,i[9]=Fn.y,i[2]=Qi.z,i[6]=Bo.z,i[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],v=n[7],y=n[11],R=n[15],b=i[0],E=i[4],C=i[8],M=i[12],x=i[1],A=i[5],L=i[9],F=i[13],N=i[2],X=i[6],H=i[10],Z=i[14],q=i[3],ee=i[7],I=i[11],fe=i[15];return s[0]=o*b+a*x+c*N+l*q,s[4]=o*E+a*A+c*X+l*ee,s[8]=o*C+a*L+c*H+l*I,s[12]=o*M+a*F+c*Z+l*fe,s[1]=u*b+f*x+d*N+h*q,s[5]=u*E+f*A+d*X+h*ee,s[9]=u*C+f*L+d*H+h*I,s[13]=u*M+f*F+d*Z+h*fe,s[2]=g*b+_*x+m*N+p*q,s[6]=g*E+_*A+m*X+p*ee,s[10]=g*C+_*L+m*H+p*I,s[14]=g*M+_*F+m*Z+p*fe,s[3]=T*b+v*x+y*N+R*q,s[7]=T*E+v*A+y*X+R*ee,s[11]=T*C+v*L+y*H+R*I,s[15]=T*M+v*F+y*Z+R*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*f-i*l*f-s*a*d+n*l*d+i*a*h-n*c*h)+_*(+t*c*h-t*l*d+s*o*d-i*o*h+i*l*u-s*c*u)+m*(+t*l*f-t*a*h-s*o*f+n*o*h+s*a*u-n*l*u)+p*(-i*a*u-t*c*f+t*a*d+i*o*f-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=f*m*l-_*d*l+_*c*h-a*m*h-f*c*p+a*d*p,v=g*d*l-u*m*l-g*c*h+o*m*h+u*c*p-o*d*p,y=u*_*l-g*f*l+g*a*h-o*_*h-u*a*p+o*f*p,R=g*f*c-u*_*c-g*a*d+o*_*d+u*a*m-o*f*m,b=t*T+n*v+i*y+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=T*E,e[1]=(_*d*s-f*m*s-_*i*h+n*m*h+f*i*p-n*d*p)*E,e[2]=(a*m*s-_*c*s+_*i*l-n*m*l-a*i*p+n*c*p)*E,e[3]=(f*c*s-a*d*s-f*i*l+n*d*l+a*i*h-n*c*h)*E,e[4]=v*E,e[5]=(u*m*s-g*d*s+g*i*h-t*m*h-u*i*p+t*d*p)*E,e[6]=(g*c*s-o*m*s-g*i*l+t*m*l+o*i*p-t*c*p)*E,e[7]=(o*d*s-u*c*s+u*i*l-t*d*l-o*i*h+t*c*h)*E,e[8]=y*E,e[9]=(g*f*s-u*_*s-g*n*h+t*_*h+u*n*p-t*f*p)*E,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*p+t*a*p)*E,e[11]=(u*a*s-o*f*s-u*n*l+t*f*l+o*n*h-t*a*h)*E,e[12]=R*E,e[13]=(u*_*i-g*f*i+g*n*d-t*_*d-u*n*m+t*f*m)*E,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*E,e[15]=(o*f*i-u*a*i+u*n*c-t*f*c-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,d=s*l,h=s*u,g=s*f,_=o*u,m=o*f,p=a*f,T=c*l,v=c*u,y=c*f,R=n.x,b=n.y,E=n.z;return i[0]=(1-(_+p))*R,i[1]=(h+y)*R,i[2]=(g-v)*R,i[3]=0,i[4]=(h-y)*b,i[5]=(1-(d+p))*b,i[6]=(m+T)*b,i[7]=0,i[8]=(g+v)*E,i[9]=(m-T)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=qr.set(i[0],i[1],i[2]).length();const o=qr.set(i[4],i[5],i[6]).length(),a=qr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ti.copy(this);const l=1/s,u=1/o,f=1/a;return ti.elements[0]*=l,ti.elements[1]*=l,ti.elements[2]*=l,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,t.setFromRotationMatrix(ti),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=vi,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let g,_;if(c)g=s/(o-s),_=o*s/(o-s);else if(a===vi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ha)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=vi,c=!1){const l=this.elements,u=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),h=-(n+i)/(n-i);let g,_;if(c)g=1/(o-s),_=o/(o-s);else if(a===vi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Ha)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qr=new z,ti=new nt,I0=new z(0,0,0),D0=new z(1,1,1),Qi=new z,Bo=new z,Fn=new z,Uf=new nt,Nf=new dr;class Ei{constructor(e=0,t=0,n=0,i=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],f=i[2],d=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nf.setFromEuler(this),this.setFromQuaternion(Nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class lp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let U0=0;const Ff=new z,Yr=new dr,Pi=new nt,ko=new z,Ns=new z,N0=new z,F0=new dr,Of=new z(1,0,0),Bf=new z(0,1,0),kf=new z(0,0,1),zf={type:"added"},O0={type:"removed"},Kr={type:"childadded",child:null},Mc={type:"childremoved",child:null};class Ft extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new z,t=new Ei,n=new dr,i=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new Je}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(Of,e)}rotateY(e){return this.rotateOnAxis(Bf,e)}rotateZ(e){return this.rotateOnAxis(kf,e)}translateOnAxis(e,t){return Ff.copy(e).applyQuaternion(this.quaternion),this.position.add(Ff.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Of,e)}translateY(e){return this.translateOnAxis(Bf,e)}translateZ(e){return this.translateOnAxis(kf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ko.copy(e):ko.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Ns,ko,this.up):Pi.lookAt(ko,Ns,this.up),this.quaternion.setFromRotationMatrix(Pi),i&&(Pi.extractRotation(i.matrixWorld),Yr.setFromRotationMatrix(Pi),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zf),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(O0),Mc.child=e,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zf),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,N0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,F0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ft.DEFAULT_UP=new z(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new z,Li=new z,Sc=new z,Ii=new z,jr=new z,$r=new z,Vf=new z,Tc=new z,Ec=new z,wc=new z,Ac=new _t,Rc=new _t,Cc=new _t;class oi{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ni.subVectors(e,t),i.cross(ni);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ni.subVectors(i,t),Li.subVectors(n,t),Sc.subVectors(e,t);const o=ni.dot(ni),a=ni.dot(Li),c=ni.dot(Sc),l=Li.dot(Li),u=Li.dot(Sc),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ii.x),c.addScaledVector(o,Ii.y),c.addScaledVector(a,Ii.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return Ac.setScalar(0),Rc.setScalar(0),Cc.setScalar(0),Ac.fromBufferAttribute(e,t),Rc.fromBufferAttribute(e,n),Cc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ac,s.x),o.addScaledVector(Rc,s.y),o.addScaledVector(Cc,s.z),o}static isFrontFacing(e,t,n,i){return ni.subVectors(n,t),Li.subVectors(e,t),ni.cross(Li).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ni.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return oi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;jr.subVectors(i,n),$r.subVectors(s,n),Tc.subVectors(e,n);const c=jr.dot(Tc),l=$r.dot(Tc);if(c<=0&&l<=0)return t.copy(n);Ec.subVectors(e,i);const u=jr.dot(Ec),f=$r.dot(Ec);if(u>=0&&f<=u)return t.copy(i);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(jr,o);wc.subVectors(e,s);const h=jr.dot(wc),g=$r.dot(wc);if(g>=0&&h<=g)return t.copy(s);const _=h*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector($r,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return Vf.subVectors(s,i),a=(f-u)/(f-u+(h-g)),t.copy(i).addScaledVector(Vf,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(jr,o).addScaledVector($r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},zo={h:0,s:0,l:0};function Pc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=$u(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Pc(o,s,e+1/3),this.g=Pc(o,s,e),this.b=Pc(o,s,e-1/3)}return dt.colorSpaceToWorking(this,i),this}setStyle(e,t=Pt){function n(s){s!==void 0&&parseFloat(s)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=up[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return dt.workingToColorSpace(an.copy(this),e),Math.round(at(an.r*255,0,255))*65536+Math.round(at(an.g*255,0,255))*256+Math.round(at(an.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(an.copy(this),t);const n=an.r,i=an.g,s=an.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Pt){dt.workingToColorSpace(an.copy(this),e);const t=an.r,n=an.g,i=an.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(er),this.setHSL(er.h+e,er.s+t,er.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(er),e.getHSL(zo);const n=ro(er.h,zo.h,t),i=ro(er.s,zo.s,t),s=ro(er.l,zo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new $e;$e.NAMES=up;let B0=0;class Mi extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=us,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Il,this.blendDst=Dl,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Il&&(n.blendSrc=this.blendSrc),this.blendDst!==Dl&&(n.blendDst=this.blendDst),this.blendEquation!==Tr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Af&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dn extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fi=k0();function k0(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;(l&8388608)===0;)l<<=1,u-=8388608;l&=-8388609,u+=947912704,s[c]=l|u}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function z0(r){Math.abs(r)>65504&&Fe("DataUtils.toHalfFloat(): Value out of range."),r=at(r,-65504,65504),Fi.floatView[0]=r;const e=Fi.uint32View[0],t=e>>23&511;return Fi.baseTable[t]+((e&8388607)>>Fi.shiftTable[t])}function V0(r){const e=r>>10;return Fi.uint32View[0]=Fi.mantissaTable[Fi.offsetTable[e]+(r&1023)]+Fi.exponentTable[e],Fi.floatView[0]}class Vo{static toHalfFloat(e){return z0(e)}static fromHalfFloat(e){return V0(e)}}const Ht=new z,Ho=new ft;let H0=0;class An{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_u,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ho.fromBufferAttribute(this,t),Ho.applyMatrix3(e),this.setXY(t,Ho.x,Ho.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_u&&(e.usage=this.usage),e}}class fp extends An{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dp extends An{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gi extends An{constructor(e,t,n){super(new Float32Array(e),t,n)}}let G0=0;const Wn=new nt,Lc=new Ft,Zr=new z,On=new ji,Fs=new ji,Jt=new z;class ci extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ap(e)?dp:fp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gi(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(On.min,Fs.min),On.expandByPoint(Jt),Jt.addVectors(On.max,Fs.max),On.expandByPoint(Jt)):(On.expandByPoint(Fs.min),On.expandByPoint(Fs.max))}On.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Jt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Jt.fromBufferAttribute(a,l),c&&(Zr.fromBufferAttribute(e,l),Jt.add(Zr)),i=Math.max(i,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new z,c[C]=new z;const l=new z,u=new z,f=new z,d=new ft,h=new ft,g=new ft,_=new z,m=new z;function p(C,M,x){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,x),d.fromBufferAttribute(s,C),h.fromBufferAttribute(s,M),g.fromBufferAttribute(s,x),u.sub(l),f.sub(l),h.sub(d),g.sub(d);const A=1/(h.x*g.y-g.x*h.y);isFinite(A)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(A),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(A),a[C].add(_),a[M].add(_),a[x].add(_),c[C].add(m),c[M].add(m),c[x].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let C=0,M=T.length;C<M;++C){const x=T[C],A=x.start,L=x.count;for(let F=A,N=A+L;F<N;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const v=new z,y=new z,R=new z,b=new z;function E(C){R.fromBufferAttribute(i,C),b.copy(R);const M=a[C];v.copy(M),v.sub(R.multiplyScalar(R.dot(M))).normalize(),y.crossVectors(b,M);const A=y.dot(c[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,A)}for(let C=0,M=T.length;C<M;++C){const x=T[C],A=x.start,L=x.count;for(let F=A,N=A+L;F<N;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const i=new z,s=new z,o=new z,a=new z,c=new z,l=new z,u=new z,f=new z;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let h=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?h=c[_]*a.data.stride+a.offset:h=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[h++]}return new An(d,u,f)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ci,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],h=e(d,n);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const h=l[f];u.push(h.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hf=new nt,gr=new ic,Go=new wi,Gf=new z,Wo=new z,Xo=new z,qo=new z,Ic=new z,Yo=new z,Wf=new z,Ko=new z;class Jn extends Ft{constructor(e=new ci,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Yo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(Ic.fromBufferAttribute(f,e),o?Yo.addScaledVector(Ic,u):Yo.addScaledVector(Ic.sub(t),u))}t.add(Yo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(Go.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Go,Gf)===null||gr.origin.distanceToSquared(Gf)>(e.far-e.near)**2))&&(Hf.copy(s).invert(),gr.copy(e.ray).applyMatrix4(Hf),!(n.boundingBox!==null&&gr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,h.start),v=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=T,R=v;y<R;y+=3){const b=a.getX(y),E=a.getX(y+1),C=a.getX(y+2);i=jo(this,p,e,n,l,u,f,b,E,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);i=jo(this,o,e,n,l,u,f,T,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,h.start),v=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let y=T,R=v;y<R;y+=3){const b=y,E=y+1,C=y+2;i=jo(this,p,e,n,l,u,f,b,E,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const T=m,v=m+1,y=m+2;i=jo(this,o,e,n,l,u,f,T,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function W0(r,e,t,n,i,s,o,a){let c;if(e.side===Dn?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===qi,a),c===null)return null;Ko.copy(a),Ko.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Ko);return l<t.near||l>t.far?null:{distance:l,point:Ko.clone(),object:r}}function jo(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Wo),r.getVertexPosition(c,Xo),r.getVertexPosition(l,qo);const u=W0(r,e,t,n,Wo,Xo,qo,Wf);if(u){const f=new z;oi.getBarycoord(Wf,Wo,Xo,qo,f),i&&(u.uv=oi.getInterpolatedAttribute(i,a,c,l,f,new ft)),s&&(u.uv1=oi.getInterpolatedAttribute(s,a,c,l,f,new ft)),o&&(u.normal=oi.getInterpolatedAttribute(o,a,c,l,f,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new z,materialIndex:0};oi.getNormal(Wo,Xo,qo,d.normal),u.face=d,u.barycoord=f}return u}class Lo extends ci{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Gi(l,3)),this.setAttribute("normal",new Gi(u,3)),this.setAttribute("uv",new Gi(f,2));function g(_,m,p,T,v,y,R,b,E,C,M){const x=y/E,A=R/C,L=y/2,F=R/2,N=b/2,X=E+1,H=C+1;let Z=0,q=0;const ee=new z;for(let I=0;I<H;I++){const fe=I*A-F;for(let Ie=0;Ie<X;Ie++){const He=Ie*x-L;ee[_]=He*T,ee[m]=fe*v,ee[p]=N,l.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[p]=b>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(Ie/E),f.push(1-I/C),Z+=1}}for(let I=0;I<C;I++)for(let fe=0;fe<E;fe++){const Ie=d+fe+X*I,He=d+fe+X*(I+1),je=d+(fe+1)+X*(I+1),Qe=d+(fe+1)+X*I;c.push(Ie,He,Qe),c.push(He,je,Qe),q+=6}a.addGroup(h,q,M),h+=q,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ms(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function vn(r){const e={};for(let t=0;t<r.length;t++){const n=Ms(r[t]);for(const i in n)e[i]=n[i]}return e}function X0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function hp(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const q0={clone:Ms,merge:vn};var Y0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y0,this.fragmentShader=K0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=X0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pp extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const tr=new z,Xf=new ft,qf=new ft;class Tn extends pp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,Xf,qf),t.subVectors(qf,Xf)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(io*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jr=-90,Qr=1;class j0 extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Tn(Jr,Qr,e,t);i.layers=this.layers,this.add(i);const s=new Tn(Jr,Qr,e,t);s.layers=this.layers,this.add(s);const o=new Tn(Jr,Qr,e,t);o.layers=this.layers,this.add(o);const a=new Tn(Jr,Qr,e,t);a.layers=this.layers,this.add(a);const c=new Tn(Jr,Qr,e,t);c.layers=this.layers,this.add(c);const l=new Tn(Jr,Qr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class mp extends tn{constructor(e=[],t=_s,n,i,s,o,a,c,l,u){super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $0 extends Ir{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new mp(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Lo(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:zi});s.uniforms.tEquirect.value=t;const o=new Jn(i,s),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=Wt),new j0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class rn extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z0={type:"move"};class Dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;l.inputState.pinching&&d>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Z0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class J0 extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Q0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_u,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new z;class Ju{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ga("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new An(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ju(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ga("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Yf=new z,Kf=new _t,jf=new _t,eg=new z,$f=new nt,$o=new z,Uc=new wi,Zf=new nt,Nc=new ic;class tg extends Jn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sf,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ji),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$o),this.boundingBox.expandByPoint($o)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$o),this.boundingSphere.expandByPoint($o)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uc.copy(this.boundingSphere),Uc.applyMatrix4(i),e.ray.intersectsSphere(Uc)!==!1&&(Zf.copy(i).invert(),Nc.copy(e.ray).applyMatrix4(Zf),!(this.boundingBox!==null&&Nc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Nc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Km?this.bindMatrixInverse.copy(this.bindMatrix).invert():Fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Kf.fromBufferAttribute(i.attributes.skinIndex,e),jf.fromBufferAttribute(i.attributes.skinWeight,e),Yf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=jf.getComponent(s);if(o!==0){const a=Kf.getComponent(s);$f.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(eg.copy(Yf).applyMatrix4($f),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class gp extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class rc extends tn{constructor(e=null,t=1,n=1,i,s,o,a,c,l=wn,u=wn,f,d){super(null,o,a,c,l,u,i,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jf=new nt,ng=new nt;class Qu{constructor(e=[],t=[]){this.uuid=ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:ng;Jf.multiplyMatrices(a,t[s]),Jf.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Qu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new rc(t,e,e,$n,In);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(Fe("Skeleton: No bone found with UUID:",s),o=new gp),this.bones.push(o),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class vu extends An{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const es=new nt,Qf=new nt,Zo=[],ed=new ji,ig=new nt,Os=new Jn,Bs=new wi;class rg extends Jn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ig)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ji),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,es),ed.copy(e.boundingBox).applyMatrix4(es),this.boundingBox.union(ed)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,es),Bs.copy(e.boundingSphere).applyMatrix4(es),this.boundingSphere.union(Bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),e.ray.intersectsSphere(Bs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,es),Qf.multiplyMatrices(n,es),Os.matrixWorld=Qf,Os.raycast(e,Zo);for(let o=0,a=Zo.length;o<a;o++){const c=Zo[o];c.instanceId=s,c.object=this,t.push(c)}Zo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new rc(new Float32Array(i*this.count),i,this.count,Xu,In));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fc=new z,sg=new z,og=new Je;class br{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Fc.subVectors(n,t).cross(sg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Fc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||og.getNormalMatrix(e),i=this.coplanarPoint(Fc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new wi,ag=new ft(.5,.5),Jo=new z;class ef{constructor(e=new br,t=new br,n=new br,i=new br,s=new br,o=new br){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vi,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],h=s[7],g=s[8],_=s[9],m=s[10],p=s[11],T=s[12],v=s[13],y=s[14],R=s[15];if(i[0].setComponents(l-o,h-u,p-g,R-T).normalize(),i[1].setComponents(l+o,h+u,p+g,R+T).normalize(),i[2].setComponents(l+a,h+f,p+_,R+v).normalize(),i[3].setComponents(l-a,h-f,p-_,R-v).normalize(),n)i[4].setComponents(c,d,m,y).normalize(),i[5].setComponents(l-c,h-d,p-m,R-y).normalize();else if(i[4].setComponents(l-c,h-d,p-m,R-y).normalize(),t===vi)i[5].setComponents(l+c,h+d,p+m,R+y).normalize();else if(t===Ha)i[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){xr.center.set(0,0,0);const t=ag.distanceTo(e.center);return xr.radius=.7071067811865476+t,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Jo.x=i.normal.x>0?e.max.x:e.min.x,Jo.y=i.normal.y>0?e.max.y:e.min.y,Jo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Jo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xp extends Mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wa=new z,Xa=new z,td=new nt,ks=new ic,Qo=new wi,Oc=new z,nd=new z;class tf extends Ft{constructor(e=new ci,t=new xp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Wa.fromBufferAttribute(t,i-1),Xa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Wa.distanceTo(Xa);e.setAttribute("lineDistance",new Gi(n,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(i),Qo.radius+=s,e.ray.intersectsSphere(Qo)===!1)return;td.copy(i).invert(),ks.copy(e.ray).applyMatrix4(td);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=l){const p=u.getX(_),T=u.getX(_+1),v=ea(this,e,ks,c,p,T,_);v&&t.push(v)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(h),p=ea(this,e,ks,c,_,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=l){const p=ea(this,e,ks,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ea(this,e,ks,c,g-1,h,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ea(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Wa.fromBufferAttribute(a,i),Xa.fromBufferAttribute(a,s),t.distanceSqToSegment(Wa,Xa,Oc,nd)>n)return;Oc.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Oc);if(!(l<e.near||l>e.far))return{distance:l,point:nd.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const id=new z,rd=new z;class cg extends tf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)id.fromBufferAttribute(t,i),rd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+id.distanceTo(rd);e.setAttribute("lineDistance",new Gi(n,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lg extends tf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _p extends Mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sd=new nt,yu=new ic,ta=new wi,na=new z;class ug extends Ft{constructor(e=new ci,t=new _p){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(i),ta.radius+=s,e.ray.intersectsSphere(ta)===!1)return;sd.copy(i).invert(),yu.copy(e.ray).applyMatrix4(sd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=d,_=h;g<_;g++){const m=l.getX(g);na.fromBufferAttribute(f,m),od(na,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,_=h;g<_;g++)na.fromBufferAttribute(f,g),od(na,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function od(r,e,t,n,i,s,o){const a=yu.distanceSqToPoint(r);if(a<t){const c=new z;yu.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class vp extends tn{constructor(e,t,n=Lr,i,s,o,a=wn,c=wn,l,u=yo,f=1){if(u!==yo&&u!==bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yp extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sc extends ci{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,f=e/a,d=t/c,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const T=p*d-o;for(let v=0;v<l;v++){const y=v*f-s;g.push(y,-T,0),_.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){const v=T+l*p,y=T+l*(p+1),R=T+1+l*(p+1),b=T+1+l*p;h.push(v,y,b),h.push(y,R,b)}this.setIndex(h),this.setAttribute("position",new Gi(g,3)),this.setAttribute("normal",new Gi(_,3)),this.setAttribute("uv",new Gi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.width,e.height,e.widthSegments,e.heightSegments)}}class nf extends Mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sp,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ai extends nf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class fg extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dg extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ia(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function hg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function pg(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ad(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function bp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Io{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class mg extends Io{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tf,endingEnd:Tf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ef:s=e,a=2*t-n;break;case wf:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ef:o=e,c=2*n-t;break;case wf:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,T=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-h)*m+(1.5+h)*_+.5*g,y=h*m-h*_;for(let R=0;R!==a;++R)s[R]=p*o[u+R]+T*o[l+R]+v*o[c+R]+y*o[f+R];return s}}class gg extends Io{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),f=1-u;for(let d=0;d!==a;++d)s[d]=o[l+d]*f+o[c+d]*u;return s}}class xg extends Io{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class li{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ia(t,this.TimeBufferType),this.values=ia(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ia(e.times,Array),values:ia(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mo:t=this.InterpolantFactoryMethodDiscrete;break;case So:t=this.InterpolantFactoryMethodLinear;break;case dc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return So;case this.InterpolantFactoryMethodSmooth:return dc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ct("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(ct("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){ct("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){ct("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&hg(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){ct("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===dc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const f=a*n,d=f-n,h=f+n;for(let g=0;g!==n;++g){const _=t[f+g];if(_!==t[d+g]||_!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const f=a*n,d=o*n;for(let h=0;h!==n;++h)t[d+h]=t[f+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}li.prototype.ValueTypeName="";li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=So;class Rs extends li{constructor(e,t,n){super(e,t,n)}}Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=Mo;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Mp extends li{constructor(e,t,n,i){super(e,t,n,i)}}Mp.prototype.ValueTypeName="color";class Ss extends li{constructor(e,t,n,i){super(e,t,n,i)}}Ss.prototype.ValueTypeName="number";class _g extends Io{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)dr.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Ts extends li{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new _g(this.times,this.values,this.getValueSize(),e)}}Ts.prototype.ValueTypeName="quaternion";Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Cs extends li{constructor(e,t,n){super(e,t,n)}}Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Mo;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class Es extends li{constructor(e,t,n,i){super(e,t,n,i)}}Es.prototype.ValueTypeName="vector";class vg{constructor(e="",t=-1,n=[],i=jm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ai(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(bg(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(li.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=pg(c);c=ad(c,1,u),l=ad(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Ss(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const f=u[1];let d=i[f];d||(i[f]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(Fe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return ct("AnimationClip: No animation in JSONLoader data."),null;const n=function(f,d,h,g,_){if(h.length!==0){const m=[],p=[];bp(h,m,p,g),m.length!==0&&_.push(new f(d,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let f=0;f<l.length;f++){const d=l[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const h={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)h[d[g].morphTargets[_]]=-1;for(const _ in h){const m=[],p=[];for(let T=0;T!==d[g].morphTargets.length;++T){const v=d[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new Ss(".morphTargetInfluence["+_+"]",m,p))}c=h.length*o}else{const h=".bones["+t[f].name+"]";n(Es,h+".position",d,"pos",i),n(Ts,h+".quaternion",d,"rot",i),n(Es,h+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function yg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ss;case"vector":case"vector2":case"vector3":case"vector4":return Es;case"color":return Mp;case"quaternion":return Ts;case"bool":case"boolean":return Rs;case"string":return Cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function bg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=yg(r.type);if(r.times===void 0){const t=[],n=[];bp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Bi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Mg{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=l.length;f<d;f+=2){const h=l[f],g=l[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Sg=new Mg;class Fr{constructor(e){this.manager=e!==void 0?e:Sg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Fr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Di={};class Tg extends Error{constructor(e,t){super(e),this.response=t}}class rf extends Fr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Bi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Di[e]!==void 0){Di[e].push({onLoad:t,onProgress:n,onError:i});return}Di[e]=[],Di[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Di[e],f=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=d?parseInt(d):0,g=h!==0;let _=0;const m=new ReadableStream({start(p){T();function T(){f.read().then(({done:v,value:y})=>{if(v)p.close();else{_+=y.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:h});for(let b=0,E=u.length;b<E;b++){const C=u[b];C.onProgress&&C.onProgress(R)}p.enqueue(y),T()}},v=>{p.error(v)})}}});return new Response(m)}else throw new Tg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(d);return l.arrayBuffer().then(g=>h.decode(g))}}}).then(l=>{Bi.add(`file:${e}`,l);const u=Di[e];delete Di[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onLoad&&h.onLoad(l)}}).catch(l=>{const u=Di[e];if(u===void 0)throw this.manager.itemError(e),l;delete Di[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ts=new WeakMap;class Eg extends Fr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Bi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=ts.get(o);f===void 0&&(f=[],ts.set(o,f)),f.push({onLoad:t,onError:i})}return o}const a=To("img");function c(){u(),t&&t(this);const f=ts.get(this)||[];for(let d=0;d<f.length;d++){const h=f[d];h.onLoad&&h.onLoad(this)}ts.delete(this),s.manager.itemEnd(e)}function l(f){u(),i&&i(f),Bi.remove(`image:${e}`);const d=ts.get(this)||[];for(let h=0;h<d.length;h++){const g=d[h];g.onError&&g.onError(f)}ts.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Bi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class wg extends Fr{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new rc,a=new rf(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(c){let l;try{l=s.parse(c)}catch(u){if(i!==void 0)i(u);else{u(u);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:jn,o.wrapT=l.wrapT!==void 0?l.wrapT:jn,o.magFilter=l.magFilter!==void 0?l.magFilter:Wt,o.minFilter=l.minFilter!==void 0?l.minFilter:Wt,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=xi),l.mipmapCount===1&&(o.minFilter=Wt),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}}class Ki extends Fr{constructor(e){super(e)}load(e,t,n,i){const s=new tn,o=new Eg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class oc extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Bc=new nt,cd=new z,ld=new z;class sf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=Ti,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ef,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(cd),ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ld),t.updateMatrixWorld(),Bc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ag extends sf{constructor(){super(new Tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=bs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Rg extends oc{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Ag}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ud=new nt,zs=new z,kc=new z;class Cg extends sf{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),zs.setFromMatrixPosition(e.matrixWorld),n.position.copy(zs),kc.copy(n.position),kc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(kc),n.updateMatrixWorld(),i.makeTranslation(-zs.x,-zs.y,-zs.z),ud.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ud,n.coordinateSystem,n.reversedDepth)}}class Pg extends oc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Cg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class of extends pp{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Lg extends sf{constructor(){super(new of(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ig extends oc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Lg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Dg extends oc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class so{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const zc=new WeakMap;class Ug extends Fr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Bi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{if(zc.has(o)===!0)i&&i(zc.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Bi.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),zc.set(c,l),Bi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Bi.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Ng extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const af="\\[\\]\\.:\\/",Fg=new RegExp("["+af+"]","g"),cf="[^"+af+"]",Og="[^"+af.replace("\\.","")+"]",Bg=/((?:WC+[\/:])*)/.source.replace("WC",cf),kg=/(WCOD+)?/.source.replace("WCOD",Og),zg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cf),Vg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cf),Hg=new RegExp("^"+Bg+kg+zg+Vg+"$"),Gg=["material","materials","bones","map"];class Wg{constructor(e,t,n){const i=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class St{constructor(e,t,n){this.path=t,this.parsedPath=n||St.parseTrackName(t),this.node=St.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new St.Composite(e,t,n):new St(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fg,"")}static parseTrackName(e){const t=Hg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Gg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=St.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;ct("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}St.Composite=Wg;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function fd(r,e,t,n){const i=Xg(n);switch(t){case np:return r*e;case Xu:return r*e/i.components*i.byteLength;case qu:return r*e/i.components*i.byteLength;case Yu:return r*e*2/i.components*i.byteLength;case Ku:return r*e*2/i.components*i.byteLength;case ip:return r*e*3/i.components*i.byteLength;case $n:return r*e*4/i.components*i.byteLength;case ju:return r*e*4/i.components*i.byteLength;case Aa:case Ra:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Pa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wl:case ql:return Math.max(r,16)*Math.max(e,8)/4;case Gl:case Xl:return Math.max(r,8)*Math.max(e,8)/2;case Yl:case Kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case jl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case eu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case tu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case nu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case iu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ru:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case su:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ou:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case au:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case cu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case lu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case uu:case fu:case du:return Math.ceil(r/4)*Math.ceil(e/4)*16;case hu:case pu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case mu:case gu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xg(r){switch(r){case Ti:case Jh:return{byteLength:1,components:1};case _o:case Qh:case _i:return{byteLength:2,components:1};case Gu:case Wu:return{byteLength:2,components:4};case Lr:case Hu:case In:return{byteLength:4,components:1};case ep:case tp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vu}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vu);function Sp(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function qg(r){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,f=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=r.SHORT;else if(l instanceof Uint32Array)h=r.UNSIGNED_INT;else if(l instanceof Int32Array)h=r.INT;else if(l instanceof Int8Array)h=r.BYTE;else if(l instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const u=c.array,f=c.updateRanges;if(r.bindBuffer(l,a),f.length===0)r.bufferSubData(l,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];r.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var Yg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kg=`#ifdef USE_ALPHAHASH
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
#endif`,jg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$g=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qg=`#ifdef USE_AOMAP
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
#endif`,ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tx=`#ifdef USE_BATCHING
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
#endif`,nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ix=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ox=`#ifdef USE_IRIDESCENCE
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
#endif`,ax=`#ifdef USE_BUMPMAP
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
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gx=`#define PI 3.141592653589793
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
} // validated`,xx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_x=`vec3 transformedNormal = objectNormal;
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
#endif`,vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ex=`#ifdef USE_ENVMAP
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
#endif`,wx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ax=`#ifdef USE_ENVMAP
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
#endif`,Rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ix=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ux=`#ifdef USE_GRADIENTMAP
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
}`,Nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bx=`uniform bool receiveShadow;
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
#endif`,kx=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,zx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wx=`PhysicalMaterial material;
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
#endif`,Xx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,qx=`
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
#endif`,Yx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$x=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n_=`#if defined( USE_POINTS_UV )
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
#endif`,i_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c_=`#ifdef USE_MORPHTARGETS
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
#endif`,l_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,d_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m_=`#ifdef USE_NORMALMAP
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
#endif`,g_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,__=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,C_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L_=`float getShadowMask() {
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
}`,I_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D_=`#ifdef USE_SKINNING
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
#endif`,U_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N_=`#ifdef USE_SKINNING
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
#endif`,F_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z_=`#ifdef USE_TRANSMISSION
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
#endif`,V_=`#ifdef USE_TRANSMISSION
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
#endif`,H_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y_=`uniform sampler2D t2D;
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
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`#include <common>
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
}`,Q_=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ev=`#define DISTANCE
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
}`,tv=`#define DISTANCE
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
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rv=`uniform float scale;
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
}`,sv=`uniform vec3 diffuse;
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
}`,ov=`#include <common>
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
}`,av=`uniform vec3 diffuse;
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
}`,cv=`#define LAMBERT
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
}`,lv=`#define LAMBERT
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
}`,uv=`#define MATCAP
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
}`,fv=`#define MATCAP
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
}`,dv=`#define NORMAL
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
}`,hv=`#define NORMAL
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
}`,pv=`#define PHONG
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
}`,mv=`#define PHONG
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
}`,gv=`#define STANDARD
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
}`,xv=`#define STANDARD
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
}`,_v=`#define TOON
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
}`,vv=`#define TOON
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
}`,yv=`uniform float size;
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
}`,bv=`uniform vec3 diffuse;
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
}`,Mv=`#include <common>
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
}`,Sv=`uniform vec3 color;
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
}`,Tv=`uniform float rotation;
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
}`,Ev=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Yg,alphahash_pars_fragment:Kg,alphamap_fragment:jg,alphamap_pars_fragment:$g,alphatest_fragment:Zg,alphatest_pars_fragment:Jg,aomap_fragment:Qg,aomap_pars_fragment:ex,batching_pars_vertex:tx,batching_vertex:nx,begin_vertex:ix,beginnormal_vertex:rx,bsdfs:sx,iridescence_fragment:ox,bumpmap_pars_fragment:ax,clipping_planes_fragment:cx,clipping_planes_pars_fragment:lx,clipping_planes_pars_vertex:ux,clipping_planes_vertex:fx,color_fragment:dx,color_pars_fragment:hx,color_pars_vertex:px,color_vertex:mx,common:gx,cube_uv_reflection_fragment:xx,defaultnormal_vertex:_x,displacementmap_pars_vertex:vx,displacementmap_vertex:yx,emissivemap_fragment:bx,emissivemap_pars_fragment:Mx,colorspace_fragment:Sx,colorspace_pars_fragment:Tx,envmap_fragment:Ex,envmap_common_pars_fragment:wx,envmap_pars_fragment:Ax,envmap_pars_vertex:Rx,envmap_physical_pars_fragment:kx,envmap_vertex:Cx,fog_vertex:Px,fog_pars_vertex:Lx,fog_fragment:Ix,fog_pars_fragment:Dx,gradientmap_pars_fragment:Ux,lightmap_pars_fragment:Nx,lights_lambert_fragment:Fx,lights_lambert_pars_fragment:Ox,lights_pars_begin:Bx,lights_toon_fragment:zx,lights_toon_pars_fragment:Vx,lights_phong_fragment:Hx,lights_phong_pars_fragment:Gx,lights_physical_fragment:Wx,lights_physical_pars_fragment:Xx,lights_fragment_begin:qx,lights_fragment_maps:Yx,lights_fragment_end:Kx,logdepthbuf_fragment:jx,logdepthbuf_pars_fragment:$x,logdepthbuf_pars_vertex:Zx,logdepthbuf_vertex:Jx,map_fragment:Qx,map_pars_fragment:e_,map_particle_fragment:t_,map_particle_pars_fragment:n_,metalnessmap_fragment:i_,metalnessmap_pars_fragment:r_,morphinstance_vertex:s_,morphcolor_vertex:o_,morphnormal_vertex:a_,morphtarget_pars_vertex:c_,morphtarget_vertex:l_,normal_fragment_begin:u_,normal_fragment_maps:f_,normal_pars_fragment:d_,normal_pars_vertex:h_,normal_vertex:p_,normalmap_pars_fragment:m_,clearcoat_normal_fragment_begin:g_,clearcoat_normal_fragment_maps:x_,clearcoat_pars_fragment:__,iridescence_pars_fragment:v_,opaque_fragment:y_,packing:b_,premultiplied_alpha_fragment:M_,project_vertex:S_,dithering_fragment:T_,dithering_pars_fragment:E_,roughnessmap_fragment:w_,roughnessmap_pars_fragment:A_,shadowmap_pars_fragment:R_,shadowmap_pars_vertex:C_,shadowmap_vertex:P_,shadowmask_pars_fragment:L_,skinbase_vertex:I_,skinning_pars_vertex:D_,skinning_vertex:U_,skinnormal_vertex:N_,specularmap_fragment:F_,specularmap_pars_fragment:O_,tonemapping_fragment:B_,tonemapping_pars_fragment:k_,transmission_fragment:z_,transmission_pars_fragment:V_,uv_pars_fragment:H_,uv_pars_vertex:G_,uv_vertex:W_,worldpos_vertex:X_,background_vert:q_,background_frag:Y_,backgroundCube_vert:K_,backgroundCube_frag:j_,cube_vert:$_,cube_frag:Z_,depth_vert:J_,depth_frag:Q_,distanceRGBA_vert:ev,distanceRGBA_frag:tv,equirect_vert:nv,equirect_frag:iv,linedashed_vert:rv,linedashed_frag:sv,meshbasic_vert:ov,meshbasic_frag:av,meshlambert_vert:cv,meshlambert_frag:lv,meshmatcap_vert:uv,meshmatcap_frag:fv,meshnormal_vert:dv,meshnormal_frag:hv,meshphong_vert:pv,meshphong_frag:mv,meshphysical_vert:gv,meshphysical_frag:xv,meshtoon_vert:_v,meshtoon_frag:vv,points_vert:yv,points_frag:bv,shadow_vert:Mv,shadow_frag:Sv,sprite_vert:Tv,sprite_frag:Ev},xe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},mi={basic:{uniforms:vn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:vn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new $e(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:vn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:vn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:vn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new $e(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:vn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:vn([xe.points,xe.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:vn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:vn([xe.common,xe.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:vn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:vn([xe.sprite,xe.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:vn([xe.common,xe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:vn([xe.lights,xe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};mi.physical={uniforms:vn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const ra={r:0,b:0,g:0},_r=new Ei,wv=new nt;function Av(r,e,t,n,i,s,o){const a=new $e(0);let c=s===!0?0:1,l,u,f=null,d=0,h=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1;const R=g(v);R===null?p(a,c):R&&R.isColor&&(p(R,1),y=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(v,y){const R=g(y);R&&(R.isCubeTexture||R.mapping===nc)?(u===void 0&&(u=new Jn(new Lo(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Ms(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),_r.copy(y.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wv.makeRotationFromEuler(_r)),u.material.toneMapped=dt.getTransfer(R.colorSpace)!==wt,(f!==R||d!==R.version||h!==r.toneMapping)&&(u.material.needsUpdate=!0,f=R,d=R.version,h=r.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Jn(new sc(2,2),new Yi({name:"BackgroundMaterial",uniforms:Ms(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=dt.getTransfer(R.colorSpace)!==wt,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||d!==R.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,f=R,d=R.version,h=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(ra,hp(r)),n.buffers.color.setClear(ra.r,ra.g,ra.b,y,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:m,dispose:T}}function Rv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(x,A,L,F,N){let X=!1;const H=f(F,L,A);s!==H&&(s=H,l(s.object)),X=h(x,F,L,N),X&&g(x,F,L,N),N!==null&&e.update(N,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(x,A,L,F),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return r.createVertexArray()}function l(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function f(x,A,L){const F=L.wireframe===!0;let N=n[x.id];N===void 0&&(N={},n[x.id]=N);let X=N[A.id];X===void 0&&(X={},N[A.id]=X);let H=X[F];return H===void 0&&(H=d(c()),X[F]=H),H}function d(x){const A=[],L=[],F=[];for(let N=0;N<t;N++)A[N]=0,L[N]=0,F[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:L,attributeDivisors:F,object:x,attributes:{},index:null}}function h(x,A,L,F){const N=s.attributes,X=A.attributes;let H=0;const Z=L.getAttributes();for(const q in Z)if(Z[q].location>=0){const I=N[q];let fe=X[q];if(fe===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(fe=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(fe=x.instanceColor)),I===void 0||I.attribute!==fe||fe&&I.data!==fe.data)return!0;H++}return s.attributesNum!==H||s.index!==F}function g(x,A,L,F){const N={},X=A.attributes;let H=0;const Z=L.getAttributes();for(const q in Z)if(Z[q].location>=0){let I=X[q];I===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(I=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(I=x.instanceColor));const fe={};fe.attribute=I,I&&I.data&&(fe.data=I.data),N[q]=fe,H++}s.attributes=N,s.attributesNum=H,s.index=F}function _(){const x=s.newAttributes;for(let A=0,L=x.length;A<L;A++)x[A]=0}function m(x){p(x,0)}function p(x,A){const L=s.newAttributes,F=s.enabledAttributes,N=s.attributeDivisors;L[x]=1,F[x]===0&&(r.enableVertexAttribArray(x),F[x]=1),N[x]!==A&&(r.vertexAttribDivisor(x,A),N[x]=A)}function T(){const x=s.newAttributes,A=s.enabledAttributes;for(let L=0,F=A.length;L<F;L++)A[L]!==x[L]&&(r.disableVertexAttribArray(L),A[L]=0)}function v(x,A,L,F,N,X,H){H===!0?r.vertexAttribIPointer(x,A,L,N,X):r.vertexAttribPointer(x,A,L,F,N,X)}function y(x,A,L,F){_();const N=F.attributes,X=L.getAttributes(),H=A.defaultAttributeValues;for(const Z in X){const q=X[Z];if(q.location>=0){let ee=N[Z];if(ee===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor)),ee!==void 0){const I=ee.normalized,fe=ee.itemSize,Ie=e.get(ee);if(Ie===void 0)continue;const He=Ie.buffer,je=Ie.type,Qe=Ie.bytesPerElement,K=je===r.INT||je===r.UNSIGNED_INT||ee.gpuType===Hu;if(ee.isInterleavedBufferAttribute){const j=ee.data,ae=j.stride,Ee=ee.offset;if(j.isInstancedInterleavedBuffer){for(let we=0;we<q.locationSize;we++)p(q.location+we,j.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let we=0;we<q.locationSize;we++)m(q.location+we);r.bindBuffer(r.ARRAY_BUFFER,He);for(let we=0;we<q.locationSize;we++)v(q.location+we,fe/q.locationSize,je,I,ae*Qe,(Ee+fe/q.locationSize*we)*Qe,K)}else{if(ee.isInstancedBufferAttribute){for(let j=0;j<q.locationSize;j++)p(q.location+j,ee.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let j=0;j<q.locationSize;j++)m(q.location+j);r.bindBuffer(r.ARRAY_BUFFER,He);for(let j=0;j<q.locationSize;j++)v(q.location+j,fe/q.locationSize,je,I,fe*Qe,fe/q.locationSize*j*Qe,K)}}else if(H!==void 0){const I=H[Z];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(q.location,I);break;case 3:r.vertexAttrib3fv(q.location,I);break;case 4:r.vertexAttrib4fv(q.location,I);break;default:r.vertexAttrib1fv(q.location,I)}}}}T()}function R(){C();for(const x in n){const A=n[x];for(const L in A){const F=A[L];for(const N in F)u(F[N].object),delete F[N];delete A[L]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const A=n[x.id];for(const L in A){const F=A[L];for(const N in F)u(F[N].object),delete F[N];delete A[L]}delete n[x.id]}function E(x){for(const A in n){const L=n[A];if(L[x.id]===void 0)continue;const F=L[x.id];for(const N in F)u(F[N].object),delete F[N];delete L[x.id]}}function C(){M(),o=!0,s!==i&&(s=i,l(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function Cv(r,e,t){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,f){f!==0&&(r.drawArraysInstanced(n,l,u,f),t.update(u,n,f))}function a(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];t.update(h,n,1)}function c(l,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Pv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==$n&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===_i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Ti&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==In&&!C)}function c(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Fe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:R,maxSamples:b}}function Lv(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new br,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||i;return i=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):l();else{const T=s?0:n,v=T*4;let y=p.clippingState||null;c.value=y,y=u(g,d,v,h);for(let R=0;R!==v;++R)y[R]=t[R];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=h+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=h;v!==_;++v,y+=4)o.copy(f[v]).applyMatrix4(T,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Iv(r){let e=new WeakMap;function t(o,a){return a===Vl?o.mapping=_s:a===Hl&&(o.mapping=vs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vl||a===Hl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new $0(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const or=4,dd=[.125,.215,.35,.446,.526,.582],Er=20,Dv=256,Vs=new of,hd=new $e;let Vc=null,Hc=0,Gc=0,Wc=!1;const Uv=new z;class bu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=Uv}=s;Vc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,Hc,Gc),this._renderer.xr.enabled=Wc,e.scissorTest=!1,ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:_i,format:$n,colorSpace:hn,depthBuffer:!1},i=pd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pd(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Nv(s)),this._blurMaterial=Ov(s,e,t)}return i}_compileMaterial(e){const t=new Jn(new ci,e);this._renderer.compile(t,Vs)}_sceneToCubeUV(e,t,n,i,s){const c=new Tn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(hd),f.toneMapping=Vi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jn(new Lo,new dn({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,p=!0):(m.color.copy(hd),p=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(c.up.set(0,l[v],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[v],s.y,s.z)):y===1?(c.up.set(0,0,l[v]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[v],s.z)):(c.up.set(0,l[v],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[v]));const R=this._cubeSize;ns(i,y*R,v>2?R:0,R,R),f.setRenderTarget(i),p&&f.render(_,c),f.render(e,c)}f.toneMapping=h,f.autoClear=d,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===_s||e.mapping===vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=md());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ns(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Vs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget;if(this._ggxMaterial===null){const T=3*Math.max(this._cubeSize,16),v=4*this._cubeSize;this._ggxMaterial=Fv(this._lodMax,T,v)}const o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),d=.05+l*.95,h=f*d,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-or?n-g+or:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=g-t,ns(s,m,p,3*_,2*_),i.setRenderTarget(s),i.render(a,Vs),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,ns(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(a,Vs)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ct("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[i];f.material=l;const d=l.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Er-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Er;m>Er&&Fe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Er}`);const p=[];let T=0;for(let E=0;E<Er;++E){const C=E/_,M=Math.exp(-C*C/2);p.push(M),E===0?T+=M:E<m&&(T+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const y=this._sizeLods[i],R=3*y*(i>v-or?i-v+or:0),b=4*(this._cubeSize-y);ns(t,R,b,3*y,2*y),c.setRenderTarget(t),c.render(f,Vs)}}function Nv(r){const e=[],t=[],n=[];let i=r;const s=r-or+1+dd.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-or?c=dd[o-r+or-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*h),v=new Float32Array(m*g*h),y=new Float32Array(p*g*h);for(let b=0;b<h;b++){const E=b%3*2/3-1,C=b>2?0:-1,M=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];T.set(M,_*g*b),v.set(d,m*g*b);const x=[b,b,b,b,b,b];y.set(x,p*g*b)}const R=new ci;R.setAttribute("position",new An(T,_)),R.setAttribute("uv",new An(v,m)),R.setAttribute("faceIndex",new An(y,p)),n.push(new Jn(R,null)),i>or&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function pd(r,e,t){const n=new Ir(r,e,t);return n.texture.mapping=nc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ns(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Fv(r,e,t){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Ov(r,e,t){const n=new Float32Array(Er),i=new z(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ac(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function md(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function gd(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function ac(){return`

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
	`}function Bv(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Vl||c===Hl,u=c===_s||c===vs;if(l||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new bu(r)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return l&&h&&h.height>0||u&&h&&i(h)?(t===null&&(t=new bu(r)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function kv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Eo("WebGLRenderer: "+n+" extension not supported."),i}}}function zv(r,e,t,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const h in d)e.update(d[h],r.ARRAY_BUFFER)}function l(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const T=h.array;_=h.version;for(let v=0,y=T.length;v<y;v+=3){const R=T[v+0],b=T[v+1],E=T[v+2];d.push(R,b,b,E,E,R)}}else if(g!==void 0){const T=g.array;_=g.version;for(let v=0,y=T.length/3-1;v<y;v+=3){const R=v+0,b=v+1,E=v+2;d.push(R,b,b,E,E,R)}}else return;const m=new(ap(d)?dp:fp)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Vv(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,h){r.drawElements(n,h,s,d*o),t.update(h,n,1)}function l(d,h,g){g!==0&&(r.drawElementsInstanced(n,h,s,d*o,g),t.update(h,n,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,n,1)}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,s,d,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=h[T]*_[T];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Hv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:ct("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Gv(r,e,t){const n=new WeakMap,i=new _t;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let M=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let v=0;h===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let y=a.attributes.position.count*v,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const b=new Float32Array(y*R*4*f),E=new cp(b,y,R,f);E.type=In,E.needsUpdate=!0;const C=v*4;for(let x=0;x<f;x++){const A=m[x],L=p[x],F=T[x],N=y*R*4*x;for(let X=0;X<A.count;X++){const H=X*C;h===!0&&(i.fromBufferAttribute(A,X),b[N+H+0]=i.x,b[N+H+1]=i.y,b[N+H+2]=i.z,b[N+H+3]=0),g===!0&&(i.fromBufferAttribute(L,X),b[N+H+4]=i.x,b[N+H+5]=i.y,b[N+H+6]=i.z,b[N+H+7]=0),_===!0&&(i.fromBufferAttribute(F,X),b[N+H+8]=i.x,b[N+H+9]=i.y,b[N+H+10]=i.z,b[N+H+11]=F.itemSize===4?i.w:1)}}d={count:f,texture:E,size:new ft(y,R)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let h=0;for(let _=0;_<l.length;_++)h+=l[_];const g=a.morphTargetsRelative?1:1-h;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Wv(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);if(i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return f}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Tp=new tn,xd=new vp(1,1),Ep=new cp,wp=new P0,Ap=new mp,_d=[],vd=[],yd=new Float32Array(16),bd=new Float32Array(9),Md=new Float32Array(4);function Ps(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=_d[i];if(s===void 0&&(s=new Float32Array(i),_d[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function jt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function $t(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function cc(r,e){let t=vd[e];t===void 0&&(t=new Int32Array(e),vd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Xv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function qv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2fv(this.addr,e),$t(t,e)}}function Yv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;r.uniform3fv(this.addr,e),$t(t,e)}}function Kv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4fv(this.addr,e),$t(t,e)}}function jv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,n))return;Md.set(n),r.uniformMatrix2fv(this.addr,!1,Md),$t(t,n)}}function $v(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,n))return;bd.set(n),r.uniformMatrix3fv(this.addr,!1,bd),$t(t,n)}}function Zv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,n))return;yd.set(n),r.uniformMatrix4fv(this.addr,!1,yd),$t(t,n)}}function Jv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Qv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2iv(this.addr,e),$t(t,e)}}function ey(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3iv(this.addr,e),$t(t,e)}}function ty(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4iv(this.addr,e),$t(t,e)}}function ny(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function iy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2uiv(this.addr,e),$t(t,e)}}function ry(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3uiv(this.addr,e),$t(t,e)}}function sy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4uiv(this.addr,e),$t(t,e)}}function oy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(xd.compareFunction=op,s=xd):s=Tp,t.setTexture2D(e||s,i)}function ay(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wp,i)}function cy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ap,i)}function ly(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ep,i)}function uy(r){switch(r){case 5126:return Xv;case 35664:return qv;case 35665:return Yv;case 35666:return Kv;case 35674:return jv;case 35675:return $v;case 35676:return Zv;case 5124:case 35670:return Jv;case 35667:case 35671:return Qv;case 35668:case 35672:return ey;case 35669:case 35673:return ty;case 5125:return ny;case 36294:return iy;case 36295:return ry;case 36296:return sy;case 35678:case 36198:case 36298:case 36306:case 35682:return oy;case 35679:case 36299:case 36307:return ay;case 35680:case 36300:case 36308:case 36293:return cy;case 36289:case 36303:case 36311:case 36292:return ly}}function fy(r,e){r.uniform1fv(this.addr,e)}function dy(r,e){const t=Ps(e,this.size,2);r.uniform2fv(this.addr,t)}function hy(r,e){const t=Ps(e,this.size,3);r.uniform3fv(this.addr,t)}function py(r,e){const t=Ps(e,this.size,4);r.uniform4fv(this.addr,t)}function my(r,e){const t=Ps(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function gy(r,e){const t=Ps(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function xy(r,e){const t=Ps(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function _y(r,e){r.uniform1iv(this.addr,e)}function vy(r,e){r.uniform2iv(this.addr,e)}function yy(r,e){r.uniform3iv(this.addr,e)}function by(r,e){r.uniform4iv(this.addr,e)}function My(r,e){r.uniform1uiv(this.addr,e)}function Sy(r,e){r.uniform2uiv(this.addr,e)}function Ty(r,e){r.uniform3uiv(this.addr,e)}function Ey(r,e){r.uniform4uiv(this.addr,e)}function wy(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Tp,s[o])}function Ay(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||wp,s[o])}function Ry(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ap,s[o])}function Cy(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ep,s[o])}function Py(r){switch(r){case 5126:return fy;case 35664:return dy;case 35665:return hy;case 35666:return py;case 35674:return my;case 35675:return gy;case 35676:return xy;case 5124:case 35670:return _y;case 35667:case 35671:return vy;case 35668:case 35672:return yy;case 35669:case 35673:return by;case 5125:return My;case 36294:return Sy;case 36295:return Ty;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return wy;case 35679:case 36299:case 36307:return Ay;case 35680:case 36300:case 36308:case 36293:return Ry;case 36289:case 36303:case 36311:case 36292:return Cy}}class Ly{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=uy(t.type)}}class Iy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Py(t.type)}}class Dy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Xc=/(\w+)(\])?(\[|\.)?/g;function Sd(r,e){r.seq.push(e),r.map[e.id]=e}function Uy(r,e,t){const n=r.name,i=n.length;for(Xc.lastIndex=0;;){const s=Xc.exec(n),o=Xc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Sd(t,l===void 0?new Ly(a,r,e):new Iy(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Dy(a),Sd(t,f)),t=f}}}class La{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Uy(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Td(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Ny=37297;let Fy=0;function Oy(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Ed=new Je;function By(r){dt._getMatrix(Ed,dt.workingColorSpace,r);const e=`mat3( ${Ed.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(r)){case Va:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function wd(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Oy(r.getShaderSource(e),a)}else return s}function ky(r,e){const t=By(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function zy(r,e){let t;switch(e){case Vm:t="Linear";break;case Hm:t="Reinhard";break;case Gm:t="Cineon";break;case Wm:t="ACESFilmic";break;case qm:t="AgX";break;case Ym:t="Neutral";break;case Xm:t="Custom";break;default:Fe("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sa=new z;function Vy(){dt.getLuminanceCoefficients(sa);const r=sa.x.toFixed(4),e=sa.y.toFixed(4),t=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function Gy(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wy(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function $s(r){return r!==""}function Ad(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mu(r){return r.replace(Xy,Yy)}const qy=new Map;function Yy(r,e){let t=tt[e];if(t===void 0){const n=qy.get(e);if(n!==void 0)t=tt[n],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Mu(t)}const Ky=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cd(r){return r.replace(Ky,jy)}function jy(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Pd(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $y(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Yh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function Zy(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case _s:case vs:e="ENVMAP_TYPE_CUBE";break;case nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jy(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function Qy(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case jh:e="ENVMAP_BLENDING_MULTIPLY";break;case km:e="ENVMAP_BLENDING_MIX";break;case zm:e="ENVMAP_BLENDING_ADD";break}return e}function eb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function tb(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=$y(t),l=Zy(t),u=Jy(t),f=Qy(t),d=eb(t),h=Hy(t),g=Gy(s),_=i.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($s).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($s).join(`
`),p.length>0&&(p+=`
`)):(m=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),p=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?tt.tonemapping_pars_fragment:"",t.toneMapping!==Vi?zy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,ky("linearToOutputTexel",t.outputColorSpace),Vy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),o=Mu(o),o=Ad(o,t),o=Rd(o,t),a=Mu(a),a=Ad(a,t),a=Rd(a,t),o=Cd(o),a=Cd(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Rf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=T+m+o,y=T+p+a,R=Td(i,i.VERTEX_SHADER,v),b=Td(i,i.FRAGMENT_SHADER,y);i.attachShader(_,R),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(A){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(_)||"",F=i.getShaderInfoLog(R)||"",N=i.getShaderInfoLog(b)||"",X=L.trim(),H=F.trim(),Z=N.trim();let q=!0,ee=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,R,b);else{const I=wd(i,R,"vertex"),fe=wd(i,b,"fragment");ct("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+X+`
`+I+`
`+fe)}else X!==""?Fe("WebGLProgram: Program Info Log:",X):(H===""||Z==="")&&(ee=!1);ee&&(A.diagnostics={runnable:q,programLog:X,vertexShader:{log:H,prefix:m},fragmentShader:{log:Z,prefix:p}})}i.deleteShader(R),i.deleteShader(b),C=new La(i,_),M=Wy(i,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,Ny)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=b,this}let nb=0;class ib{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rb(e),t.set(e,n)),n}}class rb{constructor(e){this.id=nb++,this.code=e,this.usedTimes=0}}function sb(r,e,t,n,i,s,o){const a=new lp,c=new ib,l=new Set,u=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,x,A,L,F){const N=L.fog,X=F.geometry,H=M.isMeshStandardMaterial?L.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),q=Z&&Z.mapping===nc?Z.image.height:null,ee=g[M.type];M.precision!==null&&(h=i.getMaxPrecision(M.precision),h!==M.precision&&Fe("WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const I=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,fe=I!==void 0?I.length:0;let Ie=0;X.morphAttributes.position!==void 0&&(Ie=1),X.morphAttributes.normal!==void 0&&(Ie=2),X.morphAttributes.color!==void 0&&(Ie=3);let He,je,Qe,K;if(ee){const ye=mi[ee];He=ye.vertexShader,je=ye.fragmentShader}else He=M.vertexShader,je=M.fragmentShader,c.update(M),Qe=c.getVertexShaderID(M),K=c.getFragmentShaderID(M);const j=r.getRenderTarget(),ae=r.state.buffers.depth.getReversed(),Ee=F.isInstancedMesh===!0,we=F.isBatchedMesh===!0,ze=!!M.map,pt=!!M.matcap,ve=!!Z,qe=!!M.aoMap,U=!!M.lightMap,Xe=!!M.bumpMap,V=!!M.normalMap,et=!!M.displacementMap,be=!!M.emissiveMap,mt=!!M.metalnessMap,me=!!M.roughnessMap,ke=M.anisotropy>0,P=M.clearcoat>0,S=M.dispersion>0,k=M.iridescence>0,J=M.sheen>0,$=M.transmission>0,Y=ke&&!!M.anisotropyMap,Me=P&&!!M.clearcoatMap,le=P&&!!M.clearcoatNormalMap,Pe=P&&!!M.clearcoatRoughnessMap,de=k&&!!M.iridescenceMap,ne=k&&!!M.iridescenceThicknessMap,re=J&&!!M.sheenColorMap,De=J&&!!M.sheenRoughnessMap,Le=!!M.specularMap,he=!!M.specularColorMap,Oe=!!M.specularIntensityMap,D=$&&!!M.transmissionMap,ue=$&&!!M.thicknessMap,se=!!M.gradientMap,oe=!!M.alphaMap,te=M.alphaTest>0,Q=!!M.alphaHash,Se=!!M.extensions;let Be=Vi;M.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Be=r.toneMapping);const xt={shaderID:ee,shaderType:M.type,shaderName:M.name,vertexShader:He,fragmentShader:je,defines:M.defines,customVertexShaderID:Qe,customFragmentShaderID:K,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:we,batchingColor:we&&F._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&F.instanceColor!==null,instancingMorph:Ee&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?r.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:hn,alphaToCoverage:!!M.alphaToCoverage,map:ze,matcap:pt,envMap:ve,envMapMode:ve&&Z.mapping,envMapCubeUVHeight:q,aoMap:qe,lightMap:U,bumpMap:Xe,normalMap:V,displacementMap:d&&et,emissiveMap:be,normalMapObjectSpace:V&&M.normalMapType===Qm,normalMapTangentSpace:V&&M.normalMapType===sp,metalnessMap:mt,roughnessMap:me,anisotropy:ke,anisotropyMap:Y,clearcoat:P,clearcoatMap:Me,clearcoatNormalMap:le,clearcoatRoughnessMap:Pe,dispersion:S,iridescence:k,iridescenceMap:de,iridescenceThicknessMap:ne,sheen:J,sheenColorMap:re,sheenRoughnessMap:De,specularMap:Le,specularColorMap:he,specularIntensityMap:Oe,transmission:$,transmissionMap:D,thicknessMap:ue,gradientMap:se,opaque:M.transparent===!1&&M.blending===us&&M.alphaToCoverage===!1,alphaMap:oe,alphaTest:te,alphaHash:Q,combine:M.combine,mapUv:ze&&_(M.map.channel),aoMapUv:qe&&_(M.aoMap.channel),lightMapUv:U&&_(M.lightMap.channel),bumpMapUv:Xe&&_(M.bumpMap.channel),normalMapUv:V&&_(M.normalMap.channel),displacementMapUv:et&&_(M.displacementMap.channel),emissiveMapUv:be&&_(M.emissiveMap.channel),metalnessMapUv:mt&&_(M.metalnessMap.channel),roughnessMapUv:me&&_(M.roughnessMap.channel),anisotropyMapUv:Y&&_(M.anisotropyMap.channel),clearcoatMapUv:Me&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:re&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(M.sheenRoughnessMap.channel),specularMapUv:Le&&_(M.specularMap.channel),specularColorMapUv:he&&_(M.specularColorMap.channel),specularIntensityMapUv:Oe&&_(M.specularIntensityMap.channel),transmissionMapUv:D&&_(M.transmissionMap.channel),thicknessMapUv:ue&&_(M.thicknessMap.channel),alphaMapUv:oe&&_(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(V||ke),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(ze||oe),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ae,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ie,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&A.length>0,shadowMapType:r.shadowMap.type,toneMapping:Be,decodeVideoTexture:ze&&M.map.isVideoTexture===!0&&dt.getTransfer(M.map.colorSpace)===wt,decodeVideoTextureEmissive:be&&M.emissiveMap.isVideoTexture===!0&&dt.getTransfer(M.emissiveMap.colorSpace)===wt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gi,flipSided:M.side===Dn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Se&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&M.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function p(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const A in M.defines)x.push(A),x.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(T(x,M),v(x,M),x.push(r.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function T(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function v(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const x=g[M.type];let A;if(x){const L=mi[x];A=q0.clone(L.uniforms)}else A=M.uniforms;return A}function R(M,x){let A;for(let L=0,F=u.length;L<F;L++){const N=u[L];if(N.cacheKey===x){A=N,++A.usedTimes;break}}return A===void 0&&(A=new tb(r,x,M,s),u.push(A)),A}function b(M){if(--M.usedTimes===0){const x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function E(M){c.remove(M)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:b,releaseShaderCache:E,programs:u,dispose:C}}function ob(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function ab(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ld(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Id(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,h,g,_,m){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?n.push(p):h.transparent===!0?i.push(p):t.push(p)}function c(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?n.unshift(p):h.transparent===!0?i.unshift(p):t.unshift(p)}function l(f,d){t.length>1&&t.sort(f||ab),n.length>1&&n.sort(d||Ld),i.length>1&&i.sort(d||Ld)}function u(){for(let f=e,d=r.length;f<d;f++){const h=r[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function cb(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Id,r.set(n,[o])):i>=s.length?(o=new Id,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function lb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new $e};break;case"SpotLight":t={position:new z,direction:new z,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new z,halfWidth:new z,halfHeight:new z};break}return r[e.id]=t,t}}}function ub(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let fb=0;function db(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function hb(r){const e=new lb,t=ub(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const i=new z,s=new nt,o=new nt;function a(l){let u=0,f=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,T=0,v=0,y=0,R=0,b=0,E=0;l.sort(db);for(let M=0,x=l.length;M<x;M++){const A=l[M],L=A.color,F=A.intensity,N=A.distance,X=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=L.r*F,f+=L.g*F,d+=L.b*F;else if(A.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(A.sh.coefficients[H],F);E++}else if(A.isDirectionalLight){const H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Z=A.shadow,q=t.get(A);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,n.directionalShadow[h]=q,n.directionalShadowMap[h]=X,n.directionalShadowMatrix[h]=A.shadow.matrix,T++}n.directional[h]=H,h++}else if(A.isSpotLight){const H=e.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(L).multiplyScalar(F),H.distance=N,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,n.spot[_]=H;const Z=A.shadow;if(A.map&&(n.spotLightMap[R]=A.map,R++,Z.updateMatrices(A),A.castShadow&&b++),n.spotLightMatrix[_]=Z.matrix,A.castShadow){const q=t.get(A);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=X,y++}_++}else if(A.isRectAreaLight){const H=e.get(A);H.color.copy(L).multiplyScalar(F),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=H,m++}else if(A.isPointLight){const H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){const Z=A.shadow,q=t.get(A);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=A.shadow.matrix,v++}n.point[g]=H,g++}else if(A.isHemisphereLight){const H=e.get(A);H.skyColor.copy(A.color).multiplyScalar(F),H.groundColor.copy(A.groundColor).multiplyScalar(F),n.hemi[p]=H,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==h||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==T||C.numPointShadows!==v||C.numSpotShadows!==y||C.numSpotMaps!==R||C.numLightProbes!==E)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+R-b,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,C.directionalLength=h,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=T,C.numPointShadows=v,C.numSpotShadows=y,C.numSpotMaps=R,C.numLightProbes=E,n.version=fb++)}function c(l,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const v=l[p];if(v.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(v.isSpotLight){const y=n.spot[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(v.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Dd(r){const e=new hb(r),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function pb(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Dd(r),e.set(i,[a])):s>=o.length?(a=new Dd(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gb=`uniform sampler2D shadow_pass;
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
}`;function xb(r,e,t){let n=new ef;const i=new ft,s=new ft,o=new _t,a=new fg({depthPacking:Jm}),c=new dg,l={},u=t.maxTextureSize,f={[qi]:Dn,[Dn]:qi,[gi]:gi},d=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:mb,fragmentShader:gb}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new ci;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yh;let p=this.type;this.render=function(b,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const M=r.getRenderTarget(),x=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),L=r.state;L.setBlending(zi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=p!==Ni&&this.type===Ni,N=p===Ni&&this.type!==Ni;for(let X=0,H=b.length;X<H;X++){const Z=b[X],q=Z.shadow;if(q===void 0){Fe("WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const ee=q.getFrameExtents();if(i.multiply(ee),s.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ee.x),i.x=s.x*ee.x,q.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ee.y),i.y=s.y*ee.y,q.mapSize.y=s.y)),q.map===null||F===!0||N===!0){const fe=this.type!==Ni?{minFilter:wn,magFilter:wn}:{};q.map!==null&&q.map.dispose(),q.map=new Ir(i.x,i.y,fe),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const I=q.getViewportCount();for(let fe=0;fe<I;fe++){const Ie=q.getViewport(fe);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),L.viewport(o),q.updateMatrices(Z,fe),n=q.getFrustum(),y(E,C,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===Ni&&T(q,C),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,x,A)};function T(b,E){const C=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ir(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(E,null,C,d,_,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(E,null,C,h,_,null)}function v(b,E,C,M){let x=null;const A=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)x=A;else if(x=C.isPointLight===!0?c:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const L=x.uuid,F=E.uuid;let N=l[L];N===void 0&&(N={},l[L]=N);let X=N[F];X===void 0&&(X=x.clone(),N[F]=X,E.addEventListener("dispose",R)),x=X}if(x.visible=E.visible,x.wireframe=E.wireframe,M===Ni?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:f[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const L=r.properties.get(x);L.light=C}return x}function y(b,E,C,M,x){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Ni)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const F=e.update(b),N=b.material;if(Array.isArray(N)){const X=F.groups;for(let H=0,Z=X.length;H<Z;H++){const q=X[H],ee=N[q.materialIndex];if(ee&&ee.visible){const I=v(b,ee,M,x);b.onBeforeShadow(r,b,E,C,F,I,q),r.renderBufferDirect(C,null,F,I,b,q),b.onAfterShadow(r,b,E,C,F,I,q)}}}else if(N.visible){const X=v(b,N,M,x);b.onBeforeShadow(r,b,E,C,F,X,null),r.renderBufferDirect(C,null,F,X,b,null),b.onAfterShadow(r,b,E,C,F,X,null)}}const L=b.children;for(let F=0,N=L.length;F<N;F++)y(L[F],E,C,M,x)}function R(b){b.target.removeEventListener("dispose",R);for(const C in l){const M=l[C],x=b.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const _b={[Ul]:Nl,[Fl]:kl,[Ol]:zl,[xs]:Bl,[Nl]:Ul,[kl]:Fl,[zl]:Ol,[Bl]:xs};function vb(r,e){function t(){let D=!1;const ue=new _t;let se=null;const oe=new _t(0,0,0,0);return{setMask:function(te){se!==te&&!D&&(r.colorMask(te,te,te,te),se=te)},setLocked:function(te){D=te},setClear:function(te,Q,Se,Be,xt){xt===!0&&(te*=Be,Q*=Be,Se*=Be),ue.set(te,Q,Se,Be),oe.equals(ue)===!1&&(r.clearColor(te,Q,Se,Be),oe.copy(ue))},reset:function(){D=!1,se=null,oe.set(-1,0,0,0)}}}function n(){let D=!1,ue=!1,se=null,oe=null,te=null;return{setReversed:function(Q){if(ue!==Q){const Se=e.get("EXT_clip_control");Q?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ue=Q;const Be=te;te=null,this.setClear(Be)}},getReversed:function(){return ue},setTest:function(Q){Q?j(r.DEPTH_TEST):ae(r.DEPTH_TEST)},setMask:function(Q){se!==Q&&!D&&(r.depthMask(Q),se=Q)},setFunc:function(Q){if(ue&&(Q=_b[Q]),oe!==Q){switch(Q){case Ul:r.depthFunc(r.NEVER);break;case Nl:r.depthFunc(r.ALWAYS);break;case Fl:r.depthFunc(r.LESS);break;case xs:r.depthFunc(r.LEQUAL);break;case Ol:r.depthFunc(r.EQUAL);break;case Bl:r.depthFunc(r.GEQUAL);break;case kl:r.depthFunc(r.GREATER);break;case zl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}oe=Q}},setLocked:function(Q){D=Q},setClear:function(Q){te!==Q&&(ue&&(Q=1-Q),r.clearDepth(Q),te=Q)},reset:function(){D=!1,se=null,oe=null,te=null,ue=!1}}}function i(){let D=!1,ue=null,se=null,oe=null,te=null,Q=null,Se=null,Be=null,xt=null;return{setTest:function(ye){D||(ye?j(r.STENCIL_TEST):ae(r.STENCIL_TEST))},setMask:function(ye){ue!==ye&&!D&&(r.stencilMask(ye),ue=ye)},setFunc:function(ye,Ce,Ze){(se!==ye||oe!==Ce||te!==Ze)&&(r.stencilFunc(ye,Ce,Ze),se=ye,oe=Ce,te=Ze)},setOp:function(ye,Ce,Ze){(Q!==ye||Se!==Ce||Be!==Ze)&&(r.stencilOp(ye,Ce,Ze),Q=ye,Se=Ce,Be=Ze)},setLocked:function(ye){D=ye},setClear:function(ye){xt!==ye&&(r.clearStencil(ye),xt=ye)},reset:function(){D=!1,ue=null,se=null,oe=null,te=null,Q=null,Se=null,Be=null,xt=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,T=null,v=null,y=null,R=null,b=null,E=new $e(0,0,0),C=0,M=!1,x=null,A=null,L=null,F=null,N=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=Z>=2);let ee=null,I={};const fe=r.getParameter(r.SCISSOR_BOX),Ie=r.getParameter(r.VIEWPORT),He=new _t().fromArray(fe),je=new _t().fromArray(Ie);function Qe(D,ue,se,oe){const te=new Uint8Array(4),Q=r.createTexture();r.bindTexture(D,Q),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Se=0;Se<se;Se++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,oe,0,r.RGBA,r.UNSIGNED_BYTE,te):r.texImage2D(ue+Se,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,te);return Q}const K={};K[r.TEXTURE_2D]=Qe(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=Qe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=Qe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=Qe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(r.DEPTH_TEST),o.setFunc(xs),Xe(!1),V(vf),j(r.CULL_FACE),qe(zi);function j(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function ae(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function Ee(D,ue){return f[D]!==ue?(r.bindFramebuffer(D,ue),f[D]=ue,D===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ue),D===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function we(D,ue){let se=h,oe=!1;if(D){se=d.get(ue),se===void 0&&(se=[],d.set(ue,se));const te=D.textures;if(se.length!==te.length||se[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,Se=te.length;Q<Se;Q++)se[Q]=r.COLOR_ATTACHMENT0+Q;se.length=te.length,oe=!0}}else se[0]!==r.BACK&&(se[0]=r.BACK,oe=!0);oe&&r.drawBuffers(se)}function ze(D){return g!==D?(r.useProgram(D),g=D,!0):!1}const pt={[Tr]:r.FUNC_ADD,[Mm]:r.FUNC_SUBTRACT,[Sm]:r.FUNC_REVERSE_SUBTRACT};pt[Tm]=r.MIN,pt[Em]=r.MAX;const ve={[wm]:r.ZERO,[Am]:r.ONE,[Rm]:r.SRC_COLOR,[Il]:r.SRC_ALPHA,[Um]:r.SRC_ALPHA_SATURATE,[Im]:r.DST_COLOR,[Pm]:r.DST_ALPHA,[Cm]:r.ONE_MINUS_SRC_COLOR,[Dl]:r.ONE_MINUS_SRC_ALPHA,[Dm]:r.ONE_MINUS_DST_COLOR,[Lm]:r.ONE_MINUS_DST_ALPHA,[Nm]:r.CONSTANT_COLOR,[Fm]:r.ONE_MINUS_CONSTANT_COLOR,[Om]:r.CONSTANT_ALPHA,[Bm]:r.ONE_MINUS_CONSTANT_ALPHA};function qe(D,ue,se,oe,te,Q,Se,Be,xt,ye){if(D===zi){_===!0&&(ae(r.BLEND),_=!1);return}if(_===!1&&(j(r.BLEND),_=!0),D!==bm){if(D!==m||ye!==M){if((p!==Tr||y!==Tr)&&(r.blendEquation(r.FUNC_ADD),p=Tr,y=Tr),ye)switch(D){case us:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yf:r.blendFunc(r.ONE,r.ONE);break;case bf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Mf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ct("WebGLState: Invalid blending: ",D);break}else switch(D){case us:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yf:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case bf:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mf:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",D);break}T=null,v=null,R=null,b=null,E.set(0,0,0),C=0,m=D,M=ye}return}te=te||ue,Q=Q||se,Se=Se||oe,(ue!==p||te!==y)&&(r.blendEquationSeparate(pt[ue],pt[te]),p=ue,y=te),(se!==T||oe!==v||Q!==R||Se!==b)&&(r.blendFuncSeparate(ve[se],ve[oe],ve[Q],ve[Se]),T=se,v=oe,R=Q,b=Se),(Be.equals(E)===!1||xt!==C)&&(r.blendColor(Be.r,Be.g,Be.b,xt),E.copy(Be),C=xt),m=D,M=!1}function U(D,ue){D.side===gi?ae(r.CULL_FACE):j(r.CULL_FACE);let se=D.side===Dn;ue&&(se=!se),Xe(se),D.blending===us&&D.transparent===!1?qe(zi):qe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const oe=D.stencilWrite;a.setTest(oe),oe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),be(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?j(r.SAMPLE_ALPHA_TO_COVERAGE):ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(D){x!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),x=D)}function V(D){D!==vm?(j(r.CULL_FACE),D!==A&&(D===vf?r.cullFace(r.BACK):D===ym?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ae(r.CULL_FACE),A=D}function et(D){D!==L&&(H&&r.lineWidth(D),L=D)}function be(D,ue,se){D?(j(r.POLYGON_OFFSET_FILL),(F!==ue||N!==se)&&(r.polygonOffset(ue,se),F=ue,N=se)):ae(r.POLYGON_OFFSET_FILL)}function mt(D){D?j(r.SCISSOR_TEST):ae(r.SCISSOR_TEST)}function me(D){D===void 0&&(D=r.TEXTURE0+X-1),ee!==D&&(r.activeTexture(D),ee=D)}function ke(D,ue,se){se===void 0&&(ee===null?se=r.TEXTURE0+X-1:se=ee);let oe=I[se];oe===void 0&&(oe={type:void 0,texture:void 0},I[se]=oe),(oe.type!==D||oe.texture!==ue)&&(ee!==se&&(r.activeTexture(se),ee=se),r.bindTexture(D,ue||K[D]),oe.type=D,oe.texture=ue)}function P(){const D=I[ee];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function k(){try{r.compressedTexImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function J(){try{r.texSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function $(){try{r.texSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Me(){try{r.compressedTexSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function le(){try{r.texStorage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Pe(){try{r.texStorage3D(...arguments)}catch(D){D("WebGLState:",D)}}function de(){try{r.texImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function ne(){try{r.texImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function re(D){He.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),He.copy(D))}function De(D){je.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),je.copy(D))}function Le(D,ue){let se=l.get(ue);se===void 0&&(se=new WeakMap,l.set(ue,se));let oe=se.get(D);oe===void 0&&(oe=r.getUniformBlockIndex(ue,D.name),se.set(D,oe))}function he(D,ue){const oe=l.get(ue).get(D);c.get(ue)!==oe&&(r.uniformBlockBinding(ue,oe,D.__bindingPointIndex),c.set(ue,oe))}function Oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ee=null,I={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,T=null,v=null,y=null,R=null,b=null,E=new $e(0,0,0),C=0,M=!1,x=null,A=null,L=null,F=null,N=null,He.set(0,0,r.canvas.width,r.canvas.height),je.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:j,disable:ae,bindFramebuffer:Ee,drawBuffers:we,useProgram:ze,setBlending:qe,setMaterial:U,setFlipSided:Xe,setCullFace:V,setLineWidth:et,setPolygonOffset:be,setScissorTest:mt,activeTexture:me,bindTexture:ke,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:k,texImage2D:de,texImage3D:ne,updateUBOMapping:Le,uniformBlockBinding:he,texStorage2D:le,texStorage3D:Pe,texSubImage2D:J,texSubImage3D:$,compressedTexSubImage2D:Y,compressedTexSubImage3D:Me,scissor:re,viewport:De,reset:Oe}}function yb(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return h?new OffscreenCanvas(P,S):To("canvas")}function _(P,S,k){let J=1;const $=ke(P);if(($.width>k||$.height>k)&&(J=k/Math.max($.width,$.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Y=Math.floor(J*$.width),Me=Math.floor(J*$.height);f===void 0&&(f=g(Y,Me));const le=S?g(Y,Me):f;return le.width=Y,le.height=Me,le.getContext("2d").drawImage(P,0,0,Y,Me),Fe("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Y+"x"+Me+")."),le}else return"data"in P&&Fe("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){r.generateMipmap(P)}function T(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(P,S,k,J,$=!1){if(P!==null){if(r[P]!==void 0)return r[P];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=S;if(S===r.RED&&(k===r.FLOAT&&(Y=r.R32F),k===r.HALF_FLOAT&&(Y=r.R16F),k===r.UNSIGNED_BYTE&&(Y=r.R8)),S===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.R8UI),k===r.UNSIGNED_SHORT&&(Y=r.R16UI),k===r.UNSIGNED_INT&&(Y=r.R32UI),k===r.BYTE&&(Y=r.R8I),k===r.SHORT&&(Y=r.R16I),k===r.INT&&(Y=r.R32I)),S===r.RG&&(k===r.FLOAT&&(Y=r.RG32F),k===r.HALF_FLOAT&&(Y=r.RG16F),k===r.UNSIGNED_BYTE&&(Y=r.RG8)),S===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RG8UI),k===r.UNSIGNED_SHORT&&(Y=r.RG16UI),k===r.UNSIGNED_INT&&(Y=r.RG32UI),k===r.BYTE&&(Y=r.RG8I),k===r.SHORT&&(Y=r.RG16I),k===r.INT&&(Y=r.RG32I)),S===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),k===r.UNSIGNED_INT&&(Y=r.RGB32UI),k===r.BYTE&&(Y=r.RGB8I),k===r.SHORT&&(Y=r.RGB16I),k===r.INT&&(Y=r.RGB32I)),S===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),k===r.UNSIGNED_INT&&(Y=r.RGBA32UI),k===r.BYTE&&(Y=r.RGBA8I),k===r.SHORT&&(Y=r.RGBA16I),k===r.INT&&(Y=r.RGBA32I)),S===r.RGB&&(k===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),S===r.RGBA){const Me=$?Va:dt.getTransfer(J);k===r.FLOAT&&(Y=r.RGBA32F),k===r.HALF_FLOAT&&(Y=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Y=Me===wt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(P,S){let k;return P?S===null||S===Lr||S===vo?k=r.DEPTH24_STENCIL8:S===In?k=r.DEPTH32F_STENCIL8:S===_o&&(k=r.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Lr||S===vo?k=r.DEPTH_COMPONENT24:S===In?k=r.DEPTH_COMPONENT32F:S===_o&&(k=r.DEPTH_COMPONENT16),k}function R(P,S){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==wn&&P.minFilter!==Wt?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function b(P){const S=P.target;S.removeEventListener("dispose",b),C(S),S.isVideoTexture&&u.delete(S)}function E(P){const S=P.target;S.removeEventListener("dispose",E),x(S)}function C(P){const S=n.get(P);if(S.__webglInit===void 0)return;const k=P.source,J=d.get(k);if(J){const $=J[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(P),Object.keys(J).length===0&&d.delete(k)}n.remove(P)}function M(P){const S=n.get(P);r.deleteTexture(S.__webglTexture);const k=P.source,J=d.get(k);delete J[S.__cacheKey],o.memory.textures--}function x(P){const S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let $=0;$<S.__webglFramebuffer[J].length;$++)r.deleteFramebuffer(S.__webglFramebuffer[J][$]);else r.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)r.deleteFramebuffer(S.__webglFramebuffer[J]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=P.textures;for(let J=0,$=k.length;J<$;J++){const Y=n.get(k[J]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(k[J])}n.remove(P)}let A=0;function L(){A=0}function F(){const P=A;return P>=i.maxTextures&&Fe("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),A+=1,P}function N(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function X(P,S){const k=n.get(P);if(P.isVideoTexture&&mt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){const J=P.image;if(J===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,P,S);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+S)}function H(P,S){const k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){K(k,P,S);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+S)}function Z(P,S){const k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){K(k,P,S);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+S)}function q(P,S){const k=n.get(P);if(P.version>0&&k.__version!==P.version){j(k,P,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+S)}const ee={[ys]:r.REPEAT,[jn]:r.CLAMP_TO_EDGE,[za]:r.MIRRORED_REPEAT},I={[wn]:r.NEAREST,[Zh]:r.NEAREST_MIPMAP_NEAREST,[js]:r.NEAREST_MIPMAP_LINEAR,[Wt]:r.LINEAR,[wa]:r.LINEAR_MIPMAP_NEAREST,[xi]:r.LINEAR_MIPMAP_LINEAR},fe={[e0]:r.NEVER,[o0]:r.ALWAYS,[t0]:r.LESS,[op]:r.LEQUAL,[n0]:r.EQUAL,[s0]:r.GEQUAL,[i0]:r.GREATER,[r0]:r.NOTEQUAL};function Ie(P,S){if(S.type===In&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Wt||S.magFilter===wa||S.magFilter===js||S.magFilter===xi||S.minFilter===Wt||S.minFilter===wa||S.minFilter===js||S.minFilter===xi)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ee[S.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ee[S.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ee[S.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,I[S.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,I[S.minFilter]),S.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,fe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===wn||S.minFilter!==js&&S.minFilter!==xi||S.type===In&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function He(P,S){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",b));const J=S.source;let $=d.get(J);$===void 0&&($={},d.set(J,$));const Y=N(S);if(Y!==P.__cacheKey){$[Y]===void 0&&($[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),$[Y].usedTimes++;const Me=$[P.__cacheKey];Me!==void 0&&($[P.__cacheKey].usedTimes--,Me.usedTimes===0&&M(S)),P.__cacheKey=Y,P.__webglTexture=$[Y].texture}return k}function je(P,S,k){return Math.floor(Math.floor(P/k)/S)}function Qe(P,S,k,J){const Y=P.updateRanges;if(Y.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,k,J,S.data);else{Y.sort((ne,re)=>ne.start-re.start);let Me=0;for(let ne=1;ne<Y.length;ne++){const re=Y[Me],De=Y[ne],Le=re.start+re.count,he=je(De.start,S.width,4),Oe=je(re.start,S.width,4);De.start<=Le+1&&he===Oe&&je(De.start+De.count-1,S.width,4)===he?re.count=Math.max(re.count,De.start+De.count-re.start):(++Me,Y[Me]=De)}Y.length=Me+1;const le=r.getParameter(r.UNPACK_ROW_LENGTH),Pe=r.getParameter(r.UNPACK_SKIP_PIXELS),de=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let ne=0,re=Y.length;ne<re;ne++){const De=Y[ne],Le=Math.floor(De.start/4),he=Math.ceil(De.count/4),Oe=Le%S.width,D=Math.floor(Le/S.width),ue=he,se=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Oe),r.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,Oe,D,ue,se,k,J,S.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,le),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Pe),r.pixelStorei(r.UNPACK_SKIP_ROWS,de)}}function K(P,S,k){let J=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=r.TEXTURE_3D);const $=He(P,S),Y=S.source;t.bindTexture(J,P.__webglTexture,r.TEXTURE0+k);const Me=n.get(Y);if(Y.version!==Me.__version||$===!0){t.activeTexture(r.TEXTURE0+k);const le=dt.getPrimaries(dt.workingColorSpace),Pe=S.colorSpace===sr?null:dt.getPrimaries(S.colorSpace),de=S.colorSpace===sr||le===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let ne=_(S.image,!1,i.maxTextureSize);ne=me(S,ne);const re=s.convert(S.format,S.colorSpace),De=s.convert(S.type);let Le=v(S.internalFormat,re,De,S.colorSpace,S.isVideoTexture);Ie(J,S);let he;const Oe=S.mipmaps,D=S.isVideoTexture!==!0,ue=Me.__version===void 0||$===!0,se=Y.dataReady,oe=R(S,ne);if(S.isDepthTexture)Le=y(S.format===bo,S.type),ue&&(D?t.texStorage2D(r.TEXTURE_2D,1,Le,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,Le,ne.width,ne.height,0,re,De,null));else if(S.isDataTexture)if(Oe.length>0){D&&ue&&t.texStorage2D(r.TEXTURE_2D,oe,Le,Oe[0].width,Oe[0].height);for(let te=0,Q=Oe.length;te<Q;te++)he=Oe[te],D?se&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,he.width,he.height,re,De,he.data):t.texImage2D(r.TEXTURE_2D,te,Le,he.width,he.height,0,re,De,he.data);S.generateMipmaps=!1}else D?(ue&&t.texStorage2D(r.TEXTURE_2D,oe,Le,ne.width,ne.height),se&&Qe(S,ne,re,De)):t.texImage2D(r.TEXTURE_2D,0,Le,ne.width,ne.height,0,re,De,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){D&&ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,Le,Oe[0].width,Oe[0].height,ne.depth);for(let te=0,Q=Oe.length;te<Q;te++)if(he=Oe[te],S.format!==$n)if(re!==null)if(D){if(se)if(S.layerUpdates.size>0){const Se=fd(he.width,he.height,S.format,S.type);for(const Be of S.layerUpdates){const xt=he.data.subarray(Be*Se/he.data.BYTES_PER_ELEMENT,(Be+1)*Se/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,Be,he.width,he.height,1,re,xt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ne.depth,re,he.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,Le,he.width,he.height,ne.depth,0,he.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?se&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ne.depth,re,De,he.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,Le,he.width,he.height,ne.depth,0,re,De,he.data)}else{D&&ue&&t.texStorage2D(r.TEXTURE_2D,oe,Le,Oe[0].width,Oe[0].height);for(let te=0,Q=Oe.length;te<Q;te++)he=Oe[te],S.format!==$n?re!==null?D?se&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,he.width,he.height,re,he.data):t.compressedTexImage2D(r.TEXTURE_2D,te,Le,he.width,he.height,0,he.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?se&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,he.width,he.height,re,De,he.data):t.texImage2D(r.TEXTURE_2D,te,Le,he.width,he.height,0,re,De,he.data)}else if(S.isDataArrayTexture)if(D){if(ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,Le,ne.width,ne.height,ne.depth),se)if(S.layerUpdates.size>0){const te=fd(ne.width,ne.height,S.format,S.type);for(const Q of S.layerUpdates){const Se=ne.data.subarray(Q*te/ne.data.BYTES_PER_ELEMENT,(Q+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,ne.width,ne.height,1,re,De,Se)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,re,De,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,ne.width,ne.height,ne.depth,0,re,De,ne.data);else if(S.isData3DTexture)D?(ue&&t.texStorage3D(r.TEXTURE_3D,oe,Le,ne.width,ne.height,ne.depth),se&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,re,De,ne.data)):t.texImage3D(r.TEXTURE_3D,0,Le,ne.width,ne.height,ne.depth,0,re,De,ne.data);else if(S.isFramebufferTexture){if(ue)if(D)t.texStorage2D(r.TEXTURE_2D,oe,Le,ne.width,ne.height);else{let te=ne.width,Q=ne.height;for(let Se=0;Se<oe;Se++)t.texImage2D(r.TEXTURE_2D,Se,Le,te,Q,0,re,De,null),te>>=1,Q>>=1}}else if(Oe.length>0){if(D&&ue){const te=ke(Oe[0]);t.texStorage2D(r.TEXTURE_2D,oe,Le,te.width,te.height)}for(let te=0,Q=Oe.length;te<Q;te++)he=Oe[te],D?se&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,re,De,he):t.texImage2D(r.TEXTURE_2D,te,Le,re,De,he);S.generateMipmaps=!1}else if(D){if(ue){const te=ke(ne);t.texStorage2D(r.TEXTURE_2D,oe,Le,te.width,te.height)}se&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,re,De,ne)}else t.texImage2D(r.TEXTURE_2D,0,Le,re,De,ne);m(S)&&p(J),Me.__version=Y.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function j(P,S,k){if(S.image.length!==6)return;const J=He(P,S),$=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+k);const Y=n.get($);if($.version!==Y.__version||J===!0){t.activeTexture(r.TEXTURE0+k);const Me=dt.getPrimaries(dt.workingColorSpace),le=S.colorSpace===sr?null:dt.getPrimaries(S.colorSpace),Pe=S.colorSpace===sr||Me===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const de=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,re=[];for(let Q=0;Q<6;Q++)!de&&!ne?re[Q]=_(S.image[Q],!0,i.maxCubemapSize):re[Q]=ne?S.image[Q].image:S.image[Q],re[Q]=me(S,re[Q]);const De=re[0],Le=s.convert(S.format,S.colorSpace),he=s.convert(S.type),Oe=v(S.internalFormat,Le,he,S.colorSpace),D=S.isVideoTexture!==!0,ue=Y.__version===void 0||J===!0,se=$.dataReady;let oe=R(S,De);Ie(r.TEXTURE_CUBE_MAP,S);let te;if(de){D&&ue&&t.texStorage2D(r.TEXTURE_CUBE_MAP,oe,Oe,De.width,De.height);for(let Q=0;Q<6;Q++){te=re[Q].mipmaps;for(let Se=0;Se<te.length;Se++){const Be=te[Se];S.format!==$n?Le!==null?D?se&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,0,0,Be.width,Be.height,Le,Be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,Oe,Be.width,Be.height,0,Be.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,0,0,Be.width,Be.height,Le,he,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,Oe,Be.width,Be.height,0,Le,he,Be.data)}}}else{if(te=S.mipmaps,D&&ue){te.length>0&&oe++;const Q=ke(re[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,oe,Oe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ne){D?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,re[Q].width,re[Q].height,Le,he,re[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Oe,re[Q].width,re[Q].height,0,Le,he,re[Q].data);for(let Se=0;Se<te.length;Se++){const xt=te[Se].image[Q].image;D?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,0,0,xt.width,xt.height,Le,he,xt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,Oe,xt.width,xt.height,0,Le,he,xt.data)}}else{D?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Le,he,re[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Oe,Le,he,re[Q]);for(let Se=0;Se<te.length;Se++){const Be=te[Se];D?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,0,0,Le,he,Be.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,Oe,Le,he,Be.image[Q])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),Y.__version=$.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ae(P,S,k,J,$,Y){const Me=s.convert(k.format,k.colorSpace),le=s.convert(k.type),Pe=v(k.internalFormat,Me,le,k.colorSpace),de=n.get(S),ne=n.get(k);if(ne.__renderTarget=S,!de.__hasExternalTextures){const re=Math.max(1,S.width>>Y),De=Math.max(1,S.height>>Y);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,Y,Pe,re,De,S.depth,0,Me,le,null):t.texImage2D($,Y,Pe,re,De,0,Me,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),be(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,$,ne.__webglTexture,0,et(S)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,$,ne.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(P,S,k){if(r.bindRenderbuffer(r.RENDERBUFFER,P),S.depthBuffer){const J=S.depthTexture,$=J&&J.isDepthTexture?J.type:null,Y=y(S.stencilBuffer,$),Me=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=et(S);be(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,Y,S.width,S.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,Y,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Y,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,P)}else{const J=S.textures;for(let $=0;$<J.length;$++){const Y=J[$],Me=s.convert(Y.format,Y.colorSpace),le=s.convert(Y.type),Pe=v(Y.internalFormat,Me,le,Y.colorSpace),de=et(S);k&&be(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,de,Pe,S.width,S.height):be(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,Pe,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Pe,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function we(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const $=J.__webglTexture,Y=et(S);if(S.depthTexture.format===yo)be(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else if(S.depthTexture.format===bo)be(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ze(P){const S=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const J=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",$)};J.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=J}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const J=P.texture.mipmaps;J&&J.length>0?we(S.__webglFramebuffer[0],P):we(S.__webglFramebuffer,P)}else if(k){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=r.createRenderbuffer(),Ee(S.__webglDepthbuffer[J],P,!1);else{const $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,Y)}}else{const J=P.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Ee(S.__webglDepthbuffer,P,!1);else{const $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,Y)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function pt(P,S,k){const J=n.get(P);S!==void 0&&ae(J.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&ze(P)}function ve(P){const S=P.texture,k=n.get(P),J=n.get(S);P.addEventListener("dispose",E);const $=P.textures,Y=P.isWebGLCubeRenderTarget===!0,Me=$.length>1;if(Me||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=S.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[le]=[];for(let Pe=0;Pe<S.mipmaps.length;Pe++)k.__webglFramebuffer[le][Pe]=r.createFramebuffer()}else k.__webglFramebuffer[le]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)k.__webglFramebuffer[le]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(Me)for(let le=0,Pe=$.length;le<Pe;le++){const de=n.get($[le]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&be(P)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let le=0;le<$.length;le++){const Pe=$[le];k.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[le]);const de=s.convert(Pe.format,Pe.colorSpace),ne=s.convert(Pe.type),re=v(Pe.internalFormat,de,ne,Pe.colorSpace,P.isXRRenderTarget===!0),De=et(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,re,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,k.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Ee(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let Pe=0;Pe<S.mipmaps.length;Pe++)ae(k.__webglFramebuffer[le][Pe],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe);else ae(k.__webglFramebuffer[le],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(S)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let le=0,Pe=$.length;le<Pe;le++){const de=$[le],ne=n.get(de);let re=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(re=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(re,ne.__webglTexture),Ie(re,de),ae(k.__webglFramebuffer,P,de,r.COLOR_ATTACHMENT0+le,re,0),m(de)&&p(re)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,J.__webglTexture),Ie(le,S),S.mipmaps&&S.mipmaps.length>0)for(let Pe=0;Pe<S.mipmaps.length;Pe++)ae(k.__webglFramebuffer[Pe],P,S,r.COLOR_ATTACHMENT0,le,Pe);else ae(k.__webglFramebuffer,P,S,r.COLOR_ATTACHMENT0,le,0);m(S)&&p(le),t.unbindTexture()}P.depthBuffer&&ze(P)}function qe(P){const S=P.textures;for(let k=0,J=S.length;k<J;k++){const $=S[k];if(m($)){const Y=T(P),Me=n.get($).__webglTexture;t.bindTexture(Y,Me),p(Y),t.unbindTexture()}}}const U=[],Xe=[];function V(P){if(P.samples>0){if(be(P)===!1){const S=P.textures,k=P.width,J=P.height;let $=r.COLOR_BUFFER_BIT;const Y=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=n.get(P),le=S.length>1;if(le)for(let de=0;de<S.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Pe=P.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let de=0;de<S.length;de++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Me.__webglColorRenderbuffer[de]);const ne=n.get(S[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ne,0)}r.blitFramebuffer(0,0,k,J,0,0,k,J,$,r.NEAREST),c===!0&&(U.length=0,Xe.length=0,U.push(r.COLOR_ATTACHMENT0+de),P.depthBuffer&&P.resolveDepthBuffer===!1&&(U.push(Y),Xe.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Xe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let de=0;de<S.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,Me.__webglColorRenderbuffer[de]);const ne=n.get(S[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const S=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function et(P){return Math.min(i.maxSamples,P.samples)}function be(P){const S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function mt(P){const S=o.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function me(P,S){const k=P.colorSpace,J=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==hn&&k!==sr&&(dt.getTransfer(k)===wt?(J!==$n||$!==Ti)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",k)),S}function ke(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=pt,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=be}function bb(r,e){function t(n,i=sr){let s;const o=dt.getTransfer(i);if(n===Ti)return r.UNSIGNED_BYTE;if(n===Gu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Wu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ep)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===tp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jh)return r.BYTE;if(n===Qh)return r.SHORT;if(n===_o)return r.UNSIGNED_SHORT;if(n===Hu)return r.INT;if(n===Lr)return r.UNSIGNED_INT;if(n===In)return r.FLOAT;if(n===_i)return r.HALF_FLOAT;if(n===np)return r.ALPHA;if(n===ip)return r.RGB;if(n===$n)return r.RGBA;if(n===yo)return r.DEPTH_COMPONENT;if(n===bo)return r.DEPTH_STENCIL;if(n===Xu)return r.RED;if(n===qu)return r.RED_INTEGER;if(n===Yu)return r.RG;if(n===Ku)return r.RG_INTEGER;if(n===ju)return r.RGBA_INTEGER;if(n===Aa||n===Ra||n===Ca||n===Pa)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Aa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Aa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ra)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ca)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gl||n===Wl||n===Xl||n===ql)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Gl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ql)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yl||n===Kl||n===jl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Yl||n===Kl)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===jl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$l||n===Zl||n===Jl||n===Ql||n===eu||n===tu||n===nu||n===iu||n===ru||n===su||n===ou||n===au||n===cu||n===lu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$l)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ql)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===iu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ru)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===su)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ou)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===au)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uu||n===fu||n===du)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===uu)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===du)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hu||n===pu||n===mu||n===gu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===hu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===pu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sb=`
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

}`;class Tb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new yp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Yi({vertexShader:Mb,fragmentShader:Sb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jn(new sc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Eb extends As{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Tb,p={},T=t.getContextAttributes();let v=null,y=null;const R=[],b=[],E=new ft;let C=null;const M=new Tn;M.viewport=new _t;const x=new Tn;x.viewport=new _t;const A=[M,x],L=new Ng;let F=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let j=R[K];return j===void 0&&(j=new Dc,R[K]=j),j.getTargetRaySpace()},this.getControllerGrip=function(K){let j=R[K];return j===void 0&&(j=new Dc,R[K]=j),j.getGripSpace()},this.getHand=function(K){let j=R[K];return j===void 0&&(j=new Dc,R[K]=j),j.getHandSpace()};function X(K){const j=b.indexOf(K.inputSource);if(j===-1)return;const ae=R[j];ae!==void 0&&(ae.update(K.inputSource,K.frame,l||o),ae.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",Z);for(let K=0;K<R.length;K++){const j=b[K];j!==null&&(b[K]=null,R[K].disconnect(j))}F=null,N=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(v),h=null,d=null,f=null,i=null,y=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",H),i.addEventListener("inputsourceschange",Z),T.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Ee=null,we=null;T.depth&&(we=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=T.stencil?bo:yo,Ee=T.stencil?vo:Lr);const ze={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(ze),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ir(d.textureWidth,d.textureHeight,{format:$n,type:Ti,depthTexture:new vp(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ae={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Ir(h.framebufferWidth,h.framebufferHeight,{format:$n,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Qe.setContext(i),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(K){for(let j=0;j<K.removed.length;j++){const ae=K.removed[j],Ee=b.indexOf(ae);Ee>=0&&(b[Ee]=null,R[Ee].disconnect(ae))}for(let j=0;j<K.added.length;j++){const ae=K.added[j];let Ee=b.indexOf(ae);if(Ee===-1){for(let ze=0;ze<R.length;ze++)if(ze>=b.length){b.push(ae),Ee=ze;break}else if(b[ze]===null){b[ze]=ae,Ee=ze;break}if(Ee===-1)break}const we=R[Ee];we&&we.connect(ae)}}const q=new z,ee=new z;function I(K,j,ae){q.setFromMatrixPosition(j.matrixWorld),ee.setFromMatrixPosition(ae.matrixWorld);const Ee=q.distanceTo(ee),we=j.projectionMatrix.elements,ze=ae.projectionMatrix.elements,pt=we[14]/(we[10]-1),ve=we[14]/(we[10]+1),qe=(we[9]+1)/we[5],U=(we[9]-1)/we[5],Xe=(we[8]-1)/we[0],V=(ze[8]+1)/ze[0],et=pt*Xe,be=pt*V,mt=Ee/(-Xe+V),me=mt*-Xe;if(j.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(me),K.translateZ(mt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),we[10]===-1)K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const ke=pt+mt,P=ve+mt,S=et-me,k=be+(Ee-me),J=qe*ve/P*ke,$=U*ve/P*ke;K.projectionMatrix.makePerspective(S,k,J,$,ke,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function fe(K,j){j===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(j.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let j=K.near,ae=K.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),L.near=x.near=M.near=j,L.far=x.far=M.far=ae,(F!==L.near||N!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),F=L.near,N=L.far),L.layers.mask=K.layers.mask|6,M.layers.mask=L.layers.mask&3,x.layers.mask=L.layers.mask&5;const Ee=K.parent,we=L.cameras;fe(L,Ee);for(let ze=0;ze<we.length;ze++)fe(we[ze],Ee);we.length===2?I(L,M,x):L.projectionMatrix.copy(M.projectionMatrix),Ie(K,L,Ee)};function Ie(K,j,ae){ae===null?K.matrix.copy(j.matrixWorld):(K.matrix.copy(ae.matrixWorld),K.matrix.invert(),K.matrix.multiply(j.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=bs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(K){return p[K]};let He=null;function je(K,j){if(u=j.getViewerPose(l||o),g=j,u!==null){const ae=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let Ee=!1;ae.length!==L.cameras.length&&(L.cameras.length=0,Ee=!0);for(let ve=0;ve<ae.length;ve++){const qe=ae[ve];let U=null;if(h!==null)U=h.getViewport(qe);else{const V=f.getViewSubImage(d,qe);U=V.viewport,ve===0&&(e.setRenderTargetTextures(y,V.colorTexture,V.depthStencilTexture),e.setRenderTarget(y))}let Xe=A[ve];Xe===void 0&&(Xe=new Tn,Xe.layers.enable(ve),Xe.viewport=new _t,A[ve]=Xe),Xe.matrix.fromArray(qe.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(qe.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(U.x,U.y,U.width,U.height),ve===0&&(L.matrix.copy(Xe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ee===!0&&L.cameras.push(Xe)}const we=i.enabledFeatures;if(we&&we.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const ve=f.getDepthInformation(ae[0]);ve&&ve.isValid&&ve.texture&&m.init(ve,i.renderState)}if(we&&we.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let ve=0;ve<ae.length;ve++){const qe=ae[ve].camera;if(qe){let U=p[qe];U||(U=new yp,p[qe]=U);const Xe=f.getCameraImage(qe);U.sourceTexture=Xe}}}}for(let ae=0;ae<R.length;ae++){const Ee=b[ae],we=R[ae];Ee!==null&&we!==void 0&&we.update(Ee,j,l||o)}He&&He(K,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Qe=new Sp;Qe.setAnimationLoop(je),this.setAnimationLoop=function(K){He=K},this.dispose=function(){}}}const vr=new Ei,wb=new nt;function Ab(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,hp(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),v=T.envMap,y=T.envMapRotation;v&&(m.envMap.value=v,vr.copy(y),vr.x*=-1,vr.y*=-1,vr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),m.envMapRotation.value.setFromMatrix4(wb.makeRotationFromEuler(vr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Rb(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,v){const y=v.program;n.uniformBlockBinding(T,y)}function l(T,v){let y=i[T.id];y===void 0&&(g(T),y=u(T),i[T.id]=y,T.addEventListener("dispose",m));const R=v.program;n.updateUBOMapping(T,R);const b=e.render.frame;s[T.id]!==b&&(d(T),s[T.id]=b)}function u(T){const v=f();T.__bindingPointIndex=v;const y=r.createBuffer(),R=T.__size,b=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,R,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const v=i[T.id],y=T.uniforms,R=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let b=0,E=y.length;b<E;b++){const C=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,x=C.length;M<x;M++){const A=C[M];if(h(A,b,M,R)===!0){const L=A.__offset,F=Array.isArray(A.value)?A.value:[A.value];let N=0;for(let X=0;X<F.length;X++){const H=F[X],Z=_(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,L+N,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,N),N+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,A.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(T,v,y,R){const b=T.value,E=v+"_"+y;if(R[E]===void 0)return typeof b=="number"||typeof b=="boolean"?R[E]=b:R[E]=b.clone(),!0;{const C=R[E];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return R[E]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(T){const v=T.uniforms;let y=0;const R=16;for(let E=0,C=v.length;E<C;E++){const M=Array.isArray(v[E])?v[E]:[v[E]];for(let x=0,A=M.length;x<A;x++){const L=M[x],F=Array.isArray(L.value)?L.value:[L.value];for(let N=0,X=F.length;N<X;N++){const H=F[N],Z=_(H),q=y%R,ee=q%Z.boundary,I=q+ee;y+=ee,I!==0&&R-I<Z.storage&&(y+=R-I),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=Z.storage}}}const b=y%R;return b>0&&(y+=R-b),T.__size=y,T.__cache={},this}function _(T){const v={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(v.boundary=4,v.storage=4):T.isVector2?(v.boundary=8,v.storage=8):T.isVector3||T.isColor?(v.boundary=16,v.storage=12):T.isVector4?(v.boundary=16,v.storage=16):T.isMatrix3?(v.boundary=48,v.storage=48):T.isMatrix4?(v.boundary=64,v.storage=64):T.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Fe("WebGLRenderer: Unsupported uniform value type.",T),v}function m(T){const v=T.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const T in i)r.deleteBuffer(i[T]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}const Cb=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Ui=null;function Pb(){return Ui===null&&(Ui=new rc(Cb,32,32,Yu,_i),Ui.minFilter=Wt,Ui.magFilter=Wt,Ui.wrapS=jn,Ui.wrapT=jn,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}class Lb{constructor(e={}){const{canvas:t=a0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const g=new Set([ju,Ku,qu]),_=new Set([Ti,Lr,_o,vo,Gu,Wu]),m=new Uint32Array(4),p=new Int32Array(4);let T=null,v=null;const y=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let E=!1;this._outputColorSpace=Pt;let C=0,M=0,x=null,A=-1,L=null;const F=new _t,N=new _t;let X=null;const H=new $e(0);let Z=0,q=t.width,ee=t.height,I=1,fe=null,Ie=null;const He=new _t(0,0,q,ee),je=new _t(0,0,q,ee);let Qe=!1;const K=new ef;let j=!1,ae=!1;const Ee=new nt,we=new z,ze=new _t,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function qe(){return x===null?I:1}let U=n;function Xe(w,B){return t.getContext(w,B)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vu}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",Se,!1),U===null){const B="webgl2";if(U=Xe(B,w),U===null)throw Xe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}let V,et,be,mt,me,ke,P,S,k,J,$,Y,Me,le,Pe,de,ne,re,De,Le,he,Oe,D,ue;function se(){V=new kv(U),V.init(),Oe=new bb(U,V),et=new Pv(U,V,e,Oe),be=new vb(U,V),et.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),mt=new Hv(U),me=new ob,ke=new yb(U,V,be,me,et,Oe,mt),P=new Iv(b),S=new Bv(b),k=new qg(U),D=new Rv(U,k),J=new zv(U,k,mt,D),$=new Wv(U,J,k,mt),De=new Gv(U,et,ke),de=new Lv(me),Y=new sb(b,P,S,V,et,D,de),Me=new Ab(b,me),le=new cb,Pe=new pb(V),re=new Av(b,P,S,be,$,h,c),ne=new xb(b,$,et),ue=new Rb(U,mt,et,be),Le=new Cv(U,V,mt),he=new Vv(U,V,mt),mt.programs=Y.programs,b.capabilities=et,b.extensions=V,b.properties=me,b.renderLists=le,b.shadowMap=ne,b.state=be,b.info=mt}se();const oe=new Eb(b,U);this.xr=oe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=V.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=V.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(w){w!==void 0&&(I=w,this.setSize(q,ee,!1))},this.getSize=function(w){return w.set(q,ee)},this.setSize=function(w,B,W=!0){if(oe.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,ee=B,t.width=Math.floor(w*I),t.height=Math.floor(B*I),W===!0&&(t.style.width=w+"px",t.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(q*I,ee*I).floor()},this.setDrawingBufferSize=function(w,B,W){q=w,ee=B,I=W,t.width=Math.floor(w*W),t.height=Math.floor(B*W),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(He)},this.setViewport=function(w,B,W,G){w.isVector4?He.set(w.x,w.y,w.z,w.w):He.set(w,B,W,G),be.viewport(F.copy(He).multiplyScalar(I).round())},this.getScissor=function(w){return w.copy(je)},this.setScissor=function(w,B,W,G){w.isVector4?je.set(w.x,w.y,w.z,w.w):je.set(w,B,W,G),be.scissor(N.copy(je).multiplyScalar(I).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(w){be.setScissorTest(Qe=w)},this.setOpaqueSort=function(w){fe=w},this.setTransparentSort=function(w){Ie=w},this.getClearColor=function(w){return w.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,W=!0){let G=0;if(w){let O=!1;if(x!==null){const ce=x.texture.format;O=g.has(ce)}if(O){const ce=x.texture.type,_e=_.has(ce),Te=re.getClearColor(),pe=re.getClearAlpha(),Ne=Te.r,Ve=Te.g,Re=Te.b;_e?(m[0]=Ne,m[1]=Ve,m[2]=Re,m[3]=pe,U.clearBufferuiv(U.COLOR,0,m)):(p[0]=Ne,p[1]=Ve,p[2]=Re,p[3]=pe,U.clearBufferiv(U.COLOR,0,p))}else G|=U.COLOR_BUFFER_BIT}B&&(G|=U.DEPTH_BUFFER_BIT),W&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),re.dispose(),le.dispose(),Pe.dispose(),me.dispose(),P.dispose(),S.dispose(),$.dispose(),D.dispose(),ue.dispose(),Y.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Ye),oe.removeEventListener("sessionend",Ue),Ge.stop()};function te(w){w.preventDefault(),Ga("WebGLRenderer: Context Lost."),E=!0}function Q(){Ga("WebGLRenderer: Context Restored."),E=!1;const w=mt.autoReset,B=ne.enabled,W=ne.autoUpdate,G=ne.needsUpdate,O=ne.type;se(),mt.autoReset=w,ne.enabled=B,ne.autoUpdate=W,ne.needsUpdate=G,ne.type=O}function Se(w){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Be(w){const B=w.target;B.removeEventListener("dispose",Be),xt(B)}function xt(w){ye(w),me.remove(w)}function ye(w){const B=me.get(w).programs;B!==void 0&&(B.forEach(function(W){Y.releaseProgram(W)}),w.isShaderMaterial&&Y.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,W,G,O,ce){B===null&&(B=pt);const _e=O.isMesh&&O.matrixWorld.determinant()<0,Te=It(w,B,W,G,O);be.setMaterial(G,_e);let pe=W.index,Ne=1;if(G.wireframe===!0){if(pe=J.getWireframeAttribute(W),pe===void 0)return;Ne=2}const Ve=W.drawRange,Re=W.attributes.position;let ut=Ve.start*Ne,Tt=(Ve.start+Ve.count)*Ne;ce!==null&&(ut=Math.max(ut,ce.start*Ne),Tt=Math.min(Tt,(ce.start+ce.count)*Ne)),pe!==null?(ut=Math.max(ut,0),Tt=Math.min(Tt,pe.count)):Re!=null&&(ut=Math.max(ut,0),Tt=Math.min(Tt,Re.count));const Bt=Tt-ut;if(Bt<0||Bt===1/0)return;D.setup(O,G,Te,W,pe);let kt,At=Le;if(pe!==null&&(kt=k.get(pe),At=he,At.setIndex(kt)),O.isMesh)G.wireframe===!0?(be.setLineWidth(G.wireframeLinewidth*qe()),At.setMode(U.LINES)):At.setMode(U.TRIANGLES);else if(O.isLine){let We=G.linewidth;We===void 0&&(We=1),be.setLineWidth(We*qe()),O.isLineSegments?At.setMode(U.LINES):O.isLineLoop?At.setMode(U.LINE_LOOP):At.setMode(U.LINE_STRIP)}else O.isPoints?At.setMode(U.POINTS):O.isSprite&&At.setMode(U.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Eo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))At.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const We=O._multiDrawStarts,Ut=O._multiDrawCounts,gt=O._multiDrawCount,Un=pe?k.get(pe).bytesPerElement:1,zr=me.get(G).currentProgram.getUniforms();for(let Nn=0;Nn<gt;Nn++)zr.setValue(U,"_gl_DrawID",Nn),At.render(We[Nn]/Un,Ut[Nn])}else if(O.isInstancedMesh)At.renderInstances(ut,Bt,O.count);else if(W.isInstancedBufferGeometry){const We=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ut=Math.min(W.instanceCount,We);At.renderInstances(ut,Bt,Ut)}else At.render(ut,Bt)};function Ce(w,B,W){w.transparent===!0&&w.side===gi&&w.forceSinglePass===!1?(w.side=Dn,w.needsUpdate=!0,bt(w,B,W),w.side=qi,w.needsUpdate=!0,bt(w,B,W),w.side=gi):bt(w,B,W)}this.compile=function(w,B,W=null){W===null&&(W=w),v=Pe.get(W),v.init(B),R.push(v),W.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(v.pushLight(O),O.castShadow&&v.pushShadow(O))}),w!==W&&w.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(v.pushLight(O),O.castShadow&&v.pushShadow(O))}),v.setupLights();const G=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ce=O.material;if(ce)if(Array.isArray(ce))for(let _e=0;_e<ce.length;_e++){const Te=ce[_e];Ce(Te,W,O),G.add(Te)}else Ce(ce,W,O),G.add(ce)}),v=R.pop(),G},this.compileAsync=function(w,B,W=null){const G=this.compile(w,B,W);return new Promise(O=>{function ce(){if(G.forEach(function(_e){me.get(_e).currentProgram.isReady()&&G.delete(_e)}),G.size===0){O(w);return}setTimeout(ce,10)}V.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ze=null;function ge(w){Ze&&Ze(w)}function Ye(){Ge.stop()}function Ue(){Ge.start()}const Ge=new Sp;Ge.setAnimationLoop(ge),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(w){Ze=w,oe.setAnimationLoop(w),w===null?Ge.stop():Ge.start()},oe.addEventListener("sessionstart",Ye),oe.addEventListener("sessionend",Ue),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(B),B=oe.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,B,x),v=Pe.get(w,R.length),v.init(B),R.push(v),Ee.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(Ee,vi,B.reversedDepth),ae=this.localClippingEnabled,j=de.init(this.clippingPlanes,ae),T=le.get(w,y.length),T.init(),y.push(T),oe.enabled===!0&&oe.isPresenting===!0){const ce=b.xr.getDepthSensingMesh();ce!==null&&Ot(ce,B,-1/0,b.sortObjects)}Ot(w,B,0,b.sortObjects),T.finish(),b.sortObjects===!0&&T.sort(fe,Ie),ve=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,ve&&re.addToRenderList(T,w),this.info.render.frame++,j===!0&&de.beginShadows();const W=v.state.shadowsArray;ne.render(W,w,B),j===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=T.opaque,O=T.transmissive;if(v.setupLights(),B.isArrayCamera){const ce=B.cameras;if(O.length>0)for(let _e=0,Te=ce.length;_e<Te;_e++){const pe=ce[_e];Dt(G,O,w,pe)}ve&&re.render(w);for(let _e=0,Te=ce.length;_e<Te;_e++){const pe=ce[_e];rt(T,w,pe,pe.viewport)}}else O.length>0&&Dt(G,O,w,B),ve&&re.render(w),rt(T,w,B);x!==null&&M===0&&(ke.updateMultisampleRenderTarget(x),ke.updateRenderTargetMipmap(x)),w.isScene===!0&&w.onAfterRender(b,w,B),D.resetDefaultState(),A=-1,L=null,R.pop(),R.length>0?(v=R[R.length-1],j===!0&&de.setGlobalState(b.clippingPlanes,v.state.camera)):v=null,y.pop(),y.length>0?T=y[y.length-1]:T=null};function Ot(w,B,W,G){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)v.pushLight(w),w.castShadow&&v.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){G&&ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ee);const _e=$.update(w),Te=w.material;Te.visible&&T.push(w,_e,Te,W,ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){const _e=$.update(w),Te=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ze.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),ze.copy(_e.boundingSphere.center)),ze.applyMatrix4(w.matrixWorld).applyMatrix4(Ee)),Array.isArray(Te)){const pe=_e.groups;for(let Ne=0,Ve=pe.length;Ne<Ve;Ne++){const Re=pe[Ne],ut=Te[Re.materialIndex];ut&&ut.visible&&T.push(w,_e,ut,W,ze.z,Re)}}else Te.visible&&T.push(w,_e,Te,W,ze.z,null)}}const ce=w.children;for(let _e=0,Te=ce.length;_e<Te;_e++)Ot(ce[_e],B,W,G)}function rt(w,B,W,G){const{opaque:O,transmissive:ce,transparent:_e}=w;v.setupLightsView(W),j===!0&&de.setGlobalState(b.clippingPlanes,W),G&&be.viewport(F.copy(G)),O.length>0&&zt(O,B,W),ce.length>0&&zt(ce,B,W),_e.length>0&&zt(_e,B,W),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Dt(w,B,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[G.id]===void 0&&(v.state.transmissionRenderTarget[G.id]=new Ir(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?_i:Ti,minFilter:xi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const ce=v.state.transmissionRenderTarget[G.id],_e=G.viewport||F;ce.setSize(_e.z*b.transmissionResolutionScale,_e.w*b.transmissionResolutionScale);const Te=b.getRenderTarget(),pe=b.getActiveCubeFace(),Ne=b.getActiveMipmapLevel();b.setRenderTarget(ce),b.getClearColor(H),Z=b.getClearAlpha(),Z<1&&b.setClearColor(16777215,.5),b.clear(),ve&&re.render(W);const Ve=b.toneMapping;b.toneMapping=Vi;const Re=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),v.setupLightsView(G),j===!0&&de.setGlobalState(b.clippingPlanes,G),zt(w,W,G),ke.updateMultisampleRenderTarget(ce),ke.updateRenderTargetMipmap(ce),V.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Tt=0,Bt=B.length;Tt<Bt;Tt++){const kt=B[Tt],{object:At,geometry:We,material:Ut,group:gt}=kt;if(Ut.side===gi&&At.layers.test(G.layers)){const Un=Ut.side;Ut.side=Dn,Ut.needsUpdate=!0,Lt(At,W,G,We,Ut,gt),Ut.side=Un,Ut.needsUpdate=!0,ut=!0}}ut===!0&&(ke.updateMultisampleRenderTarget(ce),ke.updateRenderTargetMipmap(ce))}b.setRenderTarget(Te,pe,Ne),b.setClearColor(H,Z),Re!==void 0&&(G.viewport=Re),b.toneMapping=Ve}function zt(w,B,W){const G=B.isScene===!0?B.overrideMaterial:null;for(let O=0,ce=w.length;O<ce;O++){const _e=w[O],{object:Te,geometry:pe,group:Ne}=_e;let Ve=_e.material;Ve.allowOverride===!0&&G!==null&&(Ve=G),Te.layers.test(W.layers)&&Lt(Te,B,W,pe,Ve,Ne)}}function Lt(w,B,W,G,O,ce){w.onBeforeRender(b,B,W,G,O,ce),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(b,B,W,G,w,ce),O.transparent===!0&&O.side===gi&&O.forceSinglePass===!1?(O.side=Dn,O.needsUpdate=!0,b.renderBufferDirect(W,B,G,O,w,ce),O.side=qi,O.needsUpdate=!0,b.renderBufferDirect(W,B,G,O,w,ce),O.side=gi):b.renderBufferDirect(W,B,G,O,w,ce),w.onAfterRender(b,B,W,G,O,ce)}function bt(w,B,W){B.isScene!==!0&&(B=pt);const G=me.get(w),O=v.state.lights,ce=v.state.shadowsArray,_e=O.state.version,Te=Y.getParameters(w,O.state,ce,B,W),pe=Y.getProgramCacheKey(Te);let Ne=G.programs;G.environment=w.isMeshStandardMaterial?B.environment:null,G.fog=B.fog,G.envMap=(w.isMeshStandardMaterial?S:P).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",Be),Ne=new Map,G.programs=Ne);let Ve=Ne.get(pe);if(Ve!==void 0){if(G.currentProgram===Ve&&G.lightsStateVersion===_e)return Rn(w,Te),Ve}else Te.uniforms=Y.getUniforms(w),w.onBeforeCompile(Te,b),Ve=Y.acquireProgram(Te,pe),Ne.set(pe,Ve),G.uniforms=Te.uniforms;const Re=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=de.uniform),Rn(w,Te),G.needsLights=Hn(w),G.lightsStateVersion=_e,G.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.directionalShadowMap.value=O.state.directionalShadowMap,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotShadowMap.value=O.state.spotShadowMap,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMap.value=O.state.pointShadowMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Ve,G.uniformsList=null,Ve}function vt(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=La.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Rn(w,B){const W=me.get(w);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function It(w,B,W,G,O){B.isScene!==!0&&(B=pt),ke.resetTextureUnits();const ce=B.fog,_e=G.isMeshStandardMaterial?B.environment:null,Te=x===null?b.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:hn,pe=(G.isMeshStandardMaterial?S:P).get(G.envMap||_e),Ne=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ve=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!W.morphAttributes.position,ut=!!W.morphAttributes.normal,Tt=!!W.morphAttributes.color;let Bt=Vi;G.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(Bt=b.toneMapping);const kt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,At=kt!==void 0?kt.length:0,We=me.get(G),Ut=v.state.lights;if(j===!0&&(ae===!0||w!==L)){const mn=w===L&&G.id===A;de.setState(G,w,mn)}let gt=!1;G.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Ut.state.version||We.outputColorSpace!==Te||O.isBatchedMesh&&We.batching===!1||!O.isBatchedMesh&&We.batching===!0||O.isBatchedMesh&&We.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&We.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&We.instancing===!1||!O.isInstancedMesh&&We.instancing===!0||O.isSkinnedMesh&&We.skinning===!1||!O.isSkinnedMesh&&We.skinning===!0||O.isInstancedMesh&&We.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&We.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&We.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&We.instancingMorph===!1&&O.morphTexture!==null||We.envMap!==pe||G.fog===!0&&We.fog!==ce||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==de.numPlanes||We.numIntersection!==de.numIntersection)||We.vertexAlphas!==Ne||We.vertexTangents!==Ve||We.morphTargets!==Re||We.morphNormals!==ut||We.morphColors!==Tt||We.toneMapping!==Bt||We.morphTargetsCount!==At)&&(gt=!0):(gt=!0,We.__version=G.version);let Un=We.currentProgram;gt===!0&&(Un=bt(G,B,O));let zr=!1,Nn=!1,Is=!1;const Nt=Un.getUniforms(),Cn=We.uniforms;if(be.useProgram(Un.program)&&(zr=!0,Nn=!0,Is=!0),G.id!==A&&(A=G.id,Nn=!0),zr||L!==w){be.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Nt.setValue(U,"projectionMatrix",w.projectionMatrix),Nt.setValue(U,"viewMatrix",w.matrixWorldInverse);const Pn=Nt.map.cameraPosition;Pn!==void 0&&Pn.setValue(U,we.setFromMatrixPosition(w.matrixWorld)),et.logarithmicDepthBuffer&&Nt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Nt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),L!==w&&(L=w,Nn=!0,Is=!0)}if(O.isSkinnedMesh){Nt.setOptional(U,O,"bindMatrix"),Nt.setOptional(U,O,"bindMatrixInverse");const mn=O.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Nt.setValue(U,"boneTexture",mn.boneTexture,ke))}O.isBatchedMesh&&(Nt.setOptional(U,O,"batchingTexture"),Nt.setValue(U,"batchingTexture",O._matricesTexture,ke),Nt.setOptional(U,O,"batchingIdTexture"),Nt.setValue(U,"batchingIdTexture",O._indirectTexture,ke),Nt.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&Nt.setValue(U,"batchingColorTexture",O._colorsTexture,ke));const Gn=W.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&De.update(O,W,Un),(Nn||We.receiveShadow!==O.receiveShadow)&&(We.receiveShadow=O.receiveShadow,Nt.setValue(U,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Cn.envMap.value=pe,Cn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&B.environment!==null&&(Cn.envMapIntensity.value=B.environmentIntensity),Cn.dfgLUT!==void 0&&(Cn.dfgLUT.value=Pb()),Nn&&(Nt.setValue(U,"toneMappingExposure",b.toneMappingExposure),We.needsLights&&pn(Cn,Is),ce&&G.fog===!0&&Me.refreshFogUniforms(Cn,ce),Me.refreshMaterialUniforms(Cn,G,I,ee,v.state.transmissionRenderTarget[w.id]),La.upload(U,vt(We),Cn,ke)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(La.upload(U,vt(We),Cn,ke),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Nt.setValue(U,"center",O.center),Nt.setValue(U,"modelViewMatrix",O.modelViewMatrix),Nt.setValue(U,"normalMatrix",O.normalMatrix),Nt.setValue(U,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const mn=G.uniformsGroups;for(let Pn=0,fc=mn.length;Pn<fc;Pn++){const hr=mn[Pn];ue.update(hr,Un),ue.bind(hr,Un)}}return Un}function pn(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Hn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(w,B,W){const G=me.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),me.get(w.texture).__webglTexture=B,me.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){const W=me.get(w);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0};const Xt=U.createFramebuffer();this.setRenderTarget=function(w,B=0,W=0){x=w,C=B,M=W;let G=!0,O=null,ce=!1,_e=!1;if(w){const pe=me.get(w);if(pe.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(U.FRAMEBUFFER,null),G=!1;else if(pe.__webglFramebuffer===void 0)ke.setupRenderTarget(w);else if(pe.__hasExternalTextures)ke.rebindTextures(w,me.get(w.texture).__webglTexture,me.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Re=w.depthTexture;if(pe.__boundDepthTexture!==Re){if(Re!==null&&me.has(Re)&&(w.width!==Re.image.width||w.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(w)}}const Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(_e=!0);const Ve=me.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ve[B])?O=Ve[B][W]:O=Ve[B],ce=!0):w.samples>0&&ke.useMultisampledRTT(w)===!1?O=me.get(w).__webglMultisampledFramebuffer:Array.isArray(Ve)?O=Ve[W]:O=Ve,F.copy(w.viewport),N.copy(w.scissor),X=w.scissorTest}else F.copy(He).multiplyScalar(I).floor(),N.copy(je).multiplyScalar(I).floor(),X=Qe;if(W!==0&&(O=Xt),be.bindFramebuffer(U.FRAMEBUFFER,O)&&G&&be.drawBuffers(w,O),be.viewport(F),be.scissor(N),be.setScissorTest(X),ce){const pe=me.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,pe.__webglTexture,W)}else if(_e){const pe=B;for(let Ne=0;Ne<w.textures.length;Ne++){const Ve=me.get(w.textures[Ne]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ne,Ve.__webglTexture,W,pe)}}else if(w!==null&&W!==0){const pe=me.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pe.__webglTexture,W)}A=-1},this.readRenderTargetPixels=function(w,B,W,G,O,ce,_e,Te=0){if(!(w&&w.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(pe=pe[_e]),pe){be.bindFramebuffer(U.FRAMEBUFFER,pe);try{const Ne=w.textures[Te],Ve=Ne.format,Re=Ne.type;if(!et.textureFormatReadable(Ve)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Re)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-G&&W>=0&&W<=w.height-O&&(w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Te),U.readPixels(B,W,G,O,Oe.convert(Ve),Oe.convert(Re),ce))}finally{const Ne=x!==null?me.get(x).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(w,B,W,G,O,ce,_e,Te=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(pe=pe[_e]),pe)if(B>=0&&B<=w.width-G&&W>=0&&W<=w.height-O){be.bindFramebuffer(U.FRAMEBUFFER,pe);const Ne=w.textures[Te],Ve=Ne.format,Re=Ne.type;if(!et.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ut),U.bufferData(U.PIXEL_PACK_BUFFER,ce.byteLength,U.STREAM_READ),w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Te),U.readPixels(B,W,G,O,Oe.convert(Ve),Oe.convert(Re),0);const Tt=x!==null?me.get(x).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,Tt);const Bt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await c0(U,Bt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ut),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ce),U.deleteBuffer(ut),U.deleteSync(Bt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,W=0){const G=Math.pow(2,-W),O=Math.floor(w.image.width*G),ce=Math.floor(w.image.height*G),_e=B!==null?B.x:0,Te=B!==null?B.y:0;ke.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,_e,Te,O,ce),be.unbindTexture()};const qt=U.createFramebuffer(),Zt=U.createFramebuffer();this.copyTextureToTexture=function(w,B,W=null,G=null,O=0,ce=null){ce===null&&(O!==0?(Eo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=O,O=0):ce=0);let _e,Te,pe,Ne,Ve,Re,ut,Tt,Bt;const kt=w.isCompressedTexture?w.mipmaps[ce]:w.image;if(W!==null)_e=W.max.x-W.min.x,Te=W.max.y-W.min.y,pe=W.isBox3?W.max.z-W.min.z:1,Ne=W.min.x,Ve=W.min.y,Re=W.isBox3?W.min.z:0;else{const Gn=Math.pow(2,-O);_e=Math.floor(kt.width*Gn),Te=Math.floor(kt.height*Gn),w.isDataArrayTexture?pe=kt.depth:w.isData3DTexture?pe=Math.floor(kt.depth*Gn):pe=1,Ne=0,Ve=0,Re=0}G!==null?(ut=G.x,Tt=G.y,Bt=G.z):(ut=0,Tt=0,Bt=0);const At=Oe.convert(B.format),We=Oe.convert(B.type);let Ut;B.isData3DTexture?(ke.setTexture3D(B,0),Ut=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ke.setTexture2DArray(B,0),Ut=U.TEXTURE_2D_ARRAY):(ke.setTexture2D(B,0),Ut=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const gt=U.getParameter(U.UNPACK_ROW_LENGTH),Un=U.getParameter(U.UNPACK_IMAGE_HEIGHT),zr=U.getParameter(U.UNPACK_SKIP_PIXELS),Nn=U.getParameter(U.UNPACK_SKIP_ROWS),Is=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,kt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,kt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ne),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ve),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Re);const Nt=w.isDataArrayTexture||w.isData3DTexture,Cn=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){const Gn=me.get(w),mn=me.get(B),Pn=me.get(Gn.__renderTarget),fc=me.get(mn.__renderTarget);be.bindFramebuffer(U.READ_FRAMEBUFFER,Pn.__webglFramebuffer),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,fc.__webglFramebuffer);for(let hr=0;hr<pe;hr++)Nt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,me.get(w).__webglTexture,O,Re+hr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,me.get(B).__webglTexture,ce,Bt+hr)),U.blitFramebuffer(Ne,Ve,_e,Te,ut,Tt,_e,Te,U.DEPTH_BUFFER_BIT,U.NEAREST);be.bindFramebuffer(U.READ_FRAMEBUFFER,null),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||me.has(w)){const Gn=me.get(w),mn=me.get(B);be.bindFramebuffer(U.READ_FRAMEBUFFER,qt),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,Zt);for(let Pn=0;Pn<pe;Pn++)Nt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Gn.__webglTexture,O,Re+Pn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Gn.__webglTexture,O),Cn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,mn.__webglTexture,ce,Bt+Pn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,mn.__webglTexture,ce),O!==0?U.blitFramebuffer(Ne,Ve,_e,Te,ut,Tt,_e,Te,U.COLOR_BUFFER_BIT,U.NEAREST):Cn?U.copyTexSubImage3D(Ut,ce,ut,Tt,Bt+Pn,Ne,Ve,_e,Te):U.copyTexSubImage2D(Ut,ce,ut,Tt,Ne,Ve,_e,Te);be.bindFramebuffer(U.READ_FRAMEBUFFER,null),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Cn?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Ut,ce,ut,Tt,Bt,_e,Te,pe,At,We,kt.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Ut,ce,ut,Tt,Bt,_e,Te,pe,At,kt.data):U.texSubImage3D(Ut,ce,ut,Tt,Bt,_e,Te,pe,At,We,kt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ce,ut,Tt,_e,Te,At,We,kt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ce,ut,Tt,kt.width,kt.height,At,kt.data):U.texSubImage2D(U.TEXTURE_2D,ce,ut,Tt,_e,Te,At,We,kt);U.pixelStorei(U.UNPACK_ROW_LENGTH,gt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Un),U.pixelStorei(U.UNPACK_SKIP_PIXELS,zr),U.pixelStorei(U.UNPACK_SKIP_ROWS,Nn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Is),ce===0&&B.generateMipmaps&&U.generateMipmap(Ut),be.unbindTexture()},this.initRenderTarget=function(w){me.get(w).__webglFramebuffer===void 0&&ke.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ke.setTextureCube(w,0):w.isData3DTexture?ke.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ke.setTexture2DArray(w,0):ke.setTexture2D(w,0),be.unbindTexture()},this.resetState=function(){C=0,M=0,x=null,be.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}function Ud(r,e){if(e===$m)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===xu||e===rp){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===xu)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Or extends Fr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Fb(t)}),this.register(function(t){return new Ob(t)}),this.register(function(t){return new qb(t)}),this.register(function(t){return new Yb(t)}),this.register(function(t){return new Kb(t)}),this.register(function(t){return new kb(t)}),this.register(function(t){return new zb(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new Hb(t)}),this.register(function(t){return new Nb(t)}),this.register(function(t){return new Gb(t)}),this.register(function(t){return new Bb(t)}),this.register(function(t){return new Xb(t)}),this.register(function(t){return new Wb(t)}),this.register(function(t){return new Db(t)}),this.register(function(t){return new jb(t)}),this.register(function(t){return new $b(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=so.extractUrlBase(e);o=so.resolveURL(l,this.path)}else o=so.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new rf(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Rp){try{o[lt.KHR_BINARY_GLTF]=new Zb(e)}catch(f){i&&i(f);return}s=JSON.parse(o[lt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new uM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(f){case lt.KHR_MATERIALS_UNLIT:o[f]=new Ub;break;case lt.KHR_DRACO_MESH_COMPRESSION:o[f]=new Jb(s,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:o[f]=new Qb;break;case lt.KHR_MESH_QUANTIZATION:o[f]=new eM;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Ib(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Db{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new $e(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],hn);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ig(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Pg(u),l.distance=f;break;case"spot":l=new Rg(u),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),di(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Ub{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return dn}extendParams(e,t,n){const i=[];e.color=new $e(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],hn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Pt))}return Promise.all(i)}}class Nb{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Fb{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ft(a,a)}return Promise.all(s)}}class Ob{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Bb{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class kb{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],hn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Pt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class zb{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Vb{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(a[0],a[1],a[2],hn),Promise.all(s)}}class Hb{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Gb{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(a[0],a[1],a[2],hn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Pt)),Promise.all(s)}}class Wb{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Xb{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ai}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class qb{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Yb{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class Kb{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class jb{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,f=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,d,i.mode,i.filter).then(function(h){return h.buffer}):o.ready.then(function(){const h=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(h),u,f,d,i.mode,i.filter),h})})}else return null}}class $b{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==qn.TRIANGLES&&l.mode!==qn.TRIANGLE_STRIP&&l.mode!==qn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),f=u.isGroup?u.children:[u],d=l[0].count,h=[];for(const g of f){const _=new nt,m=new z,p=new dr,T=new z(1,1,1),v=new rg(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&T.fromBufferAttribute(c.SCALE,y),v.setMatrixAt(y,_.compose(m,p,T));for(const y in c)if(y==="_COLOR_0"){const R=c[y];v.instanceColor=new vu(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);Ft.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),h.push(v)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const Rp="glTF",Hs=12,Nd={JSON:1313821514,BIN:5130562};class Zb{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Hs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Hs,s=new DataView(e,Hs);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Nd.JSON){const l=new Uint8Array(e,Hs+o,a);this.content=n.decode(l)}else if(c===Nd.BIN){const l=Hs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Jb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const f=Su[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=Su[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],h=ds[d.componentType];l[f]=h.name,c[f]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,d){i.decodeDracoFile(u,function(h){for(const g in h.attributes){const _=h.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}f(h)},a,l,hn,d)})})}}class Qb{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class eM{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}}class Cp extends Io{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,f=(n-t)/u,d=f*f,h=d*f,g=e*l,_=g-l,m=-2*h+3*d,p=h-d,T=1-m,v=p-d+f;for(let y=0;y!==a;y++){const R=o[_+y+a],b=o[_+y+c]*u,E=o[g+y+a],C=o[g+y]*u;s[y]=T*R+v*b+m*E+p*C}return s}}const tM=new dr;class nM extends Cp{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return tM.fromArray(s).normalize().toArray(s),s}}const qn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ds={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fd={9728:wn,9729:Wt,9984:Zh,9985:wa,9986:js,9987:xi},Od={33071:jn,33648:za,10497:ys},qc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Su={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},nr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iM={CUBICSPLINE:void 0,LINEAR:So,STEP:Mo},Yc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rM(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new nf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qi})),r.DefaultMaterial}function yr(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function di(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function sM(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const f=e[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];if(n){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;o.push(d)}if(i){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],f=l[1],d=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=f),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function oM(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function aM(r){let e;const t=r.extensions&&r.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Kc(t.attributes):e=r.indices+":"+Kc(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Kc(r.targets[n]);return e}function Kc(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Tu(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cM(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const lM=new nt;class uM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ib,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Ki(this.options.manager):this.textureLoader=new Ug(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return yr(s,a,i),di(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())s(u,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(so.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=qc[i.type],a=ds[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new An(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=qc[i.type],l=ds[i.componentType],u=l.BYTES_PER_ELEMENT,f=u*c,d=i.byteOffset||0,h=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(h&&h!==f){const p=Math.floor(d/h),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(T);v||(_=new l(a,p*h,i.count*h/u),v=new Q0(_,h/u),t.cache.add(T,v)),m=new Ju(v,c,d%h/u,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new An(_,c,g);if(i.sparse!==void 0){const p=qc.SCALAR,T=ds[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,R=new T(o[1],v,i.sparse.count*p),b=new l(o[2],y,i.sparse.count*c);a!==null&&(m=new An(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,C=R.length;E<C;E++){const M=R[E];if(m.setX(M,b[E*c]),c>=2&&m.setY(M,b[E*c+1]),c>=3&&m.setZ(M,b[E*c+2]),c>=4&&m.setW(M,b[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=Fd[d.magFilter]||Wt,u.minFilter=Fd[d.minFilter]||xi,u.wrapS=Od[d.wrapS]||ys,u.wrapT=Od[d.wrapT]||ys,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==wn&&u.minFilter!==Wt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(f){l=!0;const d=new Blob([f],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(f){return new Promise(function(d,h){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new tn(_);m.needsUpdate=!0,d(m)}),t.load(so.resolveURL(f,s.path),g,void 0,h)})}).then(function(f){return l===!0&&a.revokeObjectURL(c),di(f,o),f.userData.mimeType=o.mimeType||cM(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[lt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new _p,Mi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new xp,Mi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return nf}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[lt.KHR_MATERIALS_UNLIT]){const f=i[lt.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),l.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new $e(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],hn),a.opacity=d[3]}f.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",f.baseColorTexture,Pt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=gi);const u=s.alphaMode||Yc.OPAQUE;if(u===Yc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Yc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==dn&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ft(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==dn&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==dn){const f=s.emissiveFactor;a.emissive=new $e().setRGB(f[0],f[1],f[2],hn)}return s.emissiveTexture!==void 0&&o!==dn&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Pt)),Promise.all(l).then(function(){const f=new o(a);return s.name&&(f.name=s.name),di(f,s),t.associations.set(f,{materials:e}),s.extensions&&yr(i,f,s),f})}createUniqueName(e){const t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Bd(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=aM(l),f=i[u];if(f)o.push(f.promise);else{let d;l.extensions&&l.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Bd(new ci,l,t),i[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?rM(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],f=[];for(let h=0,g=u.length;h<g;h++){const _=u[h],m=o[h];let p;const T=l[h];if(m.mode===qn.TRIANGLES||m.mode===qn.TRIANGLE_STRIP||m.mode===qn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new tg(_,T):new Jn(_,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===qn.TRIANGLE_STRIP?p.geometry=Ud(p.geometry,rp):m.mode===qn.TRIANGLE_FAN&&(p.geometry=Ud(p.geometry,xu));else if(m.mode===qn.LINES)p=new cg(_,T);else if(m.mode===qn.LINE_STRIP)p=new tf(_,T);else if(m.mode===qn.LINE_LOOP)p=new lg(_,T);else if(m.mode===qn.POINTS)p=new ug(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&oM(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),di(p,s),m.extensions&&yr(i,p,m),t.assignFinalMaterial(p),f.push(p)}for(let h=0,g=f.length;h<g;h++)t.associations.set(f[h],{meshes:e,primitives:h});if(f.length===1)return s.extensions&&yr(i,f[0],s),f[0];const d=new rn;s.extensions&&yr(i,d,s),t.associations.set(d,{meshes:e});for(let h=0,g=f.length;h<g;h++)d.add(f[h]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Tn(Po.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new of(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),di(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const f=o[l];if(f){a.push(f);const d=new nt;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Qu(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let f=0,d=i.channels.length;f<d;f++){const h=i.channels[f],g=i.samplers[h.sampler],_=h.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,T=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",T)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(f){const d=f[0],h=f[1],g=f[2],_=f[3],m=f[4],p=[];for(let v=0,y=d.length;v<y;v++){const R=d[v],b=h[v],E=g[v],C=_[v],M=m[v];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const x=n._createAnimationTracks(R,b,E,C,M);if(x)for(let A=0;A<x.length;A++)p.push(x[A])}const T=new vg(s,void 0,p);return di(T,i),T})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const u=l[0],f=l[1],d=l[2];d!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(d,lM)});for(let h=0,g=f.length;h<g;h++)u.add(f[h]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new gp:l.length>1?u=new rn:l.length===1?u=l[0]:u=new Ft,u!==l[0])for(let f=0,d=l.length;f<d;f++)u.add(l[f]);if(s.name&&(u.userData.name=s.name,u.name=o),di(u,s),s.extensions&&yr(n,u,s),s.matrix!==void 0){const f=new nt;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const f=i.associations.get(u);i.associations.set(u,{...f})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new rn;n.name&&(s.name=i.createUniqueName(n.name)),di(s,n),n.extensions&&yr(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,f=c.length;u<f;u++)s.add(c[u]);const l=u=>{const f=new Map;for(const[d,h]of i.associations)(d instanceof Mi||d instanceof tn)&&f.set(d,h);return u.traverse(d=>{const h=i.associations.get(d);h!=null&&f.set(d,h)}),f};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];nr[s.path]===nr.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(nr[s.path]){case nr.weights:l=Ss;break;case nr.rotation:l=Ts;break;case nr.translation:case nr.scale:l=Es;break;default:switch(n.itemSize){case 1:l=Ss;break;case 2:case 3:default:l=Es;break}break}const u=i.interpolation!==void 0?iM[i.interpolation]:So,f=this._getArrayFromAccessor(n);for(let d=0,h=c.length;d<h;d++){const g=new l(c[d]+"."+nr[s.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Tu(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ts?nM:Cp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function fM(r,e,t){const n=e.attributes,i=new ji;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new z(c[0],c[1],c[2]),new z(l[0],l[1],l[2])),a.normalized){const u=Tu(ds[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new z,c=new z;for(let l=0,u=s.length;l<u;l++){const f=s[l];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],h=d.min,g=d.max;if(h!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),d.normalized){const _=Tu(ds[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new wi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Bd(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=Su[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return dt.workingColorSpace!==hn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),di(r,e),fM(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?sM(r,e.targets,t):r})}function dM(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function hM(r,e,t){return e&&dM(r.prototype,e),r}var sn,Ia,Vn,ar,cr,hs,Pp,Mr,oo,Lp,ki,ii,Ip,Dp=function(){return sn||typeof window<"u"&&(sn=window.gsap)&&sn.registerPlugin&&sn},Up=1,ls=[],ot=[],Si=[],ao=Date.now,Eu=function(e,t){return t},pM=function(){var e=oo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ot),i.push.apply(i,Si),ot=n,Si=i,Eu=function(o,a){return t[o](a)}},lr=function(e,t){return~Si.indexOf(e)&&Si[Si.indexOf(e)+1][t]},co=function(e){return!!~Lp.indexOf(e)},_n=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},xn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},oa="scrollLeft",aa="scrollTop",wu=function(){return ki&&ki.isPressed||ot.cache++},qa=function(e,t){var n=function i(s){if(s||s===0){Up&&(Vn.history.scrollRestoration="manual");var o=ki&&ki.isPressed;s=i.v=Math.round(s)||(ki&&ki.iOS?1:0),e(s),i.cacheID=ot.cache,o&&Eu("ss",s)}else(t||ot.cache!==i.cacheID||Eu("ref"))&&(i.cacheID=ot.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},En={s:oa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:qa(function(r){return arguments.length?Vn.scrollTo(r,Kt.sc()):Vn.pageXOffset||ar[oa]||cr[oa]||hs[oa]||0})},Kt={s:aa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:En,sc:qa(function(r){return arguments.length?Vn.scrollTo(En.sc(),r):Vn.pageYOffset||ar[aa]||cr[aa]||hs[aa]||0})},Ln=function(e,t){return(t&&t._ctx&&t._ctx.selector||sn.utils.toArray)(e)[0]||(typeof e=="string"&&sn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},mM=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},fr=function(e,t){var n=t.s,i=t.sc;co(e)&&(e=ar.scrollingElement||cr);var s=ot.indexOf(e),o=i===Kt.sc?1:2;!~s&&(s=ot.push(e)-1),ot[s+o]||_n(e,"scroll",wu);var a=ot[s+o],c=a||(ot[s+o]=qa(lr(e,n),!0)||(co(e)?i:qa(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,a||(c.smooth=sn.getProperty(e,"scrollBehavior")==="smooth"),c},Au=function(e,t,n){var i=e,s=e,o=ao(),a=o,c=t||50,l=Math.max(500,c*3),u=function(g,_){var m=ao();_||m-o>c?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},d=function(g){var _=a,m=s,p=ao();return(g||g===0)&&g!==i&&u(g),o===a||p-a>l?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:f,getVelocity:d}},Gs=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},kd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Np=function(){oo=sn.core.globals().ScrollTrigger,oo&&oo.core&&pM()},Fp=function(e){return sn=e||Dp(),!Ia&&sn&&typeof document<"u"&&document.body&&(Vn=window,ar=document,cr=ar.documentElement,hs=ar.body,Lp=[Vn,ar,cr,hs],sn.utils.clamp,Ip=sn.core.context||function(){},Mr="onpointerenter"in hs?"pointer":"mouse",Pp=Vt.isTouch=Vn.matchMedia&&Vn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Vn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ii=Vt.eventTypes=("ontouchstart"in cr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in cr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Up=0},500),Np(),Ia=1),Ia};En.op=Kt;ot.cache=0;var Vt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Ia||Fp(sn)||console.warn("Please gsap.registerPlugin(Observer)"),oo||Np();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,c=n.lineHeight,l=n.debounce,u=n.preventDefault,f=n.onStop,d=n.onStopDelay,h=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,T=n.onDrag,v=n.onPress,y=n.onRelease,R=n.onRight,b=n.onLeft,E=n.onUp,C=n.onDown,M=n.onChangeX,x=n.onChangeY,A=n.onChange,L=n.onToggleX,F=n.onToggleY,N=n.onHover,X=n.onHoverEnd,H=n.onMove,Z=n.ignoreCheck,q=n.isNormalizer,ee=n.onGestureStart,I=n.onGestureEnd,fe=n.onWheel,Ie=n.onEnable,He=n.onDisable,je=n.onClick,Qe=n.scrollSpeed,K=n.capture,j=n.allowClicks,ae=n.lockAxis,Ee=n.onLockAxis;this.target=a=Ln(a)||cr,this.vars=n,h&&(h=sn.utils.toArray(h)),i=i||1e-9,s=s||0,g=g||1,Qe=Qe||1,o=o||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(Vn.getComputedStyle(hs).lineHeight)||22);var we,ze,pt,ve,qe,U,Xe,V=this,et=0,be=0,mt=n.passive||!u&&n.passive!==!1,me=fr(a,En),ke=fr(a,Kt),P=me(),S=ke(),k=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ii[0]==="pointerdown",J=co(a),$=a.ownerDocument||ar,Y=[0,0,0],Me=[0,0,0],le=0,Pe=function(){return le=ao()},de=function(Ce,Ze){return(V.event=Ce)&&h&&mM(Ce.target,h)||Ze&&k&&Ce.pointerType!=="touch"||Z&&Z(Ce,Ze)},ne=function(){V._vx.reset(),V._vy.reset(),ze.pause(),f&&f(V)},re=function(){var Ce=V.deltaX=kd(Y),Ze=V.deltaY=kd(Me),ge=Math.abs(Ce)>=i,Ye=Math.abs(Ze)>=i;A&&(ge||Ye)&&A(V,Ce,Ze,Y,Me),ge&&(R&&V.deltaX>0&&R(V),b&&V.deltaX<0&&b(V),M&&M(V),L&&V.deltaX<0!=et<0&&L(V),et=V.deltaX,Y[0]=Y[1]=Y[2]=0),Ye&&(C&&V.deltaY>0&&C(V),E&&V.deltaY<0&&E(V),x&&x(V),F&&V.deltaY<0!=be<0&&F(V),be=V.deltaY,Me[0]=Me[1]=Me[2]=0),(ve||pt)&&(H&&H(V),pt&&(m&&pt===1&&m(V),T&&T(V),pt=0),ve=!1),U&&!(U=!1)&&Ee&&Ee(V),qe&&(fe(V),qe=!1),we=0},De=function(Ce,Ze,ge){Y[ge]+=Ce,Me[ge]+=Ze,V._vx.update(Ce),V._vy.update(Ze),l?we||(we=requestAnimationFrame(re)):re()},Le=function(Ce,Ze){ae&&!Xe&&(V.axis=Xe=Math.abs(Ce)>Math.abs(Ze)?"x":"y",U=!0),Xe!=="y"&&(Y[2]+=Ce,V._vx.update(Ce,!0)),Xe!=="x"&&(Me[2]+=Ze,V._vy.update(Ze,!0)),l?we||(we=requestAnimationFrame(re)):re()},he=function(Ce){if(!de(Ce,1)){Ce=Gs(Ce,u);var Ze=Ce.clientX,ge=Ce.clientY,Ye=Ze-V.x,Ue=ge-V.y,Ge=V.isDragging;V.x=Ze,V.y=ge,(Ge||(Ye||Ue)&&(Math.abs(V.startX-Ze)>=s||Math.abs(V.startY-ge)>=s))&&(pt=Ge?2:1,Ge||(V.isDragging=!0),Le(Ye,Ue))}},Oe=V.onPress=function(ye){de(ye,1)||ye&&ye.button||(V.axis=Xe=null,ze.pause(),V.isPressed=!0,ye=Gs(ye),et=be=0,V.startX=V.x=ye.clientX,V.startY=V.y=ye.clientY,V._vx.reset(),V._vy.reset(),_n(q?a:$,ii[1],he,mt,!0),V.deltaX=V.deltaY=0,v&&v(V))},D=V.onRelease=function(ye){if(!de(ye,1)){xn(q?a:$,ii[1],he,!0);var Ce=!isNaN(V.y-V.startY),Ze=V.isDragging,ge=Ze&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Ye=Gs(ye);!ge&&Ce&&(V._vx.reset(),V._vy.reset(),u&&j&&sn.delayedCall(.08,function(){if(ao()-le>300&&!ye.defaultPrevented){if(ye.target.click)ye.target.click();else if($.createEvent){var Ue=$.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,Vn,1,Ye.screenX,Ye.screenY,Ye.clientX,Ye.clientY,!1,!1,!1,!1,0,null),ye.target.dispatchEvent(Ue)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,f&&Ze&&!q&&ze.restart(!0),pt&&re(),p&&Ze&&p(V),y&&y(V,ge)}},ue=function(Ce){return Ce.touches&&Ce.touches.length>1&&(V.isGesturing=!0)&&ee(Ce,V.isDragging)},se=function(){return(V.isGesturing=!1)||I(V)},oe=function(Ce){if(!de(Ce)){var Ze=me(),ge=ke();De((Ze-P)*Qe,(ge-S)*Qe,1),P=Ze,S=ge,f&&ze.restart(!0)}},te=function(Ce){if(!de(Ce)){Ce=Gs(Ce,u),fe&&(qe=!0);var Ze=(Ce.deltaMode===1?c:Ce.deltaMode===2?Vn.innerHeight:1)*g;De(Ce.deltaX*Ze,Ce.deltaY*Ze,0),f&&!q&&ze.restart(!0)}},Q=function(Ce){if(!de(Ce)){var Ze=Ce.clientX,ge=Ce.clientY,Ye=Ze-V.x,Ue=ge-V.y;V.x=Ze,V.y=ge,ve=!0,f&&ze.restart(!0),(Ye||Ue)&&Le(Ye,Ue)}},Se=function(Ce){V.event=Ce,N(V)},Be=function(Ce){V.event=Ce,X(V)},xt=function(Ce){return de(Ce)||Gs(Ce,u)&&je(V)};ze=V._dc=sn.delayedCall(d||.25,ne).pause(),V.deltaX=V.deltaY=0,V._vx=Au(0,50,!0),V._vy=Au(0,50,!0),V.scrollX=me,V.scrollY=ke,V.isDragging=V.isGesturing=V.isPressed=!1,Ip(this),V.enable=function(ye){return V.isEnabled||(_n(J?$:a,"scroll",wu),o.indexOf("scroll")>=0&&_n(J?$:a,"scroll",oe,mt,K),o.indexOf("wheel")>=0&&_n(a,"wheel",te,mt,K),(o.indexOf("touch")>=0&&Pp||o.indexOf("pointer")>=0)&&(_n(a,ii[0],Oe,mt,K),_n($,ii[2],D),_n($,ii[3],D),j&&_n(a,"click",Pe,!0,!0),je&&_n(a,"click",xt),ee&&_n($,"gesturestart",ue),I&&_n($,"gestureend",se),N&&_n(a,Mr+"enter",Se),X&&_n(a,Mr+"leave",Be),H&&_n(a,Mr+"move",Q)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=ve=pt=!1,V._vx.reset(),V._vy.reset(),P=me(),S=ke(),ye&&ye.type&&Oe(ye),Ie&&Ie(V)),V},V.disable=function(){V.isEnabled&&(ls.filter(function(ye){return ye!==V&&co(ye.target)}).length||xn(J?$:a,"scroll",wu),V.isPressed&&(V._vx.reset(),V._vy.reset(),xn(q?a:$,ii[1],he,!0)),xn(J?$:a,"scroll",oe,K),xn(a,"wheel",te,K),xn(a,ii[0],Oe,K),xn($,ii[2],D),xn($,ii[3],D),xn(a,"click",Pe,!0),xn(a,"click",xt),xn($,"gesturestart",ue),xn($,"gestureend",se),xn(a,Mr+"enter",Se),xn(a,Mr+"leave",Be),xn(a,Mr+"move",Q),V.isEnabled=V.isPressed=V.isDragging=!1,He&&He(V))},V.kill=V.revert=function(){V.disable();var ye=ls.indexOf(V);ye>=0&&ls.splice(ye,1),ki===V&&(ki=0)},ls.push(V),q&&co(a)&&(ki=V),V.enable(_)},hM(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Vt.version="3.13.0";Vt.create=function(r){return new Vt(r)};Vt.register=Fp;Vt.getAll=function(){return ls.slice()};Vt.getById=function(r){return ls.filter(function(e){return e.vars.id===r})[0]};Dp()&&sn.registerPlugin(Vt);var Ae,as,st,Ct,zn,yt,lf,Ya,wo,lo,Zs,ca,cn,lc,Ru,bn,zd,Vd,cs,Op,jc,Bp,yn,Cu,kp,zp,rr,Pu,uf,ps,ff,Ka,Lu,$c,la=1,ln=Date.now,Zc=ln(),Zn=0,Js=0,Hd=function(e,t,n){var i=kn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Gd=function(e,t){return t&&(!kn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},gM=function r(){return Js&&requestAnimationFrame(r)},Wd=function(){return lc=1},Xd=function(){return lc=0},pi=function(e){return e},Qs=function(e){return Math.round(e*1e5)/1e5||0},Vp=function(){return typeof window<"u"},Hp=function(){return Ae||Vp()&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae},Dr=function(e){return!!~lf.indexOf(e)},Gp=function(e){return(e==="Height"?ff:st["inner"+e])||zn["client"+e]||yt["client"+e]},Wp=function(e){return lr(e,"getBoundingClientRect")||(Dr(e)?function(){return Oa.width=st.innerWidth,Oa.height=ff,Oa}:function(){return Oi(e)})},xM=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=lr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Gp(s):e["client"+s])||0}},_M=function(e,t){return!t||~Si.indexOf(e)?Wp(e):function(){return Oa}},yi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=lr(e,n))?o()-Wp(e)()[s]:Dr(e)?(zn[n]||yt[n])-Gp(i):e[n]-e["offset"+i])},ua=function(e,t){for(var n=0;n<cs.length;n+=3)(!t||~t.indexOf(cs[n+1]))&&e(cs[n],cs[n+1],cs[n+2])},kn=function(e){return typeof e=="string"},un=function(e){return typeof e=="function"},eo=function(e){return typeof e=="number"},Sr=function(e){return typeof e=="object"},Ws=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Jc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},is=Math.abs,Xp="left",qp="top",df="right",hf="bottom",Rr="width",Cr="height",uo="Right",fo="Left",ho="Top",po="Bottom",Gt="padding",Yn="margin",ws="Width",pf="Height",Yt="px",Kn=function(e){return st.getComputedStyle(e)},vM=function(e){var t=Kn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},qd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Oi=function(e,t){var n=t&&Kn(e)[Ru]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ae.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},ja=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Yp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},yM=function(e){return function(t){return Ae.utils.snap(Yp(e),t)}},mf=function(e){var t=Ae.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},bM=function(e){return function(t,n){return mf(Yp(e))(t,n.direction)}},fa=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},en=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Qt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},da=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Yd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ha={toggleActions:"play",anticipatePin:0},$a={top:0,left:0,center:.5,bottom:1,right:1},Da=function(e,t){if(kn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in $a?$a[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},pa=function(e,t,n,i,s,o,a,c){var l=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,g=Ct.createElement("div"),_=Dr(n)||lr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?yt:n,T=e.indexOf("start")!==-1,v=T?l:u,y="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||c)&&_?"fixed;":"absolute;"),(m||c||!_)&&(y+=(i===Kt?df:hf)+":"+(o+parseFloat(d))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=T,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Ua(g,0,i,T),g},Ua=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+ws]=1,s["border"+a+ws]=0,s[n.p]=t+"px",Ae.set(e,s)},it=[],Iu={},Ao,Kd=function(){return ln()-Zn>34&&(Ao||(Ao=requestAnimationFrame(Wi)))},rs=function(){(!yn||!yn.isPressed||yn.startX>yt.clientWidth)&&(ot.cache++,yn?Ao||(Ao=requestAnimationFrame(Wi)):Wi(),Zn||Nr("scrollStart"),Zn=ln())},Qc=function(){zp=st.innerWidth,kp=st.innerHeight},to=function(e){ot.cache++,(e===!0||!cn&&!Bp&&!Ct.fullscreenElement&&!Ct.webkitFullscreenElement&&(!Cu||zp!==st.innerWidth||Math.abs(st.innerHeight-kp)>st.innerHeight*.25))&&Ya.restart(!0)},Ur={},MM=[],Kp=function r(){return Qt(Ke,"scrollEnd",r)||wr(!0)},Nr=function(e){return Ur[e]&&Ur[e].map(function(t){return t()})||MM},Bn=[],jp=function(e){for(var t=0;t<Bn.length;t+=5)(!e||Bn[t+4]&&Bn[t+4].query===e)&&(Bn[t].style.cssText=Bn[t+1],Bn[t].getBBox&&Bn[t].setAttribute("transform",Bn[t+2]||""),Bn[t+3].uncache=1)},gf=function(e,t){var n;for(bn=0;bn<it.length;bn++)n=it[bn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ka=!0,t&&jp(t),t||Nr("revert")},$p=function(e,t){ot.cache++,(t||!Mn)&&ot.forEach(function(n){return un(n)&&n.cacheID++&&(n.rec=0)}),kn(e)&&(st.history.scrollRestoration=uf=e)},Mn,Pr=0,jd,SM=function(){if(jd!==Pr){var e=jd=Pr;requestAnimationFrame(function(){return e===Pr&&wr(!0)})}},Zp=function(){yt.appendChild(ps),ff=!yn&&ps.offsetHeight||st.innerHeight,yt.removeChild(ps)},$d=function(e){return wo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},wr=function(e,t){if(zn=Ct.documentElement,yt=Ct.body,lf=[st,Ct,zn,yt],Zn&&!e&&!Ka){en(Ke,"scrollEnd",Kp);return}Zp(),Mn=Ke.isRefreshing=!0,ot.forEach(function(i){return un(i)&&++i.cacheID&&(i.rec=i())});var n=Nr("refreshInit");Op&&Ke.sort(),t||gf(),ot.forEach(function(i){un(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),it.slice(0).forEach(function(i){return i.refresh()}),Ka=!1,it.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Lu=1,$d(!0),it.forEach(function(i){var s=yi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),$d(!1),Lu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ot.forEach(function(i){un(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),$p(uf,1),Ya.pause(),Pr++,Mn=2,Wi(2),it.forEach(function(i){return un(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Mn=Ke.isRefreshing=!1,Nr("refresh")},Du=0,Na=1,mo,Wi=function(e){if(e===2||!Mn&&!Ka){Ke.isUpdating=!0,mo&&mo.update(0);var t=it.length,n=ln(),i=n-Zc>=50,s=t&&it[0].scroll();if(Na=Du>s?-1:1,Mn||(Du=s),i&&(Zn&&!lc&&n-Zn>200&&(Zn=0,Nr("scrollEnd")),Zs=Zc,Zc=n),Na<0){for(bn=t;bn-- >0;)it[bn]&&it[bn].update(0,i);Na=1}else for(bn=0;bn<t;bn++)it[bn]&&it[bn].update(0,i);Ke.isUpdating=!1}Ao=0},Uu=[Xp,qp,hf,df,Yn+po,Yn+uo,Yn+ho,Yn+fo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Fa=Uu.concat([Rr,Cr,"boxSizing","max"+ws,"max"+pf,"position",Yn,Gt,Gt+ho,Gt+uo,Gt+po,Gt+fo]),TM=function(e,t,n){ms(n);var i=e._gsap;if(i.spacerIsNative)ms(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},el=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Uu.length,o=t.style,a=e.style,c;s--;)c=Uu[s],o[c]=n[c];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[hf]=a[df]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Rr]=ja(e,En)+Yt,o[Cr]=ja(e,Kt)+Yt,o[Gt]=a[Yn]=a[qp]=a[Xp]="0",ms(i),a[Rr]=a["max"+ws]=n[Rr],a[Cr]=a["max"+pf]=n[Cr],a[Gt]=n[Gt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},EM=/([A-Z])/g,ms=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ae.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(EM,"-$1").toLowerCase())}},ma=function(e){for(var t=Fa.length,n=e.style,i=[],s=0;s<t;s++)i.push(Fa[s],n[Fa[s]]);return i.t=e,i},wM=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Oa={left:0,top:0},Zd=function(e,t,n,i,s,o,a,c,l,u,f,d,h,g){un(e)&&(e=e(c)),kn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Da("0"+e.substr(3),n):0));var _=h?h.time():0,m,p,T;if(h&&h.seek(0),isNaN(e)||(e=+e),eo(e))h&&(e=Ae.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),a&&Ua(a,n,i,!0);else{un(t)&&(t=t(c));var v=(e||"0").split(" "),y,R,b,E;T=Ln(t,c)||yt,y=Oi(T)||{},(!y||!y.left&&!y.top)&&Kn(T).display==="none"&&(E=T.style.display,T.style.display="block",y=Oi(T),E?T.style.display=E:T.style.removeProperty("display")),R=Da(v[0],y[i.d]),b=Da(v[1]||"0",n),e=y[i.p]-l[i.p]-u+R+s-b,a&&Ua(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(g&&(c[g]=e||-.001,e<0&&(e=0)),o){var C=e+n,M=o._isStart;m="scroll"+i.d2,Ua(o,C,i,M&&C>20||!M&&(f?Math.max(yt[m],zn[m]):o.parentNode[m])<=C+1),f&&(l=Oi(a),f&&(o.style[i.op.p]=l[i.op.p]-i.op.m-o._offset+Yt))}return h&&T&&(m=Oi(T),h.seek(d),p=Oi(T),h._caScrollDist=m[i.p]-p[i.p],e=e/h._caScrollDist*d),h&&h.seek(_),h?e:Math.round(e)},AM=/(webkit|moz|length|cssText|inset)/i,Jd=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===yt){e._stOrig=s.cssText,a=Kn(e);for(o in a)!+o&&!AM.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ae.core.getCache(e).uncache=1,t.appendChild(e)}},Jp=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},ga=function(e,t,n){var i={};i[t.p]="+="+n,Ae.set(e,i)},Qd=function(e,t){var n=fr(e,t),i="_scroll"+t.p2,s=function o(a,c,l,u,f){var d=o.tween,h=c.onComplete,g={};l=l||n();var _=Jp(n,l,function(){d.kill(),o.tween=0});return f=u&&f||0,u=u||a-l,d&&d.kill(),c[i]=a,c.inherit=!1,c.modifiers=g,g[i]=function(){return _(l+u*d.ratio+f*d.ratio*d.ratio)},c.onUpdate=function(){ot.cache++,o.tween&&Wi()},c.onComplete=function(){o.tween=0,h&&h.call(d)},d=o.tween=Ae.to(e,c),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},en(e,"wheel",n.wheelHandler),Ke.isTouch&&en(e,"touchmove",n.wheelHandler),s},Ke=(function(){function r(t,n){as||r.register(Ae)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Pu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Js){this.update=this.refresh=this.kill=pi;return}n=qd(kn(n)||eo(n)||n.nodeType?{trigger:n}:n,ha);var s=n,o=s.onUpdate,a=s.toggleClass,c=s.id,l=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,T=s.onSnapComplete,v=s.once,y=s.snap,R=s.pinReparent,b=s.pinSpacer,E=s.containerAnimation,C=s.fastScrollEnd,M=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?En:Kt,A=!f&&f!==0,L=Ln(n.scroller||st),F=Ae.core.getCache(L),N=Dr(L),X=("pinType"in n?n.pinType:lr(L,"pinType")||N&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Z=A&&n.toggleActions.split(" "),q="markers"in n?n.markers:ha.markers,ee=N?0:parseFloat(Kn(L)["border"+x.p2+ws])||0,I=this,fe=n.onRefreshInit&&function(){return n.onRefreshInit(I)},Ie=xM(L,N,x),He=_M(L,N),je=0,Qe=0,K=0,j=fr(L,x),ae,Ee,we,ze,pt,ve,qe,U,Xe,V,et,be,mt,me,ke,P,S,k,J,$,Y,Me,le,Pe,de,ne,re,De,Le,he,Oe,D,ue,se,oe,te,Q,Se,Be;if(I._startClamp=I._endClamp=!1,I._dir=x,m*=45,I.scroller=L,I.scroll=E?E.time.bind(E):j,ze=j(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(Op=1,n.refreshPriority===-9999&&(mo=I)),F.tweenScroll=F.tweenScroll||{top:Qd(L,Kt),left:Qd(L,En)},I.tweenTo=ae=F.tweenScroll[x.p],I.scrubDuration=function(ge){ue=eo(ge)&&ge,ue?D?D.duration(ge):D=Ae.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ue,paused:!0,onComplete:function(){return p&&p(I)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(f),he=0,c||(c=i.vars.id)),y&&((!Sr(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in yt.style&&Ae.set(N?[yt,zn]:L,{scrollBehavior:"auto"}),ot.forEach(function(ge){return un(ge)&&ge.target===(N?Ct.scrollingElement||zn:L)&&(ge.smooth=!1)}),we=un(y.snapTo)?y.snapTo:y.snapTo==="labels"?yM(i):y.snapTo==="labelsDirectional"?bM(i):y.directional!==!1?function(ge,Ye){return mf(y.snapTo)(ge,ln()-Qe<500?0:Ye.direction)}:Ae.utils.snap(y.snapTo),se=y.duration||{min:.1,max:2},se=Sr(se)?lo(se.min,se.max):lo(se,se),oe=Ae.delayedCall(y.delay||ue/2||.1,function(){var ge=j(),Ye=ln()-Qe<500,Ue=ae.tween;if((Ye||Math.abs(I.getVelocity())<10)&&!Ue&&!lc&&je!==ge){var Ge=(ge-ve)/me,Ot=i&&!A?i.totalProgress():Ge,rt=Ye?0:(Ot-Oe)/(ln()-Zs)*1e3||0,Dt=Ae.utils.clamp(-Ge,1-Ge,is(rt/2)*rt/.185),zt=Ge+(y.inertia===!1?0:Dt),Lt,bt,vt=y,Rn=vt.onStart,It=vt.onInterrupt,pn=vt.onComplete;if(Lt=we(zt,I),eo(Lt)||(Lt=zt),bt=Math.max(0,Math.round(ve+Lt*me)),ge<=qe&&ge>=ve&&bt!==ge){if(Ue&&!Ue._initted&&Ue.data<=is(bt-ge))return;y.inertia===!1&&(Dt=Lt-Ge),ae(bt,{duration:se(is(Math.max(is(zt-Ot),is(Lt-Ot))*.185/rt/.05||0)),ease:y.ease||"power3",data:is(bt-ge),onInterrupt:function(){return oe.restart(!0)&&It&&It(I)},onComplete:function(){I.update(),je=j(),i&&!A&&(D?D.resetTo("totalProgress",Lt,i._tTime/i._tDur):i.progress(Lt)),he=Oe=i&&!A?i.totalProgress():I.progress,T&&T(I),pn&&pn(I)}},ge,Dt*me,bt-ge-Dt*me),Rn&&Rn(I,ae.tween)}}else I.isActive&&je!==ge&&oe.restart(!0)}).pause()),c&&(Iu[c]=I),d=I.trigger=Ln(d||h!==!0&&h),Be=d&&d._gsap&&d._gsap.stRevert,Be&&(Be=Be(I)),h=h===!0?d:Ln(h),kn(a)&&(a={targets:d,className:a}),h&&(g===!1||g===Yn||(g=!g&&h.parentNode&&h.parentNode.style&&Kn(h.parentNode).display==="flex"?!1:Gt),I.pin=h,Ee=Ae.core.getCache(h),Ee.spacer?ke=Ee.pinState:(b&&(b=Ln(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),Ee.spacerIsNative=!!b,b&&(Ee.spacerState=ma(b))),Ee.spacer=k=b||Ct.createElement("div"),k.classList.add("pin-spacer"),c&&k.classList.add("pin-spacer-"+c),Ee.pinState=ke=ma(h)),n.force3D!==!1&&Ae.set(h,{force3D:!0}),I.spacer=k=Ee.spacer,Le=Kn(h),Pe=Le[g+x.os2],$=Ae.getProperty(h),Y=Ae.quickSetter(h,x.a,Yt),el(h,k,Le),S=ma(h)),q){be=Sr(q)?qd(q,Yd):Yd,V=pa("scroller-start",c,L,x,be,0),et=pa("scroller-end",c,L,x,be,0,V),J=V["offset"+x.op.d2];var xt=Ln(lr(L,"content")||L);U=this.markerStart=pa("start",c,xt,x,be,J,0,E),Xe=this.markerEnd=pa("end",c,xt,x,be,J,0,E),E&&(Se=Ae.quickSetter([U,Xe],x.a,Yt)),!X&&!(Si.length&&lr(L,"fixedMarkers")===!0)&&(vM(N?yt:L),Ae.set([V,et],{force3D:!0}),ne=Ae.quickSetter(V,x.a,Yt),De=Ae.quickSetter(et,x.a,Yt))}if(E){var ye=E.vars.onUpdate,Ce=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){I.update(0,0,1),ye&&ye.apply(E,Ce||[])})}if(I.previous=function(){return it[it.indexOf(I)-1]},I.next=function(){return it[it.indexOf(I)+1]},I.revert=function(ge,Ye){if(!Ye)return I.kill(!0);var Ue=ge!==!1||!I.enabled,Ge=cn;Ue!==I.isReverted&&(Ue&&(te=Math.max(j(),I.scroll.rec||0),K=I.progress,Q=i&&i.progress()),U&&[U,Xe,V,et].forEach(function(Ot){return Ot.style.display=Ue?"none":"block"}),Ue&&(cn=I,I.update(Ue)),h&&(!R||!I.isActive)&&(Ue?TM(h,k,ke):el(h,k,Kn(h),de)),Ue||I.update(Ue),cn=Ge,I.isReverted=Ue)},I.refresh=function(ge,Ye,Ue,Ge){if(!((cn||!I.enabled)&&!Ye)){if(h&&ge&&Zn){en(r,"scrollEnd",Kp);return}!Mn&&fe&&fe(I),cn=I,ae.tween&&!Ue&&(ae.tween.kill(),ae.tween=0),D&&D.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(Re){return Re.vars.immediateRender&&Re.render(0,!0,!0)})),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var Ot=Ie(),rt=He(),Dt=E?E.duration():yi(L,x),zt=me<=.01||!me,Lt=0,bt=Ge||0,vt=Sr(Ue)?Ue.end:n.end,Rn=n.endTrigger||d,It=Sr(Ue)?Ue.start:n.start||(n.start===0||!d?0:h?"0 0":"0 100%"),pn=I.pinnedContainer=n.pinnedContainer&&Ln(n.pinnedContainer,I),Hn=d&&Math.max(0,it.indexOf(I))||0,Xt=Hn,qt,Zt,w,B,W,G,O,ce,_e,Te,pe,Ne,Ve;for(q&&Sr(Ue)&&(Ne=Ae.getProperty(V,x.p),Ve=Ae.getProperty(et,x.p));Xt-- >0;)G=it[Xt],G.end||G.refresh(0,1)||(cn=I),O=G.pin,O&&(O===d||O===h||O===pn)&&!G.isReverted&&(Te||(Te=[]),Te.unshift(G),G.revert(!0,!0)),G!==it[Xt]&&(Hn--,Xt--);for(un(It)&&(It=It(I)),It=Hd(It,"start",I),ve=Zd(It,d,Ot,x,j(),U,V,I,rt,ee,X,Dt,E,I._startClamp&&"_startClamp")||(h?-.001:0),un(vt)&&(vt=vt(I)),kn(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(kn(It)?It.split(" ")[0]:"")+vt:(Lt=Da(vt.substr(2),Ot),vt=kn(It)?It:(E?Ae.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,ve):ve)+Lt,Rn=d)),vt=Hd(vt,"end",I),qe=Math.max(ve,Zd(vt||(Rn?"100% 0":Dt),Rn,Ot,x,j()+Lt,Xe,et,I,rt,ee,X,Dt,E,I._endClamp&&"_endClamp"))||-.001,Lt=0,Xt=Hn;Xt--;)G=it[Xt],O=G.pin,O&&G.start-G._pinPush<=ve&&!E&&G.end>0&&(qt=G.end-(I._startClamp?Math.max(0,G.start):G.start),(O===d&&G.start-G._pinPush<ve||O===pn)&&isNaN(It)&&(Lt+=qt*(1-G.progress)),O===h&&(bt+=qt));if(ve+=Lt,qe+=Lt,I._startClamp&&(I._startClamp+=Lt),I._endClamp&&!Mn&&(I._endClamp=qe||-.001,qe=Math.min(qe,yi(L,x))),me=qe-ve||(ve-=.01)&&.001,zt&&(K=Ae.utils.clamp(0,1,Ae.utils.normalize(ve,qe,te))),I._pinPush=bt,U&&Lt&&(qt={},qt[x.a]="+="+Lt,pn&&(qt[x.p]="-="+j()),Ae.set([U,Xe],qt)),h&&!(Lu&&I.end>=yi(L,x)))qt=Kn(h),B=x===Kt,w=j(),Me=parseFloat($(x.a))+bt,!Dt&&qe>1&&(pe=(N?Ct.scrollingElement||zn:L).style,pe={style:pe,value:pe["overflow"+x.a.toUpperCase()]},N&&Kn(yt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(pe.style["overflow"+x.a.toUpperCase()]="scroll")),el(h,k,qt),S=ma(h),Zt=Oi(h,!0),ce=X&&fr(L,B?En:Kt)(),g?(de=[g+x.os2,me+bt+Yt],de.t=k,Xt=g===Gt?ja(h,x)+me+bt:0,Xt&&(de.push(x.d,Xt+Yt),k.style.flexBasis!=="auto"&&(k.style.flexBasis=Xt+Yt)),ms(de),pn&&it.forEach(function(Re){Re.pin===pn&&Re.vars.pinSpacing!==!1&&(Re._subPinOffset=!0)}),X&&j(te)):(Xt=ja(h,x),Xt&&k.style.flexBasis!=="auto"&&(k.style.flexBasis=Xt+Yt)),X&&(W={top:Zt.top+(B?w-ve:ce)+Yt,left:Zt.left+(B?ce:w-ve)+Yt,boxSizing:"border-box",position:"fixed"},W[Rr]=W["max"+ws]=Math.ceil(Zt.width)+Yt,W[Cr]=W["max"+pf]=Math.ceil(Zt.height)+Yt,W[Yn]=W[Yn+ho]=W[Yn+uo]=W[Yn+po]=W[Yn+fo]="0",W[Gt]=qt[Gt],W[Gt+ho]=qt[Gt+ho],W[Gt+uo]=qt[Gt+uo],W[Gt+po]=qt[Gt+po],W[Gt+fo]=qt[Gt+fo],P=wM(ke,W,R),Mn&&j(0)),i?(_e=i._initted,jc(1),i.render(i.duration(),!0,!0),le=$(x.a)-Me+me+bt,re=Math.abs(me-le)>1,X&&re&&P.splice(P.length-2,2),i.render(0,!0,!0),_e||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),jc(0)):le=me,pe&&(pe.value?pe.style["overflow"+x.a.toUpperCase()]=pe.value:pe.style.removeProperty("overflow-"+x.a));else if(d&&j()&&!E)for(Zt=d.parentNode;Zt&&Zt!==yt;)Zt._pinOffset&&(ve-=Zt._pinOffset,qe-=Zt._pinOffset),Zt=Zt.parentNode;Te&&Te.forEach(function(Re){return Re.revert(!1,!0)}),I.start=ve,I.end=qe,ze=pt=Mn?te:j(),!E&&!Mn&&(ze<te&&j(te),I.scroll.rec=0),I.revert(!1,!0),Qe=ln(),oe&&(je=-1,oe.restart(!0)),cn=0,i&&A&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(zt||K!==I.progress||E||_||i&&!i._initted)&&(i&&!A&&(i._initted||K||i.vars.immediateRender!==!1)&&i.totalProgress(E&&ve<-.001&&!K?Ae.utils.normalize(ve,qe,0):K,!0),I.progress=zt||(ze-ve)/me===K?0:K),h&&g&&(k._pinOffset=Math.round(I.progress*le)),D&&D.invalidate(),isNaN(Ne)||(Ne-=Ae.getProperty(V,x.p),Ve-=Ae.getProperty(et,x.p),ga(V,x,Ne),ga(U,x,Ne-(Ge||0)),ga(et,x,Ve),ga(Xe,x,Ve-(Ge||0))),zt&&!Mn&&I.update(),u&&!Mn&&!mt&&(mt=!0,u(I),mt=!1)}},I.getVelocity=function(){return(j()-pt)/(ln()-Zs)*1e3||0},I.endAnimation=function(){Ws(I.callbackAnimation),i&&(D?D.progress(1):i.paused()?A||Ws(i,I.direction<0,1):Ws(i,i.reversed()))},I.labelToScroll=function(ge){return i&&i.labels&&(ve||I.refresh()||ve)+i.labels[ge]/i.duration()*me||0},I.getTrailing=function(ge){var Ye=it.indexOf(I),Ue=I.direction>0?it.slice(0,Ye).reverse():it.slice(Ye+1);return(kn(ge)?Ue.filter(function(Ge){return Ge.vars.preventOverlaps===ge}):Ue).filter(function(Ge){return I.direction>0?Ge.end<=ve:Ge.start>=qe})},I.update=function(ge,Ye,Ue){if(!(E&&!Ue&&!ge)){var Ge=Mn===!0?te:I.scroll(),Ot=ge?0:(Ge-ve)/me,rt=Ot<0?0:Ot>1?1:Ot||0,Dt=I.progress,zt,Lt,bt,vt,Rn,It,pn,Hn;if(Ye&&(pt=ze,ze=E?j():Ge,y&&(Oe=he,he=i&&!A?i.totalProgress():rt)),m&&h&&!cn&&!la&&Zn&&(!rt&&ve<Ge+(Ge-pt)/(ln()-Zs)*m?rt=1e-4:rt===1&&qe>Ge+(Ge-pt)/(ln()-Zs)*m&&(rt=.9999)),rt!==Dt&&I.enabled){if(zt=I.isActive=!!rt&&rt<1,Lt=!!Dt&&Dt<1,It=zt!==Lt,Rn=It||!!rt!=!!Dt,I.direction=rt>Dt?1:-1,I.progress=rt,Rn&&!cn&&(bt=rt&&!Dt?0:rt===1?1:Dt===1?2:3,A&&(vt=!It&&Z[bt+1]!=="none"&&Z[bt+1]||Z[bt],Hn=i&&(vt==="complete"||vt==="reset"||vt in i))),M&&(It||Hn)&&(Hn||f||!i)&&(un(M)?M(I):I.getTrailing(M).forEach(function(w){return w.endAnimation()})),A||(D&&!cn&&!la?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",rt,i._tTime/i._tDur):(D.vars.totalProgress=rt,D.invalidate().restart())):i&&i.totalProgress(rt,!!(cn&&(Qe||ge)))),h){if(ge&&g&&(k.style[g+x.os2]=Pe),!X)Y(Qs(Me+le*rt));else if(Rn){if(pn=!ge&&rt>Dt&&qe+1>Ge&&Ge+1>=yi(L,x),R)if(!ge&&(zt||pn)){var Xt=Oi(h,!0),qt=Ge-ve;Jd(h,yt,Xt.top+(x===Kt?qt:0)+Yt,Xt.left+(x===Kt?0:qt)+Yt)}else Jd(h,k);ms(zt||pn?P:S),re&&rt<1&&zt||Y(Me+(rt===1&&!pn?le:0))}}y&&!ae.tween&&!cn&&!la&&oe.restart(!0),a&&(It||v&&rt&&(rt<1||!$c))&&wo(a.targets).forEach(function(w){return w.classList[zt||v?"add":"remove"](a.className)}),o&&!A&&!ge&&o(I),Rn&&!cn?(A&&(Hn&&(vt==="complete"?i.pause().totalProgress(1):vt==="reset"?i.restart(!0).pause():vt==="restart"?i.restart(!0):i[vt]()),o&&o(I)),(It||!$c)&&(l&&It&&Jc(I,l),H[bt]&&Jc(I,H[bt]),v&&(rt===1?I.kill(!1,1):H[bt]=0),It||(bt=rt===1?1:3,H[bt]&&Jc(I,H[bt]))),C&&!zt&&Math.abs(I.getVelocity())>(eo(C)?C:2500)&&(Ws(I.callbackAnimation),D?D.progress(1):Ws(i,vt==="reverse"?1:!rt,1))):A&&o&&!cn&&o(I)}if(De){var Zt=E?Ge/E.duration()*(E._caScrollDist||0):Ge;ne(Zt+(V._isFlipped?1:0)),De(Zt)}Se&&Se(-Ge/E.duration()*(E._caScrollDist||0))}},I.enable=function(ge,Ye){I.enabled||(I.enabled=!0,en(L,"resize",to),N||en(L,"scroll",rs),fe&&en(r,"refreshInit",fe),ge!==!1&&(I.progress=K=0,ze=pt=je=j()),Ye!==!1&&I.refresh())},I.getTween=function(ge){return ge&&ae?ae.tween:D},I.setPositions=function(ge,Ye,Ue,Ge){if(E){var Ot=E.scrollTrigger,rt=E.duration(),Dt=Ot.end-Ot.start;ge=Ot.start+Dt*ge/rt,Ye=Ot.start+Dt*Ye/rt}I.refresh(!1,!1,{start:Gd(ge,Ue&&!!I._startClamp),end:Gd(Ye,Ue&&!!I._endClamp)},Ge),I.update()},I.adjustPinSpacing=function(ge){if(de&&ge){var Ye=de.indexOf(x.d)+1;de[Ye]=parseFloat(de[Ye])+ge+Yt,de[1]=parseFloat(de[1])+ge+Yt,ms(de)}},I.disable=function(ge,Ye){if(I.enabled&&(ge!==!1&&I.revert(!0,!0),I.enabled=I.isActive=!1,Ye||D&&D.pause(),te=0,Ee&&(Ee.uncache=1),fe&&Qt(r,"refreshInit",fe),oe&&(oe.pause(),ae.tween&&ae.tween.kill()&&(ae.tween=0)),!N)){for(var Ue=it.length;Ue--;)if(it[Ue].scroller===L&&it[Ue]!==I)return;Qt(L,"resize",to),N||Qt(L,"scroll",rs)}},I.kill=function(ge,Ye){I.disable(ge,Ye),D&&!Ye&&D.kill(),c&&delete Iu[c];var Ue=it.indexOf(I);Ue>=0&&it.splice(Ue,1),Ue===bn&&Na>0&&bn--,Ue=0,it.forEach(function(Ge){return Ge.scroller===I.scroller&&(Ue=1)}),Ue||Mn||(I.scroll.rec=0),i&&(i.scrollTrigger=null,ge&&i.revert({kill:!1}),Ye||i.kill()),U&&[U,Xe,V,et].forEach(function(Ge){return Ge.parentNode&&Ge.parentNode.removeChild(Ge)}),mo===I&&(mo=0),h&&(Ee&&(Ee.uncache=1),Ue=0,it.forEach(function(Ge){return Ge.pin===h&&Ue++}),Ue||(Ee.spacer=0)),n.onKill&&n.onKill(I)},it.push(I),I.enable(!1,!1),Be&&Be(I),i&&i.add&&!me){var Ze=I.update;I.update=function(){I.update=Ze,ot.cache++,ve||qe||I.refresh()},Ae.delayedCall(.01,I.update),me=.01,ve=qe=0}else I.refresh();h&&SM()},r.register=function(n){return as||(Ae=n||Hp(),Vp()&&window.document&&r.enable(),as=Js),as},r.defaults=function(n){if(n)for(var i in n)ha[i]=n[i];return ha},r.disable=function(n,i){Js=0,it.forEach(function(o){return o[i?"kill":"disable"](n)}),Qt(st,"wheel",rs),Qt(Ct,"scroll",rs),clearInterval(ca),Qt(Ct,"touchcancel",pi),Qt(yt,"touchstart",pi),fa(Qt,Ct,"pointerdown,touchstart,mousedown",Wd),fa(Qt,Ct,"pointerup,touchend,mouseup",Xd),Ya.kill(),ua(Qt);for(var s=0;s<ot.length;s+=3)da(Qt,ot[s],ot[s+1]),da(Qt,ot[s],ot[s+2])},r.enable=function(){if(st=window,Ct=document,zn=Ct.documentElement,yt=Ct.body,Ae&&(wo=Ae.utils.toArray,lo=Ae.utils.clamp,Pu=Ae.core.context||pi,jc=Ae.core.suppressOverwrites||pi,uf=st.history.scrollRestoration||"auto",Du=st.pageYOffset||0,Ae.core.globals("ScrollTrigger",r),yt)){Js=1,ps=document.createElement("div"),ps.style.height="100vh",ps.style.position="absolute",Zp(),gM(),Vt.register(Ae),r.isTouch=Vt.isTouch,rr=Vt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Cu=Vt.isTouch===1,en(st,"wheel",rs),lf=[st,Ct,zn,yt],Ae.matchMedia?(r.matchMedia=function(l){var u=Ae.matchMedia(),f;for(f in l)u.add(f,l[f]);return u},Ae.addEventListener("matchMediaInit",function(){return gf()}),Ae.addEventListener("matchMediaRevert",function(){return jp()}),Ae.addEventListener("matchMedia",function(){wr(0,1),Nr("matchMedia")}),Ae.matchMedia().add("(orientation: portrait)",function(){return Qc(),Qc})):console.warn("Requires GSAP 3.11.0 or later"),Qc(),en(Ct,"scroll",rs);var n=yt.hasAttribute("style"),i=yt.style,s=i.borderTopStyle,o=Ae.core.Animation.prototype,a,c;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Oi(yt),Kt.m=Math.round(a.top+Kt.sc())||0,En.m=Math.round(a.left+En.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(yt.setAttribute("style",""),yt.removeAttribute("style")),ca=setInterval(Kd,250),Ae.delayedCall(.5,function(){return la=0}),en(Ct,"touchcancel",pi),en(yt,"touchstart",pi),fa(en,Ct,"pointerdown,touchstart,mousedown",Wd),fa(en,Ct,"pointerup,touchend,mouseup",Xd),Ru=Ae.utils.checkPrefix("transform"),Fa.push(Ru),as=ln(),Ya=Ae.delayedCall(.2,wr).pause(),cs=[Ct,"visibilitychange",function(){var l=st.innerWidth,u=st.innerHeight;Ct.hidden?(zd=l,Vd=u):(zd!==l||Vd!==u)&&to()},Ct,"DOMContentLoaded",wr,st,"load",wr,st,"resize",to],ua(en),it.forEach(function(l){return l.enable(0,1)}),c=0;c<ot.length;c+=3)da(Qt,ot[c],ot[c+1]),da(Qt,ot[c],ot[c+2])}},r.config=function(n){"limitCallbacks"in n&&($c=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ca)||(ca=i)&&setInterval(Kd,i),"ignoreMobileResize"in n&&(Cu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ua(Qt)||ua(en,n.autoRefreshEvents||"none"),Bp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Ln(n),o=ot.indexOf(s),a=Dr(s);~o&&ot.splice(o,a?6:2),i&&(a?Si.unshift(st,i,yt,i,zn,i):Si.unshift(s,i))},r.clearMatchMedia=function(n){it.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(kn(n)?Ln(n):n).getBoundingClientRect(),a=o[s?Rr:Cr]*i||0;return s?o.right-a>0&&o.left+a<st.innerWidth:o.bottom-a>0&&o.top+a<st.innerHeight},r.positionInViewport=function(n,i,s){kn(n)&&(n=Ln(n));var o=n.getBoundingClientRect(),a=o[s?Rr:Cr],c=i==null?a/2:i in $a?$a[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+c)/st.innerWidth:(o.top+c)/st.innerHeight},r.killAll=function(n){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ur.killAll||[];Ur={},i.forEach(function(s){return s()})}},r})();Ke.version="3.13.0";Ke.saveStyles=function(r){return r?wo(r).forEach(function(e){if(e&&e.style){var t=Bn.indexOf(e);t>=0&&Bn.splice(t,5),Bn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ae.core.getCache(e),Pu())}}):Bn};Ke.revert=function(r,e){return gf(!r,e)};Ke.create=function(r,e){return new Ke(r,e)};Ke.refresh=function(r){return r?to(!0):(as||Ke.register())&&wr(!0)};Ke.update=function(r){return++ot.cache&&Wi(r===!0?2:0)};Ke.clearScrollMemory=$p;Ke.maxScroll=function(r,e){return yi(r,e?En:Kt)};Ke.getScrollFunc=function(r,e){return fr(Ln(r),e?En:Kt)};Ke.getById=function(r){return Iu[r]};Ke.getAll=function(){return it.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ke.isScrolling=function(){return!!Zn};Ke.snapDirectional=mf;Ke.addEventListener=function(r,e){var t=Ur[r]||(Ur[r]=[]);~t.indexOf(e)||t.push(e)};Ke.removeEventListener=function(r,e){var t=Ur[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ke.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(l,u){var f=[],d=[],h=Ae.delayedCall(i,function(){u(f,d),f=[],d=[]}).pause();return function(g){f.length||h.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&h.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&un(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return un(s)&&(s=s(),en(Ke,"refresh",function(){return s=e.batchMax()})),wo(r).forEach(function(c){var l={};for(a in n)l[a]=n[a];l.trigger=c,t.push(Ke.create(l))}),t};var eh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},tl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Vt.isTouch?" pinch-zoom":""):"none",e===zn&&r(yt,t)},xa={auto:1,scroll:1},RM=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ae.core.getCache(s),a=ln(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==yt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(xa[(c=Kn(s)).overflowY]||xa[c.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Dr(s)&&(xa[(c=Kn(s)).overflowY]||xa[c.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Qp=function(e,t,n,i){return Vt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&RM,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&en(Ct,Vt.eventTypes[0],nh,!1,!0)},onDisable:function(){return Qt(Ct,Vt.eventTypes[0],nh,!0)}})},CM=/(input|label|select|textarea)/i,th,nh=function(e){var t=CM.test(e.target.tagName);(t||th)&&(e._gsapAllow=!0,th=t)},PM=function(e){Sr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,c,l=Ln(e.target)||zn,u=Ae.core.globals().ScrollSmoother,f=u&&u.get(),d=rr&&(e.content&&Ln(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=fr(l,Kt),g=fr(l,En),_=1,m=(Vt.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,p=0,T=un(i)?function(){return i(a)}:function(){return i||2.8},v,y,R=Qp(l,e.type,!0,s),b=function(){return y=!1},E=pi,C=pi,M=function(){c=yi(l,Kt),C=lo(rr?1:0,c),n&&(E=lo(0,yi(l,En))),v=Pr},x=function(){d._gsap.y=Qs(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},A=function(){if(y){requestAnimationFrame(b);var q=Qs(a.deltaY/2),ee=C(h.v-q);if(d&&ee!==h.v+h.offset){h.offset=ee-h.v;var I=Qs((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",d._gsap.y=I+"px",h.cacheID=ot.cache,Wi()}return!0}h.offset&&x(),y=!0},L,F,N,X,H=function(){M(),L.isActive()&&L.vars.scrollY>c&&(h()>c?L.progress(1)&&h(c):L.resetTo("scrollY",c))};return d&&Ae.set(d,{y:"+=0"}),e.ignoreCheck=function(Z){return rr&&Z.type==="touchmove"&&A()||_>1.05&&Z.type!=="touchstart"||a.isGesturing||Z.touches&&Z.touches.length>1},e.onPress=function(){y=!1;var Z=_;_=Qs((st.visualViewport&&st.visualViewport.scale||1)/m),L.pause(),Z!==_&&tl(l,_>1.01?!0:n?!1:"x"),F=g(),N=h(),M(),v=Pr},e.onRelease=e.onGestureStart=function(Z,q){if(h.offset&&x(),!q)X.restart(!0);else{ot.cache++;var ee=T(),I,fe;n&&(I=g(),fe=I+ee*.05*-Z.velocityX/.227,ee*=eh(g,I,fe,yi(l,En)),L.vars.scrollX=E(fe)),I=h(),fe=I+ee*.05*-Z.velocityY/.227,ee*=eh(h,I,fe,yi(l,Kt)),L.vars.scrollY=C(fe),L.invalidate().duration(ee).play(.01),(rr&&L.vars.scrollY>=c||I>=c-1)&&Ae.to({},{onUpdate:H,duration:ee})}o&&o(Z)},e.onWheel=function(){L._ts&&L.pause(),ln()-p>1e3&&(v=0,p=ln())},e.onChange=function(Z,q,ee,I,fe){if(Pr!==v&&M(),q&&n&&g(E(I[2]===q?F+(Z.startX-Z.x):g()+q-I[1])),ee){h.offset&&x();var Ie=fe[2]===ee,He=Ie?N+Z.startY-Z.y:h()+ee-fe[1],je=C(He);Ie&&He!==je&&(N+=je-He),h(je)}(ee||q)&&Wi()},e.onEnable=function(){tl(l,n?!1:"x"),Ke.addEventListener("refresh",H),en(st,"resize",H),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),R.enable()},e.onDisable=function(){tl(l,!0),Qt(st,"resize",H),Ke.removeEventListener("refresh",H),R.kill()},e.lockAxis=e.lockAxis!==!1,a=new Vt(e),a.iOS=rr,rr&&!h()&&h(1),rr&&Ae.ticker.add(pi),X=a._dc,L=Ae.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Jp(h,h(),function(){return L.pause()})},onUpdate:Wi,onComplete:X.vars.onComplete}),a};Ke.sort=function(r){if(un(r))return it.sort(r);var e=st.pageYOffset||0;return Ke.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+st.innerHeight}),it.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ke.observe=function(r){return new Vt(r)};Ke.normalizeScroll=function(r){if(typeof r>"u")return yn;if(r===!0&&yn)return yn.enable();if(r===!1){yn&&yn.kill(),yn=r;return}var e=r instanceof Vt?r:PM(r);return yn&&yn.target===e.target&&yn.kill(),Dr(e.target)&&(yn=e),e};Ke.core={_getVelocityProp:Au,_inputObserver:Qp,_scrollers:ot,_proxies:Si,bridge:{ss:function(){Zn||Nr("scrollStart"),Zn=ln()},ref:function(){return cn}}};Hp()&&Ae.registerPlugin(Ke);ie.registerPlugin(Ke);const ih=new Audio("./audio/popups.mp3"),rh=new Audio("./audio/popupsOff.mp3");let _a=!1;function LM(r){const e=new Or,t=new rn;r.add(t);let n;function i(){const m=new Ki().load("baked/floor-1-aa.jpg");m.flipY=!1,m.colorSpace=Pt;const p=new dn({map:m});e.load("floors/floor-1-a.glb",y=>{const R=y.scene;R.position.set(0,0,0),R.rotateY(Math.PI),R.traverse(E=>{E.isMesh&&(E.material=p,E.castShadow=!0,E.receiveShadow=!0)});const b=R.getObjectByName("glass006");b&&(b.material=b.material.clone(),b.material.transparent=!0,b.material.opacity=.6,b.material.color.setHex(15923711)),r.add(R)});const T=new Ki().load("baked/floor-1-b.jpg");T.flipY=!1,T.colorSpace=Pt;const v=new dn({map:T});e.load("floors/floor-1-b.glb",y=>{const R=y.scene;R.position.set(0,0,0),R.rotateY(Math.PI),R.traverse(b=>{b.isMesh&&(b.material=v,b.castShadow=!0,b.receiveShadow=!0)}),r.add(R)}),e.load("floors/floor-1-c.glb",y=>{const R=y.scene;R.position.set(0,0,0),R.rotateY(Math.PI),r.add(R)}),e.load("floors/enviorment.glb",y=>{const R=y.scene;R.position.set(0,0,0),R.rotateY(Math.PI),R.traverse(b=>{b.isMesh&&(b.castShadow=!0,b.receiveShadow=!0)})})}let s=null,o=!1,a;const c=document.querySelectorAll(".physical-component");function l(m,p){n=m,p===1&&n<7?c.forEach(T=>{T.classList.remove("visually-hidden")}):c.forEach(T=>{T.classList.add("visually-hidden")}),p!==a&&h(),p!==-1&&(a=p,6<=m&&m<10&&o===!1&&d(),(6>m||m>10&&o===!0)&&(h(),f(s)))}document.querySelectorAll("[data-target]").forEach(m=>{const p=m.dataset.target;m.addEventListener("click",T=>{m.classList.remove("pulsing"),T.stopPropagation(),u(p)})}),window.addEventListener("click",()=>{f(s)});function u(m){if(a!==1||n>8)return;const p=document.querySelector(m);if(!p||_a)return;_a=!0,ih.currentTime=0,ih.play(),s=m;const T=[...p.children];p.classList.remove("visually-hidden"),ie.fromTo(T,{opacity:0,scale:.8,y:20},{opacity:1,scale:1,y:0,duration:.4,stagger:.08,ease:"power2.out"}),o=!0}function f(m){if(a!==1)return;const p=document.querySelector(m);if(!p)return;_a&&(_a=!1,rh.currentTime=0,rh.play());const T=[...p.children];ie.to(T,{opacity:0,scale:.8,y:20,duration:.3,stagger:.06,ease:"power2.in",onComplete:()=>{p.classList.add("visually-hidden")}}),o=!1}function d(){const m=document.querySelector(`.floor1-ui-station${a}`);if(!m)return;const p=[...m.children];m.classList.remove("visually-hidden"),ie.fromTo(p,{opacity:0,scale:.8,y:20},{opacity:1,scale:1,y:0,duration:.4,stagger:.08,ease:"power2.out"}),o=!0}function h(){const m=document.querySelector(`.floor1-ui-station${a}`);if(!m)return;const p=[...m.children];ie.to(p,{opacity:0,scale:.8,y:20,duration:.3,stagger:.06,ease:"power2.in",onComplete:()=>{m.classList.add("visually-hidden")}}),o=!1}i();function g(m=30){if(!floorGroup)return;const p=Po.degToRad(m);ie.to(floorGroup.rotation,{y:p,duration:0,ease:"power2.inOut",onUpdate:()=>{}})}document.querySelector(".btn-wrap > button").addEventListener("click",_);function _(){ie.to(".instruction-wrapper",{opacity:0,duration:.6,ease:"power3.out",onComplete:()=>{document.querySelector(".instruction-wrapper").classList.add("visually-hidden")}})}return{group:t,checkHeight:l,rotateFloor:g}}ie.registerPlugin(Ke);const Nu=[];let nl=!0;const va=new Audio("./audio/clink-1.mp3"),ss=new Audio("./audio/clink-2.mp3");function IM(r){const e=new Or,t=new rn;r.add(t);let n=new rn;function i(){const o=new Ki().load("baked/floor-2-a.jpg");o.flipY=!1,o.colorSpace=Pt;const a=new dn({map:o});e.load("floors/floor-2-a.glb",u=>{const f=u.scene;n.add(f),f.position.set(0,0,0),f.rotateY(Math.PI),f.traverse(h=>{h.isMesh&&(h.material=a,h.castShadow=!0,h.receiveShadow=!0)});const d=f.getObjectByName("glass002");d&&(d.material=d.material.clone(),d.material.transparent=!0,d.material.opacity=.6,d.material.color.setHex(15923711))});const c=new Ki().load("baked/floor-2-b.jpg");c.flipY=!1,c.colorSpace=Pt;const l=new dn({map:c});e.load("floors/floor-2-b.glb",u=>{const f=u.scene;n.add(f),f.position.set(0,0,0),f.rotateY(Math.PI),f.traverse(d=>{d.isMesh&&(d.material=l,d.castShadow=!0,d.receiveShadow=!0)})}),e.load("floors/floor-2-c.glb",u=>{const f=u.scene;n.add(f),f.position.set(0,0,0),f.rotateY(Math.PI),r.add(n);const d=f.getObjectByName("custom_screen001");d&&(Nu.push(d),d.traverse(h=>{Nu.push(h)}))})}function s(o=30){if(!n)return;const a=Po.degToRad(o);ie.to(n.rotation,{y:a,duration:0,ease:"power2.inOut",onUpdate:()=>{}})}return i(),{group:t,rotateFloor:s}}function DM(r,e,t,n,i){const s=document.querySelector(r);if(!s)return;s.innerHTML="";const o=document.createElement("h2");o.textContent="DESIGN YOUR CAR",s.appendChild(o),Object.entries(e).forEach(([m,p],T)=>{if(p.variants.length>1){const v=document.createElement("h3");v.textContent=m,s.appendChild(v);const y=document.createElement("button");y.classList.add("accessory-variant-button"),y.classList.add("accessory-variant-button-none"),y.classList.add(`${m}-button`),y.addEventListener("click",()=>{t(m,-1),document.querySelectorAll(`.${m}-button`).forEach(R=>R.classList.remove("primary-active")),y.classList.add("primary-active"),va.currentTime=0,va.play()}),s.appendChild(y),p.variants.forEach((R,b)=>{const E=document.createElement("button");E.classList.add("accessory-variant-button"),E.classList.add(`${m}-button`),b===0&&E.classList.add("primary-active");const C=document.createElement("img");C.src=`/around-digiphy/img/accessory-${m}-${b}.png`,E.appendChild(C),E.addEventListener("click",()=>{t(m,b),document.querySelectorAll(`.${m}-button`).forEach(M=>M.classList.remove("primary-active")),E.classList.add("primary-active"),_(R,n,"accessory-primary"),_(R,i,"accessory-secondary"),va.currentTime=0,va.play()}),s.appendChild(E)})}});const a=document.createElement("div");a.classList.add("primary-header"),s.appendChild(a);const c=document.createElement("h3");c.textContent="Primary Color:",a.appendChild(c);const l=document.createElement("span");l.classList.add("primary-selected"),a.appendChild(l),[{name:"Carbon",value:1513498,roughness:.1,metalness:.9},{name:"Pearl",value:16248308,roughness:.3,metalness:.2},{name:"Matte grey",value:5855577,roughness:.8,metalness:.3},{name:"Sage",value:11122313,roughness:.7,metalness:.9},{name:"Desert",value:12559503,roughness:.9,metalness:.2},{name:"Ultramarine",value:10137078,roughness:.01,metalness:.99},{name:"Arina",value:6685703,roughness:.1,metalness:.9},{name:"Tom Green",value:19748,roughness:.1,metalness:.2}].forEach((m,p)=>{const T=document.createElement("button");T.classList.add("color-button"),T.classList.add("primary-color-button"),T.classList.add(`primary-${p}`),T.addEventListener("click",()=>{document.querySelectorAll(".primary-color-button").forEach(v=>v.classList.remove("primary-active")),T.classList.add("primary-active"),document.querySelector(".primary-selected").textContent=m.name,Object.assign(n,m),Object.values(e).forEach(v=>{const y=v.variants[v.defaultVariantIndex];y&&_(y,n,"accessory-primary")}),ss.currentTime=0,ss.volume=.3,ss.play()}),s.appendChild(T)});const f=document.createElement("div");f.classList.add("primary-header"),s.appendChild(f);const d=document.createElement("h3");d.textContent="Secondary Color:",f.appendChild(d);const h=document.createElement("span");h.classList.add("secondary-selected"),f.appendChild(h),[{name:"Charcoal",value:6908782,roughness:.3,metalness:.9},{name:"Pink",value:14270417,roughness:.7,metalness:.3},{name:"Light grey",value:12699079,roughness:.1,metalness:.7},{name:"Teal",value:11588818,roughness:.8,metalness:.9},{name:"Coral",value:16739930,roughness:.7,metalness:.3},{name:"Alpine",value:5728342,roughness:.1,metalness:.7},{name:"Copper",value:10037260,roughness:.3,metalness:.7}].forEach((m,p)=>{const T=document.createElement("button");T.classList.add("color-button"),T.classList.add("secondary-color-button"),T.classList.add(`secondary-${p}`),T.addEventListener("click",()=>{document.querySelectorAll(".secondary-color-button").forEach(v=>v.classList.remove("primary-active")),T.classList.add("primary-active"),document.querySelector(".secondary-selected").textContent=m.name,Object.assign(i,m),Object.values(e).forEach(v=>{const y=v.variants[v.defaultVariantIndex];y&&_(y,i,"accessory-secondary")}),ss.currentTime=0,ss.volume=.5,ss.play()}),s.appendChild(T)});function _(m,p,T){m.traverse(v=>{if(!v.isMesh)return;(Array.isArray(v.material)?v.material:[v.material]).forEach(R=>{if(R.name&&R.name.startsWith(T)){const b=new $e(p.value);ie.to(R.color,{r:b.r,g:b.g,b:b.b,duration:.5,ease:"power2.out"}),ie.to(R,{roughness:p.roughness,metalness:p.metalness,duration:.5,ease:"power2.out"})}})})}}let il=!0;const ya=document.querySelectorAll(".ui-accessories");document.getElementById("accessory-menu");document.querySelector(".floor2-ui-container > .ui-tip");function em(){il?(il=!1,ya.forEach(r=>{r.classList.remove("visually-hidden")}),ie.fromTo(ya,{opacity:0,scale:.8,y:20},{opacity:1,scale:1,y:0,duration:.4,stagger:.06,ease:"power2.out"})):(il=!0,ie.to(ya,{opacity:0,scale:.8,y:20,duration:.3,stagger:.06,ease:"power2.in",onComplete:()=>{ya.forEach(r=>{r.classList.add("visually-hidden")})}}))}const ba=document.getElementById("ui-panel-2-1");let rl=!0;function tm(){rl?(rl=!1,ba.classList.remove("visually-hidden"),ie.fromTo(ba,{opacity:0,scale:.8,y:20},{opacity:1,scale:1,y:0,duration:.4,ease:"power2.out"})):(rl=!0,ie.to(ba,{opacity:0,scale:.8,y:20,duration:.3,stagger:.06,ease:"power2.in",onComplete:()=>{ba.classList.add("visually-hidden")}}))}function UM(){nl=!nl;const r=nl?1:0;Nu.forEach(e=>{if(!e.isMesh)return;const t=Array.isArray(e.material)?e.material:[e.material];e.visible=!0,t.forEach(n=>{n.transparent=!0,ie.to(n,{opacity:r,duration:.8,ease:"power2.inOut",onComplete:()=>{r===0&&(e.visible=!1)}})})})}ie.registerPlugin(Ke);const Ma=new Audio("./audio/overlay.mp3");function NM(r){const e=new Or,t=new rn;r.add(t);let n,i,s=!1,o=new rn,a;function c(){const v=new Ki().load("baked/floor-3-a.jpg");v.flipY=!1,v.colorSpace=Pt;const y=new dn({map:v});e.load("floors/floor-3-a.glb",R=>{const b=R.scene;b.position.set(0,0,0),b.rotateY(Math.PI),b.traverse(C=>{C.isMesh&&(C.material=y,C.castShadow=!0,C.receiveShadow=!0)});const E=b.getObjectByName("glass008");E&&(E.material=E.material.clone(),E.material.transparent=!0,E.material.opacity=.6,E.material.color.setHex(15923711)),o.add(b)}),e.load("floors/floor-3-b.glb",R=>{i=R.scene,i.position.set(0,0,0),i.rotateY(Math.PI),i.traverse(b=>{b.isMesh&&b.material&&(b.material.transparent=!0,b.material.opacity=0,i.visible=!1)}),o.add(i)}),e.load("floors/floor-3-c.glb",R=>{a=R.scene,a.position.set(0,0,0),a.rotateY(Math.PI),o.add(a)}),e.load("models/digiphy-overlay.glb",R=>{n=R.scene,n.position.set(0,2,0),n.traverse(L=>{L.isMesh&&L.material&&(L.material.transparent=!0,L.material.opacity=0,n.visible=!1)}),r.add(n),r.add(o);const b=15,E=63,C={first:1,hold:6,last:4.2},x=2+E,A=ie.timeline({scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",scrub:!0}});A.to(n.position,{y:b,ease:"linear",duration:C.first}),A.to(n.position,{y:b,ease:"none",duration:C.hold}),A.to(n.position,{y:x,ease:"linear",duration:C.last}),ie.to(n.rotation,{ease:"linear",y:n.rotation.y+5,scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",scrub:!0}})})}function l(v){v&&(s?(v.visible=!0,v.traverse(y=>{y.isMesh&&ie.to(y.material,{opacity:.5,duration:.6,ease:"power2.out"})}),Ma.currentTime=0,Ma.play()):(v.traverse(y=>{y.isMesh&&ie.to(y.material,{opacity:0,duration:.5,ease:"power2.out",onComplete:()=>{v.visible=!1}})}),Ma.currentTime=0,Ma.play()))}function u(){n&&(s=!1,n.traverse(v=>{v.isMesh&&ie.to(v.material,{opacity:0,duration:.5,ease:"power2.out",onComplete:()=>{n.visible=!1}})}),i.traverse(v=>{v.isMesh&&ie.to(v.material,{opacity:0,duration:.5,ease:"power2.out",onComplete:()=>{i.visible=!1}})}),f.classList.remove("activeOverlay"))}const f=document.querySelector(".overlay-button");f.addEventListener("click",()=>{s=!s,f.classList.toggle("activeOverlay"),f.classList.remove("pulsing"),l(n),l(i),_()});const d=document.querySelector("#ui-panel-3-1"),h=document.querySelector("#ui-panel-3-2");let g=!0;function _(){g=!g,g?(d.classList.remove("visually-hidden"),ie.fromTo(d,{opacity:0,scale:.8,y:20},{opacity:1,scale:1,y:0,duration:.4,ease:"power2.out"}),ie.to(h,{opacity:0,scale:.8,y:20,duration:.3,stagger:.06,ease:"power2.in",onComplete:()=>{h.classList.add("visually-hidden")}})):(h.classList.remove("visually-hidden"),ie.fromTo(h,{opacity:0,scale:.8,y:20},{opacity:1,scale:1,y:0,duration:.4,ease:"power2.out"}),ie.to(d,{opacity:0,scale:.8,y:20,duration:.3,stagger:.06,ease:"power2.in",onComplete:()=>{d.classList.add("visually-hidden")}}))}function m(v){if(!o)return;const y=Po.degToRad(v);ie.to(o.rotation,{y,duration:0,ease:"power2.inOut"})}c();function p(v){const y=document.querySelector(v);y.classList.remove("visually-hidden"),ie.fromTo(y,{opacity:0,scale:.8,y:20},{opacity:1,scale:1,y:0,duration:.4,ease:"power2.out"}),document.querySelector(".overlay-button-container").classList.remove("visually-hidden"),ie.fromTo(".overlay-button-container",{opacity:0,y:200},{opacity:1,y:0,duration:.4,delay:1,ease:"power2.out"})}function T(v){v!==".floor3-ui-container .ui-tip"&&(g=!0);const y=document.querySelector(v);ie.to(y,{opacity:0,scale:.8,y:20,duration:.3,stagger:.06,ease:"power2.in",onComplete:()=>{y.classList.add("visually-hidden")}}),ie.to(".overlay-button-container",{opacity:0,duration:.4,ease:"power2.out",onComplete:()=>{document.querySelector(".overlay-button-container").classList.add("visually-hidden")}})}return{group:t,toggleOverlayOpacity:l,overlayOff:u,rotateFloor:m,showUI:p,hideUI:T}}var os={},sl,sh;function FM(){return sh||(sh=1,sl=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),sl}var ol={},ir={},oh;function Br(){if(oh)return ir;oh=1;let r;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return ir.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},ir.getSymbolTotalCodewords=function(n){return e[n]},ir.getBCHDigit=function(t){let n=0;for(;t!==0;)n++,t>>>=1;return n},ir.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');r=n},ir.isKanjiModeEnabled=function(){return typeof r<"u"},ir.toSJIS=function(n){return r(n)},ir}var al={},ah;function xf(){return ah||(ah=1,(function(r){r.L={bit:1},r.M={bit:0},r.Q={bit:3},r.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw new Error("Unknown EC Level: "+t)}}r.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},r.from=function(n,i){if(r.isValid(n))return n;try{return e(n)}catch{return i}}})(al)),al}var cl,ch;function OM(){if(ch)return cl;ch=1;function r(){this.buffer=[],this.length=0}return r.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},cl=r,cl}var ll,lh;function BM(){if(lh)return ll;lh=1;function r(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return r.prototype.set=function(e,t,n,i){const s=e*this.size+t;this.data[s]=n,i&&(this.reservedBit[s]=!0)},r.prototype.get=function(e,t){return this.data[e*this.size+t]},r.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},r.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},ll=r,ll}var ul={},uh;function kM(){return uh||(uh=1,(function(r){const e=Br().getSymbolSize;r.getRowColCoords=function(n){if(n===1)return[];const i=Math.floor(n/7)+2,s=e(n),o=s===145?26:Math.ceil((s-13)/(2*i-2))*2,a=[s-7];for(let c=1;c<i-1;c++)a[c]=a[c-1]-o;return a.push(6),a.reverse()},r.getPositions=function(n){const i=[],s=r.getRowColCoords(n),o=s.length;for(let a=0;a<o;a++)for(let c=0;c<o;c++)a===0&&c===0||a===0&&c===o-1||a===o-1&&c===0||i.push([s[a],s[c]]);return i}})(ul)),ul}var fl={},fh;function zM(){if(fh)return fl;fh=1;const r=Br().getSymbolSize,e=7;return fl.getPositions=function(n){const i=r(n);return[[0,0],[i-e,0],[0,i-e]]},fl}var dl={},dh;function VM(){return dh||(dh=1,(function(r){r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};r.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},r.from=function(i){return r.isValid(i)?parseInt(i,10):void 0},r.getPenaltyN1=function(i){const s=i.size;let o=0,a=0,c=0,l=null,u=null;for(let f=0;f<s;f++){a=c=0,l=u=null;for(let d=0;d<s;d++){let h=i.get(f,d);h===l?a++:(a>=5&&(o+=e.N1+(a-5)),l=h,a=1),h=i.get(d,f),h===u?c++:(c>=5&&(o+=e.N1+(c-5)),u=h,c=1)}a>=5&&(o+=e.N1+(a-5)),c>=5&&(o+=e.N1+(c-5))}return o},r.getPenaltyN2=function(i){const s=i.size;let o=0;for(let a=0;a<s-1;a++)for(let c=0;c<s-1;c++){const l=i.get(a,c)+i.get(a,c+1)+i.get(a+1,c)+i.get(a+1,c+1);(l===4||l===0)&&o++}return o*e.N2},r.getPenaltyN3=function(i){const s=i.size;let o=0,a=0,c=0;for(let l=0;l<s;l++){a=c=0;for(let u=0;u<s;u++)a=a<<1&2047|i.get(l,u),u>=10&&(a===1488||a===93)&&o++,c=c<<1&2047|i.get(u,l),u>=10&&(c===1488||c===93)&&o++}return o*e.N3},r.getPenaltyN4=function(i){let s=0;const o=i.data.length;for(let c=0;c<o;c++)s+=i.data[c];return Math.abs(Math.ceil(s*100/o/5)-10)*e.N4};function t(n,i,s){switch(n){case r.Patterns.PATTERN000:return(i+s)%2===0;case r.Patterns.PATTERN001:return i%2===0;case r.Patterns.PATTERN010:return s%3===0;case r.Patterns.PATTERN011:return(i+s)%3===0;case r.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(s/3))%2===0;case r.Patterns.PATTERN101:return i*s%2+i*s%3===0;case r.Patterns.PATTERN110:return(i*s%2+i*s%3)%2===0;case r.Patterns.PATTERN111:return(i*s%3+(i+s)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}r.applyMask=function(i,s){const o=s.size;for(let a=0;a<o;a++)for(let c=0;c<o;c++)s.isReserved(c,a)||s.xor(c,a,t(i,c,a))},r.getBestMask=function(i,s){const o=Object.keys(r.Patterns).length;let a=0,c=1/0;for(let l=0;l<o;l++){s(l),r.applyMask(l,i);const u=r.getPenaltyN1(i)+r.getPenaltyN2(i)+r.getPenaltyN3(i)+r.getPenaltyN4(i);r.applyMask(l,i),u<c&&(c=u,a=l)}return a}})(dl)),dl}var Sa={},hh;function nm(){if(hh)return Sa;hh=1;const r=xf(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Sa.getBlocksCount=function(i,s){switch(s){case r.L:return e[(i-1)*4+0];case r.M:return e[(i-1)*4+1];case r.Q:return e[(i-1)*4+2];case r.H:return e[(i-1)*4+3];default:return}},Sa.getTotalCodewordsCount=function(i,s){switch(s){case r.L:return t[(i-1)*4+0];case r.M:return t[(i-1)*4+1];case r.Q:return t[(i-1)*4+2];case r.H:return t[(i-1)*4+3];default:return}},Sa}var hl={},Xs={},ph;function HM(){if(ph)return Xs;ph=1;const r=new Uint8Array(512),e=new Uint8Array(256);return(function(){let n=1;for(let i=0;i<255;i++)r[i]=n,e[n]=i,n<<=1,n&256&&(n^=285);for(let i=255;i<512;i++)r[i]=r[i-255]})(),Xs.log=function(n){if(n<1)throw new Error("log("+n+")");return e[n]},Xs.exp=function(n){return r[n]},Xs.mul=function(n,i){return n===0||i===0?0:r[e[n]+e[i]]},Xs}var mh;function GM(){return mh||(mh=1,(function(r){const e=HM();r.mul=function(n,i){const s=new Uint8Array(n.length+i.length-1);for(let o=0;o<n.length;o++)for(let a=0;a<i.length;a++)s[o+a]^=e.mul(n[o],i[a]);return s},r.mod=function(n,i){let s=new Uint8Array(n);for(;s.length-i.length>=0;){const o=s[0];for(let c=0;c<i.length;c++)s[c]^=e.mul(i[c],o);let a=0;for(;a<s.length&&s[a]===0;)a++;s=s.slice(a)}return s},r.generateECPolynomial=function(n){let i=new Uint8Array([1]);for(let s=0;s<n;s++)i=r.mul(i,new Uint8Array([1,e.exp(s)]));return i}})(hl)),hl}var pl,gh;function WM(){if(gh)return pl;gh=1;const r=GM();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(n){this.degree=n,this.genPoly=r.generateECPolynomial(this.degree)},e.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(n.length+this.degree);i.set(n);const s=r.mod(i,this.genPoly),o=this.degree-s.length;if(o>0){const a=new Uint8Array(this.degree);return a.set(s,o),a}return s},pl=e,pl}var ml={},gl={},xl={},xh;function im(){return xh||(xh=1,xl.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),xl}var fi={},_h;function rm(){if(_h)return fi;_h=1;const r="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;fi.KANJI=new RegExp(t,"g"),fi.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),fi.BYTE=new RegExp(n,"g"),fi.NUMERIC=new RegExp(r,"g"),fi.ALPHANUMERIC=new RegExp(e,"g");const i=new RegExp("^"+t+"$"),s=new RegExp("^"+r+"$"),o=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return fi.testKanji=function(c){return i.test(c)},fi.testNumeric=function(c){return s.test(c)},fi.testAlphanumeric=function(c){return o.test(c)},fi}var vh;function kr(){return vh||(vh=1,(function(r){const e=im(),t=rm();r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},r.MIXED={bit:-1},r.getCharCountIndicator=function(s,o){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?s.ccBits[0]:o<27?s.ccBits[1]:s.ccBits[2]},r.getBestModeForData=function(s){return t.testNumeric(s)?r.NUMERIC:t.testAlphanumeric(s)?r.ALPHANUMERIC:t.testKanji(s)?r.KANJI:r.BYTE},r.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},r.isValid=function(s){return s&&s.bit&&s.ccBits};function n(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw new Error("Unknown mode: "+i)}}r.from=function(s,o){if(r.isValid(s))return s;try{return n(s)}catch{return o}}})(gl)),gl}var yh;function XM(){return yh||(yh=1,(function(r){const e=Br(),t=nm(),n=xf(),i=kr(),s=im(),o=7973,a=e.getBCHDigit(o);function c(d,h,g){for(let _=1;_<=40;_++)if(h<=r.getCapacity(_,g,d))return _}function l(d,h){return i.getCharCountIndicator(d,h)+4}function u(d,h){let g=0;return d.forEach(function(_){const m=l(_.mode,h);g+=m+_.getBitsLength()}),g}function f(d,h){for(let g=1;g<=40;g++)if(u(d,g)<=r.getCapacity(g,h,i.MIXED))return g}r.from=function(h,g){return s.isValid(h)?parseInt(h,10):g},r.getCapacity=function(h,g,_){if(!s.isValid(h))throw new Error("Invalid QR Code version");typeof _>"u"&&(_=i.BYTE);const m=e.getSymbolTotalCodewords(h),p=t.getTotalCodewordsCount(h,g),T=(m-p)*8;if(_===i.MIXED)return T;const v=T-l(_,h);switch(_){case i.NUMERIC:return Math.floor(v/10*3);case i.ALPHANUMERIC:return Math.floor(v/11*2);case i.KANJI:return Math.floor(v/13);case i.BYTE:default:return Math.floor(v/8)}},r.getBestVersionForData=function(h,g){let _;const m=n.from(g,n.M);if(Array.isArray(h)){if(h.length>1)return f(h,m);if(h.length===0)return 1;_=h[0]}else _=h;return c(_.mode,_.getLength(),m)},r.getEncodedBits=function(h){if(!s.isValid(h)||h<7)throw new Error("Invalid QR Code version");let g=h<<12;for(;e.getBCHDigit(g)-a>=0;)g^=o<<e.getBCHDigit(g)-a;return h<<12|g}})(ml)),ml}var _l={},bh;function qM(){if(bh)return _l;bh=1;const r=Br(),e=1335,t=21522,n=r.getBCHDigit(e);return _l.getEncodedBits=function(s,o){const a=s.bit<<3|o;let c=a<<10;for(;r.getBCHDigit(c)-n>=0;)c^=e<<r.getBCHDigit(c)-n;return(a<<10|c)^t},_l}var vl={},yl,Mh;function YM(){if(Mh)return yl;Mh=1;const r=kr();function e(t){this.mode=r.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let i,s,o;for(i=0;i+3<=this.data.length;i+=3)s=this.data.substr(i,3),o=parseInt(s,10),n.put(o,10);const a=this.data.length-i;a>0&&(s=this.data.substr(i),o=parseInt(s,10),n.put(o,a*3+1))},yl=e,yl}var bl,Sh;function KM(){if(Sh)return bl;Sh=1;const r=kr(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(n){this.mode=r.ALPHANUMERIC,this.data=n}return t.getBitsLength=function(i){return 11*Math.floor(i/2)+6*(i%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let s;for(s=0;s+2<=this.data.length;s+=2){let o=e.indexOf(this.data[s])*45;o+=e.indexOf(this.data[s+1]),i.put(o,11)}this.data.length%2&&i.put(e.indexOf(this.data[s]),6)},bl=t,bl}var Ml,Th;function jM(){if(Th)return Ml;Th=1;const r=kr();function e(t){this.mode=r.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(n){return n*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let n=0,i=this.data.length;n<i;n++)t.put(this.data[n],8)},Ml=e,Ml}var Sl,Eh;function $M(){if(Eh)return Sl;Eh=1;const r=kr(),e=Br();function t(n){this.mode=r.KANJI,this.data=n}return t.getBitsLength=function(i){return i*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let i;for(i=0;i<this.data.length;i++){let s=e.toSJIS(this.data[i]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[i]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),n.put(s,13)}},Sl=t,Sl}var Tl={exports:{}},wh;function ZM(){return wh||(wh=1,(function(r){var e={single_source_shortest_paths:function(t,n,i){var s={},o={};o[n]=0;var a=e.PriorityQueue.make();a.push(n,0);for(var c,l,u,f,d,h,g,_,m;!a.empty();){c=a.pop(),l=c.value,f=c.cost,d=t[l]||{};for(u in d)d.hasOwnProperty(u)&&(h=d[u],g=f+h,_=o[u],m=typeof o[u]>"u",(m||_>g)&&(o[u]=g,a.push(u,g),s[u]=l))}if(typeof i<"u"&&typeof o[i]>"u"){var p=["Could not find a path from ",n," to ",i,"."].join("");throw new Error(p)}return s},extract_shortest_path_from_predecessor_list:function(t,n){for(var i=[],s=n;s;)i.push(s),t[s],s=t[s];return i.reverse(),i},find_path:function(t,n,i){var s=e.single_source_shortest_paths(t,n,i);return e.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(t){var n=e.PriorityQueue,i={},s;t=t||{};for(s in n)n.hasOwnProperty(s)&&(i[s]=n[s]);return i.queue=[],i.sorter=t.sorter||n.default_sorter,i},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){var i={value:t,cost:n};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};r.exports=e})(Tl)),Tl.exports}var Ah;function JM(){return Ah||(Ah=1,(function(r){const e=kr(),t=YM(),n=KM(),i=jM(),s=$M(),o=rm(),a=Br(),c=ZM();function l(p){return unescape(encodeURIComponent(p)).length}function u(p,T,v){const y=[];let R;for(;(R=p.exec(v))!==null;)y.push({data:R[0],index:R.index,mode:T,length:R[0].length});return y}function f(p){const T=u(o.NUMERIC,e.NUMERIC,p),v=u(o.ALPHANUMERIC,e.ALPHANUMERIC,p);let y,R;return a.isKanjiModeEnabled()?(y=u(o.BYTE,e.BYTE,p),R=u(o.KANJI,e.KANJI,p)):(y=u(o.BYTE_KANJI,e.BYTE,p),R=[]),T.concat(v,y,R).sort(function(E,C){return E.index-C.index}).map(function(E){return{data:E.data,mode:E.mode,length:E.length}})}function d(p,T){switch(T){case e.NUMERIC:return t.getBitsLength(p);case e.ALPHANUMERIC:return n.getBitsLength(p);case e.KANJI:return s.getBitsLength(p);case e.BYTE:return i.getBitsLength(p)}}function h(p){return p.reduce(function(T,v){const y=T.length-1>=0?T[T.length-1]:null;return y&&y.mode===v.mode?(T[T.length-1].data+=v.data,T):(T.push(v),T)},[])}function g(p){const T=[];for(let v=0;v<p.length;v++){const y=p[v];switch(y.mode){case e.NUMERIC:T.push([y,{data:y.data,mode:e.ALPHANUMERIC,length:y.length},{data:y.data,mode:e.BYTE,length:y.length}]);break;case e.ALPHANUMERIC:T.push([y,{data:y.data,mode:e.BYTE,length:y.length}]);break;case e.KANJI:T.push([y,{data:y.data,mode:e.BYTE,length:l(y.data)}]);break;case e.BYTE:T.push([{data:y.data,mode:e.BYTE,length:l(y.data)}])}}return T}function _(p,T){const v={},y={start:{}};let R=["start"];for(let b=0;b<p.length;b++){const E=p[b],C=[];for(let M=0;M<E.length;M++){const x=E[M],A=""+b+M;C.push(A),v[A]={node:x,lastCount:0},y[A]={};for(let L=0;L<R.length;L++){const F=R[L];v[F]&&v[F].node.mode===x.mode?(y[F][A]=d(v[F].lastCount+x.length,x.mode)-d(v[F].lastCount,x.mode),v[F].lastCount+=x.length):(v[F]&&(v[F].lastCount=x.length),y[F][A]=d(x.length,x.mode)+4+e.getCharCountIndicator(x.mode,T))}}R=C}for(let b=0;b<R.length;b++)y[R[b]].end=0;return{map:y,table:v}}function m(p,T){let v;const y=e.getBestModeForData(p);if(v=e.from(T,y),v!==e.BYTE&&v.bit<y.bit)throw new Error('"'+p+'" cannot be encoded with mode '+e.toString(v)+`.
 Suggested mode is: `+e.toString(y));switch(v===e.KANJI&&!a.isKanjiModeEnabled()&&(v=e.BYTE),v){case e.NUMERIC:return new t(p);case e.ALPHANUMERIC:return new n(p);case e.KANJI:return new s(p);case e.BYTE:return new i(p)}}r.fromArray=function(T){return T.reduce(function(v,y){return typeof y=="string"?v.push(m(y,null)):y.data&&v.push(m(y.data,y.mode)),v},[])},r.fromString=function(T,v){const y=f(T,a.isKanjiModeEnabled()),R=g(y),b=_(R,v),E=c.find_path(b.map,"start","end"),C=[];for(let M=1;M<E.length-1;M++)C.push(b.table[E[M]].node);return r.fromArray(h(C))},r.rawSplit=function(T){return r.fromArray(f(T,a.isKanjiModeEnabled()))}})(vl)),vl}var Rh;function QM(){if(Rh)return ol;Rh=1;const r=Br(),e=xf(),t=OM(),n=BM(),i=kM(),s=zM(),o=VM(),a=nm(),c=WM(),l=XM(),u=qM(),f=kr(),d=JM();function h(b,E){const C=b.size,M=s.getPositions(E);for(let x=0;x<M.length;x++){const A=M[x][0],L=M[x][1];for(let F=-1;F<=7;F++)if(!(A+F<=-1||C<=A+F))for(let N=-1;N<=7;N++)L+N<=-1||C<=L+N||(F>=0&&F<=6&&(N===0||N===6)||N>=0&&N<=6&&(F===0||F===6)||F>=2&&F<=4&&N>=2&&N<=4?b.set(A+F,L+N,!0,!0):b.set(A+F,L+N,!1,!0))}}function g(b){const E=b.size;for(let C=8;C<E-8;C++){const M=C%2===0;b.set(C,6,M,!0),b.set(6,C,M,!0)}}function _(b,E){const C=i.getPositions(E);for(let M=0;M<C.length;M++){const x=C[M][0],A=C[M][1];for(let L=-2;L<=2;L++)for(let F=-2;F<=2;F++)L===-2||L===2||F===-2||F===2||L===0&&F===0?b.set(x+L,A+F,!0,!0):b.set(x+L,A+F,!1,!0)}}function m(b,E){const C=b.size,M=l.getEncodedBits(E);let x,A,L;for(let F=0;F<18;F++)x=Math.floor(F/3),A=F%3+C-8-3,L=(M>>F&1)===1,b.set(x,A,L,!0),b.set(A,x,L,!0)}function p(b,E,C){const M=b.size,x=u.getEncodedBits(E,C);let A,L;for(A=0;A<15;A++)L=(x>>A&1)===1,A<6?b.set(A,8,L,!0):A<8?b.set(A+1,8,L,!0):b.set(M-15+A,8,L,!0),A<8?b.set(8,M-A-1,L,!0):A<9?b.set(8,15-A-1+1,L,!0):b.set(8,15-A-1,L,!0);b.set(M-8,8,1,!0)}function T(b,E){const C=b.size;let M=-1,x=C-1,A=7,L=0;for(let F=C-1;F>0;F-=2)for(F===6&&F--;;){for(let N=0;N<2;N++)if(!b.isReserved(x,F-N)){let X=!1;L<E.length&&(X=(E[L]>>>A&1)===1),b.set(x,F-N,X),A--,A===-1&&(L++,A=7)}if(x+=M,x<0||C<=x){x-=M,M=-M;break}}}function v(b,E,C){const M=new t;C.forEach(function(N){M.put(N.mode.bit,4),M.put(N.getLength(),f.getCharCountIndicator(N.mode,b)),N.write(M)});const x=r.getSymbolTotalCodewords(b),A=a.getTotalCodewordsCount(b,E),L=(x-A)*8;for(M.getLengthInBits()+4<=L&&M.put(0,4);M.getLengthInBits()%8!==0;)M.putBit(0);const F=(L-M.getLengthInBits())/8;for(let N=0;N<F;N++)M.put(N%2?17:236,8);return y(M,b,E)}function y(b,E,C){const M=r.getSymbolTotalCodewords(E),x=a.getTotalCodewordsCount(E,C),A=M-x,L=a.getBlocksCount(E,C),F=M%L,N=L-F,X=Math.floor(M/L),H=Math.floor(A/L),Z=H+1,q=X-H,ee=new c(q);let I=0;const fe=new Array(L),Ie=new Array(L);let He=0;const je=new Uint8Array(b.buffer);for(let Ee=0;Ee<L;Ee++){const we=Ee<N?H:Z;fe[Ee]=je.slice(I,I+we),Ie[Ee]=ee.encode(fe[Ee]),I+=we,He=Math.max(He,we)}const Qe=new Uint8Array(M);let K=0,j,ae;for(j=0;j<He;j++)for(ae=0;ae<L;ae++)j<fe[ae].length&&(Qe[K++]=fe[ae][j]);for(j=0;j<q;j++)for(ae=0;ae<L;ae++)Qe[K++]=Ie[ae][j];return Qe}function R(b,E,C,M){let x;if(Array.isArray(b))x=d.fromArray(b);else if(typeof b=="string"){let X=E;if(!X){const H=d.rawSplit(b);X=l.getBestVersionForData(H,C)}x=d.fromString(b,X||40)}else throw new Error("Invalid data");const A=l.getBestVersionForData(x,C);if(!A)throw new Error("The amount of data is too big to be stored in a QR Code");if(!E)E=A;else if(E<A)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+A+`.
`);const L=v(E,C,x),F=r.getSymbolSize(E),N=new n(F);return h(N,E),g(N),_(N,E),p(N,C,0),E>=7&&m(N,E),T(N,L),isNaN(M)&&(M=o.getBestMask(N,p.bind(null,N,C))),o.applyMask(M,N),p(N,C,M),{modules:N,version:E,errorCorrectionLevel:C,maskPattern:M,segments:x}}return ol.create=function(E,C){if(typeof E>"u"||E==="")throw new Error("No input text");let M=e.M,x,A;return typeof C<"u"&&(M=e.from(C.errorCorrectionLevel,e.M),x=l.from(C.version),A=o.from(C.maskPattern),C.toSJISFunc&&r.setToSJISFunction(C.toSJISFunc)),R(E,x,M,A)},ol}var El={},wl={},Ch;function sm(){return Ch||(Ch=1,(function(r){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let n=t.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+t);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(s){return[s,s]}))),n.length===6&&n.push("F","F");const i=parseInt(n.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+n.slice(0,6).join("")}}r.getOptions=function(n){n||(n={}),n.color||(n.color={});const i=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,s=n.width&&n.width>=21?n.width:void 0,o=n.scale||4;return{width:s,scale:s?4:o,margin:i,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},r.getScale=function(n,i){return i.width&&i.width>=n+i.margin*2?i.width/(n+i.margin*2):i.scale},r.getImageWidth=function(n,i){const s=r.getScale(n,i);return Math.floor((n+i.margin*2)*s)},r.qrToImageData=function(n,i,s){const o=i.modules.size,a=i.modules.data,c=r.getScale(o,s),l=Math.floor((o+s.margin*2)*c),u=s.margin*c,f=[s.color.light,s.color.dark];for(let d=0;d<l;d++)for(let h=0;h<l;h++){let g=(d*l+h)*4,_=s.color.light;if(d>=u&&h>=u&&d<l-u&&h<l-u){const m=Math.floor((d-u)/c),p=Math.floor((h-u)/c);_=f[a[m*o+p]?1:0]}n[g++]=_.r,n[g++]=_.g,n[g++]=_.b,n[g]=_.a}}})(wl)),wl}var Ph;function eS(){return Ph||(Ph=1,(function(r){const e=sm();function t(i,s,o){i.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=o,s.width=o,s.style.height=o+"px",s.style.width=o+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}r.render=function(s,o,a){let c=a,l=o;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),o||(l=n()),c=e.getOptions(c);const u=e.getImageWidth(s.modules.size,c),f=l.getContext("2d"),d=f.createImageData(u,u);return e.qrToImageData(d.data,s,c),t(f,l,u),f.putImageData(d,0,0),l},r.renderToDataURL=function(s,o,a){let c=a;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),c||(c={});const l=r.render(s,o,c),u=c.type||"image/png",f=c.rendererOpts||{};return l.toDataURL(u,f.quality)}})(El)),El}var Al={},Lh;function tS(){if(Lh)return Al;Lh=1;const r=sm();function e(i,s){const o=i.a/255,a=s+'="'+i.hex+'"';return o<1?a+" "+s+'-opacity="'+o.toFixed(2).slice(1)+'"':a}function t(i,s,o){let a=i+s;return typeof o<"u"&&(a+=" "+o),a}function n(i,s,o){let a="",c=0,l=!1,u=0;for(let f=0;f<i.length;f++){const d=Math.floor(f%s),h=Math.floor(f/s);!d&&!l&&(l=!0),i[f]?(u++,f>0&&d>0&&i[f-1]||(a+=l?t("M",d+o,.5+h+o):t("m",c,0),c=0,l=!1),d+1<s&&i[f+1]||(a+=t("h",u),u=0)):c++}return a}return Al.render=function(s,o,a){const c=r.getOptions(o),l=s.modules.size,u=s.modules.data,f=l+c.margin*2,d=c.color.light.a?"<path "+e(c.color.light,"fill")+' d="M0 0h'+f+"v"+f+'H0z"/>':"",h="<path "+e(c.color.dark,"stroke")+' d="'+n(u,l,c.margin)+'"/>',g='viewBox="0 0 '+f+" "+f+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+g+' shape-rendering="crispEdges">'+d+h+`</svg>
`;return typeof a=="function"&&a(null,m),m},Al}var Ih;function nS(){if(Ih)return os;Ih=1;const r=FM(),e=QM(),t=eS(),n=tS();function i(s,o,a,c,l){const u=[].slice.call(arguments,1),f=u.length,d=typeof u[f-1]=="function";if(!d&&!r())throw new Error("Callback required as last argument");if(d){if(f<2)throw new Error("Too few arguments provided");f===2?(l=a,a=o,o=c=void 0):f===3&&(o.getContext&&typeof l>"u"?(l=c,c=void 0):(l=c,c=a,a=o,o=void 0))}else{if(f<1)throw new Error("Too few arguments provided");return f===1?(a=o,o=c=void 0):f===2&&!o.getContext&&(c=a,a=o,o=void 0),new Promise(function(h,g){try{const _=e.create(a,c);h(s(_,o,c))}catch(_){g(_)}})}try{const h=e.create(a,c);l(null,s(h,o,c))}catch(h){l(h)}}return os.create=e.create,os.toCanvas=i.bind(null,t.render),os.toDataURL=i.bind(null,t.renderToDataURL),os.toString=i.bind(null,function(s,o,a){return n.render(s,a)}),os}var iS=nS();const rS=xm(iS);ie.registerPlugin(Ke);const Dh=new Audio("./audio/task-complete.mp3"),Uh=new Audio("./audio/task-complete-all.mp3");let _f=!1,Rl=0;const sS=["Hey, some people came in to test out your designed car! Lets make some adjustments to the model. It feels a bit cramped here in the driver seat, could you move it back a bit?","The driver seat is way better now! But I think there's not enough leg - room for the backseat now. Lets change that!","Alright, that's way better. I would like to have the dashboard a bit higher though. Can you raise it a little? Not too much though.","Well done! People love your car! If you want to continue adjusting DigiPHY, feel free to do so."],no=[{brief:"Move the driver seat back",status:"open",condition:'objects["chair-1"].position.x < 3'},{brief:"Move the left-side backseat back",status:"locked",condition:'objects["chair-3"].position.x < 3'},{brief:"Raise dashboard a little bit",status:"locked",condition:"objects['dashboard'][0].position.y > 0.3 && objects['dashboard'][0].position.y < 0.8"}],Ba={flag:!1};function oS(r){const e=new Or,t=new rn;r.add(t);const n=`${window.location.origin}/around-digiphy/mobile.html`;rS.toCanvas(document.getElementById("qrcode"),n,function(c){c&&console.error(c)});function i(){const c=new Ki().load("baked/floor-4-a.jpg");c.flipY=!1,c.colorSpace=Pt;const l=new dn({map:c});e.load("floors/floor-4-a.glb",u=>{const f=u.scene;f.position.set(0,0,0),f.rotateY(Math.PI),f.traverse(h=>{h.isMesh&&(h.material=l,h.castShadow=!0,h.receiveShadow=!0)});const d=f.getObjectByName("glass009");d&&(d.material=d.material.clone(),d.material.transparent=!0,d.material.opacity=.6,d.material.color.setHex(15923711)),r.add(f)}),e.load("floors/floor-4-c.glb",u=>{const f=u.scene;f.position.set(0,0,0),f.rotateY(Math.PI),r.add(f)})}i();const s=document.querySelector(".qr-wrapper");function o(){s.classList.remove("visually-hidden"),ie.fromTo(s,{opacity:0,scale:.8,y:20},{opacity:1,scale:1,y:0,duration:.3,ease:"power2.out",onComplete:()=>{s.classList.remove("visually-hidden")}})}function a(){ie.to(s,{opacity:0,scale:.8,y:20,duration:.3,stagger:.06,ease:"power2.in",onComplete:()=>{s.classList.add("visually-hidden")}})}return{group:t,showQR:o,hideQR:a}}const Ar=document.querySelector(".qr-wrapper");document.getElementById("qrcode");document.querySelector("#qr-wrapper-close").addEventListener("click",om);const Za=document.querySelectorAll(".qr-wrapper div"),Ja=document.querySelector(".qr-wrapper > svg");let Qa=!0;function om(){Qa&&(Qa=!1,ie.timeline().to(Za,{opacity:0,duration:.2},0).to(Ar,{top:"unset",bottom:"-0.6rem",left:"9.7rem",width:"3rem",height:"3rem",padding:"0rem",duration:1,ease:"power3.out"},"<80%").to(Ar,{duration:.1,onComplete:()=>{Ar.classList.add("qr-small"),Za.forEach(e=>{e.classList.add("visually-hidden")}),Ja.classList.remove("visually-hidden")}},"<").to(Ja,{opacity:1,duration:.4,onComplete:()=>{Ar.addEventListener("click",am)}}))}function am(){if(Qa)return;Qa=!0,Ar.classList.remove("qr-small"),ie.timeline().to(Ja,{opacity:0,duration:.2,onComplete:()=>{Ja.classList.add("visually-hidden")}},0).to(Ar,{bottom:"0%",left:"50%",width:"45rem",height:"20rem",color:"black",padding:"4rem",duration:1,ease:"power3.out",onComplete:()=>{Za.forEach(e=>{e.classList.remove("visually-hidden")})}},"-=0").to(Za,{opacity:1,duration:.5,onComplete:()=>{Ar.removeEventListener("click",am)}})}function Nh(){no.forEach((r,e)=>{const t=document.querySelector(`#ui-task-${e}`);t.textContent=r.brief}),_f=!0}let Fh=!1;function Oh(r){if(!_f)return;let e=!0;if(no.forEach((t,n)=>{try{if(t.status==="locked"){e=!1;return}const s=new Function("objects","return "+t.condition)(r),o=document.querySelector(`#ui-task-${n}`);t.status==="open"?(o.classList.remove("visually-hidden"),o.classList.add("ui-task-open"),s?(t.status="complete",o.classList.remove("ui-task-open"),o.classList.add("ui-task-complete"),Rl+=1,ie.to(`#ui-task-${n}`,{scale:1.06,duration:.2,ease:"power2.out",backgroundColor:"#74b6efff"}),ie.to(`#ui-task-${n}`,{scale:1,duration:.5,delay:.2,ease:"back.out(1.7)",backgroundColor:"#4f4f4f54"}),Dh.currentTime=0,Dh.play(),no[n+1]&&no[n+1].status==="locked"&&(no[n+1].status="open",ie.from(`#ui-task-${n+1}`,{opacity:0,x:100,duration:.5,ease:"power3.out"}))):e=!1):t.status,document.querySelector(".task-counter").textContent=Rl,document.querySelector(".task-header > .ui-swaptext").textContent=sS[Rl]}catch(i){console.error("Task condition error:",t.condition,i),e=!1}}),e){const t=document.querySelectorAll(".ui-task");if(Fh)return;Fh=!0,setTimeout(()=>{ie.to(t,{scale:1.06,duration:.2,ease:"power2.out",stagger:.2,backgroundColor:"#74b6efff",onStart:()=>{}}),ie.to(t,{scale:1,duration:.5,delay:.2,ease:"back.out(1.7)",stagger:.2,backgroundColor:"#4f4f4f54"}),Uh.currentTime=0,Uh.play()},1e3)}}function Fu(){if(!_f||Ba.flag===!1)return;const r=document.querySelector(".floor4-ui-container");r.classList.remove("visually-hidden"),ie.fromTo(r,{opacity:0,scale:.8,y:20},{opacity:1,duration:.5,scale:1,y:0,ease:"power2.out",onComplete:()=>{r.classList.remove("visually-hidden")}})}function Bh(){const r=document.querySelector(".floor4-ui-container");ie.to(r,{opacity:0,duration:.5,scale:.8,y:20,ease:"power2.out",onComplete(){r.classList.add("visually-hidden")}})}ie.registerPlugin(Ke);function aS(r){const e=new Or,t=new rn;let n=new rn;r.add(t);function i(){const d=new Ki().load("baked/floor-5-a.jpg");d.flipY=!1,d.colorSpace=Pt;const h=new dn({map:d});e.load("floors/floor-5-a.glb",g=>{const _=g.scene;_.position.set(0,0,0),_.rotateY(Math.PI),_.traverse(p=>{p.isMesh&&(p.material=h,p.castShadow=!0,p.receiveShadow=!0)});const m=_.getObjectByName("glass001");m&&(m.material=m.material.clone(),m.material.transparent=!0,m.material.opacity=.6,m.material.color.setHex(15923711)),n.add(_)}),e.load("floors/floor-5-c.glb",g=>{const _=g.scene;_.position.set(0,0,0),_.rotateY(Math.PI),n.add(_)})}r.add(n),i();let s=!1,o,a;function c(d,h){a=d,h!==o&&u(),h!==-1&&(o=h,55<=d&&d<63&&s===!1&&l(),(55>d||d>63&&s===!0)&&u())}function l(){const d=document.querySelector(`#ui-panel-5-${o}`);d&&(d.classList.remove("visually-hidden"),ie.fromTo(d,{opacity:0,scale:.8,y:20},{opacity:1,scale:1,y:0,duration:.4,stagger:.08,ease:"power2.out"}),s=!0)}function u(){const d=document.querySelector(`#ui-panel-5-${o}`);d&&s&&(ie.to(d,{opacity:0,scale:.8,y:20,duration:.3,stagger:.06,ease:"power2.in",onComplete:()=>{d.classList.add("visually-hidden")}}),s=!1)}function f(d){if(!n)return;const h=Po.degToRad(d);ie.to(n.rotation,{y:h,duration:0,ease:"power2.inOut"})}return{group:t,checkHeight:c,rotateFloor:f}}const ec=document.querySelector(".floor5-ui-container > .ui-tip");function cS(){ec.classList.remove("visually-hidden"),ie.fromTo(ec,{opacity:0,scale:.8,y:20},{opacity:1,scale:1,y:0,duration:.4,stagger:.08,ease:"power2.out"})}function kh(){ie.to(ec,{opacity:0,scale:.8,y:20,duration:.3,stagger:.06,ease:"power2.in",onComplete:()=>{ec.classList.add("visually-hidden")}})}let Ou=!1;const zh=new Audio("./audio/ui-1.mp3");function lS(r){const e=new Or,t=new rn;r.add(t);function n(){const i=new Ki().load("baked/floor-6-a.jpg");i.flipY=!1,i.colorSpace=Pt;const s=new dn({map:i});e.load("floors/floor-6-a.glb",o=>{const a=o.scene;a.position.set(0,0,0),a.rotateY(Math.PI),a.traverse(c=>{c.isMesh&&(c.material=s,c.castShadow=!0,c.receiveShadow=!0)}),r.add(a)}),e.load("floors/balcony.glb",o=>{const a=o.scene;a.position.set(0,0,0),a.rotateY(Math.PI),a.traverse(c=>{c.name&&c.name.toLowerCase().startsWith("balkons")&&(Array.isArray(c.material)?c.material:[c.material]).forEach(u=>{u&&(u.transparent=!0,u.opacity=.2,u.roughness=.1)})}),r.add(a)}),e.load("floors/floor-6-c.glb",o=>{const a=o.scene;a.position.set(0,0,0),a.rotateY(Math.PI),a.traverse(c=>{if(c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0),c.name&&c.name.toLowerCase().startsWith("light")&&(Array.isArray(c.material)?c.material:[c.material]).forEach(u=>{u&&(u.transparent=!0,u.opacity=.1,u.roughness=1,u.color.setHex(12255487))}),c.name&&c.name.toLowerCase().startsWith("core")){const l=Math.random()*5;ie.fromTo(c.rotation,{z:1.5},{z:.5,duration:8,repeat:-1,yoyo:!0,yoyoEase:"power3.inOut",delay:l})}}),r.add(a)})}n()}function uS(){const r=document.querySelector(".floor6-ui-container");r.classList.remove("visually-hidden"),ie.fromTo(r,{opacity:0,scale:.8,y:20},{opacity:1,scale:1,y:0,duration:.4,stagger:.08,ease:"power2.out"}),Ou=!0}function fS(){const r=document.querySelector(".floor6-ui-container");Ou&&(ie.to(r,{opacity:0,scale:.8,y:20,duration:.3,stagger:.06,ease:"power2.in",onComplete:()=>{r.classList.add("visually-hidden")}}),Ou=!1)}document.querySelector("#ui-panel-6-2 > button").addEventListener("click",()=>{ie.to("#ui-panel-6-2",{opacity:0,scale:.8,y:20,duration:.3,ease:"power2.in",onComplete:()=>{document.querySelector("#ui-panel-6-2").classList.add("visually-hidden")}}),ie.from("#ui-panel-6-1",{opacity:0,scale:.8,y:20,duration:.3,delay:.3,ease:"power2.in",onStart:()=>{zh.currentTime=0,zh.play,document.querySelector("#ui-panel-6-1").classList.remove("visually-hidden")}})});document.querySelector("#form-submit").addEventListener("click",r=>{r.preventDefault()});ie.registerPlugin(Ke);let Bu=null;function dS(r){return new Promise(e=>{const t=new Or,n=new rn;r.add(n);let i=[];const s={};let o,a;const c={dashboard:{variants:[],defaultVariantIndex:0},console:{variants:[],defaultVariantIndex:0},frameLeft:{variants:[],defaultVariantIndex:0},frameRight:{variants:[],defaultVariantIndex:0},tablet:{variants:[],defaultVariantIndex:0}},l={"accessory-console-1":{x:-10,y:0,z:0},"accessory-console-2":{x:-10,y:0,z:0},"accessory-dashboard-1":{x:0,y:5,z:0},"accessory-dashboard-2":{x:0,y:5,z:0},"accessory-frameLeft-1":{x:0,y:0,z:-10},"accessory-frameRight-1":{x:0,y:0,z:10},"accessory-tablet-1":{x:0,y:8,z:0},"accessory-tablet-2":{x:0,y:8,z:0}};function u(){t.load("models/accessories-w-t.glb",v=>{o=v.scene,o.position.set(0,2,0),r.add(o),o.traverse(x=>{if(x.name&&x.name.toLowerCase().includes("dashboard"))x.defaultPos=x.position.clone(),x.traverse(A=>{A.isMesh&&(Array.isArray(A.material)?A.material=A.material.map(L=>L.clone()):A.material&&(A.material=A.material.clone()))}),i.push(x);else if(x.name&&x.name.toLowerCase().includes("shadow")){const A=x.material;x.material=new dn({map:A.map||null,transparent:A.transparent,opacity:A.opacity,alphaMap:A.alphaMap||null,color:A.color})}x.castShadow=!0,x.receiveShadow=!0}),s.dashboard=i,o.traverse(x=>{const A=x.type==="Group"&&x.name.startsWith("accessory-"),L=x.isMesh&&x.name.startsWith("accessory-");if(!A&&!L)return;const F=x.name.match(/^accessory-([a-zA-Z]+)-\d+/);if(!F)return;const N=F[1];c[N]||(c[N]={variants:[],defaultVariantIndex:0});const X=[];if(A)x.traverse(H=>{if(H.isMesh){const Z=H.material.clone();Z.transparent=!0,Z.opacity=0,H.material=Z,X.push(Z)}});else{const H=x.material.clone();H.transparent=!0,H.opacity=0,x.material=H,X.push(H)}x.materials=X,x.visible=!1,x.defaultPos=x.position.clone(),c[N].variants.push(x)}),e({group:n,accessoryGroups:c,setAccessoryVariant:T,animateSelected:g,objects:s}),f();for(let x=1;x<=4;x++){const A=o.getObjectByName(`chair-${x}`);A&&(s[`chair-${x}`]=A,A.defaultPos=A.position.clone(),A.traverse(L=>{L.isMesh&&(Array.isArray(L.material)?L.material=L.material.map(F=>F.clone()):L.material&&(L.material=L.material.clone()))}))}const y=15,R=63,b={first:1,hold:6,last:4.2},C=2+R,M=ie.timeline({scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",scrub:!0}});M.to(o.position,{y,ease:"linear",duration:b.first}),M.addLabel("phase2Start").to(o.position,{y,duration:b.hold,ease:"none"}).addLabel("phase2End"),M.to(o.position,{y:C,ease:"linear",duration:b.last}),M.add(a,"phase2Start+=0.5"),a.duration(b.hold*.5),ie.to(o.rotation,{ease:"linear",y:o.rotation.y+5,scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",scrub:!0}})}),t.load("models/platform-2.glb",v=>{const y=v.scene;y.rotation.set(0,2.5,0),y.position.set(0,0,0),r.add(y),y.traverse(A=>{A.castShadow=!0,A.receiveShadow=!0}),ie.to(y.rotation,{ease:"linear",y:y.rotation.y+5,scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",scrub:!0}});const R=13,b=63,E={first:1,hold:6,last:4.2},M=0+b,x=ie.timeline({scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",scrub:!0}});x.to(y.position,{y:R,ease:"linear",duration:E.first}),x.to(y.position,{y:R,ease:"none",duration:E.hold}),x.to(y.position,{y:M,ease:"linear",duration:E.last})})}function f(){a&&a.kill(),a=ie.timeline(),Object.values(c).forEach(v=>{v.variants.forEach((y,R)=>{const b=l[y.name]||{x:0,y:0,z:0};y.visible=!1,y.materials&&y.materials.forEach(E=>E.opacity=0),a.set(y,{visible:!1}),a.fromTo(y.position,{x:y.position.x+b.x,y:y.position.y+b.y,z:y.position.z+b.z},{x:y.position.x,y:y.position.y,z:y.position.z,duration:1,ease:"power3.out",onStart:()=>{R===v.defaultVariantIndex&&(y.visible=!0)}},"<"),R===v.defaultVariantIndex&&y.materials&&y.materials.forEach((E,C)=>{a.fromTo(E,{opacity:0},{opacity:1,duration:1,ease:"power2.out"},"<")})})})}let d=null;function h(v,y,R){(Array.isArray(v)?v:[v]).forEach(E=>{ie.to(E.position,{[y]:E.defaultPos[y]+R*1,duration:.3,ease:"power2.out"}),E!==d&&g(v)})}function g(v){if(d&&(Array.isArray(d)?d:[d]).forEach(b=>{b.traverse(E=>{if(!E.isMesh)return;(Array.isArray(E.material)?E.material:[E.material]).forEach(M=>{const x=M.userData.originalColor;x&&(ie.killTweensOf(M.color),ie.to(M.color,{r:x.r,g:x.g,b:x.b,duration:.3,ease:"power2.out"}))})})}),!v){d=null;return}(Array.isArray(v)?v:[v]).forEach(R=>{R.traverse(b=>{if(!b.isMesh)return;(Array.isArray(b.material)?b.material:[b.material]).forEach(C=>{if(!C)return;C.userData.originalColor||(C.userData.originalColor=C.color.clone());const M=C.userData.originalColor;ie.killTweensOf(C.color),ie.timeline({repeat:-1}).to(C.color,{r:1,g:1,b:1,duration:1}).to(C.color,{r:M.r,g:M.g,b:M.b,duration:1,ease:"power2.out"})})})}),d=v}const _=_m.channel("room1",{config:{broadcast:{self:!0,ack:!0}}});let m=null;function p(){m&&clearTimeout(m),m=setTimeout(()=>{Oh(s)},1e3)}_.on("broadcast",{event:"command"},({payload:v})=>{switch(p(),v.object){case"dashboard":h(s[v.object],v.direction,v.amount);break;case"chair-1":case"chair-2":case"chair-3":case"chair-4":h(s[v.object],v.direction,v.amount);break;case"connected":om(),Nh();break;case"start":Fu(),window.dispatchEvent(new CustomEvent("cameraMove",{detail:{target:new z(-20,0,-10)}}));break;default:console.warn("Unknown command type:",v.type)}}),_.subscribe(v=>{console.log("channel status:",v)}),u();function T(v,y){const R=c[v];if(!R)return;const b=R.variants[y],E=R.variants[R.defaultVariantIndex];E!==b&&(E&&ie.to(E.scale,{x:.5,y:.5,z:.5,duration:.25,ease:"power2.in",onComplete:()=>{E.visible=!1,E.materials.forEach(C=>C.opacity=0)}}),b&&ie.fromTo(b.scale,{x:.5,y:.5,z:.5},{x:1,y:1,z:1,duration:.35,ease:"power2.out",onStart:()=>{b.visible=!0,b.materials.forEach(C=>C.opacity=1)}}),R.defaultVariantIndex=y)}return document.querySelector(".qr-wrapper-close").addEventListener("click",()=>{Nh(),Oh(s),setTimeout(()=>{Fu()},1e3)}),Bu=g,{group:n,animateSelected:g}})}function Vh(){Bu&&Bu(null)}const hS={floor1:6,floor2:15,floor3:52.5,floor4:59,floor5:65,floor6:71};function pS(r){const t=document.querySelector(".three-section").offsetHeight,n=window.innerHeight,i=t-n,s=6,o=71;function a(c){const l=hS[c];if(l===void 0)return;const u=(l-s)/(o-s),f=i*u,d=document.body.scrollTop,h=f-d;ie.to({val:0},{val:1,duration:1.5,ease:"power2.inOut",onUpdate:function(){const g=this.targets()[0].val;document.body.scrollTop=d+h*g,Ke.update()},onComplete:()=>{Ke.update()}})}document.querySelectorAll(".nav-button").forEach(c=>{c.addEventListener("click",()=>{const l=c.dataset.floor;a(l)})}),document.getElementById("intro-start").addEventListener("click",()=>{a("floor1")})}const Hh=document.querySelector(".intro-container"),uc=document.getElementById("videoA"),hi=document.getElementById("videoB"),tc=document.getElementById("intro-start"),Cl=document.getElementById("ambientSound");uc.src="./video/intro-loop.mp4";hi.src="./video/intro-enter1.mp4";uc.play();ie.set(uc,{opacity:1});hi.load();function mS(){tc.classList.remove("visually-hidden"),ie.from(tc,{y:300,duration:1,ease:"power4.out",delay:4})}mS();tc.addEventListener("click",()=>{if(ie.to(tc,{scaleY:0,duration:.3,ease:"power4.out"}),!hi.paused)return;hi.currentTime=0,hi.play();const r=ie.timeline();r.to(uc,{opacity:0,duration:1,ease:"power2.in"}),r.to(hi,{opacity:1,duration:1,ease:"power2.out"}),hi.onended=()=>{const e=ie.timeline({onComplete:()=>{Hh.classList.add("visually-hidden"),hi.pause(),hi.currentTime=0}});e.to(hi,{opacity:0,duration:1,ease:"power2.out"}),e.to(Hh,{opacity:0,duration:1,ease:"power2.out"})},Cl.currentTime=0,Cl.play(),Cl.volume=.3});function gS(){console.log("init intro")}class xS extends wg{constructor(e){super(e),this.type=_i}parse(e){const o=function(C,M){switch(C){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(M||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(M||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(M||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(M||""))}},f=function(C,M,x){M=M||1024;let L=C.pos,F=-1,N=0,X="",H=String.fromCharCode.apply(null,new Uint16Array(C.subarray(L,L+128)));for(;0>(F=H.indexOf(`
`))&&N<M&&L<C.byteLength;)X+=H,N+=H.length,L+=128,H+=String.fromCharCode.apply(null,new Uint16Array(C.subarray(L,L+128)));return-1<F?(C.pos+=N+F+1,X+H.slice(0,F)):!1},d=function(C){const M=/^#\?(\S+)/,x=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*FORMAT=(\S+)\s*$/,F=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,N={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let X,H;for((C.pos>=C.byteLength||!(X=f(C)))&&o(1,"no header found"),(H=X.match(M))||o(3,"bad initial token"),N.valid|=1,N.programtype=H[1],N.string+=X+`
`;X=f(C),X!==!1;){if(N.string+=X+`
`,X.charAt(0)==="#"){N.comments+=X+`
`;continue}if((H=X.match(x))&&(N.gamma=parseFloat(H[1])),(H=X.match(A))&&(N.exposure=parseFloat(H[1])),(H=X.match(L))&&(N.valid|=2,N.format=H[1]),(H=X.match(F))&&(N.valid|=4,N.height=parseInt(H[1],10),N.width=parseInt(H[2],10)),N.valid&2&&N.valid&4)break}return N.valid&2||o(3,"missing format specifier"),N.valid&4||o(3,"missing image size specifier"),N},h=function(C,M,x){const A=M;if(A<8||A>32767||C[0]!==2||C[1]!==2||C[2]&128)return new Uint8Array(C);A!==(C[2]<<8|C[3])&&o(3,"wrong scanline width");const L=new Uint8Array(4*M*x);L.length||o(4,"unable to allocate buffer space");let F=0,N=0;const X=4*A,H=new Uint8Array(4),Z=new Uint8Array(X);let q=x;for(;q>0&&N<C.byteLength;){N+4>C.byteLength&&o(1),H[0]=C[N++],H[1]=C[N++],H[2]=C[N++],H[3]=C[N++],(H[0]!=2||H[1]!=2||(H[2]<<8|H[3])!=A)&&o(3,"bad rgbe scanline format");let ee=0,I;for(;ee<X&&N<C.byteLength;){I=C[N++];const Ie=I>128;if(Ie&&(I-=128),(I===0||ee+I>X)&&o(3,"bad scanline data"),Ie){const He=C[N++];for(let je=0;je<I;je++)Z[ee++]=He}else Z.set(C.subarray(N,N+I),ee),ee+=I,N+=I}const fe=A;for(let Ie=0;Ie<fe;Ie++){let He=0;L[F]=Z[Ie+He],He+=A,L[F+1]=Z[Ie+He],He+=A,L[F+2]=Z[Ie+He],He+=A,L[F+3]=Z[Ie+He],F+=4}q--}return L},g=function(C,M,x,A){const L=C[M+3],F=Math.pow(2,L-128)/255;x[A+0]=C[M+0]*F,x[A+1]=C[M+1]*F,x[A+2]=C[M+2]*F,x[A+3]=1},_=function(C,M,x,A){const L=C[M+3],F=Math.pow(2,L-128)/255;x[A+0]=Vo.toHalfFloat(Math.min(C[M+0]*F,65504)),x[A+1]=Vo.toHalfFloat(Math.min(C[M+1]*F,65504)),x[A+2]=Vo.toHalfFloat(Math.min(C[M+2]*F,65504)),x[A+3]=Vo.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=d(m),T=p.width,v=p.height,y=h(m.subarray(m.pos),T,v);let R,b,E;switch(this.type){case In:E=y.length/4;const C=new Float32Array(E*4);for(let x=0;x<E;x++)g(y,x*4,C,x*4);R=C,b=In;break;case _i:E=y.length/4;const M=new Uint16Array(E*4);for(let x=0;x<E;x++)_(y,x*4,M,x*4);R=M,b=_i;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:T,height:v,data:R,header:p.string,gamma:p.gamma,exposure:p.exposure,type:b}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){switch(o.type){case In:case _i:o.colorSpace=hn,o.minFilter=Wt,o.magFilter=Wt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,i)}}var fn,cm,Xi,bi,ur,lm,gs,Ta,um=function(){return typeof window<"u"},fm=function(){return fn||um()&&(fn=window.gsap)&&fn.registerPlugin&&fn},dm=function(e){return typeof e=="string"},Gh=function(e){return typeof e=="function"},Ro=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,s="client"+n;return e===Xi||e===bi||e===ur?Math.max(bi[i],ur[i])-(Xi["inner"+n]||bi[s]||ur[s]):e[i]-e["offset"+n]},Co=function(e,t){var n="scroll"+(t==="x"?"Left":"Top");return e===Xi&&(e.pageXOffset!=null?n="page"+t.toUpperCase()+"Offset":e=bi[n]!=null?bi:ur),function(){return e[n]}},_S=function(e,t,n,i){if(Gh(e)&&(e=e(t,n,i)),typeof e!="object")return dm(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&Gh(e[o])?e[o](t,n,i):e[o];return s},hm=function(e,t){if(e=lm(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),i=!t||t===Xi||t===ur,s=i?{top:bi.clientTop-(Xi.pageYOffset||bi.scrollTop||ur.scrollTop||0),left:bi.clientLeft-(Xi.pageXOffset||bi.scrollLeft||ur.scrollLeft||0)}:t.getBoundingClientRect(),o={x:n.left-s.left,y:n.top-s.top};return!i&&t&&(o.x+=Co(t,"x")(),o.y+=Co(t,"y")()),o},Wh=function(e,t,n,i,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:dm(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+i-s:e==="max"?Ro(t,n)-s:Math.min(Ro(t,n),hm(e,t)[n]-s)},ku=function(){fn=fm(),um()&&fn&&typeof document<"u"&&document.body&&(Xi=window,ur=document.body,bi=document.documentElement,lm=fn.utils.toArray,fn.config({autoKillThreshold:7}),gs=fn.config(),cm=1)},Ls={version:"3.13.0",name:"scrollTo",rawVars:1,register:function(e){fn=e,ku()},init:function(e,t,n,i,s){cm||ku();var o=this,a=fn.getProperty(e,"scrollSnapType");o.isWin=e===Xi,o.target=e,o.tween=n,t=_S(t,i,e,s),o.vars=t,o.autoKill=!!("autoKill"in t?t:gs).autoKill,o.getX=Co(e,"x"),o.getY=Co(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),Ta||(Ta=fn.core.globals().ScrollTrigger),fn.getProperty(e,"scrollBehavior")==="smooth"&&fn.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,Wh(t.x,e,"x",o.x,t.offsetX||0),i,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,Wh(t.y,e,"y",o.y,t.offsetY||0),i,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var n=t._pt,i=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,c=t.yPrev,l=t.isWin,u=t.snap,f=t.snapInline,d,h,g,_,m;n;)n.r(e,n.d),n=n._next;d=l||!t.skipX?t.getX():a,h=l||!t.skipY?t.getY():c,g=h-c,_=d-a,m=gs.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(_>m||_<-m)&&d<Ro(i,"x")&&(t.skipX=1),!t.skipY&&(g>m||g<-m)&&h<Ro(i,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),l?Xi.scrollTo(t.skipX?d:t.x,t.skipY?h:t.y):(t.skipY||(i.scrollTop=t.y),t.skipX||(i.scrollLeft=t.x)),u&&(e===1||e===0)&&(h=i.scrollTop,d=i.scrollLeft,f?i.style.scrollSnapType=f:i.style.removeProperty("scroll-snap-type"),i.scrollTop=h+1,i.scrollLeft=d+1,i.scrollTop=h,i.scrollLeft=d),t.xPrev=t.x,t.yPrev=t.y,Ta&&Ta.update()},kill:function(e){var t=e==="scrollTo",n=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),n>-1&&this._props.splice(n,1),!this._props.length}};Ls.max=Ro;Ls.getOffset=hm;Ls.buildGetter=Co;Ls.config=function(r){gs||ku()||(gs=fn.config());for(var e in r)gs[e]=r[e]};fm()&&fn.registerPlugin(Ls);ie.registerPlugin(Ke,Ls);let Sn,ht,ri;const qs=document.querySelector(".three-canvas");let Rt=6,Ys=1,nn={value:4},zu=!1,ka=null;const Ks={angle:0};vS();gm();gS();const Xh={};async function vS(){Sn=new J0,Sn.background=null,ht=new Tn(65,qs.clientWidth/qs.clientHeight,.1,100),ht.position.set(17,Rt,-8),ht.lookAt(0,Rt-4,0),ri=new Lb({canvas:qs,antialias:!0,alpha:!0}),ri.setSize(qs.clientWidth,qs.clientHeight),ri.setPixelRatio(window.devicePixelRatio),Sn.add(new Dg(16777215,.5));const r=new bu(ri);new xS().load("hdri/studio.hdr",a=>{const c=r.fromEquirectangular(a).texture;Sn.environment=c,a.dispose(),r.dispose(),Sn.backgroundBlurriness=.05,Sn.backgroundIntensity=.2,Sn.environmentIntensity=.5});const{accessoryGroups:e,setAccessoryVariant:t,animateSelected:n,objects:i}=await dS(Sn),s={value:12565940,roughness:.1,metalness:.1},o={value:12565940,roughness:.1,metalness:.1};CS(ht),DM("#accessory-menu",e,t,s,o)}function yS(){ri.outputColorSpace=Pt,ri.toneMapping=Vi,ri.toneMappingExposure=1,ri.shadowMap.enabled=!0,ri.shadowMap.type=Kh,ri.render(Sn,ht)}function bS(){const r=window.innerWidth,e=window.innerHeight;ht.aspect=r/e,ht.updateProjectionMatrix(),ri.setSize(r,e)}ie.to(".canvas-wrapper",{ease:"linear",scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",pin:".canvas-wrapper"}});document.querySelector(".instructions-button").addEventListener("click",()=>{document.querySelector(".instruction-wrapper").classList.remove("visually-hidden"),ie.to(".instruction-wrapper",{opacity:1,duration:.4,ease:"power3.out"})});const pm=19,MS=63,ui={first:1,hold:6,last:4.2},SS=ht.position.y,TS=SS+MS,Qn=ie.timeline({scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",scrub:!0,onUpdate:()=>{Rt=ht.position.y,ht.lookAt(0,Rt-nn.value,0),wS(),go.checkHeight(Rt,Et),xo.checkHeight(Rt,Et)}}});Qn.to(ht.position,{y:pm,ease:"linear",duration:ui.first});Qn.call(()=>{tm()});Qn.to(ht.position,{y:pm,ease:"none",duration:ui.hold},"holdStart");Qn.call(()=>{tm(),ie.to(ht,{fov:20,duration:1,ease:"power3.inOut",onUpdate(){ht.updateProjectionMatrix()}}),ie.to(nn,{value:2,duration:1,ease:"power3.inOut",onUpdate(){ht.lookAt(0,Rt-nn.value,0)}}),UM()},null,"holdStart+="+ui.hold*.1);Qn.call(()=>{em()},null,"holdStart+="+ui.hold*.65);Qn.call(()=>{em()},null,"holdStart+="+ui.hold*.95);Qn.to(ht.position,{y:TS,ease:"linear",duration:ui.last},"lastPhase");Qn.call(()=>{document.querySelector("#three-canvas").classList.remove("canvas-dark")},null,"lastPhase+="+ui.last*.875);Qn.call(()=>{document.querySelector("#three-canvas").classList.add("canvas-dark")},null,"lastPhase+="+ui.last*.88);Qn.call(()=>{mm()},null,"lastPhase+="+ui.last*.995);Qn.call(()=>{PS(ht,{center:new z(0,Rt-nn.value,0),radius:23,speed:80})},null,"lastPhase+="+ui.last);Qn.call(()=>{},null,"holdStart+="+ui.hold);const ES=document.querySelector(".qr-wrapper"),go=LM(Sn),Pl=IM(Sn),Xn=NM(Sn),Ll=oS(Sn),xo=aS(Sn);lS(Sn);function wS(){const r=Math.floor(Rt/13.3)+1;if(r!==Ys){if(r===1&&(ie.to(ht,{fov:65,duration:1,ease:"power3.inOut",onUpdate(){ht.updateProjectionMatrix()}}),ie.to(nn,{value:4,duration:1,ease:"power3.inOut",onUpdate(){ht.lookAt(0,Rt-nn.value,0)}})),r===2&&(Et===0&&Pl.rotateFloor(0),Et===1&&Pl.rotateFloor(120),Et===2&&Pl.rotateFloor(-120),Xn.hideUI("#ui-panel-3-1"),Xn.hideUI("#ui-panel-3-2"),Xn.hideUI(".floor3-ui-container .ui-tip")),r===3&&(Et===0&&Xn.rotateFloor(0),Et===1&&Xn.rotateFloor(120),Et===2&&Xn.rotateFloor(-120),Xn.showUI("#ui-panel-3-1"),Xn.showUI(".floor3-ui-container .ui-tip"),Ll.hideQR(),Bh(),Vh(),Ba.flag=!1,ie.to(ht,{fov:30,duration:1,ease:"power3.inOut",onUpdate(){ht.updateProjectionMatrix()}}),ie.to(nn,{value:2,duration:1,ease:"power3.inOut",onUpdate(){ht.lookAt(0,Rt-nn.value,0)}})),r===4&&(ES.classList.remove("visually-hidden"),Xn.hideUI("#ui-panel-3-1"),Xn.hideUI("#ui-panel-3-2"),Xn.hideUI(".floor3-ui-container .ui-tip"),Ll.showQR(),Ba.flag=!0,Fu(),ie.to(ht,{fov:30,duration:1,ease:"power3.inOut",onUpdate(){ht.updateProjectionMatrix()}}),ie.to(nn,{value:2,duration:1,ease:"power3.inOut",onUpdate(){ht.lookAt(0,Rt-nn.value,0)}}),kh()),r===5&&(Vh(),Ll.hideQR(),Bh(),Ba.flag=!1,ie.to(ht,{fov:65,duration:1,ease:"power3.inOut",onUpdate(){ht.updateProjectionMatrix()}}),ie.to(nn,{value:4,duration:1,ease:"power3.inOut",onUpdate(){ht.lookAt(0,Rt-nn.value,0)}}),cS(),fS(),zu=!1),r===6&&(kh(),uS(),zu=!0),(r===2||r===4)&&Xn.overlayOff(),r===2&&Ys===3&&(ie.to(ht,{fov:20,duration:1,ease:"power3.inOut",onUpdate(){ht.updateProjectionMatrix()}}),ie.to(nn,{value:2,duration:1,ease:"power3.inOut",onUpdate(){ht.lookAt(0,Rt-nn.value,0)}})),r===5&&Ys===6){const e=new z(0,Rt,23);LS(ht,e,Rt,nn,go,xo)}Ys=r,RS(Ys)}}const AS=document.querySelectorAll(".nav-button");function RS(r){AS.forEach(t=>t.classList.remove("nav-active"));const e=document.querySelector(`.nav-button[data-floor="floor${r}"]`);e&&e.classList.add("nav-active")}let Et;function CS(r,e){const t=[new z(0,Rt,23),new z(20,Rt,-10),new z(-20,Rt,-10)];Et=0;let n=!1;function i(s){n=!0,ie.to(r.position,{x:s.x,z:s.z,duration:1.5,ease:"power2.inOut",onStart:()=>{go.checkHeight(Rt,-1),xo.checkHeight(Rt,-1)},onUpdate:()=>{r.lookAt(0,Rt-nn.value,0)},onComplete:()=>{go.checkHeight(Rt,Et),xo.checkHeight(Rt,Et),n=!1}})}window.cameraControls=Xh,Xh.moveCameraTo=i,go.checkHeight(Rt,Et),xo.checkHeight(Rt,Et),r.position.copy(t[Et]),r.lookAt(0,Rt-nn.value,0),window.addEventListener("keydown",s=>{n||zu||(s.key==="ArrowRight"?(Et=(Et+1)%t.length,i(t[Et])):s.key==="ArrowLeft"&&(Et=(Et-1+t.length)%t.length,i(t[Et])))}),window.addEventListener("cameraMove",s=>{i(s.detail.target),Et=2}),document.querySelector(".horizontal-controls-right").addEventListener("click",()=>{Et=(Et+1)%t.length,i(t[Et])}),document.querySelector(".horizontal-controls-left").addEventListener("click",()=>{Et=(Et-1+t.length)%t.length,i(t[Et])})}function PS(r,{center:e=new z(0,0,0),radius:t=10,speed:n=50}={}){mm();const i=r.position.y;Ks.angle=Math.atan2(r.position.z-e.z,r.position.x-e.x),ka=ie.to(Ks,{angle:Ks.angle+Math.PI*2,duration:n,repeat:-1,ease:"power1.inOut",onUpdate:()=>{r.position.x=e.x+Math.cos(Ks.angle)*t,r.position.z=e.z+Math.sin(Ks.angle)*t,r.position.y=i,r.lookAt(e)}})}function mm(){ka&&(ka.kill(),ka=null)}function LS(r,e,t,n,i,s){Et=0,ie.to(r.position,{x:e.x,z:e.z,duration:1.5,ease:"power2.inOut",onStart:()=>{s.checkHeight(t,-1)},onComplete:()=>{s.checkHeight(t,0)}})}window.addEventListener("resize",bS);function gm(){requestAnimationFrame(gm),yS()}window.addEventListener("load",()=>{Ke.refresh(),pS()});const qh=document.getElementById("muteBtn"),IS=document.querySelectorAll("audio");let Ea=!1;qh.addEventListener("click",()=>{Ea=!Ea,IS.forEach(r=>{r.muted=Ea}),qh.innerHTML=Ea?`
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
  <path d="M7 16C7 17.6569 5.65685 19 4 19C2.34315 19 1 17.6569 1 16C1 14.3431 2.34315 13 4 13C5.65685 13 7 14.3431 7 16ZM7 16V11.5M16 17C14 17 13 16 13 15M16 11C16.5 11 18.5 11 19 13V1L7 3V4.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.5 5L20.5 17" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>
  `:`
   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M7 16V3L19 1V14M7 16C7 17.6569 5.65685 19 4 19C2.34315 19 1 17.6569 1 16C1 14.3431 2.34315 13 4 13C5.65685 13 7 14.3431 7 16ZM19 14C19 15.6569 17.6569 17 16 17C14.3431 17 13 15.6569 13 14C13 12.3431 14.3431 11 16 11C17.6569 11 19 12.3431 19 14Z"
        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `});
