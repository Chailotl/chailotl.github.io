// Select all elements
const input = document.getElementById('input')
const output = document.getElementById('output')
const container = document.getElementById('text-replacers')
let rules = document.getElementsByClassName('rule')
const clone = rules[0].cloneNode(true)

function copy() {
	output.select()
	output.setSelectionRange(0, 99999)
	document.execCommand('copy')
}

function update() {
	let text = input.value;
	let empty = false

	for (let rule of rules) {
		let find = rule.getElementsByClassName('find')[0].value
		let replace = rule.getElementsByClassName('replace')[0].value
		let regex = rule.getElementsByClassName('regex')[0].checked

		if (find == '' && replace == '') {
			if (empty) {
				rule.remove()
				continue
			}
			empty = true
		}

		if (regex) {
			find = new RegExp(find, 'g')
		}
		
		text = text.replaceAll(find, replace)
	}

	if (!empty) {
		container.appendChild(clone.cloneNode(true))
	}
	
	output.value = text
}
