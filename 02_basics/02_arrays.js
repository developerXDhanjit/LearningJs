let myArray = [0, 1, 5, 3, 8, 8, 99];
let notArray = "Developer";
let newAnimes = new Array(
  "Solo Leveling ",
  "COTE 3 ",
  "Mashle 2 ",
  "One Piece "
);

//myArray.push(newAnimes); // the array gets added as a single entity

let myArrayConcated = myArray.concat(newAnimes); // adds as every item in the array as a separate item in the new array , the array is a new one

//console.log(myArrayConcated);

let newSpread = [...myArray, ...newAnimes];
//Spread operator => Preffered
//console.log(newSpread);

let someArray = [1, 2, 3, [4, 5, 6], 7, 8, [9, [10, 11, [12, 13]]]];
//It is a mess of array inside array

let realSomeArray = someArray.flat(3); // Infinity
// console.log(realSomeArray);

// console.log(Array.isArray(notArray)); //boolean value is returned

let okArray = Array.from(notArray); // converting to array

console.log(Array.isArray(okArray), okArray);

let notOkArray = Array.from({ name: "developer" });

console.log(notOkArray); //Interesting Case


/* Array - of  */

let num1 = 120 
let num2 = 124 
let num3 = 128 
let num4 = 129 

console.log(Array.of(num1, num2, num3, num4));