---
title: "Discord Timestamp Generator"
description: "Generates dynamic timestamps that can be used in <span class='accent'>Discord</span>."
---

<link rel='stylesheet' href='/scss/zalgo.css'>
<style>
@media screen and (max-width: 42em) {
	.js-Dropdown {
		width: 100% !important;
	}
	
	.js-Dropdown-title:after {
		right: 1.05em !important;
	}
	
	.js-Dropdown-list {
		font-size: 0.9rem !important;
	}
	
	.js-Dropdown-list li {
		padding: 0.375em 0.75em !important;
	}
	
	input, select, .js-Dropdown-title {
		display: block;
		width: 100%;
		padding: 0.75rem;
		font-size: 0.9rem !important;
	}
}
	
@media screen and (min-width: 42em) and (max-width: 64em) {
	.js-Dropdown {
		width: 16em !important;
	}
	
	.js-Dropdown-list {
		font-size: 0.9rem !important;
	}
	
	input, select, .js-Dropdown-title {
		padding: 0.6rem 0;
		font-size: 0.9rem !important;
	}
}
	
@media screen and (min-width: 64em) {
	input, select, .js-Dropdown-title {
		padding: 0.75rem 0;
	}
}

input, select, .btn, .js-Dropdown {
	margin-top: 16px !important;
}

.js-Dropdown {
	position: relative;
	width: 20em;
}
.js-Dropdown-title {
	position: relative;
	width: 100%;
	height: 100%;
	text-align: left;
}
.js-Dropdown-title:after {
  border-color: #a69e93 transparent transparent transparent;
  border-style: solid;
  border-width: 10px 8px;
  content: '';
  display: block;
  height: 0;
  position: absolute;
  right: 0.3em;
  top: 45%;
  width: 0;
}
.js-Dropdown-list {
	color: #bfc0c0;
  background: #2a2c2d;
  border-left: 1px solid #555657;
  border-right: 1px solid #555657;
  box-sizing: border-box;
  display: none;
  height: 0;
  list-style: none;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
  transition: 0.2s linear;
  width: 100%;
  z-index: 999;
}
.js-Dropdown-list.is-open {
	display: block;
	height: auto;
	opacity: 1;
}
.js-Dropdown-list li {
	border-bottom: 1px solid #555657;
	cursor: pointer;
	padding: 0.15em;
}
.js-Dropdown-list li:hover {
	background-color: #383a3b;
}
.js-Dropdown-list li.is-selected {
	background-color: #464849;
}
.js-Dropdown-optgroup {
  border-bottom: 1px solid #555657;
  color: #555657;
  cursor: default;
  padding: 1em 0.5em;
  text-align: center;
}
</style>

<div style='display: flex; justify-content: space-around; flex-wrap: wrap; margin-top: -16px;'>
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

<script src='/js/vanilla-js-dropdown.min.js'></script>
<script src='/js/discord-timestamp.js'></script>
