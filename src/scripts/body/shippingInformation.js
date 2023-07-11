import { cautchingShippingToFooter } from './footer'
import { orderObject } from './orderObject'
const shippingSelect = document.querySelectorAll('#shippingSelect input')
const buttonNext = document.querySelector('.nav__button--next')

let blurAction

const checkInput = (input, isValidFn) => {
	const isValid = isValidFn(input.value)

	if (isValid) {
		input.style.borderColor = ''
	} else {
		input.style.borderColor = 'red'
	}
	return isValid
}
const validationData = {
	name: false,
	surname: false,
	phoneNumber: true,
	email: false,
	city: false,
	street: false,
	house: false,
	zip: false,
}
const shippingData = {
	cityShipping: false,
	streetShipping: false,
	houseShipping: false,
	zipShipping: false,
}

const validateAndAssignValue = (inputId, isValidFn, orderWhatData, dataProperty, objectWithValids) => {
	const input = document.querySelector(`#${inputId}`)
	const isValid = checkInput(input, isValidFn)
	orderObject[orderWhatData][dataProperty] = input.value
	objectWithValids[inputId] = isValid
	validation()
}

const checkName = () => {
	validateAndAssignValue(
		'name',
		value => value.length >= 2 && /^[A-Za-z]+$/.test(value),
		'userData',
		'name',
		validationData
	)
}

const checkSurname = () => {
	validateAndAssignValue(
		'surname',
		value => value.length >= 3 && /^[A-Za-z]+$/.test(value),
		'userData',
		'surname',
		validationData
	)
}

const checkNumber = () => {
	validateAndAssignValue(
		'phoneNumber',
		value => value === '' || /^\d{9,}$/.test(value),
		'userData',
		'phoneNumber',
		validationData
	)
}

const checkEmail = () => {
	validateAndAssignValue(
		'email',
		value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
		'userData',
		'email',
		validationData
	)
}

const checkCity = () => {
	validateAndAssignValue(
		'city',
		value => value.length >= 3 && /^[A-Za-z]+$/.test(value),
		'userAddress',
		'city',
		validationData
	)

	if (document.querySelector('.addresses__userAddressesShipping').style.display == 'block') {
		validateAndAssignValue(
			'cityShipping',
			value => value.length >= 3 && /^[A-Za-z]+$/.test(value),
			'userShipping',
			'cityShip',
			shippingData
		)
	}
}

const checkStreet = () => {
	validateAndAssignValue(
		'street',
		value => value.length >= 3 && /^[A-Za-z0-9\-\/]+$/.test(value),
		'userAddress',
		'street',
		validationData
	)

	if (document.querySelector('.addresses__userAddressesShipping').style.display == 'block') {
		validateAndAssignValue(
			'streetShipping',
			value => value.length >= 3 && /^[A-Za-z0-9\-\/]+$/.test(value),
			'userShipping',
			'streetShip',
			shippingData
		)
	}
}

const checkHouse = () => {
	validateAndAssignValue(
		'house',
		value => value.length > 0 && /^[A-Za-z0-9\-\/]+$/.test(value),
		'userAddress',
		'house',
		validationData
	)

	if (document.querySelector('.addresses__userAddressesShipping').style.display == 'block') {
		validateAndAssignValue(
			'houseShipping',
			value => value.length > 0 && /^[A-Za-z0-9\-\/]+$/.test(value),
			'userShipping',
			'houseShip',
			shippingData
		)
	}
}

const checkZip = () => {
	validateAndAssignValue(
		'zip',
		value => value.length > 4 && /^[0-9\-]+$/.test(value),
		'userAddress',
		'zip',
		validationData
	)

	if (document.querySelector('.addresses__userAddressesShipping').style.display == 'block') {
		validateAndAssignValue(
			'zipShipping',
			value => value.length > 4 && /^[0-9\-]+$/.test(value),
			'userShipping',
			'zipShip',
			shippingData
		)
	}
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
			case 'city':
			case 'cityShipping':
				checkCity()
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
				checkCity()
				checkStreet()
				checkHouse()
				checkZip()
			})
		}
		validation()
		cautchingShippingToFooter(shippingSelect)
	})
})

const resetShippingDataValidity = () => {
	Object.keys(shippingData).forEach(key => {
		shippingData[key] = false
	})
	orderObject.userShipping = {
		cityShip: '',
		streetShip: '',
		houseShip: '',
		zipShip: '',
	}
}

export const validation = () => {
	const isShippingAddressDisplayed =
		document.querySelector('.addresses__userAddressesShipping').style.display === 'block'

	const isBasicDataValid = Object.values(validationData).every(value => value === true)
	const isShippingDataValid = Object.values(shippingData).every(value => value === true)

	buttonNext.disabled = !(isBasicDataValid && (!isShippingAddressDisplayed || isShippingDataValid))
}
