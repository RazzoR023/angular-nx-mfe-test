(self.webpackChunklogin=self.webpackChunklogin||[]).push([[740],{7740:(vn,oe,c)=>{c.r(oe),c.d(oe,{RemoteEntryModule:()=>_n});var y=c(8380),pt=c(5503),gt=c(4719),i=c(7583),se=c(1225),mt=c(720);let ae=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(i.\u0275\u0275directiveInject(i.Renderer2),i.\u0275\u0275directiveInject(i.ElementRef))},n.\u0275dir=i.\u0275\u0275defineDirective({type:n}),n})(),m=(()=>{class n extends ae{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=i.\u0275\u0275getInheritedFactory(n)))(r||n)}}(),n.\u0275dir=i.\u0275\u0275defineDirective({type:n,features:[i.\u0275\u0275InheritDefinitionFeature]}),n})();const d=new i.InjectionToken("NgValueAccessor"),vt={provide:d,useExisting:(0,i.forwardRef)(()=>A),multi:!0},Ct=new i.InjectionToken("CompositionEventMode");let A=(()=>{class n extends ae{constructor(e,r,o){super(e,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function yt(){const n=(0,y.\u0275getDOM)()?(0,y.\u0275getDOM)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(i.\u0275\u0275directiveInject(i.Renderer2),i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(Ct,8))},n.\u0275dir=i.\u0275\u0275defineDirective({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&i.\u0275\u0275listener("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[i.\u0275\u0275ProvidersFeature([vt]),i.\u0275\u0275InheritDefinitionFeature]}),n})();const l=new i.InjectionToken("NgValidators"),f=new i.InjectionToken("NgAsyncValidators");function ve(n){return null!=n}function ye(n){const t=(0,i.\u0275isPromise)(n)?(0,se.from)(n):n;return(0,i.\u0275isObservable)(t),t}function Ce(n){let t={};return n.forEach(e=>{t=null!=e?{...t,...e}:t}),0===Object.keys(t).length?null:t}function Ve(n,t){return t.map(e=>e(n))}function De(n){return n.map(t=>function Dt(n){return!n.validate}(t)?t:e=>t.validate(e))}function G(n){return null!=n?function Me(n){if(!n)return null;const t=n.filter(ve);return 0==t.length?null:function(e){return Ce(Ve(e,t))}}(De(n)):null}function k(n){return null!=n?function Ae(n){if(!n)return null;const t=n.filter(ve);return 0==t.length?null:function(e){const r=Ve(e,t).map(ye);return(0,se.forkJoin)(r).pipe((0,mt.map)(Ce))}}(De(n)):null}function Ee(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function T(n){return n?Array.isArray(n)?n:[n]:[]}function F(n,t){return Array.isArray(n)?n.includes(t):n===t}function we(n,t){const e=T(t);return T(n).forEach(o=>{F(e,o)||e.push(o)}),e}function Ne(n,t){return T(t).filter(e=>!F(n,e))}class Ie{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=G(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=k(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class u extends Ie{get formDirective(){return null}get path(){return null}}class p extends Ie{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Oe{constructor(t){this._cd=t}is(t){return"submitted"===t?!!this._cd?.submitted:!!this._cd?.control?.[t]}}let Se=(()=>{class n extends Oe{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(i.\u0275\u0275directiveInject(p,2))},n.\u0275dir=i.\u0275\u0275defineDirective({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&i.\u0275\u0275classProp("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[i.\u0275\u0275InheritDefinitionFeature]}),n})(),Re=(()=>{class n extends Oe{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(i.\u0275\u0275directiveInject(u,10))},n.\u0275dir=i.\u0275\u0275defineDirective({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&i.\u0275\u0275classProp("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))("ng-submitted",r.is("submitted"))},features:[i.\u0275\u0275InheritDefinitionFeature]}),n})();function C(n,t){U(n,t),t.valueAccessor.writeValue(n.value),function It(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Pe(n,t)})}(n,t),function St(n,t){const e=(r,o)=>{t.valueAccessor.writeValue(r),o&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function Ot(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Pe(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function Nt(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function I(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function U(n,t){const e=function Fe(n){return n._rawValidators}(n);null!==t.validator?n.setValidators(Ee(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=function be(n){return n._rawAsyncValidators}(n);null!==t.asyncValidator?n.setAsyncValidators(Ee(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const o=()=>n.updateValueAndValidity();I(t._rawValidators,o),I(t._rawAsyncValidators,o)}function Pe(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function $(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}const V="VALID",S="INVALID",v="PENDING",D="DISABLED";function q(n){return(R(n)?n.validators:n)||null}function Te(n){return Array.isArray(n)?G(n):n||null}function z(n,t){return(R(t)?t.asyncValidators:n)||null}function Be(n){return Array.isArray(n)?k(n):n||null}function R(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}const Z=n=>n instanceof Y;function Ue(n){return(n=>n instanceof $e)(n)?n.value:n.getRawValue()}function He(n,t){const e=Z(n),r=n.controls;if(!(e?Object.keys(r):r).length)throw new i.\u0275RuntimeError(1e3,"");if(!r[t])throw new i.\u0275RuntimeError(1001,"")}function Le(n,t){Z(n),n._forEachChild((r,o)=>{if(void 0===t[o])throw new i.\u0275RuntimeError(1002,"")})}class X{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=Te(this._rawValidators),this._composedAsyncValidatorFn=Be(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===V}get invalid(){return this.status===S}get pending(){return this.status==v}get disabled(){return this.status===D}get enabled(){return this.status!==D}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=Te(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=Be(t)}addValidators(t){this.setValidators(we(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(we(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Ne(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Ne(t,this._rawAsyncValidators))}hasValidator(t){return F(this._rawValidators,t)}hasAsyncValidator(t){return F(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=v,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=D,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=V,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===V||this.status===v)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?D:V}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator=!0;const e=ye(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function Gt(n,t,e){if(null==t||(Array.isArray(t)||(t=t.split(e)),Array.isArray(t)&&0===t.length))return null;let r=n;return t.forEach(o=>{r=Z(r)?r.controls.hasOwnProperty(o)?r.controls[o]:null:(n=>n instanceof Tt)(r)&&r.at(o)||null}),r}(this,t,".")}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new i.EventEmitter,this.statusChanges=new i.EventEmitter}_calculateStatus(){return this._allControlsDisabled()?D:this.errors?S:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(S)?S:V}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){R(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class $e extends X{constructor(t=null,e,r){super(q(e),z(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),R(e)&&e.initialValueIsDefault&&(this.defaultValue=this._isBoxedValue(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){$(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){$(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class Y extends X{constructor(t,e,r){super(q(e),z(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){Le(this,t),Object.keys(t).forEach(r=>{He(this,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,o)=>{r.reset(t[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=Ue(e),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const r=this.controls[e];if(this.contains(e)&&t(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,r)=>((e.enabled||this.disabled)&&(t[r]=e.value),t))}_reduceChildren(t,e){let r=t;return this._forEachChild((o,s)=>{r=e(r,o,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}}class Tt extends X{constructor(t,e,r){super(q(e),z(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,r={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){Le(this,t),t.forEach((r,o)=>{He(this,o),this.at(o).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((r,o)=>{this.at(o)&&this.at(o).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((r,o)=>{r.reset(t[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>Ue(t))}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,r)=>{t(e,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const Bt={provide:u,useExisting:(0,i.forwardRef)(()=>x)},M=(()=>Promise.resolve(null))();let x=(()=>{class n extends u{constructor(e,r){super(),this.submitted=!1,this._directives=new Set,this.ngSubmit=new i.EventEmitter,this.form=new Y({},G(e),k(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){M.then(()=>{const r=this._findContainer(e.path);e.control=r.registerControl(e.name,e.control),C(e.control,e),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){M.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){M.then(()=>{const r=this._findContainer(e.path),o=new Y({});(function Ge(n,t){U(n,t)})(o,e),r.registerControl(e.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){M.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){M.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,function ke(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this._directives),this.ngSubmit.emit(e),!1}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}}return n.\u0275fac=function(e){return new(e||n)(i.\u0275\u0275directiveInject(l,10),i.\u0275\u0275directiveInject(f,10))},n.\u0275dir=i.\u0275\u0275defineDirective({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,r){1&e&&i.\u0275\u0275listener("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[i.\u0275\u0275ProvidersFeature([Bt]),i.\u0275\u0275InheritDefinitionFeature]}),n})();const Ut={provide:p,useExisting:(0,i.forwardRef)(()=>J)},ze=(()=>Promise.resolve(null))();let J=(()=>{class n extends p{constructor(e,r,o,s,a){super(),this._changeDetectorRef=a,this.control=new $e,this._registered=!1,this.update=new i.EventEmitter,this._parent=e,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=function L(n,t){if(!t)return null;let e,r,o;return Array.isArray(t),t.forEach(s=>{s.constructor===A?e=s:function Pt(n){return Object.getPrototypeOf(n.constructor)===m}(s)?r=s:o=s}),o||r||e||null}(0,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),function H(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){C(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){ze.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){const r=e.isDisabled.currentValue,o=""===r||r&&"false"!==r;ze.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?function w(n,t){return[...t.path,n]}(e,this._parent):[e]}}return n.\u0275fac=function(e){return new(e||n)(i.\u0275\u0275directiveInject(u,9),i.\u0275\u0275directiveInject(l,10),i.\u0275\u0275directiveInject(f,10),i.\u0275\u0275directiveInject(d,10),i.\u0275\u0275directiveInject(i.ChangeDetectorRef,8))},n.\u0275dir=i.\u0275\u0275defineDirective({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[i.\u0275\u0275ProvidersFeature([Ut]),i.\u0275\u0275InheritDefinitionFeature,i.\u0275\u0275NgOnChangesFeature]}),n})(),Ze=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=i.\u0275\u0275defineDirective({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),Ye=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=i.\u0275\u0275defineInjector({}),n})(),fn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=i.\u0275\u0275defineInjector({imports:[[Ye]]}),n})(),pn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=i.\u0275\u0275defineInjector({imports:[fn]}),n})();function gn(n,t){1&n&&(i.\u0275\u0275elementStart(0,"div"),i.\u0275\u0275text(1,"User is logged in!"),i.\u0275\u0275elementEnd())}let mn=(()=>{class n{constructor(e){this.userService=e,this.username="",this.password="",this.isLoggedIn$=this.userService.isUserLoggedIn$}login(){this.userService.checkCredentials(this.username,this.password)}}return n.\u0275fac=function(e){return new(e||n)(i.\u0275\u0275directiveInject(gt.UserService))},n.\u0275cmp=i.\u0275\u0275defineComponent({type:n,selectors:[["ng-mfe-login-entry"]],decls:12,vars:5,consts:[[1,"login-app"],[1,"login-form",3,"ngSubmit"],["type","text","name","username",3,"ngModel","ngModelChange"],["type","password","name","password",3,"ngModel","ngModelChange"],["type","submit"],[4,"ngIf"]],template:function(e,r){1&e&&(i.\u0275\u0275elementStart(0,"div",0),i.\u0275\u0275elementStart(1,"form",1),i.\u0275\u0275listener("ngSubmit",function(){return r.login()}),i.\u0275\u0275elementStart(2,"label"),i.\u0275\u0275text(3," Username testing: "),i.\u0275\u0275elementStart(4,"input",2),i.\u0275\u0275listener("ngModelChange",function(s){return r.username=s}),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(5,"label"),i.\u0275\u0275text(6," Password: "),i.\u0275\u0275elementStart(7,"input",3),i.\u0275\u0275listener("ngModelChange",function(s){return r.password=s}),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(8,"button",4),i.\u0275\u0275text(9,"Login"),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275template(10,gn,2,0,"div",5),i.\u0275\u0275pipe(11,"async"),i.\u0275\u0275elementEnd()),2&e&&(i.\u0275\u0275advance(4),i.\u0275\u0275property("ngModel",r.username),i.\u0275\u0275advance(3),i.\u0275\u0275property("ngModel",r.password),i.\u0275\u0275advance(3),i.\u0275\u0275property("ngIf",i.\u0275\u0275pipeBind1(11,3,r.isLoggedIn$)))},directives:[Ze,Re,x,A,Se,J,y.NgIf],pipes:[y.AsyncPipe],styles:[".login-app[_ngcontent-%COMP%]{width:30vw;border:2px dashed black;padding:8px;margin:0 auto}.login-form[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;margin:0 auto;padding:8px}label[_ngcontent-%COMP%]{display:block}"]}),n})(),_n=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=i.\u0275\u0275defineInjector({providers:[],imports:[[y.CommonModule,pn,pt.RouterModule.forChild([{path:"",component:mn}])]]}),n})()}}]);