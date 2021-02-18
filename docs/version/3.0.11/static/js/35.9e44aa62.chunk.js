webpackJsonp([35],{192:function(e,a,t){"use strict";function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function s(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function c(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0}),t.d(a,"attributes",function(){return r});var o=t(0),l=t.n(o),m=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),r={},p=function(e){function a(e){n(this,a);var t=s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={},t}return c(a,e),m(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Library Integrations"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"Some interesting ways you can use external libraries with RMWC.")),l.a.createElement("h2",null,"React Router"),l.a.createElement("p",null,"If you're using React Router, you're probably used to using the ",l.a.createElement("code",null,"Link")," component to navigate around. You may have also experienced problems at some point where you're adding an anchor tag around an element that breaks layout."),l.a.createElement("p",null,'RMWC mitigates this issue by allowing you to "extend" other components. This works because most of the underlying compontents in RMWC are just HTML elements like div, span, etc that you can override using the ',l.a.createElement("code",null,"tag")," prop. You can specify your own tag which can also be another React component."),l.a.createElement("p",null,"A note on using TypeScript and Flow Typed with this strategy. Flow tends to be extremely forgiving and not give you any issues with this approach. Typescript will complain that there are no props of type ",l.a.createElement("code",null,"x")," on this component. Work is being done to mitigate these issues, but see the workaround below."),l.a.createElement("div",{className:"example code-only"},l.a.createElement("div",{className:"source"},l.a.createElement("pre",{className:"language-jsx"},l.a.createElement("code",{className:"language-jsx"},l.a.createElement("span",{className:"token keyword"},"import")," ",l.a.createElement("span",{className:"token punctuation"},"{")," Link ",l.a.createElement("span",{className:"token punctuation"},"}")," ",l.a.createElement("span",{className:"token keyword"},"from")," ",l.a.createElement("span",{className:"token string"},"'react-router-dom'"),l.a.createElement("span",{className:"token punctuation"},";"),"\n",l.a.createElement("span",{className:"token keyword"},"import")," ",l.a.createElement("span",{className:"token punctuation"},"{")," Button ",l.a.createElement("span",{className:"token punctuation"},"}")," ",l.a.createElement("span",{className:"token keyword"},"from")," ",l.a.createElement("span",{className:"token string"},"'@srmwc/button'"),l.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",l.a.createElement("span",{className:"token punctuation"},"{"),l.a.createElement("span",{className:"token comment"},"/* Not what you wanted, you expected the Button to be the anchor. */"),l.a.createElement("span",{className:"token punctuation"},"}"),"\n",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"Link")," ",l.a.createElement("span",{className:"token attr-name"},"to"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"/",l.a.createElement("span",{className:"token punctuation"},'"')),l.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"Button"),l.a.createElement("span",{className:"token punctuation"},">")),"Go Home",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"</"),"Button"),l.a.createElement("span",{className:"token punctuation"},">")),"\n",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"</"),"Link"),l.a.createElement("span",{className:"token punctuation"},">")),"\n","\n",l.a.createElement("span",{className:"token punctuation"},"{"),l.a.createElement("span",{className:"token comment"},"/* Also valid, but would require some custom CSS to layout properly */"),l.a.createElement("span",{className:"token punctuation"},"}"),"\n",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"Button"),l.a.createElement("span",{className:"token punctuation"},">")),l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"Link")," ",l.a.createElement("span",{className:"token attr-name"},"to"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"/",l.a.createElement("span",{className:"token punctuation"},'"')),l.a.createElement("span",{className:"token punctuation"},">")),"Go Home",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"</"),"Link"),l.a.createElement("span",{className:"token punctuation"},">")),l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"</"),"Button"),l.a.createElement("span",{className:"token punctuation"},">")),"\n","\n",l.a.createElement("span",{className:"token punctuation"},"{"),l.a.createElement("span",{className:"token comment"},"/* This would make the button an anchor link, but not use React Routers history.pushState */"),l.a.createElement("span",{className:"token punctuation"},"}"),"\n",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"Button")," ",l.a.createElement("span",{className:"token attr-name"},"tag"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"a",l.a.createElement("span",{className:"token punctuation"},'"'))," ",l.a.createElement("span",{className:"token attr-name"},"href"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"/",l.a.createElement("span",{className:"token punctuation"},'"')),l.a.createElement("span",{className:"token punctuation"},">")),"Go Home",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"</"),"Button"),l.a.createElement("span",{className:"token punctuation"},">")),"\n","\n",l.a.createElement("span",{className:"token punctuation"},"{"),l.a.createElement("span",{className:"token comment"},"/* Make it all work together! RMWC lets you make the button the link */"),l.a.createElement("span",{className:"token punctuation"},"}"),"\n",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"Button")," ",l.a.createElement("span",{className:"token attr-name"},"tag"),l.a.createElement("span",{className:"token script language-javascript"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},"{"),"Link",l.a.createElement("span",{className:"token punctuation"},"}"))," ",l.a.createElement("span",{className:"token attr-name"},"to"),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},"="),l.a.createElement("span",{className:"token punctuation"},'"'),"/",l.a.createElement("span",{className:"token punctuation"},'"')),l.a.createElement("span",{className:"token punctuation"},">")),"Go Home",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"</"),"Button"),l.a.createElement("span",{className:"token punctuation"},">")),"\n","\n",l.a.createElement("span",{className:"token punctuation"},"{"),l.a.createElement("span",{className:"token comment"},"/* Typescript workaround for when the compiler is complaining... */"),l.a.createElement("span",{className:"token punctuation"},"}"),"\n",l.a.createElement("span",{className:"token operator"},"<"),"Button ",l.a.createElement("span",{className:"token punctuation"},"{"),l.a.createElement("span",{className:"token operator"},"..."),l.a.createElement("span",{className:"token punctuation"},"{"),"tag",l.a.createElement("span",{className:"token punctuation"},":")," Link to",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'/'"),l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token operator"},">"),"Go Home",l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"</"),"Button"),l.a.createElement("span",{className:"token punctuation"},">")),"\n")))))}}]),a}(l.a.Component);a.default=p}});
//# sourceMappingURL=35.9e44aa62.chunk.js.map