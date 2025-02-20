const convertToCelsius = function(num) {
  let converted = (num - 32) * 5/9
  if (!Number.isInteger(converted)){
    converted = converted.toFixed(1)
  }
  return Number(converted)
};

const convertToFahrenheit = function(num) {
  let converted = (num*9/5)+32
  if (!Number.isInteger(converted)){
    converted = converted.toFixed(1)
  }
  return Number(converted)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
