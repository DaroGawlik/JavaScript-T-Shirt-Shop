/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _views_ChoosingImprint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/ChoosingImprint.js */ \"./src/scripts/views/ChoosingImprint.js\");\n/* harmony import */ var _views_ChoosingGraphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/ChoosingGraphic.js */ \"./src/scripts/views/ChoosingGraphic.js\");\n\r\n\r\n\r\n\r\n/// MAIN\r\n\r\n///SPA MODULE\r\nconst navigateTo = url => {\r\n\thistory.pushState(null, null, url)\r\n\trouter()\r\n}\r\n\r\nconst router = async () => {\r\n\tconst routes = [\r\n\t\t{ path: '/ChoosingImprint', view: _views_ChoosingImprint_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] },\r\n\t\t{ path: '/ChoosingGraphic', view: _views_ChoosingGraphic_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"] },\r\n\t]\r\n\tconst potentialMatches = routes.map(route => {\r\n\t\tconsole.log(location.pathname)\r\n\t\tconsole.log(route.path)\r\n\t\treturn {\r\n\t\t\troute: route,\r\n\t\t\tisMatch: location.pathname === route.path,\r\n\t\t}\r\n\t})\r\n\r\n\tlet match = potentialMatches.find(potentialMatches => potentialMatches.isMatch)\r\n\r\n\tif (!match) {\r\n\t\tmatch = {\r\n\t\t\troute: routes[0],\r\n\t\t\tisMatch: true,\r\n\t\t}\r\n\t}\r\n\r\n\tconst view = new match.route.view()\r\n\r\n\tconsole.log(view)\r\n}\r\n/// FOOTER\r\n\r\nwindow.addEventListener('popstate', router)\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\tdocument.body.addEventListener('click', e => {\r\n\t\tif (e.target.matches('[data-link]')) {\r\n\t\t\te.preventDefault()\r\n\t\t\tnavigateTo(e.target.href)\r\n\t\t}\r\n\t})\r\n\trouter()\r\n})\r\n\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/views/AbstractView.js":
/*!*******************************************!*\
  !*** ./src/scripts/views/AbstractView.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\r\n\tconstructor() {}\r\n\r\n\tsetTitle(title) {\r\n\t\tdocument.title = title\r\n\t}\r\n\r\n\tasync getHtml() {\r\n\t\treturn ''\r\n\t}\r\n});\r\n\n\n//# sourceURL=webpack:///./src/scripts/views/AbstractView.js?");

/***/ }),

/***/ "./src/scripts/views/ChoosingGraphic.js":
/*!**********************************************!*\
  !*** ./src/scripts/views/ChoosingGraphic.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ChoosingGraphic)\n/* harmony export */ });\n/* harmony import */ var _AbstractView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractView.js */ \"./src/scripts/views/AbstractView.js\");\n\r\n\r\nclass ChoosingGraphic extends _AbstractView_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\tconstructor() {\r\n\t\tsuper()\r\n\t\tthis.setTitle('Choosing Graphic')\r\n\t}\r\n\r\n\tasync getHtml() {\r\n\t\treturn '<h1>Choosing Graphic</h1>'\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/scripts/views/ChoosingGraphic.js?");

/***/ }),

/***/ "./src/scripts/views/ChoosingImprint.js":
/*!**********************************************!*\
  !*** ./src/scripts/views/ChoosingImprint.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ChoosingImprint)\n/* harmony export */ });\n/* harmony import */ var _AbstractView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractView.js */ \"./src/scripts/views/AbstractView.js\");\n\r\n\r\nclass ChoosingImprint extends _AbstractView_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\tconstructor() {\r\n\t\tsuper()\r\n\t\tthis.setTitle('Choosing Imprint')\r\n\t}\r\n\r\n\tasync getHtml() {\r\n\t\treturn '<h1>Choosing Imprint</h1>'\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/scripts/views/ChoosingImprint.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/main.js");
/******/ 	
/******/ })()
;