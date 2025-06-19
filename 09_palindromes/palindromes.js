const palindromes = function (text) {
    let reverseWord = ``;
    let realWord = ``;

    for(let i = 0; i < text.length; i++) {
        if (/^[A-Za-z1-9]$/.test(text[i])) {
            realWord += text[i].toLowerCase();
        }
    }
    for(let i = text.length - 1; i >= 0; i--) {
        if (/^[A-Za-z1-9]$/.test(text[i])) {
            reverseWord += text[i].toLowerCase();
        }
    }

    if (realWord == reverseWord) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
