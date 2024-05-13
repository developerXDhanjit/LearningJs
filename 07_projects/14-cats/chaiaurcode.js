const url = 'https://api.thecatapi.com/v1/images/search';
/* 
Steps : 

1. Select the dom where you want to show the cat img and on clicking which button 
2. fetch the image of cat and show on clicking the button on the content 

*/

/* Selecting DOM elements */

const button = document.querySelector(".btn")
const container = document.querySelector(".container")

async function fetchCat() {
    try{
    let response = await fetch(url)
    let jsonData = await response.json()
    let catImageUrl = jsonData[0].url
    console.log("Mission success");
    return catImageUrl
    }
    catch(error){
        console.error("error fetching cat " , error);
    }
}


function displayCat(){
    fetchCat()
        .then((imageURl) => {
            const img = document.createElement('img')
            img.src = imageURl
            container.appendChild(img)
        })
}

button.addEventListener("click" , displayCat)