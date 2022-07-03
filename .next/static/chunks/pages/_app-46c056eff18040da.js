(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{425:function(e,t,n){"use strict";n.d(t,{F:function(){return l},f:function(){return s}});var r=n(1720),a=n(9008),o=n.n(a),i=(0,r.createContext)({setTheme:function(e){},themes:[]}),l=function(){return(0,r.useContext)(i)},c=["light","dark"],u="(prefers-color-scheme: dark)",s=function(e){var t=e.forcedTheme,n=e.disableTransitionOnChange,a=void 0!==n&&n,o=e.enableSystem,l=void 0===o||o,s=e.enableColorScheme,p=void 0===s||s,v=e.storageKey,g=void 0===v?"theme":v,y=e.themes,w=void 0===y?["light","dark"]:y,b=e.defaultTheme,x=void 0===b?l?"system":"light":b,k=e.attribute,O=void 0===k?"data-theme":k,j=e.value,E=e.children,Z=(0,r.useState)((function(){return d(g,x)})),_=Z[0],T=Z[1],C=(0,r.useState)((function(){return d(g)})),M=C[0],z=C[1],S=j?Object.values(j):w,L=(0,r.useCallback)((function(e){var n=m(e);z(n),"system"!==_||t||P(n,!1)}),[_,t]),N=(0,r.useRef)(L);N.current=L;var P=(0,r.useCallback)((function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=!0);var r=(null==j?void 0:j[e])||e,o=a&&n?h():null;if(t)try{localStorage.setItem(g,e)}catch(e){}if("system"===e&&l){var i=m();r=(null==j?void 0:j[i])||i}if(n){var c,u=document.documentElement;"class"===O?((c=u.classList).remove.apply(c,S),u.classList.add(r)):u.setAttribute(O,r),null==o||o()}}),[]);(0,r.useEffect)((function(){var e=function(){return N.current.apply(N,[].slice.call(arguments))},t=window.matchMedia(u);return t.addListener(e),e(t),function(){return t.removeListener(e)}}),[]);var I=(0,r.useCallback)((function(e){t?P(e,!0,!1):P(e),T(e)}),[t]);return(0,r.useEffect)((function(){var e=function(e){e.key===g&&I(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}),[I]),(0,r.useEffect)((function(){if(p){var e=t&&c.includes(t)?t:_&&c.includes(_)?_:"system"===_&&M||null;document.documentElement.style.setProperty("color-scheme",e)}}),[p,_,M,t]),r.default.createElement(i.Provider,{value:{theme:_,setTheme:I,forcedTheme:t,resolvedTheme:"system"===_?M:_,themes:l?[].concat(w,["system"]):w,systemTheme:l?M:void 0}},r.default.createElement(f,{forcedTheme:t,storageKey:g,attribute:O,value:j,enableSystem:l,defaultTheme:x,attrs:S}),E)},f=(0,r.memo)((function(e){var t=e.forcedTheme,n=e.storageKey,a=e.attribute,i=e.enableSystem,l=e.defaultTheme,c=e.value,s="class"===a?"var d=document.documentElement.classList;d.remove("+e.attrs.map((function(e){return"'"+e+"'"})).join(",")+");":"var d=document.documentElement;",f=function(e,t){e=(null==c?void 0:c[e])||e;var n=t?e:"'"+e+"'";return"class"===a?"d.add("+n+")":"d.setAttribute('"+a+"', "+n+")"},d="system"===l;return r.default.createElement(o(),null,r.default.createElement("script",t?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+s+f(t)+"}()"}}:i?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+s+"var e=localStorage.getItem('"+n+"');"+(d?"":f(l)+";")+'if("system"===e||(!e&&'+d+')){var t="'+u+'",m=window.matchMedia(t);m.media!==t||m.matches?'+f("dark")+":"+f("light")+"}else if(e) "+(c?"var x="+JSON.stringify(c)+";":"")+f(c?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+s+'var e=localStorage.getItem("'+n+'");if(e){'+(c?"var x="+JSON.stringify(c)+";":"")+f(c?"x[e]":"e",!0)+"}else{"+f(l)+";}}catch(t){}}();"}}))}),(function(e,t){return e.forcedTheme===t.forcedTheme})),d=function(e,t){if("undefined"!=typeof window){var n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},h=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(document.body),setTimeout((function(){document.head.removeChild(e)}),1)}},m=function(e){return e||(e=window.matchMedia(u)),e.matches?"dark":"light"}},3454:function(e,t,n){"use strict";var r,a;e.exports=(null===(r=n.g.process)||void 0===r?void 0:r.env)&&"object"===typeof(null===(a=n.g.process)||void 0===a?void 0:a.env)?n.g.process:n(7663)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6386)}])},7966:function(e,t,n){"use strict";var r=n(7320),a=n(1664),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.Z=function(e){var t=e.href,n=c(e,["href"]),a=t&&t.startsWith("/"),i=t&&t.startsWith("#");return a?(0,r.tZ)(o(),{href:t,children:(0,r.tZ)("a",l({},n))}):i?(0,r.tZ)("a",l({href:t},n)):(0,r.tZ)("a",l({target:"_blank",rel:"noopener noreferrer",href:t},n))}},1536:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7320);function a(e){var t=e.children;return(0,r.tZ)("div",{className:"mx-auto max-w-3xl px-2 sm:px-6 xl:max-w-5xl xl:px-0",children:t})}},7117:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r,a,o=n(7320),i=n(1720);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var c;function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var s;function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}var d;function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}var m;function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}var v;function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var y;function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}var b={mail:function(e){return i.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),r||(r=i.createElement("path",{d:"M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"})),a||(a=i.createElement("path",{d:"m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"})))},github:function(e){return i.createElement("svg",u({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),c||(c=i.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))},facebook:function(e){return i.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),s||(s=i.createElement("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})))},youtube:function(e){return i.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),d||(d=i.createElement("path",{d:"M23.499 6.203a3.008 3.008 0 0 0-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 0 0-2.088 2.09A31.258 31.26 0 0 0 0 12.01a31.258 31.26 0 0 0 .523 5.785 3.008 3.008 0 0 0 2.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 0 0 2.089-2.09 31.258 31.26 0 0 0 .5-5.784 31.258 31.26 0 0 0-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"})))},linkedin:function(e){return i.createElement("svg",p({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),m||(m=i.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})))},twitter:function(e){return i.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),v||(v=i.createElement("path",{d:"M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"})))},whatsapp:function(e){return i.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},e),y||(y=i.createElement("path",{d:"M12.031 6.172a5.773 5.773 0 0 0-5.768 5.766c-.001 1.298.38 2.27 1.019 3.287L6.7 17.353l2.182-.573c.978.58 1.911.928 3.145.929a5.776 5.776 0 0 0 5.768-5.766 5.764 5.764 0 0 0-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824a2.371 2.371 0 0 1-1.092-.069c-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446a.638.638 0 0 1 .462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a6.944 6.944 0 0 1-3.318-.844L5.034 19l.984-3.595a6.922 6.922 0 0 1-.926-3.468C5.093 8.112 8.205 5 12.029 5a6.891 6.891 0 0 1 4.907 2.034 6.893 6.893 0 0 1 2.03 4.908c-.001 3.825-3.113 6.938-6.937 6.938z"})))}},x=function(e){var t=e.kind,n=e.href,r=e.size,a=void 0===r?8:r;if(!n||"mail"===t&&!/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(n))return null;var i=b[t];return(0,o.BX)("a",{className:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:n,children:[(0,o.tZ)("span",{className:"sr-only",children:t}),(0,o.tZ)(i,{className:"fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-".concat(a," w-").concat(a)})]})}},1576:function(e,t,n){"use strict";var r={title:"Takunda Madechangu",author:"Takunda Madechangu",headerTitle:"Takunda Madechangu",description:"Takunda is a  Full-Stack Software Developer by profession, he enjoys solving different kinds of problemns so he can provide value to different kinds of people .",language:"en-us",theme:"system",siteUrl:"https://taku.co.zw",siteRepo:"https://github.com/takumade",rss:"https://taku.co.zw/feed.xml",siteLogo:"/static/images/logo.png",image:"/static/images/avatar.jpeg",socialBanner:"/static/images/twitter-card.png",email:"takunda.madechangu@gmail.com",github:"https://github.com/takumade",twitter:"https://twitter.com/takucoder",facebook:"https://facebook.com/",youtube:"https://youtube.com/",linkedin:"https://www.linkedin.com/in/tmadechangu",whatsapp:"https://wa.me/263778548832?text=Hello+Taku+",locale:"en-US",analytics:{googleAnalyticsId:"G-2TZKCD5W4B"},newsletter:{provider:"mailchimp"},comment:{provider:"giscus",giscusConfig:{repo:"takumade/portfolio",repositoryId:"R_kgDOGlezjw",category:"General",categoryId:"DIC_kwDOGlezj84CQBJg",mapping:"pathname",reactions:"1",metadata:"0",theme:"light",inputPosition:"top",lang:"en",darkTheme:"transparent_dark",themeURL:""},utterancesConfig:{repo:n(3454).env.NEXT_PUBLIC_UTTERANCES_REPO,issueTerm:"",label:"",theme:"",darkTheme:""},disqusConfig:{shortname:"taku"}}};e.exports=r},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=(o=n(1720))&&o.__esModule?o:{default:o},l=n(1003),c=n(880),u=n(9246);function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f={};function d(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(a?"%"+a:"")]=!0}}var h=i.default.forwardRef((function(e,t){var n,r=e.legacyBehavior,o=void 0===r?!0!==Boolean(!1):r,h=e.href,m=e.as,p=e.children,v=e.prefetch,g=e.passHref,y=e.replace,w=e.shallow,b=e.scroll,x=e.locale,k=e.onClick,O=e.onMouseEnter,j=s(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=p,o&&"string"===typeof n&&(n=i.default.createElement("a",null,n));var E,Z=!1!==v,_=c.useRouter(),T=i.default.useMemo((function(){var e=a(l.resolveHref(_,h,!0),2),t=e[0],n=e[1];return{href:t,as:m?l.resolveHref(_,m):n||t}}),[_,h,m]),C=T.href,M=T.as,z=i.default.useRef(C),S=i.default.useRef(M);o&&(E=i.default.Children.only(n));var L=o?E&&"object"===typeof E&&E.ref:t,N=a(u.useIntersection({rootMargin:"200px"}),3),P=N[0],I=N[1],B=N[2],A=i.default.useCallback((function(e){S.current===M&&z.current===C||(B(),S.current=M,z.current=C),P(e),L&&("function"===typeof L?L(e):"object"===typeof L&&(L.current=e))}),[M,L,C,B,P]);i.default.useEffect((function(){var e=I&&Z&&l.isLocalURL(C),t="undefined"!==typeof x?x:_&&_.locale,n=f[C+"%"+M+(t?"%"+t:"")];e&&!n&&d(_,C,M,{locale:t})}),[M,C,I,x,Z,_]);var H={ref:A,onClick:function(e){o||"function"!==typeof k||k(e),o&&E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),t[a?"replace":"push"](n,r,{shallow:o,locale:c,scroll:i}))}(e,_,C,M,y,w,b,x)},onMouseEnter:function(e){o||"function"!==typeof O||O(e),o&&E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),l.isLocalURL(C)&&d(_,C,M,{priority:!0})}};if(!o||g||"a"===E.type&&!("href"in E.props)){var R="undefined"!==typeof x?x:_&&_.locale,X=_&&_.isLocaleDomain&&l.getDomainLocale(M,R,_&&_.locales,_&&_.domainLocales);H.href=X||l.addBasePath(l.addLocale(M,R,_&&_.defaultLocale))}return o?i.default.cloneElement(E,H):i.default.createElement("a",Object.assign({},j,H),n)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,s=o.useRef(),f=a(o.useState(!1),2),d=f[0],h=f[1],m=a(o.useState(t?t.current:null),2),p=m[0],v=m[1],g=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),u.push(n));if(t)return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:o,elements:a}),t}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),c.delete(a);var t=u.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:p,rootMargin:n}))}),[r,p,n,d]),y=o.useCallback((function(){h(!1)}),[]);return o.useEffect((function(){if(!l&&!d){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&v(t.current)}),[t]),[g,d,y]};var o=n(1720),i=n(4686),l="undefined"!==typeof IntersectionObserver;var c=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},6386:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r=n(7320),a=(n(2604),n(7661),n(3941),n(8102),n(425)),o=n(9008),i=n.n(o),l=n(1576),c=n.n(l),u=n(4298),s=n.n(u),f=function(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(s(),{strategy:"lazyOnload",src:"https://www.googletagmanager.com/gtag/js?id=".concat(c().analytics.googleAnalyticsId)}),(0,r.tZ)(s(),{strategy:"lazyOnload",id:"ga-script",children:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(c().analytics.googleAnalyticsId,"', {\n              page_path: window.location.pathname,\n            });\n        ")})]})};var d,h,m=function(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(s(),{strategy:"lazyOnload","data-domain":c().analytics.plausibleDataDomain,src:"https://plausible.io/js/plausible.js"}),(0,r.tZ)(s(),{strategy:"lazyOnload",id:"plausible-script",children:"\n            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }\n        "})]})},p=function(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(s(),{strategy:"lazyOnload",id:"sa-script",children:"\n            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};\n        "}),(0,r.tZ)(s(),{strategy:"lazyOnload",src:"https://scripts.simpleanalyticscdn.com/latest.js"})]})},v=function(){return(0,r.tZ)(r.HY,{children:(0,r.tZ)(s(),{async:!0,defer:!0,"data-website-id":c().analytics.umamiWebsiteId,src:"https://umami.example.com/umami.js"})})},g=function(){return(0,r.BX)(r.HY,{children:[c().analytics.plausibleDataDomain&&(0,r.tZ)(m,{}),c().analytics.simpleAnalytics&&(0,r.tZ)(p,{}),c().analytics.umamiWebsiteId&&(0,r.tZ)(v,{}),c().analytics.googleAnalyticsId&&(0,r.tZ)(f,{})]})},y=[{href:"/",title:"Home"},{href:"/blog",title:"Blog"},{href:"/projects",title:"Projects"},{href:"/about",title:"About"}],w=n(1720);function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}var x=function(e){return w.createElement("svg",b({width:36,height:36,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d||(d=w.createElement("g",{clipPath:"url(#logo_svg__a)"},w.createElement("rect",{width:36,height:36,rx:11,fill:"#111"}),w.createElement("path",{d:"M20 12v17h-5V11ZM7 8h21v4H7Z",fill:"#fff"}))),h||(h=w.createElement("defs",null,w.createElement("clipPath",{id:"logo_svg__a"},w.createElement("rect",{width:36,height:36,rx:11,fill:"#fff"})))))},k=n(7966),O=n(1536),j=n(7117);function E(){return(0,r.tZ)("footer",{children:(0,r.tZ)("div",{className:"my-16 flex flex-col",children:(0,r.BX)("div",{className:"flex flex-col items-center justify-between sm:flex-row",children:[(0,r.BX)("div",{className:"mb-3 flex space-x-4",children:[(0,r.tZ)(j.Z,{kind:"mail",href:"mailto:".concat(c().email),size:6}),(0,r.tZ)(j.Z,{kind:"github",href:c().github,size:6}),(0,r.tZ)(j.Z,{kind:"linkedin",href:c().linkedin,size:6}),(0,r.tZ)(j.Z,{kind:"twitter",href:c().twitter,size:6}),(0,r.tZ)(j.Z,{kind:"whatsapp",href:c().whatsapp,size:6})]}),(0,r.tZ)("div",{className:"mb-2 mt-2 flex flex-col space-x-2 text-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0 sm:flex-row",children:(0,r.BX)("div",{children:["\xa9 ".concat((new Date).getFullYear())," ",c().author]})})]})})})}var Z=function(){var e=(0,w.useState)(!1),t=e[0],n=e[1],a=function(){n((function(e){return document.body.style.overflow=e?"auto":"hidden",!e}))};return(0,r.BX)("div",{className:"sm:hidden",children:[(0,r.tZ)("button",{type:"button",className:"ml-1 mr-1 h-8 w-8 rounded py-1","aria-label":"Toggle Menu",onClick:a,children:(0,r.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:t?(0,r.tZ)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}):(0,r.tZ)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,r.BX)("div",{className:"fixed top-[72px] right-0 !z-10 h-[1000px] w-full transform bg-white duration-500 ease-in-out dark:bg-gray-900 ".concat(t?"translate-y-0":"-inset-full -translate-y-full "),children:[(0,r.tZ)("button",{type:"button","aria-label":"toggle modal",className:"fixed h-full w-full cursor-auto focus:outline-none",onClick:a}),(0,r.tZ)("nav",{className:"fixed mt-8 h-full w-full px-6",children:y.map((function(e){return(0,r.tZ)("div",{className:"border-b border-gray-300 py-6 dark:border-gray-500",children:(0,r.tZ)(k.Z,{href:e.href,className:"text-2xl tracking-widest text-gray-900 dark:text-gray-100",onClick:a,children:e.title})},e.title)}))})]})]})},_=function(){var e=(0,w.useState)(!1),t=e[0],n=e[1],o=(0,a.F)(),i=o.theme,l=o.setTheme,c=o.resolvedTheme;return(0,w.useEffect)((function(){return n(!0)}),[]),(0,r.tZ)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4",onClick:function(){return l("dark"===i||"dark"===c?"light":"dark")},children:(0,r.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:!t||"dark"!==i&&"dark"!==c?(0,r.tZ)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}):(0,r.tZ)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})})})},T=function(e){var t=e.children;return(0,r.BX)(r.HY,{children:[(0,r.tZ)("header",{className:"sticky top-0 left-0 right-0 z-[110] border-b border-gray-200 bg-opacity-30 py-4 backdrop-blur-lg backdrop-filter dark:border-gray-700",children:(0,r.BX)("div",{className:"mx-auto flex max-w-3xl items-center justify-between px-4 sm:px-6 xl:max-w-5xl xl:px-0",children:[(0,r.tZ)(k.Z,{href:"/","aria-label":c().headerTitle,children:(0,r.tZ)("div",{className:"flex items-center justify-between",children:(0,r.tZ)("div",{className:"mr-3 dark:invert",children:(0,r.tZ)(x,{})})})}),(0,r.BX)("div",{className:"flex items-center text-base leading-5",children:[(0,r.tZ)("div",{className:"hidden sm:block",children:y.map((function(e){return(0,r.tZ)(k.Z,{href:e.href,className:"p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4",children:e.title},e.title)}))}),(0,r.tZ)(_,{}),(0,r.tZ)(Z,{})]})]})}),(0,r.BX)(O.Z,{children:[(0,r.tZ)("main",{className:"mb-auto",children:t}),(0,r.tZ)(E,{})]})]})},C=(n(1163),n(3454));function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){M(e,t,n[t])}))}return e}C.env.SOCKET;function S(e){var t=e.Component,n=e.pageProps;return(0,r.BX)(a.f,{attribute:"class",defaultTheme:c().theme,children:[(0,r.tZ)(i(),{children:(0,r.tZ)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"})}),false,(0,r.tZ)(g,{}),(0,r.tZ)(T,{children:(0,r.tZ)(t,z({},n))})]})}},8102:function(){},3941:function(){},7661:function(){},2604:function(){},7663:function(e){!function(){var t={162:function(e){var t,n,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l,c=[],u=!1,s=-1;function f(){u&&l&&(u=!1,l.length?c=l.concat(c):s=-1,c.length&&d())}function d(){if(!u){var e=i(f);u=!0;for(var t=c.length;t;){for(l=c,c=[];++s<t;)l&&l[s].run();s=-1,t=c.length}l=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||u||i(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}},i=!0;try{t[e](o,o.exports,r),i=!1}finally{i&&delete n[e]}return o.exports}r.ab="//";var a=r(162);e.exports=a}()},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)},4298:function(e,t,n){e.exports=n(3573)},6584:function(e,t,n){"use strict";n.r(t),n.d(t,{Fragment:function(){return r.HY},jsx:function(){return o},jsxDEV:function(){return o},jsxs:function(){return o}});var r=n(6400),a=0;function o(e,t,n,o,i){var l,c,u={};for(c in t)"ref"==c?l=t[c]:u[c]=t[c];var s={type:e,props:u,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--a,__source:o,__self:i};if("function"==typeof e&&(l=e.defaultProps))for(c in l)void 0===u[c]&&(u[c]=l[c]);return r.YM.vnode&&r.YM.vnode(s),s}},7320:function(e,t,n){"use strict";n.d(t,{BX:function(){return r.jsxs},HY:function(){return r.Fragment},tZ:function(){return r.jsx}});var r=n(6584)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[179],(function(){return t(6840),t(880)}));var n=e.O();_N_E=n}]);