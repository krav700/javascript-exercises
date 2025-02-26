const leapYears = function(year) {
    let lastTwoNumbers = year % 100;
    if (lastTwoNumbers != 0) 
    {
        return lastTwoNumbers % 4 == 0;
    }
    let FirstTwoNumbers = year / 100 % 100;
    return FirstTwoNumbers % 4 == 0;
};

// Do not edit below this line
module.exports = leapYears;
