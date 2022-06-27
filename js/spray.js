// Import modules
import { Vtf, VtfImageResource, Frame, Color } from 'https://cdn.jsdelivr.net/gh/koerismo/vtf.js/dist/module/VtfContainer.js';
import { VtfDxtEncodings } from 'https://cdn.jsdelivr.net/gh/koerismo/vtf.js/dist/module/VtfDxtEncodings.js';

// Select all elements
var input = document.getElementById('input')

input.oninput = () => {
	var image = new Image()
	var fr = new FileReader()
	
	fr.onload = () => { image.src = fr.result }
	fr.readAsDataURL(input.files[0])
	
	var resource = new VtfImageResource([new Frame(image)])
	var vtf = new Vtf([image.width, image.height], [resource], 'DXT1')
	
	window.saveAs(vtf.blob(), 'spray.vtf')
}
