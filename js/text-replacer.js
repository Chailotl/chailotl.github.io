// Select all elements
const input = document.getElementById('input')
const output = document.getElementById('output')
const find = document.getElementById('find')
const replace = document.getElementById('replace')

function copy() {
	output.select()
	output.setSelectionRange(0, 99999)
	document.execCommand('copy')
}

function update() {
	let text = input.value;

	text = text.replaceAll(find.value, replace.value)
	
	output.value = text
}
