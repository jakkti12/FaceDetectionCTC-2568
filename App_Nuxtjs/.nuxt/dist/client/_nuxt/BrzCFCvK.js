import{V as ee,_ as te}from"./CuTCfjHF.js";import{g as M,c as q,V as re,b as se,d as ie,e as X,u as ae,f as Y,h as le,i as de}from"./CBkuNycD.js";import{_ as S,t as g,v as w,z as s,A as n,x as l,B as _,y as m,N as b,J as C,a6 as Z,O as B,a3 as H,F as ue,Z as W,g as z,i as T,P as O,V as ce,W as me,Q as pe,R as fe}from"./gszgXTxS.js";import{V as v,d as A,b as j,e as J,a as E}from"./Cvl1ETbA.js";import{V as Q,a as ne,c as ge,d as $,e as he,f as _e,g as ke}from"./BefkD40B.js";import{a as K}from"./CCb-kr4I.js";import{V as ye}from"./CQy_gM36.js";import{d as V,V as D,e as oe}from"./BZISSxIt.js";import{V as I}from"./D4eIK50J.js";import{r as x}from"./D9v36est.js";import{V as G}from"./D0qOzgP3.js";import{V as we}from"./BYcB2WDS.js";import{V as P,a as R}from"./CaUlAWcl.js";import{V as N}from"./BTIj9U6y.js";import{V as ve}from"./Dt6yrLrZ.js";import"./7qluULSw.js";import"./DjbA1_97.js";import"./1DYzFgek.js";import"./xT3liDgT.js";import"./BWn29xGB.js";import"./B8TcFJPE.js";const Ce={data(){return{user:{username:"",email:"",profile:"",user_type:""}}},methods:{},async mounted(){try{const t=await M();t.is_logged_in&&(this.user=t.user)}catch(t){console.error("Error fetching user data:",t)}}},Ve={class:"container mt-5"},Se={class:"text-primary"},be={class:"text-muted"},Ie={key:0,class:"profile-section"},De=["src"];function Pe(t,e,u,i,o,h){return g(),w("div",Ve,[s(Q,null,{default:n(()=>[s(v,{class:"p-4"},{default:n(()=>[l("h1",null,[e[0]||(e[0]=_(" ยินดีต้อนรับ ")),l("a",Se,m(o.user.username)+", "+m(o.user.user_type),1)]),l("p",be," อีเมล: "+m(o.user.email),1),o.user.profile?(g(),w("div",Ie,[l("img",{src:o.user.profile,alt:"User Profile",class:"profile-img rounded-circle"},null,8,De)])):b("",!0)]),_:1})]),_:1}),s(Q,{class:"mt-4"},{default:n(()=>[s(v)]),_:1})])}const Ue=S(Ce,[["render",Pe],["__scopeId","data-v-5651f05d"]]),Ae={props:{week_id:{type:String,required:!0},day_id:{type:String,required:!0},teacher_id:{type:String,required:!0},student_id:{type:Array,required:!0},room_id:{type:Array,required:!0}},data(){return{error:null,success:null,step:1,image:null,imagePreview:null,check_students:[],unique_filename:"",search:"",status:0,headers:[{title:"#",key:"student_id"},{title:"ชื่อนักเรียน",key:"student_username"},{title:"สัปดาห์",key:"week"},{title:"วันที่",key:"day"},{title:"สถานะ",key:"status"}]}},methods:{toggleStatus(t){t.status=t.status===1?0:1},handleImageUpload(t){const e=t.target.files[0];if(e){const u=new FileReader;u.onload=i=>{this.imagePreview=i.target.result},u.readAsDataURL(e)}else this.imagePreview=null},async processImage(){const t=new FormData,e=this.student_id.map(i=>i.student_id),u=this.room_id.map(i=>i.room_id);t.append("week_id",this.week_id),t.append("day_id",this.day_id),t.append("image",this.image),t.append("teacher_id",this.teacher_id),t.append("student_ids",JSON.stringify(e)),t.append("room_id",JSON.stringify(u));try{const i=await K.post("http://localhost:8000/teacher-process-image",t,{headers:{"Content-Type":"multipart/form-data"}});i.data.status==="success"?(this.check_students=this.check_students.map(o=>{const h=i.data.student_statuses.find(r=>r.student_id===o.student_id);return h&&(o.status=h.status,this.unique_filename=h.picture),o}),this.imagePreview=`data:image/jpeg;base64,${i.data.processed_image}`,this.step=2):this.error="Error processing data: "+i.data.message}catch{this.error="An error occurred while processing data."}},async submitData(){try{const t=this.check_students.map(u=>({student_id:u.student_id,room_id:u.room_id,status:u.status})),e=await K.post("http://localhost:8000/teacher-process-frame",{week_id:this.week_id,day_id:this.day_id,teacher_id:this.teacher_id,student_statuses:t,picture:this.unique_filename});e.data.status==="success"?this.success="Data saved successfully!":this.error="Error saving data: "+e.data.message}catch(t){console.error("Error:",t),this.error="An error occurred while saving data."}}},async mounted(){try{const t=await q();t.ok===1?this.check_students=t.students:console.error("Failed to fetch check lines:",t.message)}catch(t){console.error("Error fetching check lines:",t)}}};function Le(t,e,u,i,o,h){return g(),w(B,null,[o.error||o.success?(g(),C(re,{key:0,type:o.error?"error":"success",closable:"",title:o.error?"Login Failed":"Login Successful",text:"",variant:"elevated",class:"alert-global"},{default:n(()=>[_(m(o.error||o.success),1)]),_:1},8,["type","title"])):b("",!0),s(we,{"alt-labels":"","hide-actions":"",items:["Step 1","Step 2"],"step-color":"secondary",color:"primary",modelValue:o.step,"onUpdate:modelValue":e[3]||(e[3]=r=>o.step=r)},{"item.1":n(()=>[s(v,{title:"Step One: Upload Image",flat:""},{default:n(()=>[s(A,null,{default:n(()=>[s(ye,{modelValue:o.image,"onUpdate:modelValue":e[0]||(e[0]=r=>o.image=r),label:"Upload Student Image",accept:"image/*",onChange:h.handleImageUpload,rules:[r=>!!r||"Image is required"],required:""},null,8,["modelValue","onChange","rules"]),o.imagePreview?(g(),C(j,{key:0,src:o.imagePreview,"max-height":"300",contain:""},null,8,["src"])):b("",!0)]),_:1}),s(J,null,{default:n(()=>[s(V,{color:"primary",onClick:h.processImage,disabled:!o.image},{default:n(()=>e[4]||(e[4]=[_("Next")])),_:1},8,["onClick","disabled"])]),_:1})]),_:1})]),"item.2":n(()=>[s(v,{title:"Step Two: Confirm and Submit",flat:""},{default:n(()=>[s(A,null,{default:n(()=>[l("p",null,[e[5]||(e[5]=l("strong",null,"Teacher ID:",-1)),_(" "+m(u.teacher_id),1)]),l("p",null,[e[6]||(e[6]=l("strong",null,"Student ID:",-1)),_(" "+m(this.student_id.map(r=>r.student_id)),1)]),l("p",null,[e[7]||(e[7]=l("strong",null,"Room ID:",-1)),_(" "+m(this.room_id.map(r=>r.room_id)),1)]),e[8]||(e[8]=l("p",null,[l("strong",null,"Image Preview:")],-1)),o.imagePreview?(g(),C(j,{key:0,src:o.imagePreview,"max-height":"300",contain:""},null,8,["src"])):b("",!0)]),_:1}),s(I),s(x,{search:o.search,"onUpdate:search":e[1]||(e[1]=r=>o.search=r),headers:o.headers,items:o.check_students,class:"elevation-1"},{"item.week":n(({item:r})=>[_(m(u.week_id),1)]),"item.day":n(({item:r})=>[_(m(u.day_id),1)]),"item.status":n(({item:r})=>[s(G,{color:r.status===1?"green":"red",dark:"",small:"",class:Z(["status-chip",r.status===1?"animate-green":"animate-red"]),onClick:a=>h.toggleStatus(r)},{default:n(()=>[_(m(r.status===1?"มา":"ขาด"),1)]),_:2},1032,["color","class","onClick"])]),_:1},8,["search","headers","items"]),s(J,null,{default:n(()=>[s(V,{color:"secondary",onClick:e[2]||(e[2]=r=>o.step=1)},{default:n(()=>e[9]||(e[9]=[_("Back")])),_:1}),s(V,{color:"primary",onClick:h.submitData},{default:n(()=>e[10]||(e[10]=[_("Submit")])),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}const Te=S(Ae,[["render",Le],["__scopeId","data-v-b876e163"]]),Ee={components:{StepperComponent:Te},props:{week_id:{type:String,required:!0}},setup(t){const e=H({search:"",items:[],headers:[{title:"#",key:"id"},{title:"วัน",align:"end",key:"day"},{title:"รายละเอียด",align:"end",key:"view"}],dialog:{},teacher:"",student:{},studentCount:"",Checkin:!1}),u=d=>{e.dialog[d]=!0},i=d=>{e.dialog[d]=!1},o=d=>{const p={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};return new Date(d).toLocaleString("th-TH",p)},h=d=>{console.log("Submitted Data:",d)},r=async()=>{try{const d=await se(t.week_id),p=await M(),c=await q();d.ok===1&&Array.isArray(d.days)?e.items=d.days.map((k,f)=>({id:f+1,day_id:k.id,day:k.day,start:k.start,end:k.end,status:k.status})):console.error("Invalid data structure from API:",d),p.ok===1?e.teacher=p.user.id:console.error("Invalid data structure from API:",p),c.ok===1?(e.student=c.students,e.studentCount=c.students.length):console.error("Invalid data structure from API:",c)}catch(d){console.error("Error fetching weeks:",d)}},a=async(d,p)=>{try{const c=await ie(d,p);console.log("item",c),c.ok===1&&c.check_lines_by_id.length>0&&(e.items=e.items.map(k=>k.id===p&&t.week_id===d?{...k,status:"closed"}:k))}catch(c){console.error("Error checking line status:",c)}};return r(),ue(()=>t.week_id,d=>{e.items.forEach(p=>{a(d,p.id)})}),{...W(e),openDialog:u,closeDialog:i,formatDate:o,handleSubmit:h}}},Me={class:"container"},$e={class:"button-open"};function qe(t,e,u,i,o,h){const r=z("StepperComponent");return g(),w("div",Me,[s(v,{flat:""},{default:n(()=>[s(E,{class:"d-flex align-center pe-2"},{default:n(()=>[s(D,{icon:"mdi-calendar-week"}),_(" สัปดาห์ที่ "+m(u.week_id)+" ",1),s(P),s(N,{modelValue:t.search,"onUpdate:modelValue":e[0]||(e[0]=a=>t.search=a),density:"compact",label:"ค้นหา","prepend-inner-icon":"mdi-magnify",variant:"solo-filled",flat:"","hide-details":"","single-line":""},null,8,["modelValue"])]),_:1}),s(x,{search:t.search,"onUpdate:search":e[1]||(e[1]=a=>t.search=a),headers:t.headers,items:t.items},{"item.view":n(({item:a})=>[l("td",$e,[s(V,{onClick:d=>i.openDialog(a.id),disabled:a.status==="closed"},{default:n(()=>[s(D,{size:"24px",color:"primary"},{default:n(()=>[_(m(a.status==="pending"?"mdi-pencil":"mdi-eye"),1)]),_:2},1024)]),_:2},1032,["onClick","disabled"]),s(R,{modelValue:t.dialog[a.id],"onUpdate:modelValue":d=>t.dialog[a.id]=d,"max-width":"800",persistent:""},{default:n(()=>[s(v,{"prepend-icon":"mdi-eye",title:"จัดการการเข้าแถว"},{actions:n(()=>[s(P),s(V,{onClick:d=>i.closeDialog(a.id),color:"red"},{default:n(()=>e[2]||(e[2]=[l("h5",null,"ปิด",-1)])),_:2},1032,["onClick"])]),default:n(()=>[s(A,null,{default:n(()=>[s(r,{week_id:u.week_id,day_id:a.id,teacher_id:t.teacher,student_id:t.student,room_id:t.student,onSubmit:i.handleSubmit},null,8,["week_id","day_id","teacher_id","student_id","room_id","onSubmit"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),_:1},8,["search","headers","items"])]),_:1})])}const ze=S(Ee,[["render",qe],["__scopeId","data-v-5c25a4c5"]]),xe={components:{DayComponent:ze},setup(){const t=H({search:"",items:[],headers:[{title:"#",key:"id"},{title:"สัปดาห์",key:"week"},{title:"เริ่ม",key:"start"},{title:"สิ้นสุด",key:"end"},{title:"ห้อง",key:"room"},{title:"สถานะ",key:"status"},{title:"รายละเอียด",key:"view"}],dialog:{},teacher:""}),e=r=>{t.dialog[r]=!0},u=r=>{t.dialog[r]=!1},i=r=>{const a={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};return new Date(r).toLocaleString("th-TH",a)},o=r=>{console.log("Submitted Data:",r)};return(async()=>{try{const r=await q(),a=await M(),d=await X();d.ok===1&&Array.isArray(d.weeks)?t.items=d.weeks.map(p=>({id:p.id,week:p.week,start:p.start,end:p.end,room:p.room,status:p.status})):console.error("Invalid data structure from API:",d),r.ok===1?t.users=r.students:console.error("Invalid data structure from API:",r),a.ok===1?t.teacher=a.user.id:console.error("Invalid data structure from API:",a)}catch(r){console.error("Error fetching weeks:",r)}})(),{...W(t),openDialog:e,closeDialog:u,formatDate:i,handleSubmit:o}}},Ne={class:"container"},Fe={class:"hover-effect"};function Be(t,e,u,i,o,h){const r=z("DayComponent");return g(),w("div",Ne,[s(v,{flat:"",class:"elevation-3 animated-card"},{default:n(()=>[s(E,{class:"d-flex align-center pe-2 title-bar"},{default:n(()=>[s(D,{icon:"mdi-calendar-week",color:"primary"}),e[2]||(e[2]=l("span",{class:"ml-2 text-h6"},"เช็คชื่อเข้าแถว",-1)),s(P),s(N,{modelValue:t.search,"onUpdate:modelValue":e[0]||(e[0]=a=>t.search=a),density:"compact",label:"ค้นหา","prepend-inner-icon":"mdi-magnify",variant:"solo-filled","hide-details":"",class:"search-field"},null,8,["modelValue"])]),_:1}),s(I),s(x,{search:t.search,"onUpdate:search":e[1]||(e[1]=a=>t.search=a),headers:t.headers,"filter-keys":["id","start","end","week","room"],items:t.items},{"item.week":n(({item:a})=>[l("td",null,m(a.week),1)]),"item.start":n(({item:a})=>[l("td",null,m(i.formatDate(a.start)),1)]),"item.end":n(({item:a})=>[l("td",null,m(i.formatDate(a.end)),1)]),"item.room":n(({item:a})=>[l("td",null,m(a.room),1)]),"item.status":n(({item:a})=>[l("td",null,m(a.status),1)]),"item.view":n(({item:a})=>[l("td",Fe,[s(V,{onClick:d=>i.openDialog(a.id)},{default:n(()=>[s(D,{size:"24px",color:"primary"},{default:n(()=>[_(m(a.status==="pending"?"mdi-pencil":" mdi-eye"),1)]),_:2},1024)]),_:2},1032,["onClick"]),s(R,{modelValue:t.dialog[a.id],"onUpdate:modelValue":d=>t.dialog[a.id]=d,"max-width":"800",persistent:""},{default:n(()=>[s(v,{"prepend-icon":"mdi-eye",title:"จัดการการเข้าแถว"},{actions:n(()=>[s(P),s(V,{onClick:d=>i.closeDialog(a.id),color:"red"},{default:n(()=>e[3]||(e[3]=[l("h5",null,"ปิด",-1)])),_:2},1032,["onClick"])]),default:n(()=>[s(A,null,{default:n(()=>[s(r,{week_id:a.id,onSubmit:i.handleSubmit},null,8,["week_id","onSubmit"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),_:1},8,["search","headers","items"])]),_:1})])}const He=S(xe,[["render",Be],["__scopeId","data-v-ec562d03"]]),We={props:{week_id:{type:String,required:!0},day_id:{type:String,required:!0}},data(){return{check_line:[],picture:{},search:"",headers:[{title:"#",key:"student_id"},{title:"ชื่อ",key:"student_username"},{title:"อีเมล",key:"student_email"},{title:"สถานะ",key:"student_status"}]}},methods:{async toggleStatus(t){const e=t.student_status===1?0:1;(await ae(this.week_id,this.day_id,t.student_id,e)).ok===1?(t.student_status=e,this.$emit("update")):console.error("Failed to update status")}},async mounted(){const t=await Y(this.week_id,this.day_id);t.ok===1&&(this.check_line=t.check_lines_user,this.picture=t.check_lines_user[0].picture,console.log(this.picture))}};function Re(t,e,u,i,o,h){return g(),w("div",null,[s(j,{src:`http://localhost:7000/uploads/check_in_teacher/${o.picture}`,height:"200px",class:"mb-4"},null,8,["src"]),s(x,{search:o.search,"onUpdate:search":e[0]||(e[0]=r=>o.search=r),headers:o.headers,items:o.check_line,class:"elevation-1"},{"item.student_status":n(({item:r})=>[s(G,{color:r.student_status===1?"green":"red",dark:"",small:"",class:Z(["status-chip",r.student_status===1?"animate-green":"animate-red"]),onClick:a=>h.toggleStatus(r)},{default:n(()=>[_(m(r.student_status===1?"มา":"ขาด"),1)]),_:2},1032,["color","class","onClick"])]),_:1},8,["search","headers","items"])])}const Oe=S(We,[["render",Re],["__scopeId","data-v-b3eb885e"]]),je={components:{CheckIineComponent:Oe},props:{week_id:{type:String,required:!0}},setup(t){const e=H({search:"",items:[],headers:[{title:"#",key:"id"},{title:"เปอร์เซ็น",align:"end",key:"progress"},{title:"วัน",align:"end",key:"day"},{title:"รายละเอียด",align:"end",key:"view"}],dialog:{},teacher:"",student:{},studentCount:0,progress:"",itemsPerPage:8}),u=p=>{e.dialog[p]=!0},i=p=>{e.dialog[p]=!1,d()},o=p=>{const c={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};return new Date(p).toLocaleString("th-TH",c)},h=p=>{console.log("Submitted Data:",p)},r=()=>{d()},a=p=>e.studentCount===0?0:Math.round(p/e.studentCount*100),d=async()=>{try{const p=await se(t.week_id),c=await M(),k=await q();p.ok===1&&Array.isArray(p.days)?e.items=p.days.map(f=>({id:f.id,day:f.day,start:f.start,end:f.end,status:f.status,totalStudents:0})):console.error("Invalid data structure from API:",p),c.ok===1?e.teacher=c.user.id:console.error("Invalid data structure from API:",c),k.ok===1?(e.student=k.students,e.studentCount=k.students.length):console.error("Invalid data structure from API:",k);for(const f of e.items){const y=await Y(t.week_id,f.id);y.ok===1&&(f.totalStudents=y.check_lines.length)}}catch(p){console.error("Error fetching weeks:",p)}};return d(),{...W(e),openDialog:u,closeDialog:i,formatDate:o,handleSubmit:h,handleUpdate:r,calculateProgress:a}}},Je={class:"container"},Qe={class:"ml-2 text-h6"},Ze={class:"text-h6"},Ge={class:"button-open"};function Ke(t,e,u,i,o,h){const r=z("CheckIineComponent");return g(),w("div",Je,[s(v,{flat:"",class:"elevation-3"},{default:n(()=>[s(E,{class:"d-flex align-center pe-2"},{default:n(()=>[s(D,{icon:"mdi-calendar-week",color:"primary"}),l("span",Qe,"สัปดาห์ที่ "+m(u.week_id),1),s(P),s(N,{modelValue:t.search,"onUpdate:modelValue":e[0]||(e[0]=a=>t.search=a),density:"compact",label:"ค้นหา","prepend-inner-icon":"mdi-magnify",variant:"solo-filled",flat:"","hide-details":"","single-line":"",class:"search-field"},null,8,["modelValue"])]),_:1}),s(x,{search:t.search,"onUpdate:search":e[1]||(e[1]=a=>t.search=a),headers:t.headers,items:t.items,class:"custom-data-table"},{"item.progress":n(({item:a})=>[s(oe,{"model-value":i.calculateProgress(a.totalStudents),height:"30",color:"#9292D1",rounded:"",striped:""},{default:n(()=>[l("span",Ze,m(i.calculateProgress(a.totalStudents))+"%",1)]),_:2},1032,["model-value"])]),"item.view":n(({item:a})=>[l("td",Ge,[s(V,{onClick:d=>i.openDialog(a.id),class:"btn-open",icon:""},{default:n(()=>[s(D,{size:"24px",color:"primary"},{default:n(()=>[_(m(a.status==="pending"?"mdi-pencil":"mdi-eye"),1)]),_:2},1024)]),_:2},1032,["onClick"]),s(R,{modelValue:t.dialog[a.id],"onUpdate:modelValue":d=>t.dialog[a.id]=d,"max-width":"800",persistent:"",transition:"dialog-bottom-transition"},{default:n(()=>[s(v,{"prepend-icon":"mdi-eye",title:"เช็คข้อมูล",class:"dialog-card"},{actions:n(()=>[s(P),s(V,{onClick:d=>i.closeDialog(a.id),color:"red",class:"btn-close"},{default:n(()=>e[2]||(e[2]=[l("h5",null,"ปิด",-1)])),_:2},1032,["onClick"])]),default:n(()=>[s(A,null,{default:n(()=>[s(r,{week_id:u.week_id,day_id:a.id,onSubmit:i.handleSubmit,onUpdate:i.handleUpdate},null,8,["week_id","day_id","onSubmit","onUpdate"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),_:1},8,["search","headers","items"])]),_:1})])}const Xe=S(je,[["render",Ke],["__scopeId","data-v-2d976964"]]),Ye={components:{DayComponent:Xe},setup(){const t=H({search:"",items:[],totalStudents:[],headers:[{title:"#",key:"id"},{title:"สัปดาห์",key:"week"},{title:"เริ่ม",key:"start"},{title:"สิ้นสุด",key:"end"},{title:"ห้อง",key:"room"},{title:"สถานะ",key:"status"},{title:"รายละเอียด",key:"view"}],dialog:{},teacher:"",studentCount:0,dayCount:7,page:1,itemsPerPage:8,weekcount:0}),e=T(()=>t.search?t.items.filter(c=>Object.values(c).some(k=>String(k).toLowerCase().includes(t.search.toLowerCase()))):t.items),u=T(()=>{const c=(t.page-1)*t.itemsPerPage,k=c+t.itemsPerPage;return t.totalStudents.slice(c,k)}),i=T(()=>{const c=(t.page-1)*t.itemsPerPage,k=c+t.itemsPerPage;return e.value.slice(c,k)}),o=T(()=>Math.ceil(e.value.length/t.itemsPerPage)),h=c=>{t.dialog[c]=!0},r=c=>{t.dialog[c]=!1},a=c=>{const k={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};return new Date(c).toLocaleString("th-TH",k)},d=c=>{console.log("Submitted Data:",c)};return(async()=>{try{const c=await X(),k=await q(),f=await M();c.ok===1&&Array.isArray(c.weeks)?(t.items=c.weeks.map(y=>({id:y.id,week:y.week,start:y.start,end:y.end,room:y.room,status:y.status})),t.weekcount=c.weeks.length):console.error("Invalid data structure from API:",c),k.ok===1?t.studentCount=k.students.length:console.error("Invalid data structure from API:",k),f.ok===1?t.teacher=f.user.id:console.error("Invalid data structure from API:",f);for(const y of t.items)for(let F=1;F<=7;F++){const L=await Y(y.id,1);L.ok===1&&(t.totalStudents=L.check_lines.length)}}catch(c){console.error("Error fetching weeks:",c)}})(),{...W(t),totalStudents:u,openDialog:h,closeDialog:r,formatDate:a,handleSubmit:d,paginatedItems:i,totalPages:o}}},et={class:"container"};function tt(t,e,u,i,o,h){const r=z("DayComponent");return g(),w("div",et,[s(v,{flat:"",class:"elevation-3 animated-card"},{default:n(()=>[s(E,{class:"d-flex align-center pe-2 title-bar"},{default:n(()=>[s(D,{icon:"mdi-calendar-week",color:"primary"}),e[2]||(e[2]=l("span",{class:"ml-2 text-h6"},"ผลลัพธ์การเข้าแถว",-1)),s(P),s(N,{modelValue:t.search,"onUpdate:modelValue":e[0]||(e[0]=a=>t.search=a),density:"compact",label:"ค้นหา","prepend-inner-icon":"mdi-magnify",variant:"solo-filled","hide-details":"",class:"search-field"},null,8,["modelValue"])]),_:1}),s(I),s(ee,{class:"pa-4"},{default:n(()=>[(g(!0),w(B,null,O(i.paginatedItems,a=>(g(),C(Q,{key:a.id,cols:"12",sm:"6",md:"4",lg:"3"},{default:n(()=>[s(v,{class:"hover-effect"},{default:n(()=>[s(E,{class:"gradient-title"},{default:n(()=>[_("สัปดาห์ที่ "+m(a.week),1)]),_:2},1024),s(A,null,{default:n(()=>[l("div",null,[e[3]||(e[3]=l("strong",null,"เริ่ม:",-1)),_(" "+m(i.formatDate(a.start)),1)]),l("div",null,[e[4]||(e[4]=l("strong",null,"สิ้นสุด:",-1)),_(" "+m(i.formatDate(a.end)),1)]),l("div",null,[e[5]||(e[5]=l("strong",null,"ห้อง:",-1)),_(" "+m(a.room),1)]),l("div",null,[e[6]||(e[6]=l("strong",null,"สถานะ:",-1)),_(" "+m(a.status),1)])]),_:2},1024),s(J,null,{default:n(()=>[s(V,{onClick:d=>i.openDialog(a.id),class:"btn-open",icon:""},{default:n(()=>[s(D,{size:"24px",color:"primary"},{default:n(()=>[_(m(a.status==="pending"?"mdi-pencil":"mdi-eye"),1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),s(ne,{modelValue:t.page,"onUpdate:modelValue":e[1]||(e[1]=a=>t.page=a),length:i.totalPages,"total-visible":5,class:"mt-4"},null,8,["modelValue","length"]),(g(!0),w(B,null,O(t.items,a=>(g(),C(R,{key:a.id,modelValue:t.dialog[a.id],"onUpdate:modelValue":d=>t.dialog[a.id]=d,"max-width":"800",persistent:""},{default:n(()=>[s(v,{"prepend-icon":"mdi-eye",title:"จัดการการเข้าแถว"},{actions:n(()=>[s(P),s(V,{onClick:d=>i.closeDialog(a.id),color:"red"},{default:n(()=>e[7]||(e[7]=[l("h5",null,"ปิด",-1)])),_:2},1032,["onClick"])]),default:n(()=>[s(A,null,{default:n(()=>[s(r,{week_id:a.id,onSubmit:i.handleSubmit},null,8,["week_id","onSubmit"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"]))),128))]),_:1})])}const st=S(Ye,[["render",tt],["__scopeId","data-v-22f39613"]]),at={props:{student_id:{type:String,required:!0}},data(){return{search:"",students:[],headers:[{title:"#",key:"check_line_id"},{title:"สัปดาห์",key:"week"},{title:"วันที่",key:"day_id"},{title:"สถานะ",key:"student_status"}]}},methods:{async toggleStatus(t){const e=t.student_status===1?0:1;(await ae(t.week,t.day_id,t.student_id,e)).ok===1?(t.student_status=e,this.$emit("update")):console.error("Failed to update status")}},async mounted(){const t=await le(this.student_id);t.ok===1&&(this.students=t.check_lines_by_id.map((e,u)=>({...e,check_line_id:u+1}))),console.log(this.students)}},nt={class:"container"};function ot(t,e,u,i,o,h){return g(),w("div",nt,[s(v,{flat:"",class:"elevation-3 animated-card"},{default:n(()=>[s(E,{class:"d-flex align-center pe-2 title-bar"},{default:n(()=>[s(N,{modelValue:o.search,"onUpdate:modelValue":e[0]||(e[0]=r=>o.search=r),density:"compact",label:"ค้นหา","prepend-inner-icon":"mdi-magnify",variant:"solo-filled","hide-details":"",class:"search-field"},null,8,["modelValue"])]),_:1}),s(I),s(x,{search:o.search,"onUpdate:search":e[1]||(e[1]=r=>o.search=r),headers:o.headers,items:o.students,class:"elevation-1"},{"item.student_status":n(({item:r})=>[s(G,{color:r.student_status===1?"green":"red",dark:"",small:"",class:Z(["status-chip",r.student_status===1?"animate-green":"animate-red"]),onClick:a=>h.toggleStatus(r)},{default:n(()=>[_(m(r.student_status===1?"มา":"ขาด"),1)]),_:2},1032,["color","class","onClick"])]),_:1},8,["search","headers","items"])]),_:1})])}const rt=S(at,[["render",ot],["__scopeId","data-v-c644846b"]]),it={components:{studentViewCompomponent:rt},setup(){const t=H({search:"",items:[],totalStudents:[],headers:[{title:"#",key:"id"},{title:"สัปดาห์",key:"username"},{title:"ชื่อ",key:"firstname"},{title:"นามสกุล",key:"lastname"},{title:"ห้อง",key:"user_type"},{title:"รายละเอียด",key:"status"}],dialog:{},teacher:"",studentCount:0,dayCount:7,page:1,itemsPerPage:8,weekcount:0,studentCounts:[]}),e=T(()=>t.search?t.items.filter(f=>Object.values(f).some(y=>String(y).toLowerCase().includes(t.search.toLowerCase()))):t.items),u=T(()=>{const f=(t.page-1)*t.itemsPerPage,y=f+t.itemsPerPage;return t.totalStudents.slice(f,y)}),i=T(()=>{const f=(t.page-1)*t.itemsPerPage,y=f+t.itemsPerPage;return e.value.slice(f,y)}),o=T(()=>Math.ceil(e.value.length/t.itemsPerPage)),h=f=>{t.dialog[f]=!0},r=f=>{t.dialog[f]=!1},a=f=>{const y={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};return new Date(f).toLocaleString("th-TH",y)},d=f=>{console.log("Submitted Data:",f)},p=()=>{c()},c=async()=>{try{const f=await X(),y=await q(),F=await M();y.ok===1&&Array.isArray(y.students)?(t.items=y.students.map(U=>({id:U.student_id,username:U.student_username,firstname:U.student_firstname,lastname:U.student_lastname,email:U.student_email,user_type:U.student_type,profile:U.student_profile,room:U.student_room,status:U.user_status})),console.log(t.items)):console.error("Invalid data structure from API:",f);const L=await de();L.ok===1&&(t.studentCounts=L.studentCounts),console.log("testline",L)}catch(f){console.error("Error fetching weeks:",f)}},k=f=>{const y=t.studentCounts.find(L=>L.student_id===f);if(!y)return 0;const F=y.count/90*100;return Math.round(F)};return c(),{...W(t),totalStudents:u,openDialog:h,closeDialog:r,formatDate:a,handleSubmit:d,paginatedItems:i,totalPages:o,calculateProgress:k,handleUpdate:p}}},lt={class:"container"},dt={class:"text-h6"};function ut(t,e,u,i,o,h){const r=z("studentViewCompomponent");return g(),w("div",lt,[s(v,{flat:"",class:"elevation-3 animated-card"},{default:n(()=>[s(E,{class:"d-flex align-center pe-2 title-bar"},{default:n(()=>[s(D,{icon:"mdi-calendar-week",color:"primary"}),e[2]||(e[2]=l("span",{class:"ml-2 text-h6"},"สรุปผลนักเรียน",-1)),s(P),s(N,{modelValue:t.search,"onUpdate:modelValue":e[0]||(e[0]=a=>t.search=a),density:"compact",label:"ค้นหา","prepend-inner-icon":"mdi-magnify",variant:"solo-filled","hide-details":"",class:"search-field"},null,8,["modelValue"])]),_:1}),s(I),s(ee,{class:"pa-4"},{default:n(()=>[(g(!0),w(B,null,O(i.paginatedItems,a=>(g(),C(Q,{key:a.id,cols:"12",sm:"6",md:"4",lg:"3"},{default:n(()=>[s(v,{class:"hover-effect"},{default:n(()=>[s(E,{class:"gradient-title"},{default:n(()=>[s(j,{src:`http://localhost:7000/uploads/profiles/${a.profile}`,height:"200px"},null,8,["src"])]),_:2},1024),s(A,{class:"container"},{default:n(()=>[s(oe,{"model-value":i.calculateProgress(a.id),height:40,size:160,rotate:10,color:"#9292D1",class:"text-h6",striped:""},{default:n(()=>[l("span",dt,m(i.calculateProgress(a.id))+"%",1)]),_:2},1032,["model-value"]),l("div",null,[e[3]||(e[3]=l("strong",null,"ไอดีนักเรียน:",-1)),_(" "+m(a.id),1)]),l("div",null,[e[4]||(e[4]=l("strong",null,"ชื่อผู้ใช้:",-1)),_(" "+m(a.username),1)]),l("div",null,[e[5]||(e[5]=l("strong",null,"อีเมล:",-1)),_(" "+m(a.email),1)]),l("div",null,[e[6]||(e[6]=l("strong",null,"ชื่อ:",-1)),_(" "+m(a.firstname),1)]),l("div",null,[e[7]||(e[7]=l("strong",null,"นามสกุล:",-1)),_(" "+m(a.lastname),1)]),l("div",null,[e[8]||(e[8]=l("strong",null,"ห้อง:",-1)),_(" "+m(a.room),1)]),l("div",null,[e[9]||(e[9]=l("strong",null,"สถานะ:",-1)),s(G,{color:a.status===1?"green":"red",dark:"",small:"",class:Z(["status-chip",a.status===1?"animate-green":"animate-red"])},{default:n(()=>[_(m(a.status===1?"ออนไลน์":"ออฟไลน์"),1)]),_:2},1032,["color","class"])])]),_:2},1024),s(J,null,{default:n(()=>[s(V,{onClick:d=>i.openDialog(a.id),class:"btn-open",icon:""},{default:n(()=>[s(D,{size:"24px",color:"primary"},{default:n(()=>[_(m(a.status==="pending"?"mdi-pencil":"mdi-eye"),1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),s(ne,{modelValue:t.page,"onUpdate:modelValue":e[1]||(e[1]=a=>t.page=a),length:i.totalPages,"total-visible":5,class:"mt-4"},null,8,["modelValue","length"]),(g(!0),w(B,null,O(t.items,a=>(g(),C(R,{key:a.id,modelValue:t.dialog[a.id],"onUpdate:modelValue":d=>t.dialog[a.id]=d,"max-width":"800",persistent:""},{default:n(()=>[s(v,{"prepend-icon":"mdi-eye",title:"จัดการการเข้าแถว"},{actions:n(()=>[s(P),s(V,{onClick:d=>i.closeDialog(a.id),color:"red"},{default:n(()=>e[10]||(e[10]=[l("h5",null,"ปิด",-1)])),_:2},1032,["onClick"])]),default:n(()=>[s(A,null,{default:n(()=>[s(r,{student_id:a.id,onSubmit:i.handleSubmit,onUpdate:i.handleUpdate},null,8,["student_id","onSubmit","onUpdate"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"]))),128))]),_:1})])}const ct=S(it,[["render",ut],["__scopeId","data-v-fe60957a"]]),mt={setup(){return{}}};function pt(t,e,u,i,o,h){return g(),w("div")}const ft=S(mt,[["render",pt]]),gt={name:"NavigationDrawer",components:{HeaderComponent:te,HomeComponent:Ue,ImageCheckComponent:He,ImageViewComponent:st,StudentComponent:ct,InputDataComponent:ft},data(){return{user:{id:"",username:"",email:"",role:"",profile:"",user_type:""},drawer:!0,rail:!0,dynamicComponent:"HomeComponent",username:"",isMobile:!1,router:ce(),route:me()}},methods:{changeComponent(t){this.dynamicComponent=t,localStorage.setItem("lastComponentteacher",t)},fetchUsersData(){const t=localStorage.getItem("token");t&&K.get("http://localhost:7000/user/get-user",{headers:{authorization:`Bearer ${t}`}}).then(e=>{const u=e.data;u.ok===1?(this.profileImages=`http://localhost:7000/uploads/profiles/${u.user.profile}`,this.username=u.user.username):console.error("Error fetching user data:",u.error)}).catch(e=>{console.error("Error fetching user data:",e)})},updateIsMobile(){this.isMobile=window.innerWidth<=0}},computed:{avatarSize(){this.rail&&!this.isMobile?this.avatarSize=48:this.avatarSize=36}},async mounted(){const t=await M();t.ok===1?t.user.user_type=="teacher"?this.user=t.user:this.$router.push("/"):this.$router.push("/"),this.fetchUsersData(),this.updateIsMobile();const e=localStorage.getItem("lastComponentteacher");e&&(this.dynamicComponent=e),window.addEventListener("resize",this.updateIsMobile)},beforeDestroy(){window.removeEventListener("resize",this.updateIsMobile)}},ht={key:0},_t={key:0},kt={key:0},yt={key:0};function wt(t,e,u,i,o,h){const r=te;return g(),C(v,null,{default:n(()=>[s(ke,null,{default:n(()=>[s(ge,{modelValue:o.drawer,"onUpdate:modelValue":e[5]||(e[5]=a=>o.drawer=a),rail:o.rail&&!o.isMobile,permanent:"",onClick:e[6]||(e[6]=a=>o.rail=!1),width:260},{default:n(()=>[s($,{class:"profile-container"},{default:n(()=>[!o.rail||o.isMobile?(g(),C($,{key:0,title:`Face \r
                Detection`,class:"profile-name"})):b("",!0),!o.rail||o.isMobile?(g(),C(he,{key:1},{default:n(()=>[s(V,{class:"toggle-rail-btn",icon:"mdi-chevron-left",variant:"text",onClick:e[0]||(e[0]=pe(a=>o.rail=!o.rail,["stop"]))})]),_:1})):b("",!0)]),_:1}),s(I),s(_e,{density:"compact",nav:""},{default:n(()=>[s($,{"prepend-icon":"mdi-home-city",value:"หน้าหลัก",title:"",onClick:e[1]||(e[1]=a=>h.changeComponent("HomeComponent")),class:"custom-title-head"},{default:n(()=>[o.rail?b("",!0):(g(),w("a",ht," หน้าหลัก "))]),_:1}),o.rail?(g(),C(I,{key:1})):(g(),C(I,{key:0},{default:n(()=>e[7]||(e[7]=[_("จัดการการเข้าแถว")])),_:1})),s($,{"prepend-icon":"mdi-image-check",value:"จัดการการเข้าแถว",title:"",onClick:e[2]||(e[2]=a=>h.changeComponent("ImageCheckComponent")),class:"custom-title-body"},{default:n(()=>[o.rail?b("",!0):(g(),w("p",_t,"จัดการการเข้าแถว"))]),_:1}),s($,{"prepend-icon":"mdi-database-eye",value:"ผลการเข้าแถว",title:"",onClick:e[3]||(e[3]=a=>h.changeComponent("ImageViewComponent")),class:"custom-title-body"},{default:n(()=>[o.rail?b("",!0):(g(),w("p",kt,"ผลการเข้าแถว"))]),_:1}),o.rail?(g(),C(I,{key:3})):(g(),C(I,{key:2},{default:n(()=>e[8]||(e[8]=[_("นักเรียนในการดูแล")])),_:1})),s($,{"prepend-icon":"mdi-database-eye",value:"สรุปผลนักเรียน",title:"",onClick:e[4]||(e[4]=a=>h.changeComponent("StudentComponent")),class:"custom-title-body"},{default:n(()=>[o.rail?b("",!0):(g(),w("p",yt,"สรุปผลนักเรียน"))]),_:1})]),_:1})]),_:1},8,["modelValue","rail"]),s(ve,null,{default:n(()=>[s(r),(g(),C(fe(o.dynamicComponent)))]),_:1})]),_:1})]),_:1})}const vt=S(gt,[["render",wt],["__scopeId","data-v-95e651d9"]]),Ct={components:{NDTeacher:vt}};function Vt(t,e,u,i,o,h){const r=z("NDTeacher");return g(),C(r)}const Ot=S(Ct,[["render",Vt]]);export{Ot as default};
