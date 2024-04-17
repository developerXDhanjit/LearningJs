function addWithTwo(num) {
    return num + 2
}
addWithTwo.power = 2 ;


/* console.log(addWithTwo(2));
console.log(addWithTwo.power); // Yo yo yo , this is Just Wow 
console.log(addWithTwo.prototype); // Returns {} 
 */
/* Note

1. In javascript everything is object 
2. Function is function and also a object


Some more disciplined note by Hitesh Sir : on new keyword 

a) A new object is created  
b) Prototype is linked in it . It gets accessed to the properties and methods defined in the constructor

c) the constructor function is called 
d) new object is returned 

*/

function createUser(username, score ){
    this.username = username;
    this.score = score ; 
}

const userOne = new createUser("Dhanjit", 121)
const userTwo = new createUser("Hitesh", 222)

//Jis ka matlab this

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printScore = function(){
    return `Your Score is ${this.score}`
}

// console.log(userOne, userTwo);
// userOne.increment() // Boom , it does the job
// console.log(userOne, userTwo);
console.log(userOne.printScore())
// console.log(userOne, userTwo);