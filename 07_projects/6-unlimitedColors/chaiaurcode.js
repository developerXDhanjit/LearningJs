let start = document.querySelector('#start')
let stop = document.querySelector('#stop')
let body = document.querySelector('body')


let randomColor = function () {
    let hex = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * 16)
        color += hex[random]
    }
    return color
}
let interval;
const startChangingColor = () => {
    const changeColor = () => {
        body.style.backgroundColor = randomColor();
    }
    if (!interval) {
        interval = setInterval(changeColor, 1000)
    }
}

const stopChangingColor = () => {
    // body.style.backgroundColor = 'black'
    clearInterval(interval);
    interval = null;
}
start.addEventListener('click', startChangingColor)
stop.addEventListener('click', stopChangingColor)

