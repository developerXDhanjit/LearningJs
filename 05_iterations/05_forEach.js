let languages = ["Java", "Javascript", "Html", "Python", "C++"];

languages.forEach(function (item) {
  // console.log(item);
});

languages.forEach((item) => {
  // console.log(item);
});

/* Since its a callback function we are not to write the names of the fns , here */

/* Here is something cool  */

const PrintMe = (item) => {
//   console.log(item);
};

languages.forEach(PrintMe);

/* Remember to only give the reference of the function here and not execute it  */

/* Parameter in this array are not just item , it conisits of item , index and the whole array */

languages.forEach((item, index, arr) => {
  // console.log(item , index, arr);
});


/* Arrays inside objects */

let languageDate = [
  {
    langName : "Javascript", 
    fileName : "js"
  },
  {
    langName : "Ruby", 
    fileName : "rb"
  },
  {
    langName : "Python", 
    fileName : "py"
  }
];


languageDate.forEach((item)=>{
console.log(item.langName , item.fileName);

})