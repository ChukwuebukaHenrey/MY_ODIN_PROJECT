const fibonacci = function (count) {
  const number = Number(count);
  if (Math.sign(number) === -1 || isNaN(number)) {
    return "OOPS";
  }
  if (number === 0) return 0;

  let a = 0;
  let b = 1;
  for (let i = 2; i <= number; i++) {
    const temp = b;
    b = b + a;
    a = temp;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
