// Select all elements
const input = document.getElementById('input')
const output = document.getElementById('output')
let replacers = document.getElementsByClassName('text-replacer')

function copy() {
	output.select()
	output.setSelectionRange(0, 99999)
	document.execCommand('copy')
}

function update() {
	let text = input.value;

	for (let replacer of replacers) {
		let find = replacer.getElementsByClassName('find')[0]
		let replace = replacer.getElementsByClassName('replace')[0]
		let regex = replacer.getElementsByClassName('regex')[0]
		
		text = text.replaceAll(find.value, replace.value)
	}
	
	output.value = text
}
