/* quotes vs Backticks  */

const heroes = `
Heroes : 
* Spidey 
* Thorfinn
* MyDad
`;
console.log(heroes);
// Backticks allows us to span multiple lines also not to forget string interpolation

/* const games = " Physical :
Cricket 
FootBall  
" */

// Whereas this throws an error and kind of old school and complex to write code

/* In JavaScript Strings are immutable 
The code below shows what I mean : 

*/

let someArr = [1, 2, 3, 4, 5];
someArr[0] = 2;

console.log(someArr);

/* In arrays you could update the postion of the array in this way   */

let favLang = "JavaScript";

favLang[0] = "L";

console.log(favLang[0]);

/* But in Strings you could not actually update the character postition although you can access them  */

/* The Usual Way of doing so is by creating a new string on that variable Like */

favLang = "Type" + favLang.substring(4);
console.log(favLang);

/* Iteration in string is done using For of loop mostly */
let newWord = "";
for (const character of favLang) {
  newWord += `${character}_`;
}

console.log(newWord);
console.log(newWord.slice(0,-1)); //To remove the trailing underscores