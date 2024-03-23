/* let languages = ["Java", "Javascript", "Html", "Python", "C++"];
const langData = languages.forEach((e)=>{
    // console.log(e);
    return e
})

console.log(langData);

//ForEach doesn't returns the values 

*/

const nums = [1,2,3,4,5,6,7,8,9]

/* const newNums = nums.filter((num)=> num > 5);
console.log(newNums);  */

/* Filter returns the values  */

/* to do the same with forEach  */


/* const newNums = []; 

nums.forEach((e)=>{
    if (e > 5) {
        newNums.push(e)
    }
})

console.log(newNums); */

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

//   let fictionBooks = books.filter((book)=> book.genre === 'Fiction');
// let booksAfter2000 = books.filter((book)=> book.publish >= 2000)
let ultraBooks = books.filter((book)=> {
    return book.genre === 'Science' && book.publish >= 2000;
});
console.log(ultraBooks);
// console.log(booksAfter2000);