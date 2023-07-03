export class Tshirt {
	constructor(isCheckFront, isCheckBack) {
		this.front = isCheckFront
		this.back = isCheckBack
	}

	updateFront(isCheckFront) {
		this.front = isCheckFront
	}
	updateBack(isCheckBack) {
		this.back = isCheckBack
	}
}
