// If Statement

/* if(true){
    //Value to be executed
} */

//Comparision operators

// < , > , == ,!= , === , !== <= , >=

let isLoggedIn = true;
let tempt = 20;
if (isLoggedIn) {
  console.log("Yes , he is logged in ");
}

if (tempt < 25) {
  let teaStatus = "Is ready";
  console.log("Temperature is less than 25");
  console.log(`Your tea ${teaStatus}`);
} else {
  let teaStatus = "Is Not ready";
  console.log("Temperature is more than 25");
  console.log(`Your tea ${teaStatus}`);
}
// console.log(teaStatus); //Must throw an error due to scope ..
console.log("Code Executed");

/* If-else-if */

let health = 600;

if (health < 100) {
  console.log("Your health is less than 100 , You need immediate attention");
} else if (health < 250) {
  console.log(
    "Your health is less than 250 , You don't need immediate attention. But you need to be careful about your health"
  );
} else if (health < 500) {
  console.log("Your health is less than 500 , do something to get fit ");
} else if (health < 750) {
  console.log(
    "Your health is less than 750 , you fall in average category try more to have good muscles"
  );
} else if (health > 750) {
  console.log(
    "Your health is more than 750 , you are fit and healthy , good work"
  );
} else {
  console.log("Some Error occured");
}

/* Checking two Conditions   */

let userLoggedIn = true;
let hasDebitCard = true;

if (userLoggedIn && hasDebitCard) {
  console.log("You are logged In and You have debit card ");
} else if (!userLoggedIn && !hasDebitCard) {
  console.log("You dont have debit Card and you are not logged in");
} else if (!userLoggedIn) {
  console.log("You are not logged in ");
} else if (!hasDebitCard) {
  console.log("You dont have debit CARD");
}

/* && is used to check if both the conditions are true or not  */

let loggedInFromGmail = false;
let loggedInFromEmail = true;

if (loggedInFromEmail || loggedInFromEmail) {
  console.log("Welcome to the HOMPAGE , you are logged IN");
} else {
  console.log("LogIn from email or gmail");
}

/* || is used to check if any one of the condition is true or not  */
