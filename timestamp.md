---
title: "Discord Timestamp Generator"
description: "Generates interactive timestamps that can be used in <span class='accent'>Discord</span>."
---

<link rel='stylesheet' href='/scss/zalgo.css'>
<style>
@media screen and (max-width: 42em) {
	input, select {
		display: block;
		margin-bottom: 8px;
		width: 100%;
		padding: 0.75rem;
		font-size: 0.9rem;
	}
}
	
@media screen and (min-width: 42em) and (max-width: 64em) {
	input, select {
		margin-top: 8px !important;
		padding: 0.6rem 0.2rem;
		font-size: 0.9rem;
	}
	
	btn {
		margin-top: 8px !important;
	}
}
	
@media screen and (min-width: 64em) {
	input, select {
		margin-top: 8px !important;
		padding: 0.75rem 0.2rem;
	}
	
	btn {
		margin-top: 8px !important;
	}
}
</style>

<div style='display: flex; justify-content: space-around; flex-wrap: wrap; margin-top: -8px;'>
<input id='time' type='datetime-local' name='time' oninput='update()'>
<select id='format' name='format'>
	<option value='t'>Short Time</option>
	<option value='T'>Long Time</option>
	<option value='d'>Short Date</option>
	<option value='D'>Long Date</option>
	<option value='f'>Short Date/Time</option>
	<option value='F'>Long Date/Time</option>
	<option value='R'>Relative Time</option>
</select>
<!--<p id='example'></p>-->
<button style='margin-bottom: 0' class="btn" type='button' onclick='copy()'>Copy to Clipboard</button>
</div>

<script src='/js/discord-timestamp.js'></script>
