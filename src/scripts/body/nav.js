import { validation } from './shippingInformation'
import { cautchingUserDataToOrderSummary, cautchingShippingToOrderSummary, confirmOrder } from './orderSummary'
import { hiddenFooter } from './footer'
import { orderObject } from './orderObject'

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

const updateCarousel = () => {
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
		cautchingUserDataToOrderSummary()
	}
}

export const changeButtonNextName = getCurrentIndex => {
	currentIndex = getCurrentIndex
	const buttonNames = ['Next', 'Go to shipping', 'Place the order', 'Confirm the order']
	const nextButtonIndex = Math.min(getCurrentIndex, buttonNames.length - 1)
	buttonNext.innerHTML = buttonNames[nextButtonIndex]
	if (nextButtonIndex == 2) {
		validation()
	}
	if (nextButtonIndex == 3) {
		cautchingShippingToOrderSummary()
		confirmOrder()
	}
	if (currentIndex == 4) {
		console.log(orderObject)
	}
	hiddenFooter(currentIndex)
}

export const buttonPrevDisabled = () => {
	buttonPrev.disabled = currentIndex === 0 ? true : false
}

export const buttonNextDisabled = () => {
	const isChecked = document.querySelectorAll('input[type="checkbox"]:checked').length < 1
	buttonNext.disabled = isChecked
	buttonNext.style.display = currentIndex === articles.length - 1 ? 'none' : 'block'
}

window.addEventListener('load', event => {
	updateCarousel()
})
