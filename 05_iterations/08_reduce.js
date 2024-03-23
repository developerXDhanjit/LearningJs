const nums = [1, 2, 3, 4];
let initialVal = 0;
/* 
let reduceNums = nums.reduce(function (acc,curv) {
  console.log(`acc : ${acc} , curv : ${curv}`);
  return acc + curv;
}, 100) */

//Using arrowfunction 
let reduceNums = nums.reduce((acc,curv)=> (acc+curv),initialVal)

/* const reducedNums = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue, initialVal;
}); */
// console.log(reduceNums);

let shoppingCart = [
  {
    item : 'Mango',
    price : 149
  },
  {
    item : 'Apple',
    price : 59
  },
  {
    item : 'Grapes',
    price : 69
  },
  {
    item : 'Bread',
    price : 10
  },
  {
    item : 'Uncle Chips',
    price : 10
  },
]

/* To print the total price of the cart  */

let totalPrice = shoppingCart.reduce((acc,item)=> acc + item.price ,0)

console.log(`Total Price of the Cart is : ${totalPrice}`);