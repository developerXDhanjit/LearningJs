//Singleton --> Concept

// Object.create

//Object literal

const symb = Symbol("key");

let hisData = {
  name: "Kankan",
  "full name ": "Kankan Deka",
  // symb: "myKey", //Not the right way
  [symb]: "hisKey", // right syntax for symbol
  class: "XII",
  subject: "Physics",
  isLoggedIn: false,
  offDays: ["Sunday", "Thursday"],
};

//console.log(hisData);

/* Accessing the value inside the objects  */

// console.log(hisData.name); //One Way
// console.log(hisData["name"]); //The other way
// console.log(hisData.full name ); // => Can't Do This
// console.log(hisData["full name "]); //Correct Way

// console.log(typeof hisData.symb); 
//console.log(hisData[symb]);

/* Updating the value inside the object  */

// hisData.class = "XI"
// console.log(hisData.class);

// Object.freeze(hisData) //Freezes the object , stops any furthur changes 

// hisData.class = "X" //Doesn't change due to freeze 
// console.log(hisData.class);


/* Function inside an object  */

hisData.greeting = function(){
    console.log("Nice to meet ya ! ");
}

hisData.greetingTwo = function(){
    console.log(`How are you , ${this.name} ?  `);
}

// console.log(hisData.greeting);//Function is not executed but we have the reference here
console.log(hisData.greeting()); 
console.log(hisData.greetingTwo()); 

/* Note 

In most cases we use . instead of [] for accesing the value using key in objects , 

but in certain cases we need to use [] .

*/
