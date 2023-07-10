import { changeButtonNextName, buttonPrevDisabled, buttonNextDisabled } from './nav'
import { orderObject } from './orderObject'

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

export function cautchingChecksBoxesToOrderSummary(isCheckFront, isCheckBack) {
	const placementText = isCheckFront && isCheckBack ? 'Both' : isCheckFront ? 'Front' : isCheckBack ? 'Back' : ''
	if (placementTextGlobal !== placementText) {
		document.querySelector('.main__wrapper--summary input[value=placementConfirmed]').checked = false
	}
	placementTextGlobal = placementText

	placement.innerHTML = placementText
	orderObject.picture.placement = placementText
}

export function cautchingPhotoToOrderSummary(image) {
	if (imageUrlGlobal !== image.src) {
		document.querySelector('.main__wrapper--summary input[value=pictureConfirmed]').checked = false
	}

	imageUrlGlobal = image.src
	const id = imageUrlGlobal.match(/\/id\/(\d+)\//)[1]
	picture.innerHTML = 'ID ' + id
	orderObject.picture.id = id
}

export function cautchingFilterToOrderSummary(selectedEffect) {
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
	orderObject.picture.filter = filterSelected
}

export function cautchingUserDataToOrderSummary() {
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

export function cautchingShippingToOrderSummary() {
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
	changeButtonNextName(currentIndex)
	buttonPrevDisabled()
	buttonNextDisabled()
}

checkboxes.forEach(checkbox => {
	checkbox.addEventListener('change', confirmOrder)
})

export function confirmOrder() {
	let areAllChecked
	if (!document.querySelector('#shippingSelect input[value=curier]').checked) {
		const firstFiveCheckboxes = Array.from(checkboxes).slice(0, 5)
		areAllChecked = firstFiveCheckboxes.every(checkbox => checkbox.checked)
	} else {
		areAllChecked = Array.from(checkboxes).every(checkbox => checkbox.checked)
	}

	buttonNext.disabled = !areAllChecked
}
