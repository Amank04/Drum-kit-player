
var noOfDrum = document.querySelectorAll(".drum").length;


//For producing sound on click on different button only.
var j=0;
while(j < noOfDrum) {
   document.querySelectorAll(".drum")[j].addEventListener("click", function() {
        let buttonInnerHtml=this.innerHTML;
         
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
    j++;
}


//For producing sound on pressing specified buttons for the whole screen. ***That's why, loop is NOT used here.
document.addEventListener("keydown", function(event) {
        let buttonInnerHtml=event.key;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
   })


//Method producing sound common for both "click" as well "press key".
function makeSound(buttonInnerHtml) {

    switch(buttonInnerHtml) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a" :
            var tom2=new Audio("sounds/tom-2.mp3");    
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var tom5=new Audio("sounds/tom-5.mp3");
            tom5.play();
            break;
        case "k":
            var tom6=new Audio("sounds/tom-6.mp3");
            tom6.play();
            break;
        case "l":
            var tom7=new Audio("sounds/tom-7.mp3");   
            tom7.play();
            break;
        default: alert(buttonInnerHtml + " is invalid button. Please press right button.");
     }
}

function buttonAnimation(buttonInnerHtml) {
    var activebutton = document.querySelector("." + buttonInnerHtml);
    activebutton.classList.add("drums");   //change 'drums' with 'pressed', animation will change.

    setTimeout(function() {activebutton.classList.remove("drums")}, 100);//change 'drums' with 'pressed', animation will change.


}


