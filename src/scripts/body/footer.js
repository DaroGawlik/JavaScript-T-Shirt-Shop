const footer = document.querySelector('footer')
const tShirtFront = document.querySelector('.footer__wrapper--tShirtFront')
const tShirtBack = document.querySelector('.footer__wrapper--tShirtBack')
const resumePanel = document.querySelector('.footer__wrapper--resumePanel')

let isCheckFront
let isCheckBack
let currentPrice

export function cautchingChecksBoxesToFooter(isCheckFront, isCheckBack) {
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
