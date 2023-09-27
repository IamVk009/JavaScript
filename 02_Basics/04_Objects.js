// Non-singleton Object
let user = {}
// Singleton Object
/*  What is singleton object in Javascript?
    Singleton is a design pattern that tells us that we can create only one instance of a class and 
    that instance can be accessed globally 
*/
let user2 = new Object()
// console.log(user);
// console.log(user2);

const User = {}
User.name = "Flash"
User.email = "flash123@gmail.com"
User.isLoggedIn = false

// console.log(User);

// Object chaining (Nesting)
let newUser = {
    email : "newUser321@gmail.com",
    "personal details" : {
        "full name" : {
            firstName : "Davis",
            lastName : "Shaun"
        },
        address : "New York"
    },
    isLoggedIn : false
}

// Access nested object key-values
// console.log(newUser);
// console.log(newUser.isLoggedIn);
// console.log(newUser["personal details"]);
// console.log(newUser["personal details"]["full name"]);
// console.log(newUser["personal details"]["full name"].firstName);
// console.log(newUser["personal details"].address);

// Concatenate 2 or more Objects 
const obj1 = {1 : "A", 2: "B"}
const obj2 = {3 : "C", 4: "D"}
const obj3 = {5 : "E", 6 : "F"}

const target = Object.assign({}, obj1, obj2, obj3)
// console.log(target);

// Using Spread Operator (Mostly Used)
const obj4 = {...obj1, ...obj2}
console.log(obj4);

let Users = [
    {id : 1,
    name : "Himalay"},
    {},
    {}
]

Users.forEach(user => {
    console.log(user);
})

const player = {
    jersey : 18,
    name : "Virat Kohli",
    team : "India",
    runs : "110082",
    age : 34
}

// Extract all keys into an array
console.log(Object.keys(player));
// Extract all values into an array
console.log(Object.values(player));
// Check if object has a perticular property
console.log(player.hasOwnProperty("age"));
console.log(player.hasOwnProperty("avg"));