
import { cautchingShippingToFooter } from './footer'
import { orderObject } from './orderObject'
const shippingSelect = document.querySelectorAll('#shippingSelect input')
const buttonNext = document.querySelector('.nav__button--next')

let val
let el
let blurAction

let validName = false
let validSurname = false

let validPhone = false
let validEmail = false

let validCity = false
let validCityShip = false
let validStreet = false
let validStreetShip = false
let validHouse = false
let validHouseShip = false
let validZip = false
let validZipShip = false

function checkName() {
	const val = document.getElementById('name')
	const isValid = val.value.length >= 2 && /^[A-Za-z]+$/.test(val.value)

	validName = isValid
	val.style.borderColor = isValid ? '' : 'red'
	validation()
	orderObject.userData.name = val.value
}

function checkSurname() {
	const val = document.getElementById('surname')
	const isValid = val.value.length >= 3 && /^[A-Za-z]+$/.test(val.value)

	validSurname = isValid
	val.style.borderColor = isValid ? '' : 'red'
	validation()
	orderObject.userData.surname = val.value
}
function checkNumber() {
	const val = document.getElementById('phoneNumber')
	const isValid = val.value === '' || /^\d{9,}$/.test(val.value)

	validPhone = isValid
	val.style.borderColor = isValid ? '' : 'red'
	validation()
	orderObject.userData.phoneNumber = val.value
}
function checkEmail() {
	const val = document.getElementById('email')
	const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.value)

	validEmail = isValid
	val.style.borderColor = isValid ? '' : 'red'
	validation()
	orderObject.userData.email = val.value
}

document.querySelectorAll('.blurAction').forEach(input =>
	input.addEventListener('blur', e => {
		switch (e.target.id) {
			case 'name':
				checkName()
				break
			case 'surname':
				checkSurname()
				break
			case 'phoneNumber':
				checkNumber()
				break
			case 'email':
				checkEmail()
				break
			default:
				break
		}
	})
)

function checkcity() {
	const val = document.getElementById('city')
	const isValid = val.value.length >= 3 && /^[A-Za-z]+$/.test(val.value)
	validCity = isValid
	val.style.borderColor = isValid ? '' : 'red'

	if (document.querySelector('.addresses__userAddressesShipping').style.display == 'block') {
		const valShi = document.getElementById('cityShipping')
		const isValidShi = valShi.value.length >= 3 && /^[A-Za-z]+$/.test(valShi.value)
		validCityShip = isValidShi
		valShi.style.borderColor = isValidShi ? '' : 'red'
		orderObject.userShipping.city = valShi.value
	}
	validation()
	orderObject.userAddress.city = val.value
}

function checkStreet() {
	const val = document.getElementById('street')
	const isValid = val.value.length >= 3 && /^[A-Za-z0-9\-\/]+$/.test(val.value)
	validStreet = isValid
	val.style.borderColor = isValid ? '' : 'red'

	if (document.querySelector('.addresses__userAddressesShipping').style.display == 'block') {
		const valShi = document.getElementById('streetShipping')
		const isValidShi = valShi.value.length >= 3 && /^[A-Za-z0-9\-\/]+$/.test(valShi.value)
		validStreetShip = isValidShi
		valShi.style.borderColor = isValidShi ? '' : 'red'
		orderObject.userShipping.street = valShi.value
	}
	validation()
	orderObject.userAddress.street = val.value
}
function checkHouse() {
	const val = document.getElementById('house')
	const isValid = val.value.length > 0 && /^[A-Za-z0-9\-\/]+$/.test(val.value)
	validHouse = isValid
	val.style.borderColor = isValid ? '' : 'red'

	if (document.querySelector('.addresses__userAddressesShipping').style.display == 'block') {
		const valShi = document.getElementById('houseShipping')
		const isValidShi = valShi.value.length > 0 && /^[A-Za-z0-9\-\/]+$/.test(valShi.value)
		validHouseShip = isValidShi
		valShi.style.borderColor = isValidShi ? '' : 'red'
		orderObject.userShipping.house = valShi.value
	}
	validation()
	orderObject.userAddress.house = val.value
}
function checkZip() {
	const val = document.getElementById('zip')
	const isValid = val.value.length > 4 && /^[0-9\-]+$/.test(val.value)
	validZip = isValid
	val.style.borderColor = isValid ? '' : 'red'

	if (document.querySelector('.addresses__userAddressesShipping').style.display == 'block') {
		const valShi = document.getElementById('zipShipping')
		const isValidShi = valShi.value.length > 4 && /^[0-9\-]+$/.test(valShi.value)
		validZipShip = isValidShi
		valShi.style.borderColor = isValidShi ? '' : 'red'
		orderObject.userShipping.zip = valShi.value
	}
	validation()
	orderObject.userAddress.zip = val.value
}

document.querySelectorAll('.blurAction').forEach(input =>
	input.addEventListener('blur', e => {
		switch (e.target.id) {
			case 'city':
			case 'cityShipping':
				checkcity()
				break
			case 'street':
			case 'streetShipping':
				checkStreet()
				break
			case 'house':
			case 'houseShipping':
				checkHouse()
				break
			case 'zip':
			case 'zipShipping':
				checkZip()
				break
			default:
				break
		}
	})
)

shippingSelect.forEach(radio => {
	radio.addEventListener('change', function () {
		const userShipping = document.querySelector('.addresses__userAddressesShipping')
		const checkbox = document.querySelector('#sameAddress')
		const isChecked = document.querySelector('#sameAddress input')

		const sourceInputs = document.querySelectorAll('.source-input')
		const targetInputs = document.querySelectorAll('.target-input')

		const shippingSelect = this.value
		if (shippingSelect == 'pickup') {
			isChecked.checked = false
			userShipping.style.display = 'none'
			checkbox.style.display = 'none'
			targetInputs.forEach(targetInput => {
				targetInput.value = ''
				targetInput.removeAttribute('style')
			})
			resetShippingDataValidity()
		}
		if (shippingSelect == 'curier') {
			userShipping.style.display = 'block'
			checkbox.style.display = 'block'
		}

		if (shippingSelect == 'sameAddress' && isChecked.checked) {
			sourceInputs.forEach((input, index) => {
				targetInputs[index].value = input.value
				checkcity()
				checkStreet()
				checkHouse()
				checkZip()
			})
		}
		validation()
		cautchingShippingToFooter(shippingSelect)
	})
})

function resetShippingDataValidity() {
	;[validCityShip, validStreetShip, validHouseShip, validZipShip] = [false, false, false, false]
	orderObject.userShipping = {
		city: '',
		street: '',
		house: '',
		zip: '',
	}
}

export function validation() {
	const isShippingAddressDisplayed =
		document.querySelector('.addresses__userAddressesShipping').style.display === 'block'

	const isBasicDataValid =
		validName && validSurname && validPhone && validEmail && validCity && validStreet && validHouse && validZip

	const isShippingDataValid =
		isShippingAddressDisplayed && validCityShip && validStreetShip && validHouseShip && validZipShip

	buttonNext.disabled = !(isBasicDataValid && (!isShippingAddressDisplayed || isShippingDataValid))
}
