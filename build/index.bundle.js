/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/body.scss":
/*!******************************!*\
  !*** ./src/styles/body.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/body/api/loremPicsum.js":
/*!*********************************************!*\
  !*** ./src/scripts/body/api/loremPicsum.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backPicsumPhoto: () => (/* binding */ backPicsumPhoto),
/* harmony export */   getPhoto: () => (/* binding */ getPhoto),
/* harmony export */   goToSecondPiscumPhoto: () => (/* binding */ goToSecondPiscumPhoto),
/* harmony export */   picsumPhotoArr: () => (/* binding */ picsumPhotoArr)
/* harmony export */ });
/* harmony import */ var _choosingImprint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../choosingImprint.js */ "./src/scripts/body/choosingImprint.js");
/* harmony import */ var _choosingGraphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../choosingGraphic.js */ "./src/scripts/body/choosingGraphic.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer.js */ "./src/scripts/body/footer.js");




const picsumPhotoArr = []

function getPhoto() {
	fetch('https://picsum.photos/500/300')
		.then(response => {
			const imageUrl = response.url
			const image = document.createElement('img')
			image.src = imageUrl
			image.alt = 'Lorem Picsum'
			;(0,_choosingImprint_js__WEBPACK_IMPORTED_MODULE_0__.cautchingPhotoToChoosingImprint)(image)
			;(0,_footer_js__WEBPACK_IMPORTED_MODULE_2__.cautchingPhotoToFooter)(image)
			;(0,_choosingGraphic_js__WEBPACK_IMPORTED_MODULE_1__.cautchingPhotoToChoosingGraphic)(image)
			deletePicsumPhotoInArr(image)
		})
		.catch(error => {
			console.error('Error:', error)
		})
}

function goToSecondPiscumPhoto() {
	(0,_choosingImprint_js__WEBPACK_IMPORTED_MODULE_0__.cautchingPhotoToChoosingImprint)(picsumPhotoArr[1])
	;(0,_footer_js__WEBPACK_IMPORTED_MODULE_2__.cautchingPhotoToFooter)(picsumPhotoArr[1])
	;(0,_choosingGraphic_js__WEBPACK_IMPORTED_MODULE_1__.cautchingPhotoToChoosingGraphic)(picsumPhotoArr[1])
}

function backPicsumPhoto() {
	(0,_choosingImprint_js__WEBPACK_IMPORTED_MODULE_0__.cautchingPhotoToChoosingImprint)(picsumPhotoArr[0])
	;(0,_footer_js__WEBPACK_IMPORTED_MODULE_2__.cautchingPhotoToFooter)(picsumPhotoArr[0])
	;(0,_choosingGraphic_js__WEBPACK_IMPORTED_MODULE_1__.cautchingPhotoToChoosingGraphic)(picsumPhotoArr[0])
}

function deletePicsumPhotoInArr(image) {
	picsumPhotoArr.push(image)
	if (picsumPhotoArr.length > 2) {
		picsumPhotoArr.shift()
	}
}


/***/ }),

/***/ "./src/scripts/body/choosingGraphic.js":
/*!*********************************************!*\
  !*** ./src/scripts/body/choosingGraphic.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cautchingPhotoToChoosingGraphic: () => (/* binding */ cautchingPhotoToChoosingGraphic),
/* harmony export */   setEffect: () => (/* binding */ setEffect),
/* harmony export */   toggleBackTshitInChoosingGraphic: () => (/* binding */ toggleBackTshitInChoosingGraphic),
/* harmony export */   toggleFrontTshitInChoosingGraphic: () => (/* binding */ toggleFrontTshitInChoosingGraphic)
/* harmony export */ });
/* harmony import */ var _api_loremPicsum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/loremPicsum.js */ "./src/scripts/body/api/loremPicsum.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ "./src/scripts/body/footer.js");
/* harmony import */ var _orderSummary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orderSummary.js */ "./src/scripts/body/orderSummary.js");



const tShirtFrontGraphic = document.querySelector('.tShirtFront__Graphic')
const tShirtBackGraphic = document.querySelector('.tShirtBack__Graphic')

const buttonLeft = document.querySelector('.changePhoto__button--left')
const buttonRight = document.querySelector('.changePhoto__button--right')

const effectRadios = document.querySelectorAll('#effectSelect input[type="radio"]')

let loremPiscumFront
let loremPiscumBack

