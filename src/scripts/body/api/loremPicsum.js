import { cautchingPhotoToChoosingImprint } from '../choosingImprint.js'
import { cautchingPhotoToChoosingGraphic } from '../choosingGraphic.js'
import { cautchingPhotoToFooter } from '../footer.js'

export const picsumPhotoArr = []

export function getPhoto() {
	fetch('https://picsum.photos/500/300')
		.then(response => {
			const imageUrl = response.url
			const image = document.createElement('img')
			image.src = imageUrl
			image.alt = 'Lorem Picsum'
			cautchingPhotoToChoosingImprint(image)
			cautchingPhotoToFooter(image)
			cautchingPhotoToChoosingGraphic(image)
			deletePicsumPhotoInArr(image)
		})
		.catch(error => {
			console.error('Error:', error)
		})
}

export function goToSecondPiscumPhoto() {
	cautchingPhotoToChoosingImprint(picsumPhotoArr[1])
	cautchingPhotoToFooter(picsumPhotoArr[1])
	cautchingPhotoToChoosingGraphic(picsumPhotoArr[1])
}

export function backPicsumPhoto() {
	cautchingPhotoToChoosingImprint(picsumPhotoArr[0])
	cautchingPhotoToFooter(picsumPhotoArr[0])
	cautchingPhotoToChoosingGraphic(picsumPhotoArr[0])
}

function deletePicsumPhotoInArr(image) {
	picsumPhotoArr.push(image)
	if (picsumPhotoArr.length > 2) {
		picsumPhotoArr.shift()
	}
}
