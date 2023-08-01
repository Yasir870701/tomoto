import{u as ae}from"./settings-4f53812b.js";import{p as I,I as P,a7 as te,m as X,a8 as oe,C as ne,v as x,X as T,J as $,c as f,a9 as ue,aa as se,L as c,x as A,h as t,o as ie,ab as re,ac as L,r as de,Y,y as ce,Z as fe,ad as ve,S as g,ae as me,af as Ve,ag as N,N as ye,ah as j,n as be,ai as Se,R as Z,a0 as _e,s as Ce,d as G,e as ge,f as b,V as Ie,u as U,aj as M,i as d,a2 as q,a3 as he,t as pe,a4 as ke,a5 as Re}from"./index-52baf71d.js";import{V as R,a as Pe}from"./VRow-84578d99.js";import{V as z,b as xe,c as H,d as Ae}from"./VInput-93315a73.js";const K=Symbol.for("vuetify:selection-control-group"),w=I({color:String,disabled:Boolean,defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:P,trueIcon:P,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:te},...X(),...oe(),...ne()},"SelectionControlGroup"),Be=I({...w({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),Ge=x()({name:"VSelectionControlGroup",props:Be(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:i}=s;const l=T(e,"modelValue"),o=$(),v=f(()=>e.id||`v-selection-control-group-${o}`),n=f(()=>e.name||v.value),a=new Set;return ue(K,{modelValue:l,forceUpdate:()=>{a.forEach(u=>u())},onForceUpdate:u=>{a.add(u),ie(()=>{a.delete(u)})}}),se({[e.defaultsTarget]:{color:c(e,"color"),disabled:c(e,"disabled"),density:c(e,"density"),error:c(e,"error"),inline:c(e,"inline"),modelValue:l,multiple:f(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:n,falseIcon:c(e,"falseIcon"),trueIcon:c(e,"trueIcon"),readonly:c(e,"readonly"),ripple:c(e,"ripple"),type:c(e,"type"),valueComparator:c(e,"valueComparator")}}),A(()=>{var u;return t("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(u=i.default)==null?void 0:u.call(i)])}),{}}}),Q=I({label:String,trueValue:null,falseValue:null,value:null,...X(),...w()},"VSelectionControl");function Ue(e){const s=me(K,void 0),{densityClasses:i}=Ve(e),l=T(e,"modelValue"),o=f(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),v=f(()=>e.falseValue!==void 0?e.falseValue:!1),n=f(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=f({get(){const V=s?s.modelValue.value:l.value;return n.value?V.some(m=>e.valueComparator(m,o.value)):e.valueComparator(V,o.value)},set(V){if(e.readonly)return;const m=V?o.value:v.value;let r=m;n.value&&(r=V?[...N(l.value),m]:N(l.value).filter(y=>!e.valueComparator(y,o.value))),s?s.modelValue.value=r:l.value=r}}),{textColorClasses:u,textColorStyles:C}=ye(f(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),h=f(()=>a.value?e.trueIcon:e.falseIcon);return{group:s,densityClasses:i,trueValue:o,falseValue:v,model:a,textColorClasses:u,textColorStyles:C,icon:h}}const W=x()({name:"VSelectionControl",directives:{Ripple:re},inheritAttrs:!1,props:Q(),emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:i,slots:l}=s;const{group:o,densityClasses:v,icon:n,model:a,textColorClasses:u,textColorStyles:C,trueValue:h}=Ue(e),V=$(),m=f(()=>e.id||`input-${V}`),r=L(!1),y=L(!1),S=de();o==null||o.onForceUpdate(()=>{S.value&&(S.value.checked=a.value)});function p(_){r.value=!0,(!j||j&&_.target.matches(":focus-visible"))&&(y.value=!0)}function k(){r.value=!1,y.value=!1}function B(_){e.readonly&&o&&be(()=>o.forceUpdate()),a.value=_.target.checked}return A(()=>{var O,E;const _=l.label?l.label({label:e.label,props:{for:m.value}}):e.label,[ee,le]=Y(i);return t("div",g({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":r.value,"v-selection-control--focus-visible":y.value,"v-selection-control--inline":e.inline},v.value,e.class]},ee,{style:e.style}),[t("div",{class:["v-selection-control__wrapper",u.value],style:C.value},[(O=l.default)==null?void 0:O.call(l),ce(t("div",{class:["v-selection-control__input"]},[n.value&&t(ve,{key:"icon",icon:n.value},null),t("input",g({ref:S,checked:a.value,disabled:e.disabled,id:m.value,onBlur:k,onFocus:p,onInput:B,"aria-disabled":e.readonly,type:e.type,value:h.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},le),null),(E=l.input)==null?void 0:E.call(l,{model:a,textColorClasses:u,textColorStyles:C,props:{onFocus:p,onBlur:k,id:m.value}})]),[[fe("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),_&&t(z,{for:m.value,clickable:!0},{default:()=>[_]})])}),{isFocused:r,input:S}}}),Fe=I({...Q({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),F=x()({name:"VRadio",props:Fe(),setup(e,s){let{slots:i}=s;return A(()=>t(W,g(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),i)),{}}});const Te=I({height:{type:[Number,String],default:"auto"},...xe(),...Se(w(),["multiple"]),trueIcon:{type:P,default:"$radioOn"},falseIcon:{type:P,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),J=x()({name:"VRadioGroup",inheritAttrs:!1,props:Te(),emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:i,slots:l}=s;const o=$(),v=f(()=>e.id||`radio-group-${o}`),n=T(e,"modelValue");return A(()=>{const[a,u]=Y(i),[C,h]=H.filterProps(e),[V,m]=W.filterProps(e),r=l.label?l.label({label:e.label,props:{for:v.value}}):e.label;return t(H,g({class:["v-radio-group",e.class],style:e.style},a,C,{modelValue:n.value,"onUpdate:modelValue":y=>n.value=y,id:v.value}),{...l,default:y=>{let{id:S,messagesId:p,isDisabled:k,isReadonly:B}=y;return t(Z,null,[r&&t(z,{id:S.value},{default:()=>[r]}),t(Ge,g(V,{id:S.value,"aria-describedby":p.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:k.value,readonly:B.value,"aria-labelledby":r?S.value:void 0,multiple:!1},u,{modelValue:n.value,"onUpdate:modelValue":_=>n.value=_}),l)])}})}),{}}}),D=e=>(ke("data-v-af8f08b7"),e=e(),Re(),e),$e=D(()=>d("h1",null,"通知",-1)),we=D(()=>d("h1",null,"設定",-1)),De=D(()=>d("thead",null,[d("tr",null,[d("th",null,"名稱"),d("th",null,"試聽"),d("th",null,"選擇")])],-1)),Oe=["src"],Ee={__name:"Settings",setup(e){const s=ae(),{selectedAlarm:i,alarms:l,notify:o}=Ce(s);return(v,n)=>(G(),ge(Ie,null,{default:b(()=>[t(Pe,null,{default:b(()=>[t(R,{cols:"12"},{default:b(()=>[$e]),_:1}),t(R,{cols:"12"},{default:b(()=>[t(J,{inline:"",modelValue:U(o),"onUpdate:modelValue":n[0]||(n[0]=a=>M(o)?o.value=a:null)},{default:b(()=>[t(F,{label:"開啟",value:!0}),t(F,{label:"關閉",value:!1})]),_:1},8,["modelValue"])]),_:1}),t(R,{cols:"12"},{default:b(()=>[we]),_:1}),t(R,{cols:"12"},{default:b(()=>[t(Ae,{class:"av"},{default:b(()=>[De,d("tbody",null,[(G(!0),q(Z,null,he(U(l),a=>(G(),q("tr",{key:a.id},[d("td",null,pe(a.name),1),d("td",null,[d("audio",{src:a.file,controls:""},null,8,Oe)]),d("td",null,[t(J,{modelValue:U(i),"onUpdate:modelValue":n[1]||(n[1]=u=>M(i)?i.value=u:null)},{default:b(()=>[t(F,{value:a.id},null,8,["value"])]),_:2},1032,["modelValue"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}},qe=_e(Ee,[["__scopeId","data-v-af8f08b7"]]);export{qe as default};