const cautchingPhotoToChoosingGraphic = image => {
	if (!tShirtFrontGraphic.contains(loremPiscumFront)) {
		loremPiscumFront = image.cloneNode(true)
	} else {
		loremPiscumFront.src = image.src
	}

	if (!tShirtBackGraphic.contains(loremPiscumBack)) {
		loremPiscumBack = image.cloneNode(true)
	} else {
		loremPiscumBack.src = image.src
	}

	if (_api_loremPicsum_js__WEBPACK_IMPORTED_MODULE_0__.picsumPhotoArr[0] == image) {
		buttonLeft.style.display = 'none'
	}
}

const toggleFrontTshitInChoosingGraphic = isCheckFront => {
	if (isCheckFront) {
		if (!tShirtFrontGraphic.contains(loremPiscumFront)) {
			tShirtFrontGraphic.appendChild(loremPiscumFront)
			loremPiscumFront.classList.add('main__wrapper--tShirtLoremPiscum')
		}
	} else {
		if (tShirtFrontGraphic.contains(loremPiscumFront)) {
			tShirtFrontGraphic.removeChild(loremPiscumFront)
		}
	}
}

const toggleBackTshitInChoosingGraphic = isCheckBack => {
	if (isCheckBack) {
		if (!tShirtBackGraphic.contains(loremPiscumBack)) {
			tShirtBackGraphic.appendChild(loremPiscumBack)
			loremPiscumBack.classList.add('main__wrapper--tShirtLoremPiscum')
		}
	} else {
		if (tShirtBackGraphic.contains(loremPiscumBack)) {
			tShirtBackGraphic.removeChild(loremPiscumBack)
		}
	}
}

buttonLeft.addEventListener('click', () => {
	;(0,_api_loremPicsum_js__WEBPACK_IMPORTED_MODULE_0__.backPicsumPhoto)()
})
buttonRight.addEventListener('click', () => {
	if (_api_loremPicsum_js__WEBPACK_IMPORTED_MODULE_0__.picsumPhotoArr.length < 2 || loremPiscumBack.src == _api_loremPicsum_js__WEBPACK_IMPORTED_MODULE_0__.picsumPhotoArr[1].src) {
		(0,_api_loremPicsum_js__WEBPACK_IMPORTED_MODULE_0__.getPhoto)()
	} else {
		(0,_api_loremPicsum_js__WEBPACK_IMPORTED_MODULE_0__.goToSecondPiscumPhoto)()
	}

	if (_api_loremPicsum_js__WEBPACK_IMPORTED_MODULE_0__.picsumPhotoArr.length > 0) {
		buttonLeft.style.display = 'flex'
	}
})

effectRadios.forEach(radio => {
	radio.addEventListener('change', () => {
		setEffect(radio.value)
	})
})

function setEffect(radio) {
	const selectedEffect = radio
	const loremPicsums = document.querySelectorAll('img[alt="Lorem Picsum"]')
	const blurRangeOption = document.querySelector('.graphicPanel__effect--blurRange')
	const blurRange = document.getElementById('blurRange')
	const blurRangecurrent = document.querySelector('.blurRange__current')
	if (selectedEffect == 'normal') {
		loremPicsums.forEach(loremPicsum => {
			loremPicsum.classList.remove('grayscale')
			loremPicsum.classList.remove('blur')
		})
	}

	if (selectedEffect == 'grayscale') {
		loremPicsums.forEach(loremPicsum => {
			loremPicsum.classList.add(selectedEffect)
		})
	}

	if (selectedEffect == 'blur') {
		loremPicsums.forEach(loremPicsum => {
			loremPicsum.classList.remove('grayscale')
		})
		blurRangeOption.style.display = 'flex'
		blurRange.addEventListener('input', function () {
			let blurValue = blurRange.value
			blurRangecurrent.innerHTML = blurValue

			loremPicsums.forEach(loremPicsum => {
				loremPicsum.style.filter = `blur(${blurValue}px)`
			})
			;(0,_orderSummary_js__WEBPACK_IMPORTED_MODULE_2__.cautchingFilterToOrderSummary)('blur')
		})
	} else {
		blurRangeOption.style.display = 'none'
		blurRangecurrent.innerHTML = 1
		blurRange.value = 1
		loremPicsums.forEach(loremPicsum => {
			loremPicsum.removeAttribute('style')
		})
	}
	(0,_footer_js__WEBPACK_IMPORTED_MODULE_1__.cautchingFilterToFooter)(selectedEffect)
}


/***/ }),

/***/ "./src/scripts/body/choosingImprint.js":
/*!*********************************************!*\
  !*** ./src/scripts/body/choosingImprint.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cautchingPhotoToChoosingImprint: () => (/* binding */ cautchingPhotoToChoosingImprint)
