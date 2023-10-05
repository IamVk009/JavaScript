const CWCTeams = ["India", "Australia", "England", "New Zeland", "South Africa", "Pakistan", "Afganistan", "SriLanka", "Netherlands", "Bangladesh"]
// console.log(CWCTeams);

// CWCTeams.forEach((team) =>{
//     console.log(team);
// })

const teams = CWCTeams.forEach((team) =>{
    // console.log(team);
    // For Each loop does not return anything
    return team
})

// Output of below code = undefined 
// console.log(teams);

const numbers = [11,22,33,44,55,66,77,88,99,100]

// const greaterThan44 = numbers.filter((num) => num > 44)
// console.log(greaterThan44);

const greaterThan44 = numbers.filter((num) => {
    return num > 44})
// console.log(greaterThan44);


const forEachGreaterThan44 = []

numbers.forEach((num) => {
    if(num > 44){
        forEachGreaterThan44.push(num)
    }
})

// console.log(forEachGreaterThan44);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   console.log(books);
const books1 = books.filter((book) => book.publish > 2000)
// console.log(books1);
const books2 = books.filter((book) => book.publish > 2000 && book.edition === 2016)
// console.log(books2);
const books3 = books.filter((book) => book.genre === 'History')
// console.log(books3);