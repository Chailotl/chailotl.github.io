// Import modules
import { Vtf, VtfImageResource, Frame } from 'https://cdn.jsdelivr.net/gh/koerismo/vtf.js/dist/module/VtfContainer.js';
import { VtfDxtEncodings } from 'https://cdn.jsdelivr.net/gh/koerismo/vtf.js/dist/module/VtfDxtEncodings.js';

Vtf.registerCodec(VtfDxtEncodings.DXT1)

// Select all elements
var input = document.getElementById('input')

input.oninput = () => {
	var image = new Image()
	var fr = new FileReader()
	
	fr.onload = () => { image.src = fr.result }
	fr.readAsDataURL(input.files[0])
	
	var resource = new VtfImageResource([new Frame(image)])
	var vtf = new Vtf([image.width, image.height], [resource], 'RGBA8888')
	
	window.saveAs(vtf.blob(), 'spray.vtf')
}
