import{a as r}from"./CCb-kr4I.js";import{c as x}from"./xT3liDgT.js";import{m as A,A as L,a as T,l as E,n as D,o as F,p as R,b as O,D as U,I as W,B as j,u as K,s as M,t as N,v as X,w as q,F as G,i as H,V as J,f as y,d as Q}from"./BZISSxIt.js";import{K as Y,ar as Z,a4 as ee,L as te,ad as ae,i as u,a5 as oe,$ as se,a7 as re,z as s,X as ne}from"./gszgXTxS.js";async function ye(){try{const e=localStorage.getItem("token");if(!e)return{is_logged_in:!1};const a=await r.get("http://localhost:7000/get_data/users",{headers:{authorization:`Bearer ${e}`}});return{ok:1,user:{id:a.data.users.id,username:a.data.users.username,email:a.data.users.email,profile:`http://localhost:7000/uploads/profiles/${a.data.users.profile}`,user_type:a.data.users.user_type},is_logged_in:!0}}catch(e){e.response&&(e.response.status===401||e.response.status===403)&&localStorage.removeItem("token")}return{ok:0,is_logged_in:!1}}async function ge(){try{const e=localStorage.getItem("token");return{ok:1,teacher:(await r.get("http://localhost:7000/get_data/get-teacher",{headers:{authorization:`Bearer ${e}`}})).data.teacher}}catch{}}async function me(){try{const e=localStorage.getItem("token");if(!e)return{is_logged_in:!1};const a=await r.get("http://localhost:7000/get_data/get-user-by-teacher",{headers:{authorization:`Bearer ${e}`}}),o=a.data.students,t=a.data.studentCounts;return{ok:1,students:o,studentCounts:t}}catch(e){console.error("Error fetching user:",e)}return{ok:0,is_logged_in:!1}}async function _e(){try{const e=localStorage.getItem("token"),a=await r.get("http://localhost:7000/get_data/weeks",{headers:{authorization:`Bearer ${e}`}});return Array.isArray(a.data.weeks)?{ok:1,weeks:a.data.weeks}:{ok:1,weeks:[a.data.weeks],weekColumns:a.data.weekColumns}}catch(e){return console.error("Error fetching weeks:",e),{ok:0,weeks:[]}}}async function fe(e,a){try{const o=localStorage.getItem("token"),t=await r.get("http://localhost:7000/get_data/check-lines",{headers:{authorization:`Bearer ${o}`},params:{week_id:e,day_id:a}});return Array.isArray(t.data.check_lines)?{ok:1,check_lines:t.data.check_lines,check_lines_user:t.data.check_lines_user}:{ok:1,check_lines:[t.data.check_lines],check_lines_user:[t.data.check_lines_user]}}catch{return{ok:0,check_lines:[]}}}async function pe(e,a){try{const o=localStorage.getItem("token"),t=await r.get("http://localhost:7000/get_data/check-lines-by-week-day",{headers:{authorization:`Bearer ${o}`},params:{week_id:e,day_id:a}});return console.log(t.data.check_lines_by_id),{ok:1,check_lines_by_id:t.data.check_lines_by_id}}catch(o){return console.error("Error fetching weeks:",o),{ok:0,check_lines:[]}}}async function ve(e){try{const a=localStorage.getItem("token");return{ok:1,check_lines_by_id:(await r.get("http://localhost:7000/get_data/check-lines-by-id",{headers:{authorization:`Bearer ${a}`},params:{student_id:e}})).data.check_lines_by_id}}catch(a){return console.error("Error fetching weeks:",a),{ok:0,check_lines:[]}}}async function be(e,a,o,t){try{const n=localStorage.getItem("token"),c=await r.post("http://localhost:7000/updated_data/update-student_status",{headers:{authorization:`Bearer ${n}`},params:{week_id:e,day_id:a,student_id:o,student_status:t}});return{ok:1,massage:"อัพเดตข้อมูลสําเร็จ"}}catch(n){return console.error("Error fetching weeks:",n),{ok:0,check_lines:[]}}}async function we(e){try{const a=localStorage.getItem("token"),o=await r.get("http://localhost:7000/get_data/days",{params:{week_id:e},headers:{authorization:`Bearer ${a}`}});return Array.isArray(o.data.days)?{ok:1,days:o.data.days}:{ok:1,days:[o.data.days],dayColumns:o.data.dayColumns}}catch(a){return console.error("Error fetching weeks:",a),{ok:0,days:[]}}}async function Ce(){try{const e=localStorage.getItem("token"),a=await r.get("http://localhost:7000/get_data/percentage-lineup",{headers:{authorization:`Bearer ${e}`}}),o=a.data.count,t=a.data.columns;return{ok:1,count:o,columns:t}}catch{return{ok:0,count:[],columns:[]}}}async function Se(){try{const e=localStorage.getItem("token");return{ok:1,studentCounts:(await r.get("http://localhost:7000/get_data/percentage-lineup-teacher",{headers:{authorization:`Bearer ${e}`}})).data.studentCounts}}catch(e){return console.error("Error fetching weeks:",e),{ok:0,studentCounts:[]}}}const ce=x("v-alert-title"),le=["success","info","warning","error"],ie=Y({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:Z,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>le.includes(e)},...A(),...L(),...T(),...E(),...D(),...F(),...R(),...O(),...ee(),...U({variant:"flat"})},"VAlert"),Ie=te()({name:"VAlert",props:ie(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{emit:o,slots:t}=a;const n=ae(e,"modelValue"),c=u(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),g=u(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:m}=oe(e),{colorClasses:_,colorStyles:f,variantClasses:p}=W(g),{densityClasses:v}=j(e),{dimensionStyles:b}=K(e),{elevationClasses:w}=M(e),{locationStyles:C}=N(e),{positionClasses:S}=X(e),{roundedClasses:I}=q(e),{textColorClasses:B,textColorStyles:P}=G(se(e,"borderColor")),{t:V}=re(),d=u(()=>({"aria-label":V(e.closeLabel),onClick(i){n.value=!1,o("click:close",i)}}));return()=>{const i=!!(t.prepend||c.value),$=!!(t.title||e.title),z=!!(t.close||e.closable);return n.value&&s(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},m.value,_.value,v.value,w.value,S.value,I.value,p.value,e.class],style:[f.value,b.value,C.value,e.style],role:"alert"},{default:()=>{var k,h;return[H(!1,"v-alert"),e.border&&s("div",{key:"border",class:["v-alert__border",B.value],style:P.value},null),i&&s("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?s(y,{key:"prepend-defaults",disabled:!c.value,defaults:{VIcon:{density:e.density,icon:c.value,size:e.prominent?44:28}}},t.prepend):s(J,{key:"prepend-icon",density:e.density,icon:c.value,size:e.prominent?44:28},null)]),s("div",{class:"v-alert__content"},[$&&s(ce,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),((k=t.text)==null?void 0:k.call(t))??e.text,(h=t.default)==null?void 0:h.call(t)]),t.append&&s("div",{key:"append",class:"v-alert__append"},[t.append()]),z&&s("div",{key:"close",class:"v-alert__close"},[t.close?s(y,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=t.close)==null?void 0:l.call(t,{props:d.value})]}}):s(Q,ne({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},d.value),null)])]}})}}});export{Ie as V,ge as a,we as b,me as c,pe as d,_e as e,fe as f,ye as g,ve as h,Se as i,Ce as p,be as u};
