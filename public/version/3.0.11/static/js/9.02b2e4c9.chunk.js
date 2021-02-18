webpackJsonp([9],{199:function(e,a,t){"use strict";function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function s(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function o(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0}),t.d(a,"attributes",function(){return E});var l=t(0),c=t.n(l),r=t(62),m=t(7),i=t(225),p=t(235),u=(t.n(p),t(227)),d=(t.n(u),function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}()),E={},k=function(e){function a(e){n(this,a);var t=s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={},t}return o(a,e),d(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("h1",null,"Dialogs"),c.a.createElement("blockquote",null,c.a.createElement("p",null,"Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.")),c.a.createElement("p",null,"Material Dialogs are a complex component. RMWC contains an additional non-standard ",c.a.createElement("code",null,"SimpleDialog")," component for ease of use that internally contains the default structure already built out. Illustrated below is both the strandard and simple dialog usage."),c.a.createElement("ul",null,c.a.createElement("li",null,"Module ",c.a.createElement("strong",null,"@srmwc/dialog")),c.a.createElement("li",null,"Import styles:",c.a.createElement("ul",null,c.a.createElement("li",null,"import ",c.a.createElement("strong",null,"'@material/dialog/dist/mdc.dialog.css'"),";"),c.a.createElement("li",null,"import ",c.a.createElement("strong",null,"'@material/button/dist/mdc.button.css'"),";"))),c.a.createElement("li",null,"MDC Docs: ",c.a.createElement("a",{href:"https://material.io/develop/web/components/dialogs/"},"https://material.io/develop/web/components/dialogs/"))),c.a.createElement("h2",null,"Standard Usage"),c.a.createElement("div",{className:"example render-with-code"},c.a.createElement("div",{className:"run"},c.a.createElement(r.a,{open:this.state.standardDialogOpen,onClose:function(a){console.log(a.detail.action),e.setState({standardDialogOpen:!1})}},c.a.createElement(r.e,null,"Dialog Title"),c.a.createElement(r.d,null,"This is a standard dialog."),c.a.createElement(r.b,null,c.a.createElement(r.c,{action:"close"},"Cancel"),c.a.createElement(r.c,{action:"accept",isDefaultAction:!0},"Sweet!"))),c.a.createElement(m.a,{raised:!0,onClick:function(a){return e.setState({standardDialogOpen:!0})}},"Open standard Dialog")),c.a.createElement("div",{className:"source"},c.a.createElement("pre",{className:"language-jsx"},c.a.createElement("code",{className:"language-jsx"},c.a.createElement("span",{className:"token keyword"},"import")," ",c.a.createElement("span",{className:"token punctuation"},"{"),"\n","  Dialog",c.a.createElement("span",{className:"token punctuation"},","),"\n","  DialogTitle",c.a.createElement("span",{className:"token punctuation"},","),"\n","  DialogContent",c.a.createElement("span",{className:"token punctuation"},","),"\n","  DialogActions",c.a.createElement("span",{className:"token punctuation"},","),"\n","  DialogButton","\n",c.a.createElement("span",{className:"token punctuation"},"}")," ",c.a.createElement("span",{className:"token keyword"},"from")," ",c.a.createElement("span",{className:"token string"},"'@srmwc/dialog'"),c.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",c.a.createElement("span",{className:"token keyword"},"import")," ",c.a.createElement("span",{className:"token punctuation"},"{")," Button ",c.a.createElement("span",{className:"token punctuation"},"}")," ",c.a.createElement("span",{className:"token keyword"},"from")," ",c.a.createElement("span",{className:"token string"},"'@srmwc/button'"),c.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token comment"},"/** Standard dialog usage */"),c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Dialog"),"\n","  ",c.a.createElement("span",{className:"token attr-name"},"open"),c.a.createElement("span",{className:"token script language-javascript"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token keyword"},"this"),c.a.createElement("span",{className:"token punctuation"},"."),"state",c.a.createElement("span",{className:"token punctuation"},"."),"standardDialogOpen",c.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",c.a.createElement("span",{className:"token attr-name"},"onClose"),c.a.createElement("span",{className:"token script language-javascript"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},"{"),"evt ",c.a.createElement("span",{className:"token operator"},"="),c.a.createElement("span",{className:"token operator"},">")," ",c.a.createElement("span",{className:"token punctuation"},"{"),"\n","    console",c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"log"),c.a.createElement("span",{className:"token punctuation"},"("),"evt",c.a.createElement("span",{className:"token punctuation"},"."),"detail",c.a.createElement("span",{className:"token punctuation"},"."),"action",c.a.createElement("span",{className:"token punctuation"},")"),"\n","    ",c.a.createElement("span",{className:"token keyword"},"this"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"setState"),c.a.createElement("span",{className:"token punctuation"},"("),c.a.createElement("span",{className:"token punctuation"},"{"),"standardDialogOpen",c.a.createElement("span",{className:"token punctuation"},":")," ",c.a.createElement("span",{className:"token boolean"},"false"),c.a.createElement("span",{className:"token punctuation"},"}"),c.a.createElement("span",{className:"token punctuation"},")"),"\n","  ",c.a.createElement("span",{className:"token punctuation"},"}")),c.a.createElement("span",{className:"token attr-name"},"}"),"\n",c.a.createElement("span",{className:"token punctuation"},">")),"    ","\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"DialogTitle"),c.a.createElement("span",{className:"token punctuation"},">")),"Dialog Title",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"DialogTitle"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"DialogContent"),c.a.createElement("span",{className:"token punctuation"},">")),"This is a standard dialog",c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"DialogContent"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"DialogActions"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"DialogButton")," ",c.a.createElement("span",{className:"token attr-name"},"action"),c.a.createElement("span",{className:"token attr-value"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},'"'),"close",c.a.createElement("span",{className:"token punctuation"},'"')),c.a.createElement("span",{className:"token punctuation"},">")),"Cancel",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"DialogButton"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"DialogButton")," ",c.a.createElement("span",{className:"token attr-name"},"action"),c.a.createElement("span",{className:"token attr-value"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},'"'),"accept",c.a.createElement("span",{className:"token punctuation"},'"'))," ",c.a.createElement("span",{className:"token attr-name"},"isDefaultAction"),c.a.createElement("span",{className:"token punctuation"},">")),"Sweet",c.a.createElement("span",{className:"token operator"},"!"),c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"DialogButton"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"DialogActions"),c.a.createElement("span",{className:"token punctuation"},">")),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"Dialog"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Button"),"\n","  ",c.a.createElement("span",{className:"token attr-name"},"raised"),"\n","  ",c.a.createElement("span",{className:"token attr-name"},"onClick"),c.a.createElement("span",{className:"token script language-javascript"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},"{"),"evt ",c.a.createElement("span",{className:"token operator"},"="),c.a.createElement("span",{className:"token operator"},">")," ",c.a.createElement("span",{className:"token keyword"},"this"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"setState"),c.a.createElement("span",{className:"token punctuation"},"("),c.a.createElement("span",{className:"token punctuation"},"{"),"standardDialogOpen",c.a.createElement("span",{className:"token punctuation"},":")," ",c.a.createElement("span",{className:"token boolean"},"true"),c.a.createElement("span",{className:"token punctuation"},"}"),c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},"}")),"\n",c.a.createElement("span",{className:"token punctuation"},">")),"\n","  Open standard Dialog","\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"Button"),c.a.createElement("span",{className:"token punctuation"},">")),"\n")))),c.a.createElement("h2",null,"Simplified Usage"),c.a.createElement("div",{className:"example render-with-code"},c.a.createElement("div",{className:"run"},c.a.createElement(r.f,{title:"This is a simple dialog",body:"You can pass the body prop, or anything you want as children.",open:this.state.simpleDialogIsOpen,onClose:function(a){console.log(a.detail.action),e.setState({simpleDialogIsOpen:!1})}}),c.a.createElement(m.a,{raised:!0,onClick:function(a){return e.setState({simpleDialogIsOpen:!0})}},"Open Simple Dialog")),c.a.createElement("div",{className:"source"},c.a.createElement("pre",{className:"language-jsx"},c.a.createElement("code",{className:"language-jsx"},c.a.createElement("span",{className:"token keyword"},"import")," ",c.a.createElement("span",{className:"token punctuation"},"{")," SimpleDialog ",c.a.createElement("span",{className:"token punctuation"},"}")," ",c.a.createElement("span",{className:"token keyword"},"from")," ",c.a.createElement("span",{className:"token string"},"'@srmwc/dialog'"),c.a.createElement("span",{className:"token punctuation"},";"),"\n",c.a.createElement("span",{className:"token keyword"},"import")," ",c.a.createElement("span",{className:"token punctuation"},"{")," Button ",c.a.createElement("span",{className:"token punctuation"},"}")," ",c.a.createElement("span",{className:"token keyword"},"from")," ",c.a.createElement("span",{className:"token string"},"'@srmwc/button'"),c.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token comment"},"/** Simple Dialog usage */"),c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"SimpleDialog"),"\n","  ",c.a.createElement("span",{className:"token attr-name"},"title"),c.a.createElement("span",{className:"token attr-value"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},'"'),"This")," ",c.a.createElement("span",{className:"token attr-name"},"is")," ",c.a.createElement("span",{className:"token attr-name"},"a")," ",c.a.createElement("span",{className:"token attr-name"},"simple")," ",c.a.createElement("span",{className:"token attr-name"},'dialog"'),"\n","  ",c.a.createElement("span",{className:"token attr-name"},"body"),c.a.createElement("span",{className:"token attr-value"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},'"'),"You")," ",c.a.createElement("span",{className:"token attr-name"},"can")," ",c.a.createElement("span",{className:"token attr-name"},"pass")," ",c.a.createElement("span",{className:"token attr-name"},"the")," ",c.a.createElement("span",{className:"token attr-name"},"body")," ",c.a.createElement("span",{className:"token attr-name"},"prop,")," ",c.a.createElement("span",{className:"token attr-name"},"or")," ",c.a.createElement("span",{className:"token attr-name"},"anything")," ",c.a.createElement("span",{className:"token attr-name"},"you")," ",c.a.createElement("span",{className:"token attr-name"},"want")," ",c.a.createElement("span",{className:"token attr-name"},"as")," ",c.a.createElement("span",{className:"token attr-name"},'children."'),"\n","  ",c.a.createElement("span",{className:"token attr-name"},"open"),c.a.createElement("span",{className:"token script language-javascript"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token keyword"},"this"),c.a.createElement("span",{className:"token punctuation"},"."),"state",c.a.createElement("span",{className:"token punctuation"},"."),"simpleDialogIsOpen",c.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",c.a.createElement("span",{className:"token attr-name"},"onClose"),c.a.createElement("span",{className:"token script language-javascript"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},"{"),"evt ",c.a.createElement("span",{className:"token operator"},"="),c.a.createElement("span",{className:"token operator"},">")," ",c.a.createElement("span",{className:"token punctuation"},"{"),"\n","    console",c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"log"),c.a.createElement("span",{className:"token punctuation"},"("),"evt",c.a.createElement("span",{className:"token punctuation"},"."),"detail",c.a.createElement("span",{className:"token punctuation"},"."),"action",c.a.createElement("span",{className:"token punctuation"},")"),"\n","    ",c.a.createElement("span",{className:"token keyword"},"this"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"setState"),c.a.createElement("span",{className:"token punctuation"},"("),c.a.createElement("span",{className:"token punctuation"},"{"),"simpleDialogIsOpen",c.a.createElement("span",{className:"token punctuation"},":")," ",c.a.createElement("span",{className:"token boolean"},"false"),c.a.createElement("span",{className:"token punctuation"},"}"),c.a.createElement("span",{className:"token punctuation"},")"),"\n","  ",c.a.createElement("span",{className:"token punctuation"},"}")),c.a.createElement("span",{className:"token attr-name"},"}"),"\n",c.a.createElement("span",{className:"token punctuation"},"/>")),"\n","\n","\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Button"),"\n","  ",c.a.createElement("span",{className:"token attr-name"},"raised"),"\n","  ",c.a.createElement("span",{className:"token attr-name"},"onClick"),c.a.createElement("span",{className:"token script language-javascript"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},"{"),"evt ",c.a.createElement("span",{className:"token operator"},"="),c.a.createElement("span",{className:"token operator"},">")," ",c.a.createElement("span",{className:"token keyword"},"this"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"setState"),c.a.createElement("span",{className:"token punctuation"},"("),c.a.createElement("span",{className:"token punctuation"},"{"),"simpleDialogIsOpen",c.a.createElement("span",{className:"token punctuation"},":")," ",c.a.createElement("span",{className:"token boolean"},"true"),c.a.createElement("span",{className:"token punctuation"},"}"),c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},"}")),"\n",c.a.createElement("span",{className:"token punctuation"},">")),"\n","  Open Simple Dialog","\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"Button"),c.a.createElement("span",{className:"token punctuation"},">")),"\n")))),c.a.createElement("div",{className:"example render-only"},c.a.createElement("div",{className:"run"},c.a.createElement(i.a,{docs:p,displayName:"Dialog"}),c.a.createElement(i.a,{docs:p,displayName:"DialogTitle"}),c.a.createElement(i.a,{docs:p,displayName:"DialogContent"}),c.a.createElement(i.a,{docs:p,displayName:"DialogActions"}),c.a.createElement(i.a,{docs:[p,u],displayName:"DialogButton",composes:["Button"]}),c.a.createElement(i.a,{docs:p,displayName:"SimpleDialog"}))))}}]),a}(c.a.Component);a.default=k},225:function(e,a,t){"use strict";function n(e){if(Array.isArray(e)){for(var a=0,t=Array(e.length);a<e.length;a++)t[a]=e[a];return t}return Array.from(e)}function s(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function o(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function l(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}t.d(a,"a",function(){return i});var c=t(0),r=(t.n(c),function(){function e(e,a){var t=[],n=!0,s=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(t.push(l.value),!a||t.length!==a);n=!0);}catch(e){s=!0,o=e}finally{try{!n&&c.return&&c.return()}finally{if(s)throw o}}return t}return function(a,t){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return e(a,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),m=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),i=function(e){function a(e){s(this,a);var t=o(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.flatDocs=Object.values(e.docs).reduce(function(e,a){return e.concat(a)},[]),t}return l(a,e),m(a,[{key:"findDocDef",value:function(e){return this.flatDocs.find(function(a){return a.displayName===e})}},{key:"renderRaw",value:function(e){return e.split("\n").map(function(e,a){return c.createElement(c.Fragment,{key:a},0!==a&&c.createElement("br",null),e.split("  ").map(function(e,a){return c.createElement(c.Fragment,{key:a},0!==a&&c.createElement(c.Fragment,null,"\xa0\xa0"),e)}))})}},{key:"getComposedDefs",value:function(e){var a=this;return e.map(function(e){return a.findDocDef(e)}).filter(Boolean).reduce(function(e,a){return Object.assign({},a,e,{props:a.props||e.props?Object.assign({},a.props||{},e.props||{}):null})},{})}},{key:"render",value:function(){var e=this,a=this.props,t=a.displayName,s=a.composes,o=void 0===s?[]:s,l=this.getComposedDefs([t].concat(n(o)));return c.createElement("div",{className:"document-component"},c.createElement("h2",null,t),l&&!!l.description&&c.createElement("p",null,l.description),l&&l.props&&c.createElement("div",null,c.createElement("h3",null,"Props"),c.createElement("table",null,c.createElement("thead",null,c.createElement("tr",null,c.createElement("th",null,"Name"),c.createElement("th",null,"Type"),c.createElement("th",null,"Default"),c.createElement("th",null,"Description"))),c.createElement("tbody",null,Object.entries(l.props).map(function(a,t){var n=r(a,2),s=n[0],o=n[1];return c.createElement("tr",{key:t},c.createElement("td",{className:o.required?"required":""},c.createElement("code",null,s)),c.createElement("td",null,c.createElement("code",null,o.flowType&&e.renderRaw(o.flowType.raw||o.flowType.name||""))),c.createElement("td",null,o.defaultValue?c.createElement("code",null,o.defaultValue.value):c.createElement("code",null,"undefined")),c.createElement("td",null,o.description||""))})))))}}]),a}(c.Component)},227:function(e,a){e.exports=[{description:"An icon that goes inside of buttons. This is an instance of the Icon component.",displayName:"ButtonIcon",methods:[]},{description:"The Button component. Buttons also accepts all of the props from the Ripple component.",displayName:"Button",methods:[],props:{dense:{flowType:{name:"boolean"},required:!1,description:"Make the Button dense.",defaultValue:{value:"false",computed:!1}},raised:{flowType:{name:"boolean"},required:!1,description:"Make the Button raised.",defaultValue:{value:"false",computed:!1}},unelevated:{flowType:{name:"boolean"},required:!1,description:"Make the button unelevated.",defaultValue:{value:"false",computed:!1}},outlined:{flowType:{name:"boolean"},required:!1,description:"Make the button outlined.",defaultValue:{value:"false",computed:!1}},disabled:{flowType:{name:"boolean"},required:!1,description:"make the button disabled"},ripple:{flowType:{name:"boolean"},required:!1,description:"Enable / disable the ripple."}},context:{RMWCOptions:{type:{name:"object"},required:!1}}}]},235:function(e,a){e.exports=[{description:"The Dialog title.",displayName:"DialogTitle",methods:[]},{description:"The Dialog content.",displayName:"DialogContent",methods:[]},{description:"Actions container for the Dialog.",displayName:"DialogActions",methods:[]},{description:"Action buttons for the Dialog.",displayName:"DialogButton",methods:[],props:{action:{flowType:{name:"string"},required:!1,description:"An action returned in evt.detail.action to the onClose handler."},isDefaultAction:{flowType:{name:"boolean"},required:!1,description:"Indicates this is the default selected action when pressing enter"}}},{description:"A Dialog component.",displayName:"Dialog",methods:[{name:"open",docblock:null,modifiers:[],params:[],returns:null},{name:"close",docblock:null,modifiers:[],params:[],returns:null},{name:"sync",docblock:null,modifiers:[],params:[{name:"props",type:{name:"signature",type:"object",raw:"{\n  /** Whether or not the Dialog is showing. */\n  open: boolean,\n  /** Callback for when the Dialog opens. */\n  onOpen?: (evt: CustomEventT<void>) => mixed,\n  /** Callback for when the Dialog closes. */\n  onClose?: (evt: CustomEventT<void>) => mixed\n}",signature:{properties:[{key:"open",value:{name:"boolean",required:!0}},{key:"onOpen",value:{name:"signature",type:"function",raw:"(evt: CustomEventT<void>) => mixed",signature:{arguments:[{name:"evt",type:{name:"CustomEventT",elements:[{name:"void"}],raw:"CustomEventT<void>"}}],return:{name:"mixed"}},required:!1}},{key:"onClose",value:{name:"signature",type:"function",raw:"(evt: CustomEventT<void>) => mixed",signature:{arguments:[{name:"evt",type:{name:"CustomEventT",elements:[{name:"void"}],raw:"CustomEventT<void>"}}],return:{name:"mixed"}},required:!1}}]},alias:"DialogPropsT"}}],returns:null},{name:"getDefaultFoundation",docblock:null,modifiers:[],params:[],returns:null}],props:{open:{flowType:{name:"boolean"},required:!0,description:"Whether or not the Dialog is showing."},onOpen:{flowType:{name:"signature",type:"function",raw:"(evt: CustomEventT<void>) => mixed",signature:{arguments:[{name:"evt",type:{name:"CustomEventT",elements:[{name:"void"}],raw:"CustomEventT<void>"}}],return:{name:"mixed"}}},required:!1,description:"Callback for when the Dialog opens."},onClose:{flowType:{name:"signature",type:"function",raw:"(evt: CustomEventT<void>) => mixed",signature:{arguments:[{name:"evt",type:{name:"CustomEventT",elements:[{name:"void"}],raw:"CustomEventT<void>"}}],return:{name:"mixed"}}},required:!1,description:"Callback for when the Dialog closes."}}},{description:"A non-standard SimpleDialog component for ease of use.",displayName:"SimpleDialog",methods:[],props:{title:{flowType:{name:"ReactNode",raw:"React.Node"},required:!1,description:"A title for the default Dialog template.",defaultValue:{value:"undefined",computed:!0}},header:{flowType:{name:"ReactNode",raw:"React.Node"},required:!1,description:"Additional Dialog header content for the default Dialog template.",defaultValue:{value:"undefined",computed:!0}},body:{flowType:{name:"ReactNode",raw:"React.Node"},required:!1,description:"Body content for the default Dialog template, rendered before children.",defaultValue:{value:"undefined",computed:!0}},footer:{flowType:{name:"ReactNode",raw:"React.Node"},required:!1,description:"Additional footer content for the default Dialog template, rendered before any buttons.",defaultValue:{value:"undefined",computed:!0}},acceptLabel:{flowType:{name:"ReactNode",raw:"React.Node"},required:!1,description:"Creates an accept button for the default Dialog template with a given label. You can pass `null` to remove the button.",defaultValue:{value:"'Accept'",computed:!1}},cancelLabel:{flowType:{name:"ReactNode",raw:"React.Node"},required:!1,description:"Creates an cancel button for the default Dialog with a given label. You can pass `null` to remove the button.",defaultValue:{value:"'Cancel'",computed:!1}},children:{flowType:{name:"ReactNode",raw:"React.Node"},required:!1,description:"Any children will be rendered in the body of the default Dialog template.",defaultValue:{value:"undefined",computed:!0}},scrollable:{flowType:{name:"boolean"},required:!1,description:"Allow the body to be scrollable"},open:{flowType:{name:"boolean"},required:!1,description:"Whether or not the Dialog is showing.",defaultValue:{value:"false",computed:!1}},onOpen:{flowType:{name:"signature",type:"function",raw:"(evt: CustomEventT<void>) => mixed",signature:{arguments:[{name:"evt",type:{name:"CustomEventT",elements:[{name:"void"}],raw:"CustomEventT<void>"}}],return:{name:"mixed"}}},required:!1,description:"Callback for when the Dialog opens."},onClose:{flowType:{name:"signature",type:"function",raw:"(evt: CustomEventT<void>) => mixed",signature:{arguments:[{name:"evt",type:{name:"CustomEventT",elements:[{name:"void"}],raw:"CustomEventT<void>"}}],return:{name:"mixed"}}},required:!1,description:"Callback for when the Dialog closes.",defaultValue:{value:"noop",computed:!0}}}}]}});
//# sourceMappingURL=9.02b2e4c9.chunk.js.map