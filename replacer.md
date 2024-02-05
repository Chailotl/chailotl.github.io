---
title: "Multi Text Replacer"
description: "Perform multiple <span class='accent'>text replacements</span> at a time."
---

<link rel='stylesheet' href='/scss/zalgo.css'>

<form>
	<textarea id='input' rows='5' autofocus placeholder='Type text here...' oninput='update()'></textarea>
	<div id='text-replacers'>
		<div>
			<input class='find' type='text' placeholder='Find' oninput='update()'>
			<input class='replace' type='text' placeholder='Replace' oninput='update()'>
		</div>
	</div>
	<textarea id='output' rows='5' readonly placeholder='Output here...'></textarea>
</form>

<div style='width: 100%' class='center'>
	<button style='margin-bottom: 0' class='btn' type='button' onclick='copy()'>Copy to Clipboard</button>
</div>

<script src='/js/text-replacer.js'></script>
