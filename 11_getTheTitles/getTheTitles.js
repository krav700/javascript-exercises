const getTheTitles = function(arr) {
    const reducedArray = arr.reduce((prev, next) => {
        prev.push(next.title);
        return prev;
    }, []);
    return reducedArray;
};

// Do not edit below this line
module.exports = getTheTitles;
