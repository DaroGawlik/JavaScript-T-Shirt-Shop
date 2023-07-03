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
