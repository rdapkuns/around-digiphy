import{g as Ae,a as Kp,s as jp}from"./supabase-S-kuNvKe.js";const Ru="181",$p=0,sf=1,Zp=2,Mh=1,Sh=2,Ii=3,Wi=0,In=1,di=2,Bi=0,as=1,of=2,af=3,cf=4,Jp=5,Mr=100,Qp=101,em=102,tm=103,nm=104,im=200,rm=201,sm=202,om=203,yl=204,bl=205,am=206,cm=207,lm=208,um=209,fm=210,dm=211,hm=212,pm=213,mm=214,Ml=0,Sl=1,El=2,ms=3,Tl=4,wl=5,Al=6,Rl=7,Eh=0,gm=1,xm=2,ki=0,_m=1,vm=2,ym=3,bm=4,Mm=5,Sm=6,Em=7,lf="attached",Tm="detached",Th=300,gs=301,xs=302,Cl=303,Pl=304,Wa=306,_s=1e3,Yn=1001,La=1002,Tn=1003,wh=1004,Ys=1005,Gt=1006,xa=1007,hi=1008,yi=1009,Ah=1010,Rh=1011,ho=1012,Cu=1013,Cr=1014,Ln=1015,pi=1016,Pu=1017,Lu=1018,po=1020,Ch=35902,Ph=35899,Lh=1021,Ih=1022,Kn=1023,mo=1026,go=1027,Iu=1028,Du=1029,Uu=1030,Nu=1031,Fu=1033,_a=33776,va=33777,ya=33778,ba=33779,Ll=35840,Il=35841,Dl=35842,Ul=35843,Nl=36196,Fl=37492,Ol=37496,Bl=37808,kl=37809,zl=37810,Vl=37811,Hl=37812,Gl=37813,Wl=37814,Xl=37815,ql=37816,Yl=37817,Kl=37818,jl=37819,$l=37820,Zl=37821,Jl=36492,Ql=36494,eu=36495,tu=36283,nu=36284,iu=36285,ru=36286,xo=2300,_o=2301,ec=2302,uf=2400,ff=2401,df=2402,wm=2500,Am=0,Dh=1,su=2,Rm=3200,Cm=3201,Uh=0,Pm=1,nr="",Kt="srgb",fn="srgb-linear",Ia="linear",Tt="srgb",kr=7680,hf=519,Lm=512,Im=513,Dm=514,Nh=515,Um=516,Nm=517,Fm=518,Om=519,ou=35044,pf="300 es",mi=2e3,Da=2001;function Fh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function vo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Bm(){const r=vo("canvas");return r.style.display="block",r}const mf={};function Ua(...r){const e="THREE."+r.shift();console.log(e,...r)}function Fe(...r){const e="THREE."+r.shift();console.warn(e,...r)}function ct(...r){const e="THREE."+r.shift();console.error(e,...r)}function yo(...r){const e=r.join(" ");e in mf||(mf[e]=!0,Fe(...r))}function km(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class Ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gf=1234567;const eo=Math.PI/180,vs=180/Math.PI;function si(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[r&255]+sn[r>>8&255]+sn[r>>16&255]+sn[r>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function Ou(r,e){return(r%e+e)%e}function zm(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Vm(r,e,t){return r!==e?(t-r)/(e-r):0}function to(r,e,t){return(1-t)*r+t*e}function Hm(r,e,t,n){return to(r,e,1-Math.exp(-t*n))}function Gm(r,e=1){return e-Math.abs(Ou(r,e*2)-e)}function Wm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Xm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function qm(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ym(r,e){return r+Math.random()*(e-r)}function Km(r){return r*(.5-Math.random())}function jm(r){r!==void 0&&(gf=r);let e=gf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $m(r){return r*eo}function Zm(r){return r*vs}function Jm(r){return(r&r-1)===0&&r!==0}function Qm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function e0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function t0(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),d=o((e-n)/2),h=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,c*f,c*d,a*l);break;case"YZY":r.set(c*d,a*u,c*f,a*l);break;case"ZXZ":r.set(c*f,c*d,a*u,a*l);break;case"XZX":r.set(a*u,c*g,c*h,a*l);break;case"YXY":r.set(c*h,a*u,c*g,a*l);break;case"ZYZ":r.set(c*g,c*h,a*u,a*l);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ii(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Mt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Xa={DEG2RAD:eo,RAD2DEG:vs,generateUUID:si,clamp:at,euclideanModulo:Ou,mapLinear:zm,inverseLerp:Vm,lerp:to,damp:Hm,pingpong:Gm,smoothstep:Wm,smootherstep:Xm,randInt:qm,randFloat:Ym,randFloatSpread:Km,seededRandom:jm,degToRad:$m,radToDeg:Zm,isPowerOfTwo:Jm,ceilPowerOfTwo:Qm,floorPowerOfTwo:e0,setQuaternionFromProperEuler:t0,normalize:Mt,denormalize:ii};class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3],d=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a>=1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==d||l!==h||u!==g){let m=c*d+l*h+u*g+f*_;m<0&&(d=-d,h=-h,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const M=Math.acos(m),y=Math.sin(M);p=Math.sin(p*M)/y,a=Math.sin(a*M)/y,c=c*p+d*a,l=l*p+h*a,u=u*p+g*a,f=f*p+_*a}else{c=c*p+d*a,l=l*p+h*a,u=u*p+g*a,f=f*p+_*a;const M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*f+c*h-l*d,e[t+1]=c*g+u*d+l*f-a*h,e[t+2]=l*g+u*h+a*d-c*f,e[t+3]=u*g-a*f-c*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),f=a(s/2),d=c(n/2),h=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"YZX":this._x=d*u*f+l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f-d*h*g;break;case"XZY":this._x=d*u*f-l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f+d*h*g;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-i)*h}else if(n>a&&n>f){const h=2*Math.sqrt(1+n-a-f);this._w=(u-c)/h,this._x=.25*h,this._y=(i+o)/h,this._z=(s+l)/h}else if(a>f){const h=2*Math.sqrt(1+a-n-f);this._w=(s-l)/h,this._x=(i+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+f-n-a);this._w=(o-i)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+c*l+o*f-a*u,this.y=n+c*u+a*l-s*f,this.z=i+c*f+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tc.copy(this).projectOnVector(e),this.sub(tc)}reflect(e){return this.sub(tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tc=new V,xf=new lr;class Je{constructor(e,t,n,i,s,o,a,c,l){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],y=i[4],b=i[7],C=i[2],S=i[5],T=i[8];return s[0]=o*_+a*M+c*C,s[3]=o*m+a*y+c*S,s[6]=o*p+a*b+c*T,s[1]=l*_+u*M+f*C,s[4]=l*m+u*y+f*S,s[7]=l*p+u*b+f*T,s[2]=d*_+h*M+g*C,s[5]=d*m+h*y+g*S,s[8]=d*p+h*b+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,d=a*c-u*s,h=l*s-o*c,g=t*f+n*d+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=h*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(nc.makeScale(e,t)),this}rotate(e){return this.premultiply(nc.makeRotation(-e)),this}translate(e,t){return this.premultiply(nc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nc=new Je,_f=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vf=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function n0(){const r={enabled:!0,workingColorSpace:fn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Tt&&(i.r=zi(i.r),i.g=zi(i.g),i.b=zi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(i.r=cs(i.r),i.g=cs(i.g),i.b=cs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===nr?Ia:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return yo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return yo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[fn]:{primaries:e,whitePoint:n,transfer:Ia,toXYZ:_f,fromXYZ:vf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:_f,fromXYZ:vf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),r}const dt=n0();function zi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function cs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let zr;class i0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zr===void 0&&(zr=vo("canvas")),zr.width=e.width,zr.height=e.height;const i=zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=zi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zi(t[n]/255)*255):t[n]=zi(t[n]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let r0=0;class Bu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ic(i[o].image)):s.push(ic(i[o]))}else s=ic(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ic(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?i0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}let s0=0;const rc=new V;class nn extends Ts{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,n=Yn,i=Yn,s=Gt,o=hi,a=Kn,c=yi,l=nn.DEFAULT_ANISOTROPY,u=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=si(),this.name="",this.source=new Bu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rc).x}get height(){return this.source.getSize(rc).y}get depth(){return this.source.getSize(rc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _s:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _s:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Th;nn.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,i=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,b=(h+1)/2,C=(p+1)/2,S=(u+d)/4,T=(f+_)/4,R=(g+m)/4;return y>b&&y>C?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=S/n,s=T/n):b>C?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=S/i,s=R/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=T/s,i=R/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-_)/M,this.z=(d-u)/M,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class o0 extends Ts{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new nn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Bu(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends o0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Oh extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class a0 extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(s,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ao.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ao.copy(n.boundingBox)),Ao.applyMatrix4(e.matrixWorld),this.union(Ao)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),Ro.subVectors(this.max,Is),Vr.subVectors(e.a,Is),Hr.subVectors(e.b,Is),Gr.subVectors(e.c,Is),Yi.subVectors(Hr,Vr),Ki.subVectors(Gr,Hr),dr.subVectors(Vr,Gr);let t=[0,-Yi.z,Yi.y,0,-Ki.z,Ki.y,0,-dr.z,dr.y,Yi.z,0,-Yi.x,Ki.z,0,-Ki.x,dr.z,0,-dr.x,-Yi.y,Yi.x,0,-Ki.y,Ki.x,0,-dr.y,dr.x,0];return!sc(t,Vr,Hr,Gr,Ro)||(t=[1,0,0,0,1,0,0,0,1],!sc(t,Vr,Hr,Gr,Ro))?!1:(Co.crossVectors(Yi,Ki),t=[Co.x,Co.y,Co.z],sc(t,Vr,Hr,Gr,Ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ei=[new V,new V,new V,new V,new V,new V,new V,new V],Zn=new V,Ao=new qi,Vr=new V,Hr=new V,Gr=new V,Yi=new V,Ki=new V,dr=new V,Is=new V,Ro=new V,Co=new V,hr=new V;function sc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){hr.fromArray(r,s);const a=i.x*Math.abs(hr.x)+i.y*Math.abs(hr.y)+i.z*Math.abs(hr.z),c=e.dot(hr),l=t.dot(hr),u=n.dot(hr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const c0=new qi,Ds=new V,oc=new V;class Mi{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):c0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);const t=Ds.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ds,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(oc)),this.expandByPoint(Ds.copy(e.center).sub(oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ti=new V,ac=new V,Po=new V,ji=new V,cc=new V,Lo=new V,lc=new V;class qa{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ac.copy(e).add(t).multiplyScalar(.5),Po.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(ac);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Po),a=ji.dot(this.direction),c=-ji.dot(Po),l=ji.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*c-a,d=o*a-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),h=d*(d+2*c)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ac).addScaledVector(Po,d),h}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);const n=Ti.dot(this.direction),i=Ti.dot(Ti)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,i,s){cc.subVectors(t,e),Lo.subVectors(n,e),lc.crossVectors(cc,Lo);let o=this.direction.dot(lc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);const c=a*this.direction.dot(Lo.crossVectors(ji,Lo));if(c<0)return null;const l=a*this.direction.dot(cc.cross(ji));if(l<0||c+l>o)return null;const u=-a*ji.dot(lc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,n,i,s,o,a,c,l,u,f,d,h,g,_,m){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,u,f,d,h,g,_,m)}set(e,t,n,i,s,o,a,c,l,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Wr.setFromMatrixColumn(e,0).length(),s=1/Wr.setFromMatrixColumn(e,1).length(),o=1/Wr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=h+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,h=c*f,g=l*u,_=l*f;t[0]=d+_*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,h=c*f,g=l*u,_=l*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=c*u,t[4]=g*l-h,t[8]=d*l+_,t[1]=c*f,t[5]=_*l+d,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,h=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*c,h=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+_,t[5]=o*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(l0,e,u0)}lookAt(e,t,n){const i=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),$i.crossVectors(n,Nn),$i.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),$i.crossVectors(n,Nn)),$i.normalize(),Io.crossVectors(Nn,$i),i[0]=$i.x,i[4]=Io.x,i[8]=Nn.x,i[1]=$i.y,i[5]=Io.y,i[9]=Nn.y,i[2]=$i.z,i[6]=Io.z,i[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],y=n[7],b=n[11],C=n[15],S=i[0],T=i[4],R=i[8],v=i[12],x=i[1],A=i[5],L=i[9],F=i[13],N=i[2],G=i[6],H=i[10],J=i[14],q=i[3],ee=i[7],I=i[11],ue=i[15];return s[0]=o*S+a*x+c*N+l*q,s[4]=o*T+a*A+c*G+l*ee,s[8]=o*R+a*L+c*H+l*I,s[12]=o*v+a*F+c*J+l*ue,s[1]=u*S+f*x+d*N+h*q,s[5]=u*T+f*A+d*G+h*ee,s[9]=u*R+f*L+d*H+h*I,s[13]=u*v+f*F+d*J+h*ue,s[2]=g*S+_*x+m*N+p*q,s[6]=g*T+_*A+m*G+p*ee,s[10]=g*R+_*L+m*H+p*I,s[14]=g*v+_*F+m*J+p*ue,s[3]=M*S+y*x+b*N+C*q,s[7]=M*T+y*A+b*G+C*ee,s[11]=M*R+y*L+b*H+C*I,s[15]=M*v+y*F+b*J+C*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*f-i*l*f-s*a*d+n*l*d+i*a*h-n*c*h)+_*(+t*c*h-t*l*d+s*o*d-i*o*h+i*l*u-s*c*u)+m*(+t*l*f-t*a*h-s*o*f+n*o*h+s*a*u-n*l*u)+p*(-i*a*u-t*c*f+t*a*d+i*o*f-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=f*m*l-_*d*l+_*c*h-a*m*h-f*c*p+a*d*p,y=g*d*l-u*m*l-g*c*h+o*m*h+u*c*p-o*d*p,b=u*_*l-g*f*l+g*a*h-o*_*h-u*a*p+o*f*p,C=g*f*c-u*_*c-g*a*d+o*_*d+u*a*m-o*f*m,S=t*M+n*y+i*b+s*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=M*T,e[1]=(_*d*s-f*m*s-_*i*h+n*m*h+f*i*p-n*d*p)*T,e[2]=(a*m*s-_*c*s+_*i*l-n*m*l-a*i*p+n*c*p)*T,e[3]=(f*c*s-a*d*s-f*i*l+n*d*l+a*i*h-n*c*h)*T,e[4]=y*T,e[5]=(u*m*s-g*d*s+g*i*h-t*m*h-u*i*p+t*d*p)*T,e[6]=(g*c*s-o*m*s-g*i*l+t*m*l+o*i*p-t*c*p)*T,e[7]=(o*d*s-u*c*s+u*i*l-t*d*l-o*i*h+t*c*h)*T,e[8]=b*T,e[9]=(g*f*s-u*_*s-g*n*h+t*_*h+u*n*p-t*f*p)*T,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*p+t*a*p)*T,e[11]=(u*a*s-o*f*s-u*n*l+t*f*l+o*n*h-t*a*h)*T,e[12]=C*T,e[13]=(u*_*i-g*f*i+g*n*d-t*_*d-u*n*m+t*f*m)*T,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*T,e[15]=(o*f*i-u*a*i+u*n*c-t*f*c-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,d=s*l,h=s*u,g=s*f,_=o*u,m=o*f,p=a*f,M=c*l,y=c*u,b=c*f,C=n.x,S=n.y,T=n.z;return i[0]=(1-(_+p))*C,i[1]=(h+b)*C,i[2]=(g-y)*C,i[3]=0,i[4]=(h-b)*S,i[5]=(1-(d+p))*S,i[6]=(m+M)*S,i[7]=0,i[8]=(g+y)*T,i[9]=(m-M)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Wr.set(i[0],i[1],i[2]).length();const o=Wr.set(i[4],i[5],i[6]).length(),a=Wr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Jn.copy(this);const l=1/s,u=1/o,f=1/a;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=f,Jn.elements[9]*=f,Jn.elements[10]*=f,t.setFromRotationMatrix(Jn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=mi,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let g,_;if(c)g=s/(o-s),_=o*s/(o-s);else if(a===mi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Da)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=mi,c=!1){const l=this.elements,u=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),h=-(n+i)/(n-i);let g,_;if(c)g=1/(o-s),_=o/(o-s);else if(a===mi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Da)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wr=new V,Jn=new nt,l0=new V(0,0,0),u0=new V(1,1,1),$i=new V,Io=new V,Nn=new V,yf=new nt,bf=new lr;class bi{constructor(e=0,t=0,n=0,i=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],f=i[2],d=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bf.setFromEuler(this),this.setFromQuaternion(bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Bh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let f0=0;const Mf=new V,Xr=new lr,wi=new nt,Do=new V,Us=new V,d0=new V,h0=new lr,Sf=new V(1,0,0),Ef=new V(0,1,0),Tf=new V(0,0,1),wf={type:"added"},p0={type:"removed"},qr={type:"childadded",child:null},uc={type:"childremoved",child:null};class Nt extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new V,t=new bi,n=new lr,i=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new Je}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(Sf,e)}rotateY(e){return this.rotateOnAxis(Ef,e)}rotateZ(e){return this.rotateOnAxis(Tf,e)}translateOnAxis(e,t){return Mf.copy(e).applyQuaternion(this.quaternion),this.position.add(Mf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sf,e)}translateY(e){return this.translateOnAxis(Ef,e)}translateZ(e){return this.translateOnAxis(Tf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Do.copy(e):Do.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Us,Do,this.up):wi.lookAt(Do,Us,this.up),this.quaternion.setFromRotationMatrix(wi),i&&(wi.extractRotation(i.matrixWorld),Xr.setFromRotationMatrix(wi),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wf),qr.child=e,this.dispatchEvent(qr),qr.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(p0),uc.child=e,this.dispatchEvent(uc),uc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wf),qr.child=e,this.dispatchEvent(qr),qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,d0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,h0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Nt.DEFAULT_UP=new V(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new V,Ai=new V,fc=new V,Ri=new V,Yr=new V,Kr=new V,Af=new V,dc=new V,hc=new V,pc=new V,mc=new _t,gc=new _t,xc=new _t;class ri{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Qn.subVectors(e,t),i.cross(Qn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Qn.subVectors(i,t),Ai.subVectors(n,t),fc.subVectors(e,t);const o=Qn.dot(Qn),a=Qn.dot(Ai),c=Qn.dot(fc),l=Ai.dot(Ai),u=Ai.dot(fc),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ri.x),c.addScaledVector(o,Ri.y),c.addScaledVector(a,Ri.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return mc.setScalar(0),gc.setScalar(0),xc.setScalar(0),mc.fromBufferAttribute(e,t),gc.fromBufferAttribute(e,n),xc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(mc,s.x),o.addScaledVector(gc,s.y),o.addScaledVector(xc,s.z),o}static isFrontFacing(e,t,n,i){return Qn.subVectors(n,t),Ai.subVectors(e,t),Qn.cross(Ai).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Qn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ri.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Yr.subVectors(i,n),Kr.subVectors(s,n),dc.subVectors(e,n);const c=Yr.dot(dc),l=Kr.dot(dc);if(c<=0&&l<=0)return t.copy(n);hc.subVectors(e,i);const u=Yr.dot(hc),f=Kr.dot(hc);if(u>=0&&f<=u)return t.copy(i);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Yr,o);pc.subVectors(e,s);const h=Yr.dot(pc),g=Kr.dot(pc);if(g>=0&&h<=g)return t.copy(s);const _=h*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Kr,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return Af.subVectors(s,i),a=(f-u)/(f-u+(h-g)),t.copy(i).addScaledVector(Af,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Yr,o).addScaledVector(Kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function _c(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=Ou(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=_c(o,s,e+1/3),this.g=_c(o,s,e),this.b=_c(o,s,e-1/3)}return dt.colorSpaceToWorking(this,i),this}setStyle(e,t=Kt){function n(s){s!==void 0&&parseFloat(s)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=kh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return dt.workingToColorSpace(on.copy(this),e),Math.round(at(on.r*255,0,255))*65536+Math.round(at(on.g*255,0,255))*256+Math.round(at(on.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(on.copy(this),t);const n=on.r,i=on.g,s=on.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Kt){dt.workingToColorSpace(on.copy(this),e);const t=on.r,n=on.g,i=on.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(Uo);const n=to(Zi.h,Uo.h,t),i=to(Zi.s,Uo.s,t),s=to(Zi.l,Uo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new $e;$e.NAMES=kh;let m0=0;class _i extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=si(),this.name="",this.type="Material",this.blending=as,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yl,this.blendDst=bl,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==Wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yl&&(n.blendSrc=this.blendSrc),this.blendDst!==bl&&(n.blendDst=this.blendDst),this.blendEquation!==Mr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ni extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Di=g0();function g0(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;(l&8388608)===0;)l<<=1,u-=8388608;l&=-8388609,u+=947912704,s[c]=l|u}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function x0(r){Math.abs(r)>65504&&Fe("DataUtils.toHalfFloat(): Value out of range."),r=at(r,-65504,65504),Di.floatView[0]=r;const e=Di.uint32View[0],t=e>>23&511;return Di.baseTable[t]+((e&8388607)>>Di.shiftTable[t])}function _0(r){const e=r>>10;return Di.uint32View[0]=Di.mantissaTable[Di.offsetTable[e]+(r&1023)]+Di.exponentTable[e],Di.floatView[0]}class No{static toHalfFloat(e){return x0(e)}static fromHalfFloat(e){return _0(e)}}const Vt=new V,Fo=new ft;let v0=0;class wn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ou,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fo.fromBufferAttribute(this,t),Fo.applyMatrix3(e),this.setXY(t,Fo.x,Fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ou&&(e.usage=this.usage),e}}class zh extends wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vh extends wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vi extends wn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let y0=0;const Gn=new nt,vc=new Nt,jr=new V,Fn=new qi,Ns=new qi,Jt=new V;class oi extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fh(e)?Vh:zh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return vc.lookAt(e),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vi(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Fn.min,Ns.min),Fn.expandByPoint(Jt),Jt.addVectors(Fn.max,Ns.max),Fn.expandByPoint(Jt)):(Fn.expandByPoint(Ns.min),Fn.expandByPoint(Ns.max))}Fn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Jt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Jt.fromBufferAttribute(a,l),c&&(jr.fromBufferAttribute(e,l),Jt.add(jr)),i=Math.max(i,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new V,c[R]=new V;const l=new V,u=new V,f=new V,d=new ft,h=new ft,g=new ft,_=new V,m=new V;function p(R,v,x){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,v),f.fromBufferAttribute(n,x),d.fromBufferAttribute(s,R),h.fromBufferAttribute(s,v),g.fromBufferAttribute(s,x),u.sub(l),f.sub(l),h.sub(d),g.sub(d);const A=1/(h.x*g.y-g.x*h.y);isFinite(A)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(A),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(A),a[R].add(_),a[v].add(_),a[x].add(_),c[R].add(m),c[v].add(m),c[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,v=M.length;R<v;++R){const x=M[R],A=x.start,L=x.count;for(let F=A,N=A+L;F<N;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new V,b=new V,C=new V,S=new V;function T(R){C.fromBufferAttribute(i,R),S.copy(C);const v=a[R];y.copy(v),y.sub(C.multiplyScalar(C.dot(v))).normalize(),b.crossVectors(S,v);const A=b.dot(c[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,A)}for(let R=0,v=M.length;R<v;++R){const x=M[R],A=x.start,L=x.count;for(let F=A,N=A+L;F<N;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const i=new V,s=new V,o=new V,a=new V,c=new V,l=new V,u=new V,f=new V;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let h=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?h=c[_]*a.data.stride+a.offset:h=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[h++]}return new wn(d,u,f)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new oi,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],h=e(d,n);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const h=l[f];u.push(h.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rf=new nt,pr=new qa,Oo=new Mi,Cf=new V,Bo=new V,ko=new V,zo=new V,yc=new V,Vo=new V,Pf=new V,Ho=new V;class $n extends Nt{constructor(e=new oi,t=new Ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Vo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(yc.fromBufferAttribute(f,e),o?Vo.addScaledVector(yc,u):Vo.addScaledVector(yc.sub(t),u))}t.add(Vo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(Oo.containsPoint(pr.origin)===!1&&(pr.intersectSphere(Oo,Cf)===null||pr.origin.distanceToSquared(Cf)>(e.far-e.near)**2))&&(Rf.copy(s).invert(),pr.copy(e.ray).applyMatrix4(Rf),!(n.boundingBox!==null&&pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),y=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let b=M,C=y;b<C;b+=3){const S=a.getX(b),T=a.getX(b+1),R=a.getX(b+2);i=Go(this,p,e,n,l,u,f,S,T,R),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);i=Go(this,o,e,n,l,u,f,M,y,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),y=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let b=M,C=y;b<C;b+=3){const S=b,T=b+1,R=b+2;i=Go(this,p,e,n,l,u,f,S,T,R),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const M=m,y=m+1,b=m+2;i=Go(this,o,e,n,l,u,f,M,y,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function b0(r,e,t,n,i,s,o,a){let c;if(e.side===In?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Wi,a),c===null)return null;Ho.copy(a),Ho.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Ho);return l<t.near||l>t.far?null:{distance:l,point:Ho.clone(),object:r}}function Go(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Bo),r.getVertexPosition(c,ko),r.getVertexPosition(l,zo);const u=b0(r,e,t,n,Bo,ko,zo,Pf);if(u){const f=new V;ri.getBarycoord(Pf,Bo,ko,zo,f),i&&(u.uv=ri.getInterpolatedAttribute(i,a,c,l,f,new ft)),s&&(u.uv1=ri.getInterpolatedAttribute(s,a,c,l,f,new ft)),o&&(u.normal=ri.getInterpolatedAttribute(o,a,c,l,f,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new V,materialIndex:0};ri.getNormal(Bo,ko,zo,d.normal),u.face=d,u.barycoord=f}return u}class To extends oi{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Vi(l,3)),this.setAttribute("normal",new Vi(u,3)),this.setAttribute("uv",new Vi(f,2));function g(_,m,p,M,y,b,C,S,T,R,v){const x=b/T,A=C/R,L=b/2,F=C/2,N=S/2,G=T+1,H=R+1;let J=0,q=0;const ee=new V;for(let I=0;I<H;I++){const ue=I*A-F;for(let Ie=0;Ie<G;Ie++){const He=Ie*x-L;ee[_]=He*M,ee[m]=ue*y,ee[p]=N,l.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[p]=S>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(Ie/T),f.push(1-I/R),J+=1}}for(let I=0;I<R;I++)for(let ue=0;ue<T;ue++){const Ie=d+ue+G*I,He=d+ue+G*(I+1),je=d+(ue+1)+G*(I+1),Qe=d+(ue+1)+G*I;c.push(Ie,He,Qe),c.push(He,je,Qe),q+=6}a.addGroup(h,q,v),h+=q,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function xn(r){const e={};for(let t=0;t<r.length;t++){const n=ys(r[t]);for(const i in n)e[i]=n[i]}return e}function M0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Hh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const S0={clone:ys,merge:xn};var E0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E0,this.fragmentShader=T0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=M0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Gh extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new V,Lf=new ft,If=new ft;class Mn extends Gh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,Lf,If),t.subVectors(If,Lf)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(eo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $r=-90,Zr=1;class w0 extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Mn($r,Zr,e,t);i.layers=this.layers,this.add(i);const s=new Mn($r,Zr,e,t);s.layers=this.layers,this.add(s);const o=new Mn($r,Zr,e,t);o.layers=this.layers,this.add(o);const a=new Mn($r,Zr,e,t);a.layers=this.layers,this.add(a);const c=new Mn($r,Zr,e,t);c.layers=this.layers,this.add(c);const l=new Mn($r,Zr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Da)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Wh extends nn{constructor(e=[],t=gs,n,i,s,o,a,c,l,u){super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class A0 extends Pr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new To(5,5,5),s=new Xi({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:Bi});s.uniforms.tEquirect.value=t;const o=new $n(i,s),a=t.minFilter;return t.minFilter===hi&&(t.minFilter=Gt),new w0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class En extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const R0={type:"move"};class bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;l.inputState.pinching&&d>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(R0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new En;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class C0 extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class P0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ou,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pn=new V;class ku{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ua("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new wn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ku(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ua("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Df=new V,Uf=new _t,Nf=new _t,L0=new V,Ff=new nt,Wo=new V,Mc=new Mi,Of=new nt,Sc=new qa;class I0 extends $n{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lf,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wo),this.boundingBox.expandByPoint(Wo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wo),this.boundingSphere.expandByPoint(Wo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mc.copy(this.boundingSphere),Mc.applyMatrix4(i),e.ray.intersectsSphere(Mc)!==!1&&(Of.copy(i).invert(),Sc.copy(e.ray).applyMatrix4(Of),!(this.boundingBox!==null&&Sc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Sc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Tm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Uf.fromBufferAttribute(i.attributes.skinIndex,e),Nf.fromBufferAttribute(i.attributes.skinWeight,e),Df.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Nf.getComponent(s);if(o!==0){const a=Uf.getComponent(s);Ff.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(L0.copy(Df).applyMatrix4(Ff),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Xh extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ya extends nn{constructor(e=null,t=1,n=1,i,s,o,a,c,l=Tn,u=Tn,f,d){super(null,o,a,c,l,u,i,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bf=new nt,D0=new nt;class zu{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:D0;Bf.multiplyMatrices(a,t[s]),Bf.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new zu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ya(t,e,e,Kn,Ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(Fe("Skeleton: No bone found with UUID:",s),o=new Xh),this.bones.push(o),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class au extends wn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Jr=new nt,kf=new nt,Xo=[],zf=new qi,U0=new nt,Fs=new $n,Os=new Mi;class N0 extends $n{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new au(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,U0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Jr),zf.copy(e.boundingBox).applyMatrix4(Jr),this.boundingBox.union(zf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Jr),Os.copy(e.boundingSphere).applyMatrix4(Jr),this.boundingSphere.union(Os)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(n),e.ray.intersectsSphere(Os)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Jr),kf.multiplyMatrices(n,Jr),Fs.matrixWorld=kf,Fs.raycast(e,Xo);for(let o=0,a=Xo.length;o<a;o++){const c=Xo[o];c.instanceId=s,c.object=this,t.push(c)}Xo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new au(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ya(new Float32Array(i*this.count),i,this.count,Iu,Ln));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ec=new V,F0=new V,O0=new Je;class vr{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ec.subVectors(n,t).cross(F0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ec),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||O0.getNormalMatrix(e),i=this.coplanarPoint(Ec).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Mi,B0=new ft(.5,.5),qo=new V;class Vu{constructor(e=new vr,t=new vr,n=new vr,i=new vr,s=new vr,o=new vr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],h=s[7],g=s[8],_=s[9],m=s[10],p=s[11],M=s[12],y=s[13],b=s[14],C=s[15];if(i[0].setComponents(l-o,h-u,p-g,C-M).normalize(),i[1].setComponents(l+o,h+u,p+g,C+M).normalize(),i[2].setComponents(l+a,h+f,p+_,C+y).normalize(),i[3].setComponents(l-a,h-f,p-_,C-y).normalize(),n)i[4].setComponents(c,d,m,b).normalize(),i[5].setComponents(l-c,h-d,p-m,C-b).normalize();else if(i[4].setComponents(l-c,h-d,p-m,C-b).normalize(),t===mi)i[5].setComponents(l+c,h+d,p+m,C+b).normalize();else if(t===Da)i[5].setComponents(c,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){mr.center.set(0,0,0);const t=B0.distanceTo(e.center);return mr.radius=.7071067811865476+t,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(qo.x=i.normal.x>0?e.max.x:e.min.x,qo.y=i.normal.y>0?e.max.y:e.min.y,qo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qh extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Na=new V,Fa=new V,Vf=new nt,Bs=new qa,Yo=new Mi,Tc=new V,Hf=new V;class Hu extends Nt{constructor(e=new oi,t=new qh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Na.fromBufferAttribute(t,i-1),Fa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Na.distanceTo(Fa);e.setAttribute("lineDistance",new Vi(n,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(i),Yo.radius+=s,e.ray.intersectsSphere(Yo)===!1)return;Vf.copy(i).invert(),Bs.copy(e.ray).applyMatrix4(Vf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=l){const p=u.getX(_),M=u.getX(_+1),y=Ko(this,e,Bs,c,p,M,_);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(h),p=Ko(this,e,Bs,c,_,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=l){const p=Ko(this,e,Bs,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Ko(this,e,Bs,c,g-1,h,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ko(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Na.fromBufferAttribute(a,i),Fa.fromBufferAttribute(a,s),t.distanceSqToSegment(Na,Fa,Tc,Hf)>n)return;Tc.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Tc);if(!(l<e.near||l>e.far))return{distance:l,point:Hf.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Gf=new V,Wf=new V;class k0 extends Hu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Gf.fromBufferAttribute(t,i),Wf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Gf.distanceTo(Wf);e.setAttribute("lineDistance",new Vi(n,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class z0 extends Hu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Yh extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xf=new nt,cu=new qa,jo=new Mi,$o=new V;class V0 extends Nt{constructor(e=new oi,t=new Yh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(i),jo.radius+=s,e.ray.intersectsSphere(jo)===!1)return;Xf.copy(i).invert(),cu.copy(e.ray).applyMatrix4(Xf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=d,_=h;g<_;g++){const m=l.getX(g);$o.fromBufferAttribute(f,m),qf($o,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,_=h;g<_;g++)$o.fromBufferAttribute(f,g),qf($o,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function qf(r,e,t,n,i,s,o){const a=cu.distanceSqToPoint(r);if(a<t){const c=new V;cu.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Kh extends nn{constructor(e,t,n=Cr,i,s,o,a=Tn,c=Tn,l,u=mo,f=1){if(u!==mo&&u!==go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jh extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ka extends oi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,f=e/a,d=t/c,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let y=0;y<l;y++){const b=y*f-s;g.push(b,-M,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const y=M+l*p,b=M+l*(p+1),C=M+1+l*(p+1),S=M+1+l*p;h.push(y,b,S),h.push(b,C,S)}this.setIndex(h),this.setAttribute("position",new Vi(g,3)),this.setAttribute("normal",new Vi(_,3)),this.setAttribute("uv",new Vi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gu extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uh,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Si extends Gu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class H0 extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class G0 extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Zo(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function W0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function X0(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Yf(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function $h(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class wo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class q0 extends wo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uf,endingEnd:uf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ff:s=e,a=2*t-n;break;case df:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ff:o=e,c=2*n-t;break;case df:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-h)*m+(1.5+h)*_+.5*g,b=h*m-h*_;for(let C=0;C!==a;++C)s[C]=p*o[u+C]+M*o[l+C]+y*o[c+C]+b*o[f+C];return s}}class Y0 extends wo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),f=1-u;for(let d=0;d!==a;++d)s[d]=o[l+d]*f+o[c+d]*u;return s}}class K0 extends wo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ai{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zo(t,this.TimeBufferType),this.values=Zo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zo(e.times,Array),values:Zo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new K0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Y0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new q0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xo:t=this.InterpolantFactoryMethodDiscrete;break;case _o:t=this.InterpolantFactoryMethodLinear;break;case ec:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xo;case this.InterpolantFactoryMethodLinear:return _o;case this.InterpolantFactoryMethodSmooth:return ec}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ct("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(ct("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){ct("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){ct("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&W0(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){ct("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ec,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const f=a*n,d=f-n,h=f+n;for(let g=0;g!==n;++g){const _=t[f+g];if(_!==t[d+g]||_!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const f=a*n,d=o*n;for(let h=0;h!==n;++h)t[d+h]=t[f+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ai.prototype.ValueTypeName="";ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=_o;class ws extends ai{constructor(e,t,n){super(e,t,n)}}ws.prototype.ValueTypeName="bool";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=xo;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Zh extends ai{constructor(e,t,n,i){super(e,t,n,i)}}Zh.prototype.ValueTypeName="color";class bs extends ai{constructor(e,t,n,i){super(e,t,n,i)}}bs.prototype.ValueTypeName="number";class j0 extends wo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)lr.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Ms extends ai{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new j0(this.times,this.values,this.getValueSize(),e)}}Ms.prototype.ValueTypeName="quaternion";Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class As extends ai{constructor(e,t,n){super(e,t,n)}}As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=xo;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;class Ss extends ai{constructor(e,t,n,i){super(e,t,n,i)}}Ss.prototype.ValueTypeName="vector";class $0{constructor(e="",t=-1,n=[],i=wm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=si(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(J0(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(ai.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=X0(c);c=Yf(c,1,u),l=Yf(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new bs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const f=u[1];let d=i[f];d||(i[f]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(Fe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return ct("AnimationClip: No animation in JSONLoader data."),null;const n=function(f,d,h,g,_){if(h.length!==0){const m=[],p=[];$h(h,m,p,g),m.length!==0&&_.push(new f(d,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let f=0;f<l.length;f++){const d=l[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const h={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)h[d[g].morphTargets[_]]=-1;for(const _ in h){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const y=d[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new bs(".morphTargetInfluence["+_+"]",m,p))}c=h.length*o}else{const h=".bones["+t[f].name+"]";n(Ss,h+".position",d,"pos",i),n(Ms,h+".quaternion",d,"rot",i),n(Ss,h+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Z0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bs;case"vector":case"vector2":case"vector3":case"vector4":return Ss;case"color":return Zh;case"quaternion":return Ms;case"bool":case"boolean":return ws;case"string":return As}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function J0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Z0(r.type);if(r.times===void 0){const t=[],n=[];$h(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Fi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Q0{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=l.length;f<d;f+=2){const h=l[f],g=l[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const eg=new Q0;class Ur{constructor(e){this.manager=e!==void 0?e:eg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ur.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ci={};class tg extends Error{constructor(e,t){super(e),this.response=t}}class Wu extends Ur{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Fi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:n,onError:i});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Ci[e],f=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=d?parseInt(d):0,g=h!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){f.read().then(({done:y,value:b})=>{if(y)p.close();else{_+=b.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:h});for(let S=0,T=u.length;S<T;S++){const R=u[S];R.onProgress&&R.onProgress(C)}p.enqueue(b),M()}},y=>{p.error(y)})}}});return new Response(m)}else throw new tg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(d);return l.arrayBuffer().then(g=>h.decode(g))}}}).then(l=>{Fi.add(`file:${e}`,l);const u=Ci[e];delete Ci[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onLoad&&h.onLoad(l)}}).catch(l=>{const u=Ci[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ci[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Qr=new WeakMap;class ng extends Ur{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=Qr.get(o);f===void 0&&(f=[],Qr.set(o,f)),f.push({onLoad:t,onError:i})}return o}const a=vo("img");function c(){u(),t&&t(this);const f=Qr.get(this)||[];for(let d=0;d<f.length;d++){const h=f[d];h.onLoad&&h.onLoad(this)}Qr.delete(this),s.manager.itemEnd(e)}function l(f){u(),i&&i(f),Fi.remove(`image:${e}`);const d=Qr.get(this)||[];for(let h=0;h<d.length;h++){const g=d[h];g.onError&&g.onError(f)}Qr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Fi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class ig extends Ur{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Ya,a=new Wu(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(c){let l;try{l=s.parse(c)}catch(u){if(i!==void 0)i(u);else{u(u);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:Yn,o.wrapT=l.wrapT!==void 0?l.wrapT:Yn,o.magFilter=l.magFilter!==void 0?l.magFilter:Gt,o.minFilter=l.minFilter!==void 0?l.minFilter:Gt,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=hi),l.mipmapCount===1&&(o.minFilter=Gt),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}}class Jh extends Ur{constructor(e){super(e)}load(e,t,n,i){const s=new nn,o=new ng(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ja extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const wc=new nt,Kf=new V,jf=new V;class Xu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vu,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Kf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kf),jf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jf),t.updateMatrixWorld(),wc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rg extends Xu{constructor(){super(new Mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=vs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class sg extends ja{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new rg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const $f=new nt,ks=new V,Ac=new V;class og extends Xu{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ks.setFromMatrixPosition(e.matrixWorld),n.position.copy(ks),Ac.copy(n.position),Ac.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ac),n.updateMatrixWorld(),i.makeTranslation(-ks.x,-ks.y,-ks.z),$f.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($f,n.coordinateSystem,n.reversedDepth)}}class ag extends ja{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new og}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qu extends Gh{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cg extends Xu{constructor(){super(new qu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lu extends ja{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new cg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lg extends ja{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class no{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Rc=new WeakMap;class ug extends Ur{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{if(Rc.has(o)===!0)i&&i(Rc.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Fi.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Rc.set(c,l),Fi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Fi.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class fg extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Yu="\\[\\]\\.:\\/",dg=new RegExp("["+Yu+"]","g"),Ku="[^"+Yu+"]",hg="[^"+Yu.replace("\\.","")+"]",pg=/((?:WC+[\/:])*)/.source.replace("WC",Ku),mg=/(WCOD+)?/.source.replace("WCOD",hg),gg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ku),xg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ku),_g=new RegExp("^"+pg+mg+gg+xg+"$"),vg=["material","materials","bones","map"];class yg{constructor(e,t,n){const i=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class St{constructor(e,t,n){this.path=t,this.parsedPath=n||St.parseTrackName(t),this.node=St.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new St.Composite(e,t,n):new St(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dg,"")}static parseTrackName(e){const t=_g.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);vg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=St.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;ct("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}St.Composite=yg;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Zf(r,e,t,n){const i=bg(n);switch(t){case Lh:return r*e;case Iu:return r*e/i.components*i.byteLength;case Du:return r*e/i.components*i.byteLength;case Uu:return r*e*2/i.components*i.byteLength;case Nu:return r*e*2/i.components*i.byteLength;case Ih:return r*e*3/i.components*i.byteLength;case Kn:return r*e*4/i.components*i.byteLength;case Fu:return r*e*4/i.components*i.byteLength;case _a:case va:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ya:case ba:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Il:case Ul:return Math.max(r,16)*Math.max(e,8)/4;case Ll:case Dl:return Math.max(r,8)*Math.max(e,8)/2;case Nl:case Fl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ol:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case zl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ql:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case jl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case $l:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Jl:case Ql:case eu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case tu:case nu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case iu:case ru:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bg(r){switch(r){case yi:case Ah:return{byteLength:1,components:1};case ho:case Rh:case pi:return{byteLength:2,components:1};case Pu:case Lu:return{byteLength:2,components:4};case Cr:case Cu:case Ln:return{byteLength:4,components:1};case Ch:case Ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ru}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ru);function Qh(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Mg(r){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,f=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=r.SHORT;else if(l instanceof Uint32Array)h=r.UNSIGNED_INT;else if(l instanceof Int32Array)h=r.INT;else if(l instanceof Int8Array)h=r.BYTE;else if(l instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const u=c.array,f=c.updateRanges;if(r.bindBuffer(l,a),f.length===0)r.bufferSubData(l,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];r.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var Sg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eg=`#ifdef USE_ALPHAHASH
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
#endif`,Tg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ag=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cg=`#ifdef USE_AOMAP
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
#endif`,Pg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lg=`#ifdef USE_BATCHING
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
#endif`,Ig=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ug=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ng=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fg=`#ifdef USE_IRIDESCENCE
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
#endif`,Og=`#ifdef USE_BUMPMAP
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
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qg=`#define PI 3.141592653589793
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
} // validated`,Yg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kg=`vec3 transformedNormal = objectNormal;
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
#endif`,jg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$g=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ex=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tx=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ux=`#ifdef USE_GRADIENTMAP
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
}`,fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,px=`uniform bool receiveShadow;
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
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yx=`PhysicalMaterial material;
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
#endif`,bx=`uniform sampler2D dfgLUT;
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
}`,Mx=`
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
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ix=`#if defined( USE_POINTS_UV )
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
#endif`,Dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`#ifdef USE_MORPHTARGETS
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
#endif`,kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xx=`#ifdef USE_NORMALMAP
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
#endif`,qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a_=`float getShadowMask() {
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
}`,c_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l_=`#ifdef USE_SKINNING
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
#endif`,u_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f_=`#ifdef USE_SKINNING
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
#endif`,d_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g_=`#ifdef USE_TRANSMISSION
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
#endif`,x_=`#ifdef USE_TRANSMISSION
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
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S_=`uniform sampler2D t2D;
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`#include <common>
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
}`,C_=`#if DEPTH_PACKING == 3200
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
}`,P_=`#define DISTANCE
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
}`,L_=`#define DISTANCE
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
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`uniform float scale;
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
}`,N_=`uniform vec3 diffuse;
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
}`,F_=`#include <common>
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
}`,O_=`uniform vec3 diffuse;
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
}`,B_=`#define LAMBERT
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
}`,k_=`#define LAMBERT
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
}`,z_=`#define MATCAP
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
}`,V_=`#define MATCAP
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
}`,H_=`#define NORMAL
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
}`,G_=`#define NORMAL
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
}`,W_=`#define PHONG
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
}`,X_=`#define PHONG
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
}`,q_=`#define STANDARD
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
}`,Y_=`#define STANDARD
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
}`,K_=`#define TOON
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
}`,j_=`#define TOON
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
}`,$_=`uniform float size;
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
}`,Z_=`uniform vec3 diffuse;
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
}`,J_=`#include <common>
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
}`,Q_=`uniform vec3 color;
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
}`,ev=`uniform float rotation;
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
}`,tv=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Sg,alphahash_pars_fragment:Eg,alphamap_fragment:Tg,alphamap_pars_fragment:wg,alphatest_fragment:Ag,alphatest_pars_fragment:Rg,aomap_fragment:Cg,aomap_pars_fragment:Pg,batching_pars_vertex:Lg,batching_vertex:Ig,begin_vertex:Dg,beginnormal_vertex:Ug,bsdfs:Ng,iridescence_fragment:Fg,bumpmap_pars_fragment:Og,clipping_planes_fragment:Bg,clipping_planes_pars_fragment:kg,clipping_planes_pars_vertex:zg,clipping_planes_vertex:Vg,color_fragment:Hg,color_pars_fragment:Gg,color_pars_vertex:Wg,color_vertex:Xg,common:qg,cube_uv_reflection_fragment:Yg,defaultnormal_vertex:Kg,displacementmap_pars_vertex:jg,displacementmap_vertex:$g,emissivemap_fragment:Zg,emissivemap_pars_fragment:Jg,colorspace_fragment:Qg,colorspace_pars_fragment:ex,envmap_fragment:tx,envmap_common_pars_fragment:nx,envmap_pars_fragment:ix,envmap_pars_vertex:rx,envmap_physical_pars_fragment:mx,envmap_vertex:sx,fog_vertex:ox,fog_pars_vertex:ax,fog_fragment:cx,fog_pars_fragment:lx,gradientmap_pars_fragment:ux,lightmap_pars_fragment:fx,lights_lambert_fragment:dx,lights_lambert_pars_fragment:hx,lights_pars_begin:px,lights_toon_fragment:gx,lights_toon_pars_fragment:xx,lights_phong_fragment:_x,lights_phong_pars_fragment:vx,lights_physical_fragment:yx,lights_physical_pars_fragment:bx,lights_fragment_begin:Mx,lights_fragment_maps:Sx,lights_fragment_end:Ex,logdepthbuf_fragment:Tx,logdepthbuf_pars_fragment:wx,logdepthbuf_pars_vertex:Ax,logdepthbuf_vertex:Rx,map_fragment:Cx,map_pars_fragment:Px,map_particle_fragment:Lx,map_particle_pars_fragment:Ix,metalnessmap_fragment:Dx,metalnessmap_pars_fragment:Ux,morphinstance_vertex:Nx,morphcolor_vertex:Fx,morphnormal_vertex:Ox,morphtarget_pars_vertex:Bx,morphtarget_vertex:kx,normal_fragment_begin:zx,normal_fragment_maps:Vx,normal_pars_fragment:Hx,normal_pars_vertex:Gx,normal_vertex:Wx,normalmap_pars_fragment:Xx,clearcoat_normal_fragment_begin:qx,clearcoat_normal_fragment_maps:Yx,clearcoat_pars_fragment:Kx,iridescence_pars_fragment:jx,opaque_fragment:$x,packing:Zx,premultiplied_alpha_fragment:Jx,project_vertex:Qx,dithering_fragment:e_,dithering_pars_fragment:t_,roughnessmap_fragment:n_,roughnessmap_pars_fragment:i_,shadowmap_pars_fragment:r_,shadowmap_pars_vertex:s_,shadowmap_vertex:o_,shadowmask_pars_fragment:a_,skinbase_vertex:c_,skinning_pars_vertex:l_,skinning_vertex:u_,skinnormal_vertex:f_,specularmap_fragment:d_,specularmap_pars_fragment:h_,tonemapping_fragment:p_,tonemapping_pars_fragment:m_,transmission_fragment:g_,transmission_pars_fragment:x_,uv_pars_fragment:__,uv_pars_vertex:v_,uv_vertex:y_,worldpos_vertex:b_,background_vert:M_,background_frag:S_,backgroundCube_vert:E_,backgroundCube_frag:T_,cube_vert:w_,cube_frag:A_,depth_vert:R_,depth_frag:C_,distanceRGBA_vert:P_,distanceRGBA_frag:L_,equirect_vert:I_,equirect_frag:D_,linedashed_vert:U_,linedashed_frag:N_,meshbasic_vert:F_,meshbasic_frag:O_,meshlambert_vert:B_,meshlambert_frag:k_,meshmatcap_vert:z_,meshmatcap_frag:V_,meshnormal_vert:H_,meshnormal_frag:G_,meshphong_vert:W_,meshphong_frag:X_,meshphysical_vert:q_,meshphysical_frag:Y_,meshtoon_vert:K_,meshtoon_frag:j_,points_vert:$_,points_frag:Z_,shadow_vert:J_,shadow_frag:Q_,sprite_vert:ev,sprite_frag:tv},ge={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},fi={basic:{uniforms:xn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:xn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:xn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:xn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:xn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new $e(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:xn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:xn([ge.points,ge.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:xn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:xn([ge.common,ge.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:xn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:xn([ge.sprite,ge.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:xn([ge.common,ge.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:xn([ge.lights,ge.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};fi.physical={uniforms:xn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Jo={r:0,b:0,g:0},gr=new bi,nv=new nt;function iv(r,e,t,n,i,s,o){const a=new $e(0);let c=s===!0?0:1,l,u,f=null,d=0,h=null;function g(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function _(y){let b=!1;const C=g(y);C===null?p(a,c):C&&C.isColor&&(p(C,1),b=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,b){const C=g(b);C&&(C.isCubeTexture||C.mapping===Wa)?(u===void 0&&(u=new $n(new To(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:ys(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),gr.copy(b.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nv.makeRotationFromEuler(gr)),u.material.toneMapped=dt.getTransfer(C.colorSpace)!==Tt,(f!==C||d!==C.version||h!==r.toneMapping)&&(u.material.needsUpdate=!0,f=C,d=C.version,h=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new $n(new Ka(2,2),new Xi({name:"BackgroundMaterial",uniforms:ys(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=dt.getTransfer(C.colorSpace)!==Tt,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||d!==C.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,f=C,d=C.version,h=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,b){y.getRGB(Jo,Hh(r)),n.buffers.color.setClear(Jo.r,Jo.g,Jo.b,b,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),c=b,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:m,dispose:M}}function rv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(x,A,L,F,N){let G=!1;const H=f(F,L,A);s!==H&&(s=H,l(s.object)),G=h(x,F,L,N),G&&g(x,F,L,N),N!==null&&e.update(N,r.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,b(x,A,L,F),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return r.createVertexArray()}function l(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function f(x,A,L){const F=L.wireframe===!0;let N=n[x.id];N===void 0&&(N={},n[x.id]=N);let G=N[A.id];G===void 0&&(G={},N[A.id]=G);let H=G[F];return H===void 0&&(H=d(c()),G[F]=H),H}function d(x){const A=[],L=[],F=[];for(let N=0;N<t;N++)A[N]=0,L[N]=0,F[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:L,attributeDivisors:F,object:x,attributes:{},index:null}}function h(x,A,L,F){const N=s.attributes,G=A.attributes;let H=0;const J=L.getAttributes();for(const q in J)if(J[q].location>=0){const I=N[q];let ue=G[q];if(ue===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor)),I===void 0||I.attribute!==ue||ue&&I.data!==ue.data)return!0;H++}return s.attributesNum!==H||s.index!==F}function g(x,A,L,F){const N={},G=A.attributes;let H=0;const J=L.getAttributes();for(const q in J)if(J[q].location>=0){let I=G[q];I===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(I=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(I=x.instanceColor));const ue={};ue.attribute=I,I&&I.data&&(ue.data=I.data),N[q]=ue,H++}s.attributes=N,s.attributesNum=H,s.index=F}function _(){const x=s.newAttributes;for(let A=0,L=x.length;A<L;A++)x[A]=0}function m(x){p(x,0)}function p(x,A){const L=s.newAttributes,F=s.enabledAttributes,N=s.attributeDivisors;L[x]=1,F[x]===0&&(r.enableVertexAttribArray(x),F[x]=1),N[x]!==A&&(r.vertexAttribDivisor(x,A),N[x]=A)}function M(){const x=s.newAttributes,A=s.enabledAttributes;for(let L=0,F=A.length;L<F;L++)A[L]!==x[L]&&(r.disableVertexAttribArray(L),A[L]=0)}function y(x,A,L,F,N,G,H){H===!0?r.vertexAttribIPointer(x,A,L,N,G):r.vertexAttribPointer(x,A,L,F,N,G)}function b(x,A,L,F){_();const N=F.attributes,G=L.getAttributes(),H=A.defaultAttributeValues;for(const J in G){const q=G[J];if(q.location>=0){let ee=N[J];if(ee===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor)),ee!==void 0){const I=ee.normalized,ue=ee.itemSize,Ie=e.get(ee);if(Ie===void 0)continue;const He=Ie.buffer,je=Ie.type,Qe=Ie.bytesPerElement,K=je===r.INT||je===r.UNSIGNED_INT||ee.gpuType===Cu;if(ee.isInterleavedBufferAttribute){const j=ee.data,oe=j.stride,Ee=ee.offset;if(j.isInstancedInterleavedBuffer){for(let Te=0;Te<q.locationSize;Te++)p(q.location+Te,j.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Te=0;Te<q.locationSize;Te++)m(q.location+Te);r.bindBuffer(r.ARRAY_BUFFER,He);for(let Te=0;Te<q.locationSize;Te++)y(q.location+Te,ue/q.locationSize,je,I,oe*Qe,(Ee+ue/q.locationSize*Te)*Qe,K)}else{if(ee.isInstancedBufferAttribute){for(let j=0;j<q.locationSize;j++)p(q.location+j,ee.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let j=0;j<q.locationSize;j++)m(q.location+j);r.bindBuffer(r.ARRAY_BUFFER,He);for(let j=0;j<q.locationSize;j++)y(q.location+j,ue/q.locationSize,je,I,ue*Qe,ue/q.locationSize*j*Qe,K)}}else if(H!==void 0){const I=H[J];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(q.location,I);break;case 3:r.vertexAttrib3fv(q.location,I);break;case 4:r.vertexAttrib4fv(q.location,I);break;default:r.vertexAttrib1fv(q.location,I)}}}}M()}function C(){R();for(const x in n){const A=n[x];for(const L in A){const F=A[L];for(const N in F)u(F[N].object),delete F[N];delete A[L]}delete n[x]}}function S(x){if(n[x.id]===void 0)return;const A=n[x.id];for(const L in A){const F=A[L];for(const N in F)u(F[N].object),delete F[N];delete A[L]}delete n[x.id]}function T(x){for(const A in n){const L=n[A];if(L[x.id]===void 0)continue;const F=L[x.id];for(const N in F)u(F[N].object),delete F[N];delete L[x.id]}}function R(){v(),o=!0,s!==i&&(s=i,l(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:v,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function sv(r,e,t){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,f){f!==0&&(r.drawArraysInstanced(n,l,u,f),t.update(u,n,f))}function a(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];t.update(h,n,1)}function c(l,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ov(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==Kn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==yi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ln&&!R)}function c(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Fe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,S=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:C,maxSamples:S}}function av(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new vr,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||i;return i=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):l();else{const M=s?0:n,y=M*4;let b=p.clippingState||null;c.value=b,b=u(g,d,y,h);for(let C=0;C!==y;++C)b[C]=t[C];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=h+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,b=h;y!==_;++y,b+=4)o.copy(f[y]).applyMatrix4(M,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function cv(r){let e=new WeakMap;function t(o,a){return a===Cl?o.mapping=gs:a===Pl&&(o.mapping=xs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Cl||a===Pl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new A0(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const ir=4,Jf=[.125,.215,.35,.446,.526,.582],Sr=20,lv=256,zs=new qu,Qf=new $e;let Cc=null,Pc=0,Lc=0,Ic=!1;const uv=new V;class uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=uv}=s;Cc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cc,Pc,Lc),this._renderer.xr.enabled=Ic,e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:pi,format:Kn,colorSpace:fn,depthBuffer:!1},i=ed(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ed(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fv(s)),this._blurMaterial=hv(s,e,t)}return i}_compileMaterial(e){const t=new $n(new oi,e);this._renderer.compile(t,zs)}_sceneToCubeUV(e,t,n,i,s){const c=new Mn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Qf),f.toneMapping=ki,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $n(new To,new Ni({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Qf),p=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):b===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));const C=this._cubeSize;es(i,b*C,y>2?C:0,C,C),f.setRenderTarget(i),p&&f.render(_,c),f.render(e,c)}f.toneMapping=h,f.autoClear=d,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gs||e.mapping===xs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=td());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;es(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,zs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget;if(this._ggxMaterial===null){const M=3*Math.max(this._cubeSize,16),y=4*this._cubeSize;this._ggxMaterial=dv(this._lodMax,M,y)}const o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),d=.05+l*.95,h=f*d,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-ir?n-g+ir:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=g-t,es(s,m,p,3*_,2*_),i.setRenderTarget(s),i.render(a,zs),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,es(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(a,zs)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ct("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[i];f.material=l;const d=l.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Sr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Sr;m>Sr&&Fe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Sr}`);const p=[];let M=0;for(let T=0;T<Sr;++T){const R=T/_,v=Math.exp(-R*R/2);p.push(v),T===0?M+=v:T<m&&(M+=2*v)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const b=this._sizeLods[i],C=3*b*(i>y-ir?i-y+ir:0),S=4*(this._cubeSize-b);es(t,C,S,3*b,2*b),c.setRenderTarget(t),c.render(f,zs)}}function fv(r){const e=[],t=[],n=[];let i=r;const s=r-ir+1+Jf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-ir?c=Jf[o-r+ir-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*h),y=new Float32Array(m*g*h),b=new Float32Array(p*g*h);for(let S=0;S<h;S++){const T=S%3*2/3-1,R=S>2?0:-1,v=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];M.set(v,_*g*S),y.set(d,m*g*S);const x=[S,S,S,S,S,S];b.set(x,p*g*S)}const C=new oi;C.setAttribute("position",new wn(M,_)),C.setAttribute("uv",new wn(y,m)),C.setAttribute("faceIndex",new wn(b,p)),n.push(new $n(C,null)),i>ir&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ed(r,e,t){const n=new Pr(r,e,t);return n.texture.mapping=Wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function es(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function dv(r,e,t){return new Xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function hv(r,e,t){const n=new Float32Array(Sr),i=new V(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$a(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function td(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function nd(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function $a(){return`

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
	`}function pv(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Cl||c===Pl,u=c===gs||c===xs;if(l||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new uu(r)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return l&&h&&h.height>0||u&&h&&i(h)?(t===null&&(t=new uu(r)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function mv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&yo("WebGLRenderer: "+n+" extension not supported."),i}}}function gv(r,e,t,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const h in d)e.update(d[h],r.ARRAY_BUFFER)}function l(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const M=h.array;_=h.version;for(let y=0,b=M.length;y<b;y+=3){const C=M[y+0],S=M[y+1],T=M[y+2];d.push(C,S,S,T,T,C)}}else if(g!==void 0){const M=g.array;_=g.version;for(let y=0,b=M.length/3-1;y<b;y+=3){const C=y+0,S=y+1,T=y+2;d.push(C,S,S,T,T,C)}}else return;const m=new(Fh(d)?Vh:zh)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function xv(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,h){r.drawElements(n,h,s,d*o),t.update(h,n,1)}function l(d,h,g){g!==0&&(r.drawElementsInstanced(n,h,s,d*o,g),t.update(h,n,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,n,1)}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,s,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=h[M]*_[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function _v(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:ct("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function vv(r,e,t){const n=new WeakMap,i=new _t;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let v=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;h===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let b=a.attributes.position.count*y,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const S=new Float32Array(b*C*4*f),T=new Oh(S,b,C,f);T.type=Ln,T.needsUpdate=!0;const R=y*4;for(let x=0;x<f;x++){const A=m[x],L=p[x],F=M[x],N=b*C*4*x;for(let G=0;G<A.count;G++){const H=G*R;h===!0&&(i.fromBufferAttribute(A,G),S[N+H+0]=i.x,S[N+H+1]=i.y,S[N+H+2]=i.z,S[N+H+3]=0),g===!0&&(i.fromBufferAttribute(L,G),S[N+H+4]=i.x,S[N+H+5]=i.y,S[N+H+6]=i.z,S[N+H+7]=0),_===!0&&(i.fromBufferAttribute(F,G),S[N+H+8]=i.x,S[N+H+9]=i.y,S[N+H+10]=i.z,S[N+H+11]=F.itemSize===4?i.w:1)}}d={count:f,texture:T,size:new ft(b,C)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let h=0;for(let _=0;_<l.length;_++)h+=l[_];const g=a.morphTargetsRelative?1:1-h;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function yv(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);if(i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return f}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const ep=new nn,id=new Kh(1,1),tp=new Oh,np=new a0,ip=new Wh,rd=[],sd=[],od=new Float32Array(16),ad=new Float32Array(9),cd=new Float32Array(4);function Rs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=rd[i];if(s===void 0&&(s=new Float32Array(i),rd[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function jt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function $t(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Za(r,e){let t=sd[e];t===void 0&&(t=new Int32Array(e),sd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function bv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Mv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2fv(this.addr,e),$t(t,e)}}function Sv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;r.uniform3fv(this.addr,e),$t(t,e)}}function Ev(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4fv(this.addr,e),$t(t,e)}}function Tv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,n))return;cd.set(n),r.uniformMatrix2fv(this.addr,!1,cd),$t(t,n)}}function wv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,n))return;ad.set(n),r.uniformMatrix3fv(this.addr,!1,ad),$t(t,n)}}function Av(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,n))return;od.set(n),r.uniformMatrix4fv(this.addr,!1,od),$t(t,n)}}function Rv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Cv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2iv(this.addr,e),$t(t,e)}}function Pv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3iv(this.addr,e),$t(t,e)}}function Lv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4iv(this.addr,e),$t(t,e)}}function Iv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Dv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2uiv(this.addr,e),$t(t,e)}}function Uv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3uiv(this.addr,e),$t(t,e)}}function Nv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4uiv(this.addr,e),$t(t,e)}}function Fv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(id.compareFunction=Nh,s=id):s=ep,t.setTexture2D(e||s,i)}function Ov(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||np,i)}function Bv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ip,i)}function kv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||tp,i)}function zv(r){switch(r){case 5126:return bv;case 35664:return Mv;case 35665:return Sv;case 35666:return Ev;case 35674:return Tv;case 35675:return wv;case 35676:return Av;case 5124:case 35670:return Rv;case 35667:case 35671:return Cv;case 35668:case 35672:return Pv;case 35669:case 35673:return Lv;case 5125:return Iv;case 36294:return Dv;case 36295:return Uv;case 36296:return Nv;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return kv}}function Vv(r,e){r.uniform1fv(this.addr,e)}function Hv(r,e){const t=Rs(e,this.size,2);r.uniform2fv(this.addr,t)}function Gv(r,e){const t=Rs(e,this.size,3);r.uniform3fv(this.addr,t)}function Wv(r,e){const t=Rs(e,this.size,4);r.uniform4fv(this.addr,t)}function Xv(r,e){const t=Rs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function qv(r,e){const t=Rs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Yv(r,e){const t=Rs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Kv(r,e){r.uniform1iv(this.addr,e)}function jv(r,e){r.uniform2iv(this.addr,e)}function $v(r,e){r.uniform3iv(this.addr,e)}function Zv(r,e){r.uniform4iv(this.addr,e)}function Jv(r,e){r.uniform1uiv(this.addr,e)}function Qv(r,e){r.uniform2uiv(this.addr,e)}function ey(r,e){r.uniform3uiv(this.addr,e)}function ty(r,e){r.uniform4uiv(this.addr,e)}function ny(r,e,t){const n=this.cache,i=e.length,s=Za(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ep,s[o])}function iy(r,e,t){const n=this.cache,i=e.length,s=Za(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||np,s[o])}function ry(r,e,t){const n=this.cache,i=e.length,s=Za(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ip,s[o])}function sy(r,e,t){const n=this.cache,i=e.length,s=Za(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||tp,s[o])}function oy(r){switch(r){case 5126:return Vv;case 35664:return Hv;case 35665:return Gv;case 35666:return Wv;case 35674:return Xv;case 35675:return qv;case 35676:return Yv;case 5124:case 35670:return Kv;case 35667:case 35671:return jv;case 35668:case 35672:return $v;case 35669:case 35673:return Zv;case 5125:return Jv;case 36294:return Qv;case 36295:return ey;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return sy}}class ay{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zv(t.type)}}class cy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oy(t.type)}}class ly{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Dc=/(\w+)(\])?(\[|\.)?/g;function ld(r,e){r.seq.push(e),r.map[e.id]=e}function uy(r,e,t){const n=r.name,i=n.length;for(Dc.lastIndex=0;;){const s=Dc.exec(n),o=Dc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ld(t,l===void 0?new ay(a,r,e):new cy(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new ly(a),ld(t,f)),t=f}}}class Ma{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);uy(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ud(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const fy=37297;let dy=0;function hy(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const fd=new Je;function py(r){dt._getMatrix(fd,dt.workingColorSpace,r);const e=`mat3( ${fd.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(r)){case Ia:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function dd(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+hy(r.getShaderSource(e),a)}else return s}function my(r,e){const t=py(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gy(r,e){let t;switch(e){case _m:t="Linear";break;case vm:t="Reinhard";break;case ym:t="Cineon";break;case bm:t="ACESFilmic";break;case Sm:t="AgX";break;case Em:t="Neutral";break;case Mm:t="Custom";break;default:Fe("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qo=new V;function xy(){dt.getLuminanceCoefficients(Qo);const r=Qo.x.toFixed(4),e=Qo.y.toFixed(4),t=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _y(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function vy(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yy(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ks(r){return r!==""}function hd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const by=/^[ \t]*#include +<([\w\d./]+)>/gm;function fu(r){return r.replace(by,Sy)}const My=new Map;function Sy(r,e){let t=tt[e];if(t===void 0){const n=My.get(e);if(n!==void 0)t=tt[n],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fu(t)}const Ey=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(r){return r.replace(Ey,Ty)}function Ty(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function gd(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function wy(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Mh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Sh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Ay(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case gs:case xs:e="ENVMAP_TYPE_CUBE";break;case Wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ry(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function Cy(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Eh:e="ENVMAP_BLENDING_MULTIPLY";break;case gm:e="ENVMAP_BLENDING_MIX";break;case xm:e="ENVMAP_BLENDING_ADD";break}return e}function Py(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ly(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=wy(t),l=Ay(t),u=Ry(t),f=Cy(t),d=Py(t),h=_y(t),g=vy(s),_=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),p.length>0&&(p+=`
`)):(m=[gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),p=[gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?tt.tonemapping_pars_fragment:"",t.toneMapping!==ki?gy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,my("linearToOutputTexel",t.outputColorSpace),xy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),o=fu(o),o=hd(o,t),o=pd(o,t),a=fu(a),a=hd(a,t),a=pd(a,t),o=md(o),a=md(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===pf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+o,b=M+p+a,C=ud(i,i.VERTEX_SHADER,y),S=ud(i,i.FRAGMENT_SHADER,b);i.attachShader(_,C),i.attachShader(_,S),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(A){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(_)||"",F=i.getShaderInfoLog(C)||"",N=i.getShaderInfoLog(S)||"",G=L.trim(),H=F.trim(),J=N.trim();let q=!0,ee=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,S);else{const I=dd(i,C,"vertex"),ue=dd(i,S,"fragment");ct("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+G+`
`+I+`
`+ue)}else G!==""?Fe("WebGLProgram: Program Info Log:",G):(H===""||J==="")&&(ee=!1);ee&&(A.diagnostics={runnable:q,programLog:G,vertexShader:{log:H,prefix:m},fragmentShader:{log:J,prefix:p}})}i.deleteShader(C),i.deleteShader(S),R=new Ma(i,_),v=yy(i,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,fy)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=S,this}let Iy=0;class Dy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Uy(e),t.set(e,n)),n}}class Uy{constructor(e){this.id=Iy++,this.code=e,this.usedTimes=0}}function Ny(r,e,t,n,i,s,o){const a=new Bh,c=new Dy,l=new Set,u=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,x,A,L,F){const N=L.fog,G=F.geometry,H=v.isMeshStandardMaterial?L.environment:null,J=(v.isMeshStandardMaterial?t:e).get(v.envMap||H),q=J&&J.mapping===Wa?J.image.height:null,ee=g[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&Fe("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const I=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ue=I!==void 0?I.length:0;let Ie=0;G.morphAttributes.position!==void 0&&(Ie=1),G.morphAttributes.normal!==void 0&&(Ie=2),G.morphAttributes.color!==void 0&&(Ie=3);let He,je,Qe,K;if(ee){const ve=fi[ee];He=ve.vertexShader,je=ve.fragmentShader}else He=v.vertexShader,je=v.fragmentShader,c.update(v),Qe=c.getVertexShaderID(v),K=c.getFragmentShaderID(v);const j=r.getRenderTarget(),oe=r.state.buffers.depth.getReversed(),Ee=F.isInstancedMesh===!0,Te=F.isBatchedMesh===!0,ze=!!v.map,ht=!!v.matcap,_e=!!J,qe=!!v.aoMap,U=!!v.lightMap,Xe=!!v.bumpMap,z=!!v.normalMap,et=!!v.displacementMap,ye=!!v.emissiveMap,pt=!!v.metalnessMap,pe=!!v.roughnessMap,ke=v.anisotropy>0,P=v.clearcoat>0,E=v.dispersion>0,k=v.iridescence>0,Z=v.sheen>0,$=v.transmission>0,Y=ke&&!!v.anisotropyMap,be=P&&!!v.clearcoatMap,ce=P&&!!v.clearcoatNormalMap,Pe=P&&!!v.clearcoatRoughnessMap,fe=k&&!!v.iridescenceMap,ne=k&&!!v.iridescenceThicknessMap,ie=Z&&!!v.sheenColorMap,De=Z&&!!v.sheenRoughnessMap,Le=!!v.specularMap,de=!!v.specularColorMap,Oe=!!v.specularIntensityMap,D=$&&!!v.transmissionMap,le=$&&!!v.thicknessMap,re=!!v.gradientMap,se=!!v.alphaMap,te=v.alphaTest>0,Q=!!v.alphaHash,Me=!!v.extensions;let Be=ki;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Be=r.toneMapping);const xt={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:He,fragmentShader:je,defines:v.defines,customVertexShaderID:Qe,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Te,batchingColor:Te&&F._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&F.instanceColor!==null,instancingMorph:Ee&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?r.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:fn,alphaToCoverage:!!v.alphaToCoverage,map:ze,matcap:ht,envMap:_e,envMapMode:_e&&J.mapping,envMapCubeUVHeight:q,aoMap:qe,lightMap:U,bumpMap:Xe,normalMap:z,displacementMap:d&&et,emissiveMap:ye,normalMapObjectSpace:z&&v.normalMapType===Pm,normalMapTangentSpace:z&&v.normalMapType===Uh,metalnessMap:pt,roughnessMap:pe,anisotropy:ke,anisotropyMap:Y,clearcoat:P,clearcoatMap:be,clearcoatNormalMap:ce,clearcoatRoughnessMap:Pe,dispersion:E,iridescence:k,iridescenceMap:fe,iridescenceThicknessMap:ne,sheen:Z,sheenColorMap:ie,sheenRoughnessMap:De,specularMap:Le,specularColorMap:de,specularIntensityMap:Oe,transmission:$,transmissionMap:D,thicknessMap:le,gradientMap:re,opaque:v.transparent===!1&&v.blending===as&&v.alphaToCoverage===!1,alphaMap:se,alphaTest:te,alphaHash:Q,combine:v.combine,mapUv:ze&&_(v.map.channel),aoMapUv:qe&&_(v.aoMap.channel),lightMapUv:U&&_(v.lightMap.channel),bumpMapUv:Xe&&_(v.bumpMap.channel),normalMapUv:z&&_(v.normalMap.channel),displacementMapUv:et&&_(v.displacementMap.channel),emissiveMapUv:ye&&_(v.emissiveMap.channel),metalnessMapUv:pt&&_(v.metalnessMap.channel),roughnessMapUv:pe&&_(v.roughnessMap.channel),anisotropyMapUv:Y&&_(v.anisotropyMap.channel),clearcoatMapUv:be&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(v.sheenRoughnessMap.channel),specularMapUv:Le&&_(v.specularMap.channel),specularColorMapUv:de&&_(v.specularColorMap.channel),specularIntensityMapUv:Oe&&_(v.specularIntensityMap.channel),transmissionMapUv:D&&_(v.transmissionMap.channel),thicknessMapUv:le&&_(v.thicknessMap.channel),alphaMapUv:se&&_(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(z||ke),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(ze||se),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:oe,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ie,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&A.length>0,shadowMapType:r.shadowMap.type,toneMapping:Be,decodeVideoTexture:ze&&v.map.isVideoTexture===!0&&dt.getTransfer(v.map.colorSpace)===Tt,decodeVideoTextureEmissive:ye&&v.emissiveMap.isVideoTexture===!0&&dt.getTransfer(v.emissiveMap.colorSpace)===Tt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===di,flipSided:v.side===In,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Me&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&v.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function p(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const A in v.defines)x.push(A),x.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(M(x,v),y(x,v),x.push(r.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function M(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function y(v,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),v.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),v.push(a.mask)}function b(v){const x=g[v.type];let A;if(x){const L=fi[x];A=S0.clone(L.uniforms)}else A=v.uniforms;return A}function C(v,x){let A;for(let L=0,F=u.length;L<F;L++){const N=u[L];if(N.cacheKey===x){A=N,++A.usedTimes;break}}return A===void 0&&(A=new Ly(r,x,v,s),u.push(A)),A}function S(v){if(--v.usedTimes===0){const x=u.indexOf(v);u[x]=u[u.length-1],u.pop(),v.destroy()}}function T(v){c.remove(v)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:C,releaseProgram:S,releaseShaderCache:T,programs:u,dispose:R}}function Fy(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Oy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function xd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _d(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,h,g,_,m){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?n.push(p):h.transparent===!0?i.push(p):t.push(p)}function c(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?n.unshift(p):h.transparent===!0?i.unshift(p):t.unshift(p)}function l(f,d){t.length>1&&t.sort(f||Oy),n.length>1&&n.sort(d||xd),i.length>1&&i.sort(d||xd)}function u(){for(let f=e,d=r.length;f<d;f++){const h=r[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function By(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new _d,r.set(n,[o])):i>=s.length?(o=new _d,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function ky(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new $e};break;case"SpotLight":t={position:new V,direction:new V,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new V,halfWidth:new V,halfHeight:new V};break}return r[e.id]=t,t}}}function zy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Vy=0;function Hy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Gy(r){const e=new ky,t=zy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);const i=new V,s=new nt,o=new nt;function a(l){let u=0,f=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,M=0,y=0,b=0,C=0,S=0,T=0;l.sort(Hy);for(let v=0,x=l.length;v<x;v++){const A=l[v],L=A.color,F=A.intensity,N=A.distance,G=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=L.r*F,f+=L.g*F,d+=L.b*F;else if(A.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(A.sh.coefficients[H],F);T++}else if(A.isDirectionalLight){const H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const J=A.shadow,q=t.get(A);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,n.directionalShadow[h]=q,n.directionalShadowMap[h]=G,n.directionalShadowMatrix[h]=A.shadow.matrix,M++}n.directional[h]=H,h++}else if(A.isSpotLight){const H=e.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(L).multiplyScalar(F),H.distance=N,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,n.spot[_]=H;const J=A.shadow;if(A.map&&(n.spotLightMap[C]=A.map,C++,J.updateMatrices(A),A.castShadow&&S++),n.spotLightMatrix[_]=J.matrix,A.castShadow){const q=t.get(A);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=G,b++}_++}else if(A.isRectAreaLight){const H=e.get(A);H.color.copy(L).multiplyScalar(F),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=H,m++}else if(A.isPointLight){const H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){const J=A.shadow,q=t.get(A);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,q.shadowCameraNear=J.camera.near,q.shadowCameraFar=J.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=A.shadow.matrix,y++}n.point[g]=H,g++}else if(A.isHemisphereLight){const H=e.get(A);H.skyColor.copy(A.color).multiplyScalar(F),H.groundColor.copy(A.groundColor).multiplyScalar(F),n.hemi[p]=H,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==h||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==y||R.numSpotShadows!==b||R.numSpotMaps!==C||R.numLightProbes!==T)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+C-S,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,R.directionalLength=h,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=y,R.numSpotShadows=b,R.numSpotMaps=C,R.numLightProbes=T,n.version=Vy++)}function c(l,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const y=l[p];if(y.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),f++}else if(y.isSpotLight){const b=n.spot[h];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),h++}else if(y.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function vd(r){const e=new Gy(r),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Wy(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new vd(r),e.set(i,[a])):s>=o.length?(a=new vd(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qy=`uniform sampler2D shadow_pass;
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
}`;function Yy(r,e,t){let n=new Vu;const i=new ft,s=new ft,o=new _t,a=new H0({depthPacking:Cm}),c=new G0,l={},u=t.maxTextureSize,f={[Wi]:In,[In]:Wi,[di]:di},d=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Xy,fragmentShader:qy}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new oi;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $n(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mh;let p=this.type;this.render=function(S,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const v=r.getRenderTarget(),x=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Bi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=p!==Ii&&this.type===Ii,N=p===Ii&&this.type!==Ii;for(let G=0,H=S.length;G<H;G++){const J=S[G],q=J.shadow;if(q===void 0){Fe("WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const ee=q.getFrameExtents();if(i.multiply(ee),s.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ee.x),i.x=s.x*ee.x,q.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ee.y),i.y=s.y*ee.y,q.mapSize.y=s.y)),q.map===null||F===!0||N===!0){const ue=this.type!==Ii?{minFilter:Tn,magFilter:Tn}:{};q.map!==null&&q.map.dispose(),q.map=new Pr(i.x,i.y,ue),q.map.texture.name=J.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const I=q.getViewportCount();for(let ue=0;ue<I;ue++){const Ie=q.getViewport(ue);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),L.viewport(o),q.updateMatrices(J,ue),n=q.getFrustum(),b(T,R,q.camera,J,this.type)}q.isPointLightShadow!==!0&&this.type===Ii&&M(q,R),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,x,A)};function M(S,T){const R=e.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,h.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Pr(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(T,null,R,d,_,null),h.uniforms.shadow_pass.value=S.mapPass.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(T,null,R,h,_,null)}function y(S,T,R,v){let x=null;const A=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)x=A;else if(x=R.isPointLight===!0?c:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const L=x.uuid,F=T.uuid;let N=l[L];N===void 0&&(N={},l[L]=N);let G=N[F];G===void 0&&(G=x.clone(),N[F]=G,T.addEventListener("dispose",C)),x=G}if(x.visible=T.visible,x.wireframe=T.wireframe,v===Ii?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:f[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const L=r.properties.get(x);L.light=R}return x}function b(S,T,R,v,x){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===Ii)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const F=e.update(S),N=S.material;if(Array.isArray(N)){const G=F.groups;for(let H=0,J=G.length;H<J;H++){const q=G[H],ee=N[q.materialIndex];if(ee&&ee.visible){const I=y(S,ee,v,x);S.onBeforeShadow(r,S,T,R,F,I,q),r.renderBufferDirect(R,null,F,I,S,q),S.onAfterShadow(r,S,T,R,F,I,q)}}}else if(N.visible){const G=y(S,N,v,x);S.onBeforeShadow(r,S,T,R,F,G,null),r.renderBufferDirect(R,null,F,G,S,null),S.onAfterShadow(r,S,T,R,F,G,null)}}const L=S.children;for(let F=0,N=L.length;F<N;F++)b(L[F],T,R,v,x)}function C(S){S.target.removeEventListener("dispose",C);for(const R in l){const v=l[R],x=S.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}const Ky={[Ml]:Sl,[El]:Al,[Tl]:Rl,[ms]:wl,[Sl]:Ml,[Al]:El,[Rl]:Tl,[wl]:ms};function jy(r,e){function t(){let D=!1;const le=new _t;let re=null;const se=new _t(0,0,0,0);return{setMask:function(te){re!==te&&!D&&(r.colorMask(te,te,te,te),re=te)},setLocked:function(te){D=te},setClear:function(te,Q,Me,Be,xt){xt===!0&&(te*=Be,Q*=Be,Me*=Be),le.set(te,Q,Me,Be),se.equals(le)===!1&&(r.clearColor(te,Q,Me,Be),se.copy(le))},reset:function(){D=!1,re=null,se.set(-1,0,0,0)}}}function n(){let D=!1,le=!1,re=null,se=null,te=null;return{setReversed:function(Q){if(le!==Q){const Me=e.get("EXT_clip_control");Q?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),le=Q;const Be=te;te=null,this.setClear(Be)}},getReversed:function(){return le},setTest:function(Q){Q?j(r.DEPTH_TEST):oe(r.DEPTH_TEST)},setMask:function(Q){re!==Q&&!D&&(r.depthMask(Q),re=Q)},setFunc:function(Q){if(le&&(Q=Ky[Q]),se!==Q){switch(Q){case Ml:r.depthFunc(r.NEVER);break;case Sl:r.depthFunc(r.ALWAYS);break;case El:r.depthFunc(r.LESS);break;case ms:r.depthFunc(r.LEQUAL);break;case Tl:r.depthFunc(r.EQUAL);break;case wl:r.depthFunc(r.GEQUAL);break;case Al:r.depthFunc(r.GREATER);break;case Rl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}se=Q}},setLocked:function(Q){D=Q},setClear:function(Q){te!==Q&&(le&&(Q=1-Q),r.clearDepth(Q),te=Q)},reset:function(){D=!1,re=null,se=null,te=null,le=!1}}}function i(){let D=!1,le=null,re=null,se=null,te=null,Q=null,Me=null,Be=null,xt=null;return{setTest:function(ve){D||(ve?j(r.STENCIL_TEST):oe(r.STENCIL_TEST))},setMask:function(ve){le!==ve&&!D&&(r.stencilMask(ve),le=ve)},setFunc:function(ve,Ce,Ze){(re!==ve||se!==Ce||te!==Ze)&&(r.stencilFunc(ve,Ce,Ze),re=ve,se=Ce,te=Ze)},setOp:function(ve,Ce,Ze){(Q!==ve||Me!==Ce||Be!==Ze)&&(r.stencilOp(ve,Ce,Ze),Q=ve,Me=Ce,Be=Ze)},setLocked:function(ve){D=ve},setClear:function(ve){xt!==ve&&(r.clearStencil(ve),xt=ve)},reset:function(){D=!1,le=null,re=null,se=null,te=null,Q=null,Me=null,Be=null,xt=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,M=null,y=null,b=null,C=null,S=null,T=new $e(0,0,0),R=0,v=!1,x=null,A=null,L=null,F=null,N=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=J>=1):q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=J>=2);let ee=null,I={};const ue=r.getParameter(r.SCISSOR_BOX),Ie=r.getParameter(r.VIEWPORT),He=new _t().fromArray(ue),je=new _t().fromArray(Ie);function Qe(D,le,re,se){const te=new Uint8Array(4),Q=r.createTexture();r.bindTexture(D,Q),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Me=0;Me<re;Me++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,se,0,r.RGBA,r.UNSIGNED_BYTE,te):r.texImage2D(le+Me,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,te);return Q}const K={};K[r.TEXTURE_2D]=Qe(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=Qe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=Qe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=Qe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(r.DEPTH_TEST),o.setFunc(ms),Xe(!1),z(sf),j(r.CULL_FACE),qe(Bi);function j(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function oe(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function Ee(D,le){return f[D]!==le?(r.bindFramebuffer(D,le),f[D]=le,D===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=le),D===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=le),!0):!1}function Te(D,le){let re=h,se=!1;if(D){re=d.get(le),re===void 0&&(re=[],d.set(le,re));const te=D.textures;if(re.length!==te.length||re[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,Me=te.length;Q<Me;Q++)re[Q]=r.COLOR_ATTACHMENT0+Q;re.length=te.length,se=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,se=!0);se&&r.drawBuffers(re)}function ze(D){return g!==D?(r.useProgram(D),g=D,!0):!1}const ht={[Mr]:r.FUNC_ADD,[Qp]:r.FUNC_SUBTRACT,[em]:r.FUNC_REVERSE_SUBTRACT};ht[tm]=r.MIN,ht[nm]=r.MAX;const _e={[im]:r.ZERO,[rm]:r.ONE,[sm]:r.SRC_COLOR,[yl]:r.SRC_ALPHA,[fm]:r.SRC_ALPHA_SATURATE,[lm]:r.DST_COLOR,[am]:r.DST_ALPHA,[om]:r.ONE_MINUS_SRC_COLOR,[bl]:r.ONE_MINUS_SRC_ALPHA,[um]:r.ONE_MINUS_DST_COLOR,[cm]:r.ONE_MINUS_DST_ALPHA,[dm]:r.CONSTANT_COLOR,[hm]:r.ONE_MINUS_CONSTANT_COLOR,[pm]:r.CONSTANT_ALPHA,[mm]:r.ONE_MINUS_CONSTANT_ALPHA};function qe(D,le,re,se,te,Q,Me,Be,xt,ve){if(D===Bi){_===!0&&(oe(r.BLEND),_=!1);return}if(_===!1&&(j(r.BLEND),_=!0),D!==Jp){if(D!==m||ve!==v){if((p!==Mr||b!==Mr)&&(r.blendEquation(r.FUNC_ADD),p=Mr,b=Mr),ve)switch(D){case as:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case of:r.blendFunc(r.ONE,r.ONE);break;case af:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case cf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ct("WebGLState: Invalid blending: ",D);break}else switch(D){case as:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case of:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case af:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cf:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",D);break}M=null,y=null,C=null,S=null,T.set(0,0,0),R=0,m=D,v=ve}return}te=te||le,Q=Q||re,Me=Me||se,(le!==p||te!==b)&&(r.blendEquationSeparate(ht[le],ht[te]),p=le,b=te),(re!==M||se!==y||Q!==C||Me!==S)&&(r.blendFuncSeparate(_e[re],_e[se],_e[Q],_e[Me]),M=re,y=se,C=Q,S=Me),(Be.equals(T)===!1||xt!==R)&&(r.blendColor(Be.r,Be.g,Be.b,xt),T.copy(Be),R=xt),m=D,v=!1}function U(D,le){D.side===di?oe(r.CULL_FACE):j(r.CULL_FACE);let re=D.side===In;le&&(re=!re),Xe(re),D.blending===as&&D.transparent===!1?qe(Bi):qe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const se=D.stencilWrite;a.setTest(se),se&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ye(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?j(r.SAMPLE_ALPHA_TO_COVERAGE):oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(D){x!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),x=D)}function z(D){D!==$p?(j(r.CULL_FACE),D!==A&&(D===sf?r.cullFace(r.BACK):D===Zp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):oe(r.CULL_FACE),A=D}function et(D){D!==L&&(H&&r.lineWidth(D),L=D)}function ye(D,le,re){D?(j(r.POLYGON_OFFSET_FILL),(F!==le||N!==re)&&(r.polygonOffset(le,re),F=le,N=re)):oe(r.POLYGON_OFFSET_FILL)}function pt(D){D?j(r.SCISSOR_TEST):oe(r.SCISSOR_TEST)}function pe(D){D===void 0&&(D=r.TEXTURE0+G-1),ee!==D&&(r.activeTexture(D),ee=D)}function ke(D,le,re){re===void 0&&(ee===null?re=r.TEXTURE0+G-1:re=ee);let se=I[re];se===void 0&&(se={type:void 0,texture:void 0},I[re]=se),(se.type!==D||se.texture!==le)&&(ee!==re&&(r.activeTexture(re),ee=re),r.bindTexture(D,le||K[D]),se.type=D,se.texture=le)}function P(){const D=I[ee];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function k(){try{r.compressedTexImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function Z(){try{r.texSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function $(){try{r.texSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function be(){try{r.compressedTexSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function ce(){try{r.texStorage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Pe(){try{r.texStorage3D(...arguments)}catch(D){D("WebGLState:",D)}}function fe(){try{r.texImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function ne(){try{r.texImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function ie(D){He.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),He.copy(D))}function De(D){je.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),je.copy(D))}function Le(D,le){let re=l.get(le);re===void 0&&(re=new WeakMap,l.set(le,re));let se=re.get(D);se===void 0&&(se=r.getUniformBlockIndex(le,D.name),re.set(D,se))}function de(D,le){const se=l.get(le).get(D);c.get(le)!==se&&(r.uniformBlockBinding(le,se,D.__bindingPointIndex),c.set(le,se))}function Oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ee=null,I={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,M=null,y=null,b=null,C=null,S=null,T=new $e(0,0,0),R=0,v=!1,x=null,A=null,L=null,F=null,N=null,He.set(0,0,r.canvas.width,r.canvas.height),je.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:j,disable:oe,bindFramebuffer:Ee,drawBuffers:Te,useProgram:ze,setBlending:qe,setMaterial:U,setFlipSided:Xe,setCullFace:z,setLineWidth:et,setPolygonOffset:ye,setScissorTest:pt,activeTexture:pe,bindTexture:ke,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:k,texImage2D:fe,texImage3D:ne,updateUBOMapping:Le,uniformBlockBinding:de,texStorage2D:ce,texStorage3D:Pe,texSubImage2D:Z,texSubImage3D:$,compressedTexSubImage2D:Y,compressedTexSubImage3D:be,scissor:ie,viewport:De,reset:Oe}}function $y(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return h?new OffscreenCanvas(P,E):vo("canvas")}function _(P,E,k){let Z=1;const $=ke(P);if(($.width>k||$.height>k)&&(Z=k/Math.max($.width,$.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Y=Math.floor(Z*$.width),be=Math.floor(Z*$.height);f===void 0&&(f=g(Y,be));const ce=E?g(Y,be):f;return ce.width=Y,ce.height=be,ce.getContext("2d").drawImage(P,0,0,Y,be),Fe("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Y+"x"+be+")."),ce}else return"data"in P&&Fe("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){r.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,E,k,Z,$=!1){if(P!==null){if(r[P]!==void 0)return r[P];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=E;if(E===r.RED&&(k===r.FLOAT&&(Y=r.R32F),k===r.HALF_FLOAT&&(Y=r.R16F),k===r.UNSIGNED_BYTE&&(Y=r.R8)),E===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.R8UI),k===r.UNSIGNED_SHORT&&(Y=r.R16UI),k===r.UNSIGNED_INT&&(Y=r.R32UI),k===r.BYTE&&(Y=r.R8I),k===r.SHORT&&(Y=r.R16I),k===r.INT&&(Y=r.R32I)),E===r.RG&&(k===r.FLOAT&&(Y=r.RG32F),k===r.HALF_FLOAT&&(Y=r.RG16F),k===r.UNSIGNED_BYTE&&(Y=r.RG8)),E===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RG8UI),k===r.UNSIGNED_SHORT&&(Y=r.RG16UI),k===r.UNSIGNED_INT&&(Y=r.RG32UI),k===r.BYTE&&(Y=r.RG8I),k===r.SHORT&&(Y=r.RG16I),k===r.INT&&(Y=r.RG32I)),E===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),k===r.UNSIGNED_INT&&(Y=r.RGB32UI),k===r.BYTE&&(Y=r.RGB8I),k===r.SHORT&&(Y=r.RGB16I),k===r.INT&&(Y=r.RGB32I)),E===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),k===r.UNSIGNED_INT&&(Y=r.RGBA32UI),k===r.BYTE&&(Y=r.RGBA8I),k===r.SHORT&&(Y=r.RGBA16I),k===r.INT&&(Y=r.RGBA32I)),E===r.RGB&&(k===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),E===r.RGBA){const be=$?Ia:dt.getTransfer(Z);k===r.FLOAT&&(Y=r.RGBA32F),k===r.HALF_FLOAT&&(Y=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Y=be===Tt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function b(P,E){let k;return P?E===null||E===Cr||E===po?k=r.DEPTH24_STENCIL8:E===Ln?k=r.DEPTH32F_STENCIL8:E===ho&&(k=r.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Cr||E===po?k=r.DEPTH_COMPONENT24:E===Ln?k=r.DEPTH_COMPONENT32F:E===ho&&(k=r.DEPTH_COMPONENT16),k}function C(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Tn&&P.minFilter!==Gt?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function S(P){const E=P.target;E.removeEventListener("dispose",S),R(E),E.isVideoTexture&&u.delete(E)}function T(P){const E=P.target;E.removeEventListener("dispose",T),x(E)}function R(P){const E=n.get(P);if(E.__webglInit===void 0)return;const k=P.source,Z=d.get(k);if(Z){const $=Z[E.__cacheKey];$.usedTimes--,$.usedTimes===0&&v(P),Object.keys(Z).length===0&&d.delete(k)}n.remove(P)}function v(P){const E=n.get(P);r.deleteTexture(E.__webglTexture);const k=P.source,Z=d.get(k);delete Z[E.__cacheKey],o.memory.textures--}function x(P){const E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let $=0;$<E.__webglFramebuffer[Z].length;$++)r.deleteFramebuffer(E.__webglFramebuffer[Z][$]);else r.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)r.deleteFramebuffer(E.__webglFramebuffer[Z]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=P.textures;for(let Z=0,$=k.length;Z<$;Z++){const Y=n.get(k[Z]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(k[Z])}n.remove(P)}let A=0;function L(){A=0}function F(){const P=A;return P>=i.maxTextures&&Fe("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),A+=1,P}function N(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function G(P,E){const k=n.get(P);if(P.isVideoTexture&&pt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){const Z=P.image;if(Z===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,P,E);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+E)}function H(P,E){const k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){K(k,P,E);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+E)}function J(P,E){const k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){K(k,P,E);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+E)}function q(P,E){const k=n.get(P);if(P.version>0&&k.__version!==P.version){j(k,P,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+E)}const ee={[_s]:r.REPEAT,[Yn]:r.CLAMP_TO_EDGE,[La]:r.MIRRORED_REPEAT},I={[Tn]:r.NEAREST,[wh]:r.NEAREST_MIPMAP_NEAREST,[Ys]:r.NEAREST_MIPMAP_LINEAR,[Gt]:r.LINEAR,[xa]:r.LINEAR_MIPMAP_NEAREST,[hi]:r.LINEAR_MIPMAP_LINEAR},ue={[Lm]:r.NEVER,[Om]:r.ALWAYS,[Im]:r.LESS,[Nh]:r.LEQUAL,[Dm]:r.EQUAL,[Fm]:r.GEQUAL,[Um]:r.GREATER,[Nm]:r.NOTEQUAL};function Ie(P,E){if(E.type===Ln&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Gt||E.magFilter===xa||E.magFilter===Ys||E.magFilter===hi||E.minFilter===Gt||E.minFilter===xa||E.minFilter===Ys||E.minFilter===hi)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ee[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ee[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ee[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,I[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,I[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,ue[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==Ys&&E.minFilter!==hi||E.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function He(P,E){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",S));const Z=E.source;let $=d.get(Z);$===void 0&&($={},d.set(Z,$));const Y=N(E);if(Y!==P.__cacheKey){$[Y]===void 0&&($[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),$[Y].usedTimes++;const be=$[P.__cacheKey];be!==void 0&&($[P.__cacheKey].usedTimes--,be.usedTimes===0&&v(E)),P.__cacheKey=Y,P.__webglTexture=$[Y].texture}return k}function je(P,E,k){return Math.floor(Math.floor(P/k)/E)}function Qe(P,E,k,Z){const Y=P.updateRanges;if(Y.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,k,Z,E.data);else{Y.sort((ne,ie)=>ne.start-ie.start);let be=0;for(let ne=1;ne<Y.length;ne++){const ie=Y[be],De=Y[ne],Le=ie.start+ie.count,de=je(De.start,E.width,4),Oe=je(ie.start,E.width,4);De.start<=Le+1&&de===Oe&&je(De.start+De.count-1,E.width,4)===de?ie.count=Math.max(ie.count,De.start+De.count-ie.start):(++be,Y[be]=De)}Y.length=be+1;const ce=r.getParameter(r.UNPACK_ROW_LENGTH),Pe=r.getParameter(r.UNPACK_SKIP_PIXELS),fe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let ne=0,ie=Y.length;ne<ie;ne++){const De=Y[ne],Le=Math.floor(De.start/4),de=Math.ceil(De.count/4),Oe=Le%E.width,D=Math.floor(Le/E.width),le=de,re=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Oe),r.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,Oe,D,le,re,k,Z,E.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Pe),r.pixelStorei(r.UNPACK_SKIP_ROWS,fe)}}function K(P,E,k){let Z=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=r.TEXTURE_3D);const $=He(P,E),Y=E.source;t.bindTexture(Z,P.__webglTexture,r.TEXTURE0+k);const be=n.get(Y);if(Y.version!==be.__version||$===!0){t.activeTexture(r.TEXTURE0+k);const ce=dt.getPrimaries(dt.workingColorSpace),Pe=E.colorSpace===nr?null:dt.getPrimaries(E.colorSpace),fe=E.colorSpace===nr||ce===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let ne=_(E.image,!1,i.maxTextureSize);ne=pe(E,ne);const ie=s.convert(E.format,E.colorSpace),De=s.convert(E.type);let Le=y(E.internalFormat,ie,De,E.colorSpace,E.isVideoTexture);Ie(Z,E);let de;const Oe=E.mipmaps,D=E.isVideoTexture!==!0,le=be.__version===void 0||$===!0,re=Y.dataReady,se=C(E,ne);if(E.isDepthTexture)Le=b(E.format===go,E.type),le&&(D?t.texStorage2D(r.TEXTURE_2D,1,Le,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,Le,ne.width,ne.height,0,ie,De,null));else if(E.isDataTexture)if(Oe.length>0){D&&le&&t.texStorage2D(r.TEXTURE_2D,se,Le,Oe[0].width,Oe[0].height);for(let te=0,Q=Oe.length;te<Q;te++)de=Oe[te],D?re&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,de.width,de.height,ie,De,de.data):t.texImage2D(r.TEXTURE_2D,te,Le,de.width,de.height,0,ie,De,de.data);E.generateMipmaps=!1}else D?(le&&t.texStorage2D(r.TEXTURE_2D,se,Le,ne.width,ne.height),re&&Qe(E,ne,ie,De)):t.texImage2D(r.TEXTURE_2D,0,Le,ne.width,ne.height,0,ie,De,ne.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){D&&le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,Le,Oe[0].width,Oe[0].height,ne.depth);for(let te=0,Q=Oe.length;te<Q;te++)if(de=Oe[te],E.format!==Kn)if(ie!==null)if(D){if(re)if(E.layerUpdates.size>0){const Me=Zf(de.width,de.height,E.format,E.type);for(const Be of E.layerUpdates){const xt=de.data.subarray(Be*Me/de.data.BYTES_PER_ELEMENT,(Be+1)*Me/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,Be,de.width,de.height,1,ie,xt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ne.depth,ie,de.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,Le,de.width,de.height,ne.depth,0,de.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?re&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ne.depth,ie,De,de.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,Le,de.width,de.height,ne.depth,0,ie,De,de.data)}else{D&&le&&t.texStorage2D(r.TEXTURE_2D,se,Le,Oe[0].width,Oe[0].height);for(let te=0,Q=Oe.length;te<Q;te++)de=Oe[te],E.format!==Kn?ie!==null?D?re&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,de.width,de.height,ie,de.data):t.compressedTexImage2D(r.TEXTURE_2D,te,Le,de.width,de.height,0,de.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?re&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,de.width,de.height,ie,De,de.data):t.texImage2D(r.TEXTURE_2D,te,Le,de.width,de.height,0,ie,De,de.data)}else if(E.isDataArrayTexture)if(D){if(le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,Le,ne.width,ne.height,ne.depth),re)if(E.layerUpdates.size>0){const te=Zf(ne.width,ne.height,E.format,E.type);for(const Q of E.layerUpdates){const Me=ne.data.subarray(Q*te/ne.data.BYTES_PER_ELEMENT,(Q+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,ne.width,ne.height,1,ie,De,Me)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ie,De,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,ne.width,ne.height,ne.depth,0,ie,De,ne.data);else if(E.isData3DTexture)D?(le&&t.texStorage3D(r.TEXTURE_3D,se,Le,ne.width,ne.height,ne.depth),re&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ie,De,ne.data)):t.texImage3D(r.TEXTURE_3D,0,Le,ne.width,ne.height,ne.depth,0,ie,De,ne.data);else if(E.isFramebufferTexture){if(le)if(D)t.texStorage2D(r.TEXTURE_2D,se,Le,ne.width,ne.height);else{let te=ne.width,Q=ne.height;for(let Me=0;Me<se;Me++)t.texImage2D(r.TEXTURE_2D,Me,Le,te,Q,0,ie,De,null),te>>=1,Q>>=1}}else if(Oe.length>0){if(D&&le){const te=ke(Oe[0]);t.texStorage2D(r.TEXTURE_2D,se,Le,te.width,te.height)}for(let te=0,Q=Oe.length;te<Q;te++)de=Oe[te],D?re&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ie,De,de):t.texImage2D(r.TEXTURE_2D,te,Le,ie,De,de);E.generateMipmaps=!1}else if(D){if(le){const te=ke(ne);t.texStorage2D(r.TEXTURE_2D,se,Le,te.width,te.height)}re&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ie,De,ne)}else t.texImage2D(r.TEXTURE_2D,0,Le,ie,De,ne);m(E)&&p(Z),be.__version=Y.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function j(P,E,k){if(E.image.length!==6)return;const Z=He(P,E),$=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+k);const Y=n.get($);if($.version!==Y.__version||Z===!0){t.activeTexture(r.TEXTURE0+k);const be=dt.getPrimaries(dt.workingColorSpace),ce=E.colorSpace===nr?null:dt.getPrimaries(E.colorSpace),Pe=E.colorSpace===nr||be===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const fe=E.isCompressedTexture||E.image[0].isCompressedTexture,ne=E.image[0]&&E.image[0].isDataTexture,ie=[];for(let Q=0;Q<6;Q++)!fe&&!ne?ie[Q]=_(E.image[Q],!0,i.maxCubemapSize):ie[Q]=ne?E.image[Q].image:E.image[Q],ie[Q]=pe(E,ie[Q]);const De=ie[0],Le=s.convert(E.format,E.colorSpace),de=s.convert(E.type),Oe=y(E.internalFormat,Le,de,E.colorSpace),D=E.isVideoTexture!==!0,le=Y.__version===void 0||Z===!0,re=$.dataReady;let se=C(E,De);Ie(r.TEXTURE_CUBE_MAP,E);let te;if(fe){D&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,se,Oe,De.width,De.height);for(let Q=0;Q<6;Q++){te=ie[Q].mipmaps;for(let Me=0;Me<te.length;Me++){const Be=te[Me];E.format!==Kn?Le!==null?D?re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,0,0,Be.width,Be.height,Le,Be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,Oe,Be.width,Be.height,0,Be.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,0,0,Be.width,Be.height,Le,de,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,Oe,Be.width,Be.height,0,Le,de,Be.data)}}}else{if(te=E.mipmaps,D&&le){te.length>0&&se++;const Q=ke(ie[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,se,Oe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ne){D?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ie[Q].width,ie[Q].height,Le,de,ie[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Oe,ie[Q].width,ie[Q].height,0,Le,de,ie[Q].data);for(let Me=0;Me<te.length;Me++){const xt=te[Me].image[Q].image;D?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,0,0,xt.width,xt.height,Le,de,xt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,Oe,xt.width,xt.height,0,Le,de,xt.data)}}else{D?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Le,de,ie[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Oe,Le,de,ie[Q]);for(let Me=0;Me<te.length;Me++){const Be=te[Me];D?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,0,0,Le,de,Be.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,Oe,Le,de,Be.image[Q])}}}m(E)&&p(r.TEXTURE_CUBE_MAP),Y.__version=$.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function oe(P,E,k,Z,$,Y){const be=s.convert(k.format,k.colorSpace),ce=s.convert(k.type),Pe=y(k.internalFormat,be,ce,k.colorSpace),fe=n.get(E),ne=n.get(k);if(ne.__renderTarget=E,!fe.__hasExternalTextures){const ie=Math.max(1,E.width>>Y),De=Math.max(1,E.height>>Y);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,Y,Pe,ie,De,E.depth,0,be,ce,null):t.texImage2D($,Y,Pe,ie,De,0,be,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),ye(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,$,ne.__webglTexture,0,et(E)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,$,ne.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(P,E,k){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){const Z=E.depthTexture,$=Z&&Z.isDepthTexture?Z.type:null,Y=b(E.stencilBuffer,$),be=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=et(E);ye(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,Y,E.width,E.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,Y,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Y,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,P)}else{const Z=E.textures;for(let $=0;$<Z.length;$++){const Y=Z[$],be=s.convert(Y.format,Y.colorSpace),ce=s.convert(Y.type),Pe=y(Y.internalFormat,be,ce,Y.colorSpace),fe=et(E);k&&ye(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,Pe,E.width,E.height):ye(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,Pe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Pe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);const $=Z.__webglTexture,Y=et(E);if(E.depthTexture.format===mo)ye(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else if(E.depthTexture.format===go)ye(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ze(P){const E=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const $=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",$)};Z.addEventListener("dispose",$),E.__depthDisposeCallback=$}E.__boundDepthTexture=Z}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const Z=P.texture.mipmaps;Z&&Z.length>0?Te(E.__webglFramebuffer[0],P):Te(E.__webglFramebuffer,P)}else if(k){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=r.createRenderbuffer(),Ee(E.__webglDepthbuffer[Z],P,!1);else{const $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,Y)}}else{const Z=P.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Ee(E.__webglDepthbuffer,P,!1);else{const $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,Y)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(P,E,k){const Z=n.get(P);E!==void 0&&oe(Z.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&ze(P)}function _e(P){const E=P.texture,k=n.get(P),Z=n.get(E);P.addEventListener("dispose",T);const $=P.textures,Y=P.isWebGLCubeRenderTarget===!0,be=$.length>1;if(be||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=E.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[ce]=[];for(let Pe=0;Pe<E.mipmaps.length;Pe++)k.__webglFramebuffer[ce][Pe]=r.createFramebuffer()}else k.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)k.__webglFramebuffer[ce]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(be)for(let ce=0,Pe=$.length;ce<Pe;ce++){const fe=n.get($[ce]);fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&ye(P)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ce=0;ce<$.length;ce++){const Pe=$[ce];k.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[ce]);const fe=s.convert(Pe.format,Pe.colorSpace),ne=s.convert(Pe.type),ie=y(Pe.internalFormat,fe,ne,Pe.colorSpace,P.isXRRenderTarget===!0),De=et(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,ie,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,k.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Ee(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)oe(k.__webglFramebuffer[ce][Pe],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Pe);else oe(k.__webglFramebuffer[ce],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(E)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ce=0,Pe=$.length;ce<Pe;ce++){const fe=$[ce],ne=n.get(fe);let ie=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ie=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,ne.__webglTexture),Ie(ie,fe),oe(k.__webglFramebuffer,P,fe,r.COLOR_ATTACHMENT0+ce,ie,0),m(fe)&&p(ie)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,Z.__webglTexture),Ie(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)oe(k.__webglFramebuffer[Pe],P,E,r.COLOR_ATTACHMENT0,ce,Pe);else oe(k.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,ce,0);m(E)&&p(ce),t.unbindTexture()}P.depthBuffer&&ze(P)}function qe(P){const E=P.textures;for(let k=0,Z=E.length;k<Z;k++){const $=E[k];if(m($)){const Y=M(P),be=n.get($).__webglTexture;t.bindTexture(Y,be),p(Y),t.unbindTexture()}}}const U=[],Xe=[];function z(P){if(P.samples>0){if(ye(P)===!1){const E=P.textures,k=P.width,Z=P.height;let $=r.COLOR_BUFFER_BIT;const Y=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=n.get(P),ce=E.length>1;if(ce)for(let fe=0;fe<E.length;fe++)t.bindFramebuffer(r.FRAMEBUFFER,be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Pe=P.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let fe=0;fe<E.length;fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,be.__webglColorRenderbuffer[fe]);const ne=n.get(E[fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ne,0)}r.blitFramebuffer(0,0,k,Z,0,0,k,Z,$,r.NEAREST),c===!0&&(U.length=0,Xe.length=0,U.push(r.COLOR_ATTACHMENT0+fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(U.push(Y),Xe.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Xe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let fe=0;fe<E.length;fe++){t.bindFramebuffer(r.FRAMEBUFFER,be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,be.__webglColorRenderbuffer[fe]);const ne=n.get(E[fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function et(P){return Math.min(i.maxSamples,P.samples)}function ye(P){const E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function pt(P){const E=o.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function pe(P,E){const k=P.colorSpace,Z=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==fn&&k!==nr&&(dt.getTransfer(k)===Tt?(Z!==Kn||$!==yi)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",k)),E}function ke(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=q,this.rebindTextures=ht,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=ye}function Zy(r,e){function t(n,i=nr){let s;const o=dt.getTransfer(i);if(n===yi)return r.UNSIGNED_BYTE;if(n===Pu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Lu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ch)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ah)return r.BYTE;if(n===Rh)return r.SHORT;if(n===ho)return r.UNSIGNED_SHORT;if(n===Cu)return r.INT;if(n===Cr)return r.UNSIGNED_INT;if(n===Ln)return r.FLOAT;if(n===pi)return r.HALF_FLOAT;if(n===Lh)return r.ALPHA;if(n===Ih)return r.RGB;if(n===Kn)return r.RGBA;if(n===mo)return r.DEPTH_COMPONENT;if(n===go)return r.DEPTH_STENCIL;if(n===Iu)return r.RED;if(n===Du)return r.RED_INTEGER;if(n===Uu)return r.RG;if(n===Nu)return r.RG_INTEGER;if(n===Fu)return r.RGBA_INTEGER;if(n===_a||n===va||n===ya||n===ba)if(o===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_a)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_a)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===va)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ll||n===Il||n===Dl||n===Ul)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ll)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Il)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ul)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nl||n===Fl||n===Ol)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Nl||n===Fl)return o===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ol)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bl||n===kl||n===zl||n===Vl||n===Hl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===Kl||n===jl||n===$l||n===Zl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Bl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ql)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$l)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jl||n===Ql||n===eu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Jl)return o===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ql)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tu||n===nu||n===iu||n===ru)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===tu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===iu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ru)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===po?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Jy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qy=`
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

}`;class eb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new jh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xi({vertexShader:Jy,fragmentShader:Qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $n(new Ka(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tb extends Ts{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",m=new eb,p={},M=t.getContextAttributes();let y=null,b=null;const C=[],S=[],T=new ft;let R=null;const v=new Mn;v.viewport=new _t;const x=new Mn;x.viewport=new _t;const A=[v,x],L=new fg;let F=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let j=C[K];return j===void 0&&(j=new bc,C[K]=j),j.getTargetRaySpace()},this.getControllerGrip=function(K){let j=C[K];return j===void 0&&(j=new bc,C[K]=j),j.getGripSpace()},this.getHand=function(K){let j=C[K];return j===void 0&&(j=new bc,C[K]=j),j.getHandSpace()};function G(K){const j=S.indexOf(K.inputSource);if(j===-1)return;const oe=C[j];oe!==void 0&&(oe.update(K.inputSource,K.frame,l||o),oe.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",J);for(let K=0;K<C.length;K++){const j=S[K];j!==null&&(S[K]=null,C[K].disconnect(j))}F=null,N=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(y),h=null,d=null,f=null,i=null,b=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",H),i.addEventListener("inputsourceschange",J),M.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Ee=null,Te=null;M.depth&&(Te=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=M.stencil?go:mo,Ee=M.stencil?po:Cr);const ze={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(ze),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Pr(d.textureWidth,d.textureHeight,{format:Kn,type:yi,depthTexture:new Kh(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const oe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new Pr(h.framebufferWidth,h.framebufferHeight,{format:Kn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Qe.setContext(i),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(K){for(let j=0;j<K.removed.length;j++){const oe=K.removed[j],Ee=S.indexOf(oe);Ee>=0&&(S[Ee]=null,C[Ee].disconnect(oe))}for(let j=0;j<K.added.length;j++){const oe=K.added[j];let Ee=S.indexOf(oe);if(Ee===-1){for(let ze=0;ze<C.length;ze++)if(ze>=S.length){S.push(oe),Ee=ze;break}else if(S[ze]===null){S[ze]=oe,Ee=ze;break}if(Ee===-1)break}const Te=C[Ee];Te&&Te.connect(oe)}}const q=new V,ee=new V;function I(K,j,oe){q.setFromMatrixPosition(j.matrixWorld),ee.setFromMatrixPosition(oe.matrixWorld);const Ee=q.distanceTo(ee),Te=j.projectionMatrix.elements,ze=oe.projectionMatrix.elements,ht=Te[14]/(Te[10]-1),_e=Te[14]/(Te[10]+1),qe=(Te[9]+1)/Te[5],U=(Te[9]-1)/Te[5],Xe=(Te[8]-1)/Te[0],z=(ze[8]+1)/ze[0],et=ht*Xe,ye=ht*z,pt=Ee/(-Xe+z),pe=pt*-Xe;if(j.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(pe),K.translateZ(pt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Te[10]===-1)K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const ke=ht+pt,P=_e+pt,E=et-pe,k=ye+(Ee-pe),Z=qe*_e/P*ke,$=U*_e/P*ke;K.projectionMatrix.makePerspective(E,k,Z,$,ke,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ue(K,j){j===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(j.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let j=K.near,oe=K.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),L.near=x.near=v.near=j,L.far=x.far=v.far=oe,(F!==L.near||N!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),F=L.near,N=L.far),L.layers.mask=K.layers.mask|6,v.layers.mask=L.layers.mask&3,x.layers.mask=L.layers.mask&5;const Ee=K.parent,Te=L.cameras;ue(L,Ee);for(let ze=0;ze<Te.length;ze++)ue(Te[ze],Ee);Te.length===2?I(L,v,x):L.projectionMatrix.copy(v.projectionMatrix),Ie(K,L,Ee)};function Ie(K,j,oe){oe===null?K.matrix.copy(j.matrixWorld):(K.matrix.copy(oe.matrixWorld),K.matrix.invert(),K.matrix.multiply(j.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=vs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(K){return p[K]};let He=null;function je(K,j){if(u=j.getViewerPose(l||o),g=j,u!==null){const oe=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let Ee=!1;oe.length!==L.cameras.length&&(L.cameras.length=0,Ee=!0);for(let _e=0;_e<oe.length;_e++){const qe=oe[_e];let U=null;if(h!==null)U=h.getViewport(qe);else{const z=f.getViewSubImage(d,qe);U=z.viewport,_e===0&&(e.setRenderTargetTextures(b,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(b))}let Xe=A[_e];Xe===void 0&&(Xe=new Mn,Xe.layers.enable(_e),Xe.viewport=new _t,A[_e]=Xe),Xe.matrix.fromArray(qe.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(qe.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(U.x,U.y,U.width,U.height),_e===0&&(L.matrix.copy(Xe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ee===!0&&L.cameras.push(Xe)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const _e=f.getDepthInformation(oe[0]);_e&&_e.isValid&&_e.texture&&m.init(_e,i.renderState)}if(Te&&Te.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let _e=0;_e<oe.length;_e++){const qe=oe[_e].camera;if(qe){let U=p[qe];U||(U=new jh,p[qe]=U);const Xe=f.getCameraImage(qe);U.sourceTexture=Xe}}}}for(let oe=0;oe<C.length;oe++){const Ee=S[oe],Te=C[oe];Ee!==null&&Te!==void 0&&Te.update(Ee,j,l||o)}He&&He(K,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Qe=new Qh;Qe.setAnimationLoop(je),this.setAnimationLoop=function(K){He=K},this.dispose=function(){}}}const xr=new bi,nb=new nt;function ib(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Hh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===In&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===In&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,b=M.envMapRotation;y&&(m.envMap.value=y,xr.copy(b),xr.x*=-1,xr.y*=-1,xr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),m.envMapRotation.value.setFromMatrix4(nb.makeRotationFromEuler(xr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===In&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rb(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const b=y.program;n.uniformBlockBinding(M,b)}function l(M,y){let b=i[M.id];b===void 0&&(g(M),b=u(M),i[M.id]=b,M.addEventListener("dispose",m));const C=y.program;n.updateUBOMapping(M,C);const S=e.render.frame;s[M.id]!==S&&(d(M),s[M.id]=S)}function u(M){const y=f();M.__bindingPointIndex=y;const b=r.createBuffer(),C=M.__size,S=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,C,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,b),b}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const y=i[M.id],b=M.uniforms,C=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let S=0,T=b.length;S<T;S++){const R=Array.isArray(b[S])?b[S]:[b[S]];for(let v=0,x=R.length;v<x;v++){const A=R[v];if(h(A,S,v,C)===!0){const L=A.__offset,F=Array.isArray(A.value)?A.value:[A.value];let N=0;for(let G=0;G<F.length;G++){const H=F[G],J=_(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,L+N,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,N),N+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,A.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(M,y,b,C){const S=M.value,T=y+"_"+b;if(C[T]===void 0)return typeof S=="number"||typeof S=="boolean"?C[T]=S:C[T]=S.clone(),!0;{const R=C[T];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return C[T]=S,!0}else if(R.equals(S)===!1)return R.copy(S),!0}return!1}function g(M){const y=M.uniforms;let b=0;const C=16;for(let T=0,R=y.length;T<R;T++){const v=Array.isArray(y[T])?y[T]:[y[T]];for(let x=0,A=v.length;x<A;x++){const L=v[x],F=Array.isArray(L.value)?L.value:[L.value];for(let N=0,G=F.length;N<G;N++){const H=F[N],J=_(H),q=b%C,ee=q%J.boundary,I=q+ee;b+=ee,I!==0&&C-I<J.storage&&(b+=C-I),L.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=J.storage}}}const S=b%C;return S>0&&(b+=C-S),M.__size=b,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Fe("WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}const sb=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Pi=null;function ob(){return Pi===null&&(Pi=new Ya(sb,32,32,Uu,pi),Pi.minFilter=Gt,Pi.magFilter=Gt,Pi.wrapS=Yn,Pi.wrapT=Yn,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class ab{constructor(e={}){const{canvas:t=Bm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const g=new Set([Fu,Nu,Du]),_=new Set([yi,Cr,ho,po,Pu,Lu]),m=new Uint32Array(4),p=new Int32Array(4);let M=null,y=null;const b=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let T=!1;this._outputColorSpace=Kt;let R=0,v=0,x=null,A=-1,L=null;const F=new _t,N=new _t;let G=null;const H=new $e(0);let J=0,q=t.width,ee=t.height,I=1,ue=null,Ie=null;const He=new _t(0,0,q,ee),je=new _t(0,0,q,ee);let Qe=!1;const K=new Vu;let j=!1,oe=!1;const Ee=new nt,Te=new V,ze=new _t,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function qe(){return x===null?I:1}let U=n;function Xe(w,B){return t.getContext(w,B)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ru}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",Me,!1),U===null){const B="webgl2";if(U=Xe(B,w),U===null)throw Xe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}let z,et,ye,pt,pe,ke,P,E,k,Z,$,Y,be,ce,Pe,fe,ne,ie,De,Le,de,Oe,D,le;function re(){z=new mv(U),z.init(),Oe=new Zy(U,z),et=new ov(U,z,e,Oe),ye=new jy(U,z),et.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),pt=new _v(U),pe=new Fy,ke=new $y(U,z,ye,pe,et,Oe,pt),P=new cv(S),E=new pv(S),k=new Mg(U),D=new rv(U,k),Z=new gv(U,k,pt,D),$=new yv(U,Z,k,pt),De=new vv(U,et,ke),fe=new av(pe),Y=new Ny(S,P,E,z,et,D,fe),be=new ib(S,pe),ce=new By,Pe=new Wy(z),ie=new iv(S,P,E,ye,$,h,c),ne=new Yy(S,$,et),le=new rb(U,pt,et,ye),Le=new sv(U,z,pt),de=new xv(U,z,pt),pt.programs=Y.programs,S.capabilities=et,S.extensions=z,S.properties=pe,S.renderLists=ce,S.shadowMap=ne,S.state=ye,S.info=pt}re();const se=new tb(S,U);this.xr=se,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=z.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=z.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(w){w!==void 0&&(I=w,this.setSize(q,ee,!1))},this.getSize=function(w){return w.set(q,ee)},this.setSize=function(w,B,X=!0){if(se.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,ee=B,t.width=Math.floor(w*I),t.height=Math.floor(B*I),X===!0&&(t.style.width=w+"px",t.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(q*I,ee*I).floor()},this.setDrawingBufferSize=function(w,B,X){q=w,ee=B,I=X,t.width=Math.floor(w*X),t.height=Math.floor(B*X),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(He)},this.setViewport=function(w,B,X,W){w.isVector4?He.set(w.x,w.y,w.z,w.w):He.set(w,B,X,W),ye.viewport(F.copy(He).multiplyScalar(I).round())},this.getScissor=function(w){return w.copy(je)},this.setScissor=function(w,B,X,W){w.isVector4?je.set(w.x,w.y,w.z,w.w):je.set(w,B,X,W),ye.scissor(N.copy(je).multiplyScalar(I).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(w){ye.setScissorTest(Qe=w)},this.setOpaqueSort=function(w){ue=w},this.setTransparentSort=function(w){Ie=w},this.getClearColor=function(w){return w.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,X=!0){let W=0;if(w){let O=!1;if(x!==null){const ae=x.texture.format;O=g.has(ae)}if(O){const ae=x.texture.type,xe=_.has(ae),Se=ie.getClearColor(),he=ie.getClearAlpha(),Ne=Se.r,Ve=Se.g,Re=Se.b;xe?(m[0]=Ne,m[1]=Ve,m[2]=Re,m[3]=he,U.clearBufferuiv(U.COLOR,0,m)):(p[0]=Ne,p[1]=Ve,p[2]=Re,p[3]=he,U.clearBufferiv(U.COLOR,0,p))}else W|=U.COLOR_BUFFER_BIT}B&&(W|=U.DEPTH_BUFFER_BIT),X&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),ie.dispose(),ce.dispose(),Pe.dispose(),pe.dispose(),P.dispose(),E.dispose(),$.dispose(),D.dispose(),le.dispose(),Y.dispose(),se.dispose(),se.removeEventListener("sessionstart",Ye),se.removeEventListener("sessionend",Ue),Ge.stop()};function te(w){w.preventDefault(),Ua("WebGLRenderer: Context Lost."),T=!0}function Q(){Ua("WebGLRenderer: Context Restored."),T=!1;const w=pt.autoReset,B=ne.enabled,X=ne.autoUpdate,W=ne.needsUpdate,O=ne.type;re(),pt.autoReset=w,ne.enabled=B,ne.autoUpdate=X,ne.needsUpdate=W,ne.type=O}function Me(w){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Be(w){const B=w.target;B.removeEventListener("dispose",Be),xt(B)}function xt(w){ve(w),pe.remove(w)}function ve(w){const B=pe.get(w).programs;B!==void 0&&(B.forEach(function(X){Y.releaseProgram(X)}),w.isShaderMaterial&&Y.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,X,W,O,ae){B===null&&(B=ht);const xe=O.isMesh&&O.matrixWorld.determinant()<0,Se=Lt(w,B,X,W,O);ye.setMaterial(W,xe);let he=X.index,Ne=1;if(W.wireframe===!0){if(he=Z.getWireframeAttribute(X),he===void 0)return;Ne=2}const Ve=X.drawRange,Re=X.attributes.position;let ut=Ve.start*Ne,Et=(Ve.start+Ve.count)*Ne;ae!==null&&(ut=Math.max(ut,ae.start*Ne),Et=Math.min(Et,(ae.start+ae.count)*Ne)),he!==null?(ut=Math.max(ut,0),Et=Math.min(Et,he.count)):Re!=null&&(ut=Math.max(ut,0),Et=Math.min(Et,Re.count));const Ot=Et-ut;if(Ot<0||Ot===1/0)return;D.setup(O,W,Se,X,he);let Bt,wt=Le;if(he!==null&&(Bt=k.get(he),wt=de,wt.setIndex(Bt)),O.isMesh)W.wireframe===!0?(ye.setLineWidth(W.wireframeLinewidth*qe()),wt.setMode(U.LINES)):wt.setMode(U.TRIANGLES);else if(O.isLine){let We=W.linewidth;We===void 0&&(We=1),ye.setLineWidth(We*qe()),O.isLineSegments?wt.setMode(U.LINES):O.isLineLoop?wt.setMode(U.LINE_LOOP):wt.setMode(U.LINE_STRIP)}else O.isPoints?wt.setMode(U.POINTS):O.isSprite&&wt.setMode(U.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)yo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))wt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const We=O._multiDrawStarts,Dt=O._multiDrawCounts,mt=O._multiDrawCount,Dn=he?k.get(he).bytesPerElement:1,Br=pe.get(W).currentProgram.getUniforms();for(let Un=0;Un<mt;Un++)Br.setValue(U,"_gl_DrawID",Un),wt.render(We[Un]/Dn,Dt[Un])}else if(O.isInstancedMesh)wt.renderInstances(ut,Ot,O.count);else if(X.isInstancedBufferGeometry){const We=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Dt=Math.min(X.instanceCount,We);wt.renderInstances(ut,Ot,Dt)}else wt.render(ut,Ot)};function Ce(w,B,X){w.transparent===!0&&w.side===di&&w.forceSinglePass===!1?(w.side=In,w.needsUpdate=!0,bt(w,B,X),w.side=Wi,w.needsUpdate=!0,bt(w,B,X),w.side=di):bt(w,B,X)}this.compile=function(w,B,X=null){X===null&&(X=w),y=Pe.get(X),y.init(B),C.push(y),X.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(y.pushLight(O),O.castShadow&&y.pushShadow(O))}),w!==X&&w.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(y.pushLight(O),O.castShadow&&y.pushShadow(O))}),y.setupLights();const W=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ae=O.material;if(ae)if(Array.isArray(ae))for(let xe=0;xe<ae.length;xe++){const Se=ae[xe];Ce(Se,X,O),W.add(Se)}else Ce(ae,X,O),W.add(ae)}),y=C.pop(),W},this.compileAsync=function(w,B,X=null){const W=this.compile(w,B,X);return new Promise(O=>{function ae(){if(W.forEach(function(xe){pe.get(xe).currentProgram.isReady()&&W.delete(xe)}),W.size===0){O(w);return}setTimeout(ae,10)}z.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Ze=null;function me(w){Ze&&Ze(w)}function Ye(){Ge.stop()}function Ue(){Ge.start()}const Ge=new Qh;Ge.setAnimationLoop(me),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(w){Ze=w,se.setAnimationLoop(w),w===null?Ge.stop():Ge.start()},se.addEventListener("sessionstart",Ye),se.addEventListener("sessionend",Ue),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(B),B=se.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,B,x),y=Pe.get(w,C.length),y.init(B),C.push(y),Ee.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(Ee,mi,B.reversedDepth),oe=this.localClippingEnabled,j=fe.init(this.clippingPlanes,oe),M=ce.get(w,b.length),M.init(),b.push(M),se.enabled===!0&&se.isPresenting===!0){const ae=S.xr.getDepthSensingMesh();ae!==null&&Ft(ae,B,-1/0,S.sortObjects)}Ft(w,B,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(ue,Ie),_e=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,_e&&ie.addToRenderList(M,w),this.info.render.frame++,j===!0&&fe.beginShadows();const X=y.state.shadowsArray;ne.render(X,w,B),j===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=M.opaque,O=M.transmissive;if(y.setupLights(),B.isArrayCamera){const ae=B.cameras;if(O.length>0)for(let xe=0,Se=ae.length;xe<Se;xe++){const he=ae[xe];It(W,O,w,he)}_e&&ie.render(w);for(let xe=0,Se=ae.length;xe<Se;xe++){const he=ae[xe];rt(M,w,he,he.viewport)}}else O.length>0&&It(W,O,w,B),_e&&ie.render(w),rt(M,w,B);x!==null&&v===0&&(ke.updateMultisampleRenderTarget(x),ke.updateRenderTargetMipmap(x)),w.isScene===!0&&w.onAfterRender(S,w,B),D.resetDefaultState(),A=-1,L=null,C.pop(),C.length>0?(y=C[C.length-1],j===!0&&fe.setGlobalState(S.clippingPlanes,y.state.camera)):y=null,b.pop(),b.length>0?M=b[b.length-1]:M=null};function Ft(w,B,X,W){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){W&&ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ee);const xe=$.update(w),Se=w.material;Se.visible&&M.push(w,xe,Se,X,ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){const xe=$.update(w),Se=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ze.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),ze.copy(xe.boundingSphere.center)),ze.applyMatrix4(w.matrixWorld).applyMatrix4(Ee)),Array.isArray(Se)){const he=xe.groups;for(let Ne=0,Ve=he.length;Ne<Ve;Ne++){const Re=he[Ne],ut=Se[Re.materialIndex];ut&&ut.visible&&M.push(w,xe,ut,X,ze.z,Re)}}else Se.visible&&M.push(w,xe,Se,X,ze.z,null)}}const ae=w.children;for(let xe=0,Se=ae.length;xe<Se;xe++)Ft(ae[xe],B,X,W)}function rt(w,B,X,W){const{opaque:O,transmissive:ae,transparent:xe}=w;y.setupLightsView(X),j===!0&&fe.setGlobalState(S.clippingPlanes,X),W&&ye.viewport(F.copy(W)),O.length>0&&kt(O,B,X),ae.length>0&&kt(ae,B,X),xe.length>0&&kt(xe,B,X),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function It(w,B,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[W.id]===void 0&&(y.state.transmissionRenderTarget[W.id]=new Pr(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float")?pi:yi,minFilter:hi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const ae=y.state.transmissionRenderTarget[W.id],xe=W.viewport||F;ae.setSize(xe.z*S.transmissionResolutionScale,xe.w*S.transmissionResolutionScale);const Se=S.getRenderTarget(),he=S.getActiveCubeFace(),Ne=S.getActiveMipmapLevel();S.setRenderTarget(ae),S.getClearColor(H),J=S.getClearAlpha(),J<1&&S.setClearColor(16777215,.5),S.clear(),_e&&ie.render(X);const Ve=S.toneMapping;S.toneMapping=ki;const Re=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),y.setupLightsView(W),j===!0&&fe.setGlobalState(S.clippingPlanes,W),kt(w,X,W),ke.updateMultisampleRenderTarget(ae),ke.updateRenderTargetMipmap(ae),z.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Et=0,Ot=B.length;Et<Ot;Et++){const Bt=B[Et],{object:wt,geometry:We,material:Dt,group:mt}=Bt;if(Dt.side===di&&wt.layers.test(W.layers)){const Dn=Dt.side;Dt.side=In,Dt.needsUpdate=!0,Pt(wt,X,W,We,Dt,mt),Dt.side=Dn,Dt.needsUpdate=!0,ut=!0}}ut===!0&&(ke.updateMultisampleRenderTarget(ae),ke.updateRenderTargetMipmap(ae))}S.setRenderTarget(Se,he,Ne),S.setClearColor(H,J),Re!==void 0&&(W.viewport=Re),S.toneMapping=Ve}function kt(w,B,X){const W=B.isScene===!0?B.overrideMaterial:null;for(let O=0,ae=w.length;O<ae;O++){const xe=w[O],{object:Se,geometry:he,group:Ne}=xe;let Ve=xe.material;Ve.allowOverride===!0&&W!==null&&(Ve=W),Se.layers.test(X.layers)&&Pt(Se,B,X,he,Ve,Ne)}}function Pt(w,B,X,W,O,ae){w.onBeforeRender(S,B,X,W,O,ae),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(S,B,X,W,w,ae),O.transparent===!0&&O.side===di&&O.forceSinglePass===!1?(O.side=In,O.needsUpdate=!0,S.renderBufferDirect(X,B,W,O,w,ae),O.side=Wi,O.needsUpdate=!0,S.renderBufferDirect(X,B,W,O,w,ae),O.side=di):S.renderBufferDirect(X,B,W,O,w,ae),w.onAfterRender(S,B,X,W,O,ae)}function bt(w,B,X){B.isScene!==!0&&(B=ht);const W=pe.get(w),O=y.state.lights,ae=y.state.shadowsArray,xe=O.state.version,Se=Y.getParameters(w,O.state,ae,B,X),he=Y.getProgramCacheKey(Se);let Ne=W.programs;W.environment=w.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(w.isMeshStandardMaterial?E:P).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",Be),Ne=new Map,W.programs=Ne);let Ve=Ne.get(he);if(Ve!==void 0){if(W.currentProgram===Ve&&W.lightsStateVersion===xe)return An(w,Se),Ve}else Se.uniforms=Y.getUniforms(w),w.onBeforeCompile(Se,S),Ve=Y.acquireProgram(Se,he),Ne.set(he,Ve),W.uniforms=Se.uniforms;const Re=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=fe.uniform),An(w,Se),W.needsLights=Vn(w),W.lightsStateVersion=xe,W.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.directionalShadowMap.value=O.state.directionalShadowMap,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotShadowMap.value=O.state.spotShadowMap,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMap.value=O.state.pointShadowMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Ve,W.uniformsList=null,Ve}function vt(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=Ma.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function An(w,B){const X=pe.get(w);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Lt(w,B,X,W,O){B.isScene!==!0&&(B=ht),ke.resetTextureUnits();const ae=B.fog,xe=W.isMeshStandardMaterial?B.environment:null,Se=x===null?S.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:fn,he=(W.isMeshStandardMaterial?E:P).get(W.envMap||xe),Ne=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ve=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!X.morphAttributes.position,ut=!!X.morphAttributes.normal,Et=!!X.morphAttributes.color;let Ot=ki;W.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(Ot=S.toneMapping);const Bt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,wt=Bt!==void 0?Bt.length:0,We=pe.get(W),Dt=y.state.lights;if(j===!0&&(oe===!0||w!==L)){const hn=w===L&&W.id===A;fe.setState(W,w,hn)}let mt=!1;W.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Dt.state.version||We.outputColorSpace!==Se||O.isBatchedMesh&&We.batching===!1||!O.isBatchedMesh&&We.batching===!0||O.isBatchedMesh&&We.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&We.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&We.instancing===!1||!O.isInstancedMesh&&We.instancing===!0||O.isSkinnedMesh&&We.skinning===!1||!O.isSkinnedMesh&&We.skinning===!0||O.isInstancedMesh&&We.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&We.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&We.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&We.instancingMorph===!1&&O.morphTexture!==null||We.envMap!==he||W.fog===!0&&We.fog!==ae||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==fe.numPlanes||We.numIntersection!==fe.numIntersection)||We.vertexAlphas!==Ne||We.vertexTangents!==Ve||We.morphTargets!==Re||We.morphNormals!==ut||We.morphColors!==Et||We.toneMapping!==Ot||We.morphTargetsCount!==wt)&&(mt=!0):(mt=!0,We.__version=W.version);let Dn=We.currentProgram;mt===!0&&(Dn=bt(W,B,O));let Br=!1,Un=!1,Ls=!1;const Ut=Dn.getUniforms(),Rn=We.uniforms;if(ye.useProgram(Dn.program)&&(Br=!0,Un=!0,Ls=!0),W.id!==A&&(A=W.id,Un=!0),Br||L!==w){ye.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ut.setValue(U,"projectionMatrix",w.projectionMatrix),Ut.setValue(U,"viewMatrix",w.matrixWorldInverse);const Cn=Ut.map.cameraPosition;Cn!==void 0&&Cn.setValue(U,Te.setFromMatrixPosition(w.matrixWorld)),et.logarithmicDepthBuffer&&Ut.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ut.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),L!==w&&(L=w,Un=!0,Ls=!0)}if(O.isSkinnedMesh){Ut.setOptional(U,O,"bindMatrix"),Ut.setOptional(U,O,"bindMatrixInverse");const hn=O.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Ut.setValue(U,"boneTexture",hn.boneTexture,ke))}O.isBatchedMesh&&(Ut.setOptional(U,O,"batchingTexture"),Ut.setValue(U,"batchingTexture",O._matricesTexture,ke),Ut.setOptional(U,O,"batchingIdTexture"),Ut.setValue(U,"batchingIdTexture",O._indirectTexture,ke),Ut.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&Ut.setValue(U,"batchingColorTexture",O._colorsTexture,ke));const Hn=X.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&De.update(O,X,Dn),(Un||We.receiveShadow!==O.receiveShadow)&&(We.receiveShadow=O.receiveShadow,Ut.setValue(U,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Rn.envMap.value=he,Rn.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Rn.envMapIntensity.value=B.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=ob()),Un&&(Ut.setValue(U,"toneMappingExposure",S.toneMappingExposure),We.needsLights&&dn(Rn,Ls),ae&&W.fog===!0&&be.refreshFogUniforms(Rn,ae),be.refreshMaterialUniforms(Rn,W,I,ee,y.state.transmissionRenderTarget[w.id]),Ma.upload(U,vt(We),Rn,ke)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ma.upload(U,vt(We),Rn,ke),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ut.setValue(U,"center",O.center),Ut.setValue(U,"modelViewMatrix",O.modelViewMatrix),Ut.setValue(U,"normalMatrix",O.normalMatrix),Ut.setValue(U,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const hn=W.uniformsGroups;for(let Cn=0,Qa=hn.length;Cn<Qa;Cn++){const fr=hn[Cn];le.update(fr,Dn),le.bind(fr,Dn)}}return Dn}function dn(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Vn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(w,B,X){const W=pe.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),pe.get(w.texture).__webglTexture=B,pe.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){const X=pe.get(w);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const Wt=U.createFramebuffer();this.setRenderTarget=function(w,B=0,X=0){x=w,R=B,v=X;let W=!0,O=null,ae=!1,xe=!1;if(w){const he=pe.get(w);if(he.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(U.FRAMEBUFFER,null),W=!1;else if(he.__webglFramebuffer===void 0)ke.setupRenderTarget(w);else if(he.__hasExternalTextures)ke.rebindTextures(w,pe.get(w.texture).__webglTexture,pe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Re=w.depthTexture;if(he.__boundDepthTexture!==Re){if(Re!==null&&pe.has(Re)&&(w.width!==Re.image.width||w.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(w)}}const Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(xe=!0);const Ve=pe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ve[B])?O=Ve[B][X]:O=Ve[B],ae=!0):w.samples>0&&ke.useMultisampledRTT(w)===!1?O=pe.get(w).__webglMultisampledFramebuffer:Array.isArray(Ve)?O=Ve[X]:O=Ve,F.copy(w.viewport),N.copy(w.scissor),G=w.scissorTest}else F.copy(He).multiplyScalar(I).floor(),N.copy(je).multiplyScalar(I).floor(),G=Qe;if(X!==0&&(O=Wt),ye.bindFramebuffer(U.FRAMEBUFFER,O)&&W&&ye.drawBuffers(w,O),ye.viewport(F),ye.scissor(N),ye.setScissorTest(G),ae){const he=pe.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,he.__webglTexture,X)}else if(xe){const he=B;for(let Ne=0;Ne<w.textures.length;Ne++){const Ve=pe.get(w.textures[Ne]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ne,Ve.__webglTexture,X,he)}}else if(w!==null&&X!==0){const he=pe.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,he.__webglTexture,X)}A=-1},this.readRenderTargetPixels=function(w,B,X,W,O,ae,xe,Se=0){if(!(w&&w.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(he=he[xe]),he){ye.bindFramebuffer(U.FRAMEBUFFER,he);try{const Ne=w.textures[Se],Ve=Ne.format,Re=Ne.type;if(!et.textureFormatReadable(Ve)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Re)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-W&&X>=0&&X<=w.height-O&&(w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Se),U.readPixels(B,X,W,O,Oe.convert(Ve),Oe.convert(Re),ae))}finally{const Ne=x!==null?pe.get(x).__webglFramebuffer:null;ye.bindFramebuffer(U.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(w,B,X,W,O,ae,xe,Se=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(he=he[xe]),he)if(B>=0&&B<=w.width-W&&X>=0&&X<=w.height-O){ye.bindFramebuffer(U.FRAMEBUFFER,he);const Ne=w.textures[Se],Ve=Ne.format,Re=Ne.type;if(!et.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ut),U.bufferData(U.PIXEL_PACK_BUFFER,ae.byteLength,U.STREAM_READ),w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Se),U.readPixels(B,X,W,O,Oe.convert(Ve),Oe.convert(Re),0);const Et=x!==null?pe.get(x).__webglFramebuffer:null;ye.bindFramebuffer(U.FRAMEBUFFER,Et);const Ot=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await km(U,Ot,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ut),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ae),U.deleteBuffer(ut),U.deleteSync(Ot),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,X=0){const W=Math.pow(2,-X),O=Math.floor(w.image.width*W),ae=Math.floor(w.image.height*W),xe=B!==null?B.x:0,Se=B!==null?B.y:0;ke.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,xe,Se,O,ae),ye.unbindTexture()};const Xt=U.createFramebuffer(),Zt=U.createFramebuffer();this.copyTextureToTexture=function(w,B,X=null,W=null,O=0,ae=null){ae===null&&(O!==0?(yo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=O,O=0):ae=0);let xe,Se,he,Ne,Ve,Re,ut,Et,Ot;const Bt=w.isCompressedTexture?w.mipmaps[ae]:w.image;if(X!==null)xe=X.max.x-X.min.x,Se=X.max.y-X.min.y,he=X.isBox3?X.max.z-X.min.z:1,Ne=X.min.x,Ve=X.min.y,Re=X.isBox3?X.min.z:0;else{const Hn=Math.pow(2,-O);xe=Math.floor(Bt.width*Hn),Se=Math.floor(Bt.height*Hn),w.isDataArrayTexture?he=Bt.depth:w.isData3DTexture?he=Math.floor(Bt.depth*Hn):he=1,Ne=0,Ve=0,Re=0}W!==null?(ut=W.x,Et=W.y,Ot=W.z):(ut=0,Et=0,Ot=0);const wt=Oe.convert(B.format),We=Oe.convert(B.type);let Dt;B.isData3DTexture?(ke.setTexture3D(B,0),Dt=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ke.setTexture2DArray(B,0),Dt=U.TEXTURE_2D_ARRAY):(ke.setTexture2D(B,0),Dt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const mt=U.getParameter(U.UNPACK_ROW_LENGTH),Dn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Br=U.getParameter(U.UNPACK_SKIP_PIXELS),Un=U.getParameter(U.UNPACK_SKIP_ROWS),Ls=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Bt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Bt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ne),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ve),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Re);const Ut=w.isDataArrayTexture||w.isData3DTexture,Rn=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){const Hn=pe.get(w),hn=pe.get(B),Cn=pe.get(Hn.__renderTarget),Qa=pe.get(hn.__renderTarget);ye.bindFramebuffer(U.READ_FRAMEBUFFER,Cn.__webglFramebuffer),ye.bindFramebuffer(U.DRAW_FRAMEBUFFER,Qa.__webglFramebuffer);for(let fr=0;fr<he;fr++)Ut&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,pe.get(w).__webglTexture,O,Re+fr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,pe.get(B).__webglTexture,ae,Ot+fr)),U.blitFramebuffer(Ne,Ve,xe,Se,ut,Et,xe,Se,U.DEPTH_BUFFER_BIT,U.NEAREST);ye.bindFramebuffer(U.READ_FRAMEBUFFER,null),ye.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||pe.has(w)){const Hn=pe.get(w),hn=pe.get(B);ye.bindFramebuffer(U.READ_FRAMEBUFFER,Xt),ye.bindFramebuffer(U.DRAW_FRAMEBUFFER,Zt);for(let Cn=0;Cn<he;Cn++)Ut?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Hn.__webglTexture,O,Re+Cn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Hn.__webglTexture,O),Rn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,hn.__webglTexture,ae,Ot+Cn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,hn.__webglTexture,ae),O!==0?U.blitFramebuffer(Ne,Ve,xe,Se,ut,Et,xe,Se,U.COLOR_BUFFER_BIT,U.NEAREST):Rn?U.copyTexSubImage3D(Dt,ae,ut,Et,Ot+Cn,Ne,Ve,xe,Se):U.copyTexSubImage2D(Dt,ae,ut,Et,Ne,Ve,xe,Se);ye.bindFramebuffer(U.READ_FRAMEBUFFER,null),ye.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Rn?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Dt,ae,ut,Et,Ot,xe,Se,he,wt,We,Bt.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Dt,ae,ut,Et,Ot,xe,Se,he,wt,Bt.data):U.texSubImage3D(Dt,ae,ut,Et,Ot,xe,Se,he,wt,We,Bt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ae,ut,Et,xe,Se,wt,We,Bt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ae,ut,Et,Bt.width,Bt.height,wt,Bt.data):U.texSubImage2D(U.TEXTURE_2D,ae,ut,Et,xe,Se,wt,We,Bt);U.pixelStorei(U.UNPACK_ROW_LENGTH,mt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Dn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Br),U.pixelStorei(U.UNPACK_SKIP_ROWS,Un),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ls),ae===0&&B.generateMipmaps&&U.generateMipmap(Dt),ye.unbindTexture()},this.initRenderTarget=function(w){pe.get(w).__webglFramebuffer===void 0&&ke.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ke.setTextureCube(w,0):w.isData3DTexture?ke.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ke.setTexture2DArray(w,0):ke.setTexture2D(w,0),ye.unbindTexture()},this.resetState=function(){R=0,v=0,x=null,ye.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}function yd(r,e){if(e===Am)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===su||e===Dh){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===su)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Cs extends Ur{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new db(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new Mb(t)}),this.register(function(t){return new Sb(t)}),this.register(function(t){return new Eb(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new xb(t)}),this.register(function(t){return new _b(t)}),this.register(function(t){return new fb(t)}),this.register(function(t){return new vb(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new yb(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new Tb(t)}),this.register(function(t){return new wb(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=no.extractUrlBase(e);o=no.resolveURL(l,this.path)}else o=no.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Wu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===rp){try{o[lt.KHR_BINARY_GLTF]=new Ab(e)}catch(f){i&&i(f);return}s=JSON.parse(o[lt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new zb(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(f){case lt.KHR_MATERIALS_UNLIT:o[f]=new ub;break;case lt.KHR_DRACO_MESH_COMPRESSION:o[f]=new Rb(s,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:o[f]=new Cb;break;case lt.KHR_MESH_QUANTIZATION:o[f]=new Pb;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function cb(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class lb{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new $e(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],fn);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new lu(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ag(u),l.distance=f;break;case"spot":l=new sg(u),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),li(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class ub{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ni}extendParams(e,t,n){const i=[];e.color=new $e(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],fn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Kt))}return Promise.all(i)}}class fb{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class db{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ft(a,a)}return Promise.all(s)}}class hb{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class pb{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class mb{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],fn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Kt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class gb{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class xb{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(a[0],a[1],a[2],fn),Promise.all(s)}}class _b{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class vb{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(a[0],a[1],a[2],fn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Kt)),Promise.all(s)}}class yb{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class bb{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Mb{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Sb{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class Eb{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class Tb{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,f=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,d,i.mode,i.filter).then(function(h){return h.buffer}):o.ready.then(function(){const h=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(h),u,f,d,i.mode,i.filter),h})})}else return null}}class wb{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Wn.TRIANGLES&&l.mode!==Wn.TRIANGLE_STRIP&&l.mode!==Wn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),f=u.isGroup?u.children:[u],d=l[0].count,h=[];for(const g of f){const _=new nt,m=new V,p=new lr,M=new V(1,1,1),y=new N0(g.geometry,g.material,d);for(let b=0;b<d;b++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,b),c.SCALE&&M.fromBufferAttribute(c.SCALE,b),y.setMatrixAt(b,_.compose(m,p,M));for(const b in c)if(b==="_COLOR_0"){const C=c[b];y.instanceColor=new au(C.array,C.itemSize,C.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);Nt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),h.push(y)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const rp="glTF",Vs=12,bd={JSON:1313821514,BIN:5130562};class Ab{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Vs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==rp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Vs,s=new DataView(e,Vs);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===bd.JSON){const l=new Uint8Array(e,Vs+o,a);this.content=n.decode(l)}else if(c===bd.BIN){const l=Vs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Rb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const f=du[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=du[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],h=ls[d.componentType];l[f]=h.name,c[f]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,d){i.decodeDracoFile(u,function(h){for(const g in h.attributes){const _=h.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}f(h)},a,l,fn,d)})})}}class Cb{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Pb{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}}class sp extends wo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,f=(n-t)/u,d=f*f,h=d*f,g=e*l,_=g-l,m=-2*h+3*d,p=h-d,M=1-m,y=p-d+f;for(let b=0;b!==a;b++){const C=o[_+b+a],S=o[_+b+c]*u,T=o[g+b+a],R=o[g+b]*u;s[b]=M*C+y*S+m*T+p*R}return s}}const Lb=new lr;class Ib extends sp{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Lb.fromArray(s).normalize().toArray(s),s}}const Wn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ls={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Md={9728:Tn,9729:Gt,9984:wh,9985:xa,9986:Ys,9987:hi},Sd={33071:Yn,33648:La,10497:_s},Uc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},du={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Db={CUBICSPLINE:void 0,LINEAR:_o,STEP:xo},Nc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ub(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Gu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wi})),r.DefaultMaterial}function _r(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function li(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Nb(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const f=e[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];if(n){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;o.push(d)}if(i){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],f=l[1],d=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=f),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Fb(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ob(r){let e;const t=r.extensions&&r.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Fc(t.attributes):e=r.indices+":"+Fc(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Fc(r.targets[n]);return e}function Fc(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function hu(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Bb(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const kb=new nt;class zb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new cb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Jh(this.options.manager):this.textureLoader=new ug(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Wu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return _r(s,a,i),li(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())s(u,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(no.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Uc[i.type],a=ls[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new wn(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Uc[i.type],l=ls[i.componentType],u=l.BYTES_PER_ELEMENT,f=u*c,d=i.byteOffset||0,h=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(h&&h!==f){const p=Math.floor(d/h),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(M);y||(_=new l(a,p*h,i.count*h/u),y=new P0(_,h/u),t.cache.add(M,y)),m=new ku(y,c,d%h/u,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new wn(_,c,g);if(i.sparse!==void 0){const p=Uc.SCALAR,M=ls[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,C=new M(o[1],y,i.sparse.count*p),S=new l(o[2],b,i.sparse.count*c);a!==null&&(m=new wn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,R=C.length;T<R;T++){const v=C[T];if(m.setX(v,S[T*c]),c>=2&&m.setY(v,S[T*c+1]),c>=3&&m.setZ(v,S[T*c+2]),c>=4&&m.setW(v,S[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=Md[d.magFilter]||Gt,u.minFilter=Md[d.minFilter]||hi,u.wrapS=Sd[d.wrapS]||_s,u.wrapT=Sd[d.wrapT]||_s,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Tn&&u.minFilter!==Gt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(f){l=!0;const d=new Blob([f],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(f){return new Promise(function(d,h){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new nn(_);m.needsUpdate=!0,d(m)}),t.load(no.resolveURL(f,s.path),g,void 0,h)})}).then(function(f){return l===!0&&a.revokeObjectURL(c),li(f,o),f.userData.mimeType=o.mimeType||Bb(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[lt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Yh,_i.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new qh,_i.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Gu}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[lt.KHR_MATERIALS_UNLIT]){const f=i[lt.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),l.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new $e(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],fn),a.opacity=d[3]}f.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",f.baseColorTexture,Kt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=di);const u=s.alphaMode||Nc.OPAQUE;if(u===Nc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Nc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ni&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ft(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Ni&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ni){const f=s.emissiveFactor;a.emissive=new $e().setRGB(f[0],f[1],f[2],fn)}return s.emissiveTexture!==void 0&&o!==Ni&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Kt)),Promise.all(l).then(function(){const f=new o(a);return s.name&&(f.name=s.name),li(f,s),t.associations.set(f,{materials:e}),s.extensions&&_r(i,f,s),f})}createUniqueName(e){const t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Ed(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=Ob(l),f=i[u];if(f)o.push(f.promise);else{let d;l.extensions&&l.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Ed(new oi,l,t),i[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?Ub(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],f=[];for(let h=0,g=u.length;h<g;h++){const _=u[h],m=o[h];let p;const M=l[h];if(m.mode===Wn.TRIANGLES||m.mode===Wn.TRIANGLE_STRIP||m.mode===Wn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new I0(_,M):new $n(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Wn.TRIANGLE_STRIP?p.geometry=yd(p.geometry,Dh):m.mode===Wn.TRIANGLE_FAN&&(p.geometry=yd(p.geometry,su));else if(m.mode===Wn.LINES)p=new k0(_,M);else if(m.mode===Wn.LINE_STRIP)p=new Hu(_,M);else if(m.mode===Wn.LINE_LOOP)p=new z0(_,M);else if(m.mode===Wn.POINTS)p=new V0(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Fb(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),li(p,s),m.extensions&&_r(i,p,m),t.assignFinalMaterial(p),f.push(p)}for(let h=0,g=f.length;h<g;h++)t.associations.set(f[h],{meshes:e,primitives:h});if(f.length===1)return s.extensions&&_r(i,f[0],s),f[0];const d=new En;s.extensions&&_r(i,d,s),t.associations.set(d,{meshes:e});for(let h=0,g=f.length;h<g;h++)d.add(f[h]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Mn(Xa.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new qu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),li(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const f=o[l];if(f){a.push(f);const d=new nt;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new zu(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let f=0,d=i.channels.length;f<d;f++){const h=i.channels[f],g=i.samplers[h.sampler],_=h.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(f){const d=f[0],h=f[1],g=f[2],_=f[3],m=f[4],p=[];for(let y=0,b=d.length;y<b;y++){const C=d[y],S=h[y],T=g[y],R=_[y],v=m[y];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const x=n._createAnimationTracks(C,S,T,R,v);if(x)for(let A=0;A<x.length;A++)p.push(x[A])}const M=new $0(s,void 0,p);return li(M,i),M})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const u=l[0],f=l[1],d=l[2];d!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(d,kb)});for(let h=0,g=f.length;h<g;h++)u.add(f[h]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new Xh:l.length>1?u=new En:l.length===1?u=l[0]:u=new Nt,u!==l[0])for(let f=0,d=l.length;f<d;f++)u.add(l[f]);if(s.name&&(u.userData.name=s.name,u.name=o),li(u,s),s.extensions&&_r(n,u,s),s.matrix!==void 0){const f=new nt;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const f=i.associations.get(u);i.associations.set(u,{...f})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new En;n.name&&(s.name=i.createUniqueName(n.name)),li(s,n),n.extensions&&_r(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,f=c.length;u<f;u++)s.add(c[u]);const l=u=>{const f=new Map;for(const[d,h]of i.associations)(d instanceof _i||d instanceof nn)&&f.set(d,h);return u.traverse(d=>{const h=i.associations.get(d);h!=null&&f.set(d,h)}),f};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];Qi[s.path]===Qi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Qi[s.path]){case Qi.weights:l=bs;break;case Qi.rotation:l=Ms;break;case Qi.translation:case Qi.scale:l=Ss;break;default:switch(n.itemSize){case 1:l=bs;break;case 2:case 3:default:l=Ss;break}break}const u=i.interpolation!==void 0?Db[i.interpolation]:_o,f=this._getArrayFromAccessor(n);for(let d=0,h=c.length;d<h;d++){const g=new l(c[d]+"."+Qi[s.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=hu(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ms?Ib:sp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Vb(r,e,t){const n=e.attributes,i=new qi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new V(c[0],c[1],c[2]),new V(l[0],l[1],l[2])),a.normalized){const u=hu(ls[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new V,c=new V;for(let l=0,u=s.length;l<u;l++){const f=s[l];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],h=d.min,g=d.max;if(h!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),d.normalized){const _=hu(ls[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Mi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Ed(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=du[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return dt.workingColorSpace!==fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),li(r,e),Vb(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Nb(r,e.targets,t):r})}function Hb(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Gb(r,e,t){return e&&Hb(r.prototype,e),r}var rn,Sa,zn,rr,sr,us,op,yr,io,ap,Oi,ei,cp,lp=function(){return rn||typeof window<"u"&&(rn=window.gsap)&&rn.registerPlugin&&rn},up=1,os=[],ot=[],vi=[],ro=Date.now,pu=function(e,t){return t},Wb=function(){var e=io.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ot),i.push.apply(i,vi),ot=n,vi=i,pu=function(o,a){return t[o](a)}},or=function(e,t){return~vi.indexOf(e)&&vi[vi.indexOf(e)+1][t]},so=function(e){return!!~ap.indexOf(e)},gn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},mn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ea="scrollLeft",ta="scrollTop",mu=function(){return Oi&&Oi.isPressed||ot.cache++},Oa=function(e,t){var n=function i(s){if(s||s===0){up&&(zn.history.scrollRestoration="manual");var o=Oi&&Oi.isPressed;s=i.v=Math.round(s)||(Oi&&Oi.iOS?1:0),e(s),i.cacheID=ot.cache,o&&pu("ss",s)}else(t||ot.cache!==i.cacheID||pu("ref"))&&(i.cacheID=ot.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Sn={s:ea,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Oa(function(r){return arguments.length?zn.scrollTo(r,Yt.sc()):zn.pageXOffset||rr[ea]||sr[ea]||us[ea]||0})},Yt={s:ta,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Sn,sc:Oa(function(r){return arguments.length?zn.scrollTo(Sn.sc(),r):zn.pageYOffset||rr[ta]||sr[ta]||us[ta]||0})},Pn=function(e,t){return(t&&t._ctx&&t._ctx.selector||rn.utils.toArray)(e)[0]||(typeof e=="string"&&rn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Xb=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},cr=function(e,t){var n=t.s,i=t.sc;so(e)&&(e=rr.scrollingElement||sr);var s=ot.indexOf(e),o=i===Yt.sc?1:2;!~s&&(s=ot.push(e)-1),ot[s+o]||gn(e,"scroll",mu);var a=ot[s+o],c=a||(ot[s+o]=Oa(or(e,n),!0)||(so(e)?i:Oa(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,a||(c.smooth=rn.getProperty(e,"scrollBehavior")==="smooth"),c},gu=function(e,t,n){var i=e,s=e,o=ro(),a=o,c=t||50,l=Math.max(500,c*3),u=function(g,_){var m=ro();_||m-o>c?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},d=function(g){var _=a,m=s,p=ro();return(g||g===0)&&g!==i&&u(g),o===a||p-a>l?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:f,getVelocity:d}},Hs=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Td=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},fp=function(){io=rn.core.globals().ScrollTrigger,io&&io.core&&Wb()},dp=function(e){return rn=e||lp(),!Sa&&rn&&typeof document<"u"&&document.body&&(zn=window,rr=document,sr=rr.documentElement,us=rr.body,ap=[zn,rr,sr,us],rn.utils.clamp,cp=rn.core.context||function(){},yr="onpointerenter"in us?"pointer":"mouse",op=zt.isTouch=zn.matchMedia&&zn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in zn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ei=zt.eventTypes=("ontouchstart"in sr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in sr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return up=0},500),fp(),Sa=1),Sa};Sn.op=Yt;ot.cache=0;var zt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Sa||dp(rn)||console.warn("Please gsap.registerPlugin(Observer)"),io||fp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,c=n.lineHeight,l=n.debounce,u=n.preventDefault,f=n.onStop,d=n.onStopDelay,h=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,y=n.onPress,b=n.onRelease,C=n.onRight,S=n.onLeft,T=n.onUp,R=n.onDown,v=n.onChangeX,x=n.onChangeY,A=n.onChange,L=n.onToggleX,F=n.onToggleY,N=n.onHover,G=n.onHoverEnd,H=n.onMove,J=n.ignoreCheck,q=n.isNormalizer,ee=n.onGestureStart,I=n.onGestureEnd,ue=n.onWheel,Ie=n.onEnable,He=n.onDisable,je=n.onClick,Qe=n.scrollSpeed,K=n.capture,j=n.allowClicks,oe=n.lockAxis,Ee=n.onLockAxis;this.target=a=Pn(a)||sr,this.vars=n,h&&(h=rn.utils.toArray(h)),i=i||1e-9,s=s||0,g=g||1,Qe=Qe||1,o=o||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(zn.getComputedStyle(us).lineHeight)||22);var Te,ze,ht,_e,qe,U,Xe,z=this,et=0,ye=0,pt=n.passive||!u&&n.passive!==!1,pe=cr(a,Sn),ke=cr(a,Yt),P=pe(),E=ke(),k=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ei[0]==="pointerdown",Z=so(a),$=a.ownerDocument||rr,Y=[0,0,0],be=[0,0,0],ce=0,Pe=function(){return ce=ro()},fe=function(Ce,Ze){return(z.event=Ce)&&h&&Xb(Ce.target,h)||Ze&&k&&Ce.pointerType!=="touch"||J&&J(Ce,Ze)},ne=function(){z._vx.reset(),z._vy.reset(),ze.pause(),f&&f(z)},ie=function(){var Ce=z.deltaX=Td(Y),Ze=z.deltaY=Td(be),me=Math.abs(Ce)>=i,Ye=Math.abs(Ze)>=i;A&&(me||Ye)&&A(z,Ce,Ze,Y,be),me&&(C&&z.deltaX>0&&C(z),S&&z.deltaX<0&&S(z),v&&v(z),L&&z.deltaX<0!=et<0&&L(z),et=z.deltaX,Y[0]=Y[1]=Y[2]=0),Ye&&(R&&z.deltaY>0&&R(z),T&&z.deltaY<0&&T(z),x&&x(z),F&&z.deltaY<0!=ye<0&&F(z),ye=z.deltaY,be[0]=be[1]=be[2]=0),(_e||ht)&&(H&&H(z),ht&&(m&&ht===1&&m(z),M&&M(z),ht=0),_e=!1),U&&!(U=!1)&&Ee&&Ee(z),qe&&(ue(z),qe=!1),Te=0},De=function(Ce,Ze,me){Y[me]+=Ce,be[me]+=Ze,z._vx.update(Ce),z._vy.update(Ze),l?Te||(Te=requestAnimationFrame(ie)):ie()},Le=function(Ce,Ze){oe&&!Xe&&(z.axis=Xe=Math.abs(Ce)>Math.abs(Ze)?"x":"y",U=!0),Xe!=="y"&&(Y[2]+=Ce,z._vx.update(Ce,!0)),Xe!=="x"&&(be[2]+=Ze,z._vy.update(Ze,!0)),l?Te||(Te=requestAnimationFrame(ie)):ie()},de=function(Ce){if(!fe(Ce,1)){Ce=Hs(Ce,u);var Ze=Ce.clientX,me=Ce.clientY,Ye=Ze-z.x,Ue=me-z.y,Ge=z.isDragging;z.x=Ze,z.y=me,(Ge||(Ye||Ue)&&(Math.abs(z.startX-Ze)>=s||Math.abs(z.startY-me)>=s))&&(ht=Ge?2:1,Ge||(z.isDragging=!0),Le(Ye,Ue))}},Oe=z.onPress=function(ve){fe(ve,1)||ve&&ve.button||(z.axis=Xe=null,ze.pause(),z.isPressed=!0,ve=Hs(ve),et=ye=0,z.startX=z.x=ve.clientX,z.startY=z.y=ve.clientY,z._vx.reset(),z._vy.reset(),gn(q?a:$,ei[1],de,pt,!0),z.deltaX=z.deltaY=0,y&&y(z))},D=z.onRelease=function(ve){if(!fe(ve,1)){mn(q?a:$,ei[1],de,!0);var Ce=!isNaN(z.y-z.startY),Ze=z.isDragging,me=Ze&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Ye=Hs(ve);!me&&Ce&&(z._vx.reset(),z._vy.reset(),u&&j&&rn.delayedCall(.08,function(){if(ro()-ce>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if($.createEvent){var Ue=$.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,zn,1,Ye.screenX,Ye.screenY,Ye.clientX,Ye.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(Ue)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,f&&Ze&&!q&&ze.restart(!0),ht&&ie(),p&&Ze&&p(z),b&&b(z,me)}},le=function(Ce){return Ce.touches&&Ce.touches.length>1&&(z.isGesturing=!0)&&ee(Ce,z.isDragging)},re=function(){return(z.isGesturing=!1)||I(z)},se=function(Ce){if(!fe(Ce)){var Ze=pe(),me=ke();De((Ze-P)*Qe,(me-E)*Qe,1),P=Ze,E=me,f&&ze.restart(!0)}},te=function(Ce){if(!fe(Ce)){Ce=Hs(Ce,u),ue&&(qe=!0);var Ze=(Ce.deltaMode===1?c:Ce.deltaMode===2?zn.innerHeight:1)*g;De(Ce.deltaX*Ze,Ce.deltaY*Ze,0),f&&!q&&ze.restart(!0)}},Q=function(Ce){if(!fe(Ce)){var Ze=Ce.clientX,me=Ce.clientY,Ye=Ze-z.x,Ue=me-z.y;z.x=Ze,z.y=me,_e=!0,f&&ze.restart(!0),(Ye||Ue)&&Le(Ye,Ue)}},Me=function(Ce){z.event=Ce,N(z)},Be=function(Ce){z.event=Ce,G(z)},xt=function(Ce){return fe(Ce)||Hs(Ce,u)&&je(z)};ze=z._dc=rn.delayedCall(d||.25,ne).pause(),z.deltaX=z.deltaY=0,z._vx=gu(0,50,!0),z._vy=gu(0,50,!0),z.scrollX=pe,z.scrollY=ke,z.isDragging=z.isGesturing=z.isPressed=!1,cp(this),z.enable=function(ve){return z.isEnabled||(gn(Z?$:a,"scroll",mu),o.indexOf("scroll")>=0&&gn(Z?$:a,"scroll",se,pt,K),o.indexOf("wheel")>=0&&gn(a,"wheel",te,pt,K),(o.indexOf("touch")>=0&&op||o.indexOf("pointer")>=0)&&(gn(a,ei[0],Oe,pt,K),gn($,ei[2],D),gn($,ei[3],D),j&&gn(a,"click",Pe,!0,!0),je&&gn(a,"click",xt),ee&&gn($,"gesturestart",le),I&&gn($,"gestureend",re),N&&gn(a,yr+"enter",Me),G&&gn(a,yr+"leave",Be),H&&gn(a,yr+"move",Q)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=_e=ht=!1,z._vx.reset(),z._vy.reset(),P=pe(),E=ke(),ve&&ve.type&&Oe(ve),Ie&&Ie(z)),z},z.disable=function(){z.isEnabled&&(os.filter(function(ve){return ve!==z&&so(ve.target)}).length||mn(Z?$:a,"scroll",mu),z.isPressed&&(z._vx.reset(),z._vy.reset(),mn(q?a:$,ei[1],de,!0)),mn(Z?$:a,"scroll",se,K),mn(a,"wheel",te,K),mn(a,ei[0],Oe,K),mn($,ei[2],D),mn($,ei[3],D),mn(a,"click",Pe,!0),mn(a,"click",xt),mn($,"gesturestart",le),mn($,"gestureend",re),mn(a,yr+"enter",Me),mn(a,yr+"leave",Be),mn(a,yr+"move",Q),z.isEnabled=z.isPressed=z.isDragging=!1,He&&He(z))},z.kill=z.revert=function(){z.disable();var ve=os.indexOf(z);ve>=0&&os.splice(ve,1),Oi===z&&(Oi=0)},os.push(z),q&&so(a)&&(Oi=z),z.enable(_)},Gb(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();zt.version="3.13.0";zt.create=function(r){return new zt(r)};zt.register=dp;zt.getAll=function(){return os.slice()};zt.getById=function(r){return os.filter(function(e){return e.vars.id===r})[0]};lp()&&rn.registerPlugin(zt);var we,rs,st,At,kn,yt,ju,Ba,bo,oo,js,na,an,Ja,xu,yn,wd,Ad,ss,hp,Oc,pp,_n,_u,mp,gp,tr,vu,$u,fs,Zu,ka,yu,Bc,ia=1,cn=Date.now,kc=cn(),jn=0,$s=0,Rd=function(e,t,n){var i=Bn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Cd=function(e,t){return t&&(!Bn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},qb=function r(){return $s&&requestAnimationFrame(r)},Pd=function(){return Ja=1},Ld=function(){return Ja=0},ui=function(e){return e},Zs=function(e){return Math.round(e*1e5)/1e5||0},xp=function(){return typeof window<"u"},_p=function(){return we||xp()&&(we=window.gsap)&&we.registerPlugin&&we},Lr=function(e){return!!~ju.indexOf(e)},vp=function(e){return(e==="Height"?Zu:st["inner"+e])||kn["client"+e]||yt["client"+e]},yp=function(e){return or(e,"getBoundingClientRect")||(Lr(e)?function(){return Ra.width=st.innerWidth,Ra.height=Zu,Ra}:function(){return Ui(e)})},Yb=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=or(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?vp(s):e["client"+s])||0}},Kb=function(e,t){return!t||~vi.indexOf(e)?yp(e):function(){return Ra}},gi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=or(e,n))?o()-yp(e)()[s]:Lr(e)?(kn[n]||yt[n])-vp(i):e[n]-e["offset"+i])},ra=function(e,t){for(var n=0;n<ss.length;n+=3)(!t||~t.indexOf(ss[n+1]))&&e(ss[n],ss[n+1],ss[n+2])},Bn=function(e){return typeof e=="string"},ln=function(e){return typeof e=="function"},Js=function(e){return typeof e=="number"},br=function(e){return typeof e=="object"},Gs=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},zc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},ts=Math.abs,bp="left",Mp="top",Ju="right",Qu="bottom",wr="width",Ar="height",ao="Right",co="Left",lo="Top",uo="Bottom",Ht="padding",Xn="margin",Es="Width",ef="Height",qt="px",qn=function(e){return st.getComputedStyle(e)},jb=function(e){var t=qn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Id=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ui=function(e,t){var n=t&&qn(e)[xu]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},za=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Sp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},$b=function(e){return function(t){return we.utils.snap(Sp(e),t)}},tf=function(e){var t=we.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Zb=function(e){return function(t,n){return tf(Sp(e))(t,n.direction)}},sa=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},en=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Qt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},oa=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Dd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},aa={toggleActions:"play",anticipatePin:0},Va={top:0,left:0,center:.5,bottom:1,right:1},Ea=function(e,t){if(Bn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Va?Va[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ca=function(e,t,n,i,s,o,a,c){var l=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,g=At.createElement("div"),_=Lr(n)||or(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?yt:n,M=e.indexOf("start")!==-1,y=M?l:u,b="border-color:"+y+";font-size:"+f+";color:"+y+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((m||c)&&_?"fixed;":"absolute;"),(m||c||!_)&&(b+=(i===Yt?Ju:Qu)+":"+(o+parseFloat(d))+"px;"),a&&(b+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=b,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Ta(g,0,i,M),g},Ta=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Es]=1,s["border"+a+Es]=0,s[n.p]=t+"px",we.set(e,s)},it=[],bu={},Mo,Ud=function(){return cn()-jn>34&&(Mo||(Mo=requestAnimationFrame(Hi)))},ns=function(){(!_n||!_n.isPressed||_n.startX>yt.clientWidth)&&(ot.cache++,_n?Mo||(Mo=requestAnimationFrame(Hi)):Hi(),jn||Dr("scrollStart"),jn=cn())},Vc=function(){gp=st.innerWidth,mp=st.innerHeight},Qs=function(e){ot.cache++,(e===!0||!an&&!pp&&!At.fullscreenElement&&!At.webkitFullscreenElement&&(!_u||gp!==st.innerWidth||Math.abs(st.innerHeight-mp)>st.innerHeight*.25))&&Ba.restart(!0)},Ir={},Jb=[],Ep=function r(){return Qt(Ke,"scrollEnd",r)||Er(!0)},Dr=function(e){return Ir[e]&&Ir[e].map(function(t){return t()})||Jb},On=[],Tp=function(e){for(var t=0;t<On.length;t+=5)(!e||On[t+4]&&On[t+4].query===e)&&(On[t].style.cssText=On[t+1],On[t].getBBox&&On[t].setAttribute("transform",On[t+2]||""),On[t+3].uncache=1)},nf=function(e,t){var n;for(yn=0;yn<it.length;yn++)n=it[yn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ka=!0,t&&Tp(t),t||Dr("revert")},wp=function(e,t){ot.cache++,(t||!bn)&&ot.forEach(function(n){return ln(n)&&n.cacheID++&&(n.rec=0)}),Bn(e)&&(st.history.scrollRestoration=$u=e)},bn,Rr=0,Nd,Qb=function(){if(Nd!==Rr){var e=Nd=Rr;requestAnimationFrame(function(){return e===Rr&&Er(!0)})}},Ap=function(){yt.appendChild(fs),Zu=!_n&&fs.offsetHeight||st.innerHeight,yt.removeChild(fs)},Fd=function(e){return bo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Er=function(e,t){if(kn=At.documentElement,yt=At.body,ju=[st,At,kn,yt],jn&&!e&&!ka){en(Ke,"scrollEnd",Ep);return}Ap(),bn=Ke.isRefreshing=!0,ot.forEach(function(i){return ln(i)&&++i.cacheID&&(i.rec=i())});var n=Dr("refreshInit");hp&&Ke.sort(),t||nf(),ot.forEach(function(i){ln(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),it.slice(0).forEach(function(i){return i.refresh()}),ka=!1,it.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),yu=1,Fd(!0),it.forEach(function(i){var s=gi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Fd(!1),yu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ot.forEach(function(i){ln(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),wp($u,1),Ba.pause(),Rr++,bn=2,Hi(2),it.forEach(function(i){return ln(i.vars.onRefresh)&&i.vars.onRefresh(i)}),bn=Ke.isRefreshing=!1,Dr("refresh")},Mu=0,wa=1,fo,Hi=function(e){if(e===2||!bn&&!ka){Ke.isUpdating=!0,fo&&fo.update(0);var t=it.length,n=cn(),i=n-kc>=50,s=t&&it[0].scroll();if(wa=Mu>s?-1:1,bn||(Mu=s),i&&(jn&&!Ja&&n-jn>200&&(jn=0,Dr("scrollEnd")),js=kc,kc=n),wa<0){for(yn=t;yn-- >0;)it[yn]&&it[yn].update(0,i);wa=1}else for(yn=0;yn<t;yn++)it[yn]&&it[yn].update(0,i);Ke.isUpdating=!1}Mo=0},Su=[bp,Mp,Qu,Ju,Xn+uo,Xn+ao,Xn+lo,Xn+co,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Aa=Su.concat([wr,Ar,"boxSizing","max"+Es,"max"+ef,"position",Xn,Ht,Ht+lo,Ht+ao,Ht+uo,Ht+co]),eM=function(e,t,n){ds(n);var i=e._gsap;if(i.spacerIsNative)ds(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Hc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Su.length,o=t.style,a=e.style,c;s--;)c=Su[s],o[c]=n[c];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Qu]=a[Ju]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[wr]=za(e,Sn)+qt,o[Ar]=za(e,Yt)+qt,o[Ht]=a[Xn]=a[Mp]=a[bp]="0",ds(i),a[wr]=a["max"+Es]=n[wr],a[Ar]=a["max"+ef]=n[Ar],a[Ht]=n[Ht],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},tM=/([A-Z])/g,ds=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(tM,"-$1").toLowerCase())}},la=function(e){for(var t=Aa.length,n=e.style,i=[],s=0;s<t;s++)i.push(Aa[s],n[Aa[s]]);return i.t=e,i},nM=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Ra={left:0,top:0},Od=function(e,t,n,i,s,o,a,c,l,u,f,d,h,g){ln(e)&&(e=e(c)),Bn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Ea("0"+e.substr(3),n):0));var _=h?h.time():0,m,p,M;if(h&&h.seek(0),isNaN(e)||(e=+e),Js(e))h&&(e=we.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),a&&Ta(a,n,i,!0);else{ln(t)&&(t=t(c));var y=(e||"0").split(" "),b,C,S,T;M=Pn(t,c)||yt,b=Ui(M)||{},(!b||!b.left&&!b.top)&&qn(M).display==="none"&&(T=M.style.display,M.style.display="block",b=Ui(M),T?M.style.display=T:M.style.removeProperty("display")),C=Ea(y[0],b[i.d]),S=Ea(y[1]||"0",n),e=b[i.p]-l[i.p]-u+C+s-S,a&&Ta(a,S,i,n-S<20||a._isStart&&S>20),n-=n-S}if(g&&(c[g]=e||-.001,e<0&&(e=0)),o){var R=e+n,v=o._isStart;m="scroll"+i.d2,Ta(o,R,i,v&&R>20||!v&&(f?Math.max(yt[m],kn[m]):o.parentNode[m])<=R+1),f&&(l=Ui(a),f&&(o.style[i.op.p]=l[i.op.p]-i.op.m-o._offset+qt))}return h&&M&&(m=Ui(M),h.seek(d),p=Ui(M),h._caScrollDist=m[i.p]-p[i.p],e=e/h._caScrollDist*d),h&&h.seek(_),h?e:Math.round(e)},iM=/(webkit|moz|length|cssText|inset)/i,Bd=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===yt){e._stOrig=s.cssText,a=qn(e);for(o in a)!+o&&!iM.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},Rp=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},ua=function(e,t,n){var i={};i[t.p]="+="+n,we.set(e,i)},kd=function(e,t){var n=cr(e,t),i="_scroll"+t.p2,s=function o(a,c,l,u,f){var d=o.tween,h=c.onComplete,g={};l=l||n();var _=Rp(n,l,function(){d.kill(),o.tween=0});return f=u&&f||0,u=u||a-l,d&&d.kill(),c[i]=a,c.inherit=!1,c.modifiers=g,g[i]=function(){return _(l+u*d.ratio+f*d.ratio*d.ratio)},c.onUpdate=function(){ot.cache++,o.tween&&Hi()},c.onComplete=function(){o.tween=0,h&&h.call(d)},d=o.tween=we.to(e,c),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},en(e,"wheel",n.wheelHandler),Ke.isTouch&&en(e,"touchmove",n.wheelHandler),s},Ke=(function(){function r(t,n){rs||r.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),vu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!$s){this.update=this.refresh=this.kill=ui;return}n=Id(Bn(n)||Js(n)||n.nodeType?{trigger:n}:n,aa);var s=n,o=s.onUpdate,a=s.toggleClass,c=s.id,l=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,y=s.once,b=s.snap,C=s.pinReparent,S=s.pinSpacer,T=s.containerAnimation,R=s.fastScrollEnd,v=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Sn:Yt,A=!f&&f!==0,L=Pn(n.scroller||st),F=we.core.getCache(L),N=Lr(L),G=("pinType"in n?n.pinType:or(L,"pinType")||N&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],J=A&&n.toggleActions.split(" "),q="markers"in n?n.markers:aa.markers,ee=N?0:parseFloat(qn(L)["border"+x.p2+Es])||0,I=this,ue=n.onRefreshInit&&function(){return n.onRefreshInit(I)},Ie=Yb(L,N,x),He=Kb(L,N),je=0,Qe=0,K=0,j=cr(L,x),oe,Ee,Te,ze,ht,_e,qe,U,Xe,z,et,ye,pt,pe,ke,P,E,k,Z,$,Y,be,ce,Pe,fe,ne,ie,De,Le,de,Oe,D,le,re,se,te,Q,Me,Be;if(I._startClamp=I._endClamp=!1,I._dir=x,m*=45,I.scroller=L,I.scroll=T?T.time.bind(T):j,ze=j(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(hp=1,n.refreshPriority===-9999&&(fo=I)),F.tweenScroll=F.tweenScroll||{top:kd(L,Yt),left:kd(L,Sn)},I.tweenTo=oe=F.tweenScroll[x.p],I.scrubDuration=function(me){le=Js(me)&&me,le?D?D.duration(me):D=we.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:le,paused:!0,onComplete:function(){return p&&p(I)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(f),de=0,c||(c=i.vars.id)),b&&((!br(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in yt.style&&we.set(N?[yt,kn]:L,{scrollBehavior:"auto"}),ot.forEach(function(me){return ln(me)&&me.target===(N?At.scrollingElement||kn:L)&&(me.smooth=!1)}),Te=ln(b.snapTo)?b.snapTo:b.snapTo==="labels"?$b(i):b.snapTo==="labelsDirectional"?Zb(i):b.directional!==!1?function(me,Ye){return tf(b.snapTo)(me,cn()-Qe<500?0:Ye.direction)}:we.utils.snap(b.snapTo),re=b.duration||{min:.1,max:2},re=br(re)?oo(re.min,re.max):oo(re,re),se=we.delayedCall(b.delay||le/2||.1,function(){var me=j(),Ye=cn()-Qe<500,Ue=oe.tween;if((Ye||Math.abs(I.getVelocity())<10)&&!Ue&&!Ja&&je!==me){var Ge=(me-_e)/pe,Ft=i&&!A?i.totalProgress():Ge,rt=Ye?0:(Ft-Oe)/(cn()-js)*1e3||0,It=we.utils.clamp(-Ge,1-Ge,ts(rt/2)*rt/.185),kt=Ge+(b.inertia===!1?0:It),Pt,bt,vt=b,An=vt.onStart,Lt=vt.onInterrupt,dn=vt.onComplete;if(Pt=Te(kt,I),Js(Pt)||(Pt=kt),bt=Math.max(0,Math.round(_e+Pt*pe)),me<=qe&&me>=_e&&bt!==me){if(Ue&&!Ue._initted&&Ue.data<=ts(bt-me))return;b.inertia===!1&&(It=Pt-Ge),oe(bt,{duration:re(ts(Math.max(ts(kt-Ft),ts(Pt-Ft))*.185/rt/.05||0)),ease:b.ease||"power3",data:ts(bt-me),onInterrupt:function(){return se.restart(!0)&&Lt&&Lt(I)},onComplete:function(){I.update(),je=j(),i&&!A&&(D?D.resetTo("totalProgress",Pt,i._tTime/i._tDur):i.progress(Pt)),de=Oe=i&&!A?i.totalProgress():I.progress,M&&M(I),dn&&dn(I)}},me,It*pe,bt-me-It*pe),An&&An(I,oe.tween)}}else I.isActive&&je!==me&&se.restart(!0)}).pause()),c&&(bu[c]=I),d=I.trigger=Pn(d||h!==!0&&h),Be=d&&d._gsap&&d._gsap.stRevert,Be&&(Be=Be(I)),h=h===!0?d:Pn(h),Bn(a)&&(a={targets:d,className:a}),h&&(g===!1||g===Xn||(g=!g&&h.parentNode&&h.parentNode.style&&qn(h.parentNode).display==="flex"?!1:Ht),I.pin=h,Ee=we.core.getCache(h),Ee.spacer?ke=Ee.pinState:(S&&(S=Pn(S),S&&!S.nodeType&&(S=S.current||S.nativeElement),Ee.spacerIsNative=!!S,S&&(Ee.spacerState=la(S))),Ee.spacer=k=S||At.createElement("div"),k.classList.add("pin-spacer"),c&&k.classList.add("pin-spacer-"+c),Ee.pinState=ke=la(h)),n.force3D!==!1&&we.set(h,{force3D:!0}),I.spacer=k=Ee.spacer,Le=qn(h),Pe=Le[g+x.os2],$=we.getProperty(h),Y=we.quickSetter(h,x.a,qt),Hc(h,k,Le),E=la(h)),q){ye=br(q)?Id(q,Dd):Dd,z=ca("scroller-start",c,L,x,ye,0),et=ca("scroller-end",c,L,x,ye,0,z),Z=z["offset"+x.op.d2];var xt=Pn(or(L,"content")||L);U=this.markerStart=ca("start",c,xt,x,ye,Z,0,T),Xe=this.markerEnd=ca("end",c,xt,x,ye,Z,0,T),T&&(Me=we.quickSetter([U,Xe],x.a,qt)),!G&&!(vi.length&&or(L,"fixedMarkers")===!0)&&(jb(N?yt:L),we.set([z,et],{force3D:!0}),ne=we.quickSetter(z,x.a,qt),De=we.quickSetter(et,x.a,qt))}if(T){var ve=T.vars.onUpdate,Ce=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){I.update(0,0,1),ve&&ve.apply(T,Ce||[])})}if(I.previous=function(){return it[it.indexOf(I)-1]},I.next=function(){return it[it.indexOf(I)+1]},I.revert=function(me,Ye){if(!Ye)return I.kill(!0);var Ue=me!==!1||!I.enabled,Ge=an;Ue!==I.isReverted&&(Ue&&(te=Math.max(j(),I.scroll.rec||0),K=I.progress,Q=i&&i.progress()),U&&[U,Xe,z,et].forEach(function(Ft){return Ft.style.display=Ue?"none":"block"}),Ue&&(an=I,I.update(Ue)),h&&(!C||!I.isActive)&&(Ue?eM(h,k,ke):Hc(h,k,qn(h),fe)),Ue||I.update(Ue),an=Ge,I.isReverted=Ue)},I.refresh=function(me,Ye,Ue,Ge){if(!((an||!I.enabled)&&!Ye)){if(h&&me&&jn){en(r,"scrollEnd",Ep);return}!bn&&ue&&ue(I),an=I,oe.tween&&!Ue&&(oe.tween.kill(),oe.tween=0),D&&D.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(Re){return Re.vars.immediateRender&&Re.render(0,!0,!0)})),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var Ft=Ie(),rt=He(),It=T?T.duration():gi(L,x),kt=pe<=.01||!pe,Pt=0,bt=Ge||0,vt=br(Ue)?Ue.end:n.end,An=n.endTrigger||d,Lt=br(Ue)?Ue.start:n.start||(n.start===0||!d?0:h?"0 0":"0 100%"),dn=I.pinnedContainer=n.pinnedContainer&&Pn(n.pinnedContainer,I),Vn=d&&Math.max(0,it.indexOf(I))||0,Wt=Vn,Xt,Zt,w,B,X,W,O,ae,xe,Se,he,Ne,Ve;for(q&&br(Ue)&&(Ne=we.getProperty(z,x.p),Ve=we.getProperty(et,x.p));Wt-- >0;)W=it[Wt],W.end||W.refresh(0,1)||(an=I),O=W.pin,O&&(O===d||O===h||O===dn)&&!W.isReverted&&(Se||(Se=[]),Se.unshift(W),W.revert(!0,!0)),W!==it[Wt]&&(Vn--,Wt--);for(ln(Lt)&&(Lt=Lt(I)),Lt=Rd(Lt,"start",I),_e=Od(Lt,d,Ft,x,j(),U,z,I,rt,ee,G,It,T,I._startClamp&&"_startClamp")||(h?-.001:0),ln(vt)&&(vt=vt(I)),Bn(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(Bn(Lt)?Lt.split(" ")[0]:"")+vt:(Pt=Ea(vt.substr(2),Ft),vt=Bn(Lt)?Lt:(T?we.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,_e):_e)+Pt,An=d)),vt=Rd(vt,"end",I),qe=Math.max(_e,Od(vt||(An?"100% 0":It),An,Ft,x,j()+Pt,Xe,et,I,rt,ee,G,It,T,I._endClamp&&"_endClamp"))||-.001,Pt=0,Wt=Vn;Wt--;)W=it[Wt],O=W.pin,O&&W.start-W._pinPush<=_e&&!T&&W.end>0&&(Xt=W.end-(I._startClamp?Math.max(0,W.start):W.start),(O===d&&W.start-W._pinPush<_e||O===dn)&&isNaN(Lt)&&(Pt+=Xt*(1-W.progress)),O===h&&(bt+=Xt));if(_e+=Pt,qe+=Pt,I._startClamp&&(I._startClamp+=Pt),I._endClamp&&!bn&&(I._endClamp=qe||-.001,qe=Math.min(qe,gi(L,x))),pe=qe-_e||(_e-=.01)&&.001,kt&&(K=we.utils.clamp(0,1,we.utils.normalize(_e,qe,te))),I._pinPush=bt,U&&Pt&&(Xt={},Xt[x.a]="+="+Pt,dn&&(Xt[x.p]="-="+j()),we.set([U,Xe],Xt)),h&&!(yu&&I.end>=gi(L,x)))Xt=qn(h),B=x===Yt,w=j(),be=parseFloat($(x.a))+bt,!It&&qe>1&&(he=(N?At.scrollingElement||kn:L).style,he={style:he,value:he["overflow"+x.a.toUpperCase()]},N&&qn(yt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(he.style["overflow"+x.a.toUpperCase()]="scroll")),Hc(h,k,Xt),E=la(h),Zt=Ui(h,!0),ae=G&&cr(L,B?Sn:Yt)(),g?(fe=[g+x.os2,pe+bt+qt],fe.t=k,Wt=g===Ht?za(h,x)+pe+bt:0,Wt&&(fe.push(x.d,Wt+qt),k.style.flexBasis!=="auto"&&(k.style.flexBasis=Wt+qt)),ds(fe),dn&&it.forEach(function(Re){Re.pin===dn&&Re.vars.pinSpacing!==!1&&(Re._subPinOffset=!0)}),G&&j(te)):(Wt=za(h,x),Wt&&k.style.flexBasis!=="auto"&&(k.style.flexBasis=Wt+qt)),G&&(X={top:Zt.top+(B?w-_e:ae)+qt,left:Zt.left+(B?ae:w-_e)+qt,boxSizing:"border-box",position:"fixed"},X[wr]=X["max"+Es]=Math.ceil(Zt.width)+qt,X[Ar]=X["max"+ef]=Math.ceil(Zt.height)+qt,X[Xn]=X[Xn+lo]=X[Xn+ao]=X[Xn+uo]=X[Xn+co]="0",X[Ht]=Xt[Ht],X[Ht+lo]=Xt[Ht+lo],X[Ht+ao]=Xt[Ht+ao],X[Ht+uo]=Xt[Ht+uo],X[Ht+co]=Xt[Ht+co],P=nM(ke,X,C),bn&&j(0)),i?(xe=i._initted,Oc(1),i.render(i.duration(),!0,!0),ce=$(x.a)-be+pe+bt,ie=Math.abs(pe-ce)>1,G&&ie&&P.splice(P.length-2,2),i.render(0,!0,!0),xe||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Oc(0)):ce=pe,he&&(he.value?he.style["overflow"+x.a.toUpperCase()]=he.value:he.style.removeProperty("overflow-"+x.a));else if(d&&j()&&!T)for(Zt=d.parentNode;Zt&&Zt!==yt;)Zt._pinOffset&&(_e-=Zt._pinOffset,qe-=Zt._pinOffset),Zt=Zt.parentNode;Se&&Se.forEach(function(Re){return Re.revert(!1,!0)}),I.start=_e,I.end=qe,ze=ht=bn?te:j(),!T&&!bn&&(ze<te&&j(te),I.scroll.rec=0),I.revert(!1,!0),Qe=cn(),se&&(je=-1,se.restart(!0)),an=0,i&&A&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(kt||K!==I.progress||T||_||i&&!i._initted)&&(i&&!A&&(i._initted||K||i.vars.immediateRender!==!1)&&i.totalProgress(T&&_e<-.001&&!K?we.utils.normalize(_e,qe,0):K,!0),I.progress=kt||(ze-_e)/pe===K?0:K),h&&g&&(k._pinOffset=Math.round(I.progress*ce)),D&&D.invalidate(),isNaN(Ne)||(Ne-=we.getProperty(z,x.p),Ve-=we.getProperty(et,x.p),ua(z,x,Ne),ua(U,x,Ne-(Ge||0)),ua(et,x,Ve),ua(Xe,x,Ve-(Ge||0))),kt&&!bn&&I.update(),u&&!bn&&!pt&&(pt=!0,u(I),pt=!1)}},I.getVelocity=function(){return(j()-ht)/(cn()-js)*1e3||0},I.endAnimation=function(){Gs(I.callbackAnimation),i&&(D?D.progress(1):i.paused()?A||Gs(i,I.direction<0,1):Gs(i,i.reversed()))},I.labelToScroll=function(me){return i&&i.labels&&(_e||I.refresh()||_e)+i.labels[me]/i.duration()*pe||0},I.getTrailing=function(me){var Ye=it.indexOf(I),Ue=I.direction>0?it.slice(0,Ye).reverse():it.slice(Ye+1);return(Bn(me)?Ue.filter(function(Ge){return Ge.vars.preventOverlaps===me}):Ue).filter(function(Ge){return I.direction>0?Ge.end<=_e:Ge.start>=qe})},I.update=function(me,Ye,Ue){if(!(T&&!Ue&&!me)){var Ge=bn===!0?te:I.scroll(),Ft=me?0:(Ge-_e)/pe,rt=Ft<0?0:Ft>1?1:Ft||0,It=I.progress,kt,Pt,bt,vt,An,Lt,dn,Vn;if(Ye&&(ht=ze,ze=T?j():Ge,b&&(Oe=de,de=i&&!A?i.totalProgress():rt)),m&&h&&!an&&!ia&&jn&&(!rt&&_e<Ge+(Ge-ht)/(cn()-js)*m?rt=1e-4:rt===1&&qe>Ge+(Ge-ht)/(cn()-js)*m&&(rt=.9999)),rt!==It&&I.enabled){if(kt=I.isActive=!!rt&&rt<1,Pt=!!It&&It<1,Lt=kt!==Pt,An=Lt||!!rt!=!!It,I.direction=rt>It?1:-1,I.progress=rt,An&&!an&&(bt=rt&&!It?0:rt===1?1:It===1?2:3,A&&(vt=!Lt&&J[bt+1]!=="none"&&J[bt+1]||J[bt],Vn=i&&(vt==="complete"||vt==="reset"||vt in i))),v&&(Lt||Vn)&&(Vn||f||!i)&&(ln(v)?v(I):I.getTrailing(v).forEach(function(w){return w.endAnimation()})),A||(D&&!an&&!ia?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",rt,i._tTime/i._tDur):(D.vars.totalProgress=rt,D.invalidate().restart())):i&&i.totalProgress(rt,!!(an&&(Qe||me)))),h){if(me&&g&&(k.style[g+x.os2]=Pe),!G)Y(Zs(be+ce*rt));else if(An){if(dn=!me&&rt>It&&qe+1>Ge&&Ge+1>=gi(L,x),C)if(!me&&(kt||dn)){var Wt=Ui(h,!0),Xt=Ge-_e;Bd(h,yt,Wt.top+(x===Yt?Xt:0)+qt,Wt.left+(x===Yt?0:Xt)+qt)}else Bd(h,k);ds(kt||dn?P:E),ie&&rt<1&&kt||Y(be+(rt===1&&!dn?ce:0))}}b&&!oe.tween&&!an&&!ia&&se.restart(!0),a&&(Lt||y&&rt&&(rt<1||!Bc))&&bo(a.targets).forEach(function(w){return w.classList[kt||y?"add":"remove"](a.className)}),o&&!A&&!me&&o(I),An&&!an?(A&&(Vn&&(vt==="complete"?i.pause().totalProgress(1):vt==="reset"?i.restart(!0).pause():vt==="restart"?i.restart(!0):i[vt]()),o&&o(I)),(Lt||!Bc)&&(l&&Lt&&zc(I,l),H[bt]&&zc(I,H[bt]),y&&(rt===1?I.kill(!1,1):H[bt]=0),Lt||(bt=rt===1?1:3,H[bt]&&zc(I,H[bt]))),R&&!kt&&Math.abs(I.getVelocity())>(Js(R)?R:2500)&&(Gs(I.callbackAnimation),D?D.progress(1):Gs(i,vt==="reverse"?1:!rt,1))):A&&o&&!an&&o(I)}if(De){var Zt=T?Ge/T.duration()*(T._caScrollDist||0):Ge;ne(Zt+(z._isFlipped?1:0)),De(Zt)}Me&&Me(-Ge/T.duration()*(T._caScrollDist||0))}},I.enable=function(me,Ye){I.enabled||(I.enabled=!0,en(L,"resize",Qs),N||en(L,"scroll",ns),ue&&en(r,"refreshInit",ue),me!==!1&&(I.progress=K=0,ze=ht=je=j()),Ye!==!1&&I.refresh())},I.getTween=function(me){return me&&oe?oe.tween:D},I.setPositions=function(me,Ye,Ue,Ge){if(T){var Ft=T.scrollTrigger,rt=T.duration(),It=Ft.end-Ft.start;me=Ft.start+It*me/rt,Ye=Ft.start+It*Ye/rt}I.refresh(!1,!1,{start:Cd(me,Ue&&!!I._startClamp),end:Cd(Ye,Ue&&!!I._endClamp)},Ge),I.update()},I.adjustPinSpacing=function(me){if(fe&&me){var Ye=fe.indexOf(x.d)+1;fe[Ye]=parseFloat(fe[Ye])+me+qt,fe[1]=parseFloat(fe[1])+me+qt,ds(fe)}},I.disable=function(me,Ye){if(I.enabled&&(me!==!1&&I.revert(!0,!0),I.enabled=I.isActive=!1,Ye||D&&D.pause(),te=0,Ee&&(Ee.uncache=1),ue&&Qt(r,"refreshInit",ue),se&&(se.pause(),oe.tween&&oe.tween.kill()&&(oe.tween=0)),!N)){for(var Ue=it.length;Ue--;)if(it[Ue].scroller===L&&it[Ue]!==I)return;Qt(L,"resize",Qs),N||Qt(L,"scroll",ns)}},I.kill=function(me,Ye){I.disable(me,Ye),D&&!Ye&&D.kill(),c&&delete bu[c];var Ue=it.indexOf(I);Ue>=0&&it.splice(Ue,1),Ue===yn&&wa>0&&yn--,Ue=0,it.forEach(function(Ge){return Ge.scroller===I.scroller&&(Ue=1)}),Ue||bn||(I.scroll.rec=0),i&&(i.scrollTrigger=null,me&&i.revert({kill:!1}),Ye||i.kill()),U&&[U,Xe,z,et].forEach(function(Ge){return Ge.parentNode&&Ge.parentNode.removeChild(Ge)}),fo===I&&(fo=0),h&&(Ee&&(Ee.uncache=1),Ue=0,it.forEach(function(Ge){return Ge.pin===h&&Ue++}),Ue||(Ee.spacer=0)),n.onKill&&n.onKill(I)},it.push(I),I.enable(!1,!1),Be&&Be(I),i&&i.add&&!pe){var Ze=I.update;I.update=function(){I.update=Ze,ot.cache++,_e||qe||I.refresh()},we.delayedCall(.01,I.update),pe=.01,_e=qe=0}else I.refresh();h&&Qb()},r.register=function(n){return rs||(we=n||_p(),xp()&&window.document&&r.enable(),rs=$s),rs},r.defaults=function(n){if(n)for(var i in n)aa[i]=n[i];return aa},r.disable=function(n,i){$s=0,it.forEach(function(o){return o[i?"kill":"disable"](n)}),Qt(st,"wheel",ns),Qt(At,"scroll",ns),clearInterval(na),Qt(At,"touchcancel",ui),Qt(yt,"touchstart",ui),sa(Qt,At,"pointerdown,touchstart,mousedown",Pd),sa(Qt,At,"pointerup,touchend,mouseup",Ld),Ba.kill(),ra(Qt);for(var s=0;s<ot.length;s+=3)oa(Qt,ot[s],ot[s+1]),oa(Qt,ot[s],ot[s+2])},r.enable=function(){if(st=window,At=document,kn=At.documentElement,yt=At.body,we&&(bo=we.utils.toArray,oo=we.utils.clamp,vu=we.core.context||ui,Oc=we.core.suppressOverwrites||ui,$u=st.history.scrollRestoration||"auto",Mu=st.pageYOffset||0,we.core.globals("ScrollTrigger",r),yt)){$s=1,fs=document.createElement("div"),fs.style.height="100vh",fs.style.position="absolute",Ap(),qb(),zt.register(we),r.isTouch=zt.isTouch,tr=zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),_u=zt.isTouch===1,en(st,"wheel",ns),ju=[st,At,kn,yt],we.matchMedia?(r.matchMedia=function(l){var u=we.matchMedia(),f;for(f in l)u.add(f,l[f]);return u},we.addEventListener("matchMediaInit",function(){return nf()}),we.addEventListener("matchMediaRevert",function(){return Tp()}),we.addEventListener("matchMedia",function(){Er(0,1),Dr("matchMedia")}),we.matchMedia().add("(orientation: portrait)",function(){return Vc(),Vc})):console.warn("Requires GSAP 3.11.0 or later"),Vc(),en(At,"scroll",ns);var n=yt.hasAttribute("style"),i=yt.style,s=i.borderTopStyle,o=we.core.Animation.prototype,a,c;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ui(yt),Yt.m=Math.round(a.top+Yt.sc())||0,Sn.m=Math.round(a.left+Sn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(yt.setAttribute("style",""),yt.removeAttribute("style")),na=setInterval(Ud,250),we.delayedCall(.5,function(){return ia=0}),en(At,"touchcancel",ui),en(yt,"touchstart",ui),sa(en,At,"pointerdown,touchstart,mousedown",Pd),sa(en,At,"pointerup,touchend,mouseup",Ld),xu=we.utils.checkPrefix("transform"),Aa.push(xu),rs=cn(),Ba=we.delayedCall(.2,Er).pause(),ss=[At,"visibilitychange",function(){var l=st.innerWidth,u=st.innerHeight;At.hidden?(wd=l,Ad=u):(wd!==l||Ad!==u)&&Qs()},At,"DOMContentLoaded",Er,st,"load",Er,st,"resize",Qs],ra(en),it.forEach(function(l){return l.enable(0,1)}),c=0;c<ot.length;c+=3)oa(Qt,ot[c],ot[c+1]),oa(Qt,ot[c],ot[c+2])}},r.config=function(n){"limitCallbacks"in n&&(Bc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(na)||(na=i)&&setInterval(Ud,i),"ignoreMobileResize"in n&&(_u=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ra(Qt)||ra(en,n.autoRefreshEvents||"none"),pp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Pn(n),o=ot.indexOf(s),a=Lr(s);~o&&ot.splice(o,a?6:2),i&&(a?vi.unshift(st,i,yt,i,kn,i):vi.unshift(s,i))},r.clearMatchMedia=function(n){it.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Bn(n)?Pn(n):n).getBoundingClientRect(),a=o[s?wr:Ar]*i||0;return s?o.right-a>0&&o.left+a<st.innerWidth:o.bottom-a>0&&o.top+a<st.innerHeight},r.positionInViewport=function(n,i,s){Bn(n)&&(n=Pn(n));var o=n.getBoundingClientRect(),a=o[s?wr:Ar],c=i==null?a/2:i in Va?Va[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+c)/st.innerWidth:(o.top+c)/st.innerHeight},r.killAll=function(n){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ir.killAll||[];Ir={},i.forEach(function(s){return s()})}},r})();Ke.version="3.13.0";Ke.saveStyles=function(r){return r?bo(r).forEach(function(e){if(e&&e.style){var t=On.indexOf(e);t>=0&&On.splice(t,5),On.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),vu())}}):On};Ke.revert=function(r,e){return nf(!r,e)};Ke.create=function(r,e){return new Ke(r,e)};Ke.refresh=function(r){return r?Qs(!0):(rs||Ke.register())&&Er(!0)};Ke.update=function(r){return++ot.cache&&Hi(r===!0?2:0)};Ke.clearScrollMemory=wp;Ke.maxScroll=function(r,e){return gi(r,e?Sn:Yt)};Ke.getScrollFunc=function(r,e){return cr(Pn(r),e?Sn:Yt)};Ke.getById=function(r){return bu[r]};Ke.getAll=function(){return it.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ke.isScrolling=function(){return!!jn};Ke.snapDirectional=tf;Ke.addEventListener=function(r,e){var t=Ir[r]||(Ir[r]=[]);~t.indexOf(e)||t.push(e)};Ke.removeEventListener=function(r,e){var t=Ir[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ke.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(l,u){var f=[],d=[],h=we.delayedCall(i,function(){u(f,d),f=[],d=[]}).pause();return function(g){f.length||h.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&h.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&ln(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return ln(s)&&(s=s(),en(Ke,"refresh",function(){return s=e.batchMax()})),bo(r).forEach(function(c){var l={};for(a in n)l[a]=n[a];l.trigger=c,t.push(Ke.create(l))}),t};var zd=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Gc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(zt.isTouch?" pinch-zoom":""):"none",e===kn&&r(yt,t)},fa={auto:1,scroll:1},rM=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||we.core.getCache(s),a=cn(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==yt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(fa[(c=qn(s)).overflowY]||fa[c.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Lr(s)&&(fa[(c=qn(s)).overflowY]||fa[c.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Cp=function(e,t,n,i){return zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&rM,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&en(At,zt.eventTypes[0],Hd,!1,!0)},onDisable:function(){return Qt(At,zt.eventTypes[0],Hd,!0)}})},sM=/(input|label|select|textarea)/i,Vd,Hd=function(e){var t=sM.test(e.target.tagName);(t||Vd)&&(e._gsapAllow=!0,Vd=t)},oM=function(e){br(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,c,l=Pn(e.target)||kn,u=we.core.globals().ScrollSmoother,f=u&&u.get(),d=tr&&(e.content&&Pn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=cr(l,Yt),g=cr(l,Sn),_=1,m=(zt.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,p=0,M=ln(i)?function(){return i(a)}:function(){return i||2.8},y,b,C=Cp(l,e.type,!0,s),S=function(){return b=!1},T=ui,R=ui,v=function(){c=gi(l,Yt),R=oo(tr?1:0,c),n&&(T=oo(0,gi(l,Sn))),y=Rr},x=function(){d._gsap.y=Zs(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},A=function(){if(b){requestAnimationFrame(S);var q=Zs(a.deltaY/2),ee=R(h.v-q);if(d&&ee!==h.v+h.offset){h.offset=ee-h.v;var I=Zs((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",d._gsap.y=I+"px",h.cacheID=ot.cache,Hi()}return!0}h.offset&&x(),b=!0},L,F,N,G,H=function(){v(),L.isActive()&&L.vars.scrollY>c&&(h()>c?L.progress(1)&&h(c):L.resetTo("scrollY",c))};return d&&we.set(d,{y:"+=0"}),e.ignoreCheck=function(J){return tr&&J.type==="touchmove"&&A()||_>1.05&&J.type!=="touchstart"||a.isGesturing||J.touches&&J.touches.length>1},e.onPress=function(){b=!1;var J=_;_=Zs((st.visualViewport&&st.visualViewport.scale||1)/m),L.pause(),J!==_&&Gc(l,_>1.01?!0:n?!1:"x"),F=g(),N=h(),v(),y=Rr},e.onRelease=e.onGestureStart=function(J,q){if(h.offset&&x(),!q)G.restart(!0);else{ot.cache++;var ee=M(),I,ue;n&&(I=g(),ue=I+ee*.05*-J.velocityX/.227,ee*=zd(g,I,ue,gi(l,Sn)),L.vars.scrollX=T(ue)),I=h(),ue=I+ee*.05*-J.velocityY/.227,ee*=zd(h,I,ue,gi(l,Yt)),L.vars.scrollY=R(ue),L.invalidate().duration(ee).play(.01),(tr&&L.vars.scrollY>=c||I>=c-1)&&we.to({},{onUpdate:H,duration:ee})}o&&o(J)},e.onWheel=function(){L._ts&&L.pause(),cn()-p>1e3&&(y=0,p=cn())},e.onChange=function(J,q,ee,I,ue){if(Rr!==y&&v(),q&&n&&g(T(I[2]===q?F+(J.startX-J.x):g()+q-I[1])),ee){h.offset&&x();var Ie=ue[2]===ee,He=Ie?N+J.startY-J.y:h()+ee-ue[1],je=R(He);Ie&&He!==je&&(N+=je-He),h(je)}(ee||q)&&Hi()},e.onEnable=function(){Gc(l,n?!1:"x"),Ke.addEventListener("refresh",H),en(st,"resize",H),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),C.enable()},e.onDisable=function(){Gc(l,!0),Qt(st,"resize",H),Ke.removeEventListener("refresh",H),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new zt(e),a.iOS=tr,tr&&!h()&&h(1),tr&&we.ticker.add(ui),G=a._dc,L=we.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Rp(h,h(),function(){return L.pause()})},onUpdate:Hi,onComplete:G.vars.onComplete}),a};Ke.sort=function(r){if(ln(r))return it.sort(r);var e=st.pageYOffset||0;return Ke.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+st.innerHeight}),it.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ke.observe=function(r){return new zt(r)};Ke.normalizeScroll=function(r){if(typeof r>"u")return _n;if(r===!0&&_n)return _n.enable();if(r===!1){_n&&_n.kill(),_n=r;return}var e=r instanceof zt?r:oM(r);return _n&&_n.target===e.target&&_n.kill(),Lr(e.target)&&(_n=e),e};Ke.core={_getVelocityProp:gu,_inputObserver:Cp,_scrollers:ot,_proxies:vi,bridge:{ss:function(){jn||Dr("scrollStart"),jn=cn()},ref:function(){return an}}};_p()&&we.registerPlugin(Ke);Ae.registerPlugin(Ke);const aM=["Hey, I'm Digi","What is DigiPHY?"],Wc=["Have you ever wondered how your ideas would look like or behave once they become real? DigiPHY turns your early concepts and sketches into full - scale, interactive experiences in seconds.Sketch → test → refine - all in one continuous loop, without interrupting your creative momentum.","DigiPHY, created by Granstudio, merges a physical seating frame with a real-time digital layer. It allows me to sit in the adjustable frame, change seat positions, move displays, test visibility, and see everything update instantly wearing any AR goggles. DigiPHY lets me experience and adjust a full car interior long before a physical prototype exists - saving huge amounts of time and money."];function Pp(r){const e=new Cs,t=new En;r.add(t);let n;function i(){const T=new Jh().load("baked/baked.jpg");T.flipY=!1,T.colorSpace=Kt;const R=new Ni({map:T});e.load("floors/floor-1.glb",v=>{const x=v.scene;x.position.set(0,0,0),x.rotateY(Math.PI),x.traverse(L=>{L.isMesh&&(L.material=R,L.castShadow=!0,L.receiveShadow=!0)});const A=x.getObjectByName("glass004");A&&(A.material=A.material.clone(),A.material.transparent=!0,A.material.opacity=.6),r.add(x)}),e.load("floors/floor-1-nb.glb",v=>{const x=v.scene;x.position.set(0,0,0),x.rotateY(Math.PI),r.add(x)}),e.load("floors/enviorment.glb",v=>{const x=v.scene;x.position.set(0,0,0),x.rotateY(Math.PI),x.traverse(A=>{A.isMesh&&(A.castShadow=!0,A.receiveShadow=!0)}),r.add(x)})}function s(){}let o=!1,a;const c=document.querySelectorAll(".physical-component");function l(T,R){n=T,R===1&&n<8?c.forEach(v=>{v.classList.remove("visually-hidden")}):c.forEach(v=>{v.classList.add("visually-hidden")}),R!==a&&g(),R!==-1&&(a=R,6<=T&&T<10&&o===!1&&h(),(6>T||T>10&&o===!0)&&g())}document.querySelectorAll("[data-target]").forEach(T=>{const R=T.dataset.target;T.addEventListener("mouseover",()=>f(R)),T.addEventListener("mouseout",()=>d(R))});const u=document.querySelector(".floor1-ui-station1 > .ui-tip");function f(T){if(a!==1||n>8)return;const R=document.querySelector(T);if(!R)return;const v=[...R.children];R.classList.remove("visually-hidden"),Ae.to(u,{opacity:0,scale:.8,y:20,duration:.3,stagger:.06,ease:"power2.in",onComplete:()=>{u.classList.add("visually-hidden")}}),Ae.fromTo(v,{opacity:0,scale:.8,y:20},{opacity:1,scale:1,y:0,duration:.4,stagger:.08,ease:"power2.out"}),o=!0}function d(T){if(a!==1)return;const R=document.querySelector(T);if(!R)return;const v=[...R.children];Ae.to(v,{opacity:0,scale:.8,y:20,duration:.3,stagger:.06,ease:"power2.in",onComplete:()=>{R.classList.add("visually-hidden")}}),o=!1}function h(){const T=document.querySelector(`.floor1-ui-station${a}`);if(!T)return;const R=[...T.children];T.classList.remove("visually-hidden"),Ae.fromTo(R,{opacity:0,scale:.8,y:20},{opacity:1,scale:1,y:0,duration:.4,stagger:.08,ease:"power2.out"}),o=!0}function g(){const T=document.querySelector(`.floor1-ui-station${a}`);if(!T)return;const R=[...T.children];Ae.to(R,{opacity:0,scale:.8,y:20,duration:.3,stagger:.06,ease:"power2.in",onComplete:()=>{T.classList.add("visually-hidden")}}),o=!1}i();let _=0;const m=document.querySelector(".ui-swaptext"),p=document.querySelector(".ui-swaptitle"),M=document.querySelectorAll(".ui-panel-progress div");function y(){m.textContent=Wc[_],p.textContent=aM[_],M.forEach((T,R)=>{T.classList.toggle("active",R===_)})}const b=document.querySelector(".ui-panel-next"),C=document.querySelector(".ui-panel-back");b.addEventListener("click",()=>{_<Wc.length-1&&(_++,y()),_===Wc.length-1&&(b.classList.add("ui-footer-button-disabled"),C.classList.remove("ui-footer-button-disabled"))}),C.addEventListener("click",()=>{_>0&&(_--,y()),_===0&&(C.classList.add("ui-footer-button-disabled"),b.classList.remove("ui-footer-button-disabled"))}),y();function S(T=30){if(!floorGroup){console.warn("Floor model not loaded yet.");return}const R=Xa.degToRad(T);Ae.to(floorGroup.rotation,{y:R,duration:0,ease:"power2.inOut",onUpdate:()=>{}})}return{group:t,update:s,checkHeight:l,rotateFloor:S}}Ae.registerPlugin(Ke);const Eu=[];let Xc=!0;function cM(r){const e=new Cs,t=new En;r.add(t);let n=new En;function i(){e.load("floors/floor-2.glb",o=>{const a=o.scene;n.add(a),a.position.set(0,0,0),a.rotateY(Math.PI),a.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0)}),r.add(n);const c=a.getObjectByName("custom_table");c&&(Eu.push(c),c.traverse(l=>{Eu.push(l)}))})}function s(o=30){if(!n){console.warn("Floor model not loaded yet.");return}const a=Xa.degToRad(o);Ae.to(n.rotation,{y:a,duration:0,ease:"power2.inOut",onUpdate:()=>{}})}return i(),{group:t,rotateFloor:s}}function lM(r,e,t,n,i){const s=document.querySelector(r);if(!s)return;s.innerHTML="";const o=document.createElement("h2");o.textContent="Accessories",s.appendChild(o),Object.entries(e).forEach(([m,p])=>{if(p.variants.length>1){const M=document.createElement("h3");M.textContent=m,s.appendChild(M);const y=document.createElement("button");y.classList.add("accessory-variant-button"),y.classList.add("accessory-variant-button-none"),y.classList.add(`${m}-button`),y.addEventListener("click",()=>{t(m,-1),document.querySelectorAll(`.${m}-button`).forEach(b=>b.classList.remove("primary-active")),y.classList.add("primary-active")}),s.appendChild(y),p.variants.forEach((b,C)=>{const S=document.createElement("button");S.classList.add("accessory-variant-button"),S.classList.add(`${m}-button`);const T=document.createElement("img");T.src=`/around-digiphy/img/accessory-${m}-${C}.png`,S.appendChild(T),S.addEventListener("click",()=>{t(m,C),document.querySelectorAll(`.${m}-button`).forEach(R=>R.classList.remove("primary-active")),S.classList.add("primary-active"),_(b,n,"accessory-primary"),_(b,i,"accessory-secondary")}),s.appendChild(S)})}});const a=document.createElement("div");a.classList.add("primary-header"),s.appendChild(a);const c=document.createElement("h3");c.textContent="Primary Color:",a.appendChild(c);const l=document.createElement("span");l.classList.add("primary-selected"),a.appendChild(l),[{name:"Carbon",value:1513498,roughness:.1,metalness:.9},{name:"Pearl",value:16248308,roughness:.3,metalness:.2},{name:"Matte grey",value:5855577,roughness:.8,metalness:.3},{name:"Sage",value:11122313,roughness:.7,metalness:.9},{name:"Desert",value:12559503,roughness:.9,metalness:.2},{name:"Ultramarine",value:10137078,roughness:.01,metalness:.99}].forEach((m,p)=>{const M=document.createElement("button");M.classList.add("color-button"),M.classList.add("primary-color-button"),M.classList.add(`primary-${p}`),M.addEventListener("click",()=>{document.querySelectorAll(".primary-color-button").forEach(y=>y.classList.remove("primary-active")),M.classList.add("primary-active"),document.querySelector(".primary-selected").textContent=m.name,Object.assign(n,m),Object.values(e).forEach(y=>{const b=y.variants[y.defaultVariantIndex];b&&_(b,n,"accessory-primary")})}),s.appendChild(M)});const f=document.createElement("div");f.classList.add("primary-header"),s.appendChild(f);const d=document.createElement("h3");d.textContent="Secondary Color:",f.appendChild(d);const h=document.createElement("span");h.classList.add("secondary-selected"),f.appendChild(h),[{name:"Charcoal",value:6908782,roughness:.3,metalness:.9},{name:"Pink",value:14270417,roughness:.7,metalness:.3},{name:"Light grey",value:12699079,roughness:.1,metalness:.7},{name:"Teal",value:11588818,roughness:.8,metalness:.9},{name:"Coral",value:16739930,roughness:.7,metalness:.3},{name:"Alpine",value:5728342,roughness:.1,metalness:.7}].forEach((m,p)=>{const M=document.createElement("button");M.classList.add("color-button"),M.classList.add("secondary-color-button"),M.classList.add(`secondary-${p}`),M.addEventListener("click",()=>{document.querySelectorAll(".secondary-color-button").forEach(y=>y.classList.remove("primary-active")),M.classList.add("primary-active"),document.querySelector(".secondary-selected").textContent=m.name,Object.assign(i,m),Object.values(e).forEach(y=>{const b=y.variants[y.defaultVariantIndex];b&&_(b,i,"accessory-secondary")})}),s.appendChild(M)});function _(m,p,M){m.traverse(y=>{if(!y.isMesh)return;(Array.isArray(y.material)?y.material:[y.material]).forEach(C=>{if(C.name&&C.name.startsWith(M)){const S=new $e(p.value);Ae.to(C.color,{r:S.r,g:S.g,b:S.b,duration:.5,ease:"power2.out"}),Ae.to(C,{roughness:p.roughness,metalness:p.metalness,duration:.5,ease:"power2.out"})}})})}}let Ws=!0;const da=document.querySelectorAll(".ui-accessories");document.getElementById("accessory-menu");document.querySelector(".floor2-ui-container > .ui-tip");function Lp(){Ws?(Ws=!1,da.forEach(r=>{r.classList.remove("visually-hidden")}),Ae.fromTo(da,{opacity:0,scale:.8,y:20},{opacity:1,scale:1,y:0,duration:.4,stagger:.06,ease:"power2.out"}),console.log("ui hidden: ",Ws)):(Ws=!0,Ae.to(da,{opacity:0,scale:.8,y:20,duration:.3,stagger:.06,ease:"power2.in",onComplete:()=>{da.forEach(r=>{r.classList.add("visually-hidden")})}}),console.log("ui hidden: ",Ws))}const ha=document.getElementById("ui-panel-2-1");let qc=!0;function Ip(){qc?(qc=!1,ha.classList.remove("visually-hidden"),Ae.fromTo(ha,{opacity:0,scale:.8,y:20},{opacity:1,scale:1,y:0,duration:.4,ease:"power2.out"})):(qc=!0,Ae.to(ha,{opacity:0,scale:.8,y:20,duration:.3,stagger:.06,ease:"power2.in",onComplete:()=>{ha.classList.add("visually-hidden")}}))}function uM(){Xc=!Xc;const r=Xc?1:0;Eu.forEach(e=>{if(!e.isMesh)return;const t=Array.isArray(e.material)?e.material:[e.material];e.visible=!0,t.forEach(n=>{n.transparent=!0,Ae.to(n,{opacity:r,duration:.8,ease:"power2.inOut",onComplete:()=>{r===0&&(e.visible=!1)}})})})}document.querySelector(".uni-button").addEventListener("click",()=>{});Ae.registerPlugin(Ke);let Li=0;const fM=["Digital layer","The Headset"],Yc=["DigiPHY phyisical apect is important, but the digital layer is where everything comestogether. Using DigiPHY's special software on any device, I can see my car's setup and control the phisical components with a single tap. The system allows me to change and adjust the phyiscal object dimensions in a matter of seconds. ","To view the virtual layer, I use an AR headset - DigiPHY works with almost any brand. The moment I put it on, I'm inside the digital model. It lets me and other testers to study the car in real scale: viewpoints, interior flow, screen interfaces, all of it. It's the fastest way to understand how the design actually feels."];function dM(r){const e=new Cs,t=new En;r.add(t);let n,i=!1,s=new En;function o(){e.load("floors/floor-3.glb",y=>{const b=y.scene;s.add(b),b.position.set(0,0,0),b.rotateY(Math.PI),b.traverse(C=>{C.isMesh&&(C.castShadow=!0,C.receiveShadow=!0)}),r.add(s)}),e.load("models/digiphy-overlay.glb",y=>{n=y.scene,n.position.set(0,2,0),n.traverse(x=>{x.isMesh&&x.material&&(x.material.transparent=!0,x.material.opacity=0,n.visible=!1)}),r.add(n);const b=15,C=63,S={first:1,hold:6,last:4.2},R=2+C,v=Ae.timeline({scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",scrub:!0}});v.to(n.position,{y:b,ease:"linear",duration:S.first}),v.to(n.position,{y:b,ease:"none",duration:S.hold}),v.to(n.position,{y:R,ease:"linear",duration:S.last}),Ae.to(n.rotation,{ease:"linear",y:n.rotation.y+5,scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",scrub:!0}})})}function a(){n&&(i=!i,i?(n.visible=!0,n.traverse(y=>{y.isMesh&&Ae.to(y.material,{opacity:.5,duration:.6,ease:"power2.out"})})):n.traverse(y=>{y.isMesh&&Ae.to(y.material,{opacity:0,duration:.5,ease:"power2.out",onComplete:()=>{n.visible=!1}})}),M(".floor3-ui-container .ui-tip"))}function c(){console.log("overlay should be off"),n&&(i=!1,n.traverse(y=>{y.isMesh&&Ae.to(y.material,{opacity:0,duration:.5,ease:"power2.out",onComplete:()=>{n.visible=!1}})}),M(".floor3-ui-container .ui-tip"))}function l(y){if(!s){console.warn("Floor model not loaded yet.");return}const b=Xa.degToRad(y);console.log(b),Ae.to(s.rotation,{y:b,duration:0,ease:"power2.inOut",onUpdate:()=>{console.log(s.rotation.y)}})}function u(){}o();const f=document.querySelector(".ui-swaptext-3-1"),d=document.querySelector(".ui-swaptitle-3-1"),h=document.querySelectorAll("#ui-panel-3-1 .ui-panel-progress div");function g(){f.textContent=Yc[Li],d.textContent=fM[Li],h.forEach((y,b)=>{y.classList.toggle("active",b===Li)})}const _=document.querySelector("#ui-panel-3-1 .ui-panel-next"),m=document.querySelector("#ui-panel-3-1 .ui-panel-back");_.addEventListener("click",()=>{Li<Yc.length-1&&(Li++,g()),Li===Yc.length-1&&(_.classList.add("ui-footer-button-disabled"),m.classList.remove("ui-footer-button-disabled"))}),m.addEventListener("click",()=>{Li>0&&(Li--,g()),Li===0&&(m.classList.add("ui-footer-button-disabled"),_.classList.remove("ui-footer-button-disabled"))}),g();function p(y){const b=document.querySelector(y);b.classList.remove("visually-hidden"),Ae.fromTo(b,{opacity:0,scale:.8,y:20},{opacity:1,scale:1,y:0,duration:.4,ease:"power2.out"})}function M(y){const b=document.querySelector(y);Ae.to(b,{opacity:0,scale:.8,y:20,duration:.3,stagger:.06,ease:"power2.in",onComplete:()=>{b.classList.add("visually-hidden")}})}return{group:t,update:u,toggleOverlayOpacity:a,overlayOff:c,rotateFloor:l,showUI:p,hideUI:M}}var is={},Kc,Gd;function hM(){return Gd||(Gd=1,Kc=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Kc}var jc={},er={},Wd;function Nr(){if(Wd)return er;Wd=1;let r;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return er.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},er.getSymbolTotalCodewords=function(n){return e[n]},er.getBCHDigit=function(t){let n=0;for(;t!==0;)n++,t>>>=1;return n},er.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');r=n},er.isKanjiModeEnabled=function(){return typeof r<"u"},er.toSJIS=function(n){return r(n)},er}var $c={},Xd;function rf(){return Xd||(Xd=1,(function(r){r.L={bit:1},r.M={bit:0},r.Q={bit:3},r.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw new Error("Unknown EC Level: "+t)}}r.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},r.from=function(n,i){if(r.isValid(n))return n;try{return e(n)}catch{return i}}})($c)),$c}var Zc,qd;function pM(){if(qd)return Zc;qd=1;function r(){this.buffer=[],this.length=0}return r.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Zc=r,Zc}var Jc,Yd;function mM(){if(Yd)return Jc;Yd=1;function r(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return r.prototype.set=function(e,t,n,i){const s=e*this.size+t;this.data[s]=n,i&&(this.reservedBit[s]=!0)},r.prototype.get=function(e,t){return this.data[e*this.size+t]},r.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},r.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},Jc=r,Jc}var Qc={},Kd;function gM(){return Kd||(Kd=1,(function(r){const e=Nr().getSymbolSize;r.getRowColCoords=function(n){if(n===1)return[];const i=Math.floor(n/7)+2,s=e(n),o=s===145?26:Math.ceil((s-13)/(2*i-2))*2,a=[s-7];for(let c=1;c<i-1;c++)a[c]=a[c-1]-o;return a.push(6),a.reverse()},r.getPositions=function(n){const i=[],s=r.getRowColCoords(n),o=s.length;for(let a=0;a<o;a++)for(let c=0;c<o;c++)a===0&&c===0||a===0&&c===o-1||a===o-1&&c===0||i.push([s[a],s[c]]);return i}})(Qc)),Qc}var el={},jd;function xM(){if(jd)return el;jd=1;const r=Nr().getSymbolSize,e=7;return el.getPositions=function(n){const i=r(n);return[[0,0],[i-e,0],[0,i-e]]},el}var tl={},$d;function _M(){return $d||($d=1,(function(r){r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};r.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},r.from=function(i){return r.isValid(i)?parseInt(i,10):void 0},r.getPenaltyN1=function(i){const s=i.size;let o=0,a=0,c=0,l=null,u=null;for(let f=0;f<s;f++){a=c=0,l=u=null;for(let d=0;d<s;d++){let h=i.get(f,d);h===l?a++:(a>=5&&(o+=e.N1+(a-5)),l=h,a=1),h=i.get(d,f),h===u?c++:(c>=5&&(o+=e.N1+(c-5)),u=h,c=1)}a>=5&&(o+=e.N1+(a-5)),c>=5&&(o+=e.N1+(c-5))}return o},r.getPenaltyN2=function(i){const s=i.size;let o=0;for(let a=0;a<s-1;a++)for(let c=0;c<s-1;c++){const l=i.get(a,c)+i.get(a,c+1)+i.get(a+1,c)+i.get(a+1,c+1);(l===4||l===0)&&o++}return o*e.N2},r.getPenaltyN3=function(i){const s=i.size;let o=0,a=0,c=0;for(let l=0;l<s;l++){a=c=0;for(let u=0;u<s;u++)a=a<<1&2047|i.get(l,u),u>=10&&(a===1488||a===93)&&o++,c=c<<1&2047|i.get(u,l),u>=10&&(c===1488||c===93)&&o++}return o*e.N3},r.getPenaltyN4=function(i){let s=0;const o=i.data.length;for(let c=0;c<o;c++)s+=i.data[c];return Math.abs(Math.ceil(s*100/o/5)-10)*e.N4};function t(n,i,s){switch(n){case r.Patterns.PATTERN000:return(i+s)%2===0;case r.Patterns.PATTERN001:return i%2===0;case r.Patterns.PATTERN010:return s%3===0;case r.Patterns.PATTERN011:return(i+s)%3===0;case r.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(s/3))%2===0;case r.Patterns.PATTERN101:return i*s%2+i*s%3===0;case r.Patterns.PATTERN110:return(i*s%2+i*s%3)%2===0;case r.Patterns.PATTERN111:return(i*s%3+(i+s)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}r.applyMask=function(i,s){const o=s.size;for(let a=0;a<o;a++)for(let c=0;c<o;c++)s.isReserved(c,a)||s.xor(c,a,t(i,c,a))},r.getBestMask=function(i,s){const o=Object.keys(r.Patterns).length;let a=0,c=1/0;for(let l=0;l<o;l++){s(l),r.applyMask(l,i);const u=r.getPenaltyN1(i)+r.getPenaltyN2(i)+r.getPenaltyN3(i)+r.getPenaltyN4(i);r.applyMask(l,i),u<c&&(c=u,a=l)}return a}})(tl)),tl}var pa={},Zd;function Dp(){if(Zd)return pa;Zd=1;const r=rf(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return pa.getBlocksCount=function(i,s){switch(s){case r.L:return e[(i-1)*4+0];case r.M:return e[(i-1)*4+1];case r.Q:return e[(i-1)*4+2];case r.H:return e[(i-1)*4+3];default:return}},pa.getTotalCodewordsCount=function(i,s){switch(s){case r.L:return t[(i-1)*4+0];case r.M:return t[(i-1)*4+1];case r.Q:return t[(i-1)*4+2];case r.H:return t[(i-1)*4+3];default:return}},pa}var nl={},Xs={},Jd;function vM(){if(Jd)return Xs;Jd=1;const r=new Uint8Array(512),e=new Uint8Array(256);return(function(){let n=1;for(let i=0;i<255;i++)r[i]=n,e[n]=i,n<<=1,n&256&&(n^=285);for(let i=255;i<512;i++)r[i]=r[i-255]})(),Xs.log=function(n){if(n<1)throw new Error("log("+n+")");return e[n]},Xs.exp=function(n){return r[n]},Xs.mul=function(n,i){return n===0||i===0?0:r[e[n]+e[i]]},Xs}var Qd;function yM(){return Qd||(Qd=1,(function(r){const e=vM();r.mul=function(n,i){const s=new Uint8Array(n.length+i.length-1);for(let o=0;o<n.length;o++)for(let a=0;a<i.length;a++)s[o+a]^=e.mul(n[o],i[a]);return s},r.mod=function(n,i){let s=new Uint8Array(n);for(;s.length-i.length>=0;){const o=s[0];for(let c=0;c<i.length;c++)s[c]^=e.mul(i[c],o);let a=0;for(;a<s.length&&s[a]===0;)a++;s=s.slice(a)}return s},r.generateECPolynomial=function(n){let i=new Uint8Array([1]);for(let s=0;s<n;s++)i=r.mul(i,new Uint8Array([1,e.exp(s)]));return i}})(nl)),nl}var il,eh;function bM(){if(eh)return il;eh=1;const r=yM();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(n){this.degree=n,this.genPoly=r.generateECPolynomial(this.degree)},e.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(n.length+this.degree);i.set(n);const s=r.mod(i,this.genPoly),o=this.degree-s.length;if(o>0){const a=new Uint8Array(this.degree);return a.set(s,o),a}return s},il=e,il}var rl={},sl={},ol={},th;function Up(){return th||(th=1,ol.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),ol}var ci={},nh;function Np(){if(nh)return ci;nh=1;const r="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;ci.KANJI=new RegExp(t,"g"),ci.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),ci.BYTE=new RegExp(n,"g"),ci.NUMERIC=new RegExp(r,"g"),ci.ALPHANUMERIC=new RegExp(e,"g");const i=new RegExp("^"+t+"$"),s=new RegExp("^"+r+"$"),o=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return ci.testKanji=function(c){return i.test(c)},ci.testNumeric=function(c){return s.test(c)},ci.testAlphanumeric=function(c){return o.test(c)},ci}var ih;function Fr(){return ih||(ih=1,(function(r){const e=Up(),t=Np();r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},r.MIXED={bit:-1},r.getCharCountIndicator=function(s,o){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?s.ccBits[0]:o<27?s.ccBits[1]:s.ccBits[2]},r.getBestModeForData=function(s){return t.testNumeric(s)?r.NUMERIC:t.testAlphanumeric(s)?r.ALPHANUMERIC:t.testKanji(s)?r.KANJI:r.BYTE},r.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},r.isValid=function(s){return s&&s.bit&&s.ccBits};function n(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw new Error("Unknown mode: "+i)}}r.from=function(s,o){if(r.isValid(s))return s;try{return n(s)}catch{return o}}})(sl)),sl}var rh;function MM(){return rh||(rh=1,(function(r){const e=Nr(),t=Dp(),n=rf(),i=Fr(),s=Up(),o=7973,a=e.getBCHDigit(o);function c(d,h,g){for(let _=1;_<=40;_++)if(h<=r.getCapacity(_,g,d))return _}function l(d,h){return i.getCharCountIndicator(d,h)+4}function u(d,h){let g=0;return d.forEach(function(_){const m=l(_.mode,h);g+=m+_.getBitsLength()}),g}function f(d,h){for(let g=1;g<=40;g++)if(u(d,g)<=r.getCapacity(g,h,i.MIXED))return g}r.from=function(h,g){return s.isValid(h)?parseInt(h,10):g},r.getCapacity=function(h,g,_){if(!s.isValid(h))throw new Error("Invalid QR Code version");typeof _>"u"&&(_=i.BYTE);const m=e.getSymbolTotalCodewords(h),p=t.getTotalCodewordsCount(h,g),M=(m-p)*8;if(_===i.MIXED)return M;const y=M-l(_,h);switch(_){case i.NUMERIC:return Math.floor(y/10*3);case i.ALPHANUMERIC:return Math.floor(y/11*2);case i.KANJI:return Math.floor(y/13);case i.BYTE:default:return Math.floor(y/8)}},r.getBestVersionForData=function(h,g){let _;const m=n.from(g,n.M);if(Array.isArray(h)){if(h.length>1)return f(h,m);if(h.length===0)return 1;_=h[0]}else _=h;return c(_.mode,_.getLength(),m)},r.getEncodedBits=function(h){if(!s.isValid(h)||h<7)throw new Error("Invalid QR Code version");let g=h<<12;for(;e.getBCHDigit(g)-a>=0;)g^=o<<e.getBCHDigit(g)-a;return h<<12|g}})(rl)),rl}var al={},sh;function SM(){if(sh)return al;sh=1;const r=Nr(),e=1335,t=21522,n=r.getBCHDigit(e);return al.getEncodedBits=function(s,o){const a=s.bit<<3|o;let c=a<<10;for(;r.getBCHDigit(c)-n>=0;)c^=e<<r.getBCHDigit(c)-n;return(a<<10|c)^t},al}var cl={},ll,oh;function EM(){if(oh)return ll;oh=1;const r=Fr();function e(t){this.mode=r.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let i,s,o;for(i=0;i+3<=this.data.length;i+=3)s=this.data.substr(i,3),o=parseInt(s,10),n.put(o,10);const a=this.data.length-i;a>0&&(s=this.data.substr(i),o=parseInt(s,10),n.put(o,a*3+1))},ll=e,ll}var ul,ah;function TM(){if(ah)return ul;ah=1;const r=Fr(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(n){this.mode=r.ALPHANUMERIC,this.data=n}return t.getBitsLength=function(i){return 11*Math.floor(i/2)+6*(i%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let s;for(s=0;s+2<=this.data.length;s+=2){let o=e.indexOf(this.data[s])*45;o+=e.indexOf(this.data[s+1]),i.put(o,11)}this.data.length%2&&i.put(e.indexOf(this.data[s]),6)},ul=t,ul}var fl,ch;function wM(){if(ch)return fl;ch=1;const r=Fr();function e(t){this.mode=r.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(n){return n*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let n=0,i=this.data.length;n<i;n++)t.put(this.data[n],8)},fl=e,fl}var dl,lh;function AM(){if(lh)return dl;lh=1;const r=Fr(),e=Nr();function t(n){this.mode=r.KANJI,this.data=n}return t.getBitsLength=function(i){return i*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let i;for(i=0;i<this.data.length;i++){let s=e.toSJIS(this.data[i]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[i]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),n.put(s,13)}},dl=t,dl}var hl={exports:{}},uh;function RM(){return uh||(uh=1,(function(r){var e={single_source_shortest_paths:function(t,n,i){var s={},o={};o[n]=0;var a=e.PriorityQueue.make();a.push(n,0);for(var c,l,u,f,d,h,g,_,m;!a.empty();){c=a.pop(),l=c.value,f=c.cost,d=t[l]||{};for(u in d)d.hasOwnProperty(u)&&(h=d[u],g=f+h,_=o[u],m=typeof o[u]>"u",(m||_>g)&&(o[u]=g,a.push(u,g),s[u]=l))}if(typeof i<"u"&&typeof o[i]>"u"){var p=["Could not find a path from ",n," to ",i,"."].join("");throw new Error(p)}return s},extract_shortest_path_from_predecessor_list:function(t,n){for(var i=[],s=n;s;)i.push(s),t[s],s=t[s];return i.reverse(),i},find_path:function(t,n,i){var s=e.single_source_shortest_paths(t,n,i);return e.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(t){var n=e.PriorityQueue,i={},s;t=t||{};for(s in n)n.hasOwnProperty(s)&&(i[s]=n[s]);return i.queue=[],i.sorter=t.sorter||n.default_sorter,i},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){var i={value:t,cost:n};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};r.exports=e})(hl)),hl.exports}var fh;function CM(){return fh||(fh=1,(function(r){const e=Fr(),t=EM(),n=TM(),i=wM(),s=AM(),o=Np(),a=Nr(),c=RM();function l(p){return unescape(encodeURIComponent(p)).length}function u(p,M,y){const b=[];let C;for(;(C=p.exec(y))!==null;)b.push({data:C[0],index:C.index,mode:M,length:C[0].length});return b}function f(p){const M=u(o.NUMERIC,e.NUMERIC,p),y=u(o.ALPHANUMERIC,e.ALPHANUMERIC,p);let b,C;return a.isKanjiModeEnabled()?(b=u(o.BYTE,e.BYTE,p),C=u(o.KANJI,e.KANJI,p)):(b=u(o.BYTE_KANJI,e.BYTE,p),C=[]),M.concat(y,b,C).sort(function(T,R){return T.index-R.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function d(p,M){switch(M){case e.NUMERIC:return t.getBitsLength(p);case e.ALPHANUMERIC:return n.getBitsLength(p);case e.KANJI:return s.getBitsLength(p);case e.BYTE:return i.getBitsLength(p)}}function h(p){return p.reduce(function(M,y){const b=M.length-1>=0?M[M.length-1]:null;return b&&b.mode===y.mode?(M[M.length-1].data+=y.data,M):(M.push(y),M)},[])}function g(p){const M=[];for(let y=0;y<p.length;y++){const b=p[y];switch(b.mode){case e.NUMERIC:M.push([b,{data:b.data,mode:e.ALPHANUMERIC,length:b.length},{data:b.data,mode:e.BYTE,length:b.length}]);break;case e.ALPHANUMERIC:M.push([b,{data:b.data,mode:e.BYTE,length:b.length}]);break;case e.KANJI:M.push([b,{data:b.data,mode:e.BYTE,length:l(b.data)}]);break;case e.BYTE:M.push([{data:b.data,mode:e.BYTE,length:l(b.data)}])}}return M}function _(p,M){const y={},b={start:{}};let C=["start"];for(let S=0;S<p.length;S++){const T=p[S],R=[];for(let v=0;v<T.length;v++){const x=T[v],A=""+S+v;R.push(A),y[A]={node:x,lastCount:0},b[A]={};for(let L=0;L<C.length;L++){const F=C[L];y[F]&&y[F].node.mode===x.mode?(b[F][A]=d(y[F].lastCount+x.length,x.mode)-d(y[F].lastCount,x.mode),y[F].lastCount+=x.length):(y[F]&&(y[F].lastCount=x.length),b[F][A]=d(x.length,x.mode)+4+e.getCharCountIndicator(x.mode,M))}}C=R}for(let S=0;S<C.length;S++)b[C[S]].end=0;return{map:b,table:y}}function m(p,M){let y;const b=e.getBestModeForData(p);if(y=e.from(M,b),y!==e.BYTE&&y.bit<b.bit)throw new Error('"'+p+'" cannot be encoded with mode '+e.toString(y)+`.
 Suggested mode is: `+e.toString(b));switch(y===e.KANJI&&!a.isKanjiModeEnabled()&&(y=e.BYTE),y){case e.NUMERIC:return new t(p);case e.ALPHANUMERIC:return new n(p);case e.KANJI:return new s(p);case e.BYTE:return new i(p)}}r.fromArray=function(M){return M.reduce(function(y,b){return typeof b=="string"?y.push(m(b,null)):b.data&&y.push(m(b.data,b.mode)),y},[])},r.fromString=function(M,y){const b=f(M,a.isKanjiModeEnabled()),C=g(b),S=_(C,y),T=c.find_path(S.map,"start","end"),R=[];for(let v=1;v<T.length-1;v++)R.push(S.table[T[v]].node);return r.fromArray(h(R))},r.rawSplit=function(M){return r.fromArray(f(M,a.isKanjiModeEnabled()))}})(cl)),cl}var dh;function PM(){if(dh)return jc;dh=1;const r=Nr(),e=rf(),t=pM(),n=mM(),i=gM(),s=xM(),o=_M(),a=Dp(),c=bM(),l=MM(),u=SM(),f=Fr(),d=CM();function h(S,T){const R=S.size,v=s.getPositions(T);for(let x=0;x<v.length;x++){const A=v[x][0],L=v[x][1];for(let F=-1;F<=7;F++)if(!(A+F<=-1||R<=A+F))for(let N=-1;N<=7;N++)L+N<=-1||R<=L+N||(F>=0&&F<=6&&(N===0||N===6)||N>=0&&N<=6&&(F===0||F===6)||F>=2&&F<=4&&N>=2&&N<=4?S.set(A+F,L+N,!0,!0):S.set(A+F,L+N,!1,!0))}}function g(S){const T=S.size;for(let R=8;R<T-8;R++){const v=R%2===0;S.set(R,6,v,!0),S.set(6,R,v,!0)}}function _(S,T){const R=i.getPositions(T);for(let v=0;v<R.length;v++){const x=R[v][0],A=R[v][1];for(let L=-2;L<=2;L++)for(let F=-2;F<=2;F++)L===-2||L===2||F===-2||F===2||L===0&&F===0?S.set(x+L,A+F,!0,!0):S.set(x+L,A+F,!1,!0)}}function m(S,T){const R=S.size,v=l.getEncodedBits(T);let x,A,L;for(let F=0;F<18;F++)x=Math.floor(F/3),A=F%3+R-8-3,L=(v>>F&1)===1,S.set(x,A,L,!0),S.set(A,x,L,!0)}function p(S,T,R){const v=S.size,x=u.getEncodedBits(T,R);let A,L;for(A=0;A<15;A++)L=(x>>A&1)===1,A<6?S.set(A,8,L,!0):A<8?S.set(A+1,8,L,!0):S.set(v-15+A,8,L,!0),A<8?S.set(8,v-A-1,L,!0):A<9?S.set(8,15-A-1+1,L,!0):S.set(8,15-A-1,L,!0);S.set(v-8,8,1,!0)}function M(S,T){const R=S.size;let v=-1,x=R-1,A=7,L=0;for(let F=R-1;F>0;F-=2)for(F===6&&F--;;){for(let N=0;N<2;N++)if(!S.isReserved(x,F-N)){let G=!1;L<T.length&&(G=(T[L]>>>A&1)===1),S.set(x,F-N,G),A--,A===-1&&(L++,A=7)}if(x+=v,x<0||R<=x){x-=v,v=-v;break}}}function y(S,T,R){const v=new t;R.forEach(function(N){v.put(N.mode.bit,4),v.put(N.getLength(),f.getCharCountIndicator(N.mode,S)),N.write(v)});const x=r.getSymbolTotalCodewords(S),A=a.getTotalCodewordsCount(S,T),L=(x-A)*8;for(v.getLengthInBits()+4<=L&&v.put(0,4);v.getLengthInBits()%8!==0;)v.putBit(0);const F=(L-v.getLengthInBits())/8;for(let N=0;N<F;N++)v.put(N%2?17:236,8);return b(v,S,T)}function b(S,T,R){const v=r.getSymbolTotalCodewords(T),x=a.getTotalCodewordsCount(T,R),A=v-x,L=a.getBlocksCount(T,R),F=v%L,N=L-F,G=Math.floor(v/L),H=Math.floor(A/L),J=H+1,q=G-H,ee=new c(q);let I=0;const ue=new Array(L),Ie=new Array(L);let He=0;const je=new Uint8Array(S.buffer);for(let Ee=0;Ee<L;Ee++){const Te=Ee<N?H:J;ue[Ee]=je.slice(I,I+Te),Ie[Ee]=ee.encode(ue[Ee]),I+=Te,He=Math.max(He,Te)}const Qe=new Uint8Array(v);let K=0,j,oe;for(j=0;j<He;j++)for(oe=0;oe<L;oe++)j<ue[oe].length&&(Qe[K++]=ue[oe][j]);for(j=0;j<q;j++)for(oe=0;oe<L;oe++)Qe[K++]=Ie[oe][j];return Qe}function C(S,T,R,v){let x;if(Array.isArray(S))x=d.fromArray(S);else if(typeof S=="string"){let G=T;if(!G){const H=d.rawSplit(S);G=l.getBestVersionForData(H,R)}x=d.fromString(S,G||40)}else throw new Error("Invalid data");const A=l.getBestVersionForData(x,R);if(!A)throw new Error("The amount of data is too big to be stored in a QR Code");if(!T)T=A;else if(T<A)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+A+`.
`);const L=y(T,R,x),F=r.getSymbolSize(T),N=new n(F);return h(N,T),g(N),_(N,T),p(N,R,0),T>=7&&m(N,T),M(N,L),isNaN(v)&&(v=o.getBestMask(N,p.bind(null,N,R))),o.applyMask(v,N),p(N,R,v),{modules:N,version:T,errorCorrectionLevel:R,maskPattern:v,segments:x}}return jc.create=function(T,R){if(typeof T>"u"||T==="")throw new Error("No input text");let v=e.M,x,A;return typeof R<"u"&&(v=e.from(R.errorCorrectionLevel,e.M),x=l.from(R.version),A=o.from(R.maskPattern),R.toSJISFunc&&r.setToSJISFunction(R.toSJISFunc)),C(T,x,v,A)},jc}var pl={},ml={},hh;function Fp(){return hh||(hh=1,(function(r){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let n=t.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+t);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(s){return[s,s]}))),n.length===6&&n.push("F","F");const i=parseInt(n.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+n.slice(0,6).join("")}}r.getOptions=function(n){n||(n={}),n.color||(n.color={});const i=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,s=n.width&&n.width>=21?n.width:void 0,o=n.scale||4;return{width:s,scale:s?4:o,margin:i,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},r.getScale=function(n,i){return i.width&&i.width>=n+i.margin*2?i.width/(n+i.margin*2):i.scale},r.getImageWidth=function(n,i){const s=r.getScale(n,i);return Math.floor((n+i.margin*2)*s)},r.qrToImageData=function(n,i,s){const o=i.modules.size,a=i.modules.data,c=r.getScale(o,s),l=Math.floor((o+s.margin*2)*c),u=s.margin*c,f=[s.color.light,s.color.dark];for(let d=0;d<l;d++)for(let h=0;h<l;h++){let g=(d*l+h)*4,_=s.color.light;if(d>=u&&h>=u&&d<l-u&&h<l-u){const m=Math.floor((d-u)/c),p=Math.floor((h-u)/c);_=f[a[m*o+p]?1:0]}n[g++]=_.r,n[g++]=_.g,n[g++]=_.b,n[g]=_.a}}})(ml)),ml}var ph;function LM(){return ph||(ph=1,(function(r){const e=Fp();function t(i,s,o){i.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=o,s.width=o,s.style.height=o+"px",s.style.width=o+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}r.render=function(s,o,a){let c=a,l=o;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),o||(l=n()),c=e.getOptions(c);const u=e.getImageWidth(s.modules.size,c),f=l.getContext("2d"),d=f.createImageData(u,u);return e.qrToImageData(d.data,s,c),t(f,l,u),f.putImageData(d,0,0),l},r.renderToDataURL=function(s,o,a){let c=a;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),c||(c={});const l=r.render(s,o,c),u=c.type||"image/png",f=c.rendererOpts||{};return l.toDataURL(u,f.quality)}})(pl)),pl}var gl={},mh;function IM(){if(mh)return gl;mh=1;const r=Fp();function e(i,s){const o=i.a/255,a=s+'="'+i.hex+'"';return o<1?a+" "+s+'-opacity="'+o.toFixed(2).slice(1)+'"':a}function t(i,s,o){let a=i+s;return typeof o<"u"&&(a+=" "+o),a}function n(i,s,o){let a="",c=0,l=!1,u=0;for(let f=0;f<i.length;f++){const d=Math.floor(f%s),h=Math.floor(f/s);!d&&!l&&(l=!0),i[f]?(u++,f>0&&d>0&&i[f-1]||(a+=l?t("M",d+o,.5+h+o):t("m",c,0),c=0,l=!1),d+1<s&&i[f+1]||(a+=t("h",u),u=0)):c++}return a}return gl.render=function(s,o,a){const c=r.getOptions(o),l=s.modules.size,u=s.modules.data,f=l+c.margin*2,d=c.color.light.a?"<path "+e(c.color.light,"fill")+' d="M0 0h'+f+"v"+f+'H0z"/>':"",h="<path "+e(c.color.dark,"stroke")+' d="'+n(u,l,c.margin)+'"/>',g='viewBox="0 0 '+f+" "+f+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+g+' shape-rendering="crispEdges">'+d+h+`</svg>
`;return typeof a=="function"&&a(null,m),m},gl}var gh;function DM(){if(gh)return is;gh=1;const r=hM(),e=PM(),t=LM(),n=IM();function i(s,o,a,c,l){const u=[].slice.call(arguments,1),f=u.length,d=typeof u[f-1]=="function";if(!d&&!r())throw new Error("Callback required as last argument");if(d){if(f<2)throw new Error("Too few arguments provided");f===2?(l=a,a=o,o=c=void 0):f===3&&(o.getContext&&typeof l>"u"?(l=c,c=void 0):(l=c,c=a,a=o,o=void 0))}else{if(f<1)throw new Error("Too few arguments provided");return f===1?(a=o,o=c=void 0):f===2&&!o.getContext&&(c=a,a=o,o=void 0),new Promise(function(h,g){try{const _=e.create(a,c);h(s(_,o,c))}catch(_){g(_)}})}try{const h=e.create(a,c);l(null,s(h,o,c))}catch(h){l(h)}}return is.create=e.create,is.toCanvas=i.bind(null,t.render),is.toDataURL=i.bind(null,t.renderToDataURL),is.toString=i.bind(null,function(s,o,a){return n.render(s,a)}),is}var UM=DM();const NM=Kp(UM);Ae.registerPlugin(Ke);function FM(r){const e=new Cs,t=new En;r.add(t);const n=`${window.location.origin}/around-digiphy/mobile.html`;NM.toCanvas(document.getElementById("qrcode"),n,function(l){l&&console.error(l)});function i(){e.load("floors/floor-4.glb",l=>{const u=l.scene;u.position.set(0,0,0),u.rotateY(Math.PI),u.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0)}),r.add(u)})}function s(){}i();const o=document.querySelector(".qr-wrapper");function a(){o.classList.remove("visually-hidden"),Ae.fromTo(o,{opacity:0,scale:.8,y:20},{opacity:1,scale:1,y:0,duration:.4,ease:"power2.out"})}function c(){Ae.to(o,{opacity:0,scale:.8,y:20,duration:.3,stagger:.06,ease:"power2.in",onComplete:()=>{o.classList.add("visually-hidden")}})}return{group:t,update:s,showQR:a,hideQR:c}}const Tr=document.querySelector(".qr-wrapper");document.getElementById("qrcode");document.querySelector(".qr-wrapper-close").addEventListener("click",Op);const Ha=document.querySelectorAll(".qr-wrapper div"),Ga=document.querySelector(".qr-wrapper > svg");let hs=!0;function Op(){hs&&(hs=!1,console.log(hs),Ae.timeline().to(Ha,{opacity:0,duration:.2},0).to(Tr,{top:"5rem",left:"3rem",width:"3rem",height:"3rem",padding:"0.2rem",duration:1,ease:"power3.out"},"<80%").to(Tr,{duration:.1,onComplete:()=>{Tr.classList.add("qr-small"),Ha.forEach(e=>{e.classList.add("visually-hidden")}),Ga.classList.remove("visually-hidden")}},"<").to(Ga,{opacity:1,duration:.4,onComplete:()=>{Tr.addEventListener("click",Bp)}}))}function Bp(){if(hs)return;hs=!0,console.log("dassddasndakondasopndaspd"),Tr.classList.remove("qr-small"),console.log(hs),Ae.timeline().to(Ga,{opacity:0,duration:.2,onComplete:()=>{Ga.classList.add("visually-hidden")}},0).to(Tr,{top:"50%",left:"50%",width:"40rem",height:"20rem",color:"black",padding:"2rem",duration:1,ease:"power3.out",onComplete:()=>{Ha.forEach(e=>{e.classList.remove("visually-hidden")})}},"-=0").to(Ha,{opacity:1,duration:.5,onComplete:()=>{Tr.removeEventListener("click",Bp)}})}Ae.registerPlugin(Ke);const xl={"5-0":["One of our clients is a leading automotive design team, and from their designers' point of view, DigiPHY feels like a creative boost to their entire workflow. They explain how refreshing it is to step into a physical buck and instantly switch between different interior concepts, adjust HMI elements, or test ergonomic ideas without waiting for new mock-ups or time-consuming CAD reviews. Everything becomes experiential right away.","For these designers, DigiPHY opens up the space to explore more intuitively. Concepts don't stay theoretical — they become something you can feel, compare, and refine in real time. They describe DigiPHY as a tool that encourages play, speeds up iteration, and allows them to make decisions based on lived experience rather than flat images on a screen. It brings confidence, momentum, and a much more human touch to the design process."],"5-1":["Another of our clients is Renault, a team that tackles design by combining creativity with engineering precision.For their designers, DigiPHY feels like a true accelerator. They relate how, in workshops, they seamlessly switch between interior configurations, move screen locations, or change structural components such as the B - pillar - all the while experiencing seating position and ergonomics as if the car were already built.","For Renault's design team, DigiPHY opens up space to explore more freely. Ideas become immediately tangible, comparisons are instant, and decisions feel grounded in real experience rather than abstract sketches or CAD views.They describe it as a tool that lets them play, validate, and refine their work with a level of confidence and speed tha traditional mock - ups simply can't match."],"5-2":["One of our clients is Mazda, a team that puts a strong focus on creating authentic, human-centered design experiences. From their perspective, DigiPHY feels like a major accelerator in their process. They explain how, during workshops, they could effortlessly switch between different interior and package options while still feeling the physical seating experience and ergonomics as if they were real.","For them, DigiPHY makes it possible to make decisions faster because ideas become instantly tangible — without having to build new mock-ups each time. Mazda describes it as a tool that gives them more freedom to play, compare, and make design decisions based on what they actually experience, not just what they see on a screen."]};function kp(r){const e=new Cs,t=new En;r.add(t);function n(){e.load("floors/floor-5.glb",u=>{const f=u.scene;f.position.set(0,0,0),f.rotateY(Math.PI),f.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0)}),r.add(f)})}n();let i=!1,s;function o(u,f){f!==s&&c(),f!==-1&&(s=f,55<=u&&u<63&&i===!1&&a(),(55>u||u>63&&i===!0)&&c())}function a(){const u=document.querySelector(`#ui-panel-5-${s}`);u&&(u.classList.remove("visually-hidden"),Ae.fromTo(u,{opacity:0,scale:.8,y:20},{opacity:1,scale:1,y:0,duration:.4,stagger:.08,ease:"power2.out"}),i=!0)}function c(){const u=document.querySelector(`#ui-panel-5-${s}`);u&&i&&(Ae.to(u,{opacity:0,scale:.8,y:20,duration:.3,stagger:.06,ease:"power2.in",onComplete:()=>{u.classList.add("visually-hidden")}}),i=!1)}function l(u,f){let d=0;const h=document.querySelector(`#ui-panel-${u}`);if(!h)return;const g=h.querySelector(".ui-swaptext"),_=h.querySelector(".ui-panel-next"),m=h.querySelector(".ui-panel-back"),p=h.querySelectorAll(".ui-panel-progress div");function M(){g.textContent=f[d],p.forEach((y,b)=>{y.classList.toggle("active",b===d)}),m.classList.toggle("ui-footer-button-disabled",d===0),_.classList.toggle("ui-footer-button-disabled",d===f.length-1)}_.addEventListener("click",()=>{d<f.length-1&&(d++,M())}),m.addEventListener("click",()=>{d>0&&(d--,M())}),M()}return l("5-0",xl["5-0"]),l("5-1",xl["5-1"]),l("5-2",xl["5-2"]),{group:t,checkHeight:o}}let Tu=!1;function OM(){const r=document.querySelector(".floor6-ui-container");r.classList.remove("visually-hidden"),Ae.fromTo(r,{opacity:0,scale:.8,y:20},{opacity:1,scale:1,y:0,duration:.4,stagger:.08,ease:"power2.out"}),Tu=!0}function BM(){const r=document.querySelector(".floor6-ui-container");Tu&&(Ae.to(r,{opacity:0,scale:.8,y:20,duration:.3,stagger:.06,ease:"power2.in",onComplete:()=>{r.classList.add("visually-hidden")}}),Tu=!1)}Ae.registerPlugin(Ke);let wu=null;function kM(r){return new Promise(e=>{const t=new Cs,n=new En;r.add(n);let i=[];const s={};let o,a;const c={dashboard:{variants:[],defaultVariantIndex:0},console:{variants:[],defaultVariantIndex:0},frameLeft:{variants:[],defaultVariantIndex:0},frameRight:{variants:[],defaultVariantIndex:0},tablet:{variants:[],defaultVariantIndex:0}},l={"accessory-console-1":{x:-10,y:0,z:0},"accessory-console-2":{x:-10,y:0,z:0},"accessory-dashboard-1":{x:0,y:5,z:0},"accessory-dashboard-2":{x:0,y:5,z:0},"accessory-frameLeft-1":{x:0,y:0,z:-10},"accessory-frameRight-1":{x:0,y:0,z:10},"accessory-tablet-1":{x:0,y:8,z:0},"accessory-tablet-2":{x:0,y:8,z:0}};function u(){t.load("models/accessories-w-t.glb",M=>{o=M.scene,o.position.set(0,2,0),r.add(o),o.traverse(v=>{if(v.name&&v.name.toLowerCase().includes("dashboard"))v.defaultPos=v.position.clone(),v.traverse(x=>{x.isMesh&&(Array.isArray(x.material)?x.material=x.material.map(A=>A.clone()):x.material&&(x.material=x.material.clone()))}),i.push(v);else if(v.name&&v.name.toLowerCase().includes("shadow")){const x=v.material;v.material=new Ni({map:x.map||null,transparent:x.transparent,opacity:x.opacity,alphaMap:x.alphaMap||null,color:x.color})}v.castShadow=!0,v.receiveShadow=!0}),o.traverse(v=>{const x=v.type==="Group"&&v.name.startsWith("accessory-"),A=v.isMesh&&v.name.startsWith("accessory-");if(!x&&!A)return;const L=v.name.match(/^accessory-([a-zA-Z]+)-\d+/);if(!L)return;const F=L[1];c[F]||(c[F]={variants:[],defaultVariantIndex:0});const N=[];if(x)v.traverse(G=>{if(G.isMesh){const H=G.material.clone();H.transparent=!0,H.opacity=0,G.material=H,N.push(H)}});else{const G=v.material.clone();G.transparent=!0,G.opacity=0,v.material=G,N.push(G)}v.materials=N,v.visible=!1,v.defaultPos=v.position.clone(),c[F].variants.push(v)}),e({group:n,update:d,accessoryGroups:c,setAccessoryVariant:p,animateSelected:_}),f();for(let v=1;v<=4;v++){const x=o.getObjectByName(`chair-${v}`);x&&(s[`chair-${v}`]=x,x.defaultPos=x.position.clone(),x.traverse(A=>{A.isMesh&&(Array.isArray(A.material)?A.material=A.material.map(L=>L.clone()):A.material&&(A.material=A.material.clone()))}))}const y=15,b=63,C={first:1,hold:6,last:4.2},T=2+b,R=Ae.timeline({scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",scrub:!0}});R.to(o.position,{y,ease:"linear",duration:C.first}),R.addLabel("phase2Start").to(o.position,{y,duration:C.hold,ease:"none"}).addLabel("phase2End"),R.to(o.position,{y:T,ease:"linear",duration:C.last}),R.add(a,"phase2Start+=2"),a.duration(C.hold*.4),Ae.to(o.rotation,{ease:"linear",y:o.rotation.y+5,scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",scrub:!0}})}),t.load("models/platform.glb",M=>{const y=M.scene;y.rotation.set(0,2.5,0),y.position.set(0,0,0),r.add(y),y.traverse(x=>{x.castShadow=!0,x.receiveShadow=!0});const b=13,C=63,S={first:1,hold:6,last:4.2},R=0+C,v=Ae.timeline({scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",scrub:!0}});v.to(y.position,{y:b,ease:"linear",duration:S.first}),v.to(y.position,{y:b,ease:"none",duration:S.hold}),v.to(y.position,{y:R,ease:"linear",duration:S.last})})}function f(){a&&a.kill(),a=Ae.timeline(),Object.values(c).forEach(M=>{M.variants.forEach((y,b)=>{const C=l[y.name]||{x:0,y:0,z:0};y.visible=!1,y.materials&&y.materials.forEach(S=>S.opacity=0),a.set(y,{visible:!1}),a.fromTo(y.position,{x:y.position.x+C.x,y:y.position.y+C.y,z:y.position.z+C.z},{x:y.position.x,y:y.position.y,z:y.position.z,duration:1,ease:"power3.out",onStart:()=>{b===M.defaultVariantIndex&&(y.visible=!0)}},"<"),b===M.defaultVariantIndex&&y.materials&&y.materials.forEach((S,T)=>{a.fromTo(S,{opacity:0},{opacity:1,duration:1,ease:"power2.out"},"<")})})})}function d(){}let h=null;function g(M,y,b){(Array.isArray(M)?M:[M]).forEach(S=>{Ae.to(S.position,{[y]:S.defaultPos[y]+b*1,duration:.3,ease:"power2.out"}),S!==h&&_(M)})}function _(M){if(h&&(Array.isArray(h)?h:[h]).forEach(C=>{C.traverse(S=>{if(!S.isMesh)return;(Array.isArray(S.material)?S.material:[S.material]).forEach(R=>{const v=R.userData.originalColor;v&&(Ae.killTweensOf(R.color),Ae.to(R.color,{r:v.r,g:v.g,b:v.b,duration:.3,ease:"power2.out"}))})})}),!M){h=null;return}(Array.isArray(M)?M:[M]).forEach(b=>{b.traverse(C=>{if(!C.isMesh)return;(Array.isArray(C.material)?C.material:[C.material]).forEach(T=>{if(!T)return;T.userData.originalColor||(T.userData.originalColor=T.color.clone());const R=T.userData.originalColor;Ae.killTweensOf(T.color),Ae.timeline({repeat:-1}).to(T.color,{r:1,g:1,b:1,duration:1}).to(T.color,{r:R.r,g:R.g,b:R.b,duration:1,ease:"power2.out"})})})}),h=M}const m=jp.channel("room1",{config:{broadcast:{self:!0,ack:!0}}});m.on("broadcast",{event:"command"},({payload:M})=>{switch(console.log("Received command:",M),M.object){case"dashboard":g(i,M.direction,M.amount);break;case"chair-1":g(s[M.object],M.direction,M.amount);break;case"chair-2":g(s[M.object],M.direction,M.amount);break;case"chair-3":g(s[M.object],M.direction,M.amount);break;case"chair-4":g(s[M.object],M.direction,M.amount);break;case"connected":Op();break;default:console.warn("Unknown command type:",M.type)}}),m.subscribe(M=>{console.log("channel status:",M)}),u();function p(M,y){const b=c[M];if(!b)return;const C=b.variants[y],S=b.variants[b.defaultVariantIndex];S!==C&&(S&&Ae.to(S.scale,{x:.5,y:.5,z:.5,duration:.25,ease:"power2.in",onComplete:()=>{S.visible=!1,S.materials.forEach(T=>T.opacity=0)}}),C&&Ae.fromTo(C.scale,{x:.5,y:.5,z:.5},{x:1,y:1,z:1,duration:.35,ease:"power2.out",onStart:()=>{C.visible=!0,C.materials.forEach(T=>T.opacity=1)}}),b.defaultVariantIndex=y)}return wu=_,{group:n,update:d,animateSelected:_}})}function xh(){wu&&wu(null)}const _h={floor1:6,floor2:15,floor3:52.5,floor4:59,floor5:65,floor6:71};function zM(r){const t=document.querySelector(".three-section").offsetHeight,n=window.innerHeight,i=t-n,s=6,o=71;console.log("Floor navigation initialized:",{floors:Object.keys(_h).length,scrollRange:`0 - ${i}px`,cameraRange:`${s} - ${o}`});function a(c){const l=_h[c];if(l===void 0){console.error(`Floor ${c} not found`);return}const u=(l-s)/(o-s),f=i*u;console.log(`Navigating to ${c}:`,{targetCameraY:l,targetScroll:Math.round(f),currentCameraY:r.position.y.toFixed(1)});const d=document.body.scrollTop,h=f-d;Ae.to({val:0},{val:1,duration:1.5,ease:"power2.inOut",onUpdate:function(){const g=this.targets()[0].val;document.body.scrollTop=d+h*g,Ke.update()},onComplete:()=>{Ke.update(),console.log(`Arrived at ${c} - Camera Y: ${r.position.y.toFixed(1)}`)}})}document.querySelectorAll(".nav-button").forEach(c=>{c.addEventListener("click",()=>{const l=c.dataset.floor;a(l)})}),console.log("Navigation buttons ready")}class VM extends ig{constructor(e){super(e),this.type=pi}parse(e){const o=function(R,v){switch(R){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(v||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(v||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(v||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(v||""))}},f=function(R,v,x){v=v||1024;let L=R.pos,F=-1,N=0,G="",H=String.fromCharCode.apply(null,new Uint16Array(R.subarray(L,L+128)));for(;0>(F=H.indexOf(`
`))&&N<v&&L<R.byteLength;)G+=H,N+=H.length,L+=128,H+=String.fromCharCode.apply(null,new Uint16Array(R.subarray(L,L+128)));return-1<F?(R.pos+=N+F+1,G+H.slice(0,F)):!1},d=function(R){const v=/^#\?(\S+)/,x=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*FORMAT=(\S+)\s*$/,F=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,N={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let G,H;for((R.pos>=R.byteLength||!(G=f(R)))&&o(1,"no header found"),(H=G.match(v))||o(3,"bad initial token"),N.valid|=1,N.programtype=H[1],N.string+=G+`
`;G=f(R),G!==!1;){if(N.string+=G+`
`,G.charAt(0)==="#"){N.comments+=G+`
`;continue}if((H=G.match(x))&&(N.gamma=parseFloat(H[1])),(H=G.match(A))&&(N.exposure=parseFloat(H[1])),(H=G.match(L))&&(N.valid|=2,N.format=H[1]),(H=G.match(F))&&(N.valid|=4,N.height=parseInt(H[1],10),N.width=parseInt(H[2],10)),N.valid&2&&N.valid&4)break}return N.valid&2||o(3,"missing format specifier"),N.valid&4||o(3,"missing image size specifier"),N},h=function(R,v,x){const A=v;if(A<8||A>32767||R[0]!==2||R[1]!==2||R[2]&128)return new Uint8Array(R);A!==(R[2]<<8|R[3])&&o(3,"wrong scanline width");const L=new Uint8Array(4*v*x);L.length||o(4,"unable to allocate buffer space");let F=0,N=0;const G=4*A,H=new Uint8Array(4),J=new Uint8Array(G);let q=x;for(;q>0&&N<R.byteLength;){N+4>R.byteLength&&o(1),H[0]=R[N++],H[1]=R[N++],H[2]=R[N++],H[3]=R[N++],(H[0]!=2||H[1]!=2||(H[2]<<8|H[3])!=A)&&o(3,"bad rgbe scanline format");let ee=0,I;for(;ee<G&&N<R.byteLength;){I=R[N++];const Ie=I>128;if(Ie&&(I-=128),(I===0||ee+I>G)&&o(3,"bad scanline data"),Ie){const He=R[N++];for(let je=0;je<I;je++)J[ee++]=He}else J.set(R.subarray(N,N+I),ee),ee+=I,N+=I}const ue=A;for(let Ie=0;Ie<ue;Ie++){let He=0;L[F]=J[Ie+He],He+=A,L[F+1]=J[Ie+He],He+=A,L[F+2]=J[Ie+He],He+=A,L[F+3]=J[Ie+He],F+=4}q--}return L},g=function(R,v,x,A){const L=R[v+3],F=Math.pow(2,L-128)/255;x[A+0]=R[v+0]*F,x[A+1]=R[v+1]*F,x[A+2]=R[v+2]*F,x[A+3]=1},_=function(R,v,x,A){const L=R[v+3],F=Math.pow(2,L-128)/255;x[A+0]=No.toHalfFloat(Math.min(R[v+0]*F,65504)),x[A+1]=No.toHalfFloat(Math.min(R[v+1]*F,65504)),x[A+2]=No.toHalfFloat(Math.min(R[v+2]*F,65504)),x[A+3]=No.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=d(m),M=p.width,y=p.height,b=h(m.subarray(m.pos),M,y);let C,S,T;switch(this.type){case Ln:T=b.length/4;const R=new Float32Array(T*4);for(let x=0;x<T;x++)g(b,x*4,R,x*4);C=R,S=Ln;break;case pi:T=b.length/4;const v=new Uint16Array(T*4);for(let x=0;x<T;x++)_(b,x*4,v,x*4);C=v,S=pi;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:M,height:y,data:C,header:p.string,gamma:p.gamma,exposure:p.exposure,type:S}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){switch(o.type){case Ln:case pi:o.colorSpace=fn,o.minFilter=Gt,o.magFilter=Gt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,i)}}var un,zp,Gi,xi,ar,Vp,ps,ma,Hp=function(){return typeof window<"u"},Gp=function(){return un||Hp()&&(un=window.gsap)&&un.registerPlugin&&un},Wp=function(e){return typeof e=="string"},vh=function(e){return typeof e=="function"},So=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,s="client"+n;return e===Gi||e===xi||e===ar?Math.max(xi[i],ar[i])-(Gi["inner"+n]||xi[s]||ar[s]):e[i]-e["offset"+n]},Eo=function(e,t){var n="scroll"+(t==="x"?"Left":"Top");return e===Gi&&(e.pageXOffset!=null?n="page"+t.toUpperCase()+"Offset":e=xi[n]!=null?xi:ar),function(){return e[n]}},HM=function(e,t,n,i){if(vh(e)&&(e=e(t,n,i)),typeof e!="object")return Wp(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&vh(e[o])?e[o](t,n,i):e[o];return s},Xp=function(e,t){if(e=Vp(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),i=!t||t===Gi||t===ar,s=i?{top:xi.clientTop-(Gi.pageYOffset||xi.scrollTop||ar.scrollTop||0),left:xi.clientLeft-(Gi.pageXOffset||xi.scrollLeft||ar.scrollLeft||0)}:t.getBoundingClientRect(),o={x:n.left-s.left,y:n.top-s.top};return!i&&t&&(o.x+=Eo(t,"x")(),o.y+=Eo(t,"y")()),o},yh=function(e,t,n,i,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:Wp(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+i-s:e==="max"?So(t,n)-s:Math.min(So(t,n),Xp(e,t)[n]-s)},Au=function(){un=Gp(),Hp()&&un&&typeof document<"u"&&document.body&&(Gi=window,ar=document.body,xi=document.documentElement,Vp=un.utils.toArray,un.config({autoKillThreshold:7}),ps=un.config(),zp=1)},Ps={version:"3.13.0",name:"scrollTo",rawVars:1,register:function(e){un=e,Au()},init:function(e,t,n,i,s){zp||Au();var o=this,a=un.getProperty(e,"scrollSnapType");o.isWin=e===Gi,o.target=e,o.tween=n,t=HM(t,i,e,s),o.vars=t,o.autoKill=!!("autoKill"in t?t:ps).autoKill,o.getX=Eo(e,"x"),o.getY=Eo(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),ma||(ma=un.core.globals().ScrollTrigger),un.getProperty(e,"scrollBehavior")==="smooth"&&un.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,yh(t.x,e,"x",o.x,t.offsetX||0),i,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,yh(t.y,e,"y",o.y,t.offsetY||0),i,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var n=t._pt,i=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,c=t.yPrev,l=t.isWin,u=t.snap,f=t.snapInline,d,h,g,_,m;n;)n.r(e,n.d),n=n._next;d=l||!t.skipX?t.getX():a,h=l||!t.skipY?t.getY():c,g=h-c,_=d-a,m=ps.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(_>m||_<-m)&&d<So(i,"x")&&(t.skipX=1),!t.skipY&&(g>m||g<-m)&&h<So(i,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),l?Gi.scrollTo(t.skipX?d:t.x,t.skipY?h:t.y):(t.skipY||(i.scrollTop=t.y),t.skipX||(i.scrollLeft=t.x)),u&&(e===1||e===0)&&(h=i.scrollTop,d=i.scrollLeft,f?i.style.scrollSnapType=f:i.style.removeProperty("scroll-snap-type"),i.scrollTop=h+1,i.scrollLeft=d+1,i.scrollTop=h,i.scrollLeft=d),t.xPrev=t.x,t.yPrev=t.y,ma&&ma.update()},kill:function(e){var t=e==="scrollTo",n=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),n>-1&&this._props.splice(n,1),!this._props.length}};Ps.max=So;Ps.getOffset=Xp;Ps.buildGetter=Eo;Ps.config=function(r){ps||Au()||(ps=un.config());for(var e in r)ps[e]=r[e]};Gp()&&un.registerPlugin(Ps);Ae.registerPlugin(Ke,Ps);let tn,gt,ni;const qs=document.querySelector(".three-canvas");let Ct=6,ga=1,vn={value:4};GM();Yp();async function GM(){tn=new C0,tn.background=null,gt=new Mn(65,qs.clientWidth/qs.clientHeight,.1,100),gt.position.set(17,Ct,-8),gt.lookAt(0,Ct-4,0),ni=new ab({canvas:qs,antialias:!0,alpha:!0}),ni.setSize(qs.clientWidth,qs.clientHeight),ni.setPixelRatio(window.devicePixelRatio),tn.add(new lg(16777215,.5));const r=new lu(16777215,1);r.position.set(15,7,17.5),r.castShadow=!0,r.shadow.mapSize.set(2048,2048);const e=new lu(16777215,.5);e.position.set(25,7,27.5),e.castShadow=!0,e.shadow.mapSize.set(4096,4096);const t=e.shadow.camera;t.near=.5,t.far=200,t.left=-30,t.right=30,t.top=30,t.bottom=-30,t.updateProjectionMatrix();const n=new uu(ni);new VM().load("hdri/studio.hdr",f=>{const d=n.fromEquirectangular(f).texture;tn.environment=d,f.dispose(),n.dispose(),tn.backgroundBlurriness=.05,tn.backgroundIntensity=.2,tn.environmentIntensity=.5});const i=Pp(tn),s=kp(tn);tn.add(i.group),tn.add(s.group);const{accessoryGroups:o,setAccessoryVariant:a,animateSelected:c}=await kM(tn),l={value:12565940,roughness:.1,metalness:.1},u={value:12565940,roughness:.1,metalness:.1};QM(gt),lM("#accessory-menu",o,a,l,u)}function WM(){ni.outputColorSpace=Kt,ni.toneMapping=ki,ni.toneMappingExposure=1,ni.shadowMap.enabled=!0,ni.shadowMap.type=Sh,ni.render(tn,gt)}function XM(){const r=window.innerWidth,e=window.innerHeight;gt.aspect=r/e,gt.updateProjectionMatrix(),ni.setSize(r,e)}Ae.to(".canvas-wrapper",{ease:"linear",scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",pin:".canvas-wrapper"}});const qp=19,qM=63,Or={first:1,hold:6,last:4.2},YM=gt.position.y,KM=YM+qM,ur=Ae.timeline({scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",scrub:!0,onUpdate:()=>{Ct=gt.position.y,gt.lookAt(0,Ct-vn.value,0),$M(),Ca.checkHeight(Ct,Rt),Pa.checkHeight(Ct,Rt),console.log(Ct)}}});ur.to(gt.position,{y:qp,ease:"linear",duration:Or.first});ur.call(()=>{console.log("ENTERED HOLD"),Ip()});ur.to(gt.position,{y:qp,ease:"none",duration:Or.hold},"holdStart");ur.call(()=>{Ip(),Ae.to(gt,{fov:20,duration:1,ease:"power3.inOut",onUpdate(){gt.updateProjectionMatrix()}}),Ae.to(vn,{value:2,duration:1,ease:"power3.inOut",onUpdate(){gt.lookAt(0,Ct-vn.value,0)}}),uM()},null,"holdStart+="+Or.hold*.2);ur.call(()=>{Lp()},null,"holdStart+="+Or.hold*.75);ur.call(()=>{Lp()},null,"holdStart+="+Or.hold*.95);ur.to(gt.position,{y:KM,ease:"linear",duration:Or.last});ur.call(()=>{},null,"holdStart+="+Or.hold);const jM=document.querySelector(".qr-wrapper"),bh=document.querySelector(".overlay-button-container"),Ca=Pp(tn),_l=cM(tn),ti=dM(tn),vl=FM(tn),Pa=kp(tn);document.querySelector(".overlay-button").addEventListener("click",ti.toggleOverlayOpacity);function $M(){const r=Math.floor(Ct/13.3)+1;r!==ga&&(console.log("new floor: ",r),r===1&&(Ae.to(gt,{fov:65,duration:1,ease:"power3.inOut",onUpdate(){gt.updateProjectionMatrix()}}),Ae.to(vn,{value:4,duration:1,ease:"power3.inOut",onUpdate(){gt.lookAt(0,Ct-vn.value,0)}})),r===2&&(Rt===0&&_l.rotateFloor(0),Rt===1&&_l.rotateFloor(120),Rt===2&&_l.rotateFloor(-120),ti.hideUI("#ui-panel-3-1"),ti.hideUI(".floor3-ui-container .ui-tip")),r===3&&(Rt===0&&ti.rotateFloor(0),Rt===1&&ti.rotateFloor(120),Rt===2&&ti.rotateFloor(-120),bh.classList.remove("visually-hidden"),ti.showUI("#ui-panel-3-1"),ti.showUI(".floor3-ui-container .ui-tip"),vl.hideQR(),xh(),Ae.to(gt,{fov:30,duration:1,ease:"power3.inOut",onUpdate(){gt.updateProjectionMatrix()}}),Ae.to(vn,{value:2,duration:1,ease:"power3.inOut",onUpdate(){gt.lookAt(0,Ct-vn.value,0)}})),r===4&&(jM.classList.remove("visually-hidden"),ti.hideUI("#ui-panel-3-1"),ti.hideUI(".floor3-ui-container .ui-tip"),vl.showQR(),Ae.to(gt,{fov:30,duration:1,ease:"power3.inOut",onUpdate(){gt.updateProjectionMatrix()}}),Ae.to(vn,{value:2,duration:1,ease:"power3.inOut",onUpdate(){gt.lookAt(0,Ct-vn.value,0)}})),r===5&&(xh(),vl.hideQR(),Ae.to(gt,{fov:65,duration:1,ease:"power3.inOut",onUpdate(){gt.updateProjectionMatrix()}}),Ae.to(vn,{value:4,duration:1,ease:"power3.inOut",onUpdate(){gt.lookAt(0,Ct-vn.value,0)}}),BM()),r===6&&OM(),(r===2||r===4)&&(bh.classList.add("visually-hidden"),ti.overlayOff()),r===2&&ga===3&&(Ae.to(gt,{fov:20,duration:1,ease:"power3.inOut",onUpdate(){gt.updateProjectionMatrix()}}),Ae.to(vn,{value:2,duration:1,ease:"power3.inOut",onUpdate(){gt.lookAt(0,Ct-vn.value,0)}})),ga=r,JM(ga))}const ZM=document.querySelectorAll(".nav-button");function JM(r){ZM.forEach(t=>t.classList.remove("nav-active"));const e=document.querySelector(`.nav-button[data-floor="floor${r}"]`);e&&e.classList.add("nav-active")}let Rt;function QM(r,e){const t=[new V(0,Ct,23),new V(20,Ct,-10),new V(-20,Ct,-10)];Rt=0;let n=!1;function i(s){n=!0,Ae.to(r.position,{x:s.x,y:Ct,z:s.z,duration:1.5,ease:"power2.inOut",onStart:()=>{Ca.checkHeight(Ct,-1),Pa.checkHeight(Ct,-1)},onUpdate:()=>{r.lookAt(0,Ct-vn.value,0)},onComplete:()=>{Ca.checkHeight(Ct,Rt),Pa.checkHeight(Ct,Rt),n=!1}})}Ca.checkHeight(Ct,Rt),Pa.checkHeight(Ct,Rt),r.position.copy(t[Rt]),r.lookAt(0,Ct-vn.value,0),window.addEventListener("keydown",s=>{n||(s.key==="ArrowRight"?(Rt=(Rt+1)%t.length,i(t[Rt])):s.key==="ArrowLeft"&&(Rt=(Rt-1+t.length)%t.length,i(t[Rt])))}),document.querySelector(".horizontal-controls-right").addEventListener("click",()=>{Rt=(Rt+1)%t.length,i(t[Rt])}),document.querySelector(".horizontal-controls-left").addEventListener("click",()=>{Rt=(Rt-1+t.length)%t.length,i(t[Rt])})}window.addEventListener("resize",XM);function Yp(){requestAnimationFrame(Yp),WM()}window.addEventListener("load",()=>{Ke.refresh(),zM(gt)});
