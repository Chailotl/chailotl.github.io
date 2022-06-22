---
title: "Unicode Text Converter"
description: "Convert plain text into obscure <span class='accent'>Unicode</span> characters."
---

<link rel='stylesheet' href='/scss/zalgo.css'>
<style>
	td {
		padding: 0.25rem !important;
		border: 0 !important;
	}
</style>

<textarea id='input' rows='1' autofocus placeholder='Type text here...' oninput='update()'></textarea>

<table>
	<tbody id='table'></tbody>
</table>

<script src='/js/unicode-converter.js'></script>
