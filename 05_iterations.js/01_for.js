/* For Loops */
/* for (let index = 0; index < 11; index++) {
  const element = index;
  if (element == 7) {
    console.log("7 is the best ");
  }
  console.log(element);
} */

/* Looping inside loops  */
/* 
for (let i = 1; i < 11; i++) {
  console.log(`Inner loop : ${i}`);
  for (let j = 1; j < 11; j++) {
    const element = j;
    console.log(`Outer loop : ${i} ,Inner loop : ${j} `);
  }
} */

/* Using this logic to create multiplication table  */

for (let outer = 1; outer < 11 ; outer++) {
  //console.log(` Table for ${outer} `);
  for (let j = 1; j < 11 ; j++) {
   // console.log(` ${outer} * ${j} = ${outer*j} `);   
  }  
}

/* Looping in arrays  */
let myArr = ["Honesty", "Brave" , "Happiness"]

for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
 // console.log(element); 
}


//Break and continue 

for (let index = 0; index < 20; index++) {
if (index == 7) {
  console.log(`The number ${index} detected`);
  break;
}
console.log(`Value of Index is : ${index}`);
}

for (let index = 0; index < 20; index++) {
if (index == 7) {
  console.log(`The number ${index} detected`);
  continue;
  //Forgive for this condition 
  // Doesnt get out of the loop 
}
console.log(`Value of Index is : ${index}`);
}