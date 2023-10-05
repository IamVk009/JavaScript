const programming = ["Java", "Cpp", "JacaScript", "Python", "c#"]
// console.log(programming);

programming.forEach((item) => {
    // console.log(item);
}) 

// Apart from the parameter which we are passing, for-each has two more params i.e. index and whole array
programming.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

// Array of Objects
let ObjArr = [
    {
        language: "Python",
        extension: "py"
    },
    {
        language: "JavaScript",
        extension: "js"
    },
    {
        language: "Java",
        extension: "java"
    }
]

// console.log(ObjArr);
ObjArr.forEach(item => {
    // console.log(item);
})
ObjArr.forEach(item => {
    // console.log(item.language);
})
ObjArr.forEach(item => {
    // console.log(item.extension);
})

// For-Of Loop
for(const obj of ObjArr){
    console.log(obj);
}
