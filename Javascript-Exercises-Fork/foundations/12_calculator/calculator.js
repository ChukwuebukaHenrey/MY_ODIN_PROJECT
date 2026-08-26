const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((acc, current) => acc + current, 0);
};

const multiply = function (array) {
  return array.reduce((total, current) => total * current);
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
