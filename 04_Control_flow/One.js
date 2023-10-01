// let message = "fastest"
// let message = ""
// let message = " "
// let message = []
// let message = [112]
// let message = {}
// let message = 0
// let message = -0
// let message = 1
// let message = -1
// let message = 0n
// let message = NaN
// let message = null
// let message = undefined
// let message = "0"
// let message = "false"
// let message = 'false'
let message = function(){}

if(message){
    console.log("Got Message");
}
else{
    console.log("No Message");
}

// Falsy values
// false, 0, -0, 0n, "", null, undefined, NaN

// Truthy Values
// true, 1, -1, {}, [], [11,22], "fastest", "0", "false", " ", functio(){}

const emptyObj = {}
if((Object.keys(emptyObj)).length == 0){
    console.log("Empty Object");
} else{
    console.log("Not Empty");
}

// Following comparisons return result as true
// false == 0
// false == ""
// 0 == ""

// Nullish Coalescing Operator (??) : null undefined
// This operator safety checks for null value and undefined value i.e. if value is null or undefined it will assign the other value defined by the operator 

// let value = 5 ?? 10
// let value = null ?? 20
// let value = undefined ?? 30
// let value = null ?? undefined
// let value = undefined ?? null
// let value = null ?? 12 ?? 23 ?? 90
let value = null ?? 100 ?? 200

console.log(value);

// Ternary Operator
(2 >= 3) ? console.log("Correct"): console.log("Incorrect");