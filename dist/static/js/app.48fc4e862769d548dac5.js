webpackJsonp([7],{Fo0t:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});e("xsZ7"),e("bvMy"),e("Fo0t"),e("hbLH");var a=e("8jPK"),i=e("ur6S"),o=e("jL04"),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("canvas",{staticClass:"canvas",attrs:{id:"canvas",width:"909",height:"903"}})])}]};var s=function(t){e("dhGG")},h={name:"App",components:{CanvasStar:e("U5Ua")(o.a,r,!1,s,"data-v-248ca6a2",null).exports},methods:{},mounted:function(){this.$nextTick(function(){})}},u={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{staticStyle:{position:"relative","z-index":"1"}}),this._v(" "),n("Canvas-Star")],1)},staticRenderFns:[]};var d=e("U5Ua")(h,u,!1,function(t){e("abn8")},"data-v-7f7aad1e",null).exports,c=e("byqf");i.default.use(c.a);var l=new c.a({mode:"history",routes:[{path:"/",name:"index",component:function(t){return Promise.all([e.e(0),e.e(1)]).then(function(){var n=[e("2NXm")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/about",name:"about",component:function(t){return Promise.all([e.e(0),e.e(3)]).then(function(){var n=[e("M8Tx")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/technology",name:"technology",component:function(t){return Promise.all([e.e(0),e.e(4)]).then(function(){var n=[e("aTun")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/other",name:"other",component:function(t){return Promise.all([e.e(0),e.e(5)]).then(function(){var n=[e("LSHy")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/resume",name:"Resume",component:function(t){return e.e(2).then(function(){var n=[e("RS+B")];t.apply(null,n)}.bind(this)).catch(e.oe)}}]});i.default.use(a.Menu),i.default.use(a.Button),i.default.use(a.Tooltip),i.default.use(a.Tag),i.default.use(a.MenuItem),i.default.config.productionTip=!1,new i.default({el:"#app",router:l,render:function(t){return t(d)}})},abn8:function(t,n){},bvMy:function(t,n){},dhGG:function(t,n){},hbLH:function(t,n){},jL04:function(t,n,e){"use strict";(function(t){n.a={name:"canvasStar",data:function(){return{isInit:!1}},methods:{initCanvas:function(){setTimeout(function(){var t=document.getElementById("canvas"),n=t.getContext("2d"),e=t.width=document.body.offsetWidth,a=t.height=document.body.offsetHeight,i=217,o=[],r=0,s=document.createElement("canvas"),h=s.getContext("2d");s.width=100,s.height=100;var u=s.width/2,d=h.createRadialGradient(u,u,0,u,u,u);function c(t,n){if(arguments.length<2&&(n=t,t=0),t>n){var e=n;n=t,t=e}return Math.floor(Math.random()*(n-t+1))+t}d.addColorStop(.025,"#fff"),d.addColorStop(.1,"hsl("+i+", 61%, 33%)"),d.addColorStop(.25,"hsl("+i+", 64%, 6%)"),d.addColorStop(1,"transparent"),h.fillStyle=d,h.beginPath(),h.arc(u,u,u,0,2*Math.PI),h.fill();var l=function(){var t,n,i;this.orbitRadius=c((t=e,n=a,i=Math.max(t,n),Math.round(Math.sqrt(i*i+i*i))/2)),this.radius=c(60,this.orbitRadius)/12,this.orbitX=e/2,this.orbitY=a/2,this.timePassed=c(0,1200),this.speed=c(this.orbitRadius)/9e5,this.alpha=c(2,10)/10,o[++r]=this};l.prototype.draw=function(){var t=Math.sin(this.timePassed)*this.orbitRadius+this.orbitX,e=Math.cos(this.timePassed)*this.orbitRadius+this.orbitY,a=c(10);1===a&&this.alpha>0?this.alpha-=.05:2===a&&this.alpha<1&&(this.alpha+=.05),n.globalAlpha=this.alpha,n.drawImage(s,t-this.radius/2,e-this.radius/2,this.radius,this.radius),this.timePassed+=this.speed};for(var f=0;f<1200;f++)new l;!function t(){n.globalCompositeOperation="source-over",n.globalAlpha=.8,n.fillStyle="hsla("+i+", 64%, 6%, 1)",n.fillRect(0,0,e,a),n.globalCompositeOperation="lighter";for(var r=1,s=o.length;r<s;r++)o[r].draw();window.requestAnimationFrame(t)}()},1e3)},initCanvas2:function(){setTimeout(function(){var n=document.getElementById("canvas"),e=n.getContext("2d");n.width=document.body.offsetWidth,n.height=document.body.offsetHeight,e.lineWidth=.3,e.strokeStyle=new h(150).style;var a={x:30*n.width/100,y:30*n.height/100},i={nb:750,distance:50,d_radius:100,array:[]};function o(t){return Math.floor(255*Math.random()+t)}function r(t,n,e){return"rgba("+t+","+n+","+e+", 0.8)"}function s(t,n,e,a){return(t*n+e*a)/(n+a)}function h(t){t=t||0,this.r=o(t),this.g=o(t),this.b=o(t),this.style=r(this.r,this.g,this.b)}function u(){this.x=Math.random()*n.width,this.y=Math.random()*n.height,this.vx=-.5+Math.random(),this.vy=-.5+Math.random(),this.radius=2*Math.random(),this.color=new h}u.prototype={draw:function(){e.beginPath(),e.fillStyle=this.color.style,e.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),e.fill()}},t("canvas").on("mousemove",function(t){a.x=t.pageX,a.y=t.pageY}),t("canvas").on("mouseleave",function(t){a.x=n.width/2,a.y=n.height/2}),function(){for(var t=0;t<i.nb;t++)i.array.push(new u)}(),requestAnimationFrame(function t(){e.clearRect(0,0,n.width,n.height),function(){for(var t=0;t<i.nb;t++){var e=i.array[t];e.y<0||e.y>n.height?(e.vx=e.vx,e.vy=-e.vy):(e.x<0||e.x>n.width)&&(e.vx=-e.vx,e.vy=e.vy),e.x+=e.vx,e.y+=e.vy}}(),function(){for(var t=0;t<i.nb;t++)for(var n=0;n<i.nb;n++){var o=i.array[t],h=i.array[n];o.x-h.x<i.distance&&o.y-h.y<i.distance&&o.x-h.x>-i.distance&&o.y-h.y>-i.distance&&o.x-a.x<i.d_radius&&o.y-a.y<i.d_radius&&o.x-a.x>-i.d_radius&&o.y-a.y>-i.d_radius&&(e.beginPath(),e.strokeStyle=(d=h,c=(u=o).color,l=d.color,f=s(c.r,u.radius,l.r,d.radius),v=s(c.g,u.radius,l.g,d.radius),m=s(c.b,u.radius,l.b,d.radius),r(Math.floor(f),Math.floor(v),Math.floor(m))),e.moveTo(o.x,o.y),e.lineTo(h.x,h.y),e.stroke(),e.closePath())}var u,d,c,l,f,v,m}(),function(){for(var t=0;t<i.nb;t++)i.array[t].draw()}(),requestAnimationFrame(t)})},1e3)},initCanvas3:function(){document.addEventListener("touchmove",function(t){t.preventDefault()});var t,n=document.getElementById("canvas"),e=n.getContext("2d"),a=window.devicePixelRatio||1,i=document.body.offsetWidth,o=window.innerHeight-60,r=90,s=Math,h=0,u=2*s.PI,d=s.cos,c=s.random;function l(){for(e.clearRect(0,0,i,o),t=[{x:0,y:.7*o+r},{x:0,y:.7*o-r}];t[1].x<i+r;)f(t[0],t[1])}function f(n,a){e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(a.x,a.y);var i=a.x+(2*c()-.25)*r,s=function t(n){var e=n+(2*c()-1.1)*r;return e>o||e<0?t(n):e}(a.y);e.lineTo(i,s),e.closePath(),h-=u/-50,e.fillStyle="#"+(127*d(h)+128<<16|127*d(h+u/3)+128<<8|127*d(h+u/3*2)+128).toString(16),e.fill(),t[0]=t[1],t[1]={x:i,y:s}}n.width=i*a,n.height=o*a,e.scale(a,a),e.globalAlpha=.6,document.onclick=l,document.ontouchstart=l,l()}},mounted:function(){var t=this;this.$nextTick(function(){t.initCanvas3()})}}}).call(n,e("CQw/"))},xsZ7:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.48fc4e862769d548dac5.js.map