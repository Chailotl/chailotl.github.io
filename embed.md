---
title: "Discord Embed Generator"
description: "Generates an embeddable link that can be used in <span class='accent'>Discord</span>.<br>Use this tool <span class='accent'>at your own risk</span>."
---

<link rel='stylesheet' href='/scss/zalgo.css'>

<form>
	<label for='author text'>Author Text</label>
	<input id='author text' type='text' name='author text'>
	
	<label for='title text'>Title Text</label>
	<input id='title text' type='text' name='title text'>
</form>

<div style='width: 100%' class='center'>
	<button style='margin-bottom: 0' class='btn' type='button' onclick='copy()'>Copy to Clipboard</button>
</div>

<script src='/js/discord-embed.js'></script>
