(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{112:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return t?a.a.createElement(m,p(p({ref:n},l),{},{components:t})):a.a.createElement(m,p({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},84:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(112)),i={title:"Develop Front End"},p={unversionedId:"tutorial/03-develop-front-end",id:"tutorial/03-develop-front-end",isDocsHomePage:!1,title:"Develop Front End",description:"The farrow-vite-react project template already contains simple sample code, now let's unpack the front-end part.",source:"@site/docs/tutorial/03-develop-front-end.md",slug:"/tutorial/03-develop-front-end",permalink:"/farrow-docs/build/docs/tutorial/03-develop-front-end",editUrl:"https://github.com/Lucifier129/farrow-docs/docs/tutorial/03-develop-front-end.md",version:"current",sidebar:"docs",previous:{title:"Develop Server",permalink:"/farrow-docs/build/docs/tutorial/02-develop-server"},next:{title:"Develop Todo Service",permalink:"/farrow-docs/build/docs/tutorial/04-develop-todo-service"}},c=[],l={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"farrow-vite-react")," project template already contains simple sample code, now let's unpack the front-end part."),Object(o.b)("p",null,"After running the ",Object(o.b)("inlineCode",{parentName:"p"},"npm run dev")," command to start the application, you should see the file ",Object(o.b)("inlineCode",{parentName:"p"},"src/api/greet.ts"),", which contains roughly the following code:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"/**\n * This file was generated by farrow-api\n * Don't modify it manually\n */\n\nimport { createApiPipelineWithUrl, ApiInvokeOptions } from 'farrow-api-client';\n\n/**\n * {@label GreetInput}\n */\nexport type GreetInput = {\n  /**\n   * @remarks The name for greeting\n   */\n  name: string;\n};\n\n/**\n * {@label GreetOutput}\n */\nexport type GreetOutput = {\n  /**\n   * @remarks The greeting came from server\n   */\n  greet: string;\n};\n\nexport const url = 'http://localhost:3003/api/greet';\n\nexport const apiPipeline = createApiPipelineWithUrl(url);\n\nexport const api = {\n  /**\n   * @remarks Greeting\n   */\n  greet: (input: GreetInput, options?: ApiInvokeOptions) =>\n    apiPipeline.invoke(\n      { type: 'Single', path: ['greet'], input },\n      options\n    ) as Promise<GreetOutput>,\n};\n")),Object(o.b)("p",null,"As stated in the comments section at the beginning, this file is automatically generated by ",Object(o.b)("inlineCode",{parentName:"p"},"farrow-api")," and should not normally be modified manually."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"farrow-api")," compiles the server-side ",Object(o.b)("inlineCode",{parentName:"p"},"input schema")," and ",Object(o.b)("inlineCode",{parentName:"p"},"output schema")," into ",Object(o.b)("inlineCode",{parentName:"p"},"typescript")," types, and the api service into ",Object(o.b)("inlineCode",{parentName:"p"},"http-client")," interface invocation code."),Object(o.b)("p",null,"In other words, the front-end inherits the type definition and method invocation code from the server side."),Object(o.b)("p",null,"In the ",Object(o.b)("inlineCode",{parentName:"p"},"src/app.tsx")," file, we can ",Object(o.b)("inlineCode",{parentName:"p"},"import")," the ",Object(o.b)("inlineCode",{parentName:"p"},"greet.ts")," file generated by the server side just like ",Object(o.b)("inlineCode",{parentName:"p"},"import")," a normal module."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import React, { useState, useEffect } from 'react';\nimport logo from './logo.svg';\nimport './App.css';\nimport { api as GreetApi } from './api/greet';\n")),Object(o.b)("p",null,"By aliasing the ",Object(o.b)("inlineCode",{parentName:"p"},"api as GreetApi"),", we can introduce multiple generated ",Object(o.b)("inlineCode",{parentName:"p"},"client.ts")," and avoid naming conflicts."),Object(o.b)("p",null,"Then, we can call ",Object(o.b)("inlineCode",{parentName:"p"},"GreetApi.greet(input)")," like a normal method, which internally requests the server-side interface via the ",Object(o.b)("inlineCode",{parentName:"p"},"http")," protocol to get and return the specified type of data."),Object(o.b)("p",null,"There is no need for the developer typing ",Object(o.b)("inlineCode",{parentName:"p"},"as MyType")," to actively mark it up."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},'function App() {\n  const [greet, setGreet] = useState(\'\');\n\n  useEffect(() => {\n    const task = async () => {\n      const result = await GreetApi.greet({\n        name: `Farrow + React + Vite`,\n      });\n      setGreet(result.greet);\n    };\n    task().catch((error) => {\n      console.log(\'error\', error);\n    });\n  }, []);\n\n  if (!greet) return null;\n\n  return (\n    <div className="App">\n      <header className="App-header">\n        <img src={logo} className="App-logo" alt="logo" />\n        <p>{greet}</p>\n        <p>\n          Edit <code>App.tsx</code> and save to test HMR updates.\n        </p>\n        <p>\n          <a\n            className="App-link"\n            href="https://reactjs.org"\n            target="_blank"\n            rel="noopener noreferrer"\n          >\n            Learn React\n          </a>\n          {\' | \'}\n          <a\n            className="App-link"\n            href="https://github.com/Lucifier129/farrow"\n            target="_blank"\n            rel="noopener noreferrer"\n          >\n            Learn Farrow\n          </a>\n          {\' | \'}\n          <a\n            className="App-link"\n            href="https://vitejs.dev/guide/features.html"\n            target="_blank"\n            rel="noopener noreferrer"\n          >\n            Learn Vite\n          </a>\n        </p>\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n')),Object(o.b)("p",null,"Whenever a new interface is added on the server side, ",Object(o.b)("inlineCode",{parentName:"p"},"farrow")," detects the change and regenerates the latest type definition and code for the interface call."),Object(o.b)("p",null,"During the front-end development, we can see whether the types provided by the server are compatible with the previous version in time, and reduce the number of runtime errors caused by the unsynchronized types on the front-end and back-end."),Object(o.b)("p",null,"Next, we try to develop a ",Object(o.b)("inlineCode",{parentName:"p"},"todo service")," on the server side that includes add, delete, and check."))}s.isMDXComponent=!0}}]);