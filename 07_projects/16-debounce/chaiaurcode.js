// with each character typed in search box, make an API call to randomuserme api and display a card below it. Use debounce concept to reduce api calls.

// You will automatically learn about this and apply in this. ☕️


const userInput = document.querySelector("#user-input")
const userCard = document.querySelector("#user-card")
const UserName = document.querySelector("#UserName")
const ImageSrc = document.querySelector("#ImageSrc")
const Email = document.querySelector("#Email")

console.log(UserName, ImageSrc, Email);

const fetchUrl = `https://api.freeapi.app/api/v1/public/randomusers/user/random`

async function fetchUserDetail() {
    try {
        const response = await fetch(fetchUrl)
        let jsonResponse = await response.json()
        let data = jsonResponse.data

        let username = `${data.name.title} ${data.name.first} ${data.name.last}`
        let email = data.email
        let ImageSrc = data.picture.large

        renderDetails(username, ImageSrc, email)

    }

    catch (error) {
        console.log(error);
    }
}

function debounce(func, delay) {
    let timer;
    return (...args) => {

        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay);
    }
}

const debouncedCall = debounce(fetchUserDetail, 600)

const renderDetails = (username, image, email) => {

    userCard.style.display = "block"

    UserName.innerHTML = username;
    Email.innerHTML = email;
    ImageSrc.src = image




}

userInput.addEventListener("keydown", (event) => {
    debouncedCall(event)
})