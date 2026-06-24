// // Pretty simple, write a function called reverseString that returns its input, reversed

// function reverseString (str) {
//   let result = str.split("");
//   let finalResult = result.reverse().join("");
//   return finalResult;
// }

// let reverser = reverseString("ebukah");
// console.log(reverser);

// function repeatString (str, num){
//   let result = [];
//   let finalResult;
//   for (let i = 0; i < num; i++) {
//     result.push(str)
//   }
//   finalResult = result.join("")
//   return finalResult;
// }

// // Implement a function that takes an array and some other arguments then removes the other arguments from that array, and returns the resulting array:

// function removeFromArray (array,num){
//  let indexer;
//  let finalResult;
//   if (array.includes(num)){
//   indexer =  array.indexOf(num)
//   array.splice(indexer,1);
//   finalResult = array;
//   } else {
//     return array;
//   }
//   return finalResult;
// }

// function removeFromArray (array,...args){
//  return array.filter((item) => !args.includes(item))
// }

// Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:

// function sumAll (a, b) {
//   let sum = 0;
//   let start = Math.min(a,b);
//   let end = Math.max(a,b);

//   for (let i = start; i <= end; i++) {
//     sum += i;
//   }
//   return sum;
// }

// Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

// function leapYears(year){
//   if (year % 4 !== 0) {
//     return false
//   }
//   if (year % 100 === 0 && year % 400 !== 0) {
//       return false;
//     };
//     return true
// }

// Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
// -- Learn to Program by Chris Pine

// leapYears(2000); // is a leap year: returns true
// leapYears(1985); // is not a leap year: returns false

// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
// F = (C \times 1.8) + 32).
// C = (F - 32) * 1.8

// function convertToCelsius (temp) {
//   let result;
//   if (!isNaN(temp)) {
//     return;
//   }

//  result = (temp - 32) * (5 / 9);
//  return Number(result.toFixed(1));
// }

// function convertToFahrenheit (temp) {
//    let result;
//   if (!isNaN(temp)) {
//     return;
//   }
//     result = (temp * (9 / 5)) + 32;
//     return Number(result.toFixed(1));
// }

// convertToCelsius(32) // fahrenheit to celsius, should return 0

// convertToFahrenheit(0) // celsius to fahrenheit, should return 32
// Because we are human, we want the result temperature to be rounded to one decimal place: i.e., convertToCelsius(100) should return 37.8 and not 37.77777777777778.

// This exercise asks you to create more than one function so the module.exports section of the main javascript file looks a little different this time. Nothing to worry about, we're just packaging both functions into a single object to be exported.
