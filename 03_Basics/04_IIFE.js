// IIFE - Immediately Invoked Function Expressions
// The function which gets executed immediately after its declaration is known as IIFE
// To avoid pollution from globla scope, IIFE is used

// Without IIFE
function connection(){
    console.log(`DB Connected`);
}

connection(); // For IIFE, In order to know where to stop the context, we need to add semicolon at the end otherwisee
// It gives error.

// With IIFE
(function connection2(){
    // This is named IIFE
    console.log(`DB Connected Two`);
})();


// Using arrow function
(() => (console.log(`DB Connected Three`)))();

// Same function accepting parameters
((name) => (console.log(`DB connected ${name}`)))('MySQL')