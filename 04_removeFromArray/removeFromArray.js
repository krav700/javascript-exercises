const removeFromArray = function(array, ...takeOut) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--)
    {
        if (takeOut.includes(array[i]))
        {
            continue;
        }
        newArray.unshift(array[i]);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
