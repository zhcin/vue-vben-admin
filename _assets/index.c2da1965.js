import{a as e,h as s,i,o,j as t,k as r}from"./index.087827bd.js";import"./xlsx.a48e520c.js";import"./index.b3d27e93.js";import"./Trigger.1f027942.js";import"./omit.c8603bdb.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d1376850.js";import"./CheckOutlined.e291a1f5.js";import{a as p,s as a,u as n}from"./index.ecb658c5.js";import"./index.d2cb24e8.js";import"./colors.863e863c.js";import"./index.bbd9dec1.js";import"./RightOutlined.a721f23a.js";import"./index.648eb728.js";import"./types.ec785e86.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.42257f09.js";import"./index.ff61dcf3.js";import"./index.ea1c54a6.js";import"./UpOutlined.25f25eae.js";import"./DownOutlined.6f919f42.js";import"./index.335f5816.js";import"./index.2ea1877e.js";import"./index.f02f1014.js";import"./CloseOutlined.1a46c05c.js";import"./index.f6b60b0d.js";import"./LeftOutlined.f312add8.js";import"./functional.7d386e92.js";import"./RightOutlined.83a2612e.js";import"./useContext.2506cc4d.js";import"./useTimeout.e40508cb.js";import"./useDebounce.9c7c5ce5.js";import"./useEventListener.6468cfe0.js";import"./useBreakpoint.be0fab75.js";import"./resizeEvent.dd57c904.js";import"./tsxHelper.c465228b.js";import"./index.1982236a.js";import"./propTypes.81b46aad.js";import"./index.859e5d00.js";import"./index.663602f0.js";import"./useWindowSizeFn.6bad7e86.js";import"./uuid.40269c00.js";import"./download.b61d92d2.js";import{u as m}from"./useForm.162de352.js";const d=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:n}}];var c=e({components:{BasicUpload:p,BasicForm:a},setup(){const{createMessage:e}=s(),[i]=m({labelWidth:120,schemas:d,actionColOptions:{span:16}});return{handleChange:s=>{e.info(`已上传文件${JSON.stringify(s)}`)},uploadApi:n,register:i}}});const j={class:"p-4"};c.render=function(e,s,p,a,n,m){const d=i("a-alert"),c=i("BasicUpload"),l=i("BasicForm");return o(),t("div",j,[r(d,{message:"基础示例",class:"my-5"}),r(c,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi},null,8,["onChange","api"]),r(d,{message:"嵌入表单,加入表单校验",class:"my-5"}),r(l,{onRegister:e.register},null,8,["onRegister"])])};export default c;