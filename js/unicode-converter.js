// Select all elements
const input = document.getElementById('input')
const table = document.getElementById('table')

const converters = [
	{
		name: 'Fullwidth',
		lowercase: 'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ',
		uppercase: 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ',
		digits: '０１２３４５６７８９'
	},
	{
		name: 'Small Caps',
		uppercase: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ'
	},
	{
		name: 'Superscript',
		lowercase: 'ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ',
		uppercase: 'ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻ',
		digits: '⁰¹²³⁴⁵⁶⁷⁸⁹'
	},
	{
		name: 'Subscript',
		lowercase: 'ₐbcdₑfgₕᵢⱼₖₗₘₙₒₚqᵣₛₜᵤᵥwₓyz',
		digits: '₀₁₂₃₄₅₆₇₈₉'
	},
	{
		name: 'Circled',
		lowercase: 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ',
		uppercase: 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ',
		digits: '⓪①②③④⑤⑥⑦⑧⑨'
	},
	{
		name: 'Negative Circled',
		uppercase: '🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩',
		digits: '⓿❶❷❸❹❺❻❼❽❾'
	},
	{
		name: 'Squared',
		uppercase: '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉'
	},
	{
		name: 'Negative Squared',
		uppercase: '🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉'
	},
	{
		name: 'Parenthesized',
		lowercase: '⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵',
		uppercase: '🄐🄑🄒🄓🄔🄕🄖🄗🄘🄙🄚🄛🄜🄝🄞🄟🄠🄡🄢🄣🄤🄥🄦🄧🄨🄩',
		digits: '0⑴⑵⑶⑷⑸⑹⑺⑻⑼'
	},
	{
		name: 'Math Sans',
		lowercase: '𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓',
		uppercase: '𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹',
		digits: '𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫'
	},
	{
		name: 'Math Sans Italic',
		lowercase: '𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻',
		uppercase: '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡'
	},
	{
		name: 'Math Sans Bold',
		lowercase: '𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇',
		uppercase: '𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭',
		digits: '𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵'
	},
	{
		name: 'Math Sans Bold Italic',
		lowercase: '𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯',
		uppercase: '𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕'
	},
	{
		name: 'Math Monospace',
		lowercase: '𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣',
		uppercase: '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉',
		digits: '𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿'
	},
	{
		name: 'Math Italic',
		lowercase: '𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧',
		uppercase: '𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍'
	},
	{
		name: 'Math Bold',
		lowercase: '𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳',
		uppercase: '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙',
		digits: '𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗'
	},
	{
		name: 'Math Bold Italic',
		lowercase: '𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛',
		uppercase: '𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁'
	},
	{
		name: 'Math Fraktur',
		lowercase: '𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷',
		uppercase: '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ'
	},
	{
		name: 'Math Bold Fraktur',
		lowercase: '𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟',
		uppercase: '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅'
	},
	{
		name: 'Math Script',
		lowercase: '𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏',
		uppercase: '𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵'
	},
	{
		name: 'Math Bold Script',
		lowercase: '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃',
		uppercase: '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩'
	},
	{
		name: 'Math Double-Struck',
		lowercase: '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫',
		uppercase: '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ',
		digits: '𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡'
	},
	{
		name: 'Regional Indicator',
		uppercase: '🇦🇧🇨🇩🇪🇫🇬🇭🇮🇯🇰🇱🇲🇳🇴🇵🇶🇷🇸🇹🇺🇻🇼🇽🇾🇿'
	},
	{
		name: 'Braille',
		lowercase: '⠁⠃⠉⠙⠑⠋⠛⠓⠊⠚⠅⠇⠍⠝⠕⠏⠟⠗⠎⠞⠥⠧⠺⠭⠽⠵',
		digits: '⠴⠂⠆⠒⠲⠢⠖⠶⠦⠔'
	},
	{
		name: 'Morse',
		lowercase: ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'],
		digits: ['-----', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.']
	},
	{
		name: 'Mocking',
		func: (input) => {
			let edit = ''
			let uppercase = false

			for (let i = 0; i < input.length; ++i) {
				let char = input[i]
				if (char == ' ') {
					edit += char
				} else {
					edit += uppercase ? char.toUpperCase() : char.toLowerCase()
					uppercase = !uppercase
				}
			}

			return edit
		}
	},
	{
		name: 'Colorful ANSI',
		func: (input) => {
			let edit = ''
			let color = 0
			let colors = [31, 33, 32, 36, 34, 35]

			for (let i = 0; i < input.length; ++i) {
				let char = input[i]
				if (char == ' ') {
					edit += char
				} else {
					edit += `\x1b${colors[color]}m${char}`
					if (++color >= colors.length) {
						color = 0
					}
				}
			}

			return edit
		}
	}
	/*
	{
		name: '',
		lowercase: '',
		uppercase: '',
		digits: ''
	}*/
]

converters.forEach(obj => {
	const el = document.createElement('tr')
	el.innerHTML = `<td><span>${obj.name}</span></td><td><span id='${obj.name}'></span></td>`
	table.appendChild(el)

	obj.element = document.getElementById(obj.name)
})

function update() {
	converters.forEach(obj => {
		let edit = ''

		if (obj.func) {
			edit = obj.func(input.value)
		} else {
			for (let i = 0; i < input.value.length; ++i) {
				let char = input.value.charCodeAt(i)
				
				if (char == 32) {
					if (obj.name == 'Fullwidth') {
						edit += ' '
					}
					else if (obj.name == 'Morse') {
						edit += '/'	
					}
					else {
						edit += ' '
					}
				}
				else if (char >= 65 && char <= 90) {
					// Uppercase
					let letters = obj.uppercase ? obj.uppercase : obj.lowercase
					edit += [...letters][char - 65]
				}
				else if (char >= 97 && char <= 122) {
					// Lowercase
					let letters = obj.lowercase ? obj.lowercase : obj.uppercase
					edit += [...letters][char - 97]
				}
				else if (obj.digits && char >= 48 && char <= 57) {
					edit += [...obj.digits][char - 48]
				}
				else {
					edit += input.value[i]
				}
				
				if (obj.name == 'Morse') {
					edit += ' '
				}
			}
		}

		obj.element.innerHTML = edit
	})
}
