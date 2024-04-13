let mainTxt = document.querySelector('#mainTxt');
let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');



let changeTextRed = () => {
    mainTxt.innerHTML = 'This is Ultra Developer';
    mainTxt.style.color = 'red';
    mainTxt.style.fontSize = '2rem';
}

let changeTextBlue = () => {
    mainTxt.innerHTML = 'This is Ultra Developer Max';
    mainTxt.style.color = 'blue';
    mainTxt.style.fontSize = '3rem';
    flag = 1
}

var flag = 2
let jaddu = setInterval(() => {
    if (flag == 1) {
        changeTextRed()
        flag = 2;
    } else if (flag == 2){
        changeTextBlue()
        flag = 1 ;
    }
} , 1000) 

stopBtn.addEventListener('click' , ()=>{
    clearInterval(jaddu)
})