/* harmony export */ });
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.js */ "./src/scripts/body/footer.js");
/* harmony import */ var _choosingGraphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choosingGraphic.js */ "./src/scripts/body/choosingGraphic.js");
/* harmony import */ var _orderSummary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orderSummary.js */ "./src/scripts/body/orderSummary.js");





const checkFront = document.querySelector('#checkFront')
const checkBack = document.querySelector('#checkBack')
const checkBoth = document.querySelector('#checkBoth')

const tShirtFrontImprint = document.querySelector('.tShirtFront__Imprint')
const tShirtBackImprint = document.querySelector('.tShirtBack__Imprint')

const buttonNext = document.querySelector('.nav__button--next')

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
	;(0,_footer_js__WEBPACK_IMPORTED_MODULE_0__.cautchingChecksBoxesToFooter)(isCheckFront, isCheckBack)
	;(0,_orderSummary_js__WEBPACK_IMPORTED_MODULE_2__.cautchingChecksBoxesToOrderSummary)(isCheckFront, isCheckBack)

	buttonNext.disabled = document.querySelectorAll('input[type="checkbox"]:checked').length < 1

	const selectedRadio = document.querySelector('#effectSelect input[type="radio"]:checked')
	const selectedValue = selectedRadio ? selectedRadio.value : ''
	if (selectedValue == 'blur') {
		const blurRange = document.getElementById('blurRange')
		document.querySelectorAll('img[alt="Lorem Picsum"]').forEach(loremPicsum => {
			loremPicsum.style.filter = `blur(${blurRange.value}px)`
		})
		return
	}
	(0,_choosingGraphic_js__WEBPACK_IMPORTED_MODULE_1__.setEffect)(selectedValue)
}

const cautchingPhotoToChoosingImprint = image => {
	if (!tShirtFrontImprint.contains(loremPiscumFront)) {
		loremPiscumFront = image.cloneNode(true)
	} else {
		loremPiscumFront.src = image.src
	}

	if (!tShirtBackImprint.contains(loremPiscumBack)) {
		loremPiscumBack = image.cloneNode(true)
	} else {
		loremPiscumBack.src = image.src
	}
}

function toggleFrontTshit() {
	if (isCheckFront) {
		if (!tShirtFrontImprint.contains(loremPiscumFront)) {
			tShirtFrontImprint.appendChild(loremPiscumFront)
			loremPiscumFront.classList.add('main__wrapper--tShirtLoremPiscum')
		}
	} else {
		if (tShirtFrontImprint.contains(loremPiscumFront)) {
			tShirtFrontImprint.removeChild(loremPiscumFront)
		}
	}
	(0,_choosingGraphic_js__WEBPACK_IMPORTED_MODULE_1__.toggleFrontTshitInChoosingGraphic)(isCheckFront)
}

function toggleBackTshit() {
	if (isCheckBack) {
		if (!tShirtBackImprint.contains(loremPiscumBack)) {
			tShirtBackImprint.appendChild(loremPiscumBack)
			loremPiscumBack.classList.add('main__wrapper--tShirtLoremPiscum')
		}
	} else {
		if (tShirtBackImprint.contains(loremPiscumBack)) {
			tShirtBackImprint.removeChild(loremPiscumBack)
		}
	}
	(0,_choosingGraphic_js__WEBPACK_IMPORTED_MODULE_1__.toggleBackTshitInChoosingGraphic)(isCheckBack)
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cautchingChecksBoxesToFooter: () => (/* binding */ cautchingChecksBoxesToFooter),
/* harmony export */   cautchingFilterToFooter: () => (/* binding */ cautchingFilterToFooter),
/* harmony export */   cautchingPhotoToFooter: () => (/* binding */ cautchingPhotoToFooter),
/* harmony export */   cautchingShippingToFooter: () => (/* binding */ cautchingShippingToFooter),
/* harmony export */   hiddenFooter: () => (/* binding */ hiddenFooter)
/* harmony export */ });
/* harmony import */ var _orderSummary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderSummary */ "./src/scripts/body/orderSummary.js");


const footer = document.querySelector('footer')
const tShirtFront = document.querySelector('.footer__wrapper--tShirtFront')
const tShirtBack = document.querySelector('.footer__wrapper--tShirtBack')
const resumePanel = document.querySelector('.footer__wrapper--resumePanel')

const tShirtFrontLoremPiscum = document.querySelector('.footer__wrapper--tShirtLoremPiscumFront')
const tShirtBackLoremPiscum = document.querySelector('.footer__wrapper--tShirtLoremPiscumBack')

//GRAPHIC STEP
const tShirtFrontGraphic = document.querySelector('.tShirtFront__Graphic')
const tShirtBackGraphic = document.querySelector('.tShirtBack__Graphic')

