(window.webpackJsonp=window.webpackJsonp||[]).push([[1,17],{"/C3p":function(e,t,a){"use strict";a.r(t);var A=a("q1tI"),n=a.n(A),r=(a("Wbzz"),a("Bl7J")),o=(a("aTTt"),a("q4sD"),a("q9vo"),a("lD8L"),a("OcqW"),a("beFU"),a("tiIK"));a("YjHR");var c=function(e){var t,a;function A(t){var a;return(a=e.call(this,t)||this).state={count:1},a.handleClick=a.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=A).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=A.prototype;return c.handleClick=function(e){e.preventDefault();localStorage.setItem("item","neldo"),this.setState({count:this.state.count+1}),document.getElementById("shows").classList.add("nostyle")},c.render=function(){return n.a.createElement(r.a,{location:this.props.location},n.a.createElement("span",{style:0!==this.state.count?{display:"block"}:{display:"none"}},n.a.createElement(o.a,null)))},A}(n.a.Component);t.default=c},"/N1j":function(e,t){e.exports="data:image/png;base64,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czp4PSdhZG9iZTpuczptZXRhLycgeDp4bXB0az0nSW1hZ2U6OkV4aWZUb29sIDEwLjgwJz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+TnllcmEgRWxkb21pYXR5PC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+ei8nXwAAAABJRU5ErkJggg=="},Bl7J:function(e,t,a){"use strict";var A=a("q1tI"),n=a.n(A),r=(a("i8i4"),a("Dm0Y"),function(e){var t=e.children;return n.a.createElement("div",{style:{maxWidth:2800,margin:"0 auto"}},t)}),o=a("Wbzz"),c=a("T78C"),i=a.n(c),s=a("hBfX"),l=a.n(s),u=a("/N1j"),m=a.n(u),d=a("Fq9W"),p=a("XjSt"),b=function(){var e=Object(A.useContext)(d.a),t=e.redCounter,a=e.cartCount,r=e.noItems,o=Object(A.useContext)(p.a).products,c=a?t:r;return n.a.createElement("span",{id:"cartcount",style:{backgroundColor:c.backgroundColor,color:c.color,borderRadius:c.borderRadius,fontSize:c.fontSize,padding:c.padding,height:c.height,marginTop:c.marginTop,paddingBottom:c.paddingBottom,marginRight:c.marginRight,paddingTop:c.paddingTop,content:"undefined"!=typeof window&&0!==o.length?""+o.length:""}})},h=function(){var e=Object(A.useContext)(d.a),t=(e.redCounter,e.noItems,e.cartCount,Object(A.useContext)(p.a).products);return n.a.createElement("nav",{className:i.a.mainnav,role:"navigation"},n.a.createElement("ul",{className:i.a.navigation},n.a.createElement("li",{className:i.a.navigationItem},n.a.createElement(o.a,{to:"/"},n.a.createElement("img",{alt:"logo",className:"logo",height:"100%",width:"100%",src:l.a}))),n.a.createElement("li",{className:i.a.navigationItem},n.a.createElement(o.a,{to:"/shop/"},"Shop")),n.a.createElement("li",{className:i.a.navigationItem},n.a.createElement(o.a,{to:"/ourwork/"},"Our Work")),n.a.createElement("li",{className:i.a.navigationItem},n.a.createElement(o.a,{to:"/blog/"},"Blog")),n.a.createElement("li",{className:i.a.navigationItem},n.a.createElement(o.a,{to:"/checkout/"},n.a.createElement("div",{className:i.a.cartItems},n.a.createElement(b,null),"undefined"!=typeof window?t.length:"",n.a.createElement("img",{alt:"cart",className:i.a.cartimg,height:"100%",width:"64px",src:m.a}))))))};a("q4sD"),a("tiIK"),a("UxAK");var g=function(e){var t,a;function A(){return e.apply(this,arguments)||this}a=e,(t=A).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=A.prototype;return o.componentDidMount=function(){var e=document.createElement("script");e.src="https://checkout.stripe.com/checkout.js",e.async=!0,e.dataKey="{{stripePublishableKey}}",e.dataAmount="250000",e.dataName="nyoandnuraco",e.dataDescription="Neldo package",e.dataImage="./nyoandnuralogo.png",e.dataLocale="auto",document.body.appendChild(e)},o.render=function(){var e=this.props.children;return n.a.createElement(p.b,{id:"template"},n.a.createElement(d.b,null,n.a.createElement(r,null,n.a.createElement(h,null),e)))},A}(n.a.Component);t.a=g},Dm0Y:function(e,t,a){},Fq9W:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("91GP");var A=a("q1tI"),n=a.n(A);var r=Object(A.createContext)(),o=function(e){var t,a;function A(){for(var t,a=arguments.length,A=new Array(a),n=0;n<a;n++)A[n]=arguments[n];return(t=e.call.apply(e,[this].concat(A))||this).state={cartCount:1,redCounter:{color:"white",backgroundColor:"red",borderRadius:"50%",fontSize:"12px",position:"absolute",padding:"16px",paddingTop:"10px",marginTop:"0px",marginLeft:"82vw",height:"15px",textAlign:"center",paddingBottom:"25px",marginRight:"-20px"},neldolight:{price:699,quantity:1},neldo:{price:2999,quantity:1},neldochamp:{price:4999,quantity:1},noItems:{display:"none",visibility:"hidden"}},t.addToCart=function(){t.setState({cartCount:t.state.cartCount+1})},t}return a=e,(t=A).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,A.prototype.render=function(){return n.a.createElement(r.Provider,{value:Object.assign({},this.state,{addToCart:this.addToCart})},this.props.children)},A}(A.Component);t.b=o},OcqW:function(e,t,a){"use strict";var A=a("q1tI"),n=a.n(A),r=a("aTTt"),o=a.n(r),c=a("TsFS"),i=a.n(c),s=a("P8oz"),l=a.n(s),u=a("o88o"),m=a.n(u),d=a("cOSo"),p=a.n(d),b=a("TWCO"),h=a.n(b);function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v=function(e){var t,a;function A(t){var a;return(a=e.call(this,t)||this).state={expandImage:!1,prodSum:"",breadcrumb:"5"},a.expandImage=a.expandImage.bind(g(a)),a.collapsePopup=a.collapsePopup.bind(g(a)),a.selectImage=a.selectImage.bind(g(a)),a}a=e,(t=A).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=A.prototype;return r.expandImage=function(e){e.preventDefault(),this.setState({expandImage:!0})},r.collapsePopup=function(e){e.preventDefault(),this.setState({expandImage:!1})},r.selectImage=function(e){e.preventDefault(),this.setState({breadcrumb:e.target.value})},r.render=function(){var e=this,t={backgroundColor:"#0146c9"},a={backgroundColor:"#bbb"};return n.a.createElement("div",{className:o.a.col},n.a.createElement("button",{onClick:function(t){return e.expandImage(t)},className:"5"==this.state.breadcrumb?o.a.designImage:"6"==this.state.breadcrumb?o.a.imgbox:"7"==this.state.breadcrumb?o.a.notebookImage:"8"==this.state.breadcrumb?o.a.webImage:"9"==this.state.breadcrumb?o.a.artImage:""},n.a.createElement("img",{className:o.a.popupimg,src:"5"==this.state.breadcrumb?l.a:"6"==this.state.breadcrumb?i.a:"7"==this.state.breadcrumb?m.a:"8"==this.state.breadcrumb?p.a:"9"==this.state.breadcrumb?h.a:"",width:"100%",height:"100%"})),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{style:1==this.state.expandImage?{color:"black",backgroundColor:"white",padding:"25px",width:"90vw",height:"65vh",position:"absolute",border:"2px solid #d8d8d8",borderRadius:"5px"}:{display:"none"},id:o.a.popup},n.a.createElement("button",{onClick:function(t){return e.collapsePopup(t)},className:o.a.exit},"X"),n.a.createElement("img",{className:o.a.popupimg,src:"5"==this.state.breadcrumb?l.a:"6"==this.state.breadcrumb?i.a:"7"==this.state.breadcrumb?m.a:"8"==this.state.breadcrumb?p.a:"9"==this.state.breadcrumb?h.a:"",width:"100%",height:"100%"})),n.a.createElement("div",{className:o.a.rowspan},n.a.createElement("button",{value:"5",onClick:function(t){return e.selectImage(t)},className:o.a.breadcrumb,style:"5"==this.state.breadcrumb?t:a}),n.a.createElement("button",{value:"6",onClick:function(t){return e.selectImage(t)},className:o.a.breadcrumb,style:"6"===this.state.breadcrumb?t:a}),n.a.createElement("button",{value:"7",onClick:function(t){return e.selectImage(t)},className:o.a.breadcrumb,style:"7"===this.state.breadcrumb?t:a}),n.a.createElement("button",{value:"8",onClick:function(t){return e.selectImage(t)},className:o.a.breadcrumb,style:"8"===this.state.breadcrumb?t:a}),n.a.createElement("button",{value:"9",onClick:function(t){return e.selectImage(t)},className:o.a.breadcrumb,style:"9"===this.state.breadcrumb?t:a})))},A}(n.a.Component);t.a=v},P8oz:function(e,t,a){e.exports=a.p+"static/black-pencils-and-design-word-fa3fcd547957f8218262acb10f86a203.jpg"},T78C:function(e,t,a){e.exports={navigation:"navigation-module--navigation--_yI7y",navigationItem:"navigation-module--navigationItem--1plNx",cartimg:"navigation-module--cartimg--lTI4X",mainnav:"navigation-module--mainnav--1C4zk",cartItems:"navigation-module--cartItems--2OaX9",logo:"navigation-module--logo--3h7OP"}},TWCO:function(e,t,a){e.exports=a.p+"static/abstract-art-cobweb-connection-0efcdf6bad7e92293347ec559a7c222a.jpg"},TsFS:function(e,t,a){e.exports=a.p+"static/geometric-decoration-d5a5656e24c88a322c4ce1868e4a5cd1.jpg"},UxAK:function(e,t,a){"use strict";a.r(t);var A=a("q1tI"),n=a.n(A),r=a("/C3p");var o=function(e){var t,a;function A(){return e.apply(this,arguments)||this}return a=e,(t=A).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,A.prototype.render=function(){return n.a.createElement("div",null,n.a.createElement(r.default,null))},A}(n.a.Component);t.default=o},Wbzz:function(e,t,a){"use strict";a("xfY5");var A=a("q1tI"),n=a.n(A),r=a("+ZDr"),o=a.n(r);a.d(t,"a",(function(){return o.a}));a("lw3w"),a("emEt").default.enqueue,n.a.createContext({})},YjHR:function(e,t,a){"use strict";var A=a("q1tI"),n=a.n(A),r=a("XjSt"),o=a("dBd+"),c=a.n(o),i=a("hBfX"),s=a.n(i);t.a=function(e){var t=e.product,a=Object(A.useContext)(r.a).dispatch;return n.a.createElement("li",{className:c.a.cartitem},n.a.createElement("div",{className:c.a.cc},n.a.createElement("h6",{className:c.a.cartitemdesc},t.package),n.a.createElement("img",{alt:"logo",className:c.a.cartitemimg,src:s.a})),n.a.createElement("div",{className:c.a.cc},n.a.createElement("p",{className:c.a.cartitemqty},n.a.createElement("span",null,n.a.createElement("strong",null,"Quantity: ")),n.a.createElement("select",{className:c.a.cartitemselect},n.a.createElement("option",null," 1"))),n.a.createElement("p",{className:c.a.pricelabel},n.a.createElement("span",null,n.a.createElement("i",null," ",n.a.createElement("div",{className:"price"},n.a.createElement("strong",null,"Price: "),"$",t.price))))),n.a.createElement("button",{onClick:function(){return a({type:"REMOVE_PRODUCT",id:t.id})},className:c.a.removecta},"Remove Item"),"  ",n.a.createElement("hr",{className:c.a.hr}))}},aTTt:function(e,t,a){e.exports={smimgbox:"shop-module--smimgbox--3recK",plcontainer:"shop-module--plcontainer--1C59W",row:"shop-module--row--jW-Hj",column:"shop-module--column--2auAc",detailheader:"shop-module--detailheader--1eJLt",rowborder:"shop-module--rowborder--TKZYO",exit:"shop-module--exit--D9F83",popopen:"shop-module--popopen--1eaZB",popupimg:"shop-module--popupimg--35orY",imgbox:"shop-module--imgbox--3Knk7",ctabtn:"shop-module--ctabtn--2CvCr",maincta:"shop-module--maincta--1d8-t",active:"shop-module--active--1Dt0r",inactive:"shop-module--inactive--qLWZC",subnav:"shop-module--subnav--3-zns",hero:"shop-module--hero--1_uow",landingheader:"shop-module--landingheader--2-KLU",detailssubheader:"shop-module--detailssubheader--3RUcL",cartcount:"shop-module--cartcount--r_lWX",productimg:"shop-module--productimg--1NA0w",subheading:"shop-module--subheading--OiZSa",productitemdesc:"shop-module--productitemdesc--1pm4Y",productitemprice:"shop-module--productitemprice--1xJMl",plitem:"shop-module--plitem--RPoVM",navigationModuleCartimgLTI4X:"shop-module--navigation-module--cartimg--lTI4X--3soCL",cartimg:"shop-module--cartimg--2v0jH",col:"shop-module--col--2hAVF",breadcrumb:"shop-module--breadcrumb--3W3vG",productsum:"shop-module--productsum--2hGc_",container:"shop-module--container--3GB1i",designImage:"shop-module--designImage--2_OWx",webImage:"shop-module--webImage--1TgpD",notebookImage:"shop-module--notebookImage--1Y_4f",artImage:"shop-module--artImage--2IiEV",mobile:"shop-module--mobile--2yJCA",expandImage:"shop-module--expandImage--ekQwg"}},beFU:function(e,t,a){"use strict";a.r(t);a("f3/d"),a("a1Th"),a("Btvt"),a("XfO3"),a("HEwt"),a("rGqo"),a("rE2o"),a("ioFf");var A=a("q1tI"),n=a.n(A),r=a("xDdU"),o=a.n(r),c=a("ZiR7");function i(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,A=new Array(t);a<t;a++)A[a]=e[a];return A}t.default=function(){var e=Object(A.useState)([{package:"neldo",price:699,id:1}]),t=e[0],a=e[1];return Object(A.useEffect)((function(){console.log("useeffect hook run",t)})),n.a.createElement("div",null,n.a.createElement("ul",{style:{display:"none"}},t.map((function(e){return n.a.createElement("li",{key:e.id},e.package)}))),n.a.createElement(c.default,{addProduct:function(e){a([].concat(i(t),[{package:e,id:o()()}]))}}))}},cOSo:function(e,t,a){e.exports=a.p+"static/web-af4683fb9da141e8556aa671ac1d3f25.jpg"},"dBd+":function(e,t,a){e.exports={cartlist:"slidenav-module--cartlist--3IL6e",checkout:"slidenav-module--checkout--3yXfy",step:"slidenav-module--step--1Bfx_",active:"slidenav-module--active--3uQ5e",progressbar:"slidenav-module--progressbar--3BsQ5",header:"slidenav-module--header--2c8nO",secondarycta:"slidenav-module--secondarycta--3znsR",cartitemimg:"slidenav-module--cartitemimg--3MyXN",cartitemdesc:"slidenav-module--cartitemdesc--2Av0n",cartitem:"slidenav-module--cartitem--9tiQ1",cartitemqty:"slidenav-module--cartitemqty--2JnoY",cartitemselect:"slidenav-module--cartitemselect--89MmI",pricelabel:"slidenav-module--pricelabel--woFmL",removecta:"slidenav-module--removecta--1LJs5",sidebyside:"slidenav-module--sidebyside--3_nYO",headercart:"slidenav-module--headercart--3Z95m",itemnumber:"slidenav-module--itemnumber--1IJ9U",cc:"slidenav-module--cc--2RG2e",hr:"slidenav-module--hr--2NdkW",total:"slidenav-module--total--6aG-3",container:"slidenav-module--container--2ZHAp",show:"slidenav-module--show--2Txv1"}},hBfX:function(e,t,a){e.exports=a.p+"static/nyoandnuralogo-1fe2462a31a1c98fa9cdce1782ec1cb8.png"},lD8L:function(e,t,a){"use strict";a("KKXr");var A=a("q1tI"),n=a.n(A),r=(a("OcqW"),a("TsFS")),o=a.n(r),c=a("P8oz"),i=a.n(c),s=a("cOSo"),l=a.n(s),u=a("hBfX"),m=a.n(u),d=a("o88o"),p=a.n(d),b=a("aTTt"),h=a.n(b);var g=function(e){var t,a;function A(t){var a;return(a=e.call(this,t)||this).state={breadcrumb:"5"},a.selectImage=a.selectImage.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=A).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=A.prototype;return r.selectImage=function(e){e.preventDefault(),console.log(e.target.value),this.setState({breadcrumb:e.target.value})},r.render=function(){var e=this,t={border:"2px solid #0146c9",width:"45px",height:"auto",marginLeft:"2px",padding:"0px"},a={border:"2px solid #d8d8d8",width:"45px",height:"45px",marginLeft:"2px",backgroundColor:"#d8d8d8"};return n.a.createElement("div",null,n.a.createElement("div",{className:h.a.row},n.a.createElement("div",{className:h.a.column},n.a.createElement("button",{value:"5",onClick:function(t){return e.selectImage(t)},className:h.a.smimgbox,style:"5"==this.state.breadcrumb?t:a},"5"==this.state.breadcrumb?n.a.createElement("img",{src:i.a}):""),n.a.createElement("button",{value:"6",onClick:function(t){return e.selectImage(t)},className:h.a.smimgbox,style:"6"==this.state.breadcrumb?t:a},"6"==this.state.breadcrumb?n.a.createElement("img",{src:o.a}):""),n.a.createElement("button",{value:"7",onClick:function(t){return e.selectImage(t)},className:h.a.smimgbox,style:"7"==this.state.breadcrumb?t:a},"7"==this.state.breadcrumb?n.a.createElement("img",{src:l.a}):""),n.a.createElement("button",{value:"8",onClick:function(t){return e.selectImage(t)},className:h.a.smimgbox,style:"8"==this.state.breadcrumb?t:a},"8"==this.state.breadcrumb?n.a.createElement("img",{src:p.a}):""),n.a.createElement("button",{value:"9",onClick:function(t){return e.selectImage(t)},className:h.a.smimgbox,style:"9"===this.state.breadcrumb?t:a},"9"==this.state.breadcrumb?n.a.createElement("img",{src:m.a}):"")),n.a.createElement("img",{className:h.a.popupimg,src:"5"===this.state.breadcrumb?i.a:"6"===this.state.breadcrumb?o.a:"7"===this.state.breadcrumb?p.a:"8"===this.state.breadcrumb?l.a:"9"==this.state.breadcrumb?m.a:"",width:"100%",height:"100%"})),n.a.createElement("p",{className:{width:"100%"}},"undefined"!=typeof window?"neldolight"===window.location.href.split("/")[4]?"Stand out from competition let us design everything and map out user interactions to optimize user experience. For see potential problems, get customers through the checkout process and keep them happy. Custom built Brand Style Guide for your company, and Mockup.":"neldo"===window.location.href.split("/")[4]?"Stand out from competition let us design everything and map out user interactions to optimize user experience. For see potential problems, get customers through the checkout process and keep them happy. Custom built Brand Style Guide for your company, Mockup, and complete website development":"Must have top notch maintainable custom made websites to fit your needs. Stand out from competition let us design everything and map out user interactions to optimize user experience. For see potential problems, get customers through the checkout process and keep them happy. Custom built Brand Style Guide for your company, Mockup, complete website development, and CMS added for future maintainability.":""))},A}(n.a.Component);t.a=g},lw3w:function(e,t,a){var A;e.exports=(A=a("rzlk"))&&A.default||A},o88o:function(e,t,a){e.exports=a.p+"static/notebook-beside-the-iphone-on-table-20d40ea8583d6a16be68425baa15d053.jpg"},q4sD:function(e,t,a){},q9vo:function(e,t,a){"use strict";a("KKXr");var A=a("q1tI"),n=a.n(A),r=a("Wbzz"),o=a("aTTt"),c=a.n(o);t.a=function(){return n.a.createElement("nav",{className:c.a.subnav},n.a.createElement("div",{className:c.a.container},n.a.createElement(r.a,{id:"undefined"!=typeof window?"neldolight"===window.location.href.split("/")[4]?c.a.active:c.a.inactive:"",className:c.a.item+" navbar-brand",to:"/shop/neldolight"},"Neldo Light",n.a.createElement("span",{className:c.a.border})),n.a.createElement(r.a,{id:"undefined"!=typeof window?"neldo"===window.location.href.split("/")[4]?c.a.active:c.a.inactive:"",className:c.a.item+" navbar-brand",to:"/shop/neldo"},"Neldo",n.a.createElement("span",{className:c.a.border})),n.a.createElement(r.a,{id:"undefined"!=typeof window?"neldochamp"===window.location.href.split("/")[4]?c.a.active:c.a.inactive:"",className:c.a.item+" navbar-brand",to:"/shop/neldochamp"},"Neldo Champ",n.a.createElement("span",{className:c.a.border}))))}},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var A=a("q1tI"),n=a.n(A),r=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},tiIK:function(e,t,a){"use strict";var A=a("q1tI"),n=a.n(A),r=a("dBd+"),o=a.n(r),c=a("XjSt"),i=a("YjHR"),s=a("Wbzz");t.a=function(){var e=Object(A.useContext)(c.a).products,t=0;return"undefined"!=typeof window?e.length?n.a.createElement("div",{id:o.a.show,className:"container"},n.a.createElement("h1",{className:o.a.header},"Checkout"),n.a.createElement("div",{className:o.a.checkout},n.a.createElement("span",{id:o.a.active,className:o.a.step},"1"),n.a.createElement("div",{className:o.a.progressbar}),n.a.createElement("span",{className:o.a.step},"2"),n.a.createElement("div",{className:o.a.progressbar}),n.a.createElement("span",{className:o.a.step},"3")),n.a.createElement("div",{className:o.a.sidebyside},n.a.createElement("h2",{className:o.a.headercart},"Your Cart"),n.a.createElement("h4",{className:o.a.itemnumber}," ","undefined"!=typeof window?e.length:""," Items")),n.a.createElement("hr",null),n.a.createElement("ul",{className:o.a.cartlist},e.map((function(e){return n.a.createElement(i.a,{product:e,key:e.id})}))),n.a.createElement("p",{className:o.a.total},"Total:",n.a.createElement("span",null,n.a.createElement("i",null,"$",(function(){for(var a=0;a<e.length;a++)if(null===e[a].price||void 0===e[a].price)e[a].price=0;else{if(a===e.length)return t;t+=e[a].price}}(),t)))),n.a.createElement(s.a,{to:"/book/"},n.a.createElement("button",{className:o.a.secondarycta},"Continue to Checkout"))):n.a.createElement("div",{styles:{cartlist:{height:"100%",width:"33vw",position:"absolute",color:"red"}}},"There are No items in your cart..."):""}}}]);
//# sourceMappingURL=component---src-pages-checkout-js-49cc70eedbf0e3cc8a78.js.map