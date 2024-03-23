const nums = [1, 2, 3, 4];
let initialVal = 0;

let reduceNums = nums.reduce(function (acc,curv) {
  return acc + curv;
}, 0)

/* const reducedNums = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue, initialVal;
}); */
console.log(reduceNums);