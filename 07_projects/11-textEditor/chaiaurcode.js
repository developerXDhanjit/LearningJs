const input = document.querySelector("#input-field");
const output = document.querySelector("#output-field");

let btn = document.querySelectorAll(".btn");

const upperCase = document.querySelector(".uppercase");
const lowecase = document.querySelector(".lowecase");
const captalize = document.querySelector(".captalize");
const bold = document.querySelector(".bold");
const italic = document.querySelector(".italic");
const underline = document.querySelector(".underline");

let text = input.value;

/* 1. Returns the style when each button is clicked */

btn.forEach((button) => {
  button.addEventListener("click", (event) => {
    let style = event.target.className.slice("4").trim();
    let textOutput = handleTarget(style);
    handleOutput(textOutput);
  });
});

/* 2. Handling the style  */

const handleTarget = (target) => {
  if (target === "uppercase") {
    return text.toUpperCase();
  } else if (target === "lowercase") {
    return text.toUpperCase();
  } else {
    alert("Feature coming soon");
    return;
  }
};

const handleOutput = (outputText) => {
  output.innerHTML = outputText;

};
