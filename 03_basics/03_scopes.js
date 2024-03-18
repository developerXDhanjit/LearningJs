/* Scopes are to the extent where the value of a variable should be defined {} , is mainly used  */
let alpha = "Outer Alpha "
if (true) {
  const alpha = "Alpha"
  let beta = 2;
  var gamma = 3;
  console.log(`Inner : ${alpha}`);
}

console.log(alpha);
// console.log(alpha); , should give an error as it is outside the scope 

// console.log(beta); same case 

console.log(gamma); //Here is the problem

/* Block and global scope  */
