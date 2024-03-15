//Arrays :

let myArray = [0, 1, 5, 3, 8, 8, 99];
let newAnimes = new Array(
  "Solo Leveling ",
  "COTE 3 ",
  "Mashle 2 ",
  "One Piece "
);
//console.log(myArray);
//console.log(myArray[3]); //Index
//console.log(myArray["99"]); // -> Not possible in arrays

//console.log(newAnimes);
//console.log(newAnimes.length);

/* Arrays Methods :  */
newAnimes.push("Frieren"); //Adds the item to the end of the array
newAnimes.pop(); //Removes the item to the end of the array

newAnimes.unshift("Ninja Kamui"); //Adds to the start of the array
newAnimes.shift(); //Removes

//console.log(newAnimes.includes("One Piece ")); //returns a boolean 
//console.log(newAnimes.indexOf("Naruto")); // -1 since it doesnt exist in the array 

console.log(newAnimes);

let newAnimesList = newAnimes.join()
//console.log(typeof newAnimesList);

/* Slice and splice  */

console.log("A" , newAnimes);

console.log(newAnimes.slice(0,3), "Slice");
console.log("B" , newAnimes);

console.log(newAnimes.splice(0,3)) , "Splice";
console.log("C" , newAnimes);
/* Note : - 
1.Arrays are not primitive datatypes 
2. Arrays can store multiple datatypes 
3. zero-indexing 
4. JS arrays create shallow copies .. -> read in mdn docs 
Change in the array changes the original array 
5.Slice changes the copy of the array whereas , splice makes the changes in the array itself 
*/
