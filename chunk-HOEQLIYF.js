import{P as c,ua as i,va as n}from"./chunk-7VSCR5LV.js";var o=(()=>{let s=class s{constructor(){this.selectedDate=n([null,null]),this.selectedDateSig=i(()=>this.selectedDate()),this.startDate=i(()=>{let[t,e,a]=this.selectedDate()[0].split("/");return`${t}/${+e<10?"0"+e:e}/${+a<10?"0"+a:a}`}),this.endDate=i(()=>{let[t,e,a]=this.selectedDate()[1].split("/");return`${t}/${+e<10?"0"+e:e}/${+a<10?"0"+a:a}`}),this.dateDifferent=i(()=>{if(this.selectedDate()[0]&&this.selectedDate()[1]){let t=new Date(this.selectedDate()[0]);return(new Date(this.selectedDate()[1]).getTime()-t.getTime())/(1e3*60*60*24)}return 0}),this.selectSuccess=i(()=>this.selectedDate().every(t=>!!t))}selectDate(t){if(!t)return;let e=t.toLocaleDateString().split("T")[0];this.selectedDate().includes(e)||(this.selectedDate()[0]===null?this.selectedDate.update(()=>[e,null]):this.selectedDate()[0]&&this.selectedDate.update(()=>[this.selectedDate()[0],e]))}clearDate(){this.selectedDate.update(()=>[null,null])}};s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=c({token:s,factory:s.\u0275fac,providedIn:"root"});let l=s;return l})();export{o as a};
