// Set the date we're counting up from
var start = new Date();

function pad(num) {
	return ('0' + parseInt(num)).substr(-2);
}

// Update the count down every 0.1 second
var x = setInterval(function() {
	var now = new Date().getTime();
	var distance = now - start;

	// Time calculations for minutes and seconds
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result
	var str = minutes + ':' + pad(seconds);
	if (hours > 0) {
		str = hours + ':' + pad(minutes) + ':' + pad(seconds);
	}
	document.getElementById('time').innerHTML = str;
}, 100);
