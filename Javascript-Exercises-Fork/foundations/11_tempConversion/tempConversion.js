const convertToCelsius = function (temp) {
  let result;
  if (isNaN(temp)) {
    return;
  }

  result = (temp - 32) * (5 / 9);
  return Number(result.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  let result;
  if (isNaN(temp)) {
    return;
  }
  result = temp * (9 / 5) + 32;
  return Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

// function convertToCelsius(temp) {
//   let result;
//   if (isNaN(temp)) {
//     return;
//   }

//   result = (temp - 32) * (5 / 9);
//   return Number(result.toFixed(1));
// }

// function convertToFahrenheit(temp) {
//   let result;
//   if (isNaN(temp)) {
//     return;
//   }
//   result = temp * (9 / 5) + 32;
//   return Number(result.toFixed(1));
// }
