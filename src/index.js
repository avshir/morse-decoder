const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	let arrExpr = [];
	while (expr.length > 0) {
		arrExpr.push(expr.slice(0, 10));
		expr = expr.slice(10);
	}
	//console.log(arrExpr);//["0000000010", "0000111010", "1010101111", "0011101110", "0000001011", "1111101010", "1111101010", "1010101010"]
	for (let i = 0; i < arrExpr.length; i++) {
		arrExpr[i] = arrExpr[i].replace(/10/g, '.').replace(/11/g, '-').replace(/00/g, '');
	}
	//console.log(arrExpr);//[".", "-..", "...--", "-.-.", ".-", "--...", "--...", "....."]
	let resStr = '';
	for (let i = 0; i < arrExpr.length; i++){
		if (arrExpr[i] === '**********') {
			resStr += ' ';
		} else {
			resStr += MORSE_TABLE[arrExpr[i]];
		}
	}
	//console.log(resStr);
	return resStr;
}

module.exports = {
    decode
}