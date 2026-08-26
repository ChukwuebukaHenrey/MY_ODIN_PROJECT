const reverseString = function (string) {
  let result = string.split("");
  let finalResult = result.reverse().join("");
  return finalResult;
};

console.log(reverseString("ebukah"));

// Do not edit below this line
module.exports = reverseString;
