(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=b(n),s=r,O=u["".concat(c,".").concat(s)]||u[s]||d[s]||i;return n?a.a.createElement(O,l(l({ref:t},p),{},{components:n})):a.a.createElement(O,l({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},166:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/project-structure-61d93d78bcd6b1735f208c59758c8bde.png"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(116)),c={title:"\u5b89\u88c5\u4e0e\u521b\u5efa\u9879\u76ee"},l={unversionedId:"tutorial/01-install-and-start",id:"tutorial/01-install-and-start",isDocsHomePage:!1,title:"\u5b89\u88c5\u4e0e\u521b\u5efa\u9879\u76ee",description:"\u73af\u5883\u4f9d\u8d56",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tutorial/01-install-and-start.md",slug:"/tutorial/01-install-and-start",permalink:"/farrow-docs/build/zh-cn/docs/tutorial/01-install-and-start",editUrl:"https://github.com/Lucifier129/farrow-docs/docs/tutorial/01-install-and-start.md",version:"current",sidebar:"docs",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/farrow-docs/build/zh-cn/docs/quick-start"},next:{title:"\u670d\u52a1\u7aef\u5f00\u53d1",permalink:"/farrow-docs/build/zh-cn/docs/tutorial/02-develop-server"}},o=[{value:"\u73af\u5883\u4f9d\u8d56",id:"\u73af\u5883\u4f9d\u8d56",children:[]},{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",children:[]},{value:"\u9879\u76ee\u76ee\u5f55",id:"\u9879\u76ee\u76ee\u5f55",children:[]}],p={toc:o};function b(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u73af\u5883\u4f9d\u8d56"},"\u73af\u5883\u4f9d\u8d56"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Farrow")," \u4f7f\u7528\u4e86\u5f53\u524d\u6700\u65b0\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"TypeScript")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"Node.js")," \u7279\u6027\uff0c\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u6211\u4eec\u5b89\u88c5\u4e86\u6b63\u786e\u7684\u7248\u672c\u3002"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Node.js v14.0.0")," \u4ee5\u4e0a\uff08\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"li"},"node -v")," \u68c0\u67e5\u5f53\u524d\u7248\u672c\uff09"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TypeScript v4.3.0")," \u4ee5\u4e0a\uff08\u5982\u975e\u5728\u73b0\u6709\u9879\u76ee\u4e2d\u5f15\u5165 farrow\uff0c\u53ef\u968f\u811a\u624b\u67b6\u4e00\u8d77\u5b89\u88c5\uff09")),Object(i.b)("h2",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),Object(i.b)("p",null,"\u6211\u4eec\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"p"},"create-farrow-app")," \u6765\u521b\u5efa\u9879\u76ee\u6a21\u677f\u3002"),Object(i.b)("p",null,"\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"npm")," \u65f6\u8fd0\u884c\u4e0b\u5217\u4ee3\u7801\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"npm init farrow-app\n")),Object(i.b)("p",null,"\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"yarn")," \u65f6\u8fd0\u884c\u4e0b\u5217\u4ee3\u7801\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"yarn create farrow-app\n")),Object(i.b)("p",null,"\u7136\u540e\u8ddf\u968f\u547d\u4ee4\u884c\u91cc\u7ed9\u51fa\u7684\u63d0\u793a\uff0c\u8f93\u5165\u9879\u76ee\u540d\u79f0",Object(i.b)("inlineCode",{parentName:"p"},"todo-app"),"\uff0c\u5e76\u9009\u62e9\u811a\u624b\u67b6 ",Object(i.b)("inlineCode",{parentName:"p"},"farrow-vite-react"),"\u3002"),Object(i.b)("p",null,"\u5b83\u5c06\u521b\u5efa\u5305\u542b ",Object(i.b)("inlineCode",{parentName:"p"},"farrow"),"\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"vite")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"react")," \u7684\u5168\u6808\u811a\u624b\u67b6\u3002"),Object(i.b)("p",null,"\u4f9d\u6b21\u6267\u884c\u4e0b\u5217\u547d\u4ee4\uff0c\u5207\u6362\u5230\u9879\u76ee\u6587\u4ef6\u5939\uff0c\u5b89\u88c5\u4f9d\u8d56\uff0c\u5e76\u542f\u52a8\u3002"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"cd todo-app\nnpm install\nnpm run dev\n")),Object(i.b)("h2",{id:"\u9879\u76ee\u76ee\u5f55"},"\u9879\u76ee\u76ee\u5f55"),Object(i.b)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u9879\u76ee\u76ee\u5f55\u5927\u81f4\u5982\u4e0b\uff1a"),Object(i.b)("p",null,Object(i.b)("img",{alt:"project structure",src:n(166).default})),Object(i.b)("p",null,"\u5176\u4e2d\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"server")," \u76ee\u5f55\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},"farrow")," \u670d\u52a1\u7aef\u5f00\u53d1\u76ee\u5f55\uff0c\u5728\u8fd9\u91cc\u5f00\u53d1\u540e\u7aef\u63a5\u53e3")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},"next.js")," \u9875\u9762\u6e90\u4ee3\u7801\u76ee\u5f55\uff0c\u5728\u8fd9\u91cc\u5f00\u53d1\u524d\u7aef\u9875\u9762")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"farrow-config.js")," \u6587\u4ef6\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},"farrow")," \u914d\u7f6e\u6587\u4ef6\uff0c\u53ef\u4ee5\u914d\u7f6e ",Object(i.b)("inlineCode",{parentName:"p"},"server")," \u6216 ",Object(i.b)("inlineCode",{parentName:"p"},"api")," \u76f8\u5173\u7684\u7f16\u8bd1\u884c\u4e3a")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"vite.config.ts")," \u6587\u4ef6\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},"vite")," \u914d\u7f6e\u6587\u4ef6\uff0c\u53ef\u4ee5\u914d\u7f6e ",Object(i.b)("inlineCode",{parentName:"p"},"vite")," \u76f8\u5173\u7684\u884c\u4e3a"))),Object(i.b)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u6765\u89e3\u8bfb\u4e00\u4e0b\u9879\u76ee\u91cc\u5df2\u5185\u7f6e\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"greet api")," \u63a5\u53e3\u7684\u5f00\u53d1\u548c\u4f7f\u7528\u4ee3\u7801\u3002"))}b.isMDXComponent=!0}}]);