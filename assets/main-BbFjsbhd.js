import{g as m_,s as g_}from"./supabase-CH1TS-QW.js";const xh="181",__=0,pd=1,x_=2,Ym=1,Km=2,lr=3,br=0,Wn=1,Vi=2,gr=0,aa=1,md=2,gd=3,_d=4,v_=5,hs=100,y_=101,b_=102,M_=103,S_=104,T_=200,E_=201,w_=202,A_=203,Zu=204,Ju=205,R_=206,C_=207,P_=208,L_=209,D_=210,I_=211,N_=212,U_=213,F_=214,Qu=0,ef=1,tf=2,_a=3,nf=4,rf=5,sf=6,af=7,jm=0,O_=1,B_=2,Hr=0,k_=1,z_=2,V_=3,$m=4,H_=5,G_=6,W_=7,xd="attached",X_="detached",Zm=300,xa=301,va=302,of=303,cf=304,gl=306,ya=1e3,xi=1001,Jc=1002,On=1003,Jm=1004,to=1005,Jt=1006,Oc=1007,Gi=1008,Zi=1009,Qm=1010,e0=1011,wo=1012,vh=1013,Ts=1014,Gn=1015,Wi=1016,yh=1017,bh=1018,Ao=1020,t0=35902,n0=35899,i0=1021,r0=1022,vi=1023,Ro=1026,Co=1027,Mh=1028,Sh=1029,Th=1030,Eh=1031,wh=1033,Bc=33776,kc=33777,zc=33778,Vc=33779,lf=35840,uf=35841,ff=35842,hf=35843,df=36196,pf=37492,mf=37496,gf=37808,_f=37809,xf=37810,vf=37811,yf=37812,bf=37813,Mf=37814,Sf=37815,Tf=37816,Ef=37817,wf=37818,Af=37819,Rf=37820,Cf=37821,Pf=36492,Lf=36494,Df=36495,If=36283,Nf=36284,Uf=36285,Ff=36286,Po=2300,Lo=2301,Cl=2302,vd=2400,yd=2401,bd=2402,q_=2500,Y_=0,s0=1,Of=2,K_=3200,j_=3201,a0=0,$_=1,Ur="",un="srgb",Sn="srgb-linear",Qc="linear",Et="srgb",Us=7680,Md=519,Z_=512,J_=513,Q_=514,o0=515,ex=516,tx=517,nx=518,ix=519,Bf=35044,Sd="300 es",Xi=2e3,el=2001;function c0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Do(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function rx(){const s=Do("canvas");return s.style.display="block",s}const Td={};function tl(...s){const e="THREE."+s.shift();console.log(e,...s)}function Ue(...s){const e="THREE."+s.shift();console.warn(e,...s)}function ot(...s){const e="THREE."+s.shift();console.error(e,...s)}function Io(...s){const e=s.join(" ");e in Td||(Td[e]=!0,Ue(...s))}function sx(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class Ia{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ed=1234567;const uo=Math.PI/180,ba=180/Math.PI;function Ii(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function at(s,e,t){return Math.max(e,Math.min(t,s))}function Ah(s,e){return(s%e+e)%e}function ax(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ox(s,e,t){return s!==e?(t-s)/(e-s):0}function fo(s,e,t){return(1-t)*s+t*e}function cx(s,e,t,n){return fo(s,e,1-Math.exp(-t*n))}function lx(s,e=1){return e-Math.abs(Ah(s,e*2)-e)}function ux(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function fx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function hx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function dx(s,e){return s+Math.random()*(e-s)}function px(s){return s*(.5-Math.random())}function mx(s){s!==void 0&&(Ed=s);let e=Ed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gx(s){return s*uo}function _x(s){return s*ba}function xx(s){return(s&s-1)===0&&s!==0}function vx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function yx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function bx(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),d=r((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*f,c*h,o*l);break;case"YZY":s.set(c*h,o*u,c*f,o*l);break;case"ZXZ":s.set(c*f,c*h,o*u,o*l);break;case"XZX":s.set(o*u,c*_,c*d,o*l);break;case"YXY":s.set(c*d,o*u,c*_,o*l);break;case"ZYZ":s.set(c*_,c*d,o*u,o*l);break;default:Ue("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Li(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Mx={DEG2RAD:uo,RAD2DEG:ba,generateUUID:Ii,clamp:at,euclideanModulo:Ah,mapLinear:ax,inverseLerp:ox,lerp:fo,damp:cx,pingpong:lx,smoothstep:ux,smootherstep:fx,randInt:hx,randFloat:dx,randFloatSpread:px,seededRandom:mx,degToRad:gx,radToDeg:_x,isPowerOfTwo:xx,ceilPowerOfTwo:vx,floorPowerOfTwo:yx,setQuaternionFromProperEuler:bx,normalize:Mt,denormalize:Li};class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $r{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3],h=r[a+0],d=r[a+1],_=r[a+2],g=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(f!==g||c!==h||l!==d||u!==_){let m=c*h+l*d+u*_+f*g;m<0&&(h=-h,d=-d,_=-_,g=-g,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),y=Math.sin(M);p=Math.sin(p*M)/y,o=Math.sin(o*M)/y,c=c*p+h*o,l=l*p+d*o,u=u*p+_*o,f=f*p+g*o}else{c=c*p+h*o,l=l*p+d*o,u=u*p+_*o,f=f*p+g*o;const M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=r[a],h=r[a+1],d=r[a+2],_=r[a+3];return e[t]=o*_+u*f+c*d-l*h,e[t+1]=c*_+u*h+l*f-o*d,e[t+2]=l*_+u*d+o*h-c*f,e[t+3]=u*_-o*f-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),f=o(r/2),h=c(n/2),d=c(i/2),_=c(r/2);switch(a){case"XYZ":this._x=h*u*f+l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f+h*d*_;break;case"YZX":this._x=h*u*f+l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f-h*d*_;break;case"XZY":this._x=h*u*f-l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f+h*d*_;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-r*i),f=2*(r*n-a*t);return this.x=t+c*l+a*f-o*u,this.y=n+c*u+o*l-r*f,this.z=i+c*f+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pl.copy(this).projectOnVector(e),this.sub(Pl)}reflect(e){return this.sub(Pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pl=new G,wd=new $r;class Je{constructor(e,t,n,i,r,a,o,c,l){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],M=i[1],y=i[4],b=i[7],w=i[2],S=i[5],T=i[8];return r[0]=a*g+o*M+c*w,r[3]=a*m+o*y+c*S,r[6]=a*p+o*b+c*T,r[1]=l*g+u*M+f*w,r[4]=l*m+u*y+f*S,r[7]=l*p+u*b+f*T,r[2]=h*g+d*M+_*w,r[5]=h*m+d*y+_*S,r[8]=h*p+d*b+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,h=o*c-u*r,d=l*r-a*c,_=t*f+n*h+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(i*l-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=h*g,e[4]=(u*t-i*c)*g,e[5]=(i*r-o*t)*g,e[6]=d*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ll.makeScale(e,t)),this}rotate(e){return this.premultiply(Ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ll=new Je,Ad=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rd=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sx(){const s={enabled:!0,workingColorSpace:Sn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Et&&(i.r=_r(i.r),i.g=_r(i.g),i.b=_r(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Et&&(i.r=oa(i.r),i.g=oa(i.g),i.b=oa(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ur?Qc:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Sn]:{primaries:e,whitePoint:n,transfer:Qc,toXYZ:Ad,fromXYZ:Rd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:Ad,fromXYZ:Rd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),s}const ht=Sx();function _r(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function oa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Fs;class Tx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fs===void 0&&(Fs=Do("canvas")),Fs.width=e.width,Fs.height=e.height;const i=Fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Do("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=_r(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_r(t[n]/255)*255):t[n]=_r(t[n]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ex=0;class Rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Dl(i[a].image)):r.push(Dl(i[a]))}else r=Dl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Dl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Tx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let wx=0;const Il=new G;class fn extends Ia{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,n=xi,i=xi,r=Jt,a=Gi,o=vi,c=Zi,l=fn.DEFAULT_ANISOTROPY,u=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Ii(),this.name="",this.source=new Rh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Il).x}get height(){return this.source.getSize(Il).y}get depth(){return this.source.getSize(Il).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ue(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ya:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case Jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ya:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case Jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Zm;fn.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,i=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,b=(d+1)/2,w=(p+1)/2,S=(u+h)/4,T=(f+g)/4,R=(_+m)/4;return y>b&&y>w?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=S/n,r=T/n):b>w?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=S/i,r=R/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=T/r,i=R/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(f-g)/M,this.z=(h-u)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ax extends Ia{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new fn(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Rh(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends Ax{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class l0 extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=On,this.minFilter=On,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rx extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=On,this.minFilter=On,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ei):Ei.fromBufferAttribute(r,a),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ko.copy(n.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(za),jo.subVectors(this.max,za),Os.subVectors(e.a,za),Bs.subVectors(e.b,za),ks.subVectors(e.c,za),wr.subVectors(Bs,Os),Ar.subVectors(ks,Bs),Qr.subVectors(Os,ks);let t=[0,-wr.z,wr.y,0,-Ar.z,Ar.y,0,-Qr.z,Qr.y,wr.z,0,-wr.x,Ar.z,0,-Ar.x,Qr.z,0,-Qr.x,-wr.y,wr.x,0,-Ar.y,Ar.x,0,-Qr.y,Qr.x,0];return!Nl(t,Os,Bs,ks,jo)||(t=[1,0,0,0,1,0,0,0,1],!Nl(t,Os,Bs,ks,jo))?!1:($o.crossVectors(wr,Ar),t=[$o.x,$o.y,$o.z],Nl(t,Os,Bs,ks,jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const nr=[new G,new G,new G,new G,new G,new G,new G,new G],Ei=new G,Ko=new Er,Os=new G,Bs=new G,ks=new G,wr=new G,Ar=new G,Qr=new G,za=new G,jo=new G,$o=new G,es=new G;function Nl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){es.fromArray(s,r);const o=i.x*Math.abs(es.x)+i.y*Math.abs(es.y)+i.z*Math.abs(es.z),c=e.dot(es),l=t.dot(es),u=n.dot(es);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Cx=new Er,Va=new G,Ul=new G;class er{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Cx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);const t=Va.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Va,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Va.copy(e.center).add(Ul)),this.expandByPoint(Va.copy(e.center).sub(Ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ir=new G,Fl=new G,Zo=new G,Rr=new G,Ol=new G,Jo=new G,Bl=new G;class _l{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fl.copy(e).add(t).multiplyScalar(.5),Zo.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(Fl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Zo),o=Rr.dot(this.direction),c=-Rr.dot(Zo),l=Rr.lengthSq(),u=Math.abs(1-a*a);let f,h,d,_;if(u>0)if(f=a*c-o,h=a*o-c,_=r*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=_?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Fl).addScaledVector(Zo,h),d}intersectSphere(e,t){ir.subVectors(e.center,this.origin);const n=ir.dot(this.direction),i=ir.dot(ir)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,n,i,r){Ol.subVectors(t,e),Jo.subVectors(n,e),Bl.crossVectors(Ol,Jo);let a=this.direction.dot(Bl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rr.subVectors(this.origin,e);const c=o*this.direction.dot(Jo.crossVectors(Rr,Jo));if(c<0)return null;const l=o*this.direction.dot(Ol.cross(Rr));if(l<0||c+l>a)return null;const u=-o*Rr.dot(Bl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,i,r,a,o,c,l,u,f,h,d,_,g,m){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,f,h,d,_,g,m)}set(e,t,n,i,r,a,o,c,l,u,f,h,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/zs.setFromMatrixColumn(e,0).length(),r=1/zs.setFromMatrixColumn(e,1).length(),a=1/zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,d=a*f,_=o*u,g=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=d+_*l,t[5]=h-g*l,t[9]=-o*c,t[2]=g-h*l,t[6]=_+d*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,d=c*f,_=l*u,g=l*f;t[0]=h+g*o,t[4]=_*o-d,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=g+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,d=c*f,_=l*u,g=l*f;t[0]=h-g*o,t[4]=-a*f,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=g-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,d=a*f,_=o*u,g=o*f;t[0]=c*u,t[4]=_*l-d,t[8]=h*l+g,t[1]=c*f,t[5]=g*l+h,t[9]=d*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,d=a*l,_=o*c,g=o*l;t[0]=c*u,t[4]=g-h*f,t[8]=_*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*f+_,t[10]=h-g*f}else if(e.order==="XZY"){const h=a*c,d=a*l,_=o*c,g=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+g,t[5]=a*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=o*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Px,e,Lx)}lookAt(e,t,n){const i=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Cr.crossVectors(n,Jn),Cr.lengthSq()===0&&(Math.abs(n.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Cr.crossVectors(n,Jn)),Cr.normalize(),Qo.crossVectors(Jn,Cr),i[0]=Cr.x,i[4]=Qo.x,i[8]=Jn.x,i[1]=Cr.y,i[5]=Qo.y,i[9]=Jn.y,i[2]=Cr.z,i[6]=Qo.z,i[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],y=n[7],b=n[11],w=n[15],S=i[0],T=i[4],R=i[8],x=i[12],v=i[1],C=i[5],P=i[9],N=i[13],U=i[2],V=i[6],B=i[10],K=i[14],W=i[3],ee=i[7],D=i[11],ce=i[15];return r[0]=a*S+o*v+c*U+l*W,r[4]=a*T+o*C+c*V+l*ee,r[8]=a*R+o*P+c*B+l*D,r[12]=a*x+o*N+c*K+l*ce,r[1]=u*S+f*v+h*U+d*W,r[5]=u*T+f*C+h*V+d*ee,r[9]=u*R+f*P+h*B+d*D,r[13]=u*x+f*N+h*K+d*ce,r[2]=_*S+g*v+m*U+p*W,r[6]=_*T+g*C+m*V+p*ee,r[10]=_*R+g*P+m*B+p*D,r[14]=_*x+g*N+m*K+p*ce,r[3]=M*S+y*v+b*U+w*W,r[7]=M*T+y*C+b*V+w*ee,r[11]=M*R+y*P+b*B+w*D,r[15]=M*x+y*N+b*K+w*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*c*f-i*l*f-r*o*h+n*l*h+i*o*d-n*c*d)+g*(+t*c*d-t*l*h+r*a*h-i*a*d+i*l*u-r*c*u)+m*(+t*l*f-t*o*d-r*a*f+n*a*d+r*o*u-n*l*u)+p*(-i*o*u-t*c*f+t*o*h+i*a*f-n*a*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],M=f*m*l-g*h*l+g*c*d-o*m*d-f*c*p+o*h*p,y=_*h*l-u*m*l-_*c*d+a*m*d+u*c*p-a*h*p,b=u*g*l-_*f*l+_*o*d-a*g*d-u*o*p+a*f*p,w=_*f*c-u*g*c-_*o*h+a*g*h+u*o*m-a*f*m,S=t*M+n*y+i*b+r*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=M*T,e[1]=(g*h*r-f*m*r-g*i*d+n*m*d+f*i*p-n*h*p)*T,e[2]=(o*m*r-g*c*r+g*i*l-n*m*l-o*i*p+n*c*p)*T,e[3]=(f*c*r-o*h*r-f*i*l+n*h*l+o*i*d-n*c*d)*T,e[4]=y*T,e[5]=(u*m*r-_*h*r+_*i*d-t*m*d-u*i*p+t*h*p)*T,e[6]=(_*c*r-a*m*r-_*i*l+t*m*l+a*i*p-t*c*p)*T,e[7]=(a*h*r-u*c*r+u*i*l-t*h*l-a*i*d+t*c*d)*T,e[8]=b*T,e[9]=(_*f*r-u*g*r-_*n*d+t*g*d+u*n*p-t*f*p)*T,e[10]=(a*g*r-_*o*r+_*n*l-t*g*l-a*n*p+t*o*p)*T,e[11]=(u*o*r-a*f*r-u*n*l+t*f*l+a*n*d-t*o*d)*T,e[12]=w*T,e[13]=(u*g*i-_*f*i+_*n*h-t*g*h-u*n*m+t*f*m)*T,e[14]=(_*o*i-a*g*i-_*n*c+t*g*c+a*n*m-t*o*m)*T,e[15]=(a*f*i-u*o*i+u*n*c-t*f*c-a*n*h+t*o*h)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,f=o+o,h=r*l,d=r*u,_=r*f,g=a*u,m=a*f,p=o*f,M=c*l,y=c*u,b=c*f,w=n.x,S=n.y,T=n.z;return i[0]=(1-(g+p))*w,i[1]=(d+b)*w,i[2]=(_-y)*w,i[3]=0,i[4]=(d-b)*S,i[5]=(1-(h+p))*S,i[6]=(m+M)*S,i[7]=0,i[8]=(_+y)*T,i[9]=(m-M)*T,i[10]=(1-(h+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=zs.set(i[0],i[1],i[2]).length();const a=zs.set(i[4],i[5],i[6]).length(),o=zs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],wi.copy(this);const l=1/r,u=1/a,f=1/o;return wi.elements[0]*=l,wi.elements[1]*=l,wi.elements[2]*=l,wi.elements[4]*=u,wi.elements[5]*=u,wi.elements[6]*=u,wi.elements[8]*=f,wi.elements[9]*=f,wi.elements[10]*=f,t.setFromRotationMatrix(wi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Xi,c=!1){const l=this.elements,u=2*r/(t-e),f=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let _,g;if(c)_=r/(a-r),g=a*r/(a-r);else if(o===Xi)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===el)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Xi,c=!1){const l=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i);let _,g;if(c)_=1/(a-r),g=a/(a-r);else if(o===Xi)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===el)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zs=new G,wi=new tt,Px=new G(0,0,0),Lx=new G(1,1,1),Cr=new G,Qo=new G,Jn=new G,Cd=new tt,Pd=new $r;class Ji{constructor(e=0,t=0,n=0,i=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pd.setFromEuler(this),this.setFromQuaternion(Pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class u0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dx=0;const Ld=new G,Vs=new $r,rr=new tt,ec=new G,Ha=new G,Ix=new G,Nx=new $r,Dd=new G(1,0,0),Id=new G(0,1,0),Nd=new G(0,0,1),Ud={type:"added"},Ux={type:"removed"},Hs={type:"childadded",child:null},kl={type:"childremoved",child:null};class zt extends Ia{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new G,t=new Ji,n=new $r,i=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new Je}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new u0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(Dd,e)}rotateY(e){return this.rotateOnAxis(Id,e)}rotateZ(e){return this.rotateOnAxis(Nd,e)}translateOnAxis(e,t){return Ld.copy(e).applyQuaternion(this.quaternion),this.position.add(Ld.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dd,e)}translateY(e){return this.translateOnAxis(Id,e)}translateZ(e){return this.translateOnAxis(Nd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ec.copy(e):ec.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(Ha,ec,this.up):rr.lookAt(ec,Ha,this.up),this.quaternion.setFromRotationMatrix(rr),i&&(rr.extractRotation(i.matrixWorld),Vs.setFromRotationMatrix(rr),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ud),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ux),kl.child=e,this.dispatchEvent(kl),kl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ud),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,e,Ix),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,Nx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}zt.DEFAULT_UP=new G(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new G,sr=new G,zl=new G,ar=new G,Gs=new G,Ws=new G,Fd=new G,Vl=new G,Hl=new G,Gl=new G,Wl=new _t,Xl=new _t,ql=new _t;class Di{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ai.subVectors(e,t),i.cross(Ai);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ai.subVectors(i,t),sr.subVectors(n,t),zl.subVectors(e,t);const a=Ai.dot(Ai),o=Ai.dot(sr),c=Ai.dot(zl),l=sr.dot(sr),u=sr.dot(zl),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(l*c-o*u)*h,_=(a*u-o*c)*h;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,ar)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ar.x),c.addScaledVector(a,ar.y),c.addScaledVector(o,ar.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Wl.setScalar(0),Xl.setScalar(0),ql.setScalar(0),Wl.fromBufferAttribute(e,t),Xl.fromBufferAttribute(e,n),ql.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Wl,r.x),a.addScaledVector(Xl,r.y),a.addScaledVector(ql,r.z),a}static isFrontFacing(e,t,n,i){return Ai.subVectors(n,t),sr.subVectors(e,t),Ai.cross(sr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Ai.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Di.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Gs.subVectors(i,n),Ws.subVectors(r,n),Vl.subVectors(e,n);const c=Gs.dot(Vl),l=Ws.dot(Vl);if(c<=0&&l<=0)return t.copy(n);Hl.subVectors(e,i);const u=Gs.dot(Hl),f=Ws.dot(Hl);if(u>=0&&f<=u)return t.copy(i);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Gs,a);Gl.subVectors(e,r);const d=Gs.dot(Gl),_=Ws.dot(Gl);if(_>=0&&d<=_)return t.copy(r);const g=d*l-c*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Ws,o);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Fd.subVectors(r,i),o=(f-u)/(f-u+(d-_)),t.copy(i).addScaledVector(Fd,o);const p=1/(m+g+h);return a=g*p,o=h*p,t.copy(n).addScaledVector(Gs,a).addScaledVector(Ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const f0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},tc={h:0,s:0,l:0};function Yl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=Ah(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Yl(a,r,e+1/3),this.g=Yl(a,r,e),this.b=Yl(a,r,e-1/3)}return ht.colorSpaceToWorking(this,i),this}setStyle(e,t=un){function n(r){r!==void 0&&parseFloat(r)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const n=f0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return ht.workingToColorSpace(gn.copy(this),e),Math.round(at(gn.r*255,0,255))*65536+Math.round(at(gn.g*255,0,255))*256+Math.round(at(gn.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(gn.copy(this),t);const n=gn.r,i=gn.g,r=gn.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=un){ht.workingToColorSpace(gn.copy(this),e);const t=gn.r,n=gn.g,i=gn.b;return e!==un?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+t,Pr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pr),e.getHSL(tc);const n=fo(Pr.h,tc.h,t),i=fo(Pr.s,tc.s,t),r=fo(Pr.l,tc.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new $e;$e.NAMES=f0;let Fx=0;class ji extends Ia{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=aa,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zu,this.blendDst=Ju,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==aa&&(n.blending=this.blending),this.side!==br&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zu&&(n.blendSrc=this.blendSrc),this.blendDst!==Ju&&(n.blendDst=this.blendDst),this.blendEquation!==hs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_a&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Md&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ps extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=jm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hr=Ox();function Ox(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;(l&8388608)===0;)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[c]=l|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function Bx(s){Math.abs(s)>65504&&Ue("DataUtils.toHalfFloat(): Value out of range."),s=at(s,-65504,65504),hr.floatView[0]=s;const e=hr.uint32View[0],t=e>>23&511;return hr.baseTable[t]+((e&8388607)>>hr.shiftTable[t])}function kx(s){const e=s>>10;return hr.uint32View[0]=hr.mantissaTable[hr.offsetTable[e]+(s&1023)]+hr.exponentTable[e],hr.floatView[0]}class nc{static toHalfFloat(e){return Bx(e)}static fromHalfFloat(e){return kx(e)}}const Kt=new G,ic=new ft;let zx=0;class Bn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bf,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ic.fromBufferAttribute(this,t),ic.applyMatrix3(e),this.setXY(t,ic.x,ic.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bf&&(e.usage=this.usage),e}}class h0 extends Bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class d0 extends Bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xr extends Bn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Vx=0;const di=new tt,Kl=new zt,Xs=new G,Qn=new Er,Ga=new Er,on=new G;class Ni extends Ia{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(c0(e)?d0:h0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,n){return di.makeTranslation(e,t,n),this.applyMatrix4(di),this}scale(e,t,n){return di.makeScale(e,t,n),this.applyMatrix4(di),this}lookAt(e){return Kl.lookAt(e),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xr(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Qn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ga.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(Qn.min,Ga.min),Qn.expandByPoint(on),on.addVectors(Qn.max,Ga.max),Qn.expandByPoint(on)):(Qn.expandByPoint(Ga.min),Qn.expandByPoint(Ga.max))}Qn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)on.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(on));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)on.fromBufferAttribute(o,l),c&&(Xs.fromBufferAttribute(e,l),on.add(Xs)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new G,c[R]=new G;const l=new G,u=new G,f=new G,h=new ft,d=new ft,_=new ft,g=new G,m=new G;function p(R,x,v){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,x),f.fromBufferAttribute(n,v),h.fromBufferAttribute(r,R),d.fromBufferAttribute(r,x),_.fromBufferAttribute(r,v),u.sub(l),f.sub(l),d.sub(h),_.sub(h);const C=1/(d.x*_.y-_.x*d.y);isFinite(C)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(C),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(C),o[R].add(g),o[x].add(g),o[v].add(g),c[R].add(m),c[x].add(m),c[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,x=M.length;R<x;++R){const v=M[R],C=v.start,P=v.count;for(let N=C,U=C+P;N<U;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const y=new G,b=new G,w=new G,S=new G;function T(R){w.fromBufferAttribute(i,R),S.copy(w);const x=o[R];y.copy(x),y.sub(w.multiplyScalar(w.dot(x))).normalize(),b.crossVectors(S,x);const C=b.dot(c[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,C)}for(let R=0,x=M.length;R<x;++R){const v=M[R],C=v.start,P=v.count;for(let N=C,U=C+P;N<U;N+=3)T(e.getX(N+0)),T(e.getX(N+1)),T(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new G,r=new G,a=new G,o=new G,c=new G,l=new G,u=new G,f=new G;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let d=0,_=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?d=c[g]*o.data.stride+o.offset:d=c[g]*u;for(let p=0;p<u;p++)h[_++]=l[d++]}return new Bn(h,u,f)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ni,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=e(h,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Od=new tt,ts=new _l,rc=new er,Bd=new G,sc=new G,ac=new G,oc=new G,jl=new G,cc=new G,kd=new G,lc=new G;class Ti extends zt{constructor(e=new Ni,t=new ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){cc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],f=r[c];u!==0&&(jl.fromBufferAttribute(f,e),a?cc.addScaledVector(jl,u):cc.addScaledVector(jl.sub(t),u))}t.add(cc)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rc.copy(n.boundingSphere),rc.applyMatrix4(r),ts.copy(e.ray).recast(e.near),!(rc.containsPoint(ts.origin)===!1&&(ts.intersectSphere(rc,Bd)===null||ts.origin.distanceToSquared(Bd)>(e.far-e.near)**2))&&(Od.copy(r).invert(),ts.copy(e.ray).applyMatrix4(Od),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=a[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let b=M,w=y;b<w;b+=3){const S=o.getX(b),T=o.getX(b+1),R=o.getX(b+2);i=uc(this,p,e,n,l,u,f,S,T,R),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=o.getX(m),y=o.getX(m+1),b=o.getX(m+2);i=uc(this,a,e,n,l,u,f,M,y,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=a[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let b=M,w=y;b<w;b+=3){const S=b,T=b+1,R=b+2;i=uc(this,p,e,n,l,u,f,S,T,R),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=m,y=m+1,b=m+2;i=uc(this,a,e,n,l,u,f,M,y,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Hx(s,e,t,n,i,r,a,o){let c;if(e.side===Wn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===br,o),c===null)return null;lc.copy(o),lc.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(lc);return l<t.near||l>t.far?null:{distance:l,point:lc.clone(),object:s}}function uc(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,sc),s.getVertexPosition(c,ac),s.getVertexPosition(l,oc);const u=Hx(s,e,t,n,sc,ac,oc,kd);if(u){const f=new G;Di.getBarycoord(kd,sc,ac,oc,f),i&&(u.uv=Di.getInterpolatedAttribute(i,o,c,l,f,new ft)),r&&(u.uv1=Di.getInterpolatedAttribute(r,o,c,l,f,new ft)),a&&(u.normal=Di.getInterpolatedAttribute(a,o,c,l,f,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new G,materialIndex:0};Di.getNormal(sc,ac,oc,h.normal),u.face=h,u.barycoord=f}return u}class Xo extends Ni{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new xr(l,3)),this.setAttribute("normal",new xr(u,3)),this.setAttribute("uv",new xr(f,2));function _(g,m,p,M,y,b,w,S,T,R,x){const v=b/T,C=w/R,P=b/2,N=w/2,U=S/2,V=T+1,B=R+1;let K=0,W=0;const ee=new G;for(let D=0;D<B;D++){const ce=D*C-N;for(let Ae=0;Ae<V;Ae++){const Fe=Ae*v-P;ee[g]=Fe*M,ee[m]=ce*y,ee[p]=U,l.push(ee.x,ee.y,ee.z),ee[g]=0,ee[m]=0,ee[p]=S>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(Ae/T),f.push(1-D/R),K+=1}}for(let D=0;D<R;D++)for(let ce=0;ce<T;ce++){const Ae=h+ce+V*D,Fe=h+ce+V*(D+1),Oe=h+(ce+1)+V*(D+1),qe=h+(ce+1)+V*D;c.push(Ae,Fe,qe),c.push(Fe,Oe,qe),W+=6}o.addGroup(d,W,x),d+=W,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ma(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Cn(s){const e={};for(let t=0;t<s.length;t++){const n=Ma(s[t]);for(const i in n)e[i]=n[i]}return e}function Gx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function p0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const Wx={clone:Ma,merge:Cn};var Xx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xx,this.fragmentShader=qx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ma(e.uniforms),this.uniformsGroups=Gx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class m0 extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Lr=new G,zd=new ft,Vd=new ft;class In extends m0{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z)}getViewSize(e,t){return this.getViewBounds(e,zd,Vd),t.subVectors(Vd,zd)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(uo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qs=-90,Ys=1;class Yx extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new In(qs,Ys,e,t);i.layers=this.layers,this.add(i);const r=new In(qs,Ys,e,t);r.layers=this.layers,this.add(r);const a=new In(qs,Ys,e,t);a.layers=this.layers,this.add(a);const o=new In(qs,Ys,e,t);o.layers=this.layers,this.add(o);const c=new In(qs,Ys,e,t);c.layers=this.layers,this.add(c);const l=new In(qs,Ys,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Xi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===el)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class g0 extends fn{constructor(e=[],t=xa,n,i,r,a,o,c,l,u){super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kx extends Es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new g0(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Xo(5,5,5),r=new Mr({name:"CubemapFromEquirect",uniforms:Ma(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:gr});r.uniforms.tEquirect.value=t;const a=new Ti(i,r),o=t.minFilter;return t.minFilter===Gi&&(t.minFilter=Jt),new Yx(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class ai extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jx={type:"move"};class $l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;l.inputState.pinching&&h>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jx)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class $x extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bf,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wn=new G;class Ch{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Li(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){tl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Bn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ch(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Hd=new G,Gd=new _t,Wd=new _t,Jx=new G,Xd=new tt,fc=new G,Zl=new er,qd=new tt,Jl=new _l;class Qx extends Ti{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xd,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Er),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fc),this.boundingBox.expandByPoint(fc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new er),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fc),this.boundingSphere.expandByPoint(fc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zl.copy(this.boundingSphere),Zl.applyMatrix4(i),e.ray.intersectsSphere(Zl)!==!1&&(qd.copy(i).invert(),Jl.copy(e.ray).applyMatrix4(qd),!(this.boundingBox!==null&&Jl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Jl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===X_?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ue("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Gd.fromBufferAttribute(i.attributes.skinIndex,e),Wd.fromBufferAttribute(i.attributes.skinWeight,e),Hd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Wd.getComponent(r);if(a!==0){const o=Gd.getComponent(r);Xd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Jx.copy(Hd).applyMatrix4(Xd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class _0 extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xl extends fn{constructor(e=null,t=1,n=1,i,r,a,o,c,l=On,u=On,f,h){super(null,a,o,c,l,u,i,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yd=new tt,ev=new tt;class Ph{constructor(e=[],t=[]){this.uuid=Ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ue("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:ev;Yd.multiplyMatrices(o,t[r]),Yd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ph(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new xl(t,e,e,vi,Gn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Ue("Skeleton: No bone found with UUID:",r),a=new _0),this.bones.push(a),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class kf extends Bn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ks=new tt,Kd=new tt,hc=[],jd=new Er,tv=new tt,Wa=new Ti,Xa=new er;class nv extends Ti{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new kf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,tv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ks),jd.copy(e.boundingBox).applyMatrix4(Ks),this.boundingBox.union(jd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new er),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ks),Xa.copy(e.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(Xa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Wa.geometry=this.geometry,Wa.material=this.material,Wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xa.copy(this.boundingSphere),Xa.applyMatrix4(n),e.ray.intersectsSphere(Xa)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ks),Kd.multiplyMatrices(n,Ks),Wa.matrixWorld=Kd,Wa.raycast(e,hc);for(let a=0,o=hc.length;a<o;a++){const c=hc[a];c.instanceId=r,c.object=this,t.push(c)}hc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new kf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new xl(new Float32Array(i*this.count),i,this.count,Mh,Gn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ql=new G,iv=new G,rv=new Je;class cs{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ql.subVectors(n,t).cross(iv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ql),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rv.getNormalMatrix(e),i=this.coplanarPoint(Ql).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new er,sv=new ft(.5,.5),dc=new G;class Lh{constructor(e=new cs,t=new cs,n=new cs,i=new cs,r=new cs,a=new cs){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xi,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],_=r[8],g=r[9],m=r[10],p=r[11],M=r[12],y=r[13],b=r[14],w=r[15];if(i[0].setComponents(l-a,d-u,p-_,w-M).normalize(),i[1].setComponents(l+a,d+u,p+_,w+M).normalize(),i[2].setComponents(l+o,d+f,p+g,w+y).normalize(),i[3].setComponents(l-o,d-f,p-g,w-y).normalize(),n)i[4].setComponents(c,h,m,b).normalize(),i[5].setComponents(l-c,d-h,p-m,w-b).normalize();else if(i[4].setComponents(l-c,d-h,p-m,w-b).normalize(),t===Xi)i[5].setComponents(l+c,d+h,p+m,w+b).normalize();else if(t===el)i[5].setComponents(c,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);const t=sv.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(dc.x=i.normal.x>0?e.max.x:e.min.x,dc.y=i.normal.y>0?e.max.y:e.min.y,dc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class x0 extends ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nl=new G,il=new G,$d=new tt,qa=new _l,pc=new er,eu=new G,Zd=new G;class Dh extends zt{constructor(e=new Ni,t=new x0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)nl.fromBufferAttribute(t,i-1),il.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=nl.distanceTo(il);e.setAttribute("lineDistance",new xr(n,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pc.copy(n.boundingSphere),pc.applyMatrix4(i),pc.radius+=r,e.ray.intersectsSphere(pc)===!1)return;$d.copy(i).invert(),qa.copy(e.ray).applyMatrix4($d);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=l){const p=u.getX(g),M=u.getX(g+1),y=mc(this,e,qa,c,p,M,g);y&&t.push(y)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(d),p=mc(this,e,qa,c,g,m,_-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=l){const p=mc(this,e,qa,c,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=mc(this,e,qa,c,_-1,d,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function mc(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(nl.fromBufferAttribute(o,i),il.fromBufferAttribute(o,r),t.distanceSqToSegment(nl,il,eu,Zd)>n)return;eu.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(eu);if(!(l<e.near||l>e.far))return{distance:l,point:Zd.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Jd=new G,Qd=new G;class av extends Dh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Jd.fromBufferAttribute(t,i),Qd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Jd.distanceTo(Qd);e.setAttribute("lineDistance",new xr(n,1))}else Ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ov extends Dh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class v0 extends ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ep=new tt,zf=new _l,gc=new er,_c=new G;class cv extends zt{constructor(e=new Ni,t=new v0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gc.copy(n.boundingSphere),gc.applyMatrix4(i),gc.radius+=r,e.ray.intersectsSphere(gc)===!1)return;ep.copy(i).invert(),zf.copy(e.ray).applyMatrix4(ep);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let _=h,g=d;_<g;_++){const m=l.getX(_);_c.fromBufferAttribute(f,m),tp(_c,m,c,i,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let _=h,g=d;_<g;_++)_c.fromBufferAttribute(f,_),tp(_c,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function tp(s,e,t,n,i,r,a){const o=zf.distanceSqToPoint(s);if(o<t){const c=new G;zf.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class y0 extends fn{constructor(e,t,n=Ts,i,r,a,o=On,c=On,l,u=Ro,f=1){if(u!==Ro&&u!==Co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class b0 extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vl extends Ni{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,f=e/o,h=t/c,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const M=p*h-a;for(let y=0;y<l;y++){const b=y*f-r;_.push(b,-M,0),g.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const y=M+l*p,b=M+l*(p+1),w=M+1+l*(p+1),S=M+1+l*p;d.push(y,b,S),d.push(b,w,S)}this.setIndex(d),this.setAttribute("position",new xr(_,3)),this.setAttribute("normal",new xr(g,3)),this.setAttribute("uv",new xr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ih extends ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=a0,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tr extends Ih{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class lv extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=K_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uv extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function xc(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function fv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function hv(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function np(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function M0(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class qo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class dv extends qo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vd,endingEnd:vd}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case yd:r=e,o=2*t-n;break;case bd:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case yd:a=e,c=2*n-t;break;case bd:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-h*m+2*h*g-h*_,M=(1+h)*m+(-1.5-2*h)*g+(-.5+h)*_+1,y=(-1-d)*m+(1.5+d)*g+.5*_,b=d*m-d*g;for(let w=0;w!==o;++w)r[w]=p*a[u+w]+M*a[l+w]+y*a[c+w]+b*a[f+w];return r}}class pv extends qo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*f+a[c+h]*u;return r}}class mv extends qo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ui{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xc(t,this.TimeBufferType),this.values=xc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xc(e.times,Array),values:xc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Po:t=this.InterpolantFactoryMethodDiscrete;break;case Lo:t=this.InterpolantFactoryMethodLinear;break;case Cl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ue("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Po;case this.InterpolantFactoryMethodLinear:return Lo;case this.InterpolantFactoryMethodSmooth:return Cl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){ot("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ot("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&fv(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){ot("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Cl,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{const f=o*n,h=f-n,d=f+n;for(let _=0;_!==n;++_){const g=t[f+_];if(g!==t[h+_]||g!==t[d+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const f=o*n,h=a*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ui.prototype.ValueTypeName="";Ui.prototype.TimeBufferType=Float32Array;Ui.prototype.ValueBufferType=Float32Array;Ui.prototype.DefaultInterpolation=Lo;class Na extends Ui{constructor(e,t,n){super(e,t,n)}}Na.prototype.ValueTypeName="bool";Na.prototype.ValueBufferType=Array;Na.prototype.DefaultInterpolation=Po;Na.prototype.InterpolantFactoryMethodLinear=void 0;Na.prototype.InterpolantFactoryMethodSmooth=void 0;class S0 extends Ui{constructor(e,t,n,i){super(e,t,n,i)}}S0.prototype.ValueTypeName="color";class Sa extends Ui{constructor(e,t,n,i){super(e,t,n,i)}}Sa.prototype.ValueTypeName="number";class gv extends qo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let u=l+o;l!==u;l+=4)$r.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Ta extends Ui{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new gv(this.times,this.values,this.getValueSize(),e)}}Ta.prototype.ValueTypeName="quaternion";Ta.prototype.InterpolantFactoryMethodSmooth=void 0;class Ua extends Ui{constructor(e,t,n){super(e,t,n)}}Ua.prototype.ValueTypeName="string";Ua.prototype.ValueBufferType=Array;Ua.prototype.DefaultInterpolation=Po;Ua.prototype.InterpolantFactoryMethodLinear=void 0;Ua.prototype.InterpolantFactoryMethodSmooth=void 0;class Ea extends Ui{constructor(e,t,n,i){super(e,t,n,i)}}Ea.prototype.ValueTypeName="vector";class _v{constructor(e="",t=-1,n=[],i=q_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ii(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(vv(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Ui.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=hv(c);c=np(c,1,u),l=np(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Sa(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(r);if(u&&u.length>1){const f=u[1];let h=i[f];h||(i[f]=h=[]),h.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Ue("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return ot("AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,_,g){if(d.length!==0){const m=[],p=[];M0(d,m,p,_),m.length!==0&&g.push(new f(h,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let f=0;f<l.length;f++){const h=l[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let _;for(_=0;_<h.length;_++)if(h[_].morphTargets)for(let g=0;g<h[_].morphTargets.length;g++)d[h[_].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let M=0;M!==h[_].morphTargets.length;++M){const y=h[_];m.push(y.time),p.push(y.morphTarget===g?1:0)}i.push(new Sa(".morphTargetInfluence["+g+"]",m,p))}c=d.length*a}else{const d=".bones["+t[f].name+"]";n(Ea,d+".position",h,"pos",i),n(Ta,d+".quaternion",h,"rot",i),n(Ea,d+".scale",h,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function xv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Sa;case"vector":case"vector2":case"vector3":case"vector4":return Ea;case"color":return S0;case"quaternion":return Ta;case"bool":case"boolean":return Na;case"string":return Ua}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function vv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=xv(s.type);if(s.times===void 0){const t=[],n=[];M0(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const pr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class yv{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const d=l[f],_=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const bv=new yv;class Ps{constructor(e){this.manager=e!==void 0?e:bv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ps.DEFAULT_MATERIAL_NAME="__DEFAULT";const or={};class Mv extends Error{constructor(e,t){super(e),this.response=t}}class Nh extends Ps{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=pr.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(or[e]!==void 0){or[e].push({onLoad:t,onProgress:n,onError:i});return}or[e]=[],or[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ue("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=or[e],f=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=h?parseInt(h):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){M();function M(){f.read().then(({done:y,value:b})=>{if(y)p.close();else{g+=b.byteLength;const w=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let S=0,T=u.length;S<T;S++){const R=u[S];R.onProgress&&R.onProgress(w)}p.enqueue(b),M()}},y=>{p.error(y)})}}});return new Response(m)}else throw new Mv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(_=>d.decode(_))}}}).then(l=>{pr.add(`file:${e}`,l);const u=or[e];delete or[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=or[e];if(u===void 0)throw this.manager.itemError(e),l;delete or[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const js=new WeakMap;class Sv extends Ps{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=pr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=js.get(a);f===void 0&&(f=[],js.set(a,f)),f.push({onLoad:t,onError:i})}return a}const o=Do("img");function c(){u(),t&&t(this);const f=js.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}js.delete(this),r.manager.itemEnd(e)}function l(f){u(),i&&i(f),pr.remove(`image:${e}`);const h=js.get(this)||[];for(let d=0;d<h.length;d++){const _=h[d];_.onError&&_.onError(f)}js.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),pr.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Tv extends Ps{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new xl,o=new Nh(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(u){if(i!==void 0)i(u);else{u(u);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:xi,a.wrapT=l.wrapT!==void 0?l.wrapT:xi,a.magFilter=l.magFilter!==void 0?l.magFilter:Jt,a.minFilter=l.minFilter!==void 0?l.minFilter:Jt,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=Gi),l.mipmapCount===1&&(a.minFilter=Jt),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,i),a}}class Ev extends Ps{constructor(e){super(e)}load(e,t,n,i){const r=new fn,a=new Sv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class yl extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const tu=new tt,ip=new G,rp=new G;class Uh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=Zi,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lh,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(ip),rp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rp),t.updateMatrixWorld(),tu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wv extends Uh{constructor(){super(new In(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ba*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Av extends yl{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new wv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const sp=new tt,Ya=new G,nu=new G;class Rv extends Uh{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ya.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ya),nu.copy(n.position),nu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(nu),n.updateMatrixWorld(),i.makeTranslation(-Ya.x,-Ya.y,-Ya.z),sp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sp,n.coordinateSystem,n.reversedDepth)}}class Cv extends yl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Rv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Fh extends m0{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Pv extends Uh{constructor(){super(new Fh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vf extends yl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Pv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Lv extends yl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ho{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const iu=new WeakMap;class Dv extends Ps{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ue("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ue("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=pr.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(iu.has(a)===!0)i&&i(iu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return pr.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),iu.set(c,l),pr.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});pr.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Iv extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Oh="\\[\\]\\.:\\/",Nv=new RegExp("["+Oh+"]","g"),Bh="[^"+Oh+"]",Uv="[^"+Oh.replace("\\.","")+"]",Fv=/((?:WC+[\/:])*)/.source.replace("WC",Bh),Ov=/(WCOD+)?/.source.replace("WCOD",Uv),Bv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bh),kv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bh),zv=new RegExp("^"+Fv+Ov+Bv+kv+"$"),Vv=["material","materials","bones","map"];class Hv{constructor(e,t,n){const i=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class St{constructor(e,t,n){this.path=t,this.parsedPath=n||St.parseTrackName(t),this.node=St.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new St.Composite(e,t,n):new St(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Nv,"")}static parseTrackName(e){const t=zv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Vv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=St.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;ot("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}St.Composite=Hv;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function ap(s,e,t,n){const i=Gv(n);switch(t){case i0:return s*e;case Mh:return s*e/i.components*i.byteLength;case Sh:return s*e/i.components*i.byteLength;case Th:return s*e*2/i.components*i.byteLength;case Eh:return s*e*2/i.components*i.byteLength;case r0:return s*e*3/i.components*i.byteLength;case vi:return s*e*4/i.components*i.byteLength;case wh:return s*e*4/i.components*i.byteLength;case Bc:case kc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zc:case Vc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uf:case hf:return Math.max(s,16)*Math.max(e,8)/4;case lf:case ff:return Math.max(s,8)*Math.max(e,8)/2;case df:case pf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _f:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case xf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case yf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case bf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Tf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case wf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Af:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Rf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Pf:case Lf:case Df:return Math.ceil(s/4)*Math.ceil(e/4)*16;case If:case Nf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Uf:case Ff:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gv(s){switch(s){case Zi:case Qm:return{byteLength:1,components:1};case wo:case e0:case Wi:return{byteLength:2,components:1};case yh:case bh:return{byteLength:2,components:4};case Ts:case vh:case Gn:return{byteLength:4,components:1};case t0:case n0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xh}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xh);function T0(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Wv(s){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=s.createBuffer();s.bindBuffer(c,h),s.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c.updateRanges;if(s.bindBuffer(l,o),f.length===0)s.bufferSubData(l,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],g=f[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,f[h]=g)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const g=f[d];s.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Xv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qv=`#ifdef USE_ALPHAHASH
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
#endif`,Yv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$v=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zv=`#ifdef USE_AOMAP
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
#endif`,Jv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qv=`#ifdef USE_BATCHING
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
#endif`,ey=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ty=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ny=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ry=`#ifdef USE_IRIDESCENCE
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
#endif`,sy=`#ifdef USE_BUMPMAP
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
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,py=`#define PI 3.141592653589793
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
} // validated`,my=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gy=`vec3 transformedNormal = objectNormal;
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
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,by="gl_FragColor = linearToOutputTexel( gl_FragColor );",My=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sy=`#ifdef USE_ENVMAP
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
#endif`,Ty=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
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
#endif`,wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
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
#endif`,Ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dy=`#ifdef USE_GRADIENTMAP
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
}`,Iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ny=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fy=`uniform bool receiveShadow;
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
#endif`,Oy=`#ifdef USE_ENVMAP
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
#endif`,By=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hy=`PhysicalMaterial material;
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
#endif`,Gy=`uniform sampler2D dfgLUT;
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
}`,Wy=`
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
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
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
#endif`,qy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ky=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$y=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eb=`#if defined( USE_POINTS_UV )
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
#endif`,tb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ib=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ab=`#ifdef USE_MORPHTARGETS
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
#endif`,ob=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,db=`#ifdef USE_NORMALMAP
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
#endif`,pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cb=`float getShadowMask() {
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
}`,Pb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lb=`#ifdef USE_SKINNING
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
#endif`,Db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ib=`#ifdef USE_SKINNING
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
#endif`,Nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ub=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ob=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bb=`#ifdef USE_TRANSMISSION
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
#endif`,kb=`#ifdef USE_TRANSMISSION
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
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xb=`uniform sampler2D t2D;
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
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$b=`#include <common>
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
}`,Zb=`#if DEPTH_PACKING == 3200
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
}`,Jb=`#define DISTANCE
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
}`,Qb=`#define DISTANCE
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
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`uniform float scale;
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
}`,iM=`uniform vec3 diffuse;
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
}`,rM=`#include <common>
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
}`,sM=`uniform vec3 diffuse;
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
}`,aM=`#define LAMBERT
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
}`,oM=`#define LAMBERT
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
}`,cM=`#define MATCAP
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
}`,lM=`#define MATCAP
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
}`,uM=`#define NORMAL
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
}`,fM=`#define NORMAL
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
}`,hM=`#define PHONG
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
}`,dM=`#define PHONG
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
}`,pM=`#define STANDARD
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
}`,mM=`#define STANDARD
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
}`,gM=`#define TOON
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
}`,_M=`#define TOON
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
}`,xM=`uniform float size;
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
}`,vM=`uniform vec3 diffuse;
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
}`,yM=`#include <common>
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
}`,bM=`uniform vec3 color;
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
}`,MM=`uniform float rotation;
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
}`,SM=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Xv,alphahash_pars_fragment:qv,alphamap_fragment:Yv,alphamap_pars_fragment:Kv,alphatest_fragment:jv,alphatest_pars_fragment:$v,aomap_fragment:Zv,aomap_pars_fragment:Jv,batching_pars_vertex:Qv,batching_vertex:ey,begin_vertex:ty,beginnormal_vertex:ny,bsdfs:iy,iridescence_fragment:ry,bumpmap_pars_fragment:sy,clipping_planes_fragment:ay,clipping_planes_pars_fragment:oy,clipping_planes_pars_vertex:cy,clipping_planes_vertex:ly,color_fragment:uy,color_pars_fragment:fy,color_pars_vertex:hy,color_vertex:dy,common:py,cube_uv_reflection_fragment:my,defaultnormal_vertex:gy,displacementmap_pars_vertex:_y,displacementmap_vertex:xy,emissivemap_fragment:vy,emissivemap_pars_fragment:yy,colorspace_fragment:by,colorspace_pars_fragment:My,envmap_fragment:Sy,envmap_common_pars_fragment:Ty,envmap_pars_fragment:Ey,envmap_pars_vertex:wy,envmap_physical_pars_fragment:Oy,envmap_vertex:Ay,fog_vertex:Ry,fog_pars_vertex:Cy,fog_fragment:Py,fog_pars_fragment:Ly,gradientmap_pars_fragment:Dy,lightmap_pars_fragment:Iy,lights_lambert_fragment:Ny,lights_lambert_pars_fragment:Uy,lights_pars_begin:Fy,lights_toon_fragment:By,lights_toon_pars_fragment:ky,lights_phong_fragment:zy,lights_phong_pars_fragment:Vy,lights_physical_fragment:Hy,lights_physical_pars_fragment:Gy,lights_fragment_begin:Wy,lights_fragment_maps:Xy,lights_fragment_end:qy,logdepthbuf_fragment:Yy,logdepthbuf_pars_fragment:Ky,logdepthbuf_pars_vertex:jy,logdepthbuf_vertex:$y,map_fragment:Zy,map_pars_fragment:Jy,map_particle_fragment:Qy,map_particle_pars_fragment:eb,metalnessmap_fragment:tb,metalnessmap_pars_fragment:nb,morphinstance_vertex:ib,morphcolor_vertex:rb,morphnormal_vertex:sb,morphtarget_pars_vertex:ab,morphtarget_vertex:ob,normal_fragment_begin:cb,normal_fragment_maps:lb,normal_pars_fragment:ub,normal_pars_vertex:fb,normal_vertex:hb,normalmap_pars_fragment:db,clearcoat_normal_fragment_begin:pb,clearcoat_normal_fragment_maps:mb,clearcoat_pars_fragment:gb,iridescence_pars_fragment:_b,opaque_fragment:xb,packing:vb,premultiplied_alpha_fragment:yb,project_vertex:bb,dithering_fragment:Mb,dithering_pars_fragment:Sb,roughnessmap_fragment:Tb,roughnessmap_pars_fragment:Eb,shadowmap_pars_fragment:wb,shadowmap_pars_vertex:Ab,shadowmap_vertex:Rb,shadowmask_pars_fragment:Cb,skinbase_vertex:Pb,skinning_pars_vertex:Lb,skinning_vertex:Db,skinnormal_vertex:Ib,specularmap_fragment:Nb,specularmap_pars_fragment:Ub,tonemapping_fragment:Fb,tonemapping_pars_fragment:Ob,transmission_fragment:Bb,transmission_pars_fragment:kb,uv_pars_fragment:zb,uv_pars_vertex:Vb,uv_vertex:Hb,worldpos_vertex:Gb,background_vert:Wb,background_frag:Xb,backgroundCube_vert:qb,backgroundCube_frag:Yb,cube_vert:Kb,cube_frag:jb,depth_vert:$b,depth_frag:Zb,distanceRGBA_vert:Jb,distanceRGBA_frag:Qb,equirect_vert:eM,equirect_frag:tM,linedashed_vert:nM,linedashed_frag:iM,meshbasic_vert:rM,meshbasic_frag:sM,meshlambert_vert:aM,meshlambert_frag:oM,meshmatcap_vert:cM,meshmatcap_frag:lM,meshnormal_vert:uM,meshnormal_frag:fM,meshphong_vert:hM,meshphong_frag:dM,meshphysical_vert:pM,meshphysical_frag:mM,meshtoon_vert:gM,meshtoon_frag:_M,points_vert:xM,points_frag:vM,shadow_vert:yM,shadow_frag:bM,sprite_vert:MM,sprite_frag:SM},ge={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},zi={basic:{uniforms:Cn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Cn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Cn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Cn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Cn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new $e(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Cn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Cn([ge.points,ge.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Cn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Cn([ge.common,ge.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Cn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Cn([ge.sprite,ge.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Cn([ge.common,ge.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Cn([ge.lights,ge.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};zi.physical={uniforms:Cn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const vc={r:0,b:0,g:0},is=new Ji,TM=new tt;function EM(s,e,t,n,i,r,a){const o=new $e(0);let c=r===!0?0:1,l,u,f=null,h=0,d=null;function _(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function g(y){let b=!1;const w=_(y);w===null?p(o,c):w&&w.isColor&&(p(w,1),b=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,b){const w=_(b);w&&(w.isCubeTexture||w.mapping===gl)?(u===void 0&&(u=new Ti(new Xo(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:Ma(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),is.copy(b.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(TM.makeRotationFromEuler(is)),u.material.toneMapped=ht.getTransfer(w.colorSpace)!==Et,(f!==w||h!==w.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,f=w,h=w.version,d=s.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Ti(new vl(2,2),new Mr({name:"BackgroundMaterial",uniforms:Ma(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ht.getTransfer(w.colorSpace)!==Et,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,f=w,h=w.version,d=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,b){y.getRGB(vc,p0(s)),n.buffers.color.setClear(vc.r,vc.g,vc.b,b,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:g,addToRenderList:m,dispose:M}}function wM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,a=!1;function o(v,C,P,N,U){let V=!1;const B=f(N,P,C);r!==B&&(r=B,l(r.object)),V=d(v,N,P,U),V&&_(v,N,P,U),U!==null&&e.update(U,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,b(v,C,P,N),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function u(v){return s.deleteVertexArray(v)}function f(v,C,P){const N=P.wireframe===!0;let U=n[v.id];U===void 0&&(U={},n[v.id]=U);let V=U[C.id];V===void 0&&(V={},U[C.id]=V);let B=V[N];return B===void 0&&(B=h(c()),V[N]=B),B}function h(v){const C=[],P=[],N=[];for(let U=0;U<t;U++)C[U]=0,P[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:N,object:v,attributes:{},index:null}}function d(v,C,P,N){const U=r.attributes,V=C.attributes;let B=0;const K=P.getAttributes();for(const W in K)if(K[W].location>=0){const D=U[W];let ce=V[W];if(ce===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(ce=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(ce=v.instanceColor)),D===void 0||D.attribute!==ce||ce&&D.data!==ce.data)return!0;B++}return r.attributesNum!==B||r.index!==N}function _(v,C,P,N){const U={},V=C.attributes;let B=0;const K=P.getAttributes();for(const W in K)if(K[W].location>=0){let D=V[W];D===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(D=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(D=v.instanceColor));const ce={};ce.attribute=D,D&&D.data&&(ce.data=D.data),U[W]=ce,B++}r.attributes=U,r.attributesNum=B,r.index=N}function g(){const v=r.newAttributes;for(let C=0,P=v.length;C<P;C++)v[C]=0}function m(v){p(v,0)}function p(v,C){const P=r.newAttributes,N=r.enabledAttributes,U=r.attributeDivisors;P[v]=1,N[v]===0&&(s.enableVertexAttribArray(v),N[v]=1),U[v]!==C&&(s.vertexAttribDivisor(v,C),U[v]=C)}function M(){const v=r.newAttributes,C=r.enabledAttributes;for(let P=0,N=C.length;P<N;P++)C[P]!==v[P]&&(s.disableVertexAttribArray(P),C[P]=0)}function y(v,C,P,N,U,V,B){B===!0?s.vertexAttribIPointer(v,C,P,U,V):s.vertexAttribPointer(v,C,P,N,U,V)}function b(v,C,P,N){g();const U=N.attributes,V=P.getAttributes(),B=C.defaultAttributeValues;for(const K in V){const W=V[K];if(W.location>=0){let ee=U[K];if(ee===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(ee=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(ee=v.instanceColor)),ee!==void 0){const D=ee.normalized,ce=ee.itemSize,Ae=e.get(ee);if(Ae===void 0)continue;const Fe=Ae.buffer,Oe=Ae.type,qe=Ae.bytesPerElement,j=Oe===s.INT||Oe===s.UNSIGNED_INT||ee.gpuType===vh;if(ee.isInterleavedBufferAttribute){const $=ee.data,ae=$.stride,Te=ee.offset;if($.isInstancedInterleavedBuffer){for(let Ee=0;Ee<W.locationSize;Ee++)p(W.location+Ee,$.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Ee=0;Ee<W.locationSize;Ee++)m(W.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let Ee=0;Ee<W.locationSize;Ee++)y(W.location+Ee,ce/W.locationSize,Oe,D,ae*qe,(Te+ce/W.locationSize*Ee)*qe,j)}else{if(ee.isInstancedBufferAttribute){for(let $=0;$<W.locationSize;$++)p(W.location+$,ee.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let $=0;$<W.locationSize;$++)m(W.location+$);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let $=0;$<W.locationSize;$++)y(W.location+$,ce/W.locationSize,Oe,D,ce*qe,ce/W.locationSize*$*qe,j)}}else if(B!==void 0){const D=B[K];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(W.location,D);break;case 3:s.vertexAttrib3fv(W.location,D);break;case 4:s.vertexAttrib4fv(W.location,D);break;default:s.vertexAttrib1fv(W.location,D)}}}}M()}function w(){R();for(const v in n){const C=n[v];for(const P in C){const N=C[P];for(const U in N)u(N[U].object),delete N[U];delete C[P]}delete n[v]}}function S(v){if(n[v.id]===void 0)return;const C=n[v.id];for(const P in C){const N=C[P];for(const U in N)u(N[U].object),delete N[U];delete C[P]}delete n[v.id]}function T(v){for(const C in n){const P=n[C];if(P[v.id]===void 0)continue;const N=P[v.id];for(const U in N)u(N[U].object),delete N[U];delete P[v.id]}}function R(){x(),a=!0,r!==i&&(r=i,l(r.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:x,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function AM(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,f){f!==0&&(s.drawArraysInstanced(n,l,u,f),t.update(u,n,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];t.update(d,n,1)}function c(l,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)a(l[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g]*h[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function RM(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==vi&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Zi&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Gn&&!R)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ue("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:w,maxSamples:S}}function CM(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new cs,o=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=s.get(f);if(!i||_===null||_.length===0||r&&!m)r?u(null):l();else{const M=r?0:n,y=M*4;let b=p.clippingState||null;c.value=b,b=u(_,h,y,d);for(let w=0;w!==y;++w)b[w]=t[w];p.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=d+g*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,b=d;y!==g;++y,b+=4)a.copy(f[y]).applyMatrix4(M,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function PM(s){let e=new WeakMap;function t(a,o){return o===of?a.mapping=xa:o===cf&&(a.mapping=va),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===of||o===cf)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Kx(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Fr=4,op=[.125,.215,.35,.446,.526,.582],ds=20,LM=256,Ka=new Fh,cp=new $e;let ru=null,su=0,au=0,ou=!1;const DM=new G;class Hf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=DM}=r;ru=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ru,su,au),this._renderer.xr.enabled=ou,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xa||e.mapping===va?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ru=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Wi,format:vi,colorSpace:Sn,depthBuffer:!1},i=lp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lp(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=IM(r)),this._blurMaterial=UM(r,e,t)}return i}_compileMaterial(e){const t=new Ti(new Ni,e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,n,i,r){const c=new In(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(cp),f.toneMapping=Hr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ti(new Xo,new ps({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(cp),p=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[y],r.y,r.z)):b===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[y]));const w=this._cubeSize;$s(i,b*w,y>2?w:0,w,w),f.setRenderTarget(i),p&&f.render(g,c),f.render(e,c)}f.toneMapping=d,f.autoClear=h,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===xa||e.mapping===va;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=up());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;$s(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ka)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget;if(this._ggxMaterial===null){const M=3*Math.max(this._cubeSize,16),y=4*this._cubeSize;this._ggxMaterial=NM(this._lodMax,M,y)}const a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=.05+l*.95,d=f*h,{_lodMax:_}=this,g=this._sizeLods[n],m=3*g*(n>_-Fr?n-_+Fr:0),p=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=_-t,$s(r,m,p,3*g,2*g),i.setRenderTarget(r),i.render(o,Ka),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,$s(e,m,p,3*g,2*g),i.setRenderTarget(e),i.render(o,Ka)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ot("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[i];f.material=l;const h=l.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ds-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):ds;m>ds&&Ue(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ds}`);const p=[];let M=0;for(let T=0;T<ds;++T){const R=T/g,x=Math.exp(-R*R/2);p.push(x),T===0?M+=x:T<m&&(M+=2*x)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-n;const b=this._sizeLods[i],w=3*b*(i>y-Fr?i-y+Fr:0),S=4*(this._cubeSize-b);$s(t,w,S,3*b,2*b),c.setRenderTarget(t),c.render(f,Ka)}}function IM(s){const e=[],t=[],n=[];let i=s;const r=s-Fr+1+op.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-Fr?c=op[a-s+Fr-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*d),y=new Float32Array(m*_*d),b=new Float32Array(p*_*d);for(let S=0;S<d;S++){const T=S%3*2/3-1,R=S>2?0:-1,x=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];M.set(x,g*_*S),y.set(h,m*_*S);const v=[S,S,S,S,S,S];b.set(v,p*_*S)}const w=new Ni;w.setAttribute("position",new Bn(M,g)),w.setAttribute("uv",new Bn(y,m)),w.setAttribute("faceIndex",new Bn(b,p)),n.push(new Ti(w,null)),i>Fr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function lp(s,e,t){const n=new Es(s,e,t);return n.texture.mapping=gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function NM(s,e,t){return new Mr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:LM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bl(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function UM(s,e,t){const n=new Float32Array(ds),i=new G(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:bl(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function up(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function fp(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function bl(){return`

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
	`}function FM(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===of||c===cf,u=c===xa||c===va;if(l||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Hf(s)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return l&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Hf(s)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function OM(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Io("WebGLRenderer: "+n+" extension not supported."),i}}}function BM(s,e,t,n){const i={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete i[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const d in h)e.update(h[d],s.ARRAY_BUFFER)}function l(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const M=d.array;g=d.version;for(let y=0,b=M.length;y<b;y+=3){const w=M[y+0],S=M[y+1],T=M[y+2];h.push(w,S,S,T,T,w)}}else if(_!==void 0){const M=_.array;g=_.version;for(let y=0,b=M.length/3-1;y<b;y+=3){const w=y+0,S=y+1,T=y+2;h.push(w,S,S,T,T,w)}}else return;const m=new(c0(h)?d0:h0)(h,1);m.version=g;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function kM(s,e,t){let n;function i(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,d){s.drawElements(n,d,r,h*a),t.update(d,n,1)}function l(h,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,h*a,_),t.update(d,n,_))}function u(h,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,n,1)}function f(h,d,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/a,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,g,0,_);let p=0;for(let M=0;M<_;M++)p+=d[M]*g[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function zM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function VM(s,e,t){const n=new WeakMap,i=new _t;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let x=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",x)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let y=0;d===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let b=o.attributes.position.count*y,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const S=new Float32Array(b*w*4*f),T=new l0(S,b,w,f);T.type=Gn,T.needsUpdate=!0;const R=y*4;for(let v=0;v<f;v++){const C=m[v],P=p[v],N=M[v],U=b*w*4*v;for(let V=0;V<C.count;V++){const B=V*R;d===!0&&(i.fromBufferAttribute(C,V),S[U+B+0]=i.x,S[U+B+1]=i.y,S[U+B+2]=i.z,S[U+B+3]=0),_===!0&&(i.fromBufferAttribute(P,V),S[U+B+4]=i.x,S[U+B+5]=i.y,S[U+B+6]=i.z,S[U+B+7]=0),g===!0&&(i.fromBufferAttribute(N,V),S[U+B+8]=i.x,S[U+B+9]=i.y,S[U+B+10]=i.z,S[U+B+11]=N.itemSize===4?i.w:1)}}h={count:f,texture:T,size:new ft(b,w)},n.set(o,h),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let g=0;g<l.length;g++)d+=l[g];const _=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function HM(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);if(i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;i.get(h)!==l&&(h.update(),i.set(h,l))}return f}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const E0=new fn,hp=new y0(1,1),w0=new l0,A0=new Rx,R0=new g0,dp=[],pp=[],mp=new Float32Array(16),gp=new Float32Array(9),_p=new Float32Array(4);function Fa(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=dp[i];if(r===void 0&&(r=new Float32Array(i),dp[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function rn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function sn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ml(s,e){let t=pp[e];t===void 0&&(t=new Int32Array(e),pp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function GM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function WM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2fv(this.addr,e),sn(t,e)}}function XM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;s.uniform3fv(this.addr,e),sn(t,e)}}function qM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4fv(this.addr,e),sn(t,e)}}function YM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;_p.set(n),s.uniformMatrix2fv(this.addr,!1,_p),sn(t,n)}}function KM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;gp.set(n),s.uniformMatrix3fv(this.addr,!1,gp),sn(t,n)}}function jM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;mp.set(n),s.uniformMatrix4fv(this.addr,!1,mp),sn(t,n)}}function $M(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ZM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2iv(this.addr,e),sn(t,e)}}function JM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;s.uniform3iv(this.addr,e),sn(t,e)}}function QM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4iv(this.addr,e),sn(t,e)}}function eS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function tS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2uiv(this.addr,e),sn(t,e)}}function nS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;s.uniform3uiv(this.addr,e),sn(t,e)}}function iS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4uiv(this.addr,e),sn(t,e)}}function rS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(hp.compareFunction=o0,r=hp):r=E0,t.setTexture2D(e||r,i)}function sS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||A0,i)}function aS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||R0,i)}function oS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||w0,i)}function cS(s){switch(s){case 5126:return GM;case 35664:return WM;case 35665:return XM;case 35666:return qM;case 35674:return YM;case 35675:return KM;case 35676:return jM;case 5124:case 35670:return $M;case 35667:case 35671:return ZM;case 35668:case 35672:return JM;case 35669:case 35673:return QM;case 5125:return eS;case 36294:return tS;case 36295:return nS;case 36296:return iS;case 35678:case 36198:case 36298:case 36306:case 35682:return rS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return aS;case 36289:case 36303:case 36311:case 36292:return oS}}function lS(s,e){s.uniform1fv(this.addr,e)}function uS(s,e){const t=Fa(e,this.size,2);s.uniform2fv(this.addr,t)}function fS(s,e){const t=Fa(e,this.size,3);s.uniform3fv(this.addr,t)}function hS(s,e){const t=Fa(e,this.size,4);s.uniform4fv(this.addr,t)}function dS(s,e){const t=Fa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function pS(s,e){const t=Fa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function mS(s,e){const t=Fa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function gS(s,e){s.uniform1iv(this.addr,e)}function _S(s,e){s.uniform2iv(this.addr,e)}function xS(s,e){s.uniform3iv(this.addr,e)}function vS(s,e){s.uniform4iv(this.addr,e)}function yS(s,e){s.uniform1uiv(this.addr,e)}function bS(s,e){s.uniform2uiv(this.addr,e)}function MS(s,e){s.uniform3uiv(this.addr,e)}function SS(s,e){s.uniform4uiv(this.addr,e)}function TS(s,e,t){const n=this.cache,i=e.length,r=Ml(t,i);rn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||E0,r[a])}function ES(s,e,t){const n=this.cache,i=e.length,r=Ml(t,i);rn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||A0,r[a])}function wS(s,e,t){const n=this.cache,i=e.length,r=Ml(t,i);rn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||R0,r[a])}function AS(s,e,t){const n=this.cache,i=e.length,r=Ml(t,i);rn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||w0,r[a])}function RS(s){switch(s){case 5126:return lS;case 35664:return uS;case 35665:return fS;case 35666:return hS;case 35674:return dS;case 35675:return pS;case 35676:return mS;case 5124:case 35670:return gS;case 35667:case 35671:return _S;case 35668:case 35672:return xS;case 35669:case 35673:return vS;case 5125:return yS;case 36294:return bS;case 36295:return MS;case 36296:return SS;case 35678:case 36198:case 36298:case 36306:case 35682:return TS;case 35679:case 36299:case 36307:return ES;case 35680:case 36300:case 36308:case 36293:return wS;case 36289:case 36303:case 36311:case 36292:return AS}}class CS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cS(t.type)}}class PS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RS(t.type)}}class LS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const cu=/(\w+)(\])?(\[|\.)?/g;function xp(s,e){s.seq.push(e),s.map[e.id]=e}function DS(s,e,t){const n=s.name,i=n.length;for(cu.lastIndex=0;;){const r=cu.exec(n),a=cu.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){xp(t,l===void 0?new CS(o,s,e):new PS(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new LS(o),xp(t,f)),t=f}}}class Hc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);DS(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function vp(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const IS=37297;let NS=0;function US(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const yp=new Je;function FS(s){ht._getMatrix(yp,ht.workingColorSpace,s);const e=`mat3( ${yp.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(s)){case Qc:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function bp(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+US(s.getShaderSource(e),o)}else return r}function OS(s,e){const t=FS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function BS(s,e){let t;switch(e){case k_:t="Linear";break;case z_:t="Reinhard";break;case V_:t="Cineon";break;case $m:t="ACESFilmic";break;case G_:t="AgX";break;case W_:t="Neutral";break;case H_:t="Custom";break;default:Ue("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yc=new G;function kS(){ht.getLuminanceCoefficients(yc);const s=yc.x.toFixed(4),e=yc.y.toFixed(4),t=yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function VS(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function HS(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function no(s){return s!==""}function Mp(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gf(s){return s.replace(GS,XS)}const WS=new Map;function XS(s,e){let t=et[e];if(t===void 0){const n=WS.get(e);if(n!==void 0)t=et[n],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gf(t)}const qS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tp(s){return s.replace(qS,YS)}function YS(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ep(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ym?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Km?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===lr&&(e="SHADOWMAP_TYPE_VSM"),e}function jS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xa:case va:e="ENVMAP_TYPE_CUBE";break;case gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $S(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case va:e="ENVMAP_MODE_REFRACTION";break}return e}function ZS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case jm:e="ENVMAP_BLENDING_MULTIPLY";break;case O_:e="ENVMAP_BLENDING_MIX";break;case B_:e="ENVMAP_BLENDING_ADD";break}return e}function JS(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function QS(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=KS(t),l=jS(t),u=$S(t),f=ZS(t),h=JS(t),d=zS(t),_=VS(r),g=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(no).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(no).join(`
`),p.length>0&&(p+=`
`)):(m=[Ep(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),p=[Ep(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hr?"#define TONE_MAPPING":"",t.toneMapping!==Hr?et.tonemapping_pars_fragment:"",t.toneMapping!==Hr?BS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,OS("linearToOutputTexel",t.outputColorSpace),kS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(no).join(`
`)),a=Gf(a),a=Mp(a,t),a=Sp(a,t),o=Gf(o),o=Mp(o,t),o=Sp(o,t),a=Tp(a),o=Tp(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Sd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+a,b=M+p+o,w=vp(i,i.VERTEX_SHADER,y),S=vp(i,i.FRAGMENT_SHADER,b);i.attachShader(g,w),i.attachShader(g,S),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(C){if(s.debug.checkShaderErrors){const P=i.getProgramInfoLog(g)||"",N=i.getShaderInfoLog(w)||"",U=i.getShaderInfoLog(S)||"",V=P.trim(),B=N.trim(),K=U.trim();let W=!0,ee=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,w,S);else{const D=bp(i,w,"vertex"),ce=bp(i,S,"fragment");ot("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+D+`
`+ce)}else V!==""?Ue("WebGLProgram: Program Info Log:",V):(B===""||K==="")&&(ee=!1);ee&&(C.diagnostics={runnable:W,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:K,prefix:p}})}i.deleteShader(w),i.deleteShader(S),R=new Hc(i,g),x=HS(i,g)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,IS)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=NS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=S,this}let e1=0;class t1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new n1(e),t.set(e,n)),n}}class n1{constructor(e){this.id=e1++,this.code=e,this.usedTimes=0}}function i1(s,e,t,n,i,r,a){const o=new u0,c=new t1,l=new Set,u=[],f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,v,C,P,N){const U=P.fog,V=N.geometry,B=x.isMeshStandardMaterial?P.environment:null,K=(x.isMeshStandardMaterial?t:e).get(x.envMap||B),W=K&&K.mapping===gl?K.image.height:null,ee=_[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&Ue("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const D=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ce=D!==void 0?D.length:0;let Ae=0;V.morphAttributes.position!==void 0&&(Ae=1),V.morphAttributes.normal!==void 0&&(Ae=2),V.morphAttributes.color!==void 0&&(Ae=3);let Fe,Oe,qe,j;if(ee){const ve=zi[ee];Fe=ve.vertexShader,Oe=ve.fragmentShader}else Fe=x.vertexShader,Oe=x.fragmentShader,c.update(x),qe=c.getVertexShaderID(x),j=c.getFragmentShaderID(x);const $=s.getRenderTarget(),ae=s.state.buffers.depth.getReversed(),Te=N.isInstancedMesh===!0,Ee=N.isBatchedMesh===!0,Ve=!!x.map,dt=!!x.matcap,xe=!!K,Ye=!!x.aoMap,F=!!x.lightMap,Xe=!!x.bumpMap,H=!!x.normalMap,Qe=!!x.displacementMap,ye=!!x.emissiveMap,pt=!!x.metalnessMap,pe=!!x.roughnessMap,ze=x.anisotropy>0,L=x.clearcoat>0,E=x.dispersion>0,z=x.iridescence>0,J=x.sheen>0,Z=x.transmission>0,Y=ze&&!!x.anisotropyMap,be=L&&!!x.clearcoatMap,le=L&&!!x.clearcoatNormalMap,Pe=L&&!!x.clearcoatRoughnessMap,fe=z&&!!x.iridescenceMap,ne=z&&!!x.iridescenceThicknessMap,ie=J&&!!x.sheenColorMap,De=J&&!!x.sheenRoughnessMap,Le=!!x.specularMap,he=!!x.specularColorMap,Be=!!x.specularIntensityMap,I=Z&&!!x.transmissionMap,ue=Z&&!!x.thicknessMap,re=!!x.gradientMap,se=!!x.alphaMap,te=x.alphaTest>0,Q=!!x.alphaHash,Me=!!x.extensions;let ke=Hr;x.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ke=s.toneMapping);const gt={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:Fe,fragmentShader:Oe,defines:x.defines,customVertexShaderID:qe,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ee,batchingColor:Ee&&N._colorsTexture!==null,instancing:Te,instancingColor:Te&&N.instanceColor!==null,instancingMorph:Te&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Sn,alphaToCoverage:!!x.alphaToCoverage,map:Ve,matcap:dt,envMap:xe,envMapMode:xe&&K.mapping,envMapCubeUVHeight:W,aoMap:Ye,lightMap:F,bumpMap:Xe,normalMap:H,displacementMap:h&&Qe,emissiveMap:ye,normalMapObjectSpace:H&&x.normalMapType===$_,normalMapTangentSpace:H&&x.normalMapType===a0,metalnessMap:pt,roughnessMap:pe,anisotropy:ze,anisotropyMap:Y,clearcoat:L,clearcoatMap:be,clearcoatNormalMap:le,clearcoatRoughnessMap:Pe,dispersion:E,iridescence:z,iridescenceMap:fe,iridescenceThicknessMap:ne,sheen:J,sheenColorMap:ie,sheenRoughnessMap:De,specularMap:Le,specularColorMap:he,specularIntensityMap:Be,transmission:Z,transmissionMap:I,thicknessMap:ue,gradientMap:re,opaque:x.transparent===!1&&x.blending===aa&&x.alphaToCoverage===!1,alphaMap:se,alphaTest:te,alphaHash:Q,combine:x.combine,mapUv:Ve&&g(x.map.channel),aoMapUv:Ye&&g(x.aoMap.channel),lightMapUv:F&&g(x.lightMap.channel),bumpMapUv:Xe&&g(x.bumpMap.channel),normalMapUv:H&&g(x.normalMap.channel),displacementMapUv:Qe&&g(x.displacementMap.channel),emissiveMapUv:ye&&g(x.emissiveMap.channel),metalnessMapUv:pt&&g(x.metalnessMap.channel),roughnessMapUv:pe&&g(x.roughnessMap.channel),anisotropyMapUv:Y&&g(x.anisotropyMap.channel),clearcoatMapUv:be&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:De&&g(x.sheenRoughnessMap.channel),specularMapUv:Le&&g(x.specularMap.channel),specularColorMapUv:he&&g(x.specularColorMap.channel),specularIntensityMapUv:Be&&g(x.specularIntensityMap.channel),transmissionMapUv:I&&g(x.transmissionMap.channel),thicknessMapUv:ue&&g(x.thicknessMap.channel),alphaMapUv:se&&g(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(H||ze),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(Ve||se),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ae,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ae,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ve&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===Et,decodeVideoTextureEmissive:ye&&x.emissiveMap.isVideoTexture===!0&&ht.getTransfer(x.emissiveMap.colorSpace)===Et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Vi,flipSided:x.side===Wn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Me&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&x.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function p(x){const v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)v.push(C),v.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(M(v,x),y(v,x),v.push(s.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function M(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapCubeUVHeight),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.morphAttributeCount),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function y(x,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),x.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),x.push(o.mask)}function b(x){const v=_[x.type];let C;if(v){const P=zi[v];C=Wx.clone(P.uniforms)}else C=x.uniforms;return C}function w(x,v){let C;for(let P=0,N=u.length;P<N;P++){const U=u[P];if(U.cacheKey===v){C=U,++C.usedTimes;break}}return C===void 0&&(C=new QS(s,v,x,r),u.push(C)),C}function S(x){if(--x.usedTimes===0){const v=u.indexOf(x);u[v]=u[u.length-1],u.pop(),x.destroy()}}function T(x){c.remove(x)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:w,releaseProgram:S,releaseShaderCache:T,programs:u,dispose:R}}function r1(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function s1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function wp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ap(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f,h,d,_,g,m){let p=s[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},s[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function o(f,h,d,_,g,m){const p=a(f,h,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(f,h,d,_,g,m){const p=a(f,h,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(f,h){t.length>1&&t.sort(f||s1),n.length>1&&n.sort(h||wp),i.length>1&&i.sort(h||wp)}function u(){for(let f=e,h=s.length;f<h;f++){const d=s[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function a1(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ap,s.set(n,[a])):i>=r.length?(a=new Ap,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function o1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new $e};break;case"SpotLight":t={position:new G,direction:new G,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new G,halfWidth:new G,halfHeight:new G};break}return s[e.id]=t,t}}}function c1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let l1=0;function u1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function f1(s){const e=new o1,t=c1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);const i=new G,r=new tt,a=new tt;function o(l){let u=0,f=0,h=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,M=0,y=0,b=0,w=0,S=0,T=0;l.sort(u1);for(let x=0,v=l.length;x<v;x++){const C=l[x],P=C.color,N=C.intensity,U=C.distance,V=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=P.r*N,f+=P.g*N,h+=P.b*N;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],N);T++}else if(C.isDirectionalLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const K=C.shadow,W=t.get(C);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=C.shadow.matrix,M++}n.directional[d]=B,d++}else if(C.isSpotLight){const B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(P).multiplyScalar(N),B.distance=U,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[g]=B;const K=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,K.updateMatrices(C),C.castShadow&&S++),n.spotLightMatrix[g]=K.matrix,C.castShadow){const W=t.get(C);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=V,b++}g++}else if(C.isRectAreaLight){const B=e.get(C);B.color.copy(P).multiplyScalar(N),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=B,m++}else if(C.isPointLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){const K=C.shadow,W=t.get(C);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,n.pointShadow[_]=W,n.pointShadowMap[_]=V,n.pointShadowMatrix[_]=C.shadow.matrix,y++}n.point[_]=B,_++}else if(C.isHemisphereLight){const B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(N),B.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[p]=B,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const R=n.hash;(R.directionalLength!==d||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==y||R.numSpotShadows!==b||R.numSpotMaps!==w||R.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+w-S,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,R.directionalLength=d,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=y,R.numSpotShadows=b,R.numSpotMaps=w,R.numLightProbes=T,n.version=l1++)}function c(l,u){let f=0,h=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const y=l[p];if(y.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),f++}else if(y.isSpotLight){const b=n.spot[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const b=n.point[h];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Rp(s){const e=new f1(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function h1(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Rp(s),e.set(i,[o])):r>=a.length?(o=new Rp(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const d1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p1=`uniform sampler2D shadow_pass;
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
}`;function m1(s,e,t){let n=new Lh;const i=new ft,r=new ft,a=new _t,o=new lv({depthPacking:j_}),c=new uv,l={},u=t.maxTextureSize,f={[br]:Wn,[Wn]:br,[Vi]:Vi},h=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:d1,fragmentShader:p1}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new Ni;_.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ti(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ym;let p=this.type;this.render=function(S,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const x=s.getRenderTarget(),v=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),P=s.state;P.setBlending(gr),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const N=p!==lr&&this.type===lr,U=p===lr&&this.type!==lr;for(let V=0,B=S.length;V<B;V++){const K=S[V],W=K.shadow;if(W===void 0){Ue("WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ee=W.getFrameExtents();if(i.multiply(ee),r.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ee.x),i.x=r.x*ee.x,W.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ee.y),i.y=r.y*ee.y,W.mapSize.y=r.y)),W.map===null||N===!0||U===!0){const ce=this.type!==lr?{minFilter:On,magFilter:On}:{};W.map!==null&&W.map.dispose(),W.map=new Es(i.x,i.y,ce),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const D=W.getViewportCount();for(let ce=0;ce<D;ce++){const Ae=W.getViewport(ce);a.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),P.viewport(a),W.updateMatrices(K,ce),n=W.getFrustum(),b(T,R,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===lr&&M(W,R),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(x,v,C)};function M(S,T){const R=e.update(g);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Es(i.x,i.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(T,null,R,h,g,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(T,null,R,d,g,null)}function y(S,T,R,x){let v=null;const C=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)v=C;else if(v=R.isPointLight===!0?c:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const P=v.uuid,N=T.uuid;let U=l[P];U===void 0&&(U={},l[P]=U);let V=U[N];V===void 0&&(V=v.clone(),U[N]=V,T.addEventListener("dispose",w)),v=V}if(v.visible=T.visible,v.wireframe=T.wireframe,x===lr?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:f[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const P=s.properties.get(v);P.light=R}return v}function b(S,T,R,x,v){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===lr)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const N=e.update(S),U=S.material;if(Array.isArray(U)){const V=N.groups;for(let B=0,K=V.length;B<K;B++){const W=V[B],ee=U[W.materialIndex];if(ee&&ee.visible){const D=y(S,ee,x,v);S.onBeforeShadow(s,S,T,R,N,D,W),s.renderBufferDirect(R,null,N,D,S,W),S.onAfterShadow(s,S,T,R,N,D,W)}}}else if(U.visible){const V=y(S,U,x,v);S.onBeforeShadow(s,S,T,R,N,V,null),s.renderBufferDirect(R,null,N,V,S,null),S.onAfterShadow(s,S,T,R,N,V,null)}}const P=S.children;for(let N=0,U=P.length;N<U;N++)b(P[N],T,R,x,v)}function w(S){S.target.removeEventListener("dispose",w);for(const R in l){const x=l[R],v=S.target.uuid;v in x&&(x[v].dispose(),delete x[v])}}}const g1={[Qu]:ef,[tf]:sf,[nf]:af,[_a]:rf,[ef]:Qu,[sf]:tf,[af]:nf,[rf]:_a};function _1(s,e){function t(){let I=!1;const ue=new _t;let re=null;const se=new _t(0,0,0,0);return{setMask:function(te){re!==te&&!I&&(s.colorMask(te,te,te,te),re=te)},setLocked:function(te){I=te},setClear:function(te,Q,Me,ke,gt){gt===!0&&(te*=ke,Q*=ke,Me*=ke),ue.set(te,Q,Me,ke),se.equals(ue)===!1&&(s.clearColor(te,Q,Me,ke),se.copy(ue))},reset:function(){I=!1,re=null,se.set(-1,0,0,0)}}}function n(){let I=!1,ue=!1,re=null,se=null,te=null;return{setReversed:function(Q){if(ue!==Q){const Me=e.get("EXT_clip_control");Q?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ue=Q;const ke=te;te=null,this.setClear(ke)}},getReversed:function(){return ue},setTest:function(Q){Q?$(s.DEPTH_TEST):ae(s.DEPTH_TEST)},setMask:function(Q){re!==Q&&!I&&(s.depthMask(Q),re=Q)},setFunc:function(Q){if(ue&&(Q=g1[Q]),se!==Q){switch(Q){case Qu:s.depthFunc(s.NEVER);break;case ef:s.depthFunc(s.ALWAYS);break;case tf:s.depthFunc(s.LESS);break;case _a:s.depthFunc(s.LEQUAL);break;case nf:s.depthFunc(s.EQUAL);break;case rf:s.depthFunc(s.GEQUAL);break;case sf:s.depthFunc(s.GREATER);break;case af:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}se=Q}},setLocked:function(Q){I=Q},setClear:function(Q){te!==Q&&(ue&&(Q=1-Q),s.clearDepth(Q),te=Q)},reset:function(){I=!1,re=null,se=null,te=null,ue=!1}}}function i(){let I=!1,ue=null,re=null,se=null,te=null,Q=null,Me=null,ke=null,gt=null;return{setTest:function(ve){I||(ve?$(s.STENCIL_TEST):ae(s.STENCIL_TEST))},setMask:function(ve){ue!==ve&&!I&&(s.stencilMask(ve),ue=ve)},setFunc:function(ve,Ce,Ze){(re!==ve||se!==Ce||te!==Ze)&&(s.stencilFunc(ve,Ce,Ze),re=ve,se=Ce,te=Ze)},setOp:function(ve,Ce,Ze){(Q!==ve||Me!==Ce||ke!==Ze)&&(s.stencilOp(ve,Ce,Ze),Q=ve,Me=Ce,ke=Ze)},setLocked:function(ve){I=ve},setClear:function(ve){gt!==ve&&(s.clearStencil(ve),gt=ve)},reset:function(){I=!1,ue=null,re=null,se=null,te=null,Q=null,Me=null,ke=null,gt=null}}}const r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,d=[],_=null,g=!1,m=null,p=null,M=null,y=null,b=null,w=null,S=null,T=new $e(0,0,0),R=0,x=!1,v=null,C=null,P=null,N=null,U=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,K=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=K>=2);let ee=null,D={};const ce=s.getParameter(s.SCISSOR_BOX),Ae=s.getParameter(s.VIEWPORT),Fe=new _t().fromArray(ce),Oe=new _t().fromArray(Ae);function qe(I,ue,re,se){const te=new Uint8Array(4),Q=s.createTexture();s.bindTexture(I,Q),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Me=0;Me<re;Me++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,se,0,s.RGBA,s.UNSIGNED_BYTE,te):s.texImage2D(ue+Me,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,te);return Q}const j={};j[s.TEXTURE_2D]=qe(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=qe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=qe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=qe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(s.DEPTH_TEST),a.setFunc(_a),Xe(!1),H(pd),$(s.CULL_FACE),Ye(gr);function $(I){u[I]!==!0&&(s.enable(I),u[I]=!0)}function ae(I){u[I]!==!1&&(s.disable(I),u[I]=!1)}function Te(I,ue){return f[I]!==ue?(s.bindFramebuffer(I,ue),f[I]=ue,I===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ue),I===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ee(I,ue){let re=d,se=!1;if(I){re=h.get(ue),re===void 0&&(re=[],h.set(ue,re));const te=I.textures;if(re.length!==te.length||re[0]!==s.COLOR_ATTACHMENT0){for(let Q=0,Me=te.length;Q<Me;Q++)re[Q]=s.COLOR_ATTACHMENT0+Q;re.length=te.length,se=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,se=!0);se&&s.drawBuffers(re)}function Ve(I){return _!==I?(s.useProgram(I),_=I,!0):!1}const dt={[hs]:s.FUNC_ADD,[y_]:s.FUNC_SUBTRACT,[b_]:s.FUNC_REVERSE_SUBTRACT};dt[M_]=s.MIN,dt[S_]=s.MAX;const xe={[T_]:s.ZERO,[E_]:s.ONE,[w_]:s.SRC_COLOR,[Zu]:s.SRC_ALPHA,[D_]:s.SRC_ALPHA_SATURATE,[P_]:s.DST_COLOR,[R_]:s.DST_ALPHA,[A_]:s.ONE_MINUS_SRC_COLOR,[Ju]:s.ONE_MINUS_SRC_ALPHA,[L_]:s.ONE_MINUS_DST_COLOR,[C_]:s.ONE_MINUS_DST_ALPHA,[I_]:s.CONSTANT_COLOR,[N_]:s.ONE_MINUS_CONSTANT_COLOR,[U_]:s.CONSTANT_ALPHA,[F_]:s.ONE_MINUS_CONSTANT_ALPHA};function Ye(I,ue,re,se,te,Q,Me,ke,gt,ve){if(I===gr){g===!0&&(ae(s.BLEND),g=!1);return}if(g===!1&&($(s.BLEND),g=!0),I!==v_){if(I!==m||ve!==x){if((p!==hs||b!==hs)&&(s.blendEquation(s.FUNC_ADD),p=hs,b=hs),ve)switch(I){case aa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case md:s.blendFunc(s.ONE,s.ONE);break;case gd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _d:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ot("WebGLState: Invalid blending: ",I);break}else switch(I){case aa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case md:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case gd:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _d:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",I);break}M=null,y=null,w=null,S=null,T.set(0,0,0),R=0,m=I,x=ve}return}te=te||ue,Q=Q||re,Me=Me||se,(ue!==p||te!==b)&&(s.blendEquationSeparate(dt[ue],dt[te]),p=ue,b=te),(re!==M||se!==y||Q!==w||Me!==S)&&(s.blendFuncSeparate(xe[re],xe[se],xe[Q],xe[Me]),M=re,y=se,w=Q,S=Me),(ke.equals(T)===!1||gt!==R)&&(s.blendColor(ke.r,ke.g,ke.b,gt),T.copy(ke),R=gt),m=I,x=!1}function F(I,ue){I.side===Vi?ae(s.CULL_FACE):$(s.CULL_FACE);let re=I.side===Wn;ue&&(re=!re),Xe(re),I.blending===aa&&I.transparent===!1?Ye(gr):Ye(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const se=I.stencilWrite;o.setTest(se),se&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ye(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?$(s.SAMPLE_ALPHA_TO_COVERAGE):ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(I){v!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),v=I)}function H(I){I!==__?($(s.CULL_FACE),I!==C&&(I===pd?s.cullFace(s.BACK):I===x_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ae(s.CULL_FACE),C=I}function Qe(I){I!==P&&(B&&s.lineWidth(I),P=I)}function ye(I,ue,re){I?($(s.POLYGON_OFFSET_FILL),(N!==ue||U!==re)&&(s.polygonOffset(ue,re),N=ue,U=re)):ae(s.POLYGON_OFFSET_FILL)}function pt(I){I?$(s.SCISSOR_TEST):ae(s.SCISSOR_TEST)}function pe(I){I===void 0&&(I=s.TEXTURE0+V-1),ee!==I&&(s.activeTexture(I),ee=I)}function ze(I,ue,re){re===void 0&&(ee===null?re=s.TEXTURE0+V-1:re=ee);let se=D[re];se===void 0&&(se={type:void 0,texture:void 0},D[re]=se),(se.type!==I||se.texture!==ue)&&(ee!==re&&(s.activeTexture(re),ee=re),s.bindTexture(I,ue||j[I]),se.type=I,se.texture=ue)}function L(){const I=D[ee];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function z(){try{s.compressedTexImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function J(){try{s.texSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Z(){try{s.texSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function be(){try{s.compressedTexSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function le(){try{s.texStorage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Pe(){try{s.texStorage3D(...arguments)}catch(I){I("WebGLState:",I)}}function fe(){try{s.texImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function ne(){try{s.texImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function ie(I){Fe.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Fe.copy(I))}function De(I){Oe.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Oe.copy(I))}function Le(I,ue){let re=l.get(ue);re===void 0&&(re=new WeakMap,l.set(ue,re));let se=re.get(I);se===void 0&&(se=s.getUniformBlockIndex(ue,I.name),re.set(I,se))}function he(I,ue){const se=l.get(ue).get(I);c.get(ue)!==se&&(s.uniformBlockBinding(ue,se,I.__bindingPointIndex),c.set(ue,se))}function Be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ee=null,D={},f={},h=new WeakMap,d=[],_=null,g=!1,m=null,p=null,M=null,y=null,b=null,w=null,S=null,T=new $e(0,0,0),R=0,x=!1,v=null,C=null,P=null,N=null,U=null,Fe.set(0,0,s.canvas.width,s.canvas.height),Oe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:ae,bindFramebuffer:Te,drawBuffers:Ee,useProgram:Ve,setBlending:Ye,setMaterial:F,setFlipSided:Xe,setCullFace:H,setLineWidth:Qe,setPolygonOffset:ye,setScissorTest:pt,activeTexture:pe,bindTexture:ze,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:z,texImage2D:fe,texImage3D:ne,updateUBOMapping:Le,uniformBlockBinding:he,texStorage2D:le,texStorage3D:Pe,texSubImage2D:J,texSubImage3D:Z,compressedTexSubImage2D:Y,compressedTexSubImage3D:be,scissor:ie,viewport:De,reset:Be}}function x1(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,E){return d?new OffscreenCanvas(L,E):Do("canvas")}function g(L,E,z){let J=1;const Z=ze(L);if((Z.width>z||Z.height>z)&&(J=z/Math.max(Z.width,Z.height)),J<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Y=Math.floor(J*Z.width),be=Math.floor(J*Z.height);f===void 0&&(f=_(Y,be));const le=E?_(Y,be):f;return le.width=Y,le.height=be,le.getContext("2d").drawImage(L,0,0,Y,be),Ue("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+be+")."),le}else return"data"in L&&Ue("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){s.generateMipmap(L)}function M(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(L,E,z,J,Z=!1){if(L!==null){if(s[L]!==void 0)return s[L];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Y=E;if(E===s.RED&&(z===s.FLOAT&&(Y=s.R32F),z===s.HALF_FLOAT&&(Y=s.R16F),z===s.UNSIGNED_BYTE&&(Y=s.R8)),E===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.R8UI),z===s.UNSIGNED_SHORT&&(Y=s.R16UI),z===s.UNSIGNED_INT&&(Y=s.R32UI),z===s.BYTE&&(Y=s.R8I),z===s.SHORT&&(Y=s.R16I),z===s.INT&&(Y=s.R32I)),E===s.RG&&(z===s.FLOAT&&(Y=s.RG32F),z===s.HALF_FLOAT&&(Y=s.RG16F),z===s.UNSIGNED_BYTE&&(Y=s.RG8)),E===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RG8UI),z===s.UNSIGNED_SHORT&&(Y=s.RG16UI),z===s.UNSIGNED_INT&&(Y=s.RG32UI),z===s.BYTE&&(Y=s.RG8I),z===s.SHORT&&(Y=s.RG16I),z===s.INT&&(Y=s.RG32I)),E===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),z===s.UNSIGNED_INT&&(Y=s.RGB32UI),z===s.BYTE&&(Y=s.RGB8I),z===s.SHORT&&(Y=s.RGB16I),z===s.INT&&(Y=s.RGB32I)),E===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),z===s.UNSIGNED_INT&&(Y=s.RGBA32UI),z===s.BYTE&&(Y=s.RGBA8I),z===s.SHORT&&(Y=s.RGBA16I),z===s.INT&&(Y=s.RGBA32I)),E===s.RGB&&(z===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),E===s.RGBA){const be=Z?Qc:ht.getTransfer(J);z===s.FLOAT&&(Y=s.RGBA32F),z===s.HALF_FLOAT&&(Y=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Y=be===Et?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function b(L,E){let z;return L?E===null||E===Ts||E===Ao?z=s.DEPTH24_STENCIL8:E===Gn?z=s.DEPTH32F_STENCIL8:E===wo&&(z=s.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ts||E===Ao?z=s.DEPTH_COMPONENT24:E===Gn?z=s.DEPTH_COMPONENT32F:E===wo&&(z=s.DEPTH_COMPONENT16),z}function w(L,E){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==On&&L.minFilter!==Jt?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function S(L){const E=L.target;E.removeEventListener("dispose",S),R(E),E.isVideoTexture&&u.delete(E)}function T(L){const E=L.target;E.removeEventListener("dispose",T),v(E)}function R(L){const E=n.get(L);if(E.__webglInit===void 0)return;const z=L.source,J=h.get(z);if(J){const Z=J[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&x(L),Object.keys(J).length===0&&h.delete(z)}n.remove(L)}function x(L){const E=n.get(L);s.deleteTexture(E.__webglTexture);const z=L.source,J=h.get(z);delete J[E.__cacheKey],a.memory.textures--}function v(L){const E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let Z=0;Z<E.__webglFramebuffer[J].length;Z++)s.deleteFramebuffer(E.__webglFramebuffer[J][Z]);else s.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)s.deleteFramebuffer(E.__webglFramebuffer[J]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=L.textures;for(let J=0,Z=z.length;J<Z;J++){const Y=n.get(z[J]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(z[J])}n.remove(L)}let C=0;function P(){C=0}function N(){const L=C;return L>=i.maxTextures&&Ue("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),C+=1,L}function U(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function V(L,E){const z=n.get(L);if(L.isVideoTexture&&pt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&z.__version!==L.version){const J=L.image;if(J===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{j(z,L,E);return}}else L.isExternalTexture&&(z.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+E)}function B(L,E){const z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){j(z,L,E);return}else L.isExternalTexture&&(z.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+E)}function K(L,E){const z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){j(z,L,E);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+E)}function W(L,E){const z=n.get(L);if(L.version>0&&z.__version!==L.version){$(z,L,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+E)}const ee={[ya]:s.REPEAT,[xi]:s.CLAMP_TO_EDGE,[Jc]:s.MIRRORED_REPEAT},D={[On]:s.NEAREST,[Jm]:s.NEAREST_MIPMAP_NEAREST,[to]:s.NEAREST_MIPMAP_LINEAR,[Jt]:s.LINEAR,[Oc]:s.LINEAR_MIPMAP_NEAREST,[Gi]:s.LINEAR_MIPMAP_LINEAR},ce={[Z_]:s.NEVER,[ix]:s.ALWAYS,[J_]:s.LESS,[o0]:s.LEQUAL,[Q_]:s.EQUAL,[nx]:s.GEQUAL,[ex]:s.GREATER,[tx]:s.NOTEQUAL};function Ae(L,E){if(E.type===Gn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Jt||E.magFilter===Oc||E.magFilter===to||E.magFilter===Gi||E.minFilter===Jt||E.minFilter===Oc||E.minFilter===to||E.minFilter===Gi)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ee[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ee[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ee[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,D[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,D[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===On||E.minFilter!==to&&E.minFilter!==Gi||E.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Fe(L,E){let z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",S));const J=E.source;let Z=h.get(J);Z===void 0&&(Z={},h.set(J,Z));const Y=U(E);if(Y!==L.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[Y].usedTimes++;const be=Z[L.__cacheKey];be!==void 0&&(Z[L.__cacheKey].usedTimes--,be.usedTimes===0&&x(E)),L.__cacheKey=Y,L.__webglTexture=Z[Y].texture}return z}function Oe(L,E,z){return Math.floor(Math.floor(L/z)/E)}function qe(L,E,z,J){const Y=L.updateRanges;if(Y.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,z,J,E.data);else{Y.sort((ne,ie)=>ne.start-ie.start);let be=0;for(let ne=1;ne<Y.length;ne++){const ie=Y[be],De=Y[ne],Le=ie.start+ie.count,he=Oe(De.start,E.width,4),Be=Oe(ie.start,E.width,4);De.start<=Le+1&&he===Be&&Oe(De.start+De.count-1,E.width,4)===he?ie.count=Math.max(ie.count,De.start+De.count-ie.start):(++be,Y[be]=De)}Y.length=be+1;const le=s.getParameter(s.UNPACK_ROW_LENGTH),Pe=s.getParameter(s.UNPACK_SKIP_PIXELS),fe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let ne=0,ie=Y.length;ne<ie;ne++){const De=Y[ne],Le=Math.floor(De.start/4),he=Math.ceil(De.count/4),Be=Le%E.width,I=Math.floor(Le/E.width),ue=he,re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Be),s.pixelStorei(s.UNPACK_SKIP_ROWS,I),t.texSubImage2D(s.TEXTURE_2D,0,Be,I,ue,re,z,J,E.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,le),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Pe),s.pixelStorei(s.UNPACK_SKIP_ROWS,fe)}}function j(L,E,z){let J=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=s.TEXTURE_3D);const Z=Fe(L,E),Y=E.source;t.bindTexture(J,L.__webglTexture,s.TEXTURE0+z);const be=n.get(Y);if(Y.version!==be.__version||Z===!0){t.activeTexture(s.TEXTURE0+z);const le=ht.getPrimaries(ht.workingColorSpace),Pe=E.colorSpace===Ur?null:ht.getPrimaries(E.colorSpace),fe=E.colorSpace===Ur||le===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let ne=g(E.image,!1,i.maxTextureSize);ne=pe(E,ne);const ie=r.convert(E.format,E.colorSpace),De=r.convert(E.type);let Le=y(E.internalFormat,ie,De,E.colorSpace,E.isVideoTexture);Ae(J,E);let he;const Be=E.mipmaps,I=E.isVideoTexture!==!0,ue=be.__version===void 0||Z===!0,re=Y.dataReady,se=w(E,ne);if(E.isDepthTexture)Le=b(E.format===Co,E.type),ue&&(I?t.texStorage2D(s.TEXTURE_2D,1,Le,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,Le,ne.width,ne.height,0,ie,De,null));else if(E.isDataTexture)if(Be.length>0){I&&ue&&t.texStorage2D(s.TEXTURE_2D,se,Le,Be[0].width,Be[0].height);for(let te=0,Q=Be.length;te<Q;te++)he=Be[te],I?re&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,he.width,he.height,ie,De,he.data):t.texImage2D(s.TEXTURE_2D,te,Le,he.width,he.height,0,ie,De,he.data);E.generateMipmaps=!1}else I?(ue&&t.texStorage2D(s.TEXTURE_2D,se,Le,ne.width,ne.height),re&&qe(E,ne,ie,De)):t.texImage2D(s.TEXTURE_2D,0,Le,ne.width,ne.height,0,ie,De,ne.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){I&&ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,se,Le,Be[0].width,Be[0].height,ne.depth);for(let te=0,Q=Be.length;te<Q;te++)if(he=Be[te],E.format!==vi)if(ie!==null)if(I){if(re)if(E.layerUpdates.size>0){const Me=ap(he.width,he.height,E.format,E.type);for(const ke of E.layerUpdates){const gt=he.data.subarray(ke*Me/he.data.BYTES_PER_ELEMENT,(ke+1)*Me/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,ke,he.width,he.height,1,ie,gt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ne.depth,ie,he.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,Le,he.width,he.height,ne.depth,0,he.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?re&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ne.depth,ie,De,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,Le,he.width,he.height,ne.depth,0,ie,De,he.data)}else{I&&ue&&t.texStorage2D(s.TEXTURE_2D,se,Le,Be[0].width,Be[0].height);for(let te=0,Q=Be.length;te<Q;te++)he=Be[te],E.format!==vi?ie!==null?I?re&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,he.width,he.height,ie,he.data):t.compressedTexImage2D(s.TEXTURE_2D,te,Le,he.width,he.height,0,he.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?re&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,he.width,he.height,ie,De,he.data):t.texImage2D(s.TEXTURE_2D,te,Le,he.width,he.height,0,ie,De,he.data)}else if(E.isDataArrayTexture)if(I){if(ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,se,Le,ne.width,ne.height,ne.depth),re)if(E.layerUpdates.size>0){const te=ap(ne.width,ne.height,E.format,E.type);for(const Q of E.layerUpdates){const Me=ne.data.subarray(Q*te/ne.data.BYTES_PER_ELEMENT,(Q+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,ne.width,ne.height,1,ie,De,Me)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ie,De,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,ne.width,ne.height,ne.depth,0,ie,De,ne.data);else if(E.isData3DTexture)I?(ue&&t.texStorage3D(s.TEXTURE_3D,se,Le,ne.width,ne.height,ne.depth),re&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ie,De,ne.data)):t.texImage3D(s.TEXTURE_3D,0,Le,ne.width,ne.height,ne.depth,0,ie,De,ne.data);else if(E.isFramebufferTexture){if(ue)if(I)t.texStorage2D(s.TEXTURE_2D,se,Le,ne.width,ne.height);else{let te=ne.width,Q=ne.height;for(let Me=0;Me<se;Me++)t.texImage2D(s.TEXTURE_2D,Me,Le,te,Q,0,ie,De,null),te>>=1,Q>>=1}}else if(Be.length>0){if(I&&ue){const te=ze(Be[0]);t.texStorage2D(s.TEXTURE_2D,se,Le,te.width,te.height)}for(let te=0,Q=Be.length;te<Q;te++)he=Be[te],I?re&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ie,De,he):t.texImage2D(s.TEXTURE_2D,te,Le,ie,De,he);E.generateMipmaps=!1}else if(I){if(ue){const te=ze(ne);t.texStorage2D(s.TEXTURE_2D,se,Le,te.width,te.height)}re&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie,De,ne)}else t.texImage2D(s.TEXTURE_2D,0,Le,ie,De,ne);m(E)&&p(J),be.__version=Y.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function $(L,E,z){if(E.image.length!==6)return;const J=Fe(L,E),Z=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+z);const Y=n.get(Z);if(Z.version!==Y.__version||J===!0){t.activeTexture(s.TEXTURE0+z);const be=ht.getPrimaries(ht.workingColorSpace),le=E.colorSpace===Ur?null:ht.getPrimaries(E.colorSpace),Pe=E.colorSpace===Ur||be===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const fe=E.isCompressedTexture||E.image[0].isCompressedTexture,ne=E.image[0]&&E.image[0].isDataTexture,ie=[];for(let Q=0;Q<6;Q++)!fe&&!ne?ie[Q]=g(E.image[Q],!0,i.maxCubemapSize):ie[Q]=ne?E.image[Q].image:E.image[Q],ie[Q]=pe(E,ie[Q]);const De=ie[0],Le=r.convert(E.format,E.colorSpace),he=r.convert(E.type),Be=y(E.internalFormat,Le,he,E.colorSpace),I=E.isVideoTexture!==!0,ue=Y.__version===void 0||J===!0,re=Z.dataReady;let se=w(E,De);Ae(s.TEXTURE_CUBE_MAP,E);let te;if(fe){I&&ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,se,Be,De.width,De.height);for(let Q=0;Q<6;Q++){te=ie[Q].mipmaps;for(let Me=0;Me<te.length;Me++){const ke=te[Me];E.format!==vi?Le!==null?I?re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,0,0,ke.width,ke.height,Le,ke.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,Be,ke.width,ke.height,0,ke.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,0,0,ke.width,ke.height,Le,he,ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,Be,ke.width,ke.height,0,Le,he,ke.data)}}}else{if(te=E.mipmaps,I&&ue){te.length>0&&se++;const Q=ze(ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,se,Be,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ne){I?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ie[Q].width,ie[Q].height,Le,he,ie[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Be,ie[Q].width,ie[Q].height,0,Le,he,ie[Q].data);for(let Me=0;Me<te.length;Me++){const gt=te[Me].image[Q].image;I?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,0,0,gt.width,gt.height,Le,he,gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,Be,gt.width,gt.height,0,Le,he,gt.data)}}else{I?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Le,he,ie[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Be,Le,he,ie[Q]);for(let Me=0;Me<te.length;Me++){const ke=te[Me];I?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,0,0,Le,he,ke.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,Be,Le,he,ke.image[Q])}}}m(E)&&p(s.TEXTURE_CUBE_MAP),Y.__version=Z.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ae(L,E,z,J,Z,Y){const be=r.convert(z.format,z.colorSpace),le=r.convert(z.type),Pe=y(z.internalFormat,be,le,z.colorSpace),fe=n.get(E),ne=n.get(z);if(ne.__renderTarget=E,!fe.__hasExternalTextures){const ie=Math.max(1,E.width>>Y),De=Math.max(1,E.height>>Y);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,Y,Pe,ie,De,E.depth,0,be,le,null):t.texImage2D(Z,Y,Pe,ie,De,0,be,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),ye(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Z,ne.__webglTexture,0,Qe(E)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,Z,ne.__webglTexture,Y),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Te(L,E,z){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const J=E.depthTexture,Z=J&&J.isDepthTexture?J.type:null,Y=b(E.stencilBuffer,Z),be=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=Qe(E);ye(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,Y,E.width,E.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,Y,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Y,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,L)}else{const J=E.textures;for(let Z=0;Z<J.length;Z++){const Y=J[Z],be=r.convert(Y.format,Y.colorSpace),le=r.convert(Y.type),Pe=y(Y.internalFormat,be,le,Y.colorSpace),fe=Qe(E);z&&ye(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,Pe,E.width,E.height):ye(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,Pe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Pe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(E.depthTexture);J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V(E.depthTexture,0);const Z=J.__webglTexture,Y=Qe(E);if(E.depthTexture.format===Ro)ye(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(E.depthTexture.format===Co)ye(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ve(L){const E=n.get(L),z=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const J=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const Z=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",Z)};J.addEventListener("dispose",Z),E.__depthDisposeCallback=Z}E.__boundDepthTexture=J}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const J=L.texture.mipmaps;J&&J.length>0?Ee(E.__webglFramebuffer[0],L):Ee(E.__webglFramebuffer,L)}else if(z){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=s.createRenderbuffer(),Te(E.__webglDepthbuffer[J],L,!1);else{const Z=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Y)}}else{const J=L.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Te(E.__webglDepthbuffer,L,!1);else{const Z=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Y)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(L,E,z){const J=n.get(L);E!==void 0&&ae(J.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Ve(L)}function xe(L){const E=L.texture,z=n.get(L),J=n.get(E);L.addEventListener("dispose",T);const Z=L.textures,Y=L.isWebGLCubeRenderTarget===!0,be=Z.length>1;if(be||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=E.version,a.memory.textures++),Y){z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[le]=[];for(let Pe=0;Pe<E.mipmaps.length;Pe++)z.__webglFramebuffer[le][Pe]=s.createFramebuffer()}else z.__webglFramebuffer[le]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)z.__webglFramebuffer[le]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(be)for(let le=0,Pe=Z.length;le<Pe;le++){const fe=n.get(Z[le]);fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture(),a.memory.textures++)}if(L.samples>0&&ye(L)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let le=0;le<Z.length;le++){const Pe=Z[le];z.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[le]);const fe=r.convert(Pe.format,Pe.colorSpace),ne=r.convert(Pe.type),ie=y(Pe.internalFormat,fe,ne,Pe.colorSpace,L.isXRRenderTarget===!0),De=Qe(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,ie,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,z.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Te(z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),Ae(s.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)ae(z.__webglFramebuffer[le][Pe],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe);else ae(z.__webglFramebuffer[le],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(E)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let le=0,Pe=Z.length;le<Pe;le++){const fe=Z[le],ne=n.get(fe);let ie=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ie=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,ne.__webglTexture),Ae(ie,fe),ae(z.__webglFramebuffer,L,fe,s.COLOR_ATTACHMENT0+le,ie,0),m(fe)&&p(ie)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(le=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,J.__webglTexture),Ae(le,E),E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)ae(z.__webglFramebuffer[Pe],L,E,s.COLOR_ATTACHMENT0,le,Pe);else ae(z.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,le,0);m(E)&&p(le),t.unbindTexture()}L.depthBuffer&&Ve(L)}function Ye(L){const E=L.textures;for(let z=0,J=E.length;z<J;z++){const Z=E[z];if(m(Z)){const Y=M(L),be=n.get(Z).__webglTexture;t.bindTexture(Y,be),p(Y),t.unbindTexture()}}}const F=[],Xe=[];function H(L){if(L.samples>0){if(ye(L)===!1){const E=L.textures,z=L.width,J=L.height;let Z=s.COLOR_BUFFER_BIT;const Y=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=n.get(L),le=E.length>1;if(le)for(let fe=0;fe<E.length;fe++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Pe=L.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let fe=0;fe<E.length;fe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[fe]);const ne=n.get(E[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ne,0)}s.blitFramebuffer(0,0,z,J,0,0,z,J,Z,s.NEAREST),c===!0&&(F.length=0,Xe.length=0,F.push(s.COLOR_ATTACHMENT0+fe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(F.push(Y),Xe.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Xe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,F))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let fe=0;fe<E.length;fe++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,be.__webglColorRenderbuffer[fe]);const ne=n.get(E[fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,ne,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Qe(L){return Math.min(i.maxSamples,L.samples)}function ye(L){const E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function pt(L){const E=a.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function pe(L,E){const z=L.colorSpace,J=L.format,Z=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||z!==Sn&&z!==Ur&&(ht.getTransfer(z)===Et?(J!==vi||Z!==Zi)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",z)),E}function ze(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=P,this.setTexture2D=V,this.setTexture2DArray=B,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=dt,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ye}function v1(s,e){function t(n,i=Ur){let r;const a=ht.getTransfer(i);if(n===Zi)return s.UNSIGNED_BYTE;if(n===yh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===bh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===t0)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===n0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qm)return s.BYTE;if(n===e0)return s.SHORT;if(n===wo)return s.UNSIGNED_SHORT;if(n===vh)return s.INT;if(n===Ts)return s.UNSIGNED_INT;if(n===Gn)return s.FLOAT;if(n===Wi)return s.HALF_FLOAT;if(n===i0)return s.ALPHA;if(n===r0)return s.RGB;if(n===vi)return s.RGBA;if(n===Ro)return s.DEPTH_COMPONENT;if(n===Co)return s.DEPTH_STENCIL;if(n===Mh)return s.RED;if(n===Sh)return s.RED_INTEGER;if(n===Th)return s.RG;if(n===Eh)return s.RG_INTEGER;if(n===wh)return s.RGBA_INTEGER;if(n===Bc||n===kc||n===zc||n===Vc)if(a===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lf||n===uf||n===ff||n===hf)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ff)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hf)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===df||n===pf||n===mf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===df||n===pf)return a===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mf)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gf||n===_f||n===xf||n===vf||n===yf||n===bf||n===Mf||n===Sf||n===Tf||n===Ef||n===wf||n===Af||n===Rf||n===Cf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gf)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_f)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xf)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vf)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yf)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bf)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mf)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sf)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tf)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ef)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wf)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Af)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rf)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cf)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pf||n===Lf||n===Df)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Pf)return a===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Df)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===If||n===Nf||n===Uf||n===Ff)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===If)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ff)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ao?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const y1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b1=`
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

}`;class M1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new b0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mr({vertexShader:y1,fragmentShader:b1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ti(new vl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S1 extends Ia{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,_=null;const g=typeof XRWebGLBinding<"u",m=new M1,p={},M=t.getContextAttributes();let y=null,b=null;const w=[],S=[],T=new ft;let R=null;const x=new In;x.viewport=new _t;const v=new In;v.viewport=new _t;const C=[x,v],P=new Iv;let N=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let $=w[j];return $===void 0&&($=new $l,w[j]=$),$.getTargetRaySpace()},this.getControllerGrip=function(j){let $=w[j];return $===void 0&&($=new $l,w[j]=$),$.getGripSpace()},this.getHand=function(j){let $=w[j];return $===void 0&&($=new $l,w[j]=$),$.getHandSpace()};function V(j){const $=S.indexOf(j.inputSource);if($===-1)return;const ae=w[$];ae!==void 0&&(ae.update(j.inputSource,j.frame,l||a),ae.dispatchEvent({type:j.type,data:j.inputSource}))}function B(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",K);for(let j=0;j<w.length;j++){const $=S[j];$!==null&&(S[j]=null,w[j].disconnect($))}N=null,U=null,m.reset();for(const j in p)delete p[j];e.setRenderTarget(y),d=null,h=null,f=null,i=null,b=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",B),i.addEventListener("inputsourceschange",K),M.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(T),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Te=null,Ee=null;M.depth&&(Ee=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=M.stencil?Co:Ro,Te=M.stencil?Ao:Ts);const Ve={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ve),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Es(h.textureWidth,h.textureHeight,{format:vi,type:Zi,depthTexture:new y0(h.textureWidth,h.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ae={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Es(d.framebufferWidth,d.framebufferHeight,{format:vi,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),qe.setContext(i),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(j){for(let $=0;$<j.removed.length;$++){const ae=j.removed[$],Te=S.indexOf(ae);Te>=0&&(S[Te]=null,w[Te].disconnect(ae))}for(let $=0;$<j.added.length;$++){const ae=j.added[$];let Te=S.indexOf(ae);if(Te===-1){for(let Ve=0;Ve<w.length;Ve++)if(Ve>=S.length){S.push(ae),Te=Ve;break}else if(S[Ve]===null){S[Ve]=ae,Te=Ve;break}if(Te===-1)break}const Ee=w[Te];Ee&&Ee.connect(ae)}}const W=new G,ee=new G;function D(j,$,ae){W.setFromMatrixPosition($.matrixWorld),ee.setFromMatrixPosition(ae.matrixWorld);const Te=W.distanceTo(ee),Ee=$.projectionMatrix.elements,Ve=ae.projectionMatrix.elements,dt=Ee[14]/(Ee[10]-1),xe=Ee[14]/(Ee[10]+1),Ye=(Ee[9]+1)/Ee[5],F=(Ee[9]-1)/Ee[5],Xe=(Ee[8]-1)/Ee[0],H=(Ve[8]+1)/Ve[0],Qe=dt*Xe,ye=dt*H,pt=Te/(-Xe+H),pe=pt*-Xe;if($.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(pe),j.translateZ(pt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ee[10]===-1)j.projectionMatrix.copy($.projectionMatrix),j.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const ze=dt+pt,L=xe+pt,E=Qe-pe,z=ye+(Te-pe),J=Ye*xe/L*ze,Z=F*xe/L*ze;j.projectionMatrix.makePerspective(E,z,J,Z,ze,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ce(j,$){$===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices($.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let $=j.near,ae=j.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),P.near=v.near=x.near=$,P.far=v.far=x.far=ae,(N!==P.near||U!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),N=P.near,U=P.far),P.layers.mask=j.layers.mask|6,x.layers.mask=P.layers.mask&3,v.layers.mask=P.layers.mask&5;const Te=j.parent,Ee=P.cameras;ce(P,Te);for(let Ve=0;Ve<Ee.length;Ve++)ce(Ee[Ve],Te);Ee.length===2?D(P,x,v):P.projectionMatrix.copy(x.projectionMatrix),Ae(j,P,Te)};function Ae(j,$,ae){ae===null?j.matrix.copy($.matrixWorld):(j.matrix.copy(ae.matrixWorld),j.matrix.invert(),j.matrix.multiply($.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy($.projectionMatrix),j.projectionMatrixInverse.copy($.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ba*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(j){return p[j]};let Fe=null;function Oe(j,$){if(u=$.getViewerPose(l||a),_=$,u!==null){const ae=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let Te=!1;ae.length!==P.cameras.length&&(P.cameras.length=0,Te=!0);for(let xe=0;xe<ae.length;xe++){const Ye=ae[xe];let F=null;if(d!==null)F=d.getViewport(Ye);else{const H=f.getViewSubImage(h,Ye);F=H.viewport,xe===0&&(e.setRenderTargetTextures(b,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(b))}let Xe=C[xe];Xe===void 0&&(Xe=new In,Xe.layers.enable(xe),Xe.viewport=new _t,C[xe]=Xe),Xe.matrix.fromArray(Ye.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ye.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(F.x,F.y,F.width,F.height),xe===0&&(P.matrix.copy(Xe.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Te===!0&&P.cameras.push(Xe)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){f=n.getBinding();const xe=f.getDepthInformation(ae[0]);xe&&xe.isValid&&xe.texture&&m.init(xe,i.renderState)}if(Ee&&Ee.includes("camera-access")&&g){e.state.unbindTexture(),f=n.getBinding();for(let xe=0;xe<ae.length;xe++){const Ye=ae[xe].camera;if(Ye){let F=p[Ye];F||(F=new b0,p[Ye]=F);const Xe=f.getCameraImage(Ye);F.sourceTexture=Xe}}}}for(let ae=0;ae<w.length;ae++){const Te=S[ae],Ee=w[ae];Te!==null&&Ee!==void 0&&Ee.update(Te,$,l||a)}Fe&&Fe(j,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),_=null}const qe=new T0;qe.setAnimationLoop(Oe),this.setAnimationLoop=function(j){Fe=j},this.dispose=function(){}}}const rs=new Ji,T1=new tt;function E1(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,p0(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,b=M.envMapRotation;y&&(m.envMap.value=y,rs.copy(b),rs.x*=-1,rs.y*=-1,rs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),m.envMapRotation.value.setFromMatrix4(T1.makeRotationFromEuler(rs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function w1(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const b=y.program;n.uniformBlockBinding(M,b)}function l(M,y){let b=i[M.id];b===void 0&&(_(M),b=u(M),i[M.id]=b,M.addEventListener("dispose",m));const w=y.program;n.updateUBOMapping(M,w);const S=e.render.frame;r[M.id]!==S&&(h(M),r[M.id]=S)}function u(M){const y=f();M.__bindingPointIndex=y;const b=s.createBuffer(),w=M.__size,S=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,w,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,b),b}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const y=i[M.id],b=M.uniforms,w=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let S=0,T=b.length;S<T;S++){const R=Array.isArray(b[S])?b[S]:[b[S]];for(let x=0,v=R.length;x<v;x++){const C=R[x];if(d(C,S,x,w)===!0){const P=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let U=0;for(let V=0;V<N.length;V++){const B=N[V],K=g(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,P+U,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,U),U+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,P,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,y,b,w){const S=M.value,T=y+"_"+b;if(w[T]===void 0)return typeof S=="number"||typeof S=="boolean"?w[T]=S:w[T]=S.clone(),!0;{const R=w[T];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return w[T]=S,!0}else if(R.equals(S)===!1)return R.copy(S),!0}return!1}function _(M){const y=M.uniforms;let b=0;const w=16;for(let T=0,R=y.length;T<R;T++){const x=Array.isArray(y[T])?y[T]:[y[T]];for(let v=0,C=x.length;v<C;v++){const P=x[v],N=Array.isArray(P.value)?P.value:[P.value];for(let U=0,V=N.length;U<V;U++){const B=N[U],K=g(B),W=b%w,ee=W%K.boundary,D=W+ee;b+=ee,D!==0&&w-D<K.storage&&(b+=w-D),P.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=K.storage}}}const S=b%w;return S>0&&(b+=w-S),M.__size=b,M.__cache={},this}function g(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ue("WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}const A1=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let cr=null;function R1(){return cr===null&&(cr=new xl(A1,32,32,Th,Wi),cr.minFilter=Jt,cr.magFilter=Jt,cr.wrapS=xi,cr.wrapT=xi,cr.generateMipmaps=!1,cr.needsUpdate=!0),cr}class C1{constructor(e={}){const{canvas:t=rx(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const _=new Set([wh,Eh,Sh]),g=new Set([Zi,Ts,wo,Ao,yh,bh]),m=new Uint32Array(4),p=new Int32Array(4);let M=null,y=null;const b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let T=!1;this._outputColorSpace=un;let R=0,x=0,v=null,C=-1,P=null;const N=new _t,U=new _t;let V=null;const B=new $e(0);let K=0,W=t.width,ee=t.height,D=1,ce=null,Ae=null;const Fe=new _t(0,0,W,ee),Oe=new _t(0,0,W,ee);let qe=!1;const j=new Lh;let $=!1,ae=!1;const Te=new tt,Ee=new G,Ve=new _t,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function Ye(){return v===null?D:1}let F=n;function Xe(A,k){return t.getContext(A,k)}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xh}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",Me,!1),F===null){const k="webgl2";if(F=Xe(k,A),F===null)throw Xe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw A("WebGLRenderer: "+A.message),A}let H,Qe,ye,pt,pe,ze,L,E,z,J,Z,Y,be,le,Pe,fe,ne,ie,De,Le,he,Be,I,ue;function re(){H=new OM(F),H.init(),Be=new v1(F,H),Qe=new RM(F,H,e,Be),ye=new _1(F,H),Qe.reversedDepthBuffer&&h&&ye.buffers.depth.setReversed(!0),pt=new zM(F),pe=new r1,ze=new x1(F,H,ye,pe,Qe,Be,pt),L=new PM(S),E=new FM(S),z=new Wv(F),I=new wM(F,z),J=new BM(F,z,pt,I),Z=new HM(F,J,z,pt),De=new VM(F,Qe,ze),fe=new CM(pe),Y=new i1(S,L,E,H,Qe,I,fe),be=new E1(S,pe),le=new a1,Pe=new h1(H),ie=new EM(S,L,E,ye,Z,d,c),ne=new m1(S,Z,Qe),ue=new w1(F,pt,Qe,ye),Le=new AM(F,H,pt),he=new kM(F,H,pt),pt.programs=Y.programs,S.capabilities=Qe,S.extensions=H,S.properties=pe,S.renderLists=le,S.shadowMap=ne,S.state=ye,S.info=pt}re();const se=new S1(S,F);this.xr=se,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=H.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=H.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(A){A!==void 0&&(D=A,this.setSize(W,ee,!1))},this.getSize=function(A){return A.set(W,ee)},this.setSize=function(A,k,q=!0){if(se.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,ee=k,t.width=Math.floor(A*D),t.height=Math.floor(k*D),q===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(W*D,ee*D).floor()},this.setDrawingBufferSize=function(A,k,q){W=A,ee=k,D=q,t.width=Math.floor(A*q),t.height=Math.floor(k*q),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Fe)},this.setViewport=function(A,k,q,X){A.isVector4?Fe.set(A.x,A.y,A.z,A.w):Fe.set(A,k,q,X),ye.viewport(N.copy(Fe).multiplyScalar(D).round())},this.getScissor=function(A){return A.copy(Oe)},this.setScissor=function(A,k,q,X){A.isVector4?Oe.set(A.x,A.y,A.z,A.w):Oe.set(A,k,q,X),ye.scissor(U.copy(Oe).multiplyScalar(D).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(A){ye.setScissorTest(qe=A)},this.setOpaqueSort=function(A){ce=A},this.setTransparentSort=function(A){Ae=A},this.getClearColor=function(A){return A.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,q=!0){let X=0;if(A){let O=!1;if(v!==null){const oe=v.texture.format;O=_.has(oe)}if(O){const oe=v.texture.type,_e=g.has(oe),Se=ie.getClearColor(),de=ie.getClearAlpha(),Ne=Se.r,He=Se.g,Re=Se.b;_e?(m[0]=Ne,m[1]=He,m[2]=Re,m[3]=de,F.clearBufferuiv(F.COLOR,0,m)):(p[0]=Ne,p[1]=He,p[2]=Re,p[3]=de,F.clearBufferiv(F.COLOR,0,p))}else X|=F.COLOR_BUFFER_BIT}k&&(X|=F.DEPTH_BUFFER_BIT),q&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),ie.dispose(),le.dispose(),Pe.dispose(),pe.dispose(),L.dispose(),E.dispose(),Z.dispose(),I.dispose(),ue.dispose(),Y.dispose(),se.dispose(),se.removeEventListener("sessionstart",Ke),se.removeEventListener("sessionend",Ie),Ge.stop()};function te(A){A.preventDefault(),tl("WebGLRenderer: Context Lost."),T=!0}function Q(){tl("WebGLRenderer: Context Restored."),T=!1;const A=pt.autoReset,k=ne.enabled,q=ne.autoUpdate,X=ne.needsUpdate,O=ne.type;re(),pt.autoReset=A,ne.enabled=k,ne.autoUpdate=q,ne.needsUpdate=X,ne.type=O}function Me(A){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ke(A){const k=A.target;k.removeEventListener("dispose",ke),gt(k)}function gt(A){ve(A),pe.remove(A)}function ve(A){const k=pe.get(A).programs;k!==void 0&&(k.forEach(function(q){Y.releaseProgram(q)}),A.isShaderMaterial&&Y.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,q,X,O,oe){k===null&&(k=dt);const _e=O.isMesh&&O.matrixWorld.determinant()<0,Se=Dt(A,k,q,X,O);ye.setMaterial(X,_e);let de=q.index,Ne=1;if(X.wireframe===!0){if(de=J.getWireframeAttribute(q),de===void 0)return;Ne=2}const He=q.drawRange,Re=q.attributes.position;let lt=He.start*Ne,Tt=(He.start+He.count)*Ne;oe!==null&&(lt=Math.max(lt,oe.start*Ne),Tt=Math.min(Tt,(oe.start+oe.count)*Ne)),de!==null?(lt=Math.max(lt,0),Tt=Math.min(Tt,de.count)):Re!=null&&(lt=Math.max(lt,0),Tt=Math.min(Tt,Re.count));const Ht=Tt-lt;if(Ht<0||Ht===1/0)return;I.setup(O,X,Se,q,de);let Gt,wt=Le;if(de!==null&&(Gt=z.get(de),wt=he,wt.setIndex(Gt)),O.isMesh)X.wireframe===!0?(ye.setLineWidth(X.wireframeLinewidth*Ye()),wt.setMode(F.LINES)):wt.setMode(F.TRIANGLES);else if(O.isLine){let We=X.linewidth;We===void 0&&(We=1),ye.setLineWidth(We*Ye()),O.isLineSegments?wt.setMode(F.LINES):O.isLineLoop?wt.setMode(F.LINE_LOOP):wt.setMode(F.LINE_STRIP)}else O.isPoints?wt.setMode(F.POINTS):O.isSprite&&wt.setMode(F.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Io("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(H.get("WEBGL_multi_draw"))wt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const We=O._multiDrawStarts,Ut=O._multiDrawCounts,mt=O._multiDrawCount,$n=de?z.get(de).bytesPerElement:1,Ns=pe.get(X).currentProgram.getUniforms();for(let Zn=0;Zn<mt;Zn++)Ns.setValue(F,"_gl_DrawID",Zn),wt.render(We[Zn]/$n,Ut[Zn])}else if(O.isInstancedMesh)wt.renderInstances(lt,Ht,O.count);else if(q.isInstancedBufferGeometry){const We=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ut=Math.min(q.instanceCount,We);wt.renderInstances(lt,Ht,Ut)}else wt.render(lt,Ht)};function Ce(A,k,q){A.transparent===!0&&A.side===Vi&&A.forceSinglePass===!1?(A.side=Wn,A.needsUpdate=!0,bt(A,k,q),A.side=br,A.needsUpdate=!0,bt(A,k,q),A.side=Vi):bt(A,k,q)}this.compile=function(A,k,q=null){q===null&&(q=A),y=Pe.get(q),y.init(k),w.push(y),q.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(y.pushLight(O),O.castShadow&&y.pushShadow(O))}),A!==q&&A.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(y.pushLight(O),O.castShadow&&y.pushShadow(O))}),y.setupLights();const X=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const oe=O.material;if(oe)if(Array.isArray(oe))for(let _e=0;_e<oe.length;_e++){const Se=oe[_e];Ce(Se,q,O),X.add(Se)}else Ce(oe,q,O),X.add(oe)}),y=w.pop(),X},this.compileAsync=function(A,k,q=null){const X=this.compile(A,k,q);return new Promise(O=>{function oe(){if(X.forEach(function(_e){pe.get(_e).currentProgram.isReady()&&X.delete(_e)}),X.size===0){O(A);return}setTimeout(oe,10)}H.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ze=null;function me(A){Ze&&Ze(A)}function Ke(){Ge.stop()}function Ie(){Ge.start()}const Ge=new T0;Ge.setAnimationLoop(me),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(A){Ze=A,se.setAnimationLoop(A),A===null?Ge.stop():Ge.start()},se.addEventListener("sessionstart",Ke),se.addEventListener("sessionend",Ie),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(k),k=se.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,k,v),y=Pe.get(A,w.length),y.init(k),w.push(y),Te.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),j.setFromProjectionMatrix(Te,Xi,k.reversedDepth),ae=this.localClippingEnabled,$=fe.init(this.clippingPlanes,ae),M=le.get(A,b.length),M.init(),b.push(M),se.enabled===!0&&se.isPresenting===!0){const oe=S.xr.getDepthSensingMesh();oe!==null&&Vt(oe,k,-1/0,S.sortObjects)}Vt(A,k,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(ce,Ae),xe=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,xe&&ie.addToRenderList(M,A),this.info.render.frame++,$===!0&&fe.beginShadows();const q=y.state.shadowsArray;ne.render(q,A,k),$===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=M.opaque,O=M.transmissive;if(y.setupLights(),k.isArrayCamera){const oe=k.cameras;if(O.length>0)for(let _e=0,Se=oe.length;_e<Se;_e++){const de=oe[_e];It(X,O,A,de)}xe&&ie.render(A);for(let _e=0,Se=oe.length;_e<Se;_e++){const de=oe[_e];it(M,A,de,de.viewport)}}else O.length>0&&It(X,O,A,k),xe&&ie.render(A),it(M,A,k);v!==null&&x===0&&(ze.updateMultisampleRenderTarget(v),ze.updateRenderTargetMipmap(v)),A.isScene===!0&&A.onAfterRender(S,A,k),I.resetDefaultState(),C=-1,P=null,w.pop(),w.length>0?(y=w[w.length-1],$===!0&&fe.setGlobalState(S.clippingPlanes,y.state.camera)):y=null,b.pop(),b.length>0?M=b[b.length-1]:M=null};function Vt(A,k,q,X){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){X&&Ve.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Te);const _e=Z.update(A),Se=A.material;Se.visible&&M.push(A,_e,Se,q,Ve.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const _e=Z.update(A),Se=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ve.copy(A.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ve.copy(_e.boundingSphere.center)),Ve.applyMatrix4(A.matrixWorld).applyMatrix4(Te)),Array.isArray(Se)){const de=_e.groups;for(let Ne=0,He=de.length;Ne<He;Ne++){const Re=de[Ne],lt=Se[Re.materialIndex];lt&&lt.visible&&M.push(A,_e,lt,q,Ve.z,Re)}}else Se.visible&&M.push(A,_e,Se,q,Ve.z,null)}}const oe=A.children;for(let _e=0,Se=oe.length;_e<Se;_e++)Vt(oe[_e],k,q,X)}function it(A,k,q,X){const{opaque:O,transmissive:oe,transparent:_e}=A;y.setupLightsView(q),$===!0&&fe.setGlobalState(S.clippingPlanes,q),X&&ye.viewport(N.copy(X)),O.length>0&&Xt(O,k,q),oe.length>0&&Xt(oe,k,q),_e.length>0&&Xt(_e,k,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function It(A,k,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[X.id]===void 0&&(y.state.transmissionRenderTarget[X.id]=new Es(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")||H.has("EXT_color_buffer_float")?Wi:Zi,minFilter:Gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const oe=y.state.transmissionRenderTarget[X.id],_e=X.viewport||N;oe.setSize(_e.z*S.transmissionResolutionScale,_e.w*S.transmissionResolutionScale);const Se=S.getRenderTarget(),de=S.getActiveCubeFace(),Ne=S.getActiveMipmapLevel();S.setRenderTarget(oe),S.getClearColor(B),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),xe&&ie.render(q);const He=S.toneMapping;S.toneMapping=Hr;const Re=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),y.setupLightsView(X),$===!0&&fe.setGlobalState(S.clippingPlanes,X),Xt(A,q,X),ze.updateMultisampleRenderTarget(oe),ze.updateRenderTargetMipmap(oe),H.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Tt=0,Ht=k.length;Tt<Ht;Tt++){const Gt=k[Tt],{object:wt,geometry:We,material:Ut,group:mt}=Gt;if(Ut.side===Vi&&wt.layers.test(X.layers)){const $n=Ut.side;Ut.side=Wn,Ut.needsUpdate=!0,Lt(wt,q,X,We,Ut,mt),Ut.side=$n,Ut.needsUpdate=!0,lt=!0}}lt===!0&&(ze.updateMultisampleRenderTarget(oe),ze.updateRenderTargetMipmap(oe))}S.setRenderTarget(Se,de,Ne),S.setClearColor(B,K),Re!==void 0&&(X.viewport=Re),S.toneMapping=He}function Xt(A,k,q){const X=k.isScene===!0?k.overrideMaterial:null;for(let O=0,oe=A.length;O<oe;O++){const _e=A[O],{object:Se,geometry:de,group:Ne}=_e;let He=_e.material;He.allowOverride===!0&&X!==null&&(He=X),Se.layers.test(q.layers)&&Lt(Se,k,q,de,He,Ne)}}function Lt(A,k,q,X,O,oe){A.onBeforeRender(S,k,q,X,O,oe),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(S,k,q,X,A,oe),O.transparent===!0&&O.side===Vi&&O.forceSinglePass===!1?(O.side=Wn,O.needsUpdate=!0,S.renderBufferDirect(q,k,X,O,A,oe),O.side=br,O.needsUpdate=!0,S.renderBufferDirect(q,k,X,O,A,oe),O.side=Vi):S.renderBufferDirect(q,k,X,O,A,oe),A.onAfterRender(S,k,q,X,O,oe)}function bt(A,k,q){k.isScene!==!0&&(k=dt);const X=pe.get(A),O=y.state.lights,oe=y.state.shadowsArray,_e=O.state.version,Se=Y.getParameters(A,O.state,oe,k,q),de=Y.getProgramCacheKey(Se);let Ne=X.programs;X.environment=A.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(A.isMeshStandardMaterial?E:L).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ne===void 0&&(A.addEventListener("dispose",ke),Ne=new Map,X.programs=Ne);let He=Ne.get(de);if(He!==void 0){if(X.currentProgram===He&&X.lightsStateVersion===_e)return kn(A,Se),He}else Se.uniforms=Y.getUniforms(A),A.onBeforeCompile(Se,S),He=Y.acquireProgram(Se,de),Ne.set(de,He),X.uniforms=Se.uniforms;const Re=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Re.clippingPlanes=fe.uniform),kn(A,Se),X.needsLights=fi(A),X.lightsStateVersion=_e,X.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.directionalShadowMap.value=O.state.directionalShadowMap,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotShadowMap.value=O.state.spotShadowMap,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMap.value=O.state.pointShadowMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=He,X.uniformsList=null,He}function xt(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Hc.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function kn(A,k){const q=pe.get(A);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function Dt(A,k,q,X,O){k.isScene!==!0&&(k=dt),ze.resetTextureUnits();const oe=k.fog,_e=X.isMeshStandardMaterial?k.environment:null,Se=v===null?S.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:Sn,de=(X.isMeshStandardMaterial?E:L).get(X.envMap||_e),Ne=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,He=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Re=!!q.morphAttributes.position,lt=!!q.morphAttributes.normal,Tt=!!q.morphAttributes.color;let Ht=Hr;X.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(Ht=S.toneMapping);const Gt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,wt=Gt!==void 0?Gt.length:0,We=pe.get(X),Ut=y.state.lights;if($===!0&&(ae===!0||A!==P)){const En=A===P&&X.id===C;fe.setState(X,A,En)}let mt=!1;X.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Ut.state.version||We.outputColorSpace!==Se||O.isBatchedMesh&&We.batching===!1||!O.isBatchedMesh&&We.batching===!0||O.isBatchedMesh&&We.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&We.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&We.instancing===!1||!O.isInstancedMesh&&We.instancing===!0||O.isSkinnedMesh&&We.skinning===!1||!O.isSkinnedMesh&&We.skinning===!0||O.isInstancedMesh&&We.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&We.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&We.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&We.instancingMorph===!1&&O.morphTexture!==null||We.envMap!==de||X.fog===!0&&We.fog!==oe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==fe.numPlanes||We.numIntersection!==fe.numIntersection)||We.vertexAlphas!==Ne||We.vertexTangents!==He||We.morphTargets!==Re||We.morphNormals!==lt||We.morphColors!==Tt||We.toneMapping!==Ht||We.morphTargetsCount!==wt)&&(mt=!0):(mt=!0,We.__version=X.version);let $n=We.currentProgram;mt===!0&&($n=bt(X,k,O));let Ns=!1,Zn=!1,ka=!1;const Ft=$n.getUniforms(),zn=We.uniforms;if(ye.useProgram($n.program)&&(Ns=!0,Zn=!0,ka=!0),X.id!==C&&(C=X.id,Zn=!0),Ns||P!==A){ye.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(F,"projectionMatrix",A.projectionMatrix),Ft.setValue(F,"viewMatrix",A.matrixWorldInverse);const Vn=Ft.map.cameraPosition;Vn!==void 0&&Vn.setValue(F,Ee.setFromMatrixPosition(A.matrixWorld)),Qe.logarithmicDepthBuffer&&Ft.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ft.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),P!==A&&(P=A,Zn=!0,ka=!0)}if(O.isSkinnedMesh){Ft.setOptional(F,O,"bindMatrix"),Ft.setOptional(F,O,"bindMatrixInverse");const En=O.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Ft.setValue(F,"boneTexture",En.boneTexture,ze))}O.isBatchedMesh&&(Ft.setOptional(F,O,"batchingTexture"),Ft.setValue(F,"batchingTexture",O._matricesTexture,ze),Ft.setOptional(F,O,"batchingIdTexture"),Ft.setValue(F,"batchingIdTexture",O._indirectTexture,ze),Ft.setOptional(F,O,"batchingColorTexture"),O._colorsTexture!==null&&Ft.setValue(F,"batchingColorTexture",O._colorsTexture,ze));const hi=q.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&De.update(O,q,$n),(Zn||We.receiveShadow!==O.receiveShadow)&&(We.receiveShadow=O.receiveShadow,Ft.setValue(F,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(zn.envMap.value=de,zn.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(zn.envMapIntensity.value=k.environmentIntensity),zn.dfgLUT!==void 0&&(zn.dfgLUT.value=R1()),Zn&&(Ft.setValue(F,"toneMappingExposure",S.toneMappingExposure),We.needsLights&&Tn(zn,ka),oe&&X.fog===!0&&be.refreshFogUniforms(zn,oe),be.refreshMaterialUniforms(zn,X,D,ee,y.state.transmissionRenderTarget[A.id]),Hc.upload(F,xt(We),zn,ze)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Hc.upload(F,xt(We),zn,ze),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ft.setValue(F,"center",O.center),Ft.setValue(F,"modelViewMatrix",O.modelViewMatrix),Ft.setValue(F,"normalMatrix",O.normalMatrix),Ft.setValue(F,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const En=X.uniformsGroups;for(let Vn=0,Rl=En.length;Vn<Rl;Vn++){const Jr=En[Vn];ue.update(Jr,$n),ue.bind(Jr,$n)}}return $n}function Tn(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function fi(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(A,k,q){const X=pe.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),pe.get(A.texture).__webglTexture=k,pe.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const q=pe.get(A);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};const Qt=F.createFramebuffer();this.setRenderTarget=function(A,k=0,q=0){v=A,R=k,x=q;let X=!0,O=null,oe=!1,_e=!1;if(A){const de=pe.get(A);if(de.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(F.FRAMEBUFFER,null),X=!1;else if(de.__webglFramebuffer===void 0)ze.setupRenderTarget(A);else if(de.__hasExternalTextures)ze.rebindTextures(A,pe.get(A.texture).__webglTexture,pe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Re=A.depthTexture;if(de.__boundDepthTexture!==Re){if(Re!==null&&pe.has(Re)&&(A.width!==Re.image.width||A.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(A)}}const Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(_e=!0);const He=pe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[k])?O=He[k][q]:O=He[k],oe=!0):A.samples>0&&ze.useMultisampledRTT(A)===!1?O=pe.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?O=He[q]:O=He,N.copy(A.viewport),U.copy(A.scissor),V=A.scissorTest}else N.copy(Fe).multiplyScalar(D).floor(),U.copy(Oe).multiplyScalar(D).floor(),V=qe;if(q!==0&&(O=Qt),ye.bindFramebuffer(F.FRAMEBUFFER,O)&&X&&ye.drawBuffers(A,O),ye.viewport(N),ye.scissor(U),ye.setScissorTest(V),oe){const de=pe.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,de.__webglTexture,q)}else if(_e){const de=k;for(let Ne=0;Ne<A.textures.length;Ne++){const He=pe.get(A.textures[Ne]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ne,He.__webglTexture,q,de)}}else if(A!==null&&q!==0){const de=pe.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,de.__webglTexture,q)}C=-1},this.readRenderTargetPixels=function(A,k,q,X,O,oe,_e,Se=0){if(!(A&&A.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=pe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(de=de[_e]),de){ye.bindFramebuffer(F.FRAMEBUFFER,de);try{const Ne=A.textures[Se],He=Ne.format,Re=Ne.type;if(!Qe.textureFormatReadable(He)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(Re)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-X&&q>=0&&q<=A.height-O&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Se),F.readPixels(k,q,X,O,Be.convert(He),Be.convert(Re),oe))}finally{const Ne=v!==null?pe.get(v).__webglFramebuffer:null;ye.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(A,k,q,X,O,oe,_e,Se=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=pe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(de=de[_e]),de)if(k>=0&&k<=A.width-X&&q>=0&&q<=A.height-O){ye.bindFramebuffer(F.FRAMEBUFFER,de);const Ne=A.textures[Se],He=Ne.format,Re=Ne.type;if(!Qe.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,lt),F.bufferData(F.PIXEL_PACK_BUFFER,oe.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Se),F.readPixels(k,q,X,O,Be.convert(He),Be.convert(Re),0);const Tt=v!==null?pe.get(v).__webglFramebuffer:null;ye.bindFramebuffer(F.FRAMEBUFFER,Tt);const Ht=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await sx(F,Ht,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,lt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,oe),F.deleteBuffer(lt),F.deleteSync(Ht),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,q=0){const X=Math.pow(2,-q),O=Math.floor(A.image.width*X),oe=Math.floor(A.image.height*X),_e=k!==null?k.x:0,Se=k!==null?k.y:0;ze.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,_e,Se,O,oe),ye.unbindTexture()};const en=F.createFramebuffer(),an=F.createFramebuffer();this.copyTextureToTexture=function(A,k,q=null,X=null,O=0,oe=null){oe===null&&(O!==0?(Io("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=O,O=0):oe=0);let _e,Se,de,Ne,He,Re,lt,Tt,Ht;const Gt=A.isCompressedTexture?A.mipmaps[oe]:A.image;if(q!==null)_e=q.max.x-q.min.x,Se=q.max.y-q.min.y,de=q.isBox3?q.max.z-q.min.z:1,Ne=q.min.x,He=q.min.y,Re=q.isBox3?q.min.z:0;else{const hi=Math.pow(2,-O);_e=Math.floor(Gt.width*hi),Se=Math.floor(Gt.height*hi),A.isDataArrayTexture?de=Gt.depth:A.isData3DTexture?de=Math.floor(Gt.depth*hi):de=1,Ne=0,He=0,Re=0}X!==null?(lt=X.x,Tt=X.y,Ht=X.z):(lt=0,Tt=0,Ht=0);const wt=Be.convert(k.format),We=Be.convert(k.type);let Ut;k.isData3DTexture?(ze.setTexture3D(k,0),Ut=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ze.setTexture2DArray(k,0),Ut=F.TEXTURE_2D_ARRAY):(ze.setTexture2D(k,0),Ut=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const mt=F.getParameter(F.UNPACK_ROW_LENGTH),$n=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ns=F.getParameter(F.UNPACK_SKIP_PIXELS),Zn=F.getParameter(F.UNPACK_SKIP_ROWS),ka=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Gt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Gt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),F.pixelStorei(F.UNPACK_SKIP_ROWS,He),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Re);const Ft=A.isDataArrayTexture||A.isData3DTexture,zn=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const hi=pe.get(A),En=pe.get(k),Vn=pe.get(hi.__renderTarget),Rl=pe.get(En.__renderTarget);ye.bindFramebuffer(F.READ_FRAMEBUFFER,Vn.__webglFramebuffer),ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,Rl.__webglFramebuffer);for(let Jr=0;Jr<de;Jr++)Ft&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pe.get(A).__webglTexture,O,Re+Jr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pe.get(k).__webglTexture,oe,Ht+Jr)),F.blitFramebuffer(Ne,He,_e,Se,lt,Tt,_e,Se,F.DEPTH_BUFFER_BIT,F.NEAREST);ye.bindFramebuffer(F.READ_FRAMEBUFFER,null),ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(O!==0||A.isRenderTargetTexture||pe.has(A)){const hi=pe.get(A),En=pe.get(k);ye.bindFramebuffer(F.READ_FRAMEBUFFER,en),ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,an);for(let Vn=0;Vn<de;Vn++)Ft?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,hi.__webglTexture,O,Re+Vn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,hi.__webglTexture,O),zn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,En.__webglTexture,oe,Ht+Vn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,En.__webglTexture,oe),O!==0?F.blitFramebuffer(Ne,He,_e,Se,lt,Tt,_e,Se,F.COLOR_BUFFER_BIT,F.NEAREST):zn?F.copyTexSubImage3D(Ut,oe,lt,Tt,Ht+Vn,Ne,He,_e,Se):F.copyTexSubImage2D(Ut,oe,lt,Tt,Ne,He,_e,Se);ye.bindFramebuffer(F.READ_FRAMEBUFFER,null),ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else zn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Ut,oe,lt,Tt,Ht,_e,Se,de,wt,We,Gt.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(Ut,oe,lt,Tt,Ht,_e,Se,de,wt,Gt.data):F.texSubImage3D(Ut,oe,lt,Tt,Ht,_e,Se,de,wt,We,Gt):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,oe,lt,Tt,_e,Se,wt,We,Gt.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,oe,lt,Tt,Gt.width,Gt.height,wt,Gt.data):F.texSubImage2D(F.TEXTURE_2D,oe,lt,Tt,_e,Se,wt,We,Gt);F.pixelStorei(F.UNPACK_ROW_LENGTH,mt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,$n),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ns),F.pixelStorei(F.UNPACK_SKIP_ROWS,Zn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ka),oe===0&&k.generateMipmaps&&F.generateMipmap(Ut),ye.unbindTexture()},this.initRenderTarget=function(A){pe.get(A).__webglFramebuffer===void 0&&ze.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ze.setTextureCube(A,0):A.isData3DTexture?ze.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ze.setTexture2DArray(A,0):ze.setTexture2D(A,0),ye.unbindTexture()},this.resetState=function(){R=0,x=0,v=null,ye.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}function Cp(s,e){if(e===Y_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Of||e===s0){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Of)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Oa extends Ps{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new N1(t)}),this.register(function(t){return new U1(t)}),this.register(function(t){return new W1(t)}),this.register(function(t){return new X1(t)}),this.register(function(t){return new q1(t)}),this.register(function(t){return new O1(t)}),this.register(function(t){return new B1(t)}),this.register(function(t){return new k1(t)}),this.register(function(t){return new z1(t)}),this.register(function(t){return new I1(t)}),this.register(function(t){return new V1(t)}),this.register(function(t){return new F1(t)}),this.register(function(t){return new G1(t)}),this.register(function(t){return new H1(t)}),this.register(function(t){return new L1(t)}),this.register(function(t){return new Y1(t)}),this.register(function(t){return new K1(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=ho.extractUrlBase(e);a=ho.resolveURL(l,this.path)}else a=ho.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Nh(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===C0){try{a[ct.KHR_BINARY_GLTF]=new j1(e)}catch(f){i&&i(f);return}r=JSON.parse(a[ct.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new cT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case ct.KHR_MATERIALS_UNLIT:a[f]=new D1;break;case ct.KHR_DRACO_MESH_COMPRESSION:a[f]=new $1(r,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:a[f]=new Z1;break;case ct.KHR_MESH_QUANTIZATION:a[f]=new J1;break;default:h.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function P1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class L1{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new $e(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Sn);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Vf(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Cv(u),l.distance=f;break;case"spot":l=new Av(u),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Oi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class D1{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return ps}extendParams(e,t,n){const i=[];e.color=new $e(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Sn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,un))}return Promise.all(i)}}class I1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class N1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ft(o,o)}return Promise.all(r)}}class U1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class F1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class O1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Sn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,un)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class B1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class k1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(o[0],o[1],o[2],Sn),Promise.all(r)}}class z1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class V1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(o[0],o[1],o[2],Sn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,un)),Promise.all(r)}}class H1{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class G1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class W1{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class X1{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class q1{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Y1{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,f=i.byteStride,h=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,f,h,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*f);return a.decodeGltfBuffer(new Uint8Array(d),u,f,h,i.mode,i.filter),d})})}else return null}}class K1{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==mi.TRIANGLES&&l.mode!==mi.TRIANGLE_STRIP&&l.mode!==mi.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),f=u.isGroup?u.children:[u],h=l[0].count,d=[];for(const _ of f){const g=new tt,m=new G,p=new $r,M=new G(1,1,1),y=new nv(_.geometry,_.material,h);for(let b=0;b<h;b++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,b),c.SCALE&&M.fromBufferAttribute(c.SCALE,b),y.setMatrixAt(b,g.compose(m,p,M));for(const b in c)if(b==="_COLOR_0"){const w=c[b];y.instanceColor=new kf(w.array,w.itemSize,w.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&_.geometry.setAttribute(b,c[b]);zt.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const C0="glTF",ja=12,Pp={JSON:1313821514,BIN:5130562};class j1{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ja),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==C0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ja,r=new DataView(e,ja);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Pp.JSON){const l=new Uint8Array(e,ja+a,o);this.content=n.decode(l)}else if(c===Pp.BIN){const l=ja+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const f=Wf[u]||u.toLowerCase();o[f]=a[u]}for(const u in e.attributes){const f=Wf[u]||u.toLowerCase();if(a[u]!==void 0){const h=n.accessors[e.attributes[u]],d=ca[h.componentType];l[f]=d.name,c[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,h){i.decodeDracoFile(u,function(d){for(const _ in d.attributes){const g=d.attributes[_],m=c[_];m!==void 0&&(g.normalized=m)}f(d)},o,l,Sn,h)})})}}class Z1{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class J1{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}}class P0 extends qo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,f=(n-t)/u,h=f*f,d=h*f,_=e*l,g=_-l,m=-2*d+3*h,p=d-h,M=1-m,y=p-h+f;for(let b=0;b!==o;b++){const w=a[g+b+o],S=a[g+b+c]*u,T=a[_+b+o],R=a[_+b]*u;r[b]=M*w+y*S+m*T+p*R}return r}}const Q1=new $r;class eT extends P0{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Q1.fromArray(r).normalize().toArray(r),r}}const mi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ca={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lp={9728:On,9729:Jt,9984:Jm,9985:Oc,9986:to,9987:Gi},Dp={33071:xi,33648:Jc,10497:ya},lu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Dr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tT={CUBICSPLINE:void 0,LINEAR:Lo,STEP:Po},uu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nT(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ih({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:br})),s.DefaultMaterial}function ss(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Oi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iT(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const f=e[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):s.attributes.position;a.push(h)}if(i){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):s.attributes.normal;o.push(h)}if(r){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):s.attributes.color;c.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],f=l[1],h=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=f),r&&(s.morphAttributes.color=h),s.morphTargetsRelative=!0,s})}function rT(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sT(s){let e;const t=s.extensions&&s.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fu(t.attributes):e=s.indices+":"+fu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+fu(s.targets[n]);return e}function fu(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Xf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aT(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const oT=new tt;class cT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new P1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Ev(this.options.manager):this.textureLoader=new Dv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ss(r,o,i),Oi(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(ho.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=lu[i.type],o=ca[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Bn(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=lu[i.type],l=ca[i.componentType],u=l.BYTES_PER_ELEMENT,f=u*c,h=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(d&&d!==f){const p=Math.floor(h/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(M);y||(g=new l(o,p*d,i.count*d/u),y=new Zx(g,d/u),t.cache.add(M,y)),m=new Ch(y,c,h%d/u,_)}else o===null?g=new l(i.count*c):g=new l(o,h,i.count*c),m=new Bn(g,c,_);if(i.sparse!==void 0){const p=lu.SCALAR,M=ca[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,w=new M(a[1],y,i.sparse.count*p),S=new l(a[2],b,i.sparse.count*c);o!==null&&(m=new Bn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,R=w.length;T<R;T++){const x=w[T];if(m.setX(x,S[T*c]),c>=2&&m.setY(x,S[T*c+1]),c>=3&&m.setZ(x,S[T*c+2]),c>=4&&m.setW(x,S[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(r.samplers||{})[a.sampler]||{};return u.magFilter=Lp[h.magFilter]||Jt,u.minFilter=Lp[h.minFilter]||Gi,u.wrapS=Dp[h.wrapS]||ya,u.wrapT=Dp[h.wrapT]||ya,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==On&&u.minFilter!==Jt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){l=!0;const h=new Blob([f],{type:a.mimeType});return c=o.createObjectURL(h),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(f){return new Promise(function(h,d){let _=h;t.isImageBitmapLoader===!0&&(_=function(g){const m=new fn(g);m.needsUpdate=!0,h(m)}),t.load(ho.resolveURL(f,r.path),_,void 0,d)})}).then(function(f){return l===!0&&o.revokeObjectURL(c),Oi(f,a),f.userData.mimeType=a.mimeType||aT(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ct.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new v0,ji.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new x0,ji.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ih}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[ct.KHR_MATERIALS_UNLIT]){const f=i[ct.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),l.push(f.extendParams(o,r,t))}else{const f=r.pbrMetallicRoughness||{};if(o.color=new $e(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],Sn),o.opacity=h[3]}f.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",f.baseColorTexture,un)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Vi);const u=r.alphaMode||uu.OPAQUE;if(u===uu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===uu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ps&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ft(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;o.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&a!==ps&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ps){const f=r.emissiveFactor;o.emissive=new $e().setRGB(f[0],f[1],f[2],Sn)}return r.emissiveTexture!==void 0&&a!==ps&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,un)),Promise.all(l).then(function(){const f=new a(o);return r.name&&(f.name=r.name),Oi(f,r),t.associations.set(f,{materials:e}),r.extensions&&ss(i,f,r),f})}createUniqueName(e){const t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Ip(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=sT(l),f=i[u];if(f)a.push(f.promise);else{let h;l.extensions&&l.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?h=r(l):h=Ip(new Ni,l,t),i[u]={primitive:l,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?nT(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],f=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],m=a[d];let p;const M=l[d];if(m.mode===mi.TRIANGLES||m.mode===mi.TRIANGLE_STRIP||m.mode===mi.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Qx(g,M):new Ti(g,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===mi.TRIANGLE_STRIP?p.geometry=Cp(p.geometry,s0):m.mode===mi.TRIANGLE_FAN&&(p.geometry=Cp(p.geometry,Of));else if(m.mode===mi.LINES)p=new av(g,M);else if(m.mode===mi.LINE_STRIP)p=new Dh(g,M);else if(m.mode===mi.LINE_LOOP)p=new ov(g,M);else if(m.mode===mi.POINTS)p=new cv(g,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&rT(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Oi(p,r),m.extensions&&ss(i,p,m),t.assignFinalMaterial(p),f.push(p)}for(let d=0,_=f.length;d<_;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return r.extensions&&ss(i,f[0],r),f[0];const h=new ai;r.extensions&&ss(i,h,r),t.associations.set(h,{meshes:e});for(let d=0,_=f.length;d<_;d++)h.add(f[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new In(Mx.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Fh(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Oi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const f=a[l];if(f){o.push(f);const h=new tt;r!==null&&h.fromArray(r.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ph(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let f=0,h=i.channels.length;f<h;f++){const d=i.channels[f],_=i.samplers[d.sampler],g=d.target,m=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,M=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(_),u.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],_=f[2],g=f[3],m=f[4],p=[];for(let y=0,b=h.length;y<b;y++){const w=h[y],S=d[y],T=_[y],R=g[y],x=m[y];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const v=n._createAnimationTracks(w,S,T,R,x);if(v)for(let C=0;C<v.length;C++)p.push(v[C])}const M=new _v(r,void 0,p);return Oi(M,i),M})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],f=l[1],h=l[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,oT)});for(let d=0,_=f.length;d<_;d++)u.add(f[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new _0:l.length>1?u=new ai:l.length===1?u=l[0]:u=new zt,u!==l[0])for(let f=0,h=l.length;f<h;f++)u.add(l[f]);if(r.name&&(u.userData.name=r.name,u.name=a),Oi(u,r),r.extensions&&ss(n,u,r),r.matrix!==void 0){const f=new tt;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const f=i.associations.get(u);i.associations.set(u,{...f})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ai;n.name&&(r.name=i.createUniqueName(n.name)),Oi(r,n),n.extensions&&ss(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,f=c.length;u<f;u++)r.add(c[u]);const l=u=>{const f=new Map;for(const[h,d]of i.associations)(h instanceof ji||h instanceof fn)&&f.set(h,d);return u.traverse(h=>{const d=i.associations.get(h);d!=null&&f.set(h,d)}),f};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];Dr[r.path]===Dr.weights?e.traverse(function(h){h.morphTargetInfluences&&c.push(h.name?h.name:h.uuid)}):c.push(o);let l;switch(Dr[r.path]){case Dr.weights:l=Sa;break;case Dr.rotation:l=Ta;break;case Dr.translation:case Dr.scale:l=Ea;break;default:switch(n.itemSize){case 1:l=Sa;break;case 2:case 3:default:l=Ea;break}break}const u=i.interpolation!==void 0?tT[i.interpolation]:Lo,f=this._getArrayFromAccessor(n);for(let h=0,d=c.length;h<d;h++){const _=new l(c[h]+"."+Dr[r.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Xf(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ta?eT:P0;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function lT(s,e,t){const n=e.attributes,i=new Er;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new G(c[0],c[1],c[2]),new G(l[0],l[1],l[2])),o.normalized){const u=Xf(ca[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new G,c=new G;for(let l=0,u=r.length;l<u;l++){const f=r[l];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,_=h.max;if(d!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),h.normalized){const g=Xf(ca[h.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new er;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Ip(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=Wf[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return ht.workingColorSpace!==Sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),Oi(s,e),lT(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?iT(s,e.targets,t):s})}function ur(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function L0(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var ci={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},wa={duration:.5,overwrite:!1,delay:0},kh,pn,Nt,yi=1e8,Rt=1/yi,qf=Math.PI*2,uT=qf/4,fT=0,D0=Math.sqrt,hT=Math.cos,dT=Math.sin,hn=function(e){return typeof e=="string"},Wt=function(e){return typeof e=="function"},Sr=function(e){return typeof e=="number"},zh=function(e){return typeof e>"u"},Qi=function(e){return typeof e=="object"},Xn=function(e){return e!==!1},Vh=function(){return typeof window<"u"},bc=function(e){return Wt(e)||hn(e)},I0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Mn=Array.isArray,Yf=/(?:-?\.?\d|\.)+/gi,N0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ia=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,hu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,U0=/[+-]=-?[.\d]+/,F0=/[^,'"\[\]\s]+/gi,pT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Bt,Bi,Kf,Hh,li={},rl={},O0,B0=function(e){return(rl=Aa(e,li))&&jn},Gh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},No=function(e,t){return!t&&console.warn(e)},k0=function(e,t){return e&&(li[e]=t)&&rl&&(rl[e]=t)||li},Uo=function(){return 0},mT={suppressEvents:!0,isStart:!0,kill:!1},Gc={suppressEvents:!0,kill:!1},gT={suppressEvents:!0},Wh={},Gr=[],jf={},z0,ni={},du={},Np=30,Wc=[],Xh="",qh=function(e){var t=e[0],n,i;if(Qi(t)||Wt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Wc.length;i--&&!Wc[i].targetTest(t););n=Wc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new ug(e[i],n)))||e.splice(i,1);return e},_s=function(e){return e._gsap||qh(bi(e))[0]._gsap},V0=function(e,t,n){return(n=e[t])&&Wt(n)?e[t]():zh(n)&&e.getAttribute&&e.getAttribute(t)||n},qn=function(e,t){return(e=e.split(",")).forEach(t)||e},qt=function(e){return Math.round(e*1e5)/1e5||0},Zt=function(e){return Math.round(e*1e7)/1e7||0},la=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},_T=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},sl=function(){var e=Gr.length,t=Gr.slice(0),n,i;for(jf={},Gr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Yh=function(e){return!!(e._initted||e._startAt||e.add)},H0=function(e,t,n,i){Gr.length&&!pn&&sl(),e.render(t,n,!!(pn&&t<0&&Yh(e))),Gr.length&&!pn&&sl()},G0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(F0).length<2?t:hn(e)?e.trim():e},W0=function(e){return e},ui=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},xT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Aa=function(e,t){for(var n in t)e[n]=t[n];return e},Up=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Qi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},al=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},po=function(e){var t=e.parent||Bt,n=e.keyframes?xT(Mn(e.keyframes)):ui;if(Xn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},vT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},X0=function(e,t,n,i,r){var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Sl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Yr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},xs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},yT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},$f=function(e,t,n,i){return e._startAt&&(pn?e._startAt.revert(Gc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},bT=function s(e){return!e||e._ts&&s(e.parent)},Fp=function(e){return e._repeat?Ra(e._tTime,e=e.duration()+e._rDelay)*e:0},Ra=function(e,t){var n=Math.floor(e=Zt(e/t));return e&&n===e?n-1:n},ol=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Tl=function(e){return e._end=Zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Rt)||0))},El=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Tl(e),n._dirty||xs(n,e)),e},q0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ol(e.rawTime(),t),(!t._dur||Yo(0,t.totalDuration(),n)-t._tTime>Rt)&&t.render(n,!0)),xs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Rt}},Hi=function(e,t,n,i){return t.parent&&Yr(t),t._start=Zt((Sr(n)?n:n||e!==Bt?pi(e,n,t):e._time)+t._delay),t._end=Zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),X0(e,t,"_first","_last",e._sort?"_start":0),Zf(t)||(e._recent=t),i||q0(e,t),e._ts<0&&El(e,e._tTime),e},Y0=function(e,t){return(li.ScrollTrigger||Gh("scrollTrigger",t))&&li.ScrollTrigger.create(t,e)},K0=function(e,t,n,i,r){if(jh(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!pn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&z0!==ri.frame)return Gr.push(e),e._lazy=[r,i],1},MT=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Zf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ST=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&MT(e)&&!(!e._initted&&Zf(e))||(e._ts<0||e._dp._ts<0)&&!Zf(e))?0:1,o=e._rDelay,c=0,l,u,f;if(o&&e._repeat&&(c=Yo(0,e._tDur,t),u=Ra(c,o),e._yoyo&&u&1&&(a=1-a),u!==Ra(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||pn||i||e._zTime===Rt||!t&&e._zTime){if(!e._initted&&K0(e,t,i,n,c))return;for(f=e._zTime,e._zTime=t||(n?Rt:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&$f(e,t,n,!0),e._onUpdate&&!n&&oi(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&oi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Yr(e,1),!n&&!pn&&(oi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},TT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ca=function(e,t,n,i){var r=e._repeat,a=Zt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Zt(a*(r+1)+e._rDelay*r):a,o>0&&!i&&El(e,e._tTime=e._tDur*o),e.parent&&Tl(e),n||xs(e.parent,e),e},Op=function(e){return e instanceof Un?xs(e):Ca(e,e._dur)},ET={_start:0,endTime:Uo,totalDuration:Uo},pi=function s(e,t,n){var i=e.labels,r=e._recent||ET,a=e.duration()>=yi?r.endTime(!1):e._dur,o,c,l;return hn(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(Mn(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},mo=function(e,t,n){var i=Sr(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,c;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=Xn(c.vars.inherit)&&c.parent;a.immediateRender=Xn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new $t(t[0],a,t[r+1])},Zr=function(e,t){return e||e===0?t(e):t},Yo=function(e,t,n){return n<e?e:n>t?t:n},vn=function(e,t){return!hn(e)||!(t=pT.exec(e))?"":t[1]},wT=function(e,t,n){return Zr(n,function(i){return Yo(e,t,i)})},Jf=[].slice,j0=function(e,t){return e&&Qi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Qi(e[0]))&&!e.nodeType&&e!==Bi},AT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return hn(i)&&!t||j0(i,1)?(r=n).push.apply(r,bi(i)):n.push(i)})||n},bi=function(e,t,n){return Nt&&!t&&Nt.selector?Nt.selector(e):hn(e)&&!n&&(Kf||!Pa())?Jf.call((t||Hh).querySelectorAll(e),0):Mn(e)?AT(e,n):j0(e)?Jf.call(e,0):e?[e]:[]},Qf=function(e){return e=bi(e)[0]||No("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return bi(t,n.querySelectorAll?n:n===e?No("Invalid scope")||Hh.createElement("div"):e)}},$0=function(e){return e.sort(function(){return .5-Math.random()})},Z0=function(e){if(Wt(e))return e;var t=Qi(e)?e:{each:e},n=vs(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=t.axis,u=i,f=i;return hn(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(u=i[0],f=i[1]),function(h,d,_){var g=(_||t).length,m=a[g],p,M,y,b,w,S,T,R,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,yi])[1],!x){for(T=-yi;T<(T=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(m=a[g]=[],p=c?Math.min(x,g)*u-.5:i%x,M=x===yi?0:c?g*f/x-.5:i/x|0,T=0,R=yi,S=0;S<g;S++)y=S%x-p,b=M-(S/x|0),m[S]=w=l?Math.abs(l==="y"?b:y):D0(y*y+b*b),w>T&&(T=w),w<R&&(R=w);i==="random"&&$0(m),m.max=T-R,m.min=R,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(x>g?g-1:l?l==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=vn(t.amount||t.each)||0,n=n&&g<0?og(n):n}return g=(m[h]-m.min)/m.max||0,Zt(m.b+(n?n(g):g)*m.v)+m.u}},eh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Zt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Sr(n)?0:vn(n))}},J0=function(e,t){var n=Mn(e),i,r;return!n&&Qi(e)&&(i=n=e.radius||yi,e.values?(e=bi(e.values),(r=!Sr(e[0]))&&(i*=i)):e=eh(e.increment)),Zr(t,n?Wt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),l=yi,u=0,f=e.length,h,d;f--;)r?(h=e[f].x-o,d=e[f].y-c,h=h*h+d*d):h=Math.abs(e[f]-o),h<l&&(l=h,u=f);return u=!i||l<=i?e[u]:a,r||u===a||Sr(a)?u:u+vn(a)}:eh(e))},Q0=function(e,t,n,i){return Zr(Mn(e)?!t:n===!0?!!(n=0):!i,function(){return Mn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},RT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},CT=function(e,t){return function(n){return e(parseFloat(n))+(t||vn(n))}},PT=function(e,t,n){return tg(e,t,0,1,n)},eg=function(e,t,n){return Zr(n,function(i){return e[~~t(i)]})},LT=function s(e,t,n){var i=t-e;return Mn(e)?eg(e,s(0,e.length),t):Zr(n,function(r){return(i+(r-e)%i)%i+e})},DT=function s(e,t,n){var i=t-e,r=i*2;return Mn(e)?eg(e,s(0,e.length-1),t):Zr(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Fo=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?F0:Yf),n+=e.substr(t,i-t)+Q0(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},tg=function(e,t,n,i,r){var a=t-e,o=i-n;return Zr(r,function(c){return n+((c-e)/a*o||0)})},IT=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=hn(e),o={},c,l,u,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Mn(e)&&!Mn(t)){for(u=[],f=e.length,h=f-2,l=1;l<f;l++)u.push(s(e[l-1],e[l]));f--,r=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},n=t}else i||(e=Aa(Mn(e)?[]:{},e));if(!u){for(c in t)Kh.call(o,e,c,"get",t[c]);r=function(_){return Jh(_,o)||(a?e.p:e)}}}return Zr(n,r)},Bp=function(e,t,n){var i=e.labels,r=yi,a,o,c;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(c=a,r=o);return c},oi=function(e,t,n){var i=e.vars,r=i[t],a=Nt,o=e._ctx,c,l,u;if(r)return c=i[t+"Params"],l=i.callbackScope||e,n&&Gr.length&&sl(),o&&(Nt=o),u=c?r.apply(l,c):r.call(l),Nt=a,u},io=function(e){return Yr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!pn),e.progress()<1&&oi(e,"onInterrupt"),e},ra,ng=[],ig=function(e){if(e)if(e=!e.name&&e.default||e,Vh()||e.headless){var t=e.name,n=Wt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Uo,render:Jh,add:Kh,kill:jT,modifier:KT,rawVars:0},a={targetTest:0,get:0,getSetter:Zh,aliases:{},register:0};if(Pa(),e!==i){if(ni[t])return;ui(i,ui(al(e,r),a)),Aa(i.prototype,Aa(r,al(e,a))),ni[i.prop=t]=i,e.targetTest&&(Wc.push(i),Wh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}k0(t,i),e.register&&e.register(jn,i,Yn)}else ng.push(e)},At=255,ro={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},pu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*At+.5|0},rg=function(e,t,n){var i=e?Sr(e)?[e>>16,e>>8&At,e&At]:0:ro.black,r,a,o,c,l,u,f,h,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ro[e])i=ro[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&At,i&At,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&At,e&At]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Yf),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(l+1):u+l-u*l,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=pu(c+1/3,r,a),i[1]=pu(c,r,a),i[2]=pu(c-1/3,r,a);else if(~e.indexOf("="))return i=e.match(N0),n&&i.length<4&&(i[3]=1),i}else i=e.match(Yf)||ro.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/At,a=i[1]/At,o=i[2]/At,f=Math.max(r,a,o),h=Math.min(r,a,o),u=(f+h)/2,f===h?c=l=0:(d=f-h,l=u>.5?d/(2-f-h):d/(f+h),c=f===r?(a-o)/d+(a<o?6:0):f===a?(o-r)/d+2:(r-a)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},sg=function(e){var t=[],n=[],i=-1;return e.split(Wr).forEach(function(r){var a=r.match(ia)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},kp=function(e,t,n){var i="",r=(e+i).match(Wr),a=t?"hsla(":"rgba(",o=0,c,l,u,f;if(!r)return e;if(r=r.map(function(h){return(h=rg(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=sg(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(Wr,"1").split(ia),f=l.length-1;o<f;o++)i+=l[o]+(~c.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!l)for(l=e.split(Wr),f=l.length-1;o<f;o++)i+=l[o]+r[o];return i+l[f]},Wr=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ro)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),NT=/hsl[a]?\(/,ag=function(e){var t=e.join(" "),n;if(Wr.lastIndex=0,Wr.test(t))return n=NT.test(t),e[1]=kp(e[1],n),e[0]=kp(e[0],n,sg(e[1])),!0},Oo,ri=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],c,l,u,f,h,d,_=function g(m){var p=s()-i,M=m===!0,y,b,w,S;if((p>e||p<0)&&(n+=p-t),i+=p,w=i-n,y=w-a,(y>0||M)&&(S=++f.frame,h=w-f.time*1e3,f.time=w=w/1e3,a+=y+(y>=r?4:r-y),b=1),M||(c=l(g)),b)for(d=0;d<o.length;d++)o[d](w,h,S,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){O0&&(!Kf&&Vh()&&(Bi=Kf=window,Hh=Bi.document||{},li.gsap=jn,(Bi.gsapVersions||(Bi.gsapVersions=[])).push(jn.version),B0(rl||Bi.GreenSockGlobals||!Bi.gsap&&Bi||{}),ng.forEach(ig)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&f.sleep(),l=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},Oo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Oo=0,l=Uo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),a=f.time*1e3+r},add:function(m,p,M){var y=p?function(b,w,S,T){m(b,w,S,T),f.remove(y)}:m;return f.remove(m),o[M?"unshift":"push"](y),Pa(),y},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},f})(),Pa=function(){return!Oo&&ri.wake()},ut={},UT=/^[\d.\-M][\d.\-,\s]/,FT=/["']/g,OT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,c,l;r<a;r++)c=n[r],o=r!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[i]=isNaN(l)?l.replace(FT,"").trim():+l,i=c.substr(o+1).trim();return t},BT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},kT=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[OT(t[1])]:BT(e).split(",").map(G0)):ut._CE&&UT.test(e)?ut._CE("",e):n},og=function(e){return function(t){return 1-e(1-t)}},cg=function s(e,t){for(var n=e._first,i;n;)n instanceof Un?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},vs=function(e,t){return e&&(Wt(e)?e:ut[e]||kT(e))||t},Ls=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return qn(e,function(o){ut[o]=li[o]=r,ut[a=o.toLowerCase()]=n;for(var c in r)ut[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ut[o+"."+c]=r[c]}),r},lg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},mu=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/qf*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*dT((u-a)*r)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:lg(o);return r=qf/r,c.config=function(l,u){return s(e,l,u)},c},gu=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:lg(n);return i.config=function(r){return s(e,r)},i};qn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Ls(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;Ls("Elastic",mu("in"),mu("out"),mu());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Ls("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Ls("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ls("Circ",function(s){return-(D0(1-s*s)-1)});Ls("Sine",function(s){return s===1?1:-hT(s*uT)+1});Ls("Back",gu("in"),gu("out"),gu());ut.SteppedEase=ut.steps=li.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-Rt;return function(o){return((i*Yo(0,a,o)|0)+r)*n}}};wa.ease=ut["quad.out"];qn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Xh+=s+","+s+"Params,"});var ug=function(e,t){this.id=fT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:V0,this.set=t?t.getSetter:Zh},Bo=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ca(this,+t.duration,1,1),this.data=t.data,Nt&&(this._ctx=Nt,Nt.data.push(this)),Oo||ri.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ca(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Pa(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(El(this,n),!r._dp||r.parent||q0(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Hi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Rt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),H0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Fp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Fp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ra(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Rt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ol(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Rt?0:this._rts,this.totalTime(Yo(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Tl(this),yT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Pa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Rt&&(this._tTime-=Rt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Hi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Xn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ol(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=gT);var i=pn;return pn=n,Yh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),pn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Op(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Op(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(pi(this,n),Xn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Xn(i)),this._dur||(this._zTime=-Rt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Rt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Rt)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=Wt(n)?n:W0,o=function(){var l=i.then;i.then=null,Wt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=l),r(a),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){io(this)},s})();ui(Bo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Rt,_prom:0,_ps:!1,_rts:1});var Un=(function(s){L0(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Xn(n.sortChildren),Bt&&Hi(n.parent||Bt,ur(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Y0(ur(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return mo(0,arguments,this),this},t.from=function(i,r,a){return mo(1,arguments,this),this},t.fromTo=function(i,r,a,o){return mo(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,po(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new $t(i,r,pi(this,a),1),this},t.call=function(i,r,a){return Hi(this,$t.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,c,l,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new $t(i,a,pi(this,c)),this},t.staggerFrom=function(i,r,a,o,c,l,u){return a.runBackwards=1,po(a).immediateRender=Xn(a.immediateRender),this.staggerTo(i,r,a,o,c,l,u)},t.staggerFromTo=function(i,r,a,o,c,l,u,f){return o.startAt=a,po(o).immediateRender=Xn(o.immediateRender),this.staggerTo(i,r,o,c,l,u,f)},t.render=function(i,r,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:Zt(i),f=this._zTime<0!=i<0&&(this._initted||!l),h,d,_,g,m,p,M,y,b,w,S,T;if(this!==Bt&&u>c&&i>=0&&(u=c),u!==this._tTime||a||f){if(o!==this._time&&l&&(u+=this._time-o,i+=this._time-o),h=u,b=this._start,y=this._ts,p=!y,f&&(l||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(S=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(h=Zt(u%m),u===c?(g=this._repeat,h=l):(w=Zt(u/m),g=~~w,g&&g===w&&(h=l,g--),h>l&&(h=l)),w=Ra(this._tTime,m),!o&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),S&&g&1&&(h=l-h,T=1),g!==w&&!this._lock){var R=S&&w&1,x=R===(S&&g&1);if(g<w&&(R=!R),o=R?0:u%l?l:u,this._lock=1,this.render(o||(T?0:Zt(g*m)),r,!l)._lock=0,this._tTime=u,!r&&this.parent&&oi(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,x&&(this._lock=2,o=R?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;cg(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=TT(this,Zt(o),Zt(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&!r&&!w&&(oi(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,r,a),h!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=-Rt);break}}d=_}else{d=this._last;for(var v=i<0?i:h;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,r,a||pn&&Yh(d)),h!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=v?-Rt:Rt);break}}d=_}}if(M&&!r&&(this.pause(),M.render(h>=o?0:-Rt)._zTime=h>=o?1:-1,this._ts))return this._start=b,Tl(this),this.render(i,r,a);this._onUpdate&&!r&&oi(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&o)&&(b===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Yr(this,1),!r&&!(i<0&&!o)&&(u||o||!c)&&(oi(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Sr(r)||(r=pi(this,r,i)),!(i instanceof Bo)){if(Mn(i))return i.forEach(function(o){return a.add(o,r)}),this;if(hn(i))return this.addLabel(i,r);if(Wt(i))i=$t.delayedCall(0,i);else return this}return this!==i?Hi(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-yi);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof $t?r&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,a)))),l=l._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return hn(i)?this.removeLabel(i):Wt(i)?this.killTweensOf(i):(i.parent===this&&Sl(this,i),i===this._recent&&(this._recent=this._last),xs(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Zt(ri.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=pi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=$t.delayedCall(0,r||Uo,a);return o.data="isPause",this._hasPause=1,Hi(this,o,pi(this,i))},t.removePause=function(i){var r=this._first;for(i=pi(this,i);r;)r._start===i&&r.data==="isPause"&&Yr(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)Or!==o[c]&&o[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=bi(i),c=this._first,l=Sr(r),u;c;)c instanceof $t?_T(c._targets,o)&&(l?(!Or||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(u=c.getTweensOf(o,r)).length&&a.push.apply(a,u),c=c._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=pi(a,i),c=r,l=c.startAt,u=c.onStart,f=c.onStartParams,h=c.immediateRender,d,_=$t.to(a,ui({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||Rt,onStart:function(){if(a.pause(),!d){var m=r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());_._dur!==m&&Ca(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},r));return h?_.render(0):_},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,ui({startAt:{time:pi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Bp(this,pi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Bp(this,pi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Rt)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,c=this.labels,l;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(l in c)c[l]>=a&&(c[l]+=i);return xs(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),xs(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,c=yi,l,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Hi(a,o,u-o._delay,1)._lock=0):c=u,u<0&&o._ts&&(r-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),o._end>r&&o._ts&&(r=o._end),o=l;Ca(a,a===Bt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Bt._ts&&(H0(Bt,ol(i,Bt)),z0=ri.frame),ri.frame>=Np){Np+=ci.autoSleep||120;var r=Bt._first;if((!r||!r._ts)&&ci.autoSleep&&ri._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ri.sleep()}}},e})(Bo);ui(Un.prototype,{_lock:0,_hasPause:0,_forcing:0});var zT=function(e,t,n,i,r,a,o){var c=new Yn(this._pt,e,t,0,1,gg,null,r),l=0,u=0,f,h,d,_,g,m,p,M;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Fo(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),h=n.match(hu)||[];f=hu.exec(i);)_=f[0],g=i.substring(l,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(m=parseFloat(h[u-1])||0,c._pt={_next:c._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?la(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},l=hu.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(U0.test(i)||p)&&(c.e=0),this._pt=c,c},Kh=function(e,t,n,i,r,a,o,c,l,u){Wt(i)&&(i=i(r||0,e,a));var f=e[t],h=n!=="get"?n:Wt(f)?l?e[t.indexOf("set")||!Wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():f,d=Wt(f)?l?XT:pg:$h,_;if(hn(i)&&(~i.indexOf("random(")&&(i=Fo(i)),i.charAt(1)==="="&&(_=la(h,i)+(vn(h)||0),(_||_===0)&&(i=_))),!u||h!==i||th)return!isNaN(h*i)&&i!==""?(_=new Yn(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?YT:mg,0,d),l&&(_.fp=l),o&&_.modifier(o,this,e),this._pt=_):(!f&&!(t in e)&&Gh(t,i),zT.call(this,e,t,h,i,d,c||ci.stringFilter,l))},VT=function(e,t,n,i,r){if(Wt(e)&&(e=go(e,r,t,n,i)),!Qi(e)||e.style&&e.nodeType||Mn(e)||I0(e))return hn(e)?go(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=go(e[o],r,t,n,i);return a},fg=function(e,t,n,i,r,a){var o,c,l,u;if(ni[e]&&(o=new ni[e]).init(r,o.rawVars?t[e]:VT(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=c=new Yn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==ra))for(l=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)l[o._props[u]]=c;return o},Or,th,jh=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,y=e._overwrite==="auto"&&!kh,b=e.timeline,w,S,T,R,x,v,C,P,N,U,V,B,K;if(b&&(!h||!r)&&(r="none"),e._ease=vs(r,wa.ease),e._yEase=f?og(vs(f===!0?r:f,wa.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!b&&!!i.runBackwards,!b||h&&!i.stagger){if(P=m[0]?_s(m[0]).harness:0,B=P&&i[P.prop],w=al(i,Wh),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&_?Gc:mT),g._lazy=0),a){if(Yr(e._startAt=$t.set(m,ui({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Xn(c),startAt:null,delay:0,onUpdate:l&&function(){return oi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn||!o&&!d)&&e._startAt.revert(Gc),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),T=ui({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Xn(c),immediateRender:o,stagger:0,parent:p},w),B&&(T[P.prop]=B),Yr(e._startAt=$t.set(m,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn?e._startAt.revert(Gc):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,Rt,Rt);else if(!t)return}for(e._pt=e._ptCache=0,c=_&&Xn(c)||c&&!_,S=0;S<m.length;S++){if(x=m[S],C=x._gsap||qh(m)[S]._gsap,e._ptLookup[S]=U={},jf[C.id]&&Gr.length&&sl(),V=M===m?S:M.indexOf(x),P&&(N=new P).init(x,B||w,e,V,M)!==!1&&(e._pt=R=new Yn(e._pt,x,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(W){U[W]=R}),N.priority&&(v=1)),!P||B)for(T in w)ni[T]&&(N=fg(T,w,e,V,x,M))?N.priority&&(v=1):U[T]=R=Kh.call(e,x,T,"get",w[T],V,M,0,i.stringFilter);e._op&&e._op[S]&&e.kill(x,e._op[S]),y&&e._pt&&(Or=e,Bt.killTweensOf(x,U,e.globalTime(t)),K=!e.parent,Or=0),e._pt&&c&&(jf[C.id]=1)}v&&_g(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!K,h&&t<=0&&b.render(yi,!0,!0)},HT=function(e,t,n,i,r,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return th=1,e.vars[t]="+=0",jh(e,o),th=0,c?No(t+" not eligible for reset"):1;l.push(u)}for(d=l.length;d--;)f=l[d],u=f._pt||f,u.s=(i||i===0)&&!r?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=qt(n)+vn(f.e)),f.b&&(f.b=u.s+vn(f.b))},GT=function(e,t){var n=e[0]?_s(e[0]).harness:0,i=n&&n.aliases,r,a,o,c;if(!i)return t;r=Aa({},t);for(a in i)if(a in r)for(c=i[a].split(","),o=c.length;o--;)r[c[o]]=r[a];return r},WT=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(Mn(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},go=function(e,t,n,i,r){return Wt(e)?e.call(t,n,i,r):hn(e)&&~e.indexOf("random(")?Fo(e):e},hg=Xh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",dg={};qn(hg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return dg[s]=1});var $t=(function(s){L0(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:po(i))||this;var c=o.vars,l=c.duration,u=c.delay,f=c.immediateRender,h=c.stagger,d=c.overwrite,_=c.keyframes,g=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,M=i.parent||Bt,y=(Mn(n)||I0(n)?Sr(n[0]):"length"in i)?[n]:bi(n),b,w,S,T,R,x,v,C;if(o._targets=y.length?qh(y):No("GSAP target "+n+" not found. https://gsap.com",!ci.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||h||bc(l)||bc(u)){if(i=o.vars,b=o.timeline=new Un({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:y}),b.kill(),b.parent=b._dp=ur(o),b._start=0,h||bc(l)||bc(u)){if(T=y.length,v=h&&Z0(h),Qi(h))for(R in h)~hg.indexOf(R)&&(C||(C={}),C[R]=h[R]);for(w=0;w<T;w++)S=al(i,dg),S.stagger=0,p&&(S.yoyoEase=p),C&&Aa(S,C),x=y[w],S.duration=+go(l,ur(o),w,x,y),S.delay=(+go(u,ur(o),w,x,y)||0)-o._delay,!h&&T===1&&S.delay&&(o._delay=u=S.delay,o._start+=u,S.delay=0),b.to(x,S,v?v(w,x,y):0),b._ease=ut.none;b.duration()?l=u=0:o.timeline=0}else if(_){po(ui(b.vars.defaults,{ease:"none"})),b._ease=vs(_.ease||i.ease||"none");var P=0,N,U,V;if(Mn(_))_.forEach(function(B){return b.to(y,B,">")}),b.duration();else{S={};for(R in _)R==="ease"||R==="easeEach"||WT(R,_[R],S,_.easeEach);for(R in S)for(N=S[R].sort(function(B,K){return B.t-K.t}),P=0,w=0;w<N.length;w++)U=N[w],V={ease:U.e,duration:(U.t-(w?N[w-1].t:0))/100*l},V[R]=U.v,b.to(y,V,P),P+=V.duration;b.duration()<l&&b.to({},{duration:l-b.duration()})}}l||o.duration(l=b.duration())}else o.timeline=0;return d===!0&&!kh&&(Or=ur(o),Bt.killTweensOf(y),Or=0),Hi(M,ur(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!l&&!_&&o._start===Zt(M._time)&&Xn(f)&&bT(ur(o))&&M.data!=="nested")&&(o._tTime=-Rt,o.render(Math.max(0,-u)||0)),m&&Y0(ur(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,c=this._tDur,l=this._dur,u=i<0,f=i>c-Rt&&!u?c:i<Rt?0:i,h,d,_,g,m,p,M,y,b;if(!l)ST(this,i,r,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,y=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,a);if(h=Zt(f%g),f===c?(_=this._repeat,h=l):(m=Zt(f/g),_=~~m,_&&_===m?(h=l,_--):h>l&&(h=l)),p=this._yoyo&&_&1,p&&(b=this._yEase,h=l-h),m=Ra(this._tTime,g),h===o&&!a&&this._initted&&_===m)return this._tTime=f,this;_!==m&&(y&&this._yEase&&cg(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==g&&this._initted&&(this._lock=a=1,this.render(Zt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(K0(this,u?i:h,a,r,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(l!==this._dur)return this.render(i,r,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(b||this._ease)(h/l),this._from&&(this.ratio=M=1-M),!o&&f&&!r&&!m&&(oi(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&$f(this,i,r,a),oi(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&oi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&$f(this,i,!0,!0),(i||!l)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Yr(this,1),!r&&!(u&&!o)&&(f||o||p)&&(oi(this,f===c?"onComplete":"onReverseComplete",!0),this._prom&&!(f<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,c){Oo||ri.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||jh(this,l),u=this._ease(l/this._dur),HT(this,i,r,a,o,u,l,c)?this.resetTo(i,r,a,o,1):(El(this,0),this.parent||X0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?io(this):this.scrollTrigger&&this.scrollTrigger.kill(!!pn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Or&&Or.vars.overwrite!==!0)._first||io(this),this.parent&&a!==this.timeline.totalDuration()&&Ca(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?bi(i):o,l=this._ptLookup,u=this._pt,f,h,d,_,g,m,p;if((!r||r==="all")&&vT(o,c))return r==="all"&&(this._pt=0),io(this);for(f=this._op=this._op||[],r!=="all"&&(hn(r)&&(g={},qn(r,function(M){return g[M]=1}),r=g),r=GT(o,r)),p=o.length;p--;)if(~c.indexOf(o[p])){h=l[p],r==="all"?(f[p]=r,_=h,d={}):(d=f[p]=f[p]||{},_=r);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Sl(this,m,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&io(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return mo(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return mo(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Bt.killTweensOf(i,r,a)},e})(Bo);ui($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});qn("staggerTo,staggerFrom,staggerFromTo",function(s){$t[s]=function(){var e=new Un,t=Jf.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var $h=function(e,t,n){return e[t]=n},pg=function(e,t,n){return e[t](n)},XT=function(e,t,n,i){return e[t](i.fp,n)},qT=function(e,t,n){return e.setAttribute(t,n)},Zh=function(e,t){return Wt(e[t])?pg:zh(e[t])&&e.setAttribute?qT:$h},mg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},YT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},gg=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Jh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},KT=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},jT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Sl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},$T=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},_g=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Yn=(function(){function s(t,n,i,r,a,o,c,l,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||mg,this.d=c||this,this.set=l||$h,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=$T,this.m=n,this.mt=r,this.tween=i},s})();qn(Xh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Wh[s]=1});li.TweenMax=li.TweenLite=$t;li.TimelineLite=li.TimelineMax=Un;Bt=new Un({sortChildren:!1,defaults:wa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ci.stringFilter=ag;var ys=[],Xc={},ZT=[],zp=0,JT=0,_u=function(e){return(Xc[e]||ZT).map(function(t){return t()})},nh=function(){var e=Date.now(),t=[];e-zp>2&&(_u("matchMediaInit"),ys.forEach(function(n){var i=n.queries,r=n.conditions,a,o,c,l;for(o in i)a=Bi.matchMedia(i[o]).matches,a&&(c=1),a!==r[o]&&(r[o]=a,l=1);l&&(n.revert(),c&&t.push(n))}),_u("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),zp=e,_u("matchMedia"))},xg=(function(){function s(t,n){this.selector=n&&Qf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=JT++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Wt(n)&&(r=i,i=n,n=Wt);var a=this,o=function(){var l=Nt,u=a.selector,f;return l&&l!==a&&l.data.push(a),r&&(a.selector=Qf(r)),Nt=a,f=i.apply(a,arguments),Wt(f)&&a._r.push(f),Nt=l,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Wt?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},e.ignore=function(n){var i=Nt;Nt=null,n(this),Nt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof $t&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof Un?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof $t)&&l.revert&&l.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ys.length;a--;)ys[a].id===this.id&&ys.splice(a,1)},e.revert=function(n){this.kill(n||{})},s})(),QT=(function(){function s(t){this.contexts=[],this.scope=t,Nt&&Nt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Qi(n)||(n={matches:n});var a=new xg(0,r||this.scope),o=a.conditions={},c,l,u;Nt&&!a.selector&&(a.selector=Nt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?u=1:(c=Bi.matchMedia(n[l]),c&&(ys.indexOf(a)<0&&ys.push(a),(o[l]=c.matches)&&(u=1),c.addListener?c.addListener(nh):c.addEventListener("change",nh)));return u&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),cl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return ig(i)})},timeline:function(e){return new Un(e)},getTweensOf:function(e,t){return Bt.getTweensOf(e,t)},getProperty:function(e,t,n,i){hn(e)&&(e=bi(e)[0]);var r=_s(e||{}).get,a=n?W0:G0;return n==="native"&&(n=""),e&&(t?a((ni[t]&&ni[t].get||r)(e,t,n,i)):function(o,c,l){return a((ni[o]&&ni[o].get||r)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=bi(e),e.length>1){var i=e.map(function(u){return jn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var f=r;f--;)i[f](u)}}e=e[0]||{};var a=ni[t],o=_s(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(u){var f=new a;ra._pt=0,f.init(e,n?u+n:u,ra,0,[e]),f.render(1,f),ra._pt&&Jh(1,ra)}:o.set(e,c);return a?l:function(u){return l(e,c,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=jn.to(e,ui((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,l,u){return r.resetTo(t,c,l,u)};return a.tween=r,a},isTweening:function(e){return Bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=vs(e.ease,wa.ease)),Up(wa,e||{})},config:function(e){return Up(ci,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ni[o]&&!li[o]&&No(t+" effect requires "+o+" plugin.")}),du[t]=function(o,c,l){return n(bi(o),ui(c||{},r),l)},a&&(Un.prototype[t]=function(o,c,l){return this.add(du[t](o,Qi(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){ut[e]=vs(t)},parseEase:function(e,t){return arguments.length?vs(e,t):ut},getById:function(e){return Bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Un(e),i,r;for(n.smoothChildTiming=Xn(e.smoothChildTiming),Bt.remove(n),n._dp=0,n._time=n._tTime=Bt._time,i=Bt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof $t&&i.vars.onComplete===i._targets[0]))&&Hi(n,i,i._start-i._delay),i=r;return Hi(Bt,n,0),n},context:function(e,t){return e?new xg(e,t):Nt},matchMedia:function(e){return new QT(e)},matchMediaRefresh:function(){return ys.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||nh()},addEventListener:function(e,t){var n=Xc[e]||(Xc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Xc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:LT,wrapYoyo:DT,distribute:Z0,random:Q0,snap:J0,normalize:PT,getUnit:vn,clamp:wT,splitColor:rg,toArray:bi,selector:Qf,mapRange:tg,pipe:RT,unitize:CT,interpolate:IT,shuffle:$0},install:B0,effects:du,ticker:ri,updateRoot:Un.updateRoot,plugins:ni,globalTimeline:Bt,core:{PropTween:Yn,globals:k0,Tween:$t,Timeline:Un,Animation:Bo,getCache:_s,_removeLinkedListItem:Sl,reverting:function(){return pn},context:function(e){return e&&Nt&&(Nt.data.push(e),e._ctx=Nt),Nt},suppressOverwrites:function(e){return kh=e}}};qn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return cl[s]=$t[s]});ri.add(Un.updateRoot);ra=cl.to({},{duration:0});var eE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},tE=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=eE(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},xu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var c,l;if(hn(r)&&(c={},qn(r,function(u){return c[u]=1}),r=c),t){c={};for(l in r)c[l]=t(r[l]);r=c}tE(o,r)}}}},jn=cl.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)pn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},xu("roundProps",eh),xu("modifiers"),xu("snap",J0))||cl;$t.version=Un.version=jn.version="3.13.0";O0=1;Vh()&&Pa();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;var Vp,Br,ua,Qh,ms,Hp,ed,nE=function(){return typeof window<"u"},Tr={},ls=180/Math.PI,fa=Math.PI/180,Zs=Math.atan2,Gp=1e8,td=/([A-Z])/g,iE=/(left|right|width|margin|padding|x)/i,rE=/[\s,\(]\S/,qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ih=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},aE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},oE=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},vg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},yg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},cE=function(e,t,n){return e.style[t]=n},lE=function(e,t,n){return e.style.setProperty(t,n)},uE=function(e,t,n){return e._gsap[t]=n},fE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},hE=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},dE=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},kt="transform",Kn=kt+"Origin",pE=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in Tr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=fr(i,o)}):this.tfm[e]=a.x?a[e]:fr(i,e),e===Kn&&(this.tfm.zOrigin=a.zOrigin);else return qi.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(kt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Kn,t,"")),e=kt}(r||t)&&this.props.push(e,t,r[e])},bg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},mE=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(td,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=ed(),(!r||!r.isStart)&&!n[kt]&&(bg(n),i.zOrigin&&n[Kn]&&(n[Kn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Mg=function(e,t){var n={target:e,props:[],revert:mE,save:pE};return e._gsap||jn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Sg,rh=function(e,t){var n=Br.createElementNS?Br.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Br.createElement(e);return n&&n.style?n:Br.createElement(e)},Mi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(td,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,La(t)||t,1)||""},Wp="O,Moz,ms,Ms,Webkit".split(","),La=function(e,t,n){var i=t||ms,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Wp[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Wp[a]:"")+e},sh=function(){nE()&&window.document&&(Vp=window,Br=Vp.document,ua=Br.documentElement,ms=rh("div")||{style:{}},rh("div"),kt=La(kt),Kn=kt+"Origin",ms.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Sg=!!La("perspective"),ed=jn.core.reverting,Qh=1)},Xp=function(e){var t=e.ownerSVGElement,n=rh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),ua.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),ua.removeChild(n),r},qp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Tg=function(e){var t,n;try{t=e.getBBox()}catch{t=Xp(e),n=1}return t&&(t.width||t.height)||n||(t=Xp(e)),t&&!t.width&&!t.x&&!t.y?{x:+qp(e,["x","cx","x1"])||0,y:+qp(e,["y","cy","y1"])||0,width:0,height:0}:t},Eg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Tg(e))},ws=function(e,t){if(t){var n=e.style,i;t in Tr&&t!==Kn&&(t=kt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(td,"-$1").toLowerCase())):n.removeAttribute(t)}},kr=function(e,t,n,i,r,a){var o=new Yn(e._pt,t,n,0,1,a?yg:vg);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Yp={deg:1,rad:1,turn:1},gE={grid:1,flex:1},Kr=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=ms.style,c=iE.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),f=100,h=i==="px",d=i==="%",_,g,m,p;if(i===a||!r||Yp[i]||Yp[a])return r;if(a!=="px"&&!h&&(r=s(e,t,n,"px")),p=e.getCTM&&Eg(e),(d||a==="%")&&(Tr[t]||~t.indexOf("adius")))return _=p?e.getBBox()[c?"width":"height"]:e[u],qt(d?r/_*f:r/100*_);if(o[c?"width":"height"]=f+(h?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Br||!g.appendChild)&&(g=Br.body),m=g._gsap,m&&d&&m.width&&c&&m.time===ri.time&&!m.uncache)return qt(r/m.width*f);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=f+i,_=e[u],M?e.style[t]=M:ws(e,t)}else(d||a==="%")&&!gE[Mi(g,"display")]&&(o.position=Mi(e,"position")),g===e&&(o.position="static"),g.appendChild(ms),_=ms[u],g.removeChild(ms),o.position="absolute";return c&&d&&(m=_s(g),m.time=ri.time,m.width=g[u]),qt(h?_*r/f:_&&r?f/_*r:0)},fr=function(e,t,n,i){var r;return Qh||sh(),t in qi&&t!=="transform"&&(t=qi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Tr[t]&&t!=="transform"?(r=zo(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:ul(Mi(e,Kn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ll[t]&&ll[t](e,t,n)||Mi(e,t)||V0(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Kr(e,t,r,n)+n:r},_E=function(e,t,n,i){if(!n||n==="none"){var r=La(t,e,1),a=r&&Mi(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Mi(e,"borderTopColor"))}var o=new Yn(this._pt,e.style,t,0,1,gg),c=0,l=0,u,f,h,d,_,g,m,p,M,y,b,w;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Mi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Mi(e,t)||i,g?e.style[t]=g:ws(e,t)),u=[n,i],ag(u),n=u[0],i=u[1],h=n.match(ia)||[],w=i.match(ia)||[],w.length){for(;f=ia.exec(i);)m=f[0],M=i.substring(c,f.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=h[l++]||"")&&(d=parseFloat(g)||0,b=g.substr((d+"").length),m.charAt(1)==="="&&(m=la(d,m)+b),p=parseFloat(m),y=m.substr((p+"").length),c=ia.lastIndex-y.length,y||(y=y||ci.units[t]||b,c===i.length&&(i+=y,o.e+=y)),b!==y&&(d=Kr(e,t,g,y)||0),o._pt={_next:o._pt,p:M||l===1?M:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=t==="display"&&i==="none"?yg:vg;return U0.test(i)&&(o.e=0),this._pt=o,o},Kp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Kp[n]||n,t[1]=Kp[i]||i,t.join(" ")},vE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)o=r[l],Tr[o]&&(c=1,o=o==="transformOrigin"?Kn:kt),ws(n,o);c&&(ws(n,kt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",zo(n,1),a.uncache=1,bg(i)))}},ll={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Yn(e._pt,t,n,0,0,vE);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},ko=[1,0,0,1,0,0],wg={},Ag=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},jp=function(e){var t=Mi(e,kt);return Ag(t)?ko:t.substr(7).match(N0).map(qt)},nd=function(e,t){var n=e._gsap||_s(e),i=e.style,r=jp(e),a,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?ko:r):(r===ko&&!e.offsetParent&&e!==ua&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,ua.appendChild(e)),r=jp(e),c?i.display=c:ws(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):ua.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ah=function(e,t,n,i,r,a){var o=e._gsap,c=r||nd(e,!0),l=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=c[0],_=c[1],g=c[2],m=c[3],p=c[4],M=c[5],y=t.split(" "),b=parseFloat(y[0])||0,w=parseFloat(y[1])||0,S,T,R,x;n?c!==ko&&(T=d*m-_*g)&&(R=b*(m/T)+w*(-g/T)+(g*M-m*p)/T,x=b*(-_/T)+w*(d/T)-(d*M-_*p)/T,b=R,w=x):(S=Tg(e),b=S.x+(~y[0].indexOf("%")?b/100*S.width:b),w=S.y+(~(y[1]||y[0]).indexOf("%")?w/100*S.height:w)),i||i!==!1&&o.smooth?(p=b-l,M=w-u,o.xOffset=f+(p*d+M*g)-p,o.yOffset=h+(p*_+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=w,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Kn]="0px 0px",a&&(kr(a,o,"xOrigin",l,b),kr(a,o,"yOrigin",u,w),kr(a,o,"xOffset",f,o.xOffset),kr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+w)},zo=function(e,t){var n=e._gsap||new ug(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=Mi(e,Kn)||"0",u,f,h,d,_,g,m,p,M,y,b,w,S,T,R,x,v,C,P,N,U,V,B,K,W,ee,D,ce,Ae,Fe,Oe,qe;return u=f=h=g=m=p=M=y=b=0,d=_=1,n.svg=!!(e.getCTM&&Eg(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[kt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[kt]!=="none"?c[kt]:"")),i.scale=i.rotate=i.translate="none"),T=nd(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),l=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),ah(e,K||l,!!K||n.originIsAbsolute,n.smooth!==!1,T)),w=n.xOrigin||0,S=n.yOrigin||0,T!==ko&&(C=T[0],P=T[1],N=T[2],U=T[3],u=V=T[4],f=B=T[5],T.length===6?(d=Math.sqrt(C*C+P*P),_=Math.sqrt(U*U+N*N),g=C||P?Zs(P,C)*ls:0,M=N||U?Zs(N,U)*ls+g:0,M&&(_*=Math.abs(Math.cos(M*fa))),n.svg&&(u-=w-(w*C+S*N),f-=S-(w*P+S*U))):(qe=T[6],Fe=T[7],D=T[8],ce=T[9],Ae=T[10],Oe=T[11],u=T[12],f=T[13],h=T[14],R=Zs(qe,Ae),m=R*ls,R&&(x=Math.cos(-R),v=Math.sin(-R),K=V*x+D*v,W=B*x+ce*v,ee=qe*x+Ae*v,D=V*-v+D*x,ce=B*-v+ce*x,Ae=qe*-v+Ae*x,Oe=Fe*-v+Oe*x,V=K,B=W,qe=ee),R=Zs(-N,Ae),p=R*ls,R&&(x=Math.cos(-R),v=Math.sin(-R),K=C*x-D*v,W=P*x-ce*v,ee=N*x-Ae*v,Oe=U*v+Oe*x,C=K,P=W,N=ee),R=Zs(P,C),g=R*ls,R&&(x=Math.cos(R),v=Math.sin(R),K=C*x+P*v,W=V*x+B*v,P=P*x-C*v,B=B*x-V*v,C=K,V=W),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=qt(Math.sqrt(C*C+P*P+N*N)),_=qt(Math.sqrt(B*B+qe*qe)),R=Zs(V,B),M=Math.abs(R)>2e-4?R*ls:0,b=Oe?1/(Oe<0?-Oe:Oe):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ag(Mi(e,kt)),K&&e.setAttribute("transform",K))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(d*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=qt(d),n.scaleY=qt(_),n.rotation=qt(g)+o,n.rotationX=qt(m)+o,n.rotationY=qt(p)+o,n.skewX=M+o,n.skewY=y+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Kn]=ul(l)),n.xOffset=n.yOffset=0,n.force3D=ci.force3D,n.renderTransform=n.svg?bE:Sg?Rg:yE,n.uncache=0,n},ul=function(e){return(e=e.split(" "))[0]+" "+e[1]},vu=function(e,t,n){var i=vn(t);return qt(parseFloat(t)+parseFloat(Kr(e,"x",n+"px",i)))+i},yE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Rg(e,t)},as="0deg",$a="0px",os=") ",Rg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,y=n.zOrigin,b="",w=p==="auto"&&e&&e!==1||p===!0;if(y&&(f!==as||u!==as)){var S=parseFloat(u)*fa,T=Math.sin(S),R=Math.cos(S),x;S=parseFloat(f)*fa,x=Math.cos(S),a=vu(M,a,T*x*-y),o=vu(M,o,-Math.sin(S)*-y),c=vu(M,c,R*x*-y+y)}m!==$a&&(b+="perspective("+m+os),(i||r)&&(b+="translate("+i+"%, "+r+"%) "),(w||a!==$a||o!==$a||c!==$a)&&(b+=c!==$a||w?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+os),l!==as&&(b+="rotate("+l+os),u!==as&&(b+="rotateY("+u+os),f!==as&&(b+="rotateX("+f+os),(h!==as||d!==as)&&(b+="skew("+h+", "+d+os),(_!==1||g!==1)&&(b+="scale("+_+", "+g+os),M.style[kt]=b||"translate(0, 0)"},bE=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,y=parseFloat(a),b=parseFloat(o),w,S,T,R,x;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=fa,l*=fa,w=Math.cos(c)*f,S=Math.sin(c)*f,T=Math.sin(c-l)*-h,R=Math.cos(c-l)*h,l&&(u*=fa,x=Math.tan(l-u),x=Math.sqrt(1+x*x),T*=x,R*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),w*=x,S*=x)),w=qt(w),S=qt(S),T=qt(T),R=qt(R)):(w=f,R=h,S=T=0),(y&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(y=Kr(d,"x",a,"px"),b=Kr(d,"y",o,"px")),(_||g||m||p)&&(y=qt(y+_-(_*w+g*T)+m),b=qt(b+g-(_*S+g*R)+p)),(i||r)&&(x=d.getBBox(),y=qt(y+i/100*x.width),b=qt(b+r/100*x.height)),x="matrix("+w+","+S+","+T+","+R+","+y+","+b+")",d.setAttribute("transform",x),M&&(d.style[kt]=x)},ME=function(e,t,n,i,r){var a=360,o=hn(r),c=parseFloat(r)*(o&&~r.indexOf("rad")?ls:1),l=c-i,u=i+l+"deg",f,h;return o&&(f=r.split("_")[1],f==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),f==="cw"&&l<0?l=(l+a*Gp)%a-~~(l/a)*a:f==="ccw"&&l>0&&(l=(l-a*Gp)%a-~~(l/a)*a)),e._pt=h=new Yn(e._pt,t,n,i,l,sE),h.e=u,h.u="deg",e._props.push(n),h},$p=function(e,t){for(var n in t)e[n]=t[n];return e},SE=function(e,t,n){var i=$p({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,u,f,h,d,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[kt]=t,o=zo(n,1),ws(n,kt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[kt],a[kt]=t,o=zo(n,1),a[kt]=l);for(c in Tr)l=i[c],u=o[c],l!==u&&r.indexOf(c)<0&&(d=vn(l),_=vn(u),f=d!==_?Kr(n,c,l,_):parseFloat(l),h=parseFloat(u),e._pt=new Yn(e._pt,o,c,f,h-f,ih),e._pt.u=_||0,e._props.push(c));$p(o,i)};qn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});ll[e>1?"border"+s:s]=function(o,c,l,u,f){var h,d;if(arguments.length<4)return h=a.map(function(_){return fr(o,_,l)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(_,g){return d[_]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(c,d,f)}});var Cg={name:"css",register:sh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,c=n.vars.startAt,l,u,f,h,d,_,g,m,p,M,y,b,w,S,T,R;Qh||sh(),this.styles=this.styles||Mg(e),R=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(ni[g]&&fg(g,t,n,i,e,r)))){if(d=typeof u,_=ll[g],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Fo(u)),_)_(this,e,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Wr.lastIndex=0,Wr.test(l)||(m=vn(l),p=vn(u)),p?m!==p&&(l=Kr(e,g,l,p)+p):m&&(u+=m),this.add(o,"setProperty",l,u,i,r,0,0,g),a.push(g),R.push(g,0,o[g]);else if(d!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,e,r):c[g],hn(l)&&~l.indexOf("random(")&&(l=Fo(l)),vn(l+"")||l==="auto"||(l+=ci.units[g]||vn(fr(e,g))||""),(l+"").charAt(1)==="="&&(l=fr(e,g))):l=fr(e,g),h=parseFloat(l),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),g in qi&&(g==="autoAlpha"&&(h===1&&fr(e,"visibility")==="hidden"&&f&&(h=0),R.push("visibility",0,o.visibility),kr(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=qi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Tr,y){if(this.styles.save(g),d==="string"&&u.substring(0,6)==="var(--"&&(u=Mi(e,u.substring(4,u.indexOf(")"))),f=parseFloat(u)),b||(w=e._gsap,w.renderTransform&&!t.parseTransform||zo(e,t.parseTransform),S=t.smoothOrigin!==!1&&w.smooth,b=this._pt=new Yn(this._pt,o,kt,0,1,w.renderTransform,w,0,-1),b.dep=1),g==="scale")this._pt=new Yn(this._pt,w,"scaleY",w.scaleY,(M?la(w.scaleY,M+f):f)-w.scaleY||0,ih),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Kn,0,o[Kn]),u=xE(u),w.svg?ah(e,u,0,S,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&kr(this,w,"zOrigin",w.zOrigin,p),kr(this,o,g,ul(l),ul(u)));continue}else if(g==="svgOrigin"){ah(e,u,1,S,0,this);continue}else if(g in wg){ME(this,w,g,h,M?la(h,M+u):u);continue}else if(g==="smoothOrigin"){kr(this,w,"smooth",w.smooth,u);continue}else if(g==="force3D"){w[g]=u;continue}else if(g==="transform"){SE(this,u,e);continue}}else g in o||(g=La(g)||g);if(y||(f||f===0)&&(h||h===0)&&!rE.test(u)&&g in o)m=(l+"").substr((h+"").length),f||(f=0),p=vn(u)||(g in ci.units?ci.units[g]:m),m!==p&&(h=Kr(e,g,l,p)),this._pt=new Yn(this._pt,y?w:o,g,h,(M?la(h,M+f):f)-h,!y&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?oE:ih),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=aE);else if(g in o)_E.call(this,e,g,l,M?M+u:u);else if(g in e)this.add(e,g,l||e[g],M?M+u:u,i,r);else if(g!=="parseTransform"){Gh(g,u);continue}y||(g in o?R.push(g,0,o[g]):typeof e[g]=="function"?R.push(g,2,e[g]()):R.push(g,1,l||e[g])),a.push(g)}}T&&_g(this)},render:function(e,t){if(t.tween._time||!ed())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:fr,aliases:qi,getSetter:function(e,t,n){var i=qi[t];return i&&i.indexOf(",")<0&&(t=i),t in Tr&&t!==Kn&&(e._gsap.x||fr(e,"x"))?n&&Hp===n?t==="scale"?fE:uE:(Hp=n||{})&&(t==="scale"?hE:dE):e.style&&!zh(e.style[t])?cE:~t.indexOf("-")?lE:Zh(e,t)},core:{_removeProperty:ws,_getMatrix:nd}};jn.utils.checkPrefix=La;jn.core.getStyleSaver=Mg;(function(s,e,t,n){var i=qn(s+","+e+","+t,function(r){Tr[r]=1});qn(e,function(r){ci.units[r]="deg",wg[r]=1}),qi[i[13]]=s+","+e,qn(n,function(r){var a=r.split(":");qi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");qn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){ci.units[s]="px"});jn.registerPlugin(Cg);var yt=jn.registerPlugin(Cg)||jn;yt.core.Tween;function TE(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function EE(s,e,t){return e&&TE(s.prototype,e),s}var dn,qc,si,zr,Vr,ha,Pg,us,_o,Lg,mr,Ri,Dg,Ig=function(){return dn||typeof window<"u"&&(dn=window.gsap)&&dn.registerPlugin&&dn},Ng=1,sa=[],st=[],$i=[],xo=Date.now,oh=function(e,t){return t},wE=function(){var e=_o.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,st),i.push.apply(i,$i),st=n,$i=i,oh=function(a,o){return t[a](o)}},Xr=function(e,t){return~$i.indexOf(e)&&$i[$i.indexOf(e)+1][t]},vo=function(e){return!!~Lg.indexOf(e)},Rn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},An=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Mc="scrollLeft",Sc="scrollTop",ch=function(){return mr&&mr.isPressed||st.cache++},fl=function(e,t){var n=function i(r){if(r||r===0){Ng&&(si.history.scrollRestoration="manual");var a=mr&&mr.isPressed;r=i.v=Math.round(r)||(mr&&mr.iOS?1:0),e(r),i.cacheID=st.cache,a&&oh("ss",r)}else(t||st.cache!==i.cacheID||oh("ref"))&&(i.cacheID=st.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Fn={s:Mc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:fl(function(s){return arguments.length?si.scrollTo(s,nn.sc()):si.pageXOffset||zr[Mc]||Vr[Mc]||ha[Mc]||0})},nn={s:Sc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Fn,sc:fl(function(s){return arguments.length?si.scrollTo(Fn.sc(),s):si.pageYOffset||zr[Sc]||Vr[Sc]||ha[Sc]||0})},Hn=function(e,t){return(t&&t._ctx&&t._ctx.selector||dn.utils.toArray)(e)[0]||(typeof e=="string"&&dn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},AE=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},jr=function(e,t){var n=t.s,i=t.sc;vo(e)&&(e=zr.scrollingElement||Vr);var r=st.indexOf(e),a=i===nn.sc?1:2;!~r&&(r=st.push(e)-1),st[r+a]||Rn(e,"scroll",ch);var o=st[r+a],c=o||(st[r+a]=fl(Xr(e,n),!0)||(vo(e)?i:fl(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,o||(c.smooth=dn.getProperty(e,"scrollBehavior")==="smooth"),c},lh=function(e,t,n){var i=e,r=e,a=xo(),o=a,c=t||50,l=Math.max(500,c*3),u=function(_,g){var m=xo();g||m-a>c?(r=i,i=_,o=a,a=m):n?i+=_:i=r+(_-r)/(m-o)*(a-o)},f=function(){r=i=n?0:i,o=a=0},h=function(_){var g=o,m=r,p=xo();return(_||_===0)&&_!==i&&u(_),a===o||p-o>l?0:(i+(n?m:-m))/((n?p:a)-g)*1e3};return{update:u,reset:f,getVelocity:h}},Za=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Zp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Ug=function(){_o=dn.core.globals().ScrollTrigger,_o&&_o.core&&wE()},Fg=function(e){return dn=e||Ig(),!qc&&dn&&typeof document<"u"&&document.body&&(si=window,zr=document,Vr=zr.documentElement,ha=zr.body,Lg=[si,zr,Vr,ha],dn.utils.clamp,Dg=dn.core.context||function(){},us="onpointerenter"in ha?"pointer":"mouse",Pg=Yt.isTouch=si.matchMedia&&si.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in si||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ri=Yt.eventTypes=("ontouchstart"in Vr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Vr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Ng=0},500),Ug(),qc=1),qc};Fn.op=nn;st.cache=0;var Yt=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){qc||Fg(dn)||console.warn("Please gsap.registerPlugin(Observer)"),_o||Ug();var i=n.tolerance,r=n.dragMinimum,a=n.type,o=n.target,c=n.lineHeight,l=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,y=n.onPress,b=n.onRelease,w=n.onRight,S=n.onLeft,T=n.onUp,R=n.onDown,x=n.onChangeX,v=n.onChangeY,C=n.onChange,P=n.onToggleX,N=n.onToggleY,U=n.onHover,V=n.onHoverEnd,B=n.onMove,K=n.ignoreCheck,W=n.isNormalizer,ee=n.onGestureStart,D=n.onGestureEnd,ce=n.onWheel,Ae=n.onEnable,Fe=n.onDisable,Oe=n.onClick,qe=n.scrollSpeed,j=n.capture,$=n.allowClicks,ae=n.lockAxis,Te=n.onLockAxis;this.target=o=Hn(o)||Vr,this.vars=n,d&&(d=dn.utils.toArray(d)),i=i||1e-9,r=r||0,_=_||1,qe=qe||1,a=a||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(si.getComputedStyle(ha).lineHeight)||22);var Ee,Ve,dt,xe,Ye,F,Xe,H=this,Qe=0,ye=0,pt=n.passive||!u&&n.passive!==!1,pe=jr(o,Fn),ze=jr(o,nn),L=pe(),E=ze(),z=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ri[0]==="pointerdown",J=vo(o),Z=o.ownerDocument||zr,Y=[0,0,0],be=[0,0,0],le=0,Pe=function(){return le=xo()},fe=function(Ce,Ze){return(H.event=Ce)&&d&&AE(Ce.target,d)||Ze&&z&&Ce.pointerType!=="touch"||K&&K(Ce,Ze)},ne=function(){H._vx.reset(),H._vy.reset(),Ve.pause(),f&&f(H)},ie=function(){var Ce=H.deltaX=Zp(Y),Ze=H.deltaY=Zp(be),me=Math.abs(Ce)>=i,Ke=Math.abs(Ze)>=i;C&&(me||Ke)&&C(H,Ce,Ze,Y,be),me&&(w&&H.deltaX>0&&w(H),S&&H.deltaX<0&&S(H),x&&x(H),P&&H.deltaX<0!=Qe<0&&P(H),Qe=H.deltaX,Y[0]=Y[1]=Y[2]=0),Ke&&(R&&H.deltaY>0&&R(H),T&&H.deltaY<0&&T(H),v&&v(H),N&&H.deltaY<0!=ye<0&&N(H),ye=H.deltaY,be[0]=be[1]=be[2]=0),(xe||dt)&&(B&&B(H),dt&&(m&&dt===1&&m(H),M&&M(H),dt=0),xe=!1),F&&!(F=!1)&&Te&&Te(H),Ye&&(ce(H),Ye=!1),Ee=0},De=function(Ce,Ze,me){Y[me]+=Ce,be[me]+=Ze,H._vx.update(Ce),H._vy.update(Ze),l?Ee||(Ee=requestAnimationFrame(ie)):ie()},Le=function(Ce,Ze){ae&&!Xe&&(H.axis=Xe=Math.abs(Ce)>Math.abs(Ze)?"x":"y",F=!0),Xe!=="y"&&(Y[2]+=Ce,H._vx.update(Ce,!0)),Xe!=="x"&&(be[2]+=Ze,H._vy.update(Ze,!0)),l?Ee||(Ee=requestAnimationFrame(ie)):ie()},he=function(Ce){if(!fe(Ce,1)){Ce=Za(Ce,u);var Ze=Ce.clientX,me=Ce.clientY,Ke=Ze-H.x,Ie=me-H.y,Ge=H.isDragging;H.x=Ze,H.y=me,(Ge||(Ke||Ie)&&(Math.abs(H.startX-Ze)>=r||Math.abs(H.startY-me)>=r))&&(dt=Ge?2:1,Ge||(H.isDragging=!0),Le(Ke,Ie))}},Be=H.onPress=function(ve){fe(ve,1)||ve&&ve.button||(H.axis=Xe=null,Ve.pause(),H.isPressed=!0,ve=Za(ve),Qe=ye=0,H.startX=H.x=ve.clientX,H.startY=H.y=ve.clientY,H._vx.reset(),H._vy.reset(),Rn(W?o:Z,Ri[1],he,pt,!0),H.deltaX=H.deltaY=0,y&&y(H))},I=H.onRelease=function(ve){if(!fe(ve,1)){An(W?o:Z,Ri[1],he,!0);var Ce=!isNaN(H.y-H.startY),Ze=H.isDragging,me=Ze&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),Ke=Za(ve);!me&&Ce&&(H._vx.reset(),H._vy.reset(),u&&$&&dn.delayedCall(.08,function(){if(xo()-le>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if(Z.createEvent){var Ie=Z.createEvent("MouseEvents");Ie.initMouseEvent("click",!0,!0,si,1,Ke.screenX,Ke.screenY,Ke.clientX,Ke.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(Ie)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,f&&Ze&&!W&&Ve.restart(!0),dt&&ie(),p&&Ze&&p(H),b&&b(H,me)}},ue=function(Ce){return Ce.touches&&Ce.touches.length>1&&(H.isGesturing=!0)&&ee(Ce,H.isDragging)},re=function(){return(H.isGesturing=!1)||D(H)},se=function(Ce){if(!fe(Ce)){var Ze=pe(),me=ze();De((Ze-L)*qe,(me-E)*qe,1),L=Ze,E=me,f&&Ve.restart(!0)}},te=function(Ce){if(!fe(Ce)){Ce=Za(Ce,u),ce&&(Ye=!0);var Ze=(Ce.deltaMode===1?c:Ce.deltaMode===2?si.innerHeight:1)*_;De(Ce.deltaX*Ze,Ce.deltaY*Ze,0),f&&!W&&Ve.restart(!0)}},Q=function(Ce){if(!fe(Ce)){var Ze=Ce.clientX,me=Ce.clientY,Ke=Ze-H.x,Ie=me-H.y;H.x=Ze,H.y=me,xe=!0,f&&Ve.restart(!0),(Ke||Ie)&&Le(Ke,Ie)}},Me=function(Ce){H.event=Ce,U(H)},ke=function(Ce){H.event=Ce,V(H)},gt=function(Ce){return fe(Ce)||Za(Ce,u)&&Oe(H)};Ve=H._dc=dn.delayedCall(h||.25,ne).pause(),H.deltaX=H.deltaY=0,H._vx=lh(0,50,!0),H._vy=lh(0,50,!0),H.scrollX=pe,H.scrollY=ze,H.isDragging=H.isGesturing=H.isPressed=!1,Dg(this),H.enable=function(ve){return H.isEnabled||(Rn(J?Z:o,"scroll",ch),a.indexOf("scroll")>=0&&Rn(J?Z:o,"scroll",se,pt,j),a.indexOf("wheel")>=0&&Rn(o,"wheel",te,pt,j),(a.indexOf("touch")>=0&&Pg||a.indexOf("pointer")>=0)&&(Rn(o,Ri[0],Be,pt,j),Rn(Z,Ri[2],I),Rn(Z,Ri[3],I),$&&Rn(o,"click",Pe,!0,!0),Oe&&Rn(o,"click",gt),ee&&Rn(Z,"gesturestart",ue),D&&Rn(Z,"gestureend",re),U&&Rn(o,us+"enter",Me),V&&Rn(o,us+"leave",ke),B&&Rn(o,us+"move",Q)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=xe=dt=!1,H._vx.reset(),H._vy.reset(),L=pe(),E=ze(),ve&&ve.type&&Be(ve),Ae&&Ae(H)),H},H.disable=function(){H.isEnabled&&(sa.filter(function(ve){return ve!==H&&vo(ve.target)}).length||An(J?Z:o,"scroll",ch),H.isPressed&&(H._vx.reset(),H._vy.reset(),An(W?o:Z,Ri[1],he,!0)),An(J?Z:o,"scroll",se,j),An(o,"wheel",te,j),An(o,Ri[0],Be,j),An(Z,Ri[2],I),An(Z,Ri[3],I),An(o,"click",Pe,!0),An(o,"click",gt),An(Z,"gesturestart",ue),An(Z,"gestureend",re),An(o,us+"enter",Me),An(o,us+"leave",ke),An(o,us+"move",Q),H.isEnabled=H.isPressed=H.isDragging=!1,Fe&&Fe(H))},H.kill=H.revert=function(){H.disable();var ve=sa.indexOf(H);ve>=0&&sa.splice(ve,1),mr===H&&(mr=0)},sa.push(H),W&&vo(o)&&(mr=H),H.enable(g)},EE(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Yt.version="3.13.0";Yt.create=function(s){return new Yt(s)};Yt.register=Fg;Yt.getAll=function(){return sa.slice()};Yt.getById=function(s){return sa.filter(function(e){return e.vars.id===s})[0]};Ig()&&dn.registerPlugin(Yt);var we,ta,rt,Ct,ii,vt,id,hl,Vo,yo,so,Tc,_n,wl,uh,Ln,Jp,Qp,na,Og,yu,Bg,Pn,fh,kg,zg,Nr,hh,rd,da,sd,dl,dh,bu,Ec=1,xn=Date.now,Mu=xn(),Si=0,ao=0,em=function(e,t,n){var i=ti(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},tm=function(e,t){return t&&(!ti(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},RE=function s(){return ao&&requestAnimationFrame(s)},nm=function(){return wl=1},im=function(){return wl=0},ki=function(e){return e},oo=function(e){return Math.round(e*1e5)/1e5||0},Vg=function(){return typeof window<"u"},Hg=function(){return we||Vg()&&(we=window.gsap)&&we.registerPlugin&&we},As=function(e){return!!~id.indexOf(e)},Gg=function(e){return(e==="Height"?sd:rt["inner"+e])||ii["client"+e]||vt["client"+e]},Wg=function(e){return Xr(e,"getBoundingClientRect")||(As(e)?function(){return Zc.width=rt.innerWidth,Zc.height=sd,Zc}:function(){return dr(e)})},CE=function(e,t,n){var i=n.d,r=n.d2,a=n.a;return(a=Xr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Gg(r):e["client"+r])||0}},PE=function(e,t){return!t||~$i.indexOf(e)?Wg(e):function(){return Zc}},Yi=function(e,t){var n=t.s,i=t.d2,r=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Xr(e,n))?a()-Wg(e)()[r]:As(e)?(ii[n]||vt[n])-Gg(i):e[n]-e["offset"+i])},wc=function(e,t){for(var n=0;n<na.length;n+=3)(!t||~t.indexOf(na[n+1]))&&e(na[n],na[n+1],na[n+2])},ti=function(e){return typeof e=="string"},yn=function(e){return typeof e=="function"},co=function(e){return typeof e=="number"},fs=function(e){return typeof e=="object"},Ja=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Su=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Js=Math.abs,Xg="left",qg="top",ad="right",od="bottom",bs="width",Ms="height",bo="Right",Mo="Left",So="Top",To="Bottom",jt="padding",gi="margin",Da="Width",cd="Height",tn="px",_i=function(e){return rt.getComputedStyle(e)},LE=function(e){var t=_i(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},rm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},dr=function(e,t){var n=t&&_i(e)[uh]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},pl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Yg=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},DE=function(e){return function(t){return we.utils.snap(Yg(e),t)}},ld=function(e){var t=we.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,a){a===void 0&&(a=.001);var o;if(!r)return t(i);if(r>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,r,a){a===void 0&&(a=.001);var o=t(i);return!r||Math.abs(o-i)<a||o-i<0==r<0?o:t(r<0?i-e:i+e)}},IE=function(e){return function(t,n){return ld(Yg(e))(t,n.direction)}},Ac=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},ln=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Rc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},sm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Cc={toggleActions:"play",anticipatePin:0},ml={top:0,left:0,center:.5,bottom:1,right:1},Yc=function(e,t){if(ti(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ml?ml[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Pc=function(e,t,n,i,r,a,o,c){var l=r.startColor,u=r.endColor,f=r.fontSize,h=r.indent,d=r.fontWeight,_=Ct.createElement("div"),g=As(n)||Xr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?vt:n,M=e.indexOf("start")!==-1,y=M?l:u,b="border-color:"+y+";font-size:"+f+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((m||c)&&g?"fixed;":"absolute;"),(m||c||!g)&&(b+=(i===nn?ad:od)+":"+(a+parseFloat(h))+"px;"),o&&(b+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=b,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Kc(_,0,i,M),_},Kc=function(e,t,n,i){var r={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+a+Da]=1,r["border"+o+Da]=0,r[n.p]=t+"px",we.set(e,r)},nt=[],ph={},Ho,am=function(){return xn()-Si>34&&(Ho||(Ho=requestAnimationFrame(vr)))},Qs=function(){(!Pn||!Pn.isPressed||Pn.startX>vt.clientWidth)&&(st.cache++,Pn?Ho||(Ho=requestAnimationFrame(vr)):vr(),Si||Cs("scrollStart"),Si=xn())},Tu=function(){zg=rt.innerWidth,kg=rt.innerHeight},lo=function(e){st.cache++,(e===!0||!_n&&!Bg&&!Ct.fullscreenElement&&!Ct.webkitFullscreenElement&&(!fh||zg!==rt.innerWidth||Math.abs(rt.innerHeight-kg)>rt.innerHeight*.25))&&hl.restart(!0)},Rs={},NE=[],Kg=function s(){return cn(je,"scrollEnd",s)||gs(!0)},Cs=function(e){return Rs[e]&&Rs[e].map(function(t){return t()})||NE},ei=[],jg=function(e){for(var t=0;t<ei.length;t+=5)(!e||ei[t+4]&&ei[t+4].query===e)&&(ei[t].style.cssText=ei[t+1],ei[t].getBBox&&ei[t].setAttribute("transform",ei[t+2]||""),ei[t+3].uncache=1)},ud=function(e,t){var n;for(Ln=0;Ln<nt.length;Ln++)n=nt[Ln],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));dl=!0,t&&jg(t),t||Cs("revert")},$g=function(e,t){st.cache++,(t||!Dn)&&st.forEach(function(n){return yn(n)&&n.cacheID++&&(n.rec=0)}),ti(e)&&(rt.history.scrollRestoration=rd=e)},Dn,Ss=0,om,UE=function(){if(om!==Ss){var e=om=Ss;requestAnimationFrame(function(){return e===Ss&&gs(!0)})}},Zg=function(){vt.appendChild(da),sd=!Pn&&da.offsetHeight||rt.innerHeight,vt.removeChild(da)},cm=function(e){return Vo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},gs=function(e,t){if(ii=Ct.documentElement,vt=Ct.body,id=[rt,Ct,ii,vt],Si&&!e&&!dl){ln(je,"scrollEnd",Kg);return}Zg(),Dn=je.isRefreshing=!0,st.forEach(function(i){return yn(i)&&++i.cacheID&&(i.rec=i())});var n=Cs("refreshInit");Og&&je.sort(),t||ud(),st.forEach(function(i){yn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),nt.slice(0).forEach(function(i){return i.refresh()}),dl=!1,nt.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-a),i.refresh()}}),dh=1,cm(!0),nt.forEach(function(i){var r=Yi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>r,o=i._startClamp&&i.start>=r;(a||o)&&i.setPositions(o?r-1:i.start,a?Math.max(o?r:i.start+1,r):i.end,!0)}),cm(!1),dh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),st.forEach(function(i){yn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),$g(rd,1),hl.pause(),Ss++,Dn=2,vr(2),nt.forEach(function(i){return yn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Dn=je.isRefreshing=!1,Cs("refresh")},mh=0,jc=1,Eo,vr=function(e){if(e===2||!Dn&&!dl){je.isUpdating=!0,Eo&&Eo.update(0);var t=nt.length,n=xn(),i=n-Mu>=50,r=t&&nt[0].scroll();if(jc=mh>r?-1:1,Dn||(mh=r),i&&(Si&&!wl&&n-Si>200&&(Si=0,Cs("scrollEnd")),so=Mu,Mu=n),jc<0){for(Ln=t;Ln-- >0;)nt[Ln]&&nt[Ln].update(0,i);jc=1}else for(Ln=0;Ln<t;Ln++)nt[Ln]&&nt[Ln].update(0,i);je.isUpdating=!1}Ho=0},gh=[Xg,qg,od,ad,gi+To,gi+bo,gi+So,gi+Mo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],$c=gh.concat([bs,Ms,"boxSizing","max"+Da,"max"+cd,"position",gi,jt,jt+So,jt+bo,jt+To,jt+Mo]),FE=function(e,t,n){pa(n);var i=e._gsap;if(i.spacerIsNative)pa(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Eu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=gh.length,a=t.style,o=e.style,c;r--;)c=gh[r],a[c]=n[c];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[od]=o[ad]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[bs]=pl(e,Fn)+tn,a[Ms]=pl(e,nn)+tn,a[jt]=o[gi]=o[qg]=o[Xg]="0",pa(i),o[bs]=o["max"+Da]=n[bs],o[Ms]=o["max"+cd]=n[Ms],o[jt]=n[jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},OE=/([A-Z])/g,pa=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,a;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],r=e[i],a?t[r]=a:t[r]&&t.removeProperty(r.replace(OE,"-$1").toLowerCase())}},Lc=function(e){for(var t=$c.length,n=e.style,i=[],r=0;r<t;r++)i.push($c[r],n[$c[r]]);return i.t=e,i},BE=function(e,t,n){for(var i=[],r=e.length,a=n?8:0,o;a<r;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Zc={left:0,top:0},lm=function(e,t,n,i,r,a,o,c,l,u,f,h,d,_){yn(e)&&(e=e(c)),ti(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Yc("0"+e.substr(3),n):0));var g=d?d.time():0,m,p,M;if(d&&d.seek(0),isNaN(e)||(e=+e),co(e))d&&(e=we.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),o&&Kc(o,n,i,!0);else{yn(t)&&(t=t(c));var y=(e||"0").split(" "),b,w,S,T;M=Hn(t,c)||vt,b=dr(M)||{},(!b||!b.left&&!b.top)&&_i(M).display==="none"&&(T=M.style.display,M.style.display="block",b=dr(M),T?M.style.display=T:M.style.removeProperty("display")),w=Yc(y[0],b[i.d]),S=Yc(y[1]||"0",n),e=b[i.p]-l[i.p]-u+w+r-S,o&&Kc(o,S,i,n-S<20||o._isStart&&S>20),n-=n-S}if(_&&(c[_]=e||-.001,e<0&&(e=0)),a){var R=e+n,x=a._isStart;m="scroll"+i.d2,Kc(a,R,i,x&&R>20||!x&&(f?Math.max(vt[m],ii[m]):a.parentNode[m])<=R+1),f&&(l=dr(o),f&&(a.style[i.op.p]=l[i.op.p]-i.op.m-a._offset+tn))}return d&&M&&(m=dr(M),d.seek(h),p=dr(M),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*h),d&&d.seek(g),d?e:Math.round(e)},kE=/(webkit|moz|length|cssText|inset)/i,um=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,a,o;if(t===vt){e._stOrig=r.cssText,o=_i(e);for(a in o)!+a&&!kE.test(a)&&o[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=o[a]);r.top=n,r.left=i}else r.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},Jg=function(e,t,n){var i=t,r=i;return function(a){var o=Math.round(e());return o!==i&&o!==r&&Math.abs(o-i)>3&&Math.abs(o-r)>3&&(a=o,n&&n()),r=i,i=Math.round(a),i}},Dc=function(e,t,n){var i={};i[t.p]="+="+n,we.set(e,i)},fm=function(e,t){var n=jr(e,t),i="_scroll"+t.p2,r=function a(o,c,l,u,f){var h=a.tween,d=c.onComplete,_={};l=l||n();var g=Jg(n,l,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-l,h&&h.kill(),c[i]=o,c.inherit=!1,c.modifiers=_,_[i]=function(){return g(l+u*h.ratio+f*h.ratio*h.ratio)},c.onUpdate=function(){st.cache++,a.tween&&vr()},c.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=we.to(e,c),h};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},ln(e,"wheel",n.wheelHandler),je.isTouch&&ln(e,"touchmove",n.wheelHandler),r},je=(function(){function s(t,n){ta||s.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),hh(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ao){this.update=this.refresh=this.kill=ki;return}n=rm(ti(n)||co(n)||n.nodeType?{trigger:n}:n,Cc);var r=n,a=r.onUpdate,o=r.toggleClass,c=r.id,l=r.onToggle,u=r.onRefresh,f=r.scrub,h=r.trigger,d=r.pin,_=r.pinSpacing,g=r.invalidateOnRefresh,m=r.anticipatePin,p=r.onScrubComplete,M=r.onSnapComplete,y=r.once,b=r.snap,w=r.pinReparent,S=r.pinSpacer,T=r.containerAnimation,R=r.fastScrollEnd,x=r.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Fn:nn,C=!f&&f!==0,P=Hn(n.scroller||rt),N=we.core.getCache(P),U=As(P),V=("pinType"in n?n.pinType:Xr(P,"pinType")||U&&"fixed")==="fixed",B=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],K=C&&n.toggleActions.split(" "),W="markers"in n?n.markers:Cc.markers,ee=U?0:parseFloat(_i(P)["border"+v.p2+Da])||0,D=this,ce=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Ae=CE(P,U,v),Fe=PE(P,U),Oe=0,qe=0,j=0,$=jr(P,v),ae,Te,Ee,Ve,dt,xe,Ye,F,Xe,H,Qe,ye,pt,pe,ze,L,E,z,J,Z,Y,be,le,Pe,fe,ne,ie,De,Le,he,Be,I,ue,re,se,te,Q,Me,ke;if(D._startClamp=D._endClamp=!1,D._dir=v,m*=45,D.scroller=P,D.scroll=T?T.time.bind(T):$,Ve=$(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(Og=1,n.refreshPriority===-9999&&(Eo=D)),N.tweenScroll=N.tweenScroll||{top:fm(P,nn),left:fm(P,Fn)},D.tweenTo=ae=N.tweenScroll[v.p],D.scrubDuration=function(me){ue=co(me)&&me,ue?I?I.duration(me):I=we.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ue,paused:!0,onComplete:function(){return p&&p(D)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(f),he=0,c||(c=i.vars.id)),b&&((!fs(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in vt.style&&we.set(U?[vt,ii]:P,{scrollBehavior:"auto"}),st.forEach(function(me){return yn(me)&&me.target===(U?Ct.scrollingElement||ii:P)&&(me.smooth=!1)}),Ee=yn(b.snapTo)?b.snapTo:b.snapTo==="labels"?DE(i):b.snapTo==="labelsDirectional"?IE(i):b.directional!==!1?function(me,Ke){return ld(b.snapTo)(me,xn()-qe<500?0:Ke.direction)}:we.utils.snap(b.snapTo),re=b.duration||{min:.1,max:2},re=fs(re)?yo(re.min,re.max):yo(re,re),se=we.delayedCall(b.delay||ue/2||.1,function(){var me=$(),Ke=xn()-qe<500,Ie=ae.tween;if((Ke||Math.abs(D.getVelocity())<10)&&!Ie&&!wl&&Oe!==me){var Ge=(me-xe)/pe,Vt=i&&!C?i.totalProgress():Ge,it=Ke?0:(Vt-Be)/(xn()-so)*1e3||0,It=we.utils.clamp(-Ge,1-Ge,Js(it/2)*it/.185),Xt=Ge+(b.inertia===!1?0:It),Lt,bt,xt=b,kn=xt.onStart,Dt=xt.onInterrupt,Tn=xt.onComplete;if(Lt=Ee(Xt,D),co(Lt)||(Lt=Xt),bt=Math.max(0,Math.round(xe+Lt*pe)),me<=Ye&&me>=xe&&bt!==me){if(Ie&&!Ie._initted&&Ie.data<=Js(bt-me))return;b.inertia===!1&&(It=Lt-Ge),ae(bt,{duration:re(Js(Math.max(Js(Xt-Vt),Js(Lt-Vt))*.185/it/.05||0)),ease:b.ease||"power3",data:Js(bt-me),onInterrupt:function(){return se.restart(!0)&&Dt&&Dt(D)},onComplete:function(){D.update(),Oe=$(),i&&!C&&(I?I.resetTo("totalProgress",Lt,i._tTime/i._tDur):i.progress(Lt)),he=Be=i&&!C?i.totalProgress():D.progress,M&&M(D),Tn&&Tn(D)}},me,It*pe,bt-me-It*pe),kn&&kn(D,ae.tween)}}else D.isActive&&Oe!==me&&se.restart(!0)}).pause()),c&&(ph[c]=D),h=D.trigger=Hn(h||d!==!0&&d),ke=h&&h._gsap&&h._gsap.stRevert,ke&&(ke=ke(D)),d=d===!0?h:Hn(d),ti(o)&&(o={targets:h,className:o}),d&&(_===!1||_===gi||(_=!_&&d.parentNode&&d.parentNode.style&&_i(d.parentNode).display==="flex"?!1:jt),D.pin=d,Te=we.core.getCache(d),Te.spacer?ze=Te.pinState:(S&&(S=Hn(S),S&&!S.nodeType&&(S=S.current||S.nativeElement),Te.spacerIsNative=!!S,S&&(Te.spacerState=Lc(S))),Te.spacer=z=S||Ct.createElement("div"),z.classList.add("pin-spacer"),c&&z.classList.add("pin-spacer-"+c),Te.pinState=ze=Lc(d)),n.force3D!==!1&&we.set(d,{force3D:!0}),D.spacer=z=Te.spacer,Le=_i(d),Pe=Le[_+v.os2],Z=we.getProperty(d),Y=we.quickSetter(d,v.a,tn),Eu(d,z,Le),E=Lc(d)),W){ye=fs(W)?rm(W,sm):sm,H=Pc("scroller-start",c,P,v,ye,0),Qe=Pc("scroller-end",c,P,v,ye,0,H),J=H["offset"+v.op.d2];var gt=Hn(Xr(P,"content")||P);F=this.markerStart=Pc("start",c,gt,v,ye,J,0,T),Xe=this.markerEnd=Pc("end",c,gt,v,ye,J,0,T),T&&(Me=we.quickSetter([F,Xe],v.a,tn)),!V&&!($i.length&&Xr(P,"fixedMarkers")===!0)&&(LE(U?vt:P),we.set([H,Qe],{force3D:!0}),ne=we.quickSetter(H,v.a,tn),De=we.quickSetter(Qe,v.a,tn))}if(T){var ve=T.vars.onUpdate,Ce=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){D.update(0,0,1),ve&&ve.apply(T,Ce||[])})}if(D.previous=function(){return nt[nt.indexOf(D)-1]},D.next=function(){return nt[nt.indexOf(D)+1]},D.revert=function(me,Ke){if(!Ke)return D.kill(!0);var Ie=me!==!1||!D.enabled,Ge=_n;Ie!==D.isReverted&&(Ie&&(te=Math.max($(),D.scroll.rec||0),j=D.progress,Q=i&&i.progress()),F&&[F,Xe,H,Qe].forEach(function(Vt){return Vt.style.display=Ie?"none":"block"}),Ie&&(_n=D,D.update(Ie)),d&&(!w||!D.isActive)&&(Ie?FE(d,z,ze):Eu(d,z,_i(d),fe)),Ie||D.update(Ie),_n=Ge,D.isReverted=Ie)},D.refresh=function(me,Ke,Ie,Ge){if(!((_n||!D.enabled)&&!Ke)){if(d&&me&&Si){ln(s,"scrollEnd",Kg);return}!Dn&&ce&&ce(D),_n=D,ae.tween&&!Ie&&(ae.tween.kill(),ae.tween=0),I&&I.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(Re){return Re.vars.immediateRender&&Re.render(0,!0,!0)})),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Vt=Ae(),it=Fe(),It=T?T.duration():Yi(P,v),Xt=pe<=.01||!pe,Lt=0,bt=Ge||0,xt=fs(Ie)?Ie.end:n.end,kn=n.endTrigger||h,Dt=fs(Ie)?Ie.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),Tn=D.pinnedContainer=n.pinnedContainer&&Hn(n.pinnedContainer,D),fi=h&&Math.max(0,nt.indexOf(D))||0,Qt=fi,en,an,A,k,q,X,O,oe,_e,Se,de,Ne,He;for(W&&fs(Ie)&&(Ne=we.getProperty(H,v.p),He=we.getProperty(Qe,v.p));Qt-- >0;)X=nt[Qt],X.end||X.refresh(0,1)||(_n=D),O=X.pin,O&&(O===h||O===d||O===Tn)&&!X.isReverted&&(Se||(Se=[]),Se.unshift(X),X.revert(!0,!0)),X!==nt[Qt]&&(fi--,Qt--);for(yn(Dt)&&(Dt=Dt(D)),Dt=em(Dt,"start",D),xe=lm(Dt,h,Vt,v,$(),F,H,D,it,ee,V,It,T,D._startClamp&&"_startClamp")||(d?-.001:0),yn(xt)&&(xt=xt(D)),ti(xt)&&!xt.indexOf("+=")&&(~xt.indexOf(" ")?xt=(ti(Dt)?Dt.split(" ")[0]:"")+xt:(Lt=Yc(xt.substr(2),Vt),xt=ti(Dt)?Dt:(T?we.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,xe):xe)+Lt,kn=h)),xt=em(xt,"end",D),Ye=Math.max(xe,lm(xt||(kn?"100% 0":It),kn,Vt,v,$()+Lt,Xe,Qe,D,it,ee,V,It,T,D._endClamp&&"_endClamp"))||-.001,Lt=0,Qt=fi;Qt--;)X=nt[Qt],O=X.pin,O&&X.start-X._pinPush<=xe&&!T&&X.end>0&&(en=X.end-(D._startClamp?Math.max(0,X.start):X.start),(O===h&&X.start-X._pinPush<xe||O===Tn)&&isNaN(Dt)&&(Lt+=en*(1-X.progress)),O===d&&(bt+=en));if(xe+=Lt,Ye+=Lt,D._startClamp&&(D._startClamp+=Lt),D._endClamp&&!Dn&&(D._endClamp=Ye||-.001,Ye=Math.min(Ye,Yi(P,v))),pe=Ye-xe||(xe-=.01)&&.001,Xt&&(j=we.utils.clamp(0,1,we.utils.normalize(xe,Ye,te))),D._pinPush=bt,F&&Lt&&(en={},en[v.a]="+="+Lt,Tn&&(en[v.p]="-="+$()),we.set([F,Xe],en)),d&&!(dh&&D.end>=Yi(P,v)))en=_i(d),k=v===nn,A=$(),be=parseFloat(Z(v.a))+bt,!It&&Ye>1&&(de=(U?Ct.scrollingElement||ii:P).style,de={style:de,value:de["overflow"+v.a.toUpperCase()]},U&&_i(vt)["overflow"+v.a.toUpperCase()]!=="scroll"&&(de.style["overflow"+v.a.toUpperCase()]="scroll")),Eu(d,z,en),E=Lc(d),an=dr(d,!0),oe=V&&jr(P,k?Fn:nn)(),_?(fe=[_+v.os2,pe+bt+tn],fe.t=z,Qt=_===jt?pl(d,v)+pe+bt:0,Qt&&(fe.push(v.d,Qt+tn),z.style.flexBasis!=="auto"&&(z.style.flexBasis=Qt+tn)),pa(fe),Tn&&nt.forEach(function(Re){Re.pin===Tn&&Re.vars.pinSpacing!==!1&&(Re._subPinOffset=!0)}),V&&$(te)):(Qt=pl(d,v),Qt&&z.style.flexBasis!=="auto"&&(z.style.flexBasis=Qt+tn)),V&&(q={top:an.top+(k?A-xe:oe)+tn,left:an.left+(k?oe:A-xe)+tn,boxSizing:"border-box",position:"fixed"},q[bs]=q["max"+Da]=Math.ceil(an.width)+tn,q[Ms]=q["max"+cd]=Math.ceil(an.height)+tn,q[gi]=q[gi+So]=q[gi+bo]=q[gi+To]=q[gi+Mo]="0",q[jt]=en[jt],q[jt+So]=en[jt+So],q[jt+bo]=en[jt+bo],q[jt+To]=en[jt+To],q[jt+Mo]=en[jt+Mo],L=BE(ze,q,w),Dn&&$(0)),i?(_e=i._initted,yu(1),i.render(i.duration(),!0,!0),le=Z(v.a)-be+pe+bt,ie=Math.abs(pe-le)>1,V&&ie&&L.splice(L.length-2,2),i.render(0,!0,!0),_e||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),yu(0)):le=pe,de&&(de.value?de.style["overflow"+v.a.toUpperCase()]=de.value:de.style.removeProperty("overflow-"+v.a));else if(h&&$()&&!T)for(an=h.parentNode;an&&an!==vt;)an._pinOffset&&(xe-=an._pinOffset,Ye-=an._pinOffset),an=an.parentNode;Se&&Se.forEach(function(Re){return Re.revert(!1,!0)}),D.start=xe,D.end=Ye,Ve=dt=Dn?te:$(),!T&&!Dn&&(Ve<te&&$(te),D.scroll.rec=0),D.revert(!1,!0),qe=xn(),se&&(Oe=-1,se.restart(!0)),_n=0,i&&C&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(Xt||j!==D.progress||T||g||i&&!i._initted)&&(i&&!C&&(i._initted||j||i.vars.immediateRender!==!1)&&i.totalProgress(T&&xe<-.001&&!j?we.utils.normalize(xe,Ye,0):j,!0),D.progress=Xt||(Ve-xe)/pe===j?0:j),d&&_&&(z._pinOffset=Math.round(D.progress*le)),I&&I.invalidate(),isNaN(Ne)||(Ne-=we.getProperty(H,v.p),He-=we.getProperty(Qe,v.p),Dc(H,v,Ne),Dc(F,v,Ne-(Ge||0)),Dc(Qe,v,He),Dc(Xe,v,He-(Ge||0))),Xt&&!Dn&&D.update(),u&&!Dn&&!pt&&(pt=!0,u(D),pt=!1)}},D.getVelocity=function(){return($()-dt)/(xn()-so)*1e3||0},D.endAnimation=function(){Ja(D.callbackAnimation),i&&(I?I.progress(1):i.paused()?C||Ja(i,D.direction<0,1):Ja(i,i.reversed()))},D.labelToScroll=function(me){return i&&i.labels&&(xe||D.refresh()||xe)+i.labels[me]/i.duration()*pe||0},D.getTrailing=function(me){var Ke=nt.indexOf(D),Ie=D.direction>0?nt.slice(0,Ke).reverse():nt.slice(Ke+1);return(ti(me)?Ie.filter(function(Ge){return Ge.vars.preventOverlaps===me}):Ie).filter(function(Ge){return D.direction>0?Ge.end<=xe:Ge.start>=Ye})},D.update=function(me,Ke,Ie){if(!(T&&!Ie&&!me)){var Ge=Dn===!0?te:D.scroll(),Vt=me?0:(Ge-xe)/pe,it=Vt<0?0:Vt>1?1:Vt||0,It=D.progress,Xt,Lt,bt,xt,kn,Dt,Tn,fi;if(Ke&&(dt=Ve,Ve=T?$():Ge,b&&(Be=he,he=i&&!C?i.totalProgress():it)),m&&d&&!_n&&!Ec&&Si&&(!it&&xe<Ge+(Ge-dt)/(xn()-so)*m?it=1e-4:it===1&&Ye>Ge+(Ge-dt)/(xn()-so)*m&&(it=.9999)),it!==It&&D.enabled){if(Xt=D.isActive=!!it&&it<1,Lt=!!It&&It<1,Dt=Xt!==Lt,kn=Dt||!!it!=!!It,D.direction=it>It?1:-1,D.progress=it,kn&&!_n&&(bt=it&&!It?0:it===1?1:It===1?2:3,C&&(xt=!Dt&&K[bt+1]!=="none"&&K[bt+1]||K[bt],fi=i&&(xt==="complete"||xt==="reset"||xt in i))),x&&(Dt||fi)&&(fi||f||!i)&&(yn(x)?x(D):D.getTrailing(x).forEach(function(A){return A.endAnimation()})),C||(I&&!_n&&!Ec?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",it,i._tTime/i._tDur):(I.vars.totalProgress=it,I.invalidate().restart())):i&&i.totalProgress(it,!!(_n&&(qe||me)))),d){if(me&&_&&(z.style[_+v.os2]=Pe),!V)Y(oo(be+le*it));else if(kn){if(Tn=!me&&it>It&&Ye+1>Ge&&Ge+1>=Yi(P,v),w)if(!me&&(Xt||Tn)){var Qt=dr(d,!0),en=Ge-xe;um(d,vt,Qt.top+(v===nn?en:0)+tn,Qt.left+(v===nn?0:en)+tn)}else um(d,z);pa(Xt||Tn?L:E),ie&&it<1&&Xt||Y(be+(it===1&&!Tn?le:0))}}b&&!ae.tween&&!_n&&!Ec&&se.restart(!0),o&&(Dt||y&&it&&(it<1||!bu))&&Vo(o.targets).forEach(function(A){return A.classList[Xt||y?"add":"remove"](o.className)}),a&&!C&&!me&&a(D),kn&&!_n?(C&&(fi&&(xt==="complete"?i.pause().totalProgress(1):xt==="reset"?i.restart(!0).pause():xt==="restart"?i.restart(!0):i[xt]()),a&&a(D)),(Dt||!bu)&&(l&&Dt&&Su(D,l),B[bt]&&Su(D,B[bt]),y&&(it===1?D.kill(!1,1):B[bt]=0),Dt||(bt=it===1?1:3,B[bt]&&Su(D,B[bt]))),R&&!Xt&&Math.abs(D.getVelocity())>(co(R)?R:2500)&&(Ja(D.callbackAnimation),I?I.progress(1):Ja(i,xt==="reverse"?1:!it,1))):C&&a&&!_n&&a(D)}if(De){var an=T?Ge/T.duration()*(T._caScrollDist||0):Ge;ne(an+(H._isFlipped?1:0)),De(an)}Me&&Me(-Ge/T.duration()*(T._caScrollDist||0))}},D.enable=function(me,Ke){D.enabled||(D.enabled=!0,ln(P,"resize",lo),U||ln(P,"scroll",Qs),ce&&ln(s,"refreshInit",ce),me!==!1&&(D.progress=j=0,Ve=dt=Oe=$()),Ke!==!1&&D.refresh())},D.getTween=function(me){return me&&ae?ae.tween:I},D.setPositions=function(me,Ke,Ie,Ge){if(T){var Vt=T.scrollTrigger,it=T.duration(),It=Vt.end-Vt.start;me=Vt.start+It*me/it,Ke=Vt.start+It*Ke/it}D.refresh(!1,!1,{start:tm(me,Ie&&!!D._startClamp),end:tm(Ke,Ie&&!!D._endClamp)},Ge),D.update()},D.adjustPinSpacing=function(me){if(fe&&me){var Ke=fe.indexOf(v.d)+1;fe[Ke]=parseFloat(fe[Ke])+me+tn,fe[1]=parseFloat(fe[1])+me+tn,pa(fe)}},D.disable=function(me,Ke){if(D.enabled&&(me!==!1&&D.revert(!0,!0),D.enabled=D.isActive=!1,Ke||I&&I.pause(),te=0,Te&&(Te.uncache=1),ce&&cn(s,"refreshInit",ce),se&&(se.pause(),ae.tween&&ae.tween.kill()&&(ae.tween=0)),!U)){for(var Ie=nt.length;Ie--;)if(nt[Ie].scroller===P&&nt[Ie]!==D)return;cn(P,"resize",lo),U||cn(P,"scroll",Qs)}},D.kill=function(me,Ke){D.disable(me,Ke),I&&!Ke&&I.kill(),c&&delete ph[c];var Ie=nt.indexOf(D);Ie>=0&&nt.splice(Ie,1),Ie===Ln&&jc>0&&Ln--,Ie=0,nt.forEach(function(Ge){return Ge.scroller===D.scroller&&(Ie=1)}),Ie||Dn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,me&&i.revert({kill:!1}),Ke||i.kill()),F&&[F,Xe,H,Qe].forEach(function(Ge){return Ge.parentNode&&Ge.parentNode.removeChild(Ge)}),Eo===D&&(Eo=0),d&&(Te&&(Te.uncache=1),Ie=0,nt.forEach(function(Ge){return Ge.pin===d&&Ie++}),Ie||(Te.spacer=0)),n.onKill&&n.onKill(D)},nt.push(D),D.enable(!1,!1),ke&&ke(D),i&&i.add&&!pe){var Ze=D.update;D.update=function(){D.update=Ze,st.cache++,xe||Ye||D.refresh()},we.delayedCall(.01,D.update),pe=.01,xe=Ye=0}else D.refresh();d&&UE()},s.register=function(n){return ta||(we=n||Hg(),Vg()&&window.document&&s.enable(),ta=ao),ta},s.defaults=function(n){if(n)for(var i in n)Cc[i]=n[i];return Cc},s.disable=function(n,i){ao=0,nt.forEach(function(a){return a[i?"kill":"disable"](n)}),cn(rt,"wheel",Qs),cn(Ct,"scroll",Qs),clearInterval(Tc),cn(Ct,"touchcancel",ki),cn(vt,"touchstart",ki),Ac(cn,Ct,"pointerdown,touchstart,mousedown",nm),Ac(cn,Ct,"pointerup,touchend,mouseup",im),hl.kill(),wc(cn);for(var r=0;r<st.length;r+=3)Rc(cn,st[r],st[r+1]),Rc(cn,st[r],st[r+2])},s.enable=function(){if(rt=window,Ct=document,ii=Ct.documentElement,vt=Ct.body,we&&(Vo=we.utils.toArray,yo=we.utils.clamp,hh=we.core.context||ki,yu=we.core.suppressOverwrites||ki,rd=rt.history.scrollRestoration||"auto",mh=rt.pageYOffset||0,we.core.globals("ScrollTrigger",s),vt)){ao=1,da=document.createElement("div"),da.style.height="100vh",da.style.position="absolute",Zg(),RE(),Yt.register(we),s.isTouch=Yt.isTouch,Nr=Yt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),fh=Yt.isTouch===1,ln(rt,"wheel",Qs),id=[rt,Ct,ii,vt],we.matchMedia?(s.matchMedia=function(l){var u=we.matchMedia(),f;for(f in l)u.add(f,l[f]);return u},we.addEventListener("matchMediaInit",function(){return ud()}),we.addEventListener("matchMediaRevert",function(){return jg()}),we.addEventListener("matchMedia",function(){gs(0,1),Cs("matchMedia")}),we.matchMedia().add("(orientation: portrait)",function(){return Tu(),Tu})):console.warn("Requires GSAP 3.11.0 or later"),Tu(),ln(Ct,"scroll",Qs);var n=vt.hasAttribute("style"),i=vt.style,r=i.borderTopStyle,a=we.core.Animation.prototype,o,c;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=dr(vt),nn.m=Math.round(o.top+nn.sc())||0,Fn.m=Math.round(o.left+Fn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(vt.setAttribute("style",""),vt.removeAttribute("style")),Tc=setInterval(am,250),we.delayedCall(.5,function(){return Ec=0}),ln(Ct,"touchcancel",ki),ln(vt,"touchstart",ki),Ac(ln,Ct,"pointerdown,touchstart,mousedown",nm),Ac(ln,Ct,"pointerup,touchend,mouseup",im),uh=we.utils.checkPrefix("transform"),$c.push(uh),ta=xn(),hl=we.delayedCall(.2,gs).pause(),na=[Ct,"visibilitychange",function(){var l=rt.innerWidth,u=rt.innerHeight;Ct.hidden?(Jp=l,Qp=u):(Jp!==l||Qp!==u)&&lo()},Ct,"DOMContentLoaded",gs,rt,"load",gs,rt,"resize",lo],wc(ln),nt.forEach(function(l){return l.enable(0,1)}),c=0;c<st.length;c+=3)Rc(cn,st[c],st[c+1]),Rc(cn,st[c],st[c+2])}},s.config=function(n){"limitCallbacks"in n&&(bu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Tc)||(Tc=i)&&setInterval(am,i),"ignoreMobileResize"in n&&(fh=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(wc(cn)||wc(ln,n.autoRefreshEvents||"none"),Bg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Hn(n),a=st.indexOf(r),o=As(r);~a&&st.splice(a,o?6:2),i&&(o?$i.unshift(rt,i,vt,i,ii,i):$i.unshift(r,i))},s.clearMatchMedia=function(n){nt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var a=(ti(n)?Hn(n):n).getBoundingClientRect(),o=a[r?bs:Ms]*i||0;return r?a.right-o>0&&a.left+o<rt.innerWidth:a.bottom-o>0&&a.top+o<rt.innerHeight},s.positionInViewport=function(n,i,r){ti(n)&&(n=Hn(n));var a=n.getBoundingClientRect(),o=a[r?bs:Ms],c=i==null?o/2:i in ml?ml[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return r?(a.left+c)/rt.innerWidth:(a.top+c)/rt.innerHeight},s.killAll=function(n){if(nt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Rs.killAll||[];Rs={},i.forEach(function(r){return r()})}},s})();je.version="3.13.0";je.saveStyles=function(s){return s?Vo(s).forEach(function(e){if(e&&e.style){var t=ei.indexOf(e);t>=0&&ei.splice(t,5),ei.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),hh())}}):ei};je.revert=function(s,e){return ud(!s,e)};je.create=function(s,e){return new je(s,e)};je.refresh=function(s){return s?lo(!0):(ta||je.register())&&gs(!0)};je.update=function(s){return++st.cache&&vr(s===!0?2:0)};je.clearScrollMemory=$g;je.maxScroll=function(s,e){return Yi(s,e?Fn:nn)};je.getScrollFunc=function(s,e){return jr(Hn(s),e?Fn:nn)};je.getById=function(s){return ph[s]};je.getAll=function(){return nt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};je.isScrolling=function(){return!!Si};je.snapDirectional=ld;je.addEventListener=function(s,e){var t=Rs[s]||(Rs[s]=[]);~t.indexOf(e)||t.push(e)};je.removeEventListener=function(s,e){var t=Rs[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};je.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,a=function(l,u){var f=[],h=[],d=we.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),h.push(_),r<=f.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&yn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return yn(r)&&(r=r(),ln(je,"refresh",function(){return r=e.batchMax()})),Vo(s).forEach(function(c){var l={};for(o in n)l[o]=n[o];l.trigger=c,t.push(je.create(l))}),t};var hm=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},wu=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Yt.isTouch?" pinch-zoom":""):"none",e===ii&&s(vt,t)},Ic={auto:1,scroll:1},zE=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||we.core.getCache(r),o=xn(),c;if(!a._isScrollT||o-a._isScrollT>2e3){for(;r&&r!==vt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Ic[(c=_i(r)).overflowY]||Ic[c.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==n&&!As(r)&&(Ic[(c=_i(r)).overflowY]||Ic[c.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Qg=function(e,t,n,i){return Yt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&zE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&ln(Ct,Yt.eventTypes[0],pm,!1,!0)},onDisable:function(){return cn(Ct,Yt.eventTypes[0],pm,!0)}})},VE=/(input|label|select|textarea)/i,dm,pm=function(e){var t=VE.test(e.target.tagName);(t||dm)&&(e._gsapAllow=!0,dm=t)},HE=function(e){fs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,a=t.onRelease,o,c,l=Hn(e.target)||ii,u=we.core.globals().ScrollSmoother,f=u&&u.get(),h=Nr&&(e.content&&Hn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=jr(l,nn),_=jr(l,Fn),g=1,m=(Yt.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,p=0,M=yn(i)?function(){return i(o)}:function(){return i||2.8},y,b,w=Qg(l,e.type,!0,r),S=function(){return b=!1},T=ki,R=ki,x=function(){c=Yi(l,nn),R=yo(Nr?1:0,c),n&&(T=yo(0,Yi(l,Fn))),y=Ss},v=function(){h._gsap.y=oo(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},C=function(){if(b){requestAnimationFrame(S);var W=oo(o.deltaY/2),ee=R(d.v-W);if(h&&ee!==d.v+d.offset){d.offset=ee-d.v;var D=oo((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",h._gsap.y=D+"px",d.cacheID=st.cache,vr()}return!0}d.offset&&v(),b=!0},P,N,U,V,B=function(){x(),P.isActive()&&P.vars.scrollY>c&&(d()>c?P.progress(1)&&d(c):P.resetTo("scrollY",c))};return h&&we.set(h,{y:"+=0"}),e.ignoreCheck=function(K){return Nr&&K.type==="touchmove"&&C()||g>1.05&&K.type!=="touchstart"||o.isGesturing||K.touches&&K.touches.length>1},e.onPress=function(){b=!1;var K=g;g=oo((rt.visualViewport&&rt.visualViewport.scale||1)/m),P.pause(),K!==g&&wu(l,g>1.01?!0:n?!1:"x"),N=_(),U=d(),x(),y=Ss},e.onRelease=e.onGestureStart=function(K,W){if(d.offset&&v(),!W)V.restart(!0);else{st.cache++;var ee=M(),D,ce;n&&(D=_(),ce=D+ee*.05*-K.velocityX/.227,ee*=hm(_,D,ce,Yi(l,Fn)),P.vars.scrollX=T(ce)),D=d(),ce=D+ee*.05*-K.velocityY/.227,ee*=hm(d,D,ce,Yi(l,nn)),P.vars.scrollY=R(ce),P.invalidate().duration(ee).play(.01),(Nr&&P.vars.scrollY>=c||D>=c-1)&&we.to({},{onUpdate:B,duration:ee})}a&&a(K)},e.onWheel=function(){P._ts&&P.pause(),xn()-p>1e3&&(y=0,p=xn())},e.onChange=function(K,W,ee,D,ce){if(Ss!==y&&x(),W&&n&&_(T(D[2]===W?N+(K.startX-K.x):_()+W-D[1])),ee){d.offset&&v();var Ae=ce[2]===ee,Fe=Ae?U+K.startY-K.y:d()+ee-ce[1],Oe=R(Fe);Ae&&Fe!==Oe&&(U+=Oe-Fe),d(Oe)}(ee||W)&&vr()},e.onEnable=function(){wu(l,n?!1:"x"),je.addEventListener("refresh",B),ln(rt,"resize",B),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),w.enable()},e.onDisable=function(){wu(l,!0),cn(rt,"resize",B),je.removeEventListener("refresh",B),w.kill()},e.lockAxis=e.lockAxis!==!1,o=new Yt(e),o.iOS=Nr,Nr&&!d()&&d(1),Nr&&we.ticker.add(ki),V=o._dc,P=we.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Jg(d,d(),function(){return P.pause()})},onUpdate:vr,onComplete:V.vars.onComplete}),o};je.sort=function(s){if(yn(s))return nt.sort(s);var e=rt.pageYOffset||0;return je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+rt.innerHeight}),nt.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};je.observe=function(s){return new Yt(s)};je.normalizeScroll=function(s){if(typeof s>"u")return Pn;if(s===!0&&Pn)return Pn.enable();if(s===!1){Pn&&Pn.kill(),Pn=s;return}var e=s instanceof Yt?s:HE(s);return Pn&&Pn.target===e.target&&Pn.kill(),As(e.target)&&(Pn=e),e};je.core={_getVelocityProp:lh,_inputObserver:Qg,_scrollers:st,_proxies:$i,bridge:{ss:function(){Si||Cs("scrollStart"),Si=xn()},ref:function(){return _n}}};Hg()&&we.registerPlugin(je);yt.registerPlugin(je);function GE(s){const e=new Oa,t=new ai;s.add(t);function n(){e.load("floors/floor-1.glb",r=>{const a=r.scene;a.position.set(0,0,0),a.rotateY(Math.PI),a.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),s.add(a)}),e.load("floors/enviorment.glb",r=>{const a=r.scene;a.position.set(0,0,0),a.rotateY(Math.PI),a.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),s.add(a)})}function i(){}return n(),{group:t,update:i}}yt.registerPlugin(je);function e_(s){const e=new Oa,t=new ai;s.add(t);let n,i=!1;function r(){e.load("floors/floor-2.glb",l=>{const u=l.scene;u.position.set(0,0,0),u.rotateY(Math.PI),u.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0)}),s.add(u)}),e.load("models/digiphy-overlay.glb",l=>{n=l.scene,n.position.set(0,2,0),n.traverse(m=>{m.isMesh&&m.material&&(m.material.transparent=!0,m.material.opacity=0,n.visible=!1)}),s.add(n);const u=28,f=63,h={first:3,hold:4,last:4.2},_=2+f,g=yt.timeline({scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",scrub:!0}});g.to(n.position,{y:u,ease:"linear",duration:h.first}),g.to(n.position,{y:u,ease:"none",duration:h.hold}),g.to(n.position,{y:_,ease:"linear",duration:h.last}),yt.to(n.rotation,{ease:"linear",y:n.rotation.y+5,scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",scrub:!0}})})}function a(){n&&(i=!i,i?(n.visible=!0,n.traverse(l=>{l.isMesh&&yt.to(l.material,{opacity:.5,duration:.6,ease:"power2.out"})})):n.traverse(l=>{l.isMesh&&yt.to(l.material,{opacity:0,duration:.5,ease:"power2.out",onComplete:()=>{n.visible=!1}})}),console.log("overlayVisible: ",i))}function o(){console.log("overlay should be off"),n&&(i=!1,n.traverse(l=>{l.isMesh&&yt.to(l.material,{opacity:0,duration:.5,ease:"power2.out",onComplete:()=>{n.visible=!1}})}))}function c(){}return r(),{group:t,update:c,toggleOverlayOpacity:a,overlayOff:o}}yt.registerPlugin(je);function WE(s){const e=new Oa,t=new ai;s.add(t);function n(){e.load("floors/floor-3.glb",i=>{const r=i.scene;r.position.set(0,0,0),r.rotateY(Math.PI),r.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),s.add(r)})}return n(),{group:t}}function XE(s,e,t,n,i){const r=document.querySelector(s);if(!r)return;r.innerHTML="",Object.entries(e).forEach(([f,h])=>{if(h.variants.length>1){const d=document.createElement("h3");d.textContent=f,r.appendChild(d);const _=document.createElement("button");_.textContent="None",_.classList.add("accessory-variant-button"),_.classList.add("accessory-variant-button-none"),_.addEventListener("click",()=>{t(f,-1)}),r.appendChild(_),h.variants.forEach((g,m)=>{const p=document.createElement("button");p.textContent=m+1,p.classList.add("accessory-variant-button"),p.addEventListener("click",()=>{t(f,m),u(g,n,"accessory-primary"),u(g,i,"accessory-secondary")}),r.appendChild(p)})}});const a=document.createElement("h3");a.textContent="Primary Color",r.appendChild(a),[{name:"Carbon",value:1513498,roughness:.1,metalness:.9},{name:"Pearl",value:16248308,roughness:.3,metalness:.2},{name:"Matte grey",value:5855577,roughness:.8,metalness:.3}].forEach(f=>{const h=document.createElement("button");h.textContent=f.name,h.classList.add("primary-color-button"),h.addEventListener("click",()=>{Object.assign(n,f),Object.values(e).forEach(d=>{const _=d.variants[d.defaultVariantIndex];_&&u(_,n,"accessory-primary")})}),r.appendChild(h)});const c=document.createElement("h3");c.textContent="Secondary Color",r.appendChild(c),[{name:"Charcoal",value:6908782,roughness:.3,metalness:.9},{name:"Pink",value:14270417,roughness:.7,metalness:.3},{name:"Light grey",value:12699079,roughness:.1,metalness:.7}].forEach(f=>{const h=document.createElement("button");h.textContent=f.name,h.classList.add("secondary-color-button"),h.addEventListener("click",()=>{Object.assign(i,f),Object.values(e).forEach(d=>{const _=d.variants[d.defaultVariantIndex];_&&u(_,i,"accessory-secondary")})}),r.appendChild(h)});function u(f,h,d){f.traverse(_=>{if(!_.isMesh)return;(Array.isArray(_.material)?_.material:[_.material]).forEach(m=>{m.name&&m.name.startsWith(d)&&(m.color.set(h.value),m.roughness=h.roughness,m.metalness=h.metalness)})})}}const qE=document.getElementById("accessory-menu");function YE(){qE.classList.toggle("visually-hidden")}var ea={},Au,mm;function KE(){return mm||(mm=1,Au=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Au}var Ru={},Ir={},gm;function Ds(){if(gm)return Ir;gm=1;let s;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return Ir.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},Ir.getSymbolTotalCodewords=function(n){return e[n]},Ir.getBCHDigit=function(t){let n=0;for(;t!==0;)n++,t>>>=1;return n},Ir.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');s=n},Ir.isKanjiModeEnabled=function(){return typeof s<"u"},Ir.toSJIS=function(n){return s(n)},Ir}var Cu={},_m;function fd(){return _m||(_m=1,(function(s){s.L={bit:1},s.M={bit:0},s.Q={bit:3},s.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return s.L;case"m":case"medium":return s.M;case"q":case"quartile":return s.Q;case"h":case"high":return s.H;default:throw new Error("Unknown EC Level: "+t)}}s.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},s.from=function(n,i){if(s.isValid(n))return n;try{return e(n)}catch{return i}}})(Cu)),Cu}var Pu,xm;function jE(){if(xm)return Pu;xm=1;function s(){this.buffer=[],this.length=0}return s.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Pu=s,Pu}var Lu,vm;function $E(){if(vm)return Lu;vm=1;function s(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return s.prototype.set=function(e,t,n,i){const r=e*this.size+t;this.data[r]=n,i&&(this.reservedBit[r]=!0)},s.prototype.get=function(e,t){return this.data[e*this.size+t]},s.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},s.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},Lu=s,Lu}var Du={},ym;function ZE(){return ym||(ym=1,(function(s){const e=Ds().getSymbolSize;s.getRowColCoords=function(n){if(n===1)return[];const i=Math.floor(n/7)+2,r=e(n),a=r===145?26:Math.ceil((r-13)/(2*i-2))*2,o=[r-7];for(let c=1;c<i-1;c++)o[c]=o[c-1]-a;return o.push(6),o.reverse()},s.getPositions=function(n){const i=[],r=s.getRowColCoords(n),a=r.length;for(let o=0;o<a;o++)for(let c=0;c<a;c++)o===0&&c===0||o===0&&c===a-1||o===a-1&&c===0||i.push([r[o],r[c]]);return i}})(Du)),Du}var Iu={},bm;function JE(){if(bm)return Iu;bm=1;const s=Ds().getSymbolSize,e=7;return Iu.getPositions=function(n){const i=s(n);return[[0,0],[i-e,0],[0,i-e]]},Iu}var Nu={},Mm;function QE(){return Mm||(Mm=1,(function(s){s.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};s.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},s.from=function(i){return s.isValid(i)?parseInt(i,10):void 0},s.getPenaltyN1=function(i){const r=i.size;let a=0,o=0,c=0,l=null,u=null;for(let f=0;f<r;f++){o=c=0,l=u=null;for(let h=0;h<r;h++){let d=i.get(f,h);d===l?o++:(o>=5&&(a+=e.N1+(o-5)),l=d,o=1),d=i.get(h,f),d===u?c++:(c>=5&&(a+=e.N1+(c-5)),u=d,c=1)}o>=5&&(a+=e.N1+(o-5)),c>=5&&(a+=e.N1+(c-5))}return a},s.getPenaltyN2=function(i){const r=i.size;let a=0;for(let o=0;o<r-1;o++)for(let c=0;c<r-1;c++){const l=i.get(o,c)+i.get(o,c+1)+i.get(o+1,c)+i.get(o+1,c+1);(l===4||l===0)&&a++}return a*e.N2},s.getPenaltyN3=function(i){const r=i.size;let a=0,o=0,c=0;for(let l=0;l<r;l++){o=c=0;for(let u=0;u<r;u++)o=o<<1&2047|i.get(l,u),u>=10&&(o===1488||o===93)&&a++,c=c<<1&2047|i.get(u,l),u>=10&&(c===1488||c===93)&&a++}return a*e.N3},s.getPenaltyN4=function(i){let r=0;const a=i.data.length;for(let c=0;c<a;c++)r+=i.data[c];return Math.abs(Math.ceil(r*100/a/5)-10)*e.N4};function t(n,i,r){switch(n){case s.Patterns.PATTERN000:return(i+r)%2===0;case s.Patterns.PATTERN001:return i%2===0;case s.Patterns.PATTERN010:return r%3===0;case s.Patterns.PATTERN011:return(i+r)%3===0;case s.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(r/3))%2===0;case s.Patterns.PATTERN101:return i*r%2+i*r%3===0;case s.Patterns.PATTERN110:return(i*r%2+i*r%3)%2===0;case s.Patterns.PATTERN111:return(i*r%3+(i+r)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}s.applyMask=function(i,r){const a=r.size;for(let o=0;o<a;o++)for(let c=0;c<a;c++)r.isReserved(c,o)||r.xor(c,o,t(i,c,o))},s.getBestMask=function(i,r){const a=Object.keys(s.Patterns).length;let o=0,c=1/0;for(let l=0;l<a;l++){r(l),s.applyMask(l,i);const u=s.getPenaltyN1(i)+s.getPenaltyN2(i)+s.getPenaltyN3(i)+s.getPenaltyN4(i);s.applyMask(l,i),u<c&&(c=u,o=l)}return o}})(Nu)),Nu}var Nc={},Sm;function t_(){if(Sm)return Nc;Sm=1;const s=fd(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Nc.getBlocksCount=function(i,r){switch(r){case s.L:return e[(i-1)*4+0];case s.M:return e[(i-1)*4+1];case s.Q:return e[(i-1)*4+2];case s.H:return e[(i-1)*4+3];default:return}},Nc.getTotalCodewordsCount=function(i,r){switch(r){case s.L:return t[(i-1)*4+0];case s.M:return t[(i-1)*4+1];case s.Q:return t[(i-1)*4+2];case s.H:return t[(i-1)*4+3];default:return}},Nc}var Uu={},Qa={},Tm;function ew(){if(Tm)return Qa;Tm=1;const s=new Uint8Array(512),e=new Uint8Array(256);return(function(){let n=1;for(let i=0;i<255;i++)s[i]=n,e[n]=i,n<<=1,n&256&&(n^=285);for(let i=255;i<512;i++)s[i]=s[i-255]})(),Qa.log=function(n){if(n<1)throw new Error("log("+n+")");return e[n]},Qa.exp=function(n){return s[n]},Qa.mul=function(n,i){return n===0||i===0?0:s[e[n]+e[i]]},Qa}var Em;function tw(){return Em||(Em=1,(function(s){const e=ew();s.mul=function(n,i){const r=new Uint8Array(n.length+i.length-1);for(let a=0;a<n.length;a++)for(let o=0;o<i.length;o++)r[a+o]^=e.mul(n[a],i[o]);return r},s.mod=function(n,i){let r=new Uint8Array(n);for(;r.length-i.length>=0;){const a=r[0];for(let c=0;c<i.length;c++)r[c]^=e.mul(i[c],a);let o=0;for(;o<r.length&&r[o]===0;)o++;r=r.slice(o)}return r},s.generateECPolynomial=function(n){let i=new Uint8Array([1]);for(let r=0;r<n;r++)i=s.mul(i,new Uint8Array([1,e.exp(r)]));return i}})(Uu)),Uu}var Fu,wm;function nw(){if(wm)return Fu;wm=1;const s=tw();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(n){this.degree=n,this.genPoly=s.generateECPolynomial(this.degree)},e.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(n.length+this.degree);i.set(n);const r=s.mod(i,this.genPoly),a=this.degree-r.length;if(a>0){const o=new Uint8Array(this.degree);return o.set(r,a),o}return r},Fu=e,Fu}var Ou={},Bu={},ku={},Am;function n_(){return Am||(Am=1,ku.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),ku}var Fi={},Rm;function i_(){if(Rm)return Fi;Rm=1;const s="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;Fi.KANJI=new RegExp(t,"g"),Fi.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Fi.BYTE=new RegExp(n,"g"),Fi.NUMERIC=new RegExp(s,"g"),Fi.ALPHANUMERIC=new RegExp(e,"g");const i=new RegExp("^"+t+"$"),r=new RegExp("^"+s+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return Fi.testKanji=function(c){return i.test(c)},Fi.testNumeric=function(c){return r.test(c)},Fi.testAlphanumeric=function(c){return a.test(c)},Fi}var Cm;function Is(){return Cm||(Cm=1,(function(s){const e=n_(),t=i_();s.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},s.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},s.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},s.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},s.MIXED={bit:-1},s.getCharCountIndicator=function(r,a){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?r.ccBits[0]:a<27?r.ccBits[1]:r.ccBits[2]},s.getBestModeForData=function(r){return t.testNumeric(r)?s.NUMERIC:t.testAlphanumeric(r)?s.ALPHANUMERIC:t.testKanji(r)?s.KANJI:s.BYTE},s.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},s.isValid=function(r){return r&&r.bit&&r.ccBits};function n(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return s.NUMERIC;case"alphanumeric":return s.ALPHANUMERIC;case"kanji":return s.KANJI;case"byte":return s.BYTE;default:throw new Error("Unknown mode: "+i)}}s.from=function(r,a){if(s.isValid(r))return r;try{return n(r)}catch{return a}}})(Bu)),Bu}var Pm;function iw(){return Pm||(Pm=1,(function(s){const e=Ds(),t=t_(),n=fd(),i=Is(),r=n_(),a=7973,o=e.getBCHDigit(a);function c(h,d,_){for(let g=1;g<=40;g++)if(d<=s.getCapacity(g,_,h))return g}function l(h,d){return i.getCharCountIndicator(h,d)+4}function u(h,d){let _=0;return h.forEach(function(g){const m=l(g.mode,d);_+=m+g.getBitsLength()}),_}function f(h,d){for(let _=1;_<=40;_++)if(u(h,_)<=s.getCapacity(_,d,i.MIXED))return _}s.from=function(d,_){return r.isValid(d)?parseInt(d,10):_},s.getCapacity=function(d,_,g){if(!r.isValid(d))throw new Error("Invalid QR Code version");typeof g>"u"&&(g=i.BYTE);const m=e.getSymbolTotalCodewords(d),p=t.getTotalCodewordsCount(d,_),M=(m-p)*8;if(g===i.MIXED)return M;const y=M-l(g,d);switch(g){case i.NUMERIC:return Math.floor(y/10*3);case i.ALPHANUMERIC:return Math.floor(y/11*2);case i.KANJI:return Math.floor(y/13);case i.BYTE:default:return Math.floor(y/8)}},s.getBestVersionForData=function(d,_){let g;const m=n.from(_,n.M);if(Array.isArray(d)){if(d.length>1)return f(d,m);if(d.length===0)return 1;g=d[0]}else g=d;return c(g.mode,g.getLength(),m)},s.getEncodedBits=function(d){if(!r.isValid(d)||d<7)throw new Error("Invalid QR Code version");let _=d<<12;for(;e.getBCHDigit(_)-o>=0;)_^=a<<e.getBCHDigit(_)-o;return d<<12|_}})(Ou)),Ou}var zu={},Lm;function rw(){if(Lm)return zu;Lm=1;const s=Ds(),e=1335,t=21522,n=s.getBCHDigit(e);return zu.getEncodedBits=function(r,a){const o=r.bit<<3|a;let c=o<<10;for(;s.getBCHDigit(c)-n>=0;)c^=e<<s.getBCHDigit(c)-n;return(o<<10|c)^t},zu}var Vu={},Hu,Dm;function sw(){if(Dm)return Hu;Dm=1;const s=Is();function e(t){this.mode=s.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let i,r,a;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),a=parseInt(r,10),n.put(a,10);const o=this.data.length-i;o>0&&(r=this.data.substr(i),a=parseInt(r,10),n.put(a,o*3+1))},Hu=e,Hu}var Gu,Im;function aw(){if(Im)return Gu;Im=1;const s=Is(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(n){this.mode=s.ALPHANUMERIC,this.data=n}return t.getBitsLength=function(i){return 11*Math.floor(i/2)+6*(i%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let r;for(r=0;r+2<=this.data.length;r+=2){let a=e.indexOf(this.data[r])*45;a+=e.indexOf(this.data[r+1]),i.put(a,11)}this.data.length%2&&i.put(e.indexOf(this.data[r]),6)},Gu=t,Gu}var Wu,Nm;function ow(){if(Nm)return Wu;Nm=1;const s=Is();function e(t){this.mode=s.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(n){return n*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let n=0,i=this.data.length;n<i;n++)t.put(this.data[n],8)},Wu=e,Wu}var Xu,Um;function cw(){if(Um)return Xu;Um=1;const s=Is(),e=Ds();function t(n){this.mode=s.KANJI,this.data=n}return t.getBitsLength=function(i){return i*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let i;for(i=0;i<this.data.length;i++){let r=e.toSJIS(this.data[i]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[i]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),n.put(r,13)}},Xu=t,Xu}var qu={exports:{}},Fm;function lw(){return Fm||(Fm=1,(function(s){var e={single_source_shortest_paths:function(t,n,i){var r={},a={};a[n]=0;var o=e.PriorityQueue.make();o.push(n,0);for(var c,l,u,f,h,d,_,g,m;!o.empty();){c=o.pop(),l=c.value,f=c.cost,h=t[l]||{};for(u in h)h.hasOwnProperty(u)&&(d=h[u],_=f+d,g=a[u],m=typeof a[u]>"u",(m||g>_)&&(a[u]=_,o.push(u,_),r[u]=l))}if(typeof i<"u"&&typeof a[i]>"u"){var p=["Could not find a path from ",n," to ",i,"."].join("");throw new Error(p)}return r},extract_shortest_path_from_predecessor_list:function(t,n){for(var i=[],r=n;r;)i.push(r),t[r],r=t[r];return i.reverse(),i},find_path:function(t,n,i){var r=e.single_source_shortest_paths(t,n,i);return e.extract_shortest_path_from_predecessor_list(r,i)},PriorityQueue:{make:function(t){var n=e.PriorityQueue,i={},r;t=t||{};for(r in n)n.hasOwnProperty(r)&&(i[r]=n[r]);return i.queue=[],i.sorter=t.sorter||n.default_sorter,i},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){var i={value:t,cost:n};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};s.exports=e})(qu)),qu.exports}var Om;function uw(){return Om||(Om=1,(function(s){const e=Is(),t=sw(),n=aw(),i=ow(),r=cw(),a=i_(),o=Ds(),c=lw();function l(p){return unescape(encodeURIComponent(p)).length}function u(p,M,y){const b=[];let w;for(;(w=p.exec(y))!==null;)b.push({data:w[0],index:w.index,mode:M,length:w[0].length});return b}function f(p){const M=u(a.NUMERIC,e.NUMERIC,p),y=u(a.ALPHANUMERIC,e.ALPHANUMERIC,p);let b,w;return o.isKanjiModeEnabled()?(b=u(a.BYTE,e.BYTE,p),w=u(a.KANJI,e.KANJI,p)):(b=u(a.BYTE_KANJI,e.BYTE,p),w=[]),M.concat(y,b,w).sort(function(T,R){return T.index-R.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function h(p,M){switch(M){case e.NUMERIC:return t.getBitsLength(p);case e.ALPHANUMERIC:return n.getBitsLength(p);case e.KANJI:return r.getBitsLength(p);case e.BYTE:return i.getBitsLength(p)}}function d(p){return p.reduce(function(M,y){const b=M.length-1>=0?M[M.length-1]:null;return b&&b.mode===y.mode?(M[M.length-1].data+=y.data,M):(M.push(y),M)},[])}function _(p){const M=[];for(let y=0;y<p.length;y++){const b=p[y];switch(b.mode){case e.NUMERIC:M.push([b,{data:b.data,mode:e.ALPHANUMERIC,length:b.length},{data:b.data,mode:e.BYTE,length:b.length}]);break;case e.ALPHANUMERIC:M.push([b,{data:b.data,mode:e.BYTE,length:b.length}]);break;case e.KANJI:M.push([b,{data:b.data,mode:e.BYTE,length:l(b.data)}]);break;case e.BYTE:M.push([{data:b.data,mode:e.BYTE,length:l(b.data)}])}}return M}function g(p,M){const y={},b={start:{}};let w=["start"];for(let S=0;S<p.length;S++){const T=p[S],R=[];for(let x=0;x<T.length;x++){const v=T[x],C=""+S+x;R.push(C),y[C]={node:v,lastCount:0},b[C]={};for(let P=0;P<w.length;P++){const N=w[P];y[N]&&y[N].node.mode===v.mode?(b[N][C]=h(y[N].lastCount+v.length,v.mode)-h(y[N].lastCount,v.mode),y[N].lastCount+=v.length):(y[N]&&(y[N].lastCount=v.length),b[N][C]=h(v.length,v.mode)+4+e.getCharCountIndicator(v.mode,M))}}w=R}for(let S=0;S<w.length;S++)b[w[S]].end=0;return{map:b,table:y}}function m(p,M){let y;const b=e.getBestModeForData(p);if(y=e.from(M,b),y!==e.BYTE&&y.bit<b.bit)throw new Error('"'+p+'" cannot be encoded with mode '+e.toString(y)+`.
 Suggested mode is: `+e.toString(b));switch(y===e.KANJI&&!o.isKanjiModeEnabled()&&(y=e.BYTE),y){case e.NUMERIC:return new t(p);case e.ALPHANUMERIC:return new n(p);case e.KANJI:return new r(p);case e.BYTE:return new i(p)}}s.fromArray=function(M){return M.reduce(function(y,b){return typeof b=="string"?y.push(m(b,null)):b.data&&y.push(m(b.data,b.mode)),y},[])},s.fromString=function(M,y){const b=f(M,o.isKanjiModeEnabled()),w=_(b),S=g(w,y),T=c.find_path(S.map,"start","end"),R=[];for(let x=1;x<T.length-1;x++)R.push(S.table[T[x]].node);return s.fromArray(d(R))},s.rawSplit=function(M){return s.fromArray(f(M,o.isKanjiModeEnabled()))}})(Vu)),Vu}var Bm;function fw(){if(Bm)return Ru;Bm=1;const s=Ds(),e=fd(),t=jE(),n=$E(),i=ZE(),r=JE(),a=QE(),o=t_(),c=nw(),l=iw(),u=rw(),f=Is(),h=uw();function d(S,T){const R=S.size,x=r.getPositions(T);for(let v=0;v<x.length;v++){const C=x[v][0],P=x[v][1];for(let N=-1;N<=7;N++)if(!(C+N<=-1||R<=C+N))for(let U=-1;U<=7;U++)P+U<=-1||R<=P+U||(N>=0&&N<=6&&(U===0||U===6)||U>=0&&U<=6&&(N===0||N===6)||N>=2&&N<=4&&U>=2&&U<=4?S.set(C+N,P+U,!0,!0):S.set(C+N,P+U,!1,!0))}}function _(S){const T=S.size;for(let R=8;R<T-8;R++){const x=R%2===0;S.set(R,6,x,!0),S.set(6,R,x,!0)}}function g(S,T){const R=i.getPositions(T);for(let x=0;x<R.length;x++){const v=R[x][0],C=R[x][1];for(let P=-2;P<=2;P++)for(let N=-2;N<=2;N++)P===-2||P===2||N===-2||N===2||P===0&&N===0?S.set(v+P,C+N,!0,!0):S.set(v+P,C+N,!1,!0)}}function m(S,T){const R=S.size,x=l.getEncodedBits(T);let v,C,P;for(let N=0;N<18;N++)v=Math.floor(N/3),C=N%3+R-8-3,P=(x>>N&1)===1,S.set(v,C,P,!0),S.set(C,v,P,!0)}function p(S,T,R){const x=S.size,v=u.getEncodedBits(T,R);let C,P;for(C=0;C<15;C++)P=(v>>C&1)===1,C<6?S.set(C,8,P,!0):C<8?S.set(C+1,8,P,!0):S.set(x-15+C,8,P,!0),C<8?S.set(8,x-C-1,P,!0):C<9?S.set(8,15-C-1+1,P,!0):S.set(8,15-C-1,P,!0);S.set(x-8,8,1,!0)}function M(S,T){const R=S.size;let x=-1,v=R-1,C=7,P=0;for(let N=R-1;N>0;N-=2)for(N===6&&N--;;){for(let U=0;U<2;U++)if(!S.isReserved(v,N-U)){let V=!1;P<T.length&&(V=(T[P]>>>C&1)===1),S.set(v,N-U,V),C--,C===-1&&(P++,C=7)}if(v+=x,v<0||R<=v){v-=x,x=-x;break}}}function y(S,T,R){const x=new t;R.forEach(function(U){x.put(U.mode.bit,4),x.put(U.getLength(),f.getCharCountIndicator(U.mode,S)),U.write(x)});const v=s.getSymbolTotalCodewords(S),C=o.getTotalCodewordsCount(S,T),P=(v-C)*8;for(x.getLengthInBits()+4<=P&&x.put(0,4);x.getLengthInBits()%8!==0;)x.putBit(0);const N=(P-x.getLengthInBits())/8;for(let U=0;U<N;U++)x.put(U%2?17:236,8);return b(x,S,T)}function b(S,T,R){const x=s.getSymbolTotalCodewords(T),v=o.getTotalCodewordsCount(T,R),C=x-v,P=o.getBlocksCount(T,R),N=x%P,U=P-N,V=Math.floor(x/P),B=Math.floor(C/P),K=B+1,W=V-B,ee=new c(W);let D=0;const ce=new Array(P),Ae=new Array(P);let Fe=0;const Oe=new Uint8Array(S.buffer);for(let Te=0;Te<P;Te++){const Ee=Te<U?B:K;ce[Te]=Oe.slice(D,D+Ee),Ae[Te]=ee.encode(ce[Te]),D+=Ee,Fe=Math.max(Fe,Ee)}const qe=new Uint8Array(x);let j=0,$,ae;for($=0;$<Fe;$++)for(ae=0;ae<P;ae++)$<ce[ae].length&&(qe[j++]=ce[ae][$]);for($=0;$<W;$++)for(ae=0;ae<P;ae++)qe[j++]=Ae[ae][$];return qe}function w(S,T,R,x){let v;if(Array.isArray(S))v=h.fromArray(S);else if(typeof S=="string"){let V=T;if(!V){const B=h.rawSplit(S);V=l.getBestVersionForData(B,R)}v=h.fromString(S,V||40)}else throw new Error("Invalid data");const C=l.getBestVersionForData(v,R);if(!C)throw new Error("The amount of data is too big to be stored in a QR Code");if(!T)T=C;else if(T<C)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+C+`.
`);const P=y(T,R,v),N=s.getSymbolSize(T),U=new n(N);return d(U,T),_(U),g(U,T),p(U,R,0),T>=7&&m(U,T),M(U,P),isNaN(x)&&(x=a.getBestMask(U,p.bind(null,U,R))),a.applyMask(x,U),p(U,R,x),{modules:U,version:T,errorCorrectionLevel:R,maskPattern:x,segments:v}}return Ru.create=function(T,R){if(typeof T>"u"||T==="")throw new Error("No input text");let x=e.M,v,C;return typeof R<"u"&&(x=e.from(R.errorCorrectionLevel,e.M),v=l.from(R.version),C=a.from(R.maskPattern),R.toSJISFunc&&s.setToSJISFunction(R.toSJISFunc)),w(T,v,x,C)},Ru}var Yu={},Ku={},km;function r_(){return km||(km=1,(function(s){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let n=t.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+t);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(r){return[r,r]}))),n.length===6&&n.push("F","F");const i=parseInt(n.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+n.slice(0,6).join("")}}s.getOptions=function(n){n||(n={}),n.color||(n.color={});const i=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,r=n.width&&n.width>=21?n.width:void 0,a=n.scale||4;return{width:r,scale:r?4:a,margin:i,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},s.getScale=function(n,i){return i.width&&i.width>=n+i.margin*2?i.width/(n+i.margin*2):i.scale},s.getImageWidth=function(n,i){const r=s.getScale(n,i);return Math.floor((n+i.margin*2)*r)},s.qrToImageData=function(n,i,r){const a=i.modules.size,o=i.modules.data,c=s.getScale(a,r),l=Math.floor((a+r.margin*2)*c),u=r.margin*c,f=[r.color.light,r.color.dark];for(let h=0;h<l;h++)for(let d=0;d<l;d++){let _=(h*l+d)*4,g=r.color.light;if(h>=u&&d>=u&&h<l-u&&d<l-u){const m=Math.floor((h-u)/c),p=Math.floor((d-u)/c);g=f[o[m*a+p]?1:0]}n[_++]=g.r,n[_++]=g.g,n[_++]=g.b,n[_]=g.a}}})(Ku)),Ku}var zm;function hw(){return zm||(zm=1,(function(s){const e=r_();function t(i,r,a){i.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=a,r.width=a,r.style.height=a+"px",r.style.width=a+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}s.render=function(r,a,o){let c=o,l=a;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),a||(l=n()),c=e.getOptions(c);const u=e.getImageWidth(r.modules.size,c),f=l.getContext("2d"),h=f.createImageData(u,u);return e.qrToImageData(h.data,r,c),t(f,l,u),f.putImageData(h,0,0),l},s.renderToDataURL=function(r,a,o){let c=o;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),c||(c={});const l=s.render(r,a,c),u=c.type||"image/png",f=c.rendererOpts||{};return l.toDataURL(u,f.quality)}})(Yu)),Yu}var ju={},Vm;function dw(){if(Vm)return ju;Vm=1;const s=r_();function e(i,r){const a=i.a/255,o=r+'="'+i.hex+'"';return a<1?o+" "+r+'-opacity="'+a.toFixed(2).slice(1)+'"':o}function t(i,r,a){let o=i+r;return typeof a<"u"&&(o+=" "+a),o}function n(i,r,a){let o="",c=0,l=!1,u=0;for(let f=0;f<i.length;f++){const h=Math.floor(f%r),d=Math.floor(f/r);!h&&!l&&(l=!0),i[f]?(u++,f>0&&h>0&&i[f-1]||(o+=l?t("M",h+a,.5+d+a):t("m",c,0),c=0,l=!1),h+1<r&&i[f+1]||(o+=t("h",u),u=0)):c++}return o}return ju.render=function(r,a,o){const c=s.getOptions(a),l=r.modules.size,u=r.modules.data,f=l+c.margin*2,h=c.color.light.a?"<path "+e(c.color.light,"fill")+' d="M0 0h'+f+"v"+f+'H0z"/>':"",d="<path "+e(c.color.dark,"stroke")+' d="'+n(u,l,c.margin)+'"/>',_='viewBox="0 0 '+f+" "+f+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+_+' shape-rendering="crispEdges">'+h+d+`</svg>
`;return typeof o=="function"&&o(null,m),m},ju}var Hm;function pw(){if(Hm)return ea;Hm=1;const s=KE(),e=fw(),t=hw(),n=dw();function i(r,a,o,c,l){const u=[].slice.call(arguments,1),f=u.length,h=typeof u[f-1]=="function";if(!h&&!s())throw new Error("Callback required as last argument");if(h){if(f<2)throw new Error("Too few arguments provided");f===2?(l=o,o=a,a=c=void 0):f===3&&(a.getContext&&typeof l>"u"?(l=c,c=void 0):(l=c,c=o,o=a,a=void 0))}else{if(f<1)throw new Error("Too few arguments provided");return f===1?(o=a,a=c=void 0):f===2&&!a.getContext&&(c=o,o=a,a=void 0),new Promise(function(d,_){try{const g=e.create(o,c);d(r(g,a,c))}catch(g){_(g)}})}try{const d=e.create(o,c);l(null,r(d,a,c))}catch(d){l(d)}}return ea.create=e.create,ea.toCanvas=i.bind(null,t.render),ea.toDataURL=i.bind(null,t.renderToDataURL),ea.toString=i.bind(null,function(r,a,o){return n.render(r,o)}),ea}var mw=pw();const gw=m_(mw);yt.registerPlugin(je);function _w(s){const e=new Oa,t=new ai;s.add(t);const n=`${window.location.origin}/around-digiphy/mobile.html`;gw.toCanvas(document.getElementById("qrcode"),n,function(a){a&&console.error(a),console.log("QR code ready:",n)});function i(){e.load("floors/floor-4.glb",a=>{const o=a.scene;o.position.set(0,0,0),o.rotateY(Math.PI),o.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0)}),s.add(o)})}function r(){}return i(),{group:t,update:r}}const s_=document.querySelector(".qr-wrapper"),xw=document.getElementById("qrcode");document.querySelector(".qr-wrapper-close").addEventListener("click",hd);xw.addEventListener("click",vw);let ma=!0;function hd(){ma&&(ma=!1,s_.classList.add("qr-small"),console.log(ma))}function vw(){ma||(ma=!0,s_.classList.remove("qr-small"),console.log(ma))}document.querySelector(".uni-button").addEventListener("click",hd);yt.registerPlugin(je);function yw(s){const e=new Oa,t=new ai;s.add(t);function n(){e.load("floors/floor-5.glb",r=>{const a=r.scene;a.position.set(0,0,0),a.rotateY(Math.PI),a.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),s.add(a)})}function i(){}return n(),{group:t,update:i}}yt.registerPlugin(je);function bw(s){return new Promise(e=>{const t=new Oa,n=new ai;s.add(n);let i=null;const r={};let a;const o={dashboard:{variants:[],defaultVariantIndex:0},console:{variants:[],defaultVariantIndex:0},frameLeft:{variants:[],defaultVariantIndex:0},frameRight:{variants:[],defaultVariantIndex:0},tablet:{variants:[],defaultVariantIndex:0}},c={"accessory-console-1":{x:-10,y:0,z:0},"accessory-console-2":{x:-10,y:0,z:0},"accessory-dashboard-1":{x:0,y:5,z:0},"accessory-dashboard-2":{x:0,y:5,z:0},"accessory-frameLeft-1":{x:0,y:0,z:-10},"accessory-frameRight-1":{x:0,y:0,z:10},"accessory-tablet-1":{x:0,y:8,z:0},"accessory-tablet-2":{x:0,y:8,z:0}};function l(){t.load("models/digiphy-accessories.glb",g=>{const m=g.scene;m.position.set(0,2,0),s.add(m),m.traverse(T=>{const R=T.type==="Group"&&T.name.startsWith("accessory-"),x=T.isMesh&&T.name.startsWith("accessory-");if(!R&&!x)return;const v=T.name.match(/^accessory-([a-zA-Z]+)-\d+/);if(!v)return;const C=v[1];o[C]||(o[C]={variants:[],defaultVariantIndex:0});try{const P=[];if(R)T.traverse(N=>{if(N.isMesh){const U=N.material.clone();U.transparent=!0,U.opacity=0,N.material=U,P.push(U)}});else{const N=T.material.clone();N.transparent=!0,N.opacity=0,T.material=N,P.push(N)}T.materials=P,T.visible=!1,T.defaultPos=T.position.clone(),o[C].variants.push(T)}catch(P){console.error(`  - ERROR processing ${T.name}:`,P)}}),e({group:n,update:f,accessoryGroups:o,setAccessoryVariant:_}),u();for(let T=1;T<=4;T++){const R=m.getObjectByName(`chair-${T}`);R&&(r[`chair-${T}`]=R),R.defaultPos=R.position.clone()}i=m.getObjectByName("dashboard"),i&&(i.defaultPos=i.position.clone(),r.dashboard=i);const p=28,M=63,y={first:3,hold:4,last:4.2},w=2+M,S=yt.timeline({scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",scrub:!0}});S.to(m.position,{y:p,ease:"linear",duration:y.first}),S.addLabel("phase2Start").to(m.position,{y:p,duration:y.hold,ease:"none"}).addLabel("phase2End"),S.to(m.position,{y:w,ease:"linear",duration:y.last}),S.add(a,"phase2Start+=0.3"),a.duration(y.hold*.6),yt.to(m.rotation,{ease:"linear",y:m.rotation.y+5,scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",scrub:!0}})}),t.load("models/platform.glb",g=>{const m=g.scene;m.position.set(0,0,0),s.add(m);const p=26,M=63,y={first:3,hold:4,last:4.2},w=0+M,S=yt.timeline({scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",scrub:!0}});S.to(m.position,{y:p,ease:"linear",duration:y.first}),S.to(m.position,{y:p,ease:"none",duration:y.hold}),S.to(m.position,{y:w,ease:"linear",duration:y.last})})}function u(){a&&a.kill(),a=yt.timeline(),Object.values(o).forEach(g=>{g.variants.forEach((m,p)=>{const M=c[m.name]||{x:0,y:0,z:0};m.visible=!1,m.materials&&m.materials.forEach(y=>y.opacity=0),a.set(m,{visible:!1}),a.fromTo(m.position,{x:m.position.x+M.x,y:m.position.y+M.y,z:m.position.z+M.z},{x:m.position.x,y:m.position.y,z:m.position.z,duration:1,ease:"power3.out",onStart:()=>{p===g.defaultVariantIndex&&(m.visible=!0)}},"<"),p===g.defaultVariantIndex&&m.materials&&m.materials.forEach((y,b)=>{a.fromTo(y,{opacity:0},{opacity:1,duration:1,ease:"power2.out"},"<")})})})}function f(){}function h(g,m,p){console.log("i work"),yt.to(g.position,{[m]:g.defaultPos[m]+p*1,duration:.3,ease:"power2.out",onUpdate:()=>{console.log(g.defaultPos)}})}const d=g_.channel("room1",{config:{broadcast:{self:!0,ack:!0}}});d.on("broadcast",{event:"command"},({payload:g})=>{switch(console.log("Received command:",g),g.object){case"dashboard":h(i,g.direction,g.amount);break;case"chair-1":h(r[g.object],g.direction,g.amount);break;case"chair-2":h(r[g.object],g.direction,g.amount);break;case"chair-3":h(r[g.object],g.direction,g.amount);break;case"chair-4":h(r[g.object],g.direction,g.amount);break;case"connected":hd();break;default:console.warn("Unknown command type:",g.type)}}),d.subscribe(g=>{console.log("channel status:",g)}),l();function _(g,m){const p=o[g];if(!p)return;const M=p.variants[p.defaultVariantIndex];M&&(M.visible=!1,M.materials.forEach(b=>b.opacity=0));const y=p.variants[m];y&&(y.visible=!0,y.materials.forEach(b=>b.opacity=1)),p.defaultVariantIndex=m}return{group:n,update:f}})}const Gm={floor1:6,floor2:15,floor3:32,floor4:55,floor5:63,floor6:71};function Mw(s){const t=document.querySelector(".three-section").offsetHeight,n=window.innerHeight,i=t-n,r=6,a=71;console.log("Floor navigation initialized:",{floors:Object.keys(Gm).length,scrollRange:`0 - ${i}px`,cameraRange:`${r} - ${a}`});function o(c){const l=Gm[c];if(l===void 0){console.error(`Floor ${c} not found`);return}const u=(l-r)/(a-r),f=i*u;console.log(`Navigating to ${c}:`,{targetCameraY:l,targetScroll:Math.round(f),currentCameraY:s.position.y.toFixed(1)});const h=document.body.scrollTop,d=f-h;yt.to({val:0},{val:1,duration:1.5,ease:"power2.inOut",onUpdate:function(){const _=this.targets()[0].val;document.body.scrollTop=h+d*_,je.update()},onComplete:()=>{je.update(),console.log(`Arrived at ${c} - Camera Y: ${s.position.y.toFixed(1)}`)}})}document.querySelectorAll(".nav-button").forEach(c=>{c.addEventListener("click",()=>{const l=c.dataset.floor;o(l)})}),console.log("Navigation buttons ready")}class Sw extends Tv{constructor(e){super(e),this.type=Wi}parse(e){const a=function(R,x){switch(R){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(x||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(x||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(x||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(x||""))}},f=function(R,x,v){x=x||1024;let P=R.pos,N=-1,U=0,V="",B=String.fromCharCode.apply(null,new Uint16Array(R.subarray(P,P+128)));for(;0>(N=B.indexOf(`
`))&&U<x&&P<R.byteLength;)V+=B,U+=B.length,P+=128,B+=String.fromCharCode.apply(null,new Uint16Array(R.subarray(P,P+128)));return-1<N?(R.pos+=U+N+1,V+B.slice(0,N)):!1},h=function(R){const x=/^#\?(\S+)/,v=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*FORMAT=(\S+)\s*$/,N=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,U={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let V,B;for((R.pos>=R.byteLength||!(V=f(R)))&&a(1,"no header found"),(B=V.match(x))||a(3,"bad initial token"),U.valid|=1,U.programtype=B[1],U.string+=V+`
`;V=f(R),V!==!1;){if(U.string+=V+`
`,V.charAt(0)==="#"){U.comments+=V+`
`;continue}if((B=V.match(v))&&(U.gamma=parseFloat(B[1])),(B=V.match(C))&&(U.exposure=parseFloat(B[1])),(B=V.match(P))&&(U.valid|=2,U.format=B[1]),(B=V.match(N))&&(U.valid|=4,U.height=parseInt(B[1],10),U.width=parseInt(B[2],10)),U.valid&2&&U.valid&4)break}return U.valid&2||a(3,"missing format specifier"),U.valid&4||a(3,"missing image size specifier"),U},d=function(R,x,v){const C=x;if(C<8||C>32767||R[0]!==2||R[1]!==2||R[2]&128)return new Uint8Array(R);C!==(R[2]<<8|R[3])&&a(3,"wrong scanline width");const P=new Uint8Array(4*x*v);P.length||a(4,"unable to allocate buffer space");let N=0,U=0;const V=4*C,B=new Uint8Array(4),K=new Uint8Array(V);let W=v;for(;W>0&&U<R.byteLength;){U+4>R.byteLength&&a(1),B[0]=R[U++],B[1]=R[U++],B[2]=R[U++],B[3]=R[U++],(B[0]!=2||B[1]!=2||(B[2]<<8|B[3])!=C)&&a(3,"bad rgbe scanline format");let ee=0,D;for(;ee<V&&U<R.byteLength;){D=R[U++];const Ae=D>128;if(Ae&&(D-=128),(D===0||ee+D>V)&&a(3,"bad scanline data"),Ae){const Fe=R[U++];for(let Oe=0;Oe<D;Oe++)K[ee++]=Fe}else K.set(R.subarray(U,U+D),ee),ee+=D,U+=D}const ce=C;for(let Ae=0;Ae<ce;Ae++){let Fe=0;P[N]=K[Ae+Fe],Fe+=C,P[N+1]=K[Ae+Fe],Fe+=C,P[N+2]=K[Ae+Fe],Fe+=C,P[N+3]=K[Ae+Fe],N+=4}W--}return P},_=function(R,x,v,C){const P=R[x+3],N=Math.pow(2,P-128)/255;v[C+0]=R[x+0]*N,v[C+1]=R[x+1]*N,v[C+2]=R[x+2]*N,v[C+3]=1},g=function(R,x,v,C){const P=R[x+3],N=Math.pow(2,P-128)/255;v[C+0]=nc.toHalfFloat(Math.min(R[x+0]*N,65504)),v[C+1]=nc.toHalfFloat(Math.min(R[x+1]*N,65504)),v[C+2]=nc.toHalfFloat(Math.min(R[x+2]*N,65504)),v[C+3]=nc.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=h(m),M=p.width,y=p.height,b=d(m.subarray(m.pos),M,y);let w,S,T;switch(this.type){case Gn:T=b.length/4;const R=new Float32Array(T*4);for(let v=0;v<T;v++)_(b,v*4,R,v*4);w=R,S=Gn;break;case Wi:T=b.length/4;const x=new Uint16Array(T*4);for(let v=0;v<T;v++)g(b,v*4,x,v*4);w=x,S=Wi;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:M,height:y,data:w,header:p.string,gamma:p.gamma,exposure:p.exposure,type:S}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(a,o){switch(a.type){case Gn:case Wi:a.colorSpace=Sn,a.minFilter=Jt,a.magFilter=Jt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,n,i)}}var bn,a_,yr,Ki,qr,o_,ga,Uc,c_=function(){return typeof window<"u"},l_=function(){return bn||c_()&&(bn=window.gsap)&&bn.registerPlugin&&bn},u_=function(e){return typeof e=="string"},Wm=function(e){return typeof e=="function"},Go=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,r="client"+n;return e===yr||e===Ki||e===qr?Math.max(Ki[i],qr[i])-(yr["inner"+n]||Ki[r]||qr[r]):e[i]-e["offset"+n]},Wo=function(e,t){var n="scroll"+(t==="x"?"Left":"Top");return e===yr&&(e.pageXOffset!=null?n="page"+t.toUpperCase()+"Offset":e=Ki[n]!=null?Ki:qr),function(){return e[n]}},Tw=function(e,t,n,i){if(Wm(e)&&(e=e(t,n,i)),typeof e!="object")return u_(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var r={},a;for(a in e)r[a]=a!=="onAutoKill"&&Wm(e[a])?e[a](t,n,i):e[a];return r},f_=function(e,t){if(e=o_(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),i=!t||t===yr||t===qr,r=i?{top:Ki.clientTop-(yr.pageYOffset||Ki.scrollTop||qr.scrollTop||0),left:Ki.clientLeft-(yr.pageXOffset||Ki.scrollLeft||qr.scrollLeft||0)}:t.getBoundingClientRect(),a={x:n.left-r.left,y:n.top-r.top};return!i&&t&&(a.x+=Wo(t,"x")(),a.y+=Wo(t,"y")()),a},Xm=function(e,t,n,i,r){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-r:u_(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+i-r:e==="max"?Go(t,n)-r:Math.min(Go(t,n),f_(e,t)[n]-r)},_h=function(){bn=l_(),c_()&&bn&&typeof document<"u"&&document.body&&(yr=window,qr=document.body,Ki=document.documentElement,o_=bn.utils.toArray,bn.config({autoKillThreshold:7}),ga=bn.config(),a_=1)},Ba={version:"3.13.0",name:"scrollTo",rawVars:1,register:function(e){bn=e,_h()},init:function(e,t,n,i,r){a_||_h();var a=this,o=bn.getProperty(e,"scrollSnapType");a.isWin=e===yr,a.target=e,a.tween=n,t=Tw(t,i,e,r),a.vars=t,a.autoKill=!!("autoKill"in t?t:ga).autoKill,a.getX=Wo(e,"x"),a.getY=Wo(e,"y"),a.x=a.xPrev=a.getX(),a.y=a.yPrev=a.getY(),Uc||(Uc=bn.core.globals().ScrollTrigger),bn.getProperty(e,"scrollBehavior")==="smooth"&&bn.set(e,{scrollBehavior:"auto"}),o&&o!=="none"&&(a.snap=1,a.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(a.add(a,"x",a.x,Xm(t.x,e,"x",a.x,t.offsetX||0),i,r),a._props.push("scrollTo_x")):a.skipX=1,t.y!=null?(a.add(a,"y",a.y,Xm(t.y,e,"y",a.y,t.offsetY||0),i,r),a._props.push("scrollTo_y")):a.skipY=1},render:function(e,t){for(var n=t._pt,i=t.target,r=t.tween,a=t.autoKill,o=t.xPrev,c=t.yPrev,l=t.isWin,u=t.snap,f=t.snapInline,h,d,_,g,m;n;)n.r(e,n.d),n=n._next;h=l||!t.skipX?t.getX():o,d=l||!t.skipY?t.getY():c,_=d-c,g=h-o,m=ga.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),a&&(!t.skipX&&(g>m||g<-m)&&h<Go(i,"x")&&(t.skipX=1),!t.skipY&&(_>m||_<-m)&&d<Go(i,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(r.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(r,t.vars.onAutoKillParams||[]))),l?yr.scrollTo(t.skipX?h:t.x,t.skipY?d:t.y):(t.skipY||(i.scrollTop=t.y),t.skipX||(i.scrollLeft=t.x)),u&&(e===1||e===0)&&(d=i.scrollTop,h=i.scrollLeft,f?i.style.scrollSnapType=f:i.style.removeProperty("scroll-snap-type"),i.scrollTop=d+1,i.scrollLeft=h+1,i.scrollTop=d,i.scrollLeft=h),t.xPrev=t.x,t.yPrev=t.y,Uc&&Uc.update()},kill:function(e){var t=e==="scrollTo",n=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),n>-1&&this._props.splice(n,1),!this._props.length}};Ba.max=Go;Ba.getOffset=f_;Ba.buildGetter=Wo;Ba.config=function(s){ga||_h()||(ga=bn.config());for(var e in s)ga[e]=s[e]};l_()&&bn.registerPlugin(Ba);yt.registerPlugin(je,Ba);let Ot,Pt,Pi;const eo=document.querySelector(".three-canvas");let Nn=6,Fc=1,Ci={value:4};Ew();p_();async function Ew(){Ot=new $x,Ot.background=new $e(13431548),Pt=new In(65,eo.clientWidth/eo.clientHeight,.1,100),Pt.position.set(17,Nn,-8),Pt.lookAt(0,Nn-4,0),Pi=new C1({canvas:eo,antialias:!0}),Pi.setSize(eo.clientWidth,eo.clientHeight),Pi.setPixelRatio(window.devicePixelRatio),Ot.add(new Lv(16777215,.8));const s=new Vf(16777215,1);s.position.set(15,7,17.5),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),Ot.add(s);const e=new Vf(16777215,.5);e.position.set(25,7,27.5),e.castShadow=!0,e.shadow.mapSize.set(4096,4096);const t=e.shadow.camera;t.near=.5,t.far=200,t.left=-30,t.right=30,t.top=30,t.bottom=-30,t.updateProjectionMatrix(),Ot.add(e);const n=new Hf(Pi);new Sw().load("hdri/sunset.hdr",d=>{const _=n.fromEquirectangular(d).texture;Ot.environment=_,Ot.background=_,d.dispose(),n.dispose(),Ot.backgroundBlurriness=.05,Ot.backgroundIntensity=.2,Ot.environmentIntensity=.1});const i=GE(Ot),r=e_(Ot),a=WE(Ot),o=_w(Ot),c=yw(Ot);Ot.add(i.group),Ot.add(r.group),Ot.add(a.group),Ot.add(o.group),Ot.add(c.group);const{accessoryGroups:l,setAccessoryVariant:u}=await bw(Ot),f={value:12565940,roughness:.1,metalness:.1},h={value:12565940,roughness:.1,metalness:.1};Nw(Pt),XE("#accessory-menu",l,u,f,h)}function ww(){Pi.outputColorSpace=un,Pi.toneMapping=$m,Pi.toneMappingExposure=1,Pi.shadowMap.enabled=!0,Pi.shadowMap.type=Km,Pi.render(Ot,Pt)}function Aw(){const s=window.innerWidth,e=window.innerHeight;Pt.aspect=s/e,Pt.updateProjectionMatrix(),Pi.setSize(s,e)}yt.to(".canvas-wrapper",{ease:"linear",scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",pin:".canvas-wrapper"}});const h_=32,Rw=63,dd={first:3,hold:4,last:4.2},Cw=Pt.position.y,Pw=Cw+Rw,Al=yt.timeline({scrollTrigger:{trigger:".three-section",start:"top top",end:"bottom bottom",scrub:!0,onUpdate:()=>{Nn=Pt.position.y,Pt.lookAt(0,Nn-Ci.value,0),Lw()}}});Al.to(Pt.position,{y:h_,ease:"linear",duration:dd.first});Al.call(()=>{console.log("ENTERED HOLD")});Al.to(Pt.position,{y:h_,ease:"none",duration:dd.hold});Al.to(Pt.position,{y:Pw,ease:"linear",duration:dd.last});const $u=document.querySelector(".qr-wrapper"),qm=document.querySelector(".overlay-button-container"),d_=e_(Ot);document.querySelector(".overlay-button").addEventListener("click",d_.toggleOverlayOpacity);function Lw(){const s=Math.floor(Nn/13.3)+1;s!==Fc&&(console.log("new floor: ",s),s===2&&(yt.to(Pt,{fov:65,duration:1,ease:"power3.inOut",onUpdate(){Pt.updateProjectionMatrix()}}),yt.to(Ci,{value:4,duration:1,ease:"power3.inOut",onUpdate(){Pt.lookAt(0,Nn-Ci.value,0)}})),s===3&&($u.classList.add("visually-hidden"),yt.to(Pt,{fov:30,duration:1,ease:"power3.inOut",onUpdate(){Pt.updateProjectionMatrix()}}),yt.to(Ci,{value:2,duration:1,ease:"power3.inOut",onUpdate(){Pt.lookAt(0,Nn-Ci.value,0)}})),s===4&&($u.classList.remove("visually-hidden"),yt.to(Pt,{fov:30,duration:1,ease:"power3.inOut",onUpdate(){Pt.updateProjectionMatrix()}}),yt.to(Ci,{value:2,duration:1,ease:"power3.inOut",onUpdate(){Pt.lookAt(0,Nn-Ci.value,0)}})),s===5&&($u.classList.add("visually-hidden"),yt.to(Pt,{fov:65,duration:1,ease:"power3.inOut",onUpdate(){Pt.updateProjectionMatrix()}}),yt.to(Ci,{value:4,duration:1,ease:"power3.inOut",onUpdate(){Pt.lookAt(0,Nn-Ci.value,0)}})),(s===2||s===4)&&qm.classList.remove("visually-hidden"),(s===1||s===5)&&(qm.classList.add("visually-hidden"),d_.overlayOff()),(s===3||Fc===3)&&YE(),Fc=s,Iw(Fc))}const Dw=document.querySelectorAll(".nav-button");function Iw(s){Dw.forEach(t=>t.classList.remove("nav-active"));const e=document.querySelector(`.nav-button[data-floor="floor${s}"]`);e&&e.classList.add("nav-active")}function Nw(s,e){const t=[new G(0,Nn,20),new G(17,Nn,-8),new G(-17,Nn,-8)];let n=0,i=!1;function r(a){i=!0,yt.to(s.position,{x:a.x,y:Nn,z:a.z,duration:1.5,ease:"power2.inOut",onUpdate:()=>{s.lookAt(0,Nn-Ci.value,0)},onComplete:()=>i=!1})}s.position.copy(t[n]),s.lookAt(0,Nn-Ci.value,0),window.addEventListener("keydown",a=>{i||(a.key==="ArrowRight"?(n=(n+1)%t.length,r(t[n])):a.key==="ArrowLeft"&&(n=(n-1+t.length)%t.length,r(t[n])))}),document.querySelector(".horizontal-controls-right").addEventListener("click",()=>{n=(n+1)%t.length,r(t[n])}),document.querySelector(".horizontal-controls-left").addEventListener("click",()=>{n=(n-1+t.length)%t.length,r(t[n])})}window.addEventListener("resize",Aw);function p_(){requestAnimationFrame(p_),ww()}window.addEventListener("load",()=>{je.refresh(),Mw(Pt)});
