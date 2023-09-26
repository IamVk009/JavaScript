// Objects and Events are two most Important Concepts in JavaScript
// If we are declaring object like literal then it won't be singleton object
// If we are declaring an object like constructor then it will always be a singleton object

// Create empty object using constructor 
// Object.create()

// Create empty object using object literals
let User = {}
// console.log(User);

// assign values to an object
User = {
    name: "David",
    age: 22,
    address: "New York",
    email : "David43@gmail.com",
    "country" : "USA"
}

// Way - 1 : Access object key-values
console.log(User.name); 
console.log(User.country);

// Way - 2 : Access object key-values
console.log(User["age"]);
console.log(User["country"]);

// Interview Important 
// Task - Declare one Symbol, add it to object as a key and print it.
const sym = Symbol("flag")
// console.log(typeof sym);

let JsUser = {
    name: "Flash",
    age: 19,
    country: "USA",
    email: "flash19@gmail.com",
    [sym] : 101
}

console.log(JsUser);
// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(typeof JsUser.sym);
console.log(JsUser[sym]);
// console.log(typeof JsUser[sym]);

// Change object key value
JsUser.email = "flash90@outlook.com"
// console.log(JsUser);

// Object Freeze
Object.freeze(JsUser)
JsUser.email = "flash9999@microsoft.com"
// console.log(JsUser);

console.log("----------------------------------------");

let newUser = {
    name : "Kane",
    age : 23,
    country : "NewZeland"
}

console.log(newUser);

// function greeting(){
//     console.log("Hello New User");
// }

// Add new function to newUser object
newUser.greeting = function(){
    console.log("Hello New User");
}
console.log(newUser);

// Print value of greeting using newUser Object
console.log(newUser.greeting);
console.log(newUser.greeting());

// Print value of greeting along with the name of newUser using new function
newUser.anotherGreeting = function(){
    console.log(`Hello User ${this.name}`);
}

console.log(newUser.anotherGreeting());