const fibonacci = function(index) {
    if (index < 0)
    {
        return "OOPS"
    }
    let num1 = 1;
    let num2 = 1;
    let total = 0;
    if (index == 1 || index == 2)
    {
        total = 1;
    }
    let switcher = false;
    for(let i = 2; i < index; i++) {
        if (switcher == false) {
            total = num1 + num2;
            num1 = total;
            switcher = true;
        }
        else {
            total = num1 + num2;
            num2 = total;
            switcher = false;
        }
    }
    return total;
};

// Do not edit below this line
module.exports = fibonacci;
