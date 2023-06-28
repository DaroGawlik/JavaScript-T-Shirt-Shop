import '../styles/main.scss'
import ChoosingImprint from './views/ChoosingImprint.js'
import ChoosingGraphic from './views/ChoosingGraphic.js'

/// MAIN

///SPA MODULE
const navigateTo = url => {
	history.pushState(null, null, url)
	router()
}

const router = async () => {
	const routes = [
		{ path: '/ChoosingImprint', view: ChoosingImprint },
		{ path: '/ChoosingGraphic', view: ChoosingGraphic },
	]
	const potentialMatches = routes.map(route => {
		console.log(location.pathname)
		console.log(route.path)
		return {
			route: route,
			isMatch: location.pathname === route.path,
		}
	})

	let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch)

	if (!match) {
		match = {
			route: routes[0],
			isMatch: true,
		}
	}

	const view = new match.route.view()

	console.log(view)
}
/// FOOTER

window.addEventListener('popstate', router)
document.addEventListener('DOMContentLoaded', () => {
	document.body.addEventListener('click', e => {
		if (e.target.matches('[data-link]')) {
			e.preventDefault()
			navigateTo(e.target.href)
		}
	})
	router()
})
