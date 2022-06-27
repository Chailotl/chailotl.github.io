// Import modules
import { saveAs } from "https://cdn.skypack.dev/save-as@0.1.8";
import { Vtf, VtfImageResource, Frame } from 'https://cdn.jsdelivr.net/gh/koerismo/vtf.js@latest/vtf.js';

// Select all elements
var input = document.getElementById('input')

var image = new Image();
var fr = new FileReader()
fr.onload = () => { image.src = fr.result }

function save () {
	fr.readAsDataURL(input.files[0])
	
	var resource = new VtfImageResource([
		new Frame( image )
	])
	
	var vtf = new Vtf([img.width, img.height], [resource], 'DXT5')
	saveAs( vtf.blob(), 'spray.vtf')
}
