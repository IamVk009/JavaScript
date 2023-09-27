// Declare function
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

// Call function
addTwoNumbers(2,3)
// Print function reference
// console.log(addTwoNumbers);

// Return something from function
function multiplyTwoNumbers(number1, number2){
    return number1 * number2
}

// Store returned value by function in a new variable
const result = multiplyTwoNumbers(3,5)
console.log("Result =", result);

function isUserLoggedIn(username = "Samual"){
    // Check if username is valid 
    if(!username){
        console.log("Enter Valid Username");
        return;
    }
    return `${username} just Logged In`
}

const message = isUserLoggedIn("Flash")
console.log(message);
isUserLoggedIn()
// console.log(isUserLoggedIn());

// How to write a function if we don't know the numbers of parameters 
// Using REST Operator
function totalCartValue(...values){
    return values
}

console.log(totalCartValue(100,400,200))

function totalCartValue1(val1, val2, ...values){
    return values
}

console.log(totalCartValue1(100,200,300,500,888))

// Pass object as a function parameter
let user = {
    userName : "Flash",
    marks : 88
}

function getObject(anyObject){
    // Access object key-values inside function
    return `Username is ${anyObject.userName} and marks are ${anyObject.marks}`
}

// Declaring and passing object seperately
console.log(getObject(user));

// Declaring and passing object simultaneously
console.log(getObject({
    userName: "Sam",
    marks : 78
}));

// Passing arrays in function
function handleArray(anyArray){
    console.log(anyArray);
}

handleArray([11,22,33,44,true])