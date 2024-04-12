console.log("hey , your js code is fit and fine ")

/* Browser Events and Environment ke events  */

/* Using .onclick  */

let jpic = document.querySelector('#japan')
let imgs = document.querySelector('#images')
let google = document.querySelector('#google')
/* jpic.onclick = ()=>{
    // alert('Welcome to CodeVerse , Japan was clicked ')
    // jpic.style.scale = '2' ;
}
 */

//Mordern Way of adding Event Listener 

/* To Study more on Events : - 

1. Types 
2.TimeStamp
3.Default Prevented   
4.Target 
5.To Element
6.. srcElement 
7.Current Target
8.ClientX and clientY 
9.ScreenX , ScreenY , offset
10.Keyboard Keys 


*/

/* jpic.addEventListener('click', function (e) {
    alert('Japan was clicked ')
    console.log(e);
}, false  ) */

//Default is false 

//attachEvent() and onEvent()-> JQuery etc were also used earlier 



/* Event Propagation => Event Bubbling Event Capturing */

//Bubble floats from bottom to top 
//Capturing is from top to bottom 
//1. Code for Event bubbling 

/* imgs.addEventListener('click', () => {
    alert('Clicked inside Images')
}, false)

jpic.addEventListener('click', (e) => {
    alert('Japan was Clicked')
    e.stopPropagation();
}, false)
 */

//Code for Capturing 
/* 
imgs.addEventListener('click' , (e)=>{
    alert('Clicked inside Images');
} , true )

jpic.addEventListener('click' , ()=>{
    alert('Japan was Clicked')
} , true )
 */


/* PreventDefault */
/* 
google.addEventListener('click', function (e) {

    e.preventDefault()
    e.stopPropagation()
    console.log("Google was clicked");

}) */

/* Clcking on an image will make it disappear  */

imgs.addEventListener('click', (e) => {
    //    e.target.style.display = 'none'
    // e.target.tagName Exist
    // picRemove.remove() 
    if (e.target.tagName == 'IMG') {
        let picRemove = e.target.parentNode
        picRemove.parentNode.removeChild(picRemove);
        
    }
})
imgs.addEventListener('dblclick', (e) => {
    e.target.style.display = 'block'
    console.log(e.target);
})