webpackJsonp([12],{"5MdT":function(n,t){},ARNn:function(n,t){},B8cD:function(n,t,e){"use strict";(function(n){t.a={name:"canvasStar",data:function(){return{isInit:!1}},methods:{initCanvas:function(){setTimeout(function(){var n=document.getElementById("canvas"),t=n.getContext("2d"),e=n.width=document.body.offsetWidth,r=n.height=document.body.offsetHeight,o=217,i=[],a=0,s=document.createElement("canvas"),u=s.getContext("2d");s.width=100,s.height=100;var l=s.width/2,c=u.createRadialGradient(l,l,0,l,l,l);function h(n,t){if(arguments.length<2&&(t=n,n=0),n>t){var e=t;t=n,n=e}return Math.floor(Math.random()*(t-n+1))+n}c.addColorStop(.025,"#fff"),c.addColorStop(.1,"hsl("+o+", 61%, 33%)"),c.addColorStop(.25,"hsl("+o+", 64%, 6%)"),c.addColorStop(1,"transparent"),u.fillStyle=c,u.beginPath(),u.arc(l,l,l,0,2*Math.PI),u.fill();var d=function(){var n,t,o;this.orbitRadius=h((n=e,t=r,o=Math.max(n,t),Math.round(Math.sqrt(o*o+o*o))/2)),this.radius=h(60,this.orbitRadius)/12,this.orbitX=e/2,this.orbitY=r/2,this.timePassed=h(0,1200),this.speed=h(this.orbitRadius)/9e5,this.alpha=h(2,10)/10,i[++a]=this};d.prototype.draw=function(){var n=Math.sin(this.timePassed)*this.orbitRadius+this.orbitX,e=Math.cos(this.timePassed)*this.orbitRadius+this.orbitY,r=h(10);1===r&&this.alpha>0?this.alpha-=.05:2===r&&this.alpha<1&&(this.alpha+=.05),t.globalAlpha=this.alpha,t.drawImage(s,n-this.radius/2,e-this.radius/2,this.radius,this.radius),this.timePassed+=this.speed};for(var m=0;m<1200;m++)new d;!function n(){t.globalCompositeOperation="source-over",t.globalAlpha=.8,t.fillStyle="hsla("+o+", 64%, 6%, 1)",t.fillRect(0,0,e,r),t.globalCompositeOperation="lighter";for(var a=1,s=i.length;a<s;a++)i[a].draw();window.requestAnimationFrame(n)}()},1e3)},initCanvas2:function(){setTimeout(function(){var t=document.getElementById("canvas"),e=t.getContext("2d");t.width=document.body.offsetWidth,t.height=document.body.offsetHeight,e.lineWidth=.3,e.strokeStyle=new u(150).style;var r={x:30*t.width/100,y:30*t.height/100},o={nb:750,distance:50,d_radius:100,array:[]};function i(n){return Math.floor(255*Math.random()+n)}function a(n,t,e){return"rgba("+n+","+t+","+e+", 0.8)"}function s(n,t,e,r){return(n*t+e*r)/(t+r)}function u(n){n=n||0,this.r=i(n),this.g=i(n),this.b=i(n),this.style=a(this.r,this.g,this.b)}function l(){this.x=Math.random()*t.width,this.y=Math.random()*t.height,this.vx=-.5+Math.random(),this.vy=-.5+Math.random(),this.radius=2*Math.random(),this.color=new u}l.prototype={draw:function(){e.beginPath(),e.fillStyle=this.color.style,e.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),e.fill()}},n("canvas").on("mousemove",function(n){r.x=n.pageX,r.y=n.pageY}),n("canvas").on("mouseleave",function(n){r.x=t.width/2,r.y=t.height/2}),function(){for(var n=0;n<o.nb;n++)o.array.push(new l)}(),requestAnimationFrame(function n(){e.clearRect(0,0,t.width,t.height),function(){for(var n=0;n<o.nb;n++){var e=o.array[n];e.y<0||e.y>t.height?(e.vx=e.vx,e.vy=-e.vy):(e.x<0||e.x>t.width)&&(e.vx=-e.vx,e.vy=e.vy),e.x+=e.vx,e.y+=e.vy}}(),function(){for(var n=0;n<o.nb;n++)for(var t=0;t<o.nb;t++){var i=o.array[n],u=o.array[t];i.x-u.x<o.distance&&i.y-u.y<o.distance&&i.x-u.x>-o.distance&&i.y-u.y>-o.distance&&i.x-r.x<o.d_radius&&i.y-r.y<o.d_radius&&i.x-r.x>-o.d_radius&&i.y-r.y>-o.d_radius&&(e.beginPath(),e.strokeStyle=(c=u,h=(l=i).color,d=c.color,m=s(h.r,l.radius,d.r,c.radius),f=s(h.g,l.radius,d.g,c.radius),p=s(h.b,l.radius,d.b,c.radius),a(Math.floor(m),Math.floor(f),Math.floor(p))),e.moveTo(i.x,i.y),e.lineTo(u.x,u.y),e.stroke(),e.closePath())}var l,c,h,d,m,f,p}(),function(){for(var n=0;n<o.nb;n++)o.array[n].draw()}(),requestAnimationFrame(n)})},1e3)},initCanvas3:function(){document.addEventListener("touchmove",function(n){n.preventDefault()});var n,t=document.getElementById("canvas"),e=t.getContext("2d"),r=window.devicePixelRatio||1,o=document.body.offsetWidth,i=window.innerHeight-60,a=90,s=Math,u=0,l=2*s.PI,c=s.cos,h=s.random;function d(){for(e.clearRect(0,0,o,i),n=[{x:0,y:.7*i+a},{x:0,y:.7*i-a}];n[1].x<o+a;)m(n[0],n[1])}function m(t,r){e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(r.x,r.y);var o=r.x+(2*h()-.25)*a,s=function n(t){var e=t+(2*h()-1.1)*a;return e>i||e<0?n(t):e}(r.y);e.lineTo(o,s),e.closePath(),u-=l/-50,e.fillStyle="#"+(127*c(u)+128<<16|127*c(u+l/3)+128<<8|127*c(u+l/3*2)+128).toString(16),e.fill(),n[0]=n[1],n[1]={x:o,y:s}}t.width=o*r,t.height=i*r,e.scale(r,r),e.globalAlpha=.6,document.onclick=d,document.ontouchstart=d,d()}},mounted:function(){var n=this;this.$nextTick(function(){n.initCanvas3()})}}}).call(t,e("7t+N"))},C0TC:function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});e("xsZ7"),e("bvMy"),e("TJvI"),e("tvR6");var r=e("zL8q"),o=e("7+uW"),i=e("B8cD"),a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("canvas",{staticClass:"canvas",attrs:{id:"canvas",width:"909",height:"903"}})])}]};var s=function(n){e("Qj2B")},u={name:"App",components:{CanvasStar:e("VU/8")(i.a,a,!1,s,"data-v-1ef355f8",null).exports},methods:{},mounted:function(){this.$nextTick(function(){})}},l={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view",{staticStyle:{position:"relative","z-index":"1"}})],1)},staticRenderFns:[]};var c=e("VU/8")(u,l,!1,function(n){e("C0TC")},"data-v-1fe46e27",null).exports,h=e("/ocq"),d=e("//Fk"),m=e.n(d),f=e("Xxa5"),p=e.n(f),v=e("exGp"),g=e.n(v),y=e("OEdS"),w=e.n(y),S={name:"Editor",props:["code"],computed:{highlightedCode:function(){return w.a.highlight(this.code,w.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}},b={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:this._s(this.codeInStyleTag)}}),this._v(" "),t("pre",{domProps:{innerHTML:this._s(this.highlightedCode)}})])},staticRenderFns:[]};var x=e("VU/8")(S,b,!1,function(n){e("NKsa")},"data-v-09a38454",null).exports,E=e("EFqf"),k=e.n(E),M={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?k()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}},P={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:this.enableHtml}},[this.enableHtml?t("div",{domProps:{innerHTML:this._s(this.result)}}):t("pre",[this._v(this._s(this.result))])])},staticRenderFns:[]};var T=e("VU/8")(M,P,!1,function(n){e("5MdT")},"data-v-2c22dc65",null).exports,C={name:"resume",components:{StyleEditor:x,ResumeEditor:T},data:function(){return{interval:10,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* 大家好，我是Lucien\n* 三月了，好多公司都在招聘，你是不是也在准备简历呀。\n* 说做就做，我也来写一份简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"Lucien\n----\n\n现在在 [数字尾巴](http://dgtle.com) 担任高级前端开发工程师。\n\n技能\n----\n\n* 熟练掌握 HTML5+CSS3新特性，根据 W3C 标准像素级实现设计图。\n* 熟练掌握的移动端页面开发、自适应布局、响应式布局、弹性布局，能够处理移动端页面在不同机\n型中的兼容问题\n* 熟练掌握微信页面的开发、微信相关 SDK\n* 熟练掌握 PC 端开发，熟悉不同浏览器的差异，能处理 Chrome、Safari、Firefox、IE 等浏览器的\n兼容问题\n* 熟练掌握 Vue、Angular 等主流前端框架\n* 熟练掌握 vue-router、vue-lazyload、vuex、vee-validate、vue-resource 等 Vue 插件\n* 熟练掌握 ES5、ES6、jQuery\n* 熟练掌握 git、svn 版本管理工具\n* 熟练掌握 AJAX、Cookie、LocalStorage、SessionStorage\n* 熟练掌握 ElementUi、Bootstrap、Axios、Zepto、iScroll、Swiper、fullPage、EChart 等插件\n* 熟悉 Webpack、Gulp、NPM、Node 等前端构建工具和环境\n* 熟悉 Less、Sass 等 CSS 预处理器\n* 熟悉 Radio、Video、Canvas、SVG 等 H5新 API\n* 熟悉性能优化，性能检测，客户端检测等技术\n* 熟悉谷歌、火狐、IE、Safari 等开发者工具\n* 了解百度、微信、QQ、优酷、保利威视等 SDK\n* 了解正则表达式、网站 SEO 优化、HTTP 协议\n\n工作经历\n----\n1. 数字尾巴科技有限公司\n2. 中软国际科技服务有限公司(深圳分公司)\n----\n\n项目经验\n----\n#### [鲸跃汽车](https://www.whalegogo.com)(官网和 WAP)\n实现 ui 设计师提供的设计图，持续跟进项目的迭代和维护。 2017.04-至今\n\n作为新出行手足兄弟网站，专注豪华车分享体验平台。项目拥有新出行的所有功能，并再基础上使用全新的 框架，运用 MVVM 模式进行开发。\nPC 端：\n* 使用 vue 服务端渲染，node 作为中间层搭建，为了解决单页面网站 SEO 问题；\n* 使用 ElementUI 框架作为 css 框架；\n* 使用 vue-router 管理路由，并实现路由懒加载，路由重定向等；\n* 使用 vuex 实现数据状态的管理；\n* 使用 vue-lazyload 实现图片懒加载，优化浏览性能；\n* 使用 photoswipe 实现点击图片展现查看大图相册效果；\n* 使用 vee-validate 处理表单验证；\n* 使用 vue-awesome-swiper 实现首页3D 轮播图；\n* 使用 vue-core-image-upload 实现用户头像裁剪；\n* 使用 vue-infinite-loading 实现搜索页滚动加载更多；\n* 使用 vue-resource 作为 http 请求；\n* 使用 less 进行 CSS 预编译；\n* 接入百度分享 API，可以分享到微博、QQ、微信等；\n* 接入优酷 API 播放文章视频；\n* 使用百度编辑器实现编辑、发布文章；\n* 接入站长之家统计流量；\n* 使用 npm 包管理和 webpack 打包工具进行开发；\n* 使用 git 进行代码管理；\nWAP 端使用技术和 PC 端大致相同，主要区别在于：\n* 使用 vue-cli 脚手架搭建；\n* 使用自适应布局适配手机和平板；\n* 接入微信 API，可分享到朋友圈，发送给朋友等；\n* 使用七牛云压缩图片；\n* WAP 文章详情页内嵌入鲸跃汽车 APP 中。\n\n#### [新出行](https://www.xchuxing.com)(官网和 WAP)\n实现 ui 设计师提供的设计图，持续跟进项目的迭代和维护。 2016.06-至今\n\n新出行是一个提供全面的新能源汽车体验分享平台，具有汽车体验、生活方式、线上报名活动以及直播车展 等;\n* 使用 jQurey 作为核心框架，页面采用 rem 进行布局;\n* 使用 HTML5的 LocalStorage 缓存技术实现页面的数据缓存;\n* 用到 swiper、animate.css、HTML5+CSS3实现页面交互; \n* 使用 less 进行预编译。\n\n#### [数字尾巴](https://www.dgtle.com)(官网和 WAP)\n\n实现 ui 设计师提供的设计图，持续跟进项目的迭代和维护。2015.08-至今\n\n数字尾巴是一个分享数码产品的使用体验的平台，拥有着上百万的用户量。每日拥有数万人的访问量。 \n* 使用 jQurey 作为核心框架完成页面交互效果，页面动态效果;\n* 使用 template.js 模板引擎进行页面数据渲染;\n* 使用图片懒加载功能显示商品提高页面的响应速度;\n* 引入了 iScroll、Swiper 等插件实现轮播图、页面部分内容的滚动; \n* 使用 less 进行预编译，使用 git 进行代码管理以及版本的迭代。\n\n#### 深圳房地产经纪行业协会综合服务系统(PC、微信端)\n主要负责 PC 端“协会”模块和微信端 2014.07-2015.07\n\n本项目是为深圳房地产中介协会开发的服务管理系统。\n* 使用 AngularJS+Bootstrap 搭建，前后端分离式团队开发，使用 SVN 管理项目代码; \n* 使用 Respond.js、html5.js、es5-shim.min.js 插件兼容 IE6、7、8;\n* 使用到 Animate.css 实现常用过渡动画;\n* 使用 ocLazyLoad.js 实现按需加载;\n* 使用 angular-locale_zh-cn.js 实现日期选框;\n* 使用保利卫视和乐视 Tv 视频插件提供视频播放和断点续播。\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){var n=g()(p.a.mark(function n(){return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),showHtml:function(){var n=this;return new m.a(function(t,e){n.enableHtml=!0,t()})},progressivelyShowStyle:function(n){var t=this;return new m.a(function(e,r){var o=t.interval,i=g()(p.a.mark(function t(){var r,a,s,u,l,c=this;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.fullStyle[n]){t.next=3;break}return t.abrupt("return");case 3:a=this.fullStyle.filter(function(t,e){return e<=n}).map(function(n){return n.length}).reduce(function(n,t){return n+t},0),s=a-r.length,this.currentStyle.length<a?(u=this.currentStyle.length-s,l=r.substring(u,u+1)||" ",this.currentStyle+=l,"\n"===r.substring(u-1,u)&&this.$refs.styleEditor&&this.$nextTick(function(){c.$refs.styleEditor.goBottom()}),setTimeout(i,o)):e();case 6:case"end":return t.stop()}},t,this)})).bind(t);i()})},progressivelyShowResume:function(){var n=this;return new m.a(function(t,e){var r=n.fullMarkdown.length,o=n.interval;!function e(){n.currentMarkdown.length<r?(n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1),n.currentMarkdown[n.currentMarkdown.length-1],"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(e,o)):t()}()})}}},H={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"resume"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:this.currentStyle}}),this._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:this.currentMarkdown,enableHtml:this.enableHtml}})],1)},staticRenderFns:[]};var A=e("VU/8")(C,H,!1,function(n){e("ARNn")},"data-v-9eeaef46",null).exports,R={name:"app",components:{StyleEditor:x,ResumeEditor:T},data:function(){return{interval:10,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* 大家好，我是Lucien\n* 三月了，好多公司都在招聘，你是不是也在准备简历呀。\n* 说做就做，我也来写一份简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\nhtml {\n  color: rgb(222,222,222);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* 太高了 */\n.styleEditor {\n  height: 45vh;\n}\n/* 代码高亮 */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed;\n  top: 50%; left: 0;\n  padding: .5em;  margin: 2.5vh;\n  width: 95vw; height: 45vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"Lucien\n----\n\n现在在 [数字尾巴](http://dgtle.com) 担任高级前端开发工程师。\n\n技能\n----\n\n* 熟练掌握 HTML5+CSS3新特性，根据 W3C 标准像素级实现设计图。\n* 熟练掌握的移动端页面开发、自适应布局、响应式布局、弹性布局，能够处理移动端页面在不同机\n型中的兼容问题\n* 熟练掌握微信页面的开发、微信相关 SDK\n* 熟练掌握 PC 端开发，熟悉不同浏览器的差异，能处理 Chrome、Safari、Firefox、IE 等浏览器的\n兼容问题\n* 熟练掌握 Vue、Angular 等主流前端框架\n* 熟练掌握 vue-router、vue-lazyload、vuex、vee-validate、vue-resource 等 Vue 插件\n* 熟练掌握 ES5、ES6、jQuery\n* 熟练掌握 git、svn 版本管理工具\n* 熟练掌握 AJAX、Cookie、LocalStorage、SessionStorage\n* 熟练掌握 ElementUi、Bootstrap、Axios、Zepto、iScroll、Swiper、fullPage、EChart 等插件\n* 熟悉 Webpack、Gulp、NPM、Node 等前端构建工具和环境\n* 熟悉 Less、Sass 等 CSS 预处理器\n* 熟悉 Radio、Video、Canvas、SVG 等 H5新 API\n* 熟悉性能优化，性能检测，客户端检测等技术\n* 熟悉谷歌、火狐、IE、Safari 等开发者工具\n* 了解百度、微信、QQ、优酷、保利威视等 SDK\n* 了解正则表达式、网站 SEO 优化、HTTP 协议\n\n工作经历\n----\n1. 数字尾巴科技有限公司\n2. 中软国际科技服务有限公司(深圳分公司)\n----\n\n项目经验\n----\n#### [鲸跃汽车](https://www.whalegogo.com)(官网和 WAP)\n实现 ui 设计师提供的设计图，持续跟进项目的迭代和维护。 2017.04-至今\n\n作为新出行手足兄弟网站，专注豪华车分享体验平台。项目拥有新出行的所有功能，并再基础上使用全新的 框架，运用 MVVM 模式进行开发。\nPC 端：\n* 使用 vue 服务端渲染，node 作为中间层搭建，为了解决单页面网站 SEO 问题；\n* 使用 ElementUI 框架作为 css 框架；\n* 使用 vue-router 管理路由，并实现路由懒加载，路由重定向等；\n* 使用 vuex 实现数据状态的管理；\n* 使用 vue-lazyload 实现图片懒加载，优化浏览性能；\n* 使用 photoswipe 实现点击图片展现查看大图相册效果；\n* 使用 vee-validate 处理表单验证；\n* 使用 vue-awesome-swiper 实现首页3D 轮播图；\n* 使用 vue-core-image-upload 实现用户头像裁剪；\n* 使用 vue-infinite-loading 实现搜索页滚动加载更多；\n* 使用 vue-resource 作为 http 请求；\n* 使用 less 进行 CSS 预编译；\n* 接入百度分享 API，可以分享到微博、QQ、微信等；\n* 接入优酷 API 播放文章视频；\n* 使用百度编辑器实现编辑、发布文章；\n* 接入站长之家统计流量；\n* 使用 npm 包管理和 webpack 打包工具进行开发；\n* 使用 git 进行代码管理；\nWAP 端使用技术和 PC 端大致相同，主要区别在于：\n* 使用 vue-cli 脚手架搭建；\n* 使用自适应布局适配手机和平板；\n* 接入微信 API，可分享到朋友圈，发送给朋友等；\n* 使用七牛云压缩图片；\n* WAP 文章详情页内嵌入鲸跃汽车 APP 中。\n\n#### [新出行](https://www.xchuxing.com)(官网和 WAP)\n实现 ui 设计师提供的设计图，持续跟进项目的迭代和维护。 2016.06-至今\n\n新出行是一个提供全面的新能源汽车体验分享平台，具有汽车体验、生活方式、线上报名活动以及直播车展 等;\n* 使用 jQurey 作为核心框架，页面采用 rem 进行布局;\n* 使用 HTML5的 LocalStorage 缓存技术实现页面的数据缓存;\n* 用到 swiper、animate.css、HTML5+CSS3实现页面交互; \n* 使用 less 进行预编译。\n\n#### [数字尾巴](https://www.dgtle.com)(官网和 WAP)\n\n实现 ui 设计师提供的设计图，持续跟进项目的迭代和维护。2015.08-至今\n\n数字尾巴是一个分享数码产品的使用体验的平台，拥有着上百万的用户量。每日拥有数万人的访问量。 \n* 使用 jQurey 作为核心框架完成页面交互效果，页面动态效果;\n* 使用 template.js 模板引擎进行页面数据渲染;\n* 使用图片懒加载功能显示商品提高页面的响应速度;\n* 引入了 iScroll、Swiper 等插件实现轮播图、页面部分内容的滚动; \n* 使用 less 进行预编译，使用 git 进行代码管理以及版本的迭代。\n\n#### 深圳房地产经纪行业协会综合服务系统(PC、微信端)\n主要负责 PC 端“协会”模块和微信端 2014.07-2015.07\n\n本项目是为深圳房地产中介协会开发的服务管理系统。\n* 使用 AngularJS+Bootstrap 搭建，前后端分离式团队开发，使用 SVN 管理项目代码; \n* 使用 Respond.js、html5.js、es5-shim.min.js 插件兼容 IE6、7、8;\n* 使用到 Animate.css 实现常用过渡动画;\n* 使用 ocLazyLoad.js 实现按需加载;\n* 使用 angular-locale_zh-cn.js 实现日期选框;\n* 使用保利卫视和乐视 Tv 视频插件提供视频播放和断点续播。\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){var n=g()(p.a.mark(function n(){return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),showHtml:function(){var n=this;return new m.a(function(t,e){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),t()})},progressivelyShowStyle:function(n){var t=this;return new m.a(function(e,r){var o=t.interval,i=g()(p.a.mark(function t(){var r,a,s,u,l,c=this;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.fullStyle[n]){t.next=3;break}return t.abrupt("return");case 3:a=this.fullStyle.filter(function(t,e){return e<=n}).map(function(n){return n.length}).reduce(function(n,t){return n+t},0),s=a-r.length,this.currentStyle.length<a?(u=this.currentStyle.length-s,l=r.substring(u,u+1)||" ",this.currentStyle+=l,"\n"===r.substring(u-1,u)&&this.$refs.styleEditor&&this.$nextTick(function(){c.$refs.styleEditor.goBottom()}),setTimeout(i,o)):e();case 6:case"end":return t.stop()}},t,this)})).bind(t);i()})},progressivelyShowResume:function(){var n=this;return new m.a(function(t,e){var r=n.fullMarkdown.length,o=n.interval;!function e(){n.currentMarkdown.length<r?(n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1),n.currentMarkdown[n.currentMarkdown.length-1],"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(e,o)):t()}()})}}},I={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:this.currentStyle}}),this._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:this.currentMarkdown,enableHtml:this.enableHtml}})],1)},staticRenderFns:[]};var _=e("VU/8")(R,I,!1,function(n){e("jM77")},"data-v-2df96a7b",null).exports;o.default.use(h.a);var L=document.documentElement.clientWidth,$=new h.a({routes:[{path:"/",name:"index",component:function(n){return Promise.all([e.e(0),e.e(1)]).then(function(){var t=[e("2NXm")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/about",name:"about",component:function(n){return Promise.all([e.e(0),e.e(2)]).then(function(){var t=[e("M8Tx")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/technology",name:"technology",component:function(n){return Promise.all([e.e(0),e.e(9)]).then(function(){var t=[e("aTun")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/other",name:"other",component:function(n){return Promise.all([e.e(0),e.e(10)]).then(function(){var t=[e("LSHy")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/resume",name:"Resume",component:L>600?A:_},{path:"/test",name:"test",component:function(n){return e.e(3).then(function(){var t=[e("Y7I0")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/520",name:"520",component:function(n){return Promise.all([e.e(0),e.e(5)]).then(function(){var t=[e("H2V/")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/animation",name:"animation",component:function(n){return Promise.all([e.e(0),e.e(7)]).then(function(){var t=[e("+2iH")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/yangxiuting",name:"yangxiuting",component:function(n){return Promise.all([e.e(0),e.e(6)]).then(function(){var t=[e("60lM")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/xinrui",name:"xinrui",component:function(n){return Promise.all([e.e(0),e.e(8)]).then(function(){var t=[e("DbXC")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/xinrui1",name:"xinrui1",component:function(n){return Promise.all([e.e(0),e.e(4)]).then(function(){var t=[e("Nse8")];n.apply(null,t)}.bind(this)).catch(e.oe)}}]}),j=e("Y81h"),V=e.n(j);e("UVIz");o.default.use(r.Menu),o.default.use(r.Button),o.default.use(r.Tooltip),o.default.use(r.Tag),o.default.use(r.MenuItem),$.beforeEach(function(n,t,e){V.a.start(),e()}),$.afterEach(function(n){V.a.done()}),o.default.config.productionTip=!1,new o.default({el:"#app",router:$,render:function(n){return n(c)}})},NKsa:function(n,t){},Qj2B:function(n,t){},TJvI:function(n,t){},UVIz:function(n,t){},bvMy:function(n,t){},jM77:function(n,t){},tvR6:function(n,t){},xsZ7:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.5c12f006e41da06e2a50.js.map