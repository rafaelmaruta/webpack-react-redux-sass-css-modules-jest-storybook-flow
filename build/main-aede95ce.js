webpackJsonp([1],{100:function(e,t,r){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}var n=r(7),o=u(n),a=r(114),c=r(98),d=r(125),l=r(202),i=r(211),s=u(i),f=r(213),p=u(f);r(218);!function(e){(0,d.render)(o.default.createElement(a.AppContainer,null,o.default.createElement(c.Provider,{store:p.default},o.default.createElement(e,{history:l.browserHistory,routes:s.default}))),document.querySelector('[data-js="app"]'))}(l.Router)},211:function(e,t,r){"use strict";function u(e){console.error("Dynamic page loading failed",e)}function n(e){return function(t){return e(null,t.default)}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(212),a=function(e){return e&&e.__esModule?e:{default:e}}(o),c={component:a.default,childRoutes:[{path:"/",getComponent:function(e,t){r.e(0).then(r.bind(null,99)).then(n(t)).catch(u)}},{path:"/:param",getComponent:function(e,t){r.e(0).then(r.bind(null,99)).then(n(t)).catch(u)}}]};t.default=c},212:function(e,t,r){"use strict";function u(e){var t=e.children;return o.default.createElement("div",{className:"master-page"},t)}Object.defineProperty(t,"__esModule",{value:!0});var n=r(7),o=function(e){return e&&e.__esModule?e:{default:e}}(n);u.defaultProps={children:n.PropTypes.node},u.propTypes={children:n.PropTypes.node},t.default=u},213:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=r(37),n=r(214),o=function(e){return e&&e.__esModule?e:{default:e}}(n),a=(0,u.createStore)(o.default);t.default=a},214:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=r(37),n=r(215),o=function(e){return e&&e.__esModule?e:{default:e}}(n),a=(0,u.combineReducers)({ProductsCart:o.default});t.default=a},215:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=r(216),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(u),o=r(217),a={productsList:(0,o.List)(JSON.parse(localStorage.getItem("productsCart")))||(0,o.List)()},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1];switch(t.type){case n.ADD_PRODUCT:var r=e.productsList.push(t.product);return localStorage.setItem("productsCart",JSON.stringify(r)),{productsList:r};case n.DEL_PRODUCT:var u=e.productsList.findIndex(function(e){return e.id===t.product.id});return r=e.productsList.splice(u,1),localStorage.setItem("productsCart",JSON.stringify(r)),{productsList:r};default:return e}};t.default=c},216:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ADD_PRODUCT="ADD_PRODUCT",t.DEL_PRODUCT="DEL_PRODUCT"},218:function(e,t){}},[100]);
//# sourceMappingURL=main-aede95ce.js.map