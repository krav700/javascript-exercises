const sumAll = function(numOne, numTwo) {
    if (!(isInt(numOne) && isInt(numTwo)))
    {
        return 'ERROR';
    }
    if (numOne === numTwo)
    {
        return numOne;
    }
    if (numOne < 0 || numTwo < 0)
    {
        return 'ERROR';
    }
    let sum = 0;
    let iValue = numTwo;
    let lessThan = numOne;
    if (numOne < numTwo)
    {
        iValue = numOne;
        lessThan = numTwo;
    }
    for (let i = iValue; i <= lessThan; i++)
    {
        sum += i;
    }
    return sum;
};

function isInt(n) {
    if (typeof n != 'number')
    {
        return false;
    }
    return n % 1 === +0;
}
// Do not edit below this line
module.exports = sumAll;
