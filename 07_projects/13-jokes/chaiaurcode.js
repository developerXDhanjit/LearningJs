const url = 'https://api.chucknorris.io/jokes/random';
const displayJoke = document.querySelector("#display-joke")
const getJoke = document.querySelector("#getJoke")

// handle this end point with XMLHttpRequest

// handle this end point with promises

// handle the case of race condition


async function fetchRandomJoke(){
    let respone = await fetch(url)
    let data = await respone.json()
    displayJoke.textContent = data.value
}

getJoke.addEventListener("click" , (event)=>{
    fetchRandomJoke()
})