let loremPiscumFront
let loremPiscumBack

let isCheckFrontGlobal
let isCheckBackGlobal

let filterPriceGlobal = 0
let shippingSelectGlobal = 0

let currentPriceGlobal

function cautchingChecksBoxesToFooter(isCheckFront, isCheckBack) {
	isCheckFrontGlobal = isCheckFront
	isCheckBackGlobal = isCheckBack

	footer.style.display = isCheckFrontGlobal || isCheckBackGlobal ? 'flex' : 'none'

	addFrontTshirt(isCheckFrontGlobal)
	addBackTshirt(isCheckBackGlobal)
	showCurrentPrice()
}

function cautchingFilterToFooter(selectedEffect) {
	const filterPrices = {
		normal: 0,
		grayscale: 2,
		blur: 3,
	}

	filterPriceGlobal = filterPrices[selectedEffect] || 0

	showCurrentPrice()
	;(0,_orderSummary__WEBPACK_IMPORTED_MODULE_0__.cautchingFilterToOrderSummary)(selectedEffect)
}
function cautchingShippingToFooter(shippingSelect) {
	shippingSelectGlobal = shippingSelect === 'curier' ? 5 : 0
	if (shippingSelect !== 'sameAddress') {
		showCurrentPrice()
	}
}

const addFrontTshirt = isCheckFront => {
	tShirtFront.style.display = isCheckFront ? 'flex' : 'none'
	tShirtFrontGraphic.style.display = isCheckFront ? 'flex' : 'none'
}

const addBackTshirt = isCheckBack => {
	tShirtBack.style.display = isCheckBack ? 'flex' : 'none'
	tShirtBackGraphic.style.display = isCheckBack ? 'flex' : 'none'
}

const cautchingPhotoToFooter = image => {
	loremPiscumFront = image.cloneNode(true)
	loremPiscumBack = image.cloneNode(true)
	tShirtFrontLoremPiscum.src = tShirtBackLoremPiscum.src = loremPiscumFront.src
	;(0,_orderSummary__WEBPACK_IMPORTED_MODULE_0__.cautchingPhotoToOrderSummary)(image)
}

function showCurrentPrice() {
	currentPriceGlobal = (isCheckFrontGlobal + isCheckBackGlobal) * 10 + filterPriceGlobal + shippingSelectGlobal

	const priceElement = resumePanel.querySelector('span')
	priceElement.textContent = currentPriceGlobal
}

function hiddenFooter(currentIndex) {
	if (currentIndex === 4) {
		footer.style.display = 'none'
	} else {
		cautchingChecksBoxesToFooter(isCheckFrontGlobal, isCheckBackGlobal)
	}
}


/***/ }),

/***/ "./src/scripts/body/nav.js":
/*!*********************************!*\
  !*** ./src/scripts/body/nav.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buttonNextDisabled: () => (/* binding */ buttonNextDisabled),
/* harmony export */   buttonPrevDisabled: () => (/* binding */ buttonPrevDisabled),
/* harmony export */   changeButtonNextName: () => (/* binding */ changeButtonNextName)
/* harmony export */ });
/* harmony import */ var _shippingInformation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shippingInformation */ "./src/scripts/body/shippingInformation.js");
/* harmony import */ var _orderSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderSummary */ "./src/scripts/body/orderSummary.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/scripts/body/footer.js");
/* harmony import */ var _orderObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orderObject */ "./src/scripts/body/orderObject.js");





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
	})

	buttonPrevDisabled()
	buttonNextDisabled()
	changeButtonNextName(currentIndex)
	if (currentIndex === 3) {
		(0,_orderSummary__WEBPACK_IMPORTED_MODULE_1__.cautchingUserDataToOrderSummary)()
	}
}

function changeButtonNextName(getCurrentIndex) {
	currentIndex = getCurrentIndex
	const buttonNames = ['Next', 'Go to shipping', 'Place the order', 'Confirm the order']
	const nextButtonIndex = Math.min(getCurrentIndex, buttonNames.length - 1)
	buttonNext.innerHTML = buttonNames[nextButtonIndex]
	if (nextButtonIndex == 2) {
		(0,_shippingInformation__WEBPACK_IMPORTED_MODULE_0__.validation)()
	}
	if (nextButtonIndex == 3) {
		(0,_orderSummary__WEBPACK_IMPORTED_MODULE_1__.cautchingShippingToOrderSummary)()
		;(0,_orderSummary__WEBPACK_IMPORTED_MODULE_1__.confirmOrder)()
	}
	if (currentIndex == 4) {
		console.log(_orderObject__WEBPACK_IMPORTED_MODULE_3__.orderObject)
	}
	(0,_footer__WEBPACK_IMPORTED_MODULE_2__.hiddenFooter)(currentIndex)
}

