import { cautchingPhotoToOrderSummary, cautchingFilterToOrderSummary } from './orderSummary'

const footer = document.querySelector('footer')
const tShirtFront = document.querySelector('.footer__wrapper--tShirtFront')
const tShirtBack = document.querySelector('.footer__wrapper--tShirtBack')
const resumePanel = document.querySelector('.footer__wrapper--resumePanel')

const tShirtFrontLoremPiscum = document.querySelector('.footer__wrapper--tShirtLoremPiscumFront')
const tShirtBackLoremPiscum = document.querySelector('.footer__wrapper--tShirtLoremPiscumBack')

const tShirtFrontGraphic = document.querySelector('.tShirtFront__Graphic')
const tShirtBackGraphic = document.querySelector('.tShirtBack__Graphic')

let loremPiscumFront
let loremPiscumBack

let isCheckFrontGlobal
let isCheckBackGlobal

let filterPriceGlobal = 0
let shippingSelectGlobal = 0

let currentPriceGlobal

export const cautchingChecksBoxesToFooter = (isCheckFront, isCheckBack) => {
	isCheckFrontGlobal = isCheckFront
	isCheckBackGlobal = isCheckBack

	footer.style.display = isCheckFrontGlobal || isCheckBackGlobal ? 'flex' : 'none'

	toggleTshirts(tShirtFront, isCheckFront)
	toggleTshirts(tShirtFrontGraphic, isCheckFront)
	toggleTshirts(tShirtBack, isCheckBack)
	toggleTshirts(tShirtBackGraphic, isCheckBack)
	showCurrentPrice()
}

export const cautchingFilterToFooter = selectedEffect => {
	const filterPrices = {
		normal: 0,
		grayscale: 2,
		blur: 3,
	}

	filterPriceGlobal = filterPrices[selectedEffect] || 0

	showCurrentPrice()
	cautchingFilterToOrderSummary(selectedEffect)
}
export const cautchingShippingToFooter = shippingSelect => {
	shippingSelectGlobal = shippingSelect === 'curier' ? 5 : 0
	if (shippingSelect !== 'sameAddress') {
		showCurrentPrice()
	}
}
const toggleTshirts = (element, isCheck) => {
	element.style.display = isCheck ? 'flex' : 'none'
}
export const cautchingPhotoToFooter = image => {
	loremPiscumFront = image.cloneNode(true)
	loremPiscumBack = image.cloneNode(true)
	tShirtFrontLoremPiscum.src = tShirtBackLoremPiscum.src = loremPiscumFront.src
	cautchingPhotoToOrderSummary(image)
}

const showCurrentPrice = () => {
	currentPriceGlobal = (isCheckFrontGlobal + isCheckBackGlobal) * 10 + filterPriceGlobal + shippingSelectGlobal

	resumePanel.querySelector('span').textContent = currentPriceGlobal
}

export const hiddenFooter = currentIndex => {
	if (currentIndex === 4) {
		footer.style.display = 'none'
	} else {
		cautchingChecksBoxesToFooter(isCheckFrontGlobal, isCheckBackGlobal)
	}
}
