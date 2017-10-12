!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports["react-mapycz"]=t(require("react"),require("prop-types")):e["react-mapycz"]=t(e.react,e["prop-types"])}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,r,n){Object.keys(r).map(function(o){var a=e[o],i=n[o];i!==a&&r[o](t,a,i,e)})},o=function(e,t,r){n(e,t,r,{})},a=function(e,t,r,o){n(e.props,t,r,o)};t.componentConstruct=o,t.componentDidUpdate=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(e,t){return new Error("Missing required prop `"+e+"` in `"+t+"`. Validation failed.")},a=function(e,t){return new Error("Invalid prop `"+e+"` supplied to `"+t+"`. Validation failed.")},i=function(e){return!isNaN(e)},u=function(e){return i(e)&&e|0===e},c=function(e,t){return function(r){return i(r)&&r>=e&&r<=t}},f=function(e){return function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ANONYMOUS";return void 0===t[r]?o(r,n):e(t,r,n)}},l=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ANONYMOUS",n=e[t];if(!(void 0===n||u(n)&&c(1,21)(n)))return a(t,r)};l.isRequired=f(l);var s=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ANONYMOUS",o=e[t];if(void 0!==o){if(!Array.isArray(o)||2!==o.length)return a(t,r);var i=n(o,2),u=i[0],f=i[1];if(!c(-90,90)(u)||!c(-180,180)(f))return a(t,r)}};s.isRequired=f(s);var p={zoom:l,coords:s};t.default=p},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={BASE:1,TURIST:2,OPHOTO:3,HYBRID:4,HISTORIC:5,BIKE:6,TRAIL:7,OPHOTO0203:8,OPHOTO0406:9,OBLIQUE:12,SMART_BASE:14,SMART_OPHOTO:15,SMART_TURIST:16,RELIEF:17,TURIST_WINTER:19,SMART_WINTER:20,SUMMER:21,SMART_SUMMER:22,GEOGRAPHY:23,OPHOTO1012:24,HYBRID_SPARSE:25,OPHOTO1415:26,BASE_NEW:27,TURIST_NEW:28};t.default=n},,function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(7);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(o).default}});var a=r(8);Object.defineProperty(t,"MapyCzProvider",{enumerable:!0,get:function(){return n(a).default}});var i=r(10);Object.defineProperty(t,"MarkerLayer",{enumerable:!0,get:function(){return n(i).default}});var u=r(11);Object.defineProperty(t,"Marker",{enumerable:!0,get:function(){return n(u).default}});var c=r(3);Object.defineProperty(t,"MapPropTypes",{enumerable:!0,get:function(){return n(c).default}});var f=r(12);Object.defineProperty(t,"PoiLayer",{enumerable:!0,get:function(){return n(f).default}});var l=r(4);Object.defineProperty(t,"BaseLayers",{enumerable:!0,get:function(){return n(l).default}})},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(0),l=n(f),s=r(1),p=n(s),d=r(3),y=n(d),b=r(4),h=n(b),v=r(2),m=function(e){function t(){var e,r,n,i;o(this,t);for(var u=arguments.length,c=Array(u),f=0;f<u;f++)c[f]=arguments[f];return r=n=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n.state={sMap:null},n.onComponentMount=n.onComponentMount.bind(n),i=r,a(n,i)}return i(t,e),c(t,[{key:"onComponentMount",value:function(e){!this.state.sMap&&e&&this.initiateMap(e)}},{key:"getChildContext",value:function(){return{sMap:this.state.sMap}}},{key:"initiateMap",value:function(e){var r=this.props,n=r.zoom,o=r.centerCoords,a=u(o,2),i=a[0],c=a[1],f=SMap.Coords.fromWGS84(c,i),l=new SMap(e,f,n);(0,v.componentConstruct)(this.props,l,t.updateMap),this.setState({sMap:l})}},{key:"componentDidUpdate",value:function(e){(0,v.componentDidUpdate)(this,this.state.sMap,t.updateMap,e)}},{key:"render",value:function(){var e=this.props,t=e.width,r=e.height,n=e.children;return l.default.createElement("div",{style:{width:t,height:r},ref:this.onComponentMount},this.state.sMap&&n)}}]),t}(l.default.Component);m.childContextTypes={sMap:p.default.object},m.propTypes={children:p.default.node,width:p.default.string,height:p.default.PropTypes.string,zoom:y.default.zoom,minZoom:y.default.zoom,maxZoom:y.default.zoom,centerCoords:y.default.coords,baseLayers:p.default.arrayOf(p.default.number)},m.defaultProps={width:"100%",height:"300px",zoom:13,minZoom:1,maxZoom:21,centerCoords:[49.4404919,12.9297611],baseLayers:[h.default.SMART_BASE]},m.updateMap={zoom:function(e,t){e.setZoom(t)},baseLayers:function(e,t,r){r&&r.forEach(function(t){return e.getLayer(t).disable()}),t.forEach(function(t){var r=e.getLayer(t);null===r&&(r=e.addDefaultLayer(t)),r.enable()})},centerCoords:function(e,t){var r=u(t,2),n=r[0],o=r[1];e.setCenter(SMap.Coords.fromWGS84(o,n))},minZoom:function(e,t,r,n){var o=n.maxZoom;e.setZoomRange(t,o)},maxZoom:function(e,t,r,n){var o=n.minZoom;e.setZoomRange(o,t)}},t.default=m},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(0),f=n(c),l=r(1),s=n(l),p=r(9),d=n(p),y="NONE",b="DONE",h=function(e){var t=function(t){function r(e,t){o(this,r);var n=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,t));n.onScriptLoaded=n.onScriptLoaded.bind(n);var i="undefined"!=typeof SMap;return n.state={scriptLoadingState:i?b:y},n}return i(r,t),u(r,[{key:"onScriptLoaded",value:function(){var e=this;Loader.async=!0,Loader.load(null,{poi:this.props.poi},function(){e.setState({scriptLoadingState:b})})}},{key:"loadScript",value:function(){var e=this.props.scriptUrl,t=document.createElement("script");t.setAttribute("src",e),t.addEventListener("load",this.onScriptLoaded),document.head.appendChild(t),this.setState({scriptLoadingState:"RUNNING"})}},{key:"componentDidMount",value:function(){this.state.scriptLoadingState===y&&d.default&&("undefined"==typeof SMap?this.loadScript():this.setState({scriptLoadingState:b}))}},{key:"render",value:function(){var t=this.props.loader;return this.state.scriptLoadingState===b?f.default.createElement(e,this.props):f.default.createElement(t,null)}}]),r}(f.default.Component);return t.displayName="MapyCzProvider",t.propTypes={scriptUrl:s.default.string,poi:s.default.bool,loader:s.default.func},t.defaultProps={scriptUrl:"https://api.mapy.cz/loader.js",loader:function(){return f.default.createElement("div",null,"Načítání")}},t};t.default=h},function(e,t,r){"use strict";var n=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(0),l=n(f),s=r(1),p=n(s),d=function(e){function t(e,r){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));n.state={sLayer:null};var i=new SMap.Layer.Marker;return n.context.sMap.addLayer(i),n.props.isEnabled&&i.enable(),n.state={sLayer:i},n}return i(t,e),c(t,[{key:"getChildContext",value:function(){return u({},this.context,{sLayer:this.state.sLayer})}},{key:"componentWillUnmount",value:function(){this.state.sLayer&&(this.context.sMap.removeLayer(this.state.sLayer),this.setState({sLayer:null}))}},{key:"render",value:function(){return l.default.createElement("div",null,this.props.children)}}]),t}(l.default.Component);d.contextTypes={sMap:p.default.object},d.childContextTypes={sMap:p.default.object,sLayer:p.default.object},d.propTypes={children:p.default.node,isEnabled:p.default.bool},d.defaultProps={isEnabled:!0},t.default=d},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(0),l=n(f),s=r(1),p=n(s),d=r(3),y=n(d),b=r(2),h=function(e){function t(e,r){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r)),i=u(e.coords,2),c=i[0],f=i[1],l=SMap.Coords.fromWGS84(f,c),s=new SMap.Marker(l,!1);return(0,b.componentConstruct)(e,s,t.updaterMap),n.context.sLayer.addMarker(s),n.sMarker=s,n}return i(t,e),c(t,[{key:"componentDidUpdate",value:function(e){(0,b.componentDidUpdate)(this,this.sMarker,t.updaterMap,e)}},{key:"componentWillUnmount",value:function(){this.context.sLayer.removeMarker(this.sMarker)}},{key:"render",value:function(){return null}}]),t}(l.default.Component);h.contextTypes={sMap:p.default.object,sLayer:p.default.object},h.propTypes={coords:y.default.coords.isRequired,imageUrl:p.default.string,width:p.default.number,height:p.default.number,anchor:p.default.arrayOf(p.default.number),title:p.default.string},h.updaterMap={coords:function(e,t){var r=u(t,2),n=r[0],o=r[1];e.setCoords(SMap.Coords.fromWGS84(o,n))},title:function(e,t){e._dom.active.setAttribute("title",t)},imageUrl:function(e,t){e.setURL(t)},width:function(e,t){e._dom.active.style.width=t+"px"},height:function(e,t){e._dom.active.style.height=t+"px"},anchor:function(e,t){var r=u(t,2),n=r[0],o=r[1];e._options.anchor={left:n,top:o},e._owner&&e._owner.positionMarker(e)}},t.default=h},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(0),f=n(c),l=r(1),s=n(l),p=r(2),d=function(e){function t(e,r){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r)),i=new SMap.Layer.Marker;return n.context.sMap.addLayer(i),n.sLayer=i,n.createProvider(),(0,p.componentConstruct)(e,i,t.updaterMap),n}return i(t,e),u(t,[{key:"createProvider",value:function(){var e=this.context.sMap,t=e.createDefaultDataProvider();t.setOwner(e),t.addLayer(this.sLayer),t.setMapSet(SMap.MAPSET_BASE),t.enable()}},{key:"componentDidUpdate",value:function(e){(0,p.componentDidUpdate)(this,this.sLayer,t.updaterMap,e)}},{key:"componentWillUnmount",value:function(){this.context.sMap.removeLayer(this.sLayer)}},{key:"render",value:function(){return null}}]),t}(f.default.Component);d.displayName="PoiLayer",d.contextTypes={sMap:s.default.object},d.propTypes={enabled:s.default.bool},d.defaultProps={enabled:!0},d.updaterMap={enabled:function(e,t){t?e.enable():e.disable()}},t.default=d}])});