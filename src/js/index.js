import jump from 'jump.js';

document.querySelector(".subfooter__to-top").addEventListener("click", ()=> {
    jump(document.body, {
        offset: -170,
        duration: 1000,
    });
})

document.querySelectorAll(".step").forEach((step, _, steps) => {
    step.addEventListener("click", (e) => {
        if(!step.classList.contains("active")) {
            steps.forEach(item => item.classList.remove("active"))
            step.classList.add("active");
        }
    })
})

const header = document.querySelector('.header');

document.querySelector(".header__burger").addEventListener("click", ()=> {
    header.classList.toggle("active");
    if(header.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    }
})

document.querySelector(".header__close").addEventListener("click", ()=> {
    header.classList.toggle("active")
    if(!header.classList.contains("active")) {
        document.body.style.overflow = "visible";
    }
})
