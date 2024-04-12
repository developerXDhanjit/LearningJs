/* Selecting the reqr elements from dom and preparation  */
/* Generating a random Number  */
let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const startOver = document.querySelector(".resultParas");

const lowOrHigh = document.querySelector(".lowOrHi");

const p = document.createElement('p')

let guessArr = [];
let numGuess = 1;

let playGame = true;

/* Decalraing the functions / methods that will check the logic or so .. */

// Checking if the value is a number or not 
const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert("Enter a valid Number ");
  } else if (guess < 1) {
    alert("Number cannot be less than 1");
  } else if (guess > 100) {
    alert("Number cannot be more than hundered than 100");
  } else {
    guessArr.push(guess) // if number is okay push it to array 
    if (numGuess === 11) {
      displayGuess(guess)
      displayMsg(`Game Over , The correct number was ${randomNumber}`)
      endGame();
    } else {
      displayGuess(guess)
      analyseGuess(guess)
    }
  }
};

//Showing if the value is high or low or equal or so  

const analyseGuess = (guess) => {
  if (guess == randomNumber) {
    displayMsg(`You guessed the right number `)
    endGame()
  } else if (guess < randomNumber) {
    displayMsg(`Number You guessed  is Toooo low `)
  } else if (guess > randomNumber) {
    displayMsg(`Number you guessed is Tooo High`)
  }
};

// Clean the value , updates array and shows the value 
const displayGuess = (guess) => {
  userInput.value = '' //Last  Value is cleanned up 
  guessSlot.innerHTML += `${guess} ,`; // Show the value in html 
  numGuess++; // Incremets your number of guesses 
  remaining.innerHTML = `${11 - numGuess}`;

};

// To actually show the msg , interacts with dom 
const displayMsg = (msg) => {
  lowOrHigh.innerHTML = `<h3> ${msg} </h3>`
};

// Ending  and starting a new game 
const endGame = () => {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame" > START NEW GAME  </h2> `
  startOver.append(p);
  playGame = false;
  newGame()

};

const newGame = () => {
  //Taking the reference of h2 
  const newGamebtn = document.querySelector('#newGame')
  newGamebtn.addEventListener('click', () => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    guessArr = [];
    numGuess = 1;
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess} `
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = true

  })
};

/* The logic for the Game i.e combing all those functions together  */

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    validateGuess(guess); // checking the value if the given data is valid 
  });
} else {
}
