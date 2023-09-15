// Two types of Memory - Stack and Heap
// stack - Is used to store primitives (which means if we create a variable and want to use it somewhere, so we will get copy of that variable)
// heap - Is used to store non-primitives (which means if we create a variable and want to use it somewhere, so we will get a reference to original variable itself)

// Stack Memory
let name = "Flash"
let anotherName = name;
anotherName = "Rohan"

console.log(name);
console.log(anotherName);

// Heap Memory
let userOne = {
    name : "Flash",
    email : "flash12@gmail.com"
}

let userTwo = userOne;
console.log(userOne === userTwo);

userTwo.email = "flash123@gmail.com"
console.log(userTwo.email);
console.log(userOne.email);