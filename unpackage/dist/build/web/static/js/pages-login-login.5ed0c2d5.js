(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0b3e":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"tn-checkbox-group-class tn-checkbox-group"},[this._t("default")],2)},i=[]},1733:function(t,e,a){"use strict";var n=a("7b8d"),i=a.n(n);i.a},2288:function(t,e,a){"use strict";a.r(e);var n=a("c69a"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"23b9":function(t,e,a){"use strict";var n=a("55e0e"),i=a.n(n);i.a},"2dde":function(t,e,a){var n=a("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-checkbox[data-v-d15df60a]{display:inline-flex;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none;line-height:1.8}.tn-checkbox__icon-wrap[data-v-d15df60a]{color:#080808;flex:none;display:flex;flex-direction:row;align-items:center;justify-content:center;box-sizing:border-box;width:%?42?%;height:%?42?%;color:transparent;text-align:center;transition-property:color,border-color,background-color;border:1px solid #aaa;transition-duration:.2s}.tn-checkbox__icon-wrap--circle[data-v-d15df60a]{border-radius:100%}.tn-checkbox__icon-wrap--square[data-v-d15df60a]{border-radius:%?6?%}.tn-checkbox__icon-wrap--checked[data-v-d15df60a]{color:#fff;background-color:#01beff;border-color:#01beff}.tn-checkbox__icon-wrap--disabled[data-v-d15df60a]{background-color:#e6e6e6;border-color:#aaa}.tn-checkbox__icon-wrap--disabled--checked[data-v-d15df60a]{color:#aaa!important}.tn-checkbox__label[data-v-d15df60a]{word-wrap:break-word;margin-left:%?10?%;margin-right:%?24?%;color:#080808;font-size:%?30?%}.tn-checkbox__label--disabled[data-v-d15df60a]{color:#aaa}',""]),t.exports=e},"47b2":function(t,e,a){var n=a("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-checkbox-group[data-v-6cfeb4e6]{display:inline-flex;flex-wrap:wrap}.tn-checkbox-group[data-v-6cfeb4e6]::after{content:" ";display:table;clear:both}',""]),t.exports=e},"501a":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tn-checkbox-class tn-checkbox",style:[t.checkboxStyle]},[a("v-uni-view",{staticClass:"tn-checkbox__icon-wrap",class:[t.iconClass],style:[t.iconStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggle.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"tn-checkbox__icon-wrap__icon",class:["tn-icon-"+t.iconName]})],1),a("v-uni-view",{staticClass:"tn-checkbox__label",class:[t.labelClass],style:{fontSize:t.labelSize?t.labelSize+"rpx":""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLabel.apply(void 0,arguments)}}},[t._t("default")],2)],1)},i=[]},"55e0e":function(t,e,a){var n=a("9ad2");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("967d").default;i("7ec6030c",n,!0,{sourceMap:!1,shadowMode:!1})},"5b8c":function(t,e,a){"use strict";a.r(e);var n=a("501a"),i=a("2288");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("e6c4");var s=a("828b"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"d15df60a",null,!1,n["a"],void 0);e["default"]=c.exports},"5dcc":function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("64aa"),a("fd3c"),a("aa9c");var i=n(a("b2ef")),o={mixins:[i.default],name:"tn-checkbox-group",props:{value:{type:Array,default:function(){return[]}},max:{type:Number,default:999},name:{type:String,default:""},disabled:{type:Boolean,default:!1},disabledLabel:{type:Boolean,default:!1},shape:{type:String,default:"square"},activeColor:{type:String,default:"#01BEFF"},size:{type:Number,default:34},width:{type:String,default:"auto"},wrap:{type:Boolean,default:!1},iconSize:{type:Number,default:20}},computed:{parentData:function(){return[this.value,this.disabled,this.disabledLabel,this.shape,this.activeColor,this.size,this.width,this.wrap,this.iconSize]}},data:function(){return{}},watch:{parentData:function(){this.children.length&&this.children.map((function(t){"function"===typeof t.updateParentData&&t.updateParentData()}))}},created:function(){this.children=[]},methods:{initValue:function(t){this.$emit("input",t)},emitEvent:function(){var t=this,e=[];this.children.map((function(t){t.checkValue&&e.push(t.name)})),this.$emit("change",e),this.$emit("input",e),setTimeout((function(){t.dispatch("tn-form-item","on-form-change",e)}),60)}}};e.default=o},"61f6":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={tnNavBar:a("eeb1").default,tnCheckboxGroup:a("f962").default,tnCheckbox:a("5b8c").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page box-sizing"},[a("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[a("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},slot:"back"},[a("v-uni-text",{staticClass:"icon tn-icon-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}}),a("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gohome.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"after-dom",style:{background:t.configInfo.web_site_color,marginTop:t.vuex_custom_bar_height+"px"}}),a("v-uni-view",{staticClass:"title zIndex10"},[a("v-uni-view",{staticClass:"after",style:{background:t.configInfo.web_site_color}}),a("v-uni-view",{staticClass:"text"},[t._v("登录")])],1),a("v-uni-view",{staticClass:"input-group-block zIndex10"},[a("v-uni-view",{staticClass:"input-item"},[a("v-uni-input",{staticClass:"input-dom",attrs:{type:"text",maxlength:"11",placeholder:"请输入手机号"},model:{value:t.telStr,callback:function(e){t.telStr=e},expression:"telStr"}})],1),a("v-uni-view",{staticClass:"input-item"},[a("v-uni-input",{staticClass:"input-dom",attrs:{type:"number",maxlength:"4",placeholder:"请输入验证码"},model:{value:t.coedStr,callback:function(e){t.coedStr=e},expression:"coedStr"}}),a("v-uni-view",{staticClass:"text",class:[t.sendIng?"sendIng":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendSmFn.apply(void 0,arguments)}}},[t._v(t._s(t.calcTextStr))])],1)],1),a("v-uni-button",{staticClass:"btn-dom flex-center border-radius clear-btn-style zIndex10",class:[t.isAllAngle?"border-radius-style-all-arg":"border-radius-style-half-arg"],style:{background:t.configInfo.web_site_color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.telLoginFn.apply(void 0,arguments)}}},[t._v("登录")]),a("v-uni-view",{staticClass:"reg-block"},[a("tn-checkbox-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.checkboxGroupChange.apply(void 0,arguments)}}},[a("tn-checkbox",{attrs:{name:"同意"}},[t._v("同意")])],1),a("v-uni-view",{staticClass:"description-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateToFn({url:"/homePages/about?id=27"})}}},[a("v-uni-view",{staticClass:"text",style:{color:t.configInfo.web_site_color}},[t._v("用户注册协议")])],1),a("v-uni-view",{staticClass:"description-text",staticStyle:{"margin-left":"15px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateToFn({url:"/homePages/about?id=31"})}}},[a("v-uni-view",{staticClass:"text",style:{color:t.configInfo.web_site_color}},[t._v("隐私保护政策")])],1)],1)],1)},o=[]},"7b8d":function(t,e,a){var n=a("47b2");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("967d").default;i("775ae153",n,!0,{sourceMap:!1,shadowMode:!1})},"896a":function(t,e,a){"use strict";a.r(e);var n=a("5dcc"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"9ad2":function(t,e,a){var n=a("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.page[data-v-0f5aa960]{display:block;position:relative;width:100%;height:100vh;background:#fff;overflow:hidden}.page .after-dom[data-v-0f5aa960]{content:"";display:block;position:absolute;z-index:5;bottom:%?-520?%;left:%?146?%;width:%?1200?%;height:%?1200?%;border-radius:%?100000?%;opacity:.2}.page .title[data-v-0f5aa960]{position:relative;margin-top:%?84?%}.page .title .text[data-v-0f5aa960]{position:relative;z-index:10;padding-left:%?112?%;font-size:%?60?%;font-weight:700;color:#000;line-height:%?66?%}.page .title .after[data-v-0f5aa960]{position:absolute;left:0;bottom:0;width:%?246?%;height:%?16?%}.page .input-group-block[data-v-0f5aa960]{margin-top:%?126?%;padding:0 %?110?%}.page .input-group-block .input-item[data-v-0f5aa960]{display:flex;padding-top:%?46?%;padding-left:.2em;border-bottom:1px solid #c2c2c2}.page .input-group-block .input-item .input-dom[data-v-0f5aa960]{flex:1;font-size:%?28?%;height:%?70?%;padding-left:.2em;padding-right:1em}.page .input-group-block .input-item .text[data-v-0f5aa960]{font-size:%?30?%;color:#2c2c2c}.page .btn-dom[data-v-0f5aa960]{margin:%?66?% %?56?%;text-align:center!important;height:%?113?%;line-height:%?113?%!important;color:#fff;border-radius:1000px!important}.page .zIndex10[data-v-0f5aa960]{position:relative;z-index:10}.page .login-third[data-v-0f5aa960]{display:flex;align-items:center;justify-content:center}.page .login-third .weixin-login-btn[data-v-0f5aa960]{display:flex;flex-direction:column;align-items:center}.page .login-third .weixin-login-btn .icon-blcok[data-v-0f5aa960]{width:%?80?%;height:%?80?%;background:#28c445;border-radius:%?1000?%}.page .login-third .weixin-login-btn .icon-blcok uni-image[data-v-0f5aa960]{width:100%;height:100%}.page .login-third .weixin-login-btn .text[data-v-0f5aa960]{font-size:%?24?%;color:#848484;line-height:2}.page .reg-block[data-v-0f5aa960]{display:flex;align-items:center;justify-content:center;position:absolute;z-index:10;bottom:%?100?%;width:100vw}.page .reg-block .description-text[data-v-0f5aa960]{font-size:%?26?%;color:#686a68}.page .reg-block .description-text .text[data-v-0f5aa960]{display:inline-block;text-decoration:underline}',""]),t.exports=e},b2ef:function(t,e,a){"use strict";function n(t,e,a){this.$children.map((function(i){t===i.$options.name?i.$emit.apply(i,[e].concat(a)):n.apply(i,[t,e].concat(a))}))}a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("fd3c"),a("c223");var i={methods:{dispatch:function(t,e,a){var n=this.$parent||this.$root,i=n.$options.name;while(n&&(!i||i!==t))n=n.$parent,n&&(i=n.$options.name);n&&n.$emit.apply(n,[e].concat(a))},broadcast:function(t,e,a){n.call(this,t,e,a)}}};e.default=i},c1c0:function(t,e,a){"use strict";a.r(e);var n=a("db4a"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},c69a:function(t,e,a){"use strict";a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("64aa"),a("aa9c"),a("4626"),a("5ac7");var n={name:"tn-checkbox",props:{name:{type:[String,Number],default:""},value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledLabel:{type:Boolean,default:!1},shape:{type:String,default:""},activeColor:{type:String,default:""},size:{type:Number,default:0},iconName:{type:String,default:"success"},iconSize:{type:Number,default:0},labelSize:{type:Number,default:0}},computed:{isDisabled:function(){return this.disabled?this.disabled:!!this.parent&&this.parentData.disabled},isDisabledLabel:function(){return this.disabledLabel?this.disabledLabel:!!this.parent&&this.parentData.disabledLabel},checkboxSize:function(){return this.size?this.size:this.parent?this.parentData.size:34},elAvtiveColor:function(){return this.activeColor?this.activeColor:this.parent?this.parentData.activeColor:"#01BEFF"},elShape:function(){return this.shape?this.shape:this.parent?this.parentData.shape:"square"},iconClass:function(){var t="";return t+=" tn-checkbox__icon-wrap--"+this.elShape,this.checkValue&&(t+=" tn-checkbox__icon-wrap--checked"),this.isDisabled&&(t+=" tn-checkbox__icon-wrap--disabled"),this.value&&this.isDisabled&&(t+=" tn-checkbox__icon-wrap--disabled--checked"),t},iconStyle:function(){var t={};return this.elAvtiveColor&&this.checkValue&&!this.isDisabled&&(t.borderColor=this.elAvtiveColor,t.backgroundColor=this.elAvtiveColor),t.color=this.checkValue?"#FFFFFF":"transparent",t.width=this.checkboxSize+"rpx",t.height=t.width,t.fontSize=(this.iconSize?this.iconSize:this.parent?this.parentData.iconSize:20)+"rpx",t},checkboxStyle:function(){var t={};return this.parent&&this.parentData.width&&(t.flex="0 0 ".concat(this.parentData.width)),this.parent&&this.parentData.wrap&&(t.width="100%",t.flex="0 0 100%"),t},labelClass:function(){var t="";return this.isDisabled&&(t+=" tn-checkbox__label--disabled"),t}},data:function(){return{checkValue:!1,parentData:{value:null,max:null,disabled:null,disabledLabel:null,shape:null,activeColor:null,size:null,width:null,wrap:null,iconSize:null}}},watch:{value:function(t){this.checkValue=t}},created:function(){this.updateParentData(),this.parent&&this.parent.children.push(this)},methods:{updateCheckValue:function(){this.checkValue=this.parent&&this.parentData.value.includes(this.name)||!0===this.value,this.parent&&this.value&&!this.parentData.value.includes(this.name)&&(this.parentData.value.push(this.name),this.parent.initValue(this.parentData.value))},updateParentData:function(){this.getParentData("tn-checkbox-group"),this.updateCheckValue()},onClickLabel:function(){this.isDisabled||this.isDisabledLabel||this.setValue()},toggle:function(){this.isDisabled||this.setValue()},emitEvent:function(){var t=this;this.$emit("change",{name:this.name,value:!this.checkValue}),this.parent&&(this.checkValue=!this.checkValue,setTimeout((function(){t.parent.emitEvent&&t.parent.emitEvent()}),80))},setValue:function(){if(this.parent)if(!0===this.checkValue)this.emitEvent();else{if(this.parentData.value.length>=this.parentData.max)return this.$t.message.toast("最多可选".concat(this.parent.max,"项"));this.emitEvent()}else this.emitEvent(),this.$emit("input",!this.checkValue)}}};e.default=n},ca5e:function(t,e,a){var n=a("2dde");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("967d").default;i("bf78b562",n,!0,{sourceMap:!1,shadowMode:!1})},d44b:function(t,e,a){"use strict";a.r(e);var n=a("61f6"),i=a("c1c0");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("23b9");var s=a("828b"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"0f5aa960",null,!1,n["a"],void 0);e["default"]=c.exports},db4a:function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o=n(a("9b1b")),s=n(a("2634")),c=n(a("2fdc")),r=n(a("c8e8")),l=a("7a6c"),u=(a("2158"),{name:"TemplateDetails",mixins:[r.default],data:function(){return{fruit:"",is_geree:"",sendIng:!1,sendSmCont:0,telStr:"",coedStr:"",intervalTime:60,showIntervalStr:0}},onLoad:function(t){},onUnload:function(){clearInterval(i)},methods:{checkboxGroupChange:function(t){this.fruit=t},text1:function(){var t=this;t.logOutFn();var e="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjF9.VQtQaEk7rvMOGHV5dBlNjWpWtBL-gFNpKBMNXTX3_ns";t.$store.commit("setToken",e),uni.setStorageSync("token",e),uni.hideLoading(),uni.showLoading({}),t.hasTokenGetUserInfo((function(){uni.hideLoading(),uni.showToast({icon:"success",title:"登录成功"}),setTimeout((function(){t.toBackFn()}),500)}))},startIntervalFn:function(){var t=this;t.showIntervalStr=t.intervalTime,clearInterval(i),i=setInterval((function(){t.showIntervalStr--,t.showIntervalStr<=0&&(t.sendIng=!1)}),1e3)},sendSmFn:function(){var t=this;return(0,c.default)((0,s.default)().mark((function e(){var a,n;return(0,s.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t,!a.sendIng){e.next=3;break}return e.abrupt("return",!1);case 3:if(a.regTel(a.telStr)){e.next=6;break}return uni.showToast({icon:"none",title:"手机号码格式错误"}),e.abrupt("return",!1);case 6:return a.sendSmCont++,a.sendIng=!0,a.startIntervalFn(),e.next=11,a.$request({method:"post",url:"/api/login/sendsms",data:{mobile:a.telStr,event:"mobilelogin"}});case 11:n=e.sent,200==n.statusCode?200==n.data.code?0==n.data.data.sms_is?(a.coedStr=n.data.data.code,uni.showModal({title:"提示",showCancel:!1,content:"未开启短信发送,系统自动填写验证码,直接登录即可",success:function(t){t.confirm||t.cancel}})):uni.showToast({icon:"none",title:"发送成功，请查收"}):(uni.showToast({icon:"none",title:n.data.msg}),a.sendIng=!1):(uni.showToast({icon:"none",title:a.$errorMsg}),a.sendIng=!1);case 13:case"end":return e.stop()}}),e)})))()},telLoginFn:function(){var t=this;return(0,c.default)((0,s.default)().mark((function e(){var a,n,i,c,r;return(0,s.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t,"同意"==a.fruit[0]){e.next=4;break}return uni.showToast({icon:"none",title:"请先同意协议和政策"}),e.abrupt("return",!1);case 4:if(!(a.telStr.length<=0)){e.next=7;break}return uni.showToast({icon:"none",title:"手机号码不能为空"}),e.abrupt("return",!1);case 7:if(!(a.coedStr.length<=0)){e.next=10;break}return uni.showToast({icon:"none",title:"验证码不能为空"}),e.abrupt("return",!1);case 10:return{},n={},n.platform="H5",i=(0,o.default)({mobile:a.telStr,code:a.coedStr},n),e.next=16,a.$request({loading:!0,method:"post",url:"/api/login/mobileLogin",data:i});case 16:c=e.sent,200==c.statusCode?200==c.data.code?(a.logOutFn(),r=(0,l.assertObject)(c.data.data).login_token,a.$store.commit("setToken",r),uni.setStorageSync("token",r),uni.hideLoading(),uni.showLoading({}),a.hasTokenGetUserInfo((function(){uni.hideLoading(),uni.showToast({icon:"success",title:"登录成功"}),a.$emit("loginok",!0),setTimeout((function(){a.toBackFn()}),500)}))):uni.showToast({icon:"none",title:c.data.msg}):uni.showToast({icon:"none",title:a.$errorMsg});case 18:case"end":return e.stop()}}),e)})))()}},computed:{calcTextStr:function(){var t="";return t=(this.sendSmCont,this.sendIng?"重新获取(".concat(this.showIntervalStr,")"):"获取验证码"),t}}});e.default=u},e6c4:function(t,e,a){"use strict";var n=a("ca5e"),i=a.n(n);i.a},f962:function(t,e,a){"use strict";a.r(e);var n=a("0b3e"),i=a("896a");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("1733");var s=a("828b"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"6cfeb4e6",null,!1,n["a"],void 0);e["default"]=c.exports}}]);