function buttonPrevDisabled() {
	buttonPrev.disabled = currentIndex === 0 ? true : false
}

function buttonNextDisabled() {
	const isChecked = document.querySelectorAll('input[type="checkbox"]:checked').length < 1
	buttonNext.disabled = isChecked
	buttonNext.style.display = currentIndex === articles.length - 1 ? 'none' : 'block'
}

window.addEventListener('load', event => {
	updateCarousel()
})


/***/ }),

/***/ "./src/scripts/body/orderObject.js":
/*!*****************************************!*\
  !*** ./src/scripts/body/orderObject.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   orderObject: () => (/* binding */ orderObject)
/* harmony export */ });
const orderObject = {
	picture: {
		placement: '',
		id: '',
		filter: '',
	},
	userData: {
		name: '',
		surname: '',
		phoneNumber: '',
		email: '',
	},
	userAddress: {
		city: '',
		street: '',
		house: '',
		zip: '',
	},
	userShipping: {
		city: '',
		street: '',
		house: '',
		zip: '',
	},
}


/***/ }),

/***/ "./src/scripts/body/orderSummary.js":
/*!******************************************!*\
  !*** ./src/scripts/body/orderSummary.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cautchingChecksBoxesToOrderSummary: () => (/* binding */ cautchingChecksBoxesToOrderSummary),
/* harmony export */   cautchingFilterToOrderSummary: () => (/* binding */ cautchingFilterToOrderSummary),
/* harmony export */   cautchingPhotoToOrderSummary: () => (/* binding */ cautchingPhotoToOrderSummary),
/* harmony export */   cautchingShippingToOrderSummary: () => (/* binding */ cautchingShippingToOrderSummary),
/* harmony export */   cautchingUserDataToOrderSummary: () => (/* binding */ cautchingUserDataToOrderSummary),
/* harmony export */   confirmOrder: () => (/* binding */ confirmOrder)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/scripts/body/nav.js");
/* harmony import */ var _orderObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderObject */ "./src/scripts/body/orderObject.js");



const slides = document.querySelector('.slides')
const articles = slides.querySelectorAll('article')

const placement = document.querySelector('.summary__placement--placement')
const placementEdit = document.querySelector('.summary__placement--button')

const picture = document.querySelector('.summary__picture--picture')
const filter = document.querySelector('.summary__picture--filter')
const choosingGraphicBtns = document.querySelectorAll('.summary__picture--button, .summary__filter--button')

const userDataSourceInputs = document.querySelectorAll('.userData-source-input')
const targetInputs = document.querySelectorAll('.summary__userData-target-input')

const addressesSourceInputs = document.querySelectorAll('.source-input')
const addressesTargetInputs = document.querySelectorAll('.summary__addresses-target-input')

const shippingSourceInputs = document.querySelectorAll('.target-input')
const shippingTargetInputs = document.querySelectorAll('.summary__shipping-target-input')

const userDataEdit = document.querySelectorAll(
	'.summary__userData--button, .summary__userAddress--button, .summary__userShipping--button'
)

const checkboxes = document.querySelectorAll('.main__wrapper--summary input[type="checkbox"]')

const buttonNext = document.querySelector('.nav__button--next')

let placementTextGlobal
let imageUrlGlobal
let filterGlobal
let isUserDataChanged = false
let isUserAddressChanged = false
let isUserShippingChanged = false

function cautchingChecksBoxesToOrderSummary(isCheckFront, isCheckBack) {
	const placementText = isCheckFront && isCheckBack ? 'Both' : isCheckFront ? 'Front' : isCheckBack ? 'Back' : ''
	if (placementTextGlobal !== placementText) {
		document.querySelector('.main__wrapper--summary input[value=placementConfirmed]').checked = false
	}
	placementTextGlobal = placementText

	placement.innerHTML = placementText
	_orderObject__WEBPACK_IMPORTED_MODULE_1__.orderObject.picture.placement = placementText
}

