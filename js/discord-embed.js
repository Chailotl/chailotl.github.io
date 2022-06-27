// Select elements
var website = document.getElementById('website')
var author = document.getElementById('author')
var title = document.getElementById('title')
var description = document.getElementById('description')
var color = document.getElementById('color')
var imageURL = document.getElementById('image url')
var redirectURL = document.getElementById('redirect url')

function copy () {
	var str = 'https://embed.chailotl.workers.dev/?'
	
	if (website.value) {
		str += 'w=' + encodeURI(website.value) + '&'
	}
	if (author.value) {
		str += 'a=' + encodeURI(author.value) + '&'
	}
	if (title.value) {
		str += 't=' + encodeURI(title.value) + '&'
	}
	if (description.value) {
		str += 'd=' + encodeURI(description.value) + '&'
	}
	if (color.value && color.value != '#000000') {
		str += 'c=' + color.value.substring(1) + '&'
	}
	if (imageURL.value) {
		str += 'i=' + encodeURI(imageURL.value) + '&'
	}
	if (redirectURL.value) {
		str += 'r=' + encodeURI(redirectURL.value) + '&'
	}
	
	str = str.substring(0, str.length - 1)
	
	navigator.clipboard.writeText(str)
	
	console.log('https://embed.chailotl.workers.dev/?z=' + LZString.compressToEncodedURIComponent(str.substring(36)))
}
