(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{YjHR:function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l),c=t("XjSt"),r=t("dBd+"),s=t.n(r),i=t("hBfX"),m=t.n(i);a.a=function(e){var a=e.product,t=Object(l.useContext)(c.a).dispatch;return n.a.createElement("li",{className:s.a.cartitem},n.a.createElement("div",{className:s.a.cc},n.a.createElement("h6",{className:s.a.cartitemdesc},a.package),n.a.createElement("img",{alt:"logo",className:s.a.cartitemimg,src:m.a})),n.a.createElement("div",{className:s.a.cc},n.a.createElement("p",{className:s.a.cartitemqty},n.a.createElement("span",null,n.a.createElement("strong",null,"Quantity: ")),n.a.createElement("select",{className:s.a.cartitemselect},n.a.createElement("option",null," 1"))),n.a.createElement("p",{className:s.a.pricelabel},n.a.createElement("span",null,n.a.createElement("i",null," ",n.a.createElement("div",{className:"price"},n.a.createElement("strong",null,"Price: "),"$",a.price))))),n.a.createElement("button",{onClick:function(){return t({type:"REMOVE_PRODUCT",id:a.id})},className:s.a.removecta},"Remove Item"),"  ",n.a.createElement("hr",{className:s.a.hr}))}},"dBd+":function(e,a,t){e.exports={cartlist:"slidenav-module--cartlist--3IL6e",checkout:"slidenav-module--checkout--3yXfy",step:"slidenav-module--step--1Bfx_",active:"slidenav-module--active--3uQ5e",progressbar:"slidenav-module--progressbar--3BsQ5",header:"slidenav-module--header--2c8nO",secondarycta:"slidenav-module--secondarycta--3znsR",cartitemimg:"slidenav-module--cartitemimg--3MyXN",cartitemdesc:"slidenav-module--cartitemdesc--2Av0n",cartitem:"slidenav-module--cartitem--9tiQ1",cartitemqty:"slidenav-module--cartitemqty--2JnoY",cartitemselect:"slidenav-module--cartitemselect--89MmI",pricelabel:"slidenav-module--pricelabel--woFmL",removecta:"slidenav-module--removecta--1LJs5",sidebyside:"slidenav-module--sidebyside--3_nYO",headercart:"slidenav-module--headercart--3Z95m",itemnumber:"slidenav-module--itemnumber--1IJ9U",cc:"slidenav-module--cc--2RG2e",hr:"slidenav-module--hr--2NdkW",total:"slidenav-module--total--6aG-3",container:"slidenav-module--container--2ZHAp",show:"slidenav-module--show--2Txv1"}},icX0:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),c=t("Wbzz"),r=t("Bl7J"),s=t("aTTt"),i=t.n(s),m=(t("q4sD"),t("q9vo")),o=t("lD8L"),d=t("OcqW"),u=t("beFU");t("tiIK");var p=function(e){var a,t;function l(a){var t;return(t=e.call(this,a)||this).state={count:1},t.handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}t=e,(a=l).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var s=l.prototype;return s.handleClick=function(e){e.preventDefault();localStorage.setItem("item","neldo"),this.setState({count:this.state.count+1}),document.getElementById("shows").classList.add("nostyle")},s.render=function(){var e=this;return n.a.createElement(r.a,{location:this.props.location},n.a.createElement(m.a,null),n.a.createElement("div",{class:"wrapper"},n.a.createElement("h1",{className:i.a.detailheader},"Neldo"),n.a.createElement("br",null),n.a.createElement("div",{className:i.a.mobile},n.a.createElement(d.a,null)),n.a.createElement(o.a,null),n.a.createElement("span",null,"Price: ",n.a.createElement("i",null,"$2,999")),n.a.createElement(c.a,{to:"/cart/"},n.a.createElement("button",{onClick:function(a){return e.handleClick(a)},id:i.a.ctabtn,className:"btn text-white btn-lg"},"Add to Cart")),n.a.createElement("br",null)," ",n.a.createElement("br",null),n.a.createElement("br",null)," ",n.a.createElement("br",null),n.a.createElement(u.default,null),n.a.createElement("h4",{className:i.a.detailssubheader},"Details:"),n.a.createElement("br",null),n.a.createElement("p",null,"Complete Custom made Brand Style Guide, Mockup and Website Development which includes:"),n.a.createElement("ul",null,n.a.createElement("li",null,"Mission Statement"),n.a.createElement("li",null,"Typography"),n.a.createElement("li",null,"Logo Design"),n.a.createElement("li",null,"Color Palette"),n.a.createElement("li",null,"Iconography"),n.a.createElement("li",null,"Hierarchy"),n.a.createElement("li",null,"Photography Guidelines"),n.a.createElement("li",null,"Full Website Development"))))},l}(n.a.Component);a.default=p},tiIK:function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l),c=t("dBd+"),r=t.n(c),s=t("XjSt"),i=t("YjHR"),m=t("Wbzz");a.a=function(){var e=Object(l.useContext)(s.a).products,a=0;return"undefined"!=typeof window?e.length?n.a.createElement("div",{id:r.a.show,className:"container"},n.a.createElement("h1",{className:r.a.header},"Checkout"),n.a.createElement("div",{className:r.a.checkout},n.a.createElement("span",{id:r.a.active,className:r.a.step},"1"),n.a.createElement("div",{className:r.a.progressbar}),n.a.createElement("span",{className:r.a.step},"2"),n.a.createElement("div",{className:r.a.progressbar}),n.a.createElement("span",{className:r.a.step},"3")),n.a.createElement("div",{className:r.a.sidebyside},n.a.createElement("h2",{className:r.a.headercart},"Your Cart"),n.a.createElement("h4",{className:r.a.itemnumber}," ","undefined"!=typeof window?e.length:""," Items")),n.a.createElement("hr",null),n.a.createElement("ul",{className:r.a.cartlist},e.map((function(e){return n.a.createElement(i.a,{product:e,key:e.id})}))),n.a.createElement("p",{className:r.a.total},"Total:",n.a.createElement("span",null,n.a.createElement("i",null,"$",(function(){for(var t=0;t<e.length;t++)if(null===e[t].price||void 0===e[t].price)e[t].price=0;else{if(t===e.length)return a;a+=e[t].price}}(),a)))),n.a.createElement(m.a,{to:"/book/"},n.a.createElement("button",{className:r.a.secondarycta},"Continue to Checkout"))):n.a.createElement("div",{styles:{cartlist:{height:"100%",width:"33vw",position:"absolute",color:"red"}}},"There are No items in your cart..."):""}}}]);
//# sourceMappingURL=component---src-pages-shop-neldo-js-75628e0417655e770c4a.js.map