function cautchingPhotoToOrderSummary(image) {
	if (imageUrlGlobal !== image.src) {
		document.querySelector('.main__wrapper--summary input[value=pictureConfirmed]').checked = false
	}

	imageUrlGlobal = image.src
	const id = imageUrlGlobal.match(/\/id\/(\d+)\//)[1]
	picture.innerHTML = 'ID ' + id
	_orderObject__WEBPACK_IMPORTED_MODULE_1__.orderObject.picture.id = id
}

function cautchingFilterToOrderSummary(selectedEffect) {
	const blurRange = document.getElementById('blurRange')
	const filterSelected =
		selectedEffect === 'blur'
			? selectedEffect.charAt(0).toUpperCase() + selectedEffect.slice(1) + ' ' + blurRange.value
			: selectedEffect.charAt(0).toUpperCase() + selectedEffect.slice(1)

	if (filterGlobal !== filterSelected) {
		document.querySelector('.main__wrapper--summary input[value=filterConfirmed]').checked = false
	}
	filterGlobal = filterSelected
	filter.innerHTML = filterSelected
	_orderObject__WEBPACK_IMPORTED_MODULE_1__.orderObject.picture.filter = filterSelected
}

function cautchingUserDataToOrderSummary() {
	userDataSourceInputs.forEach((input, index) => {
		if (input.value !== targetInputs[index].innerHTML) {
			isUserDataChanged = true
			targetInputs[index].innerHTML = input.value
		}
	})
	if (isUserDataChanged) {
		userDataSourceInputs.forEach((input, index) => {
			targetInputs[index].innerHTML = input.value
		})
		document.querySelector('.summary__userData input[value=userDataConfirmed]').checked = false
		isUserDataChanged = false
	}
	cautchingAddressesToOrderSummary()
}
function cautchingAddressesToOrderSummary() {
	addressesSourceInputs.forEach((input, index) => {
		if (input.value !== addressesTargetInputs[index].innerHTML) {
			isUserAddressChanged = true
			addressesTargetInputs[index].innerHTML = input.value
		}
	})
	if (isUserAddressChanged) {
		addressesSourceInputs.forEach((input, index) => {
			addressesTargetInputs[index].innerHTML = input.value
		})
		document.querySelector('.summary__userData input[value=userAddressConfirmed]').checked = false
		isUserAddressChanged = false
	}
}

function cautchingShippingToOrderSummary() {
	const summaryShipping = document.querySelector('.userData__userAddressShipping')
	if (!document.querySelector('#shippingSelect input[value=curier]').checked) {
		summaryShipping.style.display = 'none'
		return
	} else {
		summaryShipping.style.display = 'block'
		shippingSourceInputs.forEach((input, index) => {
			if (input.value !== shippingTargetInputs[index].innerHTML) {
				isUserShippingChanged = true
				shippingTargetInputs[index].innerHTML = input.value
			}
			if (isUserShippingChanged) {
				summaryShipping.style.display = 'block'
				shippingSourceInputs.forEach((input, index) => {
					shippingTargetInputs[index].innerHTML = input.value
				})
				document.querySelector('.summary__userData input[value=userAddressShipping]').checked = false
				isUserShippingChanged = false
			}
		})
	}
}

placementEdit.addEventListener('click', () => {
	updateCarousel(0)
})
choosingGraphicBtns.forEach(button => {
	button.addEventListener('click', () => {
		updateCarousel(1)
	})
})
userDataEdit.forEach(button => {
	button.addEventListener('click', () => {
		updateCarousel(2)
	})
})

function updateCarousel(currentIndex) {
	articles.forEach((article, index) => {
		if (index === currentIndex) {
			article.setAttribute('article-active', '')
		} else {
			article.removeAttribute('article-active')
		}
	})
	;(0,_nav__WEBPACK_IMPORTED_MODULE_0__.changeButtonNextName)(currentIndex)
	;(0,_nav__WEBPACK_IMPORTED_MODULE_0__.buttonPrevDisabled)()
	;(0,_nav__WEBPACK_IMPORTED_MODULE_0__.buttonNextDisabled)()
}

checkboxes.forEach(checkbox => {
	checkbox.addEventListener('change', confirmOrder)
})

function confirmOrder() {
	let areAllChecked
	if (!document.querySelector('#shippingSelect input[value=curier]').checked) {
		const firstFiveCheckboxes = Array.from(checkboxes).slice(0, 5)
		areAllChecked = firstFiveCheckboxes.every(checkbox => checkbox.checked)
	} else {
		areAllChecked = Array.from(checkboxes).every(checkbox => checkbox.checked)
	}

	buttonNext.disabled = !areAllChecked
}


/***/ }),

/***/ "./src/scripts/body/shippingInformation.js":
/*!*************************************************!*\
  !*** ./src/scripts/body/shippingInformation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validation: () => (/* binding */ validation)
/* harmony export */ });
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/scripts/body/footer.js");
/* harmony import */ var _orderObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderObject */ "./src/scripts/body/orderObject.js");



