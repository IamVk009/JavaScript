const India = ["Rohit", "Gill", "Virat", "Shreyas"]
const Aus = ["Warner", "Smith", "Labushagne", "Tim"]
// India.push(Aus)
// console.log(India);
// Aus.push(India)
// console.log(Aus);
// Merge 2 arrays Using Concat
// console.log(India.concat(Aus));

// Merge 2 Arrays using spread operator
// console.log("Using Spread Operator");
// console.log([...India, ...Aus]);

// flat 
let complexArray = [11,22,33, [99,88,77, [1,23,34,45, ["Abra", "ka", "Dabra"]], [999]]]
console.log(complexArray.flat(1));
console.log(complexArray.flat(2));
console.log(complexArray.flat(Infinity));

console.log(Array.isArray(complexArray));
console.log(Array.from("abrakadabra"));
// Can't create array of object 
console.log(Array.from({name : "India", continent: "Asia"}));

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1, s2, s3));
// console.log(Array.of(s1, s2, s3, India));