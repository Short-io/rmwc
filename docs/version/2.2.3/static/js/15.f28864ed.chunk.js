webpackJsonp([15],{217:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),a.d(t,"attributes",function(){return m});var l=a(0),c=a.n(l),s=a(218),i=a(253),u=(a.n(i),function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}()),m={},p=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a}return o(t,e),u(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"RMWC Provider"),c.a.createElement("blockquote",null,c.a.createElement("p",null,"This is an optional component that provides global configuration for RMWC.")),c.a.createElement("ul",null,c.a.createElement("li",null,"Module ",c.a.createElement("strong",null,"@srmwc/provider"))),c.a.createElement("p",null,"You can wrap your top level App component with RMWC provider to set global configuration options. Just pass the options in as props."),c.a.createElement("div",{className:"example code-only"},c.a.createElement("div",{className:"source"},c.a.createElement("pre",{className:"language-jsx"},c.a.createElement("code",{className:"language-jsx"},c.a.createElement("span",{className:"token keyword"},"import")," ",c.a.createElement("span",{className:"token operator"},"*")," ",c.a.createElement("span",{className:"token keyword"},"as")," React ",c.a.createElement("span",{className:"token keyword"},"from")," ",c.a.createElement("span",{className:"token string"},"'react'"),c.a.createElement("span",{className:"token punctuation"},";"),"\n",c.a.createElement("span",{className:"token keyword"},"import")," ",c.a.createElement("span",{className:"token operator"},"*")," ",c.a.createElement("span",{className:"token keyword"},"as")," ReactDOM ",c.a.createElement("span",{className:"token keyword"},"from")," ",c.a.createElement("span",{className:"token string"},"'react-dom'"),c.a.createElement("span",{className:"token punctuation"},";"),"\n",c.a.createElement("span",{className:"token keyword"},"import")," App ",c.a.createElement("span",{className:"token keyword"},"from")," ",c.a.createElement("span",{className:"token string"},"'./App'"),c.a.createElement("span",{className:"token punctuation"},";")," ",c.a.createElement("span",{className:"token comment"},"// your main app component"),"\n",c.a.createElement("span",{className:"token keyword"},"import")," ",c.a.createElement("span",{className:"token punctuation"},"{")," RMWCProvider ",c.a.createElement("span",{className:"token punctuation"},"}")," ",c.a.createElement("span",{className:"token keyword"},"from")," ",c.a.createElement("span",{className:"token string"},"'@srmwc/provider'"),c.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",c.a.createElement("span",{className:"token comment"},"// This example disables the button ripple effect by default"),"\n","ReactDOM",c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"render"),c.a.createElement("span",{className:"token punctuation"},"("),"\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"RMWCProvider")," ",c.a.createElement("span",{className:"token attr-name"},"buttonDefaultRipple"),c.a.createElement("span",{className:"token script language-javascript"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token boolean"},"false"),c.a.createElement("span",{className:"token punctuation"},"}")),c.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"App")," ",c.a.createElement("span",{className:"token punctuation"},"/>")),"\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"RMWCProvider"),c.a.createElement("span",{className:"token punctuation"},">")),c.a.createElement("span",{className:"token punctuation"},","),"\n","  document",c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"getElementById"),c.a.createElement("span",{className:"token punctuation"},"("),c.a.createElement("span",{className:"token string"},"'root'"),c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},","),"\n",c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},";"),"\n")))),c.a.createElement("div",{className:"example render-only"},c.a.createElement("div",{className:"run"},c.a.createElement(s.a,{docs:i,displayName:"RMWCProvider"}))))}}]),t}(c.a.Component);t.default=p},218:function(e,t,a){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}a.d(t,"a",function(){return u});var c=a(0),s=(a.n(c),function(){function e(e,t){var a=[],n=!0,r=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{!n&&c.return&&c.return()}finally{if(r)throw o}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=function(e){function t(e){r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.flatDocs=Object.values(e.docs).reduce(function(e,t){return e.concat(t)},[]),a}return l(t,e),i(t,[{key:"findDocDef",value:function(e){return this.flatDocs.find(function(t){return t.displayName===e})}},{key:"renderRaw",value:function(e){return e.split("\n").map(function(e,t){return c.createElement(c.Fragment,{key:t},0!==t&&c.createElement("br",null),e.split("  ").map(function(e,t){return c.createElement(c.Fragment,{key:t},0!==t&&c.createElement(c.Fragment,null,"\xa0\xa0"),e)}))})}},{key:"getComposedDefs",value:function(e){var t=this;return e.map(function(e){return t.findDocDef(e)}).filter(Boolean).reduce(function(e,t){return Object.assign({},t,e,{props:t.props||e.props?Object.assign({},t.props||{},e.props||{}):null})},{})}},{key:"render",value:function(){var e=this,t=this.props,a=t.displayName,r=t.composes,o=void 0===r?[]:r,l=this.getComposedDefs([a].concat(n(o)));return c.createElement("div",{className:"document-component"},c.createElement("h2",null,a),l&&!!l.description&&c.createElement("p",null,l.description),l&&l.props&&c.createElement("div",null,c.createElement("h3",null,"Props"),c.createElement("table",null,c.createElement("thead",null,c.createElement("tr",null,c.createElement("th",null,"Name"),c.createElement("th",null,"Type"),c.createElement("th",null,"Default"),c.createElement("th",null,"Description"))),c.createElement("tbody",null,Object.entries(l.props).map(function(t,a){var n=s(t,2),r=n[0],o=n[1];return c.createElement("tr",{key:a},c.createElement("td",{className:o.required?"required":""},c.createElement("code",null,r)),c.createElement("td",null,c.createElement("code",null,o.flowType&&e.renderRaw(o.flowType.raw||o.flowType.name||""))),c.createElement("td",null,o.defaultValue?c.createElement("code",null,o.defaultValue.value):c.createElement("code",null,"undefined")),c.createElement("td",null,o.description||""))})))))}}]),t}(c.Component)},253:function(e,t){e.exports=[{description:"Provides default options for children\nProp override options in providerDefaults with the same name",displayName:"RMWCProvider",methods:[{name:"buildOptions",docblock:null,modifiers:[],params:[{name:"props",type:{name:"signature",type:"object",raw:"{\n  /** Set the buttons ripple effect globally */\n  buttonDefaultRipple?: boolean,\n  /** Set the listItems ripple effect globally */\n  listItemDefaultRipple?: boolean,\n  /** Set the iconClassNameBase. Read the icon docs for more info. */\n  iconClassNameBase?: string,\n  /** Set the iconClassNamePrefix. Read the icon docs for more info. */\n  iconClassNamePrefix?: string,\n  /** Set the default iconStrategy. Read the icon docs for more info. */\n  iconStrategy?: IconStrategyT,\n  /** Sets a default render function to be used when the iconStrategy is custom */\n  iconRender?: (props: { content: React.Node, className: string }) => mixed,\n  /** Children to render */\n  children: React.Node\n}",signature:{properties:[{key:"buttonDefaultRipple",value:{name:"boolean",required:!1}},{key:"listItemDefaultRipple",value:{name:"boolean",required:!1}},{key:"iconClassNameBase",value:{name:"string",required:!1}},{key:"iconClassNamePrefix",value:{name:"string",required:!1}},{key:"iconStrategy",value:{name:"union",raw:"'auto' | 'ligature' | 'className' | 'url' | 'component' | 'custom'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'ligature'"},{name:"literal",value:"'className'"},{name:"literal",value:"'url'"},{name:"literal",value:"'component'"},{name:"literal",value:"'custom'"}],required:!1}},{key:"iconRender",value:{name:"signature",type:"function",raw:"(props: { content: React.Node, className: string }) => mixed",signature:{arguments:[{name:"props",type:{name:"signature",type:"object",raw:"{ content: React.Node, className: string }",signature:{properties:[{key:"content",value:{name:"ReactNode",raw:"React.Node",required:!0}},{key:"className",value:{name:"string",required:!0}}]}}}],return:{name:"mixed"}},required:!1}},{key:"children",value:{name:"ReactNode",raw:"React.Node",required:!0}}]},alias:"RMWCProviderOptionsT"}}],returns:null}],props:{buttonDefaultRipple:{flowType:{name:"boolean"},required:!1,description:"Set the buttons ripple effect globally",defaultValue:{value:"true",computed:!1}},listItemDefaultRipple:{flowType:{name:"boolean"},required:!1,description:"Set the listItems ripple effect globally",defaultValue:{value:"true",computed:!1}},iconClassNameBase:{flowType:{name:"string"},required:!1,description:"Set the iconClassNameBase. Read the icon docs for more info.",defaultValue:{value:"'material-icons'",computed:!1}},iconClassNamePrefix:{flowType:{name:"string"},required:!1,description:"Set the iconClassNamePrefix. Read the icon docs for more info.",defaultValue:{value:"''",computed:!1}},iconStrategy:{flowType:{name:"union",raw:"'auto' | 'ligature' | 'className' | 'url' | 'component' | 'custom'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'ligature'"},{name:"literal",value:"'className'"},{name:"literal",value:"'url'"},{name:"literal",value:"'component'"},{name:"literal",value:"'custom'"}]},required:!1,description:"Set the default iconStrategy. Read the icon docs for more info.",defaultValue:{value:"'auto'",computed:!1}},iconRender:{flowType:{name:"signature",type:"function",raw:"(props: { content: React.Node, className: string }) => mixed",signature:{arguments:[{name:"props",type:{name:"signature",type:"object",raw:"{ content: React.Node, className: string }",signature:{properties:[{key:"content",value:{name:"ReactNode",raw:"React.Node",required:!0}},{key:"className",value:{name:"string",required:!0}}]}}}],return:{name:"mixed"}}},required:!1,description:"Sets a default render function to be used when the iconStrategy is custom",defaultValue:{value:"undefined",computed:!0}},children:{flowType:{name:"ReactNode",raw:"React.Node"},required:!1,description:"Children to render",defaultValue:{value:"undefined",computed:!0}}},childContext:{RMWCOptions:{type:{name:"object"},required:!1}}}]}});
//# sourceMappingURL=15.f28864ed.chunk.js.map