const shippingSelect = document.querySelectorAll('#shippingSelect input')
const buttonNext = document.querySelector('.nav__button--next')

let val
let el
let blurAction

let validName = false
let validSurname = false

let validPhone = false
let validEmail = false

let validCity = false
let validCityShip = false
let validStreet = false
let validStreetShip = false
let validHouse = false
let validHouseShip = false
let validZip = false
let validZipShip = false

function checkName() {
	const val = document.getElementById('name')
	const isValid = val.value.length >= 2 && /^[A-Za-z]+$/.test(val.value)

	validName = isValid
	val.style.borderColor = isValid ? '' : 'red'
	validation()
	_orderObject__WEBPACK_IMPORTED_MODULE_1__.orderObject.userData.name = val.value
}

function checkSurname() {
	const val = document.getElementById('surname')
	const isValid = val.value.length >= 3 && /^[A-Za-z]+$/.test(val.value)

	validSurname = isValid
	val.style.borderColor = isValid ? '' : 'red'
	validation()
	_orderObject__WEBPACK_IMPORTED_MODULE_1__.orderObject.userData.surname = val.value
}
function checkNumber() {
	const val = document.getElementById('phoneNumber')
	const isValid = val.value === '' || /^\d{9,}$/.test(val.value)

	validPhone = isValid
	val.style.borderColor = isValid ? '' : 'red'
	validation()
	_orderObject__WEBPACK_IMPORTED_MODULE_1__.orderObject.userData.phoneNumber = val.value
}
function checkEmail() {
	const val = document.getElementById('email')
	const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.value)

	validEmail = isValid
	val.style.borderColor = isValid ? '' : 'red'
	validation()
	_orderObject__WEBPACK_IMPORTED_MODULE_1__.orderObject.userData.email = val.value
}

document.querySelectorAll('.blurAction').forEach(input =>
	input.addEventListener('blur', e => {
		switch (e.target.id) {
			case 'name':
				checkName()
				break
			case 'surname':
				checkSurname()
				break
			case 'phoneNumber':
				checkNumber()
				break
			case 'email':
				checkEmail()
				break
			default:
				break
		}
	})
)

function checkcity() {
	const val = document.getElementById('city')
	const isValid = val.value.length >= 3 && /^[A-Za-z]+$/.test(val.value)
	validCity = isValid
	val.style.borderColor = isValid ? '' : 'red'

	if (document.querySelector('.addresses__userAddressesShipping').style.display == 'block') {
		const valShi = document.getElementById('cityShipping')
		const isValidShi = valShi.value.length >= 3 && /^[A-Za-z]+$/.test(valShi.value)
		validCityShip = isValidShi
		valShi.style.borderColor = isValidShi ? '' : 'red'
		_orderObject__WEBPACK_IMPORTED_MODULE_1__.orderObject.userShipping.city = valShi.value
	}
	validation()
	_orderObject__WEBPACK_IMPORTED_MODULE_1__.orderObject.userAddress.city = val.value
}

function checkStreet() {
	const val = document.getElementById('street')
	const isValid = val.value.length >= 3 && /^[A-Za-z0-9\-\/]+$/.test(val.value)
	validStreet = isValid
	val.style.borderColor = isValid ? '' : 'red'

	if (document.querySelector('.addresses__userAddressesShipping').style.display == 'block') {
		const valShi = document.getElementById('streetShipping')
		const isValidShi = valShi.value.length >= 3 && /^[A-Za-z0-9\-\/]+$/.test(valShi.value)
		validStreetShip = isValidShi
		valShi.style.borderColor = isValidShi ? '' : 'red'
		_orderObject__WEBPACK_IMPORTED_MODULE_1__.orderObject.userShipping.street = valShi.value
	}
	validation()
	_orderObject__WEBPACK_IMPORTED_MODULE_1__.orderObject.userAddress.street = val.value
}
function checkHouse() {
	const val = document.getElementById('house')
	const isValid = val.value.length > 0 && /^[A-Za-z0-9\-\/]+$/.test(val.value)
	validHouse = isValid
	val.style.borderColor = isValid ? '' : 'red'

	if (document.querySelector('.addresses__userAddressesShipping').style.display == 'block') {
		const valShi = document.getElementById('houseShipping')
		const isValidShi = valShi.value.length > 0 && /^[A-Za-z0-9\-\/]+$/.test(valShi.value)
		validHouseShip = isValidShi
		valShi.style.borderColor = isValidShi ? '' : 'red'
		_orderObject__WEBPACK_IMPORTED_MODULE_1__.orderObject.userShipping.house = valShi.value
	}
	validation()
	_orderObject__WEBPACK_IMPORTED_MODULE_1__.orderObject.userAddress.house = val.value
}
function checkZip() {
	const val = document.getElementById('zip')
	const isValid = val.value.length > 4 && /^[0-9\-]+$/.test(val.value)
	validZip = isValid
	val.style.borderColor = isValid ? '' : 'red'

	if (document.querySelector('.addresses__userAddressesShipping').style.display == 'block') {
		const valShi = document.getElementById('zipShipping')
		const isValidShi = valShi.value.length > 4 && /^[0-9\-]+$/.test(valShi.value)
		validZipShip = isValidShi
		valShi.style.borderColor = isValidShi ? '' : 'red'
		_orderObject__WEBPACK_IMPORTED_MODULE_1__.orderObject.userShipping.zip = valShi.value
	}
	validation()
	_orderObject__WEBPACK_IMPORTED_MODULE_1__.orderObject.userAddress.zip = val.value
}

