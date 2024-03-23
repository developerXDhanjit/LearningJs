const langObject = {
  js: "javascript",
  cpp: "C++",
  rb: "Ruby",
  swift : "Swift"
};
console.log(langObject);

for (const key in langObject) {
    console.log(`Value for ${key} is ${langObject[key]}`);
}

/* Well will this loop also work in arrays */
let someArray = [1,2,3,4,5,6,7]
for (const key in someArray) {
    console.log(`Value of the arrays are ${someArray[key]}`);
}