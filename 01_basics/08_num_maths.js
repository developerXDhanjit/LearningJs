let score = 1.4
//console.log(score);

let newScore = new Number(200);
//console.log(newScore);

let finalScore = 250.3 
let acurateFinalScore = 250.655

// console.log(finalScore.toFixed(2)); //to decimal place 2 
//console.log(acurateFinalScore.toFixed(2)); //to decimal place 2

let largeNum = 10000000
// console.log(largeNum.toLocaleString('en-IN')) //Indian system 
// console.log(largeNum.toLocaleString()) //US system 

//console.log(typeof (finalScore.toString())) 
//converts to string --> Properties of strings can be applied ... 


/* Maths ,,,,,,,,,,, */

let pi = Math.PI ;
// console.log(pi) //Value of pi 
/* Rounding off  */

let absolute4 = Math.abs(-4) // Calculating the absolute value of a num
//console.log(absolute4);

/* Rounding off  */
// console.log(Math.round(finalScore)); //Nearest value
// console.log(Math.ceil(finalScore)); // ceil -> ceiling , the larger value
// console.log(Math.floor(finalScore)); // smaller one 

/* Random number generator */

let randomNum = Math.random() //Random number between 0 to 1 
let minNum = 11 // setting the minimum value of randomNum
let maxNum = 22 // Max value 

for( let i = 0 ; i<20 ; i++){
    randomNum = Math.floor(Math.random()*( maxNum - minNum + 1 ) + minNum) //formula for calculating 
    console.log(randomNum); // logging 
} //Using a loop for knowing many values 