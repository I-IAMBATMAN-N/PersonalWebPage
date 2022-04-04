/*RESPONSIVE NAV MENU VARIABLES*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const footer = document.querySelector(".footer");
const hider = document.querySelector(".hider");
const container = document.querySelector(".container");

let views = document.querySelectorAll('.view');

let viewDescriptions = document.querySelectorAll('.viewDescription');


for(let i = 0; i < views.length; i++){
    views[i].addEventListener('mouseover', function(){
        viewDescriptions[i].classList.add('showDescription');
    })
}

for(let i = 0; i < views.length; i++){
    views[i].addEventListener('mouseout', function(){
        viewDescriptions[i].classList.remove('showDescription');
    })
}

const icon = document.querySelector(".icon");
const contactLink = document.querySelector(".contactLink"); 
const contactText = document.querySelector(".contactText");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    container.classList.toggle("active-hide")
})

contactLink.addEventListener("mouseover", () => {
    contactText.classList.toggle("visible");
    icon.classList.toggle("invisible");
    contactLink.classList.toggle("justifyCenter");
    
})
contactLink.addEventListener("mouseout", () => {
    contactText.classList.toggle("visible");
    icon.classList.toggle("invisible");
    contactLink.classList.toggle("justifyCenter");
})





