webpackJsonp([5],{"H2V/":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("zL8q"),r=s("A5qe"),n=s.n(r),o=s("NYxO"),i={computed:Object(o.a)({}),data:function(){return{current:null,name:"",password:"",count:0}},methods:{nameFocus:function(){this.current&&this.current.pause(),this.current=n()({targets:"path",strokeDashoffset:{value:0,duration:700,easing:"easeOutQuart"},strokeDasharray:{value:"240 1386",duration:700,easing:"easeOutQuart"}})},passwordFocus:function(){this.current&&this.current.pause(),this.current=n()({targets:"path",strokeDashoffset:{value:-336,duration:700,easing:"easeOutQuart"},strokeDasharray:{value:"240 1386",duration:700,easing:"easeOutQuart"}})},submitFocus:function(){this.current&&this.current.pause(),this.current=n()({targets:"path",strokeDashoffset:{value:-730,duration:700,easing:"easeOutQuart"},strokeDasharray:{value:"530 1386",duration:700,easing:"easeOutQuart"}})},login:function(t,e){if("yangXiuTing"==t&&"941030"==e)this.$router.push({name:"animation"});else{if(this.count++,this.count>=5)return Object(a.Message)({type:"error",message:"yangXiuTing and 941030"});"yangXiuTing"!=t?Object(a.Message)({type:"error",message:"用户名不对，或许可以试试驼峰命名"}):Object(a.Message)({type:"error",message:"密码不对，可能写在提示框里。"})}}},mounted:function(){this.$nextTick(function(){})}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"test"},[s("div",{staticClass:"page"},[s("div",{staticClass:"container"},[s("div",{staticClass:"left"},[s("div",{staticClass:"login"},[t._v("Login")]),t._v(" "),s("div",{staticClass:"eula"},[t._v("\n          Love and wisdom，the two can not have both\n          "),s("br"),t._v(" "),s("br"),t._v(" "),t.count>5?s("span",{staticStyle:{color:"#61C3FF"},attrs:{id:"text"}},[t._v("爱与智慧，两者不可兼得")]):t._e()])]),t._v(" "),s("div",{staticClass:"right"},[s("svg",{attrs:{viewBox:"0 0 320 300"}},[s("defs",[s("linearGradient",{attrs:{"inkscape:collect":"always",id:"linearGradient",x1:"13",y1:"193.49992",x2:"307",y2:"193.49992",gradientUnits:"userSpaceOnUse"}},[s("stop",{staticStyle:{"stop-color":"#ff00ff"},attrs:{offset:"0",id:"stop876"}}),t._v(" "),s("stop",{staticStyle:{"stop-color":"#ff0000"},attrs:{offset:"1",id:"stop878"}})],1)],1),t._v(" "),s("path",{attrs:{d:"m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143"}})]),t._v(" "),s("div",{staticClass:"form"},[s("label",{attrs:{for:"email"}},[t._v("Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",id:"name",placeholder:"youName"},domProps:{value:t.name},on:{focus:t.nameFocus,input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{placeholder:"941030",type:"password",id:"password"},domProps:{value:t.password},on:{focus:t.passwordFocus,input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),s("input",{attrs:{type:"submit",id:"submit",value:"Submit"},on:{focus:t.submitFocus,click:function(e){t.login(t.name,t.password)}}})])])])])])},staticRenderFns:[]};var c=s("VU/8")(i,u,!1,function(t){s("oVo+"),s("l8UW")},"data-v-d9b7f0a8",null);e.default=c.exports},l8UW:function(t,e){},"oVo+":function(t,e){}});
//# sourceMappingURL=5.27c6735a68a26101d2a2.js.map