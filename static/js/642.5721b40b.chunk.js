"use strict";(self.webpackChunkkinopoisk=self.webpackChunkkinopoisk||[]).push([[642],{8642:(e,i,s)=>{s.r(i),s.d(i,{default:()=>E});var t=s(7689);const n="FilmPage_container__EMQNY",l="FilmPage_imgContainer__wQnw7",c="FilmPage_container_info__IOPhd";var r=s(2791),a=s(8609),o=s(1273),d=s(1313);const h="CategoriesMovie_container__kKwYY",v="CategoriesMovie_main__9HW+m",x="CategoriesMovie_categories__yALBk";var _=s(184);const m=e=>{let{title:i}=e;return(0,_.jsxs)("div",{className:h,children:[(0,_.jsx)(d.Z,{path:"/",text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",className:v}),"|",(0,_.jsx)(d.Z,{path:"/Categories",text:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",className:x}),"|",(0,_.jsx)("p",{children:i})]})};var j=s(991);const C="MovieContent_contentContainer__WyTgq",g="MovieContent_filmNamgeImg__rzv90",u="MovieContent_rating__Oofgz",f="MovieContent_characteristic__vHucQ",p="MovieContent_button__cVqN7",w=e=>{let{movieData:i}=e;const s=i.categories?Object.keys(i.categories).join(", "):"";return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:C,children:[i.titleImg?(0,_.jsx)("img",{className:g,src:i.titleImg,fetchpriority:"high",alt:"Film-Name"}):(0,_.jsx)("h2",{children:i.title}),(0,_.jsxs)("div",{className:u,children:[(0,_.jsx)("span",{children:""===i.rating?null:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",fill:"currentColor",class:"bi bi-star-fill",viewBox:"0 0 16 16",children:[" ",(0,_.jsx)("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})," "]}),i.rating]})}),i.year]}),(0,_.jsxs)("div",{className:f,children:[s," | ",i.time," | ",i.ageLimit]}),(0,_.jsx)("div",{children:i.desc}),(0,_.jsxs)(j.Z,{className:p,children:[(0,_.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)("path",{d:"M12.3845 22.9934C12.2569 22.9978 12.1287 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 15.7203 21.1531 19.0093 18.3262 21H22.5C23.0523 21 23.5 21.4477 23.5 22C23.5 22.5523 23.0523 23 22.5 23H12.5C12.4609 23 12.4224 22.9978 12.3845 22.9934ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7ZM12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19ZM7 10C8.10457 10 9 10.8954 9 12C9 13.1046 8.10457 14 7 14C5.89543 14 5 13.1046 5 12C5 10.8954 5.89543 10 7 10ZM19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14C18.1046 14 19 13.1046 19 12Z",fillRule:"evenodd",clipRule:"evenodd"})}),"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0442\u0440\u0435\u0439\u043b\u0435\u0440"]})]})})};var N=s(4420);const M="AddFavoriteFilm_container__W-Wol",F="AddFavoriteFilm_circle__Ui0na";var k=s(5655);const y=e=>{let{idFilm:i}=e;const s=(0,N.v9)((e=>e.currentUser.user)),t=(0,k.Z)(),[n,l]=(0,r.useState)(!1);(0,r.useEffect)((()=>{}),[n]),(0,r.useEffect)((()=>{const e=(0,a.iH)(o.F,"Users/"+s.uid+"/Favorite");(0,a.U2)(e).then((e=>{e.exists()&&(Object.keys(e.val()).includes(i)?l(!0):l(!1))}))}),[]);const c=t(1e3,(function(){const e=(0,a.iH)(o.F,"Users/"+s.uid+"/Favorite"),t=(0,a.iH)(o.F,"Users/"+s.uid);(0,a.U2)(e).then((s=>{if(s.exists())if(Object.keys(s.val()).includes(i))(0,a.Vx)(e,{[i]:null}),(0,a.U2)(t).then((e=>{Object.keys(e.val()).includes("Favorite")||(0,a.Vx)(t,{Favorite:""})})),l(!1);else{const s={};s[i]=!0,(0,a.Vx)(e,s),l(!0)}}))}));return(0,_.jsxs)("div",{onClick:()=>s?c():null,className:M,children:[(0,_.jsx)(j.Z,{className:F,children:(0,_.jsx)("svg",{style:{fill:n?"red":"white"},viewBox:"-5 -5 34 34",xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)("path",{d:"M6.11153 3.68257C6.47106 3.56911 6.69517 3.52352 7.3085 3.43899C7.55111 3.40557 8.42381 3.45755 8.75957 3.52546C9.80641 3.73714 10.8203 4.25353 11.6951 5.02058L11.9902 5.27936L12.3307 4.95668C13.1005 4.22719 14.1295 3.7099 15.1869 3.52085C15.7672 3.4171 16.6844 3.42565 17.2426 3.54001C19.4683 3.99596 21.1362 5.67089 21.6336 7.94946C21.7399 8.43632 21.7414 9.61118 21.6365 10.1706C21.2935 11.9989 20.388 13.7216 18.8317 15.5063C18.2985 16.1179 17.007 17.3662 16.3184 17.9358C15.5584 18.5643 14.595 19.2785 13.6958 19.8798C12.8433 20.4499 12.543 20.5714 11.9875 20.5714C11.4271 20.5714 11.1538 20.4576 10.1957 19.825C8.48553 18.6958 7.19942 17.6569 5.95919 16.4027C4.8283 15.259 4.18102 14.4306 3.50837 13.2659C1.73761 10.1999 1.90031 7.02194 3.93127 5.0075C4.56997 4.37398 5.27161 3.94761 6.11153 3.68257Z"})})}),(0,_.jsx)("div",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})]})},b="InfoMovie_container__88p4m",Z="InfoMovie_container_info__ezg+T",I="InfoMovie_container_categories__UcIAI",L="InfoMovie_link__Pw-TK",O=e=>{let{country:i,categories:s}=e;const t=Object.keys(s);return(0,_.jsxs)("div",{className:b,children:[(0,_.jsx)("h2",{children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),(0,_.jsxs)("div",{className:Z,children:[(0,_.jsx)("h3",{children:"\u0421\u0442\u0440\u0430\u043d\u0430"}),(0,_.jsx)("p",{children:i})]}),(0,_.jsxs)("div",{className:Z,children:[(0,_.jsx)("h3",{children:"\u0416\u0430\u043d\u0440\u044b"}),(0,_.jsx)("div",{className:I,children:t.map((e=>(0,_.jsx)(d.Z,{path:"/Categories/"+e,text:t.indexOf(e)===t.length-1?e:e+",",className:L},e)))})]})]})},U="PlotMovie_container__bCEir",H=e=>{let{children:i}=e;return(0,_.jsxs)("div",{className:U,children:[(0,_.jsx)("h2",{children:"\u0421\u044e\u0436\u0435\u0442"}),(0,_.jsx)("p",{children:i})]})},B="DescriptionMovie_container__T2C9a",D=e=>{let{movieData:i}=e;return(0,_.jsxs)("div",{className:B,children:[(0,_.jsx)(H,{children:null===i||void 0===i?void 0:i.plot}),(0,_.jsx)(O,{country:null===i||void 0===i?void 0:i.country,categories:null===i||void 0===i?void 0:i.categories})]})},P="Rating_container__Zc1vl",T="Rating_wrapper__il2xl",z=e=>{let{movieData:i}=e;return(0,_.jsxs)("div",{className:T,children:[(0,_.jsx)("h2",{children:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"}),(0,_.jsxs)("div",{className:P,children:[(0,_.jsxs)("h3",{children:[(0,_.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",fill:"currentColor",class:"bi bi-star-fill",viewBox:"0 0 16 16",children:[" ",(0,_.jsx)("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})," "]}),i]}),(0,_.jsx)("p",{children:"\u041e\u0446\u0435\u043d\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 Wink"})]})]})},E=()=>{const e=(0,t.UO)(),[i,s]=(0,r.useState)({}),[d,h]=(0,r.useState)(!0);return(0,r.useEffect)((()=>{const i=(0,a.iH)(o.F,"Movies/".concat(e.filmId));(0,a.jM)(i,(e=>{s(e.val()),h(!1)}),{onlyOnce:!0}),window.scrollTo(0,0)}),[e.filmId]),null===i?(0,_.jsx)(t.Fg,{to:"/",replace:!0}):(0,_.jsx)(_.Fragment,{children:d?null:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:n,children:[(0,_.jsx)("div",{className:l,children:(0,_.jsx)("img",{src:i.bigImg,fetchpriority:"high",alt:"Poster"})}),(0,_.jsx)(m,{title:null===i||void 0===i?void 0:i.title}),(0,_.jsx)(w,{movieData:i}),(0,_.jsx)(y,{idFilm:e.filmId})]}),(0,_.jsxs)("div",{className:c,children:[(0,_.jsx)(D,{movieData:i}),(0,_.jsx)(z,{movieData:i.rating})]})]})})}},991:(e,i,s)=>{s.d(i,{Z:()=>l});const t="MainButton_mainButton__fhjMX";var n=s(184);const l=e=>{let{children:i,className:s,...l}=e;return(0,n.jsxs)("button",{...l,className:t+" "+s,children:[" ",i," "]})}},5655:(e,i,s)=>{s.d(i,{Z:()=>t});const t=()=>function(e,i){var s,t,n=!1;return function l(){if(n)return s=arguments,void(t=this);n=!0,i.apply(this,arguments),setTimeout((()=>{s&&(l.apply(t,s),s=t=null),n=!1}),e)}}}}]);
//# sourceMappingURL=642.5721b40b.chunk.js.map