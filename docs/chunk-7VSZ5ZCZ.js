import{A as Q,B as c,D as ce,F as ee,G as g,H as V,I as de,M as h,U as M,X as m,Y as he,a as y,b,ba as fe,ca as pe,d as se,da as T,e as ae,ea as te,f as le,g as x,h as f,i as K,j as N,k as C,m as p,n as ue,o as k,p as u,q as F,t as w,u as J,v as d,z as s}from"./chunk-2NOK5734.js";var Me=(()=>{let e=class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(r){return new(r||e)(s(Q),s(J))},e.\u0275dir=u({type:e});let n=e;return n})(),Ae=(()=>{let e=class e extends Me{};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=w(e)))(o||e)}})(),e.\u0275dir=u({type:e,features:[c]});let n=e;return n})(),z=new C(""),Qe={provide:z,useExisting:f(()=>et),multi:!0},et=(()=>{let e=class e extends Ae{writeValue(t){this.setProperty("checked",t)}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=w(e)))(o||e)}})(),e.\u0275dir=u({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(r,o){r&1&&h("change",function(a){return o.onChange(a.target.checked)})("blur",function(){return o.onTouched()})},features:[m([Qe]),c]});let n=e;return n})(),tt={provide:z,useExisting:f(()=>Ee),multi:!0};function nt(){let n=te()?te().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var it=new C(""),Ee=(()=>{let e=class e extends Me{constructor(t,r,o){super(t,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!nt())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(r){return new(r||e)(s(Q),s(J),s(it,8))},e.\u0275dir=u({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&h("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[m([tt]),c]});let n=e;return n})();function _(n){return n==null||(typeof n=="string"||Array.isArray(n))&&n.length===0}function Fe(n){return n!=null&&typeof n.length=="number"}var E=new C(""),Z=new C(""),rt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ge=class{static min(e){return ot(e)}static max(e){return st(e)}static required(e){return we(e)}static requiredTrue(e){return at(e)}static email(e){return Ie(e)}static minLength(e){return lt(e)}static maxLength(e){return ut(e)}static pattern(e){return ct(e)}static nullValidator(e){return G(e)}static compose(e){return ke(e)}static composeAsync(e){return Te(e)}};function ot(n){return e=>{if(_(e.value)||_(n))return null;let i=parseFloat(e.value);return!isNaN(i)&&i<n?{min:{min:n,actual:e.value}}:null}}function st(n){return e=>{if(_(e.value)||_(n))return null;let i=parseFloat(e.value);return!isNaN(i)&&i>n?{max:{max:n,actual:e.value}}:null}}function we(n){return _(n.value)?{required:!0}:null}function at(n){return n.value===!0?null:{required:!0}}function Ie(n){return _(n.value)||rt.test(n.value)?null:{email:!0}}function lt(n){return e=>_(e.value)||!Fe(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null}function ut(n){return e=>Fe(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}function ct(n){if(!n)return G;let e,i;return typeof n=="string"?(i="",n.charAt(0)!=="^"&&(i+="^"),i+=n,n.charAt(n.length-1)!=="$"&&(i+="$"),e=new RegExp(i)):(i=n.toString(),e=n),t=>{if(_(t.value))return null;let r=t.value;return e.test(r)?null:{pattern:{requiredPattern:i,actualValue:r}}}}function G(n){return null}function Oe(n){return n!=null}function Se(n){return fe(n)?se(n):n}function Pe(n){let e={};return n.forEach(i=>{e=i!=null?y(y({},e),i):e}),Object.keys(e).length===0?null:e}function xe(n,e){return e.map(i=>i(n))}function dt(n){return!n.validate}function Ne(n){return n.map(e=>dt(e)?e:i=>e.validate(i))}function ke(n){if(!n)return null;let e=n.filter(Oe);return e.length==0?null:function(i){return Pe(xe(i,e))}}function ie(n){return n!=null?ke(Ne(n)):null}function Te(n){if(!n)return null;let e=n.filter(Oe);return e.length==0?null:function(i){let t=xe(i,e).map(Se);return le(t).pipe(ae(Pe))}}function re(n){return n!=null?Te(Ne(n)):null}function me(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function je(n){return n._rawValidators}function Ge(n){return n._rawAsyncValidators}function ne(n){return n?Array.isArray(n)?n:[n]:[]}function B(n,e){return Array.isArray(n)?n.includes(e):n===e}function ve(n,e){let i=ne(e);return ne(n).forEach(r=>{B(i,r)||i.push(r)}),i}function ye(n,e){return ne(e).filter(i=>!B(n,i))}var U=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ie(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=re(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},v=class extends U{get formDirective(){return null}get path(){return null}},D=class extends U{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},R=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},ht={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},nn=b(y({},ht),{"[class.ng-submitted]":"isSubmitted"}),rn=(()=>{let e=class e extends R{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(s(D,2))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&ee("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[c]});let n=e;return n})(),on=(()=>{let e=class e extends R{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(s(v,10))},e.\u0275dir=u({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&ee("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[c]});let n=e;return n})();var I="VALID",j="INVALID",A="PENDING",O="DISABLED";function Be(n){return(Y(n)?n.validators:n)||null}function ft(n){return Array.isArray(n)?ie(n):n||null}function Ue(n,e){return(Y(e)?e.asyncValidators:n)||null}function pt(n){return Array.isArray(n)?re(n):n||null}function Y(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function gt(n,e,i){let t=n.controls;if(!(e?Object.keys(t):t).length)throw new x(1e3,"");if(!t[i])throw new x(1001,"")}function mt(n,e,i){n._forEachChild((t,r)=>{if(i[r]===void 0)throw new x(1002,"")})}var H=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===I}get invalid(){return this.status===j}get pending(){return this.status==A}get disabled(){return this.status===O}get enabled(){return this.status!==O}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ve(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ve(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ye(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ye(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=A,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=O,this.errors=null,this._forEachChild(t=>{t.disable(b(y({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(b(y({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(t=>t(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(t=>{t.enable(b(y({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(b(y({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===A)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?O:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator=!0;let i=Se(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((t,r)=>t&&t._find(r),this)}getError(e,i){let t=i?this.get(i):this;return t&&t.errors?t.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new d,this.statusChanges=new d}_calculateStatus(){return this._allControlsDisabled()?O:this.errors?j:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus(j)?j:I}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Y(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ft(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=pt(this._rawAsyncValidators)}},L=class extends H{constructor(e,i,t){super(Be(i),Ue(t,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,i){return this.controls[e]?this.controls[e]:(this.controls[e]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(e,i,t={}){this.registerControl(e,i),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(e,i,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],i&&this.registerControl(e,i),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,i={}){mt(this,!0,e),Object.keys(e).forEach(t=>{gt(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(Object.keys(e).forEach(t=>{let r=this.controls[t];r&&r.patchValue(e[t],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e={},i={}){this._forEachChild((t,r)=>{t.reset(e?e[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(e,i,t)=>(e[t]=i.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(i,t)=>t._syncPendingControls()?!0:i);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(i=>{let t=this.controls[i];t&&e(t,i)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[i,t]of Object.entries(this.controls))if(this.contains(i)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(i,t,r)=>((t.enabled||this.disabled)&&(i[r]=t.value),i))}_reduceChildren(e,i){let t=e;return this._forEachChild((r,o)=>{t=i(t,r,o)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var P=new C("CallSetDisabledState",{providedIn:"root",factory:()=>X}),X="always";function Re(n,e){return[...e.path,n]}function $(n,e,i=X){oe(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),yt(n,e),Ct(n,e),_t(n,e),vt(n,e)}function _e(n,e,i=!0){let t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),q(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function W(n,e){n.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function vt(n,e){if(e.valueAccessor.setDisabledState){let i=t=>{e.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(i),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(i)})}}function oe(n,e){let i=je(n);e.validator!==null?n.setValidators(me(i,e.validator)):typeof i=="function"&&n.setValidators([i]);let t=Ge(n);e.asyncValidator!==null?n.setAsyncValidators(me(t,e.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let r=()=>n.updateValueAndValidity();W(e._rawValidators,r),W(e._rawAsyncValidators,r)}function q(n,e){let i=!1;if(n!==null){if(e.validator!==null){let r=je(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(l=>l!==e.validator);o.length!==r.length&&(i=!0,n.setValidators(o))}}if(e.asyncValidator!==null){let r=Ge(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(l=>l!==e.asyncValidator);o.length!==r.length&&(i=!0,n.setAsyncValidators(o))}}}let t=()=>{};return W(e._rawValidators,t),W(e._rawAsyncValidators,t),i}function yt(n,e){e.valueAccessor.registerOnChange(i=>{n._pendingValue=i,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&He(n,e)})}function _t(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&He(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function He(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Ct(n,e){let i=(t,r)=>{e.valueAccessor.writeValue(t),r&&e.viewToModelUpdate(t)};n.registerOnChange(i),e._registerOnDestroy(()=>{n._unregisterOnChange(i)})}function Le(n,e){n==null,oe(n,e)}function Vt(n,e){return q(n,e)}function $e(n,e){if(!n.hasOwnProperty("model"))return!1;let i=n.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function Dt(n){return Object.getPrototypeOf(n.constructor)===Ae}function We(n,e){n._syncPendingControls(),e.forEach(i=>{let t=i.control;t.updateOn==="submit"&&t._pendingChange&&(i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function qe(n,e){if(!e)return null;Array.isArray(e);let i,t,r;return e.forEach(o=>{o.constructor===Ee?i=o:Dt(o)?t=o:r=o}),r||t||i||null}function bt(n,e){let i=n.indexOf(e);i>-1&&n.splice(i,1)}var Mt={provide:v,useExisting:f(()=>At)},S=Promise.resolve(),At=(()=>{let e=class e extends v{constructor(t,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new d,this.form=new L({},ie(t),re(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){S.then(()=>{let r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),$(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){S.then(()=>{let r=this._findContainer(t.path);r&&r.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){S.then(()=>{let r=this._findContainer(t.path),o=new L({});Le(o,t),r.registerControl(t.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){S.then(()=>{let r=this._findContainer(t.path);r&&r.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){S.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,We(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}};e.\u0275fac=function(r){return new(r||e)(s(E,10),s(Z,10),s(P,8))},e.\u0275dir=u({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&h("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{options:[p.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[m([Mt]),c]});let n=e;return n})();function Ce(n,e){let i=n.indexOf(e);i>-1&&n.splice(i,1)}function Ve(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var ze=class extends H{constructor(e=null,i,t){super(Be(i),Ue(t,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Y(i)&&(i.nonNullable||i.initialValueIsDefault)&&(Ve(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ce(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ce(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ve(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Et=n=>n instanceof ze;var Ft={provide:D,useExisting:f(()=>wt)},De=Promise.resolve(),wt=(()=>{let e=class e extends D{constructor(t,r,o,l,a,Je){super(),this._changeDetectorRef=a,this.callSetDisabledState=Je,this.control=new ze,this._registered=!1,this.name="",this.update=new d,this._parent=t,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=qe(this,l)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),$e(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){$(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){De.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let r=t.isDisabled.currentValue,o=r!==0&&T(r);De.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Re(t,this._parent):[t]}};e.\u0275fac=function(r){return new(r||e)(s(v,9),s(E,10),s(Z,10),s(z,10),s(pe,8),s(P,8))},e.\u0275dir=u({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[p.None,"disabled","isDisabled"],model:[p.None,"ngModel","model"],options:[p.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[m([Ft]),c,F]});let n=e;return n})(),an=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=u({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let n=e;return n})();var Ze=new C("");var It={provide:v,useExisting:f(()=>Ot)},Ot=(()=>{let e=class e extends v{constructor(t,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new d,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(q(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let r=this.form.get(t.path);return $(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){_e(t.control||null,t,!1),bt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,We(this.form,this.directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,o=this.form.get(t.path);r!==o&&(_e(r||null,t),Et(o)&&($(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);Le(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let r=this.form.get(t.path);r&&Vt(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){oe(this.form,this),this._oldForm&&q(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(s(E,10),s(Z,10),s(P,8))},e.\u0275dir=u({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&h("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:[p.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[m([It]),c,F]});let n=e;return n})();var St={provide:D,useExisting:f(()=>Pt)},Pt=(()=>{let e=class e extends D{set isDisabled(t){}constructor(t,r,o,l,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new d,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=qe(this,l)}ngOnChanges(t){this._added||this._setUpControl(),$e(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Re(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(s(v,13),s(E,10),s(Z,10),s(z,10),s(Ze,8))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""]],inputs:{name:[p.None,"formControlName","name"],isDisabled:[p.None,"disabled","isDisabled"],model:[p.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[m([St]),c,F]});let n=e;return n})();var Ye=(()=>{let e=class e{constructor(){this._validator=G}ngOnChanges(t){if(this.inputName in t){let r=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):G,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=u({type:e,features:[F]});let n=e;return n})();var xt={provide:E,useExisting:f(()=>Nt),multi:!0};var Nt=(()=>{let e=class e extends Ye{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=T,this.createValidator=t=>we}enabled(t){return t}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=w(e)))(o||e)}})(),e.\u0275dir=u({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,o){r&2&&ce("required",o._enabled?"":null)},inputs:{required:"required"},features:[m([xt]),c]});let n=e;return n})();var kt={provide:E,useExisting:f(()=>Tt),multi:!0},Tt=(()=>{let e=class e extends Ye{constructor(){super(...arguments),this.inputName="email",this.normalizeInput=T,this.createValidator=t=>Ie}enabled(t){return t}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=w(e)))(o||e)}})(),e.\u0275dir=u({type:e,selectors:[["","email","","formControlName",""],["","email","","formControl",""],["","email","","ngModel",""]],inputs:{email:"email"},features:[m([kt]),c]});let n=e;return n})();var Xe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=k({type:e}),e.\u0275inj=N({});let n=e;return n})();var ln=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:P,useValue:t.callSetDisabledState??X}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=k({type:e}),e.\u0275inj=N({imports:[Xe]});let n=e;return n})(),un=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:Ze,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:P,useValue:t.callSetDisabledState??X}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=k({type:e}),e.\u0275inj=N({imports:[Xe]});let n=e;return n})();var Ke=(()=>{let e=class e{constructor(){this.confirmNavEvent=new d}confirmNav(t){this.confirmNavEvent.emit(t)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=K({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var vn=(()=>{let e=class e{constructor(t){this.confirmNav=t,this.closePopup=new d}stopProp(t){t.stopPropagation()}sendConfirmExit(t,r){t.stopPropagation(),r===1?this.confirmNav.confirmNav(!0):(this.confirmNav.confirmNav(!1),this.closePopup.emit(!1))}};e.\u0275fac=function(r){return new(r||e)(s(Ke))},e.\u0275cmp=ue({type:e,selectors:[["confirm-exit"]],outputs:{closePopup:"closePopup"},standalone:!0,features:[he],decls:17,vars:0,consts:[[1,"overlay",3,"click"],[1,"main",3,"click"],[1,"header"],[3,"click"],[1,"fa-solid","fa-xmark"],[1,"writing"],[1,"buttons"]],template:function(r,o){r&1&&(g(0,"div",0),h("click",function(a){return o.sendConfirmExit(a,2)}),g(1,"div",1),h("click",function(a){return o.stopProp(a)}),g(2,"div",2)(3,"h3"),M(4,"Confirm Navigation"),V(),g(5,"button",3),h("click",function(a){return o.sendConfirmExit(a,2)}),de(6,"i",4),V()(),g(7,"div",5)(8,"p"),M(9,"You have unsaved changes."),V(),g(10,"p"),M(11,"Are you sure you want to leave this page?"),V()(),g(12,"div",6)(13,"button",3),h("click",function(a){return o.sendConfirmExit(a,1)}),M(14,"Leave this Page"),V(),g(15,"button",3),h("click",function(a){return o.sendConfirmExit(a,2)}),M(16,"Stay on this Page"),V()()()())},styles:[".overlay[_ngcontent-%COMP%]{position:fixed;height:100vh;width:100vw;background-color:#3333338c;top:66px;left:0;z-index:999;display:flex;justify-content:center;align-items:center}.overlay[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{background-color:#fff;border-radius:5px;display:flex;flex-direction:column;width:330px;position:relative;top:-66px}.overlay[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;border-bottom:1px solid rgb(168,167,167)}.overlay[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin:13px 15px}.overlay[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{border:none;background-color:transparent;padding:10px 15px;cursor:pointer;font-size:18px;transition:color .15s}.overlay[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:hover{color:#6ce3e3}.overlay[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] > .writing[_ngcontent-%COMP%]{height:100px;padding-top:10px}.overlay[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] > .writing[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding:3px 10px}.overlay[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] > .buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly;margin-bottom:10px}.overlay[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] > .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{background-color:#3fa2f3;color:#fff}.overlay[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] > .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type:hover{background-color:#128aed}.overlay[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] > .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:150px;padding:10px;border:none;cursor:pointer;transition:background-color .15s}"]});let n=e;return n})();export{et as a,Ee as b,ge as c,rn as d,on as e,L as f,At as g,ze as h,wt as i,an as j,Ot as k,Pt as l,Nt as m,Tt as n,ln as o,un as p,Ke as q,vn as r};
