const typedTextSpan = document.querySelector('.typed-text');

const cursor = document.querySelector('.cursor');

const words = ['Love', 'Super', 'Life', 'Awesome', 'Power' , 'OP'];

function type(word) {
    // adding the word in a span element and appending it to typed text 

    // adding the word letter by letter per 100 milliseconds 

    // if index == last letter then erase the word


    const WordContainer = document.createElement("span")
    typedTextSpan.appendChild(WordContainer)

    let index = 0

    const interval = setInterval(() => {
        WordContainer.innerHTML += word[index]
        index++

        if (index >= word.length) {
            clearInterval(interval)
            setTimeout(() => {
                erase(WordContainer)
            }, 500)
        }

    }, 50)
}

function erase(WordContainer) {
    const interval = setInterval(() => {
        const text = WordContainer.textContent
        if (text.length == 0) {
            clearInterval(interval)
            typedTextSpan.removeChild(WordContainer)
            setTimeout(() => {
                startNewWord()
            }, 200)
        } else {
            const text = WordContainer.textContent
            WordContainer.textContent = text.slice(0,-1)
        }



    }, 200)


}

function startNewWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    type(randomWord)
 }

function blinkCursor() { 
    cursor.classList.toggle("blink")
}

startNewWord()


/* Steps i can think of right now

1. Selecting the dom , where to print our words and , the cursor 
2. The lists of words that are going to be used 
3. a function / way to insert each word just once 
4. a function to erase that word with animation  
5. a function to start a new word
6. blink cursor 

*/

console.log("console is working");