(function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],m=0,d=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(d.length)d.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],a=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=i[0]))}return e}var a={},s={app:0},n=[];function r(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=a,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(i,a,function(t){return e[t]}.bind(null,a));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"160a":function(e,t,i){"use strict";i("e959")},"17d6":function(e,t,i){e.exports=i.p+"img/card--white.f0054943.svg"},"1ba2":function(e,t,i){e.exports=i.p+"img/mars-symbol--white.a3f778d2.svg"},"24f8":function(e,t,i){},"27e4":function(e,t,i){e.exports=i.p+"img/arrow.dabcc78a.svg"},3522:function(e,t,i){e.exports=i.p+"img/card.d36fc889.svg"},4398:function(e,t,i){e.exports=i.p+"img/venus-symbol.78c0db66.svg"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.pageLoaded,expression:"pageLoaded"}],staticClass:"wrapper"},[i("div",{staticClass:"columns is-desktop box"},[i("div",{staticClass:"leftPanel has-text-centered column is-5-desktop"},[i("left-panel",{on:{arrowClicked:e.slidePanel}})],1),i("div",{staticClass:"formPanel column is-7-desktop"},[i("transition",{attrs:{name:"slide"}},[i("slider-panel",{directives:[{name:"show",rawName:"v-show",value:e.panelOpen,expression:"panelOpen"}]})],1),i("form-panel")],1)])])])],1)},n=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"formWrapper"},[a("div",{staticClass:"form"},[a("div",{staticClass:"inputWrapper"},[a("label",{staticClass:"inputLabel",attrs:{for:"name"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"input",attrs:{type:"text",placeholder:"Jane Doe",name:"name"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}})]),a("div",{staticClass:"inputWrapper"},[a("label",{staticClass:"inputLabel",attrs:{for:"name"}},[e._v("Gender")]),a("div",{staticClass:"iconRow"},[a("form-icon",{ref:"maleGender",staticClass:"genderIconGap",attrs:{text:"Male",imageUrl:"mars-symbol.svg"},on:{iconClicked:function(t){return e.iconClicked("gender","maleGender")}}}),a("form-icon",{ref:"femaleGender",staticClass:"genderIconGap",attrs:{text:"Female",imageUrl:"venus-symbol.svg"},on:{iconClicked:function(t){return e.iconClicked("gender","femaleGender")}}})],1)]),a("div",{staticClass:"inputWrapper"},[a("label",{staticClass:"inputLabel",attrs:{for:"date"}},[e._v("Date of Birth")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.date,expression:"form.date"}],staticClass:"input",attrs:{type:"text",placeholder:"01/02/1983",name:"date"},domProps:{value:e.form.date},on:{input:function(t){t.target.composing||e.$set(e.form,"date",t.target.value)}}}),a("img",{staticClass:"inputIcon",attrs:{src:i("d71f")}})]),a("div",{staticClass:"inputWrapper"},[a("div",{staticClass:"warningWrapper"},[e.showWarning?a("div",{staticClass:"circle"}):e._e(),a("label",{class:["inputLabel",{warning:e.showWarning}],attrs:{for:"email"}},[e._v("Email")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],class:["input",{inputWarning:e.showWarning}],attrs:{type:"text",placeholder:"email@example.com",name:"email"},domProps:{value:e.form.email},on:{blur:function(t){e.showWarning=!0},input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e.showWarning?a("div",{staticClass:"warningText"},[e._v("Invalid email address")]):e._e()]),a("div",{staticClass:"inputWrapper"},[a("label",{staticClass:"inputLabel",attrs:{for:"mobile"}},[e._v("Mobile")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.mobile,expression:"form.mobile"}],staticClass:"input",attrs:{type:"text",placeholder:"+91 98765 43210",name:"mobile"},domProps:{value:e.form.mobile},on:{input:function(t){t.target.composing||e.$set(e.form,"mobile",t.target.value)}}})]),a("div",{staticClass:"inputWrapper"},[a("label",{staticClass:"inputLabel",attrs:{for:"customer"}},[e._v("Customer ID")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.customerID,expression:"form.customerID"}],staticClass:"input",attrs:{type:"text",placeholder:"576802-ERD0348 45",name:"customer"},domProps:{value:e.form.customerID},on:{input:function(t){t.target.composing||e.$set(e.form,"customerID",t.target.value)}}})]),a("div",{staticClass:"inputWrapper membershipRow"},[a("label",{staticClass:"inputLabel",attrs:{for:"name"}},[e._v("Membership")]),a("div",{staticClass:"iconRow"},[a("form-icon",{ref:"classicMembership",staticClass:"membershipIconSpacing",attrs:{text:"Classic",imageUrl:"card.svg"},on:{iconClicked:function(t){return e.iconClicked("membership","classicMembership")}}}),a("form-icon",{ref:"silverMembership",staticClass:"membershipIconSpacing",attrs:{text:"Silver",imageUrl:"card.svg"},on:{iconClicked:function(t){return e.iconClicked("membership","silverMembership")}}}),a("form-icon",{ref:"goldMembership",staticClass:"membershipIconSpacing",attrs:{text:"Gold",imageUrl:"card.svg"},on:{iconClicked:function(t){return e.iconClicked("membership","goldMembership")}}})],1)]),a("div",{staticClass:"buttonsWrapper"},[a("button",{staticClass:"button",attrs:{id:"cancelBtn"},on:{click:function(t){return e.clearForm()}}},[e._v(" CANCEL ")]),a("button",{staticClass:"button",attrs:{id:"saveBtn"}},[e._v("SAVE")])])])])},o=[],l=i("b85c"),c=(i("99af"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"iconWrapper noselect",on:{click:e.iconClicked}},[a("div",{class:["iconContainer","grow",{iconClicked:e.clicked}]},[a("img",{attrs:{src:i("7584")("./"+e.currentImage)}})]),a("p",{staticClass:"iconText"},[e._v(e._s(e.text))])])}),u=[],m=(i("ac1f"),i("1276"),{props:{imageUrl:{type:String,required:!0},text:{type:String,default:""}},data:function(){return{currentImage:this.imageUrl,clicked:!1}},methods:{iconClicked:function(){this.clicked=!this.clicked,this.clicked?this.currentImage=this.clickedImageUrl:this.currentImage=this.imageUrl,this.$emit("iconClicked")},unclick:function(){this.clicked=!1,this.currentImage=this.imageUrl}},computed:{clickedImageUrl:function(){return this.imageUrl.split(".")[0]+"--white."+this.imageUrl.split(".")[1]}}}),d=m,p=(i("f7e9"),i("2877")),f=Object(p["a"])(d,c,u,!1,null,"23a958bd",null),v=f.exports,g={data:function(){return{form:{email:""},showWarning:!1,membershipGroup:[],genderGroup:[]}},methods:{clearForm:function(){this.form={},this.showWarning=!1;var e,t=this.membershipGroup.concat(this.genderGroup),i=Object(l["a"])(t);try{for(i.s();!(e=i.n()).done;){var a=e.value;a.unclick()}}catch(s){i.e(s)}finally{i.f()}},iconClicked:function(e,t){var i,a="membership"===e?this.membershipGroup:this.genderGroup,s=Object(l["a"])(a);try{for(s.s();!(i=s.n()).done;){var n=i.value;n!=this.$refs[t]&&n.unclick()}}catch(r){s.e(r)}finally{s.f()}}},components:{formIcon:v},mounted:function(){this.membershipGroup=[this.$refs.classicMembership,this.$refs.silverMembership,this.$refs.goldMembership],this.genderGroup=[this.$refs.maleGender,this.$refs.femaleGender]}},h=g,b=(i("f3d7"),Object(p["a"])(h,r,o,!1,null,"80d514a0",null)),C=b.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"leftPanel"},[a("div",{staticClass:"avatar"},[a("div",{staticClass:"imagePlaceholder"},[a("transition",{attrs:{name:"fade"}},[a("img",{directives:[{name:"show",rawName:"v-show",value:e.imageLoaded,expression:"imageLoaded"}],attrs:{src:i("7e89")},on:{load:function(t){e.imageLoaded=!0}}})])],1)]),e._m(0),a("div",{staticClass:"arrowContainer noselect grow",on:{click:e.clicked}},[a("transition",{attrs:{name:"fade"}},[a("img",{directives:[{name:"show",rawName:"v-show",value:e.arrowLoaded,expression:"arrowLoaded"}],class:["arrow",{flip:e.flipped}],attrs:{src:i("27e4")},on:{load:function(t){e.arrowLoaded=!0}}})])],1)])},x=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("p",{staticClass:"title"},[e._v("Front-end challenge!")]),i("p",{staticClass:"subtitle mt-3"},[e._v(" This is a design that you will need to code up and impress us ")])])}],y={data:function(){return{flipped:!1,imageLoaded:!1,arrowLoaded:!1}},methods:{clicked:function(){var e=this;this.flipped=!this.flipped,this.$emit("arrowClicked"),this.onMobile()&&this.flipped&&setTimeout((function(){e.scroll()}),1e3)},scroll:function(){this.$smoothScroll({scrollTo:document.getElementById("sliderPanel"),offset:25,updateHistory:!1})},onMobile:function(){var e=window.matchMedia("(max-width: 1023px)");return e.matches}}},_=y,k=(i("160a"),Object(p["a"])(_,w,x,!1,null,"37f7b9bc",null)),O=k.exports,P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},L=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"slider",attrs:{id:"sliderPanel"}},[i("div",{staticClass:"coverText"},[i("p",{staticClass:"title"},[e._v("My world today")]),i("p",{staticClass:"subtitle mt-3"},[e._v(" Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. "),i("b",{staticStyle:{"text-decoration":"underline"}},[e._v(" View all days ")]),e._v(" eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat ")])])])}],M={},$=M,I=(i("8977"),Object(p["a"])($,P,L,!1,null,"171bf335",null)),W=I.exports,G={name:"App",data:function(){return{pageLoaded:!1,panelOpen:!1}},methods:{slidePanel:function(){this.panelOpen=!this.panelOpen}},mounted:function(){this.pageLoaded=!0},components:{LeftPanel:O,FormPanel:C,SliderPanel:W}},j=G,U=(i("d5ed"),Object(p["a"])(j,s,n,!1,null,"4d9501d6",null)),S=U.exports,E=(i("b383"),i("45e3"));a["a"].use(E["a"],{duration:800}),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(S)}}).$mount("#app")},5882:function(e,t,i){},"5b46":function(e,t,i){},7584:function(e,t,i){var a={"./arrow.svg":"27e4","./calendar.svg":"d71f","./card--white.svg":"17d6","./card.svg":"3522","./face.svg":"7e89","./mars-symbol--white.svg":"1ba2","./mars-symbol.svg":"77e4","./venus-symbol--white.svg":"f95f","./venus-symbol.svg":"4398"};function s(e){var t=n(e);return i(t)}function n(e){if(!i.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=n,e.exports=s,s.id="7584"},"77e4":function(e,t,i){e.exports=i.p+"img/mars-symbol.42b346aa.svg"},"7e89":function(e,t,i){e.exports=i.p+"img/face.36db5e18.svg"},8977:function(e,t,i){"use strict";i("5882")},"8b17":function(e,t,i){},b383:function(e,t,i){},d5ed:function(e,t,i){"use strict";i("8b17")},d71f:function(e,t,i){e.exports=i.p+"img/calendar.b895e2b3.svg"},e959:function(e,t,i){},f3d7:function(e,t,i){"use strict";i("5b46")},f7e9:function(e,t,i){"use strict";i("24f8")},f95f:function(e,t,i){e.exports=i.p+"img/venus-symbol--white.276fe32f.svg"}});
//# sourceMappingURL=app.3569d0c4.js.map