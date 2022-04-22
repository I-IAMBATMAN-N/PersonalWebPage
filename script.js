/*RESPONSIVE NAV MENU VARIABLES*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const hider = document.querySelector(".hider");
const container = document.querySelector(".container");

let views = document.querySelectorAll('.view');

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
/*loading of views - */

for(let i = 0; i < views.length; i++){
    views[i].setTimeout(() => {
        views[i].getElementsByClassName.opacity = "";
    },
    timer);
    timer += 250;
}

/*hamburger animatiuon handler*/
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    container.classList.toggle("active-hide")
})

