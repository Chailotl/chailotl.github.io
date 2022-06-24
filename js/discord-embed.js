// Select elements
var author = document.getElementById('author text')
var title = document.getElementById('title text')
var description = document.getElementById('description')
var imageURL = document.getElementById('image url')
var redirectURL = document.getElementById('redirect url')

function copy () {
	var str = 'https://embed.chailotl.workers.dev/?'
	
	if (author.value) {
		str += 'a=' + author.value + '&'
	}
	if (title.value) {
		str += 't=' + title.value + '&'
	}
	if (description.value) {
		str += 'd=' + description.value + '&'
	}
	if (imageURL.value) {
		str += 'i=' + imageURL.value + '&'
	}
	if (redirectURL.value) {
		str += 'r=' + redirectURL.value + '&'
	}
	
	str = str.substring(0, str.length - 1)
	
	navigator.clipboard.writeText(str)
}
