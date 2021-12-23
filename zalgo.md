---
title: "Z̥̖̩᷃᷁ͅa͇̭͡l̮᷂̕g̢̻̎͐o̴̢͖̬ Text Corrupter"
description: "Dresses up text with combining characters to make it look <span class='accent'>corrupted</span>.<br>The term <span class='accent'>zalgo</span> is coined from <a href='http://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags/1732454#1732454'>this StackOverflow post</a>."
---

<link rel='stylesheet' href='/scss/zalgo.css'>

<form>
	<textarea id='input' rows='5' autofocus placeholder='Type text here...' oninput='update()'></textarea>
	<div id='sliders'>
		<div>
			<label for='fuck up'>Up amount</label>
			<input id='fuck up' type='range' name='fuck up' value='4' min='0' max='30' oninput='update()'>
		</div>
		<div>
			<label for='fuck mid'>Middle amount</label>
			<input id='fuck mid' type='range' name='fuck mid' value='2' min='0' max='24' oninput='update()'>
		</div>
		<div>
			<label for='fuck down'>Down amount</label>
			<input id='fuck down' type='range' name='fuck down' value='6' min='0' max='30' oninput='update()'>
		</div>
		<div>
			<label for='fuckiness'>Sparsity</label>
			<input id='fuckiness' type='range' name='fuckiness' value='0.5' min='0' max='1' step='0.01' oninput='update()'>
		</div>
		<div>
			<label for='start fuck'>Start point (%)</label>
			<input id='start fuck' type='range' name='start fuck' value='0' min='0' max='1' step='0.01' oninput='update()'>
		</div>
		<div>
			<label for='end fuck'>End point (%)</label>
			<input id='end fuck' type='range' name='end fuck' value='0' min='0' max='1' step='0.01' oninput='update()'>
		</div>
		<div style='opacity: 0.5'>
			<label for='power fuck'>Exponent</label>
			<input id='power fuck' type='range' name='power fuck' value='1' min='1' max='10' step='0.01' oninput='update()'>
		</div>
	</div>
	<textarea id='output' rows='5' readonly placeholder='Summon zalgo here...'></textarea>
</form>

<div style='width: 100%' class='center'>
	<button style='margin-bottom: 0' class='btn' type='button' onclick='copy()'>Copy to Clipboard</button>
</div>

<script src='/js/zalgo.js'></script>
