/* To make a method trueLenth where we can get the length of the trimmed string 
   this is how i made it , it works lets see how hitesh does it 

*/

function string(str) {
    this.str = str
}

string.prototype.trueLength = function () {
    let lenth = this.str.trim().length
    return `Lenth of Your String is ${lenth}`
}
let cat = new string("Cat    ")
let dog = new string("Dog               ")
// console.log(cat.trueLength());
// console.log(dog.trueLength());

/* Now this is gonna be fun 

Code from the video 
*/

let myArr = ["Code", "Study", "Health"]

let myObj = {
    name: "Anonymous",
    class: "idk",
    roll: 333,

    getClass: function () {
        return `Your class is ${this.class}`
    }
}

/* Global object function cration  */

Object.prototype.enterJS = function () {
    return ` Your are inside JS World`
}

// console.log(myObj.enterJS())
// console.log(myArr.enterJS())
// console.log("developer".enterJS())
/* Works for all both
--> if power is given to object , everyone also gets it 
---> if power is given to specific string , it remains to it only 


*/

/* Linking objects hmmm */
const human = {
    name : "noName",
    age : 18
}
const playGames = {
    chess: false,
    mobileGames: false,
    badminton: true,
    favoriteGame : 'Game of Life'
}

const eat = {
    fastfood: false,
    vegitables: true,
    nonVeg : true,
    favoriteFood : "Rice"
}

/* Learning prototypal inheritance


putting an object inside another object
*/

/* human.__proto__ = playGames

console.log(human.__proto__); */

/* Mordern synatax , does the same thing */

/* Object.setPrototypeOf(human, playGames)
console.log(human);
 */

/* Solving the problem from the video as mentioned  */

String.prototype.trueLength = function (){
    let trueLength = this.trim().length
    return `Length of your string is ${trueLength}`
}

let anotherName = "Alpha   ";
let ultraMe = "Beta   "
let series = "Eminence in Shadow"
console.log(anotherName.trueLength());
console.log(ultraMe.trueLength());
console.log(series.trueLength());
