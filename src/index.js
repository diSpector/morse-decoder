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

    let resArr = [];
    let resStr = '';

    let exprArr = expr.match(/.{10}/g);
    exprArr.forEach(el => {
        let letterStr = '';
        let innerArr = el.match(/.{2}/g);
        innerArr.forEach(letter => {
            switch(letter){
                case '10':
                    letterStr += '.';
                    break;
                case '11':
                    letterStr += '-';
                    break;
                case '**':
                    letterStr += ' ';
                default:
                    break;
            }
        });
        resArr.push(letterStr);
    })
    resArr.forEach(el => {
        resStr += (typeof MORSE_TABLE[el] !== 'undefined') ? MORSE_TABLE[el] : ' ';
    });
    return resStr;
}

module.exports = {
    decode
}