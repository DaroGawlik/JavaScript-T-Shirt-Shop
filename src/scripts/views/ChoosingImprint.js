import AbstractView from './AbstractView.js'

export default class ChoosingImprint extends AbstractView {
	constructor() {
		super()
		this.setTitle('Choosing Imprint')
	}

	async getHtml() {
		return '<h1>Choosing Imprint</h1>'
	}
}
