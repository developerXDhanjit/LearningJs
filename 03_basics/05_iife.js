/* Immediately invoked function expression  */

(function msg() {
  console.log("Hello JS developer");
})();

// Using arrow function for the same

(() => console.log("Hi Computer"))();

/* How to pass params and arg  */

((name) => console.log("My name is ", name))("Dhanjit")
