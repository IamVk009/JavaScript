let score = null
console.log(typeof score)
let toNumber = Number(score)
console.log(typeof toNumber)
console.log(toNumber);

// Conversions to Number
// 333 => 333
// 333aaa => NaN (Not a Number)
// true => 1
// false => 0
// undefined => NaN
// null => 0


// Convert to Boolean
let isLoggedIn = "Virat";
console.log(Boolean(isLoggedIn));

// 1 => true
// 0 => false
// "" => false
// "Virat" => true

// Convert to String
let number = 1290
let str = String(number)
console.log(String(number));
console.log(typeof str);


// ********************** Operations ************************

// Arithmatic Operations
// console.log(2 + 3);
// console.log(2 - 3);
// console.log(2 * 3);
// console.log(2 / 3);
// console.log(2 % 3);
// console.log(2 ** 3);

// let num = 4;
// let minusNum = -num;
// console.log(minusNum);

let str1 = "I Am "
let str2 = "Flash"
// console.log(str1 + str2);

// console.log(1 + "2");
// console.log(1 + "2" + 3);
// console.log("1" + "2");
// console.log("1" + "2" + 3);
// console.log(1 + 3 + "2");
// console.log(1 + 3 + 4 + "2");

let counter1 = 20
console.log(counter1++);
let counter2 = 20
console.log(++counter2);
