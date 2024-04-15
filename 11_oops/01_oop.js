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

    greetWell : function () {
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

