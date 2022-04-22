/*RESPONSIVE NAV MENU VARIABLES*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const hider = document.querySelector(".hider");
const container = document.querySelector(".container");

let views = document.querySelectorAll('.view');

let inputs = document.querySelectorAll('input');

let viewDescriptions = document.querySelectorAll('.viewDescription');

let timer = 2000;

/*showing view descipritons on PROJECT page*/

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
/*loading views - PROJECTS page*/

for(let i = 0; i < views.length; i++){
    setTimeout(() => {
        views[i].style.opacity = "100";
    },
    timer);
    timer -= 300;
}
/*loading CONTACT FORM contact.html*/
let projectTimer = 2000;

for(let i = 0; i < inputs.length; i++){
    setTimeout(() => {
        inputs[i].style.opacity = "100";
    },
    projectTimer);
    projectTimer -= 250;
}

const contactLinks = document.querySelectorAll('.contactLink');
let contactLinksTimer = 1234;

for(let i = 0; i < contactLinks.length; i++){
    setTimeout(() => {
        contactLinks[i].style.opacity = "100";
    },
    contactLinksTimer);
    contactLinksTimer -= 200;
}

const footer = document.querySelector('footer');
setTimeout(() => {
    footer.style.opacity = "100%";
 },
 750);

setTimeout(() => {
   document.querySelector('textarea').style.opacity = "100";
},
2400);
setTimeout(() => {
    document.querySelector('button').style.opacity = "100";
 },
 2200);

/*hamburger animatiuon handler*/
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    container.classList.toggle("active-hide")
})

