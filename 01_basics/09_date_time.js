let today = new Date() //Declaring a date 

/* The ways to use Date  */
// console.log(today)
// console.log(today.toDateString());
// console.log(today.toLocaleDateString());
// console.log(today.toString());
// console.log(today.toTimeString());
// console.log(today.toJSON());

let awsomeDay = new Date( 2026 , 0 , 1) //A specific date
let anotherDay = new Date("2024-03-15").toISOString();

// console.log(`The day I am writing is code is on ${anotherDay}`)
// console.log(`The day I become a fully functional web developer is on  ${awsomeDay.toDateString()}`);

let timeStamp = Date.now()
 // console.log(timeStamp);
 // console.log(awsomeDay.getTime()); //prints in miliseconds 

 console.log(Math.floor(timeStamp / 1000)); //Converting into seconds 

 /* Extracting month , day , year ... from the date  */

// console.log(awsomeDay.getDay(), "Day");
// console.log(awsomeDay.getMonth() + 1, "Month"  ); // +1 is used so that the end user get the months dont start from 0 
// console.log(awsomeDay.getFullYear(), "Year" );


/* To locale string allow us to customize the date .. styles */

console.log(today.toLocaleString('default', {
    weekday : "long"
}));
