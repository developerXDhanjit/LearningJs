/* Steps to do here
   
  1. Selecting the dom elements 
  2. Knowing the total height of the page {document.something} 
  3.Knowing the position till where scrolled {window.something}
  4. onscroll event listener and the manipulating the dom /
     increasing the width as desired 

*/


// scrollProgress.style.width = "100%"  this is how it will work 

window.addEventListener("scroll", (event) => {
    let scrollProgress = document.querySelector(".progress")
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight 

    //window.innerHeight is used here to neglect the amount of things we can view without scrolling 

    //maxScroll gives us the maximum amount of y axis scroll possible 



    let scrollPercentage = (window.pageYOffset / maxScroll ) * 100 
    
    //we get the required percentage here 


    scrollProgress.style.width = `${scrollPercentage}%`

    // just adding the final styles here !
})

