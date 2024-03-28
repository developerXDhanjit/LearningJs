/* Selecting the buttons  */

let buttons = document.querySelectorAll(".button");
let body = document.querySelector("body");

/* Adding Event Listener to Each of the target  */



/* buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
  body.style.backgroundColor = e.target.id
  });
}); */

//short and fast Code 



/* 
Safe and Secure Way 
*/

buttons.forEach((btn)=>{
    btn.addEventListener('click' , function (event) {
        if (event.target.id == 'grey') {
            body.style.backgroundColor = 'grey'
            body.style.color = 'white'

        }
        if (event.target.id == 'white') {
            body.style.backgroundColor = 'white'
            body.style.color = 'black'
        }
        if (event.target.id == 'blue') {
            body.style.backgroundColor = 'blue'
            body.style.color = 'red'
        }
        if (event.target.id == 'yellow') {
            body.style.backgroundColor = 'yellow'
            body.style.color = 'green'
        }
    })
}
)
