import '../styles/body.scss'

import './body/choosingImprint.js'
import '../scripts/body/objects/Tshirt.js'
import './body/nav.js'
import './body/footer.js'
import { getPhoto } from './body/api/loremPicsum'

import { Tshirt } from './body/objects/Tshirt'

let isCheckFront
let isCheckBack
let currentPrice

const orderOfTshirtsArr = []

getPhoto()

export function cautchingChecksBoxesToMain(isCheckFront, isCheckBack) {
	isCheckFront = isCheckFront
	isCheckBack = isCheckBack
	currentPrice = (isCheckFront + isCheckBack) * 10
}
