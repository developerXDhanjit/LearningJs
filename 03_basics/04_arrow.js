const user = {
  name: "ME ",
  class: "XI",

  welcomeMsg: function () {
    console.log(this);
    return ` ${this.name} , welcome to the website `;
    //This keword is used to indicate which scope we are refering ,working only inside the object
  },
};

// console.log(this);//Empty object inside node js
// console.log(user.welcomeMsg());
/*
let name = "Dhanjit Nath";
const pi = 3.14159;
function code() {
  let name = "Dhanjit";
  const pi = Math.PI;
  // console.log(this); //Doesn't work incase of functions
  console.log(name);
  console.log(pi);
}

code();

/* 

/* Interesting , we can acess value outside of funct but if the same name exists inside the function we access it ,,  */

/* Diving into Array Functions */

const code = () => {
  let lang = "javascript";
  console.log("We Love to code in ", lang);
  console.log(this); //To a surprise its empty than regular functions
};

code();

const addTwo = (num, Num) => {
  return num + Num;
};
console.log(addTwo(3,3));


const subTwo = (num, Num ,) => (num - Num)

/* This is called implicit return where we just can do things in one line and now return keyword is needed  */

/* returning an object in similar way  */

const obj = () => ({name : "Dhanjit"})
console.log(obj());

console.log(subTwo(6,2));