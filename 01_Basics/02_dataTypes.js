"use strict"; // treat all JS code in this file as newer version
// alert(error) // Alert won't work with nodeJs, it will only work in browser.   

// Data Types
let number = 1001
console.log(number);
let name = "Flash"
let isOpen = true
let float = 11.22

let city = null 
// typeOf(city) is object

let address;
// typeOf address is undefined


console.table([[number, typeof(number)], [name, typeof(name)], [isOpen, typeof isOpen], 
        [float, typeof float], [city, typeof city], [address, typeof address]])

console.log(typeof undefined);

// Primitive Data Types -
// ------------------------
// number 
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined
// symbol => unique (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

// object