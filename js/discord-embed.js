// Select elements
var author = document.getElementById('author text')
var title = document.getElementById('title text')
var description = document.getElementById('description')
var imageURL = document.getElementById('image url')
var redirectURL = document.getElementById('redirect url')

function copy () {
	var str = 'https://chailotl.github.io/embed/?'
	
	if (author.value) {
		str += 'author=' + author.value + '&'
	}
	if (title.value) {
		str += 'title=' + title.value + '&'
	}
	if (description.value) {
		str += 'desc=' + description.value + '&'
	}
	if (imageURL.value) {
		str += 'image=' + imageURL.value + '&'
	}
	if (redirectURL.value) {
		str += 'redirect=' + redirectURL.value + '&'
	}
	
	str = str.substring(0, str.length - 1)
	
	navigator.clipboard.writeText(str)
}
