const repeatString = function(text, numberOfRepetitions) {
    let originalText = text;
    if (numberOfRepetitions == 0)
    {
        return '';
    }
    if (numberOfRepetitions < 0)
    {
        return 'ERROR';
    }
    for (let i = 1; i < numberOfRepetitions; i++)
    {
        text += originalText;
    }
    return text
};

// Do not edit below this line
module.exports = repeatString;
