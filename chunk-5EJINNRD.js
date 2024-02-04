import{d as T,e as D}from"./chunk-I744FCMO.js";import{a as _}from"./chunk-QTEAEUOA.js";import{a as B}from"./chunk-3DA3HM7I.js";import{g as E}from"./chunk-QCWOQPV6.js";import{c as S,d as y,h as w,i as G,j as k,k as A,l as N}from"./chunk-YOHTOYWP.js";import{i as x}from"./chunk-TND6WRZ2.js";import{a as F}from"./chunk-LO2WUKNL.js";import{$a as h,Ea as n,Oa as e,Pa as t,Qa as p,Ua as f,V as u,X as g,Za as o,eb as v,hb as b,ib as C,ya as i}from"./chunk-RQ5LHFRB.js";import"./chunk-2XJVAMHT.js";var K=(()=>{let a=class a{constructor(){this.fb=u(k),this.loginService=u(B),this.router=u(E),this.formGroup=this.fb.group({email:this.fb.control("",{nonNullable:!0,validators:D()}),password:this.fb.control("",{nonNullable:!0,validators:T("\u8ACB\u8F38\u5165\u5BC6\u78BC")}),recordEmail:this.fb.control(!1,{nonNullable:!0})})}ngOnInit(){if(localStorage.getItem("record")){let l=JSON.parse(localStorage.getItem("record"));this.formGroup.patchValue({email:l.email,recordEmail:l.isRecord})}}login(){let{email:l,password:m,recordEmail:r}=this.formGroup.value,c={email:l,password:m};this.loginService.postLogin(c,r).subscribe({next:d=>{d.status&&this.router.navigate(["/"])},error:d=>{alert(d.error.message)}})}routerPage(){this.router.navigate(["/register"])}};a.\u0275fac=function(m){return new(m||a)},a.\u0275cmp=g({type:a,selectors:[["app-login-page"]],standalone:!0,features:[v],decls:29,vars:18,consts:[[1,"px-20","py-6","bg-black"],["src","/assets/images/desktop/logo.png","alt","",1,"w-[12.25rem]","h-[4.5rem]"],[1,"bg-black","relative","overflow-x-hidden"],["src","/assets/images/desktop/line2.png","alt","",1,"w-[67.5rem]","h-[11.75rem]","absolute","top-[4.5rem]","right-0","translate-x-[250px]","z-10"],[1,"flex","items-center","relative","z-20"],["src","/assets/images/desktop/register.png","alt","",1,"w-[60rem]","h-full"],[1,"w-[26rem]","mx-auto"],[1,"text-title","text-primary-base","mb-2"],[1,"text-white","mb-10"],[1,"flex","flex-col","gap-4","mb-10",3,"formGroup"],[1,"text-white",3,"formGroup","name","type","formControlName","title","placeholder"],["formControlName","password",1,"text-white",3,"formGroup","name","type","title","placeholder"],[1,"flex","justify-between","items-center"],["formControlName","recordEmail"],[3,"buttonType"],[1,"text-white"],[1,"mb-10",3,"disabled","clickEvent"],[1,"flex","items-center","gap-2","text-white"],[3,"buttonType","click"]],template:function(m,r){m&1&&(e(0,"header",0),p(1,"img",1),t(),e(2,"div",2),p(3,"img",3),e(4,"div",4),p(5,"img",5),e(6,"div",6)(7,"p",7),o(8,"\u4EAB\u6A02\u9152\u5E97\uFF0C\u8AA0\u646F\u6B61\u8FCE"),t(),e(9,"h1",8),o(10,"\u7ACB\u5373\u958B\u59CB\u65C5\u7A0B"),t(),e(11,"div",9),p(12,"app-input",10)(13,"app-input",11),e(14,"div",12)(15,"app-checkbox",13),o(16,"\u8A18\u4F4F\u5E33\u865F"),t(),e(17,"app-button",14),o(18,"\u5FD8\u8A18\u5BC6\u78BC\uFF1F"),t()(),e(19,"pre",15),o(20),b(21,"json"),t()(),e(22,"app-button",16),f("clickEvent",function(){return r.login()}),o(23,"\u6703\u54E1\u767B\u5165"),t(),e(24,"div",17)(25,"p"),o(26,"\u6C92\u6709\u6703\u54E1\u55CE\uFF1F"),t(),e(27,"app-button",18),f("click",function(){return r.routerPage()}),o(28,"\u524D\u5F80\u8A3B\u518A"),t()()()()()),m&2&&(i(11),n("formGroup",r.formGroup),i(1),n("formGroup",r.formGroup)("name","email")("type","email")("formControlName","email")("title","\u96FB\u5B50\u4FE1\u7BB1")("placeholder","hello@exsample.com"),i(1),n("formGroup",r.formGroup)("name","password")("type","password")("title","\u5BC6\u78BC")("placeholder","\u8ACB\u8F38\u5165\u5BC6\u78BC"),i(4),n("buttonType","text"),i(3),h("          ",C(21,16,r.formGroup.value),`
        `),i(2),n("disabled",r.formGroup.invalid),i(5),n("buttonType","text"))},dependencies:[N,_,F,A,S,y,w,G,x]});let s=a;return s})();export{K as default};