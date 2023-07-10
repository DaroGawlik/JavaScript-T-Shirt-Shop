import { cautchingChecksBoxesToFooter } from './footer.js'

import { toggleFrontTshitInChoosingGraphic, toggleBackTshitInChoosingGraphic, setEffect } from './choosingGraphic.js'
import { cautchingChecksBoxesToOrderSummary } from './orderSummary.js'

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
	cautchingChecksBoxesToFooter(isCheckFront, isCheckBack)
	cautchingChecksBoxesToOrderSummary(isCheckFront, isCheckBack)

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
	setEffect(selectedValue)
}

export const cautchingPhotoToChoosingImprint = image => {
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
	toggleFrontTshitInChoosingGraphic(isCheckFront)
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
	toggleBackTshitInChoosingGraphic(isCheckBack)
}

checkFront.addEventListener('click', toggleFront)
checkBack.addEventListener('click', toggleBack)
checkBoth.addEventListener('click', toggleBoth)
