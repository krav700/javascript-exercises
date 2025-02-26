const convertToCelsius = function(degrees) {
  return +((degrees - 32.0) * 5/9).toFixed(1);
};

const convertToFahrenheit = function(degrees) {
  return +((degrees * 9/5) + 32.0).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
