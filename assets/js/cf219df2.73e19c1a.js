"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[79756],{37047:(t,e,n)=>{n.d(e,{w:()=>p});var a=n(67294),o=n(35742),l=n(14330),r=n(98576),i=n(61720),p=function(){return a.createElement(o.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+r.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n        "))}},22365:(t,e,n)=>{n.d(e,{Z:()=>E});var a=n(63366),o=n(87462),l=n(67294),r=n(10407),i=n(86010),p=(n(95999),n(52263)),d=n(91262),m=n(66412);const s="playgroundContainer_TGbA",c="playgroundEditor_PvJ1",u="playgroundPreview_bb8I",k="toggleContainer_ZZiH",C="toggleIcon_OnrQ",g="showCode_O0Od";var N=n(72389),h=n(5434),A=["children","transformCode"];function f(){return l.createElement("div",null,"Loading...")}function y(t){var e=(0,N.Z)(),n=(0,l.useContext)(r.L2),a=n.code,i=n.language,p=n.theme,d=n.disabled,m=n.onChange;return l.createElement(r.uz,(0,o.Z)({key:String(e),code:a,language:i,theme:p,disabled:d,onChange:m},t,{className:c}))}function v(t){var e=t.showCode,n=t.preImports,a=void 0===n?"":n,o=(t.wrapper,l.useState(e)),p=o[0],m=o[1],s=function(){m((function(t){return!t}))};return l.createElement(l.Fragment,null,l.createElement("div",{className:u},l.createElement(d.Z,{fallback:l.createElement(f,null)},(function(){return l.createElement(l.Fragment,null,l.createElement(r.i5,null),l.createElement(r.IF,null),l.createElement("div",{className:k},l.createElement("div",{className:(0,i.Z)(C),onClick:s},l.createElement(h.xoN,null),l.createElement("span",{className:g},p?"Hide":"Show"," Code"))))}))),p&&l.createElement(y,{preImports:a,showCode:p}))}function E(t){var e=t.children,n=(t.transformCode,(0,a.Z)(t,A)),i=((0,p.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,m.p)());return l.createElement("div",{className:s},l.createElement(r.nu,(0,o.Z)({code:e.replace(/\n$/,""),theme:i},n),l.createElement(v,{showCode:n.showCode})))}},56922:(t,e,n)=>{n.d(e,{Z:()=>p});var a=n(67294),o=n(32408),l=n(13925),r=n(53211),i=n(83279);const p=Object.assign({React:a,LinearGradient:i.Z},o,l,r,a)},34970:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>N,contentTitle:()=>C,default:()=>f,frontMatter:()=>k,metadata:()=>g,toc:()=>h});var a=n(87462),o=n(63366),l=(n(67294),n(3905)),r=n(37047),i=(n(74866),n(85162),n(96711)),p=n(47516),d=n(23612),m=["components"],s={toc:[]};function c(t){var e=t.components,n=(0,o.Z)(t,m);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(d.Z,{type:"tip",icon:"\ud83d\udca1",title:"Web-platform specific note",mdxType:"Admonition"},"You ",(0,l.kt)("b",null,"must")," pass a valid React Native"," ",(0,l.kt)("a",{href:"https://reactnative.dev/docs/modal"},"Modal")," component implementation into ",(0,l.kt)("a",{href:"#modalcomponent"},"ModalComponent")," prop because `Modal` component is not implemented yet in `react-native-web`"),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\nimport Modal from 'modal-react-native-web';\n\n\n<Tooltip ModalComponent={Modal} ... />\n\n")),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE Tooltip","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Tooltip%2C%20Text%2C%20lightColors%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Dimensions%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20Modal%20from%20'modal-react-native-web'%3B%0A%0Aconst%20%7B%20height%20%7D%20%3D%20Dimensions.get('window')%3B%0A%0Aconst%20ControlledTooltip%3A%20React.FC%3CTooltipProps%3E%20%3D%20(props)%20%3D%3E%20%7B%0A%20%20const%20%5Bopen%2C%20setOpen%5D%20%3D%20React.useState(false)%3B%0A%20%20return%20(%0A%20%20%20%20%3CTooltip%0A%20%20%20%20%20%20visible%3D%7Bopen%7D%0A%20%20%20%20%20%20onOpen%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setOpen(true)%3B%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20onClose%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setOpen(false)%3B%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%7B...props%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D%3B%0Aconst%20TooltipComponent%20%3D%20()%20%3D%3E%20%7B%0A%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20marginVertical%3A%20height%20%2F%208%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CControlledTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3Eno%20caret!%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20withPointer%3D%7Bfalse%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3Ewithout%20caret%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FControlledTooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%3CControlledTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3ETooltip%20info%20goes%20here%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B200%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%7BlightColors.primary%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EPress%20me%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FControlledTooltip%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CControlledTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20ModalComponent%3D%7BModal%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%7BlightColors.secondary%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3ETooltip%20info%20goes%20here%20too.%20Find%20tooltip%20everywhere%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20width%3A%20200%2C%20height%3A%2060%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EPress%20me%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FControlledTooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%3CControlledTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20width%3A%20145%2C%20height%3A%20130%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'Some%20big%20text%20full%20of%20important%20stuff%20for%20the%20super%20duper%20user%20that%20our%20design%20has%20been%20created%20for'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EHUGE%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FControlledTooltip%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CControlledTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B200%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%7BlightColors.primary1%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3ETooltip%20info%20goes%20here%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EMore%20attention%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FControlledTooltip%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CControlledTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B200%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%7BlightColors.primary2%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3ETooltip%20info%20goes%20here%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EI'm%20different%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FControlledTooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%3CControlledTooltip%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B200%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20popover%3D%7B%3CText%3ETooltip%20info%20goes%20here%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3EPress%20me%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FControlledTooltip%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Aview%3A%20%7B%0A%20%20display%3A%20'flex'%2C%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20justifyContent%3A%20'space-evenly'%2C%0A%20%20marginVertical%3A%2050%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20TooltipComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base,modal-react-native-web","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0;var u=["components"],k={id:"tooltip",title:"Tooltip"},C=void 0,g={unversionedId:"components/tooltip",id:"version-4.0.0-rc.7/components/tooltip",title:"Tooltip",description:"Tooltips display informative text when users tap on an element.",source:"@site/versioned_docs/version-4.0.0-rc.7/components/Tooltip.mdx",sourceDirName:"components",slug:"/components/tooltip",permalink:"/docs/components/tooltip",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.7/components/Tooltip.mdx",tags:[],version:"4.0.0-rc.7",frontMatter:{id:"tooltip",title:"Tooltip"},sidebar:"docs",previous:{title:"Tile",permalink:"/docs/components/tile"},next:{title:"Contributing",permalink:"/docs/contributing"}},N={},h=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:3},{value:"Props",id:"props",level:2}],A={toc:h};function f(t){var e=t.components,n=(0,o.Z)(t,u);return(0,l.kt)("wrapper",(0,a.Z)({},A,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(r.w,{mdxType:"IconsStyle"}),(0,l.kt)("p",null,"Tooltips display informative text when users tap on an element."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("div",{class:"row inline-flex-center"},(0,l.kt)("div",{class:"col col--3"},(0,l.kt)("h4",null,"Import")),(0,l.kt)("div",{class:"col col--9"},(0,l.kt)(i.Z,{mdxType:"CodeBlock"},"import { Tooltip } from '@rneui/themed';")),(0,l.kt)("div",{class:"col col--3"},(0,l.kt)("h4",null,"Theme Key"," ",(0,l.kt)("a",{href:"../customizing#using-themeprovider"},(0,l.kt)(p.Fs0,{mdxType:"BiInfoCircle"})))),(0,l.kt)("div",{class:"col col--9"},(0,l.kt)(i.Z,{mdxType:"CodeBlock"},"Tooltip"))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'function RNETooltip() {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <Stack row align="center">\n      <Tooltip\n        visible={open}\n        onOpen={() => setOpen(true)}\n        onClose={() => setOpen(false)}\n        popover={<Text style={{ color: "#fff" }}>Tooltip text</Text>}\n      >\n        Click me\n      </Tooltip>\n    </Stack>\n  );\n}\n')),(0,l.kt)(c,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ModalComponent")),(0,l.kt)("td",{parentName:"tr",align:null},"typeof Component"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Override React Native ",(0,l.kt)("inlineCode",{parentName:"td"},"Modal")," component (usable for web-platform).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"animationType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"none")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"fade")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fade")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"backgroundColor")),(0,l.kt)("td",{parentName:"tr",align:null},"ColorValue"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"#617080")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets backgroundColor of the tooltip and pointer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"closeOnlyOnBackdropPress")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Flag to determine whether to disable auto hiding of tooltip when touching/scrolling anywhere inside the active tooltip popover container. When ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", Tooltip closes only when overlay backdrop is pressed (or) highlighted tooltip button is pressed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}")),(0,l.kt)("td",{parentName:"tr",align:null},"Passes style object to tooltip container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"height")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"40")),(0,l.kt)("td",{parentName:"tr",align:null},"Tooltip container height. Necessary in order to render the container in the correct place. Pass height according to the size of the content rendered inside the container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"highlightColor")),(0,l.kt)("td",{parentName:"tr",align:null},"ColorValue"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"transparent")),(0,l.kt)("td",{parentName:"tr",align:null},"Color to highlight the item the tooltip is surrounding.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onClose")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Function")),(0,l.kt)("td",{parentName:"tr",align:null},"Function which gets called on closing the tooltip.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onOpen")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Function")),(0,l.kt)("td",{parentName:"tr",align:null},"Function which gets called on opening the tooltip.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"overlayColor")),(0,l.kt)("td",{parentName:"tr",align:null},"ColorValue"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"#fafafa14")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of overlay shadow when tooltip is open.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pointerColor")),(0,l.kt)("td",{parentName:"tr",align:null},"ColorValue"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"#617080")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of tooltip pointer, it defaults to the ",(0,l.kt)("a",{parentName:"td",href:"#backgroundcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"backgroundColor"))," if none is passed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pointerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style to be applied on the pointer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"popover")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReactElement<{}, string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"JSXElementConstructor<any>>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Component to be rendered as the display container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"skipAndroidStatusBar")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Force skip StatusBar height when calculating element position. Pass ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," if Tooltip used inside react-native Modal component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toggleAction")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPress")),(0,l.kt)("td",{parentName:"tr",align:null},"Define type of action that should trigger tooltip. Available options ",(0,l.kt)("em",{parentName:"td"},"onPress"),", ",(0,l.kt)("em",{parentName:"td"},"onLongPress"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toggleOnPress")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Flag to determine to toggle or not the tooltip on press.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"visible")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"To show the tooltip.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"width")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"150")),(0,l.kt)("td",{parentName:"tr",align:null},"Tooltip container width. Necessary in order to render the container in the correct place. Pass height according to the size of the content rendered inside the container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"withOverlay")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Flag to determine whether or not display overlay shadow when tooltip is open.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"withPointer")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Flag to determine whether or not to display the pointer."))))))}f.isMDXComponent=!0}}]);