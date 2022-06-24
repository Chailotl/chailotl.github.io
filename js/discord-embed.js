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
		str += 'w=' + website.value + '&'
	}
	if (author.value) {
		str += 'a=' + author.value + '&'
	}
	if (title.value) {
		str += 't=' + title.value + '&'
	}
	if (description.value) {
		str += 'd=' + description.value + '&'
	}
	if (color.value) {
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
}
