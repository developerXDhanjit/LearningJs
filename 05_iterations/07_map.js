const naturalNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const mapNum = naturalNums.map((num)=> num + 100)
// console.log(mapNum);

/* Chaining , map , filter
 */

const chainedNums = naturalNums
.map((num) => num * 100)
.map((num) => num - 101)
.map((num)=> {
    if (num == -1) {
        return 0
    }else{
        return num
    }
});
console.log(chainedNums);