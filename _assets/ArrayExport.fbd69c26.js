import{a as i,i as e,o as t,j as s,k as o,w as r,p as d}from"./index.54b7cc7b.js";import"./xlsx.a48e520c.js";import"./index.a52d88f6.js";import"./index.a439205d.js";import"./Trigger.9f179c61.js";import"./omit.a368f9ae.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6cff96b8.js";import"./CheckOutlined.29be3015.js";import"./index.a5bb273d.js";import"./colors.5745025a.js";import"./index.10e116a5.js";import"./RightOutlined.0becd0a0.js";import"./index.39160d78.js";import"./types.c19bf052.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.eedde627.js";import"./_baseFor.f4e5f03f.js";import"./index.56208f19.js";import"./index.a172b251.js";import"./index.3d154f97.js";import"./index.48bb8c88.js";import"./UpOutlined.78f2a1da.js";import"./LeftOutlined.ec9c5e19.js";import"./index.2a5e56d5.js";import"./index.551ba04e.js";import"./index.b96a1214.js";import"./index.dfac5dac.js";import"./index.9dad5c27.js";import"./zh_CN.0242bd16.js";import"./TableAction.5cb35fa3.js";import"./index.5869ffa6.js";import"./CaretDownFilled.9914b908.js";import"./CheckOutlined.849e8bad.js";import"./CloseOutlined.2f4d26e5.js";import{s as a}from"./EditTableHeaderIcon.77d2e466.js";import"./DownOutlined.56cf5734.js";import"./FullscreenOutlined.402f7a3b.js";import"./LeftOutlined.f377cd8d.js";import"./functional.f8b4d09e.js";import"./RedoOutlined.7a1d2243.js";import"./RightOutlined.81bd46b9.js";import"./SettingOutlined.76369938.js";import"./useTimeout.8036edbf.js";import"./useDebounce.eb7ff478.js";import"./useEventListener.89e18c2c.js";import"./useBreakpoint.7a6f6445.js";import"./index.dcd2bc4f.js";import"./tsxHelper.948ab144.js";import"./index.32b7dc7d.js";import"./index.90135c93.js";import"./useForm.ba76dbfd.js";import"./index.611d4577.js";import"./useModalContext.fd3dbdef.js";import"./domUtils.745b64ab.js";import"./useFullScreen.ca67aa0c.js";import"./uuid.40269c00.js";import"./useWindowSizeFn.86d8ff28.js";import"./useExpose.5bc091f5.js";import"./index.6f8ac870.js";import{c as m,d as p,a as n,b as j,e as c}from"./data.7596f14f.js";import"./index.b2298ad1.js";var f=i({components:{BasicTable:a},setup:()=>({aoaToExcel:function(){n({data:j,header:c,filename:"二维数组方式导出excel.xlsx"})},columns:m,data:p})});const l={class:"m-4"},b=d("导出");f.render=function(i,d,a,m,p,n){const j=e("a-button"),c=e("BasicTable");return t(),s("div",l,[o(c,{title:"基础表格",columns:i.columns,dataSource:i.data},{toolbar:r((()=>[o(j,{onClick:i.aoaToExcel},{default:r((()=>[b])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])};export default f;