document.querySelectorAll('.blurAction').forEach(input =>
	input.addEventListener('blur', e => {
		switch (e.target.id) {
			case 'city':
			case 'cityShipping':
				checkcity()
				break
			case 'street':
			case 'streetShipping':
				checkStreet()
				break
			case 'house':
			case 'houseShipping':
				checkHouse()
				break
			case 'zip':
			case 'zipShipping':
				checkZip()
				break
			default:
				break
		}
	})
)

shippingSelect.forEach(radio => {
	radio.addEventListener('change', function () {
		const userShipping = document.querySelector('.addresses__userAddressesShipping')
		const checkbox = document.querySelector('#sameAddress')
		const isChecked = document.querySelector('#sameAddress input')

		const sourceInputs = document.querySelectorAll('.source-input')
		const targetInputs = document.querySelectorAll('.target-input')

		const shippingSelect = this.value
		if (shippingSelect == 'pickup') {
			isChecked.checked = false
			userShipping.style.display = 'none'
			checkbox.style.display = 'none'
			targetInputs.forEach(targetInput => {
				targetInput.value = ''
				targetInput.removeAttribute('style')
			})
			resetShippingDataValidity()
		}
		if (shippingSelect == 'curier') {
			userShipping.style.display = 'block'
			checkbox.style.display = 'block'
		}

		if (shippingSelect == 'sameAddress' && isChecked.checked) {
			sourceInputs.forEach((input, index) => {
				targetInputs[index].value = input.value
				checkcity()
				checkStreet()
				checkHouse()
				checkZip()
			})
		}
		validation()
		;(0,_footer__WEBPACK_IMPORTED_MODULE_0__.cautchingShippingToFooter)(shippingSelect)
	})
})

function resetShippingDataValidity() {
	;[validCityShip, validStreetShip, validHouseShip, validZipShip] = [false, false, false, false]
	_orderObject__WEBPACK_IMPORTED_MODULE_1__.orderObject.userShipping = {
		city: '',
		street: '',
		house: '',
		zip: '',
	}
}

function validation() {
	const isShippingAddressDisplayed =
		document.querySelector('.addresses__userAddressesShipping').style.display === 'block'

	const isBasicDataValid =
		validName && validSurname && validPhone && validEmail && validCity && validStreet && validHouse && validZip

	const isShippingDataValid =
		isShippingAddressDisplayed && validCityShip && validStreetShip && validHouseShip && validZipShip

	buttonNext.disabled = !(isBasicDataValid && (!isShippingAddressDisplayed || isShippingDataValid))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_body_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/body.scss */ "./src/styles/body.scss");
/* harmony import */ var _body_choosingImprint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body/choosingImprint.js */ "./src/scripts/body/choosingImprint.js");
/* harmony import */ var _body_choosingGraphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body/choosingGraphic.js */ "./src/scripts/body/choosingGraphic.js");
/* harmony import */ var _body_shippingInformation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./body/shippingInformation.js */ "./src/scripts/body/shippingInformation.js");
/* harmony import */ var _body_orderSummary_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./body/orderSummary.js */ "./src/scripts/body/orderSummary.js");
/* harmony import */ var _body_nav_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./body/nav.js */ "./src/scripts/body/nav.js");
/* harmony import */ var _body_footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./body/footer.js */ "./src/scripts/body/footer.js");
/* harmony import */ var _body_api_loremPicsum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./body/api/loremPicsum */ "./src/scripts/body/api/loremPicsum.js");










let isCheckFront
let isCheckBack
let currentPrice

;(0,_body_api_loremPicsum__WEBPACK_IMPORTED_MODULE_7__.getPhoto)()

})();

/******/ })()
;
//# sourceMappingURL=index.bundle.js.map