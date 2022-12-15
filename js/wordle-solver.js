var include = document.getElementById('include')
var exclude = document.getElementById('exclude')
var output = document.getElementById('output')

var wordles = []

fetch('/js/words.txt')
	.then(response => response.text())
	.then(text => wordles = text.split('\n'))

function update() {
	if (include.value == '' && exclude.value == '') {
		output.innerText = ''
		return
	}
	
	var words = wordles.filter(word => {
		var value = true;
		[...include.value.toLowerCase()].forEach(char => {
			if (word.indexOf(char) == -1) {
				value = false
				return
			}
		})
		return value
	})
		.filter(word => {
			var value = true;
			[...exclude.value.toLowerCase()].forEach(char => {
				if (word.indexOf(char) >= 0) {
					value = false
					return
				}
			})
			return value
		})

	output.innerText = words.join(' ')
}
