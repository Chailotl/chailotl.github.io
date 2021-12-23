// Select elements
var time = document.getElementById('time')
var format = document.getElementById('format')
var example = document.getElementById('example')

var date

// Day and month names
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function pad(num) {
	return ('0' + parseInt(num)).substr(-2);
}

function toTwelveHour() {
	var num = date.getHours() % 12
	return num == 0 ? 12 : num
}

function ampm() {
	return date.getHours() < 12 ? 'AM' : 'PM'
}

function shortTime() {
	return toTwelveHour() + ':' + pad(date.getMinutes()) + ' ' + ampm()
}

function longDate() {
	return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
}

function copy() {
	navigator.clipboard.writeText('<t:' + (Date.parse(time.value) / 1000) + ':' + format.value + '>');
}

function update() {
	date = new Date(time.value)
	var str = ''

	switch (format.value) {
		case 't':
			str = shortTime()
			break
		case 'T':
			str = toTwelveHour() + ':' + pad(date.getMinutes()) + ':' + pad(date.getSeconds()) + ' ' + ampm()
			break
		case 'd':
			str = pad(date.getMonth() + 1) + '/' + pad(date.getDate()) + '/' + date.getFullYear()
			break
		case 'D':
			str = longDate()
			break
		case 'f':
			str = longDate() + ' ' + shortTime()
			break
		case 'F':
			str = days[date.getDay()] + ', ' + longDate() + ' ' + shortTime()
			break
		case 'R':
			str = ''
			break
	}

	example.innerHTML = str
}
