(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[12322],{94137:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(67294),r=n(13925),o=n(54236),i=n(40318),l=n(62290);const c=function(){var e=(0,i.Z)({componentName:"Switch",props:{color:{value:r.defaultTheme.colors.primary,type:l.n.String,description:"Color"},value:{value:!1,type:l.n.Boolean,description:"Value",stateful:!0},onValueChange:{value:"() => setValue(!value)",propHook:{what:"!value",into:"value"},type:l.n.Function,description:"Function called when switch state is changed."}},scope:{Switch:r.Switch},imports:{"@rneui/base":{named:["Switch"]}}});return a.createElement(a.Fragment,null,a.createElement(o.Z,{params:e}))}},37047:(e,t,n)=>{"use strict";n.d(t,{w:()=>c});var a=n(67294),r=n(35742),o=n(14330),i=n(98576),l=n(61720),c=function(){return a.createElement(r.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+l.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n        "))}},54236:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(87462),r=n(67294),o=n(91262),i=n(18421),l=n(77356),c=n(41652),s=n(24309),p=n(16042),d=n(20346),m=n(30650);const u=function(e){var t=e.params,n=e.containerStyle,u=void 0===n?{}:n;return r.createElement(o.Z,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(d.X9.Provider,null,r.createElement(d.PK,{initialMetrics:m.o},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},u)},r.createElement(i.Z,(0,a.Z)({},t.compilerProps,{minHeight:62,placeholder:l.Z}))),r.createElement(c.Z,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(s.Z,t.knobProps),r.createElement(c.Z,t.errorProps),r.createElement(p.E,t.actions)))}))}},22365:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var a=n(63366),r=n(87462),o=n(67294),i=n(10407),l=n(86010),c=(n(95999),n(52263)),s=n(91262),p=n(66412);const d="playgroundContainer_TGbA",m="playgroundEditor_PvJ1",u="playgroundPreview_bb8I",h="toggleContainer_ZZiH",v="toggleIcon_OnrQ",k="showCode_O0Od";var w=n(72389),g=n(5434),f=["children","transformCode"];function C(){return o.createElement("div",null,"Loading...")}function y(e){var t=(0,w.Z)(),n=(0,o.useContext)(i.L2),a=n.code,l=n.language,c=n.theme,s=n.disabled,p=n.onChange;return o.createElement(i.uz,(0,r.Z)({key:String(t),code:a,language:l,theme:c,disabled:s,onChange:p},e,{className:m}))}function E(e){var t=e.showCode,n=e.preImports,a=void 0===n?"":n,r=(e.wrapper,o.useState(t)),c=r[0],p=r[1],d=function(){p((function(e){return!e}))};return o.createElement(o.Fragment,null,o.createElement("div",{className:u},o.createElement(s.Z,{fallback:o.createElement(C,null)},(function(){return o.createElement(o.Fragment,null,o.createElement(i.i5,null),o.createElement(i.IF,null),o.createElement("div",{className:h},o.createElement("div",{className:(0,l.Z)(v),onClick:d},o.createElement(g.xoN,null),o.createElement("span",{className:k},c?"Hide":"Show"," Code"))))}))),c&&o.createElement(y,{preImports:a,showCode:c}))}function S(e){var t=e.children,n=(e.transformCode,(0,a.Z)(e,f)),l=((0,c.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,p.p)());return o.createElement("div",{className:d},o.createElement(i.nu,(0,r.Z)({code:t.replace(/\n$/,""),theme:l},n),o.createElement(E,{showCode:n.showCode})))}},56922:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(67294),r=n(32408),o=n(13925),i=n(53211),l=n(83279);const c=Object.assign({React:a,LinearGradient:l.Z},r,o,i,a)},53150:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>v,default:()=>C,frontMatter:()=>h,metadata:()=>k,toc:()=>g});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(37047),l=(n(74866),n(85162),n(96711)),c=n(47516),s=["components"],p={toc:[]};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"snack-player","data-snack-name":"RNE Switch","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Switch%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Atype%20SwitchComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20SwitchComponent%3A%20React.FunctionComponent%3CSwitchComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bchecked%2C%20setChecked%5D%20%3D%20useState(false)%3B%0A%0Aconst%20toggleSwitch%20%3D%20()%20%3D%3E%20%7B%0A%20%20setChecked(!checked)%3B%0A%7D%3B%0A%0Areturn%20(%0A%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%3CSwitch%0A%20%20%20%20%20%20value%3D%7Bchecked%7D%0A%20%20%20%20%20%20onValueChange%3D%7B(value)%20%3D%3E%20setChecked(value)%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Aview%3A%20%7B%0A%20%20margin%3A%2010%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20SwitchComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0;var m=n(94137),u=["components"],h={id:"switch",title:"Switch"},v=void 0,k={unversionedId:"components/switch",id:"version-4.0.0-rc.7/components/switch",title:"Switch",description:"Switch represents user's decision of a process and indicates whether a state is on/off.",source:"@site/versioned_docs/version-4.0.0-rc.7/components/Switch.mdx",sourceDirName:"components",slug:"/components/switch",permalink:"/docs/components/switch",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.7/components/Switch.mdx",tags:[],version:"4.0.0-rc.7",frontMatter:{id:"switch",title:"Switch"},sidebar:"docs",previous:{title:"SpeedDial.Action",permalink:"/docs/components/speeddial_action"},next:{title:"Tab",permalink:"/docs/components/tab"}},w={},g=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],f={toc:g};function C(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.w,{mdxType:"IconsStyle"}),(0,o.kt)("p",null,"Switch represents user's decision of a process and indicates whether a state is on/off.\nSwitch is a controlled component that requires an ",(0,o.kt)("inlineCode",{parentName:"p"},"onValueChange")," to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," prop.\nThis renders a ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," value. React native elements provide you with additional ",(0,o.kt)("inlineCode",{parentName:"p"},"theme")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"color")," support in the Switch Button."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("div",{class:"row inline-flex-center"},(0,o.kt)("div",{class:"col col--3"},(0,o.kt)("h4",null,"Import")),(0,o.kt)("div",{class:"col col--9"},(0,o.kt)(l.Z,{mdxType:"CodeBlock"},"import { Switch } from '@rneui/themed';")),(0,o.kt)("div",{class:"col col--3"},(0,o.kt)("h4",null,"Theme Key"," ",(0,o.kt)("a",{href:"../customizing#using-themeprovider"},(0,o.kt)(c.Fs0,{mdxType:"BiInfoCircle"})))),(0,o.kt)("div",{class:"col col--9"},(0,o.kt)(l.Z,{mdxType:"CodeBlock"},"Switch"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'function RNESwitch() {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <Stack row align="center">\n      <Switch value={open} onValueChange={setOpen} />\n    </Stack>\n  );\n}\n')),(0,o.kt)(d,{mdxType:"Usage"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Includes all ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/switch.html#props"},"React Native Switch"),", ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,o.kt)("div",{class:"table-responsive"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"color")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"primary")),(0,o.kt)("td",{parentName:"tr",align:null},"The color of the Switch component."))))),(0,o.kt)("h2",{id:"playground"},"Playground"),(0,o.kt)(m.Z,{mdxType:"Play"}))}C.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);