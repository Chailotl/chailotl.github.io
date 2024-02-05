// Select all elements
var input = document.getElementById('input')
var output = document.getElementById('output')

function copy() {
	output.select()
	output.setSelectionRange(0, 99999)
	document.execCommand('copy')
}

function update() {
  var edit = '';
  
	output.value = edit
}
