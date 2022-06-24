---
title: "Discord Embed Generator"
description: "Generates an embeddable link that can be used in <span class='accent'>Discord</span>.<br>Use this tool <span class='accent'>at your own risk</span>."
---

<link rel='stylesheet' href='/scss/zalgo.css'>

<form>
	<label for='author text'>Author Text</label>
	<textarea id='author text' rows='1' name='author text'></textarea>
	
	<label for='title text'>Title Text</label>
	<textarea id='title text' rows='1' name='title text'></textarea>
	
	<label for='description'>Description</label>
	<textarea id='description' rows='3' name='description'></textarea>
	
	<label for='image url'>Image URL</label>
	<textarea id='image url' rows='1' name='image url'></textarea>
	
	<label for='redirect url'>Redirect URL</label>
	<textarea id='redirect url' rows='1' name='redirect url'></textarea>
</form>

<div style='width: 100%' class='center'>
	<button style='margin-bottom: 0' class='btn' type='button' onclick='copy()'>Copy to Clipboard</button>
</div>

<script src='/js/discord-embed.js'></script>
