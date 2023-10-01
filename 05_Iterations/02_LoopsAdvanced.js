// Array-specific Loops
// For-Of Loop

let array = [11, 22, 33, 44, 55]
for (const elements of array) {
    // console.log(elements);
}

const greetings = "Hello JavaScript"
for(greet of greetings){
    if(greet == " ")
        continue
    // console.log(greet);
}

// Maps in JS

const map = new Map()

map.set("In", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
// console.log(map);

for(const key of map){
    // console.log(key);
}

for(const [key, value] of map){
    // console.log(key + " : " + value);
}

// for (const key of map.keys()) {
//     console.log(key);
// }

// Unlike maps and arrays, objects are not iterable using for-of loop 

const obj = {
    name: "Flash",
    age: 25,
    country: "USA"
}

// for(const [key, value] of obj){
//     console.log(key + " : " + value);
// }

// Use for-in Loop

for (const key in obj) {
    // Print all keys
    // console.log(key);
}

// console.log(obj["name"]);
for(const key in obj){
    // Print all values
    // console.log(obj[key]);
}

// Print both keys and Values
for(const key in obj){
    // console.log(`${key} has value = ${obj[key]}`);
}

// Using for-in Loop on Arrays
let array2 = [11,22,33,44,55,66]

for(const value in array2){
    // console.log(array2[value]);
}

// Using For-In Loop on Map - This kind of iteration is not possible in Maps
let languages = new Map();
languages.set("JS", "JavaScript")
languages.set("CSS", "Cascading Style Sheet")
languages.set("HTML", "Hyper Text Markup Language")

// console.log(languages);

// For-Of loop
// for(const key of languages){
//     console.log(key);
// }

// for(const [key, value] of languages){
//     console.log(key, value);
// }

// For-In Loop - This kind of iteration is not possible in Maps
for(const [key] in languages){
    console.log(key);
}