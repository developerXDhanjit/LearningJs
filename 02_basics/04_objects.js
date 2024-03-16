// TODO: Objects in depth  //

let ultraUser = new Object(); //Singleton Object
// let ultraUser = {} // Non-singleton Object

ultraUser.id = "one4uall1234";
ultraUser.name = "NamMeKyaRakhaHain";
ultraUser.age = 16;
ultraUser.subjects = {
  first: "Programming",
  second: {
    finance: {
      self: "Own ",
      micro: "Adam Smith ",
      macro: "idk",
    },
    startup: {
      books: "The hard thing about hard things",
    },
  }, // TODO: nested object
  third: "Spirituality ",
};

// console.log(ultraUser.subjects.second.finance.self); //Accesing inside the objects object..

// console.log(ultraUser.subjects?.second.finance.self); //Accesing inside the objects object.. ? is used for safety will know later on ...

let simpObj = {
  1: "a",
  2: "b",
  3: "c",
};

let anotherSimpObj = {
  4: "d",
  5: "e",
  6: "f",
};

// let addedSimpObj = {simpObj , anotherSimpObj} //not the right method

/*TODO: Using assign  */

// let target = {}
// let addedSimpObj = Object.assign( target ,simpObj , anotherSimpObj)
//Empty braces => target is given to get the desired outcome
// => Recommended so that all the source object get inside the target
// console.log(addedSimpObj == target); //clears all the confusion

/* TODO: Using spread operator  */

let addedSimpObj = {...simpObj , ...anotherSimpObj}
// Will be used mostly

// console.log(addedSimpObj);


/* FIXME: Objects inside an array  */

const users = [
    {
        id: 1 ,
        name : "Krishna"
    },
    {
        id: 2 ,
        name : "Rahul"
    },
    {
        id: 3 ,
        name : "Sam"
    },
]

// console.log(users[1].name); // Ways to access 

/* FIXME: Key Values  */

let regularUser = {
    id : "123abc", 
    name : "Shubham", 
    class : "XII"
}

// console.log(regularUser);
console.log(Object.keys(regularUser));
console.log(Object.values(regularUser));
console.log(Object.entries(regularUser)); //Rarely Used

console.log(regularUser.hasOwnProperty('class'));
