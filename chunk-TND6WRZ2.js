import{Ba as I,Ia as M,M as A,P as u,Q as y,T as h,U as c,V as l,Y as S,Z as D,_ as v,jb as B,qa as g,sa as p,va as b,wa as _,za as o}from"./chunk-RQ5LHFRB.js";var F=null;function m(){return F}function Ne(i){F||(F=i)}var L=class{},x=new h("DocumentToken"),N=(()=>{let t=class t{historyGo(e){throw new Error("Not implemented")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=u({token:t,factory:()=>(()=>l(U))(),providedIn:"platform"});let i=t;return i})();var U=(()=>{let t=class t extends N{constructor(){super(),this._doc=l(x),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return m().getBaseHref(this._doc)}onPopState(e){let n=m().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=m().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=u({token:t,factory:()=>(()=>new t)(),providedIn:"platform"});let i=t;return i})();function $(i,t){if(i.length==0)return t;if(t.length==0)return i;let s=0;return i.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?i+t.substring(1):s==1?i+t:i+"/"+t}function O(i){let t=i.match(/#|\?|$/),s=t&&t.index||i.length,e=s-(i[s-1]==="/"?1:0);return i.slice(0,e)+i.slice(s)}function a(i){return i&&i[0]!=="?"?"?"+i:i}var w=(()=>{let t=class t{historyGo(e){throw new Error("Not implemented")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=u({token:t,factory:()=>(()=>l(j))(),providedIn:"root"});let i=t;return i})(),z=new h("appBaseHref"),j=(()=>{let t=class t extends w{constructor(e,n){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??l(x).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return $(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+a(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,d){let f=this.prepareExternalUrl(r+a(d));this._platformLocation.pushState(e,n,f)}replaceState(e,n,r,d){let f=this.prepareExternalUrl(r+a(d));this._platformLocation.replaceState(e,n,f)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(n){return new(n||t)(c(N),c(z,8))},t.\u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var V=(()=>{let t=class t{constructor(e){this._subject=new I,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Y(O(R(n))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+a(n))}normalize(e){return t.stripTrailingSlash(H(this._basePath,R(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+a(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+a(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)})),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n,complete:r})}};t.normalizeQueryParams=a,t.joinWithSlash=$,t.stripTrailingSlash=O,t.\u0275fac=function(n){return new(n||t)(c(w))},t.\u0275prov=u({token:t,factory:()=>G(),providedIn:"root"});let i=t;return i})();function G(){return new V(c(w))}function H(i,t){if(!i||!t.startsWith(i))return t;let s=t.substring(i.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function R(i){return i.replace(/\/index.html$/,"")}function Y(i){if(new RegExp("^(https?:)?//").test(i)){let[,s]=i.split(/\/\/[^\/]+/);return s}return i}function $e(i,t){t=encodeURIComponent(t);for(let s of i.split(";")){let e=s.indexOf("="),[n,r]=e==-1?[s,""]:[s.slice(0,e),s.slice(e+1)];if(n.trim()===t)return decodeURIComponent(r)}return null}var C=/\s+/,T=[],Ue=(()=>{let t=class t{constructor(e,n,r,d){this._iterableDiffers=e,this._keyValueDiffers=n,this._ngEl=r,this._renderer=d,this.initialClasses=T,this.stateMap=new Map}set klass(e){this.initialClasses=e!=null?e.trim().split(C):T}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(C):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==n&&(r.changed=!0,r.enabled=n),r.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],r=e[1];r.changed?(this._toggleClass(n,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),r.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(C).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}};t.\u0275fac=function(n){return new(n||t)(o(b),o(_),o(g),o(p))},t.\u0275dir=D({type:t,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"},standalone:!0});let i=t;return i})();var ze=(()=>{let t=class t{constructor(e,n){this._viewContainer=e,this._context=new E,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){P("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){P("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,n){return!0}};t.\u0275fac=function(n){return new(n||t)(o(M),o(B))},t.\u0275dir=D({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let i=t;return i})(),E=class{constructor(){this.$implicit=null,this.ngIf=null}};function P(i,t){if(!!!(!t||t.createEmbeddedView))throw new Error(`${i} must be a TemplateRef, but received '${A(t)}'.`)}var je=(()=>{let t=class t{transform(e){return JSON.stringify(e,null,2)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=v({name:"json",type:t,pure:!1,standalone:!0});let i=t;return i})();var Ve=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=S({type:t}),t.\u0275inj=y({});let i=t;return i})(),Z="browser",W="server";function Ge(i){return i===Z}function He(i){return i===W}var k=class{};export{m as a,Ne as b,L as c,x as d,V as e,$e as f,Ue as g,ze as h,je as i,Ve as j,Z as k,Ge as l,He as m,k as n};
