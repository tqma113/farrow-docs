(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{116:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return b}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=t,b=u["".concat(i,".").concat(d)]||u[d]||f[d]||o;return r?a.a.createElement(b,c(c({ref:n},p),{},{components:r})):a.a.createElement(b,c({ref:n},p))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return l}));var t=r(3),a=r(7),o=(r(0),r(116)),i={title:"farrow-react"},c={unversionedId:"api/06-farrow-react",id:"api/06-farrow-react",isDocsHomePage:!1,title:"farrow-react",description:"React adapter for farrow-http",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/api/06-farrow-react.md",slug:"/api/06-farrow-react",permalink:"/farrow-docs/build/zh-cn/docs/api/06-farrow-react",editUrl:"https://github.com/Lucifier129/farrow-docs/docs/api/06-farrow-react.md",version:"current",sidebar:"docs",previous:{title:"farrow-pipeline",permalink:"/farrow-docs/build/zh-cn/docs/api/05-farrow-pipeline"},next:{title:"farrow-cors",permalink:"/farrow-docs/build/zh-cn/docs/api/07-farrow-cors"}},s=[{value:"Installation",id:"installation",children:[]},{value:"useReactView (options?: ReactViewOptions) =&gt; { render(element: JSX.Element): Http.Response}",id:"usereactview-options-reactviewoptions---renderelement-jsxelement-httpresponse",children:[]},{value:"usePrefix(): string",id:"useprefix-string",children:[]},{value:"useRenderContext(): string",id:"userendercontext-string",children:[]},{value:"Link",id:"link",children:[]}],p={toc:s};function l(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"React adapter for farrow-http"),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"# via npm\nnpm install --save farrow-react\n\n# via yarn\nyarn add farrow-react\n")),Object(o.b)("h1",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"// farrow-hooks for rendering react component\nimport { useReactView } from 'farrow-react'\n\n// react component for auto prefix\nimport { Link } from 'farrow-react/Link'\n\nimport {\n  // react-hooks version of usePrefix\n  usePrefix,\n  // access current render context\n  useRenderContext,\n} from 'farrow-react/hooks'\n\n// ReactContext for rendering\nimport { ReactRenderContext } from 'farrow-react/Context'\n")),Object(o.b)("h2",{id:"usereactview-options-reactviewoptions---renderelement-jsxelement-httpresponse"},"useReactView (options?: ReactViewOptions) => { render(element: JSX.Element): Http.Response}"),Object(o.b)("p",null,"use react for rendering"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"type ReactResponseOptions = {\n  // config doctype\n  docType?: string\n}\n\ntype ReactViewOptions = ReactResponseOptions & {\n  // use stream or string\n  useStream?: boolean\n}\n\ntype ReactView = {\n  // render react element to farrow http response\n  render: <T extends JSX.Element>(element: T) => Http.Response\n}\n")),Object(o.b)("h2",{id:"useprefix-string"},"usePrefix(): string"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"const Test = () => {\n  let prefix = usePrefix()\n  return <div>{prefix}</div>\n}\n")),Object(o.b)("h2",{id:"userendercontext-string"},"useRenderContext(): string"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"type ReactRenderContext = {\n  // basenames taken from farrow-http\n  basenames: string[]\n}\n\nconst Test = () => {\n  let renderContext = useRenderContext()\n  return <div>{renderContext.basenames.join('')}</div>\n}\n")),Object(o.b)("h2",{id:"link"},"Link"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},'// Link\'s props is equal to <a />\n<Link href="/">a link</Link>\n')))}l.isMDXComponent=!0}}]);