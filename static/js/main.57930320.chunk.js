(this["webpackJsonpsample-bucket"]=this["webpackJsonpsample-bucket"]||[]).push([[0],{29:function(e,t,c){},31:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),i=c(18),n=c.n(i),r=(c(29),c(3)),l=c(4),o=c(8),j=c(1),d=function(){return Object(j.jsxs)("div",{className:"shopping-cart-combo",children:[Object(j.jsx)(o.c,{alt:"shopping cart",className:"shopping-cart"}),Object(j.jsx)("p",{className:"items-in-cart",children:1})]})},m=c.p+"static/media/nav-logo.b79ccc78.png",b=(c(31),function(){var e=Object(l.h)().pathname;return Object(j.jsx)("header",{children:Object(j.jsxs)("nav",{className:"nav-menu ".concat("/"===e&&"--home"),children:[Object(j.jsx)(r.b,{to:"/",className:"nav-logo-link",children:Object(j.jsx)("img",{src:m,alt:"sample bucket logo",className:"nav-logo"})}),Object(j.jsx)(r.c,{to:"/home",activeClassName:"nav-active-link",className:"nav-link",children:"Home"}),Object(j.jsx)(r.c,{to:"/products",activeClassName:"nav-active-link",className:"nav-link",children:"Products"}),Object(j.jsx)(r.c,{to:"/login",activeClassName:"nav-active-link",className:"nav-link",children:"Login"}),Object(j.jsx)(r.c,{to:"/sign-up",activeClassName:"nav-active-link",className:"nav-link",children:"Sign-Up"}),Object(j.jsx)(r.c,{to:"/cart",className:"nav-link",children:Object(j.jsx)(d,{})})]})})}),u=c(5),O=c(9),h=(c(39),function(e){var t=e.id,c=e.name,s=e.description,a=e.category,i=e.price,n=e.img;return Object(j.jsxs)("div",{className:"item-card",children:[Object(j.jsx)("img",{src:n,alt:"".concat(c," ").concat(s),className:"item-card-img"}),Object(j.jsx)("p",{className:"item-card-category --".concat(a),children:a.toUpperCase()}),Object(j.jsx)("p",{className:"item-card-product-name",children:c}),Object(j.jsxs)("p",{className:"item-card-description",children:[Object(j.jsx)(o.b,{className:"item-card-icon"})," ",s]}),Object(j.jsxs)("p",{className:"item-card-price",children:[Object(j.jsx)(o.d,{className:"item-card-icon"})," $",i]}),Object(j.jsx)(r.b,{to:"/productDetails/".concat(t),className:"item-card-btn",children:"TRY PACK"})]})}),p=function(e){var t=e.products,c=void 0===t?[]:t;return Object(j.jsx)("div",{className:"item-card-container",children:c.map((function(e){return Object(s.createElement)(h,Object(O.a)(Object(O.a)({},e),{},{key:e.id}))}))})},x=[{id:1,name:"Product 1",description:"In minim aliqua sint consequat.",category:"RAP",price:16,img:"https://picsum.photos/seed/1/300/200/?blur=2"},{id:2,name:"Product 2",description:"In minim aliqua sint consequat.",category:"RAP",price:11,img:"https://picsum.photos/seed/5/300/200/?blur=2"},{id:3,name:"Product 3",description:"In minim aliqua sint consequat.",category:"RAP",price:50,img:"https://picsum.photos/seed/40/300/200/?blur=2"},{id:4,name:"Product 4",description:"In minim aliqua sint consequat.",category:"TRAP",price:10,img:"https://picsum.photos/seed/45/300/200/?blur=2"},{id:5,name:"Product 5",description:"In minim aliqua sint consequat.",category:"TRAP",price:38,img:"https://picsum.photos/seed/17/300/200/?blur=2"},{id:6,name:"Product 6",description:"In minim aliqua sint consequat.",category:"TRAP",price:36,img:"https://picsum.photos/seed/33/300/200/?blur=2"},{id:7,name:"Product 7",description:"In minim aliqua sint consequat.",category:"DRILL",price:47,img:"https://picsum.photos/seed/46/300/200/?blur=2"},{id:8,name:"Product 8",description:"In minim aliqua sint consequat.",category:"DRILL",price:24,img:"https://picsum.photos/seed/49/300/200/?blur=2"},{id:9,name:"Product 9",description:"In minim aliqua sint consequat.",category:"DRILL",price:11,img:"https://picsum.photos/seed/76/300/200/?blur=2"}],f=function(){return new Promise((function(e,t){setTimeout((function(){e(x)}),300)}))},N=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(!1),n=Object(u.a)(i,2),o=n[0],d=n[1],m=Object(l.i)().categoryId;return Object(s.useEffect)((function(){d(!0),f().then((function(e){a(m?e.filter((function(e){return e.category===m})):e)})).catch((function(e){return console.log(e)})).finally((function(){d(!1)}))}),[m]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("nav",{className:"nav-categories",children:[Object(j.jsx)("p",{children:"Filter by genre:"}),Object(j.jsx)(r.c,{exact:!0,to:"/products",activeClassName:"article-category-active",className:"article-category-link",children:"All"}),Object(j.jsx)(r.c,{to:"/products/RAP",activeClassName:"article-category-active",className:"article-category-link",children:"Rap"}),Object(j.jsx)(r.c,{to:"/products/TRAP",activeClassName:"article-category-active",className:"article-category-link",children:"Trap"}),Object(j.jsx)(r.c,{to:"/products/DRILL",activeClassName:"article-category-active",className:"article-category-link",children:"Drill"})]}),Object(j.jsx)("section",{className:"item-card-section",children:o?Object(j.jsx)("h2",{children:"Loading..."}):Object(j.jsx)(p,{products:c})})]})},g=function(e){var t=Object(s.useState)(),c=Object(u.a)(t,2),a=c[0],i=c[1],n=function(t){t.key===e&&i(!0)},r=function(t){t.key===e&&i(!1)};return Object(s.useEffect)((function(){return window.addEventListener("keydown",n),window.addEventListener("keyup",r),function(){window.removeEventListener("keydown",n),window.removeEventListener("keyup",r)}}),[]),a},v=c(10),y=c.p+"static/media/Kick.2b6e95b4.wav",k=c.p+"static/media/HhClosed.a4683fe7.wav",w=c.p+"static/media/Snare.f6293654.wav",I=c.p+"static/media/Clap.26f018a0.wav",P=c.p+"static/media/TomOne.3f0e3ffe.wav",L=c.p+"static/media/TomTwo.55984cb8.wav",C=(c(40),function(){var e=g("a"),t=g("s"),c=g("d"),s=g("f"),a=g("g"),i=g("h"),n=Object(v.a)(y,{interrupt:!0}),r=Object(u.a)(n,1)[0],l=Object(v.a)(k,{interrupt:!0}),o=Object(u.a)(l,1)[0],d=Object(v.a)(w,{interrupt:!0}),m=Object(u.a)(d,1)[0],b=Object(v.a)(I,{interrupt:!0}),O=Object(u.a)(b,1)[0],h=Object(v.a)(P,{interrupt:!0}),p=Object(u.a)(h,1)[0],x=Object(v.a)(L,{interrupt:!0}),f=Object(u.a)(x,1)[0],N=["pad",e&&"on-play"],C=["pad",t&&"on-play"],A=["pad",c&&"on-play"],S=["pad",s&&"on-play"],R=["pad",a&&"on-play"],T=["pad",i&&"on-play"];return Object(j.jsx)("div",{className:"sample-pads-grid-main",children:Object(j.jsxs)("div",{className:"sample-pads-grid-container",children:[Object(j.jsx)("p",{className:"pads-title",children:"Try this kit using your keyboard!"}),Object(j.jsxs)("div",{className:N.join(" "),children:[Object(j.jsx)("div",{className:"pad-text",children:"A"}),e&&r()]}),Object(j.jsxs)("div",{className:C.join(" "),children:[Object(j.jsx)("div",{className:"pad-text",children:"S"}),t&&o()]}),Object(j.jsxs)("div",{className:A.join(" "),children:[Object(j.jsx)("div",{className:"pad-text",children:"D"}),c&&m()]}),Object(j.jsxs)("div",{className:S.join(" "),children:[Object(j.jsx)("div",{className:"pad-text",children:"F"}),s&&O()]}),Object(j.jsxs)("div",{className:R.join(" "),children:[Object(j.jsx)("div",{className:"pad-text",children:"G"}),a&&p()]}),Object(j.jsxs)("div",{className:T.join(" "),children:[Object(j.jsx)("div",{className:"pad-text",children:"H"}),i&&f()]})]})})}),A=function(e){e.id;var t=e.name,c=e.description,s=e.category,a=e.price,i=e.img,n=Object(l.g)(),r=n.goBack;n.push;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"item-detail-conatiner",children:[Object(j.jsx)(o.a,{className:"go-back-icon",onClick:function(){return r()}}),Object(j.jsx)("div",{}),Object(j.jsxs)("div",{className:"item-card --detail",children:[Object(j.jsx)("img",{src:i,alt:"".concat(t," ").concat(c),className:"item-card-img"}),Object(j.jsx)("p",{className:"item-card-category --".concat(s),children:s}),Object(j.jsx)("p",{className:"item-card-product-name",children:t}),Object(j.jsxs)("p",{className:"item-card-description",children:[Object(j.jsx)(o.b,{className:"item-card-icon"})," ",c]}),Object(j.jsxs)("p",{className:"item-card-price",children:[Object(j.jsx)(o.d,{className:"item-card-icon"})," $",a]}),Object(j.jsx)("button",{className:"item-card-btn",children:"ADD TO CART"})]})]})})},S=(c(41),function(){var e=Object(s.useState)(null),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(!1),n=Object(u.a)(i,2),r=n[0],o=n[1],d=Object(l.i)().itemId;return Object(s.useEffect)((function(){o(!0),f().then((function(e){a(e.find((function(e){return e.id===Number(d)})))})).finally((function(){o(!1)}))}),[d]),Object(j.jsx)("div",{className:"item-details-main",children:Object(j.jsxs)("div",{className:"item-details-grid-container",children:[Object(j.jsx)("div",{children:r?Object(j.jsx)("h2",{children:"Loading..."}):Object(j.jsx)(A,Object(O.a)({},c))}),Object(j.jsx)(C,{})]})})}),R=c.p+"static/media/billboard.aacfcb40.svg",T=c.p+"static/media/complex.816f9b14.svg",q=c.p+"static/media/theverge.b0a8095e.svg",D=c.p+"static/media/variety.df13001f.svg",F=c.p+"static/media/wired.741029f5.svg",E=(c(42),function(){return Object(j.jsx)("section",{className:"features-main",children:Object(j.jsx)("div",{className:"features-container",children:Object(j.jsx)("div",{className:"features-feature ",children:Object(j.jsxs)("div",{className:"features-logo-flex",children:[Object(j.jsx)("h2",{className:"features-title",children:"FEATURED IN"}),Object(j.jsx)("img",{src:R,alt:"billboard logo",className:"features-img"}),Object(j.jsx)("img",{src:T,alt:"billboard logo",className:"features-img"}),Object(j.jsx)("img",{src:q,alt:"billboard logo",className:"features-img"}),Object(j.jsx)("img",{src:D,alt:"billboard logo",className:"features-img"}),Object(j.jsx)("img",{src:F,alt:"billboard logo",className:"features-img"})]})})})})}),B=c.p+"static/media/logo.076db435.png",M=(c(43),function(){return Object(j.jsx)("section",{className:"hero-main",children:Object(j.jsx)("div",{className:"hero-container",children:Object(j.jsxs)("div",{className:"hero-grid",children:[Object(j.jsxs)("div",{className:"hero-info-container",children:[Object(j.jsx)("h1",{className:"hero-info-main-text",children:"Professional, high quality samples. Made for modern producers."}),Object(j.jsx)("h2",{className:"hero-info-secondary-text",children:"The best choice for making the tedious process of picking your samples, easy. Simple, yet robust kits, made by industry leaders."}),Object(j.jsx)(r.b,{to:"/products",className:"hero-info-btn --cta",children:"Try Sample Packs"}),Object(j.jsx)("button",{className:"hero-info-btn --more-info",children:"Learn More \ud83d\udc47"})]}),Object(j.jsx)("img",{src:B,className:"hero-image"})]})})})}),H=c(17),U=c(21),K=c(22),$=(c(44),function(){return Object(j.jsx)("div",{className:"details-main",children:Object(j.jsxs)("div",{className:"details-grid-container",children:[Object(j.jsxs)("div",{className:"detail-item",children:[Object(j.jsx)("div",{className:"details-icon-circle",children:Object(j.jsx)(H.b,{className:"details-icon"})}),Object(j.jsx)("h2",{className:"details-title",children:"Multiple Formats"}),Object(j.jsx)("p",{className:"details-text",children:"Our samples come in many formats. Wav, Rex, Aiff, MIDI"})]}),Object(j.jsxs)("div",{className:"detail-item",children:[Object(j.jsx)("div",{className:"details-icon-circle",children:Object(j.jsx)(H.a,{className:"details-icon"})}),Object(j.jsx)("h2",{className:"details-title",children:"Highly Customizable"}),Object(j.jsx)("p",{className:"details-text",children:"Drag and drop audio or use MIDI with our Synth Presets for Massive and Serum"})]}),Object(j.jsxs)("div",{className:"detail-item",children:[Object(j.jsx)("div",{className:"details-icon-circle",children:Object(j.jsx)(U.a,{className:"details-icon"})}),Object(j.jsx)("h2",{className:"details-title",children:"Copyright Free"}),Object(j.jsx)("p",{className:"details-text",children:"You can use this sounds freely without worrying about Copyright claims"})]}),Object(j.jsxs)("div",{className:"detail-item",children:[Object(j.jsx)("div",{className:"details-icon-circle",children:Object(j.jsx)(K.a,{className:"details-icon"})}),Object(j.jsx)("h2",{className:"details-title",children:"High Quality"}),Object(j.jsx)("p",{className:"details-text",children:"24 bits, 96khz, lossless, carefully processed and mixed"})]})]})})}),z=(c(45),function(e){var t=e.img,c=e.name,s=e.content;return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"testimonials-flex",children:[Object(j.jsx)("img",{src:t,alt:c,className:"testimonials-img"}),Object(j.jsx)("p",{className:"testimonials-text",children:s}),Object(j.jsx)("p",{className:"testimonials-name",children:c})]})})}),J=c.p+"static/media/andrew-huang.42037ef8.png",W=c.p+"static/media/kshmr.5822318f.png",Y=c.p+"static/media/kesha-lee.e7263ee6.png",G=function(){return Object(j.jsx)("section",{className:"testimonials-main",children:Object(j.jsxs)("div",{className:"testimonials-grid",children:[Object(j.jsx)("h1",{className:"testimonials-title",children:"What creators are saying about Sample Bucket"}),Object(j.jsxs)("div",{className:"testimonials-flex-container",children:[Object(j.jsx)(z,{img:J,name:"Andrew Huang",content:"I can always find what I\u2019m looking for on Sample Bucket,\r whether it\u2019s the exact sound I want or just a bit of inspiration."}),Object(j.jsx)(z,{img:W,name:"Kshmr",content:"Finally a way to buy samples that works.\r By paying a little at a time, producers can get legit access to the top sounds."}),Object(j.jsx)(z,{img:Y,name:"Kesha Lee",content:"It\u2019s been fun to dive into Sample Bucket\u2019s creator community and explore tools\r that support my own creative process."})]})]})})},Q=(c(46),function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(M,{}),Object(j.jsx)($,{}),Object(j.jsx)(E,{}),Object(j.jsx)(G,{})]})}),V=c(12),X=c(23),Z=(c(47),function(){return Object(j.jsx)("footer",{className:"footer-main",children:Object(j.jsxs)("div",{className:"footer-grid-container",children:[Object(j.jsxs)("div",{className:"footer-first-column",children:[Object(j.jsx)("img",{src:m,alt:"sample bucket logo",className:"footer-logo"}),Object(j.jsxs)("div",{className:"footer-socials-flex",children:[Object(j.jsx)(V.a,{className:"footer-socials-logo"}),Object(j.jsx)(V.b,{className:"footer-socials-logo"}),Object(j.jsx)(V.c,{className:"footer-socials-logo"}),Object(j.jsx)(X.a,{className:"footer-socials-logo"})]}),Object(j.jsxs)("p",{className:"footer-text",translate:"no",children:["Copyright \xa9 2021 by ",Object(j.jsx)("span",{translate:"no",children:"Sample Bucket"}),",",Object(j.jsx)("br",{})," Inc. All rights reserved."]})]}),Object(j.jsxs)("div",{className:"footer-column",children:[Object(j.jsx)("p",{className:"footer-title",children:"Contact Us"}),Object(j.jsx)("p",{className:"footer-text",translate:"no",children:"1833 Olga Cosettinni, Buenos Aires"}),Object(j.jsx)("p",{className:"footer-text",children:"(851) 213-5090"}),Object(j.jsx)("p",{className:"footer-text",translate:"no",children:"support@samplebucket.com"})]}),Object(j.jsxs)("div",{className:"footer-column",children:[Object(j.jsx)("p",{className:"footer-title",children:"Account"}),Object(j.jsx)(r.b,{to:"/sign-up",className:"footer-link",children:"Create Account"}),Object(j.jsx)(r.b,{to:"/login",className:"footer-link",children:"Login"}),Object(j.jsx)(r.b,{to:"/cart",className:"footer-link",children:"Cart"})]}),Object(j.jsxs)("div",{className:"footer-column",children:[Object(j.jsx)("p",{className:"footer-title",children:"Company"}),Object(j.jsxs)(r.b,{to:"/-up",className:"footer-link",children:["About ",Object(j.jsx)("span",{translate:"no",children:"Sample Bucket"})]}),Object(j.jsx)(r.b,{to:"/",className:"footer-link",children:"Testimonials"}),Object(j.jsx)(r.b,{to:"/",className:"footer-link",children:"Featured In"})]}),Object(j.jsxs)("div",{className:"footer-column",children:[Object(j.jsx)("p",{className:"footer-title",children:"Our Products"}),Object(j.jsx)(r.b,{to:"/products/TRAP",className:"footer-link",children:"Trap Loops"}),Object(j.jsx)(r.b,{to:"/products/RAP",className:"footer-link",children:"Rap Loops"}),Object(j.jsx)(r.b,{to:"/products/DRILL",className:"footer-link",children:"Drill Loops"})]})]})})}),_=function(e){e.id;var t=e.name,c=e.description,s=(e.category,e.price),a=e.img;return Object(j.jsx)("div",{className:"item-cart-main",children:Object(j.jsxs)("div",{className:"item-cart-flex",children:[Object(j.jsx)("img",{src:a,alt:"".concat(t," ").concat(c),className:"item-card-img --cart"}),Object(j.jsx)("p",{className:"item-card-product-name",children:t}),Object(j.jsxs)("p",{className:"item-card-description",children:[Object(j.jsx)(o.b,{className:"item-card-icon"})," ",c]}),Object(j.jsxs)("p",{className:"item-card-price",children:[Object(j.jsx)(o.d,{className:"item-card-icon"})," $",s]}),Object(j.jsx)("button",{className:"btn-item-cart-delete",children:"Delete"})]})})},ee=(c(48),function(){var e=Object(s.useState)(null),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(!1),n=Object(u.a)(i,2),r=n[0],l=n[1];return Object(s.useEffect)((function(){l(!0),f().then((function(e){a(e.find((function(e){return e.id===Number(1)})))})).finally((function(){l(!1)}))}),[1]),Object(j.jsx)("div",{children:r?Object(j.jsx)("h2",{children:"Loading..."}):Object(j.jsx)(_,Object(O.a)({},c))})});c(49);var te=function(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(b,{}),Object(j.jsxs)(l.d,{children:[Object(j.jsxs)(l.b,{exact:!0,path:"/",children:[Object(j.jsx)(Q,{}),Object(j.jsx)(Z,{})]}),Object(j.jsxs)(l.b,{exact:!0,path:"/products",children:[Object(j.jsx)(N,{}),Object(j.jsx)(Z,{})]}),Object(j.jsxs)(l.b,{exact:!0,path:"/products/:categoryId",children:[Object(j.jsx)(N,{}),Object(j.jsx)(Z,{})]}),Object(j.jsxs)(l.b,{exact:!0,path:"/productDetails/:itemId",children:[Object(j.jsx)(S,{}),Object(j.jsx)(Z,{})]}),Object(j.jsxs)(l.b,{path:"/login",children:[Object(j.jsx)("h1",{children:"Login Page"}),Object(j.jsx)(Z,{})]}),Object(j.jsxs)(l.b,{path:"/sign-up",children:[Object(j.jsx)("h1",{children:"Sign-Up Page"}),Object(j.jsx)(Z,{})]}),Object(j.jsxs)(l.b,{path:"/cart",children:[Object(j.jsx)(ee,{}),Object(j.jsx)(Z,{})]}),Object(j.jsx)(l.b,{path:"*",children:Object(j.jsx)(l.a,{to:"/"})})]})]})},ce=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,52)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),i(e),n(e)}))};n.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(te,{})}),document.getElementById("root")),ce()}},[[50,1,2]]]);
//# sourceMappingURL=main.57930320.chunk.js.map