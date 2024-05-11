const btn = document.querySelector('#emoji');
const emojis = [
  '😆',
  '😅',
  '🤣',
  '😂',
  '😀',
  '🤑',
  '🤨',
  '🙂',
  '😊',
  '😗',
  '😛',
  '😏',
  '🤥',
  '😴',
  '🥺',
  '😧',
  '😇',
  '😳',
  '🙃',
  '🥴',
  '🧐',
  '🤨',
  '😒',
  '🤔',
  '🤭',
  '🥰',
  '🤐',
  '👀',
  '🤔',
  '🤪',
  '🥲',
  '😃',
  '😁',
  '😬',
];


/* Steps or so called the basic approach to solve this problem 
 1. function to call random emoji everytime the function is run 
 2. adding mouse over and mouse out event listener 
 ` on mouseover , show a random emoji 
   on mouse out , remove the emoji and show the grey scale screen `  





*/
let span = document.createElement("span")
const getRandomEmoji = () => {
  let random = Math.floor(Math.random() * emojis.length)
  let emoji = emojis[random]
  btn.textContent = emoji
}

const clearEmoji = () => {
  btn.textContent = ""
}


btn.addEventListener("mouseenter", (event) => {
  getRandomEmoji()
})

btn.addEventListener("mouseout", (event) => {
  clearEmoji()
})