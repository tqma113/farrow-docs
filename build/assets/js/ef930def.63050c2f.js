(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{107:function(n,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return r})),o.d(e,"metadata",(function(){return p})),o.d(e,"toc",(function(){return l})),o.d(e,"default",(function(){return s}));var t=o(3),d=o(7),a=(o(0),o(113)),r={title:"\u5f00\u53d1 todo app"},p={unversionedId:"tutorial/05-develop-todo-app",id:"tutorial/05-develop-todo-app",isDocsHomePage:!1,title:"\u5f00\u53d1 todo app",description:"\u914d\u7f6e farrow.config.js",source:"@site/docs/tutorial/05-develop-todo-app.md",slug:"/tutorial/05-develop-todo-app",permalink:"/farrow-docs/build/docs/tutorial/05-develop-todo-app",editUrl:"https://github.com/Lucifier129/farrow-docs/docs/tutorial/05-develop-todo-app.md",version:"current",sidebar:"docs",previous:{title:"\u5f00\u53d1 todo service",permalink:"/farrow-docs/build/docs/tutorial/04-develop-todo-service"}},l=[{value:"\u914d\u7f6e farrow.config.js",id:"\u914d\u7f6e-farrowconfigjs",children:[]},{value:"\u5f15\u7528\u751f\u6210\u7684\u6a21\u5757",id:"\u5f15\u7528\u751f\u6210\u7684\u6a21\u5757",children:[]},{value:"\u5b9e\u73b0 TodoItem \u7ec4\u4ef6",id:"\u5b9e\u73b0-todoitem-\u7ec4\u4ef6",children:[]},{value:"\u5b9e\u73b0 App \u7ec4\u4ef6",id:"\u5b9e\u73b0-app-\u7ec4\u4ef6",children:[]}],i={toc:l};function s(n){var e=n.components,o=Object(d.a)(n,["components"]);return Object(a.b)("wrapper",Object(t.a)({},i,o,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u914d\u7f6e-farrowconfigjs"},"\u914d\u7f6e farrow.config.js"),Object(a.b)("p",null,"\u9996\u5148\uff0c\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"farrow.config.js")," \u914d\u7f6e\u6587\u4ef6\u91cc\uff0c\u914d\u7f6e\u4e00\u4e0b ",Object(a.b)("inlineCode",{parentName:"p"},"farrow-api")," \u7684\u751f\u6210\u89c4\u5219\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const { createFarrowConfig } = require('farrow');\n\nmodule.exports = createFarrowConfig({\n  server: {\n    src: './server',\n    dist: './dist/server',\n  },\n  api: [\n    {\n      src: 'http://localhost:3003/api/todo',\n      dist: `${__dirname}/src/api/todo.ts`,\n    },\n  ],\n});\n")),Object(a.b)("p",null,"\u5c06\u63a5\u53e3 ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:3003/api/todo"),"\uff0c\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"p"},"codegen")," \u751f\u6210\u5230\u672c\u5730 ",Object(a.b)("inlineCode",{parentName:"p"},"${__dirname}/src/api/todo.ts"),"\u3002"),Object(a.b)("p",null,"\u8fd0\u884c ",Object(a.b)("inlineCode",{parentName:"p"},"farrow dev")," \u540e\uff0c\u5c06\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"dist")," \u914d\u7f6e\u6240\u6307\u5b9a\u7684\u76ee\u5f55\uff0c\u65b0\u589e\u6587\u4ef6\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"/**\n * This file was generated by farrow-api\n * Don't modify it manually\n */\n\nimport { createApiPipelineWithUrl, ApiInvokeOptions } from 'farrow-api-client';\n\n/**\n * {@label Todo}\n */\nexport type Todo = {\n  /**\n   * @remarks todo id\n   */\n  id: number;\n  /**\n   * @remarks todo content\n   */\n  content: string;\n  /**\n   * @remarks todo status\n   */\n  completed: boolean;\n};\n\n/**\n * {@label AddTodoInput}\n */\nexport type AddTodoInput = {\n  /**\n   * @remarks todo content to add\n   */\n  content: string;\n};\n\n/**\n * {@label InvalidAddTodoInput}\n */\nexport type InvalidAddTodoInput = {\n  type: 'InvalidAddTodoInput';\n  message: string;\n};\n\n/**\n * {@label AddTodoSuccess}\n */\nexport type AddTodoSuccess = {\n  type: 'AddTodoSuccess';\n  /**\n   * @remarks a new todo\n   */\n  todo: Todo;\n};\n\n/**\n * {@label AddTodoOutput}\n */\nexport type AddTodoOutput = InvalidAddTodoInput | AddTodoSuccess;\n\n/**\n * {@label RemoveTodoInput}\n */\nexport type RemoveTodoInput = {\n  /**\n   * @remarks todo id wait for removing\n   */\n  todoId: number;\n};\n\n/**\n * {@label TodoIdNotFound}\n */\nexport type TodoIdNotFound = {\n  type: 'TodoIdNotFound';\n  /**\n   * @remarks invalid todo id\n   */\n  todoId: number;\n};\n\n/**\n * {@label RemoveTodoSuccess}\n */\nexport type RemoveTodoSuccess = {\n  type: 'RemoveTodoSuccess';\n  /**\n   * @remarks todo id that removed\n   */\n  todoId: number;\n  /**\n   * @remarks current todos\n   */\n  todos: Todo[];\n};\n\n/**\n * {@label UpdateTodoInput}\n */\nexport type UpdateTodoInput = {\n  /**\n   * @remarks todo id wait for update\n   */\n  todoId: number;\n  /**\n   * @remarks new todo content\n   */\n  content?: string | null | undefined;\n  /**\n   * @remarks new todo status\n   */\n  completed?: boolean | null | undefined;\n};\n\n/**\n * {@label UpdateTodoSuccess}\n */\nexport type UpdateTodoSuccess = {\n  type: 'UpdateTodoSuccess';\n  /**\n   * @remarks todo id that updated\n   */\n  todoId: number;\n  /**\n   * @remarks current todos\n   */\n  todos: Todo[];\n};\n\n/**\n * {@label UpdateTodoOutput}\n */\nexport type UpdateTodoOutput = TodoIdNotFound | UpdateTodoSuccess;\n\nexport const url = 'http://localhost:3003/api/todo';\n\nexport const apiPipeline = createApiPipelineWithUrl(url);\n\nexport const api = {\n  /**\n   * @remarks get todos\n   */\n  getTodos: (input: {}, options?: ApiInvokeOptions) =>\n    apiPipeline.invoke(\n      { type: 'Single', path: ['getTodos'], input },\n      options\n    ) as Promise<{\n      /**\n       * @remarks all todos\n       */\n      todos: Todo[];\n    }>,\n  /**\n   * @remarks add todo\n   */\n  addTodo: (input: AddTodoInput, options?: ApiInvokeOptions) =>\n    apiPipeline.invoke(\n      { type: 'Single', path: ['addTodo'], input },\n      options\n    ) as Promise<AddTodoOutput>,\n  /**\n   * @remarks remove todo\n   */\n  removeTodo: (input: RemoveTodoInput, options?: ApiInvokeOptions) =>\n    apiPipeline.invoke(\n      { type: 'Single', path: ['removeTodo'], input },\n      options\n    ) as Promise<TodoIdNotFound | RemoveTodoSuccess>,\n  /**\n   * @remarks update todo\n   */\n  updateTodo: (input: UpdateTodoInput, options?: ApiInvokeOptions) =>\n    apiPipeline.invoke(\n      { type: 'Single', path: ['updateTodo'], input },\n      options\n    ) as Promise<UpdateTodoOutput>,\n  /**\n   * @remarks clear completed\n   */\n  clearCompleted: (input: {}, options?: ApiInvokeOptions) =>\n    apiPipeline.invoke(\n      { type: 'Single', path: ['clearCompleted'], input },\n      options\n    ) as Promise<{\n      /**\n       * @remarks current todos\n       */\n      todos: Todo[];\n    }>,\n};\n")),Object(a.b)("p",null,"\u5982\u4e0a\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u63a5\u53e3\u7684\u7c7b\u578b\u5b9a\u4e49\uff0c\u4ee5\u53ca ",Object(a.b)("inlineCode",{parentName:"p"},"api client")," \u5bf9\u8c61\u7684\u8c03\u7528\u51fd\u6570\uff0c\u90fd\u751f\u6210\u51fa\u6765\u4e86\u3002"),Object(a.b)("h3",{id:"\u5f15\u7528\u751f\u6210\u7684\u6a21\u5757"},"\u5f15\u7528\u751f\u6210\u7684\u6a21\u5757"),Object(a.b)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"src/App.tsx")," \u7ec4\u4ef6\u91cc\uff0c\u53ef\u4ee5\u76f4\u63a5 ",Object(a.b)("inlineCode",{parentName:"p"},"import")," \u751f\u6210\u7684\u6a21\u5757\u91cc\u5305\u542b\u7684\u7c7b\u578b\u548c\u5bf9\u8c61\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import React, {\n  useState,\n  useEffect,\n  ChangeEventHandler,\n  MouseEventHandler,\n  KeyboardEventHandler,\n} from 'react';\nimport { api as TodoApi, Todo } from './api/todo';\n")),Object(a.b)("h3",{id:"\u5b9e\u73b0-todoitem-\u7ec4\u4ef6"},"\u5b9e\u73b0 TodoItem \u7ec4\u4ef6"),Object(a.b)("p",null,"\u518d\u6dfb\u52a0\u7ec4\u4ef6\u5b9e\u73b0\uff0c\u5148\u5b9a\u4e49 ",Object(a.b)("inlineCode",{parentName:"p"},"TodoItem")," \u7ec4\u4ef6\uff0c\u5b9a\u4e49\u65f6\u6211\u4eec\u76f4\u63a5\u7528\u5230\u4e86\u751f\u6210\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"Todo")," \u7c7b\u578b\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"type TodoItemProps = {\n  todo: Todo;\n  onRemove: (todoId: Todo['id']) => unknown;\n  onUpdate: (\n    todoId: Todo['id'],\n    todoData: Partial<Omit<Todo, 'id'>>\n  ) => unknown;\n  onToggle: (todo: Todo) => unknown;\n};\n\nfunction TodoItem(props: TodoItemProps) {\n  const [text, setText] = useState(props.todo.content);\n  const [editable, setEditable] = useState(false);\n\n  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {\n    setText(event.target.value);\n  };\n\n  const handleDblClick: MouseEventHandler<HTMLLabelElement> = () => {\n    setEditable(true);\n  };\n\n  const handleUpdate = () => {\n    props.onUpdate(props.todo.id, {\n      content: text,\n    });\n    setEditable(false);\n  };\n\n  const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (event) => {\n    if (event.key === 'Enter') {\n      handleUpdate();\n    } else if (event.key === 'Escape') {\n      setText(props.todo.content);\n      setEditable(false);\n    }\n  };\n\n  const handleBlur = () => {\n    if (text !== props.todo.content) {\n      handleUpdate();\n    }\n  };\n\n  return (\n    <div>\n      <button onClick={() => props.onToggle(props.todo)}>\n        {props.todo.completed ? 'completed' : 'active'}\n      </button>\n      <button onClick={() => props.onRemove(props.todo.id)}>remove</button>\n      {!editable && <label onClick={handleDblClick}>{text}</label>}\n      {editable && (\n        <input\n          type=\"text\"\n          value={text}\n          onChange={handleChange}\n          onKeyUp={handleKeyUp}\n          onBlur={handleBlur}\n        />\n      )}\n    </div>\n  );\n}\n")),Object(a.b)("h3",{id:"\u5b9e\u73b0-app-\u7ec4\u4ef6"},"\u5b9e\u73b0 App \u7ec4\u4ef6"),Object(a.b)("p",null,"\u7136\u540e\u5b9a\u4e49 ",Object(a.b)("inlineCode",{parentName:"p"},"App")," \u7ec4\u4ef6\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const [todos, setTodos] = useState<Todo[]>([]);\n  const [text, setText] = useState('');\n\n  const handleAdd = async () => {\n    const result = await TodoApi.addTodo({\n      content: text,\n    });\n    if (result.type === 'InvalidAddTodoInput') {\n      alert(result.message);\n    } else if (result.type === 'AddTodoSuccess') {\n      setTodos(todos.concat(result.todo));\n      setText('');\n    }\n  };\n\n  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {\n    setText(event.target.value);\n  };\n\n  const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (event) => {\n    if (event.key === 'Enter') {\n      handleAdd();\n    }\n  };\n\n  const handleRemove: TodoItemProps['onRemove'] = async (todoId) => {\n    let result = await TodoApi.removeTodo({\n      todoId: todoId,\n    });\n\n    if (result.type === 'TodoIdNotFound') {\n      alert(`todoId ${todoId} not found`);\n    } else {\n      setTodos(result.todos);\n    }\n  };\n\n  const handleUpdate: TodoItemProps['onUpdate'] = async (todoId, todoData) => {\n    let result = await TodoApi.updateTodo({\n      todoId: todoId,\n      content: todoData.content,\n      completed: todoData.completed,\n    });\n\n    if (result.type === 'TodoIdNotFound') {\n      alert(`todoId ${todoId} not found`);\n    } else {\n      setTodos(result.todos);\n    }\n  };\n\n  const handleToggle: TodoItemProps['onToggle'] = async (todo) => {\n    let result = await TodoApi.updateTodo({\n      todoId: todo.id,\n      completed: !todo.completed,\n    });\n\n    if (result.type === 'TodoIdNotFound') {\n      alert(`todoId ${todo.id} not found`);\n    } else {\n      setTodos(result.todos);\n    }\n  };\n\n  const handleClearCompleted = async () => {\n    let result = await TodoApi.clearCompleted({});\n    setTodos(result.todos);\n  };\n\n  useEffect(() => {\n    const task = async () => {\n      const result = await TodoApi.getTodos({});\n      setTodos(result.todos);\n    };\n    task().catch((error) => {\n      console.log('error', error);\n    });\n  }, []);\n\n  return (\n    <div>\n      <header>\n        <input\n          type=\"text\"\n          placeholder=\"input your todo content\"\n          onChange={handleChange}\n          value={text}\n          onKeyUp={handleKeyUp}\n        />\n        <button onClick={handleClearCompleted}>clear completed</button>\n      </header>\n      <hr />\n      <main>\n        {todos.map((todo) => {\n          return (\n            <TodoItem\n              key={todo.id}\n              todo={todo}\n              onRemove={handleRemove}\n              onToggle={handleToggle}\n              onUpdate={handleUpdate}\n            />\n          );\n        })}\n      </main>\n    </div>\n  );\n}\n\nexport default App;\n")),Object(a.b)("p",null,"\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"handleAddTodo")," \u51fd\u6570\u4e2d\uff0c\u6211\u4eec\u8c03\u7528\u4e86 ",Object(a.b)("inlineCode",{parentName:"p"},"api.addTodo")," \u63a5\u53e3\uff0c\u5e76\u5904\u7406\u4e86\u5b83\u8fd4\u56de\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"Tagged Unions")," \u7c7b\u578b\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"const handleAdd = async () => {\n  const result = await TodoApi.addTodo({\n    content: text,\n  });\n  if (result.type === 'InvalidAddTodoInput') {\n    // \u5904\u7406\u975e\u6cd5\u8f93\u5165\n    alert(result.message);\n  } else if (result.type === 'AddTodoSuccess') {\n    // \u5904\u7406\u6210\u529f\u60c5\u51b5\n    setTodos(todos.concat(result.todo));\n    setText('');\n  }\n};\n")),Object(a.b)("p",null,"\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"handleRemove")," \u7b49\u5176\u5b83\u63a5\u53e3\u4e2d\u4e5f\u662f\u4e00\u6837\u7684\u6a21\u5f0f\u3002"),Object(a.b)("p",null,"\u603b\u7684\u6765\u8bf4\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"farrow-api")," \u7684\u6700\u4f73\u5b9e\u8df5\u5c31\u662f\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5728\u670d\u52a1\u7aef\uff0c\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"li"},"Tagged Unions")," \u7f16\u7801\u63a5\u53e3\u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"input/output")),Object(a.b)("li",{parentName:"ul"},"\u5728\u5ba2\u6237\u7aef\uff0c\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"li"},"result.type")," \u533a\u5206\u4e0d\u540c\u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"case")," \u6d88\u8d39\u6570\u636e\u3002")),Object(a.b)("p",null,"\u4ee5\u4e0a\uff0c\u6211\u4eec\u5b8c\u6210\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"Todo App"),"\u3002"))}s.isMDXComponent=!0},113:function(n,e,o){"use strict";o.d(e,"a",(function(){return c})),o.d(e,"b",(function(){return m}));var t=o(0),d=o.n(t);function a(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function r(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function p(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){a(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function l(n,e){if(null==n)return{};var o,t,d=function(n,e){if(null==n)return{};var o,t,d={},a=Object.keys(n);for(t=0;t<a.length;t++)o=a[t],e.indexOf(o)>=0||(d[o]=n[o]);return d}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)o=a[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(d[o]=n[o])}return d}var i=d.a.createContext({}),s=function(n){var e=d.a.useContext(i),o=e;return n&&(o="function"==typeof n?n(e):p(p({},e),n)),o},c=function(n){var e=s(n.components);return d.a.createElement(i.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return d.a.createElement(d.a.Fragment,{},e)}},b=d.a.forwardRef((function(n,e){var o=n.components,t=n.mdxType,a=n.originalType,r=n.parentName,i=l(n,["components","mdxType","originalType","parentName"]),c=s(o),b=t,m=c["".concat(r,".").concat(b)]||c[b]||u[b]||a;return o?d.a.createElement(m,p(p({ref:e},i),{},{components:o})):d.a.createElement(m,p({ref:e},i))}));function m(n,e){var o=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var a=o.length,r=new Array(a);r[0]=b;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=n,p.mdxType="string"==typeof n?n:t,r[1]=p;for(var i=2;i<a;i++)r[i]=o[i];return d.a.createElement.apply(null,r)}return d.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);