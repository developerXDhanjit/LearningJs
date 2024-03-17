/* Functions in JS  */

function sayHello() {
  console.log(" Hello ! ");
}

// sayHello(); //Invoking the function

/* function subTwoNum(num1 , num2) {
    console.log(num1 - num2);
}
 */
// subTwoNum(5,3)
//  subTwoNum("3" , 5);  //Might cause issues sometimes

// const someResult = subTwoNum(3,1); //Not the best way

// console.log(`Result : ${someResult}`); //Prints undefined

/* Another function to declare in a better way  */
/* 
function square(num) {
    let sqr = num * num 
    return sqr  
    
    //or 

    return num * num 

    //Nothing is executed after return 
    
}

let sqr7 = square(7) 

console.log(sqr7); */

function userLoginMessage(username = "Anonymous") {
  /* we put username = "anonymous", is a default value  ,
  we can avoid the situation of undefined */
  if (!username) {
    /*
     !username and username === underfined are pretty similar , 
     we will look into that later 
    */
    return "Please enter a value";
  }

  return `Hurray! You just logged in , ${username}`;
}

// userLoginMessage("Dhanjit"); //Wont print ! the values

// console.log(userLoginMessage("Dhanjit "));
console.log(userLoginMessage()); // Would print undefined

/* Notes 

parameters are the inputs we write when we are creating a function , 
arguments are the values we give when we invoke the function 

*/
