	// Select all elements
	var input = document.getElementById('input')
	var table = document.getElementById('table')

	var converters = [
		{
			name: 'Fullwidth',
			lowercase: 'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ',
			uppercase: 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ',
			digits: '０１２３４５６７８９'
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
			name: 'Regional Indicator',
			uppercase: '🇦🇧🇨🇩🇪🇫🇬🇭🇮🇯🇰🇱🇲🇳🇴🇵🇶🇷🇸🇹🇺🇻🇼🇽🇾🇿'
		},
		{
			name: 'Math Bold',
			lowercase: '𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳',
			uppercase: '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙',
			digits: '𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗'
		},
		{
			name: 'Math Bold Fraktur',
			lowercase: '𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟',
			uppercase: '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅'
		},
		{
			name: 'Math Bold Italic',
			lowercase: '𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛',
			uppercase: '𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁'
		},
		{
			name: 'Math Bold Script',
			lowercase: '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃',
			uppercase: '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩'
		},
		{
			name: 'Braille',
			lowercase: '⠁⠃⠉⠙⠑⠋⠛⠓⠊⠚⠅⠇⠍⠝⠕⠏⠟⠗⠎⠞⠥⠧⠺⠭⠽⠵',
			digits: '⠴⠂⠆⠒⠲⠢⠖⠶⠦⠔'
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
		el.innerHTML = `<td><span>${obj.name}</span></td><td><p id='${obj.name}'></p></td>`
		table.appendChild(el)

		obj.element = document.getElementById(obj.name)
	})

	function update() {
		converters.forEach(obj => {
			var edit = ''
			for (var i = 0; i < input.value.length; ++i) {
				var foo = input.value.charCodeAt(i)
				if (foo >= 65 && foo <= 90) {
					foo -= 65;

					if (obj.uppercase)
					{
						edit += [...obj.uppercase][foo];
					}
					else if (obj.lowercase)
					{
						edit += [...obj.lowercase][foo];
					}
				}
				else if (foo >= 97 && foo <= 122) {
					foo -= 97;

					if (obj.lowercase)
					{
						edit += [...obj.lowercase][foo];
					}
					else if (obj.uppercase)
					{
						edit += [...obj.uppercase][foo];
					}
				}
				else if (obj.digits && foo >= 48 && foo <= 57) {
					edit += [...obj.digits][foo - 48];
				}
				else
				{
					edit += input.value[i];
				}
			}

			obj.element.innerHTML = edit
		})
	}
