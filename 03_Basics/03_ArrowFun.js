const user = {
    username: "Flash",
    price: 999,
    welcomeMessage: function(){
        console.log(`Welcome ${this.username}`);
        // console.log(this);
    }
}

// user.username = "Sam"
user.welcomeMessage()
// console.log(user);

// console.log(this);

function test(){
    let username = "Flash"
    console.log(this);
    // Can't use this keyword inside function as we used in object.
    // console.log(this.username);
}

// test()

const test2 = function(){
    let username = "Flash"
    // Can't use this keyword inside function as we used in object.
    // console.log(this.username);
    console.log(this);
}

// test2()

// Arrow Function
const test3 = () => {
    let username = "Flash"
    // Can't use this keyword inside function as we used in object.
    // console.log(this.username);
    
    // Interesting??
    console.log(this);
}

// test3()
// Arrow function Declaration : Way - 0 (Using Curly braces and return keyword)
const arrow0 = (num1, num2) => {
    return num1 ** num2
}

console.log(arrow0(3,5))

// Arrow function Declaration : Way - 1 (Not Using curly braces and return keyword)
const arrow = (num1, num2) => (num1 ** num2)
console.log(arrow(2,3))

// function Returning object
const returnObject = () => ({username: "Flash", city: "Mumbai"})
console.log(returnObject());

// Arrow function Declaration : Way - 2 (Implicit Return - Used when you have only one return statement)
const arrow2 = (num1, num2) => num1 ** num2
console.log(arrow2(3,4));

let array = [11,22,33,44,5,90]
// const printArray = ([]) => ()
function printArray(array){
    console.log(array);
}

printArray(array)

array.forEach(i => console.log(i))

function tea(){
    console.log(this);
}

tea()

const tea2 = () => {
    // let username = "User1"
    // console.log(this.username);
    console.log(this);
}

tea2()