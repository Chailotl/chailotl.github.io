// Read url parameters
var urlParams = new URLSearchParams(window.location.search);
var hour = urlParams.get('hour');
var minute = urlParams.get('minute');
var text = urlParams.get('text');

// Check if we should show timer or ask for one
if (hour === null) {
	document.getElementById('form').style.display = 'initial';
	document.getElementById('timer').style.display = 'none';
}

// Set default values
if (minute === null) { minute = 0; }
if (text === null) { text = 'LIVE' }

// Get inputs, verify, and send user to url
function openURL() {
	var time = document.getElementById('time').value;
	if (time == '') {
		alert('Please input a time');
	} else {
		time = time.split(':');
		window.location = `https://chailotl.github.io/countdown?hour=${time[0]}&minute=${time[1]}&text=${document.getElementById('text').value}`;
	}
}

function pad(num) {
	return ('0' + parseInt(num)).substr(-2);
}

// Set the date we're counting down to
var start = new Date();
start.setHours(hour, minute, 0);

// Update the count down every 0.1 seconds
var x = setInterval(function() {
	var now = new Date().getTime();
	var distance = start - now;

	// Time calculations for minutes and seconds
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result
	var str = minutes + ':' + pad(seconds);
	if (hours > 0) {
		str = hours + ':' + pad(minutes) + ':' + pad(seconds);
	}
	document.getElementById('timer').innerHTML = str;

	// If the count down is over, write some text 
	if (distance < 0) {
		clearInterval(x);
		document.getElementById('timer').innerHTML = text;
	}
}, 100);
