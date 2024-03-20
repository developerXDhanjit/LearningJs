let userName = []

if (userName) {
    console.log(`Welcome ${userName}`);
}else{
    console.log(`Please Enter Your name`);
}

/* "" -> false , "SomeString" -> true
   [] -> true ????

   Falsy values - 
   false , 
   0 , -0 , BigInt 0n , 
   "" , null , undefined

   Truthy Values - 
   Everything that is not falsy 
   eg- 
   "0" 'false' " " [] {}
   function(){}
*/

if (function () {
    return 0
} ){
    console.log("function that returns 0 is a true value");
}

if (0) {
    console.log("zero");
}

/* Checking the length of the array if it empty of not  */

let emptyArr = []
if (emptyArr.length == 0) {
    console.log("The Array is empty");
}

/* Same for objects  */
let emptyObj = {}
if (Object.keys(emptyArr).length == 0) {
    console.log("The object is empty");
}