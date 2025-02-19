const age = [34, 54, 24, 24, 64, 24, 63,];
const age2 = [64, 54, 32, 42, 65, 75,];
const age3 = [76, 46, 98, 74, 86,];

const allage = Math.max (...age, ...age2, ...age3);

console.log(allage)

