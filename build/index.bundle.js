/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/body.scss":
/*!******************************!*\
  !*** ./src/styles/body.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/body/api/loremPicsum.js":
/*!*********************************************!*\
  !*** ./src/scripts/body/api/loremPicsum.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPhoto: () => (/* binding */ getPhoto)
/* harmony export */ });
/* harmony import */ var _choosingImprint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../choosingImprint.js */ "./src/scripts/body/choosingImprint.js");


function getPhoto() {
	fetch('https://picsum.photos/500/300')
		.then(response => response.blob())
		.then(blob => {
			const imageUrl = URL.createObjectURL(blob)
			const image = document.createElement('img')
			image.src = imageUrl
			image.alt = 'Lorem Picsum'
			;(0,_choosingImprint_js__WEBPACK_IMPORTED_MODULE_0__.cautchingPhotoToChoosingImprint)(image)
		})
		.catch(error => {
			console.error('Error:', error)
		})
}


/***/ }),

/***/ "./src/scripts/body/choosingImprint.js":
/*!*********************************************!*\
  !*** ./src/scripts/body/choosingImprint.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cautchingPhotoToChoosingImprint: () => (/* binding */ cautchingPhotoToChoosingImprint)
/* harmony export */ });
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.js */ "./src/scripts/main.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ "./src/scripts/body/footer.js");



const checkFront = document.querySelector('#checkFront')
const checkBack = document.querySelector('#checkBack')
const checkBoth = document.querySelector('#checkBoth')

const tShirtFrontLoremPiscum = document.querySelector('.main__wrapper--tShirtFront')
const tShirtBackLoremPiscum = document.querySelector('.main__wrapper--tShirtFBack')

let loremPiscumFront
let loremPiscumBack

let isCheckFront = false
let isCheckBack = false

function toggleFront() {
	isCheckFront = !isCheckFront
	isCheckBoth()
}

function toggleBack() {
	isCheckBack = !isCheckBack
	isCheckBoth()
}

function toggleBoth() {
	isCheckFront = !isCheckFront || !isCheckBack
	isCheckBack = isCheckFront
	checkFront.checked = isCheckFront
	checkBack.checked = isCheckBack
	isCheckBoth()
}

function isCheckBoth() {
	toggleFrontTshit()
	toggleBackTshit()
	checkBoth.checked = isCheckFront && isCheckBack
	;(0,_main_js__WEBPACK_IMPORTED_MODULE_0__.cautchingChecksBoxesToMain)(isCheckFront, isCheckBack)
	;(0,_footer_js__WEBPACK_IMPORTED_MODULE_1__.cautchingChecksBoxesToFooter)(isCheckFront, isCheckBack)
}

const cautchingPhotoToChoosingImprint = image => {
	loremPiscumFront = image.cloneNode(true)
	loremPiscumBack = image.cloneNode(true)
}
function toggleFrontTshit() {
	if (isCheckFront) {
		if (!tShirtFrontLoremPiscum.contains(loremPiscumFront)) {
			tShirtFrontLoremPiscum.appendChild(loremPiscumFront)
			loremPiscumFront.classList.add('main__wrapper--tShirtLoremPiscum')
		}
	} else {
		if (tShirtFrontLoremPiscum.contains(loremPiscumFront)) {
			tShirtFrontLoremPiscum.removeChild(loremPiscumFront)
		}
	}
}
function toggleBackTshit() {
	if (isCheckBack) {
		if (!tShirtBackLoremPiscum.contains(loremPiscumBack)) {
			tShirtBackLoremPiscum.appendChild(loremPiscumBack)
			loremPiscumBack.classList.add('main__wrapper--tShirtLoremPiscum')
		}
	} else {
		if (tShirtBackLoremPiscum.contains(loremPiscumBack)) {
			tShirtBackLoremPiscum.removeChild(loremPiscumBack)
		}
	}
}
checkFront.addEventListener('click', toggleFront)
checkBack.addEventListener('click', toggleBack)
checkBoth.addEventListener('click', toggleBoth)


/***/ }),

/***/ "./src/scripts/body/footer.js":
/*!************************************!*\
  !*** ./src/scripts/body/footer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cautchingChecksBoxesToFooter: () => (/* binding */ cautchingChecksBoxesToFooter)
/* harmony export */ });
const footer = document.querySelector('footer')
const tShirtFront = document.querySelector('.footer__wrapper--tShirtFront')
const tShirtBack = document.querySelector('.footer__wrapper--tShirtBack')
const resumePanel = document.querySelector('.footer__wrapper--resumePanel')

