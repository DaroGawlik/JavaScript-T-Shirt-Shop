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

export function cautchingChecksBoxesToOrderSummary(isCheckFront, isCheckBack) {
	const placementText = isCheckFront && isCheckBack ? 'Both' : isCheckFront ? 'Front' : isCheckBack ? 'Back' : ''
	placement.innerHTML = placementText
	orderObject.picture.placement = placementText
}

export function cautchingPhotoToOrderSummary(image) {
	const imageUrl = image.src
	const id = imageUrl.split('/id/')[1].split('/')[0]
	picture.innerHTML = 'ID ' + id
	orderObject.picture.id = id
}
export function cautchingFilterToOrderSummary(selectedEffect) {
	const blurRange = document.getElementById('blurRange')
	const filterSelected =
		selectedEffect === 'blur'
			? selectedEffect.charAt(0).toUpperCase() + selectedEffect.slice(1) + ' ' + blurRange.value
			: selectedEffect.charAt(0).toUpperCase() + selectedEffect.slice(1)

	filter.innerHTML = filterSelected
	orderObject.picture.filter = filterSelected
}

export function cautchingUserDataToOrderSummary() {
	userDataSourceInputs.forEach((input, index) => {
		targetInputs[index].innerHTML = input.value
	})
	cautchingAddressesToOrderSummary()
}
function cautchingAddressesToOrderSummary() {
	addressesSourceInputs.forEach((input, index) => {
		addressesTargetInputs[index].innerHTML = input.value
	})
}
export function cautchingShippingToOrderSummary() {
	const summaryShipping = document.querySelector('.userData__userAddressShipping')
	if (!document.querySelector('#shippingSelect input[value=curier]').checked) {
		summaryShipping.style.display = 'none'
		return
	} else {
		summaryShipping.style.display = 'block'
		shippingSourceInputs.forEach((input, index) => {
			shippingTargetInputs[index].innerHTML = input.value
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
