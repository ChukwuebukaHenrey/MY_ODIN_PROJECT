const palindromes = function (string) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleanedString = string
    .toLowerCase()
    .split("")
    .filter((Character) => alphanumerical.includes(Character))
    .join("");

  const reversedString = cleanedString.split("").reverse().join("");
  return reversedString === cleanedString;
};
// Do not edit below this line
module.exports = palindromes;
