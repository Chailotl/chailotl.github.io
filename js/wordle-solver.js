var known = document.getElementById('known')
var include = document.getElementById('include')
var exclude = document.getElementById('exclude')
var output = document.getElementById('output')

var wordles = []

fetch('/js/words.txt')
	.then(response => response.text())
	.then(text => wordles = text.split('\n'))

function update() {
	// Filter input
	known.value = known.value.toUpperCase().replace(/[^a-zA-Z _]/g, '').replace(' ', '_')
	include.value = include.value.toUpperCase().replace(/[^a-zA-Z]/g, '')
	exclude.value = exclude.value.toUpperCase().replace(/[^a-zA-Z]/g, '')
	
	// Check if empty
	if (known.value == ''  && include.value == '' && exclude.value == '') {
		output.innerText = ''
		return
	}
	
	var words = wordles.filter(word => {
		var str = known.value.toLowerCase()
		var value = true;
		for (var i = 0; i < str.length; ++i) {
			if (str[i] != '_' && word[i] != str[i]) {
				value = false
				break
			}
		}
		return value
	})
		.filter(word => {
			var str = include.value.toLowerCase()
			var value = true;
			[...str].forEach(char => {
				if (word.indexOf(char) == -1) {
					value = false
					return
				}
			})
			return value
		})
		.filter(word => {
		var str = exclude.value.toLowerCase()
			var value = true;
			[...str].forEach(char => {
				if (word.indexOf(char) >= 0) {
					value = false
					return
				}
			})
			return value
		})

	output.innerText = words.join(' ')
}
