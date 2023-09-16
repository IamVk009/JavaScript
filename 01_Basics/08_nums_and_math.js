const score = 200
console.log(score);

const balance = new Number(300)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 1245.789
console.log(otherNumber.toFixed(1));
console.log(otherNumber.toPrecision(6));
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toString().length);
// console.log(otherNumber.toExponential(8));

const bigNumber = 10000000
// Returns value with inserted commas for more readability (According to US standard)
console.log(bigNumber.toLocaleString());
// Returns value with inserted commas for more readability (According to Indian standard)
console.log(bigNumber.toLocaleString("en-IN"));

// --------------------------------- Maths ------------------------------------------------------

console.log(Math);
console.log(Math.max(11,22));
console.log(Math.min(11,222,333,4,22,100));
console.log(Math.abs(-8));
console.log(Math.abs(8));
console.log(Math.round(23.87));
console.log(Math.ceil(12.2));
console.log(Math.floor(12.87));
console.log(Math.pow(2,5));
console.log(Math.sqrt(121));

// Most likely used - Math.random()
console.log(Math.random());
// To get random number above 1
console.log((Math.random() * 10) + 1);
// To get number above one without decimal value
console.log((Math.floor(Math.random() * 10) + 1));

// When you need to define min as well as max i.e. range to get that random value between that range.
let min = 20
let max = 50

console.log(Math.floor(Math.random() * (max - min + 1)) + min);