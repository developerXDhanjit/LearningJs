/* Selecting the elements from HTML */
let fetchBtn = document.querySelector('#fetch')
let card = document.querySelector('#card1')
let image = document.querySelector('#image')
let followersShow = document.querySelector('#followers')
let xhr;


/* Declaring some variables that will be used later */
let urlImage;
let followers;

//Variables used only in xmlReq

let githubUrl = `https://api.github.com/users/developerxdhanjit`

/* Sending the xmlHttpRequest Function */

/* function xmlRequest(url) {
    xhr = new XMLHttpRequest();
    xhr.open("GET", url)
    xhr.onload = getDetails
    xhr.send();
    return xhr;
} */


/* Getting the details  */
/* const getDetails = () => {
    fetchFunc()
} */
/* EventListener on the button  */
/* 
const fetchFunc = () => {
    fetchBtn.addEventListener('click',
        function () {
            let data = JSON.parse(xhr.responseText)
            urlImage = data.avatar_url
            followers = data.followers

            image.outerHTML = 
            `
            <img id="image" src="${urlImage}" alt="">
            
            `

            followersShow.innerHTML = 

            `
            <p id="followers">Followers : ${followers} </p>

            `

        })
};
 */

/* xmlRequest(githubUrl)
 */
/* Trying to do the same with fetch and then  */

/* Getting the response  */
fetch(githubUrl)
    .then((response) => {
        return response.json()
    }).then((data) => {
        let followers = data.followers
        let urlImage = data.avatar_url
        let returnObj = {
            followers: followers,
            urlImage: urlImage
        }
        return returnObj;
    }).then((gotObj) => {
        console.log(gotObj);
        fetchBtn.addEventListener('click', () => {
            image.outerHTML =
                `
            <img id="image" src="${gotObj.urlImage}" alt="">

            `

            followersShow.innerHTML =
                `
            <p id="followers">Followers : ${gotObj.followers} </p>
            `
        })
        
    })

/* Event listener an and function on the button  */
