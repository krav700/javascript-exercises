const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((prev,next) => {
    return prev + next;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((prev,next) => {
    return prev * next;
  }, 1);
};

const power = function(a, b) {
  return Math.pow(a,b);
};

const factorial = function(a) {
  let num = 1;
  for(let i = 1; i <= a; i++) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
