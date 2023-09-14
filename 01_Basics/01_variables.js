const playerId = 18
// playerId = 129 // We can't change the value assigned to constant

var playerName = "Josh Hazelwood"
// We should not use 'var' keyword as it don't understand block and functional scope which will cause problems.

let playerCountry = "Australia"
// 'const' and 'let' are the only keywords shall be used to declare any variable in JS.

playerWickets = 198
// Declaring variables without using any keyword should be avoided.

playerName = "Virat Kohli"
playerCountry = "India"
playerWickets = 12
let playerRuns = 13000

let playerAvg
// If we only declare a variable without assigning a value to it, then it is considered as 'undefined'.

console.log(playerId);
console.table([playerName, playerCountry, playerWickets, playerRuns, playerAvg])