// console.log(Number(null));

// Predictable results Ezyy
// console.log(2 > 3);
// console.log(2 < 3);
// console.log(2 >= 3);
// console.log(2 <= 3);
// console.log(2 == 3);
// console.log(2 != 3);

// Unpredictable (Should avoid these type of conversions)
// In Js, Equality check (==) and comparisons (<, >, <=, >=) work differently.
// Comparisons convert null to a number i.e. 0. 
// console.log(null < 0);
// console.log(null == 0);

// Here null is getting converted to number i.e. 0
// console.log(null >= 0);


// console.log(undefined < 0);
// console.log(undefined >= 0);
// console.log(undefined == 0);

// Strict Check (===) (it checks for value as well as data type before giving result)
console.log(2 === 2);
console.log("2" === "2");
console.log(null === 2);
console.log(typeof null);