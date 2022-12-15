---
title: "Wordle Solver"
description: "Quickly and easily find words for <span class='accent'>Wordle</span>."
---

<link rel='stylesheet' href='/scss/zalgo.css'>

<form>
	<label for='include'>Known Letters</label>
	<textarea id='known' rows='1' maxlength='5' oninput='update()'></textarea>
	
	<label for='include'>Include Letters</label>
	<textarea id='include' rows='1' oninput='update()'></textarea>
	
	<label for='exclude'>Exclude Letters</label>
	<textarea id='exclude' rows='1' oninput='update()'></textarea>
</form>

<div id='output'></div>

<script src='/js/wordle-solver.js'></script>
