// Based on the way they are stored in memory, data types are of two types in JS - 1. Primitive, 2.Non-primitive
// Primitives (7) - String, Number, Boolean, null, undefined, symbol, bigint

// String
const name = "Flash"
// Number
const id = 90
const avg = 56.78
// Boolean
const isLoggedIn = true
// null
const temperature = null
// undefined
let state;
// bigint
const bigNumber = 468375298453678n
console.log(bigNumber); 
// symbol
let studentId = Symbol('786')
let anotherId = Symbol('786')

console.log(studentId === anotherId);
// console.log(studentId);
// console.log(anotherId);

// Non-Primitives(Reference) - Arrays, Objects, functions
// JS is dynamically typed language as we no need to define any data type before assigning it to variable. 

// Array
const players = ["Rohit", "Virat", "Rahul", "Bumrah"]
console.log(players);

// Objects
let player = 
{
    name: "Rohit Sharma",
    Age: 37,
    JerseyNo: 45,
    Average: 49.78,
    Country: "India",
    TripleCentury:null
}

console.log(player);

// function
const myFunction = function () {
    console.log("Hello JS");
}
console.log(myFunction);
console.log(typeof myFunction);