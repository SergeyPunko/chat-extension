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
