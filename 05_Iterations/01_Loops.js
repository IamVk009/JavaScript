// Syntax : For-Loop
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

for (let i = 1; i <= 7; i++){
    if(i == 3)
        // break // Used to break the loop in between execution
        continue // Used to skip particular iteration
    // console.log(i);
}

// Syntax : While Loop
// while (condition) {
    
// }

let array = [11,22,33,445,554,21]
let index = 0
while(index < array.length){
    // console.log(array[index]);
    index++
}

// Syntax : Do-While Loop

// do {
    
// } while (condition);

let score = 11
do{
    // console.log(`Score is ${score}`);
    score++;
} while(score <= 10)