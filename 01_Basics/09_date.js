// let date = new Date()
// console.log(typeof date);
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.getTimezoneOffset());
// // console.log(date.getUTCDate());
// console.log(Date);

let newDate = new Date()
console.log(newDate);

// Current Timestamp
let timeStamp = Date.now()
console.log(timeStamp);
// customized date
console.log(new Date(2023,2,19));
// customized date and time
console.log(new Date(2023,7,24,5,46,12));
console.log(new Date(2023,7,24,5,46,12).toDateString());
console.log(new Date(2023,7,24,5,46,12).toTimeString());
// Customised Date - Way 1
console.log(new Date("2023-02-12"));
// Customised Date - Way 2 
console.log(new Date("02-29-2011"));
// Customized Date Way 3
console.log(new Date("02-28-2017"));

// Created Date
let createdDate = new Date("2023-12-31");
console.log(createdDate);
// Created date to milliseconds
console.log(createdDate.getTime());
// console.log(createdDate.getMilliseconds());
// Convert current date from milliseconds to seconds
console.log(Date.now());
console.log((Date.now())/1000);
// Round of to remove decimal values
console.log(Math.floor((Date.now())/1000));

// Some other Methods
let nextDate = new Date()
console.log(nextDate.getDay());
console.log(nextDate.getMinutes());
console.log(nextDate.getMonth());
console.log(nextDate.toLocaleDateString('default', {
    weekday : "long",
    minute : "2-digit"
} ));