const cursor = document.querySelector('.cursor');
// an array of 10 colors in hex value
const colors = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
];

// add circle to cursor and change it's color as cursor moves on the screen. Pick color from these array

function cursorMove (){
  cursor.style.left = event.clientX
  cursor.style.top = event.clientY
}
window.addEventListener('mousemove' , (event)=>{
  cursor.style.backgroundColor = colors[0]
  document.body.style.cursor  = "none"
  cursorMove()
})

let button = document.querySelector("button")
console.log(button);

button.addEventListener('mousemove' , (event)=>{
  cursor.style.backgroundColor = colors[1]
  cursorMove()
} )