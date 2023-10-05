const numbers = [1,2,3,4,5,6,7,8,9,10]
// Add 10 to each number using Map function
const plus10 = numbers.map((number) => number + 10)
// console.log(plus10);

// Add 10 to each number which is greater than 5
const plus10If = numbers.map((number) => {
    if(number > 5){
        number += 10
    }
    return number
})

// console.log(plus10If);

// ------------------ Chaining of Map and Filter ------------------------------

const chain1 = numbers.map((number) => number * 10)
                      .map((number) => number + 1)
                      .filter((number) => number >= 50)
console.log(chain1);