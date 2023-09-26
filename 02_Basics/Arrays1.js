// Array
const arr = [11,22,33,44]
// console.log(arr);

arr.forEach(element => {
    // console.log(element);
});

let arr3 = new Array(90,78,67,56,4)
console.log(arr3);
console.log(arr3.includes(100));
console.log(arr3.indexOf(78));

let arr2 = [1,2,3,4,5,"Cricket", true, 11.45]
arr2.forEach(element => {
    // console.log(element);
})

arr2.push(100)
arr2.pop()
arr2.push(90,98)
// console.log(arr2);
arr2.unshift(9999)
// console.log("Unshift = ", arr2);
arr2.shift()
// console.log("Shift = ", arr2);

let aray1 = [1,2,3,4,5,6,7,8,9,10]
let aray2 = [1,2,3,4,5,6,7,8,9,10]
console.log("A", aray1);
console.log("B", aray2);

let aray3 = aray1.slice(2,5)
console.log("C", aray3);
console.log("A", aray1);

let aray4 = aray2.splice(2,5)
console.log("D", aray4);
console.log("B", aray2);

// Main Difference Between Slice and Splice
// Slice does not manipulate the oroginal array while performing operation.
// But Splice manipulate the original array and removes selected elements from original array as well.
// Slice does not include last index provided as an argument.
// Splice includes last index provided as an argument.
