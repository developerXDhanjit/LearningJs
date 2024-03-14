let userName = "Hitesh";
let friends = 100;

//console.log(userName + " friends " + friends) ; //Not a good method ...

/* Mordern Day approach  */

console.log(`${userName} has ${friends} friends`); // String Interpolation

const newName = new String("Hitesh Choudhary ");

console.log(newName);

console.log(newName.__proto__); // An object with the string properties

console.log(newName.length);
console.log(newName.toUpperCase()); //upper case

console.log(newName); // Doesnt change the original string

console.log(newName.charAt(2));
console.log(newName.indexOf("t"));

//Additional methods

let newString = newName.substring(0, 4);
// 4 is excluded
//Cant give neg value in substring

console.log(newString);

let anotherString = newName.slice(0, -4);
//Interesting --> negative means starts from the end

console.log(anotherString);


let otherString = "    dhanjit  nath    "
console.log(otherString);
console.log(otherString.trim()); //Removes the spaces in the start and end of the string


let url = "http://example.com/test%20test.html"
console.log(url);
console.log(url.replace("%20", "_"));

console.log(url.includes('test'))