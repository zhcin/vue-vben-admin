let e=document.createElement("style");e.innerHTML=".demo[data-v-1de7c5b2]{background:#fff}",document.head.appendChild(e);import{a as t,g as s,dp as a,s as o,dq as n,c$ as r,d0 as d,i as l,o as i,j as c,k as u,n as m,p,aS as f}from"./index.b76f096f.js";import"./xlsx.a48e520c.js";import{A as R}from"./index.68bab8b7.js";import"./index.857a7cfa.js";import S from"./CurrentPermissionMode.963d2ccb.js";var b=t({components:{Alert:R,CurrentPermissionMode:S},setup(){const{changeRole:e}=n();return{userStore:s,RoleEnum:a,isSuper:o((()=>s.getRoleListState.includes(a.SUPER))),isTest:o((()=>s.getRoleListState.includes(a.TEST))),changeRole:e}}});const g=f("data-v-1de7c5b2");r("data-v-1de7c5b2");const E={class:"p-4 m-4 demo"},y=p(" 当前角色: "),T={class:"mt-4"},h=p(" 权限切换(请先切换权限模式为前端角色权限模式): ");d();const v=g(((e,t,s,a,o,n)=>{const r=l("Alert"),d=l("CurrentPermissionMode"),f=l("a-button"),R=l("a-button-group");return i(),c("div",E,[u(r,{message:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口","show-icon":""}),u(d),u("p",null,[y,u("a",null,m(e.userStore.getRoleListState),1)]),u(r,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),u("div",T,[h,u(R,null,{default:g((()=>[u(f,{onClick:t[1]||(t[1]=t=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:g((()=>[p(m(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),u(f,{onClick:t[2]||(t[2]=t=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:g((()=>[p(m(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})])])}));b.render=v,b.__scopeId="data-v-1de7c5b2";export default b;