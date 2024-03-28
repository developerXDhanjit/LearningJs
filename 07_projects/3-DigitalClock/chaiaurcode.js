let clock = document.querySelector("#clock");

/* Updating everySecond  */

setInterval(function () {
  let now = new Date();
  clock.textContent = now.toLocaleTimeString()
}, 1000);
/* Done this was easy peasy */