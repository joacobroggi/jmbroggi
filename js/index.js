let sobreMiBtn = document.querySelectorAll('.sobreMi');
let proyectosBtn = document.querySelectorAll('.proyectos');
let conocimientosBtn = document.querySelectorAll('.servicios');
let contactoBtn = document.querySelectorAll('.contacto');

let sobreMimobile = document.getElementById('sobreMiMobile')
let proyectoMobile = document.getElementById('proyectoMobile')
let serviciosMimobile = document.getElementById('serviciosMiMobile')



let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);

sobreMimobile.addEventListener('click', function () {
    window.scroll(0,findPos(document.getElementById("sobreMobile")));
})
proyectoMobile.addEventListener('click', function () {
    window.scroll(0,findPos(document.getElementById("proyectoMobil")));
})
serviciosMimobile.addEventListener('click', function () {
    window.scroll(0,findPos(document.getElementById("habil")));
})

proyectosBtn.addEventListener('click', function () {
    window.scroll(0,findPos(document.getElementById("proyectos")));
})
sobreMiBtn.addEventListener('click', function () {
    window.scroll(0,findPos(document.getElementById("sobreMi")));
})
conocimientosBtn.addEventListener('click', function () {
    window.scroll(0,findPos(document.getElementById("flex-container-4")));
})
contactoBtn.addEventListener('click', function () {
    window.scroll(0,findPos(document.getElementById("contacto")));
})



function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}











































