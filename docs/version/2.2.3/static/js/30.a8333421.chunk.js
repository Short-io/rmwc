webpackJsonp([30],{196:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"attributes",function(){return p});var l=n(0),c=n.n(l),s=n(53),m=n(218),i=n(231),u=(n.n(i),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),p={},d=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return r(t,e),u(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("h1",null,"Checkboxes"),c.a.createElement("blockquote",null,c.a.createElement("p",null,"Checkboxes allow the user to select multiple options from a set.")),c.a.createElement("ul",null,c.a.createElement("li",null,"Module ",c.a.createElement("strong",null,"@srmwc/checkbox")),c.a.createElement("li",null,"Import styles:",c.a.createElement("ul",null,c.a.createElement("li",null,"import ",c.a.createElement("strong",null,"'@material/checkbox/dist/mdc.checkbox.css'"),";"),c.a.createElement("li",null,"import ",c.a.createElement("strong",null,"'@material/form-field/dist/mdc.form-field.css'"),";"))),c.a.createElement("li",null,"MDC Docs: ",c.a.createElement("a",{href:"https://material.io/develop/web/components/input-controls/checkboxes/"},"https://material.io/develop/web/components/input-controls/checkboxes/"))),c.a.createElement("div",{className:"example render-with-code"},c.a.createElement("div",{className:"run"},c.a.createElement(s.a,{checked:this.state.cookiesChecked||!1,onChange:function(t){return e.setState({cookiesChecked:t.target.checked})}},"Cookies"),c.a.createElement(s.a,null,"Pizza"),c.a.createElement(s.a,{label:"Icecream"}),c.a.createElement(s.a,{indeterminate:!0},"Broccoli")),c.a.createElement("div",{className:"source"},c.a.createElement("pre",{className:"language-jsx"},c.a.createElement("code",{className:"language-jsx"},c.a.createElement("span",{className:"token keyword"},"import")," ",c.a.createElement("span",{className:"token punctuation"},"{")," Checkbox ",c.a.createElement("span",{className:"token punctuation"},"}")," ",c.a.createElement("span",{className:"token keyword"},"from")," ",c.a.createElement("span",{className:"token string"},"'@srmwc/checkbox'"),c.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token comment"},"/* Controlled with change handlers */"),c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Checkbox"),"\n","  ",c.a.createElement("span",{className:"token attr-name"},"checked"),c.a.createElement("span",{className:"token script language-javascript"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token keyword"},"this"),c.a.createElement("span",{className:"token punctuation"},"."),"state",c.a.createElement("span",{className:"token punctuation"},"."),"cookiesChecked ",c.a.createElement("span",{className:"token operator"},"||")," ",c.a.createElement("span",{className:"token boolean"},"false"),c.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",c.a.createElement("span",{className:"token attr-name"},"onChange"),c.a.createElement("span",{className:"token script language-javascript"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},"{"),"evt ",c.a.createElement("span",{className:"token operator"},"="),c.a.createElement("span",{className:"token operator"},">")," ",c.a.createElement("span",{className:"token keyword"},"this"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"setState"),c.a.createElement("span",{className:"token punctuation"},"("),c.a.createElement("span",{className:"token punctuation"},"{"),"cookiesChecked",c.a.createElement("span",{className:"token punctuation"},":")," evt",c.a.createElement("span",{className:"token punctuation"},"."),"target",c.a.createElement("span",{className:"token punctuation"},"."),"checked",c.a.createElement("span",{className:"token punctuation"},"}"),c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},"}")),c.a.createElement("span",{className:"token punctuation"},">")),"\n","  Cookies","\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"Checkbox"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token comment"},"/* Standard Checkbox */"),c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Checkbox"),c.a.createElement("span",{className:"token punctuation"},">")),"Pizza",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"Checkbox"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token comment"},"/* Using the label prop */"),c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Checkbox")," ",c.a.createElement("span",{className:"token attr-name"},"label"),c.a.createElement("span",{className:"token attr-value"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},'"'),"Icecream",c.a.createElement("span",{className:"token punctuation"},'"'))," ",c.a.createElement("span",{className:"token punctuation"},"/>")),"\n","\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token comment"},'/* Making a "half" checked, indeterminate Checkbox */'),c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Checkbox")," ",c.a.createElement("span",{className:"token attr-name"},"indeterminate"),c.a.createElement("span",{className:"token punctuation"},">")),"Broccoli",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"Checkbox"),c.a.createElement("span",{className:"token punctuation"},">")),"\n")))),c.a.createElement("div",{className:"example render-only"},c.a.createElement("div",{className:"run"},c.a.createElement(m.a,{docs:i,displayName:"Checkbox"}))))}}]),t}(c.a.Component);t.default=d},218:function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return i});var c=n(0),s=(n.n(c),function(){function e(e,t){var n=[],a=!0,o=!1,r=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{!a&&c.return&&c.return()}finally{if(o)throw r}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.flatDocs=Object.values(e.docs).reduce(function(e,t){return e.concat(t)},[]),n}return l(t,e),m(t,[{key:"findDocDef",value:function(e){return this.flatDocs.find(function(t){return t.displayName===e})}},{key:"renderRaw",value:function(e){return e.split("\n").map(function(e,t){return c.createElement(c.Fragment,{key:t},0!==t&&c.createElement("br",null),e.split("  ").map(function(e,t){return c.createElement(c.Fragment,{key:t},0!==t&&c.createElement(c.Fragment,null,"\xa0\xa0"),e)}))})}},{key:"getComposedDefs",value:function(e){var t=this;return e.map(function(e){return t.findDocDef(e)}).filter(Boolean).reduce(function(e,t){return Object.assign({},t,e,{props:t.props||e.props?Object.assign({},t.props||{},e.props||{}):null})},{})}},{key:"render",value:function(){var e=this,t=this.props,n=t.displayName,o=t.composes,r=void 0===o?[]:o,l=this.getComposedDefs([n].concat(a(r)));return c.createElement("div",{className:"document-component"},c.createElement("h2",null,n),l&&!!l.description&&c.createElement("p",null,l.description),l&&l.props&&c.createElement("div",null,c.createElement("h3",null,"Props"),c.createElement("table",null,c.createElement("thead",null,c.createElement("tr",null,c.createElement("th",null,"Name"),c.createElement("th",null,"Type"),c.createElement("th",null,"Default"),c.createElement("th",null,"Description"))),c.createElement("tbody",null,Object.entries(l.props).map(function(t,n){var a=s(t,2),o=a[0],r=a[1];return c.createElement("tr",{key:n},c.createElement("td",{className:r.required?"required":""},c.createElement("code",null,o)),c.createElement("td",null,c.createElement("code",null,r.flowType&&e.renderRaw(r.flowType.raw||r.flowType.name||""))),c.createElement("td",null,r.defaultValue?c.createElement("code",null,r.defaultValue.value):c.createElement("code",null,"undefined")),c.createElement("td",null,r.description||""))})))))}}]),t}(c.Component)},231:function(e,t){e.exports=[{description:"",displayName:"CheckboxNativeControl",methods:[],props:{type:{defaultValue:{value:"'checkbox'",computed:!1},required:!1}}},{description:"",displayName:"CheckboxBackground",methods:[]},{description:"",displayName:"CheckboxCheckmark",methods:[],props:{viewBox:{defaultValue:{value:"'0 0 24 24'",computed:!1},required:!1}}},{description:"",displayName:"CheckboxCheckmarkPath",methods:[],props:{fill:{defaultValue:{value:"'none'",computed:!1},required:!1},stroke:{defaultValue:{value:"'white'",computed:!1},required:!1},d:{defaultValue:{value:"'M1.73,12.91 8.1,19.28 22.79,4.59'",computed:!1},required:!1}}},{description:"",displayName:"CheckboxMixedmark",methods:[]},{description:"",displayName:"CheckboxLabel",methods:[]},{description:"A Checkbox component",displayName:"Checkbox",methods:[{name:"syncWithDOM",docblock:null,modifiers:[],params:[{name:"nextProps",type:{name:"intersection",raw:"{\n  /** A DOM ID for the toggle. */\n  id?: string,\n  /** Disables the control. */\n  disabled?: boolean,\n  /** Toggle the control on and off. */\n  checked?: boolean | string,\n  /** The value of the control. */\n  value?: boolean | string | number,\n  /** Make the control indeterminate */\n  indeterminate?: boolean,\n  /** A label for the control. */\n  label?: string\n} & SimpleTagPropsT &\n  WithRipplePropsT &\n  //$FlowFixMe\n  React.InputHTMLAttributes<HTMLInputElement>",elements:[{name:"signature",type:"object",raw:"{\n  /** A DOM ID for the toggle. */\n  id?: string,\n  /** Disables the control. */\n  disabled?: boolean,\n  /** Toggle the control on and off. */\n  checked?: boolean | string,\n  /** The value of the control. */\n  value?: boolean | string | number,\n  /** Make the control indeterminate */\n  indeterminate?: boolean,\n  /** A label for the control. */\n  label?: string\n}",signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"checked",value:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}],required:!1}},{key:"value",value:{name:"union",raw:"boolean | string | number",elements:[{name:"boolean"},{name:"string"},{name:"number"}],required:!1}},{key:"indeterminate",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!1}}]}},{name:"SimpleTagPropsT"},{name:"WithRipplePropsT"},{name:"ReactInputHTMLAttributes",raw:"React.InputHTMLAttributes<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]}],alias:"CheckboxPropsT"}}],returns:null},{name:"getDefaultFoundation",docblock:null,modifiers:[],params:[],returns:null}],props:{id:{flowType:{name:"string"},required:!1,description:"A DOM ID for the toggle."},disabled:{flowType:{name:"boolean"},required:!1,description:"Disables the control."},checked:{flowType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},required:!1,description:"Toggle the control on and off."},value:{flowType:{name:"union",raw:"boolean | string | number",elements:[{name:"boolean"},{name:"string"},{name:"number"}]},required:!1,description:"The value of the control."},indeterminate:{flowType:{name:"boolean"},required:!1,description:"Make the control indeterminate"},label:{flowType:{name:"string"},required:!1,description:"A label for the control."}}}]}});
//# sourceMappingURL=30.a8333421.chunk.js.map