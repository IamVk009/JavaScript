// Two ways to declare strings in Js
const studentName = "Rohan"
console.log(studentName);

// This is an object of type String
let sname = new String("Ramesh")
console.log(sname);

let name = "Flash"
let age = 34

// Older way
console.log("My Name is " + name + " and my Age is " + age);

// Latest Way
console.log(`My Latest Name is ${name} and my Latest Age is ${age}`);

const str = "Nothing"
// console.log(str[1]);
// console.log(str.__proto__);

// String functions
// const str2 = new String("I am Flash. The Fastest man alive")
const str1 = 'I am Flash. The Fastest man alive.';
console.log(str1);

// Returns character at given index
console.log(str1.charAt(8));
// Returns ASCII character code of element at given index
console.log(str1.charCodeAt(8));
console.log(str1.codePointAt(8));
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.length);
console.log(str1.substring(0, 9));
console.log(str1.slice(-10, -5));
console.log(str1.split(' '));
console.log(str1.indexOf('l'));
console.log(str1.endsWith('.'));
console.log(str1.startsWith('I'));


let s1 = "                    India is  "
let s2 = " my country"
console.log(s1.concat(s2));
console.log(s1.trim());
console.log(s1.trim().concat(s2));
console.log(str1.toUpperCase());
console.log(str1.indexOf('F'));

const url = "https://glorious-umbrella-xxp6x9g6j7j36rq9.github.dev/"
console.log(url.replace("xxp6x9g6j7j36rq9", "codespace"));