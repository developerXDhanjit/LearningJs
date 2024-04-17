/* Object literal means literally an object  */

const methods = {
    name: "DeveloperXDhanjit",
    coding: "Always",
    javascript: "forever",

    sayHello: function () {
        return 'Hellow'
    },

    addTwoNum: function (a, b) {
        return a + b
    },

    greetWell: function () {
        // console.log(this); //Print the current object methods
        return ` Welcome ${this.name} , You are ${this.coding} Coding `


        //this keyword is used to show the current context here
    }


}


/* console.log(methods.sayHello());
console.log(methods.addTwoNum(2, 4));
console.log(methods.greetWell()); */



/* Use of this keyword , for reference of which data , arr , obj  

Will be more detailed in prototypes
*/

/* Constructor is used to create different objects using some structured method */

//new is a constructor func 
//Multiple instances from the same object literal 


/* Lets try something with functions like objects ... */

function user(username, isLoggedIn, id) {
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.id = id;

    return this

    // return {username,isLoggedIn,id}
    //use this instead 
}

/* let user1 = user("Dhanjit", "true", 8989)
let user2 = user("Hitesh", "false", 8990)
 */
// console.log(user1); //Value gets overitten 
// console.log(user2);


/* To create a new instance we use the keyword new  */

let user1 = new user("Dhanjit", "true", 8989)
let user2 = new user("Hitesh", "false", 8990)

/* console.log(user1);
console.log(user2); */

/* Notes for new keyword 

1. An empty object is created at first 
2. A constructor function is called because of the new keyword
   Argument are packed in it and given 
3. The argument are injected in it . {this}
4. We get it inside the function 


*/


/* Constructor  */

console.log((user1.constructor)()); // Returns a function user  , i invoked it and checked the values 
 