let isCheckFront
let isCheckBack
let currentPrice

function cautchingChecksBoxesToFooter(isCheckFront, isCheckBack) {
	isCheckFront = isCheckFront
	isCheckBack = isCheckBack
	currentPrice = (isCheckFront + isCheckBack) * 10

	if (isCheckFront || isCheckBack) {
		footer.style.display = 'flex'
	} else {
		footer.style.display = 'none'
	}
	addFrontTshirt(isCheckFront)
	addBackTshirt(isCheckBack)
	showCurrentPrice(currentPrice)
}

const addFrontTshirt = isCheckFront => {
	if (isCheckFront) {
		tShirtFront.style.display = 'flex'
	} else {
		tShirtFront.style.display = 'none'
	}
}
const addBackTshirt = isCheckBack => {
	if (isCheckBack) {
		tShirtBack.style.display = 'flex'
	} else {
		tShirtBack.style.display = 'none'
	}
}

const showCurrentPrice = currentPrice => {
	const priceElement = resumePanel.querySelector('span')
	priceElement.textContent = currentPrice
}


/***/ }),

/***/ "./src/scripts/body/nav.js":
/*!*********************************!*\
  !*** ./src/scripts/body/nav.js ***!
  \*********************************/
/***/ (() => {

const buttonPrev = document.querySelector('.nav__button--prev')
const buttonNext = document.querySelector('.nav__button--next')

const slides = document.querySelector('.slides')
const articles = slides.querySelectorAll('article')

let currentIndex = 0

buttonPrev.addEventListener('click', () => {
	if (currentIndex > 0) {
		currentIndex--
		updateCarousel()
	}
})

buttonNext.addEventListener('click', () => {
	if (currentIndex < articles.length - 1) {
		currentIndex++
		updateCarousel()
	}
})

function updateCarousel() {
	articles.forEach((article, index) => {
		if (index === currentIndex) {
			article.setAttribute('article-active', '')
		} else {
			article.removeAttribute('article-active')
		}
		buttonPrevDisabled()
		buttonNextDisabled()
	})
}

function buttonPrevDisabled() {
	if (currentIndex === 0) {
		buttonPrev.disabled = true
	} else {
		buttonPrev.disabled = false
	}
}
function buttonNextDisabled() {
	if (currentIndex === articles.length - 1) {
		buttonNext.disabled = true
	} else {
		buttonNext.disabled = false
	}
}

window.addEventListener('load', event => {
	updateCarousel()
})


/***/ }),

/***/ "./src/scripts/body/objects/Tshirt.js":
/*!********************************************!*\
  !*** ./src/scripts/body/objects/Tshirt.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tshirt: () => (/* binding */ Tshirt)
/* harmony export */ });
class Tshirt {
	constructor(isCheckFront, isCheckBack) {
		this.front = isCheckFront
		this.back = isCheckBack
	}

	updateFront(isCheckFront) {
		this.front = isCheckFront
	}
	updateBack(isCheckBack) {
		this.back = isCheckBack
	}
}


/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cautchingChecksBoxesToMain: () => (/* binding */ cautchingChecksBoxesToMain)
/* harmony export */ });
/* harmony import */ var _styles_body_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/body.scss */ "./src/styles/body.scss");
/* harmony import */ var _body_choosingImprint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body/choosingImprint.js */ "./src/scripts/body/choosingImprint.js");
/* harmony import */ var _scripts_body_objects_Tshirt_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body/objects/Tshirt */ "./src/scripts/body/objects/Tshirt.js");
/* harmony import */ var _body_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./body/nav.js */ "./src/scripts/body/nav.js");
/* harmony import */ var _body_nav_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_body_nav_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _body_footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./body/footer.js */ "./src/scripts/body/footer.js");
/* harmony import */ var _body_api_loremPicsum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./body/api/loremPicsum */ "./src/scripts/body/api/loremPicsum.js");










let isCheckFront
let isCheckBack
let currentPrice

const orderOfTshirtsArr = []

;(0,_body_api_loremPicsum__WEBPACK_IMPORTED_MODULE_5__.getPhoto)()

function cautchingChecksBoxesToMain(isCheckFront, isCheckBack) {
	isCheckFront = isCheckFront
	isCheckBack = isCheckBack
	currentPrice = (isCheckFront + isCheckBack) * 10
}


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.bundle.js.map