webpackJsonp([6],{1:function(t,e,n){t.exports=n("BB2D")},BB2D:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("mtWM"),a=n.n(i),o=n("Lokx"),s=n.n(o),r=n("HNiq"),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};window.game_slots_config=function(){var t=this;return t.symbols=[],t.game_slots_symbols=document.getElementById("game_slots_symbols"),!!t.game_slots_symbols&&(t.bind=function(){for(var e in t.game_slots_symbols_items=document.getElementById("game_slots_symbols_items"),t.game_slots_symbols_place=document.getElementById("game_slots_symbols_place"),t.game_slots_symbols_place_input=t.game_slots_symbols_place.getElementsByTagName("input")[0],t.symbols_input=document.getElementById("game_slots_symbols_input"),t.reel_input=document.getElementById("game_slots_reel_input"),t.game_slots_reel_symbols=document.getElementById("game_slots_reel_symbols"),t.game_slots_reels=document.getElementById("game_slots_reels"),t.storage=t.game_slots_symbols.dataset.storage,t.token=t.game_slots_symbols.dataset.token,t.url=t.game_slots_symbols.dataset.url,t.reels_cont=[],t.reels=[[],[],[],[],[]],t.game_slots_reels.children)"object"==l(t.game_slots_reels.children[e])&&(t.reels_cont[t.game_slots_reels.children[e].dataset.idx]=t.game_slots_reels.children[e],t.game_slots_reels.children[e].addEventListener("dragover",t.reel_drop_over,!1),t.game_slots_reels.children[e].addEventListener("drop",t.reel_drop,!1));t.game_slots_symbols_place.addEventListener("click",function(){t.game_slots_symbols_place_input.click()}),t.game_slots_symbols_place_input.addEventListener("change",function(e){var n=[];for(var i in this.files)"object"==l(this.files[i])&&n.push(this.files[i]);t.files_add_process(n),this.value=""}),t.game_slots_symbols_place.addEventListener("dragleave",function(e){t.game_slots_symbols_place.classList.remove("dropover"),e.preventDefault()},!1),t.game_slots_symbols_place.addEventListener("dragover",function(e){t.game_slots_symbols_place.classList.add("dropover"),e.preventDefault()},!1),t.game_slots_symbols_place.addEventListener("drop",function(e){e.preventDefault();var n=[];if(t.game_slots_symbols_place.classList.remove("dropover"),e.dataTransfer.items)for(var i=0;i<e.dataTransfer.items.length;i++){if("file"!==e.dataTransfer.items[i].kind)return t.showFileError();n.push(e.dataTransfer.items[i].getAsFile())}else for(i=0;i<e.dataTransfer.files.length;i++)n.push(e.dataTransfer.files[i]);t.files_add_process(n)},!1)},t.files_add_process=function(e){for(var n in e)if("image/png"!=e[n].type)return t.showFileError();t.game_slots_symbols_place.classList.add("loading");var i=new FormData;for(var n in i.append("_token",t.token),e)i.append("files["+n+"]",e[n]);var o=[];for(var n in t.symbols)o.push(t.symbols[n].filename);i.append("used",o),a.a.post(t.url,i,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){var n=e.data;if(n.success)for(var i in n.files)t.append_symbol(n.files[i]);else t.showFileError();t.game_slots_symbols_place.classList.remove("loading")}).catch(function(t){return console.error(t)})},t.reel_drag_start=function(t){t.dataTransfer.setData("idx",this.dataset.idx)},t.reel_drop_over=function(t){t.preventDefault()},t.reel_drop=function(e){"string"==typeof e.dataTransfer.getData("idx")&&0!=e.dataTransfer.getData("idx").length&&(e.preventDefault(),t.append_reel(this.dataset.idx,e.dataTransfer.getData("idx")),t.updateReelsInput())},t.append_reel=function(e,n){"object"==l(t.reels_cont[e].sortable)&&"function"==typeof t.reels_cont[e].sortable.destroy&&(t.reels_cont[e].sortable.destroy(),delete t.reels_cont[e].sortable),e=parseInt(e),n=parseInt(n);var i=t.reels[e].length;t.reels[e].push(n);var a=document.createElement("div");a.classList.add("symbol"),a.dataset.sym=n,a.dataset.idx=i,a.dataset.reel=e,a.innerHTML='<i class="remove fa fa-times-circle"></i><img draggable="false" src="'+(t.storage+t.symbols[n].filename)+'">',a.getElementsByClassName("remove")[0].addEventListener("click",t.reel_sym_remove),t.reels_cont[e].appendChild(a),t.reels_cont[e].sortable=s.a.create(t.reels_cont[e],{animation:150,onUpdate:t.reel_sort_update})},t.reel_sort_update=function(){var e=this.el.dataset.idx;t.reels[e]=[];var n=0;for(var i in this.el.children)"object"==l(this.el.children[i])&&(this.el.children[i].dataset.idx=n,t.reels[e][n]=parseInt(this.el.children[i].dataset.sym),n++);t.updateReelsInput()},t.reel_sym_remove=function(){var e=this.parentNode,n=e.parentNode;for(var i in n.children)"object"==l(n.children[i])&&parseInt(n.children[i].dataset.idx)>e.dataset.idx&&n.children[i].dataset.idx--;t.reels[e.dataset.reel].splice(e.dataset.idx,1),e.remove(),t.updateReelsInput()},t.append_symbol=function(e){"object"!=(void 0===e?"undefined":l(e))&&((e={filename:e,scatter:!1,wild:!1,w1:0,w1t:"x",w2:0,w2t:"x",w3:0,w3t:"x",w4:0,w4t:"x",w5:0,w5t:"x"}).idx=t.symbols.length);var n=document.createElement("div");e.el=n,t.symbols[e.idx]=e,n.classList.add("symbol"),n.dataset.idx=e.idx,n.innerHTML='\n\t\t\t\t\t\t<div data-idx="'+e.idx+'" class="image">\n\t\t\t\t\t\t\t<img src="'+(t.storage+e.filename)+'">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div data-idx="'+e.idx+'" class="scatter '+(e.scatter?"active":"")+'">'+Object(r.a)("scatter")+'</div>\n\t\t\t\t\t\t<div data-idx="'+e.idx+'" class="wild \t'+(e.wild?"active":"")+'">'+Object(r.a)("wild")+'</div>\n\t\t\t\t\t\t<div class="value">\n\t\t\t\t\t\t\t<div class="label">x1 '+Object(r.a)("pays")+'</div>\n\t\t\t\t\t\t\t<div data-idx="'+e.idx+'" data-win="1" class="type">'+e.w1t+'</div>\n\t\t\t\t\t\t\t<input data-idx="'+e.idx+'" data-win="1" type="number" value="'+e.w1+'">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="value">\n\t\t\t\t\t\t\t<div class="label">x2 '+Object(r.a)("pays")+'</div>\n\t\t\t\t\t\t\t<div data-idx="'+e.idx+'" data-win="2" class="type">'+e.w2t+'</div>\n\t\t\t\t\t\t\t<input data-idx="'+e.idx+'" data-win="2" type="number" value="'+e.w2+'">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="value">\n\t\t\t\t\t\t\t<div class="label">x3 '+Object(r.a)("pays")+'</div>\n\t\t\t\t\t\t\t<div data-idx="'+e.idx+'" data-win="3" class="type">'+e.w3t+'</div>\n\t\t\t\t\t\t\t<input data-idx="'+e.idx+'" data-win="3" type="number" value="'+e.w3+'">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="value">\n\t\t\t\t\t\t\t<div class="label">x4 '+Object(r.a)("pays")+'</div>\n\t\t\t\t\t\t\t<div data-idx="'+e.idx+'" data-win="4" class="type">'+e.w4t+'</div>\n\t\t\t\t\t\t\t<input data-idx="'+e.idx+'" data-win="4" type="number" value="'+e.w4+'">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="value">\n\t\t\t\t\t\t\t<div class="label">x5 '+Object(r.a)("pays")+'</div>\n\t\t\t\t\t\t\t<div data-idx="'+e.idx+'" data-win="5" class="type">'+e.w5t+'</div>\n\t\t\t\t\t\t\t<input data-idx="'+e.idx+'" data-win="5" type="number" value="'+e.w5+'">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div data-idx="'+e.idx+'" class="remove"><i class="fa fa-times-circle"></i></div>\n\t\t\t\t\t\t',t.game_slots_symbols_items.appendChild(n);var i=n.getElementsByClassName("image")[0];for(var a in i.addEventListener("dragleave",t.sym_image_leave),i.addEventListener("dragover",t.sym_image_over),i.addEventListener("drop",t.sym_image_drop),n.getElementsByClassName("scatter")[0].addEventListener("click",t.sym_ch_scatter),n.getElementsByClassName("wild")[0].addEventListener("click",t.sym_ch_wild),i=n.getElementsByClassName("type"))"object"==l(i[a])&&i[a].addEventListener("click",t.sym_ch_type);for(var a in i=n.getElementsByTagName("input"))"object"==l(i[a])&&i[a].addEventListener("change",t.sym_ch_win);n.getElementsByClassName("remove")[0].addEventListener("click",t.sym_rem),t.updateUI(),t.updateSymInput()},t.sym_image_leave=function(t){this.classList.remove("dropover"),t.preventDefault()},t.sym_image_over=function(t){this.classList.add("dropover"),t.preventDefault()},t.sym_image_drop=function(e){e.preventDefault();var n=this;n.classList.remove("dropover");var i=function(){n.classList.add("error"),setTimeout(function(){n.classList.remove("error")},1e3)},o=[];if(e.dataTransfer.items)for(var s=0;s<e.dataTransfer.items.length;s++){if("file"!==e.dataTransfer.items[s].kind)return i();o.push(e.dataTransfer.items[s].getAsFile())}else for(s=0;s<e.dataTransfer.files.length;s++)o.push(e.dataTransfer.files[s]);var r=o[0];if(!r||"image/png"!=r.type)return i();t.symbols[this.dataset.idx].filename="",this.getElementsByTagName("img")[0].src="",t.updateSymInput();var l=new FormData;l.append("_token",t.token),l.append("files[0]",r);var d=[];for(var s in t.symbols)d.push(t.symbols[s].filename);l.append("used",d),a.a.post(t.url,l,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){var a=e.data;a.success?(t.symbols[n.dataset.idx].filename=a.files[0],n.getElementsByTagName("img")[0].src=t.storage+a.files[0],t.updateUI(),t.updateSymInput()):i()}).catch(function(t){return console.error(t)})},t.sym_ch_type=function(){t.symbols[this.dataset.idx]["w"+this.dataset.win+"t"]="x"==t.symbols[this.dataset.idx]["w"+this.dataset.win+"t"]?"+":"x",this.textContent=t.symbols[this.dataset.idx]["w"+this.dataset.win+"t"],t.updateSymInput()},t.sym_ch_win=function(){t.symbols[this.dataset.idx]["w"+this.dataset.win]=this.value,t.updateSymInput()},t.ch_scatter=function(e){t.symbols[e].wild&&t.ch_wild(e),t.symbols[e].scatter=!t.symbols[e].scatter,t.symbols[e].scatter?t.symbols[e].el.getElementsByClassName("scatter")[0].classList.add("active"):t.symbols[e].el.getElementsByClassName("scatter")[0].classList.remove("active")},t.ch_wild=function(e){t.symbols[e].scatter&&t.ch_scatter(e),t.symbols[e].wild=!t.symbols[e].wild,t.symbols[e].wild?t.symbols[e].el.getElementsByClassName("wild")[0].classList.add("active"):t.symbols[e].el.getElementsByClassName("wild")[0].classList.remove("active")},t.sym_ch_scatter=function(){t.ch_scatter(this.dataset.idx),t.updateSymInput()},t.sym_ch_wild=function(){t.ch_wild(this.dataset.idx),t.updateSymInput()},t.sym_rem=function(){var e,n=this.dataset.idx;for(var i in t.symbols[n].el.remove(),t.symbols.splice(n,1),t.symbols){for(var a in t.symbols[i].el.dataset.idx=i,t.symbols[i].idx=i,e=t.symbols[i].el.getElementsByClassName("image"))"object"==l(e[a])&&(e[a].dataset.idx=i);for(var a in e=t.symbols[i].el.getElementsByClassName("scatter"))"object"==l(e[a])&&(e[a].dataset.idx=i);for(var a in e=t.symbols[i].el.getElementsByClassName("wild"))"object"==l(e[a])&&(e[a].dataset.idx=i);for(var a in e=t.symbols[i].el.getElementsByClassName("remove"))"object"==l(e[a])&&(e[a].dataset.idx=i);for(var a in e=t.symbols[i].el.getElementsByClassName("type"))"object"==l(e[a])&&(e[a].dataset.idx=i);for(var a in e=t.symbols[i].el.getElementsByTagName("input"))"object"==l(e[a])&&(e[a].dataset.idx=i)}for(var i in t.reels){var o=[];for(var a in t.reels[i])t.reels[i][a]==n?o.push(a):t.reels[i][a]>n&&t.reels[i][a]--;for(;0!=o.length;)t.reels[i].splice(o.pop(),1)}var s=t.reels;for(var i in t.reels=[[],[],[],[],[]],s)for(var a in t.reels_cont[i].innerHTML="",s[i])t.append_reel(i,s[i][a]);t.updateReelsInput(),t.updateSymInput(),t.updateUI()},t.updateSymInput=function(){t.symbols_input.value=JSON.stringify(t.symbols)},t.updateReelsInput=function(){t.reel_input.value=JSON.stringify(t.reels)},t.showFileError=function(){t.game_slots_symbols_place.classList.add("error"),setTimeout(function(){t.game_slots_symbols_place.classList.remove("error")},5e3)},t.updateUI=function(){t.game_slots_reel_symbols.innerHTML="";for(var e in t.symbols){var n=document.createElement("div");n.classList.add("symbol"),n.dataset.idx=e,n.draggable=!0,n.innerHTML='<img src="'+(t.storage+t.symbols[e].filename)+'">',n.addEventListener("dragstart",t.reel_drag_start),t.game_slots_reel_symbols.appendChild(n)}},t.bind(),t.init=function(){try{var e=JSON.parse(t.symbols_input.value);for(var n in e)t.append_symbol(e[n]);var i=JSON.parse(t.reel_input.value);for(var n in i)for(var a in i[n])t.append_reel(n,i[n][a]);var o=new FormData;o.append("_token",t.token);var s=[];for(var n in t.symbols)s.push(t.symbols[n].filename);o.append("used",s),t.updateUI()}catch(t){}},t.init(),t)},window.addEventListener("DOMContentLoaded",window.game_slots_config)},HNiq:function(t,e,n){"use strict";e.a=function(t){return void 0!==window.i18n&&void 0!==window.i18n[t]?window.i18n[t]:t},e.b=function(t){return void 0!==window.cfg?function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e.split(".").reduce(function(t,e){return t&&void 0!=o(t[e])&&null!=t[e]?t[e]:n},t)}(window.cfg,t):t},e.c=function(t){t.select();try{document.execCommand("copy")}catch(t){}document.getSelection().removeAllRanges(),document.activeElement.blur()},e.g=function(t,e,n,i){new(a.a.extend(t))({propsData:i,parent:e}).$mount(n)},e.e=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},e.h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Math.pow(10,e);return Math.round(t*n)/n},e.f=function(t,e,n){t=""+t;for(;t.length<n;)t=e+t;return t},e.d=s,e.i=function(t){s()?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen()};var i=n("I3G/"),a=n.n(i),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function s(t){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement}},Lokx:function(t,e,n){var i,a;!function(o){"use strict";void 0===(a="function"==typeof(i=o)?i.call(e,n,e,t):i)||(t.exports=a)}(function(){"use strict";if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var t,e,n,i,a,o,s,r,l,d,c,u,h,m,p,f,v,g,_,y,b,w,x,E,D,C=[],T=!1,S=!1,B=!1,N=/\s+/g,L="Sortable"+(new Date).getTime(),I=window,k=I.document,F=I.parseInt,R=I.setTimeout,A=I.jQuery||I.Zepto,M=I.Polymer,O={capture:!1,passive:!1},P="draggable"in k.createElement("div"),X=!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)&&((E=k.createElement("x")).style.cssText="pointer-events:auto","auto"===E.style.pointerEvents),Y=!1,j=!1,H=Math.abs,q=Math.min,U=[],z=[],W=function(t,e){var n=at(t),i=F(n.width),a=ct(t,0,e),o=ct(t,1,e),s=a&&at(a),r=o&&at(o),l=s&&F(s.marginLeft)+F(s.marginRight)+a.getBoundingClientRect().width,d=r&&F(r.marginLeft)+F(r.marginRight)+o.getBoundingClientRect().width;return"flex"===n.display?"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal":a&&("block"===s.display||"grid"===s.display||l>=i&&"none"===n.float||o&&"none"===n.float&&l+d>i)?"vertical":"horizontal"},J=function(t,e){if(!t||!t.getBoundingClientRect)return I;var n=t,i=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var a=at(n);if(n.clientWidth<n.scrollWidth&&("auto"==a.overflowX||"scroll"==a.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==a.overflowY||"scroll"==a.overflowY)){if(!n||!n.getBoundingClientRect||n===k.body)return I;if(i||e)return n;i=!0}}}while(n=n.parentNode);return I},G=ft(function(t,e,n,i){if(e.scroll){var a,o,s,c,u=n?n[L]:window,h=e.scrollSensitivity,m=e.scrollSpeed,p=t.clientX,f=t.clientY,v=window.innerWidth,g=window.innerHeight,y=!1;l!==n&&(V(),r=e.scroll,d=e.scrollFn,!0===r&&(r=J(n,!0),l=r));var b=0,w=r;do{var x;if(w&&w!==I?(o=at(x=w),a=w.getBoundingClientRect(),s=x.clientWidth<x.scrollWidth&&("auto"==o.overflowX||"scroll"==o.overflowX)&&(H(a.right-p)<=h)-(H(a.left-p)<=h),c=x.clientHeight<x.scrollHeight&&("auto"==o.overflowY||"scroll"==o.overflowY)&&(H(a.bottom-f)<=h)-(H(a.top-f)<=h)):w===I&&(x=I,s=(v-p<=h)-(p<=h),c=(g-f<=h)-(f<=h)),!C[b])for(var E=0;E<=b;E++)C[E]||(C[E]={});C[b].vx==s&&C[b].vy==c&&C[b].el===x||(C[b].el=x,C[b].vx=s,C[b].vy=c,clearInterval(C[b].pid),!x||0==s&&0==c||(y=!0,C[b].pid=setInterval(function(){i&&0===this.layer&&$.active._emulateDragOver(!0);var e=C[this.layer].vy?C[this.layer].vy*m:0,n=C[this.layer].vx?C[this.layer].vx*m:0;"function"==typeof d&&"continue"!==d.call(u,n,e,t,_,C[this.layer].el)||(C[this.layer].el===I?I.scrollTo(I.pageXOffset+n,I.pageYOffset+e):(C[this.layer].el.scrollTop+=e,C[this.layer].el.scrollLeft+=n))}.bind({layer:b}),24))),b++}while(e.bubbleScroll&&w!==I&&(w=J(w,!1)));T=y}},30),V=function(){C.forEach(function(t){clearInterval(t.pid)}),C=[]},Z=function(t){function e(t,e){return function(n,i,a,o){var s;if(null==t&&e)s=!0;else if(null==t||!1===t)s=!1;else if(e&&"clone"===t)s=t;else if("function"==typeof t)s=t(n,i,a,o);else{var r=(e?n:i).options.group.name;s=!0===t||"string"==typeof t&&t===r||t.join&&t.indexOf(r)>-1}return s||n.options.group.name&&i.options.group.name&&n.options.group.name===i.options.group.name}}var n={},i=t.group;i&&"object"==typeof i||(i={name:i}),n.name=i.name,n.checkPull=e(i.pull,!0),n.checkPut=e(i.put),n.revertClone=i.revertClone,t.group=n},Q=function(e){t&&t.parentNode[L]&&t.parentNode[L]._computeIsAligned(e)};function $(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=vt({},e),t[L]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,touchStartThreshold:F(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==$.supportPointer&&("PointerEvent"in window||window.navigator&&"msPointerEnabled"in window.navigator)};for(var i in n)!(i in e)&&(e[i]=n[i]);for(var a in"direction"in e||(e.direction=function(){return W(t,e)}),Z(e),null==e.invertedSwapThreshold&&(e.invertedSwapThreshold=e.swapThreshold),this)"_"===a.charAt(0)&&"function"==typeof this[a]&&(this[a]=this[a].bind(this));this.nativeDraggable=!e.forceFallback&&P,et(t,"mousedown",this._onTapStart),et(t,"touchstart",this._onTapStart),e.supportPointer&&et(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(et(t,"dragover",this),et(t,"dragenter",this)),z.push(this._onDragOver),e.store&&e.store.get&&this.sort(e.store.get(this)||[])}function K(t,e,n,i){if(t){n=n||k;do{if(">*"===e&&t.parentNode===n||pt(t,e)||i&&t===n)return t;if(t===n)break}while(t=tt(t))}return null}function tt(t){return t.host&&t!==k&&t.host.nodeType?t.host:t.parentNode}function et(t,e,n){t.addEventListener(e,n,O)}function nt(t,e,n){t.removeEventListener(e,n,O)}function it(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(N," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(N," ")}}function at(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return k.defaultView&&k.defaultView.getComputedStyle?n=k.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function ot(t,e,n){if(t){var i=t.getElementsByTagName(e),a=0,o=i.length;if(n)for(;a<o;a++)n(i[a],a);return i}return[]}function st(t,e,n,a,o,s,r,l,d){var c,u=(t=t||e[L]).options,h="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent?c=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(c=k.createEvent("Event")).initEvent(n,!0,!0),c.to=o||e,c.from=s||e,c.item=a||e,c.clone=i,c.oldIndex=r,c.newIndex=l,c.originalEvent=d,e.dispatchEvent(c),u[h]&&u[h].call(t,c)}function rt(t,e,n,i,a,o,s,r){var l,d,c=t[L],u=c.options.onMove;return window.CustomEvent?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=k.createEvent("Event")).initEvent("move",!0,!0),l.to=e,l.from=t,l.dragged=n,l.draggedRect=i,l.related=a||e,l.relatedRect=o||e.getBoundingClientRect(),l.willInsertAfter=r,l.originalEvent=s,t.dispatchEvent(l),u&&(d=u.call(c,l,s)),d}function lt(t){t.draggable=!1}function dt(){Y=!1}function ct(e,i,a){for(var o=0,s=0,r=e.children;s<r.length;){if("none"!==r[s].style.display&&r[s]!==n&&r[s]!==t&&K(r[s],a.draggable,e,!1)){if(o===i)return r[s];o++}s++}return null}function ut(t){var e=t.lastElementChild;return e===n&&(e=t.children[t.childElementCount-2]),e||null}function ht(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function mt(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"===t.nodeName.toUpperCase()||">*"!==e&&!pt(t,e)||n++;return n}function pt(t,e){if(t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e)}catch(t){return!1}return!1}function ft(t,e){return function(){if(!D){var n=arguments,i=this;D=R(function(){1===n.length?t.call(i,n[0]):t.apply(i,n),D=void 0},e)}}}function vt(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function gt(t){return M&&M.dom?M.dom(t).cloneNode(!0):A?A(t).clone(!0)[0]:t.cloneNode(!0)}function _t(t){return R(t,0)}function yt(t){return clearTimeout(t)}function bt(t){$.active&&t.cancelable&&t.preventDefault()}return $.prototype={constructor:$,_isAligned:!0,_computeIsAligned:function(e,n){var i,a,o,s,r,l,d;j||t&&t.parentNode===this.el&&(!0!==n&&!1!==n&&(n=!!K(e.target,null,t,!0)),this._isAligned=!T&&(n||this._isAligned&&(i=e.clientX,a=e.clientY,this.el,o=this._getDirection(e,null),this.options,s=x||t.getBoundingClientRect(),r="vertical"===o?s.left:s.top,l="vertical"===o?s.right:s.bottom,r<(d="vertical"===o?i:a)&&d<l)),j=!0,R(function(){j=!1},30))},_getDirection:function(e,n){return"function"==typeof this.options.direction?this.options.direction.call(this,e,n,t):this.options.direction},_onTapStart:function(e){var n,i=this,a=this.el,o=this.options,r=o.preventOnFilter,l=e.type,d=e.touches&&e.touches[0],c=(d||e).target,u=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||c,h=o.filter;if(function(t){U.length=0;var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var i=e[n];i.checked&&U.push(i)}}(a),!t&&!(/mousedown|pointerdown/.test(l)&&0!==e.button||o.disabled)&&!u.isContentEditable&&(c=K(c,o.draggable,a,!0))&&s!==c){if(n=mt(c,o.draggable),"function"==typeof h){if(h.call(this,e,c,this))return st(i,u,"filter",c,a,a,n),void(r&&e.cancelable&&e.preventDefault())}else if(h&&(h=h.split(",").some(function(t){if(t=K(u,t.trim(),a,!1))return st(i,t,"filter",c,a,a,n),!0})))return void(r&&e.cancelable&&e.preventDefault());o.handle&&!K(u,o.handle,a,!1)||this._prepareDragStart(e,d,c,n)}},_handleAutoScroll:function(e,n){if(t&&this.options.scroll){var i=e.clientX,a=e.clientY,o=k.elementFromPoint(i,a),s=this;if(n||window.navigator&&window.navigator.userAgent.toLowerCase().indexOf("firefox")>-1){G(e,s.options,o,!0);var r=J(o,!0);!T||p&&i===f&&a===v||(p&&clearInterval(p),p=setInterval(function(){if(t){var n=J(k.elementFromPoint(i,a),!0);n!==r&&(r=n,V(),G(e,s.options,r,!0))}},10),f=i,v=a)}else{if(!s.options.bubbleScroll||J(o,!0)===window)return void V();G(e,s.options,J(o,!1))}}},_prepareDragStart:function(n,i,r,l){var d,u=this,m=u.el,p=u.options,f=m.ownerDocument;r&&!t&&r.parentNode===m&&(g=n,a=m,e=(t=r).parentNode,o=t.nextSibling,s=r,h=p.group,c=l,this._lastX=(i||n).clientX,this._lastY=(i||n).clientY,t.style["will-change"]="all",d=function(){u._disableDelayedDrag(),t.draggable=u.nativeDraggable,u._triggerDragStart(n,i),st(u,a,"choose",t,a,a,c),it(t,p.chosenClass,!0)},p.ignore.split(",").forEach(function(e){ot(t,e.trim(),lt)}),et(f,"mouseup",u._onDrop),et(f,"touchend",u._onDrop),et(f,"touchcancel",u._onDrop),p.supportPointer&&et(f,"pointercancel",u._onDrop),p.delay?(et(f,"mouseup",u._disableDelayedDrag),et(f,"touchend",u._disableDelayedDrag),et(f,"touchcancel",u._disableDelayedDrag),et(f,"mousemove",u._delayedDragTouchMoveHandler),et(f,"touchmove",u._delayedDragTouchMoveHandler),p.supportPointer&&et(f,"pointermove",u._delayedDragTouchMoveHandler),u._dragStartTimer=R(d.bind(u),p.delay)):d())},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;q(H(e.clientX-this._lastX),H(e.clientY-this._lastY))>=this.options.touchStartThreshold&&this._disableDelayedDrag()},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),nt(t,"mouseup",this._disableDelayedDrag),nt(t,"touchend",this._disableDelayedDrag),nt(t,"touchcancel",this._disableDelayedDrag),nt(t,"mousemove",this._delayedDragTouchMoveHandler),nt(t,"touchmove",this._delayedDragTouchMoveHandler),nt(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,n){(n=n||("touch"==e.pointerType?e:null))?(g={target:t,clientX:n.clientX,clientY:n.clientY},this._onDragStart(g,"touch")):this.nativeDraggable?(et(t,"dragend",this),et(a,"dragstart",this._onDragStart)):this._onDragStart(g,!0);try{k.selection?_t(function(){k.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(){if(a&&t){this.nativeDraggable&&(et(k,"dragover",this._handleAutoScroll),et(k,"dragover",Q));var e=this.options;it(t,e.dragClass,!1),it(t,e.ghostClass,!0),at(t,"transform",""),$.active=this,this._isAligned=!0,st(this,a,"start",t,a,a,c)}else this._nulling()},_emulateDragOver:function(e){if(_){if(this._lastX===_.clientX&&this._lastY===_.clientY&&!e)return;this._lastX=_.clientX,this._lastY=_.clientY,X||at(n,"display","none");for(var i=k.elementFromPoint(_.clientX,_.clientY),a=i,o=!!K(i,null,t,!0);i&&i.shadowRoot;)a=i=i.shadowRoot.elementFromPoint(_.clientX,_.clientY);if(a)do{if(a[L]){for(var s=z.length;s--;)z[s]({clientX:_.clientX,clientY:_.clientY,target:i,rootEl:a});if(!this.options.dragoverBubble)break}i=a}while(a=a.parentNode);t.parentNode[L]._computeIsAligned(_,o),X||at(n,"display","")}},_onTouchMove:function(t){if(g){var e=this.options,i=e.fallbackTolerance,a=e.fallbackOffset,o=t.touches?t.touches[0]:t,s=o.clientX-g.clientX+a.x,r=o.clientY-g.clientY+a.y,l=t.touches?"translate3d("+s+"px,"+r+"px,0)":"translate("+s+"px,"+r+"px)";if(this.options.supportPointer&&"touchmove"===t.type)return;if(!$.active){if(i&&q(H(o.clientX-this._lastX),H(o.clientY-this._lastY))<i)return;this._dragStarted()}this._appendGhost(),this._handleAutoScroll(o,!0),y=!0,_=o,at(n,"webkitTransform",l),at(n,"mozTransform",l),at(n,"msTransform",l),at(n,"transform",l),t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!n){var e,i=t.getBoundingClientRect(),o=at(t),s=this.options;it(n=t.cloneNode(!0),s.ghostClass,!1),it(n,s.fallbackClass,!0),it(n,s.dragClass,!0),at(n,"top",i.top-F(o.marginTop,10)),at(n,"left",i.left-F(o.marginLeft,10)),at(n,"width",i.width),at(n,"height",i.height),at(n,"opacity","0.8"),at(n,"position","fixed"),at(n,"zIndex","100000"),at(n,"pointerEvents","none"),s.fallbackOnBody&&k.body.appendChild(n)||a.appendChild(n),e=n.getBoundingClientRect(),at(n,"width",2*i.width-e.width),at(n,"height",2*i.height-e.height)}},_onDragStart:function(e,n){var o=this,s=e.dataTransfer,r=o.options;o._offUpEvents(),h.checkPull(o,o,t,e)&&((i=gt(t)).draggable=!1,i.style["will-change"]="",this._hideClone(),it(i,o.options.chosenClass,!1),o._cloneId=_t(function(){a.insertBefore(i,t),st(o,a,"clone",t)})),it(t,r.dragClass,!0),n?("touch"===n?(et(k,"touchmove",bt),et(k,"touchmove",o._onTouchMove),et(k,"touchend",o._onDrop),et(k,"touchcancel",o._onDrop),r.supportPointer&&(et(k,"pointermove",o._onTouchMove),et(k,"pointerup",o._onDrop))):(et(k,"mousemove",o._onTouchMove),et(k,"mouseup",o._onDrop)),o._loopId=setInterval(o._emulateDragOver,50),it(t,r.dragClass,!1)):(s&&(s.effectAllowed="move",r.setData&&r.setData.call(o,s,t)),et(k,"drop",o),at(t,"transform","translateZ(0)"),o._dragStartId=_t(o._dragStarted)),et(k,"selectstart",o)},_onDragOver:function(s){var r,l,d,c,u=this.el,p=this.options,f=p.group,v=$.active,g=h===f,_=p.sort;if((void 0===s.rootEl||s.rootEl===this.el)&&(p.dragoverBubble||s.rootEl||(this._handleAutoScroll(s),t.parentNode[L]._computeIsAligned(s)),void 0!==s.preventDefault&&(s.cancelable&&s.preventDefault(),!p.dragoverBubble&&s.stopPropagation()),y=!0,r=K(s.target,p.draggable,u,!0),!(t.animated&&r===t||r.animated||Y)&&(r!==b&&(B=!1,S=!1,b=null),v&&!p.disabled&&(g?_||(c=!a.contains(t)):m===this||(this.lastPutMode=h.checkPull(this,v,t,s))&&f.checkPut(this,v,t,s))))){var E,D=this._getDirection(s,r);if(l=t.getBoundingClientRect(),m!==this&&this!==$.active?(m=this,!0):this===$.active&&(!1,m=null),c)return this._hideClone(),e=a,void(i||o?a.insertBefore(t,i||o):_||a.appendChild(t));if(0===u.children.length||u.children[0]===n||u===s.target&&function(t,e,n){var i=ut(n).getBoundingClientRect(),a="vertical"===e?t.clientY:t.clientX,o="vertical"===e?t.clientX:t.clientY,s="vertical"===e?i.bottom:i.right,r="vertical"===e?i.left:i.top,l="vertical"===e?i.right:i.bottom;return o>r&&o<l&&a>s}(s,D,u)){if(0!==u.children.length&&u.children[0]!==n&&u===s.target&&(r=ut(u)),r){if(r.animated)return;d=r.getBoundingClientRect()}g?v._hideClone():v._showClone(this),!1!==rt(a,u,t,l,r,d,s,!!r)&&(t.contains(u)||(u.appendChild(t),e=u,this._isAligned=!0,x=null),this._animate(l,t),r&&this._animate(d,r))}else if(r&&!r.animated&&r!==t&&void 0!==r.parentNode[L]&&r!==u){if(B=B||p.invertSwap||t.parentNode!==u||!this._isAligned,0===(E=function(e,n,i,a,o,s,r){var l=n.getBoundingClientRect(),d="vertical"===i?e.clientY:e.clientX,c="vertical"===i?l.height:l.width,u="vertical"===i?l.top:l.left,h="vertical"===i?l.bottom:l.right,m=t.getBoundingClientRect(),p="vertical"===i?m.height:m.width,f=!1,v=at(t);if(p+=F(v.marginLeft)+F(v.marginRight),!s)if(r&&p<c*a)if(!S&&(1===w?d>u+c*o/2:d<h-c*o/2)&&(S=!0),S)f=!0;else{"vertical"===i?m.top:m.left,"vertical"===i?m.bottom:m.right;if(1===w?d<u+p:d>h-p)return-1*w}else if(d>u+c*(1-a)/2&&d<h-c*(1-a)/2)return d>u+c/2?-1:1;if((f=f||s)&&(d<u+c*o/2||d>h-c*o/2))return d>u+c/2?1:-1;return 0}(s,r,D,p.swapThreshold,p.invertedSwapThreshold,B,b===r)))return;x=null,this._isAligned=!0,b&&(b===r||r&&r.animated)||(S=!1,b=r),w=E,d=r.getBoundingClientRect();var C=r.nextElementSibling,T=!1,N=rt(a,u,t,l,r,d,s,T=1===E);!1!==N&&(1!==N&&-1!==N||(T=1===N),Y=!0,R(dt,30),g?v._hideClone():v._showClone(this),t.contains(u)||(T&&!C?u.appendChild(t):r.parentNode.insertBefore(t,T?C:r)),e=t.parentNode,this._animate(l,t),this._animate(d,r))}}},_animate:function(e,n){var i=this.options.animation;if(i){var a=n.getBoundingClientRect();if(n===t&&(x=a),1===e.nodeType&&(e=e.getBoundingClientRect()),e.left+e.width/2===a.left+a.width/2&&e.top+e.height/2===a.top+a.height/2)return;at(n,"transition","none"),at(n,"transform","translate3d("+(e.left-a.left)+"px,"+(e.top-a.top)+"px,0)"),n.offsetWidth,at(n,"transition","all "+i+"ms"),at(n,"transform","translate3d(0,0,0)"),clearTimeout(n.animated),n.animated=R(function(){at(n,"transition",""),at(n,"transform",""),n.animated=!1},i)}},_offUpEvents:function(){var t=this.el.ownerDocument;nt(k,"touchmove",bt),nt(k,"touchmove",this._onTouchMove),nt(k,"pointermove",this._onTouchMove),nt(t,"mouseup",this._onDrop),nt(t,"touchend",this._onDrop),nt(t,"pointerup",this._onDrop),nt(t,"touchcancel",this._onDrop),nt(t,"pointercancel",this._onDrop),nt(k,"selectstart",this)},_onDrop:function(s){var r=this.el,l=this.options;T=!1,B=!1,S=!1,clearInterval(this._loopId),clearInterval(p),V(),clearTimeout(D),D=void 0,clearTimeout(this._dragStartTimer),yt(this._cloneId),yt(this._dragStartId),nt(k,"mousemove",this._onTouchMove),this.nativeDraggable&&(nt(k,"drop",this),nt(r,"dragstart",this._onDragStart),nt(k,"dragover",this._handleAutoScroll),nt(k,"dragover",Q)),this._offUpEvents(),s&&(y&&(s.cancelable&&s.preventDefault(),!l.dropBubble&&s.stopPropagation()),n&&n.parentNode&&n.parentNode.removeChild(n),(a===e||m&&"clone"!==m.lastPutMode)&&i&&i.parentNode&&i.parentNode.removeChild(i),t&&(this.nativeDraggable&&nt(t,"dragend",this),lt(t),t.style["will-change"]="",it(t,this.options.ghostClass,!1),it(t,this.options.chosenClass,!1),st(this,a,"unchoose",t,e,a,c,null,s),a!==e?((u=mt(t,l.draggable))>=0&&(st(null,e,"add",t,e,a,c,u,s),st(this,a,"remove",t,e,a,c,u,s),st(null,e,"sort",t,e,a,c,u,s),st(this,a,"sort",t,e,a,c,u,s)),m&&m.save()):t.nextSibling!==o&&(u=mt(t,l.draggable))>=0&&(st(this,a,"update",t,e,a,c,u,s),st(this,a,"sort",t,e,a,c,u,s)),$.active&&(null!=u&&-1!==u||(u=c),st(this,a,"end",t,e,a,c,u,s),this.save()))),this._nulling()},_nulling:function(){a=t=e=n=o=i=s=r=l=C.length=p=f=v=g=_=y=u=c=b=w=x=m=h=$.active=null,U.forEach(function(t){t.checked=!0}),U.length=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":t&&(this._onDragOver(e),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(e));break;case"selectstart":e.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,i=0,a=n.length,o=this.options;i<a;i++)K(t=n[i],o.draggable,this.el,!1)&&e.push(t.getAttribute(o.dataIdAttr)||ht(t));return e},sort:function(t){var e={},n=this.el;this.toArray().forEach(function(t,i){var a=n.children[i];K(a,this.options.draggable,n,!1)&&(e[t]=a)},this),t.forEach(function(t){e[t]&&(n.removeChild(e[t]),n.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return K(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];n[t]=e,"group"===t&&Z(n)},destroy:function(){var t=this.el;t[L]=null,nt(t,"mousedown",this._onTapStart),nt(t,"touchstart",this._onTapStart),nt(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(nt(t,"dragover",this),nt(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),z.splice(z.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null},_hideClone:function(){i.cloneHidden||(at(i,"display","none"),i.cloneHidden=!0)},_showClone:function(e){"clone"===e.lastPutMode?i.cloneHidden&&(a.contains(t)&&!this.options.group.revertClone?a.insertBefore(i,t):o?a.insertBefore(i,o):a.appendChild(i),this.options.group.revertClone&&this._animate(t,i),at(i,"display",""),i.cloneHidden=!1):this._hideClone()}},$.utils={on:et,off:nt,css:at,find:ot,is:function(t,e){return!!K(t,e,t,!1)},extend:vt,throttle:ft,closest:K,toggleClass:it,clone:gt,index:mt,nextTick:_t,cancelNextTick:yt,detectDirection:W,getChild:ct},$.create=function(t,e){return new $(t,e)},$.version="1.8.0-rc1",$})}},[1]);