webpackJsonp([7],{Fo0t:function(t,n){},NHnr:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});a("hbLH"),a("xsZ7"),a("bvMy"),a("Fo0t");var e=a("8jPK"),i=a.n(e),o=a("Xo7W"),r=a("j8j6"),s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("canvas",{staticClass:"canvas",attrs:{id:"canvas",width:"909",height:"903"}})])}]};var h=function(t){a("UAd2")},u={name:"App",components:{CanvasStar:a("U5Ua")(r.a,s,!1,h,"data-v-248ca6a2",null).exports},methods:{},mounted:function(){this.$nextTick(function(){})}},c={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{staticStyle:{position:"relative","z-index":"1"}}),this._v(" "),n("Canvas-Star")],1)},staticRenderFns:[]};var d=a("U5Ua")(u,c,!1,function(t){a("cmUd")},"data-v-7f7aad1e",null).exports,l=a("byqf");o.default.use(l.a);var f=new l.a({mode:"history",routes:[{path:"/",name:"index",component:function(t){return Promise.all([a.e(0),a.e(1)]).then(function(){var n=[a("2NXm")];t.apply(null,n)}.bind(this)).catch(a.oe)}},{path:"/about",name:"about",component:function(t){return Promise.all([a.e(0),a.e(3)]).then(function(){var n=[a("M8Tx")];t.apply(null,n)}.bind(this)).catch(a.oe)}},{path:"/technology",name:"technology",component:function(t){return Promise.all([a.e(0),a.e(4)]).then(function(){var n=[a("aTun")];t.apply(null,n)}.bind(this)).catch(a.oe)}},{path:"/other",name:"other",component:function(t){return Promise.all([a.e(0),a.e(5)]).then(function(){var n=[a("LSHy")];t.apply(null,n)}.bind(this)).catch(a.oe)}},{path:"/resume",name:"Resume",component:function(t){return a.e(2).then(function(){var n=[a("RS+B")];t.apply(null,n)}.bind(this)).catch(a.oe)}}]}),v=a("dXqY");o.default.use(v.a);var m=new v.a.Store({state:{},mutations:{initCanvas:function(t,n){}}});o.default.config.productionTip=!1,o.default.use(i.a),new o.default({el:"#app",router:f,store:m,render:function(t){return t(d)}})},UAd2:function(t,n){},bvMy:function(t,n){},cmUd:function(t,n){},hbLH:function(t,n){},j8j6:function(t,n,a){"use strict";(function(t){n.a={name:"canvasStar",data:function(){return{isInit:!1}},methods:{initCanvas:function(){setTimeout(function(){var t=document.getElementById("canvas"),n=t.getContext("2d"),a=t.width=document.body.offsetWidth,e=t.height=document.body.offsetHeight,i=217,o=[],r=0,s=document.createElement("canvas"),h=s.getContext("2d");s.width=100,s.height=100;var u=s.width/2,c=h.createRadialGradient(u,u,0,u,u,u);function d(t,n){if(arguments.length<2&&(n=t,t=0),t>n){var a=n;n=t,t=a}return Math.floor(Math.random()*(n-t+1))+t}c.addColorStop(.025,"#fff"),c.addColorStop(.1,"hsl("+i+", 61%, 33%)"),c.addColorStop(.25,"hsl("+i+", 64%, 6%)"),c.addColorStop(1,"transparent"),h.fillStyle=c,h.beginPath(),h.arc(u,u,u,0,2*Math.PI),h.fill();var l=function(){var t,n,i;this.orbitRadius=d((t=a,n=e,i=Math.max(t,n),Math.round(Math.sqrt(i*i+i*i))/2)),this.radius=d(60,this.orbitRadius)/12,this.orbitX=a/2,this.orbitY=e/2,this.timePassed=d(0,1200),this.speed=d(this.orbitRadius)/9e5,this.alpha=d(2,10)/10,o[++r]=this};l.prototype.draw=function(){var t=Math.sin(this.timePassed)*this.orbitRadius+this.orbitX,a=Math.cos(this.timePassed)*this.orbitRadius+this.orbitY,e=d(10);1===e&&this.alpha>0?this.alpha-=.05:2===e&&this.alpha<1&&(this.alpha+=.05),n.globalAlpha=this.alpha,n.drawImage(s,t-this.radius/2,a-this.radius/2,this.radius,this.radius),this.timePassed+=this.speed};for(var f=0;f<1200;f++)new l;!function t(){n.globalCompositeOperation="source-over",n.globalAlpha=.8,n.fillStyle="hsla("+i+", 64%, 6%, 1)",n.fillRect(0,0,a,e),n.globalCompositeOperation="lighter";for(var r=1,s=o.length;r<s;r++)o[r].draw();window.requestAnimationFrame(t)}()},1e3)},initCanvas2:function(){setTimeout(function(){var n=document.getElementById("canvas"),a=n.getContext("2d");n.width=document.body.offsetWidth,n.height=document.body.offsetHeight,a.lineWidth=.3,a.strokeStyle=new h(150).style;var e={x:30*n.width/100,y:30*n.height/100},i={nb:750,distance:50,d_radius:100,array:[]};function o(t){return Math.floor(255*Math.random()+t)}function r(t,n,a){return"rgba("+t+","+n+","+a+", 0.8)"}function s(t,n,a,e){return(t*n+a*e)/(n+e)}function h(t){t=t||0,this.r=o(t),this.g=o(t),this.b=o(t),this.style=r(this.r,this.g,this.b)}function u(){this.x=Math.random()*n.width,this.y=Math.random()*n.height,this.vx=-.5+Math.random(),this.vy=-.5+Math.random(),this.radius=2*Math.random(),this.color=new h}u.prototype={draw:function(){a.beginPath(),a.fillStyle=this.color.style,a.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),a.fill()}},t("canvas").on("mousemove",function(t){e.x=t.pageX,e.y=t.pageY}),t("canvas").on("mouseleave",function(t){e.x=n.width/2,e.y=n.height/2}),function(){for(var t=0;t<i.nb;t++)i.array.push(new u)}(),requestAnimationFrame(function t(){a.clearRect(0,0,n.width,n.height),function(){for(var t=0;t<i.nb;t++){var a=i.array[t];a.y<0||a.y>n.height?(a.vx=a.vx,a.vy=-a.vy):(a.x<0||a.x>n.width)&&(a.vx=-a.vx,a.vy=a.vy),a.x+=a.vx,a.y+=a.vy}}(),function(){for(var t=0;t<i.nb;t++)for(var n=0;n<i.nb;n++){var o=i.array[t],h=i.array[n];o.x-h.x<i.distance&&o.y-h.y<i.distance&&o.x-h.x>-i.distance&&o.y-h.y>-i.distance&&o.x-e.x<i.d_radius&&o.y-e.y<i.d_radius&&o.x-e.x>-i.d_radius&&o.y-e.y>-i.d_radius&&(a.beginPath(),a.strokeStyle=(c=h,d=(u=o).color,l=c.color,f=s(d.r,u.radius,l.r,c.radius),v=s(d.g,u.radius,l.g,c.radius),m=s(d.b,u.radius,l.b,c.radius),r(Math.floor(f),Math.floor(v),Math.floor(m))),a.moveTo(o.x,o.y),a.lineTo(h.x,h.y),a.stroke(),a.closePath())}var u,c,d,l,f,v,m}(),function(){for(var t=0;t<i.nb;t++)i.array[t].draw()}(),requestAnimationFrame(t)})},1e3)},initCanvas3:function(){document.addEventListener("touchmove",function(t){t.preventDefault()});var t,n=document.getElementById("canvas"),a=n.getContext("2d"),e=window.devicePixelRatio||1,i=document.body.offsetWidth,o=window.innerHeight-60,r=90,s=Math,h=0,u=2*s.PI,c=s.cos,d=s.random;function l(){for(a.clearRect(0,0,i,o),t=[{x:0,y:.7*o+r},{x:0,y:.7*o-r}];t[1].x<i+r;)f(t[0],t[1])}function f(n,e){a.beginPath(),a.moveTo(n.x,n.y),a.lineTo(e.x,e.y);var i=e.x+(2*d()-.25)*r,s=function t(n){var a=n+(2*d()-1.1)*r;return a>o||a<0?t(n):a}(e.y);a.lineTo(i,s),a.closePath(),h-=u/-50,a.fillStyle="#"+(127*c(h)+128<<16|127*c(h+u/3)+128<<8|127*c(h+u/3*2)+128).toString(16),a.fill(),t[0]=t[1],t[1]={x:i,y:s}}n.width=i*e,n.height=o*e,a.scale(e,e),a.globalAlpha=.6,document.onclick=l,document.ontouchstart=l,l()}},mounted:function(){var t=this;this.$nextTick(function(){t.initCanvas3()})}}}).call(n,a("CQw/"))},xsZ7:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.9d3c854cce3ac90f0410.js.map