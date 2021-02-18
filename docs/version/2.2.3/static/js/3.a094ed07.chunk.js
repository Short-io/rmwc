webpackJsonp([3],{214:function(e,a,t){"use strict";function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function o(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function s(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0}),t.d(a,"attributes",function(){return i});var c=t(0),p=t.n(c),l=t(218),r=t(250),m=(t.n(r),function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}()),i={},u=function(e){function a(e){n(this,a);var t=o(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={},t}return s(a,e),m(a,[{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement("h1",null,"Top App Bar"),p.a.createElement("blockquote",null,p.a.createElement("p",null,"Top App Bar acts as a container for items such as application title, navigation icon, and action items.")),p.a.createElement("ul",null,p.a.createElement("li",null,"import from ",p.a.createElement("strong",null,"'@srmwc/top-app-bar'"),";"),p.a.createElement("li",null,"Import styles:",p.a.createElement("ul",null,p.a.createElement("li",null,"import ",p.a.createElement("strong",null,"'@material/top-app-bar/dist/mdc.top-app-bar.css'"),";"))),p.a.createElement("li",null,"MDC Docs: ",p.a.createElement("a",{href:"https://material.io/develop/web/components/top-app-bar/"},"https://material.io/develop/web/components/top-app-bar/"))),p.a.createElement("p",null,"The TopAppBar cannot be effectively demoed inline, but it is in use above in the RMWC docs. To view additional functionality, check out the ",p.a.createElement("a",{href:"https://material-components-web.appspot.com/top-app-bar.html"},"Material Components Top App Bar demo page"),"."),p.a.createElement("div",{className:"example code-only"},p.a.createElement("div",{className:"source"},p.a.createElement("pre",{className:"language-jsx"},p.a.createElement("code",{className:"language-jsx"},p.a.createElement("span",{className:"token keyword"},"import")," ",p.a.createElement("span",{className:"token punctuation"},"{"),"\n","  TopAppBar",p.a.createElement("span",{className:"token punctuation"},","),"\n","  TopAppBarRow",p.a.createElement("span",{className:"token punctuation"},","),"\n","  TopAppBarSection",p.a.createElement("span",{className:"token punctuation"},","),"\n","  TopAppBarNavigationIcon",p.a.createElement("span",{className:"token punctuation"},","),"\n","  TopAppBarActionItem",p.a.createElement("span",{className:"token punctuation"},","),"\n","  TopAppBarTitle","\n",p.a.createElement("span",{className:"token punctuation"},"}")," ",p.a.createElement("span",{className:"token keyword"},"from")," ",p.a.createElement("span",{className:"token string"},"'@srmwc/top-app-bar'"),p.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",p.a.createElement("span",{className:"token punctuation"},"{"),p.a.createElement("span",{className:"token comment"},"/* Minimum usage. material-components-web will throw an error if you do not include TopAppBarNavigationIcon. */"),p.a.createElement("span",{className:"token punctuation"},"}"),"\n",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"<"),"TopAppBar"),p.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"<"),"TopAppBarRow"),p.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"<"),"TopAppBarSection"),p.a.createElement("span",{className:"token punctuation"},">")),"\n","      ",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"<"),"TopAppBarNavigationIcon")," ",p.a.createElement("span",{className:"token attr-name"},"icon"),p.a.createElement("span",{className:"token attr-value"},p.a.createElement("span",{className:"token punctuation"},"="),p.a.createElement("span",{className:"token punctuation"},'"'),"menu",p.a.createElement("span",{className:"token punctuation"},'"'))," ",p.a.createElement("span",{className:"token punctuation"},"/>")),"\n","    ",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"</"),"TopAppBarSection"),p.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"</"),"TopAppBarRow"),p.a.createElement("span",{className:"token punctuation"},">")),"\n",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"</"),"TopAppBar"),p.a.createElement("span",{className:"token punctuation"},">")),"\n","\n",p.a.createElement("span",{className:"token punctuation"},"{"),p.a.createElement("span",{className:"token comment"},"/* Fully Featured Example */"),p.a.createElement("span",{className:"token punctuation"},"}"),"\n",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"<"),"TopAppBar"),p.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"<"),"TopAppBarRow"),p.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"<"),"TopAppBarSection")," ",p.a.createElement("span",{className:"token attr-name"},"alignStart"),p.a.createElement("span",{className:"token punctuation"},">")),"\n","      ",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"<"),"TopAppBarNavigationIcon")," ",p.a.createElement("span",{className:"token attr-name"},"icon"),p.a.createElement("span",{className:"token attr-value"},p.a.createElement("span",{className:"token punctuation"},"="),p.a.createElement("span",{className:"token punctuation"},'"'),"menu",p.a.createElement("span",{className:"token punctuation"},'"'))," ",p.a.createElement("span",{className:"token punctuation"},"/>")),"\n","      ",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"<"),"TopAppBarTitle"),p.a.createElement("span",{className:"token punctuation"},">")),"Title",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"</"),"TopAppBarTitle"),p.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"</"),"TopAppBarSection"),p.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"<"),"TopAppBarSection")," ",p.a.createElement("span",{className:"token attr-name"},"alignEnd"),p.a.createElement("span",{className:"token punctuation"},">")),"\n","      ",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"<"),"TopAppBarActionItem")," ",p.a.createElement("span",{className:"token attr-name"},"aria-label"),p.a.createElement("span",{className:"token attr-value"},p.a.createElement("span",{className:"token punctuation"},"="),p.a.createElement("span",{className:"token punctuation"},'"'),"Download",p.a.createElement("span",{className:"token punctuation"},'"'))," ",p.a.createElement("span",{className:"token attr-name"},"alt"),p.a.createElement("span",{className:"token attr-value"},p.a.createElement("span",{className:"token punctuation"},"="),p.a.createElement("span",{className:"token punctuation"},'"'),"Download",p.a.createElement("span",{className:"token punctuation"},'"')),p.a.createElement("span",{className:"token punctuation"},">")),"\n","        file_download","\n","      ",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"</"),"TopAppBarActionItem"),p.a.createElement("span",{className:"token punctuation"},">")),"\n","      ",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"<"),"TopAppBarActionItem"),"\n","        ",p.a.createElement("span",{className:"token attr-name"},"aria-label"),p.a.createElement("span",{className:"token attr-value"},p.a.createElement("span",{className:"token punctuation"},"="),p.a.createElement("span",{className:"token punctuation"},'"'),"Print")," ",p.a.createElement("span",{className:"token attr-name"},"this")," ",p.a.createElement("span",{className:"token attr-name"},'page"'),"\n","        ",p.a.createElement("span",{className:"token attr-name"},"alt"),p.a.createElement("span",{className:"token attr-value"},p.a.createElement("span",{className:"token punctuation"},"="),p.a.createElement("span",{className:"token punctuation"},'"'),"Print")," ",p.a.createElement("span",{className:"token attr-name"},"this")," ",p.a.createElement("span",{className:"token attr-name"},'page"'),"\n","      ",p.a.createElement("span",{className:"token punctuation"},">")),"\n","        print","\n","      ",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"</"),"TopAppBarActionItem"),p.a.createElement("span",{className:"token punctuation"},">")),"\n","      ",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"<"),"TopAppBarActionItem"),"\n","        ",p.a.createElement("span",{className:"token attr-name"},"aria-label"),p.a.createElement("span",{className:"token attr-value"},p.a.createElement("span",{className:"token punctuation"},"="),p.a.createElement("span",{className:"token punctuation"},'"'),"Bookmark")," ",p.a.createElement("span",{className:"token attr-name"},"this")," ",p.a.createElement("span",{className:"token attr-name"},'page"'),"\n","        ",p.a.createElement("span",{className:"token attr-name"},"alt"),p.a.createElement("span",{className:"token attr-value"},p.a.createElement("span",{className:"token punctuation"},"="),p.a.createElement("span",{className:"token punctuation"},'"'),"Bookmark")," ",p.a.createElement("span",{className:"token attr-name"},"this")," ",p.a.createElement("span",{className:"token attr-name"},'page"'),"\n","      ",p.a.createElement("span",{className:"token punctuation"},">")),"\n","        bookmark","\n","      ",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"</"),"TopAppBarActionItem"),p.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"</"),"TopAppBarSection"),p.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"</"),"TopAppBarRow"),p.a.createElement("span",{className:"token punctuation"},">")),"\n",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"</"),"TopAppBar"),p.a.createElement("span",{className:"token punctuation"},">")),"\n")))),p.a.createElement("h2",null,"Simplified Usage"),p.a.createElement("div",{className:"example code-only"},p.a.createElement("div",{className:"source"},p.a.createElement("pre",{className:"language-jsx"},p.a.createElement("code",{className:"language-jsx"},p.a.createElement("span",{className:"token keyword"},"import")," ",p.a.createElement("span",{className:"token punctuation"},"{")," SimpleTopAppBar ",p.a.createElement("span",{className:"token punctuation"},"}")," ",p.a.createElement("span",{className:"token keyword"},"from")," ",p.a.createElement("span",{className:"token string"},"'@srmwc/top-app-bar'"),p.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token tag"},p.a.createElement("span",{className:"token punctuation"},"<"),"SimpleTopAppBar"),"\n","  ",p.a.createElement("span",{className:"token attr-name"},"title"),p.a.createElement("span",{className:"token attr-value"},p.a.createElement("span",{className:"token punctuation"},"="),p.a.createElement("span",{className:"token punctuation"},'"'),"test",p.a.createElement("span",{className:"token punctuation"},'"')),"\n","  ",p.a.createElement("span",{className:"token attr-name"},"navigationIcon"),p.a.createElement("span",{className:"token script language-javascript"},p.a.createElement("span",{className:"token punctuation"},"="),p.a.createElement("span",{className:"token punctuation"},"{"),p.a.createElement("span",{className:"token punctuation"},"{")," onClick",p.a.createElement("span",{className:"token punctuation"},":")," ",p.a.createElement("span",{className:"token punctuation"},"("),p.a.createElement("span",{className:"token punctuation"},")")," ",p.a.createElement("span",{className:"token operator"},"="),p.a.createElement("span",{className:"token operator"},">")," console",p.a.createElement("span",{className:"token punctuation"},"."),p.a.createElement("span",{className:"token function"},"log"),p.a.createElement("span",{className:"token punctuation"},"("),p.a.createElement("span",{className:"token string"},"'Navigate'"),p.a.createElement("span",{className:"token punctuation"},")")," ",p.a.createElement("span",{className:"token punctuation"},"}"),p.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",p.a.createElement("span",{className:"token attr-name"},"actionItems"),p.a.createElement("span",{className:"token script language-javascript"},p.a.createElement("span",{className:"token punctuation"},"="),p.a.createElement("span",{className:"token punctuation"},"{"),p.a.createElement("span",{className:"token punctuation"},"["),"\n","    ",p.a.createElement("span",{className:"token punctuation"},"{")," onClick",p.a.createElement("span",{className:"token punctuation"},":")," ",p.a.createElement("span",{className:"token punctuation"},"("),p.a.createElement("span",{className:"token punctuation"},")")," ",p.a.createElement("span",{className:"token operator"},"="),p.a.createElement("span",{className:"token operator"},">")," console",p.a.createElement("span",{className:"token punctuation"},"."),p.a.createElement("span",{className:"token function"},"log"),p.a.createElement("span",{className:"token punctuation"},"("),p.a.createElement("span",{className:"token string"},"'Do Something'"),p.a.createElement("span",{className:"token punctuation"},")"),p.a.createElement("span",{className:"token punctuation"},",")," use",p.a.createElement("span",{className:"token punctuation"},":")," ",p.a.createElement("span",{className:"token string"},"'file_download'")," ",p.a.createElement("span",{className:"token punctuation"},"}"),p.a.createElement("span",{className:"token punctuation"},","),"\n","    ",p.a.createElement("span",{className:"token punctuation"},"{")," onClick",p.a.createElement("span",{className:"token punctuation"},":")," ",p.a.createElement("span",{className:"token punctuation"},"("),p.a.createElement("span",{className:"token punctuation"},")")," ",p.a.createElement("span",{className:"token operator"},"="),p.a.createElement("span",{className:"token operator"},">")," console",p.a.createElement("span",{className:"token punctuation"},"."),p.a.createElement("span",{className:"token function"},"log"),p.a.createElement("span",{className:"token punctuation"},"("),p.a.createElement("span",{className:"token string"},"'Do Something'"),p.a.createElement("span",{className:"token punctuation"},")"),p.a.createElement("span",{className:"token punctuation"},",")," use",p.a.createElement("span",{className:"token punctuation"},":")," ",p.a.createElement("span",{className:"token string"},"'print'")," ",p.a.createElement("span",{className:"token punctuation"},"}"),p.a.createElement("span",{className:"token punctuation"},","),"\n","    ",p.a.createElement("span",{className:"token punctuation"},"{")," onClick",p.a.createElement("span",{className:"token punctuation"},":")," ",p.a.createElement("span",{className:"token punctuation"},"("),p.a.createElement("span",{className:"token punctuation"},")")," ",p.a.createElement("span",{className:"token operator"},"="),p.a.createElement("span",{className:"token operator"},">")," console",p.a.createElement("span",{className:"token punctuation"},"."),p.a.createElement("span",{className:"token function"},"log"),p.a.createElement("span",{className:"token punctuation"},"("),p.a.createElement("span",{className:"token string"},"'Do Something'"),p.a.createElement("span",{className:"token punctuation"},")"),p.a.createElement("span",{className:"token punctuation"},",")," use",p.a.createElement("span",{className:"token punctuation"},":")," ",p.a.createElement("span",{className:"token string"},"'bookmark'")," ",p.a.createElement("span",{className:"token punctuation"},"}"),"\n","  ",p.a.createElement("span",{className:"token punctuation"},"]"),p.a.createElement("span",{className:"token punctuation"},"}")),"\n",p.a.createElement("span",{className:"token punctuation"},"/>")),"\n")))),p.a.createElement("div",{className:"example render-only"},p.a.createElement("div",{className:"run"},p.a.createElement(l.a,{docs:r,displayName:"TopAppBar"}),p.a.createElement(l.a,{docs:r,displayName:"TopAppBarRow"}),p.a.createElement(l.a,{docs:r,displayName:"TopAppBarSection"}),p.a.createElement(l.a,{docs:r,displayName:"TopAppBarTitle"}),p.a.createElement(l.a,{docs:r,displayName:"TopAppBarNavigationIcon",composes:["Icon"]}),p.a.createElement(l.a,{docs:r,displayName:"TopAppBarActionItem",composes:["Icon"]}),p.a.createElement(l.a,{docs:r,displayName:"TopAppBarFixedAdjust"}),p.a.createElement(l.a,{docs:r,displayName:"SimpleTopAppBar"}))))}}]),a}(p.a.Component);a.default=u},218:function(e,a,t){"use strict";function n(e){if(Array.isArray(e)){for(var a=0,t=Array(e.length);a<e.length;a++)t[a]=e[a];return t}return Array.from(e)}function o(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function s(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function c(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}t.d(a,"a",function(){return m});var p=t(0),l=(t.n(p),function(){function e(e,a){var t=[],n=!0,o=!1,s=void 0;try{for(var c,p=e[Symbol.iterator]();!(n=(c=p.next()).done)&&(t.push(c.value),!a||t.length!==a);n=!0);}catch(e){o=!0,s=e}finally{try{!n&&p.return&&p.return()}finally{if(o)throw s}}return t}return function(a,t){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return e(a,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),r=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),m=function(e){function a(e){o(this,a);var t=s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.flatDocs=Object.values(e.docs).reduce(function(e,a){return e.concat(a)},[]),t}return c(a,e),r(a,[{key:"findDocDef",value:function(e){return this.flatDocs.find(function(a){return a.displayName===e})}},{key:"renderRaw",value:function(e){return e.split("\n").map(function(e,a){return p.createElement(p.Fragment,{key:a},0!==a&&p.createElement("br",null),e.split("  ").map(function(e,a){return p.createElement(p.Fragment,{key:a},0!==a&&p.createElement(p.Fragment,null,"\xa0\xa0"),e)}))})}},{key:"getComposedDefs",value:function(e){var a=this;return e.map(function(e){return a.findDocDef(e)}).filter(Boolean).reduce(function(e,a){return Object.assign({},a,e,{props:a.props||e.props?Object.assign({},a.props||{},e.props||{}):null})},{})}},{key:"render",value:function(){var e=this,a=this.props,t=a.displayName,o=a.composes,s=void 0===o?[]:o,c=this.getComposedDefs([t].concat(n(s)));return p.createElement("div",{className:"document-component"},p.createElement("h2",null,t),c&&!!c.description&&p.createElement("p",null,c.description),c&&c.props&&p.createElement("div",null,p.createElement("h3",null,"Props"),p.createElement("table",null,p.createElement("thead",null,p.createElement("tr",null,p.createElement("th",null,"Name"),p.createElement("th",null,"Type"),p.createElement("th",null,"Default"),p.createElement("th",null,"Description"))),p.createElement("tbody",null,Object.entries(c.props).map(function(a,t){var n=l(a,2),o=n[0],s=n[1];return p.createElement("tr",{key:t},p.createElement("td",{className:s.required?"required":""},p.createElement("code",null,o)),p.createElement("td",null,p.createElement("code",null,s.flowType&&e.renderRaw(s.flowType.raw||s.flowType.name||""))),p.createElement("td",null,s.defaultValue?p.createElement("code",null,s.defaultValue.value):p.createElement("code",null,"undefined")),p.createElement("td",null,s.description||""))})))))}}]),a}(p.Component)},250:function(e,a){e.exports=[{description:"",displayName:"TopAppBarRoot",methods:[{name:"classNames",docblock:null,modifiers:[],params:[{name:"props",type:{name:"intersection",raw:"{\n  /** Emits when the navigation icon is clicked. */\n  onNav?: (evt: CustomEventT<void>) => mixed,\n  /** Styles the top app bar as a fixed top app bar. */\n  fixed?: boolean,\n  /** Styles the top app bar as a prominent top app bar. */\n  prominent?: boolean,\n  /** Styles the top app bar as a short top app bar. */\n  short?: boolean,\n  /** Styles the top app bar to always be collapsed. */\n  shortCollapsed?: boolean,\n  /** Styles the top app bar to be dense. */\n  dense?: boolean\n} & SimpleTagPropsT",elements:[{name:"signature",type:"object",raw:"{\n  /** Emits when the navigation icon is clicked. */\n  onNav?: (evt: CustomEventT<void>) => mixed,\n  /** Styles the top app bar as a fixed top app bar. */\n  fixed?: boolean,\n  /** Styles the top app bar as a prominent top app bar. */\n  prominent?: boolean,\n  /** Styles the top app bar as a short top app bar. */\n  short?: boolean,\n  /** Styles the top app bar to always be collapsed. */\n  shortCollapsed?: boolean,\n  /** Styles the top app bar to be dense. */\n  dense?: boolean\n}",signature:{properties:[{key:"onNav",value:{name:"signature",type:"function",raw:"(evt: CustomEventT<void>) => mixed",signature:{arguments:[{name:"evt",type:{name:"CustomEventT",elements:[{name:"void"}],raw:"CustomEventT<void>"}}],return:{name:"mixed"}},required:!1}},{key:"fixed",value:{name:"boolean",required:!1}},{key:"prominent",value:{name:"boolean",required:!1}},{key:"short",value:{name:"boolean",required:!1}},{key:"shortCollapsed",value:{name:"boolean",required:!1}},{key:"dense",value:{name:"boolean",required:!1}}]}},{name:"SimpleTagPropsT"}],alias:"TopAppAppBarPropsT"}}],returns:null}]},{description:"A row for the app bar.",displayName:"TopAppBarRow",methods:[]},{description:"A section for the app bar.",displayName:"TopAppBarSection",methods:[],props:{alignStart:{flowType:{name:"boolean"},required:!1,description:"Aligns the section to the start."},alignEnd:{flowType:{name:"boolean"},required:!1,description:"Aligns the section to the end."}}},{description:"A navigation icon for the top app bar. This is an instance of the Icon component.",displayName:"TopAppBarNavigationIcon",methods:[]},{description:"Action items for the top app bar. This is an instance of the Icon component.",displayName:"TopAppBarActionItem",methods:[]},{description:"A title for the top app bar.",displayName:"TopAppBarTitle",methods:[]},{description:"An optional component to fill the space when the TopAppBar is fixed. Place it directly after the TopAppBar.",displayName:"TopAppBarFixedAdjust",methods:[],props:{dense:{flowType:{name:"boolean"},required:!1,description:"Class used to style the content below the dense top app bar to prevent the top app bar from covering it."},prominent:{flowType:{name:"boolean"},required:!1,description:"Class used to style the content below the prominent top app bar to prevent the top app bar from covering it."},denseProminent:{flowType:{name:"boolean"},required:!1,description:"Class used to style the content below the top app bar when styled as both prominent and dense, to prevent the top app bar from covering it."},short:{flowType:{name:"boolean"},required:!1,description:"Class used to style the content below the short top app bar to prevent the top app bar from covering it."}}},{description:"A TopAppBar component",displayName:"TopAppBar",methods:[],props:{onNav:{flowType:{name:"signature",type:"function",raw:"(evt: CustomEventT<void>) => mixed",signature:{arguments:[{name:"evt",type:{name:"CustomEventT",elements:[{name:"void"}],raw:"CustomEventT<void>"}}],return:{name:"mixed"}}},required:!1,description:"Emits when the navigation icon is clicked."},fixed:{flowType:{name:"boolean"},required:!1,description:"Styles the top app bar as a fixed top app bar."},prominent:{flowType:{name:"boolean"},required:!1,description:"Styles the top app bar as a prominent top app bar."},short:{flowType:{name:"boolean"},required:!1,description:"Styles the top app bar as a short top app bar."},shortCollapsed:{flowType:{name:"boolean"},required:!1,description:"Styles the top app bar to always be collapsed."},dense:{flowType:{name:"boolean"},required:!1,description:"Styles the top app bar to be dense."}}},{description:"A simplified syntax for creating an AppBar.",displayName:"SimpleTopAppBar",methods:[],props:{title:{flowType:{name:"ReactNode",raw:"React.Node"},required:!1,description:"The title for the App Bar."},actionItems:{flowType:{name:"Array",elements:[{name:"Object"}],raw:"Object[]"},required:!1,description:"An array of props that will be used to create TopAppBarActionItems."},navigationIcon:{flowType:{name:"union",raw:"Object | boolean",elements:[{name:"Object"},{name:"boolean"}]},required:!1,description:"Props for the NavigationIcon, which is an instance of the Icon component. You can also set this to `true` and use the `onNav` prop to handle interactions."},startContent:{flowType:{name:"ReactNode",raw:"React.Node"},required:!1,description:"Additional content to place in the start section."},endContent:{flowType:{name:"ReactNode",raw:"React.Node"},required:!1,description:"Additional content to place in the end section."},onNav:{flowType:{name:"signature",type:"function",raw:"(evt: CustomEventT<void>) => mixed",signature:{arguments:[{name:"evt",type:{name:"CustomEventT",elements:[{name:"void"}],raw:"CustomEventT<void>"}}],return:{name:"mixed"}}},required:!1,description:"Emits when the navigation icon is clicked."},fixed:{flowType:{name:"boolean"},required:!1,description:"Styles the top app bar as a fixed top app bar."},prominent:{flowType:{name:"boolean"},required:!1,description:"Styles the top app bar as a prominent top app bar."},short:{flowType:{name:"boolean"},required:!1,description:"Styles the top app bar as a short top app bar."},shortCollapsed:{flowType:{name:"boolean"},required:!1,description:"Styles the top app bar to always be collapsed."},dense:{flowType:{name:"boolean"},required:!1,description:"Styles the top app bar to be dense."}}}]}});
//# sourceMappingURL=3.a094ed07.chunk.js.map