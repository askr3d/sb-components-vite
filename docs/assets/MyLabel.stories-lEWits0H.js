import{j as z}from"./jsx-runtime-D_zvdyIk.js";const f=({label:s,size:g="normal",allCaps:h=!1,color:x,fontColor:L})=>z.jsx("span",{className:`${g} ${x} label`,style:{color:L},children:h?s.toUpperCase():s});f.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to displpay"},size:{required:!1,tsType:{name:"union",raw:'"normal" | "h1" | "h2" | "h3"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:"Label size",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Capitalize all letters",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-teartiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-teartiary'"}]},description:"Label Color"},fontColor:{required:!1,tsType:{name:"string"},description:"Font Color"}}};const S={title:"UI/labels/MyLabel",component:f,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Label",size:"h1"}},a={args:{label:"All Caps Label",size:"normal",allCaps:!0}},r={args:{label:"Scondary Label",size:"h2",color:"text-secondary"}},l={args:{label:"Custom Color Label",size:"h3",fontColor:"#5517ac"}};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'h1'
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'All Caps Label',
    size: 'normal',
    allCaps: true
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Scondary Label',
    size: 'h2',
    color: 'text-secondary'
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var y,b,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color Label',
    size: 'h3',
    fontColor: '#5517ac'
  }
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const T=["Basic","AllCaps","Sedondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Sedondary,T as __namedExportsOrder,S as default};
