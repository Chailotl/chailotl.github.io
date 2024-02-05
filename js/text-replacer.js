// Select all elements
const input = document.getElementById('input')
const output = document.getElementById('output')
let replacers = document.getElementsByClassName('text-replacer')
const clone = replacers[0].cloneNode(true)

function copy() {
	output.select()
	output.setSelectionRange(0, 99999)
	document.execCommand('copy')
}

function update() {
	let text = input.value;

	for (let replacer of replacers) {
		let find = replacer.getElementsByClassName('find')[0].value
		let replace = replacer.getElementsByClassName('replace')[0].value
		let regex = replacer.getElementsByClassName('regex')[0].checked

		if (regex) {
			find = new RegExp(find, 'g')
		}
		
		text = text.replaceAll(find, replace)
	}
	
	output.value = text
}
