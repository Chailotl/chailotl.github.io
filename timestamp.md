---
title: "Discord Timestamp Generator"
description: "Generates interactive timestamps that can be used in <span class='accent'>Discord</span>."
---

<link rel='stylesheet' href='/scss/zalgo.css'>

<input id='time' type='datetime-local' name='time' oninput='update()'>
<select id='format' name='format' onchange='update()'>
	<option value='t'>Short Time</option>
	<option value='T'>Long Time</option>
	<option value='d'>Short Date</option>
	<option value='D'>Long Date</option>
	<option value='f'>Short Date/Time</option>
	<option value='F'>Long Date/Time</option>
	<option value='R'>Relative Time</option>
</select>
<p id='example'></p>
<button style='margin-bottom: 0' class="btn" type='button' onclick='copy()'>Copy to Clipboard</button>

<script src='/js/discord-timestamp.js'></script>
