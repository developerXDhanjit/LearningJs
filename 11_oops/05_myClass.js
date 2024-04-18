// All are just syntactical sugar that came after ES6

/* class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;

    }

    sayName() {
        return `Your Name is ${this.username}`
    }

    getEmail() {
        return this.email
    }

    trueName() {
        return this.username.trim()
    }
}

let userOne = new User("Programmer   ", "program@everytime.ai", "pass89890")

console.log(userOne.trueName());
 */

/* Behind the scenes  */
 // is just all from prototypes 

 function User(username, email , password) {
    this.username = username;
    this.email = email;
    this.password = password;
 }

 User.prototype.sayName = function(){
    return this.username
 }

 let tea = new User('tea' , 'tea@tea.tea' , 'teaIsChai')
 console.log(tea);


 

































