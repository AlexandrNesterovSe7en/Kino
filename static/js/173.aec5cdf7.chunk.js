"use strict";(self.webpackChunkkinopoisk=self.webpackChunkkinopoisk||[]).push([[173],{9173:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var i=n(7689),r=n(2777),s=n(2791),a=n(8609),o=n(1273);const c="CategoryPage_categoryPageWrapper__E5+BK",l="CategoryPage_categoryPageWrapperInset__YE8jz",d="CategoryPage_listMovies__K0E+W";var u=n(5655),m=n(5385),p=n(8290),h=n(184);const g=()=>{const e=(0,i.UO)(),t=e.category,[n,g]=(0,s.useState)([]),[f,v]=(0,s.useState)(r.VZ),[x,y]=(0,s.useState)(!0),b=(0,u.Z)(),j=b(100,(function(){y(!1);const e=(0,a.iH)(o.F,"/Movies"),n=(0,a.IO)(e,(0,a.g2)("categories/"+t),(0,a.EW)(!0),(0,a.Kk)(f));(0,a.jM)(n,(e=>{e.exists()&&(v((e=>e+r.VZ)),g(Object.entries(e.val())),y(!0))}),{onlyOnce:!0})})),_=function(){if(Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-200<=document.documentElement.scrollTop+document.documentElement.clientHeight&&x){if(n.length+r.VZ<f)return;j()}};return(0,s.useEffect)((()=>{j(),window.scrollTo(0,0)}),[]),(0,s.useEffect)((()=>(window.addEventListener("scroll",_),()=>{window.removeEventListener("scroll",_)})),[f,x]),(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:c,children:(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)("h2",{children:e.category}),(0,h.jsxs)("div",{className:d,children:[n.map((e=>{let[t,n]=e;return(0,h.jsx)(m.Z,{uid:t,img:null===n||void 0===n?void 0:n.img,title:null===n||void 0===n?void 0:n.title,inSub:null===n||void 0===n?void 0:n.inSub,rating:null===n||void 0===n?void 0:n.rating},t)})),x?null:function(){const e=[];for(let t=0;t<r.VZ;t++)e.push((0,h.jsx)(p.y,{baseColor:"#202020",highlightColor:"#444",children:(0,h.jsxs)("div",{children:[(0,h.jsx)(p.Z,{count:1,width:"158px",height:"228px",borderRadius:"10px"}),(0,h.jsxs)("div",{style:{marginTop:"10px"},children:[(0,h.jsx)(p.Z,{count:1,width:"158px",height:"20px",borderRadius:"10px"}),(0,h.jsx)("div",{style:{marginTop:"3px"},children:(0,h.jsx)(p.Z,{count:1,width:"108px",height:"17px",borderRadius:"10px"})})]})]})},t));return e}()]})]})})})}},5385:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(1087);const r={cardWrapper:"Card_cardWrapper__RrRk2",cardAnim:"Card_cardAnim__M+5lz",cardDescWrapper:"Card_cardDescWrapper__Nm3Gv",img:"Card_img__uYqII",imgWrapper:"Card_imgWrapper__IUoum",inSubscribe:"Card_inSubscribe__LEttH"};var s=n(184);const a=e=>{let{img:t,title:n,inSub:a,rating:o,uid:c}=e;return(0,s.jsxs)("div",{className:r.cardWrapper,children:[(0,s.jsxs)("div",{className:r.imgWrapper,children:[o?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("span",{children:["\u2605 ",1===o.toString().length?o+".0":o]})}):(0,s.jsx)(s.Fragment,{}),(0,s.jsx)(i.rU,{to:"/FilmPage/".concat(c),children:(0,s.jsx)("img",{src:t,alt:"card-img",className:r.img})})]}),(0,s.jsxs)("div",{className:r.cardDescWrapper,children:[(0,s.jsxs)("div",{className:r.titleWrapper,children:[(0,s.jsx)("div",{className:r.titleShadow}),(0,s.jsx)("h4",{children:n})]}),(0,s.jsx)("p",{className:r.inSubscribe,children:a?"\u0412 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0435":"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e"})]})]})}},2777:(e,t,n)=>{n.d(t,{VZ:()=>i});const i=18},5655:(e,t,n)=>{n.d(t,{Z:()=>i});const i=()=>function(e,t){var n,i,r=!1;return function s(){if(r)return n=arguments,void(i=this);r=!0,t.apply(this,arguments),setTimeout((()=>{n&&(s.apply(i,n),n=i=null),r=!1}),e)}}},8290:(e,t,n)=>{n.d(t,{Z:()=>o,y:()=>c});var i=n(2791);const r=i.createContext({}),s=!0;function a(e){let{baseColor:t,highlightColor:n,width:i,height:r,borderRadius:a,circle:o,direction:c,duration:l,enableAnimation:d=s}=e;const u={};return"rtl"===c&&(u["--animation-direction"]="reverse"),"number"===typeof l&&(u["--animation-duration"]="".concat(l,"s")),d||(u["--pseudo-element-display"]="none"),"string"!==typeof i&&"number"!==typeof i||(u.width=i),"string"!==typeof r&&"number"!==typeof r||(u.height=r),"string"!==typeof a&&"number"!==typeof a||(u.borderRadius=a),o&&(u.borderRadius="50%"),"undefined"!==typeof t&&(u["--base-color"]=t),"undefined"!==typeof n&&(u["--highlight-color"]=n),u}function o(e){let{count:t=1,wrapper:n,className:o,containerClassName:c,containerTestId:l,circle:d=!1,style:u,...m}=e;var p,h,g;const f=i.useContext(r),v={...m};for(const[i,r]of Object.entries(m))"undefined"===typeof r&&delete v[i];const x={...f,...v,circle:d},y={...u,...a(x)};let b="react-loading-skeleton";o&&(b+=" ".concat(o));const j=null!==(p=x.inline)&&void 0!==p&&p,_=[],E=Math.ceil(t);for(let r=0;r<E;r++){let e=y;if(E>t&&r===E-1){const n=null!==(h=e.width)&&void 0!==h?h:"100%",i=t%1,r="number"===typeof n?n*i:"calc(".concat(n," * ").concat(i,")");e={...e,width:r}}const n=i.createElement("span",{className:b,style:e,key:r},"\u200c");j?_.push(n):_.push(i.createElement(i.Fragment,{key:r},n,i.createElement("br",null)))}return i.createElement("span",{className:c,"data-testid":l,"aria-live":"polite","aria-busy":null!==(g=x.enableAnimation)&&void 0!==g?g:s},n?_.map(((e,t)=>i.createElement(n,{key:t},e))):_)}function c(e){let{children:t,...n}=e;return i.createElement(r.Provider,{value:n},t)}}}]);
//# sourceMappingURL=173.aec5cdf7.chunk.js.map