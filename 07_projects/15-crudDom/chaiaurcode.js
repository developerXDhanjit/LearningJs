const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');
const book = document.querySelectorAll(".book")





/* Steps for building this crud operation DOM 

   1. Have an array of all the inputs 
   2. inside the array an object , with book , author and year
   3. on mouse click event , add the last element of array and show it in html
   
   delete method for later on

*/


let booksArray = [];

function getInputDetails() {
  const bookTitle = title.value
  const authorName = author.value
  const yearDetail = year.value

  const book = {
    bookTitle: bookTitle,
    authorName: authorName,
    year: yearDetail

  }

  booksArray.push(book)
}

function showBooks() {
  const lastBookDetails = booksArray.at(-1)

  const section = document.createElement('section');
  section.classList.add("book", "bookDetail")
  section.id = `book${booksArray.indexOf(lastBookDetails) + 1}`

  console.log(section.id);

  section.innerHTML = `
  <div> ${lastBookDetails.bookTitle} </div>
  <div>${lastBookDetails.authorName}</div>
  <div>${lastBookDetails.year}</div>
  `
  bookList.appendChild(section)

}


function RemoveBook() {
  const section = bookList.querySelectorAll(".bookDetail")
  section.forEach((element) => {
    element.addEventListener("dblclick", (event) => {
      const removableElement = event.target 
     bookList.removeChild(removableElement)
    })
  })
}

btn.addEventListener("click", (event) => {
  event.preventDefault()
  getInputDetails()
  showBooks()
  RemoveBook()
})

