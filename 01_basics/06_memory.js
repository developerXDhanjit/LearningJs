/* Stack(Primitive) VS HEAP(Non-Primitive)  */

let myName = "Dhanjit Nath"
let anotherName = myName // A copy of myName is given here 
anotherName = "Dhan" // Change the value to dhan for another name

console.log(anotherName); //Does not change the value to "Dhan"
console.log(myName)

/* Going further in the  concept of heap memory  */

let userOne = {
    name: "userOne",
    email: "userOne@gmail.com",
    job:"at google"
}

let userTwo = userOne 

userTwo.email = "userTwo@gmail.com"

console.log(userTwo.email)
console.log(userOne.email)
