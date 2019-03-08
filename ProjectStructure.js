(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{66:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,i=o(a(3)),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};s.get||s.set?Object.defineProperty(t,a,s):t[a]=e[a]}return t.default=e,t}(a(0));o(a(2)),o(a(73));function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t,a,i){s||(s="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&n)for(var l in n)void 0===t[l]&&(t[l]=n[l]);else t||(t=n||{});if(1===o)t.children=i;else if(o>1){for(var r=new Array(o),d=0;d<o;d++)r[d]=arguments[d+3];t.children=r}return{$$typeof:s,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,s,i=function(e,t){if(null==e)return{};var a,s,i={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const u=e=>{let{to:t}=e,a=c(e,["to"]);return t.includes("http")?n.default.createElement("a",d({},e,{href:t})):("#"===t[0]&&(t=i.default.join("/Ignite/","pages/ProjectStructure.html")+t),n.default.createElement("a",d({},a,{href:t,onClick:a=>{if(a.preventDefault(),"#"===e.to)return!1;const s=new URL(i.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(s),null,t),e.onClick();const n=new CustomEvent("changeLocation",{detail:s});return dispatchEvent(n),!1}})))};u.defaultProps={href:"",onClick:()=>{}};const p=e=>{var t,a;return a=t=class extends n.default.Component{constructor(...e){super(...e),r(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?n.default.createElement(e,this.props,this.props.children||null):null}},r(t,"defaultProps",{shouldLoad:!0}),a};p(()=>a.e(25).then(a.bind(null,52))),p(()=>a.e(25).then(a.bind(null,74)));var h=l("h1",{},void 0,"Index Structure"),g=l("p",{},void 0,"Ignite builds the app from your side bar. Here is where you organize your documentation into overall ideas."),m=l("p",{},void 0,l("br",{})),v=l("p",{},void 0,"The default configuration looks for a file named ",l("code",{},void 0,"index.md")," in your ",l("code",{},void 0,"docs/")," directory. This file links to the rest of your documentation. Any linked ",l("code",{},void 0,".md")," files will be included in the docs website."),f=l("pre",{},void 0,l("code",{className:"language-markdown"},void 0,l("span",{className:"hljs-bullet"},void 0,"- "),"[",l("span",{className:"hljs-string"},void 0,"Introduction"),"](",l("span",{className:"hljs-link"},void 0,"/Ignite/pages/Introduction.html"),")",l("br",{}),l("span",{className:"hljs-bullet"},void 0,"- "),"[",l("span",{className:"hljs-string"},void 0,"Page 1"),"](",l("span",{className:"hljs-link"},void 0,"/Ignite/pages/pages/Page1.html"),")",l("br",{}),l("span",{className:"hljs-bullet"},void 0,"- "),"[",l("span",{className:"hljs-string"},void 0,"Page 2"),"](",l("span",{className:"hljs-link"},void 0,"/Ignite/pages/pages/Page2.html"),")",l("br",{}))),b=l("p",{},void 0,"You can have sub-lists in your navigation which will create nested navigation lists."),N=l("pre",{},void 0,l("code",{className:"language-markdown"},void 0,l("span",{className:"hljs-bullet"},void 0,"- "),"[",l("span",{className:"hljs-string"},void 0,"Introduction"),"](",l("span",{className:"hljs-link"},void 0,"/Ignite/pages/Introduction.html"),")",l("br",{}),"  - [",l("span",{className:"hljs-string"},void 0,"Page 1"),"](",l("span",{className:"hljs-link"},void 0,"/Ignite/pages/pages/Page1.html"),")",l("br",{}),"  - [",l("span",{className:"hljs-string"},void 0,"Page 2"),"](",l("span",{className:"hljs-link"},void 0,"/Ignite/pages/pages/Page2.html"),")",l("br",{}))),y=l("p",{},void 0,"You can add context to your navigation by adding paragraphs between sections of your index file."),j=l("p",{},void 0,l("strong",{},void 0,l("em",{},void 0,"There must be an empty line between list sections"))),P=l("pre",{},void 0,l("code",{className:"language-markdown"},void 0,"Intro",l("br",{}),l("br",{}),l("span",{className:"hljs-bullet"},void 0,"- "),"[",l("span",{className:"hljs-string"},void 0,"Introduction"),"](",l("span",{className:"hljs-link"},void 0,"/Ignite/pages/Introduction.html"),")",l("br",{}),"  - [",l("span",{className:"hljs-string"},void 0,"Page 1"),"](",l("span",{className:"hljs-link"},void 0,"/Ignite/pages/pages/Page1.html"),")",l("br",{}),"  - [",l("span",{className:"hljs-string"},void 0,"Page 2"),"](",l("span",{className:"hljs-link"},void 0,"/Ignite/pages/pages/Page2.html"),")",l("br",{}),l("br",{}),"Some Other Nav Section",l("br",{}),l("br",{}),l("span",{className:"hljs-bullet"},void 0,"- "),"[",l("span",{className:"hljs-string"},void 0,"Something Else"),"](",l("span",{className:"hljs-link"},void 0,"/Ignite/pages/Bees.html"),")",l("br",{}),"  ...",l("br",{}))),w=l("article",{className:"message column is-warning"},void 0,l("div",{className:"message-body"},void 0,l("p",{},void 0,"NOTE: if you want a list label to indent correctly you might have to add"))),k=l("p",{},void 0,"You can split your documentation up into multiple top level sections. To have multiple top level headings you will need to also have multiple index files in multiple folders."),I=l("p",{},void 0,"Each index file will used as the sidebar and the first link in the sidebar as its default page."),O=l("pre",{},void 0,l("code",{className:"language-text"},void 0,"folder1/",l("br",{}),"  index.md",l("br",{}),"  other.md",l("br",{}),"folder2/",l("br",{}),"  index.md",l("br",{}),"  another.md",l("br",{}))),x=l("pre",{},void 0,l("code",{className:"language-json"},void 0,"{",l("br",{}),"  ",l("span",{className:"hljs-attr"},void 0,'"navItems"'),": {",l("br",{}),"    ",l("span",{className:"hljs-attr"},void 0,'"root"'),": ",l("span",{className:"hljs-string"},void 0,'"path/to/folder"'),",",l("br",{}),"    ",l("span",{className:"hljs-attr"},void 0,'"Name to Display in NavBar"'),": ",l("span",{className:"hljs-string"},void 0,'"path/to/folder"'),l("br",{}),"  }",l("br",{}),"}",l("br",{}))),S=l("p",{},void 0,"⚠️ Root should point to the default folder."),C=l("article",{className:"message column is-success is-three-fifths is-offset-one-fifth"},void 0,l("div",{className:"message-body"},void 0,l("p",{},void 0,"If you aren't using GitHub pages make sure to redirect 404s to the 404.html.")));var E=e=>l("div",{className:e.className},void 0,l("section",{},void 0,h,g,m,v,l("p",{},void 0,l("strong",{},void 0,l("em",{},void 0,"Changing the ",l(u,{currentPage:e.currentPage,to:"/Ignite/pages/Options.html#source-src-s"},void 0,"default configuration")))),f,l("h2",{id:"sub-headings"},void 0,"Sub-Headings ",l(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#sub-headings","aria-hidden":"true"})),b,N,l("h2",{id:"list-title"},void 0,"List Title ",l(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#list-title","aria-hidden":"true"})),y,j,P,w,l("h2",{id:"multiple-top-level-tags"},void 0,"Multiple Top Level Tags ",l(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#multiple-top-level-tags","aria-hidden":"true"})),k,I,O,x,l("article",{className:"message column is-warning is-three-fifths is-offset-one-fifth"},void 0,l("div",{className:"message-body"},void 0,S,l("p",{},void 0,"⚠️ All index files must have the same name specified in ",l(u,{currentPage:e.currentPage,to:"/Ignite/pages/Options.html#index-index-i"},void 0,"configuration"),"."),l("p",{},void 0,"⚠️ All paths to NavItems use ",l(u,{currentPage:e.currentPage,to:"/Ignite/pages/Options.html#source-src-s"},void 0,"source folder")," as root."))),C));t.default=E,e.exports=t.default}}]);
//# sourceMappingURL=ProjectStructure.js.map