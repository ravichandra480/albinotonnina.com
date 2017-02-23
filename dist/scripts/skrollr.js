/*! albinotonnina by Albino Tonnina - v1.2.0 - 2017-02-23
* http://https://github.com/albinotonnina/albinotonnina.com/
* Copyright (c) 2017 Albino Tonnina; Licensed MIT */
!function(a,b){"use strict";var c,d=[],e=/@-skrollr-keyframes\s+([\w-]+)/g,f=/\s*\{\s*((?:[^{]+\{[^}]*\}\s*)+?)\s*\}/g,g=/([\w\-]+)\s*\{([^}]+)\}/g,h=/-skrollr-animation-name\s*:\s*([\w-]+)/g,i=/-skrollr-(anchor-target|smooth-scrolling|emit-events|menu-offset)\s*:\s*['"]([^'"]+)['"]/g,j=function(b){var c=new XMLHttpRequest;try{c.open("GET",b,!1),c.send(null)}catch(d){a.XDomainRequest&&(c=new XDomainRequest,c.open("GET",b,!1),c.send(null))}return c.responseText},k=function(b){for(var e=0;b.length>e;e++){var f=b[e];if("LINK"===f.tagName){if(null===f.getAttribute("data-skrollr-stylesheet"))continue;if(a.matchMedia){var g=f.getAttribute("media");if(g&&!matchMedia(g).matches)continue}c=j(f.href)}else c=f.textContent||f.innerText||f.innerHTML;c&&d.push(c)}d.reverse();for(var h={},i=[],k=[],m=0;d.length>m;m++)c=d[m],l(c,h),n(c,i),o(c,k);p(h,i),q(k)},l=function(a,b){e.lastIndex=0;for(var c,d,h,i;null!==(c=e.exec(a));)for(f.lastIndex=e.lastIndex,d=f.exec(a),g.lastIndex=0,i=b[c[1]]={};null!==(h=g.exec(d[1]));)i[h[1]]=h[2].replace(/[\n\r\t]/g,"")},m=function(a,b){for(var c,d=b;d--&&"{"!==a.charAt(d););for(c=d;c--&&"}"!==a.charAt(c-1););return a.substring(c,d).replace(/[\n\r\t]/g,"")},n=function(a,b){var c,d;for(h.lastIndex=0;null!==(c=h.exec(a));)d=m(a,h.lastIndex),b.push([d,c[1]])},o=function(a,b){var c,d;for(i.lastIndex=0;null!==(c=i.exec(a));)d=m(a,i.lastIndex),b.push([d,c[1],c[2]])},p=function(a,c){for(var d,e,f,g,h,i,j,k=0;c.length>k;k++)if(d=b.querySelectorAll(c[k][0])){e=a[c[k][1]];for(f in e)for(g=0;d.length>g;g++)j=d[g],h="data-"+f,i=e[f],j.hasAttribute(h)&&(i+=j.getAttribute(h)),j.setAttribute(h,i)}},q=function(a){for(var c,d,e,f,g,h=0;a.length>h;h++)if(c=a[h],d=b.querySelectorAll(c[0]),e="data-"+c[1],f=c[2],d)for(g=0;d.length>g;g++)d[g].setAttribute(e,f)};k(b.querySelectorAll("link, style"))}(window,document),function(a,b,c){"use strict";function d(c){if(e=b.documentElement,f=b.body,S(),ga=this,c=c||{},la=c.constants||{},c.easing)for(var d in c.easing)V[d]=c.easing[d];sa=c.edgeStrategy||"set",ja={beforerender:c.beforerender,render:c.render,keyframe:c.keyframe},ka=c.forceHeight!==!1,ka&&(Ja=c.scale||1),ma=c.mobileDeceleration||y,oa=c.smoothScrolling!==!1,pa=c.smoothScrollingDuration||z,qa={targetTop:ga.getScrollTop()},Ra=(c.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||a.opera)})(),Ra?(ia=b.getElementById("skrollr-body"),ia&&fa(),W(),Da(e,[s,v],[t])):Da(e,[s,u],[t]),ga.refresh(),va(a,"resize orientationchange",function(){var a=e.clientWidth,b=e.clientHeight;(b!==Oa||a!==Na)&&(Oa=b,Na=a,Pa=!0)});var g=T();return function h(){Z(),ua=g(h)}(),ga}var e,f,g={get:function(){return ga},init:function(a){return ga||new d(a)},VERSION:"0.6.26"},h=Object.prototype.hasOwnProperty,i=a.Math,j=a.getComputedStyle,k="touchstart",l="touchmove",m="touchcancel",n="touchend",o="skrollable",p=o+"-before",q=o+"-between",r=o+"-after",s="skrollr",t="no-"+s,u=s+"-desktop",v=s+"-mobile",w="linear",x=1e3,y=.004,z=200,A="start",B="end",C="center",D="bottom",E="___skrollable_id",F=/^(?:input|textarea|button|select)$/i,G=/^\s+|\s+$/g,H=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,I=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,J=/^(@?[a-z\-]+)\[(\w+)\]$/,K=/-([a-z0-9_])/g,L=function(a,b){return b.toUpperCase()},M=/[\-+]?[\d]*\.?[\d]+/g,N=/\{\?\}/g,O=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,P=/[a-z\-]+-gradient/g,Q="",R="",S=function(){var a=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(j){var b=j(f,null);for(var d in b)if(Q=d.match(a)||+d==d&&b[d].match(a))break;if(!Q)return Q=R="",c;Q=Q[0],"-"===Q.slice(0,1)?(R=Q,Q={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[Q]):R="-"+Q.toLowerCase()+"-"}},T=function(){var b=a.requestAnimationFrame||a[Q.toLowerCase()+"RequestAnimationFrame"],c=Ga();return(Ra||!b)&&(b=function(b){var d=Ga()-c,e=i.max(0,1e3/60-d);return a.setTimeout(function(){c=Ga(),b()},e)}),b},U=function(){var b=a.cancelAnimationFrame||a[Q.toLowerCase()+"CancelAnimationFrame"];return(Ra||!b)&&(b=function(b){return a.clearTimeout(b)}),b},V={begin:function(){return 0},end:function(){return 1},linear:function(a){return a},quadratic:function(a){return a*a},cubic:function(a){return a*a*a},swing:function(a){return-i.cos(a*i.PI)/2+.5},sqrt:function(a){return i.sqrt(a)},outCubic:function(a){return i.pow(a-1,3)+1},bounce:function(a){var b;if(.5083>=a)b=3;else if(.8489>=a)b=9;else if(.96208>=a)b=27;else{if(!(.99981>=a))return 1;b=91}return 1-i.abs(3*i.cos(1.028*a*b)/b)}};d.prototype.refresh=function(a){var d,e,f=!1;for(a===c?(f=!0,ha=[],Qa=0,a=b.getElementsByTagName("*")):a.length===c&&(a=[a]),d=0,e=a.length;e>d;d++){var g=a[d],h=g,i=[],j=oa,k=sa,l=!1;if(f&&E in g&&delete g[E],g.attributes){for(var m=0,n=g.attributes.length;n>m;m++){var p=g.attributes[m];if("data-anchor-target"!==p.name)if("data-smooth-scrolling"!==p.name)if("data-edge-strategy"!==p.name)if("data-emit-events"!==p.name){var q=p.name.match(H);if(null!==q){var r={props:p.value,element:g,eventType:p.name.replace(K,L)};i.push(r);var s=q[1];s&&(r.constant=s.substr(1));var t=q[2];/p$/.test(t)?(r.isPercentage=!0,r.offset=(0|t.slice(0,-1))/100):r.offset=0|t;var u=q[3],v=q[4]||u;u&&u!==A&&u!==B?(r.mode="relative",r.anchors=[u,v]):(r.mode="absolute",u===B?r.isEnd=!0:r.isPercentage||(r.offset=r.offset*Ja))}}else l=!0;else k=p.value;else j="off"!==p.value;else if(h=b.querySelector(p.value),null===h)throw'Unable to find anchor target "'+p.value+'"'}if(i.length){var w,x,y;!f&&E in g?(y=g[E],w=ha[y].styleAttr,x=ha[y].classAttr):(y=g[E]=Qa++,w=g.style.cssText,x=Ca(g)),ha[y]={element:g,styleAttr:w,classAttr:x,anchorTarget:h,keyFrames:i,smoothScrolling:j,edgeStrategy:k,emitEvents:l,lastFrameIndex:-1},Da(g,[o],[])}}}for(za(),d=0,e=a.length;e>d;d++){var z=ha[a[d][E]];z!==c&&($(z),aa(z))}return ga},d.prototype.relativeToAbsolute=function(a,b,c){var d=e.clientHeight,f=a.getBoundingClientRect(),g=f.top,h=f.bottom-f.top;return b===D?g-=d:b===C&&(g-=d/2),c===D?g+=h:c===C&&(g+=h/2),g+=ga.getScrollTop(),0|g+.5},d.prototype.animateTo=function(a,b){b=b||{};var d=Ga(),e=ga.getScrollTop();return na={startTop:e,topDiff:a-e,targetTop:a,duration:b.duration||x,startTime:d,endTime:d+(b.duration||x),easing:V[b.easing||w],done:b.done},na.topDiff||(na.done&&na.done.call(ga,!1),na=c),ga},d.prototype.stopAnimateTo=function(){na&&na.done&&na.done.call(ga,!0),na=c},d.prototype.isAnimatingTo=function(){return!!na},d.prototype.isMobile=function(){return Ra},d.prototype.setScrollTop=function(b,c){return ra=c===!0,Ra?Sa=i.min(i.max(b,0),Ia):a.scrollTo(0,b),ga},d.prototype.getScrollTop=function(){return Ra?Sa:a.pageYOffset||e.scrollTop||f.scrollTop||0},d.prototype.getMaxScrollTop=function(){return Ia},d.prototype.on=function(a,b){return ja[a]=b,ga},d.prototype.off=function(a){return delete ja[a],ga},d.prototype.destroy=function(){var a=U();a(ua),xa(),Da(e,[t],[s,u,v]);for(var b=0,d=ha.length;d>b;b++)ea(ha[b].element);e.style.overflow=f.style.overflow="",e.style.height=f.style.height="",ia&&g.setStyle(ia,"transform","none"),ga=c,ia=c,ja=c,ka=c,Ia=0,Ja=1,la=c,ma=c,Ka="down",La=-1,Na=0,Oa=0,Pa=!1,na=c,oa=c,pa=c,qa=c,ra=c,Qa=0,sa=c,Ra=!1,Sa=0,ta=c};var W=function(){var d,g,h,j,o,p,q,r,s,t,u,v;va(e,[k,l,m,n].join(" "),function(a){var e=a.changedTouches[0];for(j=a.target;3===j.nodeType;)j=j.parentNode;switch(o=e.clientY,p=e.clientX,t=a.timeStamp,F.test(j.tagName)||a.preventDefault(),a.type){case k:d&&d.blur(),ga.stopAnimateTo(),d=j,g=q=o,h=p,s=t;break;case l:F.test(j.tagName)&&b.activeElement!==j&&a.preventDefault(),r=o-q,v=t-u,ga.setScrollTop(Sa-r,!0),q=o,u=t;break;default:case m:case n:var f=g-o,w=h-p,x=w*w+f*f;if(49>x){if(!F.test(d.tagName)){d.focus();var y=b.createEvent("MouseEvents");y.initMouseEvent("click",!0,!0,a.view,1,e.screenX,e.screenY,e.clientX,e.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),d.dispatchEvent(y)}return}d=c;var z=r/v;z=i.max(i.min(z,3),-3);var A=i.abs(z/ma),B=z*A+.5*ma*A*A,C=ga.getScrollTop()-B,D=0;C>Ia?(D=(Ia-C)/B,C=Ia):0>C&&(D=-C/B,C=0),A*=1-D,ga.animateTo(0|C+.5,{easing:"outCubic",duration:A})}}),a.scrollTo(0,0),e.style.overflow=f.style.overflow="hidden"},X=function(){var a,b,c,d,f,g,h,j,k,l,m,n=e.clientHeight,o=Aa();for(j=0,k=ha.length;k>j;j++)for(a=ha[j],b=a.element,c=a.anchorTarget,d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],l=h.offset,m=o[h.constant]||0,h.frame=l,h.isPercentage&&(l*=n,h.frame=l),"relative"===h.mode&&(ea(b),h.frame=ga.relativeToAbsolute(c,h.anchors[0],h.anchors[1])-l,ea(b,!0)),h.frame+=m,ka&&!h.isEnd&&h.frame>Ia&&(Ia=h.frame);for(Ia=i.max(Ia,Ba()),j=0,k=ha.length;k>j;j++){for(a=ha[j],d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],m=o[h.constant]||0,h.isEnd&&(h.frame=Ia-h.offset+m);a.keyFrames.sort(Ha)}},Y=function(a,b){for(var c=0,d=ha.length;d>c;c++){var e,f,i=ha[c],j=i.element,k=i.smoothScrolling?a:b,l=i.keyFrames,m=l.length,n=l[0],s=l[l.length-1],t=n.frame>k,u=k>s.frame,v=t?n:s,w=i.emitEvents,x=i.lastFrameIndex;if(t||u){if(t&&-1===i.edge||u&&1===i.edge)continue;switch(t?(Da(j,[p],[r,q]),w&&x>-1&&(ya(j,n.eventType,Ka),i.lastFrameIndex=-1)):(Da(j,[r],[p,q]),w&&m>x&&(ya(j,s.eventType,Ka),i.lastFrameIndex=m)),i.edge=t?-1:1,i.edgeStrategy){case"reset":ea(j);continue;case"ease":k=v.frame;break;default:case"set":var y=v.props;for(e in y)h.call(y,e)&&(f=da(y[e].value),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f));continue}}else 0!==i.edge&&(Da(j,[o,q],[p,r]),i.edge=0);for(var z=0;m-1>z;z++)if(k>=l[z].frame&&l[z+1].frame>=k){var A=l[z],B=l[z+1];for(e in A.props)if(h.call(A.props,e)){var C=(k-A.frame)/(B.frame-A.frame);C=A.props[e].easing(C),f=ca(A.props[e].value,B.props[e].value,C),f=da(f),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f)}w&&x!==z&&("down"===Ka?ya(j,A.eventType,Ka):ya(j,B.eventType,Ka),i.lastFrameIndex=z);break}}},Z=function(){Pa&&(Pa=!1,za());var a,b,d=ga.getScrollTop(),e=Ga();if(na)e>=na.endTime?(d=na.targetTop,a=na.done,na=c):(b=na.easing((e-na.startTime)/na.duration),d=0|na.startTop+b*na.topDiff),ga.setScrollTop(d,!0);else if(!ra){var f=qa.targetTop-d;f&&(qa={startTop:La,topDiff:d-La,targetTop:d,startTime:Ma,endTime:Ma+pa}),qa.endTime>=e&&(b=V.sqrt((e-qa.startTime)/pa),d=0|qa.startTop+b*qa.topDiff)}if(Ra&&ia&&g.setStyle(ia,"transform","translate(0, "+-Sa+"px) "+ta),ra||La!==d){Ka=d>La?"down":La>d?"up":Ka,ra=!1;var h={curTop:d,lastTop:La,maxTop:Ia,direction:Ka},i=ja.beforerender&&ja.beforerender.call(ga,h);i!==!1&&(Y(d,ga.getScrollTop()),La=d,ja.render&&ja.render.call(ga,h)),a&&a.call(ga,!1)}Ma=e},$=function(a){for(var b=0,c=a.keyFrames.length;c>b;b++){for(var d,e,f,g,h=a.keyFrames[b],i={};null!==(g=I.exec(h.props));)f=g[1],e=g[2],d=f.match(J),null!==d?(f=d[1],d=d[2]):d=w,e=e.indexOf("!")?_(e):[e.slice(1)],i[f]={value:e,easing:V[d]};h.props=i}},_=function(a){var b=[];return O.lastIndex=0,a=a.replace(O,function(a){return a.replace(M,function(a){return 100*(a/255)+"%"})}),R&&(P.lastIndex=0,a=a.replace(P,function(a){return R+a})),a=a.replace(M,function(a){return b.push(+a),"{?}"}),b.unshift(a),b},aa=function(a){var b,c,d={};for(b=0,c=a.keyFrames.length;c>b;b++)ba(a.keyFrames[b],d);for(d={},b=a.keyFrames.length-1;b>=0;b--)ba(a.keyFrames[b],d)},ba=function(a,b){var c;for(c in b)h.call(a.props,c)||(a.props[c]=b[c]);for(c in a.props)b[c]=a.props[c]},ca=function(a,b,c){var d,e=a.length;if(e!==b.length)throw"Can't interpolate between \""+a[0]+'" and "'+b[0]+'"';var f=[a[0]];for(d=1;e>d;d++)f[d]=a[d]+(b[d]-a[d])*c;return f},da=function(a){var b=1;return N.lastIndex=0,a[0].replace(N,function(){return a[b++]})},ea=function(a,b){a=[].concat(a);for(var c,d,e=0,f=a.length;f>e;e++)d=a[e],c=ha[d[E]],c&&(b?(d.style.cssText=c.dirtyStyleAttr,Da(d,c.dirtyClassAttr)):(c.dirtyStyleAttr=d.style.cssText,c.dirtyClassAttr=Ca(d),d.style.cssText=c.styleAttr,Da(d,c.classAttr)))},fa=function(){ta="translateZ(0)",g.setStyle(ia,"transform",ta);var a=j(ia),b=a.getPropertyValue("transform"),c=a.getPropertyValue(R+"transform"),d=b&&"none"!==b||c&&"none"!==c;d||(ta="")};g.setStyle=function(a,b,c){var d=a.style;if(b=b.replace(K,L).replace("-",""),"zIndex"===b)d[b]=isNaN(c)?c:""+(0|c);else if("float"===b)d.styleFloat=d.cssFloat=c;else try{Q&&(d[Q+b.slice(0,1).toUpperCase()+b.slice(1)]=c),d[b]=c}catch(e){}};var ga,ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua,va=g.addEvent=function(b,c,d){var e=function(b){return b=b||a.event,b.target||(b.target=b.srcElement),b.preventDefault||(b.preventDefault=function(){b.returnValue=!1,b.defaultPrevented=!0}),d.call(this,b)};c=c.split(" ");for(var f,g=0,h=c.length;h>g;g++)f=c[g],b.addEventListener?b.addEventListener(f,d,!1):b.attachEvent("on"+f,e),Ta.push({element:b,name:f,listener:d})},wa=g.removeEvent=function(a,b,c){b=b.split(" ");for(var d=0,e=b.length;e>d;d++)a.removeEventListener?a.removeEventListener(b[d],c,!1):a.detachEvent("on"+b[d],c)},xa=function(){for(var a,b=0,c=Ta.length;c>b;b++)a=Ta[b],wa(a.element,a.name,a.listener);Ta=[]},ya=function(a,b,c){ja.keyframe&&ja.keyframe.call(ga,a,b,c)},za=function(){var a=ga.getScrollTop();Ia=0,ka&&!Ra&&(f.style.height=""),X(),ka&&!Ra&&(f.style.height=Ia+e.clientHeight+"px"),Ra?ga.setScrollTop(i.min(ga.getScrollTop(),Ia)):ga.setScrollTop(a,!0),ra=!0},Aa=function(){var a,b,c=e.clientHeight,d={};for(a in la)b=la[a],"function"==typeof b?b=b.call(ga):/p$/.test(b)&&(b=b.slice(0,-1)/100*c),d[a]=b;return d},Ba=function(){var a=ia&&ia.offsetHeight||0,b=i.max(a,f.scrollHeight,f.offsetHeight,e.scrollHeight,e.offsetHeight,e.clientHeight);return b-e.clientHeight},Ca=function(b){var c="className";return a.SVGElement&&b instanceof a.SVGElement&&(b=b[c],c="baseVal"),b[c]},Da=function(b,d,e){var f="className";if(a.SVGElement&&b instanceof a.SVGElement&&(b=b[f],f="baseVal"),e===c)return b[f]=d,c;for(var g=b[f],h=0,i=e.length;i>h;h++)g=Fa(g).replace(Fa(e[h])," ");g=Ea(g);for(var j=0,k=d.length;k>j;j++)-1===Fa(g).indexOf(Fa(d[j]))&&(g+=" "+d[j]);b[f]=Ea(g)},Ea=function(a){return a.replace(G,"")},Fa=function(a){return" "+a+" "},Ga=Date.now||function(){return+new Date},Ha=function(a,b){return a.frame-b.frame},Ia=0,Ja=1,Ka="down",La=-1,Ma=Ga(),Na=0,Oa=0,Pa=!1,Qa=0,Ra=!1,Sa=0,Ta=[];"function"==typeof define&&define.amd?define("skrollr",function(){return g}):"undefined"!=typeof module&&module.exports?module.exports=g:a.skrollr=g}(window,document),function(a,b){"use strict";var c=500,d="sqrt",e=1,f="data-menu-offset",g=b.skrollr,h=b.history,i=!!h.pushState,j=function(b){return"A"===b.tagName||"text"===b.tagName?b:b===a?!1:j(b.parentNode)},k=function(a){if(1===a.which||0===a.button){var b=j(a.target);b&&l(b)&&a.preventDefault()}},l=function(b,c){var d=new RegExp("sc-menu[0-9]"),e=d.test(b.id);if(!e)return!1;var g,h,i=b.id.replace("sc-menu","scene"),j="#"+i;if(h=s?s(b):u[i].begin+u[i].menuoffset,null!==h)g=/p$/.test(h)?h.slice(0,-1)/100*a.documentElement.clientHeight:+h*t;else{var k=a.getElementById(j.substr(1));if(!k)return!1;g=o.relativeToAbsolute(k,"top","top");var l=k.getAttribute(f);null!==l&&(g+=+l)}return r&&!c?o.animateTo(g,{duration:q(o.getScrollTop(),g),easing:p}):n(function(){o.setScrollTop(g)}),!0},m=function(){if(b.location.hash&&a.querySelector){var c=a.querySelector('a[href="'+b.location.hash+'"]');c&&l(c,!0)}},n=function(a){b.setTimeout(a,1)};g.menu={},g.menu.init=function(f,h){o=f,h=h||{},u=h.scenes||{},p=h.easing||d,r=h.animate!==!1,q=h.duration||c,s=h.handleLink,t=h.scale||e,"number"==typeof q&&(q=function(a){return function(){return a}}(q)),g.addEvent(a,"click",k),i&&g.addEvent(b,"popstate",function(a){var b=a.state||{},c=b.top||0;n(function(){o.setScrollTop(c)})},!1),m()};var o,p,q,r,s,t,u;n(function(){b.location.hash&&b.scrollTo(0,0)})}(document,window),function(a,b){"use strict";var c=b.setStyle;b.setStyle=function(a,b,d){c.apply(this,arguments);a.style;"transform"===b&&a.setAttribute("transform",d.replace(/(deg|px)/gi,"")),"d"===b&&a.setAttribute("d",d)}}(document,window.skrollr);