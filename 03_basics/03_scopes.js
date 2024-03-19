/* Scopes are to the extent where the value of a variable should be defined {} , is mainly used  */
let alpha = "Outer Alpha ";
if (true) {
  const alpha = "Alpha";
  let beta = 2;
  var gamma = 3;
  console.log(`Inner : ${alpha}`);
}

// console.log(alpha);
// console.log(alpha); , should give an error as it is outside the scope

// console.log(beta); same case

// console.log(gamma); //Here is the problem

/* Block and global scope  */

/* More on scopes  */

function one() {
  let myName = "Dhanjit";

  function two() {
    let title = "Nath";
    console.log(myName); 
    /* This value can be accessed  */
  }
  // console.log(title); //Value cannot be accessed outside the block scope 
  two();
}

one();




/* in if - else statements  */

if (true) {
  const name = "Dhanjit"

  if (true) {
    const title = " Nath"
    console.log(name, title);   
  }

  // console.log(title); //Error
  
}

// console.log(name); // error

/* Think of it like chocolate , a kid can take chocolate from an elder one but an elder cant take the  chocolate from kid 
lly , variable of a global scope can be accessed inside a scope but a variable declared inside a scope cannot be accessed outside the scope 

*/


/* Interesting Case.............. */

console.log(addOne(1)) //Throws no error 

function addOne(params) {
  return params + 1 
}

// addTwo(3) //Throws an error 
const addTwo = function (params) {
  return params + 2 
}

addTwo(3) //But works fine here 

/* Trying */

const pi = Math.PI;

function one() {
  const sqr2 = 4;

  function two() {
    console.log(sqr2);
    console.log(pi + " Inside ");
  }
  two();
  console.log(pi + " Outside Two");
}

one();