(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[17591],{74335:(t,e,n)=>{"use strict";n.d(e,{Z:()=>d});var a=n(67294),l=n(13925),r=n(54236),o=n(40318),i=n(62290);const d=function(){var t=(0,o.Z)({componentName:"SocialIcon",props:{activityIndicatorStyle:{type:i.n.Object,value:"",description:"Style to render when in loading state"},button:{type:i.n.Boolean,value:!1},Component:{type:i.n.ReactNode,description:"React Native Component. Default =>\tTouchableHighlight",value:null},disabled:{type:i.n.Boolean,value:!1},fontFamily:{type:i.n.String,description:"System font bold (iOS), Sans Serif Black (android)"},fontStyle:{type:i.n.Object,value:"{}"},fontWeight:{type:i.n.String,description:"specify font weight of title if set as a button with a title"},iconColor:{type:i.n.String,value:""},iconSize:{type:i.n.Number,value:25},iconStyle:{type:i.n.Object,value:"{}"},iconType:{type:i.n.String,value:"font-awesome"},light:{type:i.n.Boolean,value:!1},loading:{type:i.n.Boolean,value:!1},onLongPress:{type:i.n.Function,value:'() => console.log("onLongPress()")'},onPress:{type:i.n.Function,value:'() => console.log("onPress()")'},raised:{type:i.n.Boolean,value:!1},style:{type:i.n.Object,value:"{paddingHorizontal:10}"},title:{type:i.n.String,value:"GitHub",description:"title if made into a button."},type:{type:i.n.String,value:"github"},underlayColor:{type:i.n.String,value:""}},scope:{SocialIcon:l.SocialIcon},imports:{"@rneui/base":{named:["SocialIcon"]}}});return a.createElement(a.Fragment,null,a.createElement(r.Z,{params:t}))}},37047:(t,e,n)=>{"use strict";n.d(e,{w:()=>d});var a=n(67294),l=n(35742),r=n(14330),o=n(98576),i=n(61720),d=function(){return a.createElement(l.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+r.Z+") format('truetype');\n          }\n        "))}},54236:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var a=n(87462),l=n(67294),r=n(91262),o=n(18421),i=n(77356),d=n(41652),p=n(24309),s=n(16042),c=n(20346),m=n(30650);const u=function(t){var e=t.params,n=t.containerStyle,u=void 0===n?{}:n;return l.createElement(r.Z,{fallback:l.createElement(l.Fragment,null,"Loading...")},(function(){return l.createElement(c.X9.Provider,null,l.createElement(c.PK,{initialMetrics:m.o},l.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},u)},l.createElement(o.Z,(0,a.Z)({},e.compilerProps,{minHeight:62,placeholder:i.Z}))),l.createElement(d.Z,{msg:e.errorProps.msg,isPopup:!0}),l.createElement(p.Z,e.knobProps),l.createElement(d.Z,e.errorProps),l.createElement(s.E,e.actions)))}))}},22365:(t,e,n)=>{"use strict";n.d(e,{Z:()=>h});var a=n(63366),l=n(87462),r=n(67294),o=n(10407),i=n(86010),d=(n(95999),n(52263)),p=n(91262),s=n(66412);const c="playgroundContainer_TGbA",m="playgroundEditor_PvJ1",u="playgroundPreview_bb8I",k="toggleContainer_ZZiH",g="toggleIcon_OnrQ",N="showCode_O0Od";var A=n(72389),y=n(5434),C=["children","transformCode"];function f(){return r.createElement("div",null,"Loading...")}function b(t){var e=(0,A.Z)(),n=(0,r.useContext)(o.L2),a=n.code,i=n.language,d=n.theme,p=n.disabled,s=n.onChange;return r.createElement(o.uz,(0,l.Z)({key:String(e),code:a,language:i,theme:d,disabled:p,onChange:s},t,{className:m}))}function v(t){var e=t.showCode,n=t.preImports,a=void 0===n?"":n,l=(t.wrapper,r.useState(e)),d=l[0],s=l[1],c=function(){s((function(t){return!t}))};return r.createElement(r.Fragment,null,r.createElement("div",{className:u},r.createElement(p.Z,{fallback:r.createElement(f,null)},(function(){return r.createElement(r.Fragment,null,r.createElement(o.i5,null),r.createElement(o.IF,null),r.createElement("div",{className:k},r.createElement("div",{className:(0,i.Z)(g),onClick:c},r.createElement(y.xoN,null),r.createElement("span",{className:N},d?"Hide":"Show"," Code"))))}))),d&&r.createElement(b,{preImports:a,showCode:d}))}function h(t){var e=t.children,n=(t.transformCode,(0,a.Z)(t,C)),i=((0,d.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,s.p)());return r.createElement("div",{className:c},r.createElement(o.nu,(0,l.Z)({code:e.replace(/\n$/,""),theme:i},n),r.createElement(v,{showCode:n.showCode})))}},56922:(t,e,n)=>{"use strict";n.d(e,{Z:()=>d});var a=n(67294),l=n(32408),r=n(13925),o=n(53211),i=n(83279);const d=Object.assign({React:a,LinearGradient:i.Z},l,r,o,a)},40916:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>A,contentTitle:()=>g,default:()=>f,frontMatter:()=>k,metadata:()=>N,toc:()=>y});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),o=n(37047),i=(n(74866),n(85162),n(96711)),d=n(47516),p=["components"],s={toc:[]};function c(t){var e=t.components,n=(0,l.Z)(t,p);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE Social Icon","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20SocialIcon%2C%20SocialIconProps%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20IconData%20%3D%20%7B%0Atype%3A%20SocialMediaType%3B%0AiconType%3A%20string%3B%0A%7D%3B%0A%0Aconst%20dataList%3A%20Partial%3CIconData%3E%5B%5D%20%3D%20%5B%0A%7B%0A%20%20type%3A%20'facebook'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'twitter'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'google-plus-official'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'google'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'pinterest'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'linkedin'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'youtube'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'vimeo'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'tumblr'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'instagram'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'quora'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'flickr'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'foursquare'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'wordpress'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'stumbleupon'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'github'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'github-alt'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'twitch'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'medium'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'soundcloud'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'stack-overflow'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'gitlab'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'angellist'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'codepen'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'weibo'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'vk'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'facebook-messenger'%2C%0A%20%20iconType%3A%20'material-community'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'whatsapp'%2C%0A%7D%2C%0A%5D%3B%0A%0Atype%20SocialIconsComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20SocialIcons%3A%20React.FunctionComponent%3CSocialIconsComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20socialProps%20%3D%20%7B%7D%3B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%7B_.chunk(dataList%2C%203).map(%0A%20%20%20%20%20%20%20%20(chunk%3A%20Partial%3CIconData%3E%5B%5D%2C%20chunkIndex%3A%20React.Key)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginTop%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'%234c4c4c'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7BchunkIndex%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bchunk.map((l%3A%20Partial%3CIconData%3E%2C%20i%3A%20React.Key)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CSocialIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%7Bl.type%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconType%3D%7Bl.iconType%20%3F%20l.iconType%20%3A%20'font-awesome'%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7B%60%24%7BchunkIndex%7D-%24%7Bi%7D%60%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20)%7D%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aexport%20default%20SocialIcons%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0;var m=n(74335),u=["components"],k={id:"socialicon",title:"SocialIcon"},g=void 0,N={unversionedId:"components/socialicon",id:"version-4.0.0-rc.7/components/socialicon",title:"SocialIcon",description:"SocialIcons are visual cues to online and social media networks. We offer a varied range of social icons.",source:"@site/versioned_docs/version-4.0.0-rc.7/components/SocialIcon.mdx",sourceDirName:"components",slug:"/components/socialicon",permalink:"/docs/components/socialicon",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.7/components/SocialIcon.mdx",tags:[],version:"4.0.0-rc.7",frontMatter:{id:"socialicon",title:"SocialIcon"},sidebar:"docs",previous:{title:"Skeleton",permalink:"/docs/components/skeleton"},next:{title:"SpeedDial",permalink:"/docs/components/speeddial"}},A={},y=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],C={toc:y};function f(t){var e=t.components,n=(0,l.Z)(t,u);return(0,r.kt)("wrapper",(0,a.Z)({},C,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(o.w,{mdxType:"IconsStyle"}),(0,r.kt)("p",null,"SocialIcons are visual cues to online and social media networks. We offer a varied range of social icons."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("div",{class:"row inline-flex-center"},(0,r.kt)("div",{class:"col col--3"},(0,r.kt)("h4",null,"Import")),(0,r.kt)("div",{class:"col col--9"},(0,r.kt)(i.Z,{mdxType:"CodeBlock"},"import { SocialIcon } from '@rneui/themed';")),(0,r.kt)("div",{class:"col col--3"},(0,r.kt)("h4",null,"Theme Key"," ",(0,r.kt)("a",{href:"../customizing#using-themeprovider"},(0,r.kt)(d.Fs0,{mdxType:"BiInfoCircle"})))),(0,r.kt)("div",{class:"col col--9"},(0,r.kt)(i.Z,{mdxType:"CodeBlock"},"SocialIcon"))),(0,r.kt)(c,{mdxType:"Usage"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("div",{class:"table-responsive"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Component")),(0,r.kt)("td",{parentName:"tr",align:null},"React Component"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Press handlers present then Pressable else View")),(0,r.kt)("td",{parentName:"tr",align:null},"Type of button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"activityIndicatorStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Style to render when in loading state.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"button")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Creates button with a social icon.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disabled")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Disables the button, if true.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fontFamily")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify different font family.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fontStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify text styling.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fontWeight")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify font weight of title if set as a button with a title.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iconColor")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"white")),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the color of the icon.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iconSize")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"24")),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the size of the icon.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iconStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Extra styling for icon component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iconType")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"font-awesome")),(0,r.kt)("td",{parentName:"tr",align:null},"Type of icon set. ",(0,r.kt)("a",{parentName:"td",href:"icon#available-icon-sets"},"Supported sets here"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"light")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Reverses icon color scheme, setting background to white and icon to primary color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loading")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Shows loading indicator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onLongPress")),(0,r.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onPress")),(0,r.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a single tap gesture is detected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onPressIn")),(0,r.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,r.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onPressOut")),(0,r.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,r.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pressableProps")),(0,r.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"raised")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Raised adds a drop shadow, set to false to remove.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"small")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Decides the size of the activity indicator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"style")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Adds styling to the button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Title if made into a button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"SocialMediaType"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Social media type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"underlayColor")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Add Underlay color."))))),(0,r.kt)("h2",{id:"playground"},"Playground"),(0,r.kt)(m.Z,{mdxType:"Play"}))}f.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);