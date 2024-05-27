const input = document.querySelector("#input-field");
const output = document.querySelector("#output-field");

let btn = document.querySelectorAll(".btn");

/* Steps ? 
 > " Knowing which button was clicked "
 > "Taking the input of that button and also the style of that button "
 > "on chosing that style  add that style only on the element "
 > "show the output on clicking that button "
*/

btn.forEach((e) => {
  e.addEventListener("click", (event) => {
    const style = event.target.classList[1]
    const word = input.value
    output.innerHTML = handleStyle(style , word)
  })
})


function handleStyle(style, word) {

  switch (style) {
    case "uppercase":
      return word.toUpperCase()
    case "lowercase":
      return word.toLowerCase()
    case "bold":
      return `<b>${word}</b>`
    case "italic":
      return `<i>${word}</i>`
    case "capitalize":
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    case "underline":
      return `<u>${word}</u>`
    default:
      return "error occured"
  }
}

