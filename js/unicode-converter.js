// Select all elements
var input = document.getElementById('input')
var outputs = []

['circled'].forEach((item) =>
{
	outputs[item] = document.getElementById(item)
})

function update() {
	outputs.forEach((item) =>
	{
		item.value = input.value
	})
}
