import{a as Y}from"./chunk-TND6WRZ2.js";import{$ as N,$a as _e,Ba as _,Da as c,Ea as ge,Fa as z,Ja as Z,Ka as X,N as h,O as I,Oa as E,P as fe,Pa as m,Q as S,T as g,Ta as me,Ua as C,Va as ye,X as pe,Y as O,Z as u,Za as x,_a as ve,bb as f,ca as $,eb as Ce,i as de,n as ce,qa as W,s as he,sa as q,ya as v,za as a}from"./chunk-RQ5LHFRB.js";import{a as d,b as p}from"./chunk-2XJVAMHT.js";var Fe=(()=>{let e=class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(r){return new(r||e)(a(q),a(W))},e.\u0275dir=u({type:e});let i=e;return i})(),we=(()=>{let e=class e extends Fe{};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=$(e)))(s||e)}})(),e.\u0275dir=u({type:e,features:[c]});let i=e;return i})(),M=new g("NgValueAccessor"),qe={provide:M,useExisting:h(()=>ze),multi:!0},ze=(()=>{let e=class e extends we{writeValue(t){this.setProperty("checked",t)}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=$(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(r,s){r&1&&C("change",function(l){return s.onChange(l.target.checked)})("blur",function(){return s.onTouched()})},features:[f([qe]),c]});let i=e;return i})(),Ze={provide:M,useExisting:h(()=>H),multi:!0};function Xe(){let i=Y()?Y().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Ye=new g("CompositionEventMode"),H=(()=>{let e=class e extends Fe{constructor(t,r,s){super(t,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Xe())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(r){return new(r||e)(a(q),a(W),a(Ye,8))},e.\u0275dir=u({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&C("input",function(l){return s._handleInput(l.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(l){return s._compositionEnd(l.target.value)})},features:[f([Ze]),c]});let i=e;return i})();var te=new g("NgValidators"),ie=new g("NgAsyncValidators");function Ie(i){return i!=null}function Se(i){return me(i)?de(i):i}function Oe(i){let e={};return i.forEach(n=>{e=n!=null?d(d({},e),n):e}),Object.keys(e).length===0?null:e}function Ne(i,e){return e.map(n=>n(i))}function Je(i){return!i.validate}function xe(i){return i.map(e=>Je(e)?e:n=>e.validate(n))}function Ke(i){if(!i)return null;let e=i.filter(Ie);return e.length==0?null:function(n){return Oe(Ne(n,e))}}function Pe(i){return i!=null?Ke(xe(i)):null}function Qe(i){if(!i)return null;let e=i.filter(Ie);return e.length==0?null:function(n){let t=Ne(n,e).map(Se);return he(t).pipe(ce(Oe))}}function ke(i){return i!=null?Qe(xe(i)):null}function Ve(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Ge(i){return i._rawValidators}function Te(i){return i._rawAsyncValidators}function J(i){return i?Array.isArray(i)?i:[i]:[]}function k(i,e){return Array.isArray(i)?i.includes(e):i===e}function De(i,e){let n=J(e);return J(i).forEach(r=>{k(n,r)||n.push(r)}),n}function be(i,e){return J(e).filter(n=>!k(i,n))}var G=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Pe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ke(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},b=class extends G{get formDirective(){return null}get path(){return null}},y=class extends G{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},T=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},et={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Wt=p(d({},et),{"[class.ng-submitted]":"isSubmitted"}),je=(()=>{let e=class e extends T{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(y,2))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&z("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[c]});let i=e;return i})(),qt=(()=>{let e=class e extends T{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(b,10))},e.\u0275dir=u({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&z("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[c]});let i=e;return i})();var F="VALID",P="INVALID",V="PENDING",w="DISABLED";function ne(i){return(L(i)?i.validators:i)||null}function tt(i){return Array.isArray(i)?Pe(i):i||null}function re(i,e){return(L(e)?e.asyncValidators:i)||null}function it(i){return Array.isArray(i)?ke(i):i||null}function L(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Be(i,e,n){let t=i.controls;if(!(e?Object.keys(t):t).length)throw new I(1e3,"");if(!t[n])throw new I(1001,"")}function Ue(i,e,n){i._forEachChild((t,r)=>{if(n[r]===void 0)throw new I(1002,"")})}var A=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===F}get invalid(){return this.status===P}get pending(){return this.status==V}get disabled(){return this.status===w}get enabled(){return this.status!==w}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(De(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(De(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(be(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(be(e,this._rawAsyncValidators))}hasValidator(e){return k(this._rawValidators,e)}hasAsyncValidator(e){return k(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=V,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=w,this.errors=null,this._forEachChild(t=>{t.disable(p(d({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(p(d({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(t=>t(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=F,this._forEachChild(t=>{t.enable(p(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(p(d({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===V)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator=!0;let n=Se(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((t,r)=>t&&t._find(r),this)}getError(e,n){let t=n?this.get(n):this;return t&&t.errors?t.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new _,this.statusChanges=new _}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(P)?P:F}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){L(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=tt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=it(this._rawAsyncValidators)}},j=class extends A{constructor(e,n,t){super(ne(n),re(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,t={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Ue(this,!0,e),Object.keys(e).forEach(t=>{Be(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(t=>{let r=this.controls[t];r&&r.patchValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((t,r)=>{t.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,t)=>(e[t]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,t)=>t._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let t=this.controls[n];t&&e(t,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,t]of Object.entries(this.controls))if(this.contains(n)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,t,r)=>((t.enabled||this.disabled)&&(n[r]=t.value),n))}_reduceChildren(e,n){let t=e;return this._forEachChild((r,s)=>{t=n(t,r,s)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var K=class extends j{};var se=new g("CallSetDisabledState",{providedIn:"root",factory:()=>oe}),oe="always";function nt(i,e){return[...e.path,i]}function Q(i,e,n=oe){ae(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),st(i,e),at(i,e),ot(i,e),rt(i,e)}function B(i,e,n=!0){let t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),R(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function U(i,e){i.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function rt(i,e){if(e.valueAccessor.setDisabledState){let n=t=>{e.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(n),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(n)})}}function ae(i,e){let n=Ge(i);e.validator!==null?i.setValidators(Ve(n,e.validator)):typeof n=="function"&&i.setValidators([n]);let t=Te(i);e.asyncValidator!==null?i.setAsyncValidators(Ve(t,e.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();U(e._rawValidators,r),U(e._rawAsyncValidators,r)}function R(i,e){let n=!1;if(i!==null){if(e.validator!==null){let r=Ge(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.validator);s.length!==r.length&&(n=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let r=Te(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.asyncValidator);s.length!==r.length&&(n=!0,i.setAsyncValidators(s))}}}let t=()=>{};return U(e._rawValidators,t),U(e._rawAsyncValidators,t),n}function st(i,e){e.valueAccessor.registerOnChange(n=>{i._pendingValue=n,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Re(i,e)})}function ot(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Re(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Re(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function at(i,e){let n=(t,r)=>{e.valueAccessor.writeValue(t),r&&e.viewToModelUpdate(t)};i.registerOnChange(n),e._registerOnDestroy(()=>{i._unregisterOnChange(n)})}function lt(i,e){i==null,ae(i,e)}function ut(i,e){return R(i,e)}function He(i,e){if(!i.hasOwnProperty("model"))return!1;let n=i.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function dt(i){return Object.getPrototypeOf(i.constructor)===we}function ct(i,e){i._syncPendingControls(),e.forEach(n=>{let t=n.control;t.updateOn==="submit"&&t._pendingChange&&(n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Le(i,e){if(!e)return null;Array.isArray(e);let n,t,r;return e.forEach(s=>{s.constructor===H?n=s:dt(s)?t=s:r=s}),r||t||n||null}function ht(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function Ae(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function Me(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var D=class extends A{constructor(e=null,n,t){super(ne(n),re(t,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),L(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Me(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ae(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ae(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Me(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ft=i=>i instanceof D;var Zt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=u({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let i=e;return i})();var pt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=O({type:e}),e.\u0275inj=S({});let i=e;return i})();var le=new g("NgModelWithFormControlWarning"),gt={provide:y,useExisting:h(()=>ue)},ue=(()=>{let e=class e extends y{set isDisabled(t){}constructor(t,r,s,o,l){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=l,this.update=new _,this._ngModelWarningSent=!1,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=Le(this,s)}ngOnChanges(t){if(this._isControlChanged(t)){let r=t.form.previousValue;r&&B(r,this,!1),Q(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}He(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&B(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(te,10),a(ie,10),a(M,10),a(le,8),a(se,8))},e.\u0275dir=u({type:e,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[f([gt]),c,N]});let i=e;return i})(),mt={provide:b,useExisting:h(()=>yt)},yt=(()=>{let e=class e extends b{constructor(t,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new _,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(R(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let r=this.form.get(t.path);return Q(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){B(t.control||null,t,!1),ht(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,ct(this.form,this.directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,s=this.form.get(t.path);r!==s&&(B(r||null,t),ft(s)&&(Q(s,t,this.callSetDisabledState),t.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);lt(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let r=this.form.get(t.path);r&&ut(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ae(this.form,this),this._oldForm&&R(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(a(te,10),a(ie,10),a(se,8))},e.\u0275dir=u({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&C("submit",function(l){return s.onSubmit(l)})("reset",function(){return s.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[f([mt]),c,N]});let i=e;return i})();var vt={provide:y,useExisting:h(()=>_t)},_t=(()=>{let e=class e extends y{set isDisabled(t){}constructor(t,r,s,o,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new _,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Le(this,o)}ngOnChanges(t){this._added||this._setUpControl(),He(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return nt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(b,13),a(te,10),a(ie,10),a(M,10),a(le,8))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[f([vt]),c,N]});let i=e;return i})();var Ct=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=O({type:e}),e.\u0275inj=S({imports:[pt]});let i=e;return i})(),ee=class extends A{constructor(e,n,t){super(ne(n),re(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,t={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(e,n={}){let t=this._adjustIndex(e);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,t={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){Ue(this,!1,e),e.forEach((t,r)=>{Be(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((t,r)=>{t.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,t)=>t._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,t)=>{e(n,t)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Ee(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var Xt=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,r=null){let s=this._reduceControls(t),o={};return Ee(r)?o=r:r!==null&&(o.validators=r.validator,o.asyncValidators=r.asyncValidator),new j(s,o)}record(t,r=null){let s=this._reduceControls(t);return new K(s,r)}control(t,r,s){let o={};return this.useNonNullable?(Ee(r)?o=r:(o.validators=r,o.asyncValidators=s),new D(t,p(d({},o),{nonNullable:!0}))):new D(t,r,s)}array(t,r,s){let o=t.map(l=>this._createControl(l));return new ee(o,r,s)}_reduceControls(t){let r={};return Object.keys(t).forEach(s=>{r[s]=this._createControl(t[s])}),r}_createControl(t){if(t instanceof D)return t;if(t instanceof A)return t;if(Array.isArray(t)){let r=t[0],s=t.length>1?t[1]:null,o=t.length>2?t[2]:null;return this.control(r,s,o)}else return this.control(t)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var $e=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:le,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:se,useValue:t.callSetDisabledState??oe}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=O({type:e}),e.\u0275inj=S({imports:[Ct]});let i=e;return i})();function Dt(i,e){i&1&&(E(0,"p",5),x(1,"\u5FC5\u586B"),m())}function bt(i,e){if(i&1&&(E(0,"p",6),x(1),m()),i&2){let n=ye();v(1),_e(" ",n.formGroup.controls[n.name].errors==null?null:n.formGroup.controls[n.name].errors.errorMsg," ")}}var ti=(()=>{let e=class e{constructor(){this.name="",this.type="text",this.required=!1,this.placeholder="",this.control=new D,this.onTouched=()=>{},this.onChange=()=>{}}writeValue(t){this.control.setValue(t,{emitEvent:!1})}registerOnChange(t){this.onChange=t,this.control.valueChanges.subscribe(t)}registerOnTouched(t){this.onTouched=t}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=pe({type:e,selectors:[["app-input"]],inputs:{formGroup:"formGroup",name:"name",type:"type",title:"title",required:"required",placeholder:"placeholder"},standalone:!0,features:[f([{provide:M,useExisting:h(()=>e),multi:!0}]),Ce],decls:7,vars:6,consts:[[1,"flex","justify-between","mb-2"],[1,"font-bold"],["class","text-primary-base font-bold"],[1,"outline-none","w-full","px-4","py-[0.9375rem]","border","border-[#ECECEC]","rounded-lg","mb-2","placeholder-gray-500",3,"type","formControl","placeholder","blur"],["class","text-error-base"],[1,"text-primary-base","font-bold"],[1,"text-error-base"]],template:function(r,s){r&1&&(E(0,"div")(1,"div",0)(2,"p",1),x(3),m(),Z(4,Dt,2,0,"p",2),m(),E(5,"input",3),C("blur",function(){return s.onTouched()}),m(),Z(6,bt,2,1,"p",4),m()),r&2&&(v(3),ve(s.title),v(1),X(4,s.required?4:-1),v(1),ge("type",s.type)("formControl",s.control)("placeholder",s.placeholder),v(1),X(6,s.formGroup.controls[s.name].touched&&s.formGroup.controls[s.name].errors?6:-1))},dependencies:[$e,H,je,ue],styles:["[_nghost-%COMP%]{display:block}div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{--tw-border-opacity: 1;border-color:rgb(191 157 125 / var(--tw-border-opacity));caret-color:#bf9d7d;box-shadow:0 0 0 4px #be9c7c1a}div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}"]});let i=e;return i})();export{M as a,ze as b,je as c,qt as d,D as e,Zt as f,ue as g,yt as h,_t as i,Xt as j,$e as k,ti as l};