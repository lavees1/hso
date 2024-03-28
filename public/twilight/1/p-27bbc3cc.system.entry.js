var __awaiter=this&&this.__awaiter||function(t,n,e,i){function o(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,a){function r(t){try{l(i.next(t))}catch(t){a(t)}}function s(t){try{l(i["throw"](t))}catch(t){a(t)}}function l(t){t.done?e(t.value):o(t.value).then(r,s)}l((i=i.apply(t,n||[])).next())}))};var __generator=this&&this.__generator||function(t,n){var e={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},i,o,a,r;return r={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(n){return l([t,n])}}function l(s){if(i)throw new TypeError("Generator is already executing.");while(r&&(r=0,s[0]&&(e=0)),e)try{if(i=1,o&&(a=s[0]&2?o["return"]:s[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,s[1])).done)return a;if(o=0,a)s=[s[0]&2,a.value];switch(s[0]){case 0:case 1:a=s;break;case 4:e.label++;return{value:s[1],done:false};case 5:e.label++;o=s[1];s=[0];continue;case 7:s=e.ops.pop();e.trys.pop();continue;default:if(!(a=e.trys,a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){e=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){e.label=s[1];break}if(s[0]===6&&e.label<a[1]){e.label=a[1];a=s;break}if(a&&e.label<a[2]){e.label=a[2];e.ops.push(s);break}if(a[2])e.ops.pop();e.trys.pop();continue}s=n.call(t,e)}catch(t){s=[6,t];o=0}finally{i=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};
/*!
 * Crafted with ❤ by Salla
 */System.register(["./p-52326bc0.system.js","./p-1932c8ef.system.js","./p-27fbc64f.system.js"],(function(t){"use strict";var n,e,i,o,a;return{setters:[function(t){n=t.r;e=t.h;i=t.g},function(t){o=t.H},function(t){a=t.a}],execute:function(){var r="";var s=t("salla_notifications",function(){function t(t){var e=this;n(this,t);this.loadMoreText=undefined;this.itemPerPage=10;this.notifications=[];this.pagination=undefined;this.hasInfiniteScroll=undefined;this.total=undefined;this.showPlaceholder=undefined;this.nextPage=undefined;this.no_notifications_trans=salla.lang.get("blocks.header.no_notifications");this.load_more_text_trans=salla.lang.get("common.elements.load_more");salla.lang.onLoaded((function(){e.no_notifications_trans=salla.lang.get("blocks.header.no_notifications");e.load_more_text_trans=salla.lang.get("common.elements.load_more")}))}t.prototype.loading=function(t){if(t===void 0){t=true}var n;var e=(n=this.status)===null||n===void 0?void 0:n.querySelector(".s-button-text");if(e){o.toggleElementClassIf(e,"s-button-hide","s-button-show",(function(){return t}));this.btnLoader.style.display=t?"inherit":"none"}};t.prototype.getNotificationCard=function(t){var n=document.createElement("salla-notification-item");n.notification=t;n.classList.add("s-block");return n};t.prototype.render=function(){var t=this;var n;if(this.showPlaceholder){return e("div",{class:"s-notifications-no-content"},e("salla-placeholder",{alignment:"center"},e("span",{slot:"title"},this.no_notifications_trans)))}return e("div",{class:"s-notifications-wrapper"},e("div",{class:"s-notifications-container",ref:function(n){return t.wrapper=n}}),this.hasInfiniteScroll&&e("div",{class:"s-infinite-scroll-wrapper",ref:function(n){return t.status=n}},e("button",{onClick:function(){return t.loadMore()},class:"s-infinite-scroll-btn s-button-btn s-button-primary"},e("span",{class:"s-button-text s-infinite-scroll-btn-text"},(n=this.loadMoreText)!==null&&n!==void 0?n:this.load_more_text_trans),e("span",{class:"s-button-loader s-button-loader-center s-infinite-scroll-btn-loader",ref:function(n){return t.btnLoader=n},style:{display:"none"}}))))};t.prototype.handleResponse=function(t){var n=this;return t.map((function(t){return n.getNotificationCard(t)}))};t.prototype.initiateInfiniteScroll=function(){var t=this;var n,e,i;if(!this.wrapper){salla.logger.error("Wrapper is undefined. Cannot initiate infinite scroll.");return}this.infiniteScroll=salla.infiniteScroll.initiate(this.wrapper,this.wrapper,{path:function(){return t.nextPage},history:true,nextPage:this.nextPage,scrollThreshold:false,status:this.status,button:this.status.querySelector(".s-infinite-scroll-btn")},true);(n=this.infiniteScroll)===null||n===void 0?void 0:n.on("request",(function(n){t.loading()}));(e=this.infiniteScroll)===null||e===void 0?void 0:e.on("load",(function(n){var e;t.loading(false);t.pagination=n.pagination;t.nextPage=((e=n.pagination.links)===null||e===void 0?void 0:e.next)||null;t.handleResponse(n.data);var i=t.host.querySelectorAll("salla-notification-item:not(.animated)");t.animateItems(i)}));(i=this.infiniteScroll)===null||i===void 0?void 0:i.on("error",(function(t){salla.logger.error("Error loading more comments:",t)}))};t.prototype.animateItems=function(t){a({targets:t,opacity:[0,1],duration:1200,translateY:[20,0],delay:function(t,n){return n*100},easing:"easeOutExpo",complete:function(n){t.forEach((function(t){t.classList.add("animated")}))}})};t.prototype.loadInitialData=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(n){switch(n.label){case 0:return[4,salla.api.notifications.fetch({per_page:this.itemPerPage}).then((function(n){var e;t.notifications=n.data;t.hasInfiniteScroll=!!n.pagination.links.next;t.pagination=n.pagination;t.total=n.pagination.total;t.nextPage=((e=n.pagination.links)===null||e===void 0?void 0:e.next)||null;setTimeout((function(){t.handleResponse(n.data).forEach((function(n){return t.wrapper.append(n)}));t.initiateInfiniteScroll();var e=t.wrapper.querySelectorAll("salla-notification-item:not(.animated)");t.animateItems(e)}),100)})).catch((function(n){salla.logger.error(n);t.showPlaceholder=true;t.loading(false)}))];case 1:n.sent();return[2]}}))}))};t.prototype.loadMore=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(n){(t=this.infiniteScroll)===null||t===void 0?void 0:t.loadNextPage();return[2]}))}))};t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.loadInitialData()];case 1:t.sent();return[2]}}))}))};Object.defineProperty(t.prototype,"host",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());s.style=r}}}));
//# sourceMappingURL=p-27bbc3cc.system.entry.js.map