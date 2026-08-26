const repeatString = function (string, num) {
  if (num < 0) return "ERROR";
  let stringArray = "";
  for (let i = 0; i < num; i++) {
    stringArray += string;
  }
  return stringArray;
};

// Do not edit below this line
module.exports = repeatString;

// const repeatString = function (string, num) {
//   if (num < 0) {
//     return "ERROR";
//   } else {
//     let repeatedString = "";
//     for (let i = 0; i < num; i++) {
//       string += string;
//       repeatedString += string;
//     }
//     return repeatedString;
//   }
// };

// // Do not edit below this line
// module.exports = repeatString;
