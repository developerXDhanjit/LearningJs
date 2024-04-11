/* Selecting the reqr elements from dom and preparation  */
/* Generating a random Number  */
const randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const startOver = document.querySelector(".resultParas");

const lowOrHigh = document.querySelector(".lowOrHi");

let guessArr = [];
let numGuess = 1;

let playGame = true;

/* Decalraing the functions / methods that will check the logic or so .. */

const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert("Enter a valid Number ");
  } else if (guess < 1) {
    alert("Number cannot be less than 1");
  } else if (guess > 100) {
    alert("Number cannot be more than hundered than 100");
  } else {
    guessArr.push(guess)
    if (numGuess === 11) {
      displayGuess(guess)
      displayMsg(`Game Over , The correct number was ${randomNumber}`)
      endGame()
    }
  }
};
const analyseGuess = (guess) => {};

const displayGuess = (guess) => {};

const displayMsg = (msg) => {};

const endGame = () => {};
const newGame = () => {};

/* The logic for the Game i.e combing all those functions together  */

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
} else {
}
