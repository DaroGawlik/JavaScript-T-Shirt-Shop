import AbstractView from './AbstractView.js'

export default class ChoosingGraphic extends AbstractView {
	constructor() {
		super()
		this.setTitle('Choosing Graphic')
	}

	async getHtml() {
		return '<h1>Choosing Graphic</h1>'
	}
}
