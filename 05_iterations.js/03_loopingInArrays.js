 /* Looping on Arrays and objects  */
let languages = ["Java", "Javascript" , "Html" , "Python", "C++"]
 for (const langauge  of languages) {
    // console.log(langauge);
 }

 /* Working fine , can also be done in strings */

 /* Maps */

 let newMap = new Map()
 newMap.set('date' , '22March')
 newMap.set('year' , '2025')
 newMap.set('season' , 'spring')
 newMap.set('coding' , 'isFun')

//  console.log(newMap);

 /* Known for storing unique values */

 /* Looping in the map  */

 for (const [key, value] of newMap) {
    // console.log(`${key} :- ${value}`);
 }

 /* [key, value] => destructuring of arrays */

 let gameList = {
    game1 : "Chess", 
    game2 : "Sudoku", 
    game3 : "Cheekers"
 }

//  console.log(gameList);
 /* Looping in objects  */
/* 
 for (const [key, value] of gameList) {
    console.log(`${key} :- ${value}`);
 } */

 /* Huuh , objects are not iterable ???? */