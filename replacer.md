---
title: "Multi Text Replacer"
description: "Perform multiple <span class='accent'>text replacements</span> at a time."
---

<link rel='stylesheet' href='/scss/zalgo.css'>
<style>
	.text-replacer {
		display: flex;
		gap: 16px;
	}

	.text-replacer input {
		margin: 16px 0 !important;
	}

 	.text-replacer label {
		white-space: nowrap;
	}
</style>

<form>
	<textarea id='input' rows='5' autofocus placeholder='Type text here...' oninput='update()'></textarea>
	<div>
		<div class='text-replacer'>
			<input class='find' type='text' placeholder='Find' oninput='update()'>
			<input class='replace' type='text' placeholder='Replace' oninput='update()'>
			<label for='regex'>Use RegEx</label>
			<input class='regex' type='checkbox' name='regex' oninput='update()'>
		</div>
	</div>
	<textarea id='output' rows='5' readonly placeholder='Output here...'></textarea>
</form>

<div style='width: 100%' class='center'>
	<button style='margin-bottom: 0' class='btn' type='button' onclick='copy()'>Copy to Clipboard</button>
</div>

<script src='/js/text-replacer.js'></script>
