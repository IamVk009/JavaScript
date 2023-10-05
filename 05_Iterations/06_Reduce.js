const numbers = [1,2,3,4,5]

// Official syntax
// const initialValue = 0
// const reduce0 = numbers.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue
// }, initialValue)

// console.log(reduce0);

// Understanding Working
const reduce1 = numbers.reduce((acc, currentValue) => { 
    // console.log(`Acc = ${acc} and CurrentValue = ${currentValue}`)
    return acc + currentValue 
}, 0)
// console.log(reduce1);

// Syntax using Arrow Function
const reduce2 = numbers.reduce((acc, currentValue) => acc + currentValue, 0)
// console.log(reduce2);

const shoppingCart = [
    {
        courseName: "JS",
        price: 2999
    },
    {
        courseName: "Java",
        price: 1999
    },
    {
        courseName: "Python",
        price: 999
    },
    {
        courseName: "NextJS",
        price: 4999
    },
]

// Calculate Toatal Price of all courses
// Best Way - Using Reduce
const totalPrice = shoppingCart.reduce((acc, course) => acc + course.price, 0)
console.log(`Total Price = ${totalPrice}`);

// Longer Way : Using For-Each Loop
const price = []
shoppingCart.forEach((course) => price.push(course.price))
const totalCoursePrice = price.reduce((acc, currentValue) => acc + currentValue, 0)
console.log(`Total Course Price = ${totalCoursePrice}`)


