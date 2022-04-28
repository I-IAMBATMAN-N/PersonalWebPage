/*HAMBURGER animation*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const container = document.querySelector('.container');

/*hamburger animation handler*/
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    if(navMenu.getBoundingClientRect().x !== 0){
        // container.style.display = "none";
        container.style.opacity = "0";
        container.style.transition = "0s";
    }else if(navMenu.getBoundingClientRect().x == 0){
        setTimeout(() => {
            container.style.opacity = "100%";
            container.style.transition = "2s";
        },
        400);
    }
})

/*=============================LOAD functions=============================*/
//Timers
let timer = 2000;
let projectTimer = 2000;
let contactLinksTimer = 1234;

//General
const footer = document.querySelector('footer');

/*Projects page related*/
let views = document.querySelectorAll('.view');
let viewDescriptions = document.querySelectorAll('.viewDescription');
let gitLinks = document.querySelectorAll('.git-links');

/*CONTACT page related*/
let inputs = document.querySelectorAll('input');
const contactLinks = document.querySelectorAll('.contactLink');

if(document.title.includes("roj")){
    if(screen.width > 992){
        /*=============================PROJECTS-PAGE functions=============================*/
        /*PROJECT-VIEWS hover functions*/
        /*showing view descipritons on PROJECT page after hovering PROJECT-VIEW*/
        for(let i = 0; i < views.length; i++){
            views[i].addEventListener('mouseover', function(){
                viewDescriptions[i].classList.add('showDescription');
                gitLinks[i].classList.add('showDescription');
            })
        }
        for(let i = 0; i < views.length; i++){
            views[i].addEventListener('mouseout', function(){
                viewDescriptions[i].classList.remove('showDescription');
                gitLinks[i].classList.remove('showDescription');
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
        for(let i = 0; i < inputs.length; i++){
            setTimeout(() => {
                inputs[i].style.opacity = "100";
            },
            projectTimer);
            projectTimer -= 250;
        }
    }else{
        for(let i = 0; i < views.length; i++){
            views[i].style.opacity = "100%";
        }
        footer.style.opacity = "100%";
    }
}else  if(document.title.includes("onta")){
    if(screen.width > 992){
        /*=============================CONTACT-PAGE functions=============================*/
        /*loading CONTACT FORM contact.html*/
        for(let i = 0; i < inputs.length; i++){
            setTimeout(() => {
                inputs[i].style.opacity = "100";
            },
            timer);
        }
        for(let i = 0; i < contactLinks.length; i++){
            setTimeout(() => {
                contactLinks[i].style.opacity = "100";
            },
            contactLinksTimer);
            contactLinksTimer -= 200;
        }
        setTimeout(() => {
            footer.style.opacity = "100%";
        },
        750);
        setTimeout(() => {
        document.querySelector('textarea').style.opacity = "100";
        }
        ,2800);
        setTimeout(() => {
            document.querySelector('button').style.opacity = "100";
        },
        2500);
    }else{
        for(let i = 0; i < inputs.length; i++){
            inputs[i].style.opacity = "100%";
        }
        for(let i = 0; i < contactLinks.length; i++){
            contactLinks[i].style.opacity = "100%";
        }
        document.querySelector('textarea').style.opacity = "100%";
        document.querySelector('button').style.opacity = "100%";
        footer.style.opacity = "100%";
    }
}



