import { cautchingChecksBoxesToMain } from '../main.js'
import { cautchingChecksBoxesToFooter } from './footer.js'

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
	cautchingChecksBoxesToMain(isCheckFront, isCheckBack)
	cautchingChecksBoxesToFooter(isCheckFront, isCheckBack)
}

export const cautchingPhotoToChoosingImprint = image => {
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
