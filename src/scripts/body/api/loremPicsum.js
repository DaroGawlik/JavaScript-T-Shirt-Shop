import { cautchingPhotoToChoosingImprint } from '../choosingImprint.js'

export function getPhoto() {
	fetch('https://picsum.photos/500/300')
		.then(response => response.blob())
		.then(blob => {
			const imageUrl = URL.createObjectURL(blob)
			const image = document.createElement('img')
			image.src = imageUrl
			image.alt = 'Lorem Picsum'
			cautchingPhotoToChoosingImprint(image)
		})
		.catch(error => {
			console.error('Error:', error)
		})
}
