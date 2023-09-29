var a = 100
var b = 200
const c = 900

if(true){
    let c = 300
    let b = 400
    var a = 1000
}

console.log(a);
console.log(b);
console.log(c);

function one(){
    let username = "User1 "
    function two(){
        let website = "instagram"
        console.log(username + website);
        function three(){
            console.log(username + website);
        }
        three()
    }
    console.log(username);
    two()
}

one()

// =============================== Interesting ===================================

console.log(addOne(5));
function addOne(num){
    return num + 1
}

// Hoisting in JS
// console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));

