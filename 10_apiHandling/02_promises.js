/* const promiseOne = new Promise((resolve, reject) => {
    //Does an async task or DB calls 
    const sayHello = () => {
        console.log('Hello Promises')
        resolve();
    }
    setTimeout(sayHello, 1000)

})

const done = () =>{
   console.log('Done')
}
promiseOne.then(function(){done()})
 */



/* 
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        //After getting some hardcore data values 
        let userName = "Dhanjit"
        let id = 191919
        let sendObj = {
            userName: userName,
            id: id,
        }
        resolve(sendObj)
    }, 1000);
})

promiseTwo.then((gotObj)=>{
    console.log(gotObj);
})

*/

/* const promiseFour = new Promise((resolve, reject) => {
    let error = false
    let obj = { name: 'Dhanjit', roll: 11 }
    setTimeout(() => {
        if (!error) {
            resolve(obj)
        } else {
            reject('Something went wrong')
        }
    }, 1000);
}) */
/* 
promiseFour.then((obj) => {

    return obj.name;
})
    .then((name) => {
        console.log(name);
    })
    .catch((err) => {
        console.log(err);
    }).finally(()=> console.log('Output to be printed finally '))
 */
/* 
const promiseFive = new Promise((resolve, reject) => {

    setTimeout(() => {
        let error = true
        let obj = { name: 'Partha', roll: 17 }
        if (!error) {
            resolve(obj)
        } else {
            reject('Something went wrong')
        }
    }, 1000);
})

async function consumePromise() {
    try {
        let response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise() */


let getUrl = 'https://jsonplaceholder.typicode.com/users'


/* 
async function getUsers() {
   try {
    let response = await fetch(getUrl)
    let data = await response.json()
    console.log(data);
   } catch (error) {
    console.log("E:" , error);
   }
}

getUsers() */

/* Other way to do that  */

fetch(getUrl)
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
.finally(()=>{
    console.log('Finally Done');
})