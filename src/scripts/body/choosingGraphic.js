import { getPhoto, backPicsumPhoto, picsumPhotoArr, goToSecondPiscumPhoto } from './api/loremPicsum.js'
import { cautchingFilterToFooter } from './footer.js'
import { cautchingFilterToOrderSummary } from './orderSummary.js'
const tShirtFrontGraphic = document.querySelector('.tShirtFront__Graphic')
const tShirtBackGraphic = document.querySelector('.tShirtBack__Graphic')

const buttonLeft = document.querySelector('.changePhoto__button--left')
const buttonRight = document.querySelector('.changePhoto__button--right')

const effectRadios = document.querySelectorAll('#effectSelect input[type="radio"]')

let loremPiscumFront
let loremPiscumBack

export const cautchingPhotoToChoosingGraphic = image => {
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

	if (picsumPhotoArr[0] == image) {
		buttonLeft.style.display = 'none'
	}
}

export const toggleFrontTshitInChoosingGraphic = isCheckFront => {
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

export const toggleBackTshitInChoosingGraphic = isCheckBack => {
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
	backPicsumPhoto()
})
buttonRight.addEventListener('click', () => {
	if (picsumPhotoArr.length < 2 || loremPiscumBack.src == picsumPhotoArr[1].src) {
		getPhoto()
	} else {
		goToSecondPiscumPhoto()
	}

	if (picsumPhotoArr.length > 0) {
		buttonLeft.style.display = 'flex'
	}
})

effectRadios.forEach(radio => {
	radio.addEventListener('change', () => {
		setEffect(radio.value)
	})
})

export function setEffect(radio) {
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
			cautchingFilterToOrderSummary('blur')
		})
	} else {
		blurRangeOption.style.display = 'none'
		blurRangecurrent.innerHTML = 1
		blurRange.value = 1
		loremPicsums.forEach(loremPicsum => {
			loremPicsum.removeAttribute('style')
		})
	}
	cautchingFilterToFooter(selectedEffect)
}
