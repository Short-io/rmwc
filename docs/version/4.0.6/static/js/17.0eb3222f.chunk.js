webpackJsonp([17],{208:function(e,a,n){"use strict";function t(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function s(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function l(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0}),n.d(a,"attributes",function(){return p});var r=n(0),o=n.n(r),c=n(66),m=n(225),u=n(244),i=(n.n(u),function(){function e(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,n,t){return n&&e(a.prototype,n),t&&e(a,t),a}}()),p={},d=function(e){function a(e){t(this,a);var n=s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return n.state={},n}return l(a,e),i(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h1",null,"Sliders"),o.a.createElement("blockquote",null,o.a.createElement("p",null,"Sliders let users select from a range of values by moving the slider thumb.")),o.a.createElement("ul",null,o.a.createElement("li",null,"Module ",o.a.createElement("strong",null,"@srmwc/slider")),o.a.createElement("li",null,"Import styles:",o.a.createElement("ul",null,o.a.createElement("li",null,"import ",o.a.createElement("strong",null,"'@material/slider/dist/mdc.slider.css'"),";"))),o.a.createElement("li",null,"MDC Docs: ",o.a.createElement("a",{href:"https://material.io/develop/web/components/input-controls/sliders/"},"https://material.io/develop/web/components/input-controls/sliders/"))),o.a.createElement("p",null,"Sliders can be both uncontrolled and controlled. When creating a controlled ",o.a.createElement("code",null,"Slider"),", you should be listening to the ",o.a.createElement("code",null,"onInput")," event and use ",o.a.createElement("code",null,"evt.detail.value")," to set your new value."),o.a.createElement("p",null,"Sliders will automatically layout themselves on window resize. If you need to manually trigger a layout because the sliders container size changed, the simplest way is to trigger a resize event ",o.a.createElement("code",null,"window.dispatchEvent(new Event('resize'));"),"."),o.a.createElement("p",null,o.a.createElement("strong",null,"Known Issue"),o.a.createElement("code",null,"material-components-web")," uses pointer events internally. If you are using something below React 16.4, you will see unknown attribute errors, however the slider should still work."),o.a.createElement("div",{className:"example render-with-code"},o.a.createElement("div",{className:"run"},o.a.createElement(c.a,{onInput:function(e){return console.log(e)},onChange:function(e){return console.log(e)}}),o.a.createElement(c.a,{value:void 0===this.state.sliderValue?50:this.state.sliderValue,onChange:function(a){return e.setState({sliderValue:a.detail.value})},onInput:function(a){return e.setState({sliderValue:a.detail.value})},discrete:!0,step:1}),o.a.createElement(c.a,{value:void 0===this.state.sliderValue2?150:this.state.sliderValue2,onChange:function(a){return e.setState({sliderValue2:a.detail.value})},onInput:function(a){return e.setState({sliderValue2:a.detail.value})},discrete:!0,displayMarkers:!0,min:100,max:200,step:5})),o.a.createElement("div",{className:"source"},o.a.createElement("pre",{className:"language-jsx"},o.a.createElement("code",{className:"language-jsx"},o.a.createElement("span",{className:"token keyword"},"import")," ",o.a.createElement("span",{className:"token punctuation"},"{")," Slider ",o.a.createElement("span",{className:"token punctuation"},"}")," ",o.a.createElement("span",{className:"token keyword"},"from")," ",o.a.createElement("span",{className:"token string"},"'@srmwc/slider'"),o.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",o.a.createElement("span",{className:"token punctuation"},"{"),o.a.createElement("span",{className:"token comment"},"/* Uncontrolled Slider */"),o.a.createElement("span",{className:"token punctuation"},"}"),"\n",o.a.createElement("span",{className:"token tag"},o.a.createElement("span",{className:"token tag"},o.a.createElement("span",{className:"token punctuation"},"<"),"Slider"),"\n","  ",o.a.createElement("span",{className:"token attr-name"},"onInput"),o.a.createElement("span",{className:"token script language-javascript"},o.a.createElement("span",{className:"token punctuation"},"="),o.a.createElement("span",{className:"token punctuation"},"{"),"evt ",o.a.createElement("span",{className:"token operator"},"="),o.a.createElement("span",{className:"token operator"},">")," console",o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"log"),o.a.createElement("span",{className:"token punctuation"},"("),"evt",o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",o.a.createElement("span",{className:"token attr-name"},"onChange"),o.a.createElement("span",{className:"token script language-javascript"},o.a.createElement("span",{className:"token punctuation"},"="),o.a.createElement("span",{className:"token punctuation"},"{"),"evt ",o.a.createElement("span",{className:"token operator"},"="),o.a.createElement("span",{className:"token operator"},">")," console",o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"log"),o.a.createElement("span",{className:"token punctuation"},"("),"evt",o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},"}")),"\n",o.a.createElement("span",{className:"token punctuation"},"/>")),"\n","\n",o.a.createElement("span",{className:"token punctuation"},"{"),o.a.createElement("span",{className:"token comment"},"/* Controlled Slider */"),o.a.createElement("span",{className:"token punctuation"},"}"),"\n",o.a.createElement("span",{className:"token punctuation"},"{"),o.a.createElement("span",{className:"token comment"},"/* onInput is required and will fire continuously. onChange is optional. */"),o.a.createElement("span",{className:"token punctuation"},"}"),"\n",o.a.createElement("span",{className:"token tag"},o.a.createElement("span",{className:"token tag"},o.a.createElement("span",{className:"token punctuation"},"<"),"Slider"),"\n","  ",o.a.createElement("span",{className:"token attr-name"},"value"),o.a.createElement("span",{className:"token script language-javascript"},o.a.createElement("span",{className:"token punctuation"},"="),o.a.createElement("span",{className:"token punctuation"},"{"),o.a.createElement("span",{className:"token keyword"},"this"),o.a.createElement("span",{className:"token punctuation"},"."),"state",o.a.createElement("span",{className:"token punctuation"},"."),"sliderValue ",o.a.createElement("span",{className:"token operator"},"===")," undefined ",o.a.createElement("span",{className:"token operator"},"?")," ",o.a.createElement("span",{className:"token number"},"50")," ",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token keyword"},"this"),o.a.createElement("span",{className:"token punctuation"},"."),"state",o.a.createElement("span",{className:"token punctuation"},"."),"sliderValue",o.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",o.a.createElement("span",{className:"token attr-name"},"onChange"),o.a.createElement("span",{className:"token script language-javascript"},o.a.createElement("span",{className:"token punctuation"},"="),o.a.createElement("span",{className:"token punctuation"},"{"),"evt ",o.a.createElement("span",{className:"token operator"},"="),o.a.createElement("span",{className:"token operator"},">")," ",o.a.createElement("span",{className:"token keyword"},"this"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"setState"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token punctuation"},"{"),"sliderValue",o.a.createElement("span",{className:"token punctuation"},":")," evt",o.a.createElement("span",{className:"token punctuation"},"."),"detail",o.a.createElement("span",{className:"token punctuation"},"."),"value",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",o.a.createElement("span",{className:"token attr-name"},"onInput"),o.a.createElement("span",{className:"token script language-javascript"},o.a.createElement("span",{className:"token punctuation"},"="),o.a.createElement("span",{className:"token punctuation"},"{"),"evt ",o.a.createElement("span",{className:"token operator"},"="),o.a.createElement("span",{className:"token operator"},">")," ",o.a.createElement("span",{className:"token keyword"},"this"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"setState"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token punctuation"},"{"),"sliderValue",o.a.createElement("span",{className:"token punctuation"},":")," evt",o.a.createElement("span",{className:"token punctuation"},"."),"detail",o.a.createElement("span",{className:"token punctuation"},"."),"value",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",o.a.createElement("span",{className:"token attr-name"},"discrete"),"\n","  ",o.a.createElement("span",{className:"token attr-name"},"step"),o.a.createElement("span",{className:"token script language-javascript"},o.a.createElement("span",{className:"token punctuation"},"="),o.a.createElement("span",{className:"token punctuation"},"{"),o.a.createElement("span",{className:"token number"},"1"),o.a.createElement("span",{className:"token punctuation"},"}")),"\n",o.a.createElement("span",{className:"token punctuation"},"/>")),"\n","\n",o.a.createElement("span",{className:"token punctuation"},"{"),o.a.createElement("span",{className:"token comment"},"/* Controlled Slider with Markers */"),o.a.createElement("span",{className:"token punctuation"},"}"),"\n",o.a.createElement("span",{className:"token tag"},o.a.createElement("span",{className:"token tag"},o.a.createElement("span",{className:"token punctuation"},"<"),"Slider"),"\n","  ",o.a.createElement("span",{className:"token attr-name"},"value"),o.a.createElement("span",{className:"token script language-javascript"},o.a.createElement("span",{className:"token punctuation"},"="),o.a.createElement("span",{className:"token punctuation"},"{"),o.a.createElement("span",{className:"token keyword"},"this"),o.a.createElement("span",{className:"token punctuation"},"."),"state",o.a.createElement("span",{className:"token punctuation"},"."),"sliderValue2 ",o.a.createElement("span",{className:"token operator"},"===")," undefined ",o.a.createElement("span",{className:"token operator"},"?")," ",o.a.createElement("span",{className:"token number"},"150")," ",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token keyword"},"this"),o.a.createElement("span",{className:"token punctuation"},"."),"state",o.a.createElement("span",{className:"token punctuation"},"."),"sliderValue2",o.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",o.a.createElement("span",{className:"token attr-name"},"onChange"),o.a.createElement("span",{className:"token script language-javascript"},o.a.createElement("span",{className:"token punctuation"},"="),o.a.createElement("span",{className:"token punctuation"},"{"),"evt ",o.a.createElement("span",{className:"token operator"},"="),o.a.createElement("span",{className:"token operator"},">")," ",o.a.createElement("span",{className:"token keyword"},"this"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"setState"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token punctuation"},"{"),"sliderValue2",o.a.createElement("span",{className:"token punctuation"},":")," evt",o.a.createElement("span",{className:"token punctuation"},"."),"detail",o.a.createElement("span",{className:"token punctuation"},"."),"value",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",o.a.createElement("span",{className:"token attr-name"},"onInput"),o.a.createElement("span",{className:"token script language-javascript"},o.a.createElement("span",{className:"token punctuation"},"="),o.a.createElement("span",{className:"token punctuation"},"{"),"evt ",o.a.createElement("span",{className:"token operator"},"="),o.a.createElement("span",{className:"token operator"},">")," ",o.a.createElement("span",{className:"token keyword"},"this"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"setState"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token punctuation"},"{"),"sliderValue2",o.a.createElement("span",{className:"token punctuation"},":")," evt",o.a.createElement("span",{className:"token punctuation"},"."),"detail",o.a.createElement("span",{className:"token punctuation"},"."),"value",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",o.a.createElement("span",{className:"token attr-name"},"discrete"),"\n","  ",o.a.createElement("span",{className:"token attr-name"},"displayMarkers"),"\n","  ",o.a.createElement("span",{className:"token attr-name"},"min"),o.a.createElement("span",{className:"token script language-javascript"},o.a.createElement("span",{className:"token punctuation"},"="),o.a.createElement("span",{className:"token punctuation"},"{"),o.a.createElement("span",{className:"token number"},"100"),o.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",o.a.createElement("span",{className:"token attr-name"},"max"),o.a.createElement("span",{className:"token script language-javascript"},o.a.createElement("span",{className:"token punctuation"},"="),o.a.createElement("span",{className:"token punctuation"},"{"),o.a.createElement("span",{className:"token number"},"200"),o.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",o.a.createElement("span",{className:"token attr-name"},"step"),o.a.createElement("span",{className:"token script language-javascript"},o.a.createElement("span",{className:"token punctuation"},"="),o.a.createElement("span",{className:"token punctuation"},"{"),o.a.createElement("span",{className:"token number"},"5"),o.a.createElement("span",{className:"token punctuation"},"}")),"\n",o.a.createElement("span",{className:"token punctuation"},"/>")),"\n")))),o.a.createElement("div",{className:"example render-only"},o.a.createElement("div",{className:"run"},o.a.createElement(m.a,{docs:u,displayName:"Slider"}))))}}]),a}(o.a.Component);a.default=d},225:function(e,a,n){"use strict";function t(e){if(Array.isArray(e)){for(var a=0,n=Array(e.length);a<e.length;a++)n[a]=e[a];return n}return Array.from(e)}function s(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function l(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function r(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}n.d(a,"a",function(){return u});var o=n(0),c=(n.n(o),function(){function e(e,a){var n=[],t=!0,s=!1,l=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done)&&(n.push(r.value),!a||n.length!==a);t=!0);}catch(e){s=!0,l=e}finally{try{!t&&o.return&&o.return()}finally{if(s)throw l}}return n}return function(a,n){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return e(a,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),m=function(){function e(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,n,t){return n&&e(a.prototype,n),t&&e(a,t),a}}(),u=function(e){function a(e){s(this,a);var n=l(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return n.flatDocs=Object.values(e.docs).reduce(function(e,a){return e.concat(a)},[]),n}return r(a,e),m(a,[{key:"findDocDef",value:function(e){return this.flatDocs.find(function(a){return a.displayName===e})}},{key:"renderRaw",value:function(e){return e.split("\n").map(function(e,a){return o.createElement(o.Fragment,{key:a},0!==a&&o.createElement("br",null),e.split("  ").map(function(e,a){return o.createElement(o.Fragment,{key:a},0!==a&&o.createElement(o.Fragment,null,"\xa0\xa0"),e)}))})}},{key:"getComposedDefs",value:function(e){var a=this;return e.map(function(e){return a.findDocDef(e)}).filter(Boolean).reduce(function(e,a){return Object.assign({},a,e,{props:a.props||e.props?Object.assign({},a.props||{},e.props||{}):null})},{})}},{key:"render",value:function(){var e=this,a=this.props,n=a.displayName,s=a.composes,l=void 0===s?[]:s,r=this.getComposedDefs([n].concat(t(l)));return o.createElement("div",{className:"document-component"},o.createElement("h2",null,n),r&&!!r.description&&o.createElement("p",null,r.description),r&&r.props&&o.createElement("div",null,o.createElement("h3",null,"Props"),o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Name"),o.createElement("th",null,"Type"),o.createElement("th",null,"Default"),o.createElement("th",null,"Description"))),o.createElement("tbody",null,Object.entries(r.props).map(function(a,n){var t=c(a,2),s=t[0],l=t[1];return o.createElement("tr",{key:n},o.createElement("td",{className:l.required?"required":""},o.createElement("code",null,s)),o.createElement("td",null,o.createElement("code",null,l.flowType&&e.renderRaw(l.flowType.raw||l.flowType.name||""))),o.createElement("td",null,l.defaultValue?o.createElement("code",null,l.defaultValue.value):o.createElement("code",null,"undefined")),o.createElement("td",null,l.description||""))})))))}}]),a}(o.Component)},244:function(e,a){e.exports=[{description:"",displayName:"Slider",methods:[{name:"value",docblock:"@return {number}",modifiers:[],params:[],returns:{description:null,type:{name:"number"}},description:null},{name:"value",docblock:"@param {number} value",modifiers:[],params:[{name:"value",description:null,type:{name:"number"}}],returns:null,description:null},{name:"min",docblock:"@return {number}",modifiers:[],params:[],returns:{description:null,type:{name:"number"}},description:null},{name:"min",docblock:"@param {number} min",modifiers:[],params:[{name:"min",description:null,type:{name:"number"}}],returns:null,description:null},{name:"max",docblock:"@return {number}",modifiers:[],params:[],returns:{description:null,type:{name:"number"}},description:null},{name:"max",docblock:"@param {number} max",modifiers:[],params:[{name:"max",description:null,type:{name:"number"}}],returns:null,description:null},{name:"step",docblock:"@return {number}",modifiers:[],params:[],returns:{description:null,type:{name:"number"}},description:null},{name:"step",docblock:"@param {number} step",modifiers:[],params:[{name:"step",description:null,type:{name:"number"}}],returns:null,description:null},{name:"disabled",docblock:"@return {boolean}",modifiers:[],params:[],returns:{description:null,type:{name:"boolean"}},description:null},{name:"disabled",docblock:"@param {boolean} disabled",modifiers:[],params:[{name:"disabled",description:null,type:{name:"boolean"}}],returns:null,description:null},{name:"discrete",docblock:null,modifiers:[],params:[],returns:{type:{name:"boolean"}}},{name:"discrete",docblock:null,modifiers:[],params:[{name:"isDiscrete",type:{name:"boolean"}}],returns:null},{name:"displayMarkers",docblock:null,modifiers:[],params:[],returns:{type:{name:"boolean"}}},{name:"displayMarkers",docblock:null,modifiers:[],params:[{name:"isDisplayMarkers",type:{name:"boolean"}}],returns:null},{name:"layout",docblock:null,modifiers:[],params:[],returns:null},{name:"sync",docblock:null,modifiers:[],params:[{name:"nextProps",type:{name:"intersection",raw:"{\n  /** A callback that fires when the Slider stops sliding which takes an event with event.detail.value set to the Slider's value. */\n  onChange?: (\n    evt: CustomEventT<{\n      value: number\n    }>\n  ) => mixed,\n  /** A callback that fires continuously while the Slider is sliding that takes an event with event.detail.value set to the Slider's value. */\n  onInput?: (\n    evt: CustomEventT<{\n      value: number\n    }>\n  ) => mixed,\n  /** The value of the Slider. */\n  value?: number | string,\n  /** The minimum value of the Slider. */\n  min?: number | string,\n  /** The maximum value of the Slider. */\n  max?: number | string,\n  /** A step to quantize values by. */\n  step?: number | string,\n  /** Displays the exact value of the Slider on the knob. */\n  discrete?: boolean,\n  /** Displays the individual step markers on the Slider track. */\n  displayMarkers?: boolean,\n  /** Disables the control. */\n  disabled?: boolean\n} & SimpleTagPropsT",elements:[{name:"signature",type:"object",raw:"{\n  /** A callback that fires when the Slider stops sliding which takes an event with event.detail.value set to the Slider's value. */\n  onChange?: (\n    evt: CustomEventT<{\n      value: number\n    }>\n  ) => mixed,\n  /** A callback that fires continuously while the Slider is sliding that takes an event with event.detail.value set to the Slider's value. */\n  onInput?: (\n    evt: CustomEventT<{\n      value: number\n    }>\n  ) => mixed,\n  /** The value of the Slider. */\n  value?: number | string,\n  /** The minimum value of the Slider. */\n  min?: number | string,\n  /** The maximum value of the Slider. */\n  max?: number | string,\n  /** A step to quantize values by. */\n  step?: number | string,\n  /** Displays the exact value of the Slider on the knob. */\n  discrete?: boolean,\n  /** Displays the individual step markers on the Slider track. */\n  displayMarkers?: boolean,\n  /** Disables the control. */\n  disabled?: boolean\n}",signature:{properties:[{key:"onChange",value:{name:"signature",type:"function",raw:"(\n  evt: CustomEventT<{\n    value: number\n  }>\n) => mixed",signature:{arguments:[{name:"evt",type:{name:"CustomEventT",elements:[{name:"signature",type:"object",raw:"{\n  value: number\n}",signature:{properties:[{key:"value",value:{name:"number",required:!0}}]}}],raw:"CustomEventT<{\n  value: number\n}>"}}],return:{name:"mixed"}},required:!1}},{key:"onInput",value:{name:"signature",type:"function",raw:"(\n  evt: CustomEventT<{\n    value: number\n  }>\n) => mixed",signature:{arguments:[{name:"evt",type:{name:"CustomEventT",elements:[{name:"signature",type:"object",raw:"{\n  value: number\n}",signature:{properties:[{key:"value",value:{name:"number",required:!0}}]}}],raw:"CustomEventT<{\n  value: number\n}>"}}],return:{name:"mixed"}},required:!1}},{key:"value",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"min",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"max",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"step",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"discrete",value:{name:"boolean",required:!1}},{key:"displayMarkers",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"SimpleTagPropsT"}],alias:"SliderPropsT"}}],returns:null},{name:"getDefaultFoundation",docblock:null,modifiers:[],params:[],returns:null}],props:{onChange:{flowType:{name:"signature",type:"function",raw:"(\n  evt: CustomEventT<{\n    value: number\n  }>\n) => mixed",signature:{arguments:[{name:"evt",type:{name:"CustomEventT",elements:[{name:"signature",type:"object",raw:"{\n  value: number\n}",signature:{properties:[{key:"value",value:{name:"number",required:!0}}]}}],raw:"CustomEventT<{\n  value: number\n}>"}}],return:{name:"mixed"}}},required:!1,description:"A callback that fires when the Slider stops sliding which takes an event with event.detail.value set to the Slider's value."},onInput:{flowType:{name:"signature",type:"function",raw:"(\n  evt: CustomEventT<{\n    value: number\n  }>\n) => mixed",signature:{arguments:[{name:"evt",type:{name:"CustomEventT",elements:[{name:"signature",type:"object",raw:"{\n  value: number\n}",signature:{properties:[{key:"value",value:{name:"number",required:!0}}]}}],raw:"CustomEventT<{\n  value: number\n}>"}}],return:{name:"mixed"}}},required:!1,description:"A callback that fires continuously while the Slider is sliding that takes an event with event.detail.value set to the Slider's value."},value:{flowType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},required:!1,description:"The value of the Slider."},min:{flowType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},required:!1,description:"The minimum value of the Slider."},max:{flowType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},required:!1,description:"The maximum value of the Slider."},step:{flowType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},required:!1,description:"A step to quantize values by."},discrete:{flowType:{name:"boolean"},required:!1,description:"Displays the exact value of the Slider on the knob."},displayMarkers:{flowType:{name:"boolean"},required:!1,description:"Displays the individual step markers on the Slider track."},disabled:{flowType:{name:"boolean"},required:!1,description:"Disables the control."}}}]}});
//# sourceMappingURL=17.0eb3222f.chunk.js.map