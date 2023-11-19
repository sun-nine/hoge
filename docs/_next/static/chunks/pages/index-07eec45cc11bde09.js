(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2760)}])},3130:function(e,t,n){"use strict";n.d(t,{F:function(){return Head}});var r=n(5893);n(7294);var l=n(9008),i=n.n(l);let Head=()=>{let e="メールフォーム",t="メールフォーム";return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("meta",{name:"description",content:t}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico",sizes:"any"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"}),(0,r.jsx)("link",{rel:"apple-touch-icon",href:"/apple-touch-icon.png"}),(0,r.jsx)("meta",{property:"og:title",content:e}),(0,r.jsx)("meta",{property:"og:site_name",content:e}),(0,r.jsx)("meta",{property:"og:description",content:t}),(0,r.jsx)("meta",{property:"og:image",content:"/boxes.png"}),(0,r.jsx)("meta",{property:"og:url",content:"https://scrap-app.vercel.app/"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("link",{rel:"manifest",href:"/manifest.webmanifest"})]})}},817:function(e,t,n){"use strict";n.d(t,{P:function(){return TopLayout}});var r=n(5893);n(7294);var l=n(7747),i=n(2338),a=n(1664),o=n.n(a),s=n(2883);let Header=()=>(0,r.jsx)(l.xu,{as:"header",bg:"white",borderBottom:"1px",borderColor:"gray.100",shadow:"sm",children:(0,r.jsx)(i.W,{maxW:"4xl",py:"3",display:"flex",justifyContent:"space-between",children:(0,r.jsx)(l.xu,{children:(0,r.jsx)(s.r,{as:o(),href:"/",color:"#000000d1",fontSize:"1.1rem",fontWeight:"bold",display:"flex",alignItems:"center",gap:"2",_hover:{opacity:"0.7"},children:"メールフォーム"})})})}),TopLayout=e=>{let{children:t}=e;return(0,r.jsxs)(l.xu,{as:"main",minH:"100vh",children:[(0,r.jsx)(Header,{}),(0,r.jsx)(i.W,{maxW:"2xl",children:(0,r.jsx)(l.xu,{p:"3rem 0 7rem",children:t})})]})}},2760:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Home}});var r=n(5893),l=n(1163),i=n(7747),a=n(7294);let isValidEmail=e=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e),isWithinMaxLength=(e,t)=>e.length<=t;var hooks_useForm=()=>{let[e,t]=(0,a.useState)(""),[n,r]=(0,a.useState)(""),[l,i]=(0,a.useState)(""),[o,s]=(0,a.useState)(""),[c,u]=(0,a.useState)(!1);return{email:e,setEmail:t,confEmail:n,setConfEmail:r,emailErrorMessage:l,setEmailErrorMessage:i,confEmailErrorMessage:o,setConfEmailErrorMessage:s,isLoading:c,setIsLoading:u,isValidForm:()=>e!==n?(s("メールアドレスが一致しません"),!1):isValidEmail(e)?isWithinMaxLength(e,40)?(i(""),!0):(i(""),i("メールアドレスは40文字以内です"),!1):(s(""),i("無効なメールアドレスです"),!1)}},o=n(3130),s=n(817);let CompanyProfile=e=>{let{clientName1:t,clientName2:n,companyAbbreviation:l}=e;return(0,r.jsxs)(i.xu,{fontWeight:"bold",fontSize:"xl",textAlign:"center",color:"gray.800",children:[t," ",n," ",l]})},FormHeader=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.xu,{fontSize:"xl",fontWeight:"bold",textAlign:"center",children:"入力フォーム"}),(0,r.jsx)(i.xu,{mt:"3",textAlign:"center",children:"メールアドレスを入力して送信して下さい"})]});var c=n(5227);function mergeRefs(...e){return t=>{e.forEach(e=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}(e,t)})}}var u=n(6554),d=n(2772),m=n(3179),p=n(6914),h=n(5432),[x,f]=(0,c.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[v,g]=(0,c.k)({strict:!1,name:"FormControlContext"}),y=(0,u.G)(function(e,t){let n=(0,d.jC)("Form",e),l=(0,m.Lr)(e),{getRootProps:i,htmlProps:o,...s}=function(e){let{id:t,isRequired:n,isInvalid:r,isDisabled:l,isReadOnly:i,...o}=e,s=(0,a.useId)(),c=t||`field-${s}`,u=`${c}-label`,d=`${c}-feedback`,m=`${c}-helptext`,[p,x]=(0,a.useState)(!1),[f,v]=(0,a.useState)(!1),[g,y]=(0,a.useState)(!1),j=(0,a.useCallback)((e={},t=null)=>({id:m,...e,ref:mergeRefs(t,e=>{e&&v(!0)})}),[m]),_=(0,a.useCallback)((e={},t=null)=>({...e,ref:t,"data-focus":(0,h.PB)(g),"data-disabled":(0,h.PB)(l),"data-invalid":(0,h.PB)(r),"data-readonly":(0,h.PB)(i),id:void 0!==e.id?e.id:u,htmlFor:void 0!==e.htmlFor?e.htmlFor:c}),[c,l,g,r,i,u]),b=(0,a.useCallback)((e={},t=null)=>({id:d,...e,ref:mergeRefs(t,e=>{e&&x(!0)}),"aria-live":"polite"}),[d]),E=(0,a.useCallback)((e={},t=null)=>({...e,...o,ref:t,role:"group"}),[o]),I=(0,a.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!i,isDisabled:!!l,isFocused:!!g,onFocus:()=>y(!0),onBlur:()=>y(!1),hasFeedbackText:p,setHasFeedbackText:x,hasHelpText:f,setHasHelpText:v,id:c,labelId:u,feedbackId:d,helpTextId:m,htmlProps:o,getHelpTextProps:j,getErrorMessageProps:b,getRootProps:E,getLabelProps:_,getRequiredIndicatorProps:I}}(l),c=(0,h.cx)("chakra-form-control",e.className);return(0,r.jsx)(v,{value:s,children:(0,r.jsx)(x,{value:n,children:(0,r.jsx)(p.m.div,{...i({},t),className:c,__css:n.container})})})});y.displayName="FormControl",(0,u.G)(function(e,t){let n=g(),l=f(),i=(0,h.cx)("chakra-form__helper-text",e.className);return(0,r.jsx)(p.m.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:l.helperText,className:i})}).displayName="FormHelperText";var j=(0,u.G)(function(e,t){var n;let l=(0,d.mq)("FormLabel",e),i=(0,m.Lr)(e),{className:a,children:o,requiredIndicator:s=(0,r.jsx)(_,{}),optionalIndicator:c=null,...u}=i,x=g(),f=null!=(n=null==x?void 0:x.getLabelProps(u,t))?n:{ref:t,...u};return(0,r.jsxs)(p.m.label,{...f,className:(0,h.cx)("chakra-form__label",i.className),__css:{display:"block",textAlign:"start",...l},children:[o,(null==x?void 0:x.isRequired)?s:c]})});j.displayName="FormLabel";var _=(0,u.G)(function(e,t){let n=g(),l=f();if(!(null==n?void 0:n.isRequired))return null;let i=(0,h.cx)("chakra-form__required-indicator",e.className);return(0,r.jsx)(p.m.span,{...null==n?void 0:n.getRequiredIndicatorProps(e,t),__css:l.requiredIndicator,className:i})});_.displayName="RequiredIndicator";var[b,E]=(0,c.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),I=(0,u.G)(function(e,t){let n=(0,d.jC)("Input",e),{children:l,className:i,...o}=(0,m.Lr)(e),s=(0,h.cx)("chakra-input__group",i),c={},u=a.Children.toArray(l).filter(e=>(0,a.isValidElement)(e)),x=n.field;u.forEach(e=>{var t,r;n&&(x&&"InputLeftElement"===e.type.id&&(c.paddingStart=null!=(t=x.height)?t:x.h),x&&"InputRightElement"===e.type.id&&(c.paddingEnd=null!=(r=x.height)?r:x.h),"InputRightAddon"===e.type.id&&(c.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(c.borderStartRadius=0))});let f=u.map(t=>{var n,r;let l=function(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(r=t.props)?void 0:r.variant)||e.variant});return"Input"!==t.type.id?(0,a.cloneElement)(t,l):(0,a.cloneElement)(t,Object.assign(l,c,t.props))});return(0,r.jsx)(p.m.div,{className:s,ref:t,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...n.group},"data-group":!0,...o,children:(0,r.jsx)(b,{value:n,children:f})})});I.displayName="InputGroup";var N=(0,p.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),k=(0,u.G)(function(e,t){var n,l;let{placement:i="left",...a}=e,o=E(),s=o.field,c={["left"===i?"insetStart":"insetEnd"]:"0",width:null!=(n=null==s?void 0:s.height)?n:null==s?void 0:s.h,height:null!=(l=null==s?void 0:s.height)?l:null==s?void 0:s.h,fontSize:null==s?void 0:s.fontSize,...o.element};return(0,r.jsx)(N,{ref:t,__css:c,...a})});k.id="InputElement",k.displayName="InputElement";var S=(0,u.G)(function(e,t){let{className:n,...l}=e,i=(0,h.cx)("chakra-input__left-element",n);return(0,r.jsx)(k,{ref:t,placement:"left",className:i,...l})});S.id="InputLeftElement",S.displayName="InputLeftElement";var C=(0,u.G)(function(e,t){let{className:n,...l}=e,i=(0,h.cx)("chakra-input__right-element",n);return(0,r.jsx)(k,{ref:t,placement:"right",className:i,...l})});C.id="InputRightElement",C.displayName="InputRightElement";var F=(0,u.G)(function(e,t){let{htmlSize:n,...l}=e,i=(0,d.jC)("Input",l),a=(0,m.Lr)(l),o=function(e){let{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:l,...i}=function(e){var t,n,r;let l=g(),{id:i,disabled:a,readOnly:o,required:s,isRequired:c,isInvalid:u,isReadOnly:d,isDisabled:m,onFocus:p,onBlur:x,...f}=e,v=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==l?void 0:l.hasFeedbackText)&&(null==l?void 0:l.isInvalid)&&v.push(l.feedbackId),(null==l?void 0:l.hasHelpText)&&v.push(l.helpTextId),{...f,"aria-describedby":v.join(" ")||void 0,id:null!=i?i:null==l?void 0:l.id,isDisabled:null!=(t=null!=a?a:m)?t:null==l?void 0:l.isDisabled,isReadOnly:null!=(n=null!=o?o:d)?n:null==l?void 0:l.isReadOnly,isRequired:null!=(r=null!=s?s:c)?r:null==l?void 0:l.isRequired,isInvalid:null!=u?u:null==l?void 0:l.isInvalid,onFocus:(0,h.v0)(null==l?void 0:l.onFocus,p),onBlur:(0,h.v0)(null==l?void 0:l.onBlur,x)}}(e);return{...i,disabled:t,readOnly:r,required:l,"aria-invalid":(0,h.Qm)(n),"aria-required":(0,h.Qm)(l),"aria-readonly":(0,h.Qm)(r)}}(a),s=(0,h.cx)("chakra-input",e.className);return(0,r.jsx)(p.m.input,{size:n,...o,__css:i.field,ref:t,className:s})});F.displayName="Input",F.id="Input";var w=n(6948),[B,O]=(0,c.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),z=(0,u.G)((e,t)=>{let n=(0,d.jC)("FormError",e),l=(0,m.Lr)(e),i=g();return(null==i?void 0:i.isInvalid)?(0,r.jsx)(B,{value:n,children:(0,r.jsx)(p.m.div,{...null==i?void 0:i.getErrorMessageProps(l,t),className:(0,h.cx)("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...n.text}})}):null});z.displayName="FormErrorMessage",(0,u.G)((e,t)=>{let n=O(),l=g();if(!(null==l?void 0:l.isInvalid))return null;let i=(0,h.cx)("chakra-form__error-icon",e.className);return(0,r.jsx)(w.J,{ref:t,"aria-hidden":!0,...e,__css:n.icon,className:i,children:(0,r.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}).displayName="FormErrorIcon";var L=n(8193);let FormEmail=e=>{let{email:t,setEmail:n,emailErrorMessage:l}=e;return(0,r.jsxs)(y,{isInvalid:!0,children:[(0,r.jsx)(j,{htmlFor:"email",color:"blue.500",fontSize:"sm",children:"メールアドレス"}),(0,r.jsxs)(I,{children:[(0,r.jsx)(S,{pointerEvents:"none",children:(0,r.jsx)(L.Dme,{color:"gray.300"})}),(0,r.jsx)(F,{id:"email",type:"email",placeholder:"例) xxx@example.com",value:t,onChange:e=>n(e.target.value),isInvalid:""!==l,style:{background:"rgb(245, 249, 252)"}})]}),(0,r.jsx)(z,{children:l})]})},FormConfEmail=e=>{let{confEmail:t,setConfEmail:n,confEmailErrorMessage:l}=e;return(0,r.jsxs)(y,{isInvalid:!0,children:[(0,r.jsx)(j,{htmlFor:"email-confirm",color:"blue.500",fontSize:"sm",children:"メールアドレス（確認用の再入力）"}),(0,r.jsxs)(I,{children:[(0,r.jsx)(S,{pointerEvents:"none",children:(0,r.jsx)(L.Dme,{color:"gray.300"})}),(0,r.jsx)(F,{id:"email-confirm",type:"email",placeholder:"例) xxx@example.com",value:t,onChange:e=>n(e.target.value),isInvalid:""!==l,style:{background:"rgb(245, 249, 252)"}})]}),(0,r.jsx)(z,{children:l})]})};var[P,R]=(0,c.k)({strict:!1,name:"ButtonGroupContext"});function ButtonIcon(e){let{children:t,className:n,...l}=e,i=(0,a.isValidElement)(t)?(0,a.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,o=(0,h.cx)("chakra-button__icon",n);return(0,r.jsx)(p.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...l,className:o,children:i})}ButtonIcon.displayName="ButtonIcon";var G=n(1136);function ButtonSpinner(e){let{label:t,placement:n,spacing:l="0.5rem",children:i=(0,r.jsx)(G.$,{color:"currentColor",width:"1em",height:"1em"}),className:o,__css:s,...c}=e,u=(0,h.cx)("chakra-button__spinner",o),d="start"===n?"marginEnd":"marginStart",m=(0,a.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[d]:t?l:0,fontSize:"1em",lineHeight:"normal",...s}),[s,t,d,l]);return(0,r.jsx)(p.m.div,{className:u,...c,__css:m,children:i})}ButtonSpinner.displayName="ButtonSpinner";var A=(0,u.G)((e,t)=>{let n=R(),l=(0,d.mq)("Button",{...n,...e}),{isDisabled:i=null==n?void 0:n.isDisabled,isLoading:o,isActive:s,children:c,leftIcon:u,rightIcon:x,loadingText:f,iconSpacing:v="0.5rem",type:g,spinner:y,spinnerPlacement:j="start",className:_,as:b,...E}=(0,m.Lr)(e),I=(0,a.useMemo)(()=>{let e={...null==l?void 0:l._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...l,...!!n&&{_focus:e}}},[l,n]),{ref:N,type:k}=function(e){let[t,n]=(0,a.useState)(!e),r=(0,a.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]);return{ref:r,type:t?"button":void 0}}(b),S={rightIcon:x,leftIcon:u,iconSpacing:v,children:c};return(0,r.jsxs)(p.m.button,{ref:function(...e){return(0,a.useMemo)(()=>mergeRefs(...e),e)}(t,N),as:b,type:null!=g?g:k,"data-active":(0,h.PB)(s),"data-loading":(0,h.PB)(o),__css:I,className:(0,h.cx)("chakra-button",_),...E,disabled:i||o,children:[o&&"start"===j&&(0,r.jsx)(ButtonSpinner,{className:"chakra-button__spinner--start",label:f,placement:"start",spacing:v,children:y}),o?f||(0,r.jsx)(p.m.span,{opacity:0,children:(0,r.jsx)(ButtonContent,{...S})}):(0,r.jsx)(ButtonContent,{...S}),o&&"end"===j&&(0,r.jsx)(ButtonSpinner,{className:"chakra-button__spinner--end",label:f,placement:"end",spacing:v,children:y})]})});function ButtonContent(e){let{leftIcon:t,rightIcon:n,children:l,iconSpacing:i}=e;return(0,r.jsxs)(r.Fragment,{children:[t&&(0,r.jsx)(ButtonIcon,{marginEnd:i,children:t}),l,n&&(0,r.jsx)(ButtonIcon,{marginStart:i,children:n})]})}A.displayName="Button";let FormButton=e=>{let{isLoading:t}=e;return(0,r.jsx)(i.xu,{pt:"10",display:"flex",justifyContent:"center",children:(0,r.jsx)(A,{type:"submit",isLoading:t,colorScheme:"teal",size:"md",px:"10",children:"送信する"})})};function Home(){let{email:e,setEmail:t,confEmail:n,setConfEmail:a,emailErrorMessage:c,confEmailErrorMessage:u,isLoading:d,setIsLoading:m,isValidForm:p}=hooks_useForm(),h=(0,l.useRouter)(),{clientId:x,clientName1:f,clientName2:v,companyAbbreviation:g,fileId:y,fileName:j}=h.query;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.F,{}),(0,r.jsxs)(s.P,{children:[(0,r.jsx)(CompanyProfile,{clientName1:f,clientName2:v,companyAbbreviation:g}),(0,r.jsxs)(i.xu,{mt:"16",children:[(0,r.jsx)(FormHeader,{}),(0,r.jsx)(i.xu,{mt:"5",children:(0,r.jsxs)("form",{onSubmit:t=>{if(t.preventDefault(),!p())return;m(!0);let n={method:"POST",Accept:"application/json","Content-Type":"application/x-www-form-urlencoded",body:JSON.stringify({clientId:x,clientName1:f,clientName2:v,companyAbbreviation:g,fileId:y,fileName:j,email:e})};fetch("https://script.google.com/macros/s/AKfycbwJ0Eh34XQ2biL5gALqoi4wB1y_SGWfOsSgHqKjH_ZHTzuXNbLP4TeKMidrsvLTKBvO/exec",n).then(e=>{if(e.ok)return e.json();throw Error("Network response was not ok")}).then(e=>{console.log(e),h.push("/thanks")}).catch(e=>{console.error("Fetch error:",e)})},children:[(0,r.jsx)(FormEmail,{email:e,setEmail:t,emailErrorMessage:c}),(0,r.jsx)(i.xu,{mt:"5"}),(0,r.jsx)(FormConfEmail,{confEmail:n,setConfEmail:a,confEmailErrorMessage:u}),(0,r.jsx)(FormButton,{isLoading:d})]})})]})]})]})}},1163:function(e,t,n){e.exports=n(8355)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return GenIcon}});var r=n(7294),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(l),__assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__rest=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>t.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};function GenIcon(e){return function(t){return r.createElement(IconBase,__assign({attr:__assign({},e.attr)},t),function Tree2Element(e){return e&&e.map(function(e,t){return r.createElement(e.tag,__assign({key:t},e.attr),Tree2Element(e.child))})}(e.child))}}function IconBase(e){var elem=function(t){var n,l=e.attr,i=e.size,a=e.title,o=__rest(e,["attr","size","title"]),s=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,o,{className:n,style:__assign(__assign({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),e.children)};return void 0!==i?r.createElement(i.Consumer,null,function(e){return elem(e)}):elem(l)}}},function(e){e.O(0,[617,895,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);