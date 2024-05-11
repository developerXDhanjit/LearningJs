const baseURL = 'https://source.unsplash.com/all/300x300';

/* Steps : 
  1. get the button , content in js 
  2. get the img src 
  3. append the img in content 

  but , i saw the same image reapeating the changed the query and now , with math .random , changed quite a few things 

 */


const content = document.querySelector(".content")
const button = document.querySelector('#getImage')




function imagefeed() {
    let random = Math.floor(Math.random() * 100)
    const img = document.createElement("img");
    img.src = `${baseURL}?${random}`
    content.appendChild(img)

    random = Math.floor(Math.random() * 100)
    console.log(img.src);
}


button.addEventListener("click", (event) => {
    imagefeed()
})