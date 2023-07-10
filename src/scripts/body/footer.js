import { cautchingPhotoToOrderSummary, cautchingFilterToOrderSummary } from './orderSummary'

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

export function cautchingChecksBoxesToFooter(isCheckFront, isCheckBack) {
	isCheckFrontGlobal = isCheckFront
	isCheckBackGlobal = isCheckBack

	footer.style.display = isCheckFrontGlobal || isCheckBackGlobal ? 'flex' : 'none'

	addFrontTshirt(isCheckFrontGlobal)
	addBackTshirt(isCheckBackGlobal)
	showCurrentPrice()
}

export function cautchingFilterToFooter(selectedEffect) {
	const filterPrices = {
		normal: 0,
		grayscale: 2,
		blur: 3,
	}

	filterPriceGlobal = filterPrices[selectedEffect] || 0

	showCurrentPrice()
	cautchingFilterToOrderSummary(selectedEffect)
}
export function cautchingShippingToFooter(shippingSelect) {
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

export const cautchingPhotoToFooter = image => {
	loremPiscumFront = image.cloneNode(true)
	loremPiscumBack = image.cloneNode(true)
	tShirtFrontLoremPiscum.src = tShirtBackLoremPiscum.src = loremPiscumFront.src
	cautchingPhotoToOrderSummary(image)
}

function showCurrentPrice() {
	currentPriceGlobal = (isCheckFrontGlobal + isCheckBackGlobal) * 10 + filterPriceGlobal + shippingSelectGlobal

	const priceElement = resumePanel.querySelector('span')
	priceElement.textContent = currentPriceGlobal
}

export function hiddenFooter(currentIndex) {
	if (currentIndex === 4) {
		footer.style.display = 'none'
	} else {
		cautchingChecksBoxesToFooter(isCheckFrontGlobal, isCheckBackGlobal)
	}
}
