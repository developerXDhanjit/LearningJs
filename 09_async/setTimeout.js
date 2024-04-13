let mainTxt = document.querySelector('#mainTxt');
let btn = document.querySelector('#stop');

const sayMsg = () => {
    console.log("Message in the future , 1 second after")
}

let changeText = () => {
    mainTxt.innerHTML = 'This is Ultra Developer';
    mainTxt.style.color = 'red';
    mainTxt.style.fontSize = '2rem';
}

//Runs one time after the given time (in ms)
setTimeout(sayMsg, 1000)
let changeTime = setTimeout(changeText, 2000)

// Even after putting setTimeout in a variable , it doesnt stops executing

// Clear Timeout needs reference for which set Timeout

btn.addEventListener('click', function () {
    clearTimeout(changeTime)
    console.log(`Interval was stopped `);
})
