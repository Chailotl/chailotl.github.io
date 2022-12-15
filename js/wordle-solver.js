var include = document.getElementById('include')
var exclude = document.getElementById('exclude')
var output = document.getElementById('output')

var wordles = [
	'apple',
	'night',
	'place',
	'farce',
	'shame'
]

function update() {
	var words = wordles.filter(word => {
		var value = true;
		[...include.value].forEach(char => {
			if (word.indexOf(char) == -1) {
				value = false
				return
			}
		})
		return value
	})
		.filter(word => {
			var value = true;
			[...exclude.value].forEach(char => {
				if (word.indexOf(char) >= 0) {
					value = false
					return
				}
			})
			return value
		})

	output.innerText = words.join(' ')
}
