"use strict";(self.webpackChunkesteban_guerra_webApp=self.webpackChunkesteban_guerra_webApp||[]).push([[2076],{7461:(b,p,l)=>{l.d(p,{c:()=>i});var a=l(1705),v=l(3885),c=l(9732);const i=(s,n)=>{let o,t;const u=(g,f,w)=>{if(typeof document>"u")return;const _=document.elementFromPoint(g,f);_&&n(_)?_!==o&&(m(),h(_,w)):m()},h=(g,f)=>{o=g,t||(t=o);const w=o;(0,a.c)(()=>w.classList.add("ion-activated")),f()},m=(g=!1)=>{if(!o)return;const f=o;(0,a.c)(()=>f.classList.remove("ion-activated")),g&&t!==o&&o.click(),o=void 0};return(0,c.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:g=>u(g.currentX,g.currentY,v.a),onMove:g=>u(g.currentX,g.currentY,v.b),onEnd:()=>{m(!0),(0,v.h)(),t=void 0}})}},2815:(b,p,l)=>{l.d(p,{i:()=>a});const a=v=>v&&""!==v.dir?"rtl"===v.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},891:(b,p,l)=>{l.r(p),l.d(p,{startFocusVisible:()=>i});const a="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=s=>{let n=[],o=!0;const t=s?s.shadowRoot:document,u=s||document.body,h=y=>{n.forEach(r=>r.classList.remove(a)),y.forEach(r=>r.classList.add(a)),n=y},m=()=>{o=!1,h([])},g=y=>{o=c.includes(y.key),o||h([])},f=y=>{if(o&&void 0!==y.composedPath){const r=y.composedPath().filter(d=>!!d.classList&&d.classList.contains("ion-focusable"));h(r)}},w=()=>{t.activeElement===u&&h([])};return t.addEventListener("keydown",g),t.addEventListener("focusin",f),t.addEventListener("focusout",w),t.addEventListener("touchstart",m),t.addEventListener("mousedown",m),{destroy:()=>{t.removeEventListener("keydown",g),t.removeEventListener("focusin",f),t.removeEventListener("focusout",w),t.removeEventListener("touchstart",m),t.removeEventListener("mousedown",m)},setFocus:h}}},7411:(b,p,l)=>{l.d(p,{C:()=>s,a:()=>c,d:()=>i});var a=l(467),v=l(435);const c=function(){var n=(0,a.A)(function*(o,t,u,h,m,g){var f;if(o)return o.attachViewToDom(t,u,m,h);if(!(g||"string"==typeof u||u instanceof HTMLElement))throw new Error("framework delegate is missing");const w="string"==typeof u?null===(f=t.ownerDocument)||void 0===f?void 0:f.createElement(u):u;return h&&h.forEach(_=>w.classList.add(_)),m&&Object.assign(w,m),t.appendChild(w),yield new Promise(_=>(0,v.c)(w,_)),w});return function(t,u,h,m,g,f){return n.apply(this,arguments)}}(),i=(n,o)=>{if(o){if(n)return n.removeViewFromDom(o.parentElement,o);o.remove()}return Promise.resolve()},s=()=>{let n,o;return{attachViewToDom:function(){var h=(0,a.A)(function*(m,g,f={},w=[]){var _,y;if(n=m,g){const d="string"==typeof g?null===(_=n.ownerDocument)||void 0===_?void 0:_.createElement(g):g;w.forEach(e=>d.classList.add(e)),Object.assign(d,f),n.appendChild(d),yield new Promise(e=>(0,v.c)(d,e))}else if(n.children.length>0&&!n.children[0].classList.contains("ion-delegate-host")){const e=null===(y=n.ownerDocument)||void 0===y?void 0:y.createElement("div");e.classList.add("ion-delegate-host"),w.forEach(E=>e.classList.add(E)),e.append(...n.children),n.appendChild(e)}const r=document.querySelector("ion-app")||document.body;return o=document.createComment("ionic teleport"),n.parentNode.insertBefore(o,n),r.appendChild(n),n});return function(g,f){return h.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&o&&(o.parentNode.insertBefore(n,o),o.remove()),Promise.resolve())}}},3885:(b,p,l)=>{l.d(p,{a:()=>i,b:()=>s,c:()=>c,d:()=>o,h:()=>n});const a={getEngine(){var t;const u=window;return u.TapticEngine||(null===(t=u.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&u.Capacitor.Plugins.Haptics},available(){var t;const u=window;return!!this.getEngine()&&("web"!==(null===(t=u.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const u=this.getEngine();if(!u)return;const h=this.isCapacitor()?t.style.toUpperCase():t.style;u.impact({style:h})},notification(t){const u=this.getEngine();if(!u)return;const h=this.isCapacitor()?t.style.toUpperCase():t.style;u.notification({style:h})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},v=()=>a.available(),c=()=>{v()&&a.selection()},i=()=>{v()&&a.selectionStart()},s=()=>{v()&&a.selectionChanged()},n=()=>{v()&&a.selectionEnd()},o=t=>{v()&&a.impact(t)}},9768:(b,p,l)=>{l.d(p,{a:()=>a,b:()=>g,c:()=>o,d:()=>f,e:()=>x,f:()=>n,g:()=>w,h:()=>c,i:()=>v,j:()=>e,k:()=>E,l:()=>t,m:()=>h,n:()=>_,o:()=>u,p:()=>s,q:()=>i,r:()=>d,s:()=>D,t:()=>m,u:()=>y,v:()=>r});const a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",x="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},4782:(b,p,l)=>{l.d(p,{I:()=>s,a:()=>h,b:()=>n,c:()=>f,d:()=>_,f:()=>m,g:()=>u,i:()=>t,p:()=>w,r:()=>y,s:()=>g});var a=l(467),v=l(435),c=l(8078);const s="ion-content",n=".ion-content-scroll-host",o=`${s}, ${n}`,t=r=>"ION-CONTENT"===r.tagName,u=function(){var r=(0,a.A)(function*(d){return t(d)?(yield new Promise(e=>(0,v.c)(d,e)),d.getScrollElement()):d});return function(e){return r.apply(this,arguments)}}(),h=r=>r.querySelector(n)||r.querySelector(o),m=r=>r.closest(o),g=(r,d)=>t(r)?r.scrollToTop(d):Promise.resolve(r.scrollTo({top:0,left:0,behavior:d>0?"smooth":"auto"})),f=(r,d,e,E)=>t(r)?r.scrollByPoint(d,e,E):Promise.resolve(r.scrollBy({top:e,left:d,behavior:E>0?"smooth":"auto"})),w=r=>(0,c.a)(r,s),_=r=>{if(t(r)){const e=r.scrollY;return r.scrollY=!1,e}return r.style.setProperty("overflow","hidden"),!0},y=(r,d)=>{t(r)?r.scrollY=d:r.style.removeProperty("overflow")}},6290:(b,p,l)=>{l.r(p),l.d(p,{KEYBOARD_DID_CLOSE:()=>v,KEYBOARD_DID_OPEN:()=>a,copyVisualViewport:()=>d,keyboardDidClose:()=>w,keyboardDidOpen:()=>g,keyboardDidResize:()=>f,resetKeyboardAssist:()=>o,setKeyboardClose:()=>m,setKeyboardOpen:()=>h,startKeyboardAssist:()=>t,trackViewportChanges:()=>r});const a="ionKeyboardDidShow",v="ionKeyboardDidHide";let i={},s={},n=!1;const o=()=>{i={},s={},n=!1},t=e=>{u(e),e.visualViewport&&(s=d(e.visualViewport),e.visualViewport.onresize=()=>{r(e),g()||f(e)?h(e):w(e)&&m(e)})},u=e=>{e.addEventListener("keyboardDidShow",E=>h(e,E)),e.addEventListener("keyboardDidHide",()=>m(e))},h=(e,E)=>{_(e,E),n=!0},m=e=>{y(e),n=!1},g=()=>!n&&i.width===s.width&&(i.height-s.height)*s.scale>150,f=e=>n&&!w(e),w=e=>n&&s.height===e.innerHeight,_=(e,E)=>{const x=new CustomEvent(a,{detail:{keyboardHeight:E?E.keyboardHeight:e.innerHeight-s.height}});e.dispatchEvent(x)},y=e=>{const E=new CustomEvent(v);e.dispatchEvent(E)},r=e=>{i=Object.assign({},s),s=d(e.visualViewport)},d=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})},9323:(b,p,l)=>{l.d(p,{c:()=>v});var a=l(8745);const v=c=>{let i,s,n;const o=()=>{i=()=>{n=!0,c&&c(!0)},s=()=>{n=!1,c&&c(!1)},null==a.w||a.w.addEventListener("keyboardWillShow",i),null==a.w||a.w.addEventListener("keyboardWillHide",s)};return o(),{init:o,destroy:()=>{null==a.w||a.w.removeEventListener("keyboardWillShow",i),null==a.w||a.w.removeEventListener("keyboardWillHide",s),i=s=void 0},isKeyboardVisible:()=>n}}},214:(b,p,l)=>{l.d(p,{S:()=>v});const v={bubbles:{dur:1e3,circles:9,fn:(c,i,s)=>{const n=c*i/s-c+"ms",o=2*Math.PI*i/s;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(c,i,s)=>{const n=i/s,o=c*n-c+"ms",t=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,i)=>({r:6,style:{left:9-9*i+"px","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,i,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*i+(i<s/2?180:-180)}deg)`,"animation-delay":c*i/s-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,i,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*i+(i<s/2?180:-180)}deg)`,"animation-delay":c*i/s-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,i,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":c*i/s-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,i,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":c*i/s-c+"ms"}})}}},2884:(b,p,l)=>{l.r(p),l.d(p,{createSwipeBackGesture:()=>s});var a=l(435),v=l(2815),c=l(9732);l(5206);const s=(n,o,t,u,h)=>{const m=n.ownerDocument.defaultView;let g=(0,v.i)(n);const w=e=>g?-e.deltaX:e.deltaX;return(0,c.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>(g=(0,v.i)(n),(e=>{const{startX:D}=e;return g?D>=m.innerWidth-50:D<=50})(e)&&o()),onStart:t,onMove:e=>{const D=w(e)/m.innerWidth;u(D)},onEnd:e=>{const E=w(e),D=m.innerWidth,x=E/D,C=(e=>g?-e.velocityX:e.velocityX)(e),M=C>=0&&(C>.2||E>D/2),L=(M?1-x:x)*D;let O=0;if(L>5){const B=L/Math.abs(C);O=Math.min(B,540)}h(M,x<=0?.01:(0,a.l)(0,x,.9999),O)}})}}}]);