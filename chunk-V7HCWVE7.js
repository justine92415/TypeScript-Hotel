import{Ga as p,Ja as d,Ka as m,Ma as b,Na as f,Oa as r,Pa as a,Qa as u,Va as l,X as x,Za as g,_a as _,eb as v,ya as i}from"./chunk-RQ5LHFRB.js";var y=(t,e)=>e.step;function w(t,e){if(t&1&&(r(0,"p"),g(1),a()),t&2){let n=l().$implicit;i(1),_(n.step)}}function C(t,e){t&1&&u(0,"span",3)}function h(t,e){if(t&1&&u(0,"div"),t&2){let n=l(2);p(n.stepArray[n.stepArray.length-2].completed?"line line_active":"line")}}function S(t,e){if(t&1&&(r(0,"div",1)(1,"div"),d(2,w,2,1,"p")(3,C,1,0),a(),r(4,"p"),g(5),a()(),d(6,h,1,2,"div",2)),t&2){let n=e.$implicit,s=e.$index,o=e.$count,c=l();i(1),p(n.step===c.currentStep||n.completed?"step step_active":"step"),i(1),m(2,n.completed?3:2),i(2),p(n.step===c.currentStep||n.completed?"text-white":"text-black-60"),i(1),_(n.stepDesc),i(1),m(6,s!==o-1?6:-1)}}var k=(()=>{let e=class e{constructor(){this.currentStep=1}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=x({type:e,selectors:[["app-stepper"]],inputs:{stepArray:"stepArray",currentStep:"currentStep"},standalone:!0,features:[v],decls:3,vars:0,consts:[[1,"flex","items-center","gap-2","p-4","w-full"],[1,"flex-shrink-0","text-base","font-bold"],[3,"class"],[1,"icon-ic_check"]],template:function(o,c){o&1&&(r(0,"div",0),b(1,S,7,7,null,null,y),a()),o&2&&(i(1),f(c.stepArray))},styles:["[_nghost-%COMP%]{display:block}.step[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;margin-bottom:.25rem;display:flex;height:2rem;width:2rem;align-items:center;justify-content:center;border-radius:9999px;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(144 144 144 / var(--tw-border-opacity));background-color:transparent;text-align:center;--tw-text-opacity: 1;color:rgb(144 144 144 / var(--tw-text-opacity))}.step_active[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(191 157 125 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.line[_ngcontent-%COMP%]{height:2px;width:100%;border-radius:.625rem;--tw-bg-opacity: 1;background-color:rgb(144 144 144 / var(--tw-bg-opacity))}.line_active[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(236 236 236 / var(--tw-bg-opacity))}"]});let t=e;return t})();export{k as a};
