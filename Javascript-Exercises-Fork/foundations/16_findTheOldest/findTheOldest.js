const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const getAge = (person) => {
  const endYear = person.yearOfDeath ?? new Date().getFullYear();
  return endYear - person.yearOfBirth;
};

// const findTheOldest = (people) => {
//   return people.reduce((oldest, person) => {
//     return getAge(person) > getAge(oldest) ? person : oldest;
//   });
// };

// const findTheOldest = function (people) {
//   let oldest = people[0];

//   for (const person of people) {
//     if (getAge(person) > getAge(oldest)) {
//       oldest = person;
//     }
//   }
//   return oldest;
// };



// Do not edit below this line
module.exports = findTheOldest;
