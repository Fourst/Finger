// let mainFinger = document.querySelector(".finger__btn");
// let fingerTop = document.querySelector(".finger__top");
// let fingerLeft = document.querySelector(".finger__left");
// let fingerChat = document.querySelector(".finger__chat");

// mainFinger.addEventListener("click",function(){
//     fingerTop.style.display = "flex";
    
// });


// fingerTop.addEventListener("click",function(){
//     fingerLeft.style.display = "flex";
    
//     let castFingTop = document.querySelector(".finger__round");
//     castFingTop.style.border = "2px solid #57889c";
// });

// fingerLeft.addEventListener("click",function(){
//     fingerChat.style.display = "flex";

//     let castFingTop = document.querySelector(".finger__round-left");
//     castFingTop.style.border = "2px solid #57889c";
// });

let mainFinger = document.querySelector(".finger__btn");
let fingerTop = document.querySelector(".finger__top");
let fingerTopBtn = document.querySelectorAll(".finger__round");
let fingerLeft = document.querySelector(".finger__left");
let fingerLeftBtn = document.querySelectorAll(".finger__round-left");
let fingerChat = document.querySelector(".finger__chat");

mainFinger.addEventListener("click",function(){
    fingerTop.style.display = "flex";
    
});
fingerTopBtn.forEach.call(fingerTopBtn,function(el){
    el.addEventListener('click', function (e) { 
        el.style.border = "2px solid #57889c";
        fingerLeft.style.display = "flex";
    });
});
fingerLeftBtn.forEach.call(fingerLeftBtn,function(el){
    el.addEventListener("click",function(e){
        el.style.border = "2px solid #57889c";
        fingerChat.style.display = "flex";
    });
});

//remove message
window.addEventListener("click", windowClck);
function windowClick(){

}