let score = "44abc"
let score2 = null
let score3 = undefined
let score4 = true

/*

console.log(typeof score , score);
console.log(typeof score2 , score2);
console.log(typeof score3 , score3);
console.log(typeof score4 , score4);

/*

//Converting String to number 

/*

let valueInNumberScore = Number(score)
let valueInNumberScore2 = Number(score2)
let valueInNumberScore3 = Number(score3)
let valueInNumberScore4 = Number(score4)

console.log(typeof valueInNumberScore , valueInNumberScore);
console.log(typeof valueInNumberScore2 , valueInNumberScore2);
console.log(typeof valueInNumberScore3 , valueInNumberScore3);
console.log(typeof valueInNumberScore4 , valueInNumberScore4);

*/

/* note :
1.NaN is a special type which says that it is not a number 

conversion to numbers ->
"44" => 44
"44xyz" => NaN
true => 1 , false => 0 

*/



// let isLoggedIn = "anyString"
// let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn)

/*
Note : 

conversion to boolean ->
0 => false , 1 => true 
"" => false ,  "anyString" => true

*/

let anyNumber = 22 
let stringNumber = String(anyNumber)
console.log(anyNumber, typeof anyNumber)
console.log(stringNumber, typeof stringNumber)