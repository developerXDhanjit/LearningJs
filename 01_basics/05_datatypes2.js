//Non Primitive  Datatypes
// Arrays , objects , functions

const score = 100;
const scoreExact = 100.8;

const id = Symbol("123");
const anotherId = Symbol("123");

let bigNumber = 334993849384498339393303n;

let isLoggedIn = true;
let temp = null;
let userEmail;

/* 
console.log(id);
console.log(anotherId);
console.log(id == anotherId);
console.log(bigNumber);
console.log(typeof bigNumber); */

//Arrays

/* const anime = ["Your Name " , " I want to eat your pancreas" , "A Silent voice " , "5 cm per second"]
console.log(anime) */

//Object
/* let myObject = {
    name: "Dhanjit",
    age: 17,
    isLoggedIn: true,
    email: "dhanjit@gmail.com",
}

console.log(myObject) */

//Function

let myFunction = function () {
  console.log("This is my function");
};

myFunction();

console.log(typeof myFunction);

/* Note : 
1. Dynamically typed language vs static --> defining the type of the variable */
