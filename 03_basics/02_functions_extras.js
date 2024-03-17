/* Rest operator and its uses  */

function shoppingCart(...itemPrice) {
  return itemPrice; //Returns an array of the arguments
}

console.log(shoppingCart(200, 3999, 39, 902, 93));

/*
 Uses of rest operator ...  
 when we dont know how many arguments will come !
*/

/* Handling objects inside a function */

let someUser = {
  name: "SomeOne",
  hobby: "Something",
  lives: "SomeWhere",
};

function handlingObject(anyObject) {
  return `Your name is  ${anyObject.name}, and you live  ${anyObject.lives} `;
}

console.log(handlingObject(someUser));

//Handling array is done in